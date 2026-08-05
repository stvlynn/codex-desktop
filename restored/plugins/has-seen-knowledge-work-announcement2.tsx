// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `XYr`) / export `BY`.

export type BindBindHasSeenKnowledgeWorkAnnouncement2Peers = {
  kp: (...args: unknown[]) => unknown;
};

let peers: BindBindHasSeenKnowledgeWorkAnnouncement2Peers | null = null;

/** Wire bindBindHasSeenKnowledgeWorkAnnouncement2 peers once companions land. */
export function setBindBindHasSeenKnowledgeWorkAnnouncement2Peers(
  next: BindBindHasSeenKnowledgeWorkAnnouncement2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `BY` / internal `XYr`.
 */
export function bindBindHasSeenKnowledgeWorkAnnouncement2() {
  if (peers == null) {
    throw new Error(
      "bindBindHasSeenKnowledgeWorkAnnouncement2 peers are not configured",
    );
  }

  return peers.kp(`has-seen-work-plugins-announcement`, !1);
}
