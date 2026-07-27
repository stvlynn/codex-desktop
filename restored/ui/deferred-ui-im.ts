// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cU`) / export `iM`.

export type BindDeferredUiIMPeers = {
  BJa: (...args: unknown[]) => unknown;
  SP: (...args: unknown[]) => unknown;
  zJa: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiIMPeers | null = null;

/** Wire bindDeferredUiIM peers once companions land. */
export function setBindDeferredUiIMPeers(next: BindDeferredUiIMPeers): void {
  peers = next;
}

/**
 * Bundle export `iM` / internal `cU`.
 */
export const bindDeferredUiIM = (e: unknown, t: unknown) => {
  if (peers == null) {
    throw new Error("bindDeferredUiIM peers are not configured");
  }
  let r = (t) => {
    return peers.SP(e.view, t);
  };
  let i, a;
  return (
    (i = () => {
      return t(e);
    }),
    (a = () => {
      return t(e);
    }),
    peers.BJa.useSyncExternalStore(r, i, a)
  );
};
