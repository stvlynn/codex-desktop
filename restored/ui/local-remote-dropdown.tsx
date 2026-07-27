// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CA`) / export `v$`.

export type BindLocalRemoteDropdownPeers = {
  $8n: (...args: unknown[]) => unknown;
  Au: (...args: unknown[]) => unknown;
  G_: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  K_: (...args: unknown[]) => unknown;
  ND: (...args: unknown[]) => unknown;
  OAr: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SA: (...args: unknown[]) => unknown;
  bAr: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  data: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  isError: (...args: unknown[]) => unknown;
  isPending: (...args: unknown[]) => unknown;
  kAr: (...args: unknown[]) => unknown;
  lp: (...args: unknown[]) => unknown;
  origins: (...args: unknown[]) => unknown;
  q8n: (...args: unknown[]) => unknown;
  xA: (...args: unknown[]) => unknown;
};

let peers: BindLocalRemoteDropdownPeers | null = null;

/** Wire bindLocalRemoteDropdown peers once companions land. */
export function setBindLocalRemoteDropdownPeers(next: BindLocalRemoteDropdownPeers): void {
  peers = next;
}

/**
 * Bundle export `v$` / internal `CA`.
 */
export function bindLocalRemoteDropdown() {
  if (peers == null) {
    throw new Error("bindLocalRemoteDropdown peers are not configured");
  }

  return peers.e(() => {
    OAr = peers.c(), peers.Ho(), peers.Au(), peers.SA(), peers.lp(), peers.ND(), peers.ed(), peers.OE(), peers.K_(), kAr = peers.Oa(peers.Q, ({
      sourceHostId: e,
      sourceGitRoot: t,
      sourceWorkspaceRoot: n
    }, {
      get: r
    }) => {
      if (peers.e !== `local` || t == null || n == null) return [];
      let i = r(peers.q8n),
        a = r(peers.xA, {
          params: {
            hostId: peers.e,
            dirs: [n]
          },
          source: `local_remote_dropdown`
        }),
        o = new Map();
      for (let e of r(peers.$8n)) {
        if (i.find(t => t.hostId === peers.e.hostId) == null) continue;
        let t = o.get(peers.e.hostId);
        if (t != null) {
          t.projects.push(peers.e);
          continue;
        }
        o.set(peers.e.hostId, {
          hostId: peers.e.hostId,
          hostDisplayName: peers.G_(peers.e.hostId, i).display_name,
          projects: [peers.e]
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
            dirs: peers.c.map(e => peers.e.remotePath)
          },
          source: `local_remote_dropdown`
        });
        if (a?.isPending || o?.isPending) {
          s.push({
            status: `loading`,
            hostDisplayName: peers.e,
            hostId: i
          });
          continue;
        }
        if (a?.isError || o?.isError) {
          s.push({
            status: `error`,
            hostDisplayName: peers.e,
            hostId: i
          });
          continue;
        }
        let l = peers.bAr({
            sourceWorkspaceRoot: n,
            sourceGitRoot: t,
            sourceGitOrigins: a?.data?.origins,
            destinationWorkspaceRoots: peers.c.map(e => peers.e.remotePath),
            destinationGitOrigins: o?.data?.origins
          }),
          u = peers.c.find(({
            remotePath: e
          }) => peers.e === l);
        u != null && s.push({
          status: `ready`,
          hostDisplayName: peers.e,
          project: u
        });
      }
      return s;
    });
  });
}
