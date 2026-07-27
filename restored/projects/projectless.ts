// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rz`) / export `kB`.

export type BindProjectlessPeers = {
  $A: (...args: unknown[]) => unknown;
  $Zi: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  CA: (...args: unknown[]) => unknown;
  Du: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  H_: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  SZi: (...args: unknown[]) => unknown;
  TZi: (...args: unknown[]) => unknown;
  UZi: (...args: unknown[]) => unknown;
  ZN: (...args: unknown[]) => unknown;
  ZZi: (...args: unknown[]) => unknown;
  _Qi: (...args: unknown[]) => unknown;
  aQi: (...args: unknown[]) => unknown;
  codexHomesByHostId: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  enabledRemoteHostIds: (...args: unknown[]) => unknown;
  find: (...args: unknown[]) => unknown;
  gQi: (...args: unknown[]) => unknown;
  hQi: (...args: unknown[]) => unknown;
  has: (...args: unknown[]) => unknown;
  iQi: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
  lQr: (...args: unknown[]) => unknown;
  mQi: (...args: unknown[]) => unknown;
  nQi: (...args: unknown[]) => unknown;
  nu: (...args: unknown[]) => unknown;
  oQi: (...args: unknown[]) => unknown;
  onDiscoverThreadWorkspaceRootHint: (...args: unknown[]) => unknown;
  pQi: (...args: unknown[]) => unknown;
  projectlessThreadIds: (...args: unknown[]) => unknown;
  pu: (...args: unknown[]) => unknown;
  push: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rQi: (...args: unknown[]) => unknown;
  remoteConnections: (...args: unknown[]) => unknown;
  remoteProjects: (...args: unknown[]) => unknown;
  she: (...args: unknown[]) => unknown;
  some: (...args: unknown[]) => unknown;
  tz: (...args: unknown[]) => unknown;
  vAr: (...args: unknown[]) => unknown;
  xZi: (...args: unknown[]) => unknown;
};

let peers: BindProjectlessPeers | null = null;

/** Wire bindProjectless peers once companions land. */
export function setBindProjectlessPeers(next: BindProjectlessPeers): void {
  peers = next;
}

/**
 * Bundle export `kB` / internal `rz`.
 */
export function bindProjectless() {
  if (peers == null) {
    throw new Error("bindProjectless peers are not configured");
  }

  return peers.e(() => {
    ((pQi = peers.r(peers.xZi(), 1)),
      (mQi = peers.r(peers.SZi(), 1)),
      (hQi = peers.r(peers.she(), 1)),
      (gQi = peers.r(peers.ZN(), 1)),
      peers.Au(),
      peers.TZi(),
      peers.CA(),
      peers.K_(),
      peers.$A(),
      peers.Gf(),
      peers.lQr(),
      peers.jf(),
      peers.tz(),
      (_Qi = new Set()),
      (vQi = (e, t, n, r, i, a, o = peers.H_, s) => {
        let c =
            peers.e.hostId == null || peers.nu(peers.e.hostId)
              ? o
              : peers.e.hostId,
          l = s?.threadProjectAssignments?.[peers.e.conversationId],
          u =
            l != null &&
            (l.projectKind === `local`
              ? c === o
              : l.hostId != null && c === l.hostId)
              ? peers.$Zi(l, t)
              : null;
        if (u != null) {
          u.threadKeys.push(peers.e.key);
          return;
        }
        let d = peers.e.cwd;
        if (!d || !peers.UZi(d).length) return;
        let f = d;
        if (
          peers.e.workspaceKind === `projectless` ||
          s?.projectlessThreadIds?.has(peers.e.conversationId) === !0
        )
          return;
        let p = c !== o,
          m = s?.remoteProjects,
          h = s?.remoteConnections?.find((e) => peers.e.hostId === c),
          g = (m ?? []).filter((e) => {
            if (peers.e.hostId === c) return !1;
            let t = s?.remoteConnections?.find(
              (t) => t.hostId === peers.e.hostId,
            );
            return peers.rQi(h, t);
          });
        if (
          p &&
          ((s?.enabledRemoteHostIds != null &&
            !s.enabledRemoteHostIds.has(c)) ||
            (g.length === 0 && !m?.some((e) => peers.e.hostId === c)))
        )
          return;
        let _ = [
          ...(p
            ? Object.entries(
                (0, peers.mQi.default)(g, (e) => peers.e.hostId),
              ).flatMap(([e, t]) =>
                peers.nQi(t, peers.e, d, s?.codexHomesByHostId?.[peers.e]),
              )
            : []),
        ];
        if (_.length === 1) {
          (
            t.find((e) => peers.e.projectId === _[0]?.id) ?? null
          )?.threadKeys.push(peers.e.key);
          return;
        }
        if (_.length > 1) return;
        let v = peers.iQi({
          gitOrigins: peers.r,
          gitOriginsByHostId: i,
          hostId: c ?? void 0,
          primaryHostId: o,
        });
        if (peers.pu(d, a) || (p && peers.aQi(d, v))) {
          let r = peers.oQi(
            d,
            peers.e.conversationId,
            t,
            n,
            v,
            s?.threadWorkspaceRootHints,
            peers.e.summary != null,
          );
          peers.r && (f = peers.r);
        }
        let y = peers.Du(f),
          b = g.filter((e) => peers.Du(peers.e.remotePath) === y),
          x = peers.vAr(m, c, f) ?? (b.length === 1 ? b[0] : null);
        if (x != null) {
          let n = t.find((e) => peers.e.projectId === x.id) ?? null;
          if (n != null) {
            n.threadKeys.push(peers.e.key);
            return;
          }
        }
        if (p) return;
        let S = peers.ZZi(n, f);
        S &&
          (S.threadKeys.push(peers.e.key),
          f !== d &&
            s?.onDiscoverThreadWorkspaceRootHint?.(
              peers.e.conversationId,
              S.path,
            ));
      }));
  });
}
