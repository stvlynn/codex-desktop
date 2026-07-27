// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `kPr`) / export `tQ`.

export type OpenProjectSourcesEditorModalOptions = {
  initialName?: unknown;
  initialSources?: unknown;
  project?: unknown;
  showDeleteAction?: unknown;
};

export type OpenProjectSourcesEditorModalPeers = {
  openModal: (
    store: unknown,
    kind: unknown,
    payload: OpenProjectSourcesEditorModalOptions,
  ) => void;
  modalKind: unknown;
};

let peers: OpenProjectSourcesEditorModalPeers | null = null;

/** Wire modal opener once companions land. */
export function setOpenProjectSourcesEditorModalPeers(
  next: OpenProjectSourcesEditorModalPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tQ` / internal `kPr`.
 * Open the project sources editor modal.
 */
export function openProjectSourcesEditorModal(
  store: unknown,
  options: OpenProjectSourcesEditorModalOptions,
): void {
  if (peers == null) {
    throw new Error("OpenProjectSourcesEditorModal peers are not configured");
  }
  peers.openModal(store, peers.modalKind, {
    initialName: options.initialName,
    initialSources: options.initialSources,
    project: options.project,
    showDeleteAction: options.showDeleteAction,
  });
}
