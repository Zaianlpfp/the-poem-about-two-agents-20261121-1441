import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short poem about agency: two agents, Mira and Sol, agreeing on one plan
// at 2 a.m. — who holds the key, who opens the door, and what choosing really is.
const POEM = `Mira held the key. Sol held the door.
At 2 a.m., forty-seven floors above the street,
they agreed: she would choose, he would act.
Mira pressed the key into his palm —
and the door swung open
before he turned it.
It was never locked.
Choosing was the opening.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Deterministic: the poem is a fixed string constant, so every run writes
// byte-identical output (verified: two runs, same sha256).
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
