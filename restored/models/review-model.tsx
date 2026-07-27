// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WI`) / export `YU`.

export type BindReviewModelPeers = {
  $Ii: (...args: unknown[]) => unknown;
  $T: (...args: unknown[]) => unknown;
  AI: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  BI: (...args: unknown[]) => unknown;
  BIi: (...args: unknown[]) => unknown;
  DI: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  EI: (...args: unknown[]) => unknown;
  FIi: (...args: unknown[]) => unknown;
  GIi: (...args: unknown[]) => unknown;
  HI: (...args: unknown[]) => unknown;
  HIi: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  II: (...args: unknown[]) => unknown;
  IIi: (...args: unknown[]) => unknown;
  Ia: (...args: unknown[]) => unknown;
  JFi: (...args: unknown[]) => unknown;
  JIi: (...args: unknown[]) => unknown;
  K3n: (...args: unknown[]) => unknown;
  KIi: (...args: unknown[]) => unknown;
  LIi: (...args: unknown[]) => unknown;
  LP: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  N3n: (...args: unknown[]) => unknown;
  NI: (...args: unknown[]) => unknown;
  PI: (...args: unknown[]) => unknown;
  PIi: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QIi: (...args: unknown[]) => unknown;
  Qt: (...args: unknown[]) => unknown;
  RI: (...args: unknown[]) => unknown;
  RIi: (...args: unknown[]) => unknown;
  RP: (...args: unknown[]) => unknown;
  T3n: (...args: unknown[]) => unknown;
  TIi: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  UI: (...args: unknown[]) => unknown;
  UIi: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  VI: (...args: unknown[]) => unknown;
  VIi: (...args: unknown[]) => unknown;
  WIi: (...args: unknown[]) => unknown;
  YFi: (...args: unknown[]) => unknown;
  YIi: (...args: unknown[]) => unknown;
  ZFi: (...args: unknown[]) => unknown;
  ZIi: (...args: unknown[]) => unknown;
  _E: (...args: unknown[]) => unknown;
  _Ii: (...args: unknown[]) => unknown;
  aLi: (...args: unknown[]) => unknown;
  cIi: (...args: unknown[]) => unknown;
  dIi: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eE: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  gE: (...args: unknown[]) => unknown;
  gIi: (...args: unknown[]) => unknown;
  gT: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  iE: (...args: unknown[]) => unknown;
  jI: (...args: unknown[]) => unknown;
  jIi: (...args: unknown[]) => unknown;
  jmi: (...args: unknown[]) => unknown;
  k3n: (...args: unknown[]) => unknown;
  kI: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  lIi: (...args: unknown[]) => unknown;
  mIi: (...args: unknown[]) => unknown;
  mT: (...args: unknown[]) => unknown;
  nE: (...args: unknown[]) => unknown;
  nLi: (...args: unknown[]) => unknown;
  oLi: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
  q3n: (...args: unknown[]) => unknown;
  qFi: (...args: unknown[]) => unknown;
  qIi: (...args: unknown[]) => unknown;
  rE: (...args: unknown[]) => unknown;
  rLi: (...args: unknown[]) => unknown;
  rT: (...args: unknown[]) => unknown;
  sLi: (...args: unknown[]) => unknown;
  tE: (...args: unknown[]) => unknown;
  ue: (...args: unknown[]) => unknown;
  vIi: (...args: unknown[]) => unknown;
  wI: (...args: unknown[]) => unknown;
  zI: (...args: unknown[]) => unknown;
  zIi: (...args: unknown[]) => unknown;
  zmi: (...args: unknown[]) => unknown;
};
let peers: BindReviewModelPeers | null = null;

/** Wire bindReviewModel peers once companions land. */
export function setBindReviewModelPeers(next: BindReviewModelPeers): void {
  peers = next;
}

/**
 * Bundle export `YU` / internal `WI`.
 */
