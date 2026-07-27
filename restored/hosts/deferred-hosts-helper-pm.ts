// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `B8s`) / export `Pm`.

export type BindDeferredHostsHelperPmPeers = {
  F8s: (...args: unknown[]) => unknown;
  I8s: (...args: unknown[]) => unknown;
  L8s: (...args: unknown[]) => unknown;
  R8s: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  d1: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  z8s: (...args: unknown[]) => unknown;
};

let peers: BindDeferredHostsHelperPmPeers | null = null;

/** Wire bindDeferredHostsHelperPm peers once companions land. */
export function setBindDeferredHostsHelperPmPeers(next: BindDeferredHostsHelperPmPeers): void {
  peers = next;
}

/**
 * Bundle export `Pm` / internal `B8s`.
 */
export function bindDeferredHostsHelperPm() {
  if (peers == null) {
    throw new Error("bindDeferredHostsHelperPm peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), F8s = `/pull-requests/:githubHost/:owner/:repository/:pullRequestNumber`, I8s = new Set([`archived assignee author base checks closed commenter comments created draft head in interactions involves is label language linked`, `merged mentions milestone no org project reactions repo review review-involves review-requested reviewed-by sort state status team team-review-requested type updated user user-review-requested`].join(` `).split(` `)), L8s = new Set(`assignee author commenter involves mentions review-involves review-requested reviewed-by team team-review-requested user-review-requested`.split(` `)), R8s = new Set(`closed draft merged state`.split(` `)), z8s = peers.sl({
      githubHost: peers.X().transform(peers.d1).pipe(peers.X().min(1)),
      owner: peers.X().trim().min(1),
      pullRequestNumber: peers.X().trim().regex(/^\d+$/u).transform(Number).pipe(peers.rl().int().positive().max(2 ** 53 - 1)),
      repository: peers.X().trim().min(1)
    });
  });
}
