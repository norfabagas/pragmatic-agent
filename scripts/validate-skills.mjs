import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(root, 'skills');
const rules = readFileSync(join(root, 'principles/core-rules.md'), 'utf8');
const ids = [...rules.matchAll(/^\| (PA-\d{2}) \|/gm)].map(m => m[1]);
const errors = [];
if (ids.length !== 20 || new Set(ids).size !== 20) errors.push('Expected 20 unique PA rules.');
const dirs = readdirSync(skillsDir, { withFileTypes: true }).filter(d => d.isDirectory());
for (const dir of dirs) {
  const path = join(skillsDir, dir.name, 'SKILL.md');
  if (!existsSync(path)) { errors.push('Missing ' + path); continue; }
  const body = readFileSync(path, 'utf8');
  const fm = body.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm || !fm[1].split('\n').includes('name: ' + dir.name) || !fm[1].split('\n').some(line => line.startsWith('description: '))) errors.push('Invalid skill metadata: ' + dir.name);
}
if (dirs.length !== 4) errors.push('Expected four skill bundles.');
if (errors.length) { errors.forEach(e => console.error(e)); process.exitCode = 1; }
else console.log('Validated ' + dirs.length + ' skills and ' + ids.length + ' rules.');
