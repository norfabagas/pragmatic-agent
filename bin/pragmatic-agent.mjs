#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { existsSync, mkdirSync, readdirSync, copyFileSync, rmSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const supported = {
  claude: { project: '.claude/skills', global: '.claude/skills' },
  codex: { project: '.agents/skills', global: '.agents/skills' },
  antigravity: { project: '.agents/skills', global: '.gemini/config/skills' },
};
const names = ['pragmatic-code', 'pragmatic-review'];
const args = process.argv.slice(2);
const command = args[0] || 'help';
function fail(message) { console.error(message); process.exitCode = 1; }
function help() {
  console.log(`Pragmatic Agent
Usage:
  pragmatic-agent install --agent claude|codex|antigravity [--scope project|global] [--dir PATH] [--force]
  pragmatic-agent doctor --agent claude|codex|antigravity [--scope project|global] [--dir PATH]
  pragmatic-agent uninstall --agent claude|codex|antigravity [--scope project|global] [--dir PATH]
  pragmatic-agent help

Default scope: project. Project directory defaults to the current working directory.
Install refuses to overwrite existing skills unless --force is given.
Uninstall removes only skills whose content matches the bundled version.`);
}
function option(name, fallback) { const index = args.indexOf('--' + name); return index < 0 ? fallback : args[index + 1]; }
function destination() {
  const agent = option('agent');
  const scope = option('scope', 'project');
  if (!supported[agent]) throw new Error('Specify --agent claude, codex, or antigravity.');
  if (!['project', 'global'].includes(scope)) throw new Error('Scope must be project or global.');
  const base = scope === 'global' ? homedir() : resolve(option('dir', process.cwd()));
  return resolve(base, supported[agent][scope]);
}
function copyDirectory(src, dst) {
  mkdirSync(dst, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) throw new Error('Symlinks are not supported in skill bundles.');
    if (entry.isDirectory()) copyDirectory(resolve(src, entry.name), resolve(dst, entry.name));
    else if (entry.isFile()) copyFileSync(resolve(src, entry.name), resolve(dst, entry.name));
  }
}
function sameDirectory(src, dst) {
  if (!existsSync(dst)) return false;
  const a = readdirSync(src, { withFileTypes: true });
  const b = readdirSync(dst, { withFileTypes: true });
  if (a.length !== b.length) return false;
  return a.every(entry => {
    const other = b.find(x => x.name === entry.name);
    if (!other || entry.isDirectory() !== other.isDirectory() || !entry.isFile() && !entry.isDirectory()) return false;
    const s = resolve(src, entry.name), d = resolve(dst, entry.name);
    return entry.isDirectory() ? sameDirectory(s, d) : readFileSync(s).equals(readFileSync(d));
  });
}
try {
  if (command === 'help' || args.includes('--help')) help();
  else if (!['install', 'doctor', 'uninstall'].includes(command)) { help(); fail('Unknown command: ' + command); }
  else {
    const target = destination();
    const status = names.map(name => {
      const source = resolve(root, 'skills', name), dest = resolve(target, name);
      if (!existsSync(source)) throw new Error('Missing bundled skill: ' + name);
      return { name, source, dest, exists: existsSync(dest), matches: sameDirectory(source, dest) };
    });
    if (command === 'install') {
      const conflicts = status.filter(x => x.exists && !x.matches);
      if (conflicts.length && !args.includes('--force')) throw new Error('Existing skills differ: ' + conflicts.map(x => x.name).join(', ') + '. Use --force to replace.');
      for (const item of status) {
        if (item.matches) continue;
        if (item.exists) rmSync(item.dest, { recursive: true, force: true });
        copyDirectory(item.source, item.dest);
        console.log('Installed ' + item.name);
      }
      console.log('Skills directory: ' + target);
    } else if (command === 'doctor') {
      for (const item of status) console.log(item.name + ': ' + (item.matches ? 'installed' : item.exists ? 'modified' : 'missing'));
      console.log('Skills directory: ' + target);
      if (status.some(x => !x.matches)) process.exitCode = 1;
    } else {
      const modified = status.filter(x => x.exists && !x.matches);
      if (modified.length) throw new Error('Refusing to remove modified skills: ' + modified.map(x => x.name).join(', '));
      for (const item of status.filter(x => x.matches)) { rmSync(item.dest, { recursive: true }); console.log('Removed ' + item.name); }
    }
  }
} catch (error) { fail(error.message); }
