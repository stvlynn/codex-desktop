// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: serialize paragraph/run VOs back to config (legacy xue/Sue/h284–h285).

import { TextStyle } from "../text-style";
import { Line } from "../line";

export function colorConfigWithoutProto(dtIn11624: any) {
  if (
    dtIn11624 === undefined ||
    typeof dtIn11624 == "string" ||
    dtIn11624.type !== "proto"
  )
    return dtIn11624;
}

export function patternConfigWithoutProto(props: any) {
  if (props === undefined || props.type === "proto") return;
  let dtBind20355 = colorConfigWithoutProto(props.color);
  if (dtBind20355 !== undefined)
    return {
      type: props.type,
      color: dtBind20355,
    };
}

export function fillConfigWithoutProto(dtIn2919: any) {
  if (dtIn2919 !== undefined) {
    if (typeof dtIn2919 == "string") return dtIn2919;
    if (dtIn2919.type !== "proto") {
      if (dtIn2919.type === "none" || dtIn2919.type === "image")
        return dtIn2919;
      if (dtIn2919.type === "solid") {
        let dtBind20224 = colorConfigWithoutProto(dtIn2919.color);
        return dtBind20224 === undefined
          ? undefined
          : {
              type: "solid",
              color: dtBind20224,
              pattern: patternConfigWithoutProto(dtIn2919.pattern),
            };
      }
      return {
        type: "gradient",
        angleDeg: dtIn2919.angleDeg,
        gradientKind: dtIn2919.gradientKind,
        stops: dtIn2919.stops.flatMap((item) => {
          let dtBind21186 = colorConfigWithoutProto(item.color);
          return dtBind21186 === undefined
            ? []
            : [
                {
                  offset: item.offset,
                  color: dtBind21186,
                },
              ];
        }),
      };
    }
  }
}

export function outlineConfigWithoutProto(dtIn8448: any) {
  if (dtIn8448 === undefined) return;
  let dtBind18950 = new Line(dtIn8448).toConfig({
    preserveProto: false,
  });
  if (!(!dtBind18950 || "type" in dtBind18950))
    return {
      style: dtBind18950.style,
      width: dtBind18950.width,
      fill: fillConfigWithoutProto(dtBind18950.fill),
    };
}

export function hasParagraphChrome(props: any) {
  return (
    props.bulletCharacter !== undefined ||
    props.marginLeft !== undefined ||
    props.indent !== undefined ||
    props.spaceBefore !== undefined ||
    props.spaceAfter !== undefined ||
    props.styleId !== undefined ||
    props.paragraphStyle !== undefined
  );
}

export function runToConfig(props: any) {
  let dtBind7520 = props.textStyle,
    dtBind7521 = {},
    dtBind7522 = dtBind7520 ? new TextStyle(dtBind7520) : undefined;
  dtBind7520?.bold !== undefined && (dtBind7521.bold = dtBind7520.bold);
  dtBind7520?.italic !== undefined && (dtBind7521.italic = dtBind7520.italic);
  dtBind7520?.underline !== undefined &&
    (dtBind7521.underline = dtBind7520.underline);
  dtBind7522?.fontSize !== undefined &&
    (dtBind7521.fontSize = `${dtBind7522.fontSize}px`);
  dtBind7522?.typeface !== undefined &&
    (dtBind7521.typeface = dtBind7522.typeface);
  let dtBind7523 = fillConfigWithoutProto(
    dtBind7522?.fill?.toConfig({
      preserveProto: false,
    }),
  );
  dtBind7523 !== undefined && (dtBind7521.fill = dtBind7523);
  let dtBind7524 = colorConfigWithoutProto(dtBind7522?.highlight?.toConfig());
  dtBind7524 !== undefined && (dtBind7521.highlight = dtBind7524);
  let dtBind7525 = outlineConfigWithoutProto(
    dtBind7522?.outline?.toConfig({
      preserveProto: false,
    }),
  );
  dtBind7525 !== undefined && (dtBind7521.outline = dtBind7525);
  dtBind7520?.shadow !== undefined && (dtBind7521.shadow = "shadow");
  let dtBind7526 = Object.keys(dtBind7521).length > 0,
    dtBind7527 = props.hyperlink !== undefined;
  return !dtBind7526 && !dtBind7527
    ? (props.text ?? "")
    : {
        run: props.text ?? "",
        textStyle: dtBind7526 ? dtBind7521 : undefined,
        link: dtBind7527
          ? {
              uri: props.hyperlink?.uri ?? "",
              isExternal: props.hyperlink?.isExternal ?? false,
              action: props.hyperlink?.action ?? "",
            }
          : undefined,
      };
}

export function paragraphToConfig(dtIn3588: any) {
  let dtBind12107 = (dtIn3588.runs ?? []).map((item) => runToConfig(item));
  return hasParagraphChrome(dtIn3588)
    ? {
        runs: dtBind12107.length > 0 ? dtBind12107 : [""],
        bulletCharacter: dtIn3588.bulletCharacter,
        marginLeft: dtIn3588.marginLeft,
        indent: dtIn3588.indent,
        spaceBefore: dtIn3588.spaceBefore,
        spaceAfter: dtIn3588.spaceAfter,
        styleId: dtIn3588.styleId,
        paragraphStyle: dtIn3588.paragraphStyle
          ? {
              ...dtIn3588.paragraphStyle,
              tabStops: dtIn3588.paragraphStyle.tabStops ?? [],
            }
          : undefined,
      }
    : dtBind12107.length > 0
      ? dtBind12107
      : [""];
}
