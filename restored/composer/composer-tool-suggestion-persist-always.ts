// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HIs`) / export `w_`.

export type ComposerToolSuggestionPersistAlwaysPeers = {
  Au: (...args: unknown[]) => unknown;
  VIs: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  nni: (...args: unknown[]) => unknown;
  yE: (...args: unknown[]) => unknown;
};

let peers: ComposerToolSuggestionPersistAlwaysPeers | null = null;

/** Wire composerToolSuggestionPersistAlways peers once companions land. */
export function setComposerToolSuggestionPersistAlwaysPeers(next: ComposerToolSuggestionPersistAlwaysPeers): void {
  peers = next;
}

/**
 * Bundle export `w_` / internal `HIs`.
 */
export function composerToolSuggestionPersistAlways() {
  if (peers == null) {
    throw new Error("composerToolSuggestionPersistAlways peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), peers.nni(), peers.yE(), peers.ap(), VIs = [null, `science`];
  });
}
