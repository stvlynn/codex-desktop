// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `LWi`) / export `eH`.

export type SetOpenReviewFileSourceTabsPeers = {
  invokeHost: (method: string, payload: Record<string, unknown>) => unknown;
  collectOpenFiles: (route: unknown, options: unknown) => unknown;
  serializeOpenFiles: (files: unknown) => unknown;
};

let peers: SetOpenReviewFileSourceTabsPeers | null = null;

/** Wire review file-source tabs peers once companions land. */
export function setSetOpenReviewFileSourceTabsPeers(
  next: SetOpenReviewFileSourceTabsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eH` / internal `LWi`.
 * Persist review file-source tabs for a local-thread route.
 */
export function setOpenReviewFileSourceTabs(
  route: { value: { routeKind: string; conversationId: unknown } },
  options: Record<string, unknown> = {},
): void {
  if (peers == null) {
    throw new Error("SetOpenReviewFileSourceTabs peers are not configured");
  }
  if (route.value.routeKind !== "local-thread") return;
  peers.invokeHost("set-open-review-file-source-tabs", {
    conversationId: route.value.conversationId,
    openFiles: peers.serializeOpenFiles(peers.collectOpenFiles(route, options)),
  });
}
