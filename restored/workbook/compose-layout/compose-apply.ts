// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-58: slide.compose apply (legacy Binding1485 / Binding1466…).

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, wr } from "../presentation-protobuf";
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
import { ensureComposeMeasureInit } from "./ensure-compose-measure-init";
import { Fill as workbookCt } from "../fill";
import { WorkbookColor as clBind382 } from "../theme-color";
import { Line as clBind431 } from "../line";

export const ensureComposeApplyInit = esmInit(() => {
  ensureWorkbookColorInit();
  ensureFillInit();
  ensureLineInit();
  ensureBinding739();
  ensureDetachedTextHelpersInit();
  ensureComposeMeasureInit();
  const clBind736 = getShapeElementClass();
  {
    ensureWorkbookColorInit();
    ensureFillInit();
    ensureLineInit();
    ensureBinding739();
    ensureDetachedTextHelpersInit();
    ensureComposeMeasureInit();
    composeLayout.applySlideCompose = (clIn4019, clIn4020, clIn4021 = {}) => {
      let { placements, materializedPaths, run } =
          composeLayout.materializeComposeRun(clIn4019, clIn4020, clIn4021),
        clBind12945 = placements.map((item) =>
          composeLayout.clBind1467(clIn4019, item),
        ),
        clBind12946 = new Map(),
        clBind12947 = new Map(),
        clBind12948 = Math.min(materializedPaths.length, clBind12945.length);
      for (let clBind20513 = 0; clBind20513 < clBind12948; clBind20513 += 1) {
        let clBind21474 = materializedPaths[clBind20513],
          clBind21475 = clBind12945[clBind20513];
        !clBind21474 ||
          !clBind21475 ||
          (clBind12946.set(clBind21474, clBind21475),
          clBind12947.set(clBind21474, composeLayout.clBind1481(clBind21475)));
      }
      return (
        composeLayout.clBind1480(run.root, clBind12947),
        {
          elements: clBind12945,
          elementsByPath: clBind12946,
          run,
        }
      );
    };
    composeLayout.clBind1467 = (clIn231, clIn232) => {
      if (clIn232.kind === "text") {
        let clBind6611 = clIn231.shapes.add({
          geometry: "textbox",
          position: clIn232.frame,
        });
        return (
          clIn232.name && (clBind6611.name = clIn232.name),
          clIn232.style &&
            (typeof clIn232.style == "string"
              ? (clBind6611.text.style = clIn232.style)
              : (clBind6611.text.style = {
                  ...clIn232.style,
                  insets: clIn232.style.insets ?? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  },
                })),
          clBind6611.text.set(clIn232.value),
          typeof clIn232.style == "string"
            ? (clBind6611.text.insets = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              })
            : clIn232.style?.insets ||
              (clBind6611.text.insets = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }),
          clIn232.shadow !== undefined &&
            (clBind6611.text.shadow = clIn232.shadow),
          typeof clIn232.value != "string" &&
            normalizeParagraphInputs(clIn232.value).forEach((item, index) => {
              let clBind16272 = clBind6611.text.paragraphs.items[index];
              !clBind16272 ||
                !item.paragraphStyle ||
                (clBind16272.paragraphStyle = {
                  ...(clBind16272.paragraphStyle ?? {}),
                  ...item.paragraphStyle,
                });
            }),
          clBind6611
        );
      }
      if (clIn232.kind === "shape") {
        let clBind7782 = composeLayout.clBind1477(clIn232.fill) ?? "none",
          clBind7783 = composeLayout.clBind1478(clIn232.line),
          clBind7784 = (() => {
            if (clIn232.geometry === "custom") {
              let clBind12949 = clIn232.customPaths;
              if (!clBind12949 || clBind12949.length === 0)
                throw Error(
                  'compose.shape geometry "custom" requires at least one custom path.',
                );
              return clIn231.shapes.add({
                geometry: "custom",
                position: clIn232.frame,
                fill: clBind7782,
                line: clBind7783,
                customPaths: clBind12949,
              });
            }
            return clIn231.shapes.add({
              geometry: clIn232.geometry,
              position: clIn232.frame,
              fill: clBind7782,
              line: clBind7783,
            });
          })();
        return (
          clIn232.name && (clBind7784.name = clIn232.name),
          clIn232.borderRadius !== undefined &&
            (clBind7784.borderRadius = clIn232.borderRadius),
          clIn232.shadow !== undefined && (clBind7784.shadow = clIn232.shadow),
          clBind7784
        );
      }
      if (clIn232.kind === "connector")
        return composeLayout.clBind1470(clIn231, clIn232);
      if (clIn232.kind === "image") {
        let clBind9910 = clIn231.images.add({
          ...clIn232.source,
          contentType: clIn232.contentType,
          position: clIn232.frame,
          fit: clIn232.fit,
          alt: clIn232.alt,
          geometry: clIn232.geometry,
          borderRadius: clIn232.borderRadius,
          crop: clIn232.crop,
        });
        return (
          clIn232.name && (clBind9910.name = clIn232.name),
          clIn232.lockAspectRatio !== undefined &&
            (clBind9910.lockAspectRatio = clIn232.lockAspectRatio),
          clIn232.rotation !== undefined &&
            (clBind9910.rotation = clIn232.rotation),
          clIn232.flipHorizontal !== undefined &&
            (clBind9910.flipHorizontal = clIn232.flipHorizontal),
          clIn232.flipVertical !== undefined &&
            (clBind9910.flipVertical = clIn232.flipVertical),
          clBind9910
        );
      }
      if (clIn232.kind === "table") {
        let clBind11624 = clIn231.tables.add({
          rows: clIn232.rows,
          columns: clIn232.columns,
          left: clIn232.frame.left,
          top: clIn232.frame.top,
          width: clIn232.frame.width,
          height: clIn232.frame.height,
          values: clIn232.values,
          columnWidths: clIn232.columnWidths,
          columnTracks: clIn232.columnTracks,
        });
        return (
          clIn232.name && (clBind11624.name = clIn232.name),
          clIn232.style && (clBind11624.style = clIn232.style),
          clIn232.styleOptions &&
            (clBind11624.styleOptions = clIn232.styleOptions),
          clBind11624
        );
      }
      if (clIn232.kind === "chart") {
        let clBind20537 = clIn231.charts.add(clIn232.chartType, clIn232.config);
        return (
          (clBind20537.position = clIn232.frame),
          clIn232.name && (clBind20537.name = clIn232.name),
          clBind20537
        );
      }
      let clBind3254 = composeLayout.clBind1479(
          composeLayout.clBind1482(clIn232.stroke, clIn232.opacity),
        ),
        clBind3255 = clIn231.shapes.add({
          geometry: "rect",
          position: clIn232.frame,
          fill: clBind3254,
          line: {
            style: "solid",
            width: 0,
            fill: clBind3254,
          },
        });
      return (clIn232.name && (clBind3255.name = clIn232.name), clBind3255);
    };
    composeLayout.composeApplyHelperG = 1;
    composeLayout.clBind1468 = "none";
    composeLayout.clBind1469 = {
      style: "solid",
      width: 0,
      fill: "none",
    };
    composeLayout.clBind1470 = (clIn2065, clIn2066) => {
      let clBind8936 = composeLayout.clBind1474(clIn2066, "from"),
        clBind8937 = composeLayout.clBind1474(clIn2066, "to"),
        clBind8938 = composeLayout.clBind1476(clIn2066, clBind8936, clBind8937),
        clBind8939 = composeLayout.clBind1472(
          clIn2065,
          clIn2066.fromElement,
          "from",
        ),
        clBind8940 = composeLayout.clBind1472(
          clIn2065,
          clIn2066.toElement,
          "to",
        ),
        clBind8941 =
          clBind8939 ||
          composeLayout.clBind1471(
            clIn2065,
            clIn2066.name ? `${clIn2066.name}:from-anchor` : undefined,
            clBind8936,
            clBind8938.from,
          ),
        clBind8942 =
          clBind8940 ||
          composeLayout.clBind1471(
            clIn2065,
            clIn2066.name ? `${clIn2066.name}:to-anchor` : undefined,
            clBind8937,
            clBind8938.to,
          ),
        clBind8943 = composeLayout.clBind1473(
          clIn2065,
          clBind8941,
          clIn2066.fromIdx,
          clIn2066.fromSide,
          clBind8938.from,
          "from",
        ),
        clBind8944 = composeLayout.clBind1473(
          clIn2065,
          clBind8942,
          clIn2066.toIdx,
          clIn2066.toSide,
          clBind8938.to,
          "to",
        ),
        clBind8945 = clIn2065.shapes.add({
          geometry: "connector",
          kind: clIn2066.connectorKind,
          from: clBind8941,
          fromIdx: clBind8943,
          to: clBind8942,
          toIdx: clBind8944,
          line: composeLayout.clBind1478(clIn2066.line),
          head: clIn2066.head,
          tail: clIn2066.tail,
          cap: clIn2066.cap,
          join: clIn2066.join,
        });
      return (clIn2066.name && (clBind8945.name = clIn2066.name), clBind8945);
    };
    composeLayout.clBind1471 = (clIn9137, clIn9138, clIn9139, clIn9140) =>
      clIn9137.shapes.add({
        geometry: "ellipse",
        name: clIn9138,
        position: composeLayout.clBind1475(clIn9139, clIn9140),
        fill: composeLayout.clBind1468,
        line: composeLayout.clBind1469,
      });
    composeLayout.clBind1472 = (clIn5664, clIn5665, clIn5666) => {
      if (clIn5665 === undefined) return;
      let clBind15545 = clIn5664.shapes.getById(clIn5665);
      if (clBind15545) return clBind15545;
      let clBind15546 = clIn5664.elements.items.find(
        (item) => item instanceof clBind736 && item.name === clIn5665,
      );
      if (clBind15546) return clBind15546;
      throw Error(
        `compose.connector ${clIn5666}Element target "${clIn5665}" was not found.`,
      );
    };
    composeLayout.clBind1473 = (
      clIn6618,
      clIn6619,
      clIn6620,
      clIn6621,
      clIn6622,
      clIn6623,
    ) => {
      if (clIn6620 !== undefined) {
        if (!Number.isFinite(clIn6620))
          throw Error(`compose.connector ${clIn6623}Idx must be finite.`);
        return clIn6620;
      }
      return clIn6621 === undefined
        ? clIn6622
        : clIn6618.shapes.getConnectionSiteIndex(clIn6619, clIn6621);
    };
    composeLayout.clBind1474 = (clIn2666, clIn2667) => {
      let clBind10188 = clIn2667 === "from" ? clIn2666.from : clIn2666.to;
      return clBind10188
        ? {
            left: clIn2666.frame.left + clBind10188.left,
            top: clIn2666.frame.top + clBind10188.top,
          }
        : clIn2666.orientation === "vertical"
          ? clIn2667 === "from"
            ? {
                left: clIn2666.frame.left + clIn2666.frame.width / 2,
                top: clIn2666.frame.top,
              }
            : {
                left: clIn2666.frame.left + clIn2666.frame.width / 2,
                top: clIn2666.frame.top + clIn2666.frame.height,
              }
          : clIn2667 === "from"
            ? {
                left: clIn2666.frame.left,
                top: clIn2666.frame.top + clIn2666.frame.height / 2,
              }
            : {
                left: clIn2666.frame.left + clIn2666.frame.width,
                top: clIn2666.frame.top + clIn2666.frame.height / 2,
              };
    };
    composeLayout.clBind1475 = (clIn2706, clIn2707) => {
      switch (clIn2707) {
        case 0:
          return {
            left: clIn2706.left - composeLayout.composeApplyHelperG / 2,
            top: clIn2706.top,
            width: composeLayout.composeApplyHelperG,
            height: composeLayout.composeApplyHelperG,
          };
        case 1:
          return {
            left: clIn2706.left,
            top: clIn2706.top - composeLayout.composeApplyHelperG / 2,
            width: composeLayout.composeApplyHelperG,
            height: composeLayout.composeApplyHelperG,
          };
        case 2:
          return {
            left: clIn2706.left - composeLayout.composeApplyHelperG / 2,
            top: clIn2706.top - composeLayout.composeApplyHelperG,
            width: composeLayout.composeApplyHelperG,
            height: composeLayout.composeApplyHelperG,
          };
        case 3:
          return {
            left: clIn2706.left - composeLayout.composeApplyHelperG,
            top: clIn2706.top - composeLayout.composeApplyHelperG / 2,
            width: composeLayout.composeApplyHelperG,
            height: composeLayout.composeApplyHelperG,
          };
        default:
          throw Error(`Unsupported connector anchor site index ${clIn2707}.`);
      }
    };
    composeLayout.clBind1476 = (clIn7307, clIn7308, clIn7309) =>
      clIn7307.orientation === "vertical"
        ? clIn7309.top >= clIn7308.top
          ? {
              from: 2,
              to: 0,
            }
          : {
              from: 0,
              to: 2,
            }
        : clIn7309.left >= clIn7308.left
          ? {
              from: 3,
              to: 1,
            }
          : {
              from: 1,
              to: 3,
            };
    composeLayout.clBind1477 = (clIn11743) => {
      if (clIn11743 !== undefined)
        return new workbookCt(clIn11743).toConfig({
          preserveProto: false,
        });
    };
    composeLayout.clBind1478 = (clIn11744) => {
      if (clIn11744 !== undefined)
        return new clBind431(clIn11744).toConfig({
          preserveProto: false,
        });
    };
    composeLayout.clBind1479 = (clIn8194) => {
      let clBind18694 = new clBind382(clIn8194).toConfig();
      return clBind18694 === undefined
        ? {
            type: "none",
          }
        : typeof clBind18694 == "string"
          ? clBind18694
          : {
              type: "solid",
              color: clBind18694,
            };
    };
    composeLayout.clBind1480 = (clIn10724, clIn10725) => {
      let clBind21228 = clIn10725.get(clIn10724.path);
      clBind21228 && (clIn10724.element = clBind21228);
      clIn10724.children.forEach((item) =>
        composeLayout.clBind1480(item, clIn10725),
      );
    };
    composeLayout.clBind1481 = (clIn6853) => {
      let clBind17165 = clIn6853.toSnapshot();
      return {
        aid: clBind17165.aid,
        id: clBind17165.id,
        kind:
          clBind17165.kind === "image" ||
          clBind17165.kind === "table" ||
          clBind17165.kind === "chart"
            ? clBind17165.kind
            : "shape",
      };
    };
    composeLayout.clBind1482 = (clIn3939, clIn3940) => {
      if (clIn3940 === undefined || clIn3940 >= 1) return clIn3939;
      if (clIn3940 <= 0) return "rgba(0, 0, 0, 0)";
      if (typeof clIn3939 == "string")
        return composeLayout.clBind1483(clIn3939, clIn3940) ?? clIn3939;
      if (clIn3939.type === "rgb") {
        let clBind21510 = {
          ...(clIn3939.transform ?? {}),
          opacity: clIn3940,
        };
        return {
          ...clIn3939,
          transform: clBind21510,
        };
      }
      if (clIn3939.type === "theme") {
        let clBind21511 = {
          ...(clIn3939.transform ?? {}),
          opacity: clIn3940,
        };
        return {
          ...clIn3939,
          transform: clBind21511,
        };
      }
      return clIn3939;
    };
    composeLayout.clBind1483 = (clIn3691, clIn3692) => {
      let clBind12326 = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i.exec(clIn3691.trim());
      if (clBind12326) {
        let [clBind21757, clBind21758, clBind21759] = composeLayout.clBind1484(
          clBind12326[1] ?? "",
        );
        return `rgba(${clBind21757}, ${clBind21758}, ${clBind21759}, ${clIn3692})`;
      }
      let clBind12327 =
        /^rgba?\(\s*(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})(?:\s*(?:\/|,)\s*([\d.]+%?))?\s*\)$/i.exec(
          clIn3691.trim(),
        );
      if (clBind12327)
        return `rgba(${Number(clBind12327[1] ?? 0)}, ${Number(clBind12327[2] ?? 0)}, ${Number(clBind12327[3] ?? 0)}, ${(composeLayout.composeThemeTokenKey(clBind12327[4]) ?? 1) * clIn3692})`;
    };
    composeLayout.clBind1484 = (clIn4037) => {
      if (clIn4037.length === 3) {
        let clBind16879 = clIn4037
          .split("")
          .map((item) => `${item}${item}`)
          .join("");
        return [
          parseInt(clBind16879.slice(0, 2), 16),
          parseInt(clBind16879.slice(2, 4), 16),
          parseInt(clBind16879.slice(4, 6), 16),
        ];
      }
      return [
        parseInt(clIn4037.slice(0, 2), 16),
        parseInt(clIn4037.slice(2, 4), 16),
        parseInt(clIn4037.slice(4, 6), 16),
      ];
    };
    composeLayout.composeThemeTokenKey = (clIn5088) => {
      if (!clIn5088) return;
      let clBind14537 = clIn5088.trim();
      if (!clBind14537) return;
      if (clBind14537.endsWith("%")) {
        let clBind19985 = Number(clBind14537.slice(0, -1));
        return Number.isFinite(clBind19985)
          ? Math.min(1, Math.max(0, clBind19985 / 100))
          : undefined;
      }
      let clBind14538 = Number(clBind14537);
      if (Number.isFinite(clBind14538))
        return Math.min(1, Math.max(0, clBind14538));
    };
  }
});

export function applySlideCompose(...args: any[]): any {
  ensureComposeApplyInit();
  return composeLayout.applySlideCompose(...args);
}
