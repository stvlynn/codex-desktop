// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ejr`) / export `KQ`.

export type ListRemoteControlClientsForHostPeers = {
  Ojr: (...args: unknown[]) => unknown;
  gjr: (...args: unknown[]) => unknown;
  kjr: (...args: unknown[]) => unknown;
};
let peers: ListRemoteControlClientsForHostPeers | null = null;

/** Wire listRemoteControlClientsForHost peers once companions land. */
export function setListRemoteControlClientsForHostPeers(
  next: ListRemoteControlClientsForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `KQ` / internal `Ejr`.
 */
export async function listRemoteControlClientsForHost(
  e: unknown,
  {
    appServerHostId,
    includeBrowserClients = true,
  }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("listRemoteControlClientsForHost peers are not configured");
  }
  let [r, i] = await Promise.all([
      includeBrowserClients && appServerHostId == null ? peers.gjr() : [],
      e == null ? [] : peers.Ojr(appServerHostId ?? "local", e),
    ]),
    a = new Map();
  for (let e of r) a.set(e.client_id, peers.kjr(e));
  for (let e of i) a.set(e.clientId, e);
  return Array.from(a.values());
}
