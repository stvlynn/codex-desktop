// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gD`) / export `Z2`.

export type BindZ2BindableHelperPeers = {
  JE: (...args: unknown[]) => unknown;
  fg: (...args: unknown[]) => unknown;
  parentThreadId: (...args: unknown[]) => unknown;
};

let peers: BindZ2BindableHelperPeers | null = null;

/** Wire bindZ2BindableHelper peers once companions land. */
export function setBindZ2BindableHelperPeers(
  next: BindZ2BindableHelperPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Z2` / internal `gD`.
 */
export function bindZ2BindableHelper() {
  if (peers == null) {
    throw new Error("bindZ2BindableHelper peers are not configured");
  }

  return peers.JE(
    ({ parentThreadId: e, source: t }) =>
      e ?? peers.fg(t)?.parentThreadId ?? null,
  );
}
