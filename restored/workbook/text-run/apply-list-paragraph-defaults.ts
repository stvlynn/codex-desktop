// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-29: list/numbered-list paragraph default applicator (legacy workbookHelper 261).

import {
  DEFAULT_BULLET_CHARACTER,
  PRESENTATION_LIST_MARGIN_LEFT,
  PRESENTATION_LIST_INDENT,
  PRESENTATION_NUMBERED_MARGIN_LEFT,
  PRESENTATION_NUMBERED_INDENT,
  DEFAULT_AUTO_NUMBER_TYPE,
  DOCUMENT_LIST_MARGIN_LEFT,
  DOCUMENT_LIST_INDENT,
  DOCUMENT_NUMBERED_MARGIN_LEFT,
  DOCUMENT_NUMBERED_INDENT,
} from "./list-paragraph-defaults";
export function applyListParagraphDefaults(
  trIn2894: unknown,
  trIn2895: unknown,
  trIn2896: unknown = "presentation",
) {
  let trBind10754 =
      trIn2896 === "document"
        ? DOCUMENT_LIST_MARGIN_LEFT
        : PRESENTATION_LIST_MARGIN_LEFT,
    trBind10755 =
      trIn2896 === "document" ? DOCUMENT_LIST_INDENT : PRESENTATION_LIST_INDENT,
    trBind10756 =
      trIn2896 === "document"
        ? DOCUMENT_NUMBERED_MARGIN_LEFT
        : PRESENTATION_NUMBERED_MARGIN_LEFT,
    trBind10757 =
      trIn2896 === "document"
        ? DOCUMENT_NUMBERED_INDENT
        : PRESENTATION_NUMBERED_INDENT;
  if (trIn2895 === "list") {
    trIn2894.bulletCharacter = DEFAULT_BULLET_CHARACTER;
    trIn2894.marginLeft = trBind10754;
    trIn2894.indent = trBind10755;
    trIn2894.paragraphStyle = {
      ...(trIn2894.paragraphStyle ?? {
        tabStops: [],
      }),
      autoNumberType: undefined,
    };
    return;
  }
  trIn2895 === "numberedList" &&
    ((trIn2894.bulletCharacter = undefined),
    (trIn2894.marginLeft = trBind10756),
    (trIn2894.indent = trBind10757),
    (trIn2894.paragraphStyle = {
      ...(trIn2894.paragraphStyle ?? {
        tabStops: [],
      }),
      autoNumberType: DEFAULT_AUTO_NUMBER_TYPE,
    }));
}
