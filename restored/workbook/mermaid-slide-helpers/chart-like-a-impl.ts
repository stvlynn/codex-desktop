// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart-like plugin tokens + gantt date helpers (legacy BAe head).
// Stage-3 wave-69 cohesive mermaid-slide-helpers impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureZodRuntime as appInitialBst } from "../../vendor/zod";
import { ensureChartProtoNameMapsInit as workbookBinding404 } from "../chart-proto-name-maps";
import { mshH } from "./boundary-hooks";
import {
  workbookBinding1592,
  workbookBinding1593,
  workbookBinding1594,
  workbookBinding1595,
  workbookBinding1596,
  workbookBinding1597,
  workbookBinding1598,
  workbookBinding1599,
  workbookBinding1600,
  _X,
  workbookBinding1601,
  workbookBinding1602,
  workbookBinding1603,
  workbookBinding1604,
  workbookBinding1605,
  workbookBinding1606,
  workbookBinding1607,
  workbookBinding1608,
  workbookBinding1609,
  workbookBinding1610,
  workbookBinding1611,
  workbookBinding1612,
  workbookBinding1613,
  workbookBinding1614,
  workbookBinding1615,
  workbookBinding1617,
  workbookBinding1619,
  workbookBinding1621,
  workbookBinding1622,
  workbookBinding1623,
  workbookBinding1624,
  workbookBinding1625,
  workbookBinding1626,
  workbookBinding1627,
  workbookBinding1628,
  workbookBinding1629,
  workbookBinding1630,
  workbookBinding1631,
  workbookBinding1632,
  workbookBinding1633,
  workbookBinding1634,
  workbookBinding1635,
  $X,
  workbookBinding1636,
  workbookBinding1637,
  workbookBinding1638,
  workbookBinding1639,
  workbookBinding1640,
  workbookBinding1641,
  workbookBinding1642,
  workbookBinding1643,
  workbookBinding1644,
  workbookBinding1645,
  workbookBinding1646,
  workbookBinding1647,
  workbookBinding1648,
  workbookBinding1649,
  workbookBinding1650,
  workbookBinding1651,
  workbookBinding1652,
  _Z,
  workbookBinding1653,
  workbookBinding1654,
  workbookBinding1655,
  workbookBinding1656,
  workbookBinding1657,
  workbookBinding1658,
  workbookBinding1659,
  workbookBinding1660,
  workbookBinding1661,
  workbookBinding1662,
  CAe,
  wAe,
  workbookBinding1663,
  TAe,
  EAe,
  DAe,
  OAe,
  kAe,
  AAe,
  jAe,
  MAe,
  NAe,
  PAe,
  FAe,
  IAe,
  LAe,
  RAe,
  zAe,
  VAe,
  UAe,
  WAe,
  GAe,
  workbookBinding1664,
  qAe,
  workbookBinding1665,
  JAe,
  workbookBinding1666,
  YAe,
  workbookBinding1667,
  ZAe,
  workbookBinding1668,
} from "./helper-slots";
import { workbookBinding1616 } from "./text-measure-impl";
import { workbookBinding1618 } from "./run-style-impl";
import { workbookBinding1620 } from "./scratch-slide-impl";

