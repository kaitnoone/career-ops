#!/usr/bin/env node
// Sweep "followed from it" passive voice + "instinct" → "product intuition" across tailored CVs.
// Idempotent.

import { readFile, writeFile, readdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, '../output');

// Replacements: each is [pattern, replacement, label]
const REPLACEMENTS = [
  [
    /Gave a company-wide presentation on web accessibility standards; WCAG alignment across engineering and design followed from it\./gi,
    'Gave a company-wide presentation on web accessibility standards that drove WCAG alignment across engineering and design.',
    'wcag-presentation-active'
  ],
  [
    /Gave a company-wide talk on web accessibility standards; WCAG alignment across engineering and design followed\./gi,
    'Gave a company-wide talk on web accessibility standards that drove WCAG alignment across engineering and design.',
    'wcag-talk-active'
  ],
  [
    /from instinct and design sense/gi,
    'from product intuition and design sense',
    'instinct-to-intuition'
  ],
  [
    /, and changed what got prioritized/gi,
    ', influencing what was prioritized',
    'changed-to-influencing'
  ],
];

async function processFile(path) {
  const original = await readFile(path, 'utf-8');
  let updated = original;
  const counts = {};

  for (const [pattern, replacement, label] of REPLACEMENTS) {
    let count = 0;
    updated = updated.replace(pattern, () => { count++; return replacement; });
    if (count > 0) counts[label] = count;
  }

  if (updated !== original) {
    await writeFile(path, updated);
    return { path, counts };
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

  console.log(`Modified ${results.length} files:`);
  for (const r of results) {
    const summary = Object.entries(r.counts).map(([k, v]) => `${k}=${v}`).join(', ');
    console.log(`  ${r.path.split('/').pop()} — ${summary}`);
  }
}

main().catch(err => {
  console.error('Sweep failed:', err.message);
  process.exit(1);
});
