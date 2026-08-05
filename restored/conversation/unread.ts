// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `o0o`) / export `GT`.

export type BindUnreadPeers = {
  a0o: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindUnreadPeers | null = null;

/** Wire bindUnread peers once companions land. */
export function setBindUnreadPeers(next: BindUnreadPeers): void {
  peers = next;
}

/**
 * Bundle export `GT` / internal `o0o`.
 */
export function bindUnread() {
  if (peers == null) {
    throw new Error("bindUnread peers are not configured");
  }

  return peers.e(() => {
    a0o = {
      waiting: 0,
      unread: 1,
      active: 2,
      idle: 3,
    };
  });
}
