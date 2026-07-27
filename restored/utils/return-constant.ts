// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qEe` / export `ypt` — returns a fixed settings bag (opaque).

let constantValue: unknown;

/** Bind the constant returned by `returnConstant` (test / init hook). */
export function bindReturnConstant(value: unknown): void {
  constantValue = value;
}

/** Return the bound constant (realtime voice screen-context defaults). */
export function returnConstant(): unknown {
  return constantValue;
}
