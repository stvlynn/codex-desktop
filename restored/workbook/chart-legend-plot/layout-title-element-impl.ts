// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart/legend title element layout.
// Stage-3 wave-111.

import { j, Jn } from "../presentation-protobuf";
import { layoutTextElement as workbookQ } from "../text-box";

void j;
void Jn;
void workbookQ;

export function buildTitleTextElement(clpIn5927: any, clpIn5928: any) {
  let clpBind15941 = {
    ...clpIn5927.titleTextStyle,
  };
  return (
    clpBind15941.alignment === undefined &&
      (clpBind15941.alignment = Jn.ALIGNMENT_TYPE_CENTER),
    {
      type: j.ELEMENT_TYPE_TEXT,
      paragraphs: clpIn5928,
      textStyle: clpBind15941,
      effects: [],
      children: [],
      citations: [],
      levelsStyles: [],
      id: "",
    }
  );
}
export function titleFromPlainText(clpIn10561: any, clpIn10562: any) {
  return buildTitleTextElement(clpIn10561, [
    {
      runs: [
        {
          text: clpIn10562,
          citations: [],
          reviewMarkIds: [],
        },
      ],
      inlineNodes: [],
    },
  ]);
}
export function titleFromParagraphs(clpIn4748: any) {
  let clpBind14103 = clpIn4748.titleParagraphs ?? [];
  if (clpBind14103.length !== 0)
    return buildTitleTextElement(
      clpIn4748,
      clpBind14103.map((item) => ({
        runs: item.runs.map((_item) => ({
          text: _item.text,
          textStyle: _item.textStyle,
          citations: [],
          reviewMarkIds: [],
        })),
        textStyle: item.textStyle,
        paragraphStyle: item.paragraphStyle,
        inlineNodes: [],
      })),
    );
}
export function titlePlainText(clpIn6257: any) {
  let clpBind16370 = clpIn6257.titleParagraphs ?? [];
  return clpBind16370.length > 0
    ? clpBind16370
        .map((item) => item.runs.map((_item) => _item.text).join(""))
        .join("\n")
    : clpIn6257.title?.trim()
      ? clpIn6257.title
      : clpIn6257.autoTitleDeleted === false && clpIn6257.series?.length === 1
        ? (clpIn6257.series[0]?.name ?? "")
        : "";
}
export function titleLayoutHeight(clpIn12556: any) {
  return (
    clpIn12556?.lines.reduce(
      (clpIn16175, clpIn16176) => clpIn16175 + clpIn16176.heightPx,
      0,
    ) ?? 0
  );
}
export function truncateWithEllipsis(clpIn10076: any, clpIn10077: any) {
  if (clpIn10077 >= clpIn10076.length) return clpIn10076;
  let clpBind20568 = clpIn10076.slice(0, Math.max(0, clpIn10077)).trimEnd();
  return clpBind20568.length > 0 ? `${clpBind20568}…` : "…";
}
export function layoutTitleElement(
  clpIn2451: any,
  clpIn2452: any,
  clpIn2453: any,
) {
  let clpBind9737 = titlePlainText(clpIn2451);
  if (!clpBind9737.trim())
    return {
      text: "",
      element: undefined,
      layoutHeight: 0,
    };
  let clpBind9738 = titleFromParagraphs(clpIn2451);
  if (clpBind9738)
    return {
      text: clpBind9737,
      element: clpBind9738,
      layoutHeight: titleLayoutHeight(
        workbookQ(clpBind9738, clpIn2452, {
          bboxPx: clpIn2453,
        }),
      ),
    };
  let clpBind9739 = (clpIn11163) => {
      let clpBind21645 = titleFromPlainText(clpIn2451, clpIn11163);
      return {
        element: clpBind21645,
        height: titleLayoutHeight(
          workbookQ(clpBind21645, clpIn2452, {
            bboxPx: clpIn2453,
          }),
        ),
      };
    },
    clpBind9740 = clpBind9739(clpBind9737);
  if (clpBind9740.height <= clpIn2453.height)
    return {
      text: clpBind9737,
      element: clpBind9740.element,
      layoutHeight: clpBind9740.height,
    };
  let clpBind9741 = 0,
    clpBind9742 = clpBind9737.length,
    clpBind9743 = "…",
    clpBind9744 = clpBind9739(clpBind9743);
  for (; clpBind9741 <= clpBind9742; ) {
    let clpBind20179 = Math.floor((clpBind9741 + clpBind9742) / 2),
      clpBind20180 = truncateWithEllipsis(clpBind9737, clpBind20179),
      clpBind20181 = clpBind9739(clpBind20180);
    clpBind20181.height <= clpIn2453.height
      ? ((clpBind9743 = clpBind20180),
        (clpBind9744 = clpBind20181),
        (clpBind9741 = clpBind20179 + 1))
      : (clpBind9742 = clpBind20179 - 1);
  }
  return {
    text: clpBind9743,
    element: clpBind9744.element,
    layoutHeight: clpBind9744.height,
  };
}

export const workbookHelper547 = buildTitleTextElement;
export const oSe = titleFromPlainText;
export const sSe = titleFromParagraphs;
export const workbookHelper548 = titlePlainText;
export const workbookHelper549 = titleLayoutHeight;
export const cSe = truncateWithEllipsis;
export const lSe = layoutTitleElement;
/** Compat alias for barrels. */
export const workbookFn547 = workbookHelper547;
/** Compat alias for barrels. */
export const workbookFn548 = workbookHelper548;
/** Compat alias for barrels. */
export const workbookFn549 = workbookHelper549;
