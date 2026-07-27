// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `xR` — pure helper.

/** 64-bit FNV-1a hash rendered as 16 lowercase hex chars. */
export function fnv1a64Hex16(value: string): string {
  let hash = 14695981039346656037n;
  for (const ch of value) {
    hash ^= BigInt(ch.codePointAt(0) ?? 0);
    hash = BigInt.asUintN(64, hash * 1099511628211n);
  }
  return hash.toString(16).padStart(16, "0").slice(0, 16);
}
