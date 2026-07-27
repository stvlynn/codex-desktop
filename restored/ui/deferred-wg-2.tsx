// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Bqs`) / export `Wg`.

export type DeferredWgPeers = {
  J: (...args: unknown[]) => unknown;
  Rqs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  zqs: (...args: unknown[]) => unknown;
};
let peers: DeferredWgPeers | null = null;

/** Wire deferredWg peers once companions land. */
export function setDeferredWgPeers(next: DeferredWgPeers): void {
  peers = next;
}

/**
 * Bundle export `Wg` / internal `Bqs`.
 */
export function deferredWg() {
  if (peers == null) {
    throw new Error("deferredWg peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    Rqs = peers.J();
    zqs = (e) => {
      return (
        <svg
          width={20}
          height={21}
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...peers.e}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2.9032C14.3713 2.9032 17.915 6.4469 17.915 10.8182C17.915 15.1896 14.3713 18.7333 10 18.7333C5.62867 18.7333 2.08496 15.1896 2.08496 10.8182C2.08496 6.4469 5.62867 2.9032 10 2.9032ZM10 4.23328C6.3632 4.23328 3.41504 7.18144 3.41504 10.8182C3.41504 14.455 6.3632 17.4032 10 17.4032C13.6368 17.4032 16.585 14.455 16.585 10.8182C16.585 7.18144 13.6368 4.23328 10 4.23328Z"
            fill="currentColor"
          />
        </svg>
      );
    };
  });
}
