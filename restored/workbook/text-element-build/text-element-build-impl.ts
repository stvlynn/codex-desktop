// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: text element builder (legacy text element builder).
// Stage-3 wave-130.

import {
  Yn as PresentationAnchor,
  j as ElementType,
} from "../presentation-protobuf";

export function collapseParagraphSpacing(tebIn5929: any) {
  return !tebIn5929 || tebIn5929.length === 0
    ? tebIn5929
    : tebIn5929.map((item, index) =>
        index !== 0 && index !== tebIn5929.length - 1
          ? item
          : {
              ...item,
              ...(index === 0
                ? {
                    spaceBefore: 0,
                  }
                : {}),
              ...(index === tebIn5929.length - 1
                ? {
                    spaceAfter: 0,
                  }
                : {}),
            },
      );
}
export function buildTextElement(
  tebIn4219: any,
  tebIn4220: any,
  tebIn4221: any = {},
) {
  let tebBind13273 = resolveTextAnchor(tebIn4219.anchor);
  return {
    bbox: tebIn4220,
    paragraphs:
      tebIn4221.collapseParagraphBoundarySpacing === false
        ? (tebIn4219.paragraphs ?? [])
        : (collapseParagraphSpacing(tebIn4219.paragraphs) ?? []),
    textStyle:
      tebBind13273 === undefined
        ? tebIn4219.textStyle
        : {
            ...(tebIn4219.textStyle ?? {}),
            anchor: tebBind13273,
          },
    levelsStyles: tebIn4219.levelsStyles ?? [],
    type: ElementType.ELEMENT_TYPE_TEXT,
    effects: [],
    children: [],
    id: "",
    citations: [],
  };
}
export function resolveTextAnchor(tebIn6308: any) {
  switch (tebIn6308) {
    case "b":
    case "bottom":
      return PresentationAnchor.ANCHOR_TYPE_BOTTOM;
    case "ctr":
    case "center":
    case "middle":
      return PresentationAnchor.ANCHOR_TYPE_MIDDLE;
    case "t":
    case "top":
      return PresentationAnchor.ANCHOR_TYPE_TOP;
    default:
      return;
  }
}

export const wTe = collapseParagraphSpacing;
export const workbookHelper639 = buildTextElement;
export const workbookHelper640 = resolveTextAnchor;
