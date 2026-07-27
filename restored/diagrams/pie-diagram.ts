// Restored from ref/webview/assets/pieDiagram-DEJITSTG-C3IOKPCe.js
// Mermaid pie diagram definition (primary). app-initial Nit/Oit/yat → d3-shape arc/pie + scaleOrdinal.
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
import { arc as appInitialNit } from "../vendor/d3-shape-arc";
import { pie as appInitialOit } from "../vendor/d3-shape-line-pie-stack";
import { scaleOrdinal as appInitialYat } from "../vendor/d3-scale-linear";
import { ensureD3SelectionRuntimeT } from "../vendor/d3-axis-current-runtime";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  C as chunkICPOFSXXC,
  G as chunkICPOFSXXG,
  H as chunkICPOFSXXH,
  V as chunkICPOFSXXV,
  _ as chunkICPOFSXXUnderscore,
  a as _chunkICPOFSXXA,
  b as chunkICPOFSXXB,
  c as _chunkICPOFSXXC,
  d as chunkICPOFSXXD,
  v as _chunkICPOFSXXV,
} from "./mermaid-config-alt";
import {
  n as chunk426QAEUCN,
  t as chunk426QAEUCT,
} from "./select-svg-element-alt";
import {
  chunk5PVQY5BWP,
  chunk5PVQY5BWR,
  chunk5PVQY5BWU,
} from "./mermaid-common-utils-alt";
import { n as chunk4BX2VUABN, t as chunk4BX2VUABT } from "./populate-common-db";
import { mermaidParserCoreN, mermaidParserCoreT } from "./mermaid-parser-core";
var pieItem1,
  pieItem2,
  pieItem3,
  pieItem4,
  pieItem5,
  pieItem6,
  pieItem7,
  pieItem8,
  pieItem9,
  pieItem10,
  pieDiagramDEJITSTG;
