// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FUo`) / export `VD`.

export type RemoteUpstreamUrlPeers = {
  Au: (...args: unknown[]) => unknown;
  DE: (...args: unknown[]) => unknown;
  DM: (...args: unknown[]) => unknown;
  Dh: (...args: unknown[]) => unknown;
  Eh: (...args: unknown[]) => unknown;
  Gxo: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Mpo: (...args: unknown[]) => unknown;
  NUo: (...args: unknown[]) => unknown;
  Npo: (...args: unknown[]) => unknown;
  OE: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  RSe: (...args: unknown[]) => unknown;
  SA: (...args: unknown[]) => unknown;
  U_: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  Uxo: (...args: unknown[]) => unknown;
  _Uo: (...args: unknown[]) => unknown;
  data: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  host: (...args: unknown[]) => unknown;
  isPending: (...args: unknown[]) => unknown;
  originUrl: (...args: unknown[]) => unknown;
  origins: (...args: unknown[]) => unknown;
  toLowerCase: (...args: unknown[]) => unknown;
  uJ: (...args: unknown[]) => unknown;
  xA: (...args: unknown[]) => unknown;
  yqr: (...args: unknown[]) => unknown;
};

let peers: RemoteUpstreamUrlPeers | null = null;

/** Wire remoteUpstreamUrl peers once companions land. */
export function setRemoteUpstreamUrlPeers(next: RemoteUpstreamUrlPeers): void {
  peers = next;
}

/**
 * Bundle export `VD` / internal `FUo`.
 */
export function remoteUpstreamUrl() {
  if (peers == null) {
    throw new Error("remoteUpstreamUrl peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Au(),
      peers.Gxo(),
      peers.SA(),
      peers.DM(),
      peers.Npo(),
      peers.ed(),
      peers.OE(),
      peers.U_(),
      peers.Dh(),
      peers.Uf(),
      peers.NUo(),
      (uJ = peers.Oa(peers.Q, (e, { get: t }) => {
        let n = peers.e.hostId ?? `local`,
          r =
            peers.e.repository == null
              ? t(peers.xA, {
                  params: {
                    dirs: peers.e.cwd == null ? [] : [peers.e.cwd],
                    hostId: peers.e.hostId,
                  },
                  source: peers.e.operationSource,
                })
              : null,
          i =
            peers.e.repository ??
            peers.RSe(
              peers.e.originUrl ?? r?.data?.origins[0]?.originUrl ?? ``,
            ),
          a =
            peers.e.repository == null
              ? t(peers.Uxo, {
                  enabled: peers.e.cwd != null,
                  key: `remote.upstream.url`,
                  lookup:
                    peers.e.cwd == null
                      ? null
                      : {
                          cwd: peers.e.cwd,
                          hostConfig: t(peers.DE, n),
                        },
                  operationSource: peers.e.operationSource,
                  retainRepoWatch: !1,
                  scope: `local`,
                  staleTime: peers.Hf.ONE_MINUTE,
                })
              : null,
          o = peers.RSe(a?.data ?? ``),
          s = i?.host.toLowerCase() === `github.com`,
          c =
            peers.e.operation === `create` && s && peers.e.threadId != null
              ? {
                  originRepository: i,
                  repository: o?.host.toLowerCase() === `github.com` ? o : i,
                  threadId: peers.e.threadId,
                }
              : void 0,
          l =
            peers.e.operation === `create`
              ? c != null
              : s || o?.host.toLowerCase() === `github.com`,
          u = t(peers.Eh, `1892621033`),
          d = u && t(peers.Eh, `512537293`),
          f = t(peers.Mpo, {
            cwd: peers.e.cwd,
            hostId: peers.e.hostId,
            hostname: peers.e.repository?.host,
            operationSource: peers.e.operationSource,
          });
        if (!d && f === `available`)
          return {
            originRepository: i,
            source: `github-cli`,
            upstreamRepository: o,
          };
        if (a?.isPending === !0)
          return {
            originRepository: i,
            source: `loading`,
            upstreamRepository: o,
          };
        let p = u && l ? t(peers.yqr, n) : null;
        if (p?.isPending === !0)
          return {
            originRepository: i,
            source: `loading`,
            upstreamRepository: o,
          };
        let m = p?.data != null && peers._Uo(p.data, peers.e.operation) != null;
        return d && m
          ? {
              originRepository: i,
              source: `github-connector`,
              upstreamRepository: o,
              createPullRequestTarget: c,
            }
          : f === `loading`
            ? {
                originRepository: i,
                source: `loading`,
                upstreamRepository: o,
              }
            : f === `available`
              ? {
                  originRepository: i,
                  source: `github-cli`,
                  upstreamRepository: o,
                }
              : m
                ? {
                    originRepository: i,
                    source: `github-connector`,
                    upstreamRepository: o,
                    createPullRequestTarget: c,
                  }
                : {
                    originRepository: i,
                    source: `unavailable`,
                    unavailableReason:
                      f === `unauthenticated`
                        ? `gh-auth-required`
                        : f === `missing`
                          ? `gh-cli-missing`
                          : `pull-request-source-unavailable`,
                    upstreamRepository: o,
                  };
      })));
  });
}
