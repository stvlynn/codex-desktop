// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lcl`) / export `Wc`.

export type BuildTurnActivityItemsSummaryPeers = {
  acl: (...args: unknown[]) => unknown;
  icl: (...args: unknown[]) => unknown;
  kl: (...args: unknown[]) => unknown;
  parentTurnKey: (...args: unknown[]) => unknown;
  showInlineActivity: (...args: unknown[]) => unknown;
  statusSummary: (...args: unknown[]) => unknown;
};
let peers: BuildTurnActivityItemsSummaryPeers | null = null;

/** Wire buildTurnActivityItemsSummary peers once companions land. */
export function setBuildTurnActivityItemsSummaryPeers(
  next: BuildTurnActivityItemsSummaryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Wc` / internal `lcl`.
 */
export function buildTurnActivityItemsSummary({
  activityItems,
  backgroundAgents,
  laterActivityItems,
  turnKey,
  intl,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("buildTurnActivityItemsSummary peers are not configured");
  }
  let a = new Map(
      backgroundAgents.map((item) => {
        return [item.conversationId, item];
      }),
    ),
    o = new Map();
  for (let t of activityItems) o.set(peers.kl(t.agentThreadId), t);
  return Array.from(o, ([e, t]) => {
    let o = a.get(e),
      s = laterActivityItems.some((item) => {
        return item.agentThreadId === t.agentThreadId;
      }),
      c = o?.parentTurnKey === turnKey,
      l = c && !s,
      u = peers.icl(intl, t.displayName),
      d;
    return (
      (d =
        o == null
          ? t.displayStatus === "interrupted"
            ? "done"
            : "active"
          : c
            ? o.status
            : "done"),
      {
        activityStatus: d === "done" && l ? "done" : t.displayStatus,
        conversationId: e,
        displayName: u,
        showInlineActivity: o?.showInlineActivity ?? true,
        status: d,
        statusSummary:
          (c ? o?.statusSummary : null) ?? peers.acl(intl, u, t.displayStatus),
      }
    );
  });
}
