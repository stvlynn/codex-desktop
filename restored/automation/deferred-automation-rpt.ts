// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DEe`) / export `Rpt`.

export type BindDeferredAutomationRptPeers = {
  EEe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  _u: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hu: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  vu: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
};

let peers: BindDeferredAutomationRptPeers | null = null;

/** Wire bindDeferredAutomationRpt peers once companions land. */
export function setBindDeferredAutomationRptPeers(next: BindDeferredAutomationRptPeers): void {
  peers = next;
}

/**
 * Bundle export `Rpt` / internal `DEe`.
 */
export function bindDeferredAutomationRpt() {
  if (peers == null) {
    throw new Error("bindDeferredAutomationRpt peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), peers._u(), peers.xu(), EEe = {
      destination: peers.vu({
        agentAccess: `read-write`,
        default: `automatic`,
        description: `Where global shortcut appshots are attached`,
        key: `appshotDestination`,
        schema: peers.pl([`automatic`, `last-chat`, `new-chat`])
      }),
      soundEnabled: peers.vu({
        agentAccess: `read-write`,
        default: !0,
        description: `Whether appshots play a sound effect`,
        key: `appshotSoundEnabled`,
        mirrors: [{
          domain: `com.openai.sky.CUAService`,
          key: `appshotSoundEnabled`,
          kind: `macos-user-defaults`
        }],
        schema: peers.hu
      })
    };
  });
}
