// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `X$o`) / export `bE`.

export type PrimeBrowserTabTransfersPeers = {
  ABr: (...args: unknown[]) => unknown;
  QLi: (...args: unknown[]) => unknown;
  aL: (...args: unknown[]) => unknown;
  iL: (...args: unknown[]) => unknown;
  target: (...args: unknown[]) => unknown;
};

let peers: PrimeBrowserTabTransfersPeers | null = null;

/** Wire primeBrowserTabTransfers peers once companions land. */
export function setPrimeBrowserTabTransfersPeers(
  next: PrimeBrowserTabTransfersPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bE` / internal `X$o`.
 */
export function primeBrowserTabTransfers(
  e: unknown,
  {
    sourceConversationId: t,
    targetConversationId: n,
  }: { sourceConversationId: unknown; targetConversationId: unknown },
) {
  if (peers == null) {
    throw new Error("primeBrowserTabTransfers peers are not configured");
  }
  let r = peers.QLi(e, t);
  if (r.length === 0) return;
  let i = peers.aL(e, t),
    a = i != null && r.includes(i) ? i : (r.at(-1) ?? null);
  for (let i of r)
    peers.ABr(n, {
      active: i === a,
      browserTabId: i,
      target: peers.iL(e, t, i)?.target,
      transferSourceBrowserTabId: i,
      transferSourceConversationId: t,
    });
}
