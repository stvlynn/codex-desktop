#!/usr/bin/env bun
/**
 * Wave-94 peel feasibility scan for helper462 / helper616 / workbookA / vEe.
 */
import * as fs from "node:fs";

const lines = fs
  .readFileSync("restored/boundaries/workbook-runtime/index.ts", "utf8")
  .split("\n");

function findBodyStart(startIdx: number): number {
  let paren = 0;
  let started = false;
  for (let i = startIdx; i < Math.min(startIdx + 40, lines.length); i++) {
    const line = lines[i]!;
    for (let j = 0; j < line.length; j++) {
      const ch = line[j]!;
      if (ch === "(") {
        paren++;
        started = true;
      } else if (ch === ")") {
        paren--;
        if (started && paren === 0) {
          if (line.slice(j + 1).includes("{")) return i;
          for (let k = i + 1; k < Math.min(i + 5, lines.length); k++) {
            if (lines[k]!.includes("{")) return k;
            if (lines[k]!.trim() && !lines[k]!.trim().startsWith("//")) break;
          }
        }
      }
    }
  }
  return startIdx;
}

function findFnEnd(startIdx: number): number {
  const bodyStart = findBodyStart(startIdx);
  let depth = 0;
  let seen = false;
  for (let i = bodyStart; i < lines.length; i++) {
    for (const ch of lines[i]!) {
      if (ch === "{") {
        depth++;
        seen = true;
      } else if (ch === "}") {
        depth--;
      }
    }
    if (seen && depth <= 0) return i;
  }
  return -1;
}

function sliceBody(start1: number) {
  const s = start1 - 1;
  const e = findFnEnd(s);
  return {
    start: start1,
    end: e + 1,
    body: lines.slice(s, e + 1).join("\n"),
    loc: e - s + 1,
  };
}

const header = lines.slice(0, 2200).join("\n");
const promotedHelpers = new Set<number>();
for (const m of header.matchAll(/\bas workbookHelper(\d+)\b/g)) {
  promotedHelpers.add(+m[1]!);
}

function findHelperDef(n: number): number {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i]!.startsWith(`function workbookHelper${n}(`)) return i + 1;
  }
  return -1;
}

function findFnDef(name: string): number {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i]!.startsWith(`function ${name}(`) || lines[i]!.startsWith(`async function ${name}(`)) {
      return i + 1;
    }
  }
  return -1;
}

function analyzeDeps(label: string, start1: number) {
  const { start, end, body, loc } = sliceBody(start1);
  const helpers = [
    ...new Set([...body.matchAll(/workbookHelper(\d+)/g)].map((m) => +m[1]!)),
  ]
    .filter((h) => `workbookHelper${h}` !== label && h !== +label.replace(/\D/g, ""))
    .sort((a, b) => a - b);

  const short = [
    ...new Set([...body.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(/g)].map((m) => m[1]!)),
  ].filter(
    (n) =>
      !n.startsWith("workbook") &&
      ![
        "if",
        "for",
        "while",
        "switch",
        "catch",
        "function",
        "return",
        "typeof",
        "new",
        "void",
        "Math",
        "Error",
        "Object",
        "Array",
        "String",
        "Number",
        "Boolean",
        "JSON",
        "Date",
        "Map",
        "Set",
        "Promise",
        "parseInt",
        "parseFloat",
        "isNaN",
        "isFinite",
        "isFinite",
        "abs",
        "max",
        "min",
        "floor",
        "round",
        "ceil",
        "map",
        "filter",
        "forEach",
        "reduce",
        "find",
        "push",
        "includes",
        "has",
        "fill",
        "save",
        "restore",
        "beginPath",
        "moveTo",
        "lineTo",
        "stroke",
        "fillRect",
        "clearRect",
        "fillText",
        "measureText",
        "clip",
        "createPattern",
        "setTransform",
        "getTransform",
        "inverse",
        "all",
        "step",
        "rgba",
      ].includes(n),
  );

  console.log(`\n======== ${label} L${start}-${end} LOC ${loc} ========`);
  console.log("helpers:");
  for (const h of helpers) {
    const def = findHelperDef(h);
    const promoted = promotedHelpers.has(h);
    const inRange = def >= start && def <= end;
    console.log(
      `  H${h} def@${def} promoted=${promoted} inSelf=${inRange}`,
    );
  }
  console.log("short external calls:");
  for (const n of short) {
    const def = findFnDef(n);
    let endDef = def > 0 ? findFnEnd(def - 1) + 1 : -1;
    const locN = def > 0 ? endDef - def + 1 : -1;
    const inHeader = header.includes(n);
    console.log(`  ${n} def@${def} LOC ${locN} inHeaderImport=${inHeader}`);
  }

  // module-level bindings referenced
  const binds = [
    ...new Set([...body.matchAll(/\bworkbookBinding(\d+)\b/g)].map((m) => +m[1]!)),
  ].sort((a, b) => a - b);
  const globalish = binds.filter((b) => {
    // local bindings usually >2000; small ones are module consts
    return b < 2000;
  });
  console.log("small bindings (<2000):", globalish.join(","));
}

