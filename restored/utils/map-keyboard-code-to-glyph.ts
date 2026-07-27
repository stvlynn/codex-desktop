// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lHr`) / export `fZ`.

export type BindMapKeyboardCodeToGlyphPeers = {
  cHr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sHr: (...args: unknown[]) => unknown;
};

let peers: BindMapKeyboardCodeToGlyphPeers | null = null;

/** Wire bindMapKeyboardCodeToGlyph peers once companions land. */
export function setBindMapKeyboardCodeToGlyphPeers(next: BindMapKeyboardCodeToGlyphPeers): void {
  peers = next;
}

/**
 * Bundle export `fZ` / internal `lHr`.
 */
export function bindMapKeyboardCodeToGlyph() {
  if (peers == null) {
    throw new Error("bindMapKeyboardCodeToGlyph peers are not configured");
  }

  return peers.e(() => {
    sHr = new Map([[`Backquote`, "`"], [`Minus`, `-`], [`Equal`, `=`], [`BracketLeft`, `[`], [`BracketRight`, `]`], [`Backslash`, `\\`], [`Semicolon`, `;`], [`Quote`, `'`], [`Comma`, `,`], [`Period`, `.`], [`Slash`, `/`], [`Space`, ` `], [`NumpadMultiply`, `*`], [`NumpadAdd`, `+`], [`NumpadSubtract`, `-`], [`NumpadDecimal`, `.`], [`NumpadDivide`, `/`]]), cHr = null;
  });
}
