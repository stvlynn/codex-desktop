// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-62: gitGraph theme + commit markers (legacy dFe head / Binding1688–1712).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  measureTextBlock,
  ensureMeasureTextInit,
  applyRunTextStyle,
  ensureApplyRunTextStyleInit,
  createScratchSlide,
  ensureScratchSlideInit,
  resolveClassTextStyles,
  layoutGraphNodes,
  renderGraphToSlide,
  ensureChartLikePluginsInit,
  ensureFallbackPluginInit,
  ensureFlowchartPluginInit,
  ensureStateGeometryMapsInit,
  ensureArrowGeometryMapsInit,
  ensureConnectorHelpersInit,
  stateNodeGeometry,
  mindNodeGeometry,
  roundedConnectorCorner,
} from "./boundary-hooks";
import { msa } from "./adapters-bag";
import { ensureConnectorEpsilonInit } from "./connector-epsilon";

export const ensureGitGraphThemeInit = esmInit(() => {
  ensureConnectorEpsilonInit();
  ensureMeasureTextInit();
  ensureApplyRunTextStyleInit();
  ensureScratchSlideInit();
  ensureConnectorEpsilonInit();
  ensureMeasureTextInit();
  ensureApplyRunTextStyleInit();
  ensureScratchSlideInit();
  msa.gitAccentIdx1 = 1;
  msa.gitAccentIdx2 = 2;
  msa.gitAccentIdx3 = 3;
  msa.msaBind1688 = 4;
  msa.msaBind1689 = [
    "accent1",
    "accent2",
    "accent3",
    "accent4",
    "accent5",
    "accent6",
  ];
  msa.msaBind1690 = {
    type: "theme",
    value: "accent1",
    transform: {
      lighten: 0.9,
    },
  };
  msa.gitDarkAccent = {
    type: "theme",
    value: "accent1",
    transform: {
      darken: 0.5,
    },
  };
  msa.msaBind1691 = {
    type: "theme",
    value: "tx1",
    transform: {
      opacity: 0.75,
    },
  };
  msa.gitBgMuted = {
    type: "theme",
    value: "bg1",
    transform: {
      opacity: 0.65,
    },
  };
  msa.gitAccentDark = {
    type: "theme",
    value: "accent1",
    transform: {
      darken: 0.5,
    },
  };
  msa.gitAccentLight = {
    type: "theme",
    value: "accent1",
    transform: {
      lighten: 0.6,
    },
  };
  msa.msaBind1692 = {
    type: "none",
  };
  msa.msaBind1693 = {
    fill: {
      type: "none",
    },
    style: "solid",
    width: 0,
  };
  msa.msaBind1694 = {
    color: {
      type: "theme",
      value: "bg1",
    },
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
  msa.msaBind1695 = {
    color: msa.gitDarkAccent,
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
  msa.msaBind1696 = {
    color: msa.gitAccentDark,
    fontSize: 10,
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
  msa.gitCommitRadius = 40;
  msa.gitCommitDiameter = 46;
  msa.msaBind1697 = 90;
  msa.msaBind1698 = 50;
  msa.msaBind1699 = 10;
  msa.msaBind1700 = 10;
  msa.msaBind1701 = 20;
  msa.msaBind1702 = 12;
  msa.gitLabelPad = 16;
  msa.msaBind1703 = 22.5;
  msa.msaBind1704 = 18;
  msa.gitTagPad = 9;
  msa.msaBind1705 = 8;
  msa.gitBranchColor = (msaIn9078) => {
    let msaBind19659 = msa.msaBind1689[msaIn9078 % msa.msaBind1689.length];
    if (msaBind19659 === undefined)
      throw Error(`Git graph branch theme is missing for index ${msaIn9078}.`);
    return msaBind19659;
  };
  msa.msaBind1706 = (msaIn14045, msaIn14046) => ({
    type: "theme",
    value: msa.gitBranchColor(msaIn14045),
    transform: msaIn14046,
  });
  msa.msaBind1707 = (msaIn15914) =>
    msa.msaBind1706(msaIn15914, {
      darken: 0.5,
    });
  msa.msaBind1708 = (msaIn15548) => ({
    type: "solid",
    color: msa.msaBind1706(msaIn15548),
  });
  msa.msaBind1709 = (msaIn10774, msaIn10775, msaIn10776 = "solid") => ({
    fill: {
      type: "solid",
      color: msa.msaBind1706(msaIn10774),
    },
    style: msaIn10776,
    width: msaIn10775,
  });
  msa.gitCommitKind = (props) => props.customType ?? props.type;
  msa.msaBind1710 = (msaIn9037, msaIn9038) => {
    if (
      msaIn9038.showCommitLabel !== false &&
      msaIn9037.type !== msa.msaBind1688 &&
      !(msaIn9037.type === msa.gitAccentIdx3 && !msaIn9037.customId)
    )
      return msaIn9037.id;
  };
  msa.gitNormalizeDirection = (msaIn9592) => {
    switch (msaIn9592) {
      case "BT":
      case "TB":
        return msaIn9592;
      default:
        return "LR";
    }
  };
  msa.gitLayoutCommits = (msaIn2253, msaIn2254, msaIn2255, msaIn2256) => {
    let msaBind9316 = new Map(
        msaIn2254.map((item, index) => [item.name, index]),
      ),
      msaBind9317 = Math.max(...msaIn2253.map((item) => item.seq));
    return msaIn2253.map((item) => {
      let msaBind10673 = msaBind9316.get(item.branch);
      if (msaBind10673 === undefined)
        throw Error(
          `Git graph commit references missing branch ${item.branch}.`,
        );
      if (msaIn2255 === "TB" || msaIn2255 === "BT") {
        let msaBind17482 =
          msaIn2255 === "BT" ? msaBind9317 - item.seq : item.seq;
        return {
          ...item,
          x: msaBind10673 * msa.msaBind1697,
          y: msa.msaBind1699 + msaBind17482 * msa.msaBind1698,
          branchIndex: msaBind10673,
          displayLabel: msa.msaBind1710(item, msaIn2256),
        };
      }
      return {
        ...item,
        x: msa.msaBind1699 + item.seq * msa.msaBind1698,
        y: msaBind10673 * msa.msaBind1697,
        branchIndex: msaBind10673,
        displayLabel: msa.msaBind1710(item, msaIn2256),
      };
    });
  };
  msa.msaBind1711 = (
    msaIn3568,
    msaIn3569,
    msaIn3570,
    msaIn3571,
    msaIn3572,
    msaIn3573,
  ) => {
    let msaBind12060 = Math.abs(msaIn3571.x - msaIn3570.x),
      msaBind12061 = Math.abs(msaIn3571.y - msaIn3570.y),
      msaBind12062 = msaIn3568.shapes.add({
        geometry: "line",
        name: msaIn3569,
        position: {
          left: Math.min(msaIn3570.x, msaIn3571.x),
          top: Math.min(msaIn3570.y, msaIn3571.y),
          width: msaBind12060,
          height: msaBind12061,
          horizontalFlip: msaIn3570.x > msaIn3571.x,
          verticalFlip: msaIn3570.y > msaIn3571.y,
        },
        fill: msa.msaBind1692,
        line: msaIn3572,
      });
    return ((msaBind12062.zIndex = msaIn3573), msaBind12062);
  };
  msa.gitAddShape = (
    msaIn6954,
    msaIn6955,
    msaIn6956,
    msaIn6957,
    msaIn6958,
    msaIn6959 = msa.msaBind1692,
  ) => {
    let msaBind17314 = msaIn6954.shapes.add({
      geometry: "textbox",
      name: msaIn6955,
      position: msaIn6957,
      fill: msaIn6959,
      line: msa.msaBind1693,
    });
    return (
      (msaBind17314.text = msaIn6956),
      applyRunTextStyle(msaBind17314, msaIn6958),
      (msaBind17314.zIndex = 7),
      msaBind17314
    );
  };
  msa.msaBind1712 = (msaIn6150, msaIn6151, msaIn6152, msaIn6153) => {
    let msaBind16240 = msaIn6150.shapes.add({
      geometry: "roundRect",
      name: `mermaid.git.branch-label:${msaIn6151.name}`,
      position: msaIn6153,
      fill: msa.msaBind1708(msaIn6152),
      line: msa.msaBind1693,
    });
    return (
      (msaBind16240.text = msaIn6151.name),
      applyRunTextStyle(msaBind16240, {
        ...msa.msaBind1694,
      }),
      (msaBind16240.zIndex = 5),
      msaBind16240
    );
  };
  msa.gitDrawCommitMarker = (msaIn363, msaIn364) => {
    let msaBind3736 = msaIn364.branchIndex,
      msaBind3737 = msa.gitCommitKind(msaIn364);
    if (msaBind3737 === msa.gitAccentIdx2) {
      let msaBind8469 = msaIn363.shapes.add({
        geometry: "rect",
        name: `mermaid.git.commit-marker:${msaIn364.seq}:${msaIn364.id}`,
        position: {
          left: msaIn364.x - msa.msaBind1701 / 2,
          top: msaIn364.y - msa.msaBind1701 / 2,
          width: msa.msaBind1701,
          height: msa.msaBind1701,
        },
        fill: {
          type: "solid",
          color: msa.msaBind1707(msaBind3736),
        },
        line: {
          fill: {
            type: "solid",
            color: msa.msaBind1707(msaBind3736),
          },
          style: "solid",
          width: 1,
        },
      });
      msaBind8469.zIndex = 6;
      let msaBind8470 = msaIn363.shapes.add({
        geometry: "rect",
        name: `mermaid.git.commit-inner:${msaIn364.seq}:${msaIn364.id}`,
        position: {
          left: msaIn364.x - msa.msaBind1702 / 2,
          top: msaIn364.y - msa.msaBind1702 / 2,
          width: msa.msaBind1702,
          height: msa.msaBind1702,
        },
        fill: msa.msaBind1708(msaBind3736),
        line: msa.msaBind1709(msaBind3736, 1),
      });
      return ((msaBind8470.zIndex = 7), msaBind8469);
    }
    let msaBind3738 = msaIn363.shapes.add({
      geometry: "ellipse",
      name: `mermaid.git.commit-marker:${msaIn364.seq}:${msaIn364.id}`,
      position: {
        left: msaIn364.x - msa.msaBind1700,
        top: msaIn364.y - msa.msaBind1700,
        width: msa.msaBind1700 * 2,
        height: msa.msaBind1700 * 2,
      },
      fill: msa.msaBind1708(msaBind3736),
      line: msa.msaBind1709(msaBind3736, 2),
    });
    if (
      ((msaBind3738.zIndex = 6),
      msaBind3737 === msa.gitAccentIdx1 &&
        (msa.msaBind1711(
          msaIn363,
          `mermaid.git.commit-reverse:${msaIn364.seq}:${msaIn364.id}:msa.msaSym1`,
          {
            x: msaIn364.x - 5,
            y: msaIn364.y - 5,
          },
          {
            x: msaIn364.x + 5,
            y: msaIn364.y + 5,
          },
          {
            fill: {
              type: "solid",
              color: msa.msaBind1690,
            },
            style: "solid",
            width: 3,
          },
          7,
        ),
        msa.msaBind1711(
          msaIn363,
          `mermaid.git.commit-reverse:${msaIn364.seq}:${msaIn364.id}:msa.msaSym2`,
          {
            x: msaIn364.x - 5,
            y: msaIn364.y + 5,
          },
          {
            x: msaIn364.x + 5,
            y: msaIn364.y - 5,
          },
          {
            fill: {
              type: "solid",
              color: msa.msaBind1690,
            },
            style: "solid",
            width: 3,
          },
          7,
        )),
      msaBind3737 === msa.gitAccentIdx3)
    ) {
      let msaBind13254 = msaIn363.shapes.add({
        geometry: "ellipse",
        name: `mermaid.git.commit-inner:${msaIn364.seq}:${msaIn364.id}`,
        position: {
          left: msaIn364.x - 5,
          top: msaIn364.y - 5,
          width: 10,
          height: 10,
        },
        fill: {
          type: "solid",
          color: msa.msaBind1690,
        },
        line: {
          fill: {
            type: "solid",
            color: msa.msaBind1690,
          },
          style: "solid",
          width: 1,
        },
      });
      msaBind13254.zIndex = 7;
    }
    if (msaBind3737 === msa.msaBind1688) {
      let msaBind10658 = msaIn363.shapes.add({
        geometry: "ellipse",
        name: `mermaid.git.commit-cherry-eye:${msaIn364.seq}:${msaIn364.id}:left`,
        position: {
          left: msaIn364.x - 5,
          top: msaIn364.y,
          width: 4,
          height: 4,
        },
        fill: {
          type: "solid",
          color: msa.msaBind1690,
        },
        line: msa.msaBind1693,
      });
      msaBind10658.zIndex = 7;
      let msaBind10659 = msaIn363.shapes.add({
        geometry: "ellipse",
        name: `mermaid.git.commit-cherry-eye:${msaIn364.seq}:${msaIn364.id}:right`,
        position: {
          left: msaIn364.x + 1,
          top: msaIn364.y,
          width: 4,
          height: 4,
        },
        fill: {
          type: "solid",
          color: msa.msaBind1690,
        },
        line: msa.msaBind1693,
      });
      msaBind10659.zIndex = 7;
    }
    return msaBind3738;
  };
  msa.gitDrawCommitLabel = (msaIn3410, msaIn3411, msaIn3412) => {
    if (!msaIn3411.displayLabel) return;
    let msaBind11807 = measureTextBlock(msaIn3411.displayLabel, {
        fontSize: msa.msaBind1695.fontSize,
      }),
      msaBind11808 = Math.max(34, Math.ceil(msaBind11807.width + 8));
    msa.gitAddShape(
      msaIn3410,
      `mermaid.git.commit-label:${msaIn3411.seq}:${msaIn3411.id}`,
      msaIn3411.displayLabel,
      {
        left: msaIn3411.x - msaBind11808 / 2,
        top: msaIn3411.y + msa.msaBind1700 + 4,
        width: msaBind11808,
        height: msa.gitLabelPad,
        rotation: msaIn3412.rotateCommitLabel === false ? 0 : -45,
      },
      msa.msaBind1695,
      {
        type: "solid",
        color: msa.gitBgMuted,
      },
    );
  };
  msa.gitDrawCommitTags = (msaIn1508, msaIn1509) => {
    msaIn1509.tags.forEach((item, index) => {
      let msaBind7776 = measureTextBlock(item, {
          fontSize: msa.msaBind1696.fontSize,
        }),
        msaBind7777 = Math.max(40, Math.ceil(msaBind7776.width + 18)),
        msaBind7778 =
          msaIn1509.y -
          msa.msaBind1700 -
          msa.gitTagPad -
          msa.msaBind1704 -
          index * 22,
        msaBind7779 = msaIn1508.shapes.add({
          geometry: "rect",
          name: `mermaid.git.tag:${msaIn1509.seq}:${item}`,
          position: {
            left: msaIn1509.x - msaBind7777 / 2,
            top: msaBind7778,
            width: msaBind7777,
            height: msa.msaBind1704,
          },
          fill: {
            type: "solid",
            color: msa.msaBind1690,
          },
          line: {
            fill: {
              type: "solid",
              color: msa.gitAccentLight,
            },
            style: "solid",
            width: 1,
          },
        });
      msaBind7779.text = item;
      applyRunTextStyle(msaBind7779, msa.msaBind1696);
      msaBind7779.zIndex = 7;
      let msaBind7780 = msaIn1508.shapes.add({
        geometry: "ellipse",
        name: `mermaid.git.tag-hole:${msaIn1509.seq}:${item}`,
        position: {
          left: msaIn1509.x - msaBind7777 / 2 + 6,
          top: msaBind7778 + msa.msaBind1704 / 2 - 2,
          width: 4,
          height: 4,
        },
        fill: {
          type: "solid",
          color: msa.msaBind1691,
        },
        line: msa.msaBind1693,
      });
      msaBind7780.zIndex = 8;
    });
  };
});
