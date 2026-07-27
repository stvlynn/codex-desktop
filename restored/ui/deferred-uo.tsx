// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pHl`) / export `uo`.

export type DeferredUoPeers = {
  J: (...args: unknown[]) => unknown;
  dHl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fHl: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
};
let peers: DeferredUoPeers | null = null;

/** Wire deferredUo peers once companions land. */
export function setDeferredUoPeers(next: DeferredUoPeers): void {
  peers = next;
}

/**
 * Bundle export `uo` / internal `pHl`.
 */
export function deferredUo() {
  if (peers == null) {
    throw new Error("deferredUo peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    dHl = peers.J();
    fHl = (e) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          viewBox="0 0 20 20"
          {...peers.e}
        >
          <path d="M10.012 1.669a8.343 8.343 0 0 1 8.343 8.343 8.343 8.343 0 0 1-8.343 8.343 8.343 8.343 0 0 1-8.343-8.343 8.343 8.343 0 0 1 8.343-8.343Zm0 1.668a6.675 6.675 0 1 0 0 13.35 6.675 6.675 0 0 0 0-13.35Zm0 1.669a5.007 5.007 0 1 1 0 10.012V5.006Z" />
        </svg>
      );
    };
  });
}
