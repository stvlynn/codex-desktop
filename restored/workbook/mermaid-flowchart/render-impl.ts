// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: render mermaid graph onto scratch slide (legacy OPe/Binding1685).
// Stage-3 wave-78 cohesive mermaid-flowchart impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  workbookBinding1615,
  workbookBinding1616,
  workbookBinding1618,
  workbookBinding1620,
} from "../mermaid-slide-helpers";
import { workbookBinding1675, workbookBinding1685 } from "./fc-slots";
import { $Ne } from "./layout-impl";

let workbookBinding1676: any;
let ePe: any;
let tPe: any;
let nPe: any;
let rPe: any;
let iPe: any;
let aPe: any;
let oPe: any;
let workbookBinding1677: any;
let sPe: any;
let cPe: any;
let lPe: any;
let uPe: any;
let workbookBinding1678: any;
let dPe: any;
let fPe: any;
let workbookBinding1679: any;
let workbookBinding1680: any;
let pPe: any;
let mPe: any;
let hPe: any;
let workbookBinding1681: any;
let gPe: any;
let workbookBinding1682: any;
let _Pe: any;
let vPe: any;
let yPe: any;
let workbookBinding1683: any;
let bPe: any;
let xPe: any;
let SPe: any;
let CPe: any;
let workbookBinding1684: any;
let wPe: any;
let TPe: any;
let EPe: any;
let DPe: any;

