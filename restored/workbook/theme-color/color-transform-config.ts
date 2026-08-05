// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: color transform config ↔ proto helpers.

import {
  clampUnitInterval,
  normalizeUnitOrPercent,
} from "./color-unit-helpers";

export function normalizeColorTransformConfig(
  colorCfg2243: Record<string, number> | null | undefined,
) {
  if (
    !colorCfg2243 ||
    !Object.values(colorCfg2243).some((item) => item !== undefined)
  )
    return;
  let { opacity, lighten, darken } = colorCfg2243;
  if (
    typeof lighten == "number" &&
    lighten !== 0 &&
    typeof darken == "number" &&
    darken !== 0
  )
    throw Error(
      "Color transform cannot set both lighten and darken; pick one.",
    );
  let workbookBinding9292 = {};
  if (
    (typeof opacity == "number" &&
      (workbookBinding9292.alpha = Math.round(
        normalizeUnitOrPercent(opacity) * 1e5,
      )),
    typeof lighten == "number" && lighten !== 0)
  ) {
    let workbookBinding21673 = normalizeUnitOrPercent(lighten);
    workbookBinding9292.lumMod = Math.round((1 - workbookBinding21673) * 1e5);
    workbookBinding9292.lumOff = Math.round(workbookBinding21673 * 1e5);
  }
  typeof darken == "number" &&
    darken !== 0 &&
    (workbookBinding9292.lumMod = Math.round(
      (1 - normalizeUnitOrPercent(darken)) * 1e5,
    ));
  let workbookBinding9293 = workbookBinding9292.alpha !== undefined,
    workbookBinding9294 = workbookBinding9292.tint !== undefined,
    workbookBinding9295 = workbookBinding9292.shade !== undefined,
    workbookBinding9296 = workbookBinding9292.lumMod !== undefined,
    workbookBinding9297 = workbookBinding9292.lumOff !== undefined;
  return workbookBinding9293 ||
    workbookBinding9294 ||
    workbookBinding9295 ||
    workbookBinding9296 ||
    workbookBinding9297
    ? workbookBinding9292
    : undefined;
}
export function colorTransformToConfig(
  props: Record<string, number> | null | undefined,
) {
  if (!props) return;
  let workbookBinding7369 = props.alpha,
    workbookBinding7370 = props.tint,
    workbookBinding7371 = props.shade,
    workbookBinding7372 = props.lumMod,
    workbookBinding7373 = props.lumOff,
    workbookBinding7374 = {};
  if (
    (typeof workbookBinding7369 == "number" &&
      (workbookBinding7374.opacity = clampUnitInterval(
        workbookBinding7369 / 1e5,
      )),
    typeof workbookBinding7372 == "number" ||
      typeof workbookBinding7373 == "number")
  ) {
    let workbookBinding16754 =
        typeof workbookBinding7372 == "number"
          ? Math.min(Math.max(workbookBinding7372 / 1e5, 0), 1)
          : 1,
      workbookBinding16755 =
        typeof workbookBinding7373 == "number"
          ? Math.min(Math.max(workbookBinding7373 / 1e5, 0), 1)
          : 0;
    workbookBinding16755 > 0
      ? (workbookBinding7374.lighten =
          Math.round(workbookBinding16755 * 1e5) / 1e5)
      : workbookBinding16754 < 1 &&
        (workbookBinding7374.darken =
          Math.round((1 - workbookBinding16754) * 1e5) / 1e5);
  }
  if (typeof workbookBinding7370 == "number") {
    let workbookBinding15673 = Math.min(
      Math.max(workbookBinding7370 / 1e5, -1),
      1,
    );
    workbookBinding15673 > 0 && workbookBinding7374.lighten === undefined
      ? (workbookBinding7374.lighten =
          Math.round((1 - workbookBinding15673) * 1e5) / 1e5)
      : workbookBinding15673 === 0 && workbookBinding7374.lighten === undefined
        ? (workbookBinding7374.lighten = 1)
        : workbookBinding15673 < 0 &&
          workbookBinding7374.darken === undefined &&
          (workbookBinding7374.darken =
            Math.round(Math.abs(workbookBinding15673) * 1e5) / 1e5);
  }
  if (typeof workbookBinding7371 == "number") {
    let workbookBinding20384 = Math.min(
      Math.max(workbookBinding7371 / 1e5, 0),
      1,
    );
    workbookBinding20384 < 1 &&
      workbookBinding7374.darken === undefined &&
      (workbookBinding7374.darken =
        Math.round((1 - workbookBinding20384) * 1e5) / 1e5);
  }
  return Object.keys(workbookBinding7374).length > 0
    ? workbookBinding7374
    : undefined;
}
export function normalizeProtoTint(
  props: Record<string, number> | null | undefined,
) {
  if (!props) return;
  let workbookBinding16385 = props.tint;
  if (typeof workbookBinding16385 != "number" || workbookBinding16385 >= 0)
    return props;
  let workbookBinding16386 = {
    ...props,
  };
  return (
    delete workbookBinding16386.tint,
    workbookBinding16386.lumMod === undefined &&
      workbookBinding16386.shade === undefined &&
      (workbookBinding16386.lumMod = Math.min(
        Math.max(Math.round(1e5 + workbookBinding16385), 0),
        1e5,
      )),
    workbookBinding16386
  );
}
function parseOpacityToken(props) {
  if (!props) return;
  let workbookBinding16539 = props.trim();
  if (!workbookBinding16539) return;
  if (workbookBinding16539.endsWith("%")) {
    let workbookBinding22070 = Number(workbookBinding16539.slice(0, -1));
    return Number.isNaN(workbookBinding22070)
      ? undefined
      : clampUnitInterval(workbookBinding22070 / 100);
  }
  let workbookBinding16540 = Number(workbookBinding16539);
  if (!Number.isNaN(workbookBinding16540))
    return clampUnitInterval(
      workbookBinding16540 > 1 && workbookBinding16540 <= 100
        ? workbookBinding16540 / 100
        : workbookBinding16540,
    );
}
