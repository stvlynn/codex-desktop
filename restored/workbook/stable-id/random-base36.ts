// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: random base36 / numeric ids (legacy workbookHelper299 / Gue / Kue).

import {
  base36Alphabet,
  ensureStableIdConstantsInit,
} from "./ensure-stable-id-constants";

/** Legacy `workbookHelper299`. */
export function randomBase36Id(length: number = 6): string {
  ensureStableIdConstantsInit();
  let bytes = new Uint8Array(Math.max(4, Math.floor(length)));
  if (typeof crypto < "u" && "getRandomValues" in crypto)
    try {
      crypto.getRandomValues(bytes);
    } catch {}
  if (bytes.every((item) => item === 0))
    for (let i = 0; i < bytes.length; i += 1)
      bytes[i] = Math.floor(Math.random() * 256);
  let out = "";
  for (let b of bytes) {
    let idx = b % 36;
    out += base36Alphabet[idx] ?? "a";
  }
  return out;
}

/** Legacy `Gue` — random positive int as string. */
export function randomPositiveIntString(): string {
  let n = Math.max(1, Math.floor(Math.random() * 2147483647));
  return String(n);
}

/** Legacy `Kue` — next numeric id after max of existing. */
export function nextNumericIdString(existing: Array<string | number> = []): string {
  let max = 0;
  for (let item of existing) {
    let n = Number(item);
    Number.isFinite(n) && (max = Math.max(max, n));
  }
  return String(max + 1);
}
