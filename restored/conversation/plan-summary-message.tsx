// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ufl`) / export `yc`.

export type PlanSummaryMessagePeers = {
  dfl: (...args: unknown[]) => unknown;
  ffl: (...args: unknown[]) => unknown;
  hk: (...args: unknown[]) => unknown;
  mfl: (...args: unknown[]) => unknown;
  o8: (...args: unknown[]) => unknown;
};
let peers: PlanSummaryMessagePeers | null = null;

/** Wire PlanSummaryMessage peers once companions land. */
export function setPlanSummaryMessagePeers(
  next: PlanSummaryMessagePeers,
): void {
  peers = next;
}

/** Plan-card item shape rendered by `PlanSummaryMessage` (consumer-facing). */
export type PlanSummaryMessageItem = {
  type: string;
  content: string;
  sentAtMs: number | null;
  completed: boolean;
  phase: string | null;
  structuredOutput: unknown;
};

export type PlanSummaryMessageProps = {
  item: PlanSummaryMessageItem;
  conversationId: string;
  cwd: string | null;
  showOpenButton?: boolean;
};

/**
 * Bundle export `yc` / internal `ufl`.
 */
export function PlanSummaryMessage(props: PlanSummaryMessageProps) {
  const Ffl = peers.ffl;
  const Hk = peers.hk;
  const Dfl = peers.dfl;
  if (peers == null) {
    throw new Error("PlanSummaryMessage peers are not configured");
  }
  if (props.showOpenButton === false) {
    let n;
    return <Ffl {...props} />;
  }
  let n = (
    <Hk electron={true}>
      <Dfl {...props} />
    </Hk>
  );
  let r = (
    <Hk browser={true} chromeExtension={true} extension={true}>
      <Ffl {...props} />
    </Hk>
  );
  return (
    <>
      {n}
      {r}
    </>
  );
}
