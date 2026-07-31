// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-13: Math document ↔ MathML round-trip (legacy workbookHelper 127 / Doe / Eoe).

import { MathJustification, MathDisplayMode } from "../math-plain-text/math-proto-enums";
import { mathAstNodeToMathMl } from "./math-ast-to-mathml";
import { DATA_GRANOLA_PARAGRAPH_PROPERTIES } from "./math-ml-data-attrs";
import { parseJsonAttribute, wrapMathAstSequence } from "./math-ml-node";
import { mathMlElementToMathAst } from "./mathml-to-math-ast";
import { normalizeMathAstNode } from "./normalize-math-ast";
export function normalizeMathDocumentViaMathMl(mathIn14350: unknown) {
  return mathIn14350?.root ? mathMlTreeToMathDocument(mathDocumentToMathMlTree(mathIn14350)) : mathIn14350;
}
export function mathDocumentToMathMlTree(props: unknown) {
  let workbookBinding16419 = {
    display: props?.displayMode === MathDisplayMode.MATH_DISPLAY_MODE_BLOCK ? "block" : "inline"
  };
  return props?.paragraphProperties && (workbookBinding16419[DATA_GRANOLA_PARAGRAPH_PROPERTIES] = JSON.stringify(props.paragraphProperties)), {
    tag: "math",
    attributes: workbookBinding16419,
    children: props?.root ? [mathAstNodeToMathMl(props.root)] : []
  };
}
export function mathMlTreeToMathDocument(mathIn3134: unknown, mathIn3135: unknown) {
  if (mathIn3134.tag !== "math") throw Error("MathML root must be a `<math>` element.");
  let workbookBinding11255 = normalizeMathAstNode(wrapMathAstSequence(mathIn3134.children.map(item => mathMlElementToMathAst(item)).filter(item => item !== undefined))) ?? {
      sequence: {
        children: []
      }
    },
    workbookBinding11256 = mathIn3134.attributes.display === "block" || mathIn3135 === "block" ? MathDisplayMode.MATH_DISPLAY_MODE_BLOCK : MathDisplayMode.MATH_DISPLAY_MODE_INLINE;
  return {
    displayMode: workbookBinding11256,
    paragraphProperties: parseJsonAttribute(mathIn3134.attributes[DATA_GRANOLA_PARAGRAPH_PROPERTIES]) ?? (workbookBinding11256 === MathDisplayMode.MATH_DISPLAY_MODE_BLOCK ? {
      justification: MathJustification.MATH_JUSTIFICATION_CENTER_GROUP
    } : undefined),
    root: workbookBinding11255
  };
}
