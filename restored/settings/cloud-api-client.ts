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

/**
 * Consumers use `cloudApiClient.safeGet(...)`/`safePatch(...)` directly
 * rather than calling the binder — proxy each access through
 * `bindCloudApiClient()` so wiring stays lazy until the client is used.
 */
export const cloudApiClient: ReturnType<typeof bindCloudApiClient> = new Proxy(
  {} as ReturnType<typeof bindCloudApiClient>,
  {
    get(_target, prop) {
      return bindCloudApiClient()[prop as keyof ReturnType<typeof bindCloudApiClient>];
    },
  },
);

/** Bundle path ESM init retained as no-op. */
export function ensureCloudApiClientInit(): void {}
