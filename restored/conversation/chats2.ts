// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `I1`) / export `Yp`.

export type Chats2Peers = {
  $A: (...args: unknown[]) => unknown;
  AY: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  Brc: (...args: unknown[]) => unknown;
  C0o: (...args: unknown[]) => unknown;
  Ea: (...args: unknown[]) => unknown;
  F1: (...args: unknown[]) => unknown;
  FSo: (...args: unknown[]) => unknown;
  FY: (...args: unknown[]) => unknown;
  FZi: (...args: unknown[]) => unknown;
  Fl: (...args: unknown[]) => unknown;
  Frc: (...args: unknown[]) => unknown;
  GA: (...args: unknown[]) => unknown;
  Grc: (...args: unknown[]) => unknown;
  HA: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Hrc: (...args: unknown[]) => unknown;
  IY: (...args: unknown[]) => unknown;
  Irc: (...args: unknown[]) => unknown;
  Jrc: (...args: unknown[]) => unknown;
  Krc: (...args: unknown[]) => unknown;
  LY: (...args: unknown[]) => unknown;
  Lrc: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Nrc: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  P1: (...args: unknown[]) => unknown;
  PSo: (...args: unknown[]) => unknown;
  PY: (...args: unknown[]) => unknown;
  PZi: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Q0o: (...args: unknown[]) => unknown;
  QA: (...args: unknown[]) => unknown;
  Rrc: (...args: unknown[]) => unknown;
  Urc: (...args: unknown[]) => unknown;
  Vrc: (...args: unknown[]) => unknown;
  Wrc: (...args: unknown[]) => unknown;
  X0o: (...args: unknown[]) => unknown;
  XMr: (...args: unknown[]) => unknown;
  XNr: (...args: unknown[]) => unknown;
  Xrc: (...args: unknown[]) => unknown;
  ZA: (...args: unknown[]) => unknown;
  ZQi: (...args: unknown[]) => unknown;
  aZi: (...args: unknown[]) => unknown;
  aj: (...args: unknown[]) => unknown;
  az: (...args: unknown[]) => unknown;
  crn: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eZi: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ej: (...args: unknown[]) => unknown;
  g0o: (...args: unknown[]) => unknown;
  kY: (...args: unknown[]) => unknown;
  kZi: (...args: unknown[]) => unknown;
  lp: (...args: unknown[]) => unknown;
  mrn: (...args: unknown[]) => unknown;
  oz: (...args: unknown[]) => unknown;
  qA: (...args: unknown[]) => unknown;
  r0o: (...args: unknown[]) => unknown;
  rz: (...args: unknown[]) => unknown;
  sp: (...args: unknown[]) => unknown;
  tZi: (...args: unknown[]) => unknown;
  tj: (...args: unknown[]) => unknown;
  v0o: (...args: unknown[]) => unknown;
  xK: (...args: unknown[]) => unknown;
  y0o: (...args: unknown[]) => unknown;
  zNr: (...args: unknown[]) => unknown;
  zrc: (...args: unknown[]) => unknown;
};
let peers: Chats2Peers | null = null;

/** Wire chats2 peers once companions land. */
export function setChats2Peers(next: Chats2Peers): void {
  peers = next;
}

/**
 * Bundle export `Yp` / internal `I1`.
 */
