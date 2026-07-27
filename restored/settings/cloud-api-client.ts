// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Uh`) / export `zct`.

export type BindCloudApiClientPeers = {
  Crt: (...args: unknown[]) => unknown;
  Trt: (...args: unknown[]) => unknown;
};

let peers: BindCloudApiClientPeers | null = null;

/** Wire bindCloudApiClient peers once companions land. */
export function setBindCloudApiClientPeers(next: BindCloudApiClientPeers): void {
  peers = next;
}

/**
 * Bundle export `zct` / internal `Uh`.
 */
export function bindCloudApiClient() {
  if (peers == null) {
    throw new Error("bindCloudApiClient peers are not configured");
  }

  return new peers.Trt({
    getAdditionalHeaders: peers.Crt
  });
}
