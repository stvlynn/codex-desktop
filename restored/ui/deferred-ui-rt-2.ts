// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `iX`) / export `rT`.

export type BindDeferredUiRTPeers = {
  _5o: (...args: unknown[]) => unknown;
  a5o: (...args: unknown[]) => unknown;
  c5o: (...args: unknown[]) => unknown;
  d5o: (...args: unknown[]) => unknown;
  g5o: (...args: unknown[]) => unknown;
  h5o: (...args: unknown[]) => unknown;
  i5o: (...args: unknown[]) => unknown;
  m5o: (...args: unknown[]) => unknown;
  o5o: (...args: unknown[]) => unknown;
  p5o: (...args: unknown[]) => unknown;
  s5o: (...args: unknown[]) => unknown;
  u5o: (...args: unknown[]) => unknown;
  v5o: (...args: unknown[]) => unknown;
  y5o: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiRTPeers | null = null;

/** Wire bindDeferredUiRT peers once companions land. */
export function setBindDeferredUiRTPeers(next: BindDeferredUiRTPeers): void {
  peers = next;
}

/**
 * Bundle export `rT` / internal `iX`.
 */
export function bindDeferredUiRT() {
  if (peers == null) {
    throw new Error("bindDeferredUiRT peers are not configured");
  }

  return Object.assign(peers.a5o, {
    AdaptiveFooter: peers.i5o,
    Attachments: peers.o5o,
    Body: peers.y5o,
    UtilityBarSlot: peers.c5o,
    Footer: peers.u5o,
    FooterAction: peers.d5o,
    FooterActions: peers.p5o,
    FooterControls: peers.m5o,
    FooterDivider: peers._5o,
    FooterExpandingControls: peers.g5o,
    FooterInlineControls: peers.h5o,
    FooterLabel: peers.v5o,
    Input: peers.s5o,
  });
}
