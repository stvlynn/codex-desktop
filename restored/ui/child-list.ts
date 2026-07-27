// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wei`) / export `IG`.

export type BindChildListPeers = {
  Cei: (...args: unknown[]) => unknown;
  H7r: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Sei: (...args: unknown[]) => unknown;
  _ei: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  g9r: (...args: unknown[]) => unknown;
  gei: (...args: unknown[]) => unknown;
  tP: (...args: unknown[]) => unknown;
  xM: (...args: unknown[]) => unknown;
};

let peers: BindChildListPeers | null = null;

/** Wire bindChildList peers once companions land. */
export function setBindChildListPeers(next: BindChildListPeers): void {
  peers = next;
}

/**
 * Bundle export `IG` / internal `wei`.
 */
export function bindChildList() {
  if (peers == null) {
    throw new Error("bindChildList peers are not configured");
  }

  return peers.e(() => {
    Sei = peers.c(), peers.Ho(), peers.gei(), peers.xM(), peers.H7r(), peers.tP(), peers.ed(), peers.K_(), Cei = peers.Oa(peers.Q, (e, {
      get: t
    }) => {
      let n = t(peers.g9r, peers.e).data;
      return n == null ? void 0 : peers._ei(n);
    });
  });
}
