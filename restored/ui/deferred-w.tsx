// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Jti`) / export `$W`.

export type BindDeferredWPeers = {
  J: (...args: unknown[]) => unknown;
  Kti: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  qti: (...args: unknown[]) => unknown;
};
let peers: BindDeferredWPeers | null = null;

/** Wire bindDeferredW peers once companions land. */
export function setBindDeferredWPeers(next: BindDeferredWPeers): void {
  peers = next;
}

/**
 * Bundle export `$W` / internal `Jti`.
 */
export function bindDeferredW() {
  if (peers == null) {
    throw new Error("bindDeferredW peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    Kti = peers.J();
    qti = (e) => {
      return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...peers.e}
        >
          <path
            d="M4 5H16"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
          />
          <path
            d="M4 10H12.25C13.77 10 15 11.23 15 12.75C15 14.27 13.77 15.5 12.25 15.5H10"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.35 14.15L10 15.5L11.35 16.85"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 15.5H7.4"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
          />
        </svg>
      );
    };
  });
}