analyzeDeps("workbookHelper462", 7454);
analyzeDeps("workbookHelper616", 23279);
analyzeDeps("workbookA", 25834);
analyzeDeps("vEe", 27364);

// Contiguous peel candidates: include nearby helpers that are only used by the peel?
console.log("\n== Nye/Vye/Hye near helper462 ==");
for (const name of ["Nye", "Vye", "workbookHelper460", "workbookHelper461"]) {
  const def = findFnDef(name);
  if (def < 0) continue;
  const end = findFnEnd(def - 1) + 1;
  console.log(`${name} L${def}-${end} LOC ${end - def + 1}`);
}

console.log("\n== Gwe/Kwe/Qwe/Vwe/M_/Eue/hTe/cTe/Rwe near 616 ==");
for (const name of [
  "Gwe",
  "Kwe",
  "Qwe",
  "Vwe",
  "M_",
  "Eue",
  "hTe",
  "cTe",
  "Rwe",
  "Xwe",
  "Zwe",
  "workbookHelper617",
  "workbookHelper618",
]) {
  const def = findFnDef(name);
  if (def < 0) {
    console.log(`${name} NOT FOUND as function`);
    continue;
  }
  const end = findFnEnd(def - 1) + 1;
  console.log(`${name} L${def}-${end} LOC ${end - def + 1}`);
}

console.log("\n== workbookA helpers ITe/$B/FTe/STe/TTe/ETe/LTe ==");
for (const name of [
  "ITe",
  "$B",
  "FTe",
  "STe",
  "TTe",
  "ETe",
  "LTe",
  "workbookHelper643",
  "workbookHelper644",
  "workbookHelper639",
  "workbookHelper645",
]) {
  const def = findFnDef(name === "$B" ? "$B" : name);
  // $B might be var
  let d = def;
  if (d < 0) {
    for (let i = 0; i < lines.length; i++) {
      if (
        lines[i]!.startsWith(`function ${name}(`) ||
        lines[i]!.startsWith(`var ${name}`) ||
        lines[i]!.startsWith(`let ${name}`) ||
        lines[i]!.includes(` ${name} = `) && i < 3000
      ) {
        // skip
      }
      if (lines[i]!.match(new RegExp(`^(?:async )?function \\${name === "$B" ? "\\$B" : name}\\(`))) {
        d = i + 1;
        break;
      }
    }
  }
  if (name === "$B") {
    for (let i = 0; i < lines.length; i++) {
      if (/^function \$B\(/.test(lines[i]!)) {
        d = i + 1;
        break;
      }
    }
  }
  if (d < 0) {
    console.log(`${name} NOT FOUND`);
    continue;
  }
  const end = findFnEnd(d - 1) + 1;
  console.log(`${name} L${d}-${end} LOC ${end - d + 1}`);
}

console.log("\n== vEe helpers RTe/BTe/nEe/dEe/_Ee/hEe/pEe/LCe/Te ==");
for (const name of [
  "RTe",
  "BTe",
  "nEe",
  "dEe",
  "sEe",
  "uEe",
  "_Ee",
  "hEe",
  "pEe",
  "LCe",
  "Te",
  "workbookA",
]) {
  const def = findFnDef(name);
  if (def < 0) {
    console.log(`${name} NOT FOUND`);
    continue;
  }
  const end = findFnEnd(def - 1) + 1;
  console.log(`${name} L${def}-${end} LOC ${end - def + 1}`);
}

// Who calls Gwe/Kwe etc outside helper616?
function callersOutside(name: string, rangeStart: number, rangeEnd: number) {
  const out: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (i + 1 >= rangeStart && i + 1 <= rangeEnd) continue;
    if (lines[i]!.includes(`${name}(`)) out.push(i + 1);
  }
  return out;
}

console.log("\n== external callers of helper616 cluster helpers ==");
for (const [name, s, e] of [
  ["Gwe", 23078, 23107],
  ["Kwe", 23108, 23138],
  ["Qwe", 23744, 23815],
  ["Vwe", 22824, 22976],
] as const) {
  const c = callersOutside(name, s, e);
  console.log(
    `${name} external callers: ${c.length}`,
    c.slice(0, 15).join(","),
  );
}

console.log("\n== external callers of workbookA cluster ==");
for (const [name, s, e] of [
  ["ITe", 25787, 25807],
  ["FTe", 0, 0],
  ["STe", 25079, 25230],
  ["TTe", 25299, 25328],
  ["ETe", 25329, 25350],
  ["LTe", 25808, 25818],
  ["workbookHelper643", 25603, 25749],
  ["workbookHelper644", 25767, 25786],
] as const) {
  let start = s;
  let end = e;
  if (name === "FTe") {
    const d = findFnDef("FTe");
    start = d;
    end = findFnEnd(d - 1) + 1;
    console.log(`FTe range L${start}-${end}`);
  }
  const c = callersOutside(name, start, end);
  // also exclude workbookA range
  const c2 = c.filter((x) => x < 25834 || x > 26195);
  console.log(
    `${name} external (excl workbookA): ${c2.length}`,
    c2.slice(0, 15).join(","),
  );
}
