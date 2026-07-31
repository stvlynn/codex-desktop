// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-13: Math AST node → presentation MathML element tree.

import { MathLimitKind, MathTokenKind, MathAccentPosition, MathLimitPlacement, MathFractionKind, MathBarPosition } from "../math-plain-text/math-proto-enums";
import { enclosureToNotationAttr, fractionKindToAttr, limitPlacementToAttr, matrixColumnJustifyToAttr, tokenKindToMathMlTag } from "./math-ml-attr-maps";
import { DATA_GRANOLA_BASE_JUSTIFICATION, DATA_GRANOLA_FRACTION_KIND, DATA_GRANOLA_GROW, DATA_GRANOLA_HIDE_SUBSCRIPT, DATA_GRANOLA_HIDE_SUPERSCRIPT, DATA_GRANOLA_IMPLICIT_DELIMITERS, DATA_GRANOLA_JUSTIFICATION, DATA_GRANOLA_LIMIT_PLACEMENT, DATA_GRANOLA_NODE_KIND, DATA_GRANOLA_SHAPE, DATA_GRANOLA_SHOW, DATA_GRANOLA_TOKEN_KIND, DATA_GRANOLA_ZERO_ASCENT, DATA_GRANOLA_ZERO_DESCENT, DATA_GRANOLA_ZERO_WIDTH } from "./math-ml-data-attrs";
import { createMathMlElement, mathStyleToDataAttrs } from "./math-ml-node";
export function mathAstNodeToMathMl(mathIn764: unknown) {
  return mathIn764.token ? createMathMlElement(tokenKindToMathMlTag(mathIn764.token.kind), {
    ...mathStyleToDataAttrs(mathIn764.style),
    [DATA_GRANOLA_TOKEN_KIND]: String(mathIn764.token.kind ?? MathTokenKind.MATH_TOKEN_KIND_UNSPECIFIED)
  }, [], mathIn764.token.text) : mathIn764.sequence ? createMathMlElement("mrow", mathStyleToDataAttrs(mathIn764.style), mathIn764.sequence.children.map(item => mathAstNodeToMathMl(item))) : mathIn764.fraction ? fractionAstToMathMl(mathIn764.fraction, mathIn764.style) : mathIn764.radical ? radicalAstToMathMl(mathIn764.radical, mathIn764.style) : mathIn764.scripts ? scriptsAstToMathMl(mathIn764.scripts, mathIn764.style) : mathIn764.nary ? naryAstToMathMl(mathIn764.nary, mathIn764.style) : mathIn764.delimited ? delimitedAstToMathMl(mathIn764.delimited, mathIn764.style) : mathIn764.function ? createMathMlElement("mrow", {
    ...mathStyleToDataAttrs(mathIn764.style),
    [DATA_GRANOLA_NODE_KIND]: "function"
  }, [mathIn764.function.name ? mathAstNodeToMathMl(mathIn764.function.name) : createMathMlElement("mi", {}, [], ""), mathIn764.function.argument ? mathAstNodeToMathMl(mathIn764.function.argument) : createMathMlElement("mrow", {}, [])]) : mathIn764.matrix ? matrixAstToMathMl(mathIn764.matrix, mathIn764.style) : mathIn764.accent ? accentAstToMathMl(mathIn764.accent, mathIn764.style) : mathIn764.bar ? barAstToMathMl(mathIn764.bar, mathIn764.style) : mathIn764.enclosure ? enclosureAstToMathMl(mathIn764.enclosure, mathIn764.style) : mathIn764.limit ? limitAstToMathMl(mathIn764.limit, mathIn764.style) : mathIn764.phantom ? phantomAstToMathMl(mathIn764.phantom, mathIn764.style) : mathIn764.equationArray ? equationArrayAstToMathMl(mathIn764.equationArray, mathIn764.style) : createMathMlElement("mrow", mathStyleToDataAttrs(mathIn764.style), []);
}
function fractionAstToMathMl(mathIn5107, mathIn5108) {
  let workbookBinding14596 = {
    ...mathStyleToDataAttrs(mathIn5108),
    [DATA_GRANOLA_FRACTION_KIND]: fractionKindToAttr(mathIn5107.kind)
  };
  return mathIn5107.kind === MathFractionKind.MATH_FRACTION_KIND_NO_BAR && (workbookBinding14596.linethickness = "0"), mathIn5107.kind === MathFractionKind.MATH_FRACTION_KIND_SKEWED && (workbookBinding14596.bevelled = "true"), createMathMlElement("mfrac", workbookBinding14596, [mathIn5107.numerator ? mathAstNodeToMathMl(mathIn5107.numerator) : createMathMlElement("mrow", {}, []), mathIn5107.denominator ? mathAstNodeToMathMl(mathIn5107.denominator) : createMathMlElement("mrow", {}, [])]);
}
function radicalAstToMathMl(mathIn8474, mathIn8475) {
  let workbookBinding18983 = mathIn8474.radicand ? mathAstNodeToMathMl(mathIn8474.radicand) : createMathMlElement("mrow", {}, []);
  return mathIn8474.hideDegree || !mathIn8474.degree ? createMathMlElement("msqrt", mathStyleToDataAttrs(mathIn8475), [workbookBinding18983]) : createMathMlElement("mroot", mathStyleToDataAttrs(mathIn8475), [workbookBinding18983, mathAstNodeToMathMl(mathIn8474.degree)]);
}
function scriptsAstToMathMl(mathIn2423, mathIn2424) {
  let workbookBinding9651 = mathIn2423.base ? mathAstNodeToMathMl(mathIn2423.base) : createMathMlElement("mi", {}, [], ""),
    workbookBinding9652 = mathStyleToDataAttrs(mathIn2424);
  return mathIn2423.presubscript || mathIn2423.presuperscript ? createMathMlElement("mmultiscripts", workbookBinding9652, [workbookBinding9651, mathIn2423.subscript ? mathAstNodeToMathMl(mathIn2423.subscript) : createMathMlElement("none", {}, []), mathIn2423.superscript ? mathAstNodeToMathMl(mathIn2423.superscript) : createMathMlElement("none", {}, []), createMathMlElement("mprescripts", {}, []), mathIn2423.presubscript ? mathAstNodeToMathMl(mathIn2423.presubscript) : createMathMlElement("none", {}, []), mathIn2423.presuperscript ? mathAstNodeToMathMl(mathIn2423.presuperscript) : createMathMlElement("none", {}, [])]) : mathIn2423.subscript && mathIn2423.superscript ? createMathMlElement("msubsup", workbookBinding9652, [workbookBinding9651, mathAstNodeToMathMl(mathIn2423.subscript), mathAstNodeToMathMl(mathIn2423.superscript)]) : mathIn2423.subscript ? createMathMlElement("msub", workbookBinding9652, [workbookBinding9651, mathAstNodeToMathMl(mathIn2423.subscript)]) : mathIn2423.superscript ? createMathMlElement("msup", workbookBinding9652, [workbookBinding9651, mathAstNodeToMathMl(mathIn2423.superscript)]) : createMathMlElement("mrow", workbookBinding9652, [workbookBinding9651]);
}
function naryAstToMathMl(mathIn4342, mathIn4343) {
  let workbookBinding13472 = [wrapNaryOperatorWithLimits(createMathMlElement("mo", {}, [], mathIn4342.operator), mathIn4342.lowerLimit, mathIn4342.upperLimit, mathIn4342.limitPlacement)];
  return mathIn4342.body && workbookBinding13472.push(mathAstNodeToMathMl(mathIn4342.body)), createMathMlElement("mrow", {
    ...mathStyleToDataAttrs(mathIn4343),
    [DATA_GRANOLA_NODE_KIND]: "nary",
    [DATA_GRANOLA_LIMIT_PLACEMENT]: limitPlacementToAttr(mathIn4342.limitPlacement),
    [DATA_GRANOLA_HIDE_SUBSCRIPT]: String(mathIn4342.hideSubscript === true),
    [DATA_GRANOLA_HIDE_SUPERSCRIPT]: String(mathIn4342.hideSuperscript === true)
  }, workbookBinding13472);
}
function delimitedAstToMathMl(mathIn3141, mathIn3142) {
  let workbookBinding11263 = !(mathIn3141.beginDelimiter !== undefined && mathIn3141.beginDelimiter.length > 0 || mathIn3141.endDelimiter !== undefined && mathIn3141.endDelimiter.length > 0 || mathIn3141.separatorDelimiter !== undefined && mathIn3141.separatorDelimiter.length > 0);
  return createMathMlElement("mfenced", {
    ...mathStyleToDataAttrs(mathIn3142),
    open: workbookBinding11263 ? "(" : mathIn3141.beginDelimiter ?? "",
    close: workbookBinding11263 ? ")" : mathIn3141.endDelimiter ?? "",
    separators: mathIn3141.separatorDelimiter ?? "",
    [DATA_GRANOLA_GROW]: String(mathIn3141.grow !== false),
    [DATA_GRANOLA_SHAPE]: mathIn3141.shape ?? "",
    ...(workbookBinding11263 ? {
      [DATA_GRANOLA_IMPLICIT_DELIMITERS]: "default-parens"
    } : {})
  }, mathIn3141.items.map(item => mathAstNodeToMathMl(item)));
}
function matrixAstToMathMl(mathIn5845, mathIn5846) {
  let workbookBinding15803 = mathIn5845.columns.map(item => matrixColumnJustifyToAttr(item.justification)).join(" ");
  return createMathMlElement("mtable", {
    ...mathStyleToDataAttrs(mathIn5846),
    [DATA_GRANOLA_NODE_KIND]: "matrix",
    ...(workbookBinding15803 ? {
      columnalign: workbookBinding15803
    } : {})
  }, mathIn5845.rows.map(item => createMathMlElement("mtr", {}, item.cells.map(_item => createMathMlElement("mtd", {}, [mathAstNodeToMathMl(_item)])))));
}
function accentAstToMathMl(mathIn7529, mathIn7530) {
  return createMathMlElement(mathIn7529.position === MathAccentPosition.MATH_ACCENT_POSITION_BOTTOM ? "munder" : "mover", {
    ...mathStyleToDataAttrs(mathIn7530),
    [DATA_GRANOLA_NODE_KIND]: "accent"
  }, [mathIn7529.base ? mathAstNodeToMathMl(mathIn7529.base) : createMathMlElement("mrow", {}, []), createMathMlElement("mo", {}, [], mathIn7529.character)]);
}
function barAstToMathMl(mathIn6354, mathIn6355) {
  let workbookBinding16502 = mathIn6354.position === MathBarPosition.MATH_BAR_POSITION_BOTTOM ? "munder" : "mover",
    workbookBinding16503 = mathIn6354.position === MathBarPosition.MATH_BAR_POSITION_BOTTOM ? "_" : "¯";
  return createMathMlElement(workbookBinding16502, {
    ...mathStyleToDataAttrs(mathIn6355),
    [DATA_GRANOLA_NODE_KIND]: "bar"
  }, [mathIn6354.base ? mathAstNodeToMathMl(mathIn6354.base) : createMathMlElement("mrow", {}, []), createMathMlElement("mo", {}, [], workbookBinding16503)]);
}
function enclosureAstToMathMl(mathIn10315, mathIn10316) {
  return createMathMlElement("menclose", {
    ...mathStyleToDataAttrs(mathIn10316),
    notation: enclosureToNotationAttr(mathIn10315)
  }, [mathIn10315.body ? mathAstNodeToMathMl(mathIn10315.body) : createMathMlElement("mrow", {}, [])]);
}
function limitAstToMathMl(mathIn7075, mathIn7076) {
  return createMathMlElement(mathIn7075.kind === MathLimitKind.MATH_LIMIT_KIND_LOWER ? "munder" : "mover", {
    ...mathStyleToDataAttrs(mathIn7076),
    [DATA_GRANOLA_NODE_KIND]: "limit"
  }, [mathIn7075.base ? mathAstNodeToMathMl(mathIn7075.base) : createMathMlElement("mrow", {}, []), mathIn7075.limit ? mathAstNodeToMathMl(mathIn7075.limit) : createMathMlElement("mrow", {}, [])]);
}
function phantomAstToMathMl(mathIn6207, mathIn6208) {
  return createMathMlElement("mphantom", {
    ...mathStyleToDataAttrs(mathIn6208),
    [DATA_GRANOLA_SHOW]: String(mathIn6207.show !== false),
    [DATA_GRANOLA_ZERO_WIDTH]: String(mathIn6207.zeroWidth === true),
    [DATA_GRANOLA_ZERO_ASCENT]: String(mathIn6207.zeroAscent === true),
    [DATA_GRANOLA_ZERO_DESCENT]: String(mathIn6207.zeroDescent === true)
  }, [mathIn6207.body ? mathAstNodeToMathMl(mathIn6207.body) : createMathMlElement("mrow", {}, [])]);
}
function equationArrayAstToMathMl(mathIn5661, mathIn5662) {
  return createMathMlElement("mtable", {
    ...mathStyleToDataAttrs(mathIn5662),
    [DATA_GRANOLA_NODE_KIND]: "equation-array",
    ...(mathIn5661.justification === undefined ? {} : {
      [DATA_GRANOLA_JUSTIFICATION]: String(mathIn5661.justification)
    }),
    ...(mathIn5661.baseJustification ? {
      [DATA_GRANOLA_BASE_JUSTIFICATION]: mathIn5661.baseJustification
    } : {})
  }, mathIn5661.rows.map(item => createMathMlElement("mtr", {}, [createMathMlElement("mtd", {}, [mathAstNodeToMathMl(item)])])));
}
function wrapNaryOperatorWithLimits(mathIn6278, mathIn6279, mathIn6280, mathIn6281) {
  let workbookBinding16388 = mathIn6281 !== MathLimitPlacement.MATH_LIMIT_PLACEMENT_SUB_SUP;
  return mathIn6279 && mathIn6280 ? createMathMlElement(workbookBinding16388 ? "munderover" : "msubsup", {}, [mathIn6278, mathAstNodeToMathMl(mathIn6279), mathAstNodeToMathMl(mathIn6280)]) : mathIn6279 ? createMathMlElement(workbookBinding16388 ? "munder" : "msub", {}, [mathIn6278, mathAstNodeToMathMl(mathIn6279)]) : mathIn6280 ? createMathMlElement(workbookBinding16388 ? "mover" : "msup", {}, [mathIn6278, mathAstNodeToMathMl(mathIn6280)]) : mathIn6278;
}
