import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, existsSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const cli = resolve('bin/pragmatic-agent.mjs');
const locations = {
  claude: '.claude/skills',
  codex: '.agents/skills',
  antigravity: '.agents/skills',
};
const skills = ['pragmatic-code', 'pragmatic-review'];

function run(...args) {
  return spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8' });
}

for (const [agent, directory] of Object.entries(locations)) {
  test(agent + ': install and preserve modified files', () => {
    const project = mkdtempSync(join(tmpdir(), 'pragmatic-agent-'));
    try {
      const args = ['--agent', agent, '--dir', project];
      assert.equal(run(...args).status, 0);
      for (const name of skills) {
        assert.ok(existsSync(join(project, directory, name, 'SKILL.md')));
      }
      assert.equal(run(...args).status, 0);

      const file = join(project, directory, 'pragmatic-code', 'SKILL.md');
      writeFileSync(file, readFileSync(file, 'utf8') + '\nlocal change\n');
      assert.equal(run(...args).status, 1);
      assert.equal(run(...args, '--force').status, 0);
    } finally {
      rmSync(project, { recursive: true, force: true });
    }
  });
}

test('prints usage', () => assert.equal(run('--help').status, 0));
test('requires an agent without a terminal', () => assert.equal(run().status, 1));
test('rejects an unknown agent', () => assert.equal(run('--agent', 'unknown').status, 1));
test('rejects unexpected arguments', () => assert.equal(run('install', '--agent', 'codex').status, 1));
test('rejects missing option values', () => assert.equal(run('--agent').status, 1));
