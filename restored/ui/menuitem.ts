// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aX`) / export `iT`.

export type MenuitemPeers = {
  Bwr: (...args: unknown[]) => unknown;
  C5o: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Nk: (...args: unknown[]) => unknown;
  Op: (...args: unknown[]) => unknown;
  S5o: (...args: unknown[]) => unknown;
  T5o: (...args: unknown[]) => unknown;
  _5o: (...args: unknown[]) => unknown;
  a5o: (...args: unknown[]) => unknown;
  af: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  c5o: (...args: unknown[]) => unknown;
  d5o: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  g5o: (...args: unknown[]) => unknown;
  h5o: (...args: unknown[]) => unknown;
  i5o: (...args: unknown[]) => unknown;
  iX: (...args: unknown[]) => unknown;
  m5o: (...args: unknown[]) => unknown;
  nX: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  o5o: (...args: unknown[]) => unknown;
  p5o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  r5o: (...args: unknown[]) => unknown;
  rX: (...args: unknown[]) => unknown;
  s5o: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  u5o: (...args: unknown[]) => unknown;
  v5o: (...args: unknown[]) => unknown;
  w5o: (...args: unknown[]) => unknown;
  x5o: (...args: unknown[]) => unknown;
  y5o: (...args: unknown[]) => unknown;
};

let peers: MenuitemPeers | null = null;

/** Wire menuitem peers once companions land. */
export function setMenuitemPeers(next: MenuitemPeers): void {
  peers = next;
}

/**
 * Bundle export `iT` / internal `aX`.
 */
export function menuitem() {
  if (peers == null) {
    throw new Error("menuitem peers are not configured");
  }

  return peers.e(() => {
    ((nX = peers.c()),
      peers.sd(),
      peers.af(),
      (x5o = peers.r(peers.o(), 1)),
      peers.Op(),
      peers.Nk(),
      peers.r5o(),
      (rX = peers.J()),
      (S5o = `a[href], button, input, select, textarea, [contenteditable='true'], [draggable='true'], [role='button'], [role='link'], [role='menuitem'], [role='option'], [tabindex]:not([tabindex='-1'])`),
      (C5o = (0, peers.x5o.createContext)(null)),
      (w5o = (0, peers.x5o.createContext)(`default`)),
      (T5o = {
        duration: 300 / 1e3,
        ease: peers.Bwr,
      }),
      (iX = Object.assign(peers.a5o, {
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
      })));
  });
}
