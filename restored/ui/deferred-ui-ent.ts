// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hy`) / export `Ent`.

export type BindDeferredUiEntPeers = {
  CSS: (...args: unknown[]) => unknown;
  PDF: (...args: unknown[]) => unknown;
  PDF_TO_CSS_UNITS: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiEntPeers | null = null;

/** Wire bindDeferredUiEnt peers once companions land. */
export function setBindDeferredUiEntPeers(next: BindDeferredUiEntPeers): void {
  peers = next;
}

/**
 * Bundle export `Ent` / internal `Hy`.
 */
export function bindDeferredUiEnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiEnt peers are not configured");
  }

  return class {
    static CSS = 96;
    static PDF = 72;
    static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
  };
}
