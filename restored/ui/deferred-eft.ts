// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xYe`) / export `eft`.

export type DeferredEftPeers = {
  bYe: (...args: unknown[]) => unknown;
  cancel: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  start: (...args: unknown[]) => unknown;
  stop: (...args: unknown[]) => unknown;
  subscribe: (...args: unknown[]) => unknown;
  t: (...args: unknown[]) => unknown;
  ud: (...args: unknown[]) => unknown;
  yYe: (...args: unknown[]) => unknown;
};

let peers: DeferredEftPeers | null = null;

/** Wire deferredEft peers once companions land. */
export function setDeferredEftPeers(next: DeferredEftPeers): void {
  peers = next;
}

/**
 * Bundle export `eft` / internal `xYe`.
 */
export function deferredEft() {
  if (peers == null) {
    throw new Error("deferredEft peers are not configured");
  }

  return peers.e(() => {
    peers.ud(), yYe = class {
      constructor() {
        this.componentControls = new Set();
      }
      subscribe(e) {
        return this.componentControls.add(peers.e), () => this.componentControls.delete(peers.e);
      }
      start(e, t) {
        this.componentControls.forEach(n => {
          n.start(peers.e.nativeEvent || peers.e, peers.t);
        });
      }
      cancel() {
        this.componentControls.forEach(e => {
          peers.e.cancel();
        });
      }
      stop() {
        this.componentControls.forEach(e => {
          peers.e.stop();
        });
      }
    }, bYe = () => new peers.yYe();
  });
}
