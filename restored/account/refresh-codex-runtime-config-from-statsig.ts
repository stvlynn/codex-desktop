// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EO — real body via extractFn(internal `Rru`) / export `ar`.

export type RefreshCodexRuntimeConfigFromStatsigPeers = {
  readRuntimeConfig: (client: unknown) => unknown;
};

let peers: RefreshCodexRuntimeConfigFromStatsigPeers | null = null;

/** Wire refreshCodexRuntimeConfigFromStatsig peers once companions land. */
export function setRefreshCodexRuntimeConfigFromStatsigPeers(
  next: RefreshCodexRuntimeConfigFromStatsigPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ar` / internal `Rru`.
 * Refresh Statsig user context then re-read runtime config.
 */
export async function refreshCodexRuntimeConfigFromStatsig(client: {
  updateUserAsync: (user: unknown) => Promise<unknown>;
  getContext: () => { user: unknown };
}): Promise<unknown> {
  if (peers == null) {
    throw new Error(
      "RefreshCodexRuntimeConfigFromStatsig peers are not configured",
    );
  }
  try {
    await client.updateUserAsync(client.getContext().user);
  } catch {
    // keep previous config on refresh failure
  }
  return peers.readRuntimeConfig(client);
}
