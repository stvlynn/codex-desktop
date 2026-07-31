#!/usr/bin/env bun
import * as fs from "node:fs";

const lines = fs
  .readFileSync("restored/boundaries/workbook-runtime/index.ts", "utf8")
  .split("\n");

function extractRefs(start: number, end: number, selfName: string) {
  const body = lines.slice(start - 1, end).join("\n");
  const re = /\b([A-Za-z_$][\w$]*)\b/g;
  const counts = new Map<string, number>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(body))) {
    const n = m[1]!;
    counts.set(n, (counts.get(n) ?? 0) + 1);
  }
  const skip = new Set([
    selfName,
    "let",
    "const",
    "var",
    "function",
    "return",
    "if",
    "else",
    "for",
    "of",
    "in",
    "new",
    "true",
    "false",
    "null",
    "undefined",
    "typeof",
    "switch",
    "case",
    "break",
    "continue",
    "default",
    "throw",
    "try",
    "catch",
    "finally",
    "async",
    "await",
    "this",
    "void",
    "Math",
    "Number",
    "String",
    "Array",
    "Object",
    "Map",
    "Set",
    "Error",
    "Promise",
    "console",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "JSON",
    "item",
    "index",
    "accumulator",
    "current",
    "_index",
    "_item",
    "group",
    "side",
    "type",
    "x",
    "y",
    "width",
    "height",
    "length",
    "push",
    "map",
    "forEach",
    "reduce",
    "filter",
    "find",
    "some",
    "every",
    "has",
    "get",
    "set",
    "keys",
    "values",
    "entries",
    "min",
    "max",
    "abs",
    "floor",
    "ceil",
    "round",
    "PI",
    "sin",
    "cos",
    "atan2",
    "sqrt",
    "pow",
    "sign",
  ]);
  const interesting = [...counts.entries()]
    .filter(([n]) => !skip.has(n))
    .filter(
      ([n]) =>
        /^(workbook|_|[A-Z]|Cn$|appInitial|presentation)/.test(n) ||
        /^[a-z][A-Z]/.test(n) ||
        n.startsWith("$") ||
        n.length <= 4,
    )
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  console.log(`\n=== ${selfName} L${start}-L${end} ===`);
  for (const [n, c] of interesting.slice(0, 50)) {
    console.log(`  ${String(c).padStart(3)} ${n}`);
  }
}

extractRefs(10282, 10535, "Dbe");
extractRefs(10546, 10811, "workbookHelper501");
extractRefs(12845, 13112, "Txe");
extractRefs(14413, 14692, "Xxe");

// Who owns the Xxe caller?
console.log("\n--- function containing Xxe call ---");
for (let i = 15850; i >= 15700; i--) {
  if (/^function /.test(lines[i]!)) {
    console.log(`${i + 1}: ${lines[i]!.slice(0, 120)}`);
    break;
  }
}
