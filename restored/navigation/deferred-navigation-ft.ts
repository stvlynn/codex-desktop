// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BY`) / export `FT`.

export type BindDeferredNavigationFTPeers = {
  $R: (...args: unknown[]) => unknown;
  A2o: (...args: unknown[]) => unknown;
  C2o: (...args: unknown[]) => unknown;
  CK: (...args: unknown[]) => unknown;
  E2o: (...args: unknown[]) => unknown;
  F2o: (...args: unknown[]) => unknown;
  Fl: (...args: unknown[]) => unknown;
  I2o: (...args: unknown[]) => unknown;
  IY: (...args: unknown[]) => unknown;
  L2o: (...args: unknown[]) => unknown;
  M2o: (...args: unknown[]) => unknown;
  O2o: (...args: unknown[]) => unknown;
  OY: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PZi: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Q0o: (...args: unknown[]) => unknown;
  QNr: (...args: unknown[]) => unknown;
  R2o: (...args: unknown[]) => unknown;
  RY: (...args: unknown[]) => unknown;
  S2o: (...args: unknown[]) => unknown;
  T2o: (...args: unknown[]) => unknown;
  W2o: (...args: unknown[]) => unknown;
  X0o: (...args: unknown[]) => unknown;
  YA: (...args: unknown[]) => unknown;
  ZNr: (...args: unknown[]) => unknown;
  ZQi: (...args: unknown[]) => unknown;
  az: (...args: unknown[]) => unknown;
  b2o: (...args: unknown[]) => unknown;
  crn: (...args: unknown[]) => unknown;
  eZi: (...args: unknown[]) => unknown;
  flatMap: (...args: unknown[]) => unknown;
  i0o: (...args: unknown[]) => unknown;
  kZi: (...args: unknown[]) => unknown;
  mZi: (...args: unknown[]) => unknown;
  sp: (...args: unknown[]) => unknown;
  task: (...args: unknown[]) => unknown;
  threadKeys: (...args: unknown[]) => unknown;
  x2o: (...args: unknown[]) => unknown;
  zY: (...args: unknown[]) => unknown;
};

let peers: BindDeferredNavigationFTPeers | null = null;

/** Wire bindDeferredNavigationFT peers once companions land. */
export function setBindDeferredNavigationFTPeers(next: BindDeferredNavigationFTPeers): void {
  peers = next;
}

/**
 * Bundle export `FT` / internal `BY`.
 */
