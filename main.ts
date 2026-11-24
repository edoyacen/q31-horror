// This entry writes the answer for the "Two-Sentence Horror" bounty to the
// output directory as entry.txt, using only the Node.js standard library.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "The babysitter checked the monitor: all three children were asleep and the house was quiet. Then the app added a fourth camera, and it was inside her own eye.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
