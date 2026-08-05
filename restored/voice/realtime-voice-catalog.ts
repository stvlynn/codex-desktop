// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gns`) / export `BC`.

export type BindRealtimeVoiceCatalogPeers = {
  Bns: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Hts: (...args: unknown[]) => unknown;
  NV: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Vns: (...args: unknown[]) => unknown;
  Wns: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  grt: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  yE: (...args: unknown[]) => unknown;
};

let peers: BindRealtimeVoiceCatalogPeers | null = null;

/** Wire bindRealtimeVoiceCatalog peers once companions land. */
export function setBindRealtimeVoiceCatalogPeers(
  next: BindRealtimeVoiceCatalogPeers,
): void {
  peers = next;
}

/**
 * Bundle export `BC` / internal `Gns`.
 */
export function bindRealtimeVoiceCatalog() {
  if (peers == null) {
    throw new Error("bindRealtimeVoiceCatalog peers are not configured");
  }

  return peers.e(() => {
    (peers.Qt(),
      peers.Ho(),
      peers.NV(),
      peers.yE(),
      peers.Hts(),
      peers.ed(),
      peers.Uf(),
      peers.grt(),
      peers.Bns(),
      (Wns = peers.ka(
        peers.Q,
        ({ enabled: e, hostId: t }, { scope: n }) => ({
          ...peers.Vns(n, t),
          enabled: peers.e,
        }),
        {
          key: ({ enabled: e, hostId: t }) => `${t}:${peers.e}`,
        },
      )));
  });
}
