// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WQi`) / export `CB`.

export type BindBindEnvironmentsPeers = {
  Fl: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  sp: (...args: unknown[]) => unknown;
};

let peers: BindBindEnvironmentsPeers | null = null;

/** Wire bindBindEnvironments peers once companions land. */
export function setBindBindEnvironmentsPeers(next: BindBindEnvironmentsPeers): void {
  peers = next;
}

/**
 * Bundle export `CB` / internal `WQi`.
 */
export function bindBindEnvironments() {
  if (peers == null) {
    throw new Error("bindBindEnvironments peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) =>
    peers.sp(e, peers.Fl.THREAD_WORKSPACE_ROOT_HINTS),
  );
}
