// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TN`) / export `sJ`.

export type BindEnvironmentPeers = {
  $0r: (...args: unknown[]) => unknown;
  A0r: (...args: unknown[]) => unknown;
  B$r: (...args: unknown[]) => unknown;
  B0r: (...args: unknown[]) => unknown;
  CN: (...args: unknown[]) => unknown;
  D0r: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  F0r: (...args: unknown[]) => unknown;
  G0r: (...args: unknown[]) => unknown;
  GM: (...args: unknown[]) => unknown;
  H0r: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  I0r: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  J0r: (...args: unknown[]) => unknown;
  K0r: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  L0r: (...args: unknown[]) => unknown;
  M0r: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Mo: (...args: unknown[]) => unknown;
  N0r: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  P0r: (...args: unknown[]) => unknown;
  PXr: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Q0r: (...args: unknown[]) => unknown;
  R0r: (...args: unknown[]) => unknown;
  SN: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  U0r: (...args: unknown[]) => unknown;
  V$r: (...args: unknown[]) => unknown;
  V0r: (...args: unknown[]) => unknown;
  W0r: (...args: unknown[]) => unknown;
  WM: (...args: unknown[]) => unknown;
  X0r: (...args: unknown[]) => unknown;
  Xg: (...args: unknown[]) => unknown;
  Y0r: (...args: unknown[]) => unknown;
  Yg: (...args: unknown[]) => unknown;
  bN: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dy: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  e0r: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gN: (...args: unknown[]) => unknown;
  jXr: (...args: unknown[]) => unknown;
  k0r: (...args: unknown[]) => unknown;
  lN: (...args: unknown[]) => unknown;
  mN: (...args: unknown[]) => unknown;
  nd: (...args: unknown[]) => unknown;
  oN: (...args: unknown[]) => unknown;
  oT: (...args: unknown[]) => unknown;
  od: (...args: unknown[]) => unknown;
  px: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  sN: (...args: unknown[]) => unknown;
  xN: (...args: unknown[]) => unknown;
  yN: (...args: unknown[]) => unknown;
  z$r: (...args: unknown[]) => unknown;
  z0r: (...args: unknown[]) => unknown;
};
let peers: BindEnvironmentPeers | null = null;

/** Wire bindEnvironment peers once companions land. */
export function setBindEnvironmentPeers(next: BindEnvironmentPeers): void {
  peers = next;
}

/**
 * Bundle export `sJ` / internal `TN`.
 */