export const OPe = esmInit(() => {
  $Ne();
  workbookBinding1616();
  workbookBinding1618();
  workbookBinding1620();
  workbookBinding1676 = "accent1";
  ePe = {
    type: "theme",
    value: workbookBinding1676,
    transform: {
      lighten: 0.8,
    },
  };
  tPe = {
    type: "theme",
    value: workbookBinding1676,
    transform: {
      lighten: 0.6,
    },
  };
  nPe = {
    type: "theme",
    value: workbookBinding1676,
    transform: {
      lighten: 0.4,
    },
  };
  rPe = {
    type: "theme",
    value: workbookBinding1676,
    transform: {
      darken: 0.25,
    },
  };
  iPe = {
    type: "theme",
    value: workbookBinding1676,
    transform: {
      darken: 0.5,
    },
  };
  aPe = ePe;
  oPe = rPe;
  workbookBinding1677 = iPe;
  sPe = {
    type: "theme",
    value: workbookBinding1676,
    transform: {
      lighten: 0.8,
      opacity: 0.8,
    },
  };
  cPe = tPe;
  lPe = nPe;
  uPe = {
    type: "solid",
    color: aPe,
  };
  workbookBinding1678 = {
    type: "solid",
    color: sPe,
  };
  dPe = {
    fill: {
      type: "solid",
      color: oPe,
    },
    style: "solid",
    width: 1,
  };
  fPe = {
    fill: {
      type: "solid",
      color: workbookBinding1677,
    },
    style: "solid",
    width: 1,
  };
  workbookBinding1679 = {
    color: workbookBinding1677,
    fontSize: 16,
    align: "center",
    verticalAlign: "middle",
    wrap: "none",
  };
  workbookBinding1680 = 60;
  pPe = 30;
  mPe = 80;
  hPe = 54;
  workbookBinding1681 = 54;
  gPe = 88;
  workbookBinding1682 = {
    ...workbookBinding1679,
    verticalAlign: "middle",
    insets: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  _Pe = 24;
  vPe = 12;
  yPe = {
    fill: workbookBinding1678,
    style: "solid",
    width: 0,
  };
  workbookBinding1683 = (fcIn9077) => {
    if (!(!fcIn9077 || fcIn9077 === "none"))
      return fcIn9077 === "arrow"
        ? {
            type: "triangle",
            width: "sm",
            length: "sm",
          }
        : {
            type: fcIn9077,
          };
  };
  bPe = (fcIn3826, fcIn3827, fcIn3828) => {
    if (fcIn3826 === undefined) return fcIn3827;
    if (typeof fcIn3826 == "number") {
      if (!Number.isFinite(fcIn3826))
        throw Error(`${fcIn3828} must be a finite px value.`);
      return fcIn3826;
    }
    let fcBind12624 = /^(-?(?:\d+|\d*\.\d+))px$/.exec(fcIn3826.trim());
    if (!fcBind12624)
      throw Error(`${fcIn3828} must be a number or a "[number]px" string.`);
    let fcBind12625 = Number(fcBind12624[1]);
    if (!Number.isFinite(fcBind12625))
      throw Error(`${fcIn3828} must be a finite px value.`);
    return fcBind12625;
  };
  xPe = (fcIn8774) => {
    if (fcIn8774?.padding === undefined)
      return {
        x: workbookBinding1680,
        y: pPe,
      };
    let fcBind19308 = bPe(
      fcIn8774.padding,
      workbookBinding1680 / 2,
      "mermaid layout padding",
    );
    return {
      x: fcBind19308 * 2,
      y: fcBind19308 * 2,
    };
  };
  SPe = (props) => ({
    ...workbookBinding1679,
    ...(props.style?.text ?? {}),
    ...(props.textStyle ?? {}),
  });
  CPe = (fcIn2680, fcIn2681, fcIn2682) => {
    if (fcIn2680.width !== undefined && fcIn2680.height !== undefined)
      return {
        width: fcIn2680.width,
        height: fcIn2680.height,
      };
    let fcBind10236 = xPe(fcIn2682),
      fcBind10237 = workbookBinding1615(fcIn2680.label, {
        fontSize: fcIn2681.fontSize,
        fontWeight: fcIn2681.bold ? "bold" : undefined,
      });
    if (
      fcIn2680.geometry === "flowChartDecision" ||
      fcIn2680.geometry === "diamond"
    ) {
      let fcBind19171 = Math.max(
        gPe,
        Math.ceil(fcBind10237.width + workbookBinding1681),
        Math.ceil(fcBind10237.height + workbookBinding1681),
      );
      return {
        width: fcBind19171,
        height: fcBind19171,
      };
    }
    return {
      width: Math.max(mPe, Math.ceil(fcBind10237.width + fcBind10236.x)),
      height: Math.max(hPe, Math.ceil(fcBind10237.height + fcBind10236.y)),
    };
  };
  workbookBinding1684 = (fcIn13741, fcIn13742, fcIn13743) => {
    fcIn13741.text = fcIn13742;
    fcIn13743 && fcBind1617(fcIn13741, fcIn13743);
  };
  wPe = (fcIn2689, fcIn2690) => {
    let fcBind10255 = 1 / 0,
      fcBind10256 = 1 / 0;
    return (
      fcIn2689.forEach((item) => {
        fcBind10255 = Math.min(fcBind10255, item.left);
        fcBind10256 = Math.min(fcBind10256, item.top);
      }),
      fcIn2690 &&
        fcIn2690.forEach((item) => {
          let fcBind15814 = item.nodes
            .map((_item) => fcIn2689.get(_item))
            .filter(Boolean);
          if (fcBind15814.length === 0) return;
          let fcBind15815 = Math.min(...fcBind15814.map((_item) => _item.left)),
            fcBind15816 = Math.min(...fcBind15814.map((_item) => _item.top));
          fcBind10255 = Math.min(fcBind10255, fcBind15815 - 24);
          fcBind10256 = Math.min(fcBind10256, fcBind15816 - 24);
        }),
      !Number.isFinite(fcBind10255) || !Number.isFinite(fcBind10256)
        ? {
            offsetX: 0,
            offsetY: 0,
          }
        : {
            offsetX: fcBind10255,
            offsetY: fcBind10256,
          }
    );
  };
  TPe = (fcIn2942, fcIn2943, fcIn2944) => {
    let fcBind10865 = fcIn2943.centerX - fcIn2942.centerX,
      fcBind10866 = fcIn2943.centerY - fcIn2942.centerY;
    return fcIn2944 === "LR"
      ? fcBind10865 >= 0
        ? {
            from: "right",
            to: "left",
          }
        : {
            from: "left",
            to: "right",
          }
      : fcIn2944 === "RL"
        ? fcBind10865 <= 0
          ? {
              from: "left",
              to: "right",
            }
          : {
              from: "right",
              to: "left",
            }
        : fcIn2944 === "BT"
          ? fcBind10866 <= 0
            ? {
                from: "top",
                to: "bottom",
              }
            : {
                from: "bottom",
                to: "top",
              }
          : fcBind10866 >= 0
            ? {
                from: "bottom",
                to: "top",
              }
            : {
                from: "top",
                to: "bottom",
              };
  };
  EPe = (fcIn7368, fcIn7369, fcIn7370, fcIn7371) =>
    (
      fcIn7371 === "LR" || fcIn7371 === "RL"
        ? Math.abs(fcIn7369.centerY - fcIn7370.centerY) < 0.001
        : Math.abs(fcIn7369.centerX - fcIn7370.centerX) < 0.001
    )
      ? "straight"
      : (fcIn7368.kind ?? "curved");
  DPe = (fcIn2142, fcIn2143, fcIn2144, fcIn2145, fcIn2146) => {
    if (fcIn2146 === "LR" || fcIn2146 === "RL") {
      let fcBind14363 =
          ((fcIn2145.centerX >= fcIn2144.centerX
            ? fcIn2144.left + fcIn2144.width
            : fcIn2144.left) +
            (fcIn2145.centerX >= fcIn2144.centerX
              ? fcIn2145.left
              : fcIn2145.left + fcIn2145.width)) /
          2,
        fcBind14364 =
          Math.abs(fcIn2145.centerY - fcIn2144.centerY) > 1
            ? fcIn2145.centerY
            : (fcIn2144.centerY + fcIn2145.centerY) / 2;
      return {
        left: fcBind14363 - fcIn2142 / 2,
        top: fcBind14364 - fcIn2143 / 2,
      };
    }
    let fcBind9105 =
      ((fcIn2145.centerY >= fcIn2144.centerY
        ? fcIn2144.top + fcIn2144.height
        : fcIn2144.top) +
        (fcIn2145.centerY >= fcIn2144.centerY
          ? fcIn2145.top
          : fcIn2145.top + fcIn2145.height)) /
      2;
    return {
      left:
        (Math.abs(fcIn2145.centerX - fcIn2144.centerX) > 1
          ? fcIn2145.centerX
          : (fcIn2144.centerX + fcIn2145.centerX) / 2) -
        fcIn2142 / 2,
      top: fcBind9105 - fcIn2143 / 2,
    };
  };
  workbookBinding1685 = (fcIn276) => {
    let { slide } = fcBind1619(),
      fcBind3416 = fcIn276.layout?.rankDir ?? "TB",
      fcBind3417 = fcIn276.nodes.map((item) => {
        let fcBind21361 = SPe(item);
        return {
          ...item,
          textStyle: fcBind21361,
          ...CPe(item, fcBind21361, fcIn276.layout),
        };
      }),
      fcBind3418 = workbookBinding1675(
        fcBind3417.map((item) => ({
          id: item.id,
          label: item.label,
          width: item.width,
          height: item.height,
        })),
        fcIn276.edges.map((item) => ({
          id: item.id,
          from: item.from,
          to: item.to,
          label: item.label,
        })),
        fcIn276.layout,
      ),
      { offsetX, offsetY } = wPe(fcBind3418.nodes, fcIn276.subgraphs),
      fcBind3419 = {},
      fcBind3420 = new Map();
    return (
      fcIn276.subgraphs?.length &&
        fcIn276.subgraphs.forEach((item) => {
          let fcBind8141 = item.nodes
            .map((_item) => fcBind3418.nodes.get(_item))
            .filter(Boolean);
          if (fcBind8141.length === 0) return;
          let fcBind8142 = Math.min(...fcBind8141.map((_item) => _item.left)),
            fcBind8143 = Math.min(...fcBind8141.map((_item) => _item.top)),
            fcBind8144 = Math.max(
              ...fcBind8141.map((_item) => _item.left + _item.width),
            ),
            fcBind8145 = Math.max(
              ...fcBind8141.map((_item) => _item.top + _item.height),
            ),
            fcBind8146 = slide.shapes.add({
              geometry: "roundRect",
              position: {
                left: fcBind8142 - 24 - offsetX,
                top: fcBind8143 - 24 - offsetY,
                width: fcBind8144 - fcBind8142 + 48,
                height: fcBind8145 - fcBind8143 + 48,
              },
              fill: {
                type: "solid",
                color: cPe,
              },
              line: {
                fill: {
                  type: "solid",
                  color: lPe,
                },
                style: "dashed",
                width: 1,
              },
            });
          fcBind8146.zIndex = -5;
          workbookBinding1684(fcBind8146, item.title ?? "");
        }),
      fcBind3417.forEach((item) => {
        let fcBind11582 = fcBind3418.nodes.get(item.id);
        if (!fcBind11582) return;
        let fcBind11583 = {
            geometry: item.geometry ?? "rect",
            position: {
              left: fcBind11582.left - offsetX,
              top: fcBind11582.top - offsetY,
              width: fcBind11582.width,
              height: fcBind11582.height,
            },
            fill: item.style?.fill ?? uPe,
            line: item.style?.line ?? dPe,
          },
          fcBind11584 = slide.shapes.add(fcBind11583);
        workbookBinding1684(fcBind11584, item.label, item.textStyle);
        fcBind3419[item.id] = fcBind11584.id;
        fcBind3420.set(item.id, fcBind11584);
      }),
      fcIn276.edges.forEach((item) => {
        let fcBind6421 = fcBind3420.get(item.from),
          fcBind6422 = fcBind3420.get(item.to),
          fcBind6423 = fcBind3418.nodes.get(item.from),
          fcBind6424 = fcBind3418.nodes.get(item.to);
        if (!fcBind6421 || !fcBind6422 || !fcBind6423 || !fcBind6424) return;
        let fcBind6425 = TPe(fcBind6423, fcBind6424, fcBind3416),
          fcBind6426 = slide.shapes.add({
            geometry: "connector",
            from: fcBind6421,
            to: fcBind6422,
            fromIdx: slide.shapes.getConnectionSiteIndex(
              fcBind6421,
              fcBind6425.from,
            ),
            toIdx: slide.shapes.getConnectionSiteIndex(
              fcBind6422,
              fcBind6425.to,
            ),
            kind: EPe(item, fcBind6423, fcBind6424, fcBind3416),
            head: workbookBinding1683(item.arrowStart),
            tail: workbookBinding1683(item.arrowEnd),
            line: item.style?.line ?? fPe,
          });
        if (item.label) {
          let fcBind11093 = workbookBinding1615(item.label, {
              fontSize: workbookBinding1682.fontSize,
            }),
            fcBind11094 = Math.max(40, Math.ceil(fcBind11093.width + vPe)),
            fcBind11095 = _Pe,
            fcBind11096 = DPe(
              fcBind11094,
              fcBind11095,
              fcBind6423,
              fcBind6424,
              fcBind3416,
            ),
            fcBind11097 = slide.shapes.add({
              geometry: "rect",
              position: {
                left: fcBind11096.left - offsetX,
                top: fcBind11096.top - offsetY,
                width: fcBind11094,
                height: fcBind11095,
              },
              fill: workbookBinding1678,
              line: yPe,
            });
          workbookBinding1684(fcBind11097, item.label, workbookBinding1682);
          fcBind11097.zIndex = (fcBind6426.zIndex ?? 0) + 1;
        }
      }),
      {
        elements: slide.toProto().elements ?? [],
        idMap: fcBind3419,
      }
    );
  };
});
