// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JMl`) / export `Ls`.

export type BindDeferredUiHelperLsPeers = {
  $u: (...args: unknown[]) => unknown;
  BMl: (...args: unknown[]) => unknown;
  BPc: (...args: unknown[]) => unknown;
  D8: (...args: unknown[]) => unknown;
  FMl: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  GMl: (...args: unknown[]) => unknown;
  HMl: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IMl: (...args: unknown[]) => unknown;
  IN: (...args: unknown[]) => unknown;
  KMl: (...args: unknown[]) => unknown;
  LFc: (...args: unknown[]) => unknown;
  LMl: (...args: unknown[]) => unknown;
  LPc: (...args: unknown[]) => unknown;
  MMl: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  NMl: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PMl: (...args: unknown[]) => unknown;
  RFc: (...args: unknown[]) => unknown;
  RMl: (...args: unknown[]) => unknown;
  Scc: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  UMl: (...args: unknown[]) => unknown;
  VMl: (...args: unknown[]) => unknown;
  WMl: (...args: unknown[]) => unknown;
  bMl: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iFc: (...args: unknown[]) => unknown;
  j2: (...args: unknown[]) => unknown;
  jMl: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  occ: (...args: unknown[]) => unknown;
  psc: (...args: unknown[]) => unknown;
  qMl: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rFc: (...args: unknown[]) => unknown;
  usc: (...args: unknown[]) => unknown;
  vcc: (...args: unknown[]) => unknown;
  zMl: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiHelperLsPeers | null = null;

/** Wire bindDeferredUiHelperLs peers once companions land. */
export function setBindDeferredUiHelperLsPeers(next: BindDeferredUiHelperLsPeers): void {
  peers = next;
}

/**
 * Bundle export `Ls` / internal `JMl`.
 */
export function bindDeferredUiHelperLs() {
  if (peers == null) {
    throw new Error("bindDeferredUiHelperLs peers are not configured");
  }

  return peers.e(() => {
    ((jMl = peers.c()),
      (MMl = peers.r(peers.vcc(), 1)),
      peers.Ho(),
      (NMl = peers.r(peers.o(), 1)),
      peers.$u(),
      peers.IN(),
      peers.Scc(),
      peers.Fh(),
      peers.qx(),
      peers.occ(),
      peers.psc(),
      peers.iFc(),
      peers.RFc(),
      peers.BPc(),
      peers.bMl(),
      peers.LPc(),
      (PMl = peers.usc
        .catch(``)
        .array()
        .transform((e) => peers.e.filter((e) => peers.e.length > 0))),
      (FMl = 8),
      (IMl = {
        csv_chart: peers.rFc,
        desktop_note: peers.LFc,
      }),
      (D8 = peers.Ta(peers.j2, {
        entries: new Map(),
        pluginIds: new Map(),
        pluginNames: new Map(),
        visibleTaskIds: null,
      })),
      (LMl = peers.Ta(peers.j2, void 0)),
      (RMl = peers.Ta(peers.j2, !1)),
      (zMl = peers.Ta(peers.j2, null)),
      (BMl = peers.Ta(peers.j2, [])),
      (VMl = peers.Ma(peers.j2, ({ get: e }) => {
        let t = peers.e(peers.D8);
        if (t.visibleTaskIds == null || peers.e(peers.LMl) == null) return null;
        let n = peers.e(peers.qMl),
          r = peers.e(peers.BMl);
        return t.visibleTaskIds.filter(
          (e) =>
            t.pluginNames.has(peers.e) &&
            !n.has(peers.e) &&
            !peers.r.includes(peers.e),
        );
      })),
      (HMl = peers.Ma(peers.j2, ({ get: e }) => {
        let t = peers.e(peers.D8).visibleTaskIds,
          n = peers.e(peers.VMl);
        return t == null || n == null
          ? null
          : t.filter((e) => !n.includes(peers.e));
      })),
      (UMl = peers.Ma(peers.j2, ({ get: e }) =>
        Array.from(new Set(peers.e(peers.D8).pluginNames.values())),
      )),
      (WMl = peers.Ma(peers.j2, ({ get: e }) =>
        Array.from(new Set(peers.e(peers.D8).pluginIds.values())),
      )),
      (GMl = peers.Oa(
        peers.j2,
        (e, { get: t }) => t(peers.D8).entries.get(peers.e) ?? null,
      )),
      (KMl = peers.Oa(peers.j2, (e, { get: t }) => {
        let n = t(peers.zMl);
        return n?.taskId === peers.e ? n.entry : t(peers.GMl, peers.e);
      })),
      (qMl = peers.Ma(peers.j2, ({ get: e }) => {
        let t = new Map(),
          n = peers.e(peers.LMl);
        if (n == null) return t;
        let r = peers.e(peers.RMl),
          i = peers.e(peers.D8);
        for (let [e, a] of i.pluginNames) {
          let o = i.pluginIds.get(peers.e),
            s = n.find((e) =>
              peers.r
                ? peers.o != null && peers.e.plugin.remotePluginId === peers.o
                : peers.e.plugin.name === a,
            );
          s != null && t.set(peers.e, s);
        }
        return t;
      })));
  });
}
