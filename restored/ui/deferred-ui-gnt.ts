// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tb`) / export `gnt`.

export type BindDeferredUiGntPeers = {
  Worker: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  workerPort: (...args: unknown[]) => unknown;
  workerSrc: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiGntPeers | null = null;

/** Wire bindDeferredUiGnt peers once companions land. */
export function setBindDeferredUiGntPeers(next: BindDeferredUiGntPeers): void {
  peers = next;
}

/**
 * Bundle export `gnt` / internal `tb`.
 */
export function bindDeferredUiGnt() {
  if (peers == null) {
    throw new Error("bindDeferredUiGnt peers are not configured");
  }

  return class {
    static #e = null;
    static #t = ``;
    static get workerPort() {
      return this.#e;
    }
    static set workerPort(e) {
      if (!(typeof peers.Worker < `u` && peers.e instanceof peers.Worker) && peers.e !== null) throw Error("Invalid `workerPort` type.");
      this.#e = peers.e;
    }
    static get workerSrc() {
      return this.#t;
    }
    static set workerSrc(e) {
      if (typeof peers.e != `string`) throw Error("Invalid `workerSrc` type.");
      this.#t = peers.e;
    }
  };
}
