// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vJs`) / export `Ig`.

export type BindPendingPastedTextAttachmentsPeers = {
  Pn: (...args: unknown[]) => unknown;
  _Js: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dy: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fr: (...args: unknown[]) => unknown;
  gJs: (...args: unknown[]) => unknown;
  px: (...args: unknown[]) => unknown;
};

let peers: BindPendingPastedTextAttachmentsPeers | null = null;

/** Wire bindPendingPastedTextAttachments peers once companions land. */
export function setBindPendingPastedTextAttachmentsPeers(
  next: BindPendingPastedTextAttachmentsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ig` / internal `vJs`.
 */
export function bindPendingPastedTextAttachments() {
  if (peers == null) {
    throw new Error(
      "bindPendingPastedTextAttachments peers are not configured",
    );
  }

  return peers.e(() => {
    ((gJs = peers.c()),
      peers.px(),
      peers.fr(),
      peers.dy(),
      (_Js = peers.Pn({
        activeOperationId: null,
        operations: [],
      })));
  });
}
