// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `fft` — pure helper.

/** Longest run of consecutive `substring` occurrences in `value`. */
export function maxConsecutiveSubstringRuns(value: unknown, substring: string): number {
  const text = String(value);
  let index = text.indexOf(substring);
  let next = index;
  let run = 0;
  let max = 0;
  if (typeof substring !== "string") throw new TypeError("Expected substring");
  while (index !== -1) {
    if (index === next) {
      run += 1;
      if (run > max) max = run;
    } else {
      run = 1;
    }
    next = index + substring.length;
    index = text.indexOf(substring, next);
  }
  return max;
}