export function chats2() {
  if (peers == null) {
    throw new Error("chats2 peers are not configured");
  }
  return peers.e(() => {
    peers.Ho();
    peers.Au();
    peers.lp();
    peers.ed();
    peers.aZi();
    peers.C0o();
    peers.Frc();
    peers.AY();
    peers.LY();
    peers.oz();
    peers.rz();
    peers.ZA();
    peers.aj();
    peers.xK();
    peers.HA();
    peers.FY();
    peers.mrn();
    peers.$A();
    Hrc = [];
    Urc = peers.Ma(peers.Q, ({ get }) => {
      return get(peers.qA) != null;
    });
    F1 = peers.Oa(peers.Q, (e, { get }) => {
      let n = get(peers.kY),
        r = e.localProjectActionsEnabled || n,
        i = get(peers.r0o, {
          localProjectActionsEnabled: e.localProjectActionsEnabled,
        }),
        a = get(peers.GA),
        o = i === "recent",
        s = o && !a,
        c = get(peers.XMr) ? ["chats", "threads"] : ["threads", "chats"],
        { allSidebarThreadKeys, pinnedThreadKeys, unpinnedThreadKeys } = get(
          peers.X0o,
        ),
        f = peers.Hrc,
        p = allSidebarThreadKeys,
        m = unpinnedThreadKeys,
        h = get(peers.PY, pinnedThreadKeys),
        g = peers.Q0o({
          get,
          pinnedThreadKeys,
          sortMode: get(peers.IY),
        }),
        _ = h;
      g !== pinnedThreadKeys &&
        (_ = peers.v0o(
          g,
          new Map(
            h.map((item) => {
              return [item.task.key, item];
            }),
          ),
        ));
      let v = get(peers.PY, m),
        y = get(peers.PY, f),
        b = get(peers.PY, allSidebarThreadKeys),
        x = b.flatMap((item) => {
          return item.task.kind === "local" && item.task.conversation != null
            ? [item.task.conversation.id]
            : [];
        }),
        S = new Map(
          v.map((item) => {
            return [item.task.key, item];
          }),
        ),
        C = get(peers.zNr).filter((item) => {
          return item.launchMode === "create-stable-worktree";
        }),
        w = peers.sp(get, peers.Fl.PINNED_PROJECT_IDS),
        { projectlessThreadIds, threadProjectAssignments } = peers.crn(get, {
          conversationIds: x,
          projectlessThreadIds: peers.sp(get, peers.Fl.PROJECTLESS_THREAD_IDS),
          threadProjectAssignments: peers.sp(
            get,
            peers.Fl.THREAD_PROJECT_ASSIGNMENTS,
          ),
        }),
        D =
          projectlessThreadIds == null
            ? undefined
            : new Set(projectlessThreadIds);
      get(peers.ej);
      get(peers.XNr, allSidebarThreadKeys);
      let {
          groups,
          hasLoadedWorkspaceRootOptions,
          isWorkspaceRootOptionsLoading,
          workspaceRootOptions,
          discoveredThreadWorkspaceRootHints,
        } = get(peers.az, {
          threadKeys: p,
          enabled:
            !s ||
            (w != null && w.length > 0) ||
            allSidebarThreadKeys.length > 0 ||
            get(peers.Urc),
        }),
        { projectGroups, chatGptProjectMirrorThreadKeys } = peers.kZi(
          groups,
          e.sidebarMode,
        ),
        F = peers.FZi({
          groups: projectGroups,
          hiddenTaskKeys: new Set(pinnedThreadKeys),
        }),
        I = peers.Brc({
          explicitChatThreadKeys: chatGptProjectMirrorThreadKeys,
          allSidebarItems: get(peers.PY, p),
          groups: projectGroups,
          projectlessThreadIds: D,
        }),
        { pinnedGroups, unpinnedGroups } = peers.PZi(F, w),
        z = o && a ? peers.g0o(unpinnedGroups, S) : unpinnedGroups,
        B = peers.Irc({
          pinnedProjectGroups: pinnedGroups,
          unpinnedItems: v,
        }),
        V = [];
      if (!s) {
        let e = new Set(
          projectGroups.flatMap((item) => {
            return item.threadKeys;
          }),
        );
        V = peers
          .FSo({
            explicitChatThreadKeys: chatGptProjectMirrorThreadKeys,
            items: B,
            projectlessThreadIds: D,
          })
          .filter((item) => {
            return !e.has(item.task.key);
          });
      }
      let H = r ? V : [],
        U = H.map((item) => {
          return item.task.key;
        }),
        W =
          !s &&
          i !== "connection" &&
          (H.length > 0 || e.canStartProjectlessChat),
        G = get(
          peers.ZQi,
          B.filter((item) => {
            return true;
          }).map((item) => {
            return item.task.key;
          }),
        ),
        K =
          i === "connection"
            ? peers.eZi({
                connectionGroupOrder: peers.sp(
                  get,
                  peers.Fl.CONNECTION_GROUP_ORDER,
                ),
                groups: G,
                includeEmptyGroup: e.canStartProjectlessChat,
              })
            : [],
        q = (i === "connection" ? K.length : z.length) > 0 || C.length > 0,
        ee = peers.sp(get, peers.Fl.REMOTE_PROJECTS) ?? [],
        te =
          q ||
          pinnedGroups.length > 0 ||
          (workspaceRootOptions?.length ?? 0) > 0 ||
          peers.Lrc(ee, get(peers.tj)),
        ne =
          q ||
          pinnedGroups.length > 0 ||
          (workspaceRootOptions?.length ?? 0) > 0,
        re = s || q || pinnedGroups.length > 0,
        ie = c.filter((item) => {
          return item === "threads" ? re : item === "chats" ? W : true;
        }),
        ae = v,
        oe = pinnedGroups.flatMap((item) => {
          return peers.PSo(peers.y0o(item.threadKeys, S));
        }),
        se =
          i === "connection"
            ? K.flatMap((item) => {
                return peers.v0o(item.threadKeys, S);
              })
            : z.flatMap((item) => {
                return peers.PSo(peers.y0o(item.threadKeys, S));
              }),
        ce = B.filter((item) => {
          return false;
        }),
        le = peers
          .Nrc({
            additionalItemsBeforeSections: y,
            cloudThreadItems: ce,
            groupedThreadItems: se,
            pinnedItems: _,
            pinnedProjectThreadItems: oe,
            recentRenderableItems: ae,
            showRecent: s,
            visibleRecentChatItems: H,
            visibleSidebarSectionKeys: ie,
          })
          .map((item) => {
            return item.task.key;
          });
      return {
        allSidebarItems: b,
        allProjectGroups: projectGroups,
        connectionGroups: K,
        discoveredThreadWorkspaceRootHints,
        effectiveSidebarOrganizeMode: i,
        hasAnyProjectRows: te,
        hasAnyRecentSectionProjectRows: ne,
        hasConnectedRemoteHosts: n,
        hasLoadedProjectSources: hasLoadedWorkspaceRootOptions,
        hasUnpinnedProjectRows: q,
        isChronologicalList: o,
        isWorkspaceRootOptionsLoading,
        navigationThreadKeys: le,
        pendingStableWorktrees: C,
        pinnedProjectGroups: pinnedGroups,
        pinnedThreadKeys: g,
        projectSidebarEnabled: r,
        recentRenderableThreadKeys: ae.map((item) => {
          return item.task.key;
        }),
        showProjectsEmptyState: !s && !q && pinnedGroups.length > 0,
        showProjectsSection: re,
        showRecent: s,
        showRecentChatsSection: W,
        shortcutThreadKeys: le.slice(0, 9),
        threadProjectAssignments,
        homeContainerIdByThreadId: I,
        visibleRecentChatThreadKeys: U,
        visibleCloudThreadKeys: ce.map((item) => {
          return item.task.key;
        }),
        visibleSidebarSectionKeys: ie,
        visibleUnpinnedProjectGroups: z,
        workspaceRootOptions,
      };
    });
    Wrc = peers.Ea(peers.Q, (e) => {
      let t = (e) => {
          return {
            discoveredThreadWorkspaceRootHints:
              e.discoveredThreadWorkspaceRootHints,
            hasLoadedProjectSources: e.hasLoadedProjectSources,
            isWorkspaceRootOptionsLoading: e.isWorkspaceRootOptionsLoading,
            shortcutThreadKeys: e.shortcutThreadKeys,
            homeContainerIdByThreadId: e.homeContainerIdByThreadId,
            visibleSidebarSectionKeys: e.visibleSidebarSectionKeys,
          };
        },
        n = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, e),
          a = t(i);
        return (
          (n = peers.Vrc(n, {
            ...a,
            homeContainerIdByThreadId: peers.Rrc(
              n?.homeContainerIdByThreadId ?? new Map(),
              a.homeContainerIdByThreadId,
            ),
            visibleSidebarSectionKeys: peers.P1(
              n?.visibleSidebarSectionKeys ?? [],
              a.visibleSidebarSectionKeys,
            ),
            shortcutThreadKeys: peers.P1(
              n?.shortcutThreadKeys ?? [],
              a.shortcutThreadKeys,
            ),
          })),
          n
        );
      });
    });
    Grc = peers.Ea(peers.Q, (e) => {
      let t = (e) => {
          return {
            allProjectGroups: e.allProjectGroups,
            allSidebarItems: e.allSidebarItems,
            threadProjectAssignments: e.threadProjectAssignments,
          };
        },
        n = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, e),
          a = t(i);
        return (
          (n = peers.Vrc(n, {
            ...a,
            allProjectGroups: peers.zrc(
              n?.allProjectGroups ?? [],
              a.allProjectGroups,
            ),
            allSidebarItems: peers.P1(
              n?.allSidebarItems ?? [],
              a.allSidebarItems,
            ),
          })),
          n
        );
      });
    });
    Krc = peers.Ea(peers.Q, (e) => {
      let t = (e) => {
          return {
            connectionGroups: e.connectionGroups,
            effectiveSidebarOrganizeMode: e.effectiveSidebarOrganizeMode,
            hasAnyProjectRows: e.hasAnyProjectRows,
            hasConnectedRemoteHosts: e.hasConnectedRemoteHosts,
            hasUnpinnedProjectRows: e.hasUnpinnedProjectRows,
            isChronologicalList: e.isChronologicalList,
            isWorkspaceRootOptionsLoading: e.isWorkspaceRootOptionsLoading,
            pendingStableWorktrees: e.pendingStableWorktrees,
            projectSidebarEnabled: e.projectSidebarEnabled,
            recentRenderableThreadKeys: e.recentRenderableThreadKeys,
            showProjectsEmptyState: e.showProjectsEmptyState,
            showProjectsSection: e.showProjectsSection,
            showRecent: e.showRecent,
            showRecentChatsSection: e.showRecentChatsSection,
            visibleCloudThreadKeys: e.visibleCloudThreadKeys,
            visibleRecentChatThreadKeys: e.visibleRecentChatThreadKeys,
            visibleUnpinnedProjectGroups: e.visibleUnpinnedProjectGroups,
          };
        },
        n = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, e),
          a = t(i);
        return (
          (n = peers.Vrc(n, {
            ...a,
            connectionGroups: peers.tZi(
              n?.connectionGroups ?? [],
              a.connectionGroups,
            ),
            pendingStableWorktrees: peers.P1(
              n?.pendingStableWorktrees ?? [],
              a.pendingStableWorktrees,
            ),
            recentRenderableThreadKeys: peers.P1(
              n?.recentRenderableThreadKeys ?? [],
              a.recentRenderableThreadKeys,
            ),
            visibleRecentChatThreadKeys: peers.P1(
              n?.visibleRecentChatThreadKeys ?? [],
              a.visibleRecentChatThreadKeys,
            ),
            visibleCloudThreadKeys: peers.P1(
              n?.visibleCloudThreadKeys ?? [],
              a.visibleCloudThreadKeys,
            ),
            visibleUnpinnedProjectGroups: peers.zrc(
              n?.visibleUnpinnedProjectGroups ?? [],
              a.visibleUnpinnedProjectGroups,
            ),
          })),
          n
        );
      });
    });
    qrc = peers.Ea(peers.Q, (e) => {
      let t = (e) => {
          return {
            isWorkspaceRootOptionsLoading: e.isWorkspaceRootOptionsLoading,
            pinnedProjectGroups: e.pinnedProjectGroups,
            pinnedThreadKeys: e.pinnedThreadKeys,
          };
        },
        n = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, e),
          a = t(i);
        return (
          (n = peers.Vrc(n, {
            ...a,
            pinnedProjectGroups: peers.zrc(
              n?.pinnedProjectGroups ?? [],
              a.pinnedProjectGroups,
            ),
            pinnedThreadKeys: peers.P1(
              n?.pinnedThreadKeys ?? [],
              a.pinnedThreadKeys,
            ),
          })),
          n
        );
      });
    });
    Jrc = peers.Ea(peers.Q, (e) => {
      let t = (e) => {
          return {
            effectiveSidebarOrganizeMode: e.effectiveSidebarOrganizeMode,
            projectSidebarEnabled: e.projectSidebarEnabled,
            showProjectsSection: e.showProjectsSection,
            showRecent: e.showRecent,
            showRecentChatsSection: e.showRecentChatsSection,
          };
        },
        n = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, e);
        return ((n = peers.Vrc(n, t(i))), n);
      });
    });
    Yrc = peers.Ea(peers.Q, (e) => {
      let t = (e) => {
          return {
            effectiveSidebarOrganizeMode: e.effectiveSidebarOrganizeMode,
            hasAnyProjectRows: e.hasAnyProjectRows,
            hasConnectedRemoteHosts: e.hasConnectedRemoteHosts,
            projectSidebarEnabled: e.projectSidebarEnabled,
            showProjectsSection: e.showProjectsSection,
            showRecentChatsSection: e.showRecentChatsSection,
            visibleRecentChatThreadKeys: e.visibleRecentChatThreadKeys,
          };
        },
        n = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, e),
          a = t(i);
        return (
          (n = peers.Vrc(n, {
            ...a,
            visibleRecentChatThreadKeys: peers.P1(
              n?.visibleRecentChatThreadKeys ?? [],
              a.visibleRecentChatThreadKeys,
            ),
          })),
          n
        );
      });
    });
    Xrc = peers.Oa(peers.Q, (e, { get }) => {
      return !get(peers.F1, e).hasAnyProjectRows;
    });
    Zrc = peers.Oa(
      peers.Q,
      (e, { get }) => {
        return get(peers.F1, e).navigationThreadKeys;
      },
      {
        isEqual: peers.QA,
      },
    );
  });
}
