// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Z2s`) / export `Mh`.

export type BindCloud4Peers = {
  X2s: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindCloud4Peers | null = null;

/** Wire bindCloud4 peers once companions land. */
export function setBindCloud4Peers(next: BindCloud4Peers): void {
  peers = next;
}

/**
 * Bundle export `Mh` / internal `Z2s`.
 */
export function bindCloud4() {
  if (peers == null) {
    throw new Error("bindCloud4 peers are not configured");
  }

  return peers.e(() => {
    X2s = `ms-[calc(var(--composer-suggestion-inline-inset)-var(--composer-inline-overhang))] me-[calc(var(--composer-suggestion-inline-inset)+var(--composer-inline-overhang))]`;
  });
}
