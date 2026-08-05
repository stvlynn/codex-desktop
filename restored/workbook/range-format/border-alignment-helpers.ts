// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: border/color/alignment helpers (legacy workbookHelper245–255 / Ule / Wle / _b / Gle / Kle / qle / Jle).

import { WorkbookColor } from "../theme-color";
import { Fill } from "../fill";
import { BorderSide } from "../stylesheet";
import { horizontalAlignment } from "./horizontal-alignment";
export function cloneWorkbookColor(rfIn12167: unknown) {
  if (rfIn12167 !== undefined)
    return rfIn12167 instanceof WorkbookColor
      ? rfIn12167.clone()
      : new WorkbookColor(rfIn12167);
}
export function isNonProtoConfig(rfIn11620: unknown) {
  return !(
    typeof rfIn11620 == "object" &&
    rfIn11620 &&
    "type" in rfIn11620 &&
    rfIn11620.type === "proto"
  );
}
export function isNonProtoValue(props: unknown) {
  return !(
    typeof props == "object" &&
    props &&
    "type" in props &&
    props.type === "proto"
  );
}
export function fillConfigFromFillOrValue(props: unknown) {
  if (props !== undefined) {
    if (props === null) return null;
    if (props instanceof Fill) {
      let rfBind21827 = props.toConfig();
      return rfBind21827
        ? isNonProtoConfig(rfBind21827)
          ? rfBind21827
          : undefined
        : props.isSet
          ? undefined
          : null;
    }
    return typeof props == "object" && props && "type" in props
      ? isNonProtoConfig(props)
        ? props
        : undefined
      : props;
  }
}
export function workbookColorToConfig(rfIn12006: unknown) {
  if (rfIn12006)
    return rfIn12006 instanceof WorkbookColor
      ? rfIn12006.toConfig()
      : isNonProtoValue(rfIn12006)
        ? rfIn12006
        : undefined;
}
export function borderSideToConfig(rfIn5392: unknown) {
  if (!rfIn5392) return;
  let rfBind15133 = {};
  if (
    ("style" in rfIn5392 &&
      rfIn5392.style !== undefined &&
      (rfBind15133.style = rfIn5392.style),
    "weight" in rfIn5392 &&
      rfIn5392.weight !== undefined &&
      (rfBind15133.weight = rfIn5392.weight),
    "color" in rfIn5392 && rfIn5392.color !== undefined)
  ) {
    let rfBind22640 = workbookColorToConfig(rfIn5392.color);
    rfBind22640 !== undefined && (rfBind15133.color = rfBind22640);
  }
  return Object.keys(rfBind15133).length > 0 ? rfBind15133 : undefined;
}
export function borderPresetToConfig(props: unknown) {
  let rfBind19839 = {
    preset: props.preset,
  };
  props.style !== undefined && (rfBind19839.style = props.style);
  let rfBind19840 = workbookColorToConfig(props.color);
  return (
    rfBind19840 !== undefined && (rfBind19839.color = rfBind19840),
    rfBind19839
  );
}
export function bordersConfigFromRecord(rfIn5960: unknown) {
  let rfBind15977 = {};
  for (let [rfBind18169, rfBind18170] of Object.entries(rfIn5960)) {
    if (rfBind18169 === "inside") {
      let rfBind22543 = borderSideToConfig(rfBind18170);
      rfBind22543 && (rfBind15977.inside = rfBind22543);
      continue;
    }
    let rfBind19284 = normalizeBorderEdgeKey(rfBind18169);
    if (!rfBind19284) continue;
    let rfBind19285 = borderSideToConfig(rfBind18170);
    rfBind19285 && (rfBind15977[rfBind19284] = rfBind19285);
  }
  return Object.keys(rfBind15977).length > 0 ? rfBind15977 : undefined;
}
export function borderSidePartialFromEdge(rfIn6282: unknown) {
  if (!rfIn6282) return;
  let rfBind16389 = {};
  if (
    (rfIn6282.style !== undefined && (rfBind16389.style = rfIn6282.style),
    rfIn6282.weight !== undefined && (rfBind16389.weight = rfIn6282.weight),
    rfIn6282.color !== undefined)
  ) {
    let rfBind22835 = cloneWorkbookColor(rfIn6282.color);
    rfBind22835 && (rfBind16389.color = rfBind22835);
  }
  return Object.keys(rfBind16389).length > 0 ? rfBind16389 : undefined;
}
export function borderSideFromPartial(rfIn8764: unknown) {
  if (!rfIn8764) return;
  let rfBind19286 = new BorderSide();
  return (
    (rfBind19286.style = rfIn8764.style),
    (rfBind19286.weight = rfIn8764.weight),
    (rfBind19286.color = rfIn8764.color ? rfIn8764.color.clone() : undefined),
    rfBind19286
  );
}
export function borderSideSnapshot(rfIn9993: unknown) {
  if (rfIn9993)
    return {
      style: rfIn9993.style,
      color: rfIn9993.color ? rfIn9993.color.clone() : undefined,
      weight: rfIn9993.weight,
    };
}
export function parseHorizontalAlignment(rfIn4048: unknown) {
  switch (rfIn4048.toLowerCase()) {
    case "left":
      return horizontalAlignment.left;
    case "center":
      return horizontalAlignment.center;
    case "right":
      return horizontalAlignment.right;
    case "fill":
      return horizontalAlignment.fill;
    case "justify":
      return horizontalAlignment.justify;
    case "centeracrossselection":
      return horizontalAlignment.centerAcrossSelection;
    case "distributed":
      return horizontalAlignment.distributed;
    case "general":
      return horizontalAlignment.general;
    default:
      return;
  }
}
export function requireHorizontalAlignment(rfIn10608: unknown) {
  let rfBind21098 = parseHorizontalAlignment(String(rfIn10608));
  if (!rfBind21098)
    throw Error(`Unsupported horizontal alignment "${rfIn10608}".`);
  return rfBind21098;
}
export function horizontalAlignmentToName(rfIn4364: unknown) {
  switch (rfIn4364) {
    case horizontalAlignment.left:
      return "left";
    case horizontalAlignment.center:
      return "center";
    case horizontalAlignment.right:
      return "right";
    case horizontalAlignment.fill:
      return "fill";
    case horizontalAlignment.justify:
      return "justify";
    case horizontalAlignment.centerAcrossSelection:
      return "centerAcrossSelection";
    case horizontalAlignment.distributed:
      return "distributed";
    case horizontalAlignment.general:
    default:
      return "general";
  }
}
export function parseVerticalAlignment(rfIn7756: unknown) {
  switch (rfIn7756.toLowerCase()) {
    case "top":
      return "top";
    case "center":
    case "middle":
      return "middle";
    case "bottom":
      return "bottom";
    default:
      return;
  }
}
export function requireVerticalAlignment(rfIn10663: unknown) {
  let rfBind21165 = parseVerticalAlignment(String(rfIn10663));
  if (!rfBind21165)
    throw Error(`Unsupported vertical alignment "${rfIn10663}".`);
  return rfBind21165;
}
export function verticalAlignmentToCss(rfIn9489: unknown) {
  switch (rfIn9489) {
    case "top":
      return "top";
    case "middle":
      return "center";
    case "bottom":
      return "bottom";
  }
}
export function borderPresetEdges(rfIn4473: unknown) {
  switch (rfIn4473) {
    case "outside":
      return ["top", "bottom", "left", "right"];
    case "inside":
      return ["insideHorizontal", "insideVertical"];
    case "all":
      return [
        "top",
        "bottom",
        "left",
        "right",
        "insideHorizontal",
        "insideVertical",
      ];
    case "doubleBottom":
      return ["bottom"];
    default:
      return [];
  }
}
export function normalizeBorderEdgeKey(rfIn3365: unknown) {
  switch (rfIn3365.trim().toLowerCase()) {
    case "top":
    case "edgetop":
      return "top";
    case "bottom":
    case "edgebottom":
      return "bottom";
    case "left":
    case "edgeleft":
      return "left";
    case "right":
    case "edgeright":
      return "right";
    case "insidehorizontal":
      return "insideHorizontal";
    case "insidevertical":
      return "insideVertical";
    case "diagonalup":
      return "diagonalUp";
    case "diagonaldown":
      return "diagonalDown";
    default:
      return;
  }
}
export function fillSolidColorFromFill(props: unknown) {
  let rfBind15521 = props.toProto();
  if (!rfBind15521) return;
  if (rfBind15521.color)
    return new WorkbookColor({
      type: "proto",
      proto: rfBind15521.color,
    });
  if (rfBind15521.pattern?.color)
    return new WorkbookColor({
      type: "proto",
      proto: rfBind15521.pattern.color,
    });
  let rfBind15522 =
    rfBind15521.gradientStops?.[rfBind15521.gradientStops.length - 1];
  if (rfBind15522?.color)
    return new WorkbookColor({
      type: "proto",
      proto: rfBind15522.color,
    });
}
