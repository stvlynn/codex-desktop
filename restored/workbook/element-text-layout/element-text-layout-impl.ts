// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: element text layout map (legacy XDe + helper676).
// Stage-3 wave-109.

import { etlH } from "./boundary-hooks";

void etlH;

export function mergeInheritedShapeStyle(etlIn1260: any, etlIn1261: any) {
  let etlBind6836 = etlIn1260.renderStyleData,
    etlBind6837 = [...etlIn1261, etlIn1260],
    etlBind6838,
    etlBind6839,
    etlBind6840,
    etlBind6841,
    etlBind6842,
    etlBind6843,
    etlBind6844,
    etlBind6845,
    etlBind6846,
    etlBind6847,
    etlBind6848,
    etlBind6849 = etlIn1260;
  for (let etlBind10315 of etlBind6837) {
    let etlBind10491 = etlBind10315.renderStyleData;
    etlBind10491.geometry !== undefined &&
      etlBind10491.geometry !== etlH.SHAPE_GEOMETRY_UNSPECIFIED &&
      ((etlBind6838 = etlBind10491.geometry),
      (etlBind6839 = etlBind10491.preset));
    etlBind10491.adjustmentList.length > 0 &&
      (etlBind6840 = etlBind10491.adjustmentList);
    etlBind10491.customPaths.length > 0 &&
      (etlBind6841 = etlBind10491.customPaths);
    etlBind10491.fill !== undefined &&
      ((etlBind6842 = etlBind10491.fill), (etlBind6849 = etlBind10315));
    etlBind10491.line !== undefined && (etlBind6843 = etlBind10491.line);
    etlBind10491.effects !== undefined && (etlBind6844 = etlBind10491.effects);
    etlBind10491.fillReference !== undefined &&
      (etlBind6845 = etlBind10491.fillReference);
    etlBind10491.lineReference !== undefined &&
      (etlBind6846 = etlBind10491.lineReference);
    etlBind10491.effectReference !== undefined &&
      (etlBind6847 = etlBind10491.effectReference);
    etlBind10491.useBackgroundFill !== undefined &&
      (etlBind6848 = etlBind10491.useBackgroundFill);
  }
  return {
    source: {
      ...etlBind6836,
      geometry: etlBind6838,
      preset: etlBind6839,
      adjustmentList: etlBind6840 ?? etlBind6836.adjustmentList,
      customPaths: etlBind6841 ?? etlBind6836.customPaths,
      fill: etlBind6842,
      line: etlBind6843,
      effects: etlBind6844,
      fillReference: etlBind6845,
      lineReference: etlBind6846,
      effectReference: etlBind6847,
      useBackgroundFill: etlBind6848,
    },
    pictureFillSource: etlBind6849,
  };
}
export function buildElementTextLayoutMap(etlIn2137: any, etlIn2138: any) {
  let etlBind9087 = etlIn2137.getPresentation();
  if (!etlBind9087) return new Map();
  let { themeMap } = etlIn2137.resolveRenderContext(),
    etlBind9088 = etlH.getFontMeasureContext(),
    etlBind9089 = new Map();
  return (
    etlIn2137.elements.items.forEach((item) => {
      let etlBind11078 = etlIn2138.get(item),
        etlBind11079 = etlBind11078?.id;
      if (!etlBind11079 || !etlBind11078.paragraphs?.length) return;
      let etlBind11080 = etlH.resolvePlaceholderTextStyle(
          etlBind11078,
          etlBind9087,
          etlIn2137,
        ),
        etlBind11081 = etlBind11080?.wrap !== etlH.TEXT_WRAPPING_TYPE_NONE,
        etlBind11082 = etlBind11080?.autoFit?.normalAutoFit?.fontScale,
        etlBind11083 =
          typeof etlBind11082 == "number" && Number.isFinite(etlBind11082)
            ? etlBind11082 / 1e5
            : 1,
        etlBind11084 = etlH.computeTextBoxInset({
          element: etlBind11078,
          bboxPx: etlH.resolveElementFramePx(
            etlBind11078,
            etlBind9087,
            etlIn2137,
          ),
          source: resolveTextLayoutSource(item, etlIn2137),
        }),
        etlBind11085 = etlH.layoutElementText(
          etlBind11078,
          etlBind9088,
          themeMap,
          undefined,
          {
            mode: "layout",
            resolvedStyle: etlBind11080,
            masterDefaults: etlH.resolveMasterTextStyle(
              etlBind11078,
              etlBind9087,
              etlIn2137,
            ),
            bboxPx: etlBind11084,
            wrap: etlBind11081,
            textScale: etlBind11083,
          },
        );
      etlBind11085 &&
        etlBind9089.set(etlBind11079, summarizeTextLayout(etlBind11085));
    }),
    etlBind9089
  );
}
export function summarizeTextLayout(props: any) {
  return {
    lineCount: props.lines.length,
    lines: props.lines.map((item, index) => ({
      index: index + 1,
      text: item.segments.map((_item) => _item.text).join(""),
    })),
  };
}
export function resolveTextLayoutSource(etlIn9317: any, etlIn9318: any) {
  if (!(etlIn9317 instanceof etlH.ShapeClass)) return;
  let etlBind19884 = etlIn9318.getInheritedPlaceholderShapes(etlIn9317);
  return etlBind19884.length > 0
    ? mergeInheritedShapeStyle(etlIn9317, etlBind19884).source
    : etlIn9317.renderStyleData;
}

/** Legacy aliases. */
export const workbookHelper676 = mergeInheritedShapeStyle;
export const XDe = buildElementTextLayoutMap;
export const ZDe = summarizeTextLayout;
export const QDe = resolveTextLayoutSource;
