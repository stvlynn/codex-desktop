// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: JSX semantic-tag textStyle/link coerce (legacy ROe cluster).
// Stage-3 wave-116.

import { cjlH } from "./boundary-hooks";

export function mergeClassNameTextStyle(cjlIn11572: any, cjlIn11573: any) {
  let cjlBind21964 = cjlIn11573
    ? cjlH.parseUtilityClassTextStyle(cjlIn11573)
    : null;
  return (
    mergeTextStyleBags(
      cjlBind21964 ? pickCssTextStyleFields(cjlBind21964) : undefined,
      cjlIn11572,
    ) ?? undefined
  );
}
export function mergeInlineTextStyle(cjlIn11420: any, cjlIn11421: any) {
  return {
    textStyle: mergeTextStyleBags(cjlIn11420.textStyle, cjlIn11421.textStyle),
    link: cjlIn11421.link ?? cjlIn11420.link,
  };
}
export function mergeRunOverride(cjlIn10669: any, cjlIn10670: any) {
  return {
    ...cjlIn10669,
    textStyle: mergeTextStyleBags(cjlIn10670.textStyle, cjlIn10669.textStyle),
    link: cjlIn10669.link ?? cjlIn10670.link,
  };
}
export function mergeTextStyleBags(cjlIn12513: any, cjlIn12514: any) {
  if (!(!cjlIn12513 && !cjlIn12514))
    return {
      ...(cjlIn12513 ?? {}),
      ...(cjlIn12514 ?? {}),
    };
}
export function semanticTagStyle(cjlIn2779: any, cjlIn2780: any) {
  let cjlBind10451 = mergeClassNameTextStyle(
      coerceInlineTextStyle(cjlIn2780.textStyle),
      requireNonEmptyString(cjlIn2780.className, `<${cjlIn2779}> className`),
    ),
    cjlBind10452 = coerceLinkConfig(cjlIn2779, cjlIn2780);
  return cjlIn2779 === "em"
    ? {
        textStyle: mergeTextStyleBags(cjlBind10451, {
          italic: true,
        }),
        link: cjlBind10452,
      }
    : cjlIn2779 === "u"
      ? {
          textStyle: mergeTextStyleBags(cjlBind10451, {
            underline:
              requireNonEmptyString(cjlIn2780.underline, "<u> underline") ??
              "sng",
          }),
          link: cjlBind10452,
        }
      : cjlIn2779 === "a"
        ? {
            textStyle: mergeTextStyleBags(cjlBind10451, {
              underline:
                requireNonEmptyString(cjlIn2780.underline, "<a> underline") ??
                "sng",
              color:
                cjlBind10451?.color ??
                coerceInlineTextStyle(cjlIn2780.textStyle)?.color ??
                "#2563EB",
            }),
            link: cjlBind10452 ?? {
              uri: requireHref(cjlIn2779, cjlIn2780),
              isExternal: true,
            },
          }
        : {
            textStyle: cjlBind10451,
            link: cjlBind10452,
          };
}
export function requireHref(cjlIn7874: any, cjlIn7875: any) {
  let cjlBind18355 = cjlIn7875.href;
  if (typeof cjlBind18355 != "string" || cjlBind18355.trim().length === 0)
    throw Error(
      `<${cjlIn7874}> requires a non-empty \`href\` string when \`link\` is not provided.`,
    );
  return cjlBind18355;
}
export function coerceLinkConfig(cjlIn8694: any, cjlIn8695: any) {
  let cjlBind19197 = cjlIn8695.link;
  if (cjlBind19197 !== undefined) {
    if (typeof cjlBind19197 != "object" || !cjlBind19197)
      throw Error(`<${cjlIn8694}> link must be a hyperlink config object.`);
    return cjlBind19197;
  }
}
export function coerceInlineTextStyle(cjlIn4912: any) {
  if (cjlIn4912 !== undefined) {
    if (typeof cjlIn4912 == "string") {
      if (!cjlH.isCssDeclarationText(cjlIn4912))
        throw Error(
          "Inline textStyle strings must use declaration syntax like `color: #2563EB; weight: 700`.",
        );
      return pickCssTextStyleFields(
        cjlH.parseTextStyleCssDeclarations(cjlIn4912),
      );
    }
    if (typeof cjlIn4912 != "object" || !cjlIn4912 || Array.isArray(cjlIn4912))
      throw Error("Inline textStyle must be an object.");
    return cjlIn4912;
  }
}
export function pickCssTextStyleFields(cjlIn2886: any) {
  if (!cjlIn2886) return;
  let cjlBind10736 = {};
  return (
    cjlIn2886.bold !== undefined && (cjlBind10736.bold = cjlIn2886.bold),
    cjlIn2886.italic !== undefined && (cjlBind10736.italic = cjlIn2886.italic),
    cjlIn2886.underline !== undefined &&
      (cjlBind10736.underline = cjlIn2886.underline),
    cjlIn2886.fontSize !== undefined &&
      (cjlBind10736.fontSize = `${cjlIn2886.fontSize}px`),
    cjlIn2886.typeface !== undefined &&
      (cjlBind10736.typeface = cjlIn2886.typeface),
    cjlIn2886.color === undefined
      ? cjlIn2886.fill !== undefined && (cjlBind10736.color = cjlIn2886.fill)
      : (cjlBind10736.color = cjlIn2886.color),
    cjlIn2886.highlight !== undefined &&
      (cjlBind10736.highlight = cjlIn2886.highlight),
    cjlIn2886.outline !== undefined &&
      (cjlBind10736.outline = cjlIn2886.outline),
    cjlIn2886.shadow !== undefined && (cjlBind10736.shadow = cjlIn2886.shadow),
    Object.keys(cjlBind10736).length > 0 ? cjlBind10736 : undefined
  );
}
export function requireNonEmptyString(cjlIn9033: any, cjlIn9034: any) {
  if (cjlIn9033 === undefined) return;
  if (typeof cjlIn9033 != "string")
    throw Error(`${cjlIn9034} must be a string.`);
  let cjlBind19600 = cjlIn9033.trim();
  return cjlBind19600.length > 0 ? cjlBind19600 : undefined;
}

export const ROe = semanticTagStyle;
export const AOe = mergeClassNameTextStyle;
export const zOe = requireHref;
export const BOe = coerceLinkConfig;
export const IOe = mergeRunOverride;
