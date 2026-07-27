// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `q9s`) / export `om`.

export type BindGradientDoN1ti1hPngPeers = {
  G9s: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  K9s: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
};
let peers: BindGradientDoN1ti1hPngPeers | null = null;

/** Wire bindGradientDoN1ti1hPng peers once companions land. */
export function setBindGradientDoN1ti1hPngPeers(
  next: BindGradientDoN1ti1hPngPeers,
): void {
  peers = next;
}

/**
 * Bundle export `om` / internal `q9s`.
 */
export function bindGradientDoN1ti1hPng() {
  if (peers == null) {
    throw new Error("bindGradientDoN1ti1hPng peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    G9s = peers.J();
    K9s = (e) => {
      return (
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...peers.e}
        >
          <path
            d="M11.912 21.413c-.383.45-.883.683-1.5.7-.616.016-1.116-.192-1.5-.625-.375-.434-.454-1.034-.237-1.8L9.687 16H4.575c-.567 0-1.008-.162-1.325-.488a1.68 1.68 0 0 1-.475-1.2c0-.474.154-.9.462-1.274l8.9-10.563c.384-.45.884-.683 1.5-.7.617-.017 1.113.192 1.488.625.383.433.467 1.033.25 1.8L14.312 8h5.113c.567 0 1.008.167 1.325.5.325.333.488.737.488 1.212 0 .467-.159.884-.476 1.25l-8.85 10.45Z"
            fill="currentColor"
          />
        </svg>
      );
    };
  });
}
