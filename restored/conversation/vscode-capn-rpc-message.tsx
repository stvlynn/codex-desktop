// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pge`) / export `Sgt`.

export type BindBindVscodeCapnRpcMessagePeers = {
  e: (...args: unknown[]) => unknown;
  fge: (...args: unknown[]) => unknown;
};

let peers: BindBindVscodeCapnRpcMessagePeers | null = null;

/** Wire bindBindVscodeCapnRpcMessage peers once companions land. */
export function setBindBindVscodeCapnRpcMessagePeers(next: BindBindVscodeCapnRpcMessagePeers): void {
  peers = next;
}

/**
 * Bundle export `Sgt` / internal `pge`.
 */
export function bindBindVscodeCapnRpcMessage() {
  if (peers == null) {
    throw new Error("bindBindVscodeCapnRpcMessage peers are not configured");
  }

  return peers.e(() => {
    fge = 256 * 1024 * 1024;
  });
}
