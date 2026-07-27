// Restored from ref/webview/assets/diagram-MMDJMWI5-CT9Ycbfg.js
// Mermaid radar diagram definition (primary).
// Stage 3 candidate: auto-renamed export→local (incl. mermaid-config); parser cores promoted.

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../runtime/rolldown-runtime";
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
import { initSelectSvgElementChunk as chunk426QAEUCN, selectSvgElement as chunk426QAEUCT } from "./select-svg-element-alt";
import { chunk5PVQY5BWR, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import { initPopulateCommonDbChunk as chunk4BX2VUABN, populateCommonDb as chunk4BX2VUABT } from "./populate-common-db";
import { mermaidParserCoreN, mermaidParserCoreT } from "./mermaid-parser-core";
function diagramMMDJMWI5Helper1(
  radarSlot1,
  radarSlot2,
  radarSlot3,
  radarSlot4,
  radarSlot5,
  radarSlot6,
  radarSlot7,
) {
  let radarItem22 = radarSlot2.length,
    radarItem23 = Math.min(radarSlot7.width, radarSlot7.height) / 2;
  radarSlot3.forEach((item, index) => {
    if (item.entries.length !== radarItem22) return;
    let radarItem38 = item.entries.map((_item, _index) => {
      let radarItem64 = (2 * Math.PI * _index) / radarItem22 - Math.PI / 2,
        radarItem65 = diagramMMDJMWI5Helper2(
          _item,
          radarSlot4,
          radarSlot5,
          radarItem23,
        );
      return {
        x: radarItem65 * Math.cos(radarItem64),
        y: radarItem65 * Math.sin(radarItem64),
      };
    });
    radarSlot6 === "circle"
      ? radarSlot1
          .append("path")
          .attr(
            "d",
            diagramMMDJMWI5Helper3(radarItem38, radarSlot7.curveTension),
          )
          .attr("class", `radarCurve-${index}`)
      : radarSlot6 === "polygon" &&
        radarSlot1
          .append("polygon")
          .attr(
            "points",
            radarItem38.map((_item) => `${_item.x},${_item.y}`).join(" "),
          )
          .attr("class", `radarCurve-${index}`);
  });
}
function diagramMMDJMWI5Helper2(
  radarSlot38,
  radarSlot39,
  radarSlot40,
  radarSlot41,
) {
  return (
    (radarSlot41 *
      (Math.min(Math.max(radarSlot38, radarSlot39), radarSlot40) -
        radarSlot39)) /
    (radarSlot40 - radarSlot39)
  );
}
function diagramMMDJMWI5Helper3(radarSlot26, radarSlot27) {
  let radarItem43 = radarSlot26.length,
    radarItem44 = `M${radarSlot26[0].x},${radarSlot26[0].y}`;
  for (let radarItem55 = 0; radarItem55 < radarItem43; radarItem55++) {
    let radarItem57 =
        radarSlot26[(radarItem55 - 1 + radarItem43) % radarItem43],
      radarItem58 = radarSlot26[radarItem55],
      radarItem59 = radarSlot26[(radarItem55 + 1) % radarItem43],
      radarItem60 = radarSlot26[(radarItem55 + 2) % radarItem43],
      radarItem61 = {
        x: radarItem58.x + (radarItem59.x - radarItem57.x) * radarSlot27,
        y: radarItem58.y + (radarItem59.y - radarItem57.y) * radarSlot27,
      },
      radarItem62 = {
        x: radarItem59.x - (radarItem60.x - radarItem58.x) * radarSlot27,
        y: radarItem59.y - (radarItem60.y - radarItem58.y) * radarSlot27,
      };
    radarItem44 += ` C${radarItem61.x},${radarItem61.y} ${radarItem62.x},${radarItem62.y} ${radarItem59.x},${radarItem59.y}`;
  }
  return `${radarItem44} Z`;
}
function diagramMMDJMWI5Helper4(
  radarSlot21,
  radarSlot22,
  radarSlot23,
  radarSlot24,
) {
  if (!radarSlot23) return;
  let radarItem39 = ((radarSlot24.width / 2 + radarSlot24.marginRight) * 3) / 4,
    radarItem40 = (-(radarSlot24.height / 2 + radarSlot24.marginTop) * 3) / 4;
  radarSlot22.forEach((item, index) => {
    let radarItem50 = radarSlot21
      .append("g")
      .attr(
        "transform",
        `translate(${radarItem39}, ${radarItem40 + index * 20})`,
      );
    radarItem50
      .append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("class", `radarLegendBox-${index}`);
    radarItem50
      .append("text")
      .attr("x", 16)
      .attr("y", 0)
      .attr("class", "radarLegendText")
      .text(item.label);
  });
}
var radarItem1,
  radarItem2,
  radarItem3,
  radarItem4,
  radarItem5,
  radarItem6,
  radarItem7,
  radarItem8,
  radarItem9,
  radarItem10,
  radarItem11,
  radarItem12,
  radarItem13,
  radarItem14,
  radarItem15,
  radarItem16,
  radarItem17,
  radarItem18,
  radarItem19,
  radarItem20,
  radarItem21,
  diagramMMDJMWI5;
esmInit(() => {
  chunk426QAEUCT();
  chunk4BX2VUABT();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  radarItem1 = {
    showLegend: true,
    ticks: 5,
    max: null,
    min: 0,
    graticule: "circle",
  };
  radarItem2 = {
    axes: [],
    curves: [],
    options: radarItem1,
  };
  radarItem3 = structuredClone(radarItem2);
  radarItem4 = chunkICPOFSXXD.radar;
  radarItem5 = chunkAGHRB4JFN(
    () =>
      chunk5PVQY5BWR({
        ...radarItem4,
        ...chunkICPOFSXXY().radar,
      }),
    "getConfig",
  );
  radarItem6 = chunkAGHRB4JFN(() => radarItem3.axes, "getAxes");
  radarItem7 = chunkAGHRB4JFN(() => radarItem3.curves, "getCurves");
  radarItem8 = chunkAGHRB4JFN(() => radarItem3.options, "getOptions");
  radarItem9 = chunkAGHRB4JFN((radarSlot36) => {
    radarItem3.axes = radarSlot36.map((item) => ({
      name: item.name,
      label: item.label ?? item.name,
    }));
  }, "setAxes");
  radarItem10 = chunkAGHRB4JFN((radarSlot33) => {
    radarItem3.curves = radarSlot33.map((item) => ({
      name: item.name,
      label: item.label ?? item.name,
      entries: radarItem11(item.entries),
    }));
  }, "setCurves");
  radarItem11 = chunkAGHRB4JFN((radarSlot25) => {
    if (radarSlot25[0].axis == null)
      return radarSlot25.map((item) => item.value);
    let radarItem41 = radarItem6();
    if (radarItem41.length === 0)
      throw Error("Axes must be populated before curves for reference entries");
    return radarItem41.map((item) => {
      let radarItem63 = radarSlot25.find(
        (_item) => _item.axis?.$refText === item.name,
      );
      if (radarItem63 === undefined)
        throw Error("Missing entry for axis " + item.label);
      return radarItem63.value;
    });
  }, "computeCurveEntries");
  radarItem12 = {
    getAxes: radarItem6,
    getCurves: radarItem7,
    getOptions: radarItem8,
    setAxes: radarItem9,
    setCurves: radarItem10,
    setOptions: chunkAGHRB4JFN((radarSlot32) => {
      let radarItem52 = radarSlot32.reduce(
        (accumulator, current) => (
          (accumulator[current.name] = current),
          accumulator
        ),
        {},
      );
      radarItem3.options = {
        showLegend: radarItem52.showLegend?.value ?? radarItem1.showLegend,
        ticks: radarItem52.ticks?.value ?? radarItem1.ticks,
        max: radarItem52.max?.value ?? radarItem1.max,
        min: radarItem52.min?.value ?? radarItem1.min,
        graticule: radarItem52.graticule?.value ?? radarItem1.graticule,
      };
    }, "setOptions"),
    getConfig: radarItem5,
    clear: chunkAGHRB4JFN(() => {
      _chunkICPOFSXXA();
      radarItem3 = structuredClone(radarItem2);
    }, "clear"),
    setAccTitle: chunkICPOFSXXH,
    getAccTitle: _chunkICPOFSXXV,
    setDiagramTitle: chunkICPOFSXXG,
    getDiagramTitle: chunkICPOFSXXC,
    getAccDescription: chunkICPOFSXXUnderscore,
    setAccDescription: chunkICPOFSXXV,
  };
  radarItem13 = chunkAGHRB4JFN((radarSlot34) => {
    chunk4BX2VUABN(radarSlot34, radarItem12);
    let { axes, curves, options } = radarSlot34;
    radarItem12.setAxes(axes);
    radarItem12.setCurves(curves);
    radarItem12.setOptions(options);
  }, "populate");
  radarItem14 = {
    parse: chunkAGHRB4JFN(async (radarSlot37) => {
      let radarItem70 = await mermaidParserCoreN("radar", radarSlot37);
      chunkAGHRB4JFI.debug(radarItem70);
      radarItem13(radarItem70);
    }, "parse"),
  };
  radarItem15 = chunkAGHRB4JFN(
    (radarSlot13, radarSlot14, radarSlot15, radarSlot16) => {
      let radarItem24 = radarSlot16.db,
        radarItem25 = radarItem24.getAxes(),
        radarItem26 = radarItem24.getCurves(),
        radarItem27 = radarItem24.getOptions(),
        radarItem28 = radarItem24.getConfig(),
        radarItem29 = radarItem24.getDiagramTitle(),
        radarItem30 = radarItem16(chunk426QAEUCN(radarSlot14), radarItem28),
        radarItem31 =
          radarItem27.max ??
          Math.max(...radarItem26.map((item) => Math.max(...item.entries))),
        radarItem32 = radarItem27.min,
        radarItem33 = Math.min(radarItem28.width, radarItem28.height) / 2;
      radarItem17(
        radarItem30,
        radarItem25,
        radarItem33,
        radarItem27.ticks,
        radarItem27.graticule,
      );
      radarItem18(radarItem30, radarItem25, radarItem33, radarItem28);
      diagramMMDJMWI5Helper1(
        radarItem30,
        radarItem25,
        radarItem26,
        radarItem32,
        radarItem31,
        radarItem27.graticule,
        radarItem28,
      );
      diagramMMDJMWI5Helper4(
        radarItem30,
        radarItem26,
        radarItem27.showLegend,
        radarItem28,
      );
      radarItem30
        .append("text")
        .attr("class", "radarTitle")
        .text(radarItem29)
        .attr("x", 0)
        .attr("y", -radarItem28.height / 2 - radarItem28.marginTop);
    },
    "draw",
  );
  radarItem16 = chunkAGHRB4JFN((radarSlot30, radarSlot31) => {
    let radarItem46 =
        radarSlot31.width + radarSlot31.marginLeft + radarSlot31.marginRight,
      radarItem47 =
        radarSlot31.height + radarSlot31.marginTop + radarSlot31.marginBottom,
      radarItem48 = {
        x: radarSlot31.marginLeft + radarSlot31.width / 2,
        y: radarSlot31.marginTop + radarSlot31.height / 2,
      };
    return (
      _chunkICPOFSXXC(
        radarSlot30,
        radarItem47,
        radarItem46,
        radarSlot31.useMaxWidth ?? true,
      ),
      radarSlot30.attr("viewBox", `0 0 ${radarItem46} ${radarItem47}`),
      radarSlot30
        .append("g")
        .attr("transform", `translate(${radarItem48.x}, ${radarItem48.y})`)
    );
  }, "drawFrame");
  radarItem17 = chunkAGHRB4JFN(
    (radarSlot8, radarSlot9, radarSlot10, radarSlot11, radarSlot12) => {
      if (radarSlot12 === "circle")
        for (let radarItem67 = 0; radarItem67 < radarSlot11; radarItem67++) {
          let radarItem68 = (radarSlot10 * (radarItem67 + 1)) / radarSlot11;
          radarSlot8
            .append("circle")
            .attr("r", radarItem68)
            .attr("class", "radarGraticule");
        }
      else if (radarSlot12 === "polygon") {
        let radarItem42 = radarSlot9.length;
        for (let radarItem49 = 0; radarItem49 < radarSlot11; radarItem49++) {
          let radarItem53 = (radarSlot10 * (radarItem49 + 1)) / radarSlot11,
            radarItem54 = radarSlot9
              .map((item, index) => {
                let radarItem66 =
                  (2 * index * Math.PI) / radarItem42 - Math.PI / 2;
                return `${radarItem53 * Math.cos(radarItem66)},${radarItem53 * Math.sin(radarItem66)}`;
              })
              .join(" ");
          radarSlot8
            .append("polygon")
            .attr("points", radarItem54)
            .attr("class", "radarGraticule");
        }
      }
    },
    "drawGraticule",
  );
  radarItem18 = chunkAGHRB4JFN(
    (radarSlot17, radarSlot18, radarSlot19, radarSlot20) => {
      let radarItem34 = radarSlot18.length;
      for (let radarItem35 = 0; radarItem35 < radarItem34; radarItem35++) {
        let radarItem36 = radarSlot18[radarItem35].label,
          radarItem37 = (2 * radarItem35 * Math.PI) / radarItem34 - Math.PI / 2;
        radarSlot17
          .append("line")
          .attr("x1", 0)
          .attr("y1", 0)
          .attr(
            "x2",
            radarSlot19 * radarSlot20.axisScaleFactor * Math.cos(radarItem37),
          )
          .attr(
            "y2",
            radarSlot19 * radarSlot20.axisScaleFactor * Math.sin(radarItem37),
          )
          .attr("class", "radarAxisLine");
        radarSlot17
          .append("text")
          .text(radarItem36)
          .attr(
            "x",
            radarSlot19 * radarSlot20.axisLabelFactor * Math.cos(radarItem37),
          )
          .attr(
            "y",
            radarSlot19 * radarSlot20.axisLabelFactor * Math.sin(radarItem37),
          )
          .attr("class", "radarAxisLabel");
      }
    },
    "drawAxes",
  );
  chunkAGHRB4JFN(diagramMMDJMWI5Helper1, "drawCurves");
  chunkAGHRB4JFN(diagramMMDJMWI5Helper2, "relativeRadius");
  chunkAGHRB4JFN(diagramMMDJMWI5Helper3, "closedRoundCurve");
  chunkAGHRB4JFN(diagramMMDJMWI5Helper4, "drawLegend");
  radarItem19 = {
    draw: radarItem15,
  };
  radarItem20 = chunkAGHRB4JFN((radarSlot28, radarSlot29) => {
    let radarItem45 = "";
    for (
      let radarItem51 = 0;
      radarItem51 < radarSlot28.THEME_COLOR_LIMIT;
      radarItem51++
    ) {
      let radarItem56 = radarSlot28[`cScale${radarItem51}`];
      radarItem45 += `
		.radarCurve-${radarItem51} {
			color: ${radarItem56};
			fill: ${radarItem56};
			fill-opacity: ${radarSlot29.curveOpacity};
			stroke: ${radarItem56};
			stroke-width: ${radarSlot29.curveStrokeWidth};
		}
		.radarLegendBox-${radarItem51} {
			fill: ${radarItem56};
			fill-opacity: ${radarSlot29.curveOpacity};
			stroke: ${radarItem56};
		}
		`;
    }
    return radarItem45;
  }, "genIndexStyles");
  radarItem21 = chunkAGHRB4JFN((radarSlot35) => {
    let radarItem69 = chunk5PVQY5BWR(
      chunkICPOFSXXE(),
      chunkICPOFSXXY().themeVariables,
    );
    return {
      themeVariables: radarItem69,
      radarOptions: chunk5PVQY5BWR(radarItem69.radar, radarSlot35),
    };
  }, "buildRadarStyleOptions");
  diagramMMDJMWI5 = {
    parser: radarItem14,
    db: radarItem12,
    renderer: radarItem19,
    styles: chunkAGHRB4JFN(({ radar } = {}) => {
      let { themeVariables, radarOptions } = radarItem21(radar);
      return `
	.radarTitle {
		font-size: ${themeVariables.fontSize};
		color: ${themeVariables.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${radarOptions.axisColor};
		stroke-width: ${radarOptions.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${radarOptions.axisLabelFontSize}px;
		color: ${radarOptions.axisColor};
	}
	.radarGraticule {
		fill: ${radarOptions.graticuleColor};
		fill-opacity: ${radarOptions.graticuleOpacity};
		stroke: ${radarOptions.graticuleColor};
		stroke-width: ${radarOptions.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${radarOptions.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${radarItem20(themeVariables, radarOptions)}
	`;
    }, "styles"),
  };
})();
export { diagramMMDJMWI5 as diagram };
