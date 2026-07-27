// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `YDo`) / export `sk`.

export type ContentPeers = {
  $A: (...args: unknown[]) => unknown;
  BDo: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  DDo: (...args: unknown[]) => unknown;
  Dh: (...args: unknown[]) => unknown;
  EDo: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  FDo: (...args: unknown[]) => unknown;
  GDo: (...args: unknown[]) => unknown;
  GK: (...args: unknown[]) => unknown;
  HDo: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  IDo: (...args: unknown[]) => unknown;
  JDo: (...args: unknown[]) => unknown;
  KDo: (...args: unknown[]) => unknown;
  LEo: (...args: unknown[]) => unknown;
  Mo: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PDo: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QA: (...args: unknown[]) => unknown;
  RDo: (...args: unknown[]) => unknown;
  UDo: (...args: unknown[]) => unknown;
  Uat: (...args: unknown[]) => unknown;
  VDo: (...args: unknown[]) => unknown;
  WDo: (...args: unknown[]) => unknown;
  bD: (...args: unknown[]) => unknown;
  drr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  filter: (...args: unknown[]) => unknown;
  g9r: (...args: unknown[]) => unknown;
  hD: (...args: unknown[]) => unknown;
  kDo: (...args: unknown[]) => unknown;
  lrr: (...args: unknown[]) => unknown;
  qDo: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  slice: (...args: unknown[]) => unknown;
  some: (...args: unknown[]) => unknown;
  srr: (...args: unknown[]) => unknown;
  tP: (...args: unknown[]) => unknown;
  vD: (...args: unknown[]) => unknown;
  xD: (...args: unknown[]) => unknown;
  yD: (...args: unknown[]) => unknown;
  zDo: (...args: unknown[]) => unknown;
};
let peers: ContentPeers | null = null;

/** Wire content peers once companions land. */
export function setContentPeers(next: ContentPeers): void {
  peers = next;
}

/**
 * Bundle export `sk` / internal `YDo`.
 */
export function content() {
  if (peers == null) {
    throw new Error("content peers are not configured");
  }
  return peers.e(() => {
    GK = peers.r(peers.Mo(), 1);
    peers.Ho();
    peers.DD();
    peers.Uat();
    peers.LEo();
    peers.tP();
    peers.ed();
    peers.Dh();
    peers.$A();
    peers.PDo();
    zDo = peers.Oa(
      peers.Q,
      (e, { get }) => {
        if (peers.e == null) return null;
        let n = get(peers.srr, peers.e);
        if (n == null)
          return (
            get(peers.hD, peers.e),
            get(peers.vD, peers.e),
            get(peers.bD, peers.e)?.slice(0, -1) ?? null
          );
        let r = n.flatMap((item) => {
            return peers.e.type === "content" ? [peers.e.value] : [];
          }),
          i = [];
        for (let n of peers.r.slice(0, -1)) {
          let r = get(peers.drr, {
            conversationId: peers.e,
            entityKey: n,
          });
          if (peers.r == null)
            return get(peers.bD, peers.e)?.slice(0, -1) ?? null;
          i.push(peers.r);
        }
        return i;
      },
      {
        isEqual: (e, t) => {
          return peers.e == null || t == null
            ? peers.e === t
            : peers.QA(peers.e, t);
        },
      },
    );
    BDo = peers.Oa(
      peers.Q,
      ({ conversationId, includeGeneratedImages }, { get }) => {
        let r = get(peers.zDo, peers.e);
        return peers.r == null
          ? []
          : peers.EDo(peers.r, {
              includeGeneratedImages,
              projectlessOutputDirectory: get(peers.lrr, peers.e),
            });
      },
    );
    VDo = peers.Oa(
      peers.Q,
      ({ conversationId, includeGeneratedImages }, { get }) => {
        let r = get(peers.yD, peers.e);
        return peers.r == null
          ? []
          : peers.EDo([peers.r], {
              includeGeneratedImages,
              projectlessOutputDirectory: get(peers.lrr, peers.e),
            });
      },
      {
        isEqual: peers.GK.default,
      },
    );
    HDo = peers.Oa(
      peers.Q,
      ({ conversationId, includeGeneratedImages }, { get }) => {
        return peers.kDo([
          get(peers.VDo, {
            conversationId: peers.e,
            includeGeneratedImages,
          }),
          get(peers.BDo, {
            conversationId: peers.e,
            includeGeneratedImages,
          }),
        ]);
      },
      {
        isEqual: peers.GK.default,
      },
    );
    UDo = peers.Oa(peers.Q, (e, { get }) => {
      return get(peers.zDo, peers.e)?.some(peers.FDo) ?? false;
    });
    WDo = peers.Oa(
      peers.Q,
      (e, { get }) => {
        return get(peers.yD, peers.e);
      },
      {
        isEqual: peers.IDo,
      },
    );
    GDo = peers.Oa(
      peers.Q,
      ({ conversationId, hostId, includeGeneratedImages }, { get }) => {
        let i = peers.r(peers.WDo, peers.e);
        if (i == null)
          return {
            latestExternalArtifacts: [],
            priorArtifactsByTurn: [],
          };
        let a = peers.DDo([...(peers.r(peers.zDo, peers.e) ?? []), i], {
          apps: peers.r(peers.g9r, hostId).data ?? [],
          includeGeneratedImages,
          projectlessOutputDirectory: peers.r(peers.lrr, peers.e),
        });
        return {
          latestExternalArtifacts:
            a[0]?.filter((e) => {
              return peers.e.type === "external-resource";
            }) ?? [],
          priorArtifactsByTurn: a.slice(1),
        };
      },
      {
        isEqual: peers.GK.default,
      },
    );
    KDo = peers.Oa(
      peers.Q,
      ({ conversationId, hostId }, { get }) => {
        let r = {
            conversationId: peers.e,
            includeGeneratedImages:
              get(peers.xD, peers.e) === "projectless" &&
              get(peers.Eh, "120995366"),
          },
          i = get(peers.WDo, peers.e);
        if ((i == null || !peers.FDo(i)) && !get(peers.UDo, peers.e))
          return get(peers.HDo, peers.r);
        let { latestExternalArtifacts, priorArtifactsByTurn } = get(peers.GDo, {
          ...peers.r,
          hostId,
        });
        return peers.kDo([
          [...latestExternalArtifacts, ...get(peers.VDo, peers.r)],
          ...priorArtifactsByTurn,
        ]);
      },
      {
        isEqual: peers.GK.default,
      },
    );
    qDo = peers.Oa(peers.Q, ({ conversationId, hostId }, { get }) => {
      return peers.RDo({
        artifacts: get(peers.HDo, {
          conversationId: peers.e,
          includeGeneratedImages: false,
        }),
        get,
        hostId,
      });
    });
    JDo = peers.Oa(
      peers.Q,
      ({ conversationId, hostId }, { get }) => {
        return peers.RDo({
          artifacts: get(peers.KDo, {
            conversationId: peers.e,
            hostId,
          }),
          get,
          hostId,
        });
      },
      {
        isEqual: peers.GK.default,
      },
    );
  });
}
