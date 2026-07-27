// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lz`) / export `bB`.

export type PatchWindowLayoutMetricsPeers = {
  E$i: (...args: unknown[]) => unknown;
  M$i: (...args: unknown[]) => unknown;
  dz: (...args: unknown[]) => unknown;
};

let peers: PatchWindowLayoutMetricsPeers | null = null;

/** Wire patchWindowLayoutMetrics peers once companions land. */
export function setPatchWindowLayoutMetricsPeers(next: PatchWindowLayoutMetricsPeers): void {
  peers = next;
}

/**
 * Bundle export `bB` / internal `lz`.
 */
export function patchWindowLayoutMetrics(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("patchWindowLayoutMetrics peers are not configured");
  }

  n.isFullScreen === !0 && peers.E$i(e, t), e.set(peers.dz, e => {
    let r = e.get(t) ?? peers.M$i,
      i = {
        ...r,
        ...n
      };
    if (r.intrinsicHeight === i.intrinsicHeight && r.isFullScreen === i.isFullScreen && r.isInlineExpanded === i.isInlineExpanded && r.sandboxError === i.sandboxError) return e;
    let a = new Map(e);
    return a.set(t, i), a;
  });
}
