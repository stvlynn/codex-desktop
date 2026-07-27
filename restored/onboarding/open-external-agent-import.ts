// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `clu`) / export `en`.

export type OpenExternalAgentImportPeers = {
  PNl: (...args: unknown[]) => unknown;
  Wk: (...args: unknown[]) => unknown;
  _Er: (...args: unknown[]) => unknown;
  jlu: (...args: unknown[]) => unknown;
  llu: (...args: unknown[]) => unknown;
};

let peers: OpenExternalAgentImportPeers | null = null;

/** Wire openExternalAgentImport peers once companions land. */
export function setOpenExternalAgentImportPeers(next: OpenExternalAgentImportPeers): void {
  peers = next;
}

/**
 * Bundle export `en` / internal `clu`.
 */
export async function openExternalAgentImport(e: unknown, t: any) {
  if (peers == null) {
    throw new Error("openExternalAgentImport peers are not configured");
  }

  let n = t.items.filter(e => peers.PNl(e.itemType));
  if (n.length === 0 || peers._Er(e, peers.llu)) return !1;
  let r = {
      hostId: t.hostId,
      items: n,
      onImportSuccess: t.onImportSuccess,
      restoreFocus: t.restoreFocus,
      sessionLimits: t.sessionLimits,
      source: t.source
    },
    i = peers.jlu;
  return jlu += 1, peers.Wk(e, peers.llu, {
    request: r,
    reviewKey: i,
    onClose: () => {
      window.requestAnimationFrame(r.restoreFocus);
    }
  }), !0;
}
