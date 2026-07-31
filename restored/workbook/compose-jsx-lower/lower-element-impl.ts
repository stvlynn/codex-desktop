// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: lower compose JSX elements (legacy lower-compose-children–762).

import { parseShapeUtilityClasses } from "../shape-utility";
import {
  workbookBinding1501,
  workbookBinding1502,
  workbookBinding1503,
  workbookBinding1504,
  workbookBinding1505,
  workbookBinding1506,
  workbookBinding1507,
  workbookBinding1508,
  workbookBinding1509,
  workbookBinding1510,
  workbookBinding1511,
  workbookBinding1512,
  workbookBinding1513
} from "../compose-dsl";
import {
  isPresentationJsxElement, PRESENTATION_JSX_ELEMENT, PRESENTATION_JSX_FRAGMENT, lowerChartElement,
} from "../chart-jsx-lower";
import { cjlH } from "./boundary-hooks";
import {
  workbookBinding1574,
  workbookBinding1575,
  workbookBinding1576,
  workbookBinding1577,
  workbookBinding1578,
  workbookBinding1579,
  workbookBinding1580,
  workbookBinding1581,
  workbookBinding1582,
  workbookBinding1583,
  workbookBinding1584,
  workbookBinding1585,
  workbookBinding1586,
  workbookBinding1587,
  workbookBinding1588,
  $Y,
  workbookBinding1589
} from "./prop-allowlists";

void parseShapeUtilityClasses; void lowerChartElement; void cjlH;
void isPresentationJsxElement; void PRESENTATION_JSX_ELEMENT; void PRESENTATION_JSX_FRAGMENT;
void workbookBinding1501; void workbookBinding1502; void workbookBinding1503; void workbookBinding1504; void workbookBinding1505; void workbookBinding1506; void workbookBinding1507; void workbookBinding1508; void workbookBinding1509; void workbookBinding1510; void workbookBinding1511; void workbookBinding1512; void workbookBinding1513;
void workbookBinding1574; void workbookBinding1575; void workbookBinding1576; void workbookBinding1577; void workbookBinding1578; void workbookBinding1579; void workbookBinding1580; void workbookBinding1581; void workbookBinding1582; void workbookBinding1583; void workbookBinding1584; void workbookBinding1585; void workbookBinding1586; void workbookBinding1587; void workbookBinding1588; void $Y; void workbookBinding1589;

