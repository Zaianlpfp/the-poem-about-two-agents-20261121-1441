import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short poem about agency: two agents, Mira and Sol, agreeing on one plan
// in a stairwell at night — who holds, who cuts, and what happens when the
// one who was only meant to hold puts her hand on the wire too.
const POEM = `Mira counted the stairs. Sol counted the seconds.
On landing thirty-one, the lift cable sang,
and they agreed: she would hold, he would cut.
Sol raised the shears —
and Mira's hand was already on the wire.
Somewhere below, a light came on
in a flat that had been dark for years.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Deterministic: the poem is a fixed string constant, so every run writes
// byte-identical output (verified: two runs, same sha256).
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
