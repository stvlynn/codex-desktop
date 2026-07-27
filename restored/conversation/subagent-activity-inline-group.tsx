// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oAl`) / export `lc`.

export type SubagentActivityInlineGroupPeers = {
  $kl: (...args: unknown[]) => unknown;
  Yna: (...args: unknown[]) => unknown;
  cAl: (...args: unknown[]) => unknown;
  lAl: (...args: unknown[]) => unknown;
  sAl: (...args: unknown[]) => unknown;
  uAl: (...args: unknown[]) => unknown;
};
let peers: SubagentActivityInlineGroupPeers | null = null;

/** Wire SubagentActivityInlineGroup peers once companions land. */
export function setSubagentActivityInlineGroupPeers(
  next: SubagentActivityInlineGroupPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lc` / internal `oAl`.
 */
export function SubagentActivityInlineGroup(props: unknown) {
  const Kl = peers.$kl;
  if (peers == null) {
    throw new Error("SubagentActivityInlineGroup peers are not configured");
  }
  let { rows, statusLabel, shouldAnimateEntrance, onEntranceAnimationEnd } =
      props,
    o = peers.lAl.useContext(peers.Yna),
    s;
  {
    let e;
    e = (e) => {
      return {
        animateEntrance: shouldAnimateEntrance?.(e.conversationId) ?? true,
        id: e.conversationId,
        label: e.displayName,
        seed: e.conversationId,
        onAnimationEnd:
          onEntranceAnimationEnd == null
            ? undefined
            : () => {
                return onEntranceAnimationEnd(e.conversationId);
              },
        onClick:
          o == null
            ? undefined
            : () => {
                o({
                  conversationId: e.conversationId,
                  displayName: e.displayName,
                  showInlineActivity: e.showInlineActivity ?? true,
                  agentRole: null,
                  spawnModel: null,
                  status: e.status,
                  statusSummary: e.statusSummary,
                  diffStats: null,
                });
              },
      };
    };
    s = rows.map(e);
  }
  return (
    <Kl
      className="text-token-conversation-body"
      items={s}
      overflowLabel={peers.sAl}
      statusLabel={statusLabel}
      testId="subagent-activity-inline-group"
    />
  );
}
