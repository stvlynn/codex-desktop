// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Xqs`) / export `Vg`.

export type OperationStatusOverlayPeers = {
  $qs: (...args: unknown[]) => unknown;
  Qqs: (...args: unknown[]) => unknown;
  Zqs: (...args: unknown[]) => unknown;
  cJs: (...args: unknown[]) => unknown;
  eJs: (...args: unknown[]) => unknown;
  k$: (...args: unknown[]) => unknown;
};
let peers: OperationStatusOverlayPeers | null = null;

/** Wire OperationStatusOverlay peers once companions land. */
export function setOperationStatusOverlayPeers(
  next: OperationStatusOverlayPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Vg` / internal `Xqs`.
 */
export function OperationStatusOverlay(props: unknown) {
  const Zqs = peers.Zqs;
  const Qs = peers.$qs;
  const Qqs = peers.Qqs;
  const EJs = peers.eJs;
  if (peers == null) {
    throw new Error("OperationStatusOverlay peers are not configured");
  }
  let { operation, onClose, onRetry } = props;
  if (operation.status === "queued" || operation.status === "running") {
    let e;
    return <Zqs operation={operation} />;
  }
  if (operation.status === "warning") {
    let e;
    return <Qs operation={operation} onClose={onClose} />;
  }
  if (operation.status === "success") {
    let e;
    return <Qqs operation={operation} />;
  }
  return <EJs operation={operation} onClose={onClose} onRetry={onRetry} />;
}
