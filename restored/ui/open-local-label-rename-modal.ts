// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `Rql`) / export `Ea`.

export type LocalLabelTarget = {
  label?: string;
  projectKind?: string;
};

export type OpenLocalLabelRenameModalPeers = {
  canRename: (target: LocalLabelTarget) => boolean;
  openModal: (
    store: unknown,
    kind: unknown,
    payload: {
      initialValue?: string;
      messages: unknown;
      onSave: (nextLabel: string) => void;
      requireNonEmpty: boolean;
      trimOnSave: boolean;
    },
  ) => void;
  modalKind: unknown;
  messages: { error?: unknown };
  saveLabel: (
    store: unknown,
    target: LocalLabelTarget,
    nextLabel: string,
  ) => Promise<void>;
  toastAtom: unknown;
  intlAtom: unknown;
};

let peers: OpenLocalLabelRenameModalPeers | null = null;

/** Wire rename modal peers once companions land. */
export function setOpenLocalLabelRenameModalPeers(
  next: OpenLocalLabelRenameModalPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Ea` / internal `Rql`.
 * Open the local label rename modal for a project/workspace target.
 */
export function openLocalLabelRenameModal(
  store: { get: (atom: unknown) => any },
  target: LocalLabelTarget,
): void {
  if (peers == null) {
    throw new Error("OpenLocalLabelRenameModal peers are not configured");
  }
  if (!peers.canRename(target)) return;
  peers.openModal(store, peers.modalKind, {
    initialValue: target.label,
    messages: peers.messages,
    onSave: (nextLabel) => {
      peers!.saveLabel(store, target, nextLabel).catch(() => {
        const toast = store.get(peers!.toastAtom);
        const intl = store.get(peers!.intlAtom);
        toast?.danger?.(
          intl?.formatMessage?.(peers!.messages?.error ?? { id: "error" }),
        );
      });
    },
    requireNonEmpty: target.projectKind === "local",
    trimOnSave: true,
  });
}
