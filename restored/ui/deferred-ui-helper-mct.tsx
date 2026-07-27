// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tat`) / export `mct`.

export type BindDeferredUiHelperMctPeers = {
  $it: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eat: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiHelperMctPeers | null = null;

/** Wire bindDeferredUiHelperMct peers once companions land. */
export function setBindDeferredUiHelperMctPeers(
  next: BindDeferredUiHelperMctPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mct` / internal `tat`.
 */
export function bindDeferredUiHelperMct() {
  if (peers == null) {
    throw new Error("bindDeferredUiHelperMct peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    $it = peers.J();
    eat = (e) => {
      return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...peers.e}
        >
          <path d="M4.5 7.25H7L11.42 3.5C11.85 3.13 12.5 3.44 12.5 4V16C12.5 16.56 11.85 16.87 11.42 16.5L7 12.75H4.5C3.67 12.75 3 12.08 3 11.25V8.75C3 7.92 3.67 7.25 4.5 7.25ZM14.22 7.72C14.48 7.46 14.9 7.46 15.16 7.72L16.5 9.06L17.84 7.72C18.1 7.46 18.52 7.46 18.78 7.72C19.04 7.98 19.04 8.4 18.78 8.66L17.44 10L18.78 11.34C19.04 11.6 19.04 12.02 18.78 12.28C18.52 12.54 18.1 12.54 17.84 12.28L16.5 10.94L15.16 12.28C14.9 12.54 14.48 12.54 14.22 12.28C13.96 12.02 13.96 11.6 14.22 11.34L15.56 10L14.22 8.66C13.96 8.4 13.96 7.98 14.22 7.72Z" />
        </svg>
      );
    };
  });
}
