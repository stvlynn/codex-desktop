// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `N3c`) / export `Al`.

export type ShowFewerCreatedTasksButtonPeers = {
  Ema: (...args: unknown[]) => unknown;
  F3c: (...args: unknown[]) => unknown;
  I3c: (...args: unknown[]) => unknown;
  L3c: (...args: unknown[]) => unknown;
  P3c: (...args: unknown[]) => unknown;
  R3c: (...args: unknown[]) => unknown;
  VWc: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  oV: (...args: unknown[]) => unknown;
  z3c: (...args: unknown[]) => unknown;
};
let peers: ShowFewerCreatedTasksButtonPeers | null = null;

/** Wire ShowFewerCreatedTasksButton peers once companions land. */
export function setShowFewerCreatedTasksButtonPeers(
  next: ShowFewerCreatedTasksButtonPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Al` / internal `N3c`.
 */
export function ShowFewerCreatedTasksButton(props: unknown) {
  const VWc = peers.VWc;
  const Ema = peers.Ema;
  const Z = peers.Z;
  const OV = peers.oV;
  if (peers == null) {
    throw new Error("ShowFewerCreatedTasksButton peers are not configured");
  }
  let { results } = props,
    [r, i] = peers.L3c.useState(false);
  if (results.length === 0) return null;
  if (results.length === 1) {
    let e;
    return <VWc result={results[0]} />;
  }
  let a = r ? results : results.slice(0, peers.z3c);
  let o = a,
    s = results.length - peers.z3c,
    c = o.map(peers.F3c);
  let l =
    results.length > peers.z3c ? (
      <Ema
        isExpanded={r}
        onClick={() => {
          i(peers.P3c);
        }}
      >
        {r ? (
          <Z
            id="localConversation.appControlToolCall.showFewerCreatedTasks"
            defaultMessage="Show fewer chats"
            description="Button label that collapses tasks created from an assistant response"
          />
        ) : (
          <Z
            id="localConversation.appControlToolCall.showMoreCreatedTasks"
            defaultMessage={
              "{count, plural, one {Show # more chat} other {Show # more chats}}"
            }
            description="Button label that reveals additional tasks created from an assistant response"
            values={{
              count: s,
            }}
          />
        )}
      </Ema>
    ) : null;
  return (
    <OV className="divide-y divide-token-border">
      {c}
      {l}
    </OV>
  );
}
