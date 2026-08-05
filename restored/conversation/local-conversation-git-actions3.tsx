// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FWo`) / export `DD`.

export type BindBindLocalConversationGitActions3Peers = {
  OWo: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  _J: (...args: unknown[]) => unknown;
  aJ: (...args: unknown[]) => unknown;
  cWo: (...args: unknown[]) => unknown;
  commitsAhead: (...args: unknown[]) => unknown;
  dWo: (...args: unknown[]) => unknown;
  fJ: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  kWo: (...args: unknown[]) => unknown;
  trim: (...args: unknown[]) => unknown;
};

let peers: BindBindLocalConversationGitActions3Peers | null = null;

/** Wire bindBindLocalConversationGitActions3 peers once companions land. */
export function setBindBindLocalConversationGitActions3Peers(
  next: BindBindLocalConversationGitActions3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `DD` / internal `FWo`.
 */
export function bindBindLocalConversationGitActions3() {
  if (peers == null) {
    throw new Error(
      "bindBindLocalConversationGitActions3 peers are not configured",
    );
  }

  return peers.Oa(peers.hT, (e, { get: t }) => {
    let n = t(peers.OWo, e);
    if (!n.isSuccess) return `hidden`;
    let r = n.data?.trim() ?? ``,
      i = r.length === 0;
    if (i) {
      let n = t(peers.aJ, {
          cwd: e.cwd,
          hostConfig: e.hostConfig,
          operationSource: `local_conversation_git_actions`,
        }),
        r = n.type === `success` ? n.data : null;
      if (
        t(peers.cWo, {
          ...e,
          includeUnstaged: !0,
        }) != null &&
        (r?.commitsAhead ?? 0) === 0
      )
        return `hidden`;
    } else {
      let n = t(peers.kWo, e).data;
      if (n == null || r === n) return `hidden`;
    }
    return t(peers.dWo, {
      conversationId: e.conversationId,
      cwd: e.cwd,
      hostConfig: e.hostConfig,
      createsBranch: i,
      includeLocalChanges: t(peers._J, peers.fJ(e)),
    }).blockedStep == null
      ? `enabled`
      : `disabled`;
  });
}
