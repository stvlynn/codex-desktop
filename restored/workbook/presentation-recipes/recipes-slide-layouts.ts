// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: slide metric_strip…title_cover.
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

export const ensureSlideLayoutRecipesInit = esmInit(() => {
  ensureDefineRecipeInit();
  let pKe: any;
  let numberedStepsSlideRecipe: any;
  let gKe: any;
  let pictogramSlideRecipe: any;
  let yKe: any;
  let sectionDividerRoundIconRecipe: any;
  let SKe: any;
  let sectionDividerVerticalBandLeftRecipe: any;
  let TKe: any;
  let sectionDividerVerticalBandRightRecipe: any;
  let OKe: any;
  let tableSlideRecipe: any;
  let jKe: any;
  let MKe: any;
  let threeColumnComparisonRecipe: any;
  let FKe: any;
  let threeImageCarouselRecipe: any;
  let RKe: any;
  let titleCoverSlideRecipe: any;

  // _ensure_hKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    pKe = zodObject({
      title: zodString().min(1).default("Implementation steps"),
      steps: zodArray(zodString().min(1))
        .min(3)
        .default([
          "Align stakeholders on measurable success criteria.",
          "Build the core workflow and validate with pilot users.",
          "Operationalize instrumentation and weekly review loops.",
          "Scale with playbooks and role-specific enablement.",
        ]),
      backgroundFill: zodString().min(1).default("background1"),
    });
    numberedStepsSlideRecipe = defineRecipe({
      name: "recipes.slide.numbered_steps",
      summary: "Numbered process slide for sequential execution plans.",
      labels: ["slide", "process", "numbered steps", "professional"],
      paramsSchema: pKe,
      exampleParams: {
        title: "Implementation steps",
        steps: [
          "Align stakeholders on measurable success criteria.",
          "Build the core workflow and validate with pilot users.",
          "Operationalize instrumentation and weekly review loops.",
          "Scale with playbooks and role-specific enablement.",
        ],
      },
      run: (ri1112, ri1113) => {
        let rb6498 = ri1112.slides.add();
        rb6498.background.fill = ri1113.backgroundFill;
        let rb6499 = rb6498.shapes.add({
          geometry: "textbox",
          position: {
            left: 100,
            top: 70,
            width: 1100,
            height: 80,
          },
        });
        rb6499.text.set(ri1113.title);
        rb6499.text.style = {
          bold: true,
          fontSize: 46,
          color: "tx1",
        };
        ri1113.steps.forEach((item, index) => {
          let rb8596 = 180 + index * 130,
            rb8597 = rb6498.shapes.add({
              geometry: "ellipse",
              position: {
                left: 120,
                top: rb8596,
                width: 72,
                height: 72,
              },
              fill: "accent1",
              line: {
                style: "solid",
                width: 0,
                fill: "accent1",
              },
            });
          rb8597.text.set(String(index + 1));
          rb8597.text.style = {
            bold: true,
            fontSize: 28,
            alignment: "center",
            color: "white",
          };
          rb8597.text.verticalAlignment = "middle";
          let rb8598 = rb6498.shapes.add({
            geometry: "textbox",
            position: {
              left: 220,
              top: rb8596 + 8,
              width: 1030,
              height: 80,
            },
          });
          rb8598.text.set(item);
          rb8598.text.style = {
            fontSize: 30,
            color: "slate-700",
          };
        });
      },
      notes: [
        "Use 3-5 steps; longer processes usually need a timeline or appendix view.",
      ],
    });
  }
  // _ensure_vKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    gKe = zodObject({
      title: zodString().min(1).default("Customer impact"),
      pictogram: zodString().min(1).default("⚡"),
      value: zodString().min(1).default("3.2x"),
      label: zodString().min(1).default("faster time-to-resolution"),
      description: zodString()
        .min(1)
        .default(
          "Measured across support workflows after assistant routing and summarization.",
        ),
      backgroundFill: zodString().min(1).default("background1"),
    });
    pictogramSlideRecipe = defineRecipe({
      name: "recipes.slide.pictogram",
      summary:
        "Pictogram slide with one symbolic visual and one headline metric.",
      labels: ["slide", "pictogram", "kpi", "professional"],
      paramsSchema: gKe,
      exampleParams: {
        title: "Customer impact",
        pictogram: "⚡",
        value: "3.2x",
        label: "faster time-to-resolution",
        description:
          "Measured across support workflows after assistant routing and summarization.",
      },
      run: (ri897, ri898) => {
        let rb5706 = ri897.slides.add();
        rb5706.background.fill = ri898.backgroundFill;
        let rb5707 = rb5706.shapes.add({
          geometry: "textbox",
          position: {
            left: 100,
            top: 80,
            width: 1100,
            height: 80,
          },
        });
        rb5707.text.set(ri898.title);
        rb5707.text.style = {
          bold: true,
          fontSize: 46,
          color: "tx1",
        };
        let rb5708 = rb5706.shapes.add({
          geometry: "ellipse",
          position: {
            left: 180,
            top: 220,
            width: 320,
            height: 320,
          },
          fill: "accent1",
          line: {
            style: "solid",
            width: 0,
            fill: "accent1",
          },
        });
        rb5708.text.set(ri898.pictogram);
        rb5708.text.style = {
          bold: true,
          fontSize: 140,
          alignment: "center",
          color: "white",
        };
        rb5708.text.verticalAlignment = "middle";
        let rb5709 = rb5706.shapes.add({
          geometry: "textbox",
          position: {
            left: 560,
            top: 260,
            width: 700,
            height: 120,
          },
        });
        rb5709.text.set(`${ri898.value}\n${ri898.label}`);
        rb5709.text.style = {
          bold: true,
          fontSize: 58,
          lineSpacing: 1.2,
          color: "tx1",
        };
        let rb5710 = rb5706.shapes.add({
          geometry: "textbox",
          position: {
            left: 560,
            top: 450,
            width: 700,
            height: 150,
          },
        });
        rb5710.text.set(ri898.description);
        rb5710.text.style = {
          fontSize: 26,
          lineSpacing: 1.25,
          color: "slate-700",
        };
      },
      notes: ["Use one symbol only; multiple icons dilute the focal metric."],
    });
  }
  // _ensure_xKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    yKe = zodObject({
      title: zodString().min(1).default("Section 02"),
      subtitle: zodString()
        .min(1)
        .default("Operating model and execution plan"),
      iconText: zodString().min(1).default("02"),
      accentFill: zodString().min(1).default("accent1"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    sectionDividerRoundIconRecipe = defineRecipe({
      name: "recipes.slide.section_divider_round_icon",
      summary: "Section divider with a large circular icon marker.",
      labels: ["slide", "section divider", "pitch deck"],
      paramsSchema: yKe,
      exampleParams: {
        title: "Section 02",
        subtitle: "Operating model and execution plan",
        iconText: "02",
        accentFill: "accent1",
      },
      run: (ri1114, ri1115) => {
        let rb6502 = ri1114.slides.add();
        rb6502.background.fill = ri1115.backgroundFill;
        let rb6503 = rb6502.shapes.add({
          geometry: "ellipse",
          position: {
            left: 540,
            top: 150,
            width: 280,
            height: 280,
          },
          fill: ri1115.accentFill,
          line: {
            style: "solid",
            width: 0,
            fill: ri1115.accentFill,
          },
        });
        rb6503.text.set(ri1115.iconText);
        rb6503.text.style = {
          bold: true,
          fontSize: 96,
          alignment: "center",
          color: "white",
        };
        rb6503.text.verticalAlignment = "middle";
        let rb6504 = rb6502.shapes.add({
          geometry: "textbox",
          position: {
            left: 180,
            top: 470,
            width: 1e3,
            height: 90,
          },
        });
        rb6504.text.set(ri1115.title);
        rb6504.text.style = {
          bold: true,
          fontSize: 56,
          alignment: "center",
          color: "tx1",
        };
        let rb6505 = rb6502.shapes.add({
          geometry: "textbox",
          position: {
            left: 260,
            top: 560,
            width: 840,
            height: 80,
          },
        });
        rb6505.text.set(ri1115.subtitle);
        rb6505.text.style = {
          fontSize: 28,
          alignment: "center",
          color: "slate-600",
        };
      },
      notes: ["Use this divider to clearly mark a major narrative transition."],
    });
  }
  // _ensure_wKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    SKe = zodObject({
      title: zodString().min(1).default("Go-to-market plan"),
      subtitle: zodString()
        .min(1)
        .default("Segment strategy, messaging, and launch sequence"),
      bandFill: zodString().min(1).default("accent1"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    sectionDividerVerticalBandLeftRecipe = defineRecipe({
      name: "recipes.slide.section_divider_vertical_band_left",
      summary: "Section divider with a strong vertical color band on the left.",
      labels: ["slide", "section divider", "professional"],
      paramsSchema: SKe,
      exampleParams: {
        title: "Go-to-market plan",
        subtitle: "Segment strategy, messaging, and launch sequence",
        bandFill: "accent1",
      },
      run: (ri1803, ri1804) => {
        let rb8327 = ri1803.slides.add();
        rb8327.background.fill = ri1804.backgroundFill;
        rb8327.shapes.add({
          geometry: "rect",
          position: {
            left: 0,
            top: 0,
            width: 120,
            height: 768,
          },
          fill: ri1804.bandFill,
          line: {
            style: "solid",
            width: 0,
            fill: ri1804.bandFill,
          },
        });
        let rb8328 = rb8327.shapes.add({
          geometry: "textbox",
          position: {
            left: 180,
            top: 260,
            width: 1040,
            height: 120,
          },
        });
        rb8328.text.set(ri1804.title);
        rb8328.text.style = {
          bold: true,
          fontSize: 62,
          color: "tx1",
        };
        let rb8329 = rb8327.shapes.add({
          geometry: "textbox",
          position: {
            left: 180,
            top: 390,
            width: 930,
            height: 120,
          },
        });
        rb8329.text.set(ri1804.subtitle);
        rb8329.text.style = {
          fontSize: 30,
          color: "slate-700",
          lineSpacing: 1.2,
        };
      },
      notes: [
        "This divider works well when the deck already uses accent rails.",
      ],
    });
  }
  // _ensure_DKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    TKe = zodObject({
      title: zodString().min(1).default("Delivery roadmap"),
      subtitle: zodString()
        .min(1)
        .default("Milestones, owners, and measurable outcomes"),
      bandFill: zodString().min(1).default("accent2"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    sectionDividerVerticalBandRightRecipe = defineRecipe({
      name: "recipes.slide.section_divider_vertical_band_right",
      summary:
        "Section divider with a strong vertical color band on the right.",
      labels: ["slide", "section divider", "professional"],
      paramsSchema: TKe,
      exampleParams: {
        title: "Delivery roadmap",
        subtitle: "Milestones, owners, and measurable outcomes",
        bandFill: "accent2",
      },
      run: (ri1790, ri1791) => {
        let rb8316 = ri1790.slides.add();
        rb8316.background.fill = ri1791.backgroundFill;
        rb8316.shapes.add({
          geometry: "rect",
          position: {
            left: 1246,
            top: 0,
            width: 120,
            height: 768,
          },
          fill: ri1791.bandFill,
          line: {
            style: "solid",
            width: 0,
            fill: ri1791.bandFill,
          },
        });
        let rb8317 = rb8316.shapes.add({
          geometry: "textbox",
          position: {
            left: 140,
            top: 260,
            width: 1040,
            height: 120,
          },
        });
        rb8317.text.set(ri1791.title);
        rb8317.text.style = {
          bold: true,
          fontSize: 62,
          color: "tx1",
        };
        let rb8318 = rb8316.shapes.add({
          geometry: "textbox",
          position: {
            left: 140,
            top: 390,
            width: 930,
            height: 120,
          },
        });
        rb8318.text.set(ri1791.subtitle);
        rb8318.text.style = {
          fontSize: 30,
          color: "slate-700",
          lineSpacing: 1.2,
        };
      },
      notes: [
        "Use the right-band variant to alternate visual rhythm with left-band sections.",
      ],
    });
  }
  // _ensure_AKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    OKe = zodObject({
      title: zodString().min(1).default("Regional performance table"),
      headers: zodArray(zodString().min(1))
        .min(2)
        .default(["Region", "Pipeline", "Win rate", "YoY"]),
      rows: zodArray(zodArray(zodString().min(1)).min(2))
        .min(2)
        .default([
          ["North America", "$31M", "29%", "+14%"],
          ["EMEA", "$22M", "26%", "+11%"],
          ["APAC", "$18M", "24%", "+9%"],
        ]),
      caption: zodString()
        .min(1)
        .default(
          "North America leads pipeline while EMEA sustains strong conversion performance.",
        ),
      backgroundFill: zodString().min(1).default("background1"),
    });
    tableSlideRecipe = defineRecipe({
      name: "recipes.slide.table_slide",
      summary: "Table-first slide for exact values and concise interpretation.",
      labels: ["slide", "table", "financial", "professional"],
      paramsSchema: OKe,
      exampleParams: {
        title: "Regional performance table",
        headers: ["Region", "Pipeline", "Win rate", "YoY"],
        rows: [
          ["North America", "$31M", "29%", "+14%"],
          ["EMEA", "$22M", "26%", "+11%"],
          ["APAC", "$18M", "24%", "+9%"],
        ],
        caption:
          "North America leads pipeline while EMEA sustains strong conversion performance.",
      },
      run: (ri1186, ri1187) => {
        let rb6713 = ri1187.headers.length,
          rb6714 = ri1187.rows.length + 1,
          rb6715 = ri1186.slides.add();
        rb6715.background.fill = ri1187.backgroundFill;
        let rb6716 = rb6715.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 70,
            width: 1120,
            height: 80,
          },
        });
        rb6716.text.set(ri1187.title);
        rb6716.text.style = {
          bold: true,
          fontSize: 44,
          color: "tx1",
        };
        let rb6717 = rb6715.tables.add({
          left: 90,
          top: 180,
          width: 1180,
          height: 400,
          rows: rb6714,
          columns: rb6713,
        });
        ri1187.headers.forEach((item, index) => {
          rb6717.getCell(0, index).value = item;
        });
        ri1187.rows.forEach((item, index) => {
          item.forEach((_item, _index) => {
            rb6717.getCell(index + 1, _index).value = _item;
          });
        });
        rb6717.style = "TableStyleMedium2";
        let rb6718 = rb6715.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 610,
            width: 1180,
            height: 90,
          },
        });
        rb6718.text.set(ri1187.caption);
        rb6718.text.style = {
          fontSize: 24,
          lineSpacing: 1.2,
          color: "slate-700",
        };
      },
      notes: [
        "Choose this template when exact values matter more than trend shape.",
      ],
    });
  }
  // _ensure_PKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    jKe = zodObject({
      title: zodString().min(1),
      body: zodString().min(1),
    });
    MKe = zodObject({
      title: zodString().min(1).default("Option comparison"),
      columns: zodArray(jKe)
        .length(3)
        .default([
          {
            title: "Option A",
            body: "Fastest to launch with moderate customization.",
          },
          {
            title: "Option B",
            body: "Balanced implementation effort and flexibility.",
          },
          {
            title: "Option C",
            body: "Highest ceiling with heavier delivery cost.",
          },
        ]),
      backgroundFill: zodString().min(1).default("background1"),
    });
    threeColumnComparisonRecipe = defineRecipe({
      name: "recipes.slide.three_column_comparison",
      summary: "Three-card comparison slide for option trade-offs.",
      labels: ["slide", "comparison", "professional"],
      paramsSchema: MKe,
      exampleParams: {
        title: "Option comparison",
        columns: [
          {
            title: "Option A",
            body: "Fastest to launch with moderate customization.",
          },
          {
            title: "Option B",
            body: "Balanced implementation effort and flexibility.",
          },
          {
            title: "Option C",
            body: "Highest ceiling with heavier delivery cost.",
          },
        ],
      },
      run: (ri1629, ri1630) => {
        let rb7849 = ri1629.slides.add();
        rb7849.background.fill = ri1630.backgroundFill;
        let rb7850 = rb7849.shapes.add({
          geometry: "textbox",
          position: {
            left: 100,
            top: 80,
            width: 1100,
            height: 80,
          },
        });
        rb7850.text.set(ri1630.title);
        rb7850.text.style = {
          bold: true,
          fontSize: 48,
          color: "tx1",
        };
        ri1630.columns.forEach((item, index) => {
          let rb10944 = 100 + index * 420,
            rb10945 = rb7849.shapes.add({
              geometry: "rect",
              position: {
                left: rb10944,
                top: 210,
                width: 360,
                height: 440,
              },
              fill: "slate-50",
              borderRadius: "rounded-lg",
              line: {
                style: "solid",
                width: 1,
                fill: "slate-200",
              },
            });
          rb10945.text.set(`${item.title}\n\n${item.body}`);
          rb10945.text.style = {
            bold: true,
            fontSize: 26,
            lineSpacing: 1.25,
            color: "tx1",
          };
        });
      },
      notes: ["Keep each column to one claim and one supporting sentence."],
    });
  }
  // _ensure_LKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    FKe = zodObject({
      title: zodString().min(1).default("Journey highlights"),
      captions: zodArray(zodString().min(1))
        .length(3)
        .default(["Discover", "Adopt", "Expand"]),
      imageFill: zodString().min(1).default("slate-200"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    threeImageCarouselRecipe = defineRecipe({
      name: "recipes.slide.three_image_carousel",
      summary: "Three-panel image carousel for sequence storytelling.",
      labels: ["slide", "image", "carousel", "professional"],
      paramsSchema: FKe,
      exampleParams: {
        title: "Journey highlights",
        captions: ["Discover", "Adopt", "Expand"],
      },
      run: (ri1171, ri1172) => {
        let rb6681 = ri1171.slides.add();
        rb6681.background.fill = ri1172.backgroundFill;
        let { width } = rb6681.frame,
          rb6683 = Math.round((width - 1180) / 2),
          rb6684 = rb6681.shapes.add({
            geometry: "textbox",
            position: {
              left: rb6683,
              top: 56,
              width: 1180,
              height: 80,
            },
          });
        rb6684.text.set(ri1172.title);
        rb6684.text.style = {
          bold: true,
          fontSize: 46,
          alignment: "center",
          color: "tx1",
        };
        ri1172.captions.forEach((item, index) => {
          let rb10583 = rb6683 + index * 410,
            rb10584 = rb6681.shapes.add({
              geometry: "rect",
              position: {
                left: rb10583,
                top: 170,
                width: 360,
                height: 430,
              },
              fill: ri1172.imageFill,
              borderRadius: "rounded-lg",
              line: {
                style: "solid",
                width: 1,
                fill: "slate-300",
              },
            });
          rb10584.text.set(item);
          rb10584.text.style = {
            bold: true,
            fontSize: 24,
            alignment: "center",
            color: "slate-700",
          };
          rb10584.text.verticalAlignment = "bottom";
        });
      },
      notes: [
        "Use consistent composition across all three frames for smooth progression.",
      ],
    });
  }
  // _ensure_BKe
  {
    ensureZodRuntime();
    ensureChartLabelAlignInit();
    ensureDefineRecipeInit();
    RKe = zodObject({
      title: zodString()
        .min(1)
        .default("A Guided Tour of Our Cosmic Neighborhood"),
      subtitle: zodString()
        .min(1)
        .default("From rocky planets to icy outskirts"),
      backgroundFill: zodString().min(1).default("background1"),
      accentStartColor: zodString().min(1).default("blue-500/90"),
      accentEndColor: zodString().min(1).default("violet-500/85"),
    });
    titleCoverSlideRecipe = defineRecipe({
      name: "recipes.slide.title_cover",
      summary:
        "Title slide with centered title/subtitle and a subtle accent band.",
      labels: ["cover", "pitch deck", "professional", "modern"],
      paramsSchema: RKe,
      exampleParams: {
        title: "A Guided Tour of Our Cosmic Neighborhood",
        subtitle: "From rocky planets to icy outskirts",
      },
      run: (ri698, ri699) => {
        let rb4972 = {
            columns: 12,
            marginX: 80,
            marginY: 64,
            gutter: 24,
            rowHeight: 72,
            rowGap: 16,
            baseUnit: 8,
          },
          rb4973 = ri698.slides.add();
        rb4973.background.fill = ri699.backgroundFill;
        let { width } = rb4973.frame,
          rb4974 = rb4973.shapes.add({
            geometry: "rect",
            position: {
              left: 0,
              top: 0,
              width,
              height: 160,
            },
            fill: {
              type: "gradient",
              gradientKind: "linear",
              angleDeg: 135,
              stops: [
                {
                  offset: 0,
                  color: ri699.accentStartColor,
                },
                {
                  offset: 1e5,
                  color: ri699.accentEndColor,
                },
              ],
            },
            line: {
              style: "solid",
              width: 0,
              fill: ri699.backgroundFill,
            },
          });
        rb4974.name = "titleCover_accentBand";
        let rb4975 = rb4973.shapes.add({
          geometry: "textbox",
          position: {
            width: 864,
            height: 144,
          },
        });
        rb4975.name = "titleCover_title";
        rb4975.text.set(ri699.title);
        rb4975.text.style = {
          bold: true,
          fontSize: 52,
          alignment: "center",
          color: "tx1",
        };
        let rb4976 = rb4973.shapes.add({
          geometry: "textbox",
          position: {
            width: 736,
            height: 80,
          },
        });
        rb4976.name = "titleCover_subtitle";
        rb4976.text.set(ri699.subtitle);
        rb4976.text.style = {
          fontSize: 28,
          alignment: "center",
          color: "slate-600",
        };
        let rb4977 = rb4973.gridFrame(
          {
            colStart: 2,
            colSpan: 10,
            rowStart: 3,
            rowSpan: 4,
          },
          rb4972,
        );
        rb4973.stackVertical([rb4975, rb4976], {
          frame: rb4977,
          verticalGap: 16,
          align: chartLabelAlign.topCenter,
        });
      },
    });
  }

  registerPresentationRecipes(
    [
      numberedStepsSlideRecipe,
      pictogramSlideRecipe,
      sectionDividerRoundIconRecipe,
      sectionDividerVerticalBandLeftRecipe,
      sectionDividerVerticalBandRightRecipe,
      tableSlideRecipe,
      threeColumnComparisonRecipe,
      threeImageCarouselRecipe,
      titleCoverSlideRecipe,
    ].filter(Boolean),
  );
});
