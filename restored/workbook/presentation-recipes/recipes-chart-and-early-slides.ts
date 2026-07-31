// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: defineRecipe + chartStyle/chartType + early slides.
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  zodString,
  zodNumber,
  zodArray,
  zodObject,
  zodEnum,
  ensureZodRuntime,
} from "../../vendor/zod";
import { defineRecipe, ensureDefineRecipeInit } from "./define-recipe";
import { registerPresentationRecipes } from "./recipe-catalog";
import {
  chartLabelAlign,
  ensureChartLabelAlignInit,
} from "./chart-label-align";

export const ensureChartAndEarlySlideRecipesInit = esmInit(() => {
  ensureDefineRecipeInit();
  let dashboardMinimalParamsSchema: any;
  let dashboardMinimalRecipe: any;
  let editorialChartStyleParamsSchema: any;
  let editorialChartStyleRecipe: any;
  let ZWe: any;
  let scientificChartStyleRecipe: any;
  let eGe: any;
  let bubbleCorrelationRecipe: any;
  let rGe: any;
  let treemapHierarchyRecipe: any;
  let oGe: any;
  let waterfallChangeRecipe: any;
  let lGe: any;
  let agendaSlideRecipe: any;
  // _ensure_qWe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    dashboardMinimalParamsSchema = zodObject({
      title: zodString().min(1).default("Dashboard KPI view"),
      categories: zodArray(zodString().min(1))
        .min(4)
        .default(["Mercury", "Venus", "Earth", "Mars"]),
      values: zodArray(zodNumber()).min(4).default([3, 7, 12, 9]),
      seriesName: zodString().min(1).default("Missions"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    dashboardMinimalRecipe = defineRecipe({
      name: "recipes.chartStyle.dashboard_minimal",
      summary:
        "Minimal chart style that removes non-essential chrome and emphasizes values.",
      labels: ["chart", "chart style", "dashboard", "minimalist"],
      paramsSchema: dashboardMinimalParamsSchema,
      exampleParams: {
        title: "Dashboard KPI view",
        categories: ["Mercury", "Venus", "Earth", "Mars"],
        values: [3, 7, 12, 9],
        seriesName: "Missions",
      },
      run: (ri942, ri943) => {
        let rb5971 = ri943.categories,
          rb5972 =
            ri943.values.length === rb5971.length
              ? ri943.values
              : rb5971.map(
                  (item, index) =>
                    ri943.values[index] ?? ri943.values.at(-1) ?? 0,
                ),
          rb5973 = ri942.slides.add();
        rb5973.background.fill = ri943.backgroundFill;
        let rb5974 = rb5973.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 70,
            width: 1e3,
            height: 80,
          },
        });
        rb5974.text.set(ri943.title);
        rb5974.text.style = {
          bold: true,
          fontSize: 42,
          color: "tx1",
        };
        let rb5975 = rb5973.charts.add("bar", {
          position: {
            left: 90,
            top: 170,
            width: 1120,
            height: 500,
          },
          categories: rb5971,
          series: [
            {
              name: ri943.seriesName,
              values: rb5972,
            },
          ],
          hasLegend: false,
          title: "",
        });
        rb5975.apply({
          title: "",
          titlePlacement: "none",
          hasLegend: false,
          xAxis: {
            deleted: true,
          },
          yAxis: {
            deleted: true,
          },
          barOptions: {
            direction: "column",
            grouping: "clustered",
            gapWidth: 45,
          },
          dataLabels: {
            showValue: true,
            position: "outEnd",
            textStyle: {
              bold: true,
              fontSize: 14,
            },
          },
        });
        rb5975.chartLine.fill = "background1";
        rb5975.chartLine.width = 0;
        rb5975.plotAreaLine.fill = "background1";
        rb5975.plotAreaLine.width = 0;
      },
      notes: [
        "Use for executive dashboards that prioritize rapid value scanning.",
      ],
    });
  }
  // _ensure_XWe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    editorialChartStyleParamsSchema = zodObject({
      title: zodString().min(1).default("Editorial comparison view"),
      categories: zodArray(zodString().min(1))
        .min(2)
        .default(["Inner", "Outer"]),
      exploredValues: zodArray(zodNumber()).min(2).default([14, 6]),
      plannedValues: zodArray(zodNumber()).min(2).default([4, 8]),
      backgroundFill: zodString().min(1).default("background1"),
    });
    editorialChartStyleRecipe = defineRecipe({
      name: "recipes.chartStyle.editorial",
      summary:
        "Editorial chart style with stronger axis framing and selective outline emphasis.",
      labels: ["chart", "chart style", "editorial", "professional"],
      paramsSchema: editorialChartStyleParamsSchema,
      exampleParams: {
        title: "Editorial comparison view",
        categories: ["Inner", "Outer"],
        exploredValues: [14, 6],
        plannedValues: [4, 8],
      },
      run: (ri700, ri701) => {
        let rb4991 = ri701.categories,
          rb4992 =
            ri701.exploredValues.length === rb4991.length
              ? ri701.exploredValues
              : rb4991.map(
                  (item, index) =>
                    ri701.exploredValues[index] ??
                    ri701.exploredValues.at(-1) ??
                    0,
                ),
          rb4993 =
            ri701.plannedValues.length === rb4991.length
              ? ri701.plannedValues
              : rb4991.map(
                  (item, index) =>
                    ri701.plannedValues[index] ??
                    ri701.plannedValues.at(-1) ??
                    0,
                ),
          rb4994 = ri700.slides.add();
        rb4994.background.fill = ri701.backgroundFill;
        let rb4995 = rb4994.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 70,
            width: 1e3,
            height: 80,
          },
        });
        rb4995.text.set(ri701.title);
        rb4995.text.style = {
          bold: true,
          fontSize: 42,
          color: "tx1",
        };
        let rb4996 = rb4994.charts.add("bar", {
          position: {
            left: 100,
            top: 170,
            width: 1080,
            height: 500,
          },
          categories: rb4991,
          series: [
            {
              name: "Explored",
              values: rb4992,
            },
            {
              name: "Planned",
              values: rb4993,
            },
          ],
          hasLegend: false,
          title: "",
        });
        rb4996.apply({
          title: "",
          hasLegend: false,
          xAxis: {
            deleted: false,
            line: {
              fill: "slate-500/85",
              style: "solid",
              width: 1,
            },
          },
          yAxis: {
            deleted: true,
          },
          dataLabels: {
            showValue: true,
            position: "inEnd",
            textStyle: {
              bold: true,
              fontSize: 12,
              fill: "white",
            },
          },
        });
        rb4996.series.items.forEach((item, index) => {
          item.fill = {
            type: "none",
          };
          item.stroke = {
            color: index % 2 == 0 ? "accent5" : "accent2",
            style: "solid",
            weight: 1.8,
          };
        });
      },
      notes: [
        "Use this style in narrative decks where visual texture supports the story.",
      ],
    });
  }
  // _ensure_dollarWe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    ZWe = zodObject({
      title: zodString().min(1).default("Scientific trend view"),
      categories: zodArray(zodString().min(1))
        .min(4)
        .default(["2000", "2005", "2010", "2015", "2020"]),
      values: zodArray(zodNumber()).min(4).default([1.2, 1.6, 2.1, 2.4, 2.8]),
      seriesName: zodString().min(1).default("Signal"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    scientificChartStyleRecipe = defineRecipe({
      name: "recipes.chartStyle.scientific",
      summary:
        "Scientific chart style with visible axes and subtle dashed gridlines.",
      labels: ["chart", "chart style", "scientific", "professional"],
      paramsSchema: ZWe,
      exampleParams: {
        title: "Scientific trend view",
        categories: ["2000", "2005", "2010", "2015", "2020"],
        values: [1.2, 1.6, 2.1, 2.4, 2.8],
        seriesName: "Signal",
      },
      run: (ri775, ri776) => {
        let rb5319 = ri776.categories,
          rb5320 =
            ri776.values.length === rb5319.length
              ? ri776.values
              : rb5319.map(
                  (item, index) =>
                    ri776.values[index] ?? ri776.values.at(-1) ?? 0,
                ),
          rb5321 = ri775.slides.add();
        rb5321.background.fill = ri776.backgroundFill;
        let rb5322 = rb5321.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 70,
            width: 1e3,
            height: 80,
          },
        });
        rb5322.text.set(ri776.title);
        rb5322.text.style = {
          bold: true,
          fontSize: 42,
          color: "tx1",
        };
        rb5321.charts
          .add("line", {
            position: {
              left: 90,
              top: 170,
              width: 1120,
              height: 500,
            },
            categories: rb5319,
            series: [
              {
                name: ri776.seriesName,
                values: rb5320,
              },
            ],
            hasLegend: true,
            title: "",
          })
          .apply({
            legend: {
              position: "top",
              textStyle: {
                fontSize: 12,
              },
            },
            xAxis: {
              deleted: false,
              line: {
                fill: "slate-500/90",
                style: "solid",
                width: 1,
              },
              textStyle: {
                fontSize: 11,
              },
            },
            yAxis: {
              deleted: false,
              line: {
                fill: "slate-500/90",
                style: "solid",
                width: 1,
              },
              majorGridlines: {
                fill: "slate-300/90",
                style: "dashed",
                width: 1,
              },
              minorGridlines: {
                fill: "slate-200/80",
                style: "dotted",
                width: 0.5,
              },
              textStyle: {
                fontSize: 11,
              },
            },
            dataLabels: {
              showValue: false,
            },
          });
      },
      notes: [
        "Use this style for technical audiences where axis fidelity matters.",
      ],
    });
  }
  // _ensure_nGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    eGe = zodObject({
      title: zodString().min(1).default("Bubble correlation starter"),
      xValues: zodArray(zodNumber()).min(4).default([0.8, 1.1, 1.6, 2.1]),
      yValues: zodArray(zodNumber()).min(4).default([1.2, 1.8, 1.5, 2.4]),
      bubbleSizes: zodArray(zodNumber()).min(4).default([6, 18, 10, 24]),
      seriesName: zodString().min(1).default("Targets"),
      xAxisTitle: zodString().min(1).default("Orbital distance (AU)"),
      yAxisTitle: zodString().min(1).default("Relative gravity"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    bubbleCorrelationRecipe = defineRecipe({
      name: "recipes.chartType.bubble_correlation",
      summary:
        "Bubble chart starter for showing correlation and relative magnitude.",
      labels: ["chart", "chart type", "bubble", "analysis"],
      paramsSchema: eGe,
      exampleParams: {
        title: "Bubble correlation starter",
        xValues: [0.8, 1.1, 1.6, 2.1],
        yValues: [1.2, 1.8, 1.5, 2.4],
        bubbleSizes: [6, 18, 10, 24],
        seriesName: "Targets",
        xAxisTitle: "Orbital distance (AU)",
        yAxisTitle: "Relative gravity",
      },
      run: (ri1129, ri1130) => {
        let rb6558 = Math.min(
            ri1130.xValues.length,
            ri1130.yValues.length,
            ri1130.bubbleSizes.length,
          ),
          rb6559 = ri1130.xValues.slice(0, rb6558),
          rb6560 = ri1130.yValues.slice(0, rb6558),
          rb6561 = ri1130.bubbleSizes.slice(0, rb6558),
          rb6562 = ri1129.slides.add();
        rb6562.background.fill = ri1130.backgroundFill;
        let rb6563 = rb6562.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 70,
            width: 1100,
            height: 80,
          },
        });
        rb6563.text.set(ri1130.title);
        rb6563.text.style = {
          bold: true,
          fontSize: 42,
          color: "tx1",
        };
        let rb6564 = rb6562.charts.add("bubble", {
            position: {
              left: 90,
              top: 170,
              width: 1120,
              height: 500,
            },
            title: "",
            hasLegend: false,
          }),
          rb6565 = rb6564.series.add(ri1130.seriesName);
        rb6565.xValues = rb6559;
        rb6565.values = rb6560;
        rb6565.bubbleSizes = rb6561;
        rb6564.xAxis = {
          title: {
            text: ri1130.xAxisTitle,
          },
          deleted: false,
        };
        rb6564.yAxis = {
          title: {
            text: ri1130.yAxisTitle,
          },
          deleted: false,
          majorGridlines: {
            fill: "slate-300/80",
            style: "dashed",
            width: 1,
          },
        };
      },
      notes: [
        "Bubble size should encode magnitude with a clear legend or explanation.",
      ],
    });
  }
  // _ensure_aGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    rGe = zodObject({
      title: zodString().min(1).default("Treemap hierarchy starter"),
      labels: zodArray(zodString().min(1))
        .min(5)
        .default(["Sun", "Jupiter", "Saturn", "Neptune", "Earth"]),
      values: zodArray(zodNumber()).min(5).default([120, 80, 55, 30, 20]),
      parentLabelLayout: zodEnum(["none", "banner", "overlapping"]).default(
        "banner",
      ),
      seriesName: zodString().min(1).default("Mass index"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    treemapHierarchyRecipe = defineRecipe({
      name: "recipes.chartType.treemap_hierarchy",
      summary: "Treemap chart starter for hierarchical area comparisons.",
      labels: ["chart", "chart type", "treemap", "analysis"],
      paramsSchema: rGe,
      exampleParams: {
        title: "Treemap hierarchy starter",
        labels: ["Sun", "Jupiter", "Saturn", "Neptune", "Earth"],
        values: [120, 80, 55, 30, 20],
        parentLabelLayout: "banner",
        seriesName: "Mass index",
      },
      run: (ri1872, ri1873) => {
        let rb8491 = ri1873.labels,
          rb8492 =
            ri1873.values.length === rb8491.length
              ? ri1873.values
              : rb8491.map(
                  (item, index) =>
                    ri1873.values[index] ?? ri1873.values.at(-1) ?? 0,
                ),
          rb8493 = ri1872.slides.add();
        rb8493.background.fill = ri1873.backgroundFill;
        let rb8494 = rb8493.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 70,
            width: 1100,
            height: 80,
          },
        });
        rb8494.text.set(ri1873.title);
        rb8494.text.style = {
          bold: true,
          fontSize: 42,
          color: "tx1",
        };
        let rb8495 = rb8493.charts.add("treemap", {
            position: {
              left: 90,
              top: 170,
              width: 1120,
              height: 500,
            },
            title: "",
            hasLegend: false,
          }),
          rb8496 = rb8495.series.add(ri1873.seriesName);
        rb8496.values = rb8492;
        rb8496.categories = rb8491;
        rb8495.treemapOptions.parentLabelLayout = ri1873.parentLabelLayout;
      },
      notes: [
        "Treemap works best when values vary meaningfully across categories.",
      ],
    });
  }
  // _ensure_cGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    oGe = zodObject({
      title: zodString().min(1).default("Waterfall change starter"),
      categories: zodArray(zodString().min(1))
        .min(4)
        .default(["Launch", "Cruise", "Orbit insertion", "Surface ops"]),
      values: zodArray(zodNumber()).min(4).default([3.2, 1.7, 2.8, 0.9]),
      seriesName: zodString().min(1).default("Delta-v contribution"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    waterfallChangeRecipe = defineRecipe({
      name: "recipes.chartType.waterfall_change",
      summary:
        "Waterfall chart starter for additive and subtractive change decomposition.",
      labels: ["chart", "chart type", "waterfall", "analysis"],
      paramsSchema: oGe,
      exampleParams: {
        title: "Waterfall change starter",
        categories: ["Launch", "Cruise", "Orbit insertion", "Surface ops"],
        values: [3.2, 1.7, 2.8, 0.9],
        seriesName: "Delta-v contribution",
      },
      run: (ri1159, ri1160) => {
        let rb6636 = ri1160.categories,
          rb6637 =
            ri1160.values.length === rb6636.length
              ? ri1160.values
              : rb6636.map(
                  (item, index) =>
                    ri1160.values[index] ?? ri1160.values.at(-1) ?? 0,
                ),
          rb6638 = ri1159.slides.add();
        rb6638.background.fill = ri1160.backgroundFill;
        let rb6639 = rb6638.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 70,
            width: 1100,
            height: 80,
          },
        });
        rb6639.text.set(ri1160.title);
        rb6639.text.style = {
          bold: true,
          fontSize: 42,
          color: "tx1",
        };
        let rb6640 = rb6638.charts.add("waterfall", {
            position: {
              left: 90,
              top: 170,
              width: 1120,
              height: 500,
            },
            categories: rb6636,
            title: "",
            hasLegend: false,
          }),
          rb6641 = rb6640.series.add(ri1160.seriesName);
        rb6641.values = rb6637;
        rb6641.categories = rb6636;
        rb6640.apply({
          barOptions: {
            direction: "column",
            grouping: "clustered",
            gapWidth: 70,
          },
          yAxis: {
            majorGridlines: {
              fill: "slate-300/80",
              style: "dashed",
              width: 1,
            },
          },
        });
      },
      notes: [
        "Use consistent sign conventions when mixing positive and negative deltas.",
      ],
    });
  }
  // _ensure_dGe
  {
    ensureZodRuntime();
    ensureChartLabelAlignInit();
    ensureDefineRecipeInit();
    lGe = zodObject({
      title: zodString().min(1).default("Agenda"),
      items: zodArray(zodString().min(1))
        .min(1)
        .default([
          "Solar system structure",
          "Planet classes",
          "Distance and scale",
          "Mission timeline",
          "Open questions",
        ]),
      railColor: zodString().min(1).default("accent1"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    agendaSlideRecipe = defineRecipe({
      name: "recipes.slide.agenda",
      summary: "Agenda slide with numbered list and a narrow left accent rail.",
      labels: ["agenda", "professional", "consulting"],
      paramsSchema: lGe,
      exampleParams: {
        title: "Agenda",
        items: [
          "Solar system structure",
          "Planet classes",
          "Distance and scale",
          "Mission timeline",
          "Open questions",
        ],
      },
      run: (ri711, ri712) => {
        let rb5040 = {
            columns: 12,
            marginX: 80,
            marginY: 64,
            gutter: 24,
            rowHeight: 72,
            rowGap: 16,
            baseUnit: 8,
          },
          rb5041 = ri711.slides.add();
        rb5041.background.fill = ri712.backgroundFill;
        let rb5042 = rb5041.shapes.add({
          geometry: "rect",
          position: {
            left: 0,
            top: 0,
            width: 64,
            height: 64,
          },
          fill: ri712.railColor,
          line: {
            width: 0,
            style: "solid",
            fill: ri712.railColor,
          },
          borderRadius: "rounded-full",
        });
        rb5042.name = "agenda_rail";
        rb5041.gridLayout(
          [
            {
              shape: rb5042,
              area: {
                colStart: 1,
                colSpan: 1,
                rowStart: 1,
                rowSpan: 7,
              },
              insetLeft: 16,
              insetRight: 16,
              insetTop: 32,
              insetBottom: 32,
            },
          ],
          rb5040,
        );
        let rb5043 = rb5041.shapes.add({
          geometry: "textbox",
          position: {
            width: 352,
            height: 80,
          },
        });
        rb5043.name = "agenda_title";
        rb5043.text.set(ri712.title);
        rb5043.text.style = {
          bold: true,
          fontSize: 48,
          color: "tx1",
        };
        let rb5044 = rb5041.shapes.add({
          geometry: "textbox",
          position: {
            width: 768,
            height: 336,
          },
        });
        rb5044.name = "agenda_items";
        rb5044.text.set(
          ri712.items.map((item, index) => `${index + 1}. ${item}`).join("\n"),
        );
        rb5044.text.style = {
          fontSize: 30,
          lineSpacing: 1.25,
          color: "tx1",
        };
        let rb5045 = rb5041.gridFrame(
          {
            colStart: 2,
            colSpan: 10,
            rowStart: 1,
            rowSpan: 7,
          },
          rb5040,
        );
        rb5041.stackVertical([rb5043, rb5044], {
          frame: rb5045,
          verticalGap: 32,
          align: chartLabelAlign.topLeft,
        });
      },
    });
  }

  registerPresentationRecipes(
    [
      dashboardMinimalRecipe,
      editorialChartStyleRecipe,
      scientificChartStyleRecipe,
      bubbleCorrelationRecipe,
      treemapHierarchyRecipe,
      waterfallChangeRecipe,
      agendaSlideRecipe,
    ].filter(Boolean),
  );
});
