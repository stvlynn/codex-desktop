// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Dispatch layoutMathNode over AST node kinds (legacy dispatcher).

import { layoutMathDelimited } from "./layout-delimited";
import { layoutMathFraction } from "./layout-fraction";
import { layoutMathFunctionParts } from "./layout-function";
import {
  layoutMathAccent,
  layoutMathBar,
  layoutMathLimit,
} from "./layout-limit-accent-bar";
import { layoutMathMatrix, layoutMatrixRow } from "./layout-matrix";
import { layoutMathNary } from "./layout-nary";
import { layoutMathRadical } from "./layout-radical";
import { layoutMathScripts } from "./layout-scripts";
import { layoutMathToken } from "./layout-token";
import { layoutMathSequence } from "./math-box-ops";
import {
  measureMathGlyphBox,
  resolveMathNodeStyle,
} from "./resolve-math-style";
export function layoutMathNode(
  mathIn1235: unknown,
  mathIn1236: unknown,
  mathIn1237: unknown,
) {
  let workbookBinding6789 = resolveMathNodeStyle(
    mathIn1235.style,
    mathIn1236,
    mathIn1237,
  );
  return mathIn1235.token
    ? layoutMathToken(mathIn1235, workbookBinding6789, mathIn1237)
    : mathIn1235.sequence
      ? layoutMathSequence(
          mathIn1235.sequence.children,
          workbookBinding6789,
          mathIn1237,
        )
      : mathIn1235.fraction
        ? layoutMathFraction(
            mathIn1235.fraction,
            workbookBinding6789,
            mathIn1237,
          )
        : mathIn1235.radical
          ? layoutMathRadical(
              mathIn1235.radical,
              workbookBinding6789,
              mathIn1237,
            )
          : mathIn1235.scripts
            ? layoutMathScripts(
                mathIn1235.scripts,
                workbookBinding6789,
                mathIn1237,
              )
            : mathIn1235.nary
              ? layoutMathNary(mathIn1235.nary, workbookBinding6789, mathIn1237)
              : mathIn1235.delimited
                ? layoutMathDelimited(
                    mathIn1235.delimited,
                    workbookBinding6789,
                    mathIn1237,
                  )
                : mathIn1235.function
                  ? layoutMathFunctionParts(
                      mathIn1235.function,
                      workbookBinding6789,
                      mathIn1237,
                    )
                  : mathIn1235.limit
                    ? layoutMathLimit(
                        mathIn1235.limit,
                        workbookBinding6789,
                        mathIn1237,
                      )
                    : mathIn1235.accent
                      ? layoutMathAccent(
                          mathIn1235.accent,
                          workbookBinding6789,
                          mathIn1237,
                        )
                      : mathIn1235.bar
                        ? layoutMathBar(
                            mathIn1235.bar,
                            workbookBinding6789,
                            mathIn1237,
                          )
                        : mathIn1235.enclosure?.body
                          ? layoutMathNode(
                              mathIn1235.enclosure.body,
                              workbookBinding6789,
                              mathIn1237,
                            )
                          : mathIn1235.phantom?.body
                            ? layoutMathNode(
                                mathIn1235.phantom.body,
                                workbookBinding6789,
                                mathIn1237,
                              )
                            : mathIn1235.matrix?.rows?.length
                              ? layoutMathMatrix(
                                  mathIn1235.matrix,
                                  workbookBinding6789,
                                  mathIn1237,
                                )
                              : mathIn1235.equationArray?.rows?.length
                                ? layoutMatrixRow(
                                    mathIn1235.equationArray.rows,
                                    workbookBinding6789,
                                    mathIn1237,
                                  )
                                : measureMathGlyphBox(
                                    "?",
                                    workbookBinding6789,
                                    mathIn1237,
                                  );
}
