// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Snn`) / export `v9`.

export type BindBindDeferredConversationV9Peers = {
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredConversationV9Peers | null = null;

/** Wire bindBindDeferredConversationV9 peers once companions land. */
export function setBindBindDeferredConversationV9Peers(
  next: BindBindDeferredConversationV9Peers,
): void {
  peers = next;
}

/**
 * Bundle export `v9` / internal `Snn`.
 */
export function bindBindDeferredConversationV9() {
  if (peers == null) {
    throw new Error("bindBindDeferredConversationV9 peers are not configured");
  }

  return class extends Error {
    constructor(e) {
      (super(`Unarchived conversation ${peers.e} could not be loaded`),
        (this.name = `UnarchivedConversationLoadError`));
    }
  };
}
