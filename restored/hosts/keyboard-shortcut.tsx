// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lj`) / export `$Z`.

export type BindKeyboardShortcutPeers = {
  DPr: (...args: unknown[]) => unknown;
  Gk: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindKeyboardShortcutPeers | null = null;

/** Wire bindKeyboardShortcut peers once companions land. */
export function setBindKeyboardShortcutPeers(
  next: BindKeyboardShortcutPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$Z` / internal `lj`.
 */
export function bindKeyboardShortcut() {
  if (peers == null) {
    throw new Error("bindKeyboardShortcut peers are not configured");
  }

  return peers.e(() => {
    (peers.Gk(), peers.Yf(), peers.DPr());
  });
}
