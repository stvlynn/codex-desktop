// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DAo`) / export `$O`.

export type BindDeferredUiOPeers = {
  CAo: (...args: unknown[]) => unknown;
  EAo: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Pp: (...args: unknown[]) => unknown;
  SAo: (...args: unknown[]) => unknown;
  TAo: (...args: unknown[]) => unknown;
  _Ao: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  wAo: (...args: unknown[]) => unknown;
  xAo: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiOPeers | null = null;

/** Wire bindDeferredUiO peers once companions land. */
export function setBindDeferredUiOPeers(next: BindDeferredUiOPeers): void {
  peers = next;
}

/**
 * Bundle export `$O` / internal `DAo`.
 */
export function bindDeferredUiO() {
  if (peers == null) {
    throw new Error("bindDeferredUiO peers are not configured");
  }

  return peers.e(() => {
    ((xAo = peers.c()),
      peers.sd(),
      (SAo = peers.r(peers.o(), 1)),
      peers._Ao(),
      peers.Pp(),
      (CAo = peers.J()),
      (wAo = 10),
      (TAo = 15),
      (EAo = `border-token-charts-blue/40 bg-[var(--annotation-mode-button-annotation-background)] !text-token-text-link-foreground enabled:hover:bg-[var(--annotation-mode-button-annotation-hover-background)]`));
  });
}
