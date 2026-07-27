// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Z4s`) / export `hh`.

export type BindDeferredhhPeers = {
  J: (...args: unknown[]) => unknown;
  X4s: (...args: unknown[]) => unknown;
  Y4s: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
};
let peers: BindDeferredhhPeers | null = null;

/** Wire bindDeferredhh peers once companions land. */
export function setBindDeferredhhPeers(next: BindDeferredhhPeers): void {
  peers = next;
}

/**
 * Bundle export `hh` / internal `Z4s`.
 */
export function bindDeferredhh() {
  if (peers == null) {
    throw new Error("bindDeferredhh peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    Y4s = peers.J();
    X4s = (e) => {
      return (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...peers.e}
        >
          <path
            d="M7.46816 11.6002V8.53223H4.4002C4.10638 8.53223 3.86816 8.29401 3.86816 8.0002C3.86816 7.70638 4.10638 7.46816 4.4002 7.46816H7.46816V4.4002C7.46816 4.10638 7.70638 3.86816 8.0002 3.86816C8.29401 3.86816 8.53223 4.10638 8.53223 4.4002V7.46816H11.6002L11.7072 7.4791C11.9497 7.52865 12.1322 7.74305 12.1322 8.0002C12.1322 8.25734 11.9497 8.47174 11.7072 8.52129L11.6002 8.53223H8.53223V11.6002C8.53223 11.894 8.29401 12.1322 8.0002 12.1322C7.70638 12.1322 7.46816 11.894 7.46816 11.6002Z"
            fill="currentColor"
          />
        </svg>
      );
    };
  });
}