export const ensureChartLikePluginsAInit = esmInit(() => {
  workbookBinding1616();
  workbookBinding1618();
  workbookBinding1620();
  workbookBinding1621 = "accent1";
  workbookBinding1622 = {
    type: "theme",
    value: workbookBinding1621,
    transform: {
      lighten: 0.9,
    },
  };
  workbookBinding1623 = {
    type: "theme",
    value: workbookBinding1621,
    transform: {
      lighten: 0.85,
    },
  };
  workbookBinding1624 = {
    type: "theme",
    value: workbookBinding1621,
    transform: {
      lighten: 0.8,
    },
  };
  workbookBinding1625 = {
    type: "theme",
    value: workbookBinding1621,
    transform: {
      lighten: 0.75,
    },
  };
  workbookBinding1626 = {
    type: "theme",
    value: workbookBinding1621,
    transform: {
      lighten: 0.4,
    },
  };
  workbookBinding1627 = {
    type: "theme",
    value: workbookBinding1621,
    transform: {
      darken: 0.25,
    },
  };
  workbookBinding1628 = {
    type: "theme",
    value: workbookBinding1621,
    transform: {
      darken: 0.5,
    },
  };
  workbookBinding1629 = {
    type: "none",
  };
  workbookBinding1630 = {
    fill: {
      type: "none",
    },
    style: "solid",
    width: 0,
  };
  workbookBinding1631 = {
    fill: {
      type: "solid",
      color: workbookBinding1626,
    },
    style: "solid",
    width: 1,
  };
  workbookBinding1632 = {
    ...workbookBinding1631,
    width: 2,
  };
  workbookBinding1633 = {
    fill: {
      type: "solid",
      color: workbookBinding1628,
    },
    style: "solid",
    width: 1,
  };
  workbookBinding1634 = {
    color: workbookBinding1628,
    fontSize: 16,
    align: "center",
    verticalAlign: "middle",
    wrap: "none",
    insets: {
      top: 0,
      right: 4,
      bottom: 0,
      left: 4,
    },
  };
  workbookBinding1635 = {
    ...workbookBinding1634,
    fontSize: 12,
  };
  $X = {
    ...workbookBinding1634,
    fontSize: 20,
    bold: true,
  };
  workbookBinding1636 = [
    workbookBinding1624,
    workbookBinding1623,
    workbookBinding1622,
    workbookBinding1625,
  ];
  workbookBinding1637 = {
    type: "solid",
    color: workbookBinding1627,
  };
  workbookBinding1638 = {
    type: "theme",
    value: workbookBinding1621,
    transform: {
      lighten: 0.8,
      opacity: 0.26,
    },
  };
  workbookBinding1639 = [
    workbookBinding1638,
    {
      type: "theme",
      value: workbookBinding1621,
      transform: {
        lighten: 0.9,
        opacity: 0.16,
      },
    },
    {
      type: "theme",
      value: workbookBinding1621,
      transform: {
        lighten: 0.75,
        opacity: 0.22,
      },
    },
    {
      type: "theme",
      value: workbookBinding1621,
      transform: {
        lighten: 0.9,
        opacity: 0.16,
      },
    },
  ];
  workbookBinding1640 = {
    fill: {
      type: "solid",
      color: {
        type: "theme",
        value: workbookBinding1621,
        transform: {
          lighten: 0.8,
          opacity: 0.8,
        },
      },
    },
    style: "solid",
    width: 1,
  };
  workbookBinding1641 = {
    fill: {
      type: "solid",
      color: workbookBinding1627,
    },
    style: "solid",
    width: 2,
  };
  workbookBinding1642 = {
    type: "theme",
    value: workbookBinding1621,
  };
  workbookBinding1643 = {
    color: {
      type: "theme",
      value: "bg1",
    },
    fontSize: 11,
    align: "center",
    verticalAlign: "middle",
    wrap: "none",
    insets: {
      top: 0,
      right: 3,
      bottom: 0,
      left: 3,
    },
  };
  workbookBinding1644 = {
    color: workbookBinding1628,
    fontSize: 18,
    align: "center",
    verticalAlign: "middle",
    wrap: "none",
    insets: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  workbookBinding1645 = {
    color: workbookBinding1628,
    fontSize: 11,
    align: "left",
    verticalAlign: "middle",
    wrap: "none",
    insets: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  workbookBinding1646 = {
    color: workbookBinding1628,
    fontSize: 10,
    align: "center",
    verticalAlign: "middle",
    wrap: "none",
    insets: {
      top: 0,
      right: 2,
      bottom: 0,
      left: 2,
    },
  };
  workbookBinding1647 = 75;
  workbookBinding1648 = 75;
  workbookBinding1649 = 13;
  workbookBinding1650 = 24;
  workbookBinding1651 = 48;
  workbookBinding1652 = 35;
  _Z = 24;
  workbookBinding1653 = 20;
  workbookBinding1654 = 22.28;
  workbookBinding1655 = 86400000;
  workbookBinding1656 = (mshIn3115, mshIn3116) => {
    let { slide } = workbookBinding1619(),
      workbookBinding11224 = [mshIn3115, "", ...mshIn3116]
        .filter((item) => item !== "")
        .join("\n"),
      workbookBinding11225 = workbookBinding1615(workbookBinding11224),
      workbookBinding11226 = Math.max(240, workbookBinding11225.width + 40),
      workbookBinding11227 = Math.max(120, workbookBinding11225.height + 40),
      workbookBinding11228 = slide.shapes.add({
        geometry: "rect",
        position: {
          left: 0,
          top: 0,
          width: workbookBinding11226,
          height: workbookBinding11227,
        },
        fill: "#ffffff",
        line: {
          fill: "#333333",
          style: "solid",
        },
      });
    return (
      (workbookBinding11228.text = workbookBinding11224),
      workbookBinding1617(workbookBinding11228, {
        align: "left",
      }),
      {
        elements: slide.toProto().elements ?? [],
        idMap: {},
      }
    );
  };
  workbookBinding1657 = (mshIn3567) => {
    let workbookBinding12052 = workbookBinding1615(mshIn3567.text, {
        fontSize: mshIn3567.fontSize,
        fontWeight: mshIn3567.fontSize >= 20 ? "bold" : undefined,
      }),
      workbookBinding12053 = Math.ceil(workbookBinding12052.width + 12),
      workbookBinding12054 = Math.ceil(workbookBinding12052.height + 6),
      workbookBinding12055 =
        mshIn3567.verticalPos === "left"
          ? mshIn3567.x
          : mshIn3567.x - workbookBinding12053 / 2,
      workbookBinding12056 =
        mshIn3567.horizontalPos === "top"
          ? mshIn3567.y
          : mshIn3567.y - workbookBinding12054 / 2;
    return (
      mshIn3567.rotation !== 0 &&
        ((workbookBinding12055 = mshIn3567.x - workbookBinding12053 / 2),
        (workbookBinding12056 = mshIn3567.y - workbookBinding12054 / 2)),
      {
        left: workbookBinding12055,
        top: workbookBinding12056,
        width: workbookBinding12053,
        height: workbookBinding12054,
        rotation: mshIn3567.rotation,
      }
    );
  };
  workbookBinding1658 = (mshIn5622, mshIn5623, mshIn5624, mshIn5625) => {
    let workbookBinding15469 = mshIn5622.shapes.add({
      geometry: "textbox",
      name: mshIn5623,
      position: workbookBinding1657(mshIn5624),
      fill: workbookBinding1629,
      line: workbookBinding1630,
    });
    return (
      (workbookBinding15469.text = mshIn5624.text),
      workbookBinding1617(workbookBinding15469, {
        ...mshIn5625,
        fontSize: mshIn5624.fontSize,
      }),
      (workbookBinding15469.zIndex = 4),
      workbookBinding15469
    );
  };
  workbookBinding1659 = (mshIn4869, mshIn4870, mshIn4871) => {
    let workbookBinding14275 = mshIn4869.shapes.add({
      geometry: "line",
      name: `mermaid.quadrant.border:${mshIn4871}`,
      position: {
        left: mshIn4870.x1,
        top: mshIn4870.y1,
        width: mshIn4870.x2 - mshIn4870.x1,
        height: mshIn4870.y2 - mshIn4870.y1,
      },
      fill: workbookBinding1629,
      line:
        mshIn4870.strokeWidth > 1 ? workbookBinding1632 : workbookBinding1631,
    });
    return ((workbookBinding14275.zIndex = 2), workbookBinding14275);
  };
  workbookBinding1660 = (mshIn918) => {
    let { slide } = workbookBinding1619();
    return (
      mshIn918.quadrants.forEach((item, index) => {
        let workbookBinding12242 = slide.shapes.add({
          geometry: "rect",
          name: `mermaid.quadrant.region:${index + 1}`,
          position: {
            left: item.x,
            top: item.y,
            width: item.width,
            height: item.height,
          },
          fill: {
            type: "solid",
            color: workbookBinding1636[index] ?? workbookBinding1625,
          },
          line: workbookBinding1630,
        });
        workbookBinding12242.zIndex = 0;
        workbookBinding1658(
          slide,
          `mermaid.quadrant.region-label:${index + 1}`,
          item.text,
          workbookBinding1634,
        );
      }),
      mshIn918.borderLines?.forEach((mshIn14967, mshIn14968) => {
        workbookBinding1659(slide, mshIn14967, mshIn14968);
      }),
      mshIn918.axisLabels.forEach((item) => {
        workbookBinding1658(
          slide,
          `mermaid.quadrant.axis-label:${item.text}`,
          item,
          workbookBinding1634,
        );
      }),
      mshIn918.title &&
        workbookBinding1658(
          slide,
          "mermaid.quadrant.title",
          mshIn918.title,
          $X,
        ),
      mshIn918.points.forEach((item) => {
        let workbookBinding12140 = slide.shapes.add({
          geometry: "ellipse",
          name: `mermaid.quadrant.point:${item.text.text}`,
          position: {
            left: item.x - item.radius,
            top: item.y - item.radius,
            width: item.radius * 2,
            height: item.radius * 2,
          },
          fill: workbookBinding1637,
          line: workbookBinding1633,
        });
        workbookBinding12140.zIndex = 5;
        workbookBinding1658(
          slide,
          `mermaid.quadrant.point-label:${item.text.text}`,
          item.text,
          workbookBinding1635,
        );
      }),
      {
        elements: slide.toProto().elements ?? [],
        idMap: {},
      }
    );
  };
  workbookBinding1661 = (mshIn4045) => {
    if (mshIn4045 instanceof Date) return mshIn4045.getTime();
    if (typeof mshIn4045 == "number") return mshIn4045;
    if (typeof mshIn4045 == "string") {
      let workbookBinding21965 = new Date(mshIn4045).getTime();
      if (Number.isFinite(workbookBinding21965)) return workbookBinding21965;
    }
    if (mshIn4045 && typeof mshIn4045 == "object" && "valueOf" in mshIn4045) {
      let workbookBinding22027 = Number(mshIn4045.valueOf());
      if (Number.isFinite(workbookBinding22027)) return workbookBinding22027;
    }
    throw Error(`Invalid Gantt date value: ${String(mshIn4045)}`);
  };
  workbookBinding1662 = (mshIn8927) => {
    let workbookBinding19483 = new Date(mshIn8927);
    return `${workbookBinding19483.getUTCFullYear()}-${String(workbookBinding19483.getUTCMonth() + 1).padStart(2, "0")}-${String(workbookBinding19483.getUTCDate()).padStart(2, "0")}`;
  };
});
