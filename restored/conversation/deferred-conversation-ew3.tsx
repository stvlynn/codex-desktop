// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `XFi`) / export `eW`.

export type BindBinddeferredConversationEW3Peers = {
  CE: (...args: unknown[]) => unknown;
  DI: (...args: unknown[]) => unknown;
  EE: (...args: unknown[]) => unknown;
  FI: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  UFi: (...args: unknown[]) => unknown;
  Vl: (...args: unknown[]) => unknown;
  X8n: (...args: unknown[]) => unknown;
  YFi: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  jFi: (...args: unknown[]) => unknown;
  kI: (...args: unknown[]) => unknown;
  ku: (...args: unknown[]) => unknown;
  length: (...args: unknown[]) => unknown;
  mFi: (...args: unknown[]) => unknown;
  projectKind: (...args: unknown[]) => unknown;
};

let peers: BindBinddeferredConversationEW3Peers | null = null;

/** Wire bindBinddeferredConversationEW3 peers once companions land. */
export function setBindBinddeferredConversationEW3Peers(
  next: BindBinddeferredConversationEW3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `eW` / internal `XFi`.
 */
export function bindBinddeferredConversationEW3() {
  if (peers == null) {
    throw new Error("bindBinddeferredConversationEW3 peers are not configured");
  }

  return peers.Ma(peers.hT, ({ get: e, scope: t }) => {
    let n = e(peers.YFi),
      r;
    switch (n.kind) {
      case `none`:
        r = null;
        break;
      case `plain`: {
        let i = e(peers.kI),
          a =
            t.value.routeKind === `local-thread`
              ? e(peers.EE)?.[t.value.conversationId]
              : null,
          o = a?.projectKind === `local` ? e(peers.X8n, a.projectId) : null,
          s =
            o?.length === 1
              ? (o[0] ?? null)
              : a?.projectKind === `local`
                ? (a.path ?? null)
                : null,
          c =
            a == null
              ? n.cwd
              : peers.ku({
                  assignment: a,
                  cwd: n.cwd,
                }),
          l =
            t.value.routeKind !== `local-thread` &&
            i.kind === `local` &&
            i.id === n.hostId
              ? e(peers.CE)
              : null,
          u = c != null && peers.Vl(c) ? c : null;
        r = s ?? l ?? u;
        break;
      }
      case `git`:
        r = n.git.root;
        break;
    }
    return peers.jFi({
      codexHome: e(peers.mFi),
      executionCwd: e(peers.DI),
      isWorktreeMode: !1,
      projectRootPaths: e(peers.UFi, e(peers.FI)),
      workspaceBrowserRoot: r,
    });
  });
}
