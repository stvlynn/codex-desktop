// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Await a thenable while honoring AbortSignal + Symbol.dispose (`wM` / export `AX`).

type DisposableThenable<T> = PromiseLike<T> & {
  [Symbol.dispose]?: () => void;
};

/**
 * Await `source`, aborting via `signal` when provided.
 * Bundle `wM` / export `AX`.
 */
export async function awaitWithAbort<T>(
  source: DisposableThenable<T>,
  signal?: AbortSignal | null,
): Promise<T> {
  let disposed = false;
  const dispose = () => {
    if (!disposed) {
      disposed = true;
      source[Symbol.dispose]?.();
    }
  };

  signal?.addEventListener("abort", dispose, { once: true });
  try {
    signal?.throwIfAborted();
    const result = await source;
    signal?.throwIfAborted();
    return result;
  } finally {
    signal?.removeEventListener("abort", dispose);
    dispose();
  }
}
