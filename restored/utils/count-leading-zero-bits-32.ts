// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Rt` / export `Cvt` (Math.clz32 polyfill shape).

/** Count leading zero bits in a 32-bit unsigned integer. */
export function countLeadingZeroBits32(value: number): number {
  return Math.clz32(value >>> 0);
}
