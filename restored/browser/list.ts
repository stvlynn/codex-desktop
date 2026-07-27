// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kD`) / export `X0`.

export type BindListPeers = {
  Au: (...args: unknown[]) => unknown;
  Drr: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IE: (...args: unknown[]) => unknown;
  OD: (...args: unknown[]) => unknown;
  Orr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Trr: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  W7t: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  krr: (...args: unknown[]) => unknown;
  wrr: (...args: unknown[]) => unknown;
  yE: (...args: unknown[]) => unknown;
};

let peers: BindListPeers | null = null;

/** Wire bindList peers once companions land. */
export function setBindListPeers(next: BindListPeers): void {
  peers = next;
}

/**
 * Bundle export `X0` / internal `kD`.
 */
export function bindList() {
  if (peers == null) {
    throw new Error("bindList peers are not configured");
  }

  return peers.e(() => {
    ((Drr = peers.c()),
      peers.Qt(),
      peers.Ho(),
      peers.Au(),
      peers.Vf(),
      peers.W7t(),
      peers.wrr(),
      peers.IE(),
      peers.yE(),
      peers.ed(),
      peers.Gf(),
      peers.Uf(),
      (Orr = 100),
      (krr = [`experimental-features`, `list`]),
      (OD = peers.ka(peers.Q, (e) => ({
        queryKey: [...peers.krr, peers.e],
        queryFn: async () => {
          try {
            return await peers.Trr(peers.e);
          } catch (e) {
            return (
              peers.Wf.error(`Failed to load experimental features`, {
                safe: {
                  error: String(peers.e),
                },
                sensitive: {},
              }),
              []
            );
          }
        },
        staleTime: peers.Hf.ONE_MINUTE,
      }))));
  });
}
