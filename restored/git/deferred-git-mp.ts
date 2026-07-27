// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Oac`) / export `Mp`.

export type BindDeferredGitMpPeers = {
  $f: (...args: unknown[]) => unknown;
  HG: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  PUo: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  hUo: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  uJ: (...args: unknown[]) => unknown;
};

let peers: BindDeferredGitMpPeers | null = null;

/** Wire bindDeferredGitMp peers once companions land. */
export function setBindDeferredGitMpPeers(next: BindDeferredGitMpPeers): void {
  peers = next;
}

/**
 * Bundle export `Mp` / internal `Oac`.
 */
export function bindDeferredGitMp() {
  if (peers == null) {
    throw new Error("bindDeferredGitMp peers are not configured");
  }

  return peers.ka(
    peers.Q,
    ({ headRevision: e, request: t }, { get: n, scope: r }) => {
      let { originRepository: i, source: a } = n(
        peers.uJ,
        peers.PUo(t, `diff`),
      );
      return {
        enabled: e != null && a !== `loading`,
        queryFn: async ({ signal: n }) => {
          switch (a) {
            case `github-cli`:
              return peers.HG(`gh-pr-diff`, t, {
                signal: n,
                source: `pull_requests_page`,
              });
            case `github-connector`:
              if (i == null || e == null)
                throw Error(`Pull request diff source unavailable`);
              return {
                ...(await peers.hUo(
                  r,
                  t.account.hostId,
                  i,
                  t.pullRequest.number,
                )),
                status: `success`,
              };
            case `loading`:
            case `unavailable`:
              throw Error(`Pull request diff source unavailable`);
          }
        },
        queryKey: [...peers.$f(`gh-pr-diff`, t), `pull-request-provider`, e, a],
        ...(a === `unavailable`
          ? {
              retry: !1,
            }
          : {}),
        refetchOnWindowFocus: !0,
        staleTime: peers.Hf.FIVE_SECONDS,
      };
    },
  );
}
