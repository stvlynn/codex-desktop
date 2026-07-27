// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uVt`) / export `wrt`.

export type UseDndSensorPeers = {
  qv: (...args: unknown[]) => unknown;
};

let peers: UseDndSensorPeers | null = null;

/** Wire useDndSensor peers once companions land. */
export function setUseDndSensorPeers(next: UseDndSensorPeers): void {
  peers = next;
}

/**
 * Bundle export `wrt` / internal `uVt`.
 */
export function useDndSensor(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useDndSensor peers are not configured");
  }

  return (0, peers.qv.useMemo)(
    () => ({
      sensor: e,
      options: t ?? {},
    }),
    [e, t],
  );
}
