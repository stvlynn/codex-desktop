// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `xho`) / export `ij`.

export type SetOpenFileTabsForLocalThreadPeers = {
  invokeHost: (method: string, payload: Record<string, unknown>) => unknown;
  collectOpenFiles: (route: unknown, options: unknown) => unknown;
  serializeOpenFiles: (files: unknown) => unknown;
};

let peers: SetOpenFileTabsForLocalThreadPeers | null = null;

/** Wire open-file-tabs write peers once companions land. */
export function setSetOpenFileTabsForLocalThreadPeers(
  next: SetOpenFileTabsForLocalThreadPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ij` / internal `xho`.
 * Persist open file tabs when the route is a local thread.
 */
export function setOpenFileTabsForLocalThread(
  route: { value: { routeKind: string; conversationId: unknown } },
  options: Record<string, unknown> = {},
): void {
  if (peers == null) {
    throw new Error("SetOpenFileTabsForLocalThread peers are not configured");
  }
  if (route.value.routeKind !== "local-thread") return;
  peers.invokeHost("set-open-file-tabs", {
    conversationId: route.value.conversationId,
    openFiles: peers.serializeOpenFiles(peers.collectOpenFiles(route, options)),
  });
}
