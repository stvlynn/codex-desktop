// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `swo`) / export `Bk`.

export type BindDeferredBkPeers = {
  J: (...args: unknown[]) => unknown;
  awo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  owo: (...args: unknown[]) => unknown;
};
let peers: BindDeferredBkPeers | null = null;

/** Wire bindDeferredBk peers once companions land. */
export function setBindDeferredBkPeers(next: BindDeferredBkPeers): void {
  peers = next;
}

/**
 * Bundle export `Bk` / internal `swo`.
 */
export function bindDeferredBk() {
  if (peers == null) {
    throw new Error("bindDeferredBk peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    awo = peers.J();
    owo = (e) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
          {...peers.e}
        >
          <path
            d="M12.725 20.288c-.367.716-.842 1.166-1.425 1.35-.583.191-1.15.12-1.7-.213-.55-.325-.954-.846-1.213-1.563L3.787 6.95c-.175-.492-.216-.958-.124-1.4.091-.45.291-.83.6-1.137a2.187 2.187 0 0 1 1.137-.6c.45-.092.92-.05 1.412.125l12.913 4.6c.717.258 1.237.662 1.563 1.212.333.542.404 1.104.212 1.688-.183.583-.633 1.058-1.35 1.425l-4.925 2.512-2.5 4.913Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
        </svg>
      );
    };
  });
}
