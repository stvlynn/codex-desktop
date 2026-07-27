// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `wv` — pure helper.

/** Left-pad the absolute decimal digits of `value` with `padChar` to `width`. */
export function padSignedNumberString(
  value: number,
  padChar: string,
  width: number,
): string {
  const sign = value < 0 ? "-" : "";
  const digits = String(sign ? -value : value);
  return (
    sign +
    (digits.length < width
      ? Array(width - digits.length + 1).join(padChar) + digits
      : digits)
  );
}
