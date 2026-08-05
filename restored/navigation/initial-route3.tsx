// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Fw`) / export `M5`.

export type BindBindInitialRoute3Peers = {
  Au: (...args: unknown[]) => unknown;
  KHn: (...args: unknown[]) => unknown;
  Nw: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eTe: (...args: unknown[]) => unknown;
  qHn: (...args: unknown[]) => unknown;
  tTe: (...args: unknown[]) => unknown;
};

let peers: BindBindInitialRoute3Peers | null = null;

/** Wire bindBindInitialRoute3 peers once companions land. */
export function setBindBindInitialRoute3Peers(
  next: BindBindInitialRoute3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `M5` / internal `Fw`.
 */
export function bindBindInitialRoute3() {
  if (peers == null) {
    throw new Error("bindBindInitialRoute3 peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(),
      peers.Nw(),
      (KHn = `/avatar-overlay`),
      (qHn = [
        `/global-dictation`,
        `/global-dictation/*`,
        `/hotkey-window`,
        `/hotkey-window/*`,
        peers.eTe,
        peers.tTe,
      ]));
  });
}
