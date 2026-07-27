// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `s1`) / export `Vm`.

export type DebugNameProbePeers = {
  J6s: (...args: unknown[]) => unknown;
  oir: (...args: unknown[]) => unknown;
  q6s: (...args: unknown[]) => unknown;
};
let peers: DebugNameProbePeers | null = null;

/** Wire DebugNameProbe peers once companions land. */
export function setDebugNameProbePeers(next: DebugNameProbePeers): void {
  peers = next;
}

/**
 * Bundle export `Vm` / internal `s1`.
 */
export function DebugNameProbe(props: unknown) {
  const Oir = peers.oir;
  if (peers == null) {
    throw new Error("DebugNameProbe peers are not configured");
  }
  let { debugName } = props;
  return <Oir debugName={debugName} />;
}
