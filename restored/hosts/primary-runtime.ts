// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yiu`) / export `Gn`.

export type BindPrimaryRuntimePeers = {
  e: (...args: unknown[]) => unknown;
  viu: (...args: unknown[]) => unknown;
};

let peers: BindPrimaryRuntimePeers | null = null;

/** Wire bindPrimaryRuntime peers once companions land. */
export function setBindPrimaryRuntimePeers(
  next: BindPrimaryRuntimePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gn` / internal `yiu`.
 */
export function bindPrimaryRuntime() {
  if (peers == null) {
    throw new Error("bindPrimaryRuntime peers are not configured");
  }

  return peers.e(() => {
    viu = [`app-host`, `primary-runtime`, `update-status`];
  });
}
