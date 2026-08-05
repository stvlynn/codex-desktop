// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xTe`) / export `amt`.

export type ApplyHotkeyWindowPeers = {
  $we: (...args: unknown[]) => unknown;
  Dge: (...args: unknown[]) => unknown;
  Jwe: (...args: unknown[]) => unknown;
  Qwe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  V_e: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  Xwe: (...args: unknown[]) => unknown;
  Ywe: (...args: unknown[]) => unknown;
  Zwe: (...args: unknown[]) => unknown;
  _Te: (...args: unknown[]) => unknown;
  aTe: (...args: unknown[]) => unknown;
  bTe: (...args: unknown[]) => unknown;
  cTe: (...args: unknown[]) => unknown;
  dTe: (...args: unknown[]) => unknown;
  du: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eTe: (...args: unknown[]) => unknown;
  fTe: (...args: unknown[]) => unknown;
  fu: (...args: unknown[]) => unknown;
  gTe: (...args: unknown[]) => unknown;
  hTe: (...args: unknown[]) => unknown;
  iTe: (...args: unknown[]) => unknown;
  lTe: (...args: unknown[]) => unknown;
  mTe: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  nTe: (...args: unknown[]) => unknown;
  oTe: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  pTe: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  qwe: (...args: unknown[]) => unknown;
  rTe: (...args: unknown[]) => unknown;
  sTe: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  tTe: (...args: unknown[]) => unknown;
  uTe: (...args: unknown[]) => unknown;
  vTe: (...args: unknown[]) => unknown;
  yTe: (...args: unknown[]) => unknown;
};

let peers: ApplyHotkeyWindowPeers | null = null;

/** Wire applyHotkeyWindow peers once companions land. */
export function setApplyHotkeyWindowPeers(next: ApplyHotkeyWindowPeers): void {
  peers = next;
}

/**
 * Bundle export `amt` / internal `xTe`.
 */
export function applyHotkeyWindow() {
  if (peers == null) {
    throw new Error("applyHotkeyWindow peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers.V_e(),
      peers.Dge(),
      (qwe = `/hotkey-window`),
      (Jwe = peers.qwe),
      (Ywe = `${peers.qwe}/new-thread`),
      (Xwe = `/debug`),
      (Zwe = `/global-dictation`),
      (Qwe = peers.Zwe),
      ($we = `/chatgpt/quick-chat`),
      (eTe = `/chatgpt/quick-chat-prewarm`),
      (tTe = `${peers.$we}/:conversationId`),
      (nTe = `${peers.qwe}/thread`),
      (rTe = `${peers.nTe}/:conversationId`),
      (iTe = `${peers.qwe}/remote`),
      (aTe = `${peers.iTe}/:taskId`),
      (oTe = `/skills/plugins`),
      (sTe = `${peers.oTe}/:pluginId`),
      (cTe = `/skills/manage`),
      (lTe = `${peers.cTe}/plugins`),
      (uTe = `${peers.lTe}/:pluginId`),
      (du = `openai-curated`),
      (fu = `openai-curated-remote`),
      (dTe = `openai-primary-runtime`),
      (fTe = `chatgpt-workspace`),
      (pTe =
        /^(?:plugins_[0-9a-f]{32}|(?:plugins~)?Plugin_[0-9a-f]{32}|plugin_[A-Za-z0-9][A-Za-z0-9_-]{0,247})$/),
      (mTe = /^(?:plugins~)?Plugin_[0-9a-f]{32}$/),
      (hTe = `/local`),
      (gTe = `${peers.hTe}/:conversationId`),
      (_Te = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
      (vTe = peers.pl([`branch`, `last-turn`])),
      peers.sl({
        conversationId: peers.X().regex(peers._Te),
        diffFilter: peers.vTe.nullable().catch(null),
        extraPathSegments: peers.ol(peers.X()),
        host: peers.ml(`threads`),
        protocol: peers.ml(`codex:`),
        reviewPath: peers.X().min(1).nullable().catch(null),
        view: peers.ml(`review`).nullable().catch(null),
      }),
      (yTe = `/remote`),
      (bTe = `${peers.yTe}/:taskId`),
      RegExp(`^${peers.nTe}/([^/?#]+)$`));
  });
}
