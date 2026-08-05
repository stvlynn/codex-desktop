// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paint slide text-group children (legacy nEe/tEe).
// Stage-3 wave-105.

import { scrH } from "./boundary-hooks";

void scrH;

export function bboxFromEmu(scrIn4423: any) {
  let scrBind13646 = scrIn4423.bbox;
  if (
    !(
      scrBind13646?.xEmu === undefined ||
      scrBind13646.yEmu === undefined ||
      scrBind13646.widthEmu === undefined ||
      scrBind13646.heightEmu === undefined
    )
  )
    return {
      x: Number(scrBind13646.xEmu),
      y: Number(scrBind13646.yEmu),
      width: Number(scrBind13646.widthEmu),
      height: Number(scrBind13646.heightEmu),
      rotation: scrH.emuRotation(scrBind13646.rotation),
      horizontalFlip: scrBind13646.horizontalFlip,
      verticalFlip: scrBind13646.verticalFlip,
    };
}
export function paintSlideText(
  scrIn1291: any,
  scrIn1292: any,
  scrIn1293: any,
  scrIn1294: any,
  scrIn1295: any,
) {
  let scrBind6979 = scrIn1291.toProto(),
    scrBind6980 = scrBind6979.children ?? [];
  if (scrBind6980.length === 0) return;
  let scrBind6981 = scrIn1291.resolveFrame(),
    scrBind6982 = Number(scrBind6979.bbox?.widthEmu),
    scrBind6983 = Number(scrBind6979.bbox?.heightEmu);
  if (
    !(
      !Number.isFinite(scrBind6982) ||
      !Number.isFinite(scrBind6983) ||
      scrBind6982 <= 0 ||
      scrBind6983 <= 0
    )
  ) {
    scrH.applyFrameTransform(scrIn1292, scrBind6981);
    for (let scrBind8929 of scrBind6980) {
      let scrBind9057 = bboxFromEmu(scrBind8929);
      if (!scrBind9057) continue;
      let scrBind9058 = {
        left: (scrBind9057.x / scrBind6982) * scrBind6981.width,
        top: (scrBind9057.y / scrBind6983) * scrBind6981.height,
        width: (scrBind9057.width / scrBind6982) * scrBind6981.width,
        height: (scrBind9057.height / scrBind6983) * scrBind6981.height,
        rotation: scrBind9057.rotation,
        horizontalFlip: scrBind9057.horizontalFlip,
        verticalFlip: scrBind9057.verticalFlip,
      };
      scrBind8929.type === scrH.elementTypes.ELEMENT_TYPE_SHAPE &&
        scrBind8929.shape &&
        scrH.renderDrawingShape(
          scrBind8929,
          scrIn1292,
          scrIn1293,
          scrIn1294,
          scrIn1295,
          {
            frame: scrBind9058,
          },
        );
      (scrBind8929.type === scrH.elementTypes.ELEMENT_TYPE_TEXT ||
        scrBind8929.type === scrH.elementTypes.ELEMENT_TYPE_TEXT_GROUP ||
        (scrBind8929.paragraphs?.length ?? 0) > 0) &&
        (scrH.applyFrameTransform(scrIn1292, scrBind9058),
        scrH.paintTextElement(scrBind8929, scrIn1292, scrIn1295, undefined, {
          bboxPx: {
            x: 0,
            y: 0,
            width: scrBind9058.width,
            height: scrBind9058.height,
          },
          resolvedStyle: scrH.layoutPaintedText(
            scrBind8929,
            scrIn1293,
            scrIn1294,
          ),
          masterDefaults: scrH.masterDefaults(
            scrBind8929,
            scrIn1293,
            scrIn1294,
          ),
        }),
        scrIn1292.restore());
    }
    scrIn1292.restore();
  }
}

/** Legacy aliases. */
export const nEe = paintSlideText;
export const tEe = bboxFromEmu;