export function lowerComposeChildren(cjIn1354: any, cjIn1355: any, cjIn1356: any, cjIn1357: any, ) {
  let cjBind7108 = [];
  return (
    cjIn1354.forEach((item) => {
      if (Array.isArray(item)) {
        cjBind7108.push(
          ...lowerComposeChildren(
            item,
            cjIn1355,
            cjIn1356,
            cjIn1357,
          ),
        );
        return;
      }
      if (
        !(item == null || typeof item == "boolean" || isComposeFormattingWhitespace(item))
      ) {
        if (isAlreadyLowered(item)) {
          cjBind7108.push(item);
          return;
        }
        if (typeof item == "string" || typeof item == "number")
          throw Error(
            `${cjIn1357} only accepts compose elements. Wrap raw text with <paragraph> or <text-box>.`,
          );
        if (!isPresentationJsxElement(item))
          throw Error(
            `${cjIn1357} contains an unsupported JSX value.`,
          );
        if (item.type === PRESENTATION_JSX_FRAGMENT) {
          cjBind7108.push(
            ...lowerComposeChildren(
              toComposeChildArray(item.props.children),
              cjIn1355,
              cjIn1356,
              cjIn1357,
            ),
          );
          return;
        }
        if (item.type === "run")
          throw Error(
            `${cjIn1357} does not accept <${String(item.type)}> outside <paragraph> or <text-box>.`,
          );
        if (item.type === "slide")
          throw Error(
            "<slide> can only be used as the root passed to slide.compose.",
          );
        if (item.type === "background")
          throw Error("<background> can only be used inside <slide>.");
        cjBind7108.push(
          lowerComposeElement(item, cjIn1355, cjIn1356),
        );
      }
    }),
    cjBind7108
  );
}
export function lowerComposeElement(cjIn306: any, cjIn307: any, cjIn308: any, ) {
  if (typeof cjIn306.type != "string")
    throw Error("Unsupported JSX tag in presentation compose input.");
  let cjBind3549 = cjIn306.type,
    cjBind3550 = normalizeComposeProps(cjIn306.props, cjBind3549);
  if (cjlH.isSemanticTag(cjBind3549))
    return cjlH.lowerSemanticTag(cjIn306, {
      refsByNode: cjIn307,
      usedRefs: cjIn308,
      lowerElement: (cjIn16390) =>
        lowerComposeElement(
          cjIn16390,
          cjIn307,
          cjIn308,
        ),
      lowerRun: lowerRunElement,
      readRef: readComposeRef,
      registerRef: (
        cjIn15871,
        cjIn15872,
        cjIn15873,
      ) =>
        registerComposeRef(
          cjIn15871,
          cjIn15872,
          cjIn307,
          cjIn308,
          cjIn15873,
        ),
      toChildArray: toComposeChildArray,
      isFormattingWhitespace: isComposeFormattingWhitespace,
    });
  if (cjBind3549 === "row")
    return (
      assertAllowedComposeProps(
        cjBind3549,
        cjBind3550,
        workbookBinding1576,
      ),
      workbookBinding1508(
        omitComposeKeys(
          cjBind3549,
          stripClassName(cjBind3550),
          ["children", "id"],
        ),
        lowerComposeChildren(
          toComposeChildArray(cjBind3550.children),
          cjIn307,
          cjIn308,
          "<row>",
        ),
      )
    );
  if (cjBind3549 === "column")
    return (
      assertAllowedComposeProps(
        cjBind3549,
        cjBind3550,
        workbookBinding1577,
      ),
      workbookBinding1509(
        omitComposeKeys(
          cjBind3549,
          stripClassName(cjBind3550),
          ["children", "id"],
        ),
        lowerComposeChildren(
          toComposeChildArray(cjBind3550.children),
          cjIn307,
          cjIn308,
          "<column>",
        ),
      )
    );
  if (cjBind3549 === "layers" || cjBind3549 === "group")
    return (
      assertAllowedComposeProps(
        cjBind3549,
        cjBind3550,
        workbookBinding1578,
      ),
      workbookBinding1513(
        omitComposeKeys(
          cjBind3549,
          stripClassName(cjBind3550),
          ["children", "id"],
        ),
        lowerComposeChildren(
          toComposeChildArray(cjBind3550.children),
          cjIn307,
          cjIn308,
          `<${cjBind3549}>`,
        ),
      )
    );
  if (cjBind3549 === "grid")
    return (
      assertAllowedComposeProps(
        cjBind3549,
        cjBind3550,
        workbookBinding1579,
      ),
      workbookBinding1510(
        omitComposeKeys(
          cjBind3549,
          stripClassName(cjBind3550),
          ["children", "id"],
        ),
        lowerComposeChildren(
          toComposeChildArray(cjBind3550.children),
          cjIn307,
          cjIn308,
          "<grid>",
        ),
      )
    );
  if (
    cjBind3549 === "box" ||
    cjBind3549 === "panel" ||
    cjBind3549 === "card"
  ) {
    assertAllowedComposeProps(
      cjBind3549,
      cjBind3550,
      workbookBinding1580,
    );
    let cjBind9370 = readComposeRef(
        cjBind3550.ref,
        cjBind3549,
      ),
      cjBind9371 = lowerComposeChildren(
        toComposeChildArray(cjBind3550.children),
        cjIn307,
        cjIn308,
        `<${cjBind3549}>`,
      );
    if (cjBind9371.length > 1)
      throw Error(
        `<${cjBind3549}> accepts at most one child. Wrap multiple children with <column> or <row>.`,
      );
    let cjBind9372 = cjBind9371[0],
      cjBind9373 =
        cjBind3549 === "card"
          ? workbookBinding1512(
              omitComposeKeys(
                cjBind3549,
                {
                  ...applyClassNameStyle(
                    stripClassName(cjBind3550),
                    cjBind3549,
                  ),
                  materialize:
                    cjBind9370 === undefined ? undefined : true,
                },
                ["children", "ref", "className", "id"],
              ),
              cjBind9372,
            )
          : workbookBinding1511(
              omitComposeKeys(
                cjBind3549,
                {
                  ...applyClassNameStyle(
                    stripClassName(cjBind3550),
                    cjBind3549,
                  ),
                  materialize:
                    cjBind9370 === undefined ? undefined : true,
                },
                ["children", "ref", "className", "id"],
              ),
              cjBind9372,
            );
    return (
      registerComposeRef(
        cjBind9373,
        cjBind9370,
        cjIn307,
        cjIn308,
        cjBind3549,
      ),
      cjBind9373
    );
  }
  if (cjBind3549 === "text-box" || cjBind3549 === "text") {
    assertAllowedComposeProps(
      cjBind3549,
      cjBind3550,
      workbookBinding1581,
    );
    let cjBind18904 = workbookBinding1501(
      lowerTextChildren(
        toComposeChildArray(cjBind3550.children),
        `<${cjBind3549}>`,
      ),
      omitComposeKeys(
        cjBind3549,
        mergePosition(
          stripClassName(cjBind3550),
          cjBind3549,
        ),
        ["children", "ref", "className", "id"],
      ),
    );
    return (
      registerComposeRef(
        cjBind18904,
        readComposeRef(cjBind3550.ref, cjBind3549),
        cjIn307,
        cjIn308,
        cjBind3549,
      ),
      cjBind18904
    );
  }
  if (cjBind3549 === "paragraph") {
    assertAllowedComposeProps(
      cjBind3549,
      cjBind3550,
      workbookBinding1582,
    );
    let cjBind13986 = workbookBinding1501(
      lowerTextChildren([cjIn306], "<paragraph>"),
      omitComposeKeys(
        cjBind3549,
        mergePosition(
          stripClassName(cjBind3550),
          cjBind3549,
        ),
        [
          "children",
          "runs",
          "ref",
          "className",
          "id",
          "bulletCharacter",
          "marginLeft",
          "indent",
          "spaceBefore",
          "spaceAfter",
          "styleId",
          "paragraphStyle",
        ],
      ),
    );
    return (
      registerComposeRef(
        cjBind13986,
        readComposeRef(cjBind3550.ref, cjBind3549),
        cjIn307,
        cjIn308,
        cjBind3549,
      ),
      cjBind13986
    );
  }
  if (cjBind3549 === "shape") {
    assertAllowedComposeProps(
      cjBind3549,
      cjBind3550,
      workbookBinding1583,
    );
    assertLeafChildren(cjBind3549, cjBind3550.children);
    let cjBind20123 = workbookBinding1503(
      omitComposeKeys(
        cjBind3549,
        applyClassNameStyle(
          stripClassName(cjBind3550),
          cjBind3549,
        ),
        ["ref", "className", "id"],
      ),
    );
    return (
      registerComposeRef(
        cjBind20123,
        readComposeRef(cjBind3550.ref, cjBind3549),
        cjIn307,
        cjIn308,
        cjBind3549,
      ),
      cjBind20123
    );
  }
  if (cjBind3549 === "connector") {
    assertAllowedComposeProps(
      cjBind3549,
      cjBind3550,
      workbookBinding1584,
    );
    assertLeafChildren(cjBind3549, cjBind3550.children);
    let cjBind20710 = workbookBinding1504(
      omitComposeKeys(
        cjBind3549,
        stripClassName(cjBind3550),
        ["ref", "id"],
      ),
    );
    return (
      registerComposeRef(
        cjBind20710,
        readComposeRef(cjBind3550.ref, cjBind3549),
        cjIn307,
        cjIn308,
        cjBind3549,
      ),
      cjBind20710
    );
  }
  if (cjBind3549 === "image") {
    assertAllowedComposeProps(
      cjBind3549,
      cjBind3550,
      workbookBinding1585,
    );
    assertLeafChildren(cjBind3549, cjBind3550.children);
    let cjBind20268 = workbookBinding1505(
      omitComposeKeys(
        cjBind3549,
        lowerTableRows(stripClassName(cjBind3550), cjBind3549),
        ["ref", "id", "src"],
      ),
    );
    return (
      registerComposeRef(
        cjBind20268,
        readComposeRef(cjBind3550.ref, cjBind3549),
        cjIn307,
        cjIn308,
        cjBind3549,
      ),
      cjBind20268
    );
  }
  if (cjBind3549 === "table") {
    assertAllowedComposeProps(
      cjBind3549,
      cjBind3550,
      workbookBinding1586,
    );
    assertLeafChildren(cjBind3549, cjBind3550.children);
    let cjBind20711 = workbookBinding1506(
      omitComposeKeys(
        cjBind3549,
        stripClassName(cjBind3550),
        ["ref", "id"],
      ),
    );
    return (
      registerComposeRef(
        cjBind20711,
        readComposeRef(cjBind3550.ref, cjBind3549),
        cjIn307,
        cjIn308,
        cjBind3549,
      ),
      cjBind20711
    );
  }
  if (cjBind3549 === "chart") {
    let cjBind22085 = workbookBinding1507(
      lowerChartElement({
        ...cjIn306,
        props: cjBind3550,
      }),
    );
    return (
      registerComposeRef(
        cjBind22085,
        readComposeRef(cjBind3550.ref, cjBind3549),
        cjIn307,
        cjIn308,
        cjBind3549,
      ),
      cjBind22085
    );
  }
  if (cjBind3549 === "rule") {
    assertAllowedComposeProps(
      cjBind3549,
      cjBind3550,
      workbookBinding1587,
    );
    assertLeafChildren(cjBind3549, cjBind3550.children);
    let cjBind20712 = workbookBinding1502(
      omitComposeKeys(
        cjBind3549,
        stripClassName(cjBind3550),
        ["ref", "id"],
      ),
    );
    return (
      registerComposeRef(
        cjBind20712,
        readComposeRef(cjBind3550.ref, cjBind3549),
        cjIn307,
        cjIn308,
        cjBind3549,
      ),
      cjBind20712
    );
  }
  throw Error(`Unsupported presentation JSX tag <${cjBind3549}>.`);
}
export function lowerTextChildren(cjIn9677: any, cjIn9678: any = "<text-box>", ) {
  return cjlH.bh701(
    cjIn9677,
    {
      contextTag: cjIn9678,
    },
    {
      lowerRun: lowerRunElement,
      toChildArray: toComposeChildArray,
      isFormattingWhitespace: isComposeFormattingWhitespace,
    },
  );
}
export function lowerRunElement(cjIn8013: any) {
  assertAllowedComposeProps("run", cjIn8013.props, workbookBinding1588);
  let cjBind18501 = pickTextStyleProps(cjIn8013.props, [
      "children",
    ]),
    cjBind18502 = resolveImageSource(cjIn8013.props.children);
  if (cjBind18502 === undefined)
    throw Error("<run> requires text as children.");
  return {
    ...cjBind18501,
    run: cjBind18502,
  };
}
export function resolveImageSource(cjIn3269: any) {
  let cjBind11496 = "",
    cjBind11497 = false,
    cjBind11498 = (cjIn3892) => {
      if (
        !(cjIn3892 == null || typeof cjIn3892 == "boolean")
      ) {
        if (Array.isArray(cjIn3892)) {
          cjIn3892.forEach(cjBind11498);
          return;
        }
        if (
          typeof cjIn3892 == "string" ||
          typeof cjIn3892 == "number"
        ) {
          if (isComposeFormattingWhitespace(cjIn3892)) return;
          cjBind11496 += String(cjIn3892);
          cjBind11497 = true;
          return;
        }
        if (
          isPresentationJsxElement(cjIn3892) &&
          cjIn3892.type === PRESENTATION_JSX_FRAGMENT
        ) {
          cjBind11498(cjIn3892.props.children);
          return;
        }
        throw Error("<run> only accepts raw text and fragments.");
      }
    };
  return (
    cjBind11498(cjIn3269),
    cjBind11497 ? cjBind11496 : undefined
  );
}
export function normalizeComposeProps(cjIn1621: any, cjIn1622: any) {
  let cjBind7838 = cjIn1621.frame;
  if (cjBind7838 === undefined) return cjIn1621;
  if (
    typeof cjBind7838 != "object" ||
    !cjBind7838 ||
    Array.isArray(cjBind7838)
  )
    throw Error(`<${cjIn1622}> frame must be an object.`);
  let cjBind7839 = cjBind7838;
  Object.keys(cjBind7839).forEach((item) => {
    if (!$Y.has(item))
      throw Error(
        `<${cjIn1622}> frame does not support the \`${item}\` field.`,
      );
  });
  let cjBind7840 = {
    ...cjIn1621,
  };
  if (
    (delete cjBind7840.frame, cjBind7839.width !== undefined)
  ) {
    if (cjIn1621.width !== undefined)
      throw Error(
        `<${cjIn1622}> cannot combine \`frame.width\` with \`width\`.`,
      );
    cjBind7840.width = cjBind7839.width;
  }
  if (cjBind7839.height !== undefined) {
    if (cjIn1621.height !== undefined)
      throw Error(
        `<${cjIn1622}> cannot combine \`frame.height\` with \`height\`.`,
      );
    cjBind7840.height = cjBind7839.height;
  }
  let cjBind7841 = {};
  if (
    (["left", "top", "right", "bottom"].forEach((item) => {
      cjBind7839[item] !== undefined &&
        (cjBind7841[item] = cjBind7839[item]);
    }),
    Object.keys(cjBind7841).length > 0)
  ) {
    if (cjIn1621.position !== undefined)
      throw Error(
        `<${cjIn1622}> cannot combine frame position fields with \`position\`.`,
      );
    cjBind7840.position = cjBind7841;
  }
  return cjBind7840;
}
export function assertLeafChildren(cjIn8859: any, cjIn8860: any) {
  if (
    toComposeChildArray(cjIn8860)
      .filter((item) => !isComposeFormattingWhitespace(item))
      .some((item) => item != null && typeof item != "boolean")
  )
    throw Error(`<${cjIn8859}> does not accept children.`);
}
export function assertAllowedComposeProps(cjIn10013: any, cjIn10014: any, cjIn10015: any, ) {
  Object.keys(cjIn10014).forEach((item) => {
    if (!cjIn10015.has(item))
      throw Error(
        `<${cjIn10013}> does not support the \`${item}\` prop.`,
      );
  });
}
export function pickTextStyleProps(cjIn9442: any, cjIn9443: any) {
  let cjBind19957 = {};
  return (
    Object.entries(cjIn9442).forEach(
      ([cjIn13059, cjIn13060]) => {
        cjIn9443.includes(cjIn13059) ||
          cjIn13060 === undefined ||
          (cjBind19957[cjIn13059] = cjIn13060);
      },
    ),
    cjBind19957
  );
}
export function omitComposeKeys(cjIn10984: any, cjIn10985: any, cjIn10986: any, ) {
  let cjBind21513 = pickTextStyleProps(
    cjIn10985,
    cjIn10986,
  );
  return (
    !("width" in cjBind21513) &&
      workbookBinding1589.has(cjIn10984) &&
      (cjBind21513.width = "fill"),
    cjBind21513
  );
}
export function readComposeRef(cjIn7645: any, cjIn7646: any) {
  if (cjIn7645 !== undefined) {
    if (
      typeof cjIn7645 != "object" ||
      !cjIn7645 ||
      !("current" in cjIn7645)
    )
      throw Error(
        `<${cjIn7646}> ref must be a mutable ref object created by createRef().`,
      );
    return cjIn7645;
  }
}
export function registerComposeRef(cjIn6333: any, cjIn6334: any, cjIn6335: any, cjIn6336: any, cjIn6337: any, ) {
  if (cjIn6334) {
    if (!workbookBinding1575.has(cjIn6333.kind))
      throw Error(
        `<${cjIn6337}> does not materialize an element ref.`,
      );
    if (cjIn6336.has(cjIn6334))
      throw Error(
        "A JSX ref object can only be used once within a compose tree.",
      );
    cjIn6336.add(cjIn6334);
    cjIn6335.set(cjIn6333, cjIn6334);
  }
}
export function collectRefsByPath(cjIn5614: any, cjIn5615: any, cjIn5616: any, cjIn5617: any, ) {
  let cjBind15454 = cjIn5615.get(cjIn5614);
  if (
    (cjBind15454 &&
      cjIn5616.set(cjIn5617, cjBind15454),
    cjIn5614.kind === "panel")
  ) {
    cjIn5614.child &&
      collectRefsByPath(
        cjIn5614.child,
        cjIn5615,
        cjIn5616,
        isComposeNode(cjIn5617, 0),
      );
    return;
  }
  (cjIn5614.kind === "row" ||
    cjIn5614.kind === "column" ||
    cjIn5614.kind === "layers" ||
    cjIn5614.kind === "grid") &&
    cjIn5614.children.forEach((item, index) => {
      collectRefsByPath(
        item,
        cjIn5615,
        cjIn5616,
        isComposeNode(cjIn5617, index),
      );
    });
}
export function isComposeNode(cjIn15310: any, cjIn15311: any) {
  return `${cjIn15310}.${cjIn15311}`;
}
export function stripClassName(cjIn12306: any) {
  let cjBind22383 = isAbsolutePosition(cjIn12306);
  return cjBind22383 === undefined
    ? cjIn12306
    : {
        ...cjIn12306,
        name: cjBind22383,
      };
}
export function applyClassNameStyle(cjIn5560: any, cjIn5561: any) {
  let cjBind15363 = cjIn5560.className;
  if (
    typeof cjBind15363 != "string" ||
    cjBind15363.trim().length === 0
  )
    return cjIn5560;
  let cjBind15364 = parseShapeUtilityClasses(cjBind15363);
  return cjBind15364
    ? {
        ...cjIn5560,
        fill: cjIn5560.fill ?? cjBind15364.fill,
        borderRadius:
          cjIn5560.borderRadius ?? cjBind15364.borderRadius,
        shadow: cjIn5560.shadow ?? cjBind15364.shadow,
        name:
          isAbsolutePosition(cjIn5560) ??
          cjIn5560.name ??
          cjIn5561,
      }
    : cjIn5560;
}
export function mergePosition(cjIn9609: any, cjIn9610: any) {
  let cjBind20146 =
    typeof cjIn9609.className == "string"
      ? cjIn9609.className
      : undefined;
  return cjBind20146
    ? {
        ...cjIn9609,
        style: cjlH.bh700(
          `<${cjIn9610}>`,
          undefined,
          cjIn9609.style,
          cjBind20146,
        ),
      }
    : cjIn9609;
}
export function lowerTableRows(cjIn3317: any, cjIn3318: any) {
  if (cjIn3317.src === undefined) return cjIn3317;
  let cjBind11614 = cjIn3317.src;
  if (
    typeof cjBind11614 != "string" ||
    cjBind11614.trim().length === 0
  )
    throw Error(`<${cjIn3318}> src must be a non-empty string.`);
  if (
    cjIn3317.path !== undefined ||
    cjIn3317.dataUrl !== undefined ||
    cjIn3317.blob !== undefined ||
    cjIn3317.uri !== undefined ||
    cjIn3317.prompt !== undefined
  )
    throw Error(
      `<${cjIn3318}> cannot combine \`src\` with explicit image source props.`,
    );
  return cjBind11614.startsWith("data:")
    ? {
        ...cjIn3317,
        dataUrl: cjBind11614,
      }
    : /^https?:\/\//i.test(cjBind11614)
      ? {
          ...cjIn3317,
          uri: cjBind11614,
        }
      : {
          ...cjIn3317,
          path: cjBind11614,
        };
}
export function isAbsolutePosition(cjIn8519: any) {
  let cjBind19028 =
    typeof cjIn8519.name == "string" &&
    cjIn8519.name.trim().length > 0
      ? cjIn8519.name
      : cjIn8519.id;
  if (typeof cjBind19028 != "string") return;
  let cjBind19029 = cjBind19028.trim();
  return cjBind19029.length > 0 ? cjBind19029 : undefined;
}
export function toComposeChildArray(cjIn12747: any) {
  return cjIn12747 === undefined
    ? []
    : Array.isArray(cjIn12747)
      ? cjIn12747
      : [cjIn12747];
}
export function isAlreadyLowered(cjIn9925: any) {
  return (
    typeof cjIn9925 == "object" &&
    !!cjIn9925 &&
    "kind" in cjIn9925 &&
    typeof cjIn9925.kind == "string" &&
    workbookBinding1574.has(cjIn9925.kind)
  );
}
export function isComposeFormattingWhitespace(cjIn11575: any) {
  return (
    typeof cjIn11575 == "string" &&
    cjIn11575.trim().length === 0 &&
    /[\n\r\t]/.test(cjIn11575)
  );
}
