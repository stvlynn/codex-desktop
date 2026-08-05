// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Layout a math token leaf box (legacy Sse).

import { measureMathGlyphBox, scaleMathRunStyle } from "./resolve-math-style";
export function layoutMathToken(
  mathIn12864: unknown,
  mathIn12865: unknown,
  mathIn12866: unknown,
) {
  return measureMathGlyphBox(
    mathIn12864.token?.text ?? "",
    scaleMathRunStyle(mathIn12864, mathIn12865),
    mathIn12866,
  );
}
