// Restored from ref/webview/assets/app-initial-C-fROkKo.js (inlined lodash CJS predicates)
// npm shim: lodash/* — CJS interop thunks matching rolldown `i((e,t)=>…)` wrappers.
// Consumers call `alias()` to obtain the real lodash function (bundle `yo()`/`Wa()` pattern).

import lodashIsArray from "lodash/isArray";
import lodashIsArrayLike from "lodash/isArrayLike";
import lodashIsArguments from "lodash/isArguments";
import lodashIsBuffer from "lodash/isBuffer";
import lodashEq from "lodash/eq";
import lodashIsEqual from "lodash/isEqual";
import lodashIsFunction from "lodash/isFunction";
import lodashIsObject from "lodash/isObject";
import lodashIsObjectLike from "lodash/isObjectLike";
import lodashIsPlainObject from "lodash/isPlainObject";
import lodashIsTypedArray from "lodash/isTypedArray";
import lodashKeysIn from "lodash/keysIn";

/** Bundle `yo` / export `G_t`. */
export function isArray(): typeof lodashIsArray {
  return lodashIsArray;
}

/** Bundle `Oo` / export `B_t`. */
export function isArrayLike(): typeof lodashIsArrayLike {
  return lodashIsArrayLike;
}

/** Bundle `Fee` / export `U_t`. */
export function isArguments(): typeof lodashIsArguments {
  return lodashIsArguments;
}

/** Bundle `wo` / export `H_t`. */
export function isBuffer(): typeof lodashIsBuffer {
  return lodashIsBuffer;
}

/** Bundle `Wa` / export `Y_t` — SameValueZero equality. */
export function eq(): typeof lodashEq {
  return lodashEq;
}

/**
 * Bundle `Mo` / export `z_t` — deep equality CJS thunk.
 * Unique top-level: `Mo = i((e,t)=>{ var n = jo(); … t.exports = r })` wrapping
 * `jo` (baseIsEqual via Xee + So/isObjectLike). Nested React-fiber `function Mo`/`jo` are not this export.
 */
export function isEqual(): typeof lodashIsEqual {
  return lodashIsEqual;
}

/** Bundle `oo` / export `q_t`. */
export function isFunction(): typeof lodashIsFunction {
  return lodashIsFunction;
}

/** Bundle `ao` / export `J_t`. */
export function isObject(): typeof lodashIsObject {
  return lodashIsObject;
}

/** Bundle `So` / export `W_t`. */
export function isObjectLike(): typeof lodashIsObjectLike {
  return lodashIsObjectLike;
}

/** Bundle `rEc` / export `Pf`. */
export function isPlainObject(): typeof lodashIsPlainObject {
  return lodashIsPlainObject;
}

/** Bundle `zee` / export `V_t`. */
export function isTypedArray(): typeof lodashIsTypedArray {
  return lodashIsTypedArray;
}

/** Bundle `VNc` / export `Af` — keysIn (cloneDeep / keysIn path). */
export function keysIn(): typeof lodashKeysIn {
  return lodashKeysIn;
}

// --- split/export lane aliases ---
export { keysIn as KeysIn };
