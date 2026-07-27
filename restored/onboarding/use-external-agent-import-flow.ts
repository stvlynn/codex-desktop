// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gsu`) / export `gn`.

export type UseExternalAgentImportFlowPeers = {
  $f: (...args: unknown[]) => unknown;
  Bsu: (...args: unknown[]) => unknown;
  Cz: (...args: unknown[]) => unknown;
  H_: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  JNl: (...args: unknown[]) => unknown;
  Jsu: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  Ksu: (...args: unknown[]) => unknown;
  LMr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Rsu: (...args: unknown[]) => unknown;
  Vsu: (...args: unknown[]) => unknown;
  Xsu: (...args: unknown[]) => unknown;
  YNl: (...args: unknown[]) => unknown;
  Ysu: (...args: unknown[]) => unknown;
  _Pl: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  chatChoiceKey: (...args: unknown[]) => unknown;
  ePl: (...args: unknown[]) => unknown;
  jsu: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  wcu: (...args: unknown[]) => unknown;
};
let peers: UseExternalAgentImportFlowPeers | null = null;

/** Wire useExternalAgentImportFlow peers once companions land. */
export function setUseExternalAgentImportFlowPeers(
  next: UseExternalAgentImportFlowPeers,
): void {
  peers = next;
}

/**
 * Bundle export `gn` / internal `Gsu`.
 */
export function useExternalAgentImportFlow(e: unknown) {
  if (peers == null) {
    throw new Error("useExternalAgentImportFlow peers are not configured");
  }
  let { enabled } = e,
    r = peers.Io(peers.Q),
    i = peers.Ju(),
    a = peers.rt(),
    o = peers.kh(peers.YNl),
    s = peers.JNl(o);
  let c = s,
    l = peers.ePl(),
    u = {
      enabled,
      providers: c,
      sessionLimits: l,
    };
  let {
      detectedItems,
      getSelectedItems,
      hasImportableItems,
      importItems,
      importSelected,
      isDetecting,
      isImporting: _,
    } = peers._Pl(u),
    v = peers.Jsu(detectedItems);
  let y = v,
    b;
  bb0: {
    if (!enabled) {
      b = null;
      break bb0;
    }
    let e;
    e = peers.Ysu({
      detectedItems,
      intl: i,
      providerIds: y,
    });
    b = e;
  }
  let x = b,
    S = enabled && isDetecting,
    C = enabled && _,
    w = enabled && x != null,
    T = (e) => {
      return peers.Ysu({
        detectedItems,
        intl: i,
        providerIds: e,
      });
    };
  let E = async (e, t) => {
    if (!enabled || (t == null && !hasImportableItems)) return;
    let o =
        t == null
          ? x
          : peers.Ysu({
              detectedItems,
              intl: i,
              providerIds: t,
            }),
      s =
        t == null
          ? getSelectedItems(e)
          : peers.Xsu({
              detectedItems,
              providerIds: t,
              selection: e,
            }),
      c = Date.now(),
      l = "import",
      u = 0;
    peers.Bsu({
      items: s,
      surface: "first_time_onboarding",
    });
    let g = o?.chatChoiceKey != null && e[o.chatChoiceKey];
    try {
      l = "import";
      let { projectRoots } =
        t == null ? await importSelected(e) : await importItems(s);
      u = projectRoots.length;
      l = "invalidate_queries";
      await peers.Rsu(a);
      l = "complete_import";
      await peers.jsu({
        hostId: peers.H_,
        onImportedProjectRootsReady: (e) => {
          peers.LMr(r, {
            importedProjectRoots: e,
          });
        },
        projectRoots,
        invalidateWorkspaceRootQueries: async () => {
          await Promise.all([
            a.invalidateQueries({
              queryKey: peers.$f("workspace-root-options"),
            }),
            a.invalidateQueries({
              queryKey: peers.$f("active-workspace-roots"),
            }),
          ]);
        },
        refreshRecentConversations: g ? peers.Ksu : undefined,
      });
      l = "invalidate_queries";
      await Promise.all([
        a.invalidateQueries({
          queryKey: peers.$f("codex-agents-md"),
        }),
        a.invalidateQueries({
          queryKey: peers.Cz,
        }),
      ]);
      peers.Vsu({
        durationMs: Date.now() - c,
        items: s,
        projectRootsReturnedCount: u,
        status: "success",
        surface: "first_time_onboarding",
      });
    } catch (e) {
      let t = e;
      throw (
        peers.Vsu({
          durationMs: Date.now() - c,
          error: t,
          failedStage: l,
          items: s,
          projectRootsReturnedCount: u,
          status: "failure",
          surface: "first_time_onboarding",
        }),
        t
      );
    }
  };
  return {
    isLoading: S,
    isImporting: C,
    providerIds: y,
    shouldShowImportStep: w,
    summary: x,
    getSummaryForProviders: T,
    importSelection: E,
  };
}
