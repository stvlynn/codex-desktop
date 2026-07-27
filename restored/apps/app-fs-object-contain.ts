// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yna`) / export `iR`.

export type AppFsObjectContainPeers = {
  Au: (...args: unknown[]) => unknown;
  _na: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  vna: (...args: unknown[]) => unknown;
};

let peers: AppFsObjectContainPeers | null = null;

/** Wire appFsObjectContain peers once companions land. */
export function setAppFsObjectContainPeers(next: AppFsObjectContainPeers): void {
  peers = next;
}

/**
 * Bundle export `iR` / internal `yna`.
 */
export function appFsObjectContain() {
  if (peers == null) {
    throw new Error("appFsObjectContain peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), _na = `app://fs`, vna = `/@fs`;
  });
}
