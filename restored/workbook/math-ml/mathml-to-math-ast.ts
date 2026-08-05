// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-13: Presentation MathML element tree → Math AST node.

import {
  MathLimitKind,
  MathAccentPosition,
  MathLimitPlacement,
  MathBarPosition,
} from "../math-plain-text/math-proto-enums";
import {
  fractionAttrToKind,
  limitPlacementFromAttr,
  mathMlElementToTokenKind,
  matrixColumnAlignAttrToColumns,
} from "./math-ml-attr-maps";
import {
  DATA_GRANOLA_BASE_JUSTIFICATION,
  DATA_GRANOLA_GROW,
  DATA_GRANOLA_HIDE_SUBSCRIPT,
  DATA_GRANOLA_HIDE_SUPERSCRIPT,
  DATA_GRANOLA_IMPLICIT_DELIMITERS,
  DATA_GRANOLA_JUSTIFICATION,
  DATA_GRANOLA_LIMIT_PLACEMENT,
  DATA_GRANOLA_NODE_KIND,
  DATA_GRANOLA_SHAPE,
  DATA_GRANOLA_SHOW,
  DATA_GRANOLA_ZERO_ASCENT,
  DATA_GRANOLA_ZERO_DESCENT,
  DATA_GRANOLA_ZERO_WIDTH,
} from "./math-ml-data-attrs";
import {
  applyMathAstStyle,
  createMathMlElement,
  firstMathMlChild,
  isMathMlTokenTag,
  mathMlLeafText,
  mathStyleFromDataAttrs,
  parseOptionalBoolAttr,
  parseOptionalIntAttr,
  wrapMathAstSequence,
} from "./math-ml-node";
export function mathMlElementToMathAst(mathIn249: unknown) {
  if (mathIn249.tag === "semantics")
    return wrapMathAstSequence(
      mathIn249.children
        .filter(
          (item) => item.tag !== "annotation" && item.tag !== "annotation-xml",
        )
        .map((item) => mathMlElementToMathAst(item))
        .filter((item) => item !== undefined),
    );
  if (mathIn249.tag === "mstyle")
    return applyMathAstStyle(
      wrapMathAstSequence(
        mathIn249.children
          .map((item) => mathMlElementToMathAst(item))
          .filter((item) => item !== undefined),
      ),
      mathStyleFromDataAttrs(mathIn249.attributes),
    );
  if (isMathMlTokenTag(mathIn249.tag))
    return {
      style: mathStyleFromDataAttrs(mathIn249.attributes),
      token: {
        text: mathIn249.text ?? "",
        kind: mathMlElementToTokenKind(mathIn249),
      },
    };
  if (mathIn249.tag === "mrow")
    return mathIn249.attributes[DATA_GRANOLA_NODE_KIND] === "function"
      ? {
          style: mathStyleFromDataAttrs(mathIn249.attributes),
          function: {
            name: mathMlElementToMathAst(
              mathIn249.children[0] ?? createMathMlElement("mi", {}, [], ""),
            ),
            argument: mathMlElementToMathAst(
              mathIn249.children[1] ?? createMathMlElement("mrow", {}, []),
            ),
          },
        }
      : mathIn249.attributes[DATA_GRANOLA_NODE_KIND] === "nary"
        ? parseNaryMathMlRow(mathIn249)
        : applyMathAstStyle(
            wrapMathAstSequence(
              mathIn249.children
                .map((item) => mathMlElementToMathAst(item))
                .filter((item) => item !== undefined),
            ),
            mathStyleFromDataAttrs(mathIn249.attributes),
          );
  if (mathIn249.tag === "mfrac")
    return {
      style: mathStyleFromDataAttrs(mathIn249.attributes),
      fraction: {
        kind: fractionAttrToKind(mathIn249.attributes),
        numerator: mathMlElementToMathAst(
          mathIn249.children[0] ?? createMathMlElement("mrow", {}, []),
        ),
        denominator: mathMlElementToMathAst(
          mathIn249.children[1] ?? createMathMlElement("mrow", {}, []),
        ),
      },
    };
  if (mathIn249.tag === "msqrt")
    return {
      style: mathStyleFromDataAttrs(mathIn249.attributes),
      radical: {
        radicand: wrapMathAstSequence(
          mathIn249.children
            .map((item) => mathMlElementToMathAst(item))
            .filter((item) => item !== undefined),
        ),
        hideDegree: true,
      },
    };
  if (mathIn249.tag === "mroot")
    return {
      style: mathStyleFromDataAttrs(mathIn249.attributes),
      radical: {
        radicand: mathMlElementToMathAst(
          mathIn249.children[0] ?? createMathMlElement("mrow", {}, []),
        ),
        degree: mathMlElementToMathAst(
          mathIn249.children[1] ?? createMathMlElement("mrow", {}, []),
        ),
      },
    };
  if (
    mathIn249.tag === "msub" ||
    mathIn249.tag === "msup" ||
    mathIn249.tag === "msubsup"
  )
    return {
      style: mathStyleFromDataAttrs(mathIn249.attributes),
      scripts: {
        base: mathMlElementToMathAst(
          mathIn249.children[0] ?? createMathMlElement("mrow", {}, []),
        ),
        subscript:
          mathIn249.tag === "msup"
            ? undefined
            : mathMlElementToMathAst(
                mathIn249.children[1] ?? createMathMlElement("mrow", {}, []),
              ),
        superscript:
          mathIn249.tag === "msub"
            ? undefined
            : mathMlElementToMathAst(
                mathIn249.children[mathIn249.tag === "msup" ? 1 : 2] ??
                  createMathMlElement("mrow", {}, []),
              ),
      },
    };
  if (mathIn249.tag === "mmultiscripts")
    return parseMultiscriptsMathMl(mathIn249);
  if (
    mathIn249.tag === "munder" ||
    mathIn249.tag === "mover" ||
    mathIn249.tag === "munderover"
  )
    return parseUnderOverMathMl(mathIn249);
  if (mathIn249.tag === "mfenced") {
    let workbookBinding13022 =
      mathIn249.attributes[DATA_GRANOLA_IMPLICIT_DELIMITERS] ===
      "default-parens";
    return {
      style: mathStyleFromDataAttrs(mathIn249.attributes),
      delimited: {
        beginDelimiter: workbookBinding13022
          ? ""
          : (mathIn249.attributes.open ?? ""),
        endDelimiter: workbookBinding13022
          ? ""
          : (mathIn249.attributes.close ?? ""),
        separatorDelimiter: mathIn249.attributes.separators ?? "",
        items: mathIn249.children
          .map((item) => mathMlElementToMathAst(item))
          .filter((item) => item !== undefined),
        grow: parseOptionalBoolAttr(mathIn249.attributes[DATA_GRANOLA_GROW]),
        shape: mathIn249.attributes[DATA_GRANOLA_SHAPE],
      },
    };
  }
  return mathIn249.tag === "menclose"
    ? {
        style: mathStyleFromDataAttrs(mathIn249.attributes),
        enclosure: notationAttrToEnclosure(mathIn249),
      }
    : mathIn249.tag === "mphantom"
      ? {
          style: mathStyleFromDataAttrs(mathIn249.attributes),
          phantom: {
            body: mathMlElementToMathAst(
              mathIn249.children[0] ?? createMathMlElement("mrow", {}, []),
            ),
            show: parseOptionalBoolAttr(
              mathIn249.attributes[DATA_GRANOLA_SHOW],
            ),
            zeroWidth: parseOptionalBoolAttr(
              mathIn249.attributes[DATA_GRANOLA_ZERO_WIDTH],
            ),
            zeroAscent: parseOptionalBoolAttr(
              mathIn249.attributes[DATA_GRANOLA_ZERO_ASCENT],
            ),
            zeroDescent: parseOptionalBoolAttr(
              mathIn249.attributes[DATA_GRANOLA_ZERO_DESCENT],
            ),
          },
        }
      : mathIn249.tag === "mtable"
        ? mathIn249.attributes[DATA_GRANOLA_NODE_KIND] === "equation-array"
          ? {
              style: mathStyleFromDataAttrs(mathIn249.attributes),
              equationArray: {
                rows: mathIn249.children
                  .map((item) => firstMatrixRowCellAst(item))
                  .filter((item) => item !== undefined),
                justification: parseOptionalIntAttr(
                  mathIn249.attributes[DATA_GRANOLA_JUSTIFICATION],
                ),
                baseJustification:
                  mathIn249.attributes[DATA_GRANOLA_BASE_JUSTIFICATION],
              },
            }
          : {
              style: mathStyleFromDataAttrs(mathIn249.attributes),
              matrix: {
                columns: matrixColumnAlignAttrToColumns(
                  mathIn249.attributes.columnalign,
                ),
                rows: mathIn249.children
                  .filter(
                    (item) => item.tag === "mtr" || item.tag === "mlabeledtr",
                  )
                  .map((item) => ({
                    cells: item.children
                      .filter((_item) => _item.tag === "mtd")
                      .map(
                        (_item) =>
                          firstMathMlChild(_item) ??
                          createMathMlElement("mrow", {}, []),
                      )
                      .map((_item) => mathMlElementToMathAst(_item))
                      .filter((_item) => _item !== undefined),
                  })),
              },
            }
        : (mathIn249.tag,
          wrapMathAstSequence(
            mathIn249.children
              .map((item) => mathMlElementToMathAst(item))
              .filter((item) => item !== undefined),
          ));
}
function parseNaryMathMlRow(props) {
  let workbookBinding13287 = props.children[0],
    workbookBinding13288 = props.children[1],
    { operator, lowerLimit, upperLimit, limitPlacement } =
      parseNaryOperatorFromMathMl(workbookBinding13287);
  return {
    style: mathStyleFromDataAttrs(props.attributes),
    nary: {
      operator,
      lowerLimit,
      upperLimit,
      body: workbookBinding13288
        ? mathMlElementToMathAst(workbookBinding13288)
        : undefined,
      limitPlacement:
        limitPlacementFromAttr(
          props.attributes[DATA_GRANOLA_LIMIT_PLACEMENT],
        ) ?? limitPlacement,
      hideSubscript: parseOptionalBoolAttr(
        props.attributes[DATA_GRANOLA_HIDE_SUBSCRIPT],
      ),
      hideSuperscript: parseOptionalBoolAttr(
        props.attributes[DATA_GRANOLA_HIDE_SUPERSCRIPT],
      ),
    },
  };
}
function parseMultiscriptsMathMl(mathIn4586) {
  let workbookBinding13861 = [...mathIn4586.children],
    workbookBinding13862 = workbookBinding13861.findIndex(
      (item) => item.tag === "mprescripts",
    ),
    workbookBinding13863 =
      workbookBinding13862 >= 0
        ? workbookBinding13861.slice(1, workbookBinding13862)
        : workbookBinding13861.slice(1),
    workbookBinding13864 =
      workbookBinding13862 >= 0
        ? workbookBinding13861.slice(workbookBinding13862 + 1)
        : [];
  return {
    style: mathStyleFromDataAttrs(mathIn4586.attributes),
    scripts: {
      base: mathMlElementToMathAst(
        workbookBinding13861[0] ?? createMathMlElement("mrow", {}, []),
      ),
      subscript: optionalMathMlChildToAst(workbookBinding13863[0]),
      superscript: optionalMathMlChildToAst(workbookBinding13863[1]),
      presubscript: optionalMathMlChildToAst(workbookBinding13864[0]),
      presuperscript: optionalMathMlChildToAst(workbookBinding13864[1]),
    },
  };
}
function parseUnderOverMathMl(props) {
  if (props.attributes[DATA_GRANOLA_NODE_KIND] === "accent")
    return {
      style: mathStyleFromDataAttrs(props.attributes),
      accent: {
        character: mathMlLeafText(props.children[1]),
        base: mathMlElementToMathAst(
          props.children[0] ?? createMathMlElement("mrow", {}, []),
        ),
        position:
          props.tag === "munder"
            ? MathAccentPosition.MATH_ACCENT_POSITION_BOTTOM
            : MathAccentPosition.MATH_ACCENT_POSITION_TOP,
      },
    };
  if (props.attributes[DATA_GRANOLA_NODE_KIND] === "bar")
    return {
      style: mathStyleFromDataAttrs(props.attributes),
      bar: {
        base: mathMlElementToMathAst(
          props.children[0] ?? createMathMlElement("mrow", {}, []),
        ),
        position:
          props.tag === "munder"
            ? MathBarPosition.MATH_BAR_POSITION_BOTTOM
            : MathBarPosition.MATH_BAR_POSITION_TOP,
      },
    };
  if (props.attributes[DATA_GRANOLA_NODE_KIND] === "limit")
    return {
      style: mathStyleFromDataAttrs(props.attributes),
      limit: {
        kind:
          props.tag === "munder"
            ? MathLimitKind.MATH_LIMIT_KIND_LOWER
            : MathLimitKind.MATH_LIMIT_KIND_UPPER,
        base: mathMlElementToMathAst(
          props.children[0] ?? createMathMlElement("mrow", {}, []),
        ),
        limit: mathMlElementToMathAst(
          props.children[1] ?? createMathMlElement("mrow", {}, []),
        ),
      },
    };
  let { operator, lowerLimit, upperLimit, limitPlacement } =
    parseNaryOperatorFromMathMl(props);
  return {
    nary: {
      operator,
      lowerLimit,
      upperLimit,
      limitPlacement,
    },
  };
}
function parseNaryOperatorFromMathMl(mathIn1607) {
  if (!mathIn1607)
    return {
      operator: "",
    };
  if (
    mathIn1607.tag === "msub" ||
    mathIn1607.tag === "msup" ||
    mathIn1607.tag === "msubsup" ||
    mathIn1607.tag === "munder" ||
    mathIn1607.tag === "mover" ||
    mathIn1607.tag === "munderover"
  ) {
    let workbookBinding9550 = mathIn1607.children[0];
    return {
      operator: mathMlLeafText(workbookBinding9550),
      lowerLimit:
        mathIn1607.tag === "msub" ||
        mathIn1607.tag === "msubsup" ||
        mathIn1607.tag === "munder" ||
        mathIn1607.tag === "munderover"
          ? mathMlElementToMathAst(
              mathIn1607.children[1] ?? createMathMlElement("mrow", {}, []),
            )
          : undefined,
      upperLimit:
        mathIn1607.tag === "msup" ||
        mathIn1607.tag === "msubsup" ||
        mathIn1607.tag === "mover" ||
        mathIn1607.tag === "munderover"
          ? mathMlElementToMathAst(
              mathIn1607.children[
                mathIn1607.tag === "msup" || mathIn1607.tag === "mover" ? 1 : 2
              ] ?? createMathMlElement("mrow", {}, []),
            )
          : undefined,
      limitPlacement:
        mathIn1607.tag === "munder" ||
        mathIn1607.tag === "mover" ||
        mathIn1607.tag === "munderover"
          ? MathLimitPlacement.MATH_LIMIT_PLACEMENT_UNDER_OVER
          : MathLimitPlacement.MATH_LIMIT_PLACEMENT_SUB_SUP,
    };
  }
  return {
    operator: mathMlLeafText(mathIn1607),
  };
}
function firstMatrixRowCellAst(mathIn10706) {
  let workbookBinding21209 = mathIn10706.children.find(
    (item) => item.tag === "mtd",
  );
  if (workbookBinding21209)
    return mathMlElementToMathAst(
      firstMathMlChild(workbookBinding21209) ??
        createMathMlElement("mrow", {}, []),
    );
}
function optionalMathMlChildToAst(mathIn13388) {
  if (!(!mathIn13388 || mathIn13388.tag === "none"))
    return mathMlElementToMathAst(mathIn13388);
}
function notationAttrToEnclosure(mathIn3305) {
  let workbookBinding11591 = new Set(
    (mathIn3305.attributes.notation ?? "")
      .split(/\s+/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0),
  );
  return {
    body: mathMlElementToMathAst(
      mathIn3305.children[0] ?? createMathMlElement("mrow", {}, []),
    ),
    hideTop: !workbookBinding11591.has("box"),
    hideBottom: !workbookBinding11591.has("box"),
    hideLeft: !workbookBinding11591.has("box"),
    hideRight: !workbookBinding11591.has("box"),
    strikeHorizontal: workbookBinding11591.has("horizontalstrike"),
    strikeVertical: workbookBinding11591.has("verticalstrike"),
    strikeTopLeftToBottomRight: workbookBinding11591.has("downdiagonalstrike"),
    strikeBottomLeftToTopRight: workbookBinding11591.has("updiagonalstrike"),
  };
}
