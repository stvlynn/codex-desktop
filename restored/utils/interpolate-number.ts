// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iv` / export `Kat`.

/** d3-style numeric interpolator factory. */
export function interpolateNumber(a: number, b: number): (t: number) => number {
  const start = +a;
  const end = +b;
  return (t) => start * (1 - t) + end * t;
}
