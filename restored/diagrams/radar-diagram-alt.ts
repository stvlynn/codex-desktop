// Restored from ref/webview/assets/diagram-QEK2KX5R-CzZPiHtX.js
// Mermaid radar diagram definition (alt).
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
} from "../utils/dayjs-core-alt-dup";
import {
  B as chunkABZYJK2DB,
  C as chunkABZYJK2DC,
  T as chunkABZYJK2DT,
  V as chunkABZYJK2DV,
  W as chunkABZYJK2DW,
  _ as chunkABZYJK2DUnderscore,
  a as chunkABZYJK2DA,
  d as chunkABZYJK2DD,
  k as chunkABZYJK2DK,
  v as _chunkABZYJK2DV,
  y as chunkABZYJK2DY,
} from "./mermaid-config";
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
function diagramQEK2KX5RHelper1(
  radarAltSlot1,
  radarAltSlot2,
  radarAltSlot3,
  radarAltSlot4,
  radarAltSlot5,
  radarAltSlot6,
  radarAltSlot7,
) {
  let radarAltItem22 = radarAltSlot2.length,
    radarAltItem23 = Math.min(radarAltSlot7.width, radarAltSlot7.height) / 2;
  radarAltSlot3.forEach((item, index) => {
    if (item.entries.length !== radarAltItem22) return;
    let radarAltItem38 = item.entries.map((_item, _index) => {
      let radarAltItem64 =
          (2 * Math.PI * _index) / radarAltItem22 - Math.PI / 2,
        radarAltItem65 = diagramQEK2KX5RHelper2(
          _item,
          radarAltSlot4,
          radarAltSlot5,
          radarAltItem23,
        );
      return {
        x: radarAltItem65 * Math.cos(radarAltItem64),
        y: radarAltItem65 * Math.sin(radarAltItem64),
      };
    });
    radarAltSlot6 === "circle"
      ? radarAltSlot1
          .append("path")
          .attr(
            "d",
            diagramQEK2KX5RHelper3(radarAltItem38, radarAltSlot7.curveTension),
          )
          .attr("class", `radarCurve-${index}`)
      : radarAltSlot6 === "polygon" &&
        radarAltSlot1
          .append("polygon")
          .attr(
            "points",
            radarAltItem38.map((_item) => `${_item.x},${_item.y}`).join(" "),
          )
          .attr("class", `radarCurve-${index}`);
  });
}
function diagramQEK2KX5RHelper2(
  radarAltSlot38,
  radarAltSlot39,
  radarAltSlot40,
  radarAltSlot41,
) {
  return (
    (radarAltSlot41 *
      (Math.min(Math.max(radarAltSlot38, radarAltSlot39), radarAltSlot40) -
        radarAltSlot39)) /
    (radarAltSlot40 - radarAltSlot39)
  );
}
function diagramQEK2KX5RHelper3(radarAltSlot26, radarAltSlot27) {
  let radarAltItem43 = radarAltSlot26.length,
    radarAltItem44 = `M${radarAltSlot26[0].x},${radarAltSlot26[0].y}`;
  for (
    let radarAltItem55 = 0;
    radarAltItem55 < radarAltItem43;
    radarAltItem55++
  ) {
    let radarAltItem57 =
        radarAltSlot26[(radarAltItem55 - 1 + radarAltItem43) % radarAltItem43],
      radarAltItem58 = radarAltSlot26[radarAltItem55],
      radarAltItem59 = radarAltSlot26[(radarAltItem55 + 1) % radarAltItem43],
      radarAltItem60 = radarAltSlot26[(radarAltItem55 + 2) % radarAltItem43],
      radarAltItem61 = {
        x:
          radarAltItem58.x +
          (radarAltItem59.x - radarAltItem57.x) * radarAltSlot27,
        y:
          radarAltItem58.y +
          (radarAltItem59.y - radarAltItem57.y) * radarAltSlot27,
      },
      radarAltItem62 = {
        x:
          radarAltItem59.x -
          (radarAltItem60.x - radarAltItem58.x) * radarAltSlot27,
        y:
          radarAltItem59.y -
          (radarAltItem60.y - radarAltItem58.y) * radarAltSlot27,
      };
    radarAltItem44 += ` C${radarAltItem61.x},${radarAltItem61.y} ${radarAltItem62.x},${radarAltItem62.y} ${radarAltItem59.x},${radarAltItem59.y}`;
  }
  return `${radarAltItem44} Z`;
}
function diagramQEK2KX5RHelper4(
  radarAltSlot21,
  radarAltSlot22,
  radarAltSlot23,
  radarAltSlot24,
) {
  if (!radarAltSlot23) return;
  let radarAltItem39 =
      ((radarAltSlot24.width / 2 + radarAltSlot24.marginRight) * 3) / 4,
    radarAltItem40 =
      (-(radarAltSlot24.height / 2 + radarAltSlot24.marginTop) * 3) / 4;
  radarAltSlot22.forEach((item, index) => {
    let radarAltItem50 = radarAltSlot21
      .append("g")
      .attr(
        "transform",
        `translate(${radarAltItem39}, ${radarAltItem40 + index * 20})`,
      );
    radarAltItem50
      .append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("class", `radarLegendBox-${index}`);
    radarAltItem50
      .append("text")
      .attr("x", 16)
      .attr("y", 0)
      .attr("class", "radarLegendText")
      .text(item.label);
  });
}
var radarAltItem1,
  radarAltItem2,
  radarAltItem3,
  radarAltItem4,
  radarAltItem5,
  radarAltItem6,
  radarAltItem7,
  radarAltItem8,
  radarAltItem9,
  radarAltItem10,
  radarAltItem11,
  radarAltItem12,
  radarAltItem13,
  radarAltItem14,
  radarAltItem15,
  radarAltItem16,
  radarAltItem17,
  radarAltItem18,
  radarAltItem19,
  radarAltItem20,
  radarAltItem21,
  diagramQEK2KX5R;
