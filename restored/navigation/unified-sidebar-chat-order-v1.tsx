// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Rc`) / export `Bd`.

export type BindBindUnifiedSidebarChatOrderV1Peers = {
  GRc: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  JRc: (...args: unknown[]) => unknown;
  KRc: (...args: unknown[]) => unknown;
  LY: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  QRc: (...args: unknown[]) => unknown;
  WRc: (...args: unknown[]) => unknown;
  XRc: (...args: unknown[]) => unknown;
  YRc: (...args: unknown[]) => unknown;
  ZRc: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  qRc: (...args: unknown[]) => unknown;
};

let peers: BindBindUnifiedSidebarChatOrderV1Peers | null = null;

/** Wire bindBindUnifiedSidebarChatOrderV1 peers once companions land. */
export function setBindBindUnifiedSidebarChatOrderV1Peers(next: BindBindUnifiedSidebarChatOrderV1Peers): void {
  peers = next;
}

/**
 * Bundle export `Bd` / internal `$Rc`.
 */
export function bindBindUnifiedSidebarChatOrderV1() {
  if (peers == null) {
    throw new Error("bindBindUnifiedSidebarChatOrderV1 peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), peers.LY(), peers.Im(), WRc = [], GRc = [], KRc = [], qRc = peers.Pm(`unified-sidebar-chat-order-v1`, peers.WRc), JRc = peers.Pm(`unified-sidebar-pinned-order-v1`, peers.GRc), YRc = peers.Pm(`unified-sidebar-project-order-v1`, peers.KRc), XRc = peers.Ma(peers.Q, ({
      get: e
    }) => peers.e(peers.qRc) ?? peers.WRc), ZRc = peers.Ma(peers.Q, ({
      get: e
    }) => peers.e(peers.JRc) ?? peers.GRc), QRc = peers.Ma(peers.Q, ({
      get: e
    }) => peers.e(peers.YRc) ?? peers.KRc);
  });
}
