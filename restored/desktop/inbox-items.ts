// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `YPl`) / export `ps`.

export type BindInboxItemsPeers = {
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  JPl: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Yf: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ep: (...args: unknown[]) => unknown;
  qPl: (...args: unknown[]) => unknown;
};

let peers: BindInboxItemsPeers | null = null;

/** Wire bindInboxItems peers once companions land. */
export function setBindInboxItemsPeers(next: BindInboxItemsPeers): void {
  peers = next;
}

/**
 * Bundle export `ps` / internal `YPl`.
 */
export function bindInboxItems() {
  if (peers == null) {
    throw new Error("bindInboxItems peers are not configured");
  }

  return peers.e(() => {
    ((qPl = peers.c()),
      peers.Qt(),
      peers.Ho(),
      peers.Yf(),
      peers.ed(),
      peers.Uf(),
      peers.ap(),
      (JPl = peers.ep(peers.Q, `inbox-items`, {
        enabled: !0,
        params: {
          limit: 200,
        },
        refetchInterval: peers.Hf.ONE_MINUTE,
        staleTime: peers.Hf.ONE_MINUTE,
      })));
  });
}
