// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WNl`) / export `ws`.

export type BindBinddeferredOnboardingWs3Peers = {
  Bf: (...args: unknown[]) => unknown;
  HNl: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
};

let peers: BindBinddeferredOnboardingWs3Peers | null = null;

/** Wire bindBinddeferredOnboardingWs3 peers once companions land. */
export function setBindBinddeferredOnboardingWs3Peers(next: BindBinddeferredOnboardingWs3Peers): void {
  peers = next;
}

/**
 * Bundle export `ws` / internal `WNl`.
 */
export function bindBinddeferredOnboardingWs3() {
  if (peers == null) {
    throw new Error("bindBinddeferredOnboardingWs3 peers are not configured");
  }

  return peers.ka(peers.Q, (e) => ({
    queryKey: [...peers.HNl, e],
    queryFn: () =>
      peers.Bf(`read-external-agent-config-import-histories`, {
        hostId: e,
      }),
    select: (e) =>
      [...e.data].sort(
        (e, t) => Number(t.completedAtMs) - Number(e.completedAtMs),
      ),
    refetchOnMount: `always`,
    staleTime: peers.Hf.FIVE_MINUTES,
  }));
}
