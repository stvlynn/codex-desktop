// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BZl`) / export `ga`.

export type BindDeferredUiGaPeers = {
  J: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  s7: (...args: unknown[]) => unknown;
  zZl: (...args: unknown[]) => unknown;
};
let peers: BindDeferredUiGaPeers | null = null;

/** Wire bindDeferredUiGa peers once companions land. */
export function setBindDeferredUiGaPeers(next: BindDeferredUiGaPeers): void {
  peers = next;
}

/**
 * Bundle export `ga` / internal `BZl`.
 */
export function bindDeferredUiGa() {
  if (peers == null) {
    throw new Error("bindDeferredUiGa peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    s7 = peers.J();
    zZl = (e) => {
      return (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...peers.e}
        >
          <rect
            x={2.45}
            y={2.45}
            width={11.1}
            height={11.1}
            rx={1.9}
            stroke="currentColor"
            strokeWidth={0.9}
          />
          <circle cx={5} cy={5} r={1.1} fill="currentColor" />
          <rect
            x={7.25}
            y={4.25}
            width={1.5}
            height={1.5}
            rx={0.375}
            fill="currentColor"
          />
          <rect
            x={10.25}
            y={4.25}
            width={1.5}
            height={1.5}
            rx={0.375}
            fill="currentColor"
          />
          <rect
            x={4.25}
            y={7.25}
            width={1.5}
            height={1.5}
            rx={0.375}
            fill="currentColor"
          />
          <rect
            x={7.25}
            y={7.25}
            width={1.5}
            height={1.5}
            rx={0.375}
            fill="currentColor"
          />
          <rect
            x={10.25}
            y={7.25}
            width={1.5}
            height={1.5}
            rx={0.375}
            fill="currentColor"
          />
          <rect
            x={4.25}
            y={10.25}
            width={1.5}
            height={1.5}
            rx={0.375}
            fill="currentColor"
          />
          <rect
            x={7.25}
            y={10.25}
            width={4.5}
            height={1.5}
            rx={0.375}
            fill="currentColor"
          />
        </svg>
      );
    };
  });
}
