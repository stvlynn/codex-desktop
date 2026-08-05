// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oQ`) / export `uy`.

export type BindBindOpenInBrowserBridgePeers = {
  ATs: (...args: unknown[]) => unknown;
  Fh: (...args: unknown[]) => unknown;
  Hb: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  OTs: (...args: unknown[]) => unknown;
  bTs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fb: (...args: unknown[]) => unknown;
  kTs: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  rQ: (...args: unknown[]) => unknown;
};

let peers: BindBindOpenInBrowserBridgePeers | null = null;

/** Wire bindBindOpenInBrowserBridge peers once companions land. */
export function setBindBindOpenInBrowserBridgePeers(
  next: BindBindOpenInBrowserBridgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `uy` / internal `oQ`.
 */
export function bindBindOpenInBrowserBridge() {
  if (peers == null) {
    throw new Error("bindBindOpenInBrowserBridge peers are not configured");
  }

  return peers.e(() => {
    (peers.Hb(),
      peers.fb(),
      peers.rQ(),
      peers.Kb(),
      peers.Fh(),
      peers.qx(),
      peers.bTs(),
      (OTs = {
        personal: `2336405413`,
        workspace: `3431030460`,
      }),
      (kTs = `3291298264`),
      (ATs = `allow_free_users_to_use_credits`));
  });
}