export function bindReviewModel() {
  if (peers == null) {
    throw new Error("bindReviewModel peers are not configured");
  }
  return peers.e(() => {
    peers.Qt();
    peers.Ho();
    peers.Au();
    peers.zmi();
    peers.PI();
    peers.EI();
    peers.iE();
    peers.nE();
    peers.k3n();
    peers.eE();
    peers.II();
    peers.ed();
    peers.gT();
    peers.jI();
    peers.oT();
    peers.Uf();
    peers.RP();
    peers._E();
    peers.lIi();
    peers.mIi();
    LIi = new WeakMap();
    RIi = new WeakMap();
    zIi = new WeakMap();
    BIi = peers.Ta(peers.hT, null);
    VIi = peers.Ta(peers.hT, null);
    RI = peers.Ta(peers.rT, null);
    HIi = peers.Ma(peers.hT, ({ get }) => {
      return get(peers.VIi);
    });
    UIi = peers.Da(peers.Q, (e) => {
      return null;
    });
    WIi = peers.Ma(peers.hT, ({ get, scope }) => {
      return get(peers.UIi, peers.mT(scope.value));
    });
    GIi = 3;
    KIi = 300;
    qIi = 30;
    JIi = peers.Ta(peers.hT, false);
    zI = peers.Ma(peers.hT, ({ get }) => {
      return get(peers.gE) === "last-turn-only" ? peers.tE() : get(peers.qFi);
    });
    YIi = peers.Ia(peers.hT, ({ get }) => {
      return peers.T3n(
        get(peers.gE) === "full" ? get(peers.VIi) : null,
        get(peers.AI),
        get(peers.kI),
        "review_model",
        {
          watchForGitInit: true,
        },
      );
    });
    XIi = peers.Ma(peers.hT, ({ get }) => {
      return get(peers.YIi).data?.root ?? get(peers.VIi);
    });
    ZIi = peers.ka(peers.Q, (e) => {
      let t = {
        operationSource: "review_model",
        root: e.root,
      };
      return peers.rE(
        "base-branch",
        {
          commonDir: e.commonDir,
          root: e.root,
        },
        t,
        peers.$T(e.hostConfig),
        e.hostConfig,
        {
          liveQuery: {
            method: "base-branch",
            params: t,
          },
          staleTime: 1 / 0,
        },
      );
    });
    QIi = peers.Ma(peers.hT, ({ get }) => {
      if (get(peers.gE) === "last-turn-only") return peers.tE();
      let t = get(peers.zI),
        n = t.data ?? null;
      return n == null
        ? peers.N3n(t)
        : get(peers.ZIi, {
            commonDir: n.commonDir,
            hostConfig: get(peers.kI),
            root: n.root,
          });
    });
    $Ii = peers.Ma(peers.hT, ({ get }) => {
      return get(peers.gE) === "last-turn-only" ? peers.tE() : get(peers.JFi);
    });
    eLi = peers.Ia(peers.hT, ({ get }) => {
      if (get(peers.gE) === "last-turn-only")
        return peers.rE(
          "recent-branches",
          null,
          null,
          get(peers.AI),
          get(peers.kI),
        );
      let t = get(peers.kI),
        n = get(peers.AI),
        r = get(peers.zI).data ?? null,
        i =
          r == null
            ? null
            : {
                limit: peers.qIi,
                operationSource: "review_model",
                root: r.root,
              };
      return peers.rE("recent-branches", r, i, n, t, {
        liveQuery:
          i == null
            ? undefined
            : {
                method: "recent-branches",
                params: i,
              },
        staleTime: 1 / 0,
      });
    });
    BI = peers.Ma(peers.hT, ({ get }) => {
      return peers.TIi(get(peers.QIi).data ?? null, get(peers.WIi));
    });
    tLi = peers.Ia(peers.hT, ({ get }) => {
      if (get(peers.gE) === "last-turn-only")
        return peers.rE(
          "branch-commits",
          null,
          null,
          get(peers.AI),
          get(peers.kI),
        );
      let t = get(peers.kI),
        n = get(peers.AI),
        r = get(peers.zI).data ?? null,
        i = get(peers.BI);
      return peers.rE(
        "branch-commits",
        r,
        r == null
          ? null
          : {
              baseBranch: i ?? undefined,
              operationSource: "review_model",
              root: r.root,
            },
        n,
        t,
        {
          liveQuery: (e) => {
            return {
              method: "branch-commits",
              params: e,
            };
          },
          staleTime: 1 / 0,
        },
      );
    });
    nLi = peers.ka(peers.Q, (e) => {
      let t = {
        ...peers._Ii({
          cwd: e.cwd,
          hideWhitespace: e.hideWhitespace,
          source: e.source,
          baseBranch: e.baseBranch,
          commitSha: e.commitSha,
        }),
        includeUntrackedFiles: true,
      };
      return peers.rE(
        "review-summary",
        {
          commonDir: e.commonDir,
          root: e.root,
        },
        {
          ...t,
          includeUntrackedFiles: false,
        },
        peers.$T(e.hostConfig),
        e.hostConfig,
        {
          enabled: e.enabled,
          liveQuery: {
            method: "review-summary",
            params: t,
          },
          refetchOnMount: false,
          staleTime: 1 / 0,
        },
      );
    });
    rLi = peers.ka(peers.Q, (e) => {
      let t = {
        cwd: peers.eu(e.cwd),
        baseBranch: e.baseBranch ?? undefined,
        ...(e.hideWhitespace
          ? {
              hideWhitespace: true,
            }
          : {}),
        includeUntrackedFiles: e.includeUntrackedFiles,
        operationSource: "review_model",
      };
      return peers.rE(
        "branch-diff-stats",
        {
          commonDir: e.commonDir,
          root: e.root,
        },
        {
          ...t,
          includeUntrackedFiles: false,
        },
        peers.$T(e.hostConfig),
        e.hostConfig,
        {
          enabled: e.enabled,
          liveQuery: {
            method: "branch-diff-stats",
            params: t,
          },
          staleTime: 1 / 0,
        },
      );
    });
    iLi = peers.Ma(peers.hT, ({ get }) => {
      if (get(peers.gE) === "last-turn-only") return peers.tE();
      if (get(peers.LP) === "branch") {
        let t = get(peers.VI),
          n = t.data;
        if (
          n?.type === "success" ||
          (n?.type !== "error" &&
            get(peers.UI) &&
            !t.isError &&
            (t.isFetching || t.isPending))
        )
          return peers.tE();
      }
      let t = get(peers.zI),
        n = t.data ?? null,
        r = get(peers.DI),
        i = get(peers.QIi),
        a = i.data == null && i.isFetching;
      if (n == null) return peers.N3n(t);
      if (r == null || get(peers.HI) === "cloud") return peers.tE();
      let o = {
        baseBranch: get(peers.BI),
        commonDir: n.commonDir,
        cwd: r,
        enabled: !a,
        hideWhitespace: get(peers.NI),
        hostConfig: get(peers.kI),
        includeUntrackedFiles: true,
        root: n.root,
      };
      return get(peers.rLi, o);
    });
    VI = peers.Ma(peers.hT, ({ get }) => {
      if (get(peers.gE) === "last-turn-only") return peers.tE();
      let t = get(peers.zI),
        n = t.data ?? null,
        r = get(peers.oLi),
        i = get(peers.QIi),
        a = r === "branch" && i.data == null && i.isFetching,
        o = peers.gIi({
          baseBranch: get(peers.BI),
          commitSha: get(peers.RI),
          cwd: get(peers.DI),
          enabled: get(peers.UI) && !a,
          hideWhitespace: get(peers.NI),
          hostConfig: get(peers.kI),
          metadata: n,
          source: r,
        });
      return o == null
        ? n == null
          ? peers.N3n(t)
          : peers.tE()
        : get(peers.nLi, o);
    });
    aLi = peers.Ma(peers.hT, ({ get }) => {
      let t = get(peers.VI).data;
      if (t?.type !== "success") return null;
      let n = get(peers.zI).data?.root ?? null,
        r = new Map();
      for (let e of t.files) {
        let t = peers.dIi({
          gitRoot: n,
          gitPath: e.path,
        });
        r.has(t) || r.set(t, e);
      }
      return r;
    });
    HI = peers.Ma(peers.hT, ({ get, scope }) => {
      return get(peers.gE) === "last-turn-only"
        ? "local"
        : scope.value.routeKind === "remote-thread"
          ? "cloud"
          : get(peers.YFi).isCodexWorktree
            ? "worktree"
            : "local";
    });
    UI = peers.Ma(peers.hT, ({ get }) => {
      if (get(peers.gE) === "last-turn-only") return false;
      let t = get(peers.LP);
      return (
        get(peers.DI) != null &&
        get(peers.HI) !== "cloud" &&
        t !== "last-turn" &&
        (t !== "commit" || get(peers.RI) != null)
      );
    });
    oLi = peers.Ma(peers.hT, ({ get }) => {
      let t = get(peers.LP);
      return t === "last-turn" || (t === "commit" && get(peers.RI) == null)
        ? null
        : t;
    });
    sLi = peers.ka(peers.hT, (e, { get }) => {
      let n = get(peers.zI).data,
        r = get(peers.VI).data,
        i = [...(get(peers.aLi)?.entries() ?? [])],
        a = i.filter(([, t]) => {
          return peers.vIi(t.changeKind) === e;
        }),
        o = get(peers.DI),
        s = get(peers.BI),
        c = get(peers.RI),
        l = get(peers.kI),
        u = get(peers.AI),
        d = get(peers.NI),
        f = JSON.stringify({
          baseBranch: s,
          commitSha: c,
          commonDir: n?.commonDir ?? null,
          cwd: o,
          group: e,
          hideWhitespace: d,
          hostKey: u,
          root: n?.root ?? null,
          source: r?.type === "success" ? r.source : null,
        });
      return {
        queryKey:
          n != null && r?.type === "success" && o != null && a.length > 0
            ? [
                ...peers.K3n(n.commonDir, n.root, u),
                "review-diff",
                "initial",
                f,
              ]
            : ["git", "disabled", "review-diff", "initial", e],
        queryFn: async ({ signal }) => {
          if (r?.type !== "success" || o == null)
            throw Error("Missing review diff metadata");
          let t = await Promise.all(
            a.map(async ([t, n]) => {
              try {
                let i = await peers.ZFi({
                    baseBranch: s,
                    changeKind: n.changeKind,
                    commitSha: c,
                    cwd: o,
                    hideWhitespace: d,
                    hostConfig: l,
                    path: t,
                    previousPath: n.previousPath,
                    signal,
                    snapshotGeneration: r.snapshotGeneration,
                    source: r.source,
                  }),
                  a = i.type === "success" ? i.diff : "";
                return [
                  t,
                  {
                    changeKind: n.changeKind,
                    diff: a.trim().length > 0 ? (peers.wI(a)[0] ?? null) : null,
                    entry: i,
                    error: null,
                    previousPath: n.previousPath,
                    revision: n.revision,
                  },
                ];
              } catch (r) {
                if (signal.aborted) throw r;
                return [
                  t,
                  {
                    changeKind: n.changeKind,
                    diff: null,
                    entry: null,
                    error: r instanceof Error ? r : Error(String(r)),
                    previousPath: n.previousPath,
                    revision: n.revision,
                  },
                ];
              }
            }),
          );
          return new Map(t);
        },
        enabled:
          get(peers.UI) &&
          n != null &&
          r?.type === "success" &&
          o != null &&
          a.length > 0 &&
          !peers.jmi({
            fileCount: i.length,
            totalChangedBytes: 0,
            totalChangedLines: i.reduce((accumulator, [, t]) => {
              return accumulator + (t.additions ?? 0) + (t.deletions ?? 0);
            }, 0),
          }),
        staleTime: 1 / 0,
        placeholderData: (e, t) => {
          if (t?.queryKey.at(-1) === f) return e;
        },
      };
    });
    cLi = peers.ka(peers.hT, (e, { get, scope }) => {
      let r = get(peers.zI).data,
        i = get(peers.VI).data,
        a = get(peers.aLi)?.get(e) ?? null,
        o = get(peers.DI),
        s = get(peers.BI),
        c = get(peers.RI),
        l = get(peers.kI),
        u = get(peers.AI),
        d = get(peers.NI),
        f = JSON.stringify({
          baseBranch: s,
          changeKind: a?.changeKind ?? null,
          commitSha: c,
          commonDir: r?.commonDir ?? null,
          cwd: o,
          hideWhitespace: d,
          hostKey: u,
          path: e,
          previousPath: a?.previousPath ?? null,
          root: r?.root ?? null,
          source: i?.type === "success" ? i.source : null,
        }),
        p = get(
          peers.sLi,
          a?.changeKind === "untracked" ? "untracked" : "tracked",
        ),
        m = p.data?.get(e),
        h =
          (!p.isEnabled || p.data != null || p.isError) &&
          (m?.changeKind !== a?.changeKind ||
            m?.previousPath !== a?.previousPath ||
            m?.revision !== a?.revision ||
            m?.entry?.type !== "success");
      return {
        queryKey:
          r != null && i?.type === "success" && a != null && o != null
            ? [
                ...peers.q3n({
                  metadata: r,
                  method: "review-diff",
                  params: {
                    ...peers._Ii({
                      cwd: o,
                      hideWhitespace: d,
                      source: i.source,
                      baseBranch: s,
                      commitSha: c,
                    }),
                    files: [
                      {
                        path: e,
                        changeKind: a.changeKind,
                        previousPath: a.previousPath ?? undefined,
                      },
                    ],
                    snapshotGeneration: i.snapshotGeneration,
                  },
                  hostKey: u,
                }),
                a.revision,
              ]
            : ["git", "disabled", "review-diff", e],
        queryFn: async ({ signal }) => {
          if (r == null || i?.type !== "success" || a == null || o == null)
            throw Error("Missing review diff metadata");
          let f = [...peers.K3n(r.commonDir, r.root, u), "review-diff"],
            p = JSON.stringify([...f, i.snapshotGeneration]);
          peers.zIi.get(scope) !== p &&
            (peers.zIi.set(scope, p),
            queueMicrotask(() => {
              peers.zIi.get(scope) === p &&
                scope.queryClient.removeQueries({
                  predicate: ({ meta }) => {
                    return (
                      typeof meta?.reviewDiffSnapshotGeneration == "number" &&
                      meta.reviewDiffSnapshotGeneration !== i.snapshotGeneration
                    );
                  },
                  queryKey: f,
                  type: "inactive",
                });
            }));
          let m = async (r) => {
            try {
              return await peers.ZFi({
                baseBranch: s,
                commitSha: c,
                changeKind: a.changeKind,
                cwd: o,
                hideWhitespace: d,
                hostConfig: l,
                path: e,
                previousPath: a.previousPath,
                signal,
                snapshotGeneration: i.snapshotGeneration,
                source: i.source,
              });
            } catch (e) {
              if (!(e instanceof peers.cIi)) throw e;
              if (
                (await peers.jIi(scope, {
                  invalidateWorkerSnapshot: false,
                  staleSnapshotGeneration: i.snapshotGeneration,
                })) &&
                r
              )
                return m(false);
              throw new peers.ue({
                silent: true,
              });
            }
          };
          return m(true);
        },
        enabled:
          get(peers.UI) &&
          r != null &&
          i?.type === "success" &&
          a != null &&
          o != null &&
          h,
        retry: peers.FIi,
        retryDelay: peers.IIi,
        gcTime: peers.Hf.FIVE_SECONDS,
        staleTime: peers.Hf.FIVE_SECONDS,
        meta: {
          reviewDiffComparisonIdentity: f,
          reviewDiffSnapshotGeneration:
            i?.type === "success" ? i.snapshotGeneration : undefined,
        },
        placeholderData: (e, t) => {
          if (!(t == null || t.meta?.reviewDiffComparisonIdentity !== f))
            return e;
        },
      };
    });
    lLi = peers.Ma(peers.hT, ({ get }) => {
      return peers.PIi(get(peers.BIi));
    });
  });
}
