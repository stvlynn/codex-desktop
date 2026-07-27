// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Rrt`) / export `Rct`.

export type CleanupDictationTranscriptPeers = {
  loadDictionary: () => Promise<unknown>;
  buildCleanupInput: (input: {
    transcript: string;
    surroundingText: string | null;
    dictionary: unknown;
  }) => unknown;
  cleanupInstructions: unknown;
  runCleanup: (input: {
    instructions: unknown;
    input: unknown;
  }) => Promise<string | null | undefined>;
};

let peers: CleanupDictationTranscriptPeers | null = null;

/** Wire dictation transcript cleanup peers once companions land. */
export function setCleanupDictationTranscriptPeers(
  next: CleanupDictationTranscriptPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Rct` / internal `Rrt`.
 * Optionally clean a dictation transcript with dictionary + model helpers.
 */
export async function cleanupDictationTranscript(input: {
  transcript: string;
  surroundingText?: string | null;
  cleanupEnabled: boolean;
}): Promise<string> {
  if (peers == null) {
    throw new Error("CleanupDictationTranscript peers are not configured");
  }
  const trimmed = input.transcript.trim();
  if (trimmed.length === 0) return "";
  if (!input.cleanupEnabled) return trimmed;
  try {
    const dictionary = await peers.loadDictionary();
    const cleanupInput = peers.buildCleanupInput({
      transcript: trimmed,
      surroundingText: input.surroundingText ?? null,
      dictionary,
    });
    return (
      (await peers.runCleanup({
        instructions: peers.cleanupInstructions,
        input: cleanupInput,
      })) ?? trimmed
    );
  } catch {
    return trimmed;
  }
}
