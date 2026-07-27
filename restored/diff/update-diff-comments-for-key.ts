// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bpo`) / export `bj`.

export type UpdateDiffCommentsForKeyPeers = {
  L_: (...args: unknown[]) => unknown;
  Vpo: (...args: unknown[]) => unknown;
};

let peers: UpdateDiffCommentsForKeyPeers | null = null;

/** Wire updateDiffCommentsForKey peers once companions land. */
export function setUpdateDiffCommentsForKeyPeers(next: UpdateDiffCommentsForKeyPeers): void {
  peers = next;
}

/**
 * Bundle export `bj` / internal `Bpo`.
 */
export function updateDiffCommentsForKey(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("updateDiffCommentsForKey peers are not configured");
  }

  peers.L_(e, `diff_comments`, e => {
    let r = e?.[t] ?? peers.Vpo,
      i = typeof n == `function` ? n(r) : n;
    if (i === r) return e;
    if (i.length > 0) return {
      ...e,
      [t]: i
    };
    if (e?.[t] == null) return e;
    let a = {
      ...e
    };
    return delete a[t], Object.keys(a).length === 0 ? void 0 : a;
  });
}
