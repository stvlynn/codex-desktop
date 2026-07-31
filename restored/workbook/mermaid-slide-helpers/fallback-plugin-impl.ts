// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: fallback mermaid→slide plugin (legacy HAe / VAe).
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

export const ensureFallbackPluginInit = esmInit(() => {
  workbookBinding1616();
  workbookBinding1618();
  workbookBinding1620();
  VAe = {
    id: "fallback",
    supports: (mshIn16645) => true,
    convert: async (mshIn2753, mshIn2754) => {
      mshIn2754.warn(
        `No dedicated converter for ${mshIn2753.type}; using text block.`,
      );
      let { slide } = workbookBinding1619(),
        workbookBinding10393 = mshIn2753.text.trim(),
        workbookBinding10394 = workbookBinding1615(workbookBinding10393),
        workbookBinding10395 = Math.max(240, workbookBinding10394.width + 40),
        workbookBinding10396 = Math.max(120, workbookBinding10394.height + 40),
        workbookBinding10397 = slide.shapes.add({
          geometry: "rect",
          position: {
            left: 0,
            top: 0,
            width: workbookBinding10395,
            height: workbookBinding10396,
          },
          fill: "#ffffff",
          line: {
            fill: "#333333",
            style: "solid",
          },
        });
      return (
        (workbookBinding10397.text = workbookBinding10393),
        workbookBinding1617(workbookBinding10397, {
          align: "left",
        }),
        {
          elements: slide.toProto().elements ?? [],
          idMap: {},
        }
      );
    },
  };
});

/** Legacy ensure alias. */
export const HAe = ensureFallbackPluginInit;
