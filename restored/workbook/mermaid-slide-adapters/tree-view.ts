// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-62: treeView-beta converter (legacy CIe / SIe).

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

export const ensureTreeViewInit = esmInit(() => {
  ensureMeasureTextInit();
  ensureApplyRunTextStyleInit();
  ensureScratchSlideInit();
  ensureMeasureTextInit();
  ensureApplyRunTextStyleInit();
  ensureScratchSlideInit();
  msa.treeNoneFill = {
    type: "none",
  };
  msa.treeParseIndent = {
    fill: {
      type: "none",
    },
    style: "solid",
    width: 0,
  };
  msa.treeNodeLabel = {
    fill: {
      type: "solid",
      color: {
        type: "rgb",
        value: "000000",
      },
    },
    style: "solid",
    width: 1,
  };
  msa.treeValidate = {
    color: {
      type: "rgb",
      value: "000000",
    },
    fontSize: 16,
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
  msa.treeHeaderRe = /^treeView(?:-beta)?$/ams.msaSym1;
  msa.treeRowHeight = 28.5078125;
  msa.treeHGap = 15;
  msa.treeConnectorH = 5;
  msa.treeConnectorW = 10;
  msa.treeChildPad = 0.5;
  msa.treeRootPad = (msaIn2914) => {
    let msaBind10799 = msaIn2914
        .replace(/\msa.msaSym2\msa.msaSym3?/ams.msaSym4, "\msa.msaSym3")
        .split("\msa.msaSym3"),
      msaBind10800 = 0;
    for (; msaBind10800 < msaBind10799.length; ) {
      let msaBind12726 = msaBind10799[msaBind10800];
      if (msaBind12726 === undefined) break;
      let msaBind12727 = msaBind12726.trim();
      if (
        ((msaBind10800 += 1),
        !(msaBind12727.length === 0 || msaBind12727.startsWith("%%")))
      ) {
        if (msaBind12727 === "---") {
          for (; msaBind10800 < msaBind10799.length; ) {
            let msaBind19531 = msaBind10799[msaBind10800];
            if (msaBind19531 === undefined) break;
            let msaBind19532 = msaBind19531.trim();
            if (((msaBind10800 += 1), msaBind19532 === "---")) break;
          }
          continue;
        }
        return msaBind12727;
      }
    }
  };
  msa.isTreeViewSource = (msaIn12264) => {
    let msaBind22358 = msa.treeRootPad(msaIn12264);
    return msaBind22358 !== undefined && msa.treeHeaderRe.test(msaBind22358);
  };
  msa.parseTreeViewLines = (msaIn5705) => {
    let msaBind15620 = msaIn5705.match(/^"((?:\\.|[^"\\])*)"/);
    if (msaBind15620) return JSON.parse(msaBind15620[0]);
    let [msaBind15621] = msaIn5705.split(":");
    if (msaBind15621 === undefined)
      throw Error(`Invalid treeView-beta entry: ${msaIn5705}`);
    let msaBind15622 = msaBind15621.trim();
    if (msaBind15622) return msaBind15622;
    throw Error(`Invalid treeView-beta entry: ${msaIn5705}`);
  };
  msa.parseTreeView = (msaIn3211) => {
    let msaBind11388 = msaIn3211
        .replace(/\msa.msaSym2\msa.msaSym3?/ams.msaSym4, "\msa.msaSym3")
        .split("\msa.msaSym3"),
      msaBind11389 = msaBind11388.findIndex((item) =>
        msa.treeHeaderRe.test(item.trim()),
      );
    if (msaBind11389 < 0)
      throw Error(
        "treeView-beta source must start with msa.msaSym5 treeView header.",
      );
    return msaBind11388
      .slice(msaBind11389 + 1)
      .map((item) => item.replace(/\msa.msaSym6/ams.msaSym4, "    "))
      .filter((item) => item.trim().length > 0 && !item.trim().startsWith("%%"))
      .map((item) => ({
        label: msa.parseTreeViewLines(item.trim()),
        indent: item.length - item.trimStart().length,
      }));
  };
  msa.layoutTreeNodes = (msaIn2067) => {
    let msaBind8953 = Array.from(
        new Set(msaIn2067.map((item) => item.indent)),
      ).sort((msaIn16539, msaIn16540) => msaIn16539 - msaIn16540),
      msaBind8954 = {
        id: "tree-root",
        index: 0,
        label: "/",
        level: 0,
        children: [],
      },
      msaBind8955 = [msaBind8954],
      msaBind8956 = [msaBind8954];
    return (
      msaIn2067.forEach((item, index) => {
        let msaBind11899 = msaBind8953.indexOf(item.indent) + 1,
          msaBind11900 = msaBind8955[msaBind11899 - 1];
        if (msaBind11900 === undefined)
          throw Error(
            `Invalid treeView-beta indentation before ${item.label}.`,
          );
        let msaBind11901 = {
          id: `tree-${index + 1}`,
          index: index + 1,
          label: item.label,
          level: msaBind11899,
          parentId: msaBind11900.id,
          children: [],
        };
        msaBind11900.children.push(msaBind11901.id);
        msaBind8955[msaBind11899] = msaBind11901;
        msaBind8955.length = msaBind11899 + 1;
        msaBind8956.push(msaBind11901);
      }),
      msaBind8956
    );
  };
  msa.treeAddConnector = (
    msaIn6780,
    msaIn6781,
    msaIn6782,
    msaIn6783,
    msaIn6784,
    msaIn6785,
  ) => {
    let msaBind17085 = msaIn6780.shapes.add({
      geometry: "line",
      name: msaIn6781,
      position: {
        left: msaIn6782,
        top: msaIn6783,
        width: msaIn6784,
        height: msaIn6785,
      },
      fill: msa.treeNoneFill,
      line: msa.treeNodeLabel,
    });
    return ((msaBind17085.zIndex = 1), msaBind17085);
  };
  msa.treeNodeTop = (msaIn15946) =>
    msaIn15946.index * msa.treeRowHeight + msa.treeRowHeight / 2;
  msa.treeNodeLeft = (msaIn16148) =>
    msaIn16148.level * msa.treeHGap + msa.treeConnectorH;
  msa.treeDrawLabel = (
    msaIn5568,
    msaIn5569,
    msaIn5570,
    msaIn5571,
    msaIn5572,
  ) => {
    let msaBind15391 = msaIn5568.shapes.add({
      geometry: "textbox",
      name: `mermaid.tree.label:${msaIn5569.index}:${msaIn5569.label}`,
      position: {
        left: msaIn5570,
        top: msaIn5571,
        width: msaIn5572,
        height: msa.treeRowHeight,
      },
      fill: msa.treeNoneFill,
      line: msa.treeParseIndent,
    });
    return (
      (msaBind15391.text = msaIn5569.label),
      applyRunTextStyle(msaBind15391, msa.treeValidate),
      (msaBind15391.zIndex = 5),
      msaBind15391
    );
  };
  msa.convertTreeView = (msaIn947) => {
    let msaBind5986 = msa.parseTreeView(msaIn947),
      msaBind5987 = msa.layoutTreeNodes(msaBind5986);
    if (msaBind5987.length === 1)
      throw Error("treeView-beta source must contain at least one entry.");
    let msaBind5988 = new Map(msaBind5987.map((item) => [item.id, item])),
      { slide } = createScratchSlide();
    return (
      msaBind5987.forEach((item) => {
        let msaBind13112 = msa.treeNodeTop(item),
          msaBind13113 = msa.treeNodeLeft(item);
        msa.treeAddConnector(
          slide,
          `mermaid.tree.connector:horizontal:${item.index}:${item.label}`,
          msaBind13113 - msa.treeHGap,
          msaBind13112,
          msa.treeConnectorW,
          0,
        );
        msa.treeDrawLabel(
          slide,
          item,
          msaBind13113,
          item.index * msa.treeRowHeight,
          measureTextBlock(item.label, {
            fontSize: 16,
          }).width + 6,
        );
      }),
      msaBind5987.forEach((item) => {
        if (item.children.length === 0) return;
        let msaBind10930 = item.children[0],
          msaBind10931 = item.children[item.children.length - 1],
          msaBind10932 =
            msaBind10930 === undefined
              ? undefined
              : msaBind5988.get(msaBind10930),
          msaBind10933 =
            msaBind10931 === undefined
              ? undefined
              : msaBind5988.get(msaBind10931);
        if (msaBind10932 === undefined || msaBind10933 === undefined) return;
        let msaBind10934 = msa.treeNodeTop(item),
          msaBind10935 = msa.treeNodeTop(msaBind10932),
          msaBind10936 = msa.treeNodeTop(msaBind10933),
          msaBind10937 = (msaBind10934 + msaBind10935) / 2;
        msa.treeAddConnector(
          slide,
          `mermaid.tree.connector:vertical:${item.index}:${item.label}`,
          msa.treeNodeLeft(item),
          msaBind10937,
          0,
          msaBind10936 + msa.treeChildPad - msaBind10937,
        );
      }),
      {
        elements: slide.toProto().elements ?? [],
        idMap: {},
      }
    );
  };
});
