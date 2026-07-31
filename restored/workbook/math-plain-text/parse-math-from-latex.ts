// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-12: Coe — parse LaTeX props into a math document AST.

import { MathDisplayMode } from "./math-proto-enums";
import { MathLatexParser } from "./math-latex-parser";

export type ParseMathFromLatexProps = {
  latex: string;
  displayMode?: "block" | "inline" | string;
};

/** Legacy `Coe` — LaTeX string + display mode → math document. */
export function parseMathFromLatex(props: ParseMathFromLatexProps): unknown {
  const displayMode =
    props.displayMode === "block"
      ? MathDisplayMode.MATH_DISPLAY_MODE_BLOCK
      : MathDisplayMode.MATH_DISPLAY_MODE_INLINE;
  return new MathLatexParser(props.latex, displayMode).parseMath();
}
