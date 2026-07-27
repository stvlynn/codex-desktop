// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Q_` — companion for byte→hex; real Z_ body (Z_ currently mis-mapped).

/** Clamp a number into the 0..255 byte channel range. */
export function clampByteChannel(value: number): number {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
