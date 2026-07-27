// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kAr`) / export `y$`.

export type BindBindDeferredUiYPeers = {
  $8n: (...args: unknown[]) => unknown;
  G_: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  bAr: (...args: unknown[]) => unknown;
  data: (...args: unknown[]) => unknown;
  isError: (...args: unknown[]) => unknown;
  isPending: (...args: unknown[]) => unknown;
  origins: (...args: unknown[]) => unknown;
  q8n: (...args: unknown[]) => unknown;
  xA: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiYPeers | null = null;

/** Wire bindBindDeferredUiY peers once companions land. */
export function setBindBindDeferredUiYPeers(next: BindBindDeferredUiYPeers): void {
  peers = next;
}

/**
 * Bundle export `y$` / internal `kAr`.
 */
export function bindBindDeferredUiY() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiY peers are not configured");
  }

  return peers.Oa(peers.Q, ({
    sourceHostId: e,
    sourceGitRoot: t,
    sourceWorkspaceRoot: n
  }, {
    get: r
  }) => {
    if (e !== `local` || t == null || n == null) return [];
    let i = r(peers.q8n),
      a = r(peers.xA, {
        params: {
          hostId: e,
          dirs: [n]
        },
        source: `local_remote_dropdown`
      }),
      o = new Map();
    for (let e of r(peers.$8n)) {
      if (i.find(t => t.hostId === e.hostId) == null) continue;
      let t = o.get(e.hostId);
      if (t != null) {
        t.projects.push(e);
        continue;
      }
      o.set(e.hostId, {
        hostId: e.hostId,
        hostDisplayName: peers.G_(e.hostId, i).display_name,
        projects: [e]
      });
    }
    let s = [];
    for (let {
      hostDisplayName: e,
      hostId: i,
      projects: c
    } of o.values()) {
      let o = r(peers.xA, {
        params: {
          hostId: i,
          dirs: c.map(e => e.remotePath)
        },
        source: `local_remote_dropdown`
      });
      if (a?.isPending || o?.isPending) {
        s.push({
          status: `loading`,
          hostDisplayName: e,
          hostId: i
        });
        continue;
      }
      if (a?.isError || o?.isError) {
        s.push({
          status: `error`,
          hostDisplayName: e,
          hostId: i
        });
        continue;
      }
      let l = peers.bAr({
          sourceWorkspaceRoot: n,
          sourceGitRoot: t,
          sourceGitOrigins: a?.data?.origins,
          destinationWorkspaceRoots: c.map(e => e.remotePath),
          destinationGitOrigins: o?.data?.origins
        }),
        u = c.find(({
          remotePath: e
        }) => e === l);
      u != null && s.push({
        status: `ready`,
        hostDisplayName: e,
        project: u
      });
    }
    return s;
  });
}
