#!/usr/bin/env node
/**
 * Append a templated entry to the `changes` file.
 *
 * Usage:
 *   npm run changes:add -- "Summary of change" "affected/path1, affected/path2"
 *
 * If no args are provided, placeholder text will be used.
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const changesPath = path.join(root, 'changes');

const [,, summaryArg, pathsArg] = process.argv;

function formatTimestamp(d = new Date()) {
  const pad = n => String(n).padStart(2, '0');
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const min = pad(d.getMinutes());
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

const timestamp = formatTimestamp();
const summary = summaryArg || 'Describe the change here';
const affected = pathsArg || 'List affected paths here';

const entry = `## ${timestamp} — ${summary} — ${affected}\n- Detail: Add more context about what changed and why.\n\n`;

if (!fs.existsSync(changesPath)) {
  // Seed a new changes file with header and our first entry
  const header = `# Change Log\n\nThis document tracks all changes and features added to the DeveloperX Portfolio project.\n\n- Entry format: YYYY-MM-DD HH:MM (local) — Summary — Affected paths\n- Keep newest entries at the top.\n\n`;
  fs.writeFileSync(changesPath, header + entry, 'utf8');
  console.log('Created new `changes` file with initial entry.');
  process.exit(0);
}

const original = fs.readFileSync(changesPath, 'utf8');
const lines = original.split(/\r?\n/);

// Find the index of the first entry heading (line starting with '## ')
let firstEntryIdx = lines.findIndex(l => l.startsWith('## '));
if (firstEntryIdx === -1) {
  // No previous entries; append after header
  const updated = original + (original.endsWith('\n') ? '' : '\n') + entry;
  fs.writeFileSync(changesPath, updated, 'utf8');
  console.log('Appended first entry to `changes`.');
  process.exit(0);
}

// Insert the new entry before the first existing entry
const before = lines.slice(0, firstEntryIdx).join('\n');
const after = lines.slice(firstEntryIdx).join('\n');
const updated = `${before}${before.endsWith('\n') ? '' : '\n'}${entry}${after.startsWith('\n') ? after : '\n' + after}`;
fs.writeFileSync(changesPath, updated, 'utf8');
console.log('Prepended new entry to `changes`.');
