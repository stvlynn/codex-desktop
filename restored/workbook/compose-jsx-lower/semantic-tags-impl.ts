// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation JSX ul/ol/li/img/hr lowers (legacy MOe/XOe/YOe).
// Stage-3 wave-115. Binding154 prop allowlists inlined (no ESM init).

import { cjlH } from "./boundary-hooks";
import { lowerInlineTextChildren } from "../compose-inline-text";
import { isMathInline, isPlainRunList } from "../detached-text";
import { parseShapeUtilityClasses } from "../shape-utility";
import {
  workbookBinding1501 as createTextElement,
  workbookBinding1502 as createRuleElement,
  workbookBinding1505 as createImageElement,
} from "../compose-dsl";

const PRESENTATION_JSX_ELEMENT = Symbol.for(
  "@oai/granola/presentation-jsx.element",
);
const PRESENTATION_JSX_FRAGMENT = Symbol.for(
  "@oai/granola/presentation-jsx.fragment",
);

const DEFAULT_LIST_TEXT_STYLE = {
  fontSize: 14,
  lineSpacing: 1.3,
} as const;

const PARAGRAPH_PROP_KEYS = new Set([
  "runs",
  "bulletCharacter",
  "marginLeft",
  "indent",
  "spaceBefore",
  "spaceAfter",
  "styleId",
  "paragraphStyle",
]);

const LIST_ITEM_PROP_KEYS = new Set([
  ...PARAGRAPH_PROP_KEYS,
  "children",
  "className",
  "textStyle",
]);

const LIST_TAG_PROP_KEYS = new Set([
  "name",
  "id",
  "className",
  "children",
  "ref",
  "width",
  "height",
  "columnSpan",
  "rowSpan",
  "style",
  "transform",
  "bulletCharacter",
  "marginLeft",
  "indent",
  "spaceBefore",
  "spaceAfter",
  "styleId",
  "paragraphStyle",
]);

const IMG_PROP_KEYS = new Set([
  "name",
  "id",
  "className",
  "children",
  "ref",
  "width",
  "height",
  "columnSpan",
  "rowSpan",
  "src",
  "path",
  "dataUrl",
  "blob",
  "uri",
  "prompt",
  "contentType",
  "fit",
  "alt",
  "geometry",
  "borderRadius",
  "crop",
  "rotation",
  "flipHorizontal",
  "flipVertical",
  "lockAspectRatio",
]);

const HR_PROP_KEYS = new Set([
  "name",
  "id",
  "children",
  "ref",
  "width",
  "height",
  "columnSpan",
  "rowSpan",
  "stroke",
  "opacity",
  "weight",
]);

void cjlH;
void lowerInlineTextChildren;
void isMathInline;
void isPlainRunList;
void parseShapeUtilityClasses;
void createTextElement;
void createRuleElement;
void createImageElement;
void PRESENTATION_JSX_ELEMENT;
void PRESENTATION_JSX_FRAGMENT;
void DEFAULT_LIST_TEXT_STYLE;
void PARAGRAPH_PROP_KEYS;
void LIST_ITEM_PROP_KEYS;
void LIST_TAG_PROP_KEYS;
void IMG_PROP_KEYS;
void HR_PROP_KEYS;

