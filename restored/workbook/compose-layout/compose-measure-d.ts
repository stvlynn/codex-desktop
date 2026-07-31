// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: compose text metrics _G + Binding1421–1464.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, wr, br, j } from "../presentation-protobuf";
import {
  isMathInline,
  isPlainRunList,
  isParagraphPartial,
  normalizeParagraphInputs,
  ensureDetachedTextHelpersInit,
} from "../detached-text";
import { ensureTextStyleInit } from "../text-style";
import { ensureFillInit } from "../fill";
import { ensureWorkbookColorInit } from "../theme-color";
import { ensureLineInit } from "../line";
import { ensureTextElementAutofitInit } from "../text-element-autofit";
import {
  ensureWorkbookEt,
  ensureBinding412,
  ensureBinding739,
  getShapeElementClass,
  getWorkbookTt,
} from "./boundary-hooks";
import { composeLayout } from "./compose-bindings";
import { ensureCaseTransformInit } from "./case-transform";
import {
  mapRunsTextCase,
  mapParagraphTextCase,
  applyTextCase,
  mapTextCaseValue,
  isPlainRunListArray,
} from "./text-case";

import {
  TextStyle as workbookVt,
  coerceTextStyleCssOrValue as aae,
  applyTextStylePatch as workbookYt,
} from "../text-style";
import { computeAutoFitOuterSize as Bue } from "../text-element-autofit";

