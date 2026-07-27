// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `N4s`) / export `Ch`.

export type UseTeenOnboardingAgeGatePeers = {
  useClient: () => { client: unknown; isLoading: boolean };
  gateEnabled: (client: unknown, gateId: string) => boolean;
  useOnboardingContextQuery: (opts: { enabled: boolean }) => {
    data?: { age_status?: string };
    isLoading: boolean;
  };
};

let peers: UseTeenOnboardingAgeGatePeers | null = null;

/** Wire useTeenOnboardingAgeGate peers once companions land. */
export function setUseTeenOnboardingAgeGatePeers(
  next: UseTeenOnboardingAgeGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ch` / internal `N4s`.
 * Decide whether teen onboarding should run for the current client.
 */
export function useTeenOnboardingAgeGate(args: { enabled: boolean }): {
  isLoading: boolean;
  shouldUseTeenOnboarding: boolean;
} {
  if (peers == null) {
    throw new Error("UseTeenOnboardingAgeGate peers are not configured");
  }
  const { enabled } = args;
  const { client, isLoading } = peers.useClient();
  const contextEnabled =
    enabled && !isLoading && peers.gateEnabled(client, "1482884768");
  const context = peers.useOnboardingContextQuery({ enabled: contextEnabled });
  const under18 = context.data?.age_status === "under_18";
  if (!enabled) {
    return { isLoading: false, shouldUseTeenOnboarding: false };
  }
  return {
    isLoading: isLoading || (contextEnabled && context.isLoading),
    shouldUseTeenOnboarding:
      contextEnabled && under18 && peers.gateEnabled(client, "3150044490"),
  };
}
