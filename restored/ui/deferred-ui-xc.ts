// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ksl`) / export `Xc`.

export type BindDeferredUiXcPeers = {
  Dsl: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Osl: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiXcPeers | null = null;

/** Wire bindDeferredUiXc peers once companions land. */
export function setBindDeferredUiXcPeers(next: BindDeferredUiXcPeers): void {
  peers = next;
}

/**
 * Bundle export `Xc` / internal `ksl`.
 */
export function bindDeferredUiXc() {
  if (peers == null) {
    throw new Error("bindDeferredUiXc peers are not configured");
  }

  return peers.e(() => {
    ((Dsl = peers.c()), peers.sd(), (Osl = peers.J()));
  });
}
