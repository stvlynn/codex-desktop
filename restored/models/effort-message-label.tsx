// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Qc`) / export `pu`.

export type EffortMessageLabelPeers = {
  JX: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
  e$c: (...args: unknown[]) => unknown;
  t$c: (...args: unknown[]) => unknown;
};
let peers: EffortMessageLabelPeers | null = null;

/** Wire EffortMessageLabel peers once companions land. */
export function setEffortMessageLabelPeers(
  next: EffortMessageLabelPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pu` / internal `$Qc`.
 */
export function EffortMessageLabel(props: unknown) {
  const Z = peers.Z;
  if (peers == null) {
    throw new Error("EffortMessageLabel peers are not configured");
  }
  let { effort } = props,
    r = peers.JX[effort];
  return <Z {...r} />;
}
