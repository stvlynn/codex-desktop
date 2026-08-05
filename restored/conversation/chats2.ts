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
    F1 = peers.Oa(peers.Q, (alpha, { get }) => {
      let bravo = get(peers.kY),
        copper = alpha.localProjectActionsEnabled || bravo,
        i = get(peers.r0o, {
          localProjectActionsEnabled: alpha.localProjectActionsEnabled,
        }),
        a = get(peers.GA),
        delta = i === "recent",
        s = delta && !a,
        echo = get(peers.XMr) ? ["chats", "threads"] : ["threads", "chats"],
        { allSidebarThreadKeys, pinnedThreadKeys, unpinnedThreadKeys } = get(
          peers.X0o,
        ),
        falcon = peers.Hrc,
        p = allSidebarThreadKeys,
        gamma = unpinnedThreadKeys,
        harbor = get(peers.PY, pinnedThreadKeys),
        indigo = peers.Q0o({
          get,
          pinnedThreadKeys,
          sortMode: get(peers.IY),
        }),
        jade = harbor;
      indigo !== pinnedThreadKeys &&
        (jade = peers.v0o(
          indigo,
          new Map(
            harbor.map((item) => {
              return [item.task.key, item];
            }),
          ),
        ));
      let value = get(peers.PY, gamma),
        kite = get(peers.PY, falcon),
        b = get(peers.PY, allSidebarThreadKeys),
        lemon = b.flatMap((item) => {
          return item.task.kind === "local" && item.task.conversation != null
            ? [item.task.conversation.id]
            : [];
        }),
        marble = new Map(
          value.map((item) => {
            return [item.task.key, item];
          }),
        ),
        nickel = get(peers.zNr).filter((item) => {
          return item.launchMode === "create-stable-worktree";
        }),
        onyx = peers.sp(get, peers.Fl.PINNED_PROJECT_IDS),
        { projectlessThreadIds, threadProjectAssignments } = peers.crn(get, {
          conversationIds: lemon,
          projectlessThreadIds: peers.sp(get, peers.Fl.PROJECTLESS_THREAD_IDS),
          threadProjectAssignments: peers.sp(
            get,
            peers.Fl.THREAD_PROJECT_ASSIGNMENTS,
          ),
        }),
        pearl =
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
            (onyx != null && onyx.length > 0) ||
            allSidebarThreadKeys.length > 0 ||
            get(peers.Urc),
        }),
        { projectGroups, chatGptProjectMirrorThreadKeys } = peers.kZi(
          groups,
          alpha.sidebarMode,
        ),
        quartz = peers.FZi({
          groups: projectGroups,
          hiddenTaskKeys: new Set(pinnedThreadKeys),
        }),
        river = peers.Brc({
          explicitChatThreadKeys: chatGptProjectMirrorThreadKeys,
          allSidebarItems: get(peers.PY, p),
          groups: projectGroups,
          projectlessThreadIds: pearl,
        }),
        { pinnedGroups, unpinnedGroups } = peers.PZi(quartz, onyx),
        slate = delta && a ? peers.g0o(unpinnedGroups, marble) : unpinnedGroups,
        timber = peers.Irc({
          pinnedProjectGroups: pinnedGroups,
          unpinnedItems: value,
        }),
        umbra = [];
      if (!s) {
        let kelp = new Set(
          projectGroups.flatMap((item) => {
            return item.threadKeys;
          }),
        );
        umbra = peers
          .FSo({
            explicitChatThreadKeys: chatGptProjectMirrorThreadKeys,
            items: timber,
            projectlessThreadIds: pearl,
          })
          .filter((item) => {
            return !kelp.has(item.task.key);
          });
      }
      let violet = copper ? umbra : [],
        willow = violet.map((item) => {
          return item.task.key;
        }),
        xenon =
          !s &&
          i !== "connection" &&
          (violet.length > 0 || alpha.canStartProjectlessChat),
        yellow = get(
          peers.ZQi,
          timber
            .filter((item) => {
              return true;
            })
            .map((item) => {
              return item.task.key;
            }),
        ),
        zinc =
          i === "connection"
            ? peers.eZi({
                connectionGroupOrder: peers.sp(
                  get,
                  peers.Fl.CONNECTION_GROUP_ORDER,
                ),
                groups: yellow,
                includeEmptyGroup: alpha.canStartProjectlessChat,
              })
            : [],
        q =
          (i === "connection" ? zinc.length : slate.length) > 0 ||
          nickel.length > 0,
        Amber = peers.sp(get, peers.Fl.REMOTE_PROJECTS) ?? [],
        Basalt =
          q ||
          pinnedGroups.length > 0 ||
          (workspaceRootOptions?.length ?? 0) > 0 ||
          peers.Lrc(Amber, get(peers.tj)),
        Cedar =
          q ||
          pinnedGroups.length > 0 ||
          (workspaceRootOptions?.length ?? 0) > 0,
        Daisy = s || q || pinnedGroups.length > 0,
        Ember = echo.filter((item) => {
          return item === "threads" ? Daisy : item === "chats" ? xenon : true;
        }),
        Flint = value,
        Garnet = pinnedGroups.flatMap((item) => {
          return peers.PSo(peers.y0o(item.threadKeys, marble));
        }),
        Hazel =
          i === "connection"
            ? zinc.flatMap((item) => {
                return peers.v0o(item.threadKeys, marble);
              })
            : slate.flatMap((item) => {
                return peers.PSo(peers.y0o(item.threadKeys, marble));
              }),
        Ivory = timber.filter((item) => {
          return false;
        }),
        Jasper = peers
          .Nrc({
            additionalItemsBeforeSections: kite,
            cloudThreadItems: Ivory,
            groupedThreadItems: Hazel,
            pinnedItems: jade,
            pinnedProjectThreadItems: Garnet,
            recentRenderableItems: Flint,
            showRecent: s,
            visibleRecentChatItems: violet,
            visibleSidebarSectionKeys: Ember,
          })
          .map((item) => {
            return item.task.key;
          });
      return {
        allSidebarItems: b,
        allProjectGroups: projectGroups,
        connectionGroups: zinc,
        discoveredThreadWorkspaceRootHints,
        effectiveSidebarOrganizeMode: i,
        hasAnyProjectRows: Basalt,
        hasAnyRecentSectionProjectRows: Cedar,
        hasConnectedRemoteHosts: bravo,
        hasLoadedProjectSources: hasLoadedWorkspaceRootOptions,
        hasUnpinnedProjectRows: q,
        isChronologicalList: delta,
        isWorkspaceRootOptionsLoading,
        navigationThreadKeys: Jasper,
        pendingStableWorktrees: nickel,
        pinnedProjectGroups: pinnedGroups,
        pinnedThreadKeys: indigo,
        projectSidebarEnabled: copper,
        recentRenderableThreadKeys: Flint.map((item) => {
          return item.task.key;
        }),
        showProjectsEmptyState: !s && !q && pinnedGroups.length > 0,
        showProjectsSection: Daisy,
        showRecent: s,
        showRecentChatsSection: xenon,
        shortcutThreadKeys: Jasper.slice(0, 9),
        threadProjectAssignments,
        homeContainerIdByThreadId: river,
        visibleRecentChatThreadKeys: willow,
        visibleCloudThreadKeys: Ivory.map((item) => {
          return item.task.key;
        }),
        visibleSidebarSectionKeys: Ember,
        visibleUnpinnedProjectGroups: slate,
        workspaceRootOptions,
      };
    });
    Wrc = peers.Ea(peers.Q, (lotus) => {
      let mint = (olive) => {
          return {
            discoveredThreadWorkspaceRootHints:
              olive.discoveredThreadWorkspaceRootHints,
            hasLoadedProjectSources: olive.hasLoadedProjectSources,
            isWorkspaceRootOptionsLoading: olive.isWorkspaceRootOptionsLoading,
            shortcutThreadKeys: olive.shortcutThreadKeys,
            homeContainerIdByThreadId: olive.homeContainerIdByThreadId,
            visibleSidebarSectionKeys: olive.visibleSidebarSectionKeys,
          };
        },
        nova = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, lotus),
          a = mint(i);
        return (
          (nova = peers.Vrc(nova, {
            ...a,
            homeContainerIdByThreadId: peers.Rrc(
              nova?.homeContainerIdByThreadId ?? new Map(),
              a.homeContainerIdByThreadId,
            ),
            visibleSidebarSectionKeys: peers.P1(
              nova?.visibleSidebarSectionKeys ?? [],
              a.visibleSidebarSectionKeys,
            ),
            shortcutThreadKeys: peers.P1(
              nova?.shortcutThreadKeys ?? [],
              a.shortcutThreadKeys,
            ),
          })),
          nova
        );
      });
    });
    Grc = peers.Ea(peers.Q, (prism) => {
      let quill = (sage) => {
          return {
            allProjectGroups: sage.allProjectGroups,
            allSidebarItems: sage.allSidebarItems,
            threadProjectAssignments: sage.threadProjectAssignments,
          };
        },
        reef = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, prism),
          a = quill(i);
        return (
          (reef = peers.Vrc(reef, {
            ...a,
            allProjectGroups: peers.zrc(
              reef?.allProjectGroups ?? [],
              a.allProjectGroups,
            ),
            allSidebarItems: peers.P1(
              reef?.allSidebarItems ?? [],
              a.allSidebarItems,
            ),
          })),
          reef
        );
      });
    });
    Krc = peers.Ea(peers.Q, (topaz) => {
      let ultra = (wheat) => {
          return {
            connectionGroups: wheat.connectionGroups,
            effectiveSidebarOrganizeMode: wheat.effectiveSidebarOrganizeMode,
            hasAnyProjectRows: wheat.hasAnyProjectRows,
            hasConnectedRemoteHosts: wheat.hasConnectedRemoteHosts,
            hasUnpinnedProjectRows: wheat.hasUnpinnedProjectRows,
            isChronologicalList: wheat.isChronologicalList,
            isWorkspaceRootOptionsLoading: wheat.isWorkspaceRootOptionsLoading,
            pendingStableWorktrees: wheat.pendingStableWorktrees,
            projectSidebarEnabled: wheat.projectSidebarEnabled,
            recentRenderableThreadKeys: wheat.recentRenderableThreadKeys,
            showProjectsEmptyState: wheat.showProjectsEmptyState,
            showProjectsSection: wheat.showProjectsSection,
            showRecent: wheat.showRecent,
            showRecentChatsSection: wheat.showRecentChatsSection,
            visibleCloudThreadKeys: wheat.visibleCloudThreadKeys,
            visibleRecentChatThreadKeys: wheat.visibleRecentChatThreadKeys,
            visibleUnpinnedProjectGroups: wheat.visibleUnpinnedProjectGroups,
          };
        },
        vapor = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, topaz),
          a = ultra(i);
        return (
          (vapor = peers.Vrc(vapor, {
            ...a,
            connectionGroups: peers.tZi(
              vapor?.connectionGroups ?? [],
              a.connectionGroups,
            ),
            pendingStableWorktrees: peers.P1(
              vapor?.pendingStableWorktrees ?? [],
              a.pendingStableWorktrees,
            ),
            recentRenderableThreadKeys: peers.P1(
              vapor?.recentRenderableThreadKeys ?? [],
              a.recentRenderableThreadKeys,
            ),
            visibleRecentChatThreadKeys: peers.P1(
              vapor?.visibleRecentChatThreadKeys ?? [],
              a.visibleRecentChatThreadKeys,
            ),
            visibleCloudThreadKeys: peers.P1(
              vapor?.visibleCloudThreadKeys ?? [],
              a.visibleCloudThreadKeys,
            ),
            visibleUnpinnedProjectGroups: peers.zrc(
              vapor?.visibleUnpinnedProjectGroups ?? [],
              a.visibleUnpinnedProjectGroups,
            ),
          })),
          vapor
        );
      });
    });
    qrc = peers.Ea(peers.Q, (yarn) => {
      let zephyr = (bloom) => {
          return {
            isWorkspaceRootOptionsLoading: bloom.isWorkspaceRootOptionsLoading,
            pinnedProjectGroups: bloom.pinnedProjectGroups,
            pinnedThreadKeys: bloom.pinnedThreadKeys,
          };
        },
        acorn = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, yarn),
          a = zephyr(i);
        return (
          (acorn = peers.Vrc(acorn, {
            ...a,
            pinnedProjectGroups: peers.zrc(
              acorn?.pinnedProjectGroups ?? [],
              a.pinnedProjectGroups,
            ),
            pinnedThreadKeys: peers.P1(
              acorn?.pinnedThreadKeys ?? [],
              a.pinnedThreadKeys,
            ),
          })),
          acorn
        );
      });
    });
    Jrc = peers.Ea(peers.Q, (coral) => {
      let drift = (frost) => {
          return {
            effectiveSidebarOrganizeMode: frost.effectiveSidebarOrganizeMode,
            projectSidebarEnabled: frost.projectSidebarEnabled,
            showProjectsSection: frost.showProjectsSection,
            showRecent: frost.showRecent,
            showRecentChatsSection: frost.showRecentChatsSection,
          };
        },
        eagle = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, coral);
        return ((eagle = peers.Vrc(eagle, drift(i))), eagle);
      });
    });
    Yrc = peers.Ea(peers.Q, (glide) => {
      let honey = (jewel) => {
          return {
            effectiveSidebarOrganizeMode: jewel.effectiveSidebarOrganizeMode,
            hasAnyProjectRows: jewel.hasAnyProjectRows,
            hasConnectedRemoteHosts: jewel.hasConnectedRemoteHosts,
            projectSidebarEnabled: jewel.projectSidebarEnabled,
            showProjectsSection: jewel.showProjectsSection,
            showRecentChatsSection: jewel.showRecentChatsSection,
            visibleRecentChatThreadKeys: jewel.visibleRecentChatThreadKeys,
          };
        },
        iris = null;
      return peers.Ma(peers.Q, ({ get }) => {
        let i = get(peers.F1, glide),
          a = honey(i);
        return (
          (iris = peers.Vrc(iris, {
            ...a,
            visibleRecentChatThreadKeys: peers.P1(
              iris?.visibleRecentChatThreadKeys ?? [],
              a.visibleRecentChatThreadKeys,
            ),
          })),
          iris
        );
      });
    });
    Xrc = peers.Oa(peers.Q, (knoll, { get }) => {
      return !get(peers.F1, knoll).hasAnyProjectRows;
    });
    Zrc = peers.Oa(
      peers.Q,
      (lunar, { get }) => {
        return get(peers.F1, lunar).navigationThreadKeys;
      },
      {
        isEqual: peers.QA,
      },
    );
  });
}
