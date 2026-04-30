#!/usr/bin/env node
// Drop the Recharge subscription-widget accessibility-audit bullet from all tailored CVs.
// Per Kaitlyn 2026-04-28: she barely remembers the contribution; not defensible in interview.

import { readFile, writeFile, readdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, '../output');

// Match the entire <li> line (with optional surrounding whitespace and newline) so the bullet disappears cleanly.
const BULLET_PATTERN = /^\s*<li>Contributed to an early accessibility audit of the client subscription widget\.<\/li>\s*\n/gm;

async function processFile(path) {
  const original = await readFile(path, 'utf-8');
  let dropped = 0;
  const updated = original.replace(BULLET_PATTERN, () => { dropped++; return ''; });

  if (dropped > 0) {
    await writeFile(path, updated);
    return { path, dropped };
  }
  return null;
}

async function main() {
  const entries = await readdir(outputDir);
  const targets = entries.filter(f =>
    (f.startsWith('cv-') || f.startsWith('081-') || f.startsWith('080-') || f.startsWith('084-'))
    && f.endsWith('.html')
  );

  const results = [];
  for (const file of targets) {
    const result = await processFile(resolve(outputDir, file));
    if (result) results.push(result);
  }

  console.log(`Dropped audit bullet from ${results.length} files:`);
  for (const r of results) {
    console.log(`  ${r.path.split('/').pop()} — dropped ${r.dropped}`);
  }
}

main().catch(err => {
  console.error('Sweep failed:', err.message);
  process.exit(1);
});
