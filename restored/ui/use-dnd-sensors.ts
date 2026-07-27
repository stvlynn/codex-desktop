// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dVt`) / export `Trt`.

export type UseDndSensorsPeers = {
  qv: (...args: unknown[]) => unknown;
};

let peers: UseDndSensorsPeers | null = null;

/** Wire useDndSensors peers once companions land. */
export function setUseDndSensorsPeers(next: UseDndSensorsPeers): void {
  peers = next;
}

/**
 * Bundle export `Trt` / internal `dVt`.
 */
export function useDndSensors() {
  if (peers == null) {
    throw new Error("useDndSensors peers are not configured");
  }

  var e = [...arguments];
  return (0, peers.qv.useMemo)(() => [...e].filter((e) => e != null), [...e]);
}
