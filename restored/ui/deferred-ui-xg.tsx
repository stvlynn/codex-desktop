// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kqs`) / export `Xg`.

export type BindDeferredUiXgPeers = {
  Dqs: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Oqs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiXgPeers | null = null;

/** Wire bindDeferredUiXg peers once companions land. */
export function setBindDeferredUiXgPeers(next: BindDeferredUiXgPeers): void {
  peers = next;
}

/**
 * Bundle export `Xg` / internal `kqs`.
 */
export function bindDeferredUiXg() {
  if (peers == null) {
    throw new Error("bindDeferredUiXg peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    Dqs = peers.J();
    Oqs = (e) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={10}
          fill="none"
          viewBox="0 0 12 10"
          {...peers.e}
        >
          <path
            fill="currentColor"
            d="M2.4 9.332V1.817L.91 3.31a.533.533 0 0 1-.753-.753l2.4-2.4.083-.068a.533.533 0 0 1 .67.068l2.4 2.4.068.083a.533.533 0 0 1-.738.738l-.083-.068-1.492-1.492v7.515a.532.532 0 0 1-1.064 0Zm5.92-8.8a.532.532 0 0 1 1.064 0v7.516l1.492-1.492.084-.068a.533.533 0 0 1 .668.82l-2.4 2.4a.532.532 0 0 1-.752 0l-2.4-2.4a.533.533 0 0 1 .752-.752l1.493 1.492V.532Z"
          />
        </svg>
      );
    };
  });
}
