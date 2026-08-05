// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_ti`) / export `vG`.

export type BindAttachmentPeers = {
  GM: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gti: (...args: unknown[]) => unknown;
  hti: (...args: unknown[]) => unknown;
};

let peers: BindAttachmentPeers | null = null;

/** Wire bindAttachment peers once companions land. */
export function setBindAttachmentPeers(next: BindAttachmentPeers): void {
  peers = next;
}

/**
 * Bundle export `vG` / internal `_ti`.
 */
export function bindAttachment() {
  if (peers == null) {
    throw new Error("bindAttachment peers are not configured");
  }

  return peers.e(() => {
    (peers.Hb(),
      peers.Ho(),
      peers.Kb(),
      peers.KM(),
      (hti = peers.Ta(peers.GM, null)),
      (gti = peers.Ta(peers.GM, null)));
  });
}
