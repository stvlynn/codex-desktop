// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `M9r`) / export `$G`.

export type BindDeferredUiG2Peers = {
  A9r: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  j9r: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiG2Peers | null = null;

/** Wire bindDeferredUiG2 peers once companions land. */
export function setBindDeferredUiG2Peers(next: BindDeferredUiG2Peers): void {
  peers = next;
}

/**
 * Bundle export `$G` / internal `M9r`.
 */
export function bindDeferredUiG2() {
  if (peers == null) {
    throw new Error("bindDeferredUiG2 peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    A9r = peers.J();
    j9r = (e) => {
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
            d="M3.6001 3.6C3.6001 2.71634 4.31644 2 5.2001 2H11.6001L16.4001 6.8V16.4C16.4001 17.2837 15.6838 18 14.8001 18H5.2001C4.31644 18 3.6001 17.2837 3.6001 16.4V3.6Z"
            fill="#F4B400"
          />
          <path
            d="M11.6001 2L16.4001 6.8H13.2001C12.3164 6.8 11.6001 6.08366 11.6001 5.2V2Z"
            fill="#9D7607"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.00049 9.39999C6.00049 9.06862 6.26912 8.79999 6.60049 8.79999H13.4005C13.7319 8.79999 14.0005 9.06862 14.0005 9.39999V14.2C14.0005 14.5314 13.7319 14.8 13.4005 14.8H6.60049C6.26912 14.8 6.00049 14.5314 6.00049 14.2V9.39999ZM7.20049 10.4V13.2H12.8005V10.4H7.20049Z"
            fill="white"
          />
        </svg>
      );
    };
  });
}
