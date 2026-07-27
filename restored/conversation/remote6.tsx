// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dYn`) / export `M8`.

export type BindBindRemote6Peers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  uYn: (...args: unknown[]) => unknown;
};

let peers: BindBindRemote6Peers | null = null;

/** Wire bindBindRemote6 peers once companions land. */
export function setBindBindRemote6Peers(next: BindBindRemote6Peers): void {
  peers = next;
}

/**
 * Bundle export `M8` / internal `dYn`.
 */
export function bindBindRemote6() {
  if (peers == null) {
    throw new Error("bindBindRemote6 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => new Map(e.flatMap(e => {
    let n = t(peers.uYn, e);
    return n == null ? [] : [[e, n]];
  })));
}
