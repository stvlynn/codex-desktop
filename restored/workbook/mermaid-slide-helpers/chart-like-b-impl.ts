// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart-like converters + zAe registry (legacy BAe tail).
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

export const ensureChartLikePluginsBInit = esmInit(() => {
  CAe = (props) =>
    props
      .slice()
      .sort((mshIn16057, mshIn16058) => mshIn16057.order - mshIn16058.order)
      .map((item, index) => {
        let workbookBinding14297 = workbookBinding1661(item.startTime),
          workbookBinding14298 = workbookBinding1661(
            item.renderEndTime ?? item.endTime,
          );
        return {
          task: item,
          label: item.task.trim(),
          section: item.section || item.type || "Tasks",
          startMs: workbookBinding14297,
          endMs: Math.max(
            workbookBinding14298,
            workbookBinding14297 + workbookBinding1655,
          ),
          rowIndex: index,
          sectionIndex: 0,
        };
      })
      .reduce((accumulator, current) => {
        let workbookBinding16831 = accumulator.some(
          (item) => item.section === current.section,
        )
          ? accumulator.find((item) => item.section === current.section)
              ?.sectionIndex
          : new Set(accumulator.map((item) => item.section)).size;
        return (
          accumulator.push({
            ...current,
            sectionIndex: workbookBinding16831 ?? 0,
          }),
          accumulator
        );
      }, []);
  wAe = (mshIn4391) => {
    let workbookBinding13557 = [];
    return (
      mshIn4391.forEach((item) => {
        let workbookBinding15527 = workbookBinding13557.find(
          (_item) => _item.name === item.section,
        );
        if (workbookBinding15527) {
          workbookBinding15527.rowCount += 1;
          return;
        }
        workbookBinding13557.push({
          name: item.section,
          index: workbookBinding13557.length,
          firstRow: item.rowIndex,
          rowCount: 1,
        });
      }),
      workbookBinding13557
    );
  };
  workbookBinding1663 = (
    mshIn7133,
    mshIn7134,
    mshIn7135,
    mshIn7136,
    mshIn7137,
  ) => {
    let workbookBinding17481 = mshIn7133.shapes.add({
      geometry: "textbox",
      name: mshIn7134,
      position: mshIn7136,
      fill: workbookBinding1629,
      line: workbookBinding1630,
    });
    return (
      (workbookBinding17481.text = mshIn7135),
      workbookBinding1617(workbookBinding17481, mshIn7137),
      (workbookBinding17481.zIndex = 5),
      workbookBinding17481
    );
  };
  TAe = (
    mshIn6753,
    mshIn6754,
    mshIn6755,
    mshIn6756,
    mshIn6757,
    mshIn6758,
    mshIn6759,
  ) => {
    let workbookBinding17065 = mshIn6753.shapes.add({
      geometry: "line",
      name: mshIn6754,
      position: {
        left: mshIn6755,
        top: mshIn6756,
        width: mshIn6757,
        height: mshIn6758,
      },
      fill: workbookBinding1629,
      line: mshIn6759,
    });
    return ((workbookBinding17065.zIndex = 2), workbookBinding17065);
  };
  EAe = (mshIn5921, mshIn5922) => {
    let workbookBinding15915 = new Date(mshIn5921),
      workbookBinding15916 = Date.UTC(
        workbookBinding15915.getUTCFullYear(),
        workbookBinding15915.getUTCMonth(),
        workbookBinding15915.getUTCDate() +
          ((7 - workbookBinding15915.getUTCDay()) % 7),
      ),
      workbookBinding15917 = [],
      workbookBinding15918 = workbookBinding15916;
    for (; workbookBinding15918 <= mshIn5922; ) {
      workbookBinding15917.push(workbookBinding15918);
      workbookBinding15918 += 7 * workbookBinding1655;
    }
    return workbookBinding15917;
  };
  DAe = (props) =>
    props.task.done
      ? {
          type: "solid",
          color: workbookBinding1626,
        }
      : props.task.active
        ? {
            type: "solid",
            color: workbookBinding1642,
          }
        : props.task.crit || props.task.classes?.includes("crit")
          ? {
              type: "solid",
              color: workbookBinding1627,
            }
          : {
              type: "solid",
              color: workbookBinding1642,
            };
  OAe = (mshIn433, mshIn434) => {
    let workbookBinding3918 = CAe(mshIn434);
    if (workbookBinding3918.length === 0)
      return workbookBinding1656("gantt diagram", []);
    let workbookBinding3919 = wAe(workbookBinding3918),
      workbookBinding3920 = Math.min(
        ...workbookBinding3918.map((item) => item.startMs),
      ),
      workbookBinding3921 = Math.max(
        ...workbookBinding3918.map((item) => item.endMs),
      ),
      workbookBinding3922 = Math.max(
        workbookBinding1655,
        workbookBinding3921 - workbookBinding3920,
      ),
      workbookBinding3923 = Math.max(
        420,
        Math.ceil(
          (workbookBinding3922 / workbookBinding1655) * workbookBinding1654,
        ),
      ),
      workbookBinding3924 =
        workbookBinding1647 + workbookBinding3923 + workbookBinding1648,
      workbookBinding3925 = workbookBinding3918.length * _Z,
      workbookBinding3926 = workbookBinding1651 + workbookBinding3925 + 2,
      workbookBinding3927 = (mshIn15912) =>
        workbookBinding1647 +
        ((mshIn15912 - workbookBinding3920) / workbookBinding3922) *
          workbookBinding3923,
      { slide } = workbookBinding1619();
    return (
      mshIn433 &&
        workbookBinding1663(
          slide,
          "mermaid.gantt.title",
          mshIn433,
          {
            left: 0,
            top: workbookBinding1649,
            width: workbookBinding3924,
            height: workbookBinding1650,
          },
          workbookBinding1644,
        ),
      EAe(workbookBinding3920, workbookBinding3921).forEach((item) => {
        let workbookBinding15390 = workbookBinding3927(item);
        TAe(
          slide,
          `mermaid.gantt.grid:${workbookBinding1662(item)}`,
          workbookBinding15390,
          workbookBinding1652,
          0,
          workbookBinding3926 - workbookBinding1652,
          workbookBinding1640,
        );
        workbookBinding1663(
          slide,
          `mermaid.gantt.tick:${workbookBinding1662(item)}`,
          workbookBinding1662(item),
          {
            left: workbookBinding15390 - 34,
            top: workbookBinding3926 + 3,
            width: 68,
            height: 14,
          },
          workbookBinding1646,
        );
      }),
      workbookBinding3919.forEach((item) => {
        let workbookBinding16128 =
          workbookBinding1651 +
          item.firstRow * _Z +
          (item.rowCount * _Z - 14) / 2;
        workbookBinding1663(
          slide,
          `mermaid.gantt.section-label:${item.name}`,
          item.name,
          {
            left: 10,
            top: workbookBinding16128,
            width: workbookBinding1647 - 18,
            height: 14,
          },
          workbookBinding1645,
        );
      }),
      workbookBinding3918.forEach((item) => {
        let workbookBinding6466 = workbookBinding1651 + item.rowIndex * _Z,
          workbookBinding6467 =
            workbookBinding1639[
              item.sectionIndex % workbookBinding1639.length
            ] ?? workbookBinding1638,
          workbookBinding6468 = slide.shapes.add({
            geometry: "rect",
            name: `mermaid.gantt.section:${item.task.id}:${item.section}`,
            position: {
              left: 0,
              top: workbookBinding6466,
              width: workbookBinding3924,
              height: _Z,
            },
            fill: {
              type: "solid",
              color: workbookBinding6467,
            },
            line: workbookBinding1630,
          });
        workbookBinding6468.zIndex = 0;
        let workbookBinding6469 = workbookBinding3927(item.startMs),
          workbookBinding6470 = workbookBinding3927(item.endMs),
          workbookBinding6471 = Math.max(
            8,
            workbookBinding6470 - workbookBinding6469,
          ),
          workbookBinding6472 = item.task.milestone ? "diamond" : "roundRect",
          workbookBinding6473 = slide.shapes.add({
            geometry: workbookBinding6472,
            name: `mermaid.gantt.task:${item.task.id}:${item.label}`,
            position: {
              left: item.task.milestone
                ? workbookBinding6469 +
                  workbookBinding6471 / 2 -
                  workbookBinding1653 / 2
                : workbookBinding6469,
              top: workbookBinding6466 + 2,
              width: item.task.milestone
                ? workbookBinding1653
                : workbookBinding6471,
              height: workbookBinding1653,
            },
            fill: DAe(item),
            line: workbookBinding1641,
          });
        workbookBinding6473.zIndex = 4;
        workbookBinding1663(
          slide,
          `mermaid.gantt.task-label:${item.task.id}`,
          item.label,
          {
            left: workbookBinding6469,
            top: workbookBinding6466 + 4,
            width: workbookBinding6471,
            height: workbookBinding1653 - 4,
          },
          workbookBinding1643,
        );
      }),
      {
        elements: slide.toProto().elements ?? [],
        idMap: {},
      }
    );
  };
  kAe = (mshIn14042) =>
    mshIn14042.filter((item) => item !== undefined).map((item) => String(item));
  AAe = (props) => {
    let workbookBinding20863 = props.getSections?.();
    return workbookBinding20863
      ? Array.from(workbookBinding20863.entries()).map(
          ([mshIn16178, mshIn16179]) => `${mshIn16178}: ${mshIn16179}`,
        )
      : [];
  };
  jAe = (mshIn5736) => {
    let workbookBinding15661 = mshIn5736.getQuadrantData?.();
    if (!workbookBinding15661) return [];
    let workbookBinding15662 = [];
    return (
      workbookBinding15661.title?.text &&
        workbookBinding15662.push(`Title: ${workbookBinding15661.title.text}`),
      workbookBinding15661.points?.forEach((mshIn12065) => {
        workbookBinding15662.push(
          `${mshIn12065.text?.text ?? mshIn12065.text} (${mshIn12065.x}, ${mshIn12065.y})`,
        );
      }),
      workbookBinding15662
    );
  };
  MAe = (props) =>
    (props.getTasks?.() ?? []).map((item) => {
      let workbookBinding21070 = item.events?.length
        ? ` -> ${item.events.join(", ")}`
        : "";
      return `${item.task}${workbookBinding21070}`;
    });
  NAe = (props) =>
    (props.getTasks?.() ?? []).map((item) => {
      let workbookBinding20539 = [item.startTime, item.endTime]
        .filter(Boolean)
        .join(" - ");
      return `${item.task}${workbookBinding20539 ? ` (${workbookBinding20539})` : ""}`;
    });
  PAe = (props) => {
    let workbookBinding20147 = props.getGraph?.();
    return workbookBinding20147
      ? workbookBinding20147.links.map(
          (item) => `${item.source} -> ${item.target}: ${item.value}`,
        )
      : [];
  };
  FAe = (props) => {
    let workbookBinding15751 = props.getXYChartData?.();
    if (!workbookBinding15751) return [];
    let workbookBinding15752 = [];
    return (
      workbookBinding15751.title &&
        workbookBinding15752.push(`Title: ${workbookBinding15751.title}`),
      workbookBinding15751.plots?.forEach((mshIn11600) => {
        workbookBinding15752.push(
          `${mshIn11600.label ?? mshIn11600.name}: ${mshIn11600.data?.length ?? 0} points`,
        );
      }),
      workbookBinding15752
    );
  };
  IAe = (props) =>
    (props.getNodes?.() ?? []).map((item) => {
      let workbookBinding21408 =
        item.value === undefined ? "" : ` (${item.value})`;
      return `${item.name}${workbookBinding21408}`;
    });
  LAe = (props) => {
    let workbookBinding14987 = props.getAxes?.() ?? [],
      workbookBinding14988 = props.getCurves?.() ?? [],
      workbookBinding14989 = [];
    return (
      workbookBinding14987.forEach((item) => {
        workbookBinding14989.push(`Axis: ${item.label ?? item.name}`);
      }),
      workbookBinding14988.forEach((item) => {
        workbookBinding14989.push(
          `${item.label ?? item.name}: ${item.entries?.join(", ")}`,
        );
      }),
      workbookBinding14989
    );
  };
  RAe = (props) =>
    (props.getPacket?.() ?? []).map((item, index) => {
      let workbookBinding20366 = item
        .map((_item) => _item.label ?? _item.value ?? "")
        .filter(Boolean);
      return `Word ${index + 1}: ${workbookBinding20366.join(" | ")}`;
    });
  zAe = {
    id: "chart-like",
    supports: (mshIn7083) =>
      [
        "pie",
        "quadrantChart",
        "timeline",
        "gantt",
        "sankey",
        "xychart",
        "treemap",
        "radar",
        "packet",
      ].includes(mshIn7083),
    convert: async (mshIn1106, mshIn1107) => {
      let workbookBinding6480 = mshIn1106.db,
        workbookBinding6481 = mshIn1106.type,
        workbookBinding6482 = [];
      switch (workbookBinding6481) {
        case "pie":
          workbookBinding6482 = AAe(workbookBinding6480);
          break;
        case "quadrantChart": {
          let workbookBinding20515 = workbookBinding6480.getQuadrantData?.();
          if (workbookBinding20515)
            return workbookBinding1660(workbookBinding20515);
          workbookBinding6482 = jAe(workbookBinding6480);
          break;
        }
        case "timeline":
          workbookBinding6482 = MAe(workbookBinding6480);
          break;
        case "gantt": {
          let workbookBinding19812 = workbookBinding6480.getTasks?.();
          if (workbookBinding19812)
            return OAe(
              workbookBinding6480.getDiagramTitle?.() ?? "",
              workbookBinding19812,
            );
          workbookBinding6482 = NAe(workbookBinding6480);
          break;
        }
        case "sankey":
          workbookBinding6482 = PAe(workbookBinding6480);
          break;
        case "xychart":
          workbookBinding6482 = FAe(workbookBinding6480);
          break;
        case "treemap":
          workbookBinding6482 = IAe(workbookBinding6480);
          break;
        case "radar":
          workbookBinding6482 = LAe(workbookBinding6480);
          break;
        case "packet":
          workbookBinding6482 = RAe(workbookBinding6480);
          break;
        default:
          workbookBinding6482 = [];
          break;
      }
      return (
        workbookBinding6482.length === 0 &&
          (mshIn1107.warn(
            `Using fallback list layout for ${workbookBinding6481}.`,
          ),
          (workbookBinding6482 = kAe(mshIn1106.text.split(/\r?\n/)))),
        workbookBinding1656(
          `${workbookBinding6481} diagram`,
          workbookBinding6482,
        )
      );
    },
  };
});
