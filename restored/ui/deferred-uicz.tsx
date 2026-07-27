// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kz`) / export `cz`.

export type DeferredUiczPeers = {
  J: (...args: unknown[]) => unknown;
  K3i: (...args: unknown[]) => unknown;
  Oz: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
};
let peers: DeferredUiczPeers | null = null;

/** Wire deferredUicz peers once companions land. */
export function setDeferredUiczPeers(next: DeferredUiczPeers): void {
  peers = next;
}

/**
 * Bundle export `cz` / internal `kz`.
 */
export function deferredUicz() {
  if (peers == null) {
    throw new Error("deferredUicz peers are not configured");
  }
  return peers.e(() => {
    peers.o();
    K3i = peers.J();
    Oz = (e) => {
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
            d="M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z"
            fill="currentColor"
          />
        </svg>
      );
    };
  });
}
