// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aU`) / export `aM`.

export type BindMcpCapability2Peers = {
  HS: (...args: unknown[]) => unknown;
};

let peers: BindMcpCapability2Peers | null = null;

/** Wire bindMcpCapability2 peers once companions land. */
export function setBindMcpCapability2Peers(
  next: BindMcpCapability2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `aM` / internal `aU`.
 */
export function bindMcpCapability2() {
  if (peers == null) {
    throw new Error("bindMcpCapability2 peers are not configured");
  }

  return new peers.HS(`composer-suggestion-ui`);
}
