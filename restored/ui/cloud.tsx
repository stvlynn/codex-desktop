// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KI`) / export `KU`.

export type BindCloudPeers = {
  ALi: (...args: unknown[]) => unknown;
  CLi: (...args: unknown[]) => unknown;
  DI: (...args: unknown[]) => unknown;
  DLi: (...args: unknown[]) => unknown;
  ELi: (...args: unknown[]) => unknown;
  FLi: (...args: unknown[]) => unknown;
  GI: (...args: unknown[]) => unknown;
  Gri: (...args: unknown[]) => unknown;
  HI: (...args: unknown[]) => unknown;
  HIi: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  ILi: (...args: unknown[]) => unknown;
  JIi: (...args: unknown[]) => unknown;
  LLi: (...args: unknown[]) => unknown;
  LP: (...args: unknown[]) => unknown;
  MLi: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  NLi: (...args: unknown[]) => unknown;
  OLi: (...args: unknown[]) => unknown;
  PLi: (...args: unknown[]) => unknown;
  RLi: (...args: unknown[]) => unknown;
  RP: (...args: unknown[]) => unknown;
  SLi: (...args: unknown[]) => unknown;
  TLi: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  UI: (...args: unknown[]) => unknown;
  VI: (...args: unknown[]) => unknown;
  WI: (...args: unknown[]) => unknown;
  ZPi: (...args: unknown[]) => unknown;
  _E: (...args: unknown[]) => unknown;
  _Li: (...args: unknown[]) => unknown;
  bLi: (...args: unknown[]) => unknown;
  commonDir: (...args: unknown[]) => unknown;
  dLi: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fLi: (...args: unknown[]) => unknown;
  fileCount: (...args: unknown[]) => unknown;
  gE: (...args: unknown[]) => unknown;
  gLi: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hLi: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  iLi: (...args: unknown[]) => unknown;
  jI: (...args: unknown[]) => unknown;
  lLi: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  wLi: (...args: unknown[]) => unknown;
  yLi: (...args: unknown[]) => unknown;
  zI: (...args: unknown[]) => unknown;
};

let peers: BindCloudPeers | null = null;

/** Wire bindCloud peers once companions land. */
export function setBindCloudPeers(next: BindCloudPeers): void {
  peers = next;
}

/**
 * Bundle export `KU` / internal `KI`.
 */
