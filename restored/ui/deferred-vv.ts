// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gR`) / export `vV`.

export type DeferredVVPeers = {
  Au: (...args: unknown[]) => unknown;
  FKi: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  QKi: (...args: unknown[]) => unknown;
  TKi: (...args: unknown[]) => unknown;
  V_: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  ZKi: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dy: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  z_: (...args: unknown[]) => unknown;
};

let peers: DeferredVVPeers | null = null;

/** Wire deferredVV peers once companions land. */
export function setDeferredVVPeers(next: DeferredVVPeers): void {
  peers = next;
}

/**
 * Bundle export `vV` / internal `gR`.
 */
export function deferredVV() {
  if (peers == null) {
    throw new Error("deferredVV peers are not configured");
  }

  return peers.e(() => {
    ZKi = peers.c(), peers.Ho(), peers.Au(), peers.dy(), peers.TKi(), peers.Yf(), peers.ed(), peers.z_(), peers.K_(), peers.V_(), peers.FKi(), QKi = [];
  });
}
