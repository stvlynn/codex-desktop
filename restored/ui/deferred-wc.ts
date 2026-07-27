// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `efl`) / export `wc`.

export type DeferredWcPeers = {
  $Gi: (...args: unknown[]) => unknown;
  $dl: (...args: unknown[]) => unknown;
  $u: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  BKn: (...args: unknown[]) => unknown;
  CR: (...args: unknown[]) => unknown;
  DR: (...args: unknown[]) => unknown;
  FE: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I$i: (...args: unknown[]) => unknown;
  IE: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Jdl: (...args: unknown[]) => unknown;
  L$i: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Qdl: (...args: unknown[]) => unknown;
  R$i: (...args: unknown[]) => unknown;
  TR: (...args: unknown[]) => unknown;
  V0i: (...args: unknown[]) => unknown;
  Wnl: (...args: unknown[]) => unknown;
  Xdl: (...args: unknown[]) => unknown;
  YN: (...args: unknown[]) => unknown;
  Ydl: (...args: unknown[]) => unknown;
  Zdl: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dk: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eO: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  nO: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oKn: (...args: unknown[]) => unknown;
  pR: (...args: unknown[]) => unknown;
  qdl: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  resourceUri: (...args: unknown[]) => unknown;
  sUc: (...args: unknown[]) => unknown;
  sol: (...args: unknown[]) => unknown;
  t1i: (...args: unknown[]) => unknown;
  wqi: (...args: unknown[]) => unknown;
};

let peers: DeferredWcPeers | null = null;

/** Wire deferredWc peers once companions land. */
export function setDeferredWcPeers(next: DeferredWcPeers): void {
  peers = next;
}

/**
 * Bundle export `wc` / internal `efl`.
 */
export function deferredWc() {
  if (peers == null) {
    throw new Error("deferredWc peers are not configured");
  }

  return peers.e(() => {
    ((qdl = peers.c()),
      peers.Ho(),
      peers.Au(),
      (Jdl = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.nO(),
      peers.dk(),
      peers.YN(),
      peers.IE(),
      peers.t1i(),
      peers.ed(),
      peers.gT(),
      peers.Fh(),
      peers.$Gi(),
      peers.oKn(),
      peers.Wnl(),
      peers.DR(),
      peers.R$i(),
      peers.V0i(),
      peers.sUc(),
      peers.sol(),
      peers.BKn(),
      peers.TR(),
      (Ydl = peers.J()),
      (Xdl = peers.Oa(peers.hT, (e, { get: t }) => {
        let n = t(peers.I$i, peers.e);
        return (
          n.isInlineExpanded ||
          n.isFullScreen ||
          t(peers.L$i, peers.e) ||
          t(peers.eO.tabById$, peers.pR(peers.e)) != null
        );
      })),
      (Zdl = peers.Oa(
        peers.Q,
        ({ hostId: e, server: t, tool: n }, { get: r }) =>
          peers.CR({
            mcpServerStatuses: peers.r(peers.FE, peers.e).data,
            server: t,
            tool: n,
          })?.resourceUri ?? null,
      )),
      (Qdl = peers.Oa(
        peers.Q,
        ({ hostId: e, server: t, tool: n }, { get: r }) =>
          peers.wqi({
            mcpServerStatuses: peers.r(peers.FE, peers.e).data,
            server: t,
            tool: n,
          }),
      )),
      ($dl = peers.Oa(
        peers.Q,
        (e, { get: t }) => t(peers.FE, peers.e).isLoading,
      )));
  });
}
