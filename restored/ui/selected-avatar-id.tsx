// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KEe`) / export `xpt`.

export type BindSelectedAvatarIdPeers = {
  GEe: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  _Ee: (...args: unknown[]) => unknown;
  _u: (...args: unknown[]) => unknown;
  bEe: (...args: unknown[]) => unknown;
  bu: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gEe: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
};

let peers: BindSelectedAvatarIdPeers | null = null;

/** Wire bindSelectedAvatarId peers once companions land. */
export function setBindSelectedAvatarIdPeers(
  next: BindSelectedAvatarIdPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xpt` / internal `KEe`.
 */
export function bindSelectedAvatarId() {
  if (peers == null) {
    throw new Error("bindSelectedAvatarId peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers._Ee(),
      peers._u(),
      peers.xu(),
      (GEe = {
        defaultServiceTier: peers.bu({
          agentAccess: `read-write`,
          default: null,
          description: `Preferred model speed tier`,
          key: peers.gEe,
          schema: peers.bEe,
        }),
        selectedAvatarId: peers.bu({
          agentAccess: `read-write`,
          default: null,
          description: `Selected Codex avatar`,
          key: `selected-avatar-id`,
          schema: peers.bEe,
        }),
        petSize: peers.bu({
          agentAccess: `read-write`,
          default: 112,
          description: `Size of the floating Codex pet`,
          key: `avatar-overlay-mascot-width-px`,
          schema: peers.rl().int().min(80).max(224),
        }),
      }));
  });
}
