#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { existsSync, mkdirSync, readdirSync, copyFileSync, rmSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { createInterface } from 'node:readline/promises';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const supported = {
  claude: { project: '.claude/skills', global: '.claude/skills' },
  codex: { project: '.agents/skills', global: '.agents/skills' },
  antigravity: { project: '.agents/skills', global: '.gemini/config/skills' },
};
const names = ['pragmatic-code', 'pragmatic-review'];
const args = process.argv.slice(2);
function option(name, fallback) {
  const index = args.indexOf('--' + name);
  if (index < 0) return fallback;
  if (!args[index + 1] || args[index + 1].startsWith('--')) throw new Error('Missing value for --' + name);
  return args[index + 1];
}
function help() {
  console.log(`Pragmatic Agent — install two coding skills

Usage:
  npx pragmatic-agent [--agent claude|codex|antigravity] [--dir PATH] [--scope project|global] [--force]
  npx pragmatic-agent --help

Installs pragmatic-code (execution) and pragmatic-review (planning/review).
Run without --agent in an interactive terminal to choose the target.`);
}
function copyDirectory(src, dst) {
  mkdirSync(dst, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) throw new Error('Symlinks are not supported.');
    const from = resolve(src, entry.name), to = resolve(dst, entry.name);
    if (entry.isDirectory()) copyDirectory(from, to);
    else if (entry.isFile()) copyFileSync(from, to);
  }
}
function sameDirectory(src, dst) {
  if (!existsSync(dst)) return false;
  const a = readdirSync(src, { withFileTypes: true });
  const b = readdirSync(dst, { withFileTypes: true });
  if (a.length !== b.length) return false;
  return a.every(entry => {
    const other = b.find(x => x.name === entry.name);
    if (!other || entry.isDirectory() !== other.isDirectory() || (!entry.isDirectory() && !entry.isFile())) return false;
    const s = resolve(src, entry.name), d = resolve(dst, entry.name);
    return entry.isDirectory() ? sameDirectory(s, d) : readFileSync(s).equals(readFileSync(d));
  });
}
async function main() {
  if (args.includes('--help') || args.includes('-h')) { help(); return; }
  if (args.some(a => !a.startsWith('--') && !['claude', 'codex', 'antigravity'].includes(a) && !['project', 'global'].includes(a) && a !== option('dir', null))) {
    throw new Error('Unknown argument. Use --help for usage.');
  }
  let agent = option('agent');
  if (!agent) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) throw new Error('Non-interactive terminal: specify --agent claude|codex|antigravity.');
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    try {
      const answer = (await rl.question('Install for: 1) Claude Code  2) Codex  3) Antigravity [1-3]: ')).trim();
      agent = ({ '1': 'claude', '2': 'codex', '3': 'antigravity' })[answer];
    } finally { rl.close(); }
  }
  if (!supported[agent]) throw new Error('Choose claude, codex, or antigravity.');
  const scope = option('scope', 'project');
  if (!['project', 'global'].includes(scope)) throw new Error('Scope must be project or global.');
  const base = scope === 'global' ? homedir() : resolve(option('dir', process.cwd()));
  const target = resolve(base, supported[agent][scope]);
  const status = names.map(name => {
    const source = resolve(root, 'skills', name), dest = resolve(target, name);
    if (!existsSync(source)) throw new Error('Package is missing skill: ' + name);
    return { name, source, dest, exists: existsSync(dest), matches: sameDirectory(source, dest) };
  });
  const conflicts = status.filter(item => item.exists && !item.matches);
  if (conflicts.length && !args.includes('--force')) throw new Error('Existing skills differ: ' + conflicts.map(x => x.name).join(', ') + '. Use --force to replace.');
  for (const item of status) {
    if (item.matches) { console.log('Already installed: ' + item.name); continue; }
    if (item.exists) rmSync(item.dest, { recursive: true, force: true });
    copyDirectory(item.source, item.dest);
    console.log('Installed: ' + item.name);
  }
  console.log('Directory: ' + target);
  console.log('Restart your agent session to load the skills.');
}
main().catch(error => { console.error('Error: ' + error.message); process.exitCode = 1; });
