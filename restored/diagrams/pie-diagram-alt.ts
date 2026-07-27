// Restored from ref/webview/assets/pieDiagram-ADFJNKIX-D56KiHj4.js
// Mermaid pie diagram definition (alt). app-initial Nit/Oit/yat → d3-shape arc/pie + scaleOrdinal.
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
  b as _chunkABZYJK2DB,
  c as _chunkABZYJK2DC,
  d as chunkABZYJK2DD,
  k as chunkABZYJK2DK,
  v as _chunkABZYJK2DV,
} from "./mermaid-config";
import { ensureD3SelectionRuntimeT } from "../vendor/d3-axis-current-runtime";
import { initSelectSvgElementChunk as chunkEXTU4WIEN, selectSvgElement as chunkEXTU4WIET } from "./select-svg-element";
import {
  chunkS3R3BYOJP,
  chunkS3R3BYOJR,
  chunkS3R3BYOJU,
} from "./mermaid-common-utils";
import { initPopulateCommonDbChunk as chunk4BX2VUABN, populateCommonDb as chunk4BX2VUABT } from "./populate-common-db-alt";
import {
  mermaidParserCoreN,
  mermaidParserCoreT,
} from "./mermaid-parser-core-alt";
var pieAltItem1,
  pieAltItem2,
  pieAltItem3,
  pieAltItem4,
  pieAltItem5,
  pieAltItem6,
  pieAltItem7,
  pieAltItem8,
  pieAltItem9,
  pieAltItem10,
  pieDiagramADFJNKIX;
