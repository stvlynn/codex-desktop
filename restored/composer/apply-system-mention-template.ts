// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bti`) / export `_G`.

export type ApplySystemMentionTemplatePeers = {
  DGt: (...args: unknown[]) => unknown;
  Eti: (...args: unknown[]) => unknown;
  kti: (...args: unknown[]) => unknown;
  wti: (...args: unknown[]) => unknown;
};

let peers: ApplySystemMentionTemplatePeers | null = null;

/** Wire applySystemMentionTemplate peers once companions land. */
export function setApplySystemMentionTemplatePeers(next: ApplySystemMentionTemplatePeers): void {
  peers = next;
}

/**
 * Bundle export `_G` / internal `bti`.
 */
export function applySystemMentionTemplate(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("applySystemMentionTemplate peers are not configured");
  }

  peers.wti(e, {
    templateId: t.scope === `system` ? peers.DGt(`${t.scope}:${t.name}`, peers.kti) : void 0,
    templateOrigin: peers.Eti(t.scope),
    inclusion: {
      type: `mention`,
      path: t.path
    }
  });
}
