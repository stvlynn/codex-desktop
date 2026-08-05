// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qWi`) / export `ZV`.

export type ArtifactTabLoadingPeers = {
  KWi: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: ArtifactTabLoadingPeers | null = null;

/** Wire artifactTabLoading peers once companions land. */
export function setArtifactTabLoadingPeers(
  next: ArtifactTabLoadingPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ZV` / internal `qWi`.
 */
export function artifactTabLoading() {
  if (peers == null) {
    throw new Error("artifactTabLoading peers are not configured");
  }

  return peers.e(() => {
    KWi = new Map();
  });
}
