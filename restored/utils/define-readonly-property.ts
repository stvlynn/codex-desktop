// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `hy` / export `trt`.

/** Define a non-writable property and return its value. */
export function defineReadonlyProperty<T>(
  target: object,
  key: PropertyKey,
  value: T,
  hidden?: boolean,
): T {
  Object.defineProperty(target, key, {
    value,
    enumerable: !(hidden ?? false),
    configurable: true,
    writable: false,
  });
  return value;
}
