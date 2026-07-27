// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_6n`) / export `E3`.

export type ExtractColonPrefixedNamedTokensPeers = {
  $Kn: (...args: unknown[]) => unknown;
  S6n: (...args: unknown[]) => unknown;
  g6n: (...args: unknown[]) => unknown;
  x6n: (...args: unknown[]) => unknown;
};

let peers: ExtractColonPrefixedNamedTokensPeers | null = null;

/** Wire extractColonPrefixedNamedTokens peers once companions land. */
export function setExtractColonPrefixedNamedTokensPeers(next: ExtractColonPrefixedNamedTokensPeers): void {
  peers = next;
}

/**
 * Bundle export `E3` / internal `_6n`.
 */
export function extractColonPrefixedNamedTokens(e: unknown) {
  if (peers == null) {
    throw new Error("extractColonPrefixedNamedTokens peers are not configured");
  }

  if (!peers.S6n.some((t) => e.includes(`:${t}`))) return [];
  let t = peers.$Kn(e),
    n = [];
  for (let e of t) {
    if (!peers.S6n.includes(e.name)) continue;
    let t = peers.g6n(e.name);
    if (t == null) continue;
    let r = peers.x6n.safeParse(e.attributes);
    r.success &&
      n.push({
        type: t,
        cwd: r.data.cwd,
        branch: r.data.branch,
        url: r.data.url,
        isDraft: r.data.isDraft,
      });
  }
  return n;
}
