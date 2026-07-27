// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `PN`) / export `cq`.

export type UseClearPrewarmedThreadsForHostPeers = {
  useDraftSettings: () => {
    draftSettings: { serviceTier?: unknown };
    isNewThreadDraft: boolean;
    updateDraftSettings: (updater: (prev: any) => any) => void;
  };
  useModelSettings: (conversationId: unknown) => { modelSettings: unknown };
  resolveServiceTier: (
    conversationId: unknown,
    modelSettings: unknown,
    serviceTier: unknown,
    isNewThreadDraft: boolean,
  ) => {
    hostId: unknown;
    hasManagedNewThreadSettings: boolean;
    setServiceTier: (tier: unknown, options: unknown) => Promise<void>;
  };
  normalizeTier: (tier: unknown) => unknown;
  clearPrewarmed: (payload: { hostId: unknown }) => Promise<unknown>;
};

let peers: UseClearPrewarmedThreadsForHostPeers | null = null;

/** Wire clear-prewarmed-threads peers once companions land. */
export function setUseClearPrewarmedThreadsForHostPeers(
  next: UseClearPrewarmedThreadsForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cq` / internal `PN`.
 * Service-tier setter that clears prewarmed threads for managed new threads.
 */
export function useClearPrewarmedThreadsForHost(
  conversationId?: unknown,
): Record<string, unknown> {
  if (peers == null) {
    throw new Error("UseClearPrewarmedThreadsForHost peers are not configured");
  }
  const id = conversationId === undefined ? null : conversationId;
  const { draftSettings, isNewThreadDraft, updateDraftSettings } =
    peers.useDraftSettings();
  const { modelSettings } = peers.useModelSettings(id);
  const serviceTier = peers.resolveServiceTier(
    id,
    modelSettings,
    draftSettings.serviceTier,
    isNewThreadDraft,
  );
  const shouldClear =
    id == null && isNewThreadDraft && serviceTier.hasManagedNewThreadSettings;
  const setServiceTier = async (tier: unknown, options: unknown) => {
    if (shouldClear) {
      updateDraftSettings((prev) => ({
        ...prev,
        isManuallyChanged: true,
        serviceTier: { value: peers!.normalizeTier(tier) },
      }));
      await peers!.clearPrewarmed({ hostId: serviceTier.hostId });
    }
    await serviceTier.setServiceTier(tier, options);
  };
  return { ...serviceTier, setServiceTier };
}
