// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rT`) / export `k8`.

export type BindBindRemote5Peers = {
  Q: (...args: unknown[]) => unknown;
  wa: (...args: unknown[]) => unknown;
};

let peers: BindBindRemote5Peers | null = null;

/** Wire bindBindRemote5 peers once companions land. */
export function setBindBindRemote5Peers(next: BindBindRemote5Peers): void {
  peers = next;
}

/**
 * Bundle export `k8` / internal `rT`.
 */
export function bindBindRemote5() {
  if (peers == null) {
    throw new Error("bindBindRemote5 peers are not configured");
  }

  return peers.wa(`ThreadScope`, {
    key: e => e.clientThreadId,
    parent: peers.Q,
    retain: {
      max: 20
    }
  });
}
