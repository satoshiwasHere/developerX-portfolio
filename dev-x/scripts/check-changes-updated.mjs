#!/usr/bin/env node
/**
 * Pre-commit hook: require that the `changes` file is staged in the commit.
 * - Fails the commit if `changes` is not staged.
 * - Allows bypass with CHANGES_BYPASS=1 env var.
 */

import { execSync } from 'node:child_process';

const BYPASS = process.env.CHANGES_BYPASS === '1';

if (BYPASS) {
  process.exit(0);
}

try {
  // Ensure we're in a git repo
  execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });

  // Get staged files
  const staged = execSync('git diff --cached --name-only', { encoding: 'utf8' })
    .split('\n')
    .filter(Boolean);

  const hasChangesFile = staged.some(p => p === 'changes');

  if (!hasChangesFile) {
    console.error(
      '\n✖ Commit aborted: You must update and stage the `changes` file describing your modifications.\n' +
        '  - Add an entry with `npm run changes:add` and stage the file.\n' +
        '  - Or bypass (not recommended) using CHANGES_BYPASS=1 git commit ...\n'
    );
    process.exit(1);
  }
} catch (err) {
  console.error('Pre-commit check failed unexpectedly:', err?.message || err);
  process.exit(1);
}
