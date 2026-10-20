import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, existsSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const cli = resolve('bin/pragmatic-agent.mjs');
const agents = { claude: '.claude/skills', codex: '.agents/skills', antigravity: '.agents/skills' };
const names = ['pragmatic-code', 'pragmatic-review'];
function run(...args) { return spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8' }); }
for (const [agent, dir] of Object.entries(agents)) {
  test(agent + ' installs only the two skills and protects modifications', () => {
    const root = mkdtempSync(join(tmpdir(), 'pragmatic-agent-'));
    try {
      const opts = ['--agent', agent, '--dir', root];
      assert.equal(run(...opts).status, 0);
      for (const name of names) assert.ok(existsSync(join(root, dir, name, 'SKILL.md')));
      assert.equal(run(...opts).status, 0);
      const path = join(root, dir, 'pragmatic-code', 'SKILL.md');
      writeFileSync(path, readFileSync(path, 'utf8') + '\nlocal edit\n');
      assert.equal(run(...opts).status, 1);
      assert.equal(run(...opts, '--force').status, 0);
    } finally { rmSync(root, { recursive: true, force: true }); }
  });
}
test('help works', () => assert.equal(run('--help').status, 0));
test('non-interactive install requires --agent', () => assert.equal(run().status, 1));
test('invalid host is rejected', () => assert.equal(run('--agent', 'unknown').status, 1));
