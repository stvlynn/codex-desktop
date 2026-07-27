// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qsu`) / export `mn`.

export type PrefetchExternalAgentDetectionPeers = {
  Boc: (...args: unknown[]) => unknown;
  H_: (...args: unknown[]) => unknown;
  Jsu: (...args: unknown[]) => unknown;
  Voc: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
  data: (...args: unknown[]) => unknown;
  fetchStatus: (...args: unknown[]) => unknown;
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
 */
export async function prefetchExternalAgentDetection({
  detectionId,
  providers,
  queryClient,
  sessionLimits,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("prefetchExternalAgentDetection peers are not configured");
  }
  let i = peers.Boc({
      hostId: peers.H_,
      providers,
      sessionLimits,
    }),
    a = queryClient.getQueryState(i),
    o = Date.now();
  try {
    let s = await queryClient.fetchQuery({
        queryKey: i,
        queryFn: () => {
          return peers.Voc({
            detectionId,
            hostId: peers.H_,
            includeHome: true,
            providers,
            sessionLimits,
          });
        },
        staleTime: 0,
      }),
      c = Date.now(),
      l = peers.Jsu(s.items),
      u = l.length > 0;
    return (
      peers.Wf.info("tmp_external_agent_detect_renderer_finished", {
        safe: {
          detected: u,
          detectionId,
          detectedProviderIds: l.join(","),
          durationMs: Date.now() - o,
          hadCachedData: a?.data != null,
          itemCount: s.items.length,
          joinedInFlight: a?.fetchStatus === "fetching",
          source: "onboarding_prefetch",
          status: "success",
          summaryBuildMs: Date.now() - c,
          unsupportedProjectCount: s.unsupportedProjects.length,
        },
      }),
      u
    );
  } catch (t) {
    return (
      peers.Wf.warning("Onboarding agent migration detection failed", {
        safe: {},
        sensitive: {
          error: t,
        },
      }),
      peers.Wf.warning("tmp_external_agent_detect_renderer_finished", {
        safe: {
          detectionId,
          durationMs: Date.now() - o,
          hadCachedData: a?.data != null,
          joinedInFlight: a?.fetchStatus === "fetching",
          source: "onboarding_prefetch",
          status: "failure",
        },
        sensitive: {
          error: t,
        },
      }),
      false
    );
  }
}