esmInit(() => {
  chunkEXTU4WIET();
  chunk4BX2VUABT();
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  radarAltItem1 = {
    showLegend: true,
    ticks: 5,
    max: null,
    min: 0,
    graticule: "circle",
  };
  radarAltItem2 = {
    axes: [],
    curves: [],
    options: radarAltItem1,
  };
  radarAltItem3 = structuredClone(radarAltItem2);
  radarAltItem4 = chunkABZYJK2DD.radar;
  radarAltItem5 = chunkAGHRB4JFN(
    () =>
      chunkS3R3BYOJR({
        ...radarAltItem4,
        ...chunkABZYJK2DY().radar,
      }),
    "getConfig",
  );
  radarAltItem6 = chunkAGHRB4JFN(() => radarAltItem3.axes, "getAxes");
  radarAltItem7 = chunkAGHRB4JFN(() => radarAltItem3.curves, "getCurves");
  radarAltItem8 = chunkAGHRB4JFN(() => radarAltItem3.options, "getOptions");
  radarAltItem9 = chunkAGHRB4JFN((radarAltSlot36) => {
    radarAltItem3.axes = radarAltSlot36.map((item) => ({
      name: item.name,
      label: item.label ?? item.name,
    }));
  }, "setAxes");
  radarAltItem10 = chunkAGHRB4JFN((radarAltSlot33) => {
    radarAltItem3.curves = radarAltSlot33.map((item) => ({
      name: item.name,
      label: item.label ?? item.name,
      entries: radarAltItem11(item.entries),
    }));
  }, "setCurves");
  radarAltItem11 = chunkAGHRB4JFN((radarAltSlot25) => {
    if (radarAltSlot25[0].axis == null)
      return radarAltSlot25.map((item) => item.value);
    let radarAltItem41 = radarAltItem6();
    if (radarAltItem41.length === 0)
      throw Error("Axes must be populated before curves for reference entries");
    return radarAltItem41.map((item) => {
      let radarAltItem63 = radarAltSlot25.find(
        (_item) => _item.axis?.$refText === item.name,
      );
      if (radarAltItem63 === undefined)
        throw Error("Missing entry for axis " + item.label);
      return radarAltItem63.value;
    });
  }, "computeCurveEntries");
  radarAltItem12 = {
    getAxes: radarAltItem6,
    getCurves: radarAltItem7,
    getOptions: radarAltItem8,
    setAxes: radarAltItem9,
    setCurves: radarAltItem10,
    setOptions: chunkAGHRB4JFN((radarAltSlot32) => {
      let radarAltItem52 = radarAltSlot32.reduce(
        (accumulator, current) => (
          (accumulator[current.name] = current),
          accumulator
        ),
        {},
      );
      radarAltItem3.options = {
        showLegend:
          radarAltItem52.showLegend?.value ?? radarAltItem1.showLegend,
        ticks: radarAltItem52.ticks?.value ?? radarAltItem1.ticks,
        max: radarAltItem52.max?.value ?? radarAltItem1.max,
        min: radarAltItem52.min?.value ?? radarAltItem1.min,
        graticule: radarAltItem52.graticule?.value ?? radarAltItem1.graticule,
      };
    }, "setOptions"),
    getConfig: radarAltItem5,
    clear: chunkAGHRB4JFN(() => {
      chunkABZYJK2DA();
      radarAltItem3 = structuredClone(radarAltItem2);
    }, "clear"),
    setAccTitle: chunkABZYJK2DV,
    getAccTitle: _chunkABZYJK2DV,
    setDiagramTitle: chunkABZYJK2DW,
    getDiagramTitle: chunkABZYJK2DC,
    getAccDescription: chunkABZYJK2DUnderscore,
    setAccDescription: chunkABZYJK2DB,
  };
  radarAltItem13 = chunkAGHRB4JFN((radarAltSlot34) => {
    chunk4BX2VUABN(radarAltSlot34, radarAltItem12);
    let { axes, curves, options } = radarAltSlot34;
    radarAltItem12.setAxes(axes);
    radarAltItem12.setCurves(curves);
    radarAltItem12.setOptions(options);
  }, "populate");
  radarAltItem14 = {
    parse: chunkAGHRB4JFN(async (radarAltSlot37) => {
      let radarAltItem70 = await mermaidParserCoreN("radar", radarAltSlot37);
      chunkAGHRB4JFI.debug(radarAltItem70);
      radarAltItem13(radarAltItem70);
    }, "parse"),
  };
  radarAltItem15 = chunkAGHRB4JFN(
    (radarAltSlot13, radarAltSlot14, radarAltSlot15, radarAltSlot16) => {
      let radarAltItem24 = radarAltSlot16.db,
        radarAltItem25 = radarAltItem24.getAxes(),
        radarAltItem26 = radarAltItem24.getCurves(),
        radarAltItem27 = radarAltItem24.getOptions(),
        radarAltItem28 = radarAltItem24.getConfig(),
        radarAltItem29 = radarAltItem24.getDiagramTitle(),
        radarAltItem30 = radarAltItem16(
          chunkEXTU4WIEN(radarAltSlot14),
          radarAltItem28,
        ),
        radarAltItem31 =
          radarAltItem27.max ??
          Math.max(...radarAltItem26.map((item) => Math.max(...item.entries))),
        radarAltItem32 = radarAltItem27.min,
        radarAltItem33 =
          Math.min(radarAltItem28.width, radarAltItem28.height) / 2;
      radarAltItem17(
        radarAltItem30,
        radarAltItem25,
        radarAltItem33,
        radarAltItem27.ticks,
        radarAltItem27.graticule,
      );
      radarAltItem18(
        radarAltItem30,
        radarAltItem25,
        radarAltItem33,
        radarAltItem28,
      );
      diagramQEK2KX5RHelper1(
        radarAltItem30,
        radarAltItem25,
        radarAltItem26,
        radarAltItem32,
        radarAltItem31,
        radarAltItem27.graticule,
        radarAltItem28,
      );
      diagramQEK2KX5RHelper4(
        radarAltItem30,
        radarAltItem26,
        radarAltItem27.showLegend,
        radarAltItem28,
      );
      radarAltItem30
        .append("text")
        .attr("class", "radarTitle")
        .text(radarAltItem29)
        .attr("x", 0)
        .attr("y", -radarAltItem28.height / 2 - radarAltItem28.marginTop);
    },
    "draw",
  );
  radarAltItem16 = chunkAGHRB4JFN((radarAltSlot30, radarAltSlot31) => {
    let radarAltItem46 =
        radarAltSlot31.width +
        radarAltSlot31.marginLeft +
        radarAltSlot31.marginRight,
      radarAltItem47 =
        radarAltSlot31.height +
        radarAltSlot31.marginTop +
        radarAltSlot31.marginBottom,
      radarAltItem48 = {
        x: radarAltSlot31.marginLeft + radarAltSlot31.width / 2,
        y: radarAltSlot31.marginTop + radarAltSlot31.height / 2,
      };
    return (
      radarAltSlot30
        .attr("viewbox", `0 0 ${radarAltItem46} ${radarAltItem47}`)
        .attr("width", radarAltItem46)
        .attr("height", radarAltItem47),
      radarAltSlot30
        .append("g")
        .attr(
          "transform",
          `translate(${radarAltItem48.x}, ${radarAltItem48.y})`,
        )
    );
  }, "drawFrame");
  radarAltItem17 = chunkAGHRB4JFN(
    (
      radarAltSlot8,
      radarAltSlot9,
      radarAltSlot10,
      radarAltSlot11,
      radarAltSlot12,
    ) => {
      if (radarAltSlot12 === "circle")
        for (
          let radarAltItem67 = 0;
          radarAltItem67 < radarAltSlot11;
          radarAltItem67++
        ) {
          let radarAltItem68 =
            (radarAltSlot10 * (radarAltItem67 + 1)) / radarAltSlot11;
          radarAltSlot8
            .append("circle")
            .attr("r", radarAltItem68)
            .attr("class", "radarGraticule");
        }
      else if (radarAltSlot12 === "polygon") {
        let radarAltItem42 = radarAltSlot9.length;
        for (
          let radarAltItem49 = 0;
          radarAltItem49 < radarAltSlot11;
          radarAltItem49++
        ) {
          let radarAltItem53 =
              (radarAltSlot10 * (radarAltItem49 + 1)) / radarAltSlot11,
            radarAltItem54 = radarAltSlot9
              .map((item, index) => {
                let radarAltItem66 =
                  (2 * index * Math.PI) / radarAltItem42 - Math.PI / 2;
                return `${radarAltItem53 * Math.cos(radarAltItem66)},${radarAltItem53 * Math.sin(radarAltItem66)}`;
              })
              .join(" ");
          radarAltSlot8
            .append("polygon")
            .attr("points", radarAltItem54)
            .attr("class", "radarGraticule");
        }
      }
    },
    "drawGraticule",
  );
  radarAltItem18 = chunkAGHRB4JFN(
    (radarAltSlot17, radarAltSlot18, radarAltSlot19, radarAltSlot20) => {
      let radarAltItem34 = radarAltSlot18.length;
      for (
        let radarAltItem35 = 0;
        radarAltItem35 < radarAltItem34;
        radarAltItem35++
      ) {
        let radarAltItem36 = radarAltSlot18[radarAltItem35].label,
          radarAltItem37 =
            (2 * radarAltItem35 * Math.PI) / radarAltItem34 - Math.PI / 2;
        radarAltSlot17
          .append("line")
          .attr("x1", 0)
          .attr("y1", 0)
          .attr(
            "x2",
            radarAltSlot19 *
              radarAltSlot20.axisScaleFactor *
              Math.cos(radarAltItem37),
          )
          .attr(
            "y2",
            radarAltSlot19 *
              radarAltSlot20.axisScaleFactor *
              Math.sin(radarAltItem37),
          )
          .attr("class", "radarAxisLine");
        radarAltSlot17
          .append("text")
          .text(radarAltItem36)
          .attr(
            "x",
            radarAltSlot19 *
              radarAltSlot20.axisLabelFactor *
              Math.cos(radarAltItem37),
          )
          .attr(
            "y",
            radarAltSlot19 *
              radarAltSlot20.axisLabelFactor *
              Math.sin(radarAltItem37),
          )
          .attr("class", "radarAxisLabel");
      }
    },
    "drawAxes",
  );
  chunkAGHRB4JFN(diagramQEK2KX5RHelper1, "drawCurves");
  chunkAGHRB4JFN(diagramQEK2KX5RHelper2, "relativeRadius");
  chunkAGHRB4JFN(diagramQEK2KX5RHelper3, "closedRoundCurve");
  chunkAGHRB4JFN(diagramQEK2KX5RHelper4, "drawLegend");
  radarAltItem19 = {
    draw: radarAltItem15,
  };
  radarAltItem20 = chunkAGHRB4JFN((radarAltSlot28, radarAltSlot29) => {
    let radarAltItem45 = "";
    for (
      let radarAltItem51 = 0;
      radarAltItem51 < radarAltSlot28.THEME_COLOR_LIMIT;
      radarAltItem51++
    ) {
      let radarAltItem56 = radarAltSlot28[`cScale${radarAltItem51}`];
      radarAltItem45 += `
		.radarCurve-${radarAltItem51} {
			color: ${radarAltItem56};
			fill: ${radarAltItem56};
			fill-opacity: ${radarAltSlot29.curveOpacity};
			stroke: ${radarAltItem56};
			stroke-width: ${radarAltSlot29.curveStrokeWidth};
		}
		.radarLegendBox-${radarAltItem51} {
			fill: ${radarAltItem56};
			fill-opacity: ${radarAltSlot29.curveOpacity};
			stroke: ${radarAltItem56};
		}
		`;
    }
    return radarAltItem45;
  }, "genIndexStyles");
  radarAltItem21 = chunkAGHRB4JFN((radarAltSlot35) => {
    let radarAltItem69 = chunkS3R3BYOJR(
      chunkABZYJK2DT(),
      chunkABZYJK2DY().themeVariables,
    );
    return {
      themeVariables: radarAltItem69,
      radarOptions: chunkS3R3BYOJR(radarAltItem69.radar, radarAltSlot35),
    };
  }, "buildRadarStyleOptions");
  diagramQEK2KX5R = {
    parser: radarAltItem14,
    db: radarAltItem12,
    renderer: radarAltItem19,
    styles: chunkAGHRB4JFN(({ radar } = {}) => {
      let { themeVariables, radarOptions } = radarAltItem21(radar);
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
	${radarAltItem20(themeVariables, radarOptions)}
	`;
    }, "styles"),
  };
})();
export { diagramQEK2KX5R as diagram };
