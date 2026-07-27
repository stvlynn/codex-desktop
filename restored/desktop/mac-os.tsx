// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bk`) / export `a1`.

export type BindBindMacOSPeers = {
  $Tr: (...args: unknown[]) => unknown;
  Rk: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iEr: (...args: unknown[]) => unknown;
};

let peers: BindBindMacOSPeers | null = null;

/** Wire bindBindMacOS peers once companions land. */
export function setBindBindMacOSPeers(next: BindBindMacOSPeers): void {
  peers = next;
}

/**
 * Bundle export `a1` / internal `Bk`.
 */
export function bindBindMacOS() {
  if (peers == null) {
    throw new Error("bindBindMacOS peers are not configured");
  }

  return peers.e(() => {
    peers.Rk(), peers.$Tr(), iEr = new Map([[`LeftOption+RightOption`, `⌥ + ⌥`], [`LeftAlt+RightAlt`, `⌥ + ⌥`], [`LeftCommand+RightCommand`, `⌘ + ⌘`], [`LeftCmd+RightCmd`, `⌘ + ⌘`], [`LeftMeta+RightMeta`, `⌘ + ⌘`], [`LeftShift+RightShift`, `⇧ + ⇧`]]);
  });
}