export function bindDeferredNavigationFT() {
  if (peers == null) {
    throw new Error("bindDeferredNavigationFT peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t, scope: n }) => {
    let { allSidebarThreadKeys: r, pinnedThreadKeys: i } = t(peers.X0o),
      a = peers.zY,
      o = r,
      s = peers.A2o(t, o),
      c = peers.Q0o({
        get: t,
        pinnedThreadKeys: i,
        sortMode: t(peers.IY),
      }),
      l = new Map(r.map((e) => [e, t(peers.QNr, e)])),
      u = new Set(r.filter((e) => t(peers.ZNr, e))),
      d = t(peers.YA),
      f = d == null || u.has(d) ? u : new Set([...u, d]),
      p = new Map(r.map((e) => [e, peers.i0o(l.get(e) ?? `idle`, u.has(e))])),
      m = s.flatMap((e) =>
        e.task.kind === `local` && e.task.conversation != null
          ? [e.task.conversation.id]
          : [],
      ),
      h = peers.sp(t, peers.Fl.SIDEBAR_PROJECT_THREAD_ORDERS),
      { projectlessThreadIds: g } = peers.crn(t, {
        conversationIds: m,
        projectlessThreadIds: peers.sp(t, peers.Fl.PROJECTLESS_THREAD_IDS),
        threadProjectAssignments: peers.sp(
          t,
          peers.Fl.THREAD_PROJECT_ASSIGNMENTS,
        ),
      }),
      _ = peers.sp(t, peers.Fl.PINNED_PROJECT_IDS),
      v = t(peers.az, {
        threadKeys: o,
        enabled: !0,
      }),
      { projectGroups: y, chatGptProjectMirrorThreadKeys: b } = peers.kZi(
        v.groups,
        e,
      ),
      { isWorkspaceRootOptionsLoading: x } = v,
      { pinnedGroups: S, unpinnedGroups: C } = peers.PZi(y, _),
      w = peers.S2o({
        groups: S,
        items: s,
      }),
      T = peers.C2o({
        groups: peers.S2o({
          groups: C,
          items: s,
        }),
        items: s,
        projectOrder: peers.sp(t, peers.Fl.PROJECT_ORDER),
      }),
      E = peers.O2o({
        explicitChatThreadKeys: b,
        items: s,
        projectGroups: y,
        projectlessThreadIds: new Set(g ?? []),
      }),
      D = new Map(s.map((e) => [e.task.key, e])),
      { chatSortMode: O, projectSortMode: k } = t(peers.$R),
      A = t(peers.mZi) ?? null,
      j = e === `chatgpt` ? peers.L2o : peers.I2o,
      M = j.get(n.node) ?? peers.F2o,
      N = (e) => {
        if (k !== `manual`) return null;
        let t = M.projectGroups.find((t) => t.projectId === e.projectId),
          n = peers.E2o({
            currentThreadKeys: e.threadKeys,
            previousProjectThreadKeys: t?.threadKeys,
            previousPinnedThreadKeys: M.pinnedProjectThreadKeys,
          });
        return {
          threadIds: peers.CK(
            n,
            n.flatMap((e) => {
              let t = D.get(e)?.task;
              return t == null ? [] : [t];
            }),
          ),
        };
      };
    ((T = T.map((e) => {
      let t = peers.T2o({
          items: e.threadKeys.flatMap((e) => {
            let t = D.get(e);
            return t == null ? [] : [t];
          }),
          attentionStateByThreadKey: l,
          manualOrder: h?.[e.projectId] ?? N(e),
          sortMode: k,
          unreadThreadKeys: f,
        }),
        n = peers.RY(e.threadKeys, t);
      return n === e.threadKeys
        ? e
        : {
            ...e,
            threadKeys: n,
          };
    })),
      (E = peers.T2o({
        items: E.flatMap((e) => {
          let t = D.get(e);
          return t == null ? [] : [t];
        }),
        attentionStateByThreadKey: l,
        manualOrder: A,
        sortMode: O,
        unreadThreadKeys: f,
      })));
    let P = peers.T2o({
        items: s.filter((e) => !e.isPinned),
        attentionStateByThreadKey: l,
        manualOrder: A,
        sortMode: O,
        unreadThreadKeys: f,
      }),
      F = t(peers.W2o, `codex`),
      I = F === `connection` || t(peers.W2o, `chatgpt`) === `connection`,
      L = peers.x2o({
        pinnedProjectGroups: S,
        threadKeys: P,
      }),
      R = I
        ? peers.eZi({
            connectionGroupOrder: peers.sp(t, peers.Fl.CONNECTION_GROUP_ORDER),
            groups: t(peers.ZQi, L),
            includeEmptyGroup: t(peers.OY),
          })
        : void 0,
      z = w.flatMap((e) =>
        peers.T2o({
          attentionStateByThreadKey: l,
          items: e.threadKeys.flatMap((e) => {
            let t = D.get(e);
            return t == null ? [] : [t];
          }),
          manualOrder: h?.[e.projectId] ?? N(e),
          sortMode: k,
          unreadThreadKeys: f,
        }),
      ),
      B = T.slice(0, 5).flatMap((e) => e.threadKeys),
      V = peers.b2o({
        aeonThreadKeys: a,
        connectionThreadKeys: R?.flatMap((e) => e.threadKeys),
        mode: F,
        pinnedProjectThreadKeys: z,
        pinnedThreadKeys: c,
        chatSectionThreadKeys: E,
        projectThreadKeys: B,
        threadKeys: P,
      }),
      H = peers.M2o(M, {
        connectionGroups: R,
        hasLoadedProjectSources: v.hasLoadedWorkspaceRootOptions,
        isWorkspaceRootOptionsLoading: x,
        navigationThreadKeys: V,
        pinnedProjectThreadKeys: z,
        projectGroups: T,
        chatSectionThreadKeys: E,
        shortcutThreadKeys: V.slice(0, peers.R2o),
        threadAttentionStateByKey: p,
        threadRecencyAtByKey: new Map(s.map((e) => [e.task.key, e.recencyAt])),
        threadKeys: P,
      });
    return (j.set(n.node, H), H);
  });
}
