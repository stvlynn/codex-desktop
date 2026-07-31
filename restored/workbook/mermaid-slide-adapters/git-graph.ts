// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-62: gitGraph edges + plugin (legacy dFe tail / uFe).

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
import { ensureGitGraphThemeInit } from "./git-graph-theme";

export const ensureGitGraphInit = esmInit(() => {
  ensureGitGraphThemeInit();
  msa.msaBind1713 = (msaIn15343, msaIn15344) =>
    Math.hypot(msaIn15344.x - msaIn15343.x, msaIn15344.y - msaIn15343.y);
  msa.msaBind1714 = (msaIn9261, msaIn9262, msaIn9263) => {
    let msaBind19814 = msa.msaBind1713(msaIn9261, msaIn9262);
    return msaBind19814 === 0
      ? msaIn9261
      : {
          x:
            msaIn9261.x +
            ((msaIn9262.x - msaIn9261.x) / msaBind19814) * msaIn9263,
          y:
            msaIn9261.y +
            ((msaIn9262.y - msaIn9261.y) / msaBind19814) * msaIn9263,
        };
  };
  msa.gitEdgePath = (
    msaIn2592,
    msaIn2593,
    msaIn2594,
    msaIn2595,
    msaIn2596,
    msaIn2597,
    msaIn2598,
  ) => {
    let msaBind10022 =
        msaIn2598.position?.width ?? Math.abs(msaIn2595.x - msaIn2594.x),
      msaBind10023 =
        msaIn2598.position?.height ?? Math.abs(msaIn2595.y - msaIn2594.y);
    if (msaBind10022 < 0.5 || msaBind10023 < 0.5)
      return msa.msaBind1711(
        msaIn2592,
        msaIn2593,
        msaIn2594,
        msaIn2595,
        msaIn2596,
        msaIn2597,
      );
    let msaBind10024 = msaIn2592.shapes.add({
      geometry: msaIn2598.geometry,
      name: msaIn2593,
      position: msaIn2598.position ?? {
        left: Math.min(msaIn2594.x, msaIn2595.x),
        top: Math.min(msaIn2594.y, msaIn2595.y),
        width: msaBind10022,
        height: msaBind10023,
        rotation: msaIn2598.rotation,
        horizontalFlip: msaIn2598.horizontalFlip,
        verticalFlip: msaIn2598.verticalFlip,
      },
      adjustmentList: msaIn2598.adjustmentList,
      fill: msa.msaBind1692,
      line: msaIn2596,
    });
    return ((msaBind10024.zIndex = msaIn2597), msaBind10024);
  };
  msa.gitDrawEdge = (msaIn4824, msaIn4825, msaIn4826, msaIn4827, msaIn4828) => {
    let msaBind14201 = roundedConnectorCorner(
      msaIn4824,
      msaIn4825,
      msaIn4826,
      msaIn4827,
      msaIn4828,
    );
    return msaBind14201 === undefined
      ? {
          geometry: "curvedConnector2",
          horizontalFlip: msaIn4827.x > msaIn4828.x,
          verticalFlip: msaIn4827.y > msaIn4828.y,
        }
      : {
          geometry: msaBind14201.geometry,
          position: msaBind14201.position,
          adjustmentList: msaBind14201.adjustmentList,
        };
  };
  msa.msaBind1715 = (msaIn10098, msaIn10099) => {
    let msaBind20577 = msaIn10098[msaIn10099];
    if (msaBind20577 === undefined)
      throw Error(`Git graph route point ${msaIn10099} is missing.`);
    return msaBind20577;
  };
  msa.gitDrawBranchLine = (
    msaIn2731,
    msaIn2732,
    msaIn2733,
    msaIn2734,
    msaIn2735,
    msaIn2736,
  ) => {
    if (msaIn2733.length < 2) return;
    let msaBind10341 = msa.msaBind1715(msaIn2733, 0),
      msaBind10342 = 0,
      msaBind10343 = 0;
    for (
      let msaBind13193 = 1;
      msaBind13193 < msaIn2733.length - 1;
      msaBind13193 += 1
    ) {
      let msaBind13944 = msa.msaBind1715(msaIn2733, msaBind13193 - 1),
        msaBind13945 = msa.msaBind1715(msaIn2733, msaBind13193),
        msaBind13946 = msa.msaBind1715(msaIn2733, msaBind13193 + 1),
        msaBind13947 = Math.min(
          msaIn2736,
          msa.msaBind1713(msaBind13944, msaBind13945) / 2,
          msa.msaBind1713(msaBind13945, msaBind13946) / 2,
        ),
        msaBind13948 = msa.msaBind1714(
          msaBind13945,
          msaBind13944,
          msaBind13947,
        ),
        msaBind13949 = msa.msaBind1714(
          msaBind13945,
          msaBind13946,
          msaBind13947,
        );
      msa.msaBind1713(msaBind10341, msaBind13948) > 0.5 &&
        (msa.msaBind1711(
          msaIn2731,
          `${msaIn2732}:msa.msaSym2{msaBind10342}`,
          msaBind10341,
          msaBind13948,
          msaIn2734,
          msaIn2735,
        ),
        (msaBind10342 += 1));
      msa.gitEdgePath(
        msaIn2731,
        `${msaIn2732}:msa.msaSym1{msaBind10343}`,
        msaBind13948,
        msaBind13949,
        msaIn2734,
        msaIn2735,
        msa.gitDrawEdge(
          msaBind13944,
          msaBind13945,
          msaBind13946,
          msaBind13948,
          msaBind13949,
        ),
      );
      msaBind10343 += 1;
      msaBind10341 = msaBind13949;
    }
    let msaBind10344 = msa.msaBind1715(msaIn2733, msaIn2733.length - 1);
    msa.msaBind1713(msaBind10341, msaBind10344) > 0.5 &&
      msa.msaBind1711(
        msaIn2731,
        `${msaIn2732}:msa.msaSym2{msaBind10342}`,
        msaBind10341,
        msaBind10344,
        msaIn2734,
        msaIn2735,
      );
  };
  msa.msaBind1716 = (msaIn7821, msaIn7822, msaIn7823, msaIn7824) => {
    let msaBind18318 = (
      msaIn7824 === "TB" || msaIn7824 === "BT"
        ? msaIn7821.x < msaIn7822.x
        : msaIn7821.y < msaIn7822.y
    )
      ? msaIn7822.branch
      : msaIn7821.branch;
    return msaIn7823.some(
      (item) =>
        item.seq > msaIn7821.seq &&
        item.seq < msaIn7822.seq &&
        item.branch === msaBind18318,
    );
  };
  msa.msaBind1717 = (msaIn7242, msaIn7243, msaIn7244, msaIn7245 = 0) => {
    let msaBind17601 = msaIn7243 + Math.abs(msaIn7243 - msaIn7244) / 2;
    return msaIn7245 > 5
      ? msaBind17601
      : msaIn7242.every((item) => Math.abs(item - msaBind17601) >= 10)
        ? (msaIn7242.push(msaBind17601), msaBind17601)
        : msa.msaBind1717(
            msaIn7242,
            msaIn7243,
            msaIn7244 - Math.abs(msaIn7243 - msaIn7244) / 5,
            msaIn7245 + 1,
          );
  };
  msa.gitDrawBranchLabel = (
    msaIn3473,
    msaIn3474,
    msaIn3475,
    msaIn3476,
    msaIn3477,
    msaIn3478,
  ) => {
    if (msaIn3478 !== "LR")
      return [
        {
          x: msaIn3473.x,
          y: msaIn3473.y,
        },
        {
          x: msaIn3473.x,
          y: msaIn3474.y,
        },
        {
          x: msaIn3474.x,
          y: msaIn3474.y,
        },
      ];
    let msaBind11913 = {
        x: msaIn3473.x,
        y: msaIn3473.y,
      },
      msaBind11914 = {
        x: msaIn3474.x,
        y: msaIn3474.y,
      },
      msaBind11915 = msaIn3474.type === msa.gitAccentIdx3 && msaIn3475 > 0;
    if (msa.msaBind1716(msaIn3473, msaIn3474, msaIn3476, msaIn3478)) {
      let msaBind20649 =
        msaIn3473.y < msaIn3474.y
          ? msa.msaBind1717(msaIn3477, msaIn3473.y, msaIn3474.y)
          : msa.msaBind1717(msaIn3477, msaIn3474.y, msaIn3473.y);
      return [
        msaBind11913,
        {
          x: msaIn3473.x,
          y: msaBind20649,
        },
        {
          x: msaIn3474.x,
          y: msaBind20649,
        },
        msaBind11914,
      ];
    }
    return msaBind11915
      ? [
          msaBind11913,
          {
            x: msaIn3474.x,
            y: msaIn3473.y,
          },
          msaBind11914,
        ]
      : [
          msaBind11913,
          {
            x: msaIn3473.x,
            y: msaIn3474.y,
          },
          msaBind11914,
        ];
  };
  msa.gitDirectEdge = (msaIn7718, msaIn7719, msaIn7720) => {
    msa.msaBind1711(
      msaIn7718,
      `mermaid.git.edge:${msaIn7719.seq}:${msaIn7720.seq}:direct`,
      {
        x: msaIn7719.x,
        y: msaIn7719.y,
      },
      {
        x: msaIn7720.x,
        y: msaIn7720.y,
      },
      msa.msaBind1709(msaIn7720.branchIndex, msa.msaBind1705),
      2,
    );
  };
  msa.gitRoutedEdge = (
    msaIn5056,
    msaIn5057,
    msaIn5058,
    msaIn5059,
    msaIn5060,
    msaIn5061,
    msaIn5062,
  ) => {
    let msaBind14517 =
        msaIn5058.type === msa.gitAccentIdx3 && msaIn5059 > 0
          ? msaIn5057.branchIndex
          : msaIn5058.branchIndex,
      msaBind14518 = msa.msaBind1709(msaBind14517, msa.msaBind1705),
      msaBind14519 =
        msaIn5058.type === msa.gitAccentIdx3 && msaIn5059 > 0
          ? "merge"
          : "branch";
    msa.gitDrawBranchLine(
      msaIn5056,
      `mermaid.git.edge:${msaIn5057.seq}:${msaIn5058.seq}:${msaBind14519}`,
      msa.gitDrawBranchLabel(
        msaIn5057,
        msaIn5058,
        msaIn5059,
        msaIn5060,
        msaIn5061,
        msaIn5062,
      ),
      msaBind14518,
      2,
      msa.msaBind1716(msaIn5057, msaIn5058, msaIn5060, msaIn5062) ? 10 : 20,
    );
  };
  msa.gitDrawAllEdges = (msaIn4180, msaIn4181, msaIn4182, msaIn4183) => {
    let msaBind13207 = new Map(msaIn4181.map((item) => [item.id, item])),
      msaBind13208 = msaIn4182.map((item, index) => index * msa.msaBind1697);
    msaIn4181.forEach((item) => {
      item.parents.forEach((_item, index) => {
        let msaBind17026 = msaBind13207.get(_item);
        if (msaBind17026 && !(msaBind17026.seq >= item.seq)) {
          if (msaBind17026.branch === item.branch) {
            msa.gitDirectEdge(msaIn4180, msaBind17026, item);
            return;
          }
          msa.gitRoutedEdge(
            msaIn4180,
            msaBind17026,
            item,
            index,
            msaIn4181,
            msaBind13208,
            msaIn4183,
          );
        }
      });
    });
  };
  msa.gitDrawAllBranches = (
    msaIn1175,
    msaIn1176,
    msaIn1177,
    msaIn1178,
    msaIn1179,
  ) => {
    if (msaIn1179.showBranches === false) return;
    let msaBind6693 = Math.max(...msaIn1177.map((item) => item.x)),
      msaBind6694 = Math.max(...msaIn1177.map((item) => item.y));
    msaIn1176.forEach((item, index) => {
      let msaBind7641 = index * msa.msaBind1697,
        msaBind7642 = measureTextBlock(item.name, {
          fontSize: msa.msaBind1694.fontSize,
        }),
        msaBind7643 = Math.ceil(msaBind7642.width + 18),
        msaBind7644 = {
          fill: {
            type: "solid",
            color: msa.msaBind1691,
          },
          style: "dashed",
          width: 1,
        };
      if (msaIn1178 === "TB" || msaIn1178 === "BT") {
        msa.msaBind1711(
          msaIn1175,
          `mermaid.git.branch-line:${item.name}`,
          {
            x: msaBind7641,
            y: 0,
          },
          {
            x: msaBind7641,
            y: msaBind6694 + msa.gitCommitDiameter,
          },
          msaBind7644,
          0,
        );
        msa.msaBind1712(msaIn1175, item, index, {
          left: msaBind7641 - msaBind7643 / 2,
          top: -32.5,
          width: msaBind7643,
          height: msa.msaBind1703,
        });
        return;
      }
      msa.msaBind1711(
        msaIn1175,
        `mermaid.git.branch-line:${item.name}`,
        {
          x: 0,
          y: msaBind7641,
        },
        {
          x: msaBind6693 + msa.gitCommitRadius,
          y: msaBind7641,
        },
        msaBind7644,
        0,
      );
      msa.msaBind1712(msaIn1175, item, index, {
        left: -msaBind7643 - 35,
        top: msaBind7641 - msa.msaBind1703 / 2,
        width: msaBind7643,
        height: msa.msaBind1703,
      });
    });
  };
  msa.gitGraphPlugin = {
    id: "gitGraph",
    supports: (msaIn16231) => msaIn16231 === "gitGraph",
    convert: async (msaIn1788, msaIn1789) => {
      let msaBind8310 = msaIn1788.db,
        msaBind8311 = msaBind8310.getCommitsArray(),
        msaBind8312 = msaBind8310.getBranchesAsObjArray();
      if (msaBind8311.length === 0 || msaBind8312.length === 0)
        return (
          msaIn1789.warn("gitGraph contained no commits to render."),
          {
            elements: [],
            idMap: {},
          }
        );
      let { slide } = createScratchSlide(),
        msaBind8313 = msaBind8310.getConfig?.() ?? {},
        msaBind8314 = msa.gitNormalizeDirection(msaBind8310.getDirection?.()),
        msaBind8315 = msa.gitLayoutCommits(
          msaBind8311,
          msaBind8312,
          msaBind8314,
          msaBind8313,
        );
      return (
        msa.gitDrawAllBranches(
          slide,
          msaBind8312,
          msaBind8315,
          msaBind8314,
          msaBind8313,
        ),
        msa.gitDrawAllEdges(slide, msaBind8315, msaBind8312, msaBind8314),
        msaBind8315.forEach((item) => {
          msa.gitDrawCommitMarker(slide, item);
          msa.gitDrawCommitTags(slide, item);
          msa.gitDrawCommitLabel(slide, item, msaBind8313);
        }),
        {
          elements: slide.toProto().elements ?? [],
          idMap: Object.fromEntries(
            msaBind8315.map((item) => [
              item.id,
              `mermaid.git.commit-marker:${item.seq}:${item.id}`,
            ]),
          ),
        }
      );
    },
  };
});
