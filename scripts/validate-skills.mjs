import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(new URL('..', import.meta.url).pathname);
const skillsDir = join(root, 'skills');
const ruleFile = readFileSync(join(root, 'principles', 'core-rules.md'), 'utf8');
const ids = [...ruleFile.matchAll(/\| (PA-\d{2}) \|/g)].map((m) => m[1]);
const errors = [];

if (ids.length !== 20 || new Set(ids).size !== 20) errors.push('Expected 20 unique PA rule IDs.');

for (const dir of readdirSync(skillsDir, { withFileTypes: true }).filter((d) => d.isDirectory())) {
  const file = join(skillsDir, dir.name, 'SKILL.md');
  if (!existsSync(file)) { errors.push(`Missing ${dir.name}/SKILL.md`); continue; }
  const content = readFileSync(file, 'utf8');
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontmatter) { errors.push(`Missing frontmatter in ${dir.name}`); continue; }
  if (!frontmatter[1].split('\n').some((l) => l === `name: ${dir.name}`)) errors.push(`Skill name mismatch: ${dir.name}`);
  if (!frontmatter[1].split('\n').some((l) => l.startsWith('description: '))) errors.push(`Missing description: ${dir.name}`);
}
if (errors.length) { for (const error of errors) console.error(error); process.exitCode = 1; }
else console.log(`Validated ${readdirSync(skillsDir).length} skills and ${ids.length} canonical rules.`);
