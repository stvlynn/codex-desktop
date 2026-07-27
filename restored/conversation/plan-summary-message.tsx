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

/**
 * Bundle export `yc` / internal `ufl`.
 */
export function PlanSummaryMessage(props: unknown) {
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
