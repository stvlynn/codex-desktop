// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zGr`) / export `VX`.

export type DeferredVXPeers = {
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  LGr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  RGr: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ep: (...args: unknown[]) => unknown;
};

let peers: DeferredVXPeers | null = null;

/** Wire deferredVX peers once companions land. */
export function setDeferredVXPeers(next: DeferredVXPeers): void {
  peers = next;
}

/**
 * Bundle export `VX` / internal `zGr`.
 */
export function deferredVX() {
  if (peers == null) {
    throw new Error("deferredVX peers are not configured");
  }

  return peers.e(() => {
    ((LGr = peers.c()),
      peers.Qt(),
      peers.Ho(),
      peers.ed(),
      peers.Uf(),
      peers.ap(),
      (RGr = peers.ep(peers.Q, `is-copilot-api-available`, {
        staleTime: peers.Hf.INFINITE,
      })));
  });
}
