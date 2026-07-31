// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: SVG CSS + class text style helpers (legacy XAe).
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

export const ensureArrowGeometryInit = esmInit(() => {
  workbookBinding1664 = (mshIn9824) => {
    if (!mshIn9824) return;
    let workbookBinding20367 = mshIn9824.replace("px", "").trim(),
      workbookBinding20368 = Number(workbookBinding20367);
    return Number.isFinite(workbookBinding20368)
      ? workbookBinding20368
      : undefined;
  };
  qAe = (mshIn15913) => mshIn15913.trim().toLowerCase();
  workbookBinding1665 = {
    type: "solid",
    color: {
      type: "theme",
      value: "accent1",
      transform: {
        darken: 0.45,
      },
    },
  };
  JAe = (props) => {
    if (props)
      return {
        fill: props.fill ?? workbookBinding1665,
        style: props.style,
        width: props.width,
      };
  };
  workbookBinding1666 = (mshIn13416, mshIn13417) => ({
    ...(JAe(mshIn13416) ?? {
      fill: workbookBinding1665,
      style: "solid",
    }),
    ...mshIn13417,
  });
  YAe = (props) => {
    let workbookBinding16749 = props.replace(/\s/g, "");
    return workbookBinding16749
      ? workbookBinding16749
          .split(",")
          .map((item) => Number(item))
          .every((item) => Number.isFinite(item) && item <= 2)
        ? "dotted"
        : "dashed"
      : "solid";
  };
  workbookBinding1667 = (mshIn744) => {
    if (!mshIn744 || mshIn744.length === 0) return {};
    let workbookBinding5221 = {};
    return (
      mshIn744.forEach((item) => {
        let [workbookBinding5477, workbookBinding5478] = item.split(":");
        if (!workbookBinding5477 || workbookBinding5478 === undefined) return;
        let workbookBinding5479 = qAe(workbookBinding5477),
          workbookBinding5480 = workbookBinding5478.trim();
        switch (workbookBinding5479) {
          case "fill":
          case "background":
          case "background-color":
            workbookBinding5480 === "none"
              ? (workbookBinding5221.fill = undefined)
              : (workbookBinding5221.fill = workbookBinding5480);
            break;
          case "stroke":
            workbookBinding5480 === "none"
              ? (workbookBinding5221.line = undefined)
              : (workbookBinding5221.line = workbookBinding1666(
                  workbookBinding5221.line,
                  {
                    fill: workbookBinding5480,
                  },
                ));
            break;
          case "stroke-width": {
            let workbookBinding20574 = workbookBinding1664(workbookBinding5480);
            workbookBinding20574 !== undefined &&
              (workbookBinding5221.line = workbookBinding1666(
                workbookBinding5221.line,
                {
                  width: workbookBinding20574,
                },
              ));
            break;
          }
          case "stroke-dasharray":
            workbookBinding5221.line = workbookBinding1666(
              workbookBinding5221.line,
              {
                style: YAe(workbookBinding5480),
              },
            );
            break;
          case "color":
          case "font-color":
            workbookBinding5221.text = {
              ...workbookBinding5221.text,
              color: workbookBinding5480,
            };
            break;
          case "font-size": {
            let workbookBinding20516 = workbookBinding1664(workbookBinding5480);
            workbookBinding20516 !== undefined &&
              (workbookBinding5221.text = {
                ...workbookBinding5221.text,
                fontSize: workbookBinding20516,
              });
            break;
          }
          case "font-weight":
            workbookBinding5221.text = {
              ...workbookBinding5221.text,
              bold:
                workbookBinding5480 === "bold" || workbookBinding5480 === "700",
            };
            break;
          case "font-style":
            workbookBinding5221.text = {
              ...workbookBinding5221.text,
              italic: workbookBinding5480 === "italic",
            };
            break;
          case "text-align":
            (workbookBinding5480 === "left" ||
              workbookBinding5480 === "center" ||
              workbookBinding5480 === "right") &&
              (workbookBinding5221.text = {
                ...workbookBinding5221.text,
                align: workbookBinding5480,
              });
            break;
          default:
            break;
        }
      }),
      workbookBinding5221
    );
  };
});

/** Legacy ensure alias. */
export const XAe = ensureArrowGeometryInit;
