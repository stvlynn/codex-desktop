// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: build paragraph/run payloads from loose input (legacy h273–h275 / workbookG).

import { TextStyle } from "../text-style";
import { Jn as AlignmentType } from "../presentation-protobuf";
import {
  MathDisplayMode,
  parseMathFromLatex,
  mathAstToPlainText,
} from "../math-plain-text";
import { normalizeMathDocumentViaMathMl } from "../math-ml";
import {
  normalizeMathDisplayMode,
  mathDocumentFromNodeInput,
  cloneMathAst,
} from "./math-display";
import { parseFontSizeUnitString } from "./font-size-unit";
import {
  isRunLike,
  isLatexInline,
  isMathAstInline,
  isMathInline,
  isNonMathInline,
  mathInlineDisplayMode,
  isPlainRunList,
  isParagraphPartial,
} from "./text-input-guards";

export function coerceFillOrColor(dtIn11836: any) {
  return typeof dtIn11836 == "string"
    ? dtIn11836
    : dtIn11836.type === "solid"
      ? {
          ...dtIn11836,
        }
      : dtIn11836;
}

export function textStyleProtoFromPartial(dtIn2298: any) {
  if (!dtIn2298) return;
  let dtBind9394 = new TextStyle();
  dtIn2298.bold !== undefined &&
    (dtBind9394.bold = dtIn2298.bold);
  dtIn2298.italic !== undefined &&
    (dtBind9394.italic = dtIn2298.italic);
  dtIn2298.underline !== undefined &&
    (dtBind9394.underline = dtIn2298.underline);
  dtIn2298.fontSize &&
    (dtBind9394.fontSize = parseFontSizeUnitString(dtIn2298.fontSize));
  dtIn2298.typeface !== undefined &&
    (dtBind9394.typeface = dtIn2298.typeface);
  let dtBind9395 = dtIn2298.fill ?? dtIn2298.color;
  dtBind9395 !== undefined &&
    (dtBind9394.fill = coerceFillOrColor(dtBind9395));
  dtIn2298.highlight !== undefined &&
    (dtBind9394.highlight = dtIn2298.highlight);
  dtIn2298.outline !== undefined &&
    (dtBind9394.outline = dtIn2298.outline);
  dtIn2298.shadow !== undefined &&
    (dtBind9394.shadow = dtIn2298.shadow);
  let dtBind9396 = dtBind9394.toProto();
  return Object.values(dtBind9396).some((item) =>
    item == null
      ? false
      : Array.isArray(item)
        ? item.length > 0
        : typeof item == "object"
          ? Object.keys(item).length > 0
          : true,
  )
    ? dtBind9396
    : undefined;
}

export function coerceRunLike(dtIn13931: any) {
  return isRunLike(dtIn13931)
    ? dtIn13931
    : {
        run: String(dtIn13931),
      };
}

export function cloneTextRunFields(dtIn10707: any) {
  return {
    ...dtIn10707,
    citations: [...dtIn10707.citations],
    reviewMarkIds: [...dtIn10707.reviewMarkIds],
  };
}

export function textRunFromRunLike(dtIn6649: any) {
  let dtBind16944 = {
      id: "",
      text: dtIn6649.run ?? "",
      hyperlink: dtIn6649.link
        ? {
            ...dtIn6649.link,
            action: dtIn6649.link.action ?? "",
          }
        : undefined,
      citations: [],
      reviewMarkIds: [],
    },
    dtBind16945 = textStyleProtoFromPartial(dtIn6649.textStyle);
  return (
    dtBind16945 &&
      (dtBind16944.textStyle = dtBind16945),
    dtBind16944
  );
}

export function mathDocumentFromInline(dtIn5677: any) {
  if (isLatexInline(dtIn5677)) {
    let dtBind22930 = parseMathFromLatex(dtIn5677);
    return normalizeMathDocumentViaMathMl(dtBind22930) ?? dtBind22930;
  }
  if (isMathAstInline(dtIn5677)) {
    let dtBind21461 = cloneMathAst(dtIn5677.math);
    return (
      dtIn5677.displayMode !== undefined &&
        (dtBind21461.displayMode = normalizeMathDisplayMode(
          dtIn5677.displayMode,
        )),
      dtBind21461
    );
  }
  return mathDocumentFromNodeInput({
    root: dtIn5677.node,
    displayMode: dtIn5677.displayMode,
    paragraphProperties: dtIn5677.paragraphProperties,
  });
}

