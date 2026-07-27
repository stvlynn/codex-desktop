// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `I2l`) / export `Yr`.

export type CodexMicroDeviceGatePeers = {
  A2l: (...args: unknown[]) => unknown;
  M2l: (...args: unknown[]) => unknown;
  R2l: (...args: unknown[]) => unknown;
  T7: (...args: unknown[]) => unknown;
  Z: (...args: unknown[]) => unknown;
};
let peers: CodexMicroDeviceGatePeers | null = null;

/** Wire CodexMicroDeviceGate peers once companions land. */
export function setCodexMicroDeviceGatePeers(
  next: CodexMicroDeviceGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yr` / internal `I2l`.
 */
export function CodexMicroDeviceGate(props: unknown) {
  const Z = peers.Z;
  if (peers == null) {
    throw new Error("CodexMicroDeviceGate peers are not configured");
  }
  let { codexMicroDeviceModel, slug } = props;
  if (
    slug === "codex-micro" &&
    (codexMicroDeviceModel === undefined ? null : codexMicroDeviceModel) ===
      "creator-micro-v2"
  ) {
    let e;
    return <Z {...peers.A2l.creatorMicro} />;
  }
  let i = peers.M2l(slug);
  return <Z {...i} />;
}
