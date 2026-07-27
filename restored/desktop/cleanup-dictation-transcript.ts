// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Rrt`) / export `Rct`.

export type CleanupDictationTranscriptPeers = {
  Brt: (...args: unknown[]) => unknown;
  Ert: (...args: unknown[]) => unknown;
  Wrt: (...args: unknown[]) => unknown;
  zrt: (...args: unknown[]) => unknown;
};
let peers: CleanupDictationTranscriptPeers | null = null;

/** Wire cleanupDictationTranscript peers once companions land. */
export function setCleanupDictationTranscriptPeers(
  next: CleanupDictationTranscriptPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Rct` / internal `Rrt`.
 */
export async function cleanupDictationTranscript({
  transcript,
  surroundingText,
  cleanupEnabled,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("cleanupDictationTranscript peers are not configured");
  }
  let r = transcript.trim();
  if (r.length === 0) return "";
  if (!cleanupEnabled) return r;
  try {
    let e = await peers.Brt(),
      n = peers.zrt({
        transcript: r,
        surroundingText: surroundingText ?? null,
        dictionary: e,
      });
    return (
      (await peers.Ert({
        instructions: peers.Wrt,
        input: n,
      })) ?? r
    );
  } catch {
    return r;
  }
}
