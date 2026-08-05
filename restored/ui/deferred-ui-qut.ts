// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `UZe`) / export `qut`.

export type BindDeferredUiQutPeers = {
  BZe: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  cp: (...args: unknown[]) => unknown;
  value: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiQutPeers | null = null;

/** Wire bindDeferredUiQut peers once companions land. */
export function setBindDeferredUiQutPeers(next: BindDeferredUiQutPeers): void {
  peers = next;
}

/**
 * Bundle export `qut` / internal `UZe`.
 */
export function bindDeferredUiQut() {
  if (peers == null) {
    throw new Error("bindDeferredUiQut peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    let n = t(peers.cp, e);
    return {
      ...n,
      data: peers.BZe(e, n.data?.value),
    };
  });
}
