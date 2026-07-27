// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `P6i`) / export `$R`.

export type BindBindLocalThread2Peers = {
  HFi: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  N6i: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iE: (...args: unknown[]) => unknown;
};

let peers: BindBindLocalThread2Peers | null = null;

/** Wire bindBindLocalThread2 peers once companions land. */
export function setBindBindLocalThread2Peers(next: BindBindLocalThread2Peers): void {
  peers = next;
}

/**
 * Bundle export `$R` / internal `P6i`.
 */
export function bindBindLocalThread2() {
  if (peers == null) {
    throw new Error("bindBindLocalThread2 peers are not configured");
  }

  return peers.e(() => {
    N6i = peers.c(), peers.Ho(), peers.Uf(), peers.iE(), peers.HFi();
  });
}

export type BindLocalThread2Props = Record<string, unknown>;

/**
 * `P6i` is an ESM module-init thunk (registers atoms as a side effect), not a
 * component — consumers only import it to keep the chunk's import graph
 * live, so alias the real export under the name they expect.
 */
export { bindBindLocalThread2 as BindLocalThread2 };