esmInit(() => {
  chunk426QAEUCT();
  chunk4BX2VUABT();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  ensureD3SelectionRuntimeT();
  pieItem1 = chunkICPOFSXXD.pie;
  pieItem2 = {
    sections: new Map(),
    showData: false,
    config: pieItem1,
  };
  pieItem3 = pieItem2.sections;
  pieItem4 = pieItem2.showData;
  pieItem5 = structuredClone(pieItem1);
  pieItem6 = {
    getConfig: chunkAGHRB4JFN(() => structuredClone(pieItem5), "getConfig"),
    clear: chunkAGHRB4JFN(() => {
      pieItem3 = new Map();
      pieItem4 = pieItem2.showData;
      _chunkICPOFSXXA();
    }, "clear"),
    setDiagramTitle: chunkICPOFSXXG,
    getDiagramTitle: chunkICPOFSXXC,
    setAccTitle: chunkICPOFSXXH,
    getAccTitle: _chunkICPOFSXXV,
    setAccDescription: chunkICPOFSXXV,
    getAccDescription: chunkICPOFSXXUnderscore,
    addSection: chunkAGHRB4JFN(({ label, value }) => {
      if (value < 0)
        throw Error(
          `"${label}" has invalid value: ${value}. Negative values are not allowed in pie charts. All slice values must be >= 0.`,
        );
      pieItem3.has(label) ||
        (pieItem3.set(label, value),
        chunkAGHRB4JFI.debug(
          `added new section: ${label}, with value: ${value}`,
        ));
    }, "addSection"),
    getSections: chunkAGHRB4JFN(() => pieItem3, "getSections"),
    setShowData: chunkAGHRB4JFN((pieSlot19) => {
      pieItem4 = pieSlot19;
    }, "setShowData"),
    getShowData: chunkAGHRB4JFN(() => pieItem4, "getShowData"),
  };
  pieItem7 = chunkAGHRB4JFN((pieSlot9, pieSlot10) => {
    chunk4BX2VUABN(pieSlot9, pieSlot10);
    pieSlot10.setShowData(pieSlot9.showData);
    pieSlot9.sections.map(pieSlot10.addSection);
  }, "populateDb");
  pieItem8 = {
    parse: chunkAGHRB4JFN(async (pieSlot11) => {
      let pieItem38 = await mermaidParserCoreN("pie", pieSlot11);
      chunkAGHRB4JFI.debug(pieItem38);
      pieItem7(pieItem38, pieItem6);
    }, "parse"),
  };
  pieItem9 = chunkAGHRB4JFN(
    (pieSlot5) => `
  .pieCircle{
    stroke: ${pieSlot5.pieStrokeColor};
    stroke-width : ${pieSlot5.pieStrokeWidth};
    opacity : ${pieSlot5.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${pieSlot5.pieOuterStrokeColor};
    stroke-width: ${pieSlot5.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${pieSlot5.pieTitleTextSize};
    fill: ${pieSlot5.pieTitleTextColor};
    font-family: ${pieSlot5.fontFamily};
  }
  .slice {
    font-family: ${pieSlot5.fontFamily};
    fill: ${pieSlot5.pieSectionTextColor};
    font-size:${pieSlot5.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${pieSlot5.pieLegendTextColor};
    font-family: ${pieSlot5.fontFamily};
    font-size: ${pieSlot5.pieLegendTextSize};
  }
`,
    "getStyles",
  );
  pieItem10 = chunkAGHRB4JFN((pieSlot6) => {
    let pieItem35 = [...pieSlot6.values()].reduce(
        (accumulator, current) => accumulator + current,
        0,
      ),
      pieItem36 = [...pieSlot6.entries()]
        .map(([pieSlot15, pieSlot16]) => ({
          label: pieSlot15,
          value: pieSlot16,
        }))
        .filter((item) => (item.value / pieItem35) * 100 >= 1);
    return appInitialOit()
      .value((pieSlot23) => pieSlot23.value)
      .sort(null)(pieItem36);
  }, "createPieArcs");
  pieDiagramDEJITSTG = {
    parser: pieItem8,
    db: pieItem6,
    renderer: {
      draw: chunkAGHRB4JFN((pieSlot1, pieSlot2, pieSlot3, pieSlot4) => {
        chunkAGHRB4JFI.debug("rendering pie chart\n" + pieSlot1);
        let pieItem11 = pieSlot4.db,
          pieItem12 = chunkICPOFSXXB(),
          pieItem13 = chunk5PVQY5BWR(pieItem11.getConfig(), pieItem12.pie),
          pieItem14 = chunk426QAEUCN(pieSlot2),
          pieItem15 = pieItem14.append("g");
        pieItem15.attr("transform", "translate(225,225)");
        let { themeVariables } = pieItem12,
          [pieItem16] = chunk5PVQY5BWP(themeVariables.pieOuterStrokeWidth);
        pieItem16 ??= 2;
        let pieItem17 = pieItem13.textPosition,
          pieItem18 = appInitialNit().innerRadius(0).outerRadius(185),
          pieItem19 = appInitialNit()
            .innerRadius(185 * pieItem17)
            .outerRadius(185 * pieItem17);
        pieItem15
          .append("circle")
          .attr("cx", 0)
          .attr("cy", 0)
          .attr("r", 185 + pieItem16 / 2)
          .attr("class", "pieOuterCircle");
        let pieItem20 = pieItem11.getSections(),
          pieItem21 = pieItem10(pieItem20),
          pieItem22 = [
            themeVariables.pie1,
            themeVariables.pie2,
            themeVariables.pie3,
            themeVariables.pie4,
            themeVariables.pie5,
            themeVariables.pie6,
            themeVariables.pie7,
            themeVariables.pie8,
            themeVariables.pie9,
            themeVariables.pie10,
            themeVariables.pie11,
            themeVariables.pie12,
          ],
          pieItem23 = 0;
        pieItem20.forEach((item) => {
          pieItem23 += item;
        });
        let pieItem24 = pieItem21.filter(
            (item) => ((item.data.value / pieItem23) * 100).toFixed(0) !== "0",
          ),
          pieItem25 = appInitialYat(pieItem22).domain([...pieItem20.keys()]);
        pieItem15
          .selectAll("mySlices")
          .data(pieItem24)
          .enter()
          .append("path")
          .attr("d", pieItem18)
          .attr("fill", (pieSlot20) => pieItem25(pieSlot20.data.label))
          .attr("class", "pieCircle");
        pieItem15
          .selectAll("mySlices")
          .data(pieItem24)
          .enter()
          .append("text")
          .text(
            (pieSlot13) =>
              ((pieSlot13.data.value / pieItem23) * 100).toFixed(0) + "%",
          )
          .attr(
            "transform",
            (pieSlot14) => "translate(" + pieItem19.centroid(pieSlot14) + ")",
          )
          .style("text-anchor", "middle")
          .attr("class", "slice");
        let pieItem26 = pieItem15
            .append("text")
            .text(pieItem11.getDiagramTitle())
            .attr("x", 0)
            .attr("y", -200)
            .attr("class", "pieTitleText"),
          pieItem27 = [...pieItem20.entries()].map(
            ([pieSlot17, pieSlot18]) => ({
              label: pieSlot17,
              value: pieSlot18,
            }),
          ),
          pieItem28 = pieItem15
            .selectAll(".legend")
            .data(pieItem27)
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", (pieSlot7, pieSlot8) => {
              let pieItem37 = (22 * pieItem27.length) / 2;
              return "translate(216," + (pieSlot8 * 22 - pieItem37) + ")";
            });
        pieItem28
          .append("rect")
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", (pieSlot21) => pieItem25(pieSlot21.label))
          .style("stroke", (pieSlot22) => pieItem25(pieSlot22.label));
        pieItem28
          .append("text")
          .attr("x", 22)
          .attr("y", 14)
          .text((pieSlot12) =>
            pieItem11.getShowData()
              ? `${pieSlot12.label} [${pieSlot12.value}]`
              : pieSlot12.label,
          );
        let pieItem29 =
            512 +
            Math.max(
              ...pieItem28
                .selectAll("text")
                .nodes()
                .map((item) => item?.getBoundingClientRect().width ?? 0),
            ),
          pieItem30 = pieItem26.node()?.getBoundingClientRect().width ?? 0,
          pieItem31 = 225 - pieItem30 / 2,
          pieItem32 = 225 + pieItem30 / 2,
          pieItem33 = Math.min(0, pieItem31),
          pieItem34 = Math.max(pieItem29, pieItem32) - pieItem33;
        pieItem14.attr("viewBox", `${pieItem33} 0 ${pieItem34} 450`);
        _chunkICPOFSXXC(pieItem14, 450, pieItem34, pieItem13.useMaxWidth);
      }, "draw"),
    },
    styles: pieItem9,
  };
})();
export { pieDiagramDEJITSTG as diagram };
