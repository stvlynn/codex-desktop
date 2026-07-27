// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `HG` / export `Tj`.

/** Race a promise against an AbortSignal (bundle `Opo` / `Dpo`). */
export function requestWithAbortSignal<T>(
  promise: Promise<T>,
  signal?: AbortSignal | null,
): Promise<T> {
  if (signal == null) return promise;
  if (signal.aborted) {
    return Promise.reject(
      signal.reason ?? new DOMException("Aborted", "AbortError"),
    );
  }
  return new Promise<T>((resolve, reject) => {
    const onAbort = () => {
      reject(signal.reason ?? new DOMException("Aborted", "AbortError"));
    };
    signal.addEventListener("abort", onAbort, { once: true });
    promise.then(
      (value) => {
        signal.removeEventListener("abort", onAbort);
        resolve(value);
      },
      (error) => {
        signal.removeEventListener("abort", onAbort);
        reject(error);
      },
    );
  });
}
