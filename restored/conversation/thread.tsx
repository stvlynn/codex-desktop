// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `i9t`) / export `F9`.

export type BindBindThreadPeers = {
  Au: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  n9t: (...args: unknown[]) => unknown;
  r9t: (...args: unknown[]) => unknown;
};

let peers: BindBindThreadPeers | null = null;

/** Wire bindBindThread peers once companions land. */
export function setBindBindThreadPeers(next: BindBindThreadPeers): void {
  peers = next;
}

/**
 * Bundle export `F9` / internal `i9t`.
 */
export function bindBindThread() {
  if (peers == null) {
    throw new Error("bindBindThread peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      (n9t =
        /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/),
      (r9t = `updated_at`));
  });
}
