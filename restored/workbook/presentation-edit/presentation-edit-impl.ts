// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: walnut presentation edit runners (legacy lLe..bLe).
// Stage-3 wave-117.

import { lengthUnitNameByKey } from "../chart-proto-name-maps";

/** pt → CSS-px factor (legacy TLe). */
export const PT_TO_PX = 1.3333333333333333;
/** Default chart frame position (legacy xLe). */
export const DEFAULT_CHART_POSITION = {
  left: 60,
  top: 80,
  width: 600,
  height: 360,
};
/** Default inserted-shape size (legacy SLe). */
export const DEFAULT_SHAPE_SIZE = { width: 100, height: 100 };
/** Default shape fill theme (legacy Binding1723). */
export const DEFAULT_FILL_THEME = "accent1";
/** Default stroke color (legacy Binding1724). */
export const DEFAULT_STROKE_HEX = "#000000";
/** Default stroke width px (legacy CLe). */
export const DEFAULT_STROKE_WIDTH = 2;
/** Default slide background theme (legacy wLe). */
export const DEFAULT_BG_THEME = "bg1";
/** Default series theme cycle (legacy ELe). */
export const DEFAULT_SERIES_THEMES = [
  "accent1",
  "accent2",
  "accent3",
  "accent4",
];

export function centerInFrame(pedIn7805: any, pedIn7806: any) {
  let pedBind18290 = pedIn7805.frame,
    pedBind18291 = Math.max(0, (pedBind18290.width - pedIn7806.width) / 2),
    pedBind18292 = Math.max(0, (pedBind18290.height - pedIn7806.height) / 2);
  return {
    unit: pedBind384.pixels,
    left: pedBind18291,
    top: pedBind18292,
    width: pedIn7806.width,
    height: pedIn7806.height,
  };
}
export function demoCategories() {
  return ["2020", "2021", "2022", "2023"];
}
export function demoSeries(pedIn5752: any) {
  let pedBind15680 = pedIn5752.length > 0 ? pedIn5752 : demoCategories();
  return [
    {
      name: "Milky Way",
      values: [1.8, 1.9, 2, 2.2],
      categories: pedBind15680,
      strokeTheme: "accent1",
    },
    {
      name: "Andromeda",
      values: [2.4, 2.5, 2.6, 2.8],
      categories: pedBind15680,
      strokeTheme: "accent2",
    },
  ];
}
export function ptToPx(pedIn14327: any) {
  if (pedIn14327 !== undefined) return pedIn14327 * PT_TO_PX;
}
export function requireSlide(pedIn5864: any) {
  let pedBind15831 = pedIn5864.presentation.slides;
  if (pedBind15831.count === 0)
    throw Error("Presentation has no slides to edit.");
  if (!pedIn5864.slideId) throw Error("Slide id is required to edit a slide.");
  let pedBind15832 = pedBind15831.getItem({
    id: pedIn5864.slideId,
  });
  if (!pedBind15832)
    throw Error(`Slide with id ${pedIn5864.slideId} not found.`);
  return pedBind15832;
}
export function requireShape(pedIn10434: any, pedIn10435: any) {
  let pedBind20908 = pedIn10434.shapes.getItem({
    id: pedIn10435,
  });
  if (!pedBind20908) throw Error(`Shape ${pedIn10435} not found on slide.`);
  return pedBind20908;
}
export function resolveEditSlide(pedIn8642: any) {
  let pedBind19142 = pedIn8642.presentation.slides;
  if (pedIn8642.slideId)
    try {
      return pedBind19142.getItem({
        id: pedIn8642.slideId,
      });
    } catch {}
  return pedIn8642.presentation.getActiveSlide() ?? null;
}
export function insertSlideFromLayout(pedIn8890: any, pedIn8891: any) {
  let pedBind19436 = pedIn8890.presentation.slides,
    pedBind19437 = resolveEditSlide(pedIn8890),
    { slide, index } = pedBind19436.insert({
      ...pedIn8891,
      after: pedBind19437 ?? undefined,
    });
  return {
    slideId: slide.id,
    index,
  };
}
export function insertShape(pedIn4005: any, pedIn4006: any) {
  let pedBind12911 = requireSlide(pedIn4005),
    pedBind12912 =
      pedIn4006.position ?? centerInFrame(pedBind12911, DEFAULT_SHAPE_SIZE),
    pedBind12913 = pedBind12911.shapes.add({
      geometry: pedIn4006.geometry,
      position: pedBind12912,
    });
  return (
    (pedBind12913.fill =
      pedIn4006.fillTheme || pedIn4006.fillHex || pedBind1723),
    (pedBind12913.line.width = DEFAULT_STROKE_WIDTH),
    (pedBind12913.line.style = "solid"),
    (pedBind12913.line.fill = pedBind1724),
    console.log("[slides][insertShape] shape", pedBind12913.toProto()),
    console.log(
      "[slides][insertShape] presentation",
      pedIn4005.presentation.toProto(),
    ),
    {
      shapeId: pedBind12913.id,
      geometry: pedIn4006.geometry,
    }
  );
}
export function insertChartFromTemplate(pedIn2576: any, pedIn2577: any) {
  let pedBind9966 = requireSlide(pedIn2576).charts.add(pedIn2577.chartType);
  pedBind9966.position = pedIn2577.position ?? DEFAULT_CHART_POSITION;
  pedBind9966.title = pedIn2577.title ?? "New chart";
  let pedBind9967 = pedIn2577.categories ?? demoCategories();
  pedBind9967.length && (pedBind9966.categories = pedBind9967);
  let pedBind9968 =
    pedIn2577.series?.map((pedIn16446) => ({
      ...pedIn16446,
    })) ?? demoSeries(pedBind9967);
  return (
    pedBind9968.forEach((item, index) => {
      let pedBind15547 = pedBind9966.series.add(item.name);
      pedBind15547.values = item.values;
      pedBind15547.categories = item.categories ?? pedBind9967;
      let pedBind15548 = item.strokeTheme ?? DEFAULT_SERIES_THEMES[index];
      pedBind15548 &&
        ((pedBind15547.stroke.width = 1.5),
        (pedBind15547.stroke.style = "solid"),
        (pedBind15547.stroke.fill = pedBind15548));
      let pedBind15549 = item.fillTheme ?? pedBind15548;
      pedBind15549 && (pedBind15547.fill = pedBind15549);
    }),
    (pedBind9966.hasLegend = pedBind9968.length > 1),
    {
      chartId: pedBind9966.id,
      chartType: pedIn2577.chartType,
      seriesCount: pedBind9968.length,
    }
  );
}
export function setShapeFill(pedIn10730: any, pedIn10731: any) {
  let pedBind21237 = requireShape(requireSlide(pedIn10730), pedIn10731.shapeId);
  return (
    (pedBind21237.fill = pedIn10731.theme || pedIn10731.hex || pedBind1723),
    {
      shapeId: pedBind21237.id,
    }
  );
}
export function setShapeStroke(pedIn7425: any, pedIn7426: any) {
  let pedBind17895 = requireShape(requireSlide(pedIn7425), pedIn7426.shapeId),
    pedBind17896 = pedIn7426.theme || pedIn7426.hex || pedBind1724;
  return (
    (pedBind17895.line.fill = pedBind17896),
    (pedBind17895.line.width =
      pedIn7426.widthPx ?? pedBind17895.line.width ?? 1),
    (pedBind17895.line.style = "solid"),
    {
      shapeId: pedBind17895.id,
    }
  );
}
export function setSlideBackgroundFill(pedIn9652: any, pedIn9653: any) {
  let pedBind20185 = requireSlide(pedIn9652),
    pedBind20186 = pedIn9653.theme || pedIn9653.hex || DEFAULT_BG_THEME;
  return (
    (pedBind20185.background.fill = {
      type: "solid",
      color: pedBind20186,
    }),
    {
      slideId: pedBind20185.id,
    }
  );
}
export function setTextRangeFormatting(pedIn1747: any, pedIn1748: any) {
  let pedBind8193 = requireShape(requireSlide(pedIn1747), pedIn1748.shapeId),
    pedBind8194 = pedBind8193.text;
  if (!pedBind8194)
    throw Error(`Shape ${pedIn1748.shapeId} has no text content to edit.`);
  let pedBind8195 = pedBind8194.selectRunRanges(pedIn1748.ranges ?? []);
  if (!pedBind8195.isEmpty) {
    if (pedIn1748.color) {
      let pedBind21800 = pedIn1748.color.theme || pedIn1748.color.hex;
      pedBind21800 &&
        (pedBind8195.color = {
          type: "rgb",
          value: pedBind21800,
        });
    }
    let pedBind11544 = ptToPx(pedIn1748.fontSizePt);
    pedBind11544 !== undefined && (pedBind8195.fontSize = pedBind11544);
    pedIn1748.bold !== undefined && (pedBind8195.bold = pedIn1748.bold);
    pedIn1748.italic !== undefined && (pedBind8195.italic = pedIn1748.italic);
    pedIn1748.alignment !== undefined &&
      (pedBind8195.alignment = pedIn1748.alignment);
    pedIn1748.spacingBefore !== undefined &&
      (pedBind8195.spacingBefore = pedIn1748.spacingBefore);
    pedIn1748.spacingAfter !== undefined &&
      (pedBind8195.spacingAfter = pedIn1748.spacingAfter);
    pedIn1748.lineSpacing !== undefined &&
      (pedBind8195.lineSpacing = pedIn1748.lineSpacing);
  }
  return (
    pedIn1748.verticalAlignment !== undefined &&
      (pedBind8194.verticalAlignment = pedIn1748.verticalAlignment),
    pedIn1748.insets !== undefined &&
      (pedBind8194.insets = {
        ...pedIn1748.insets,
      }),
    {
      shapeId: pedBind8193.id,
    }
  );
}
