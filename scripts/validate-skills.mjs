import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skillNames = ['pragmatic-code', 'pragmatic-review'];
const errors = [];

const rules = readFileSync(join(root, 'principles/core-rules.md'), 'utf8');
const ruleIds = [...rules.matchAll(/^\| (PA-\d{2}) \|/gm)].map(match => match[1]);
if (ruleIds.length !== 20 || new Set(ruleIds).size !== 20) {
  errors.push('Expected 20 unique PA rules.');
}

const installedNames = readdirSync(join(root, 'skills'), { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name);
if (installedNames.length !== skillNames.length ||
    !skillNames.every(name => installedNames.includes(name))) {
  errors.push('Expected pragmatic-code and pragmatic-review only.');
}

for (const name of skillNames) {
  let body;
  try {
    body = readFileSync(join(root, 'skills', name, 'SKILL.md'), 'utf8');
  } catch {
    errors.push('Missing SKILL.md for ' + name);
    continue;
  }

  const metadata = body.match(/^---\n([\s\S]*?)\n---\n/)?.[1]?.split('\n') ?? [];
  if (!metadata.includes('name: ' + name) ||
      !metadata.some(line => line.startsWith('description: ') && line.length > 13)) {
    errors.push('Invalid skill metadata: ' + name);
  }
}

if (errors.length) {
  for (const error of errors) console.error(error);
  process.exitCode = 1;
} else {
  console.log('Validated ' + skillNames.length + ' skills and ' + ruleIds.length + ' rules.');
}
