// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SRo`) / export `nO`.

export type CodexReviewNoDiffGitRepoRequiredTitlePeers = {
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  QT: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  ZT: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eE: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ih: (...args: unknown[]) => unknown;
  xRo: (...args: unknown[]) => unknown;
};

let peers: CodexReviewNoDiffGitRepoRequiredTitlePeers | null = null;

/** Wire codexReviewNoDiffGitRepoRequiredTitle peers once companions land. */
export function setCodexReviewNoDiffGitRepoRequiredTitlePeers(next: CodexReviewNoDiffGitRepoRequiredTitlePeers): void {
  peers = next;
}

/**
 * Bundle export `nO` / internal `SRo`.
 */
export function codexReviewNoDiffGitRepoRequiredTitle() {
  if (peers == null) {
    throw new Error("codexReviewNoDiffGitRepoRequiredTitle peers are not configured");
  }

  return peers.e(() => {
    xRo = peers.c(), peers.Qt(), peers.Ho(), peers.Au(), peers.$u(), peers.ih(), peers.QT(), peers.eE(), peers.ed(), peers.ap(), peers.ZT();
  });
}
