// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CIo`) / export `yO`.

export type CreateSvgIconGlyph20Peers = {
  J: (...args: unknown[]) => unknown;
  SIo: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  xIo: (...args: unknown[]) => unknown;
};
let peers: CreateSvgIconGlyph20Peers | null = null;

/** Wire createSvgIconGlyph20 peers once companions land. */
export function setCreateSvgIconGlyph20Peers(
  next: CreateSvgIconGlyph20Peers,
): void {
  peers = next;
}

/**
 * Bundle export `yO` / internal `CIo`.
 */
export function createSvgIconGlyph20() {
  if (peers == null) {
    throw new Error("createSvgIconGlyph20 peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    xIo = peers.J();
    SIo = (e) => {
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
            d="M8.505 3.645c.657-1.147 2.333-1.147 2.99 0l6.025 10.526c.64 1.119-.176 2.504-1.495 2.504H3.975c-1.319 0-2.135-1.385-1.495-2.504L8.505 3.645Z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
          <path
            d="M10 7.083v3.334"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          <path
            d="M10 13.333h.008"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      );
    };
  });
}
