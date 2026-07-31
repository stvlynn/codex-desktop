// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: slide big_number…data_dashboard.
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

export const ensureSlideBasicsRecipesInit = esmInit(() => {
  ensureDefineRecipeInit();
  let fGe: any;
  let bigNumberSlideRecipe: any;
  let hGe: any;
  let bigQuoteSlideRecipe: any;
  let vGe: any;
  let bulletListSlideRecipe: any;
  let xGe: any;
  let captionedContentSlideRecipe: any;
  let wGe: any;
  let centerTitleSolidBandRecipe: any;
  let DGe: any;
  let centeredHeadlineSlideRecipe: any;
  let AGe: any;
  let chartWithCaptionSlideRecipe: any;
  let NGe: any;
  let contentsTocSlideRecipe: any;
  let IGe: any;
  let LGe: any;
  let dataDashboardSlideRecipe: any;

  // _ensure_mGe
  {
    ensureZodRuntime();
    ensureChartLabelAlignInit();
    ensureDefineRecipeInit();
    fGe = zodObject({
      label: zodString().min(1).default("TOTAL QUALIFIED PIPELINE"),
      value: zodString().min(1).default("$84.2M"),
      note: zodString()
        .min(1)
        .default(
          "+18% quarter-over-quarter, driven by enterprise expansion and faster deal velocity.",
        ),
      backgroundFill: zodString().min(1).default("background1"),
    });
    bigNumberSlideRecipe = defineRecipe({
      name: "recipes.slide.big_number",
      summary: "Big-number slide for one KPI with brief interpretation.",
      labels: ["financial", "kpi", "metric", "professional"],
      paramsSchema: fGe,
      exampleParams: {
        label: "TOTAL QUALIFIED PIPELINE",
        value: "$84.2M",
        note: "+18% quarter-over-quarter, driven by enterprise expansion and faster deal velocity.",
      },
      run: (ri783, ri784) => {
        let rb5367 = {
            columns: 12,
            marginX: 80,
            marginY: 64,
            gutter: 24,
            rowHeight: 72,
            rowGap: 16,
            baseUnit: 8,
          },
          rb5368 = ri783.slides.add();
        rb5368.background.fill = ri784.backgroundFill;
        let rb5369 = rb5368.shapes.add({
          geometry: "textbox",
          position: {
            width: 768,
            height: 64,
          },
        });
        rb5369.name = "bigNumber_label";
        rb5369.text.set(ri784.label);
        rb5369.text.style = {
          bold: true,
          fontSize: 24,
          alignment: "center",
          color: "slate-600",
        };
        let rb5370 = rb5368.shapes.add({
          geometry: "textbox",
          position: {
            width: 768,
            height: 160,
          },
        });
        rb5370.name = "bigNumber_value";
        rb5370.text.set(ri784.value);
        rb5370.text.style = {
          bold: true,
          fontSize: 112,
          alignment: "center",
          color: "tx1",
        };
        let rb5371 = rb5368.shapes.add({
          geometry: "textbox",
          position: {
            width: 704,
            height: 80,
          },
        });
        rb5371.name = "bigNumber_note";
        rb5371.text.set(ri784.note);
        rb5371.text.style = {
          fontSize: 26,
          alignment: "center",
          lineSpacing: 1.25,
          color: "slate-700",
        };
        let rb5372 = rb5368.gridFrame(
          {
            colStart: 1,
            colSpan: 12,
            rowStart: 2,
            rowSpan: 5,
          },
          rb5367,
        );
        rb5368.stackVertical([rb5369, rb5370, rb5371], {
          frame: rb5372,
          verticalGap: 16,
          align: chartLabelAlign.topCenter,
        });
      },
    });
  }
  // _ensure_Ge
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    hGe = zodObject({
      quote: zodString()
        .min(1)
        .default(
          "The teams with the shortest insight-to-action loop will outpace the market.",
        ),
      attribution: zodString().min(1).default("VP Product, Q4 review"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    bigQuoteSlideRecipe = defineRecipe({
      name: "recipes.slide.big_quote",
      summary: "Quote slide with oversized statement and concise attribution.",
      labels: ["slide", "quote", "minimalist", "professional"],
      paramsSchema: hGe,
      exampleParams: {
        quote:
          "The teams with the shortest insight-to-action loop will outpace the market.",
        attribution: "VP Product, Q4 review",
      },
      run: (ri2147, ri2148) => {
        let rb9106 = ri2147.slides.add();
        rb9106.background.fill = ri2148.backgroundFill;
        let rb9107 = rb9106.shapes.add({
          geometry: "textbox",
          position: {
            left: 140,
            top: 170,
            width: 1080,
            height: 330,
          },
        });
        rb9107.text.set(`"${ri2148.quote}"`);
        rb9107.text.style = {
          bold: true,
          fontSize: 58,
          lineSpacing: 1.2,
          alignment: "center",
          color: "tx1",
        };
        let rb9108 = rb9106.shapes.add({
          geometry: "textbox",
          position: {
            left: 320,
            top: 560,
            width: 720,
            height: 80,
          },
        });
        rb9108.text.set(ri2148.attribution);
        rb9108.text.style = {
          fontSize: 26,
          alignment: "center",
          color: "slate-600",
        };
      },
      notes: [
        "Reserve quote slides for statements that move audience decision-making.",
      ],
    });
  }
  // _ensure_bGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    vGe = zodObject({
      title: zodString().min(1).default("Key takeaways"),
      bullets: zodArray(zodString().min(1))
        .min(3)
        .default([
          "Consolidate tooling around the highest-frequency workflows.",
          "Prioritize latency and reliability for customer-visible actions.",
          "Instrument the flow to measure outcome quality, not just throughput.",
          "Scale rollout in phases with clear ownership and feedback loops.",
        ]),
      backgroundFill: zodString().min(1).default("background1"),
    });
    bulletListSlideRecipe = defineRecipe({
      name: "recipes.slide.bullet_list",
      summary:
        "Bullet-list slide for concise recommendations and summary points.",
      labels: ["slide", "bullet list", "professional"],
      paramsSchema: vGe,
      exampleParams: {
        title: "Key takeaways",
        bullets: [
          "Consolidate tooling around the highest-frequency workflows.",
          "Prioritize latency and reliability for customer-visible actions.",
          "Instrument the flow to measure outcome quality, not just throughput.",
          "Scale rollout in phases with clear ownership and feedback loops.",
        ],
      },
      run: (ri2474, ri2475) => {
        let rb9790 = ri2475.bullets.map((item) => `• ${item}`).join("\n\n"),
          rb9791 = ri2474.slides.add();
        rb9791.background.fill = ri2475.backgroundFill;
        let rb9792 = rb9791.shapes.add({
          geometry: "textbox",
          position: {
            left: 110,
            top: 80,
            width: 1100,
            height: 80,
          },
        });
        rb9792.text.set(ri2475.title);
        rb9792.text.style = {
          bold: true,
          fontSize: 48,
          color: "tx1",
        };
        let rb9793 = rb9791.shapes.add({
          geometry: "textbox",
          position: {
            left: 140,
            top: 200,
            width: 1120,
            height: 470,
          },
        });
        rb9793.text.set(rb9790);
        rb9793.text.style = {
          fontSize: 30,
          lineSpacing: 1.25,
          color: "slate-700",
        };
      },
      notes: [
        "Keep each bullet to one sentence to maintain presentation pacing.",
      ],
    });
  }
  // _ensure_CGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    xGe = zodObject({
      title: zodString().min(1).default("Why this matters"),
      body: zodString()
        .min(1)
        .default(
          "Customers are consolidating vendors and favor platforms that reduce handoffs across the lifecycle.",
        ),
      caption: zodString()
        .min(1)
        .default(
          "Interpretation: consolidation pressure rewards integrated product surfaces.",
        ),
      backgroundFill: zodString().min(1).default("background1"),
    });
    captionedContentSlideRecipe = defineRecipe({
      name: "recipes.slide.captioned_content",
      summary:
        "Content slide with a body paragraph and a highlighted caption line.",
      labels: ["slide", "content", "professional"],
      paramsSchema: xGe,
      exampleParams: {
        title: "Why this matters",
        body: "Customers are consolidating vendors and favor platforms that reduce handoffs across the lifecycle.",
        caption:
          "Interpretation: consolidation pressure rewards integrated product surfaces.",
      },
      run: (ri1206, ri1207) => {
        let rb6735 = ri1206.slides.add();
        rb6735.background.fill = ri1207.backgroundFill;
        let rb6736 = rb6735.shapes.add({
          geometry: "textbox",
          position: {
            left: 110,
            top: 90,
            width: 980,
            height: 90,
          },
        });
        rb6736.text.set(ri1207.title);
        rb6736.text.style = {
          bold: true,
          fontSize: 50,
          color: "tx1",
        };
        let rb6737 = rb6735.shapes.add({
          geometry: "textbox",
          position: {
            left: 110,
            top: 220,
            width: 1140,
            height: 280,
          },
        });
        rb6737.text.set(ri1207.body);
        rb6737.text.style = {
          fontSize: 34,
          lineSpacing: 1.25,
          color: "slate-700",
        };
        let rb6738 = rb6735.shapes.add({
          geometry: "rect",
          position: {
            left: 110,
            top: 560,
            width: 1140,
            height: 110,
          },
          fill: "slate-100",
          borderRadius: "rounded-md",
          line: {
            style: "solid",
            width: 0,
            fill: "slate-100",
          },
        });
        rb6738.text.set(ri1207.caption);
        rb6738.text.style = {
          bold: true,
          fontSize: 24,
          color: "slate-800",
          alignment: "center",
        };
        rb6738.text.verticalAlignment = "middle";
      },
      notes: [
        "Use caption text to state the implication, not to repeat the body.",
      ],
    });
  }
  // _ensure_EGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    wGe = zodObject({
      title: zodString().min(1).default("Strategic narrative"),
      subtitle: zodString()
        .min(1)
        .default(
          "A centered title over a strong contrast band and background visual.",
        ),
      bandFill: zodString().min(1).default("slate-900/80"),
      imageFill: zodString().min(1).default("slate-300"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    centerTitleSolidBandRecipe = defineRecipe({
      name: "recipes.slide.center_title_solid_band_with_background_image",
      summary: "Centered title band layered over a full background image.",
      labels: ["slide", "cover", "section divider", "professional"],
      paramsSchema: wGe,
      exampleParams: {
        title: "Strategic narrative",
        subtitle:
          "A centered title over a strong contrast band and background visual.",
        bandFill: "slate-900/80",
        imageFill: "slate-300",
      },
      run: (ri1244, ri1245) => {
        let rb6809 = ri1244.slides.add();
        rb6809.background.fill = ri1245.backgroundFill;
        let rb6810 = rb6809.shapes.add({
          geometry: "rect",
          position: {
            left: 0,
            top: 0,
            width: 1366,
            height: 768,
          },
          fill: ri1245.imageFill,
          line: {
            style: "solid",
            width: 0,
            fill: ri1245.imageFill,
          },
        });
        rb6810.text.set("BACKGROUND IMAGE");
        rb6810.text.style = {
          bold: true,
          fontSize: 34,
          alignment: "center",
          color: "slate-500",
        };
        rb6810.text.verticalAlignment = "middle";
        let rb6811 = rb6809.shapes.add({
          geometry: "rect",
          position: {
            left: 120,
            top: 270,
            width: 1126,
            height: 230,
          },
          fill: ri1245.bandFill,
          borderRadius: "rounded-md",
          line: {
            style: "solid",
            width: 0,
            fill: ri1245.bandFill,
          },
        });
        rb6811.text.set(`${ri1245.title}\n${ri1245.subtitle}`);
        rb6811.text.style = {
          bold: true,
          fontSize: 48,
          lineSpacing: 1.25,
          alignment: "center",
          color: "white",
        };
        rb6811.text.verticalAlignment = "middle";
      },
      notes: [
        "Increase band opacity when background imagery has high visual noise.",
      ],
    });
  }
  // _ensure_kGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    DGe = zodObject({
      headline: zodString().min(1).default("Mission update"),
      subheadline: zodString()
        .min(1)
        .default("A concise statement that frames the audience takeaway."),
      backgroundFill: zodString().min(1).default("background1"),
    });
    centeredHeadlineSlideRecipe = defineRecipe({
      name: "recipes.slide.centered_headline",
      summary: "Centered headline slide for a short, high-signal statement.",
      labels: ["slide", "headline", "minimalist", "pitch deck"],
      paramsSchema: DGe,
      exampleParams: {
        headline: "Mission update",
        subheadline: "A concise statement that frames the audience takeaway.",
      },
      run: (ri2031, ri2032) => {
        let rb8870 = ri2031.slides.add();
        rb8870.background.fill = ri2032.backgroundFill;
        let rb8871 = rb8870.shapes.add({
          geometry: "textbox",
          position: {
            left: 160,
            top: 250,
            width: 1040,
            height: 120,
          },
        });
        rb8871.text.set(ri2032.headline);
        rb8871.text.style = {
          bold: true,
          fontSize: 64,
          alignment: "center",
          color: "tx1",
          lineSpacing: 1.1,
        };
        let rb8872 = rb8870.shapes.add({
          geometry: "textbox",
          position: {
            left: 220,
            top: 390,
            width: 920,
            height: 120,
          },
        });
        rb8872.text.set(ri2032.subheadline);
        rb8872.text.style = {
          fontSize: 30,
          alignment: "center",
          color: "slate-600",
          lineSpacing: 1.25,
        };
      },
      notes: [
        "Use this recipe when one idea needs to land quickly before deeper detail slides.",
      ],
    });
  }
  // _ensure_MGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    AGe = zodObject({
      title: zodString().min(1).default("Performance trend"),
      caption: zodString()
        .min(1)
        .default(
          "Growth accelerates after onboarding improvements in weeks 4-6.",
        ),
      categories: zodArray(zodString().min(1))
        .min(3)
        .default(["W1", "W2", "W3", "W4", "W5", "W6"]),
      values: zodArray(zodNumber()).min(3).default([18, 24, 29, 33, 39, 44]),
      seriesName: zodString().min(1).default("Net new"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    chartWithCaptionSlideRecipe = defineRecipe({
      name: "recipes.slide.chart_with_caption",
      summary: "Chart-led slide with explanatory caption text.",
      labels: ["slide", "chart", "analysis", "professional"],
      paramsSchema: AGe,
      exampleParams: {
        title: "Performance trend",
        caption:
          "Growth accelerates after onboarding improvements in weeks 4-6.",
        categories: ["W1", "W2", "W3", "W4", "W5", "W6"],
        values: [18, 24, 29, 33, 39, 44],
        seriesName: "Net new",
      },
      run: (ri1369, ri1370) => {
        let rb7145 = ri1370.categories,
          rb7146 =
            ri1370.values.length === rb7145.length
              ? ri1370.values
              : rb7145.map(
                  (item, index) =>
                    ri1370.values[index] ?? ri1370.values.at(-1) ?? 0,
                ),
          rb7147 = ri1369.slides.add();
        rb7147.background.fill = ri1370.backgroundFill;
        let rb7148 = rb7147.shapes.add({
          geometry: "textbox",
          position: {
            left: 100,
            top: 80,
            width: 1120,
            height: 80,
          },
        });
        rb7148.text.set(ri1370.title);
        rb7148.text.style = {
          bold: true,
          fontSize: 48,
          color: "tx1",
        };
        rb7147.charts.add("bar", {
          position: {
            left: 100,
            top: 190,
            width: 820,
            height: 460,
          },
          categories: rb7145,
          series: [
            {
              name: ri1370.seriesName,
              values: rb7146,
            },
          ],
          hasLegend: false,
          title: "",
        });
        let rb7149 = rb7147.shapes.add({
          geometry: "textbox",
          position: {
            left: 960,
            top: 230,
            width: 300,
            height: 360,
          },
        });
        rb7149.text.set(ri1370.caption);
        rb7149.text.style = {
          fontSize: 26,
          lineSpacing: 1.3,
          color: "slate-700",
        };
      },
      notes: [
        "Prefer one dominant series unless direct comparison is the key insight.",
      ],
    });
  }
  // _ensure_FGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    NGe = zodObject({
      title: zodString().min(1).default("Contents"),
      sections: zodArray(zodString().min(1))
        .min(3)
        .default([
          "1. Context and goals",
          "2. Current performance",
          "3. Strategic initiatives",
          "4. Risks and mitigations",
          "5. Next-quarter plan",
        ]),
      backgroundFill: zodString().min(1).default("background1"),
    });
    contentsTocSlideRecipe = defineRecipe({
      name: "recipes.slide.contents_toc",
      summary: "Table-of-contents slide with a numbered section list.",
      labels: ["slide", "toc", "outline", "professional"],
      paramsSchema: NGe,
      exampleParams: {
        title: "Contents",
        sections: [
          "1. Context and goals",
          "2. Current performance",
          "3. Strategic initiatives",
          "4. Risks and mitigations",
          "5. Next-quarter plan",
        ],
      },
      run: (ri2573, ri2574) => {
        let rb9956 = ri2573.slides.add();
        rb9956.background.fill = ri2574.backgroundFill;
        let rb9957 = rb9956.shapes.add({
          geometry: "textbox",
          position: {
            left: 120,
            top: 100,
            width: 720,
            height: 90,
          },
        });
        rb9957.text.set(ri2574.title);
        rb9957.text.style = {
          bold: true,
          fontSize: 52,
          color: "tx1",
        };
        let rb9958 = rb9956.shapes.add({
          geometry: "textbox",
          position: {
            left: 160,
            top: 220,
            width: 980,
            height: 420,
          },
        });
        rb9958.text.set(ri2574.sections.join("\n"));
        rb9958.text.style = {
          fontSize: 30,
          lineSpacing: 1.3,
          color: "slate-700",
        };
      },
      notes: [
        "Keep entries short so the list remains scannable in one glance.",
      ],
    });
  }
  // _ensure_zGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    IGe = zodObject({
      label: zodString().min(1),
      value: zodString().min(1),
    });
    LGe = zodObject({
      title: zodString().min(1).default("Weekly growth dashboard"),
      categories: zodArray(zodString().min(1))
        .min(4)
        .default(["W1", "W2", "W3", "W4", "W5", "W6"]),
      values: zodArray(zodNumber()).min(4).default([18, 24, 29, 33, 39, 44]),
      seriesName: zodString().min(1).default("Net new"),
      metrics: zodArray(IGe)
        .min(2)
        .default([
          {
            label: "Conversion",
            value: "8.4%",
          },
          {
            label: "CAC",
            value: "$122",
          },
          {
            label: "Payback",
            value: "7 mo",
          },
        ]),
      backgroundFill: zodString().min(1).default("background1"),
    });
    dataDashboardSlideRecipe = defineRecipe({
      name: "recipes.slide.data_dashboard",
      summary:
        "Dashboard slide combining a lead chart with supporting KPI cards.",
      labels: ["slide", "dashboard", "chart", "financial", "professional"],
      paramsSchema: LGe,
      exampleParams: {
        title: "Weekly growth dashboard",
        categories: ["W1", "W2", "W3", "W4", "W5", "W6"],
        values: [18, 24, 29, 33, 39, 44],
        seriesName: "Net new",
        metrics: [
          {
            label: "Conversion",
            value: "8.4%",
          },
          {
            label: "CAC",
            value: "$122",
          },
          {
            label: "Payback",
            value: "7 mo",
          },
        ],
      },
      run: (ri634, ri635) => {
        let rb4709 = ri635.categories,
          rb4710 =
            ri635.values.length === rb4709.length
              ? ri635.values
              : rb4709.map(
                  (item, index) =>
                    ri635.values[index] ?? ri635.values.at(-1) ?? 0,
                ),
          rb4711 = ri634.slides.add();
        rb4711.background.fill = ri635.backgroundFill;
        let rb4712 = rb4711.shapes.add({
          geometry: "textbox",
          position: {
            left: 100,
            top: 70,
            width: 1100,
            height: 80,
          },
        });
        rb4712.text.set(ri635.title);
        rb4712.text.style = {
          bold: true,
          fontSize: 44,
          color: "tx1",
        };
        rb4711.charts
          .add("bar", {
            position: {
              left: 100,
              top: 180,
              width: 820,
              height: 470,
            },
            categories: rb4709,
            series: [
              {
                name: ri635.seriesName,
                values: rb4710,
              },
            ],
            hasLegend: false,
            title: "",
          })
          .apply({
            barOptions: {
              direction: "column",
              grouping: "clustered",
              gapWidth: 45,
            },
            xAxis: {
              deleted: true,
            },
            yAxis: {
              deleted: true,
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
        ri635.metrics.forEach((item, index) => {
          let rb10025 = 220 + index * 150,
            rb10026 = rb4711.shapes.add({
              geometry: "rect",
              position: {
                left: 960,
                top: rb10025,
                width: 300,
                height: 120,
              },
              fill: "slate-50",
              borderRadius: "rounded-lg",
              line: {
                style: "solid",
                width: 1,
                fill: "slate-200",
              },
            });
          rb10026.text.set(`${item.value}\n${item.label}`);
          rb10026.text.style = {
            bold: true,
            fontSize: 28,
            lineSpacing: 1.2,
            alignment: "center",
            color: "tx1",
          };
          rb10026.text.verticalAlignment = "middle";
        });
      },
      notes: [
        "Use one dominant chart and 2-4 support metrics for quick scanning.",
      ],
    });
  }

  registerPresentationRecipes(
    [
      bigNumberSlideRecipe,
      bigQuoteSlideRecipe,
      bulletListSlideRecipe,
      captionedContentSlideRecipe,
      centerTitleSolidBandRecipe,
      centeredHeadlineSlideRecipe,
      chartWithCaptionSlideRecipe,
      contentsTocSlideRecipe,
      dataDashboardSlideRecipe,
    ].filter(Boolean),
  );
});
