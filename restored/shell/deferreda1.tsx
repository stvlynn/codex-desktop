// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bk`) / export `a1`.

export type BindBindDeferreda1Peers = {
  $Tr: (...args: unknown[]) => unknown;
  Rk: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iEr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferreda1Peers | null = null;

/** Wire bindBindDeferreda1 peers once companions land. */
export function setBindBindDeferreda1Peers(next: BindBindDeferreda1Peers): void {
  peers = next;
}

/**
 * Bundle export `a1` / internal `Bk`.
 */
export function bindBindDeferreda1() {
  if (peers == null) {
    throw new Error("bindBindDeferreda1 peers are not configured");
  }

  return peers.e(() => {
    peers.Rk(), peers.$Tr(), iEr = new Map([[`LeftOption+RightOption`, `⌥ + ⌥`], [`LeftAlt+RightAlt`, `⌥ + ⌥`], [`LeftCommand+RightCommand`, `⌘ + ⌘`], [`LeftCmd+RightCmd`, `⌘ + ⌘`], [`LeftMeta+RightMeta`, `⌘ + ⌘`], [`LeftShift+RightShift`, `⇧ + ⇧`]]);
  });
}
