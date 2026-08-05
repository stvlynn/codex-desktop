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
    UIi = peers.Da(peers.Q, (alpha) => {
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
    ZIi = peers.ka(peers.Q, (bravo) => {
      let copper = {
        operationSource: "review_model",
        root: bravo.root,
      };
      return peers.rE(
        "base-branch",
        {
          commonDir: bravo.commonDir,
          root: bravo.root,
        },
        copper,
        peers.$T(bravo.hostConfig),
        bravo.hostConfig,
        {
          liveQuery: {
            method: "base-branch",
            params: copper,
          },
          staleTime: 1 / 0,
        },
      );
    });
    QIi = peers.Ma(peers.hT, ({ get }) => {
      if (get(peers.gE) === "last-turn-only") return peers.tE();
      let delta = get(peers.zI),
        echo = delta.data ?? null;
      return echo == null
        ? peers.N3n(delta)
        : get(peers.ZIi, {
            commonDir: echo.commonDir,
            hostConfig: get(peers.kI),
            root: echo.root,
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
      let falcon = get(peers.kI),
        gamma = get(peers.AI),
        harbor = get(peers.zI).data ?? null,
        i =
          harbor == null
            ? null
            : {
                limit: peers.qIi,
                operationSource: "review_model",
                root: harbor.root,
              };
      return peers.rE("recent-branches", harbor, i, gamma, falcon, {
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
      let indigo = get(peers.kI),
        jade = get(peers.AI),
        kite = get(peers.zI).data ?? null,
        i = get(peers.BI);
      return peers.rE(
        "branch-commits",
        kite,
        kite == null
          ? null
          : {
              baseBranch: i ?? undefined,
              operationSource: "review_model",
              root: kite.root,
            },
        jade,
        indigo,
        {
          liveQuery: (lemon) => {
            return {
              method: "branch-commits",
              params: lemon,
            };
          },
          staleTime: 1 / 0,
        },
      );
    });
    nLi = peers.ka(peers.Q, (marble) => {
      let nickel = {
        ...peers._Ii({
          cwd: marble.cwd,
          hideWhitespace: marble.hideWhitespace,
          source: marble.source,
          baseBranch: marble.baseBranch,
          commitSha: marble.commitSha,
        }),
        includeUntrackedFiles: true,
      };
      return peers.rE(
        "review-summary",
        {
          commonDir: marble.commonDir,
          root: marble.root,
        },
        {
          ...nickel,
          includeUntrackedFiles: false,
        },
        peers.$T(marble.hostConfig),
        marble.hostConfig,
        {
          enabled: marble.enabled,
          liveQuery: {
            method: "review-summary",
            params: nickel,
          },
          refetchOnMount: false,
          staleTime: 1 / 0,
        },
      );
    });
    rLi = peers.ka(peers.Q, (onyx) => {
      let pearl = {
        cwd: peers.eu(onyx.cwd),
        baseBranch: onyx.baseBranch ?? undefined,
        ...(onyx.hideWhitespace
          ? {
              hideWhitespace: true,
            }
          : {}),
        includeUntrackedFiles: onyx.includeUntrackedFiles,
        operationSource: "review_model",
      };
      return peers.rE(
        "branch-diff-stats",
        {
          commonDir: onyx.commonDir,
          root: onyx.root,
        },
        {
          ...pearl,
          includeUntrackedFiles: false,
        },
        peers.$T(onyx.hostConfig),
        onyx.hostConfig,
        {
          enabled: onyx.enabled,
          liveQuery: {
            method: "branch-diff-stats",
            params: pearl,
          },
          staleTime: 1 / 0,
        },
      );
    });
    iLi = peers.Ma(peers.hT, ({ get }) => {
      if (get(peers.gE) === "last-turn-only") return peers.tE();
      if (get(peers.LP) === "branch") {
        let umbra = get(peers.VI),
          violet = umbra.data;
        if (
          violet?.type === "success" ||
          (violet?.type !== "error" &&
            get(peers.UI) &&
            !umbra.isError &&
            (umbra.isFetching || umbra.isPending))
        )
          return peers.tE();
      }
      let quartz = get(peers.zI),
        river = quartz.data ?? null,
        slate = get(peers.DI),
        i = get(peers.QIi),
        a = i.data == null && i.isFetching;
      if (river == null) return peers.N3n(quartz);
      if (slate == null || get(peers.HI) === "cloud") return peers.tE();
      let timber = {
        baseBranch: get(peers.BI),
        commonDir: river.commonDir,
        cwd: slate,
        enabled: !a,
        hideWhitespace: get(peers.NI),
        hostConfig: get(peers.kI),
        includeUntrackedFiles: true,
        root: river.root,
      };
      return get(peers.rLi, timber);
    });
    VI = peers.Ma(peers.hT, ({ get }) => {
      if (get(peers.gE) === "last-turn-only") return peers.tE();
      let willow = get(peers.zI),
        xenon = willow.data ?? null,
        yellow = get(peers.oLi),
        i = get(peers.QIi),
        a = yellow === "branch" && i.data == null && i.isFetching,
        zinc = peers.gIi({
          baseBranch: get(peers.BI),
          commitSha: get(peers.RI),
          cwd: get(peers.DI),
          enabled: get(peers.UI) && !a,
          hideWhitespace: get(peers.NI),
          hostConfig: get(peers.kI),
          metadata: xenon,
          source: yellow,
        });
      return zinc == null
        ? xenon == null
          ? peers.N3n(willow)
          : peers.tE()
        : get(peers.nLi, zinc);
    });
    aLi = peers.Ma(peers.hT, ({ get }) => {
      let amber = get(peers.VI).data;
      if (amber?.type !== "success") return null;
      let basalt = get(peers.zI).data?.root ?? null,
        cedar = new Map();
      for (let daisy of amber.files) {
        let ember = peers.dIi({
          gitRoot: basalt,
          gitPath: daisy.path,
        });
        cedar.has(ember) || cedar.set(ember, daisy);
      }
      return cedar;
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
      let flint = get(peers.LP);
      return (
        get(peers.DI) != null &&
        get(peers.HI) !== "cloud" &&
        flint !== "last-turn" &&
        (flint !== "commit" || get(peers.RI) != null)
      );
    });
    oLi = peers.Ma(peers.hT, ({ get }) => {
      let garnet = get(peers.LP);
      return garnet === "last-turn" ||
        (garnet === "commit" && get(peers.RI) == null)
        ? null
        : garnet;
    });
    sLi = peers.ka(peers.hT, (hazel, { get }) => {
      let ivory = get(peers.zI).data,
        jasper = get(peers.VI).data,
        i = [...(get(peers.aLi)?.entries() ?? [])],
        a = i.filter(([, prism]) => {
          return peers.vIi(prism.changeKind) === hazel;
        }),
        kelp = get(peers.DI),
        s = get(peers.BI),
        lotus = get(peers.RI),
        mint = get(peers.kI),
        u = get(peers.AI),
        nova = get(peers.NI),
        olive = JSON.stringify({
          baseBranch: s,
          commitSha: lotus,
          commonDir: ivory?.commonDir ?? null,
          cwd: kelp,
          group: hazel,
          hideWhitespace: nova,
          hostKey: u,
          root: ivory?.root ?? null,
          source: jasper?.type === "success" ? jasper.source : null,
        });
      return {
        queryKey:
          ivory != null &&
          jasper?.type === "success" &&
          kelp != null &&
          a.length > 0
            ? [
                ...peers.K3n(ivory.commonDir, ivory.root, u),
                "review-diff",
                "initial",
                olive,
              ]
            : ["git", "disabled", "review-diff", "initial", hazel],
        queryFn: async ({ signal }) => {
          if (jasper?.type !== "success" || kelp == null)
            throw Error("Missing review diff metadata");
          let quill = await Promise.all(
            a.map(async ([reef, sage]) => {
              try {
                let i = await peers.ZFi({
                    baseBranch: s,
                    changeKind: sage.changeKind,
                    commitSha: lotus,
                    cwd: kelp,
                    hideWhitespace: nova,
                    hostConfig: mint,
                    path: reef,
                    previousPath: sage.previousPath,
                    signal,
                    snapshotGeneration: jasper.snapshotGeneration,
                    source: jasper.source,
                  }),
                  a = i.type === "success" ? i.diff : "";
                return [
                  reef,
                  {
                    changeKind: sage.changeKind,
                    diff: a.trim().length > 0 ? (peers.wI(a)[0] ?? null) : null,
                    entry: i,
                    error: null,
                    previousPath: sage.previousPath,
                    revision: sage.revision,
                  },
                ];
              } catch (topaz) {
                if (signal.aborted) throw topaz;
                return [
                  reef,
                  {
                    changeKind: sage.changeKind,
                    diff: null,
                    entry: null,
                    error:
                      topaz instanceof Error ? topaz : Error(String(topaz)),
                    previousPath: sage.previousPath,
                    revision: sage.revision,
                  },
                ];
              }
            }),
          );
          return new Map(quill);
        },
        enabled:
          get(peers.UI) &&
          ivory != null &&
          jasper?.type === "success" &&
          kelp != null &&
          a.length > 0 &&
          !peers.jmi({
            fileCount: i.length,
            totalChangedBytes: 0,
            totalChangedLines: i.reduce((accumulator, [, ultra]) => {
              return (
                accumulator + (ultra.additions ?? 0) + (ultra.deletions ?? 0)
              );
            }, 0),
          }),
        staleTime: 1 / 0,
        placeholderData: (vapor, wheat) => {
          if (wheat?.queryKey.at(-1) === olive) return vapor;
        },
      };
    });
    cLi = peers.ka(peers.hT, (yarn, { get, scope }) => {
      let zephyr = get(peers.zI).data,
        i = get(peers.VI).data,
        a = get(peers.aLi)?.get(yarn) ?? null,
        acorn = get(peers.DI),
        s = get(peers.BI),
        bloom = get(peers.RI),
        coral = get(peers.kI),
        u = get(peers.AI),
        drift = get(peers.NI),
        eagle = JSON.stringify({
          baseBranch: s,
          changeKind: a?.changeKind ?? null,
          commitSha: bloom,
          commonDir: zephyr?.commonDir ?? null,
          cwd: acorn,
          hideWhitespace: drift,
          hostKey: u,
          path: yarn,
          previousPath: a?.previousPath ?? null,
          root: zephyr?.root ?? null,
          source: i?.type === "success" ? i.source : null,
        }),
        p = get(
          peers.sLi,
          a?.changeKind === "untracked" ? "untracked" : "tracked",
        ),
        frost = p.data?.get(yarn),
        glide =
          (!p.isEnabled || p.data != null || p.isError) &&
          (frost?.changeKind !== a?.changeKind ||
            frost?.previousPath !== a?.previousPath ||
            frost?.revision !== a?.revision ||
            frost?.entry?.type !== "success");
      return {
        queryKey:
          zephyr != null && i?.type === "success" && a != null && acorn != null
            ? [
                ...peers.q3n({
                  metadata: zephyr,
                  method: "review-diff",
                  params: {
                    ...peers._Ii({
                      cwd: acorn,
                      hideWhitespace: drift,
                      source: i.source,
                      baseBranch: s,
                      commitSha: bloom,
                    }),
                    files: [
                      {
                        path: yarn,
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
            : ["git", "disabled", "review-diff", yarn],
        queryFn: async ({ signal }) => {
          if (
            zephyr == null ||
            i?.type !== "success" ||
            a == null ||
            acorn == null
          )
            throw Error("Missing review diff metadata");
          let honey = [
              ...peers.K3n(zephyr.commonDir, zephyr.root, u),
              "review-diff",
            ],
            p = JSON.stringify([...honey, i.snapshotGeneration]);
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
                  queryKey: honey,
                  type: "inactive",
                });
            }));
          let iris = async (jewel) => {
            try {
              return await peers.ZFi({
                baseBranch: s,
                commitSha: bloom,
                changeKind: a.changeKind,
                cwd: acorn,
                hideWhitespace: drift,
                hostConfig: coral,
                path: yarn,
                previousPath: a.previousPath,
                signal,
                snapshotGeneration: i.snapshotGeneration,
                source: i.source,
              });
            } catch (knoll) {
              if (!(knoll instanceof peers.cIi)) throw knoll;
              if (
                (await peers.jIi(scope, {
                  invalidateWorkerSnapshot: false,
                  staleSnapshotGeneration: i.snapshotGeneration,
                })) &&
                jewel
              )
                return iris(false);
              throw new peers.ue({
                silent: true,
              });
            }
          };
          return iris(true);
        },
        enabled:
          get(peers.UI) &&
          zephyr != null &&
          i?.type === "success" &&
          a != null &&
          acorn != null &&
          glide,
        retry: peers.FIi,
        retryDelay: peers.IIi,
        gcTime: peers.Hf.FIVE_SECONDS,
        staleTime: peers.Hf.FIVE_SECONDS,
        meta: {
          reviewDiffComparisonIdentity: eagle,
          reviewDiffSnapshotGeneration:
            i?.type === "success" ? i.snapshotGeneration : undefined,
        },
        placeholderData: (lunar, moss) => {
          if (
            !(moss == null || moss.meta?.reviewDiffComparisonIdentity !== eagle)
          )
            return lunar;
        },
      };
    });
    lLi = peers.Ma(peers.hT, ({ get }) => {
      return peers.PIi(get(peers.BIi));
    });
  });
}
