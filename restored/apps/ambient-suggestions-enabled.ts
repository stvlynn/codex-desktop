// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wEe`) / export `Hpt`.

export type AmbientSuggestionsEnabledPeers = {
  CEe: (...args: unknown[]) => unknown;
  _u: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hu: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
  yu: (...args: unknown[]) => unknown;
};

let peers: AmbientSuggestionsEnabledPeers | null = null;

/** Wire ambientSuggestionsEnabled peers once companions land. */
export function setAmbientSuggestionsEnabledPeers(next: AmbientSuggestionsEnabledPeers): void {
  peers = next;
}

/**
 * Bundle export `Hpt` / internal `wEe`.
 */
export function ambientSuggestionsEnabled() {
  if (peers == null) {
    throw new Error("ambientSuggestionsEnabled peers are not configured");
  }

  return peers.e(() => {
    peers._u(), peers.xu(), CEe = {
      enabled: peers.yu({
        agentAccess: `read-write`,
        default: !0,
        description: `Whether home-page ambient suggestions are enabled`,
        key: `ambient-suggestions-enabled`,
        schema: peers.hu
      })
    };
  });
}
