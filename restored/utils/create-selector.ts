// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `rf` internal / export `lft` (reselect-style; not appgen `rf`).

type SelectorFn = (...args: unknown[]) => unknown;

/** Build a memoized selector over one or more input selectors. */
export function createSelector(
  input: SelectorFn | SelectorFn[],
  combiner?: SelectorFn,
  ...rest: unknown[]
): SelectorFn {
  if (typeof input === "function" && combiner == null) {
    return input;
  }
  const inputs = Array.isArray(input) ? input : [input];
  const combine =
    typeof combiner === "function"
      ? combiner
      : typeof rest[0] === "function"
        ? (rest[0] as SelectorFn)
        : undefined;
  if (combine == null) {
    throw new Error("createSelector requires a combiner");
  }
  let lastArgs: unknown[] | undefined;
  let lastResult: unknown;
  return (...args: unknown[]) => {
    const values = inputs.map((sel) => sel(...args));
    if (
      lastArgs != null &&
      lastArgs.length === values.length &&
      lastArgs.every((v, i) => Object.is(v, values[i]))
    ) {
      return lastResult;
    }
    lastArgs = values;
    lastResult = combine(...values);
    return lastResult;
  };
}
