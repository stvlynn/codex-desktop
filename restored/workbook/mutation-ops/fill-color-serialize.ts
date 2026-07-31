// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-41: CF/chart fill+color serializers (legacy vfe/yfe/bfe/xfe + color config).

import { tr as fillTypeEnum } from "../presentation-protobuf";
import { Fill } from "../fill";
import { WorkbookColor, PatternFill } from "../theme-color";
import type { LooseBag } from "./types";

export function serializeCfFill(opIn11075: unknown): unknown {
  if (opIn11075)
    return opIn11075 instanceof Fill
      ? (serializeFillConfig(opIn11075.toConfig()) ??
          serializeFillFromProto(opIn11075.toProto()))
      : serializeFillConfig(opIn11075);
}
export function serializeFillConfig(opIn1489: any): LooseBag | string | undefined {
  if (opIn1489) {
    if (typeof opIn1489 == "string") return opIn1489;
    switch (opIn1489.type) {
      case "none":
        return {
          type: "none",
        };
      case "solid": {
        let opBind18614 = serializeColorValue(opIn1489.color);
        if (!opBind18614) return;
        let opBind18615 = serializePatternFillConfig(opIn1489.pattern);
        return opBind18615
          ? {
              type: "solid",
              color: opBind18614,
              pattern: opBind18615,
            }
          : {
              type: "solid",
              color: opBind18614,
            };
      }
      case "gradient":
        return {
          type: "gradient",
          stops: opIn1489.stops
            .map((item) => {
              let opBind21293 = serializeColorValue(item.color);
              if (opBind21293)
                return {
                  offset: item.offset,
                  color: opBind21293,
                };
            })
            .filter((item) => item !== undefined),
          angleDeg: opIn1489.angleDeg,
          gradientKind: opIn1489.gradientKind,
        };
      case "image":
        return {
          type: "image",
          imageReference: opIn1489.imageReference,
          pictureEffects: opIn1489.pictureEffects,
          stretchFillRect: opIn1489.stretchFillRect,
          fillRect: opIn1489.fillRect,
          pathType: opIn1489.pathType,
          srcRect: opIn1489.srcRect,
        };
      case "proto":
        return serializeFillFromProto(opIn1489.proto);
    }
  }
}
export function serializeFillFromProto(opIn1488: unknown): LooseBag | undefined {
  if (!opIn1488) return;
  let opBind7457 = new Fill({
    type: "proto",
    proto: opIn1488,
  });
  if (
    opBind7457.type === fillTypeEnum.FILL_TYPE_PICTURE &&
    opBind7457.imageReference
  )
    return {
      type: "image",
      imageReference: opBind7457.imageReference,
      pictureEffects: opBind7457.pictureEffects,
      stretchFillRect: opBind7457.stretchFillRect,
      fillRect: opBind7457.fillRect,
      pathType: opBind7457.pathType,
      srcRect: opBind7457.srcRect,
    };
  if (opBind7457.type === fillTypeEnum.FILL_TYPE_GRADIENT)
    return {
      type: "gradient",
      stops: (opBind7457.gradientStops ?? [])
        .map((item) => {
          let opBind19022 = item.position,
            opBind19023 = serializeColorValue(
              item.color
                ? {
                    type: "proto",
                    proto: item.color,
                  }
                : undefined,
            );
          if (!(opBind19022 === undefined || !opBind19023))
            return {
              offset: opBind19022,
              color: opBind19023,
            };
        })
        .filter((item) => item !== undefined),
      angleDeg: opBind7457.angleDeg ?? undefined,
      gradientKind: opBind7457.gradientKind ?? undefined,
    };
  let opBind7458 = serializeColorValue(opBind7457.color),
    opBind7459 = opBind7457.pattern
      ? serializePatternFillConfig(opBind7457.pattern.toConfig())
      : undefined;
  if (opBind7458)
    return opBind7459
      ? {
          type: "solid",
          color: opBind7458,
          pattern: opBind7459,
        }
      : {
          type: "solid",
          color: opBind7458,
        };
  if (opBind7459)
    return {
      type: "solid",
      color: opBind7459.color,
      pattern: opBind7459,
    };
}
export function serializePatternFillConfig(opIn6984: any): LooseBag | undefined {
  if (!opIn6984) return;
  let opBind17338 =
    opIn6984.type === "proto"
      ? new PatternFill({
          type: "proto",
          proto: opIn6984.proto,
        }).toConfig()
      : opIn6984;
  if (!opBind17338 || opBind17338.type === "proto") return;
  let opBind17339 = serializeColorValue(opBind17338.color);
  if (opBind17339)
    return {
      type: opBind17338.type,
      color: opBind17339,
    };
}
export function serializeColorValue(opIn6860: unknown): unknown {
  if (!opIn6860) return;
  let opBind17172 = (
    opIn6860 instanceof WorkbookColor
      ? opIn6860
      : new WorkbookColor(opIn6860)
  ).toConfig();
  if (opBind17172) {
    if (
      typeof opBind17172 == "string" ||
      opBind17172.type === "rgb" ||
      opBind17172.type === "theme"
    )
      return opBind17172;
    if (opBind17172.proto)
      return serializeColorValue({
        type: "proto",
        proto: opBind17172.proto,
      });
  }
}
export function colorInputToConfig(opIn9632: unknown): unknown {
  if (opIn9632 === undefined) return;
  let opBind20169 = new WorkbookColor(
    opIn9632,
  ).toConfig();
  if (opBind20169)
    return typeof opBind20169 == "string"
      ? opBind20169
      : opBind20169.type === "proto"
        ? undefined
        : opBind20169;
}
