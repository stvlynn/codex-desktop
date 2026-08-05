// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Qg`) / export `Ost`.

export type ComposerBrowserTabMentionsContextLimitExceededPeers = {
  Au: (...args: unknown[]) => unknown;
  Vf: (...args: unknown[]) => unknown;
  Zg: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: ComposerBrowserTabMentionsContextLimitExceededPeers | null = null;

/** Wire composerBrowserTabMentionsContextLimitExceeded peers once companions land. */
export function setComposerBrowserTabMentionsContextLimitExceededPeers(
  next: ComposerBrowserTabMentionsContextLimitExceededPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ost` / internal `Qg`.
 */
export function composerBrowserTabMentionsContextLimitExceeded() {
  if (peers == null) {
    throw new Error(
      "composerBrowserTabMentionsContextLimitExceeded peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Au(), peers.Vf(), peers.ap(), peers.Zg());
  });
}