export function isPresentationJsxElement(cjlIn11745: any) {
  return (
    typeof cjlIn11745 == "object" &&
    !!cjlIn11745 &&
    "$$type" in cjlIn11745 &&
    cjlIn11745.$$type === PRESENTATION_JSX_ELEMENT
  );
}
export function lowerListChildren(
  cjlIn2406: any,
  cjlIn2407: any,
  cjlIn2408: any,
  cjlIn2409: any,
) {
  let cjlBind9626 = flattenJsxFragments(cjlIn2407, cjlIn2409).filter(
      (item) => !cjlIn2409.isFormattingWhitespace(item),
    ),
    cjlBind9627 = [],
    cjlBind9628 = pickParagraphProps(cjlIn2408);
  return (
    cjlBind9626.forEach((item, index) => {
      if (!isPresentationJsxElement(item) || item.type !== "li")
        throw Error(`<${cjlIn2406}> only accepts <li> children.`);
      assertAllowedProps("li", item.props, LIST_ITEM_PROP_KEYS);
      let cjlBind11153 = paragraphsFromChildren(
          cjlIn2409.toChildArray(item.props.children),
          {
            contextTag: "<li>",
          },
          cjlIn2409,
        ),
        cjlBind11154 = mergeParagraphOptions(
          cjlBind9628,
          pickParagraphProps(item.props),
        ),
        cjlBind11155 =
          item.props.bulletCharacter ??
          cjlIn2408.bulletCharacter ??
          (cjlIn2406 === "ul" ? "•" : undefined);
      (cjlIn2406 === "ol"
        ? prefixOrderedRuns(cjlBind11153, index + 1)
        : cjlBind11153
      ).forEach((_item, _index) => {
        let cjlBind19396 =
          cjlIn2406 === "ul"
            ? applyParagraphOptions(_item, {
                ...cjlBind11154,
                bulletCharacter:
                  _index === 0 ? cjlBind11155 : cjlBind11154.bulletCharacter,
              })
            : applyParagraphOptions(_item, cjlBind11154);
        cjlBind9627.push(cjlBind19396);
      });
    }),
    cjlBind9627
  );
}
export function paragraphsFromChildren(
  cjlIn3311: any,
  cjlIn3312: any,
  cjlIn3313: any,
) {
  let cjlBind11598 = flattenJsxFragments(cjlIn3311, cjlIn3313),
    cjlBind11599 = cjlBind11598.filter(
      (item) => isPresentationJsxElement(item) && item.type === "paragraph",
    );
  if (cjlBind11599.length > 0) {
    if (
      cjlBind11598.some(
        (item) =>
          !(
            (isPresentationJsxElement(item) && item.type === "paragraph") ||
            cjlIn3313.isFormattingWhitespace(item)
          ),
      )
    )
      throw Error(
        `${cjlIn3312.contextTag} cannot mix raw text or <run> siblings with explicit <paragraph> children.`,
      );
    return cjlBind11599.map((item) =>
      applyParagraphOptions(
        lowerParagraphElement(item, cjlIn3313),
        cjlIn3312.paragraphOptions,
      ),
    );
  }
  return lowerInlineTextChildren(
    cjlBind11598,
    cjlIn3312.contextTag,
    cjlIn3313,
  ).map((item) =>
    applyParagraphOptions(
      item.runs.length > 0 ? item.runs : [""],
      cjlIn3312.paragraphOptions,
    ),
  );
}
export function lowerParagraphElement(cjlIn1819: any, cjlIn1820: any) {
  let cjlBind8351 = cjlIn1819.props,
    cjlBind8352 = [],
    cjlBind8353 = cjlBind8351.runs;
  flattenJsxFragments(
    cjlIn1820.toChildArray(cjlBind8351.children),
    cjlIn1820,
  ).forEach((item) => {
    if (
      !(
        item == null ||
        typeof item == "boolean" ||
        cjlIn1820.isFormattingWhitespace(item)
      )
    ) {
      if (typeof item == "string" || typeof item == "number") {
        cjlBind8352.push(item);
        return;
      }
      if (!isPresentationJsxElement(item) || item.type !== "run")
        throw Error("<paragraph> only accepts raw text, <run>, and fragments.");
      cjlBind8352.push(cjlIn1820.lowerRun(item));
    }
  });
  let cjlBind8354 = pickParagraphProps(cjlBind8351);
  if (cjlBind8353 !== undefined) {
    if (!isPlainRunList(cjlBind8353))
      throw Error("<paragraph> `runs` must be a paragraph runs array.");
    if (cjlBind8352.length > 0)
      throw Error(
        "<paragraph> accepts runs either as the `runs` prop or as children, not both.",
      );
    let cjlBind15407 = cjlBind8353.length > 0 ? cjlBind8353 : [""];
    return Object.keys(cjlBind8354).length === 0
      ? cjlBind15407
      : {
          ...cjlBind8354,
          runs: cjlBind15407,
        };
  }
  let cjlBind8355 = cjlBind8352.length > 0 ? cjlBind8352 : [""];
  return Object.keys(cjlBind8354).length === 0
    ? cjlBind8355
    : {
        ...cjlBind8354,
        runs: cjlBind8355,
      };
}
export function flattenJsxFragments(cjlIn5917: any, cjlIn5918: any) {
  let cjlBind15913 = [];
  return (
    cjlIn5917.forEach((item) => {
      if (Array.isArray(item)) {
        cjlBind15913.push(...flattenJsxFragments(item, cjlIn5918));
        return;
      }
      if (
        isPresentationJsxElement(item) &&
        item.type === PRESENTATION_JSX_FRAGMENT
      ) {
        cjlBind15913.push(
          ...flattenJsxFragments(
            cjlIn5918.toChildArray(item.props.children),
            cjlIn5918,
          ),
        );
        return;
      }
      cjlBind15913.push(item);
    }),
    cjlBind15913
  );
}
export function prefixOrderedRuns(cjlIn11597: any, cjlIn11598: any) {
  let cjlBind22000 = `${cjlIn11598}. `;
  return cjlIn11597.map((item, index) =>
    index === 0 ? prefixFirstRun(item, cjlBind22000) : item,
  );
}
export function prefixFirstRun(cjlIn2710: any, cjlIn2711: any) {
  if (Array.isArray(cjlIn2710)) {
    if (cjlIn2710.length === 0) return [cjlIn2711];
    let [cjlBind16371, ...cjlBind16372] = cjlIn2710;
    return cjlBind16371 === undefined
      ? [cjlIn2711, ...cjlBind16372]
      : typeof cjlBind16371 == "string" || typeof cjlBind16371 == "number"
        ? [`${cjlIn2711}${String(cjlBind16371)}`, ...cjlBind16372]
        : isMathInline(cjlBind16371)
          ? [cjlIn2711, cjlBind16371, ...cjlBind16372]
          : [
              {
                ...cjlBind16371,
                run: `${cjlIn2711}${cjlBind16371.run}`,
              },
              ...cjlBind16372,
            ];
  }
  let cjlBind10294 = cjlIn2710.runs ?? [];
  if (cjlBind10294.length === 0)
    return {
      ...cjlIn2710,
      runs: [cjlIn2711],
    };
  let [cjlBind10295, ...cjlBind10296] = cjlBind10294;
  if (cjlBind10295 === undefined)
    return {
      ...cjlIn2710,
      runs: [cjlIn2711, ...cjlBind10296],
    };
  let cjlBind10297 =
    typeof cjlBind10295 == "string" || typeof cjlBind10295 == "number"
      ? [`${cjlIn2711}${String(cjlBind10295)}`]
      : isMathInline(cjlBind10295)
        ? [cjlIn2711, cjlBind10295]
        : [
            {
              ...cjlBind10295,
              run: `${cjlIn2711}${cjlBind10295.run}`,
            },
          ];
  return {
    ...cjlIn2710,
    runs: [...cjlBind10297, ...cjlBind10296],
  };
}
export function applyParagraphOptions(cjlIn6148: any, cjlIn6149: any) {
  return !cjlIn6149 || Object.keys(cjlIn6149).length === 0
    ? cjlIn6148
    : Array.isArray(cjlIn6148)
      ? {
          ...cjlIn6149,
          runs: cjlIn6148.length > 0 ? cjlIn6148 : [""],
        }
      : {
          ...cjlIn6149,
          ...cjlIn6148,
          paragraphStyle: mergeParagraphStyle(
            cjlIn6149.paragraphStyle,
            cjlIn6148.paragraphStyle,
          ),
          runs: cjlIn6148.runs ?? [""],
        };
}
export function mergeParagraphOptions(cjlIn11251: any, cjlIn11252: any) {
  return {
    ...cjlIn11251,
    ...cjlIn11252,
    paragraphStyle: mergeParagraphStyle(
      cjlIn11251.paragraphStyle,
      cjlIn11252.paragraphStyle,
    ),
  };
}
export function mergeParagraphStyle(cjlIn10352: any, cjlIn10353: any) {
  if (!(cjlIn10352 === undefined && cjlIn10353 === undefined))
    return {
      ...cjlIn10352,
      ...cjlIn10353,
      tabStops: cjlIn10353?.tabStops ?? cjlIn10352?.tabStops ?? [],
    };
}
export function pickParagraphProps(cjlIn9098: any) {
  let cjlBind19686 = {};
  return (
    Object.entries(cjlIn9098).forEach(([cjlIn12257, cjlIn12258]) => {
      cjlIn12257 === "runs" ||
        !PARAGRAPH_PROP_KEYS.has(cjlIn12257) ||
        cjlIn12258 === undefined ||
        (cjlBind19686[cjlIn12257] = cjlIn12258);
    }),
    cjlBind19686
  );
}
export function assertAllowedProps(
  cjlIn10003: any,
  cjlIn10004: any,
  cjlIn10005: any,
) {
  Object.keys(cjlIn10004).forEach((item) => {
    if (!cjlIn10005.has(item))
      throw Error(`<${cjlIn10003}> does not support the \`${item}\` prop.`);
  });
}
export function lowerListTag(cjlIn2464: any, cjlIn2465: any, cjlIn2466: any) {
  assertAllowedProps(cjlIn2464, cjlIn2465.props, LIST_TAG_PROP_KEYS);
  let cjlBind9771 = createTextElement(
    lowerListChildren(
      cjlIn2464,
      cjlIn2466.toChildArray(cjlIn2465.props.children),
      cjlIn2465.props,
      {
        lowerRun: cjlIn2466.lowerRun,
        toChildArray: cjlIn2466.toChildArray,
        isFormattingWhitespace: cjlIn2466.isFormattingWhitespace,
      },
    ),
    {
      name: elementName(cjlIn2465.props),
      width: optionalSize(cjlIn2465.props.width, "width") ?? "fill",
      height: optionalSize(cjlIn2465.props.height, "height"),
      columnSpan: optionalNumber(cjlIn2465.props.columnSpan, "columnSpan"),
      rowSpan: optionalNumber(cjlIn2465.props.rowSpan, "rowSpan"),
      style: cjlH.bh700(
        `<${cjlIn2464}>`,
        DEFAULT_LIST_TEXT_STYLE,
        coerceTextStyle(cjlIn2465.props.style),
        optionalString(
          cjlIn2465.props.className,
          `\`<${cjlIn2464}> className\``,
        ),
      ),
      transform:
        coerceTransform(cjlIn2465.props.transform, cjlIn2464) ?? "none",
    },
  );
  return (
    cjlIn2466.registerRef(
      cjlBind9771,
      cjlIn2466.readRef(cjlIn2465.props.ref, cjlIn2464),
      cjlIn2464,
    ),
    cjlBind9771
  );
}
export function lowerImgTag(cjlIn1652: any, cjlIn1653: any) {
  assertAllowedProps("img", cjlIn1652.props, IMG_PROP_KEYS);
  assertLeafTag("img", cjlIn1652.props.children, cjlIn1653);
  let cjlBind7896 = optionalString(cjlIn1652.props.className, "`className`"),
    cjlBind7897 = cjlBind7896 ? parseShapeUtilityClasses(cjlBind7896) : null,
    cjlBind7898 = createImageElement({
      ...resolveImgSourceProps(cjlIn1652.props, "img"),
      name: elementName(cjlIn1652.props),
      width: optionalSize(cjlIn1652.props.width, "width") ?? "fill",
      height: optionalSize(cjlIn1652.props.height, "height"),
      columnSpan: optionalNumber(cjlIn1652.props.columnSpan, "columnSpan"),
      rowSpan: optionalNumber(cjlIn1652.props.rowSpan, "rowSpan"),
      contentType: optionalString(
        cjlIn1652.props.contentType,
        "<img> contentType",
      ),
      fit: cjlIn1652.props.fit,
      alt: optionalString(cjlIn1652.props.alt, "<img> alt"),
      geometry: cjlIn1652.props.geometry,
      borderRadius: cjlIn1652.props.borderRadius ?? cjlBind7897?.borderRadius,
      crop: cjlIn1652.props.crop,
      rotation: optionalNumber(cjlIn1652.props.rotation, "rotation"),
      flipHorizontal: optionalBoolean(
        cjlIn1652.props.flipHorizontal,
        "flipHorizontal",
      ),
      flipVertical: optionalBoolean(
        cjlIn1652.props.flipVertical,
        "flipVertical",
      ),
      lockAspectRatio: optionalBoolean(
        cjlIn1652.props.lockAspectRatio,
        "lockAspectRatio",
      ),
    });
  return (
    cjlIn1653.registerRef(
      cjlBind7898,
      cjlIn1653.readRef(cjlIn1652.props.ref, "img"),
      "img",
    ),
    cjlBind7898
  );
}
export function lowerHrTag(cjlIn3662: any, cjlIn3663: any) {
  assertAllowedProps("hr", cjlIn3662.props, HR_PROP_KEYS);
  assertLeafTag("hr", cjlIn3662.props.children, cjlIn3663);
  let cjlBind12252 = createRuleElement({
    name: elementName(cjlIn3662.props),
    width: optionalSize(cjlIn3662.props.width, "width") ?? "fill",
    height: optionalSize(cjlIn3662.props.height, "height"),
    columnSpan: optionalNumber(cjlIn3662.props.columnSpan, "columnSpan"),
    rowSpan: optionalNumber(cjlIn3662.props.rowSpan, "rowSpan"),
    stroke: cjlIn3662.props.stroke ?? "#D7DEE7",
    opacity: optionalNumber(cjlIn3662.props.opacity, "opacity"),
    weight: optionalNumber(cjlIn3662.props.weight, "weight"),
  });
  return (
    cjlIn3663.registerRef(
      cjlBind12252,
      cjlIn3663.readRef(cjlIn3662.props.ref, "hr"),
      "hr",
    ),
    cjlBind12252
  );
}
export function resolveImgSourceProps(cjlIn2428: any, cjlIn2429: any) {
  let cjlBind9659 = ["path", "dataUrl", "blob", "uri", "prompt"].filter(
    (item) => cjlIn2428[item] !== undefined,
  );
  if (cjlIn2428.src !== undefined && cjlBind9659.length > 0)
    throw Error(
      `<${cjlIn2429}> cannot combine \`src\` with explicit image source props.`,
    );
  if (cjlIn2428.src !== undefined) {
    let cjlBind16777 = cjlIn2428.src;
    if (typeof cjlBind16777 != "string" || cjlBind16777.trim().length === 0)
      throw Error(`<${cjlIn2429}> src must be a non-empty string.`);
    return cjlBind16777.startsWith("data:")
      ? {
          dataUrl: cjlBind16777,
        }
      : /^https?:\/\//i.test(cjlBind16777)
        ? {
            uri: cjlBind16777,
          }
        : {
            path: cjlBind16777,
          };
  }
  if (cjlBind9659.length !== 1)
    throw Error(
      `<${cjlIn2429}> requires exactly one of \`src\`, \`path\`, \`dataUrl\`, \`blob\`, \`uri\`, or \`prompt\`.`,
    );
  let cjlBind9660 = cjlBind9659[0];
  return cjlBind9660
    ? {
        [cjlBind9660]: cjlIn2428[cjlBind9660],
      }
    : {};
}
export function assertLeafTag(cjlIn7599: any, cjlIn7600: any, cjlIn7601: any) {
  if (
    cjlIn7601
      .toChildArray(cjlIn7600)
      .filter((item) => !cjlIn7601.isFormattingWhitespace(item))
      .some((item) => item != null && typeof item != "boolean")
  )
    throw Error(`<${cjlIn7599}> does not accept children.`);
}
export function elementName(cjlIn8148: any) {
  let cjlBind18650 = cjlIn8148.name,
    cjlBind18651 = cjlIn8148.id,
    cjlBind18652 =
      typeof cjlBind18650 == "string" && cjlBind18650.trim().length > 0
        ? cjlBind18650
        : cjlBind18651;
  if (typeof cjlBind18652 != "string") return;
  let cjlBind18653 = cjlBind18652.trim();
  return cjlBind18653.length > 0 ? cjlBind18653 : undefined;
}
export function coerceTextStyle(cjlIn6138: any) {
  if (cjlIn6138 !== undefined) {
    if (typeof cjlIn6138 == "string") {
      let cjlBind22549 = cjlIn6138.trim();
      return cjlBind22549.length > 0 ? cjlBind22549 : undefined;
    }
    if (typeof cjlIn6138 != "object" || !cjlIn6138 || Array.isArray(cjlIn6138))
      throw Error("Text style must be a style name string or style object.");
    return cjlIn6138;
  }
}
export function coerceTransform(cjlIn8310: any, cjlIn8311: any) {
  if (cjlIn8310 !== undefined) {
    if (
      cjlIn8310 === "none" ||
      cjlIn8310 === "uppercase" ||
      cjlIn8310 === "lowercase"
    )
      return cjlIn8310;
    throw Error(
      `<${cjlIn8311}> transform must be none, uppercase, or lowercase.`,
    );
  }
}
export function optionalString(cjlIn9035: any, cjlIn9036: any) {
  if (cjlIn9035 === undefined) return;
  if (typeof cjlIn9035 != "string")
    throw Error(`${cjlIn9036} must be a string.`);
  let cjlBind19601 = cjlIn9035.trim();
  return cjlBind19601.length > 0 ? cjlBind19601 : undefined;
}
export function optionalNumber(cjlIn9231: any, cjlIn9232: any) {
  if (cjlIn9231 !== undefined) {
    if (typeof cjlIn9231 != "number" || !Number.isFinite(cjlIn9231))
      throw Error(`${cjlIn9232} must be a finite number.`);
    return cjlIn9231;
  }
}
export function optionalBoolean(cjlIn10332: any, cjlIn10333: any) {
  if (cjlIn10332 !== undefined) {
    if (typeof cjlIn10332 != "boolean")
      throw Error(`${cjlIn10333} must be a boolean.`);
    return cjlIn10332;
  }
}
export function optionalSize(cjlIn7515: any, cjlIn7516: any) {
  if (cjlIn7515 !== undefined) {
    if (
      typeof cjlIn7515 == "number" ||
      typeof cjlIn7515 == "string" ||
      (typeof cjlIn7515 == "object" && cjlIn7515)
    )
      return cjlIn7515;
    throw Error(`${cjlIn7516} must be a valid layout size.`);
  }
}
