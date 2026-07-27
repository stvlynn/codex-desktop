// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Eu`) / export `bpt`.

export type BindDeferredbptPeers = {
  JEe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  XEe: (...args: unknown[]) => unknown;
  YEe: (...args: unknown[]) => unknown;
  _u: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hu: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  vu: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
};

let peers: BindDeferredbptPeers | null = null;

/** Wire bindDeferredbpt peers once companions land. */
export function setBindDeferredbptPeers(next: BindDeferredbptPeers): void {
  peers = next;
}

/**
 * Bundle export `bpt` / internal `Eu`.
 */
export function bindDeferredbpt() {
  if (peers == null) {
    throw new Error("bindDeferredbpt peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), peers._u(), peers.xu(), JEe = [`juniper`, `maple`, `spruce`, `ember`, `vale`, `breeze`, `arbor`, `sol`, `cove`], YEe = peers.pl(peers.JEe), XEe = {
      screenContextEnabled: peers.vu({
        agentAccess: `hidden`,
        default: !0,
        description: `Whether realtime voice can inspect the foreground app when the user refers to screen content`,
        key: `realtimeVoiceScreenContextEnabled`,
        schema: peers.hu
      })
    };
  });
}
