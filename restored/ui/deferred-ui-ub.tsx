// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hbs`) / export `ub`.

export type BindDeferredUiUbPeers = {
  Bbs: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Vbs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiUbPeers | null = null;

/** Wire bindDeferredUiUb peers once companions land. */
export function setBindDeferredUiUbPeers(next: BindDeferredUiUbPeers): void {
  peers = next;
}

/**
 * Bundle export `ub` / internal `Hbs`.
 */
export function bindDeferredUiUb() {
  if (peers == null) {
    throw new Error("bindDeferredUiUb peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    Bbs = peers.J();
    Vbs = (e) => {
      return (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...peers.e}
        >
          <path d="M3.25 3.25H11.25V11.25H3.25V3.25Z" fill="#F35325" />
          <path d="M12.75 3.25H20.75V11.25H12.75V3.25Z" fill="#81BC06" />
          <path d="M3.25 12.75H11.25V20.75H3.25V12.75Z" fill="#05A6F0" />
          <path d="M12.75 12.75H20.75V20.75H12.75V12.75Z" fill="#FFBA08" />
        </svg>
      );
    };
  });
}
