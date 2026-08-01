// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: collect slide theme typefaces (legacy VDe/HDe/helper679).
// Stage-3 wave-107.

import { ptfH } from "./boundary-hooks-theme-fonts";

void ptfH;

export function collectSlideThemeFonts(
  ptfIn1351: any,
  ptfIn1352: any,
  ptfIn1353: any,
) {
  if (!ptfIn1351) return;
  let ptfBind7104 = new Set(),
    ptfBind7105 = normalizeFontScheme(ptfIn1351.theme.fontScheme);
  addTypeface(ptfBind7104, ptfBind7105?.majorFont?.latinTypeface);
  addTypeface(ptfBind7104, ptfBind7105?.minorFont?.latinTypeface);
  let ptfBind7106 = (ptfIn2934) => {
    addTypeface(ptfBind7104, ptfIn2934.resolvedTextStyle?.typeface);
    addTypeface(ptfBind7104, ptfIn2934.resolvedTextStyle?.name);
    ptfIn2934.paragraphs?.forEach((ptfIn9439) => {
      addTypeface(ptfBind7104, ptfIn9439.resolvedTextStyle?.typeface);
      addTypeface(ptfBind7104, ptfIn9439.resolvedTextStyle?.name);
      ptfIn9439.runs.forEach((item) => addTypeface(ptfBind7104, item.typeface));
    });
    ptfIn2934.cells?.forEach((ptfIn5751) => {
      addTypeface(ptfBind7104, ptfIn5751.resolvedTextStyle?.typeface);
      addTypeface(ptfBind7104, ptfIn5751.resolvedTextStyle?.name);
      ptfIn5751.paragraphs?.forEach((ptfIn8926) => {
        addTypeface(ptfBind7104, ptfIn8926.resolvedTextStyle?.typeface);
        addTypeface(ptfBind7104, ptfIn8926.resolvedTextStyle?.name);
        ptfIn8926.runs.forEach((item) =>
          addTypeface(ptfBind7104, item.typeface),
        );
      });
    });
  };
  ptfIn1352.forEach(ptfBind7106);
  ptfIn1353?.forEach((ptfIn15308) => {
    ptfIn15308.elements.forEach(ptfBind7106);
  });
  let ptfBind7107 = {
    colorSchemeName: ptfH.trimName(ptfIn1351.theme.colorScheme.name),
    colors: ptfIn1351.theme.hexColorMap,
    fontScheme: ptfBind7105,
    typefaces:
      ptfBind7104.size > 0 ? Array.from(ptfBind7104).sort() : undefined,
  };
  return Object.values(ptfBind7107).some((item) => item !== undefined)
    ? ptfBind7107
    : undefined;
}
export function addTypeface(ptfIn14318: any, ptfIn14319: any) {
  let ptfBind22824 = ptfH.trimName(ptfIn14319);
  ptfBind22824 && ptfIn14318.add(ptfBind22824);
}
export function normalizeFontScheme(props: any) {
  if (!props) return;
  let ptfBind18576 = {
    name: ptfH.trimName(props.name),
    majorFont: ptfH.normalizeFontFace(props.majorFont),
    minorFont: ptfH.normalizeFontFace(props.minorFont),
  };
  return Object.values(ptfBind18576).some((item) => item !== undefined)
    ? ptfBind18576
    : undefined;
}

/** Legacy aliases. */
export const VDe = collectSlideThemeFonts;
export const HDe = normalizeFontScheme;
export const workbookHelper679 = addTypeface;
