// Restored from ref/webview/assets/diagram-PSM6KHXK-BdXWrsan.js
// Mermaid treemap diagram definition (alt). app-initial $at/yat → d3-format + scaleOrdinal.
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
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../utils/dayjs-core-alt-dup";
import {
  B as chunkABZYJK2DB,
  C as chunkABZYJK2DC,
  V as chunkABZYJK2DV,
  W as chunkABZYJK2DW,
  _ as chunkABZYJK2DUnderscore,
  a as chunkABZYJK2DA,
  c as _chunkABZYJK2DC,
  d as chunkABZYJK2DD,
  k as chunkABZYJK2DK,
  v as _chunkABZYJK2DV,
  y as chunkABZYJK2DY,
} from "./mermaid-config";
import {
  select as d3Select,
  ensureD3SelectionRuntimeT as ensureD3SelectionRuntimeT,
} from "../vendor/d3-axis-current-runtime";
import { n as chunkEXTU4WIEN, t as chunkEXTU4WIET } from "./select-svg-element";
import { chunkS3R3BYOJR, chunkS3R3BYOJU } from "./mermaid-common-utils";
import {
  n as chunk4BX2VUABN,
  t as chunk4BX2VUABT,
} from "./populate-common-db-alt";
import {
  mermaidParserCoreN,
  mermaidParserCoreT,
} from "./mermaid-parser-core-alt";
import {
  n as chunkQN33PNHLN,
  t as chunkQN33PNHLT,
} from "./setup-viewport-for-svg";
import {
  a as chunkATLVNIR6A,
  n as chunkATLVNIR6N,
  r as chunkATLVNIR6R,
} from "./style-helpers";
function diagramPSM6KHXKHelper1(treemapAltSlot10) {
  if (!treemapAltSlot10.length) return [];
  let treemapAltItem60 = [],
    treemapAltItem61 = [];
  return (
    treemapAltSlot10.forEach((item) => {
      let treemapAltItem62 = {
        name: item.name,
        children: item.type === "Leaf" ? undefined : [],
      };
      for (
        treemapAltItem62.classSelector = item?.classSelector,
          item?.cssCompiledStyles &&
            (treemapAltItem62.cssCompiledStyles = [item.cssCompiledStyles]),
          item.type === "Leaf" &&
            item.value !== undefined &&
            (treemapAltItem62.value = item.value);
        treemapAltItem61.length > 0 &&
        treemapAltItem61[treemapAltItem61.length - 1].level >= item.level;
      )
        treemapAltItem61.pop();
      if (treemapAltItem61.length === 0)
        treemapAltItem60.push(treemapAltItem62);
      else {
        let treemapAltItem85 =
          treemapAltItem61[treemapAltItem61.length - 1].node;
        treemapAltItem85.children
          ? treemapAltItem85.children.push(treemapAltItem62)
          : (treemapAltItem85.children = [treemapAltItem62]);
      }
      item.type !== "Leaf" &&
        treemapAltItem61.push({
          node: treemapAltItem62,
          level: item.level,
        });
    }),
    treemapAltItem60
  );
}
var treemapAltItem1,
  treemapAltItem2,
  treemapAltItem3,
  treemapAltItem4,
  treemapAltItem5,
  treemapAltItem6,
  treemapAltItem7,
  treemapAltItem8,
  treemapAltItem9,
  DiagramPSM6KHXK;