export const ensureComposeMeasureDInit = esmInit(() => {
  const workbookTt = getWorkbookTt();
  composeLayout.clBind1421 = (clIn9674, clIn9675) =>
    clIn9674.rows
      ? clIn9674.rows.length
      : clIn9675.length === 0
        ? 0
        : Math.max(...clIn9675.map((item) => item.row + item.rowSpan));
  composeLayout.clBind1422 = (clIn12193, clIn12194) =>
    clIn12193.rows
      ? [...clIn12193.rows]
      : Array.from(
          {
            length: clIn12194,
          },
          () => clIn12193.autoRows,
        );
  composeLayout.clBind1423 = (clIn1167, clIn1168) => {
    let clBind6658 = clIn1167.columns.length,
      clBind6659 = clIn1167.rows?.length,
      clBind6660 = new Set(),
      clBind6661 = [];
    return (
      clIn1168.forEach((item) => {
        let clBind7597 = item.node.columnSpan,
          clBind7598 = item.node.rowSpan;
        if (clBind7597 > clBind6658)
          throw Error(
            `Grid "${clIn1167.name ?? "(unnamed)"}" child "${item.node.name ?? "(unnamed)"}" cannot span ${clBind7597} columns when only ${clBind6658} exist.`,
          );
        let clBind7599 = clBind6658 - clBind7597,
          clBind7600 = false,
          clBind7601 =
            clBind6659 === undefined ? 1 / 0 : clBind6659 - clBind7598;
        for (
          let clBind13032 = 0;
          clBind13032 <= clBind7601 && !clBind7600;
          clBind13032 += 1
        )
          for (let clBind13985 = 0; clBind13985 <= clBind7599; clBind13985 += 1)
            if (
              composeLayout.clBind1424(
                clBind6660,
                clBind13032,
                clBind13985,
                clBind7598,
                clBind7597,
              )
            ) {
              composeLayout.clBind1425(
                clBind6660,
                clBind13032,
                clBind13985,
                clBind7598,
                clBind7597,
              );
              clBind6661.push({
                child: item,
                column: clBind13985,
                row: clBind13032,
                columnSpan: clBind7597,
                rowSpan: clBind7598,
              });
              clBind7600 = true;
              break;
            }
        if (!clBind7600)
          throw Error(
            `Grid "${clIn1167.name ?? "(unnamed)"}" could not place child "${item.node.name ?? "(unnamed)"}" within the available tracks.`,
          );
      }),
      clBind6661
    );
  };
  composeLayout.clBind1424 = (
    clIn9198,
    clIn9199,
    clIn9200,
    clIn9201,
    clIn9202,
  ) => {
    for (let clBind21473 = 0; clBind21473 < clIn9201; clBind21473 += 1)
      for (let clBind22562 = 0; clBind22562 < clIn9202; clBind22562 += 1)
        if (
          clIn9198.has(
            composeLayout.clBind1426(
              clIn9199 + clBind21473,
              clIn9200 + clBind22562,
            ),
          )
        )
          return false;
    return true;
  };
  composeLayout.clBind1425 = (
    clIn10302,
    clIn10303,
    clIn10304,
    clIn10305,
    clIn10306,
  ) => {
    for (let clBind21963 = 0; clBind21963 < clIn10305; clBind21963 += 1)
      for (let clBind22823 = 0; clBind22823 < clIn10306; clBind22823 += 1)
        clIn10302.add(
          composeLayout.clBind1426(
            clIn10303 + clBind21963,
            clIn10304 + clBind22823,
          ),
        );
  };
  composeLayout.clBind1426 = (clIn16316, clIn16317) =>
    `${clIn16316}:${clIn16317}`;
  composeLayout.clBind1427 = (clIn4447, clIn4448, clIn4449, clIn4450) => {
    let clBind13691 = Array.from(
      {
        length: clIn4447.length,
      },
      () => 0,
    );
    return (
      clIn4449.forEach((item) => {
        composeLayout.clBind1428({
          tracks: clIn4447,
          sizes: clBind13691,
          start: clIn4450 === "x" ? item.column : item.row,
          span: clIn4450 === "x" ? item.columnSpan : item.rowSpan,
          gap: clIn4448,
          required: composeLayout.clBind1430(item.child, clIn4450),
        });
      }),
      clBind13691
    );
  };
  composeLayout.clBind1428 = (clIn2675) => {
    let clBind10204 = clIn2675.tracks.slice(
        clIn2675.start,
        clIn2675.start + clIn2675.span,
      ),
      clBind10205 = Math.max(0, clIn2675.span - 1) * clIn2675.gap,
      clBind10206 = clBind10204
        .map((item, index) => ({
          track: item,
          index,
        }))
        .filter(({ track }) => track === "auto")
        .map(({ index }) => clIn2675.start + index);
    if (clBind10206.length === 0) return;
    let clBind10207 =
        clBind10205 +
        composeLayout.clBind1442(
          clBind10204.map((item, index) =>
            item === "auto"
              ? (clIn2675.sizes[clIn2675.start + index] ?? 0)
              : composeLayout.clBind1438(item),
          ),
        ),
      clBind10208 = Math.max(0, clIn2675.required - clBind10207);
    if (clBind10208 <= 0) return;
    let clBind10209 = clBind10208 / clBind10206.length;
    clBind10206.forEach((item) => {
      clIn2675.sizes[item] = (clIn2675.sizes[item] ?? 0) + clBind10209;
    });
  };
  composeLayout.clBind1429 = (clIn9227, clIn9228) => {
    let clBind19793 =
        clIn9228 === "x" ? clIn9227.node.width : clIn9227.node.height,
      clBind19794 =
        clIn9228 === "x" ? clIn9227.intrinsicWidth : clIn9227.intrinsicHeight;
    return composeLayout.clBind1432(clBind19793, clBind19794);
  };
  composeLayout.clBind1430 = (clIn8534, clIn8535) => {
    let clBind19046 =
        clIn8535 === "x" ? clIn8534.node.width : clIn8534.node.height,
      clBind19047 =
        clIn8535 === "x" ? clIn8534.intrinsicWidth : clIn8534.intrinsicHeight;
    return clBind19046.mode === "fill"
      ? clBind19047
      : composeLayout.clBind1432(clBind19046, clBind19047);
  };
  composeLayout.clBind1431 = (clIn7396, clIn7397) => {
    let clBind17837 = clIn7396.node.position,
      clBind17838 = composeLayout.clBind1430(clIn7396, clIn7397);
    if (!clBind17837) return clBind17838;
    let clBind17839 = clIn7397 === "x" ? clBind17837.left : clBind17837.top,
      clBind17840 = clIn7397 === "x" ? clBind17837.right : clBind17837.bottom;
    return clBind17838 + (clBind17839 ?? 0) + (clBind17840 ?? 0);
  };
  composeLayout.clBind1432 = (clIn8634, clIn8635) =>
    clIn8634.mode === "fill"
      ? 0
      : clIn8634.mode === "fixed"
        ? clIn8634.value
        : clIn8634.mode === "wrap"
          ? Math.min(clIn8635, clIn8634.max)
          : clIn8635;
  composeLayout.measureComposeTextNode = (clIn982, clIn983, clIn984) => {
    let clBind6054 = clIn982.presentation,
      clBind6055 = composeLayout.valueToPlainTextWithCase(
        clIn983.value,
        clIn983.transform,
      ),
      clBind6056 = composeLayout.valueToParagraphsWithCase(
        clIn983.value,
        clIn983.transform,
      ),
      clBind6057 = clIn983.width,
      clBind6058 = clIn983.height,
      clBind6059 =
        clIn984 ??
        (clBind6057.mode === "fixed"
          ? clBind6057.value
          : clBind6057.mode === "wrap"
            ? clBind6057.max
            : (clBind6057.mode, composeLayout.COMPOSE_SCALE));
    if (clBind6054) {
      let { textStyleProto, paragraphStyle } = composeLayout.clBind1434(
          clBind6054,
          clIn983.style,
        ),
        clBind7871 =
          textStyleProto?.wrap !== br.TEXT_WRAPPING_TYPE_NONE &&
          (clBind6057.mode === "wrap" ||
            clBind6057.mode === "fixed" ||
            clBind6057.mode === "fill" ||
            clIn984 !== undefined),
        clBind7872 = clBind7871
          ? {
              ...(textStyleProto ?? {}),
              wrap: textStyleProto?.wrap ?? br.TEXT_WRAPPING_TYPE_SQUARE,
            }
          : textStyleProto,
        clBind7873 = Bue({
          element: composeLayout.clBind1433(
            clBind6056,
            clBind6059,
            composeLayout.COMPOSE_SCALE,
            clBind7872,
            paragraphStyle,
          ),
          presentation: clBind6054,
          slide: clIn982.slide,
          wrap: clBind7871,
          resolvedStyle: clBind7872,
        }),
        clBind7874 =
          clBind6057.mode === "fixed"
            ? clBind6057.value
            : clBind6057.mode === "wrap"
              ? Math.min(clBind7873.width, clBind6057.max)
              : clBind6057.mode === "fill"
                ? 0
                : clBind7873.width,
        clBind7875 =
          clBind6058.mode === "fixed"
            ? clBind6058.value
            : clBind6058.mode === "fill"
              ? 0
              : clBind7873.height;
      return {
        width: Math.max(0, clBind7874),
        height: Math.max(0, clBind7875),
      };
    }
    return composeLayout.clBind1435(
      clBind6055,
      clBind6057,
      clBind6058,
      clIn984,
    );
  };
  composeLayout.clBind1433 = (
    clIn1882,
    clIn1883,
    clIn1884,
    clIn1885,
    clIn1886,
  ) => {
    let clBind8536 = workbookTt(Math.max(1, clIn1883)),
      clBind8537 = workbookTt(Math.max(1, clIn1884));
    return {
      id: "compose-text-measure",
      type: j.ELEMENT_TYPE_TEXT,
      bbox: {
        xEmu: 0,
        yEmu: 0,
        widthEmu: clBind8536 ?? 0,
        heightEmu: clBind8537 ?? 0,
      },
      paragraphs: clIn1882.map((item) => ({
        ...item,
        id: "",
        runs: (item.runs ?? []).map((_item) => ({
          ..._item,
          id: "",
          citations: [...(_item.citations ?? [])],
          reviewMarkIds: [...(_item.reviewMarkIds ?? [])],
        })),
        textStyle: clIn1885,
        paragraphStyle:
          clIn1886 || item.paragraphStyle
            ? {
                tabStops: [],
                ...(clIn1886 ?? {}),
                ...(item.paragraphStyle ?? {}),
              }
            : undefined,
      })),
      textStyle: clIn1885,
      effects: [],
      children: [],
      levelsStyles: [],
      citations: [],
    };
  };
  composeLayout.clBind1434 = (clIn1136, clIn1137) => {
    let clBind6600 = aae(clIn1137),
      clBind6601 = {
        topInset: 0,
        rightInset: 0,
        bottomInset: 0,
        leftInset: 0,
      },
      clBind6602 = (clIn6737) => ({
        ...(clIn6737 ?? {}),
        topInset: clIn6737?.topInset ?? clBind6601.topInset,
        rightInset: clIn6737?.rightInset ?? clBind6601.rightInset,
        bottomInset: clIn6737?.bottomInset ?? clBind6601.bottomInset,
        leftInset: clIn6737?.leftInset ?? clBind6601.leftInset,
      });
    if (!clBind6600)
      return {
        textStyleProto: {
          ...clBind6601,
        },
        paragraphStyle: undefined,
      };
    if (typeof clBind6600 == "string") {
      let clBind14471 = clIn1136.styles.resolveTextStyle(clBind6600);
      return {
        textStyleProto: clBind6602(clBind14471?.toProto()),
        paragraphStyle:
          clBind14471?.lineSpacing === undefined
            ? undefined
            : {
                lineSpacingPercent: Math.round(clBind14471.lineSpacing * 1e5),
                tabStops: [],
              },
      };
    }
    let clBind6603 = new workbookVt();
    return (
      workbookYt(clBind6603, clBind6600),
      {
        textStyleProto: clBind6602(clBind6603.toProto()),
        paragraphStyle:
          clBind6600.lineSpacing === undefined
            ? undefined
            : {
                lineSpacingPercent: Math.round(clBind6600.lineSpacing * 1e5),
                tabStops: [],
              },
      }
    );
  };
  composeLayout.clBind1435 = (clIn1995, clIn1996, clIn1997, clIn1998) => {
    let clBind8803 = clIn1995.length > 0 ? clIn1995.split(/\r?\n/) : [""],
      clBind8804 =
        Math.max(0, ...clBind8803.map((item) => item.length)) * 8 + 4,
      clBind8805 = clBind8804;
    clIn1998 === undefined
      ? clIn1996.mode === "fixed"
        ? (clBind8805 = clIn1996.value)
        : clIn1996.mode === "wrap"
          ? (clBind8805 = Math.min(clBind8804, clIn1996.max))
          : clIn1996.mode === "fill" && (clBind8805 = 0)
      : (clBind8805 = clIn1998);
    let clBind8806 = Math.max(1, clBind8803.length);
    clBind8805 > 0 &&
      (clIn1998 !== undefined ||
        clIn1996.mode === "wrap" ||
        clIn1996.mode === "fixed") &&
      (clBind8806 = clBind8803.reduce((accumulator, current) => {
        let clBind20683 = Math.max(1, Math.floor(clBind8805 / 8));
        return (
          accumulator + Math.max(1, Math.ceil(current.length / clBind20683))
        );
      }, 0));
    let clBind8807 = clBind8806 * 20;
    return (
      clIn1997.mode === "fixed"
        ? (clBind8807 = clIn1997.value)
        : clIn1997.mode === "fill" && (clBind8807 = 0),
      {
        width: Math.max(0, clBind8805),
        height: Math.max(0, clBind8807),
      }
    );
  };
  composeLayout.clBind1436 = (clIn9774) => {
    let clBind20310 = clIn9774;
    return typeof clBind20310.getPresentation == "function"
      ? clBind20310.getPresentation()
      : clBind20310.presentation;
  };
  composeLayout.clBind1437 = (clIn15606) =>
    clIn15606 !== "auto" && clIn15606.mode === "fr";
  composeLayout.clBind1438 = (clIn13787) =>
    clIn13787 === "auto" ? 0 : clIn13787.mode === "fixed" ? clIn13787.value : 0;
  composeLayout.clBind1439 = (clIn8424, clIn8425) => ({
    left: clIn8424.left + clIn8425.left,
    top: clIn8424.top + clIn8425.top,
    width: Math.max(0, clIn8424.width - clIn8425.left - clIn8425.right),
    height: Math.max(0, clIn8424.height - clIn8425.top - clIn8425.bottom),
  });
  composeLayout.clBind1440 = (clIn9646, clIn9647, clIn9648, clIn9649) =>
    clIn9649 === "start" || clIn9649 === "stretch"
      ? clIn9646
      : clIn9649 === "center"
        ? clIn9646 + (clIn9647 - clIn9648) / 2
        : clIn9646 + (clIn9647 - clIn9648);
  composeLayout.clBind1441 = (
    clIn3960,
    clIn3961,
    clIn3962,
    clIn3963,
    clIn3964,
    clIn3965 = false,
  ) => {
    if (
      clIn3964 === undefined ||
      clIn3963 === "start" ||
      clIn3963 === "stretch"
    )
      return {
        start: composeLayout.clBind1440(clIn3960, clIn3961, clIn3962, clIn3963),
        size: clIn3962,
      };
    let clBind12861 = Math.max(1, clIn3964 / 4),
      clBind12862 = clIn3965
        ? clIn3962
        : Math.max(
            1,
            composeLayout.clBind1448(clIn3962, Math.max(1, clIn3964 / 2)),
          );
    return clIn3963 === "center"
      ? {
          start:
            composeLayout.clBind1447(clIn3960 + clIn3961 / 2, clBind12861) -
            clBind12862 / 2,
          size: clBind12862,
        }
      : clIn3963 === "end"
        ? {
            start:
              composeLayout.clBind1447(clIn3960 + clIn3961, clBind12861) -
              clBind12862,
            size: clBind12862,
          }
        : {
            start: composeLayout.clBind1447(
              composeLayout.clBind1440(
                clIn3960,
                clIn3961,
                clBind12862,
                clIn3963,
              ),
              clBind12861,
            ),
            size: clBind12862,
          };
  };
  composeLayout.clBind1442 = (clIn15748) =>
    clIn15748.reduce((accumulator, current) => accumulator + current, 0);
  composeLayout.clBind1443 = (clIn15793, clIn15794, clIn15795) =>
    composeLayout.clBind1444(
      clIn15793,
      clIn15794,
      composeLayout.clBind1413(clIn15793, clIn15794, clIn15795),
    );
  composeLayout.clBind1444 = (clIn7766, clIn7767, clIn7768) => {
    let clBind18253 = composeLayout.clBind1446(clIn7766, "x"),
      clBind18254 = composeLayout.clBind1446(clIn7766, "y");
    return composeLayout.clBind1445(clIn7767, clIn7768, {
      preserveWidth: clBind18253,
      preserveHeight: clBind18254,
      ceilHeight: clIn7766.node.kind === "text",
    });
  };
  composeLayout.clBind1445 = (clIn3491, clIn3492, clIn3493 = {}) => {
    if (clIn3492 === undefined) return clIn3491;
    let clBind11928 = Math.max(
        1,
        clIn3493.preserveWidth
          ? clIn3491.width
          : composeLayout.clBind1448(clIn3491.width, clIn3492),
      ),
      clBind11929 = Math.max(
        1,
        clIn3493.preserveHeight
          ? clIn3491.height
          : clIn3493.ceilHeight
            ? composeLayout.clBind1449(clIn3491.height, clIn3492)
            : composeLayout.clBind1448(clIn3491.height, clIn3492),
      ),
      clBind11930 =
        clIn3493.preserveWidth && clIn3491.width <= clIn3492 ? 1 : clIn3492,
      clBind11931 =
        clIn3493.preserveHeight && clIn3491.height <= clIn3492 ? 1 : clIn3492;
    return {
      left: composeLayout.clBind1447(clIn3491.left, clBind11930),
      top: composeLayout.clBind1447(clIn3491.top, clBind11931),
      width: clBind11928,
      height: clBind11929,
    };
  };
  composeLayout.clBind1446 = (clIn12624, clIn12625) =>
    (clIn12625 === "x" ? clIn12624.node.width : clIn12624.node.height).mode ===
    "fixed";
  composeLayout.clBind1447 = (clIn14621, clIn14622) =>
    clIn14622 === undefined
      ? clIn14621
      : Math.round(clIn14621 / clIn14622) * clIn14622;
  composeLayout.clBind1448 = (clIn14623, clIn14624) =>
    clIn14624 === undefined
      ? clIn14623
      : Math.round(clIn14623 / clIn14624) * clIn14624;
  composeLayout.clBind1449 = (clIn14722, clIn14723) =>
    clIn14723 === undefined
      ? clIn14722
      : Math.ceil(clIn14722 / clIn14723) * clIn14723;
  composeLayout.clBind1450 = (clIn8339) => {
    if (clIn8339 !== undefined) {
      if (!Number.isFinite(clIn8339) || clIn8339 <= 0)
        throw Error("slide.compose baseUnit must be a positive number.");
      return clIn8339;
    }
  };
  composeLayout.clBind1451 = (clIn4718, clIn4719) => {
    if (
      !Number.isFinite(clIn4718.left) ||
      !Number.isFinite(clIn4718.top) ||
      !Number.isFinite(clIn4718.width) ||
      !Number.isFinite(clIn4718.height)
    )
      throw Error(
        `${clIn4719} must include finite left/top/width/height values.`,
      );
    if (clIn4718.width <= 0 || clIn4718.height <= 0)
      throw Error(`${clIn4719} width and height must be positive.`);
    return clIn4718;
  };
  composeLayout.clBind1452 = (clIn8536, clIn8537, clIn8538) =>
    clIn8536.mode === "fill"
      ? clIn8538
      : clIn8536.mode === "fixed"
        ? clIn8536.value
        : clIn8536.mode === "wrap"
          ? Math.min(clIn8536.max, clIn8537)
          : clIn8537;
  composeLayout.clBind1453 = (clIn7377, clIn7378, clIn7379, clIn7380) => {
    let clBind17800 = clIn7378.node.height;
    if (clBind17800.mode === "fill") return clIn7380;
    if (clBind17800.mode === "fixed") return clBind17800.value;
    let clBind17801 = composeLayout.clBind1416(clIn7377, clIn7378, clIn7379);
    return clBind17800.mode === "wrap"
      ? Math.min(clBind17801, clBind17800.max)
      : clBind17801;
  };
  composeLayout.clBind1454 = (clIn15796) =>
    clIn15796.width > 0 && clIn15796.height > 0;
  composeLayout.clBind1455 = (clIn16318, clIn16319) =>
    `${clIn16318}.${clIn16319}`;
  composeLayout.clBind1456 = (clIn10530) => ({
    top: composeLayout.clBind1464(clIn10530.top),
    right: composeLayout.clBind1464(clIn10530.right),
    bottom: composeLayout.clBind1464(clIn10530.bottom),
    left: composeLayout.clBind1464(clIn10530.left),
  });
  composeLayout.clBind1457 = (clIn6075) => {
    let clBind16127 = {};
    return (
      clIn6075.left !== undefined &&
        (clBind16127.left = composeLayout.clBind1464(clIn6075.left)),
      clIn6075.top !== undefined &&
        (clBind16127.top = composeLayout.clBind1464(clIn6075.top)),
      clIn6075.right !== undefined &&
        (clBind16127.right = composeLayout.clBind1464(clIn6075.right)),
      clIn6075.bottom !== undefined &&
        (clBind16127.bottom = composeLayout.clBind1464(clIn6075.bottom)),
      clBind16127
    );
  };
  composeLayout.clBind1458 = (clIn6468) =>
    clIn6468.mode === "hug"
      ? {
          mode: "hug",
        }
      : clIn6468.mode === "fill"
        ? {
            mode: "fill",
            value: composeLayout.clBind1464(clIn6468.value),
          }
        : clIn6468.mode === "fixed"
          ? {
              mode: "fixed",
              value: composeLayout.clBind1464(clIn6468.value),
            }
          : {
              mode: "wrap",
              max: composeLayout.clBind1464(clIn6468.max),
            };
  composeLayout.clBind1459 = (clIn8887) =>
    clIn8887 === "auto"
      ? "auto"
      : clIn8887.mode === "fixed"
        ? {
            mode: "fixed",
            value: composeLayout.clBind1464(clIn8887.value),
          }
        : {
            mode: "fr",
            value: composeLayout.clBind1464(clIn8887.value),
          };
  composeLayout.clBind1460 = (clIn16120) =>
    clIn16120.map((item) => composeLayout.clBind1459(item));
  composeLayout.clBind1461 = (clIn5786) =>
    "path" in clIn5786
      ? {
          kind: "path",
          path: clIn5786.path,
        }
      : "dataUrl" in clIn5786
        ? {
            kind: "dataUrl",
          }
        : "blob" in clIn5786
          ? {
              kind: "blob",
            }
          : "uri" in clIn5786
            ? {
                kind: "uri",
                uri: clIn5786.uri,
              }
            : {
                kind: "prompt",
                prompt: clIn5786.prompt,
              };
  composeLayout.clBind1462 = (clIn11742) => {
    if (clIn11742 !== undefined)
      return typeof clIn11742 == "string"
        ? clIn11742
        : clIn11742.name || clIn11742.id;
  };
  composeLayout.clBind1463 = (clIn10531) => ({
    left: composeLayout.clBind1464(clIn10531.left),
    top: composeLayout.clBind1464(clIn10531.top),
    width: composeLayout.clBind1464(clIn10531.width),
    height: composeLayout.clBind1464(clIn10531.height),
  });
  composeLayout.clBind1464 = (clIn15830) => Math.round(clIn15830 * 100) / 100;
});
