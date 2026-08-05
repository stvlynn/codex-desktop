// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jps`) / export `Qx`.

export type BindBindDeferredUiQxPeers = {
  Cps: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  Jfs: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  bD: (...args: unknown[]) => unknown;
  cps: (...args: unknown[]) => unknown;
  dps: (...args: unknown[]) => unknown;
  drr: (...args: unknown[]) => unknown;
  fD: (...args: unknown[]) => unknown;
  gD: (...args: unknown[]) => unknown;
  iD: (...args: unknown[]) => unknown;
  kps: (...args: unknown[]) => unknown;
  length: (...args: unknown[]) => unknown;
  orr: (...args: unknown[]) => unknown;
  pD: (...args: unknown[]) => unknown;
  qfs: (...args: unknown[]) => unknown;
  sps: (...args: unknown[]) => unknown;
  srr: (...args: unknown[]) => unknown;
  turns: (...args: unknown[]) => unknown;
  wps: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiQxPeers | null = null;

/** Wire bindBindDeferredUiQx peers once companions land. */
export function setBindBindDeferredUiQxPeers(
  next: BindBindDeferredUiQxPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Qx` / internal `jps`.
 */
export function bindBindDeferredUiQx() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiQx peers are not configured");
  }

  return peers.Oa(
    peers.Q,
    ({ conversationId: e, isBackgroundSubagentsEnabled: t }, { get: n }) => {
      if (e == null) return peers.kps;
      let r = n(peers.Jfs, e),
        i = (n(peers.iD, e) ?? !1) || r != null,
        a = n(peers.pD, e) ?? peers.Cps;
      n(peers.fD, e);
      let o = t ? (n(peers.gD, e) ?? null) : null,
        s = n(peers.Eh, `209459230`),
        c = s ? (r == null ? n(peers.srr, e) : peers.qfs(r)) : null,
        l = peers.sps(c),
        u = s && o != null ? n(peers.srr, o) : null,
        d = peers.sps(u),
        f = r?.turns ?? n(peers.bD, e) ?? peers.wps,
        p = l?.length === f.length && (o == null || d != null),
        m =
          p && o != null && l != null && c != null && d != null && u != null
            ? peers.cps({
                conversationId: e,
                getTurn: (e, t) =>
                  n(peers.drr, {
                    conversationId: e,
                    entityKey: t,
                  }),
                historyEntries: l,
                historyTimeline: c,
                parentConversationId: o,
                parentHistoryEntries: d,
                parentHistoryTimeline: u,
              })
            : void 0,
        h = o != null && m == null ? (n(peers.bD, o) ?? peers.wps) : peers.wps;
      return peers.dps({
        conversationRequests: a,
        hideTodoListItems: !1,
        mergeBerryDisplayTurnsForPIA: !1,
        preserveServerUserMessages: !1,
        conversationTurns: f,
        hasConversation: i,
        historyEntriesByTurnIndex: p ? l : void 0,
        historyTimeline: p ? (c ?? void 0) : void 0,
        isBackgroundSubagentsEnabled: t,
        hideReactionInputs: !1,
        inheritedHistoryPositionKeys: m,
        liveTailHistoryPositionKey: p ? n(peers.orr, e) : null,
        parentConversationTurns: h,
        subagentParentThreadId: o,
      });
    },
  );
}
