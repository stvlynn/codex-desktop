// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `iv` — pure helper.

/** Build a numeric linear interpolator from `a` to `b`. */
export function linearInterpolator(a: number, b: number): (t: number) => number {
  const start = +a;
  const end = +b;
  return (t: number) => start * (1 - t) + end * t;
}
