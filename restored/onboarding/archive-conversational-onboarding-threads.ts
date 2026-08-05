// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ejl`) / export `Qs`.

export type ArchiveConversationalOnboardingThreadsPeers = {
  BAl: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  VAl: (...args: unknown[]) => unknown;
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
 */
async function archiveConversationalOnboardingThreads(e) {
  if (peers == null) {
    throw new Error(
      "archiveConversationalOnboardingThreads peers are not configured",
    );
  }

  (await Promise.all(
    peers.BAl().map((t) =>
      peers.Bf(`archive-conversation`, {
        conversationId: t,
        hostId: e,
        source: `conversational-onboarding-complete`,
      }),
    ),
  ),
    peers.VAl());
}
