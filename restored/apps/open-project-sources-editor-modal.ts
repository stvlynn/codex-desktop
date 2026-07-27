// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kPr`) / export `tQ`.

export type OpenProjectSourcesEditorModalPeers = {
  CPr: (...args: unknown[]) => unknown;
  Wk: (...args: unknown[]) => unknown;
};
let peers: OpenProjectSourcesEditorModalPeers | null = null;

/** Wire openProjectSourcesEditorModal peers once companions land. */
export function setOpenProjectSourcesEditorModalPeers(
  next: OpenProjectSourcesEditorModalPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tQ` / internal `kPr`.
 */
export function openProjectSourcesEditorModal(
  e: unknown,
  {
    initialName,
    initialSources,
    project,
    showDeleteAction,
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("openProjectSourcesEditorModal peers are not configured");
  }
  peers.Wk(e, peers.CPr, {
    initialName,
    initialSources,
    project,
    showDeleteAction,
  });
}
