// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `yG` — pure helper.

/** Read a little-endian uint16 from `bytes[offset]`/`bytes[offset+1]`. */
export function readUint16Le(bytes: ArrayLike<number>, offset: number): number {
  return bytes[offset]! | (bytes[offset + 1]! << 16);
}
