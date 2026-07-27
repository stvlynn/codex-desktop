// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `NEe`) / export `Mpt`.

export type MacMenuBarEnabledPeers = {
  MEe: (...args: unknown[]) => unknown;
  _u: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hu: (...args: unknown[]) => unknown;
  vu: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
};

let peers: MacMenuBarEnabledPeers | null = null;

/** Wire macMenuBarEnabled peers once companions land. */
export function setMacMenuBarEnabledPeers(next: MacMenuBarEnabledPeers): void {
  peers = next;
}

/**
 * Bundle export `Mpt` / internal `NEe`.
 */
export function macMenuBarEnabled() {
  if (peers == null) {
    throw new Error("macMenuBarEnabled peers are not configured");
  }

  return peers.e(() => {
    peers._u(), peers.xu(), MEe = {
      alwaysHidePictureInPicture: peers.vu({
        agentAccess: `hidden`,
        default: !1,
        description: `Whether Computer Use picture in picture is always hidden`,
        key: `computerUseAlwaysHidePictureInPicture`,
        schema: peers.hu
      })
    };
  });
}
