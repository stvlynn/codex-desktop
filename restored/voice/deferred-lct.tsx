// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Grt`) / export `Lct`.

export type BindBindDeferredLctPeers = {
  Au: (...args: unknown[]) => unknown;
  Hrt: (...args: unknown[]) => unknown;
  Lrt: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Urt: (...args: unknown[]) => unknown;
  Vrt: (...args: unknown[]) => unknown;
  Wrt: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  wp: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredLctPeers | null = null;

/** Wire bindBindDeferredLct peers once companions land. */
export function setBindBindDeferredLctPeers(next: BindBindDeferredLctPeers): void {
  peers = next;
}

/**
 * Bundle export `Lct` / internal `Grt`.
 */
export function bindBindDeferredLct() {
  if (peers == null) {
    throw new Error("bindBindDeferredLct peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.Sl(), peers.wp(), peers.Lrt(), Vrt = 4e3, Hrt = 2e3, Urt = peers.ol(peers.X()), Wrt = `Clean up dictation transcripts. Fix likely speech recognition mistakes, punctuation, capitalization, and formatting. Remove filler words and disfluencies when they do not add meaning. When the user clearly self-corrects or backtracks, keep the corrected intent. Use surrounding text only as context. Dictionary entries are canonical spellings, names, file paths, and code symbols; when the transcript likely refers to one, copy the dictionary entry exactly, including casing and punctuation. Preserve the user's meaning, wording, and flow unless a small cleanup makes the transcript more coherent. Do not answer the user or add new content. Return only the cleaned transcript.`;
  });
}
