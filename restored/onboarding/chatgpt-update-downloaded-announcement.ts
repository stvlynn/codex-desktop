// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `W9s`) / export `cm`.

export type BindChatgptUpdateDownloadedAnnouncementPeers = {
  U9s: (...args: unknown[]) => unknown;
  URL: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  import: (...args: unknown[]) => unknown;
  meta: (...args: unknown[]) => unknown;
};

let peers: BindChatgptUpdateDownloadedAnnouncementPeers | null = null;

/** Wire bindChatgptUpdateDownloadedAnnouncement peers once companions land. */
export function setBindChatgptUpdateDownloadedAnnouncementPeers(
  next: BindChatgptUpdateDownloadedAnnouncementPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cm` / internal `W9s`.
 */
export function bindChatgptUpdateDownloadedAnnouncement() {
  if (peers == null) {
    throw new Error(
      "bindChatgptUpdateDownloadedAnnouncement peers are not configured",
    );
  }

  return peers.e(() => {
    U9s = `` + new peers.URL(`gradient-DoN1ti1h.png`, import.meta.url).href;
  });
}
