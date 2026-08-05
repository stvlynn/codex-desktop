// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `psc`) / export `dp`.

export type BindDesktopNotePeers = {
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  dsc: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fsc: (...args: unknown[]) => unknown;
  lsc: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  usc: (...args: unknown[]) => unknown;
};

let peers: BindDesktopNotePeers | null = null;

/** Wire bindDesktopNote peers once companions land. */
export function setBindDesktopNotePeers(next: BindDesktopNotePeers): void {
  peers = next;
}

/**
 * Bundle export `dp` / internal `psc`.
 */
export function bindDesktopNote() {
  if (peers == null) {
    throw new Error("bindDesktopNote peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      (lsc = [
        `desktop_note`,
        `csv_chart`,
        `hold_next_free_hour`,
        `send_message_to_self`,
      ]),
      (usc = peers.X().min(1)),
      (dsc = peers.pl([`desktop_note`, `csv_chart`])),
      (fsc = peers.sl({
        iconAppId: peers.X().min(1).optional(),
        label: peers.X().min(1),
      })));
  });
}
