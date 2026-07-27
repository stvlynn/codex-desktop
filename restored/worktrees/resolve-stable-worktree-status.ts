// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `eR`) / export `GV`.

export type ResolveStableWorktreeStatusPeers = {
  resolveWorktreeRequest: (store: unknown, hostId: unknown) => Promise<unknown>;
  statusAtom: unknown;
  buildStatus: (
    model: unknown,
    serviceTier: unknown,
    request: unknown,
  ) => unknown;
  deriveServiceTier: (status: unknown, fallback: unknown) => unknown;
  readConfigForHost: (
    method: string,
    payload: Record<string, unknown>,
  ) => Promise<{ config: unknown }>;
  parseConfig: (config: unknown) => {
    service_tier?: unknown;
    model?: unknown;
  };
  resolveModelForTier: (hostId: unknown, model: unknown) => Promise<unknown>;
  logger: {
    error: (message: string, meta: Record<string, unknown>) => void;
  };
};

let peers: ResolveStableWorktreeStatusPeers | null = null;

/** Wire stable worktree status resolve peers once companions land. */
export function setResolveStableWorktreeStatusPeers(
  next: ResolveStableWorktreeStatusPeers,
): void {
  peers = next;
}

/**
 * Bundle export `GV` / internal `eR`.
 * Resolve stable worktree status from config + host request.
 */
export async function resolveStableWorktreeStatus(
  store: { get: (atom: unknown, hostId: unknown) => { type: string } },
  hostId: unknown,
  modelOverride?: unknown,
): Promise<unknown> {
  if (peers == null) {
    throw new Error("ResolveStableWorktreeStatus peers are not configured");
  }
  try {
    const request = await peers.resolveWorktreeRequest(store, hostId);
    const status = store.get(peers.statusAtom, hostId);
    if (status.type !== "fromConfig") {
      return peers.buildStatus(
        null,
        peers.deriveServiceTier(status, null),
        request,
      );
    }
    const { config } = await peers.readConfigForHost("read-config-for-host", {
      hostId,
      includeLayers: false,
      cwd: null,
      priority: "critical",
    });
    const parsed = peers.parseConfig(config);
    if (parsed.service_tier == null) {
      return peers.buildStatus(
        await peers.resolveModelForTier(hostId, modelOverride ?? parsed.model),
        parsed.service_tier,
        request,
      );
    }
    return peers.buildStatus(null, parsed.service_tier, request);
  } catch (error) {
    peers.logger.error("Failed to read service tier for request", {
      safe: {},
      sensitive: { error },
    });
    return null;
  }
}
