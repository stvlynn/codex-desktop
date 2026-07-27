// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ejo`) / export `qO`.

export type BindBindDeferredUiQO2Peers = {
  J: (...args: unknown[]) => unknown;
  Tjo: (...args: unknown[]) => unknown;
  aq: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
};
let peers: BindBindDeferredUiQO2Peers | null = null;

/** Wire bindBindDeferredUiQO2 peers once companions land. */
export function setBindBindDeferredUiQO2Peers(
  next: BindBindDeferredUiQO2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `qO` / internal `Ejo`.
 */
export function bindBindDeferredUiQO2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiQO2 peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    aq = peers.J();
    Tjo = (e) => {
      return (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...peers.e}
        >
          <circle cx={9.5} cy={5.5} r={1.5} fill="currentColor" />
          <circle cx={9.5} cy={12} r={1.5} fill="currentColor" />
          <circle cx={9.5} cy={18.5} r={1.5} fill="currentColor" />
          <circle cx={14.5} cy={5.5} r={1.5} fill="currentColor" />
          <circle cx={14.5} cy={12} r={1.5} fill="currentColor" />
          <circle cx={14.5} cy={18.5} r={1.5} fill="currentColor" />
        </svg>
      );
    };
  });
}