esmInit(() => {
  chunkEXTU4WIET();
  chunk4BX2VUABT();
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  ensureD3SelectionRuntimeT();
  pieAltItem1 = chunkABZYJK2DD.pie;
  pieAltItem2 = {
    sections: new Map(),
    showData: false,
    config: pieAltItem1,
  };
  pieAltItem3 = pieAltItem2.sections;
  pieAltItem4 = pieAltItem2.showData;
  pieAltItem5 = structuredClone(pieAltItem1);
  pieAltItem6 = {
    getConfig: chunkAGHRB4JFN(() => structuredClone(pieAltItem5), "getConfig"),
    clear: chunkAGHRB4JFN(() => {
      pieAltItem3 = new Map();
      pieAltItem4 = pieAltItem2.showData;
      chunkABZYJK2DA();
    }, "clear"),
    setDiagramTitle: chunkABZYJK2DW,
    getDiagramTitle: chunkABZYJK2DC,
    setAccTitle: chunkABZYJK2DV,
    getAccTitle: _chunkABZYJK2DV,
    setAccDescription: chunkABZYJK2DB,
    getAccDescription: chunkABZYJK2DUnderscore,
    addSection: chunkAGHRB4JFN(({ label, value }) => {
      if (value < 0)
        throw Error(
          `"${label}" has invalid value: ${value}. Negative values are not allowed in pie charts. All slice values must be >= 0.`,
        );
      pieAltItem3.has(label) ||
        (pieAltItem3.set(label, value),
        chunkAGHRB4JFI.debug(
          `added new section: ${label}, with value: ${value}`,
        ));
    }, "addSection"),
    getSections: chunkAGHRB4JFN(() => pieAltItem3, "getSections"),
    setShowData: chunkAGHRB4JFN((pieAltSlot19) => {
      pieAltItem4 = pieAltSlot19;
    }, "setShowData"),
    getShowData: chunkAGHRB4JFN(() => pieAltItem4, "getShowData"),
  };
  pieAltItem7 = chunkAGHRB4JFN((pieAltSlot9, pieAltSlot10) => {
    chunk4BX2VUABN(pieAltSlot9, pieAltSlot10);
    pieAltSlot10.setShowData(pieAltSlot9.showData);
    pieAltSlot9.sections.map(pieAltSlot10.addSection);
  }, "populateDb");
  pieAltItem8 = {
    parse: chunkAGHRB4JFN(async (pieAltSlot11) => {
      let pieAltItem32 = await mermaidParserCoreN("pie", pieAltSlot11);
      chunkAGHRB4JFI.debug(pieAltItem32);
      pieAltItem7(pieAltItem32, pieAltItem6);
    }, "parse"),
  };
  pieAltItem9 = chunkAGHRB4JFN(
    (pieAltSlot5) => `
  .pieCircle{
    stroke: ${pieAltSlot5.pieStrokeColor};
    stroke-width : ${pieAltSlot5.pieStrokeWidth};
    opacity : ${pieAltSlot5.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${pieAltSlot5.pieOuterStrokeColor};
    stroke-width: ${pieAltSlot5.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${pieAltSlot5.pieTitleTextSize};
    fill: ${pieAltSlot5.pieTitleTextColor};
    font-family: ${pieAltSlot5.fontFamily};
  }
  .slice {
    font-family: ${pieAltSlot5.fontFamily};
    fill: ${pieAltSlot5.pieSectionTextColor};
    font-size:${pieAltSlot5.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${pieAltSlot5.pieLegendTextColor};
    font-family: ${pieAltSlot5.fontFamily};
    font-size: ${pieAltSlot5.pieLegendTextSize};
  }
`,
    "getStyles",
  );
  pieAltItem10 = chunkAGHRB4JFN((pieAltSlot6) => {
    let pieAltItem29 = [...pieAltSlot6.values()].reduce(
        (accumulator, current) => accumulator + current,
        0,
      ),
      pieAltItem30 = [...pieAltSlot6.entries()]
        .map(([pieAltSlot15, pieAltSlot16]) => ({
          label: pieAltSlot15,
          value: pieAltSlot16,
        }))
        .filter((item) => (item.value / pieAltItem29) * 100 >= 1)
        .sort(
          (pieAltSlot20, pieAltSlot21) =>
            pieAltSlot21.value - pieAltSlot20.value,
        );
    return appInitialOit().value((pieAltSlot25) => pieAltSlot25.value)(
      pieAltItem30,
    );
  }, "createPieArcs");
  pieDiagramADFJNKIX = {
    parser: pieAltItem8,
    db: pieAltItem6,
    renderer: {
      draw: chunkAGHRB4JFN(
        (pieAltSlot1, pieAltSlot2, pieAltSlot3, pieAltSlot4) => {
          chunkAGHRB4JFI.debug("rendering pie chart\n" + pieAltSlot1);
          let pieAltItem11 = pieAltSlot4.db,
            pieAltItem12 = _chunkABZYJK2DB(),
            pieAltItem13 = chunkS3R3BYOJR(
              pieAltItem11.getConfig(),
              pieAltItem12.pie,
            ),
            pieAltItem14 = chunkEXTU4WIEN(pieAltSlot2),
            pieAltItem15 = pieAltItem14.append("g");
          pieAltItem15.attr("transform", "translate(225,225)");
          let { themeVariables } = pieAltItem12,
            [pieAltItem16] = chunkS3R3BYOJP(themeVariables.pieOuterStrokeWidth);
          pieAltItem16 ??= 2;
          let pieAltItem17 = pieAltItem13.textPosition,
            pieAltItem18 = appInitialNit().innerRadius(0).outerRadius(185),
            pieAltItem19 = appInitialNit()
              .innerRadius(185 * pieAltItem17)
              .outerRadius(185 * pieAltItem17);
          pieAltItem15
            .append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 185 + pieAltItem16 / 2)
            .attr("class", "pieOuterCircle");
          let pieAltItem20 = pieAltItem11.getSections(),
            pieAltItem21 = pieAltItem10(pieAltItem20),
            pieAltItem22 = [
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
            pieAltItem23 = 0;
          pieAltItem20.forEach((item) => {
            pieAltItem23 += item;
          });
          let pieAltItem24 = pieAltItem21.filter(
              (item) =>
                ((item.data.value / pieAltItem23) * 100).toFixed(0) !== "0",
            ),
            pieAltItem25 = appInitialYat(pieAltItem22);
          pieAltItem15
            .selectAll("mySlices")
            .data(pieAltItem24)
            .enter()
            .append("path")
            .attr("d", pieAltItem18)
            .attr("fill", (pieAltSlot22) =>
              pieAltItem25(pieAltSlot22.data.label),
            )
            .attr("class", "pieCircle");
          pieAltItem15
            .selectAll("mySlices")
            .data(pieAltItem24)
            .enter()
            .append("text")
            .text(
              (pieAltSlot13) =>
                ((pieAltSlot13.data.value / pieAltItem23) * 100).toFixed(0) +
                "%",
            )
            .attr(
              "transform",
              (pieAltSlot14) =>
                "translate(" + pieAltItem19.centroid(pieAltSlot14) + ")",
            )
            .style("text-anchor", "middle")
            .attr("class", "slice");
          pieAltItem15
            .append("text")
            .text(pieAltItem11.getDiagramTitle())
            .attr("x", 0)
            .attr("y", -200)
            .attr("class", "pieTitleText");
          let pieAltItem26 = [...pieAltItem20.entries()].map(
              ([pieAltSlot17, pieAltSlot18]) => ({
                label: pieAltSlot17,
                value: pieAltSlot18,
              }),
            ),
            pieAltItem27 = pieAltItem15
              .selectAll(".legend")
              .data(pieAltItem26)
              .enter()
              .append("g")
              .attr("class", "legend")
              .attr("transform", (pieAltSlot7, pieAltSlot8) => {
                let pieAltItem31 = (22 * pieAltItem26.length) / 2;
                return (
                  "translate(216," + (pieAltSlot8 * 22 - pieAltItem31) + ")"
                );
              });
          pieAltItem27
            .append("rect")
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", (pieAltSlot23) => pieAltItem25(pieAltSlot23.label))
            .style("stroke", (pieAltSlot24) =>
              pieAltItem25(pieAltSlot24.label),
            );
          pieAltItem27
            .append("text")
            .attr("x", 22)
            .attr("y", 14)
            .text((pieAltSlot12) =>
              pieAltItem11.getShowData()
                ? `${pieAltSlot12.label} [${pieAltSlot12.value}]`
                : pieAltSlot12.label,
            );
          let pieAltItem28 =
            512 +
            Math.max(
              ...pieAltItem27
                .selectAll("text")
                .nodes()
                .map((item) => item?.getBoundingClientRect().width ?? 0),
            );
          pieAltItem14.attr("viewBox", `0 0 ${pieAltItem28} 450`);
          _chunkABZYJK2DC(
            pieAltItem14,
            450,
            pieAltItem28,
            pieAltItem13.useMaxWidth,
          );
        },
        "draw",
      ),
    },
    styles: pieAltItem9,
  };
})();
export { pieDiagramADFJNKIX as diagram };
