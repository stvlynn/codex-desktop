// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hAr`) / export `w$`.

export type BindBindGitOriginsPeers = {
  e: (...args: unknown[]) => unknown;
  mAr: (...args: unknown[]) => unknown;
};

let peers: BindBindGitOriginsPeers | null = null;

/** Wire bindBindGitOrigins peers once companions land. */
export function setBindBindGitOriginsPeers(
  next: BindBindGitOriginsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `w$` / internal `hAr`.
 */
export function bindBindGitOrigins() {
  if (peers == null) {
    throw new Error("bindBindGitOrigins peers are not configured");
  }

  return peers.e(() => {
    mAr = `2911712394`;
  });
}
