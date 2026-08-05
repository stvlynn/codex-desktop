// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `XLt`) / export `kit`.

export type UseDndSensorPeers = {
  GLt: (...args: unknown[]) => unknown;
  HLt: (...args: unknown[]) => unknown;
  JLt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jLt: (...args: unknown[]) => unknown;
  mLt: (...args: unknown[]) => unknown;
};

let peers: UseDndSensorPeers | null = null;

/** Wire useDndSensor peers once companions land. */
export function setUseDndSensorPeers(next: UseDndSensorPeers): void {
  peers = next;
}

/**
 * Bundle export `kit` / internal `XLt`.
 */
export function useDndSensor() {
  if (peers == null) {
    throw new Error("useDndSensor peers are not configured");
  }

  return peers.e(() => {
    (peers.HLt(), peers.mLt(), peers.GLt(), peers.jLt(), peers.JLt());
  });
}
