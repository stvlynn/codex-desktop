// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `WY`) / export `AT`.

export type LazyWithSuspensePeers = {
  D3o: (...args: unknown[]) => unknown;
  E3o: (...args: unknown[]) => unknown;
};
let peers: LazyWithSuspensePeers | null = null;

/** Wire lazyWithSuspense peers once companions land. */
export function setLazyWithSuspensePeers(next: LazyWithSuspensePeers): void {
  peers = next;
}

/**
 * Bundle export `AT` / internal `WY`.
 */
export function lazyWithSuspense(
  e: unknown,
  { fallback = null, suspendToParent = false }: Record<string, unknown> = {},
) {
  if (peers == null) {
    throw new Error("lazyWithSuspense peers are not configured");
  }
  let r = peers.E3o.lazy(async () => {
    return {
      default: await e(),
    };
  });
  return suspendToParent
    ? r
    : function (props) {
        const Suspense = peers.E3o.Suspense;
        const R = r;
        return (
          <Suspense fallback={fallback}>
            <R {...props} />
          </Suspense>
        );
      };
}
