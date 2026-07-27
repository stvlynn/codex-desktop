// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Hns`) / export `HC`.

export type SetAccountVoiceAndInvalidateCatalogPeers = {
  accountScopeAtom: unknown;
  normalizeVoicePayload: (voice: unknown) => unknown;
  invalidateQueries: (
    queryClient: unknown,
    queryKey: unknown[],
  ) => Promise<unknown>;
};

let peers: SetAccountVoiceAndInvalidateCatalogPeers | null = null;

/** Wire account-voice write peers once companions land. */
export function setSetAccountVoiceAndInvalidateCatalogPeers(
  next: SetAccountVoiceAndInvalidateCatalogPeers,
): void {
  peers = next;
}

/**
 * Bundle export `HC` / internal `Hns`.
 * Set account voice then invalidate realtime-voice catalog queries.
 */
export async function setAccountVoiceAndInvalidateCatalog(
  scope: {
    get: (atom: unknown) => {
      setAccountVoice: (v: unknown) => Promise<unknown>;
    };
    queryClient: unknown;
  },
  voice: unknown,
): Promise<void> {
  if (peers == null) {
    throw new Error(
      "SetAccountVoiceAndInvalidateCatalog peers are not configured",
    );
  }
  await scope
    .get(peers.accountScopeAtom)
    .setAccountVoice(peers.normalizeVoicePayload(voice));
  await peers.invalidateQueries(scope.queryClient, ["realtime-voice-catalog"]);
}
