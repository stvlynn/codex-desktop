// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `G$l`) / export `ji`.

export type BindGiftCreditsProfileCoachmarkPendingPeers = {
  J: (...args: unknown[]) => unknown;
  U$l: (...args: unknown[]) => unknown;
  W$l: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
};
let peers: BindGiftCreditsProfileCoachmarkPendingPeers | null = null;

/** Wire bindGiftCreditsProfileCoachmarkPending peers once companions land. */
export function setBindGiftCreditsProfileCoachmarkPendingPeers(
  next: BindGiftCreditsProfileCoachmarkPendingPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ji` / internal `G$l`.
 */
export function bindGiftCreditsProfileCoachmarkPending() {
  if (peers == null) {
    throw new Error(
      "bindGiftCreditsProfileCoachmarkPending peers are not configured",
    );
  }
  return peers.e(() => {
    peers.o();
    U$l = peers.J();
    W$l = (e) => {
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
            d="M3.333 8.333h13.334v8.334H3.333V8.333Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
          <path
            d="M2.5 5.833h15v2.5h-15v-2.5Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
          <path
            d="M10 5.833v10.834"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          <path
            d="M10 5.833H7.917A2.083 2.083 0 1 1 10 3.75v2.083Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
          <path
            d="M10 5.833h2.083A2.083 2.083 0 1 0 10 3.75v2.083Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
        </svg>
      );
    };
  });
}
