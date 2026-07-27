// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uj` / export `QZ`.

type FourArgFn = (a: unknown, b: undefined, c: unknown, d: unknown) => unknown;

let target: FourArgFn | null = null;

/** Bind the underlying implementation for `QZ`. */
export function bindThinCallWithUndefined(next: FourArgFn): void {
  target = next;
}

/** Call a 4-arg helper with an explicit `undefined` second argument. */
export function thinCallWithUndefined(a: unknown, c: unknown, d: unknown): unknown {
  return target?.(a, undefined, c, d);
}
