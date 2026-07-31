// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: UUID / FNV / Mulberry constants (legacy workbookH).

import { esmInit } from "../../runtime/rolldown-runtime";

/** Legacy `Yue`. */
export let uuidReplaceRe: RegExp;
/** Legacy `workbookBinding645`. */
export let base36Alphabet: string;
/** Legacy `Xue`. */
export let stableIdTokenRe: RegExp;
/** Legacy `workbookBinding646` — u64 mask. */
export let u64Mask: bigint;
/** Legacy `Zue` — FNV-1a offset basis. */
export let fnvOffsetBasis: bigint;
/** Legacy `Que` — FNV-1a prime. */
export let fnvPrime: bigint;
/** Legacy `$ue` — Mulberry64 multiplier. */
export let mulberryMultiplier: bigint;
/** Legacy `ede` — Mulberry64 increment. */
export let mulberryIncrement: bigint;

/** Legacy `workbookH`. */
export const ensureStableIdConstantsInit = esmInit(() => {
  uuidReplaceRe = /[xy]/g;
  base36Alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  stableIdTokenRe = /^[A-Za-z0-9.-]+$/;
  u64Mask = 18446744073709551615n;
  fnvOffsetBasis = 14695981039346656037n;
  fnvPrime = 1099511628211n;
  mulberryMultiplier = 6364136223846793005n;
  mulberryIncrement = 1442695040888963407n;
});
