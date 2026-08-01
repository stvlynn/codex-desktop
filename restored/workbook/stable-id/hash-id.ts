// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: FNV / Mulberry hash ids (legacy que / workbookHelper300 / Wue / Jue / workbookHelper301).

import {
  base36Alphabet,
  ensureStableIdConstantsInit,
  fnvOffsetBasis,
  fnvPrime,
  mulberryIncrement,
  mulberryMultiplier,
  stableIdTokenRe,
  u64Mask,
} from "./ensure-stable-id-constants";

/** Legacy `que` — FNV-1a over string → u64 bigint. */
export function fnv1aHashString(input: string): bigint {
  ensureStableIdConstantsInit();
  let hash = fnvOffsetBasis;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= BigInt(input.charCodeAt(i));
    hash = (hash * fnvPrime) & u64Mask;
  }
  return hash;
}

/** Legacy `Wue`. */
export function isStableIdToken(value: string | null | undefined): boolean {
  ensureStableIdConstantsInit();
  return !!value && stableIdTokenRe.test(value);
}

/** Legacy `Jue` — strip `prefix_` / `prefix-` from an id. */
export function stripIdPrefix(
  prefix: string | null | undefined,
  id: string,
): string {
  if (!prefix) return id;
  let p = prefix.toLowerCase(),
    lower = id.toLowerCase(),
    under = `${p}_`,
    dash = `${p}-`;
  return lower.startsWith(under)
    ? id.slice(under.length)
    : lower.startsWith(dash)
      ? id.slice(dash.length)
      : id;
}

/** Legacy `workbookHelper300` — Mulberry64 stream → base36 id. */
export function hashToBase36Id(seed: string, length: number = 8): string {
  ensureStableIdConstantsInit();
  let len = Math.max(4, Math.floor(length)),
    state = fnv1aHashString(seed),
    out = "";
  for (let i = 0; i < len; i += 1) {
    state = (state * mulberryMultiplier + mulberryIncrement) & u64Mask;
    let idx = Number(state % BigInt(36));
    out += base36Alphabet[idx] ?? "a";
  }
  return out;
}

/** Legacy `workbookHelper301` — keep valid token else hash. */
export function normalizeOrHashId(
  prefix: string | null | undefined,
  id: string | null | undefined,
  length: number = 8,
): string | null | undefined {
  if (!id) return id;
  let stripped = stripIdPrefix(prefix, id);
  if (isStableIdToken(stripped)) return stripped;
  let dashed = stripped.replace(/_/g, "-");
  return dashed !== stripped && isStableIdToken(dashed)
    ? dashed
    : hashToBase36Id(stripped, length);
}
