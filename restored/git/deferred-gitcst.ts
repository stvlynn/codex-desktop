// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rSt`) / export `cst`.

export type DeferredGitcstPeers = {
  nyt: (...args: unknown[]) => unknown;
  u_: (...args: unknown[]) => unknown;
  xSt: (...args: unknown[]) => unknown;
};
let peers: DeferredGitcstPeers | null = null;

/** Wire deferredGitcst peers once companions land. */
export function setDeferredGitcstPeers(next: DeferredGitcstPeers): void {
  peers = next;
}

/**
 * Bundle export `cst` / internal `rSt`.
 */
export function deferredGitcst(
  e: unknown,
  { contextOnly = false }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("deferredGitcst peers are not configured");
  }
  let n = peers.nyt(e);
  if (n == null || (!contextOnly && peers.u_(e) == null)) return [];
  try {
    return peers.xSt.parse(JSON.parse(n.json));
  } catch {
    return [];
  }
}