export function normalizeInlineRuns(dtIn1825: any) {
  if (!dtIn1825.some(isMathInline))
    return {
      runs: dtIn1825
        .filter(isNonMathInline)
        .map((item) => coerceRunLike(item))
        .map((item) => textRunFromRunLike(item)),
      inlineNodes: [],
      textStyle: undefined,
    };
  let dtBind8390 = dtIn1825.filter(
    (item) =>
      isMathInline(item) &&
      mathInlineDisplayMode(item) === MathDisplayMode.MATH_DISPLAY_MODE_BLOCK,
  );
  if (
    dtBind8390.length > 0 &&
    !(
      dtIn1825.length === 1 &&
      isMathInline(dtIn1825[0]) &&
      mathInlineDisplayMode(dtIn1825[0]) ===
        MathDisplayMode.MATH_DISPLAY_MODE_BLOCK
    )
  )
    throw Error(
      'Block math paragraphs must contain exactly one `{ latex, displayMode: "block" }` entry.',
    );
  let dtBind8391 = [],
    dtBind8392 = [];
  for (let dtBind16793 of dtIn1825) {
    if (isMathInline(dtBind16793)) {
      let dtBind19841 = mathDocumentFromInline(dtBind16793),
        dtBind19842 = mathAstToPlainText(dtBind19841);
      dtBind8391.push({
        id: "",
        text: dtBind19842,
        citations: [],
        reviewMarkIds: [],
      });
      dtBind8392.push({
        math: dtBind19841,
      });
      continue;
    }
    let dtBind17239 = textRunFromRunLike(
      coerceRunLike(dtBind16793),
    );
    dtBind8391.push(dtBind17239);
    dtBind8392.push({
      textRun: cloneTextRunFields(dtBind17239),
    });
  }
  return {
    runs: dtBind8391,
    inlineNodes: dtBind8392,
    textStyle:
      dtBind8390.length > 0
        ? {
            alignment: AlignmentType.ALIGNMENT_TYPE_CENTER,
          }
        : undefined,
  };
}

export function paragraphFromRunList(dtIn9995: any) {
  let dtBind20501 = normalizeInlineRuns(dtIn9995);
  return {
    id: "",
    inlineNodes: dtBind20501.inlineNodes,
    runs: dtBind20501.runs,
    textStyle: dtBind20501.textStyle,
  };
}

export function paragraphFromPartial(dtIn4033: any) {
  let dtBind12981 = normalizeInlineRuns(dtIn4033.runs ?? []);
  return {
    id: "",
    inlineNodes: dtBind12981.inlineNodes,
    runs: dtBind12981.runs,
    textStyle: dtBind12981.textStyle,
    bulletCharacter: dtIn4033.bulletCharacter,
    marginLeft: dtIn4033.marginLeft,
    indent: dtIn4033.indent,
    spaceBefore: dtIn4033.spaceBefore,
    spaceAfter: dtIn4033.spaceAfter,
    styleId: dtIn4033.styleId,
    paragraphStyle: dtIn4033.paragraphStyle
      ? {
          ...dtIn4033.paragraphStyle,
          tabStops: dtIn4033.paragraphStyle.tabStops ?? [],
        }
      : undefined,
  };
}

export function normalizeParagraphInputs(dtIn8509: any) {
  if (Array.isArray(dtIn8509) && dtIn8509.length === 0)
    return [];
  let dtBind19018 =
    Array.isArray(dtIn8509) && !isPlainRunList(dtIn8509)
      ? dtIn8509
      : [dtIn8509];
  return dtBind19018.length === 0
    ? []
    : dtBind19018.map((item) =>
        isPlainRunList(item) ? paragraphFromRunList(item) : paragraphFromPartial(item),
      );
}

