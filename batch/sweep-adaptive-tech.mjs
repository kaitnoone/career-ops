#!/usr/bin/env node
// One-off sweep to remove adaptive-technology-partners overclaim across all tailored CVs and cover letters.
// Run from career-ops/. Idempotent — safe to re-run.

import { readFile, writeFile, readdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, '../output');

const CANONICAL_BULLET = '<li>Contributed to an early accessibility audit of the client subscription widget.</li>';

// Match any <li>...</li> that contains both "accessibility audit" and "adaptive" (case insensitive).
// Also matches the "Led accessibility audit" overclaim variant.
const LI_PATTERN = /<li>[^<]*(?:accessibility audit|audit and improvement)[^<]*adaptive[^<]*<\/li>/gi;

// Skills-line cleanup: "adaptive-technology partnership," (with trailing comma+space) inside any <p> tag.
const SKILLS_PHRASE = /, ?adaptive-technology partnership/gi;

async function processFile(path) {
  const original = await readFile(path, 'utf-8');
  let updated = original;
  let bulletReplacements = 0;
  let skillsReplacements = 0;

  updated = updated.replace(LI_PATTERN, () => {
    bulletReplacements++;
    return CANONICAL_BULLET;
  });

  updated = updated.replace(SKILLS_PHRASE, () => {
    skillsReplacements++;
    return '';
  });

  if (updated !== original) {
    await writeFile(path, updated);
    return { path, bulletReplacements, skillsReplacements };
  }
  return null;
}

async function main() {
  const entries = await readdir(outputDir);
  const targets = entries.filter(f =>
    (f.startsWith('cv-') || f.startsWith('cover-') || f.startsWith('081-') || f.startsWith('080-') || f.startsWith('084-'))
    && f.endsWith('.html')
  );

  const results = [];
  for (const file of targets) {
    const result = await processFile(resolve(outputDir, file));
    if (result) results.push(result);
  }

  console.log(`Processed ${results.length} files:`);
  for (const r of results) {
    console.log(`  ${r.path.split('/').pop()} — bullet: ${r.bulletReplacements}, skills: ${r.skillsReplacements}`);
  }
}

main().catch(err => {
  console.error('Sweep failed:', err.message);
  process.exit(1);
});
