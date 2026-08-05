// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IFi`) / export `cW`.

export type BindBindAvailabilityPeers = {
  $T: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  FFi: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QT: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  XT: (...args: unknown[]) => unknown;
  ZT: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eE: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
};

let peers: BindBindAvailabilityPeers | null = null;

/** Wire bindBindAvailability peers once companions land. */
export function setBindBindAvailabilityPeers(
  next: BindBindAvailabilityPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cW` / internal `IFi`.
 */
export function bindBindAvailability() {
  if (peers == null) {
    throw new Error("bindBindAvailability peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Au(),
      peers.ed(),
      peers.Uf(),
      peers.ZT(),
      peers.QT(),
      peers.eE(),
      (FFi = peers.ka(
        peers.Q,
        ({ hostConfig: e, operationSource: t }) => ({
          enabled: !0,
          queryKey: [`git`, `availability`, peers.$T(peers.e)],
          queryFn: ({ signal: n }) =>
            peers.XT(`git`).request({
              method: `availability`,
              params: {
                hostConfig: peers.e,
                operationSource: t,
              },
              signal: n,
            }),
          staleTime: peers.Hf.THIRTY_SECONDS,
        }),
        {
          excludeFieldsFromKey: [`operationSource`],
        },
      )));
  });
}
