#!/usr/bin/env node
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { existsSync, mkdirSync, readdirSync, copyFileSync, rmSync, readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { createInterface } from 'node:readline/promises';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const targets = {
  claude: { project: '.claude/skills', global: '.claude/skills' },
  codex: { project: '.agents/skills', global: '.agents/skills' },
  antigravity: { project: '.agents/skills', global: '.gemini/config/skills' },
};
const skills = ['pragmatic-code', 'pragmatic-review'];

function readOptions(args) {
  const options = { scope: 'project', dir: process.cwd(), force: false };
  const values = new Set(['agent', 'dir', 'scope']);

  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg === '--force') {
      options.force = true;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg.startsWith('--') && values.has(arg.slice(2))) {
      const value = args[++index];
      if (!value || value.startsWith('--')) throw new Error('Missing value for ' + arg);
      options[arg.slice(2)] = value;
    } else {
      throw new Error('Unknown argument: ' + arg);
    }
  }
  return options;
}

function showHelp() {
  console.log(`Pragmatic Agent

Usage:
  npx pragmatic-agent [--agent claude|codex|antigravity] [--dir PATH] [--scope project|global] [--force]
  npx pragmatic-agent --help

Installs pragmatic-code and pragmatic-review in the selected agent's skills directory.`);
}

function copyDirectory(source, destination) {
  mkdirSync(destination, { recursive: true });

  for (const entry of readdirSync(source, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) throw new Error('Skill bundles cannot contain symlinks.');

    const from = resolve(source, entry.name);
    const to = resolve(destination, entry.name);
    if (entry.isDirectory()) copyDirectory(from, to);
    else if (entry.isFile()) copyFileSync(from, to);
  }
}

function matches(source, destination) {
  if (!existsSync(destination)) return false;
  const bundled = readdirSync(source, { withFileTypes: true });
  const installed = readdirSync(destination, { withFileTypes: true });
  if (bundled.length !== installed.length) return false;

  return bundled.every(entry => {
    const counterpart = installed.find(item => item.name === entry.name);
    if (!counterpart || entry.isDirectory() !== counterpart.isDirectory()) return false;
    const from = resolve(source, entry.name);
    const to = resolve(destination, entry.name);
    if (entry.isDirectory()) return matches(from, to);
    return entry.isFile() && counterpart.isFile() && readFileSync(from).equals(readFileSync(to));
  });
}

async function selectAgent() {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error('Specify --agent when running without an interactive terminal.');
  }

  const prompt = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const choice = (await prompt.question('Agent (1 Claude Code, 2 Codex, 3 Antigravity): ')).trim();
    return { '1': 'claude', '2': 'codex', '3': 'antigravity' }[choice];
  } finally {
    prompt.close();
  }
}

async function main() {
  const options = readOptions(process.argv.slice(2));
  if (options.help) return showHelp();

  const agent = options.agent ?? await selectAgent();
  if (!targets[agent]) throw new Error('Agent must be claude, codex, or antigravity.');
  if (!['project', 'global'].includes(options.scope)) {
    throw new Error('Scope must be project or global.');
  }

  const base = options.scope === 'global' ? homedir() : resolve(options.dir);
  const destination = resolve(base, targets[agent][options.scope]);

  const installations = skills.map(name => {
    const source = resolve(root, 'skills', name);
    const target = resolve(destination, name);
    if (!existsSync(source)) throw new Error('Missing bundled skill: ' + name);
    return { name, source, target, current: matches(source, target) };
  });

  const conflicts = installations.filter(item => existsSync(item.target) && !item.current);
  if (conflicts.length && !options.force) {
    throw new Error('Modified skills: ' + conflicts.map(item => item.name).join(', ') + '. Use --force to replace.');
  }

  for (const item of installations) {
    if (item.current) {
      console.log('Already installed: ' + item.name);
      continue;
    }
    if (existsSync(item.target)) rmSync(item.target, { recursive: true });
    copyDirectory(item.source, item.target);
    console.log('Installed: ' + item.name);
  }

  console.log('Skills directory: ' + destination);
  console.log('Start a new agent session to load the skills.');
}

main().catch(error => {
  console.error('Error: ' + error.message);
  process.exitCode = 1;
});
