// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `JJ`) / export `WE`.

export type BindDeferredConversationWEPeers = {
  AYo: (...args: unknown[]) => unknown;
  DYo: (...args: unknown[]) => unknown;
  EYo: (...args: unknown[]) => unknown;
  MYo: (...args: unknown[]) => unknown;
  NYo: (...args: unknown[]) => unknown;
  OYo: (...args: unknown[]) => unknown;
  PYo: (...args: unknown[]) => unknown;
  TYo: (...args: unknown[]) => unknown;
  jYo: (...args: unknown[]) => unknown;
  kYo: (...args: unknown[]) => unknown;
  wYo: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationWEPeers | null = null;

/** Wire bindDeferredConversationWE peers once companions land. */
export function setBindDeferredConversationWEPeers(next: BindDeferredConversationWEPeers): void {
  peers = next;
}

/**
 * Bundle export `WE` / internal `JJ`.
 */
export function bindDeferredConversationWE() {
  if (peers == null) {
    throw new Error("bindDeferredConversationWE peers are not configured");
  }

  return {
    Root: peers.wYo,
    Header: peers.TYo,
    Title: peers.EYo,
    RowContainer: peers.DYo,
    Footer: peers.OYo,
    Row: peers.kYo,
    KeyValueRow: peers.AYo,
    IconButton: peers.jYo,
    FileRow: peers.MYo,
    FileSection: peers.NYo,
    Expanded: peers.PYo
  };
}
