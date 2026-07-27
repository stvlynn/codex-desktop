// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `Ejr`) / export `KQ`.

export type ListRemoteControlClientsForHostPeers = {
  listBrowserClients: () => Promise<Array<{ client_id: string }>>;
  listHostClients: (
    appServerHostId: unknown,
    hostId: unknown,
  ) => Promise<Array<{ clientId: string }>>;
  normalizeBrowserClient: (client: { client_id: string }) => {
    clientId: string;
    [key: string]: unknown;
  };
};

let peers: ListRemoteControlClientsForHostPeers | null = null;

/** Wire remote-control client list peers once companions land. */
export function setListRemoteControlClientsForHostPeers(
  next: ListRemoteControlClientsForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `KQ` / internal `Ejr`.
 * Merge browser + host remote-control clients by client id.
 */
export async function listRemoteControlClientsForHost(
  hostId: unknown,
  options: {
    appServerHostId?: unknown;
    includeBrowserClients?: boolean;
  } = {},
): Promise<unknown[]> {
  if (peers == null) {
    throw new Error("ListRemoteControlClientsForHost peers are not configured");
  }
  const { appServerHostId, includeBrowserClients = true } = options;
  const [browserClients, hostClients] = await Promise.all([
    includeBrowserClients && appServerHostId == null
      ? peers.listBrowserClients()
      : Promise.resolve([]),
    hostId == null
      ? Promise.resolve([])
      : peers.listHostClients(appServerHostId ?? "local", hostId),
  ]);
  const merged = new Map<string, unknown>();
  for (const client of browserClients) {
    const normalized = peers.normalizeBrowserClient(client);
    merged.set(normalized.clientId, normalized);
  }
  for (const client of hostClients) {
    merged.set(client.clientId, client);
  }
  return Array.from(merged.values());
}
