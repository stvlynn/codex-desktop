// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: slide feature_grid…image_with_caption.
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

export const ensureSlideMediaRecipesInit = esmInit(() => {
  ensureDefineRecipeInit();
  let BGe: any;
  let VGe: any;
  let featureGridSlideRecipe: any;
  let WGe: any;
  let fullBleedLeftImageRecipe: any;
  let qGe: any;
  let fullBleedTopImageRecipe: any;
  let XGe: any;
  let ZGe: any;
  let iconListSlideRecipe: any;
  let eKe: any;
  let imageMontageCaptionRecipe: any;
  let rKe: any;
  let imageOnlySlideRecipe: any;
  let oKe: any;
  let imageWithCaptionSlideRecipe: any;
  let lKe: any;
  let uKe: any;
  let metricStripSlideRecipe: any;

  // _ensure_UGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    BGe = zodObject({
      title: zodString().min(1),
      body: zodString().min(1),
    });
    VGe = zodObject({
      title: zodString().min(1).default("Key capabilities"),
      features: zodArray(BGe)
        .length(4)
        .default([
          {
            title: "Unified context",
            body: "Cross-surface context passed across workflows.",
          },
          {
            title: "Agentic automation",
            body: "Task delegation and stateful follow-through.",
          },
          {
            title: "Governance",
            body: "Traceability, policy checks, and auditable outputs.",
          },
          {
            title: "Extensibility",
            body: "Composable interfaces for domain-specific tooling.",
          },
        ]),
      backgroundFill: zodString().min(1).default("background1"),
    });
    featureGridSlideRecipe = defineRecipe({
      name: "recipes.slide.feature_grid",
      summary: "2x2 feature grid for capability overviews.",
      labels: ["slide", "feature grid", "professional"],
      paramsSchema: VGe,
      exampleParams: {
        title: "Key capabilities",
        features: [
          {
            title: "Unified context",
            body: "Cross-surface context passed across workflows.",
          },
          {
            title: "Agentic automation",
            body: "Task delegation and stateful follow-through.",
          },
          {
            title: "Governance",
            body: "Traceability, policy checks, and auditable outputs.",
          },
          {
            title: "Extensibility",
            body: "Composable interfaces for domain-specific tooling.",
          },
        ],
      },
      run: (ri1428, ri1429) => {
        let rb7296 = ri1428.slides.add();
        rb7296.background.fill = ri1429.backgroundFill;
        let rb7297 = rb7296.shapes.add({
          geometry: "textbox",
          position: {
            left: 100,
            top: 70,
            width: 1100,
            height: 80,
          },
        });
        rb7297.text.set(ri1429.title);
        rb7297.text.style = {
          bold: true,
          fontSize: 46,
          color: "tx1",
        };
        ri1429.features.forEach((item, index) => {
          let rb9970 = index % 2,
            rb9971 = Math.floor(index / 2),
            rb9972 = 100 + rb9970 * 610,
            rb9973 = 180 + rb9971 * 260,
            rb9974 = rb7296.shapes.add({
              geometry: "rect",
              position: {
                left: rb9972,
                top: rb9973,
                width: 560,
                height: 230,
              },
              fill: "slate-50",
              borderRadius: "rounded-lg",
              line: {
                style: "solid",
                width: 1,
                fill: "slate-200",
              },
            });
          rb9974.text.set(`${item.title}\n\n${item.body}`);
          rb9974.text.style = {
            bold: true,
            fontSize: 28,
            lineSpacing: 1.2,
            color: "tx1",
          };
        });
      },
      notes: ["Cap feature grids at four items to preserve readability."],
    });
  }
  // _ensure_KGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    WGe = zodObject({
      title: zodString().min(1).default("Customer spotlight"),
      body: zodString()
        .min(1)
        .default(
          "A left-anchored visual with concise commentary on outcomes, context, and next steps.",
        ),
      imageFill: zodString().min(1).default("slate-300"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    fullBleedLeftImageRecipe = defineRecipe({
      name: "recipes.slide.full_bleed_left_image_right_caption",
      summary: "Full-bleed left image with right-side explanatory copy.",
      labels: ["slide", "image", "full bleed", "professional"],
      paramsSchema: WGe,
      exampleParams: {
        title: "Customer spotlight",
        body: "A left-anchored visual with concise commentary on outcomes, context, and next steps.",
        imageFill: "slate-300",
      },
      run: (ri1146, ri1147) => {
        let rb6606 = ri1146.slides.add();
        rb6606.background.fill = ri1147.backgroundFill;
        let rb6607 = rb6606.shapes.add({
          geometry: "rect",
          position: {
            left: 0,
            top: 0,
            width: 760,
            height: 768,
          },
          fill: ri1147.imageFill,
          line: {
            style: "solid",
            width: 0,
            fill: ri1147.imageFill,
          },
        });
        rb6607.text.set("IMAGE");
        rb6607.text.style = {
          bold: true,
          fontSize: 36,
          alignment: "center",
          color: "slate-600",
        };
        rb6607.text.verticalAlignment = "middle";
        let rb6608 = rb6606.shapes.add({
          geometry: "textbox",
          position: {
            left: 820,
            top: 180,
            width: 470,
            height: 120,
          },
        });
        rb6608.text.set(ri1147.title);
        rb6608.text.style = {
          bold: true,
          fontSize: 50,
          color: "tx1",
          lineSpacing: 1.1,
        };
        let rb6609 = rb6606.shapes.add({
          geometry: "textbox",
          position: {
            left: 820,
            top: 320,
            width: 470,
            height: 260,
          },
        });
        rb6609.text.set(ri1147.body);
        rb6609.text.style = {
          fontSize: 28,
          color: "slate-700",
          lineSpacing: 1.25,
        };
      },
      notes: [
        "This recipe works best when the image carries most of the narrative weight.",
      ],
    });
  }
  // _ensure_YGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    qGe = zodObject({
      title: zodString().min(1).default("Program snapshot"),
      body: zodString()
        .min(1)
        .default(
          "Top visual context with a lower-third summary of implications and actions.",
        ),
      imageFill: zodString().min(1).default("slate-300"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    fullBleedTopImageRecipe = defineRecipe({
      name: "recipes.slide.full_bleed_top_image_bottom_caption",
      summary: "Full-bleed top image with caption and context at the bottom.",
      labels: ["slide", "image", "full bleed", "professional"],
      paramsSchema: qGe,
      exampleParams: {
        title: "Program snapshot",
        body: "Top visual context with a lower-third summary of implications and actions.",
        imageFill: "slate-300",
      },
      run: (ri1267, ri1268) => {
        let rb6896 = ri1267.slides.add();
        rb6896.background.fill = ri1268.backgroundFill;
        let rb6897 = rb6896.shapes.add({
          geometry: "rect",
          position: {
            left: 0,
            top: 0,
            width: 1366,
            height: 460,
          },
          fill: ri1268.imageFill,
          line: {
            style: "solid",
            width: 0,
            fill: ri1268.imageFill,
          },
        });
        rb6897.text.set("IMAGE");
        rb6897.text.style = {
          bold: true,
          fontSize: 36,
          alignment: "center",
          color: "slate-600",
        };
        rb6897.text.verticalAlignment = "middle";
        let rb6898 = rb6896.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 500,
            width: 1180,
            height: 80,
          },
        });
        rb6898.text.set(ri1268.title);
        rb6898.text.style = {
          bold: true,
          fontSize: 44,
          color: "tx1",
        };
        let rb6899 = rb6896.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 585,
            width: 1180,
            height: 130,
          },
        });
        rb6899.text.set(ri1268.body);
        rb6899.text.style = {
          fontSize: 26,
          color: "slate-700",
          lineSpacing: 1.2,
        };
      },
      notes: [
        "Use this when the top image provides immediate context for the narrative.",
      ],
    });
  }
  // _ensure_dollarGe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    XGe = zodObject({
      icon: zodString().min(1),
      title: zodString().min(1),
      body: zodString().min(1),
    });
    ZGe = zodObject({
      title: zodString().min(1).default("Operating principles"),
      items: zodArray(XGe)
        .min(3)
        .default([
          {
            icon: "◉",
            title: "Outcome-first",
            body: "Prioritize measurable customer outcomes over output volume.",
          },
          {
            icon: "◆",
            title: "Default transparent",
            body: "Expose assumptions, trade-offs, and decision rationale early.",
          },
          {
            icon: "▲",
            title: "Ship and learn",
            body: "Deploy in small increments and tighten the feedback loop weekly.",
          },
        ]),
      backgroundFill: zodString().min(1).default("background1"),
    });
    iconListSlideRecipe = defineRecipe({
      name: "recipes.slide.icon_list",
      summary: "Icon-list slide for compact principle or capability callouts.",
      labels: ["slide", "icon list", "professional"],
      paramsSchema: ZGe,
      exampleParams: {
        title: "Operating principles",
        items: [
          {
            icon: "◉",
            title: "Outcome-first",
            body: "Prioritize measurable customer outcomes over output volume.",
          },
          {
            icon: "◆",
            title: "Default transparent",
            body: "Expose assumptions, trade-offs, and decision rationale early.",
          },
          {
            icon: "▲",
            title: "Ship and learn",
            body: "Deploy in small increments and tighten the feedback loop weekly.",
          },
        ],
      },
      run: (ri999, ri1000) => {
        let rb6116 = ri999.slides.add();
        rb6116.background.fill = ri1000.backgroundFill;
        let rb6117 = rb6116.shapes.add({
          geometry: "textbox",
          position: {
            left: 100,
            top: 70,
            width: 1100,
            height: 80,
          },
        });
        rb6117.text.set(ri1000.title);
        rb6117.text.style = {
          bold: true,
          fontSize: 46,
          color: "tx1",
        };
        ri1000.items.forEach((item, index) => {
          let rb7806 = 190 + index * 160,
            rb7807 = rb6116.shapes.add({
              geometry: "ellipse",
              position: {
                left: 110,
                top: rb7806,
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
          rb7807.text.set(item.icon);
          rb7807.text.style = {
            bold: true,
            fontSize: 28,
            alignment: "center",
            color: "white",
          };
          rb7807.text.verticalAlignment = "middle";
          let rb7808 = rb6116.shapes.add({
            geometry: "textbox",
            position: {
              left: 220,
              top: rb7806 + 2,
              width: 1020,
              height: 130,
            },
          });
          rb7808.text.set(`${item.title}\n${item.body}`);
          rb7808.text.style = {
            bold: true,
            fontSize: 28,
            color: "tx1",
            lineSpacing: 1.2,
          };
        });
      },
      notes: ["Keep icon semantics simple and consistent across items."],
    });
  }
  // _ensure_nKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    eKe = zodObject({
      title: zodString().min(1).default("Pilot snapshots"),
      caption: zodString()
        .min(1)
        .default(
          "Representative moments across onboarding, usage, and support interactions.",
        ),
      imageLabels: zodArray(zodString().min(1))
        .length(3)
        .default(["Onboarding", "In-product workflow", "Support follow-up"]),
      imageFill: zodString().min(1).default("slate-200"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    imageMontageCaptionRecipe = defineRecipe({
      name: "recipes.slide.image_montage_caption",
      summary: "Three-image montage with a single synthesis caption.",
      labels: ["slide", "image", "montage", "professional"],
      paramsSchema: eKe,
      exampleParams: {
        title: "Pilot snapshots",
        caption:
          "Representative moments across onboarding, usage, and support interactions.",
        imageLabels: ["Onboarding", "In-product workflow", "Support follow-up"],
      },
      run: (ri863, ri864) => {
        let rb5537 = ri863.slides.add();
        rb5537.background.fill = ri864.backgroundFill;
        let { width } = rb5537.frame,
          rb5539 = Math.round((width - 1180) / 2),
          rb5540 = rb5537.shapes.add({
            geometry: "textbox",
            position: {
              left: rb5539,
              top: 56,
              width: 1180,
              height: 80,
            },
          });
        rb5540.text.set(ri864.title);
        rb5540.text.style = {
          bold: true,
          fontSize: 48,
          alignment: "center",
          color: "tx1",
        };
        ri864.imageLabels.forEach((item, index) => {
          let rb10581 = rb5539 + index * 410,
            rb10582 = rb5537.shapes.add({
              geometry: "rect",
              position: {
                left: rb10581,
                top: 176,
                width: 360,
                height: 330,
              },
              fill: ri864.imageFill,
              borderRadius: "rounded-lg",
              line: {
                style: "solid",
                width: 1,
                fill: "slate-300",
              },
            });
          rb10582.text.set(item);
          rb10582.text.style = {
            bold: true,
            fontSize: 24,
            alignment: "center",
            color: "slate-600",
          };
          rb10582.text.verticalAlignment = "middle";
        });
        let rb5541 = rb5537.shapes.add({
          geometry: "textbox",
          position: {
            left: rb5539,
            top: 542,
            width: 1180,
            height: 120,
          },
        });
        rb5541.text.set(ri864.caption);
        rb5541.text.style = {
          fontSize: 28,
          lineSpacing: 1.2,
          alignment: "center",
          color: "slate-700",
        };
      },
      notes: [
        "Choose images with consistent visual tone for cleaner montage rhythm.",
      ],
    });
  }
  // _ensure_aKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    rKe = zodObject({
      title: zodString().min(1).default("Visual reference"),
      imageFill: zodString().min(1).default("slate-300"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    imageOnlySlideRecipe = defineRecipe({
      name: "recipes.slide.image_only",
      summary: "Image-only slide with lightweight title labeling.",
      labels: ["slide", "image", "minimalist"],
      paramsSchema: rKe,
      exampleParams: {
        title: "Visual reference",
        imageFill: "slate-300",
      },
      run: (ri1077, ri1078) => {
        let rb6415 = ri1077.slides.add();
        rb6415.background.fill = ri1078.backgroundFill;
        let { width, height } = rb6415.frame,
          rb6416 = Math.min(420, Math.round(width * 0.34)),
          rb6417 = Math.round((width - rb6416) / 2),
          rb6418 = rb6415.shapes.add({
            geometry: "rect",
            position: {
              left: 0,
              top: 0,
              width,
              height,
            },
            fill: ri1078.imageFill,
            borderRadius: "rounded-lg",
            line: {
              style: "solid",
              width: 0,
              fill: ri1078.imageFill,
            },
          });
        rb6418.text.set("IMAGE");
        rb6418.text.style = {
          bold: true,
          fontSize: 40,
          alignment: "center",
          color: "slate-600",
        };
        rb6418.text.verticalAlignment = "middle";
        let rb6419 = rb6415.shapes.add({
          geometry: "rect",
          position: {
            left: rb6417,
            top: 48,
            width: rb6416,
            height: 56,
          },
          fill: "slate-900/70",
          borderRadius: "rounded-sm",
          line: {
            style: "solid",
            width: 0,
            fill: "slate-900/70",
          },
        });
        rb6419.text.set(ri1078.title);
        rb6419.text.style = {
          bold: true,
          fontSize: 24,
          color: "white",
          alignment: "center",
        };
        rb6419.text.verticalAlignment = "middle";
      },
      notes: ["Use for high-impact visuals where narration happens verbally."],
    });
  }
  // _ensure_cKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    oKe = zodObject({
      title: zodString().min(1).default("Field observation"),
      caption: zodString()
        .min(1)
        .default(
          "Annotated visual evidence from pilot workflows and user interviews.",
        ),
      imageFill: zodString().min(1).default("slate-200"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    imageWithCaptionSlideRecipe = defineRecipe({
      name: "recipes.slide.image_with_caption",
      summary: "Image-led slide with a caption column.",
      labels: ["slide", "image", "caption", "professional"],
      paramsSchema: oKe,
      exampleParams: {
        title: "Field observation",
        caption:
          "Annotated visual evidence from pilot workflows and user interviews.",
        imageFill: "slate-200",
      },
      run: (ri1208, ri1209) => {
        let rb6739 = ri1208.slides.add();
        rb6739.background.fill = ri1209.backgroundFill;
        let rb6740 = rb6739.shapes.add({
          geometry: "textbox",
          position: {
            left: 100,
            top: 80,
            width: 1100,
            height: 80,
          },
        });
        rb6740.text.set(ri1209.title);
        rb6740.text.style = {
          bold: true,
          fontSize: 48,
          color: "tx1",
        };
        let rb6741 = rb6739.shapes.add({
          geometry: "rect",
          position: {
            left: 100,
            top: 190,
            width: 760,
            height: 480,
          },
          fill: ri1209.imageFill,
          borderRadius: "rounded-lg",
          line: {
            style: "solid",
            width: 1,
            fill: "slate-300",
          },
        });
        rb6741.text.set("IMAGE");
        rb6741.text.style = {
          bold: true,
          fontSize: 32,
          color: "slate-500",
          alignment: "center",
        };
        rb6741.text.verticalAlignment = "middle";
        let rb6742 = rb6739.shapes.add({
          geometry: "textbox",
          position: {
            left: 900,
            top: 230,
            width: 360,
            height: 360,
          },
        });
        rb6742.text.set(ri1209.caption);
        rb6742.text.style = {
          fontSize: 28,
          color: "slate-700",
          lineSpacing: 1.3,
        };
      },
      notes: [
        "Keep caption text interpretive so the image can stay uncluttered.",
      ],
    });
  }
  // _ensure_fKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    lKe = zodObject({
      label: zodString().min(1),
      value: zodString().min(1),
    });
    uKe = zodObject({
      title: zodString().min(1).default("Quarterly KPI strip"),
      metrics: zodArray(lKe)
        .min(3)
        .default([
          {
            label: "Pipeline",
            value: "$84.2M",
          },
          {
            label: "Win rate",
            value: "28.4%",
          },
          {
            label: "CAC",
            value: "$122",
          },
          {
            label: "NPS",
            value: "61",
          },
        ]),
      backgroundFill: zodString().min(1).default("background1"),
    });
    metricStripSlideRecipe = defineRecipe({
      name: "recipes.slide.metric_strip",
      summary: "Horizontal strip of headline metrics for dashboard snapshots.",
      labels: ["slide", "metrics", "financial", "professional"],
      paramsSchema: uKe,
      exampleParams: {
        title: "Quarterly KPI strip",
        metrics: [
          {
            label: "Pipeline",
            value: "$84.2M",
          },
          {
            label: "Win rate",
            value: "28.4%",
          },
          {
            label: "CAC",
            value: "$122",
          },
          {
            label: "NPS",
            value: "61",
          },
        ],
      },
      run: (ri1271, ri1272) => {
        let rb6901 = ri1271.slides.add();
        rb6901.background.fill = ri1272.backgroundFill;
        let rb6902 = rb6901.shapes.add({
          geometry: "textbox",
          position: {
            left: 100,
            top: 90,
            width: 1100,
            height: 70,
          },
        });
        rb6902.text.set(ri1272.title);
        rb6902.text.style = {
          bold: true,
          fontSize: 42,
          color: "tx1",
        };
        let rb6903 = ri1272.metrics.length,
          rb6904 = Math.max(
            220,
            Math.floor((1180 - (rb6903 - 1) * 20) / rb6903),
          );
        ri1272.metrics.forEach((item, index) => {
          let rb10330 = 100 + index * (rb6904 + 20),
            rb10331 = rb6901.shapes.add({
              geometry: "rect",
              position: {
                left: rb10330,
                top: 250,
                width: rb6904,
                height: 260,
              },
              fill: "slate-50",
              borderRadius: "rounded-lg",
              line: {
                style: "solid",
                width: 1,
                fill: "slate-200",
              },
            });
          rb10331.text.set(`${item.value}\n${item.label}`);
          rb10331.text.style = {
            bold: true,
            fontSize: 42,
            lineSpacing: 1.3,
            alignment: "center",
            color: "tx1",
          };
          rb10331.text.verticalAlignment = "middle";
        });
      },
      notes: ["Use consistent units and precision across all metric values."],
    });
  }

  registerPresentationRecipes(
    [
      featureGridSlideRecipe,
      fullBleedLeftImageRecipe,
      fullBleedTopImageRecipe,
      iconListSlideRecipe,
      imageMontageCaptionRecipe,
      imageOnlySlideRecipe,
      imageWithCaptionSlideRecipe,
      metricStripSlideRecipe,
    ].filter(Boolean),
  );
});
