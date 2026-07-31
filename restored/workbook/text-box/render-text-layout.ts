// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-22: render laid-out text lines onto canvas (legacy Binding221).

import { Yn as anchorTypeEnum } from "../presentation-protobuf";
import { resolveTextElementLayoutBox } from "./text-element-layout-box";
import {
  textBoxCanvasRenderer,
  defaultTextThemeMap,
} from "./ensure-text-box-cluster-init";
export function renderTextLayout(
  tbIn4120: unknown,
  tbIn4121: unknown,
  tbIn4122: unknown,
  tbIn4123: unknown,
  tbIn4124: unknown,
) {
  if (!tbIn4121.lines.length) return;
  let { elementStyle, box } = resolveTextElementLayoutBox(tbIn4120, tbIn4124),
    tbBind13101 = tbIn4124?.themeMap ?? defaultTextThemeMap;
  return textBoxCanvasRenderer.render({
    ctx: tbIn4122,
    lines: tbIn4121.lines,
    box,
    themeMap: tbBind13101,
    defaultTextFill: tbBind13101.colorMap?.tx1 ?? "#000000",
    anchor: elementStyle?.anchor ?? anchorTypeEnum.ANCHOR_TYPE_TOP,
    rotationDeg: elementStyle?.rotation ?? 0,
    draw: tbIn4124?.mode !== "layout",
    linkRects: tbIn4123,
    pictureFillBitmaps: tbIn4124?.pictureFillBitmaps,
  });
}
