// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `ejl`) / export `Qs`.

export type ArchiveConversationalOnboardingThreadsPeers = {
  listThreadIds: () => unknown[];
  ipc: (method: string, payload: Record<string, unknown>) => Promise<unknown>;
  clearLocal: () => void;
};

let peers: ArchiveConversationalOnboardingThreadsPeers | null = null;

/** Wire archiveConversationalOnboardingThreads peers once companions land. */
export function setArchiveConversationalOnboardingThreadsPeers(
  next: ArchiveConversationalOnboardingThreadsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Qs` / internal `ejl`.
 * Archive all conversational-onboarding threads for a host, then clear.
 */
export async function archiveConversationalOnboardingThreads(
  hostId: unknown,
): Promise<void> {
  if (peers == null) {
    throw new Error(
      "ArchiveConversationalOnboardingThreads peers are not configured",
    );
  }
  await Promise.all(
    peers.listThreadIds().map((conversationId) =>
      peers!.ipc("archive-conversation", {
        conversationId,
        hostId,
        source: "conversational-onboarding-complete",
      }),
    ),
  );
  peers.clearLocal();
}
