// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Nps`) / export `Xx`.

export type BindDeferredXxPeers = {
  $w: (...args: unknown[]) => unknown;
  Aps: (...args: unknown[]) => unknown;
  Cps: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  Dh: (...args: unknown[]) => unknown;
  Dps: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  Eps: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Jfs: (...args: unknown[]) => unknown;
  Mo: (...args: unknown[]) => unknown;
  Mps: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Ops: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Sps: (...args: unknown[]) => unknown;
  Tps: (...args: unknown[]) => unknown;
  Yfs: (...args: unknown[]) => unknown;
  aps: (...args: unknown[]) => unknown;
  bD: (...args: unknown[]) => unknown;
  cps: (...args: unknown[]) => unknown;
  cu: (...args: unknown[]) => unknown;
  dps: (...args: unknown[]) => unknown;
  drr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  fD: (...args: unknown[]) => unknown;
  gD: (...args: unknown[]) => unknown;
  iD: (...args: unknown[]) => unknown;
  jps: (...args: unknown[]) => unknown;
  kps: (...args: unknown[]) => unknown;
  length: (...args: unknown[]) => unknown;
  lps: (...args: unknown[]) => unknown;
  og: (...args: unknown[]) => unknown;
  orr: (...args: unknown[]) => unknown;
  pD: (...args: unknown[]) => unknown;
  qfs: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  rjr: (...args: unknown[]) => unknown;
  rps: (...args: unknown[]) => unknown;
  sps: (...args: unknown[]) => unknown;
  srr: (...args: unknown[]) => unknown;
  wps: (...args: unknown[]) => unknown;
};

let peers: BindDeferredXxPeers | null = null;

/** Wire bindDeferredXx peers once companions land. */
export function setBindDeferredXxPeers(next: BindDeferredXxPeers): void {
  peers = next;
}

/**
 * Bundle export `Xx` / internal `Nps`.
 */
export function bindDeferredXx() {
  if (peers == null) {
    throw new Error("bindDeferredXx peers are not configured");
  }

  return peers.e(() => {
    ((xps = peers.r(peers.cu(), 1)),
      (Sps = peers.r(peers.Mo(), 1)),
      peers.Ho(),
      peers.DD(),
      peers.Yfs(),
      peers.og(),
      peers.rjr(),
      peers.ed(),
      peers.Dh(),
      peers.rps(),
      peers.$w(),
      peers.aps(),
      (Cps = []),
      (wps = []),
      (Tps = []),
      (Eps = new WeakMap()),
      (Dps = new WeakMap()),
      (Ops = 144),
      (kps = {
        conversationTurns: peers.wps,
        hasInheritedParentTurns: !1,
        hasRenderableTurns: !1,
        hasUserMessage: !1,
        historyTimeline: null,
        latestVisibleTurnId: null,
        visibleTurnEntries: peers.Tps,
      }),
      (Aps = /^(.*)-berry-display-(\d+)$/),
      (jps = peers.Oa(
        peers.Q,
        (
          { conversationId: e, isBackgroundSubagentsEnabled: t },
          { get: n },
        ) => {
          if (peers.e == null) return peers.kps;
          let r = n(peers.Jfs, peers.e),
            i = (n(peers.iD, peers.e) ?? !1) || peers.r != null,
            a = n(peers.pD, peers.e) ?? peers.Cps;
          n(peers.fD, peers.e);
          let o = t ? (n(peers.gD, peers.e) ?? null) : null,
            s = n(peers.Eh, `209459230`),
            c = s
              ? peers.r == null
                ? n(peers.srr, peers.e)
                : peers.qfs(peers.r)
              : null,
            l = peers.sps(c),
            u = s && o != null ? n(peers.srr, o) : null,
            d = peers.sps(u),
            f = peers.r?.turns ?? n(peers.bD, peers.e) ?? peers.wps,
            p = l?.length === f.length && (o == null || d != null),
            m =
              p && o != null && l != null && c != null && d != null && u != null
                ? peers.cps({
                    conversationId: peers.e,
                    getTurn: (e, t) =>
                      n(peers.drr, {
                        conversationId: peers.e,
                        entityKey: t,
                      }),
                    historyEntries: l,
                    historyTimeline: c,
                    parentConversationId: o,
                    parentHistoryEntries: d,
                    parentHistoryTimeline: u,
                  })
                : void 0,
            h =
              o != null && m == null
                ? (n(peers.bD, o) ?? peers.wps)
                : peers.wps;
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
            liveTailHistoryPositionKey: p ? n(peers.orr, peers.e) : null,
            parentConversationTurns: h,
            subagentParentThreadId: o,
          });
        },
      )),
      (Mps = peers.Oa(
        peers.Q,
        (e, { get: t }) => {
          let n =
            peers.e.conversationId == null
              ? null
              : t(peers.Jfs, peers.e.conversationId);
          return peers.lps(t(peers.jps, peers.e), n != null);
        },
        {
          isEqual: peers.Sps.default,
        },
      )));
  });
}
