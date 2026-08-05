// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QYr`) / export `HY`.

export type BindBindHasSeenKnowledgeWorkAnnouncementPeers = {
  Ap: (...args: unknown[]) => unknown;
  JYr: (...args: unknown[]) => unknown;
  Pn: (...args: unknown[]) => unknown;
  XYr: (...args: unknown[]) => unknown;
  YYr: (...args: unknown[]) => unknown;
  ZYr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fr: (...args: unknown[]) => unknown;
  kp: (...args: unknown[]) => unknown;
  qYr: (...args: unknown[]) => unknown;
};

let peers: BindBindHasSeenKnowledgeWorkAnnouncementPeers | null = null;

/** Wire bindBindHasSeenKnowledgeWorkAnnouncement peers once companions land. */
export function setBindBindHasSeenKnowledgeWorkAnnouncementPeers(
  next: BindBindHasSeenKnowledgeWorkAnnouncementPeers,
): void {
  peers = next;
}

/**
 * Bundle export `HY` / internal `QYr`.
 */
export function bindBindHasSeenKnowledgeWorkAnnouncement() {
  if (peers == null) {
    throw new Error(
      "bindBindHasSeenKnowledgeWorkAnnouncement peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.fr(),
      peers.Ap(),
      (qYr = peers.Pn(!1)),
      (JYr = peers.kp(`has-seen-knowledge-work-announcement`, !1)),
      (YYr = peers.kp(`has-seen-fast-mode-announcement`, !1)),
      (XYr = peers.kp(`has-seen-work-plugins-announcement`, !1)),
      (ZYr = peers.kp(`workspace-message-last-seen-at-by-account`, {})));
  });
}
