// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Mu` / export `$ft` — tslib-style __extends via extractFn(Mu) + vOe shim.

/** Bundle `vOe` — `Object.setPrototypeOf` polyfill used by `Mu`. */
function setPrototypeOf(ctor: object, superCtor: object): object {
  const impl =
    Object.setPrototypeOf ||
    // eslint-disable-next-line no-proto
    ({ __proto__: [] } instanceof Array
      ? (e: object, t: object) => {
          // eslint-disable-next-line no-proto
          (e as { __proto__?: object }).__proto__ = t;
        }
      : (e: object, t: object) => {
          for (const n in t as object)
            Object.prototype.hasOwnProperty.call(t, n) &&
              ((e as Record<string, unknown>)[n] = (
                t as Record<string, unknown>
              )[n]);
        });
  return impl(ctor, superCtor) as object;
}

type AnyCtor = abstract new (...args: never[]) => object;

/** tslib/babel `__extends` — wire prototype chain for class heritage. */
export function classExtends<T extends AnyCtor>(
  ctor: T,
  superCtor: AnyCtor | null,
): void {
  if (typeof superCtor != "function" && superCtor !== null)
    throw TypeError(
      "Class extends value " +
        String(superCtor) +
        " is not a constructor or null",
    );
  setPrototypeOf(ctor, superCtor as object);
  function Surrogate() {
    this.constructor = ctor;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (ctor as any).prototype =
    superCtor === null
      ? Object.create(superCtor)
      : ((Surrogate.prototype = (superCtor as AnyCtor).prototype),
        new (Surrogate as AnyCtor)());
}
