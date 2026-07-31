#!/usr/bin/env bun
import * as fs from "node:fs";

const lines = fs
  .readFileSync("restored/boundaries/workbook-runtime/index.ts", "utf8")
  .split("\n");

function sizeOf(startLine: number) {
  let depth = 0;
  let seen = false;
  const start = startLine - 1;
  for (let j = start; j < lines.length; j++) {
    for (const ch of lines[j]!) {
      if (ch === "{") {
        depth++;
        seen = true;
      } else if (ch === "}") depth--;
    }
    if (seen && depth <= 0) return { end: j + 1, size: j - start + 1 };
  }
  return { end: lines.length, size: lines.length - start };
}

function findFn(name: string) {
  const re = new RegExp(`^(async )?function ${name}\\b|^var ${name}[, ]`);
  for (let i = 0; i < lines.length; i++) {
    if (re.test(lines[i]!)) return i + 1;
  }
  return null;
}

const names = [
  "Cbe",
  "hbe",
  "Tbe",
  "Dbe",
  "Txe",
  "ECe",
  "OCe",
  "jCe",
  "yxe",
  "pCe",
  "gCe",
  "sCe",
  "txe",
  "nCe",
  "aCe",
  "RCe",
  "vCe",
  "Kye",
  "DSe",
  "Yye",
  "KSe",
  "BSe",
  "wSe",
  "workbookHelper501",
  "Xxe",
  "rze",
  "kht",
  "ODe",
  "Uft",
  "Fwe",
  "workbookHelper561",
  "workbookHelper540",
  "workbookHelper525",
];

for (const n of names) {
  const s = findFn(n);
  if (!s) {
    console.log("MISS", n);
    continue;
  }
  const { end, size } = sizeOf(s);
  console.log(`${String(size).padStart(5)} ${n.padEnd(22)} L${s}-L${end}`);
}

console.log("\n--- caller context helper501 @12701 ---");
for (let i = 12670; i < 12740; i++) console.log(`${i + 1}: ${lines[i]!.slice(0, 120)}`);

console.log("\n--- caller context Xxe @15967 ---");
for (let i = 15920; i < 16020; i++) console.log(`${i + 1}: ${lines[i]!.slice(0, 120)}`);

console.log("\n--- what's between Dbe and helper501 ---");
for (let i = 10535; i < 10550; i++) console.log(`${i + 1}: ${lines[i]!.slice(0, 100)}`);
