// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cQ`) / export `ny`.

export type BindDeferrednyPeers = {
  Kx: (...args: unknown[]) => unknown;
  aEs: (...args: unknown[]) => unknown;
  cEs: (...args: unknown[]) => unknown;
  dEs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fEs: (...args: unknown[]) => unknown;
  iEs: (...args: unknown[]) => unknown;
  lEs: (...args: unknown[]) => unknown;
  oEs: (...args: unknown[]) => unknown;
  pEs: (...args: unknown[]) => unknown;
  qx: (...args: unknown[]) => unknown;
  sEs: (...args: unknown[]) => unknown;
  uEs: (...args: unknown[]) => unknown;
};

let peers: BindDeferrednyPeers | null = null;

/** Wire bindDeferredny peers once companions land. */
export function setBindDeferrednyPeers(next: BindDeferrednyPeers): void {
  peers = next;
}

/**
 * Bundle export `ny` / internal `cQ`.
 */
export function bindDeferredny() {
  if (peers == null) {
    throw new Error("bindDeferredny peers are not configured");
  }

  return peers.e(() => {
    (peers.qx(),
      (iEs = `https://chatgpt.com/codex/purchase/plus?checkout_from=codex_app`),
      (aEs = `https://chatgpt.com/codex/purchase/go?checkout_from=codex_app`),
      (oEs = `https://chatgpt.com/codex/purchase/pro5x?checkout_from=codex_app`),
      (sEs = `https://chatgpt.com/codex/purchase/pro?checkout_from=codex_app`),
      (cEs = `https://chatgpt.com/codex/purchase/codex_team?checkout_from=codex_app`),
      (lEs = `https://chatgpt.com/codex/purchase/team?checkout_from=codex_app`),
      (uEs = `https://chatgpt.com/#settings/Billing`),
      (dEs = `https://help.openai.com/en/articles/7905690-how-to-cancel-your-apple-subscription-for-chatgpt-in-the-chatgpt-ios-app`),
      (fEs = `https://help.openai.com/en/articles/8258076-how-to-cancel-a-subscription-in-the-chatgpt-android-app`),
      (pEs = {
        [peers.Kx.FREE]: 0,
        [peers.Kx.GO]: 1,
        [peers.Kx.PLUS]: 2,
        [peers.Kx.PROLITE]: 3,
        [peers.Kx.PRO]: 4,
      }));
  });
}