export function bindCloud() {
  if (peers == null) {
    throw new Error("bindCloud peers are not configured");
  }

  return peers.e(() => {
    ((xLi = peers.r(peers.ZPi(), 1)),
      peers.Ho(),
      peers.gT(),
      peers.jI(),
      peers.RP(),
      peers._E(),
      peers.WI(),
      (SLi = peers.Ta(peers.hT, peers.dLi())),
      (CLi = peers.Ma(peers.hT, ({ get: e }) => peers.fLi(peers.e(peers.SLi)))),
      (wLi = peers.Ma(peers.hT, ({ get: e }) =>
        peers.e(peers.HI) === `cloud` || peers.e(peers.LP) === `last-turn`
          ? peers.e(peers.lLi)
          : {
              diff: null,
              diffText: null,
              diffBytes: null,
              diffError: null,
            },
      )),
      (TLi = peers.Ma(peers.hT, ({ get: e }) =>
        peers.e(peers.HI) === `cloud` || peers.e(peers.LP) === `last-turn`
          ? (peers.e(peers.HIi) ?? peers.e(peers.DI))
          : peers.e(peers.DI),
      )),
      (ELi = peers.Ma(peers.hT, ({ get: e }) => {
        if (peers.e(peers.HI) === `cloud` || peers.e(peers.LP) === `last-turn`)
          return {
            isFetchingGitChanges: !1,
            isPendingGitChanges: !1,
          };
        let t = peers.e(peers.VI);
        return {
          isFetchingGitChanges: t.isFetching,
          isPendingGitChanges: peers.e(peers.UI) && t.isPending,
        };
      })),
      (GI = peers.Ma(peers.hT, ({ get: e }) => {
        let t = peers.e(peers.LP),
          n = peers.e(peers.ELi),
          r = peers.e(peers.CLi),
          i = peers.e(peers.HI),
          a = r.size > 0;
        return i !== `cloud` && peers.Gri(t)
          ? {
              diff: null,
              diffText: null,
              diffBytes: null,
              diffError: null,
              fullDiff: null,
              hasOptimisticDiffs: a,
              isFetchingGitChanges: n.isFetchingGitChanges,
              isPendingGitChanges: n.isPendingGitChanges,
            }
          : {
              ...peers.e(peers.wLi),
              fullDiff: null,
              hasOptimisticDiffs: !1,
              isFetchingGitChanges: n.isFetchingGitChanges,
              isPendingGitChanges: n.isPendingGitChanges,
            };
      })),
      (DLi = peers.Ma(peers.hT, ({ get: e }) => {
        if (peers.e(peers.HI) === `cloud`)
          return {
            isLoading: !1,
            metrics: null,
          };
        if (peers.e(peers.LP) === `branch`) {
          let t = peers.e(peers.VI),
            n = t.data;
          if (n?.type === `success`)
            return {
              isLoading: !1,
              metrics: peers.gLi(n),
            };
          if (peers.e(peers.UI) && !t.isError && (t.isFetching || t.isPending))
            return {
              isLoading: !0,
              metrics: null,
            };
        }
        let t = peers.e(peers.iLi),
          n = peers._Li(t.data);
        return n == null
          ? {
              isLoading: t.isFetching,
              metrics: null,
            }
          : {
              isLoading: !1,
              metrics: n,
            };
      })),
      (OLi = peers.Ma(
        peers.hT,
        ({ get: e }) =>
          peers.e(peers.LP) !== `branch` &&
          ((peers.e(peers.DLi).metrics?.fileCount ?? 0) > 0 ||
            peers.e(peers.iLi).data?.untrackedFilesOmitted != null),
      )),
      (kLi = peers.Ma(peers.hT, ({ get: e }) => {
        if (peers.e(peers.HI) !== `cloud` && peers.e(peers.LP) === `branch`) {
          let t = peers.e(peers.DLi);
          if (t.metrics != null) return t.metrics;
        }
        let t = peers.e(peers.UI);
        return peers.hLi({
          reviewSummary: peers.e(peers.VI).data,
          selectedDiff: t
            ? {
                diff: null,
                diffText: null,
              }
            : peers.e(peers.GI),
          shouldFetchReviewSummary: t,
        });
      })),
      (ALi = peers.Ma(peers.hT, ({ get: e }) =>
        peers.yLi({
          reviewSummary: peers.e(peers.VI).data,
          selectedDiff: peers.e(peers.GI),
          shouldFetchReviewSummary: peers.e(peers.UI),
        }),
      )),
      (jLi = peers.Ma(peers.hT, ({ get: e }) => {
        if (peers.e(peers.gE) === `last-turn-only`) return !1;
        let t = peers.e(peers.zI);
        return (
          peers.e(peers.HI) !== `cloud` && !t.isLoading && t.data?.root == null
        );
      })),
      (MLi = peers.Ma(peers.hT, ({ get: e, scope: t }) => {
        let n = peers.e(peers.LP),
          r = peers.e(peers.zI);
        return (
          t.value.routeKind !== `remote-thread` &&
          peers.Gri(n) &&
          r.data?.root != null &&
          (peers.e(peers.HI) === `local` || peers.e(peers.HI) === `worktree`)
        );
      })),
      (NLi = peers.Ma(peers.hT, ({ get: e }) => {
        let t = peers.e(peers.GI);
        if (peers.e(peers.UI)) {
          let n = peers.e(peers.VI).data;
          return (
            n?.type === `success` &&
            n.files.length > 0 &&
            !(peers.e(peers.MLi) && t.hasOptimisticDiffs)
          );
        }
        return (
          t.diffText != null &&
          t.diffText.trim().length > 0 &&
          !(peers.e(peers.MLi) && t.hasOptimisticDiffs)
        );
      })),
      (PLi = peers.Ma(
        peers.hT,
        ({ get: e }) =>
          peers.e(peers.zI).data?.commonDir != null && !peers.e(peers.JIi),
      )),
      (FLi = peers.Ma(peers.hT, ({ get: e, scope: t }) => {
        let n = peers.e(peers.GI);
        return (
          t.value.routeKind !== `remote-thread` &&
          (n.isPendingGitChanges || n.isFetchingGitChanges) &&
          !peers.e(peers.ALi)
        );
      })),
      (ILi = peers.Ma(
        peers.hT,
        ({ get: e }) => peers.e(peers.GI).diffError?.type === `diff-too-large`,
      )),
      (LLi = peers.Ma(peers.hT, ({ get: e }) => {
        let t = peers.e(peers.VI).data;
        return t?.type === `success` ? (t.untrackedFilesOmitted ?? null) : null;
      })),
      (RLi = peers.Ma(peers.hT, ({ get: e }) => {
        let t = peers.e(peers.UI),
          n = peers.e(peers.SLi),
          r = peers.fLi(n);
        if (!t || (r.size === 0 && n.version === 0)) return !1;
        let i = peers.e(peers.VI);
        return peers.bLi({
          reviewSummaryFetching: i.isFetching,
          reviewSummaryUpdatedAt: i.dataUpdatedAt,
          shouldFetchReviewSummary: t,
        });
      })));
  });
}
