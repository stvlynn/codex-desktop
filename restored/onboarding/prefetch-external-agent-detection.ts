// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `qsu`) / export `mn`.

export type PrefetchExternalAgentDetectionPeers = {
  localHostId: unknown;
  buildQueryKey: (args: {
    hostId: unknown;
    providers: unknown;
    sessionLimits: unknown;
  }) => unknown;
  detect: (args: Record<string, unknown>) => Promise<{
    items: unknown[];
    unsupportedProjects: unknown[];
  }>;
  providerIdsFromItems: (items: unknown[]) => string[];
  logInfo: (msg: string, payload: { safe: Record<string, unknown> }) => void;
  logWarning: (
    msg: string,
    payload: {
      safe: Record<string, unknown>;
      sensitive?: Record<string, unknown>;
    },
  ) => void;
};

let peers: PrefetchExternalAgentDetectionPeers | null = null;

/** Wire prefetchExternalAgentDetection peers once companions land. */
export function setPrefetchExternalAgentDetectionPeers(
  next: PrefetchExternalAgentDetectionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mn` / internal `qsu`.
 * Prefetch external-agent detection and return whether items exist.
 */
export async function prefetchExternalAgentDetection(args: {
  detectionId: unknown;
  providers: unknown;
  queryClient: {
    getQueryState: (
      key: unknown,
    ) => { data?: unknown; fetchStatus?: string } | undefined;
    fetchQuery: (opts: {
      queryKey: unknown;
      queryFn: () => Promise<{
        items: unknown[];
        unsupportedProjects: unknown[];
      }>;
      staleTime: number;
    }) => Promise<{ items: unknown[]; unsupportedProjects: unknown[] }>;
  };
  sessionLimits: unknown;
}): Promise<boolean> {
  if (peers == null) {
    throw new Error("PrefetchExternalAgentDetection peers are not configured");
  }
  const { detectionId, providers, queryClient, sessionLimits } = args;
  const queryKey = peers.buildQueryKey({
    hostId: peers.localHostId,
    providers,
    sessionLimits,
  });
  const prior = queryClient.getQueryState(queryKey);
  const startedAt = Date.now();
  try {
    const result = await queryClient.fetchQuery({
      queryKey,
      queryFn: () =>
        peers!.detect({
          detectionId,
          hostId: peers!.localHostId,
          includeHome: true,
          providers,
          sessionLimits,
        }),
      staleTime: 0,
    });
    const summaryStartedAt = Date.now();
    const providerIds = peers.providerIdsFromItems(result.items);
    const detected = providerIds.length > 0;
    peers.logInfo("tmp_external_agent_detect_renderer_finished", {
      safe: {
        detected,
        detectionId,
        detectedProviderIds: providerIds.join(","),
        durationMs: Date.now() - startedAt,
        hadCachedData: prior?.data != null,
        itemCount: result.items.length,
        joinedInFlight: prior?.fetchStatus === "fetching",
        source: "onboarding_prefetch",
        status: "success",
        summaryBuildMs: Date.now() - summaryStartedAt,
        unsupportedProjectCount: result.unsupportedProjects.length,
      },
    });
    return detected;
  } catch (error) {
    peers.logWarning("Onboarding agent migration detection failed", {
      safe: {},
      sensitive: { error },
    });
    peers.logWarning("tmp_external_agent_detect_renderer_finished", {
      safe: {
        detectionId,
        durationMs: Date.now() - startedAt,
        source: "onboarding_prefetch",
        status: "error",
      },
    });
    return false;
  }
}
