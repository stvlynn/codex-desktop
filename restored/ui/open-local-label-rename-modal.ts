// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Rql`) / export `Ea`.

export type OpenLocalLabelRenameModalPeers = {
  H5: (...args: unknown[]) => unknown;
  Iql: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  Pql: (...args: unknown[]) => unknown;
  URl: (...args: unknown[]) => unknown;
  Wk: (...args: unknown[]) => unknown;
  rh: (...args: unknown[]) => unknown;
};

let peers: OpenLocalLabelRenameModalPeers | null = null;

/** Wire openLocalLabelRenameModal peers once companions land. */
export function setOpenLocalLabelRenameModalPeers(next: OpenLocalLabelRenameModalPeers): void {
  peers = next;
}

/**
 * Bundle export `Ea` / internal `Rql`.
 */
export function openLocalLabelRenameModal(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("openLocalLabelRenameModal peers are not configured");
  }

  peers.H5(t) && peers.Wk(e, peers.URl, {
    initialValue: t.label,
    messages: peers.Iql,
    onSave: n => {
      peers.Pql(e, t, n).catch(() => {
        e.get(peers.rh).danger(e.get(peers.LE).formatMessage(peers.Iql.error));
      });
    },
    requireNonEmpty: t.projectKind === `local`,
    trimOnSave: !0
  });
}