export function bindEnvironment() {
  if (peers == null) {
    throw new Error("bindEnvironment peers are not configured");
  }
  return peers.e(() => {
    A0r = peers.c();
    peers.px();
    j0r = peers.r(peers.Mo(), 1);
    peers.Ho();
    peers.dy();
    peers.ed();
    peers.KM();
    peers.oT();
    peers.od();
    peers.Im();
    peers.PXr();
    peers.sN();
    peers.V$r();
    peers.Xg();
    peers.lN();
    peers.mN();
    M0r = peers.Pm("environment", null);
    N0r = peers.Pm("composer-auto-context-enabled", true);
    P0r = "composer-prompt-drafts-v1";
    F0r = {};
    I0r = peers.Pm(peers.P0r, peers.F0r);
    L0r = peers.Ta(peers.GM, 0);
    R0r = peers.Ta(peers.GM, null);
    vN = peers.Ta(peers.GM, null);
    z0r = peers.Da(peers.Q, (e) => {
      return undefined;
    });
    B0r = peers.Da(peers.Q, (e) => {
      return [];
    });
    V0r = peers.Ta(peers.Q, []);
    H0r = peers.Ma(peers.Q, ({ get }) => {
      return get(peers.I0r) ?? peers.nd(peers.P0r, peers.F0r);
    });
    U0r = peers.Ta(
      peers.GM,
      ({ scope }) => {
        if (scope.value.kind !== "local" || scope.value.conversationId == null)
          return;
        let t = scope.get(peers.z0r, scope.value.conversationId);
        return t == null ? undefined : peers.D0r(t);
      },
      {
        onMount(e, t) {
          if (t.value.kind !== "local" || t.value.conversationId == null)
            return;
          let { conversationId } = t.value,
            r = t.get(peers.z0r, conversationId);
          return (
            r != null &&
              (e(peers.D0r(r)),
              peers.k0r(t, r.prompt),
              t.set(peers.z0r, conversationId, undefined)),
            t.watch(({ get }) => {
              let r = get(peers.B0r, conversationId);
              r.length !== 0 &&
                (peers.gN(t, (e) => {
                  e.selectedTextAttachments.push(...r);
                }),
                t.set(peers.B0r, conversationId, []));
            })
          );
        },
      },
    );
    W0r = peers.Ma(peers.GM, ({ get, scope }) => {
      let n = get(peers.M0r) ?? null,
        r = get(peers.z$r),
        i = peers.jXr(n)?.default_branch ?? "main",
        a = get(peers.oN);
      return (
        a != null && r === "worktree"
          ? (r = "local")
          : a?.type === "cloud" && !a.hasAppliedCodeLocally
            ? (r = "cloud")
            : a?.type === "local" && (r = "local"),
        {
          pendingThreadGoalObjective: null,
          composerMode: r,
          aeonStartTarget: null,
          isAutoContextOn: get(peers.N0r) ?? true,
          imageAttachments: [],
          imageCommentDrafts: [],
          appshotContexts: [],
          fileAttachments: [],
          pastedTextAttachments: [],
          addedFiles: [],
          mcpAppModelContextAttachments: [],
          selectedTextAttachments: [],
          responseTextAnnotations: [],
          pullRequestChecks: [],
          pullRequestMergeConflict: null,
          asyncThreadStartingState: {
            type: i ? "branch" : "working-tree",
            branchName: i ?? "main",
          },
          followUpCloudStartingState: "direct-follow-up",
          defaultBranchSnapshot: i,
        }
      );
    });
    yN = peers.Ma(peers.GM, ({ get, scope }) => {
      let n = {
        ...get(peers.W0r),
        ...get(peers.U0r),
      };
      scope.value.kind === "new" &&
        scope.value.entrypoint === "home" &&
        (n.imageAttachments = get(peers.V0r));
      let r =
        scope.value.kind === "new" &&
        scope.value.entrypoint === "library-preview"
          ? scope.value.implicitAttachment
          : null;
      if (r == null) return n;
      switch (r.kind) {
        case "file":
          return {
            ...n,
            fileAttachments: peers.Yg([...n.fileAttachments, r.file]),
          };
        case "image": {
          let { image } = r;
          return {
            ...n,
            imageAttachments: [
              ...n.imageAttachments.filter((item) => {
                return item.id !== image.id;
              }),
              image,
            ],
          };
        }
      }
    });
    bN = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).composerMode;
    });
    G0r = peers.Oa(peers.GM, (e, { get }) => {
      return e == null ? get(peers.bN) : get(peers.B$r, e);
    });
    xN = peers.Ma(peers.GM, ({ get, scope }) => {
      if (scope.value.kind === "local" && scope.value.conversationId != null) {
        let n = get(peers.z0r, scope.value.conversationId);
        if (n != null) return n.prompt;
      }
      return get(peers.H0r)[peers.WM(scope.value)] ?? "";
    });
    K0r = peers.Ma(peers.GM, ({ get }) => {
      return peers.e0r(get(peers.xN));
    });
    q0r = peers.Ma(peers.GM, ({ get }) => {
      return {
        ...get(peers.yN),
        prompt: get(peers.xN),
      };
    });
    J0r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).pendingThreadGoalObjective;
    });
    Y0r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).aeonStartTarget;
    });
    X0r = peers.Ta(peers.GM, null);
    Z0r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).isAutoContextOn;
    });
    SN = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).imageAttachments;
    });
    CN = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).imageCommentDrafts;
    });
    Q0r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).appshotContexts;
    });
    $0r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).fileAttachments;
    });
    wN = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).pastedTextAttachments;
    });
    e2r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).addedFiles;
    });
    t2r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).mcpAppModelContextAttachments;
    });
    n2r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).selectedTextAttachments;
    });
    r2r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).responseTextAnnotations;
    });
    i2r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).pullRequestChecks;
    });
    a2r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).pullRequestMergeConflict;
    });
    o2r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).asyncThreadStartingState;
    });
    s2r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).followUpCloudStartingState;
    });
    c2r = peers.Ma(peers.GM, ({ get }) => {
      return get(peers.yN).defaultBranchSnapshot;
    });
  });
}
