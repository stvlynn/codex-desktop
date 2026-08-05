// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Y$o`) / export `xE`.

export type CloseDiffSidePanelIfOpenPeers = {
  J$o: (...args: unknown[]) => unknown;
  ZD: (...args: unknown[]) => unknown;
  _T: (...args: unknown[]) => unknown;
  o1o: (...args: unknown[]) => unknown;
  s1o: (...args: unknown[]) => unknown;
};

let peers: CloseDiffSidePanelIfOpenPeers | null = null;

/** Wire closeDiffSidePanelIfOpen peers once companions land. */
export function setCloseDiffSidePanelIfOpenPeers(
  next: CloseDiffSidePanelIfOpenPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xE` / internal `Y$o`.
 */
export function closeDiffSidePanelIfOpen(e: unknown) {
  if (peers == null) {
    throw new Error("closeDiffSidePanelIfOpen peers are not configured");
  }

  return e.get(peers.ZD) && peers.s1o(e) === peers._T.DIFF
    ? (peers.o1o(e, !1), !0)
    : peers.J$o(e);
}
