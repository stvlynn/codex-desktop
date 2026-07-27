// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WEe`) / export `Cpt`.

export type BindReadWrite3Peers = {
  Sl: (...args: unknown[]) => unknown;
  UEe: (...args: unknown[]) => unknown;
  _u: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hu: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
  yu: (...args: unknown[]) => unknown;
};

let peers: BindReadWrite3Peers | null = null;

/** Wire bindReadWrite3 peers once companions land. */
export function setBindReadWrite3Peers(next: BindReadWrite3Peers): void {
  peers = next;
}

/**
 * Bundle export `Cpt` / internal `WEe`.
 */
export function bindReadWrite3() {
  if (peers == null) {
    throw new Error("bindReadWrite3 peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), peers._u(), peers.xu(), UEe = {
      turnMode: peers.yu({
        agentAccess: `read-write`,
        default: `unfocused`,
        description: `When turn-completion notifications are shown`,
        key: `notifications-turn-mode`,
        schema: peers.pl([`off`, `unfocused`, `always`])
      }),
      permissionsEnabled: peers.yu({
        agentAccess: `read-write`,
        default: !0,
        description: `Whether permission notifications are shown`,
        key: `notifications-permissions-enabled`,
        schema: peers.hu
      }),
      questionsEnabled: peers.yu({
        agentAccess: `read-write`,
        default: !0,
        description: `Whether question notifications are shown`,
        key: `notifications-questions-enabled`,
        schema: peers.hu
      })
    };
  });
}
