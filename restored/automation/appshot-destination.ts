// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DEe`) / export `Rpt`.

export type AppshotDestinationPeers = {
  EEe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  _u: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hu: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  vu: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
};

let peers: AppshotDestinationPeers | null = null;

/** Wire appshotDestination peers once companions land. */
export function setAppshotDestinationPeers(
  next: AppshotDestinationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Rpt` / internal `DEe`.
 */
export function appshotDestination() {
  if (peers == null) {
    throw new Error("appshotDestination peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers._u(),
      peers.xu(),
      (EEe = {
        destination: peers.vu({
          agentAccess: `read-write`,
          default: `automatic`,
          description: `Where global shortcut appshots are attached`,
          key: `appshotDestination`,
          schema: peers.pl([`automatic`, `last-chat`, `new-chat`]),
        }),
        soundEnabled: peers.vu({
          agentAccess: `read-write`,
          default: !0,
          description: `Whether appshots play a sound effect`,
          key: `appshotSoundEnabled`,
          mirrors: [
            {
              domain: `com.openai.sky.CUAService`,
              key: `appshotSoundEnabled`,
              kind: `macos-user-defaults`,
            },
          ],
          schema: peers.hu,
        }),
      }));
  });
}
