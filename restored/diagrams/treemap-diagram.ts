// Restored from ref/webview/assets/diagram-G4DWMVQ6-CignF1lk.js
// Mermaid treemap diagram definition (primary). app-initial $at/yat → d3-format + scaleOrdinal.
// Stage 3 candidate: app-initial d3 aliases → vendor shims; auto-renamed export→local.

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../runtime/rolldown-runtime";
import { format as appInitialAt } from "../vendor/d3-format";
import { scaleOrdinal as appInitialYat } from "../vendor/d3-scale-linear";
import {
  c as hierarchyCluster,
  r as hierarchyRoot,
} from "../boundaries/d3-hierarchy";
import {
  select as d3Select,
  ensureD3SelectionRuntimeT as ensureD3SelectionRuntimeT,
} from "../vendor/d3-axis-current-runtime";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  C as chunkICPOFSXXC,
  E as chunkICPOFSXXE,
  G as chunkICPOFSXXG,
  H as chunkICPOFSXXH,
  V as chunkICPOFSXXV,
  _ as chunkICPOFSXXUnderscore,
  a as _chunkICPOFSXXA,
  c as _chunkICPOFSXXC,
  d as chunkICPOFSXXD,
  v as _chunkICPOFSXXV,
  y as chunkICPOFSXXY,
} from "./mermaid-config-alt";
import {
  n as chunk426QAEUCN,
  t as chunk426QAEUCT,
} from "./select-svg-element-alt";
import { chunk5PVQY5BWR, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import { n as chunk4BX2VUABN, t as chunk4BX2VUABT } from "./populate-common-db";
import { mermaidParserCoreN, mermaidParserCoreT } from "./mermaid-parser-core";
import {
  n as chunkEDXVE4YYN,
  t as chunkEDXVE4YYT,
} from "./setup-viewport-for-svg-alt";
import {
  a as chunkX2U36JSPA,
  n as chunkX2U36JSPN,
  r as chunkX2U36JSPR,
} from "./style-helpers-alt";
function diagramG4DWMVQ6Helper1(treemapSlot10) {
  if (!treemapSlot10.length) return [];
  let treemapItem65 = [],
    treemapItem66 = [];
  return (
    treemapSlot10.forEach((item) => {
      let treemapItem67 = {
        name: item.name,
        children: item.type === "Leaf" ? undefined : [],
      };
      for (
        treemapItem67.classSelector = item?.classSelector,
          item?.cssCompiledStyles &&
            (treemapItem67.cssCompiledStyles = item.cssCompiledStyles),
          item.type === "Leaf" &&
            item.value !== undefined &&
            (treemapItem67.value = item.value);
        treemapItem66.length > 0 &&
        treemapItem66[treemapItem66.length - 1].level >= item.level;
      )
        treemapItem66.pop();
      if (treemapItem66.length === 0) treemapItem65.push(treemapItem67);
      else {
        let treemapItem89 = treemapItem66[treemapItem66.length - 1].node;
        treemapItem89.children
          ? treemapItem89.children.push(treemapItem67)
          : (treemapItem89.children = [treemapItem67]);
      }
      item.type !== "Leaf" &&
        treemapItem66.push({
          node: treemapItem67,
          level: item.level,
        });
    }),
    treemapItem65
  );
}
var treemapItem1,
  treemapItem2,
  treemapItem3,
  treemapItem4,
  treemapItem5,
  treemapItem6,
  treemapItem7,
  treemapItem8,
  treemapItem9,
  DiagramG4DWMVQ6;
esmInit(() => {
  chunk426QAEUCT();
  chunkEDXVE4YYT();
  chunkX2U36JSPN();
  chunk4BX2VUABT();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  ensureD3SelectionRuntimeT();
  treemapItem1 = class {
    constructor() {
      this.nodes = [];
      this.levels = new Map();
      this.outerNodes = [];
      this.classes = new Map();
      this.setAccTitle = chunkICPOFSXXH;
      this.getAccTitle = _chunkICPOFSXXV;
      this.setDiagramTitle = chunkICPOFSXXG;
      this.getDiagramTitle = chunkICPOFSXXC;
      this.getAccDescription = chunkICPOFSXXUnderscore;
      this.setAccDescription = chunkICPOFSXXV;
    }
    static {
      chunkAGHRB4JFN(this, "TreeMapDB");
    }
    getNodes() {
      return this.nodes;
    }
    getConfig() {
      let treemapItem86 = chunkICPOFSXXD,
        treemapItem87 = chunkICPOFSXXY();
      return chunk5PVQY5BWR({
        ...treemapItem86.treemap,
        ...(treemapItem87.treemap ?? {}),
      });
    }
    addNode(treemapSlot21, treemapSlot22) {
      this.nodes.push(treemapSlot21);
      this.levels.set(treemapSlot21, treemapSlot22);
      treemapSlot22 === 0 &&
        (this.outerNodes.push(treemapSlot21), (this.root ??= treemapSlot21));
    }
    getRoot() {
      return {
        name: "",
        children: this.outerNodes,
      };
    }
    addClass(treemapSlot11, treemapSlot12) {
      let treemapItem69 = this.classes.get(treemapSlot11) ?? {
          id: treemapSlot11,
          styles: [],
          textStyles: [],
        },
        treemapItem70 = treemapSlot12
          .replace(/\\,/g, "§§§")
          .replace(/,/g, ";")
          .replace(/§§§/g, ",")
          .split(";");
      treemapItem70 &&
        treemapItem70.forEach((item) => {
          chunkX2U36JSPR(item) &&
            (treemapItem69?.textStyles
              ? treemapItem69.textStyles.push(item)
              : (treemapItem69.textStyles = [item]));
          treemapItem69?.styles
            ? treemapItem69.styles.push(item)
            : (treemapItem69.styles = [item]);
        });
      this.classes.set(treemapSlot11, treemapItem69);
    }
    getClasses() {
      return this.classes;
    }
    getStylesForClass(treemapSlot26) {
      return this.classes.get(treemapSlot26)?.styles ?? [];
    }
    clear() {
      _chunkICPOFSXXA();
      this.nodes = [];
      this.levels = new Map();
      this.outerNodes = [];
      this.classes = new Map();
      this.root = undefined;
    }
  };
  chunkAGHRB4JFN(diagramG4DWMVQ6Helper1, "buildHierarchy");
  treemapItem2 = chunkAGHRB4JFN((treemapSlot7, treemapSlot8) => {
    chunk4BX2VUABN(treemapSlot7, treemapSlot8);
    let treemapItem51 = [];
    for (let treemapItem84 of treemapSlot7.TreemapRows ?? [])
      treemapItem84.$type === "ClassDefStatement" &&
        treemapSlot8.addClass(
          treemapItem84.className ?? "",
          treemapItem84.styleText ?? "",
        );
    for (let treemapItem68 of treemapSlot7.TreemapRows ?? []) {
      let treemapItem72 = treemapItem68.item;
      if (!treemapItem72) continue;
      let treemapItem73 = treemapItem68.indent
          ? parseInt(treemapItem68.indent)
          : 0,
        treemapItem74 = treemapItem3(treemapItem72),
        treemapItem75 = treemapItem72.classSelector
          ? treemapSlot8.getStylesForClass(treemapItem72.classSelector)
          : [],
        treemapItem76 = treemapItem75.length > 0 ? treemapItem75 : undefined,
        treemapItem77 = {
          level: treemapItem73,
          name: treemapItem74,
          type: treemapItem72.$type,
          value: treemapItem72.value,
          classSelector: treemapItem72.classSelector,
          cssCompiledStyles: treemapItem76,
        };
      treemapItem51.push(treemapItem77);
    }
    let treemapItem52 = diagramG4DWMVQ6Helper1(treemapItem51),
      treemapItem53 = chunkAGHRB4JFN((treemapSlot19, treemapSlot20) => {
        for (let treemapItem85 of treemapSlot19) {
          treemapSlot8.addNode(treemapItem85, treemapSlot20);
          treemapItem85.children &&
            treemapItem85.children.length > 0 &&
            treemapItem53(treemapItem85.children, treemapSlot20 + 1);
        }
      }, "addNodesRecursively");
    treemapItem53(treemapItem52, 0);
  }, "populate");
  treemapItem3 = chunkAGHRB4JFN(
    (treemapSlot42) => (treemapSlot42.name ? String(treemapSlot42.name) : ""),
    "getItemName",
  );
  treemapItem4 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (treemapSlot13) => {
      try {
        let treemapItem79 = await mermaidParserCoreN("treemap", treemapSlot13);
        chunkAGHRB4JFI.debug("Treemap AST:", treemapItem79);
        let treemapItem80 = treemapItem4.parser?.yy;
        if (!(treemapItem80 instanceof treemapItem1))
          throw Error(
            "parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
          );
        treemapItem2(treemapItem79, treemapItem80);
      } catch (treemapItem91) {
        throw (
          chunkAGHRB4JFI.error("Error parsing treemap:", treemapItem91),
          treemapItem91
        );
      }
    }, "parse"),
  };
  treemapItem5 = 10;
  treemapItem6 = 10;
  treemapItem7 = 25;
  treemapItem8 = {
    draw: chunkAGHRB4JFN(
      (treemapSlot1, treemapSlot2, treemapSlot3, treemapSlot4) => {
        let treemapItem10 = treemapSlot4.db,
          treemapItem11 = treemapItem10.getConfig(),
          treemapItem12 = treemapItem11.padding ?? treemapItem5,
          treemapItem13 = treemapItem10.getDiagramTitle(),
          treemapItem14 = treemapItem10.getRoot(),
          { themeVariables } = chunkICPOFSXXY();
        if (!treemapItem14) return;
        let treemapItem15 = treemapItem13 ? 30 : 0,
          treemapItem16 = chunk426QAEUCN(treemapSlot2),
          treemapItem17 = treemapItem11.nodeWidth
            ? treemapItem11.nodeWidth * treemapItem6
            : 960,
          treemapItem18 = treemapItem11.nodeHeight
            ? treemapItem11.nodeHeight * treemapItem6
            : 500,
          treemapItem19 = treemapItem17,
          treemapItem20 = treemapItem18 + treemapItem15;
        treemapItem16.attr("viewBox", `0 0 ${treemapItem19} ${treemapItem20}`);
        _chunkICPOFSXXC(
          treemapItem16,
          treemapItem20,
          treemapItem19,
          treemapItem11.useMaxWidth,
        );
        let treemapItem21;
        try {
          let treemapItem71 = treemapItem11.valueFormat || ",";
          if (treemapItem71 === "$0,0")
            treemapItem21 = chunkAGHRB4JFN(
              (treemapSlot64) => "$" + appInitialAt(",")(treemapSlot64),
              "valueFormat",
            );
          else if (
            treemapItem71.startsWith("$") &&
            treemapItem71.includes(",")
          ) {
            let treemapItem82 = /\.\d+/.exec(treemapItem71),
              treemapItem83 = treemapItem82 ? treemapItem82[0] : "";
            treemapItem21 = chunkAGHRB4JFN(
              (treemapSlot56) =>
                "$" + appInitialAt("," + treemapItem83)(treemapSlot56),
              "valueFormat",
            );
          } else if (treemapItem71.startsWith("$")) {
            let treemapItem88 = treemapItem71.substring(1);
            treemapItem21 = chunkAGHRB4JFN(
              (treemapSlot57) =>
                "$" + appInitialAt(treemapItem88 || "")(treemapSlot57),
              "valueFormat",
            );
          } else treemapItem21 = appInitialAt(treemapItem71);
        } catch (treemapItem90) {
          chunkAGHRB4JFI.error(
            "Error creating format function:",
            treemapItem90,
          );
          treemapItem21 = appInitialAt(",");
        }
        let treemapItem22 = appInitialYat().range([
            "transparent",
            themeVariables.cScale0,
            themeVariables.cScale1,
            themeVariables.cScale2,
            themeVariables.cScale3,
            themeVariables.cScale4,
            themeVariables.cScale5,
            themeVariables.cScale6,
            themeVariables.cScale7,
            themeVariables.cScale8,
            themeVariables.cScale9,
            themeVariables.cScale10,
            themeVariables.cScale11,
          ]),
          treemapItem23 = appInitialYat().range([
            "transparent",
            themeVariables.cScalePeer0,
            themeVariables.cScalePeer1,
            themeVariables.cScalePeer2,
            themeVariables.cScalePeer3,
            themeVariables.cScalePeer4,
            themeVariables.cScalePeer5,
            themeVariables.cScalePeer6,
            themeVariables.cScalePeer7,
            themeVariables.cScalePeer8,
            themeVariables.cScalePeer9,
            themeVariables.cScalePeer10,
            themeVariables.cScalePeer11,
          ]),
          treemapItem24 = appInitialYat().range([
            themeVariables.cScaleLabel0,
            themeVariables.cScaleLabel1,
            themeVariables.cScaleLabel2,
            themeVariables.cScaleLabel3,
            themeVariables.cScaleLabel4,
            themeVariables.cScaleLabel5,
            themeVariables.cScaleLabel6,
            themeVariables.cScaleLabel7,
            themeVariables.cScaleLabel8,
            themeVariables.cScaleLabel9,
            themeVariables.cScaleLabel10,
            themeVariables.cScaleLabel11,
          ]);
        treemapItem13 &&
          treemapItem16
            .append("text")
            .attr("x", treemapItem19 / 2)
            .attr("y", treemapItem15 / 2)
            .attr("class", "treemapTitle")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .text(treemapItem13);
        let treemapItem25 = treemapItem16
            .append("g")
            .attr("transform", `translate(0, ${treemapItem15})`)
            .attr("class", "treemapContainer"),
          treemapItem26 = hierarchyCluster(treemapItem14)
            .sum((treemapSlot67) => treemapSlot67.value ?? 0)
            .sort(
              (treemapSlot37, treemapSlot38) =>
                (treemapSlot38.value ?? 0) - (treemapSlot37.value ?? 0),
            ),
          treemapItem27 = hierarchyRoot()
            .size([treemapItem17, treemapItem18])
            .paddingTop((treemapSlot28) =>
              treemapSlot28.children && treemapSlot28.children.length > 0
                ? treemapItem7 + treemapItem6
                : 0,
            )
            .paddingInner(treemapItem12)
            .paddingLeft((treemapSlot33) =>
              treemapSlot33.children && treemapSlot33.children.length > 0
                ? treemapItem6
                : 0,
            )
            .paddingRight((treemapSlot34) =>
              treemapSlot34.children && treemapSlot34.children.length > 0
                ? treemapItem6
                : 0,
            )
            .paddingBottom((treemapSlot35) =>
              treemapSlot35.children && treemapSlot35.children.length > 0
                ? treemapItem6
                : 0,
            )
            .round(true)(treemapItem26),
          treemapItem28 = treemapItem27
            .descendants()
            .filter((item) => item.children && item.children.length > 0),
          treemapItem29 = treemapItem25
            .selectAll(".treemapSection")
            .data(treemapItem28)
            .enter()
            .append("g")
            .attr("class", "treemapSection")
            .attr(
              "transform",
              (treemapSlot44) =>
                `translate(${treemapSlot44.x0},${treemapSlot44.y0})`,
            );
        treemapItem29
          .append("rect")
          .attr("width", (treemapSlot68) => treemapSlot68.x1 - treemapSlot68.x0)
          .attr("height", treemapItem7)
          .attr("class", "treemapSectionHeader")
          .attr("fill", "none")
          .attr("fill-opacity", 0.6)
          .attr("stroke-width", 0.6)
          .attr("style", (treemapSlot36) =>
            treemapSlot36.depth === 0 ? "display: none;" : "",
          );
        treemapItem29
          .append("clipPath")
          .attr(
            "id",
            (treemapSlot48, treemapSlot49) =>
              `clip-section-${treemapSlot2}-${treemapSlot49}`,
          )
          .append("rect")
          .attr("width", (treemapSlot43) =>
            Math.max(0, treemapSlot43.x1 - treemapSlot43.x0 - 12),
          )
          .attr("height", treemapItem7);
        treemapItem29
          .append("rect")
          .attr("width", (treemapSlot69) => treemapSlot69.x1 - treemapSlot69.x0)
          .attr(
            "height",
            (treemapSlot70) => treemapSlot70.y1 - treemapSlot70.y0,
          )
          .attr(
            "class",
            (treemapSlot40, treemapSlot41) =>
              `treemapSection section${treemapSlot41}`,
          )
          .attr("fill", (treemapSlot65) =>
            treemapItem22(treemapSlot65.data.name),
          )
          .attr("fill-opacity", 0.6)
          .attr("stroke", (treemapSlot66) =>
            treemapItem23(treemapSlot66.data.name),
          )
          .attr("stroke-width", 2)
          .attr("stroke-opacity", 0.4)
          .attr("style", (treemapSlot18) => {
            if (treemapSlot18.depth === 0) return "display: none;";
            let treemapItem81 = chunkX2U36JSPA({
              cssCompiledStyles: treemapSlot18.data.cssCompiledStyles,
            });
            return (
              treemapItem81.nodeStyles +
              ";" +
              treemapItem81.borderStyles.join(";")
            );
          });
        treemapItem29
          .append("text")
          .attr("class", "treemapSectionLabel")
          .attr("x", 6)
          .attr("y", treemapItem7 / 2)
          .attr("dominant-baseline", "middle")
          .text((treemapSlot39) =>
            treemapSlot39.depth === 0 ? "" : treemapSlot39.data.name,
          )
          .attr("font-weight", "bold")
          .attr("style", (treemapSlot15) =>
            treemapSlot15.depth === 0
              ? "display: none;"
              : "dominant-baseline: middle; font-size: 12px; fill:" +
                treemapItem24(treemapSlot15.data.name) +
                "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" +
                chunkX2U36JSPA({
                  cssCompiledStyles: treemapSlot15.data.cssCompiledStyles,
                }).labelStyles.replace("color:", "fill:"),
          )
          .each(function (treemapSlot9) {
            if (treemapSlot9.depth === 0) return;
            let treemapItem54 = d3Select(this),
              treemapItem55 = treemapSlot9.data.name;
            treemapItem54.text(treemapItem55);
            let treemapItem56 = treemapSlot9.x1 - treemapSlot9.x0,
              treemapItem57;
            treemapItem57 =
              treemapItem11.showValues !== false && treemapSlot9.value
                ? treemapItem56 - 10 - 30 - 10 - 6
                : treemapItem56 - 6 - 6;
            let treemapItem58 = Math.max(15, treemapItem57),
              treemapItem59 = treemapItem54.node();
            if (treemapItem59.getComputedTextLength() > treemapItem58) {
              let treemapItem78 = treemapItem55;
              for (; treemapItem78.length > 0; ) {
                if (
                  ((treemapItem78 = treemapItem55.substring(
                    0,
                    treemapItem78.length - 1,
                  )),
                  treemapItem78.length === 0)
                ) {
                  treemapItem54.text("...");
                  treemapItem59.getComputedTextLength() > treemapItem58 &&
                    treemapItem54.text("");
                  break;
                }
                if (
                  (treemapItem54.text(treemapItem78 + "..."),
                  treemapItem59.getComputedTextLength() <= treemapItem58)
                )
                  break;
              }
            }
          });
        treemapItem11.showValues !== false &&
          treemapItem29
            .append("text")
            .attr("class", "treemapSectionValue")
            .attr(
              "x",
              (treemapSlot63) => treemapSlot63.x1 - treemapSlot63.x0 - 10,
            )
            .attr("y", treemapItem7 / 2)
            .attr("text-anchor", "end")
            .attr("dominant-baseline", "middle")
            .text((treemapSlot50) =>
              treemapSlot50.value ? treemapItem21(treemapSlot50.value) : "",
            )
            .attr("font-style", "italic")
            .attr("style", (treemapSlot14) =>
              treemapSlot14.depth === 0
                ? "display: none;"
                : "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" +
                  treemapItem24(treemapSlot14.data.name) +
                  "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" +
                  chunkX2U36JSPA({
                    cssCompiledStyles: treemapSlot14.data.cssCompiledStyles,
                  }).labelStyles.replace("color:", "fill:"),
            );
        let treemapItem30 = treemapItem27.leaves(),
          treemapItem31 = treemapItem25
            .selectAll(".treemapLeafGroup")
            .data(treemapItem30)
            .enter()
            .append("g")
            .attr(
              "class",
              (treemapSlot23, treemapSlot24) =>
                `treemapNode treemapLeafGroup leaf${treemapSlot24}${treemapSlot23.data.classSelector ? ` ${treemapSlot23.data.classSelector}` : ""}x`,
            )
            .attr(
              "transform",
              (treemapSlot45) =>
                `translate(${treemapSlot45.x0},${treemapSlot45.y0})`,
            );
        treemapItem31
          .append("rect")
          .attr("width", (treemapSlot71) => treemapSlot71.x1 - treemapSlot71.x0)
          .attr(
            "height",
            (treemapSlot72) => treemapSlot72.y1 - treemapSlot72.y0,
          )
          .attr("class", "treemapLeaf")
          .attr("fill", (treemapSlot29) =>
            treemapSlot29.parent
              ? treemapItem22(treemapSlot29.parent.data.name)
              : treemapItem22(treemapSlot29.data.name),
          )
          .attr(
            "style",
            (treemapSlot25) =>
              chunkX2U36JSPA({
                cssCompiledStyles: treemapSlot25.data.cssCompiledStyles,
              }).nodeStyles,
          )
          .attr("fill-opacity", 0.3)
          .attr("stroke", (treemapSlot30) =>
            treemapSlot30.parent
              ? treemapItem22(treemapSlot30.parent.data.name)
              : treemapItem22(treemapSlot30.data.name),
          )
          .attr("stroke-width", 3);
        treemapItem31
          .append("clipPath")
          .attr(
            "id",
            (treemapSlot58, treemapSlot59) =>
              `clip-${treemapSlot2}-${treemapSlot59}`,
          )
          .append("rect")
          .attr("width", (treemapSlot46) =>
            Math.max(0, treemapSlot46.x1 - treemapSlot46.x0 - 4),
          )
          .attr("height", (treemapSlot47) =>
            Math.max(0, treemapSlot47.y1 - treemapSlot47.y0 - 4),
          );
        treemapItem31
          .append("text")
          .attr("class", "treemapLabel")
          .attr(
            "x",
            (treemapSlot60) => (treemapSlot60.x1 - treemapSlot60.x0) / 2,
          )
          .attr(
            "y",
            (treemapSlot61) => (treemapSlot61.y1 - treemapSlot61.y0) / 2,
          )
          .attr(
            "style",
            (treemapSlot17) =>
              "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" +
              treemapItem24(treemapSlot17.data.name) +
              ";" +
              chunkX2U36JSPA({
                cssCompiledStyles: treemapSlot17.data.cssCompiledStyles,
              }).labelStyles.replace("color:", "fill:"),
          )
          .attr(
            "clip-path",
            (treemapSlot52, treemapSlot53) =>
              `url(#clip-${treemapSlot2}-${treemapSlot53})`,
          )
          .text((treemapSlot73) => treemapSlot73.data.name)
          .each(function (treemapSlot5) {
            let treemapItem32 = d3Select(this),
              treemapItem33 = treemapSlot5.x1 - treemapSlot5.x0,
              treemapItem34 = treemapSlot5.y1 - treemapSlot5.y0,
              treemapItem35 = treemapItem32.node(),
              treemapItem36 = treemapItem33 - 8,
              treemapItem37 = treemapItem34 - 8;
            if (treemapItem36 < 10 || treemapItem37 < 10) {
              treemapItem32.style("display", "none");
              return;
            }
            let treemapItem38 = parseInt(treemapItem32.style("font-size"), 10);
            for (
              ;
              treemapItem35.getComputedTextLength() > treemapItem36 &&
              treemapItem38 > 8;
            ) {
              treemapItem38--;
              treemapItem32.style("font-size", `${treemapItem38}px`);
            }
            let treemapItem40 = Math.max(
                6,
                Math.min(28, Math.round(treemapItem38 * 0.6)),
              ),
              treemapItem41 = treemapItem38 + 2 + treemapItem40;
            for (
              ;
              treemapItem41 > treemapItem37 &&
              treemapItem38 > 8 &&
              (treemapItem38--,
              (treemapItem40 = Math.max(
                6,
                Math.min(28, Math.round(treemapItem38 * 0.6)),
              )),
              !(treemapItem40 < 6 && treemapItem38 === 8));
            ) {
              treemapItem32.style("font-size", `${treemapItem38}px`);
              treemapItem41 = treemapItem38 + 2 + treemapItem40;
            }
            treemapItem32.style("font-size", `${treemapItem38}px`);
            (treemapItem35.getComputedTextLength() > treemapItem36 ||
              treemapItem38 < 8 ||
              treemapItem37 < treemapItem38) &&
              treemapItem32.style("display", "none");
          });
        treemapItem11.showValues !== false &&
          treemapItem31
            .append("text")
            .attr("class", "treemapValue")
            .attr(
              "x",
              (treemapSlot62) => (treemapSlot62.x1 - treemapSlot62.x0) / 2,
            )
            .attr("y", function (treemapSlot27) {
              return (treemapSlot27.y1 - treemapSlot27.y0) / 2;
            })
            .attr(
              "style",
              (treemapSlot16) =>
                "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" +
                treemapItem24(treemapSlot16.data.name) +
                ";" +
                chunkX2U36JSPA({
                  cssCompiledStyles: treemapSlot16.data.cssCompiledStyles,
                }).labelStyles.replace("color:", "fill:"),
            )
            .attr(
              "clip-path",
              (treemapSlot54, treemapSlot55) =>
                `url(#clip-${treemapSlot2}-${treemapSlot55})`,
            )
            .text((treemapSlot51) =>
              treemapSlot51.value ? treemapItem21(treemapSlot51.value) : "",
            )
            .each(function (treemapSlot6) {
              let treemapItem42 = d3Select(this),
                treemapItem43 = this.parentNode;
              if (!treemapItem43) {
                treemapItem42.style("display", "none");
                return;
              }
              let treemapItem44 =
                d3Select(treemapItem43).select(".treemapLabel");
              if (
                treemapItem44.empty() ||
                treemapItem44.style("display") === "none"
              ) {
                treemapItem42.style("display", "none");
                return;
              }
              let treemapItem45 = parseFloat(treemapItem44.style("font-size")),
                treemapItem46 = Math.max(
                  6,
                  Math.min(28, Math.round(treemapItem45 * 0.6)),
                );
              treemapItem42.style("font-size", `${treemapItem46}px`);
              let treemapItem47 =
                (treemapSlot6.y1 - treemapSlot6.y0) / 2 + treemapItem45 / 2 + 2;
              treemapItem42.attr("y", treemapItem47);
              let treemapItem48 = treemapSlot6.x1 - treemapSlot6.x0,
                treemapItem49 = treemapSlot6.y1 - treemapSlot6.y0 - 4,
                treemapItem50 = treemapItem48 - 8;
              treemapItem42.node().getComputedTextLength() > treemapItem50 ||
              treemapItem47 + treemapItem46 > treemapItem49 ||
              treemapItem46 < 6
                ? treemapItem42.style("display", "none")
                : treemapItem42.style("display", null);
            });
        chunkEDXVE4YYN(
          treemapItem16,
          treemapItem11.diagramPadding ?? 8,
          "flowchart",
          treemapItem11?.useMaxWidth || false,
        );
      },
      "draw",
    ),
    getClasses: chunkAGHRB4JFN(function (treemapSlot31, treemapSlot32) {
      return treemapSlot32.db.getClasses();
    }, "getClasses"),
  };
  treemapItem9 = {
    sectionStrokeColor: "black",
    sectionStrokeWidth: "1",
    sectionFillColor: "#efefef",
    leafStrokeColor: "black",
    leafStrokeWidth: "1",
    leafFillColor: "#efefef",
    labelFontSize: "12px",
    valueFontSize: "10px",
    titleFontSize: "14px",
  };
  DiagramG4DWMVQ6 = {
    parser: treemapItem4,
    get db() {
      return new treemapItem1();
    },
    renderer: treemapItem8,
    styles: chunkAGHRB4JFN(({ treemap } = {}) => {
      let treemapItem60 = chunk5PVQY5BWR(
          chunkICPOFSXXE(),
          chunkICPOFSXXY().themeVariables,
        ),
        treemapItem61 = chunk5PVQY5BWR(treemapItem9, treemap),
        treemapItem62 = treemapItem61.titleColor ?? treemapItem60.titleColor,
        treemapItem63 = treemapItem61.labelColor ?? treemapItem60.textColor,
        treemapItem64 = treemapItem61.valueColor ?? treemapItem60.textColor;
      return `
  .treemapNode.section {
    stroke: ${treemapItem61.sectionStrokeColor};
    stroke-width: ${treemapItem61.sectionStrokeWidth};
    fill: ${treemapItem61.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${treemapItem61.leafStrokeColor};
    stroke-width: ${treemapItem61.leafStrokeWidth};
    fill: ${treemapItem61.leafFillColor};
  }
  .treemapLabel {
    fill: ${treemapItem63};
    font-size: ${treemapItem61.labelFontSize};
  }
  .treemapValue {
    fill: ${treemapItem64};
    font-size: ${treemapItem61.valueFontSize};
  }
  .treemapTitle {
    fill: ${treemapItem62};
    font-size: ${treemapItem61.titleFontSize};
  }
  `;
    }, "getStyles"),
  };
})();
export { DiagramG4DWMVQ6 as diagram };
