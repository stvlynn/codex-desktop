// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ZA`) / export `xQ`.

export type BindProjectPeers = {
  $Mr: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  BMr: (...args: unknown[]) => unknown;
  Fm: (...args: unknown[]) => unknown;
  GA: (...args: unknown[]) => unknown;
  GMr: (...args: unknown[]) => unknown;
  HA: (...args: unknown[]) => unknown;
  HMr: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IA: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  JA: (...args: unknown[]) => unknown;
  JMr: (...args: unknown[]) => unknown;
  KA: (...args: unknown[]) => unknown;
  KMr: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QMr: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  UMr: (...args: unknown[]) => unknown;
  VMr: (...args: unknown[]) => unknown;
  WMr: (...args: unknown[]) => unknown;
  XA: (...args: unknown[]) => unknown;
  XMr: (...args: unknown[]) => unknown;
  YA: (...args: unknown[]) => unknown;
  YMr: (...args: unknown[]) => unknown;
  ZMr: (...args: unknown[]) => unknown;
  aNr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eNr: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  i9t: (...args: unknown[]) => unknown;
  iNr: (...args: unknown[]) => unknown;
  nNr: (...args: unknown[]) => unknown;
  oNr: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
  qA: (...args: unknown[]) => unknown;
  qMr: (...args: unknown[]) => unknown;
  r9t: (...args: unknown[]) => unknown;
  zMr: (...args: unknown[]) => unknown;
};

let peers: BindProjectPeers | null = null;

/** Wire bindProject peers once companions land. */
export function setBindProjectPeers(next: BindProjectPeers): void {
  peers = next;
}

/**
 * Bundle export `xQ` / internal `ZA`.
 */
export function bindProject() {
  if (peers == null) {
    throw new Error("bindProject peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Au(),
      peers.IA(),
      peers.ed(),
      peers.oT(),
      peers.HA(),
      peers.i9t(),
      peers.Im(),
      (zMr = `project`),
      (BMr = {
        chats: !1,
        cloud: !1,
        pinned: !1,
        threads: !1,
      }),
      (VMr = {
        codex: 0,
        work: 0,
      }),
      (HMr = peers.Pm(`sidebar-organize-mode-v1`, void 0)),
      (UMr = peers.Pm(`sidebar-keep-projects-in-recent-v1`, !0)),
      (WMr = peers.Pm(`projectless-sidebar-chats-first-v1`, !1)),
      (GMr = peers.Pm(`thread-sort-key`, peers.r9t)),
      (KMr = peers.Fm((e) => `sidebar-project-expanded-v1-${peers.e}`, null)),
      (qMr = peers.Pm(`sidebar-project-list-expanded-v1`, !1)),
      (JMr = peers.Pm(`sidebar-collapsed-sections-v1`, peers.BMr)),
      (YMr = peers.Ma(
        peers.Q,
        ({ get: e }) => peers.e(peers.HMr) ?? peers.zMr,
      )),
      (GA = peers.Ma(peers.Q, ({ get: e }) => peers.e(peers.UMr) ?? !0)),
      (XMr = peers.Ma(peers.Q, ({ get: e }) => peers.e(peers.WMr) ?? !1)),
      (KA = peers.Ma(
        peers.Q,
        ({ get: e }) => peers.e(peers.GMr) ?? `updated_at`,
      )),
      (ZMr = peers.Ma(peers.Q, ({ get: e }) => {
        let t = peers.e(peers.JMr);
        return t == null
          ? peers.BMr
          : {
              ...peers.BMr,
              ...t,
            };
      })),
      (QMr = peers.Ta(peers.Q, [])),
      ($Mr = peers.Ta(peers.Q, peers.VMr)),
      (eNr = peers.Ta(peers.Q, `all`)),
      (qA = peers.Ta(peers.Q, null)),
      (JA = peers.Ta(peers.Q, null)),
      (YA = peers.Ta(peers.Q, null)),
      (tNr = peers.Ta(peers.Q, null)),
      (nNr = peers.Ta(peers.Q, {})),
      (rNr = peers.Oa(
        peers.Q,
        ({ locationId: e, threadKey: t }, { get: n }) => {
          if (n(peers.qA) !== t) return !1;
          let r = n(peers.JA);
          return r == null || peers.e == null || r === peers.e;
        },
      )),
      (iNr = peers.Oa(
        peers.Q,
        (e, { get: t }) => t(peers.KMr, `codex:${peers.e}`) === !1,
      )),
      (aNr = peers.Oa(peers.Q, (e, { get: t }) =>
        Object.fromEntries(
          peers.e
            .filter((e) => t(peers.KMr, `codex:${peers.e}`) === !1)
            .map((e) => [peers.e, !0]),
        ),
      )),
      (oNr = peers.Oa(
        peers.Q,
        (e, { get: t }) => t(peers.nNr)[peers.e] === !0,
      )),
      (XA = peers.Oa(peers.Q, (e, { get: t }) => t(peers.ZMr)[peers.e])));
  });
}
