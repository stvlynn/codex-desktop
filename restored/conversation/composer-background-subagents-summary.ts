// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wCs`) / export `tb`.

export type ComposerBackgroundSubagentsSummaryPeers = {
  CCs: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  SCs: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: ComposerBackgroundSubagentsSummaryPeers | null = null;

/** Wire composerBackgroundSubagentsSummary peers once companions land. */
export function setComposerBackgroundSubagentsSummaryPeers(
  next: ComposerBackgroundSubagentsSummaryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tb` / internal `wCs`.
 */
export function composerBackgroundSubagentsSummary() {
  if (peers == null) {
    throw new Error(
      "composerBackgroundSubagentsSummary peers are not configured",
    );
  }

  return peers.e(() => {
    ((SCs = peers.c()), peers.sd(), (CCs = peers.J()));
  });
}