esmInit(() => {
  chunkEXTU4WIET();
  chunkQN33PNHLT();
  chunkATLVNIR6N();
  chunk4BX2VUABT();
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  ensureD3SelectionRuntimeT();
  treemapAltItem1 = class {
    constructor() {
      this.nodes = [];
      this.levels = new Map();
      this.outerNodes = [];
      this.classes = new Map();
      this.setAccTitle = chunkABZYJK2DV;
      this.getAccTitle = _chunkABZYJK2DV;
      this.setDiagramTitle = chunkABZYJK2DW;
      this.getDiagramTitle = chunkABZYJK2DC;
      this.getAccDescription = chunkABZYJK2DUnderscore;
      this.setAccDescription = chunkABZYJK2DB;
    }
    static {
      chunkAGHRB4JFN(this, "TreeMapDB");
    }
    getNodes() {
      return this.nodes;
    }
    getConfig() {
      let treemapAltItem82 = chunkABZYJK2DD,
        treemapAltItem83 = chunkABZYJK2DY();
      return chunkS3R3BYOJR({
        ...treemapAltItem82.treemap,
        ...(treemapAltItem83.treemap ?? {}),
      });
    }
    addNode(treemapAltSlot21, treemapAltSlot22) {
      this.nodes.push(treemapAltSlot21);
      this.levels.set(treemapAltSlot21, treemapAltSlot22);
      treemapAltSlot22 === 0 &&
        (this.outerNodes.push(treemapAltSlot21),
        (this.root ??= treemapAltSlot21));
    }
    getRoot() {
      return {
        name: "",
        children: this.outerNodes,
      };
    }
    addClass(treemapAltSlot11, treemapAltSlot12) {
      let treemapAltItem65 = this.classes.get(treemapAltSlot11) ?? {
          id: treemapAltSlot11,
          styles: [],
          textStyles: [],
        },
        treemapAltItem66 = treemapAltSlot12
          .replace(/\\,/g, "§§§")
          .replace(/,/g, ";")
          .replace(/§§§/g, ",")
          .split(";");
      treemapAltItem66 &&
        treemapAltItem66.forEach((item) => {
          chunkATLVNIR6R(item) &&
            (treemapAltItem65?.textStyles
              ? treemapAltItem65.textStyles.push(item)
              : (treemapAltItem65.textStyles = [item]));
          treemapAltItem65?.styles
            ? treemapAltItem65.styles.push(item)
            : (treemapAltItem65.styles = [item]);
        });
      this.classes.set(treemapAltSlot11, treemapAltItem65);
    }
    getClasses() {
      return this.classes;
    }
    getStylesForClass(treemapAltSlot26) {
      return this.classes.get(treemapAltSlot26)?.styles ?? [];
    }
    clear() {
      chunkABZYJK2DA();
      this.nodes = [];
      this.levels = new Map();
      this.outerNodes = [];
      this.classes = new Map();
      this.root = undefined;
    }
  };
  chunkAGHRB4JFN(diagramPSM6KHXKHelper1, "buildHierarchy");
  treemapAltItem2 = chunkAGHRB4JFN((treemapAltSlot7, treemapAltSlot8) => {
    chunk4BX2VUABN(treemapAltSlot7, treemapAltSlot8);
    let treemapAltItem51 = [];
    for (let treemapAltItem80 of treemapAltSlot7.TreemapRows ?? [])
      treemapAltItem80.$type === "ClassDefStatement" &&
        treemapAltSlot8.addClass(
          treemapAltItem80.className ?? "",
          treemapAltItem80.styleText ?? "",
        );
    for (let treemapAltItem64 of treemapAltSlot7.TreemapRows ?? []) {
      let treemapAltItem68 = treemapAltItem64.item;
      if (!treemapAltItem68) continue;
      let treemapAltItem69 = treemapAltItem64.indent
          ? parseInt(treemapAltItem64.indent)
          : 0,
        treemapAltItem70 = treemapAltItem3(treemapAltItem68),
        treemapAltItem71 = treemapAltItem68.classSelector
          ? treemapAltSlot8.getStylesForClass(treemapAltItem68.classSelector)
          : [],
        treemapAltItem72 =
          treemapAltItem71.length > 0 ? treemapAltItem71.join(";") : undefined,
        treemapAltItem73 = {
          level: treemapAltItem69,
          name: treemapAltItem70,
          type: treemapAltItem68.$type,
          value: treemapAltItem68.value,
          classSelector: treemapAltItem68.classSelector,
          cssCompiledStyles: treemapAltItem72,
        };
      treemapAltItem51.push(treemapAltItem73);
    }
    let treemapAltItem52 = diagramPSM6KHXKHelper1(treemapAltItem51),
      treemapAltItem53 = chunkAGHRB4JFN(
        (treemapAltSlot19, treemapAltSlot20) => {
          for (let treemapAltItem81 of treemapAltSlot19) {
            treemapAltSlot8.addNode(treemapAltItem81, treemapAltSlot20);
            treemapAltItem81.children &&
              treemapAltItem81.children.length > 0 &&
              treemapAltItem53(treemapAltItem81.children, treemapAltSlot20 + 1);
          }
        },
        "addNodesRecursively",
      );
    treemapAltItem53(treemapAltItem52, 0);
  }, "populate");
  treemapAltItem3 = chunkAGHRB4JFN(
    (treemapAltSlot42) =>
      treemapAltSlot42.name ? String(treemapAltSlot42.name) : "",
    "getItemName",
  );
  treemapAltItem4 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (treemapAltSlot13) => {
      try {
        let treemapAltItem75 = await mermaidParserCoreN(
          "treemap",
          treemapAltSlot13,
        );
        chunkAGHRB4JFI.debug("Treemap AST:", treemapAltItem75);
        let treemapAltItem76 = treemapAltItem4.parser?.yy;
        if (!(treemapAltItem76 instanceof treemapAltItem1))
          throw Error(
            "parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
          );
        treemapAltItem2(treemapAltItem75, treemapAltItem76);
      } catch (treemapAltItem87) {
        throw (
          chunkAGHRB4JFI.error("Error parsing treemap:", treemapAltItem87),
          treemapAltItem87
        );
      }
    }, "parse"),
  };
  treemapAltItem5 = 10;
  treemapAltItem6 = 10;
  treemapAltItem7 = 25;
  treemapAltItem8 = {
    draw: chunkAGHRB4JFN(
      (treemapAltSlot1, treemapAltSlot2, treemapAltSlot3, treemapAltSlot4) => {
        let treemapAltItem10 = treemapAltSlot4.db,
          treemapAltItem11 = treemapAltItem10.getConfig(),
          treemapAltItem12 = treemapAltItem11.padding ?? treemapAltItem5,
          treemapAltItem13 = treemapAltItem10.getDiagramTitle(),
          treemapAltItem14 = treemapAltItem10.getRoot(),
          { themeVariables } = chunkABZYJK2DY();
        if (!treemapAltItem14) return;
        let treemapAltItem15 = treemapAltItem13 ? 30 : 0,
          treemapAltItem16 = chunkEXTU4WIEN(treemapAltSlot2),
          treemapAltItem17 = treemapAltItem11.nodeWidth
            ? treemapAltItem11.nodeWidth * treemapAltItem6
            : 960,
          treemapAltItem18 = treemapAltItem11.nodeHeight
            ? treemapAltItem11.nodeHeight * treemapAltItem6
            : 500,
          treemapAltItem19 = treemapAltItem17,
          treemapAltItem20 = treemapAltItem18 + treemapAltItem15;
        treemapAltItem16.attr(
          "viewBox",
          `0 0 ${treemapAltItem19} ${treemapAltItem20}`,
        );
        _chunkABZYJK2DC(
          treemapAltItem16,
          treemapAltItem20,
          treemapAltItem19,
          treemapAltItem11.useMaxWidth,
        );
        let treemapAltItem21;
        try {
          let treemapAltItem67 = treemapAltItem11.valueFormat || ",";
          if (treemapAltItem67 === "$0,0")
            treemapAltItem21 = chunkAGHRB4JFN(
              (treemapAltSlot64) => "$" + appInitialAt(",")(treemapAltSlot64),
              "valueFormat",
            );
          else if (
            treemapAltItem67.startsWith("$") &&
            treemapAltItem67.includes(",")
          ) {
            let treemapAltItem78 = /\.\d+/.exec(treemapAltItem67),
              treemapAltItem79 = treemapAltItem78 ? treemapAltItem78[0] : "";
            treemapAltItem21 = chunkAGHRB4JFN(
              (treemapAltSlot56) =>
                "$" + appInitialAt("," + treemapAltItem79)(treemapAltSlot56),
              "valueFormat",
            );
          } else if (treemapAltItem67.startsWith("$")) {
            let treemapAltItem84 = treemapAltItem67.substring(1);
            treemapAltItem21 = chunkAGHRB4JFN(
              (treemapAltSlot57) =>
                "$" + appInitialAt(treemapAltItem84 || "")(treemapAltSlot57),
              "valueFormat",
            );
          } else treemapAltItem21 = appInitialAt(treemapAltItem67);
        } catch (treemapAltItem86) {
          chunkAGHRB4JFI.error(
            "Error creating format function:",
            treemapAltItem86,
          );
          treemapAltItem21 = appInitialAt(",");
        }
        let treemapAltItem22 = appInitialYat().range([
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
          treemapAltItem23 = appInitialYat().range([
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
          treemapAltItem24 = appInitialYat().range([
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
        treemapAltItem13 &&
          treemapAltItem16
            .append("text")
            .attr("x", treemapAltItem19 / 2)
            .attr("y", treemapAltItem15 / 2)
            .attr("class", "treemapTitle")
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .text(treemapAltItem13);
        let treemapAltItem25 = treemapAltItem16
            .append("g")
            .attr("transform", `translate(0, ${treemapAltItem15})`)
            .attr("class", "treemapContainer"),
          treemapAltItem26 = hierarchyCluster(treemapAltItem14)
            .sum((treemapAltSlot67) => treemapAltSlot67.value ?? 0)
            .sort(
              (treemapAltSlot37, treemapAltSlot38) =>
                (treemapAltSlot38.value ?? 0) - (treemapAltSlot37.value ?? 0),
            ),
          treemapAltItem27 = hierarchyRoot()
            .size([treemapAltItem17, treemapAltItem18])
            .paddingTop((treemapAltSlot28) =>
              treemapAltSlot28.children && treemapAltSlot28.children.length > 0
                ? treemapAltItem7 + treemapAltItem6
                : 0,
            )
            .paddingInner(treemapAltItem12)
            .paddingLeft((treemapAltSlot33) =>
              treemapAltSlot33.children && treemapAltSlot33.children.length > 0
                ? treemapAltItem6
                : 0,
            )
            .paddingRight((treemapAltSlot34) =>
              treemapAltSlot34.children && treemapAltSlot34.children.length > 0
                ? treemapAltItem6
                : 0,
            )
            .paddingBottom((treemapAltSlot35) =>
              treemapAltSlot35.children && treemapAltSlot35.children.length > 0
                ? treemapAltItem6
                : 0,
            )
            .round(true)(treemapAltItem26),
          treemapAltItem28 = treemapAltItem27
            .descendants()
            .filter((item) => item.children && item.children.length > 0),
          treemapAltItem29 = treemapAltItem25
            .selectAll(".treemapSection")
            .data(treemapAltItem28)
            .enter()
            .append("g")
            .attr("class", "treemapSection")
            .attr(
              "transform",
              (treemapAltSlot44) =>
                `translate(${treemapAltSlot44.x0},${treemapAltSlot44.y0})`,
            );
        treemapAltItem29
          .append("rect")
          .attr(
            "width",
            (treemapAltSlot68) => treemapAltSlot68.x1 - treemapAltSlot68.x0,
          )
          .attr("height", treemapAltItem7)
          .attr("class", "treemapSectionHeader")
          .attr("fill", "none")
          .attr("fill-opacity", 0.6)
          .attr("stroke-width", 0.6)
          .attr("style", (treemapAltSlot36) =>
            treemapAltSlot36.depth === 0 ? "display: none;" : "",
          );
        treemapAltItem29
          .append("clipPath")
          .attr(
            "id",
            (treemapAltSlot48, treemapAltSlot49) =>
              `clip-section-${treemapAltSlot2}-${treemapAltSlot49}`,
          )
          .append("rect")
          .attr("width", (treemapAltSlot43) =>
            Math.max(0, treemapAltSlot43.x1 - treemapAltSlot43.x0 - 12),
          )
          .attr("height", treemapAltItem7);
        treemapAltItem29
          .append("rect")
          .attr(
            "width",
            (treemapAltSlot69) => treemapAltSlot69.x1 - treemapAltSlot69.x0,
          )
          .attr(
            "height",
            (treemapAltSlot70) => treemapAltSlot70.y1 - treemapAltSlot70.y0,
          )
          .attr(
            "class",
            (treemapAltSlot40, treemapAltSlot41) =>
              `treemapSection section${treemapAltSlot41}`,
          )
          .attr("fill", (treemapAltSlot65) =>
            treemapAltItem22(treemapAltSlot65.data.name),
          )
          .attr("fill-opacity", 0.6)
          .attr("stroke", (treemapAltSlot66) =>
            treemapAltItem23(treemapAltSlot66.data.name),
          )
          .attr("stroke-width", 2)
          .attr("stroke-opacity", 0.4)
          .attr("style", (treemapAltSlot18) => {
            if (treemapAltSlot18.depth === 0) return "display: none;";
            let treemapAltItem77 = chunkATLVNIR6A({
              cssCompiledStyles: treemapAltSlot18.data.cssCompiledStyles,
            });
            return (
              treemapAltItem77.nodeStyles +
              ";" +
              treemapAltItem77.borderStyles.join(";")
            );
          });
        treemapAltItem29
          .append("text")
          .attr("class", "treemapSectionLabel")
          .attr("x", 6)
          .attr("y", treemapAltItem7 / 2)
          .attr("dominant-baseline", "middle")
          .text((treemapAltSlot39) =>
            treemapAltSlot39.depth === 0 ? "" : treemapAltSlot39.data.name,
          )
          .attr("font-weight", "bold")
          .attr("style", (treemapAltSlot15) =>
            treemapAltSlot15.depth === 0
              ? "display: none;"
              : "dominant-baseline: middle; font-size: 12px; fill:" +
                treemapAltItem24(treemapAltSlot15.data.name) +
                "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" +
                chunkATLVNIR6A({
                  cssCompiledStyles: treemapAltSlot15.data.cssCompiledStyles,
                }).labelStyles.replace("color:", "fill:"),
          )
          .each(function (treemapAltSlot9) {
            if (treemapAltSlot9.depth === 0) return;
            let treemapAltItem54 = d3Select(this),
              treemapAltItem55 = treemapAltSlot9.data.name;
            treemapAltItem54.text(treemapAltItem55);
            let treemapAltItem56 = treemapAltSlot9.x1 - treemapAltSlot9.x0,
              treemapAltItem57;
            treemapAltItem57 =
              treemapAltItem11.showValues !== false && treemapAltSlot9.value
                ? treemapAltItem56 - 10 - 30 - 10 - 6
                : treemapAltItem56 - 6 - 6;
            let treemapAltItem58 = Math.max(15, treemapAltItem57),
              treemapAltItem59 = treemapAltItem54.node();
            if (treemapAltItem59.getComputedTextLength() > treemapAltItem58) {
              let treemapAltItem74 = treemapAltItem55;
              for (; treemapAltItem74.length > 0; ) {
                if (
                  ((treemapAltItem74 = treemapAltItem55.substring(
                    0,
                    treemapAltItem74.length - 1,
                  )),
                  treemapAltItem74.length === 0)
                ) {
                  treemapAltItem54.text("...");
                  treemapAltItem59.getComputedTextLength() > treemapAltItem58 &&
                    treemapAltItem54.text("");
                  break;
                }
                if (
                  (treemapAltItem54.text(treemapAltItem74 + "..."),
                  treemapAltItem59.getComputedTextLength() <= treemapAltItem58)
                )
                  break;
              }
            }
          });
        treemapAltItem11.showValues !== false &&
          treemapAltItem29
            .append("text")
            .attr("class", "treemapSectionValue")
            .attr(
              "x",
              (treemapAltSlot63) =>
                treemapAltSlot63.x1 - treemapAltSlot63.x0 - 10,
            )
            .attr("y", treemapAltItem7 / 2)
            .attr("text-anchor", "end")
            .attr("dominant-baseline", "middle")
            .text((treemapAltSlot50) =>
              treemapAltSlot50.value
                ? treemapAltItem21(treemapAltSlot50.value)
                : "",
            )
            .attr("font-style", "italic")
            .attr("style", (treemapAltSlot14) =>
              treemapAltSlot14.depth === 0
                ? "display: none;"
                : "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" +
                  treemapAltItem24(treemapAltSlot14.data.name) +
                  "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" +
                  chunkATLVNIR6A({
                    cssCompiledStyles: treemapAltSlot14.data.cssCompiledStyles,
                  }).labelStyles.replace("color:", "fill:"),
            );
        let treemapAltItem30 = treemapAltItem27.leaves(),
          treemapAltItem31 = treemapAltItem25
            .selectAll(".treemapLeafGroup")
            .data(treemapAltItem30)
            .enter()
            .append("g")
            .attr(
              "class",
              (treemapAltSlot23, treemapAltSlot24) =>
                `treemapNode treemapLeafGroup leaf${treemapAltSlot24}${treemapAltSlot23.data.classSelector ? ` ${treemapAltSlot23.data.classSelector}` : ""}x`,
            )
            .attr(
              "transform",
              (treemapAltSlot45) =>
                `translate(${treemapAltSlot45.x0},${treemapAltSlot45.y0})`,
            );
        treemapAltItem31
          .append("rect")
          .attr(
            "width",
            (treemapAltSlot71) => treemapAltSlot71.x1 - treemapAltSlot71.x0,
          )
          .attr(
            "height",
            (treemapAltSlot72) => treemapAltSlot72.y1 - treemapAltSlot72.y0,
          )
          .attr("class", "treemapLeaf")
          .attr("fill", (treemapAltSlot29) =>
            treemapAltSlot29.parent
              ? treemapAltItem22(treemapAltSlot29.parent.data.name)
              : treemapAltItem22(treemapAltSlot29.data.name),
          )
          .attr(
            "style",
            (treemapAltSlot25) =>
              chunkATLVNIR6A({
                cssCompiledStyles: treemapAltSlot25.data.cssCompiledStyles,
              }).nodeStyles,
          )
          .attr("fill-opacity", 0.3)
          .attr("stroke", (treemapAltSlot30) =>
            treemapAltSlot30.parent
              ? treemapAltItem22(treemapAltSlot30.parent.data.name)
              : treemapAltItem22(treemapAltSlot30.data.name),
          )
          .attr("stroke-width", 3);
        treemapAltItem31
          .append("clipPath")
          .attr(
            "id",
            (treemapAltSlot58, treemapAltSlot59) =>
              `clip-${treemapAltSlot2}-${treemapAltSlot59}`,
          )
          .append("rect")
          .attr("width", (treemapAltSlot46) =>
            Math.max(0, treemapAltSlot46.x1 - treemapAltSlot46.x0 - 4),
          )
          .attr("height", (treemapAltSlot47) =>
            Math.max(0, treemapAltSlot47.y1 - treemapAltSlot47.y0 - 4),
          );
        treemapAltItem31
          .append("text")
          .attr("class", "treemapLabel")
          .attr(
            "x",
            (treemapAltSlot60) =>
              (treemapAltSlot60.x1 - treemapAltSlot60.x0) / 2,
          )
          .attr(
            "y",
            (treemapAltSlot61) =>
              (treemapAltSlot61.y1 - treemapAltSlot61.y0) / 2,
          )
          .attr(
            "style",
            (treemapAltSlot17) =>
              "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" +
              treemapAltItem24(treemapAltSlot17.data.name) +
              ";" +
              chunkATLVNIR6A({
                cssCompiledStyles: treemapAltSlot17.data.cssCompiledStyles,
              }).labelStyles.replace("color:", "fill:"),
          )
          .attr(
            "clip-path",
            (treemapAltSlot52, treemapAltSlot53) =>
              `url(#clip-${treemapAltSlot2}-${treemapAltSlot53})`,
          )
          .text((treemapAltSlot73) => treemapAltSlot73.data.name)
          .each(function (treemapAltSlot5) {
            let treemapAltItem32 = d3Select(this),
              treemapAltItem33 = treemapAltSlot5.x1 - treemapAltSlot5.x0,
              treemapAltItem34 = treemapAltSlot5.y1 - treemapAltSlot5.y0,
              treemapAltItem35 = treemapAltItem32.node(),
              treemapAltItem36 = treemapAltItem33 - 8,
              treemapAltItem37 = treemapAltItem34 - 8;
            if (treemapAltItem36 < 10 || treemapAltItem37 < 10) {
              treemapAltItem32.style("display", "none");
              return;
            }
            let treemapAltItem38 = parseInt(
              treemapAltItem32.style("font-size"),
              10,
            );
            for (
              ;
              treemapAltItem35.getComputedTextLength() > treemapAltItem36 &&
              treemapAltItem38 > 8;
            ) {
              treemapAltItem38--;
              treemapAltItem32.style("font-size", `${treemapAltItem38}px`);
            }
            let treemapAltItem40 = Math.max(
                6,
                Math.min(28, Math.round(treemapAltItem38 * 0.6)),
              ),
              treemapAltItem41 = treemapAltItem38 + 2 + treemapAltItem40;
            for (
              ;
              treemapAltItem41 > treemapAltItem37 &&
              treemapAltItem38 > 8 &&
              (treemapAltItem38--,
              (treemapAltItem40 = Math.max(
                6,
                Math.min(28, Math.round(treemapAltItem38 * 0.6)),
              )),
              !(treemapAltItem40 < 6 && treemapAltItem38 === 8));
            ) {
              treemapAltItem32.style("font-size", `${treemapAltItem38}px`);
              treemapAltItem41 = treemapAltItem38 + 2 + treemapAltItem40;
            }
            treemapAltItem32.style("font-size", `${treemapAltItem38}px`);
            (treemapAltItem35.getComputedTextLength() > treemapAltItem36 ||
              treemapAltItem38 < 8 ||
              treemapAltItem37 < treemapAltItem38) &&
              treemapAltItem32.style("display", "none");
          });
        treemapAltItem11.showValues !== false &&
          treemapAltItem31
            .append("text")
            .attr("class", "treemapValue")
            .attr(
              "x",
              (treemapAltSlot62) =>
                (treemapAltSlot62.x1 - treemapAltSlot62.x0) / 2,
            )
            .attr("y", function (treemapAltSlot27) {
              return (treemapAltSlot27.y1 - treemapAltSlot27.y0) / 2;
            })
            .attr(
              "style",
              (treemapAltSlot16) =>
                "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" +
                treemapAltItem24(treemapAltSlot16.data.name) +
                ";" +
                chunkATLVNIR6A({
                  cssCompiledStyles: treemapAltSlot16.data.cssCompiledStyles,
                }).labelStyles.replace("color:", "fill:"),
            )
            .attr(
              "clip-path",
              (treemapAltSlot54, treemapAltSlot55) =>
                `url(#clip-${treemapAltSlot2}-${treemapAltSlot55})`,
            )
            .text((treemapAltSlot51) =>
              treemapAltSlot51.value
                ? treemapAltItem21(treemapAltSlot51.value)
                : "",
            )
            .each(function (treemapAltSlot6) {
              let treemapAltItem42 = d3Select(this),
                treemapAltItem43 = this.parentNode;
              if (!treemapAltItem43) {
                treemapAltItem42.style("display", "none");
                return;
              }
              let treemapAltItem44 =
                d3Select(treemapAltItem43).select(".treemapLabel");
              if (
                treemapAltItem44.empty() ||
                treemapAltItem44.style("display") === "none"
              ) {
                treemapAltItem42.style("display", "none");
                return;
              }
              let treemapAltItem45 = parseFloat(
                  treemapAltItem44.style("font-size"),
                ),
                treemapAltItem46 = Math.max(
                  6,
                  Math.min(28, Math.round(treemapAltItem45 * 0.6)),
                );
              treemapAltItem42.style("font-size", `${treemapAltItem46}px`);
              let treemapAltItem47 =
                (treemapAltSlot6.y1 - treemapAltSlot6.y0) / 2 +
                treemapAltItem45 / 2 +
                2;
              treemapAltItem42.attr("y", treemapAltItem47);
              let treemapAltItem48 = treemapAltSlot6.x1 - treemapAltSlot6.x0,
                treemapAltItem49 = treemapAltSlot6.y1 - treemapAltSlot6.y0 - 4,
                treemapAltItem50 = treemapAltItem48 - 8;
              treemapAltItem42.node().getComputedTextLength() >
                treemapAltItem50 ||
              treemapAltItem47 + treemapAltItem46 > treemapAltItem49 ||
              treemapAltItem46 < 6
                ? treemapAltItem42.style("display", "none")
                : treemapAltItem42.style("display", null);
            });
        chunkQN33PNHLN(
          treemapAltItem16,
          treemapAltItem11.diagramPadding ?? 8,
          "flowchart",
          treemapAltItem11?.useMaxWidth || false,
        );
      },
      "draw",
    ),
    getClasses: chunkAGHRB4JFN(function (treemapAltSlot31, treemapAltSlot32) {
      return treemapAltSlot32.db.getClasses();
    }, "getClasses"),
  };
  treemapAltItem9 = {
    sectionStrokeColor: "black",
    sectionStrokeWidth: "1",
    sectionFillColor: "#efefef",
    leafStrokeColor: "black",
    leafStrokeWidth: "1",
    leafFillColor: "#efefef",
    labelColor: "black",
    labelFontSize: "12px",
    valueFontSize: "10px",
    valueColor: "black",
    titleColor: "black",
    titleFontSize: "14px",
  };
  DiagramPSM6KHXK = {
    parser: treemapAltItem4,
    get db() {
      return new treemapAltItem1();
    },
    renderer: treemapAltItem8,
    styles: chunkAGHRB4JFN(({ treemap } = {}) => {
      let treemapAltItem63 = chunkS3R3BYOJR(treemapAltItem9, treemap);
      return `
  .treemapNode.section {
    stroke: ${treemapAltItem63.sectionStrokeColor};
    stroke-width: ${treemapAltItem63.sectionStrokeWidth};
    fill: ${treemapAltItem63.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${treemapAltItem63.leafStrokeColor};
    stroke-width: ${treemapAltItem63.leafStrokeWidth};
    fill: ${treemapAltItem63.leafFillColor};
  }
  .treemapLabel {
    fill: ${treemapAltItem63.labelColor};
    font-size: ${treemapAltItem63.labelFontSize};
  }
  .treemapValue {
    fill: ${treemapAltItem63.valueColor};
    font-size: ${treemapAltItem63.valueFontSize};
  }
  .treemapTitle {
    fill: ${treemapAltItem63.titleColor};
    font-size: ${treemapAltItem63.titleFontSize};
  }
  `;
    }, "getStyles"),
  };
})();
export { DiagramPSM6KHXK as diagram };
