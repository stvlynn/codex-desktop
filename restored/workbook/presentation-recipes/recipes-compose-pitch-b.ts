// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: compose work_pitch inspiration/market.
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
import {
  ensureComposeLayoutInit,
  composeText,
  composeRule,
  composeShape,
  composeImage,
  composeTable,
  composeChart,
  composeRow,
  composeColumn,
  composeGrid,
  composeWrap,
  composeFixed,
  composeFr,
  composeRepeat,
  COMPOSE_AUTO_TRACK,
} from "./layout-hooks";

export const ensureComposePitchBRecipesInit = esmInit(() => {
  ensureDefineRecipeInit();
  let gqe: any;
  let _qe: any;
  let workPitchInspirationRecipe: any;
  let bqe: any;
  let xqe: any;
  let workPitchMarketGrowthRecipe: any;
  let marketGrowthCard: any;
  let marketGrowthTextStyle: any;

  // _ensure_yqe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    gqe = zodObject({
      label: zodString().min(1),
    });
    _qe = zodObject({
      sectionNumber: zodString().min(1).default("01"),
      headlinePrimary: zodString().min(1).default("The inspiration"),
      headlineAccent: zodString().min(1).default("behind"),
      brandWord: zodString().min(1).default("Title"),
      body: zodString()
        .min(1)
        .default(
          "Use this section to describe the product inspiration and why the idea matters.",
        ),
      quote: zodString()
        .min(1)
        .default("Add a short sentence that captures the emotional thesis."),
      rightPoints: zodArray(gqe)
        .length(4)
        .default([
          {
            label: "Point 1",
          },
          {
            label: "Point 2",
          },
          {
            label: "Point 3",
          },
          {
            label: "Point 4",
          },
        ]),
      backgroundFill: zodString().min(1).default("background1"),
      accentColor: zodString().min(1).default("accent1"),
      textColor: zodString().min(1).default("tx1"),
      footerBrand: zodString().min(1).default("Brand"),
      footerPage: zodString().min(1).default("04"),
      typeface: zodString().min(1).default("Helvetica Neue"),
    });
    workPitchInspirationRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_inspiration",
      summary:
        "Work Pitch inspiration slide with narrative copy on the left and four right-side points.",
      labels: ["slide", "work pitch", "narrative", "story"],
      paramsSchema: _qe,
      exampleParams: {
        sectionNumber: "01",
        headlinePrimary: "The inspiration",
        headlineAccent: "behind",
        brandWord: "Title",
        body: "Use this section to describe the product inspiration and why the idea matters.",
        quote: "Add a short sentence that captures the emotional thesis.",
        rightPoints: [
          {
            label: "Point 1",
          },
          {
            label: "Point 2",
          },
          {
            label: "Point 3",
          },
          {
            label: "Point 4",
          },
        ],
      },
      run: (ri88, ri89) => {
        let rb2672 = ri88.slides.add();
        rb2672.background.fill = ri89.backgroundFill;
        let rb2673 = rb2672.theme.textStyles({
            sectionNumber: {
              typeface: ri89.typeface,
              fontSize: "text-64",
              bold: true,
              color: ri89.accentColor,
              alignment: "left",
              wrap: "none",
            },
            headline: {
              typeface: ri89.typeface,
              fontSize: "text-54",
              bold: true,
              color: ri89.textColor,
              alignment: "left",
              wrap: "square",
            },
            body: {
              typeface: "EB Garamond",
              fontSize: "text-26",
              lineSpacing: 1.2,
              color: ri89.textColor,
              alignment: "left",
              wrap: "square",
            },
            quote: {
              typeface: "EB Garamond",
              fontSize: "text-32",
              color: ri89.accentColor,
              alignment: "left",
              wrap: "square",
            },
            point: {
              typeface: ri89.typeface,
              fontSize: "text-body",
              color: ri89.textColor,
              alignment: "left",
              wrap: "none",
            },
            footerBrand: {
              typeface: ri89.typeface,
              fontSize: "text-caption",
              color: ri89.textColor,
              alignment: "left",
              wrap: "none",
            },
            footerPage: {
              typeface: ri89.typeface,
              fontSize: "text-caption",
              color: ri89.textColor,
              alignment: "right",
              wrap: "none",
            },
          }),
          rb2674 = `${ri89.headlinePrimary}\n${ri89.headlineAccent} ${ri89.brandWord}`,
          rb2675 = composeColumn(
            {
              name: "workPitchInspiration.root",
              width: "fill",
              height: "fill",
              padding: {
                x: "s-8",
                top: "s-13",
                bottom: "s-4",
              },
              align: "stretch",
              justify: "between",
            },
            [
              composeRow(
                {
                  name: "workPitchInspiration.header",
                  width: "fill",
                  align: "start",
                  gap: "s-6",
                },
                [
                  composeText(ri89.sectionNumber, {
                    name: "workPitchInspiration.sectionNumber",
                    style: rb2673.sectionNumber,
                  }),
                  composeText(rb2674, {
                    name: "workPitchInspiration.headline",
                    style: rb2673.headline,
                    width: composeWrap(540),
                  }),
                ],
              ),
              composeRow(
                {
                  name: "workPitchInspiration.content",
                  width: "fill",
                  height: "fill",
                  align: "stretch",
                  justify: "between",
                  gap: "s-10",
                  padding: {
                    top: "s-6",
                    bottom: "s-4",
                  },
                },
                [
                  composeColumn(
                    {
                      name: "workPitchInspiration.leftColumn",
                      width: composeWrap(460),
                      height: "fill",
                      align: "start",
                      justify: "between",
                      gap: "s-6",
                    },
                    [
                      composeText(ri89.body, {
                        name: "workPitchInspiration.body",
                        style: rb2673.body,
                        width: "fill",
                      }),
                      composeText(ri89.quote, {
                        name: "workPitchInspiration.quote",
                        style: rb2673.quote,
                        width: "fill",
                      }),
                    ],
                  ),
                  composeColumn(
                    {
                      name: "workPitchInspiration.points",
                      width: composeWrap(320),
                      height: "fill",
                      justify: "between",
                      align: "stretch",
                      padding: {
                        y: "s-4",
                      },
                    },
                    ri89.rightPoints.map((item) =>
                      composeRow(
                        {
                          name: `workPitchInspiration.pointRow.${item.label}`,
                          width: "fill",
                          align: "center",
                          gap: "s-2",
                        },
                        [
                          composeRule({
                            name: `workPitchInspiration.pointConnector.${item.label}`,
                            stroke: ri89.accentColor,
                            weight: 2,
                            width: "fill",
                          }),
                          composeText(item.label, {
                            name: `workPitchInspiration.pointText.${item.label}`,
                            style: rb2673.point,
                            width: composeWrap(180),
                          }),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
              composeColumn(
                {
                  name: "workPitchInspiration.footer",
                  width: "fill",
                  gap: "s-1",
                  align: "stretch",
                },
                [
                  composeRule({
                    name: "workPitchInspiration.footerLine",
                    stroke: ri89.textColor,
                    opacity: 0.24,
                    weight: 1,
                  }),
                  composeRow(
                    {
                      name: "workPitchInspiration.footerRow",
                      width: "fill",
                      align: "center",
                      justify: "between",
                    },
                    [
                      composeText(ri89.footerBrand, {
                        name: "workPitchInspiration.footerBrand",
                        style: rb2673.footerBrand,
                      }),
                      composeText(ri89.footerPage, {
                        name: "workPitchInspiration.footerPage",
                        style: rb2673.footerPage,
                      }),
                    ],
                  ),
                ],
              ),
            ],
          ),
          rb2676 = rb2672
            .compose(rb2675, {
              baseUnit: 1,
            })
            .find((item) => item.name === "workPitchInspiration.headline");
        if (rb2676?.type === "shape") {
          let rb17629 = rb2676.text.get(ri89.headlineAccent);
          rb17629.bold = false;
          rb17629.color = ri89.accentColor;
          let rb17630 = rb2676.text.get(ri89.brandWord);
          rb17630.bold = false;
          rb17630.color = ri89.accentColor;
          rb17630.fontSize = 58;
        }
      },
    });
  }
  // _ensure_Tqe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    bqe = zodObject({
      label: zodString().min(1),
      previousValue: zodNumber().nonnegative(),
      currentValue: zodNumber().nonnegative(),
    });
    xqe = zodObject({
      sectionNumber: zodString().min(1).default("03"),
      heading: zodString().min(1).default("The market is ready for a"),
      headingAccent: zodString().min(1).default("new kind of glow"),
      narrative: zodString()
        .min(1)
        .default(
          "Use this paragraph to describe market momentum and demand for the category.",
        ),
      chartTitle: zodString()
        .min(1)
        .default("Projected market demand for natural glow products"),
      quarters: zodArray(bqe)
        .length(4)
        .default([
          {
            label: "Q1",
            previousValue: 2800,
            currentValue: 3850,
          },
          {
            label: "Q2",
            previousValue: 3050,
            currentValue: 4180,
          },
          {
            label: "Q3",
            previousValue: 3320,
            currentValue: 4520,
          },
          {
            label: "Q4",
            previousValue: 3600,
            currentValue: 4910,
          },
        ]),
      backgroundFill: zodString().min(1).default("background1"),
      bandFill: zodString().min(1).default("accent1"),
      barPreviousFill: zodString().min(1).default("white"),
      barCurrentFill: zodString().min(1).default("tx1"),
      textColor: zodString().min(1).default("tx1"),
      inverseTextColor: zodString().min(1).default("white"),
      footerBrand: zodString().min(1).default("Brand"),
      footerPage: zodString().min(1).default("06"),
      typeface: zodString().min(1).default("Helvetica Neue"),
    });
    workPitchMarketGrowthRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_market_growth",
      summary:
        "Work Pitch market slide with paired quarter bars and a supporting narrative block.",
      labels: ["slide", "work pitch", "market", "chart"],
      paramsSchema: xqe,
      exampleParams: {
        sectionNumber: "03",
        heading: "The market is ready for a",
        headingAccent: "new kind of glow",
        narrative:
          "Use this paragraph to describe market momentum and demand for the category.",
        chartTitle: "Projected market demand for natural glow products",
        quarters: [
          {
            label: "Q1",
            previousValue: 2800,
            currentValue: 3850,
          },
          {
            label: "Q2",
            previousValue: 3050,
            currentValue: 4180,
          },
          {
            label: "Q3",
            previousValue: 3320,
            currentValue: 4520,
          },
          {
            label: "Q4",
            previousValue: 3600,
            currentValue: 4910,
          },
        ],
      },
      run: (ri72, ri73) => {
        let rb2583 = ri72.slides.add();
        rb2583.background.fill = ri73.backgroundFill;
        let rb2584 = marketGrowthCard(rb2583.frame),
          rb2585 = marketGrowthTextStyle(rb2583.frame);
        rb2583.compose(
          composeShape({
            name: "workPitchMarketGrowth.bandBackground",
            geometry: "rect",
            fill: ri73.bandFill,
            line: {
              style: "solid",
              width: 0,
              fill: ri73.bandFill,
            },
            width: "fill",
            height: "fill",
          }),
          {
            frame: rb2584,
            baseUnit: 1,
          },
        );
        let rb2586 = rb2583.theme.textStyles({
            sectionNumber: {
              typeface: ri73.typeface,
              fontSize: "text-64",
              bold: true,
              color: ri73.bandFill,
              alignment: "left",
              wrap: "none",
            },
            heading: {
              typeface: "EB Garamond",
              fontSize: "text-54",
              color: ri73.textColor,
              alignment: "left",
              wrap: "square",
            },
            narrative: {
              typeface: "EB Garamond",
              fontSize: "text-24",
              lineSpacing: 1.2,
              color: ri73.textColor,
              alignment: "left",
              wrap: "square",
            },
            chartTitle: {
              typeface: ri73.typeface,
              fontSize: "text-16",
              color: ri73.inverseTextColor,
              alignment: "left",
              wrap: "square",
            },
            barLabel: {
              typeface: ri73.typeface,
              fontSize: "text-11",
              color: ri73.inverseTextColor,
              alignment: "center",
              wrap: "none",
            },
            footerBrand: {
              typeface: ri73.typeface,
              fontSize: "text-caption",
              color: ri73.inverseTextColor,
              alignment: "left",
              wrap: "none",
            },
            footerPage: {
              typeface: ri73.typeface,
              fontSize: "text-caption",
              color: ri73.inverseTextColor,
              alignment: "right",
              wrap: "none",
            },
          }),
          rb2587 = `${ri73.heading}\n${ri73.headingAccent}`,
          rb2588 = composeColumn(
            {
              name: "workPitchMarketGrowth.root",
              width: "fill",
              height: "fill",
              padding: {
                x: "s-8",
                top: "s-13",
                bottom: "s-4",
              },
              align: "stretch",
              justify: "between",
            },
            [
              composeRow(
                {
                  name: "workPitchMarketGrowth.header",
                  width: "fill",
                  align: "start",
                  gap: "s-6",
                },
                [
                  composeText(ri73.sectionNumber, {
                    name: "workPitchMarketGrowth.sectionNumber",
                    style: rb2586.sectionNumber,
                  }),
                  composeText(rb2587, {
                    name: "workPitchMarketGrowth.heading",
                    style: rb2586.heading,
                    width: composeWrap(700),
                  }),
                ],
              ),
              composeRow(
                {
                  name: "workPitchMarketGrowth.content",
                  width: "fill",
                  height: "fill",
                  align: "start",
                  justify: "between",
                  padding: {
                    top: "s-4",
                    bottom: "s-4",
                  },
                },
                [
                  composeText(ri73.narrative, {
                    name: "workPitchMarketGrowth.narrative",
                    style: rb2586.narrative,
                    width: composeWrap(460),
                  }),
                ],
              ),
              composeColumn(
                {
                  name: "workPitchMarketGrowth.footer",
                  width: "fill",
                  gap: "s-1",
                  align: "stretch",
                },
                [
                  composeRule({
                    name: "workPitchMarketGrowth.footerLine",
                    stroke: ri73.inverseTextColor,
                    opacity: 0.24,
                    weight: 1,
                  }),
                  composeRow(
                    {
                      name: "workPitchMarketGrowth.footerRow",
                      width: "fill",
                      align: "center",
                      justify: "between",
                    },
                    [
                      composeText(ri73.footerBrand, {
                        name: "workPitchMarketGrowth.footerBrand",
                        style: rb2586.footerBrand,
                      }),
                      composeText(ri73.footerPage, {
                        name: "workPitchMarketGrowth.footerPage",
                        style: rb2586.footerPage,
                      }),
                    ],
                  ),
                ],
              ),
            ],
          ),
          rb2589 = rb2583
            .compose(rb2588, {
              baseUnit: 1,
            })
            .find((item) => item.name === "workPitchMarketGrowth.heading");
        if (rb2589?.type === "shape") {
          let rb21969 = rb2589.text.get(ri73.headingAccent);
          rb21969.color = ri73.bandFill;
        }
        let rb2590 = Math.max(
          ...ri73.quarters.map((item) =>
            Math.max(item.previousValue, item.currentValue),
          ),
          1,
        );
        ri73.quarters.forEach((item, index) => {
          let rb3969 = rb2585.width / ri73.quarters.length,
            rb3970 = rb2585.left + index * rb3969,
            rb3971 = Math.min(90, rb3969 * 0.33),
            rb3972 = rb3970 + rb3969 * 0.12,
            rb3973 = rb3970 + rb3969 * 0.55,
            rb3974 = (item.previousValue / rb2590) * rb2585.height,
            rb3975 = (item.currentValue / rb2590) * rb2585.height;
          rb2583.compose(
            composeShape({
              name: `workPitchMarketGrowth.bar.previous.${item.label}`,
              geometry: "rect",
              fill: ri73.barPreviousFill,
              line: {
                style: "solid",
                width: 0,
                fill: ri73.barPreviousFill,
              },
              width: "fill",
              height: "fill",
            }),
            {
              frame: {
                left: rb3972,
                top: rb2585.top + (rb2585.height - rb3974),
                width: rb3971,
                height: rb3974,
              },
              baseUnit: 1,
            },
          );
          rb2583.compose(
            composeShape({
              name: `workPitchMarketGrowth.bar.current.${item.label}`,
              geometry: "rect",
              fill: ri73.barCurrentFill,
              line: {
                style: "solid",
                width: 0,
                fill: ri73.barCurrentFill,
              },
              width: "fill",
              height: "fill",
            }),
            {
              frame: {
                left: rb3973,
                top: rb2585.top + (rb2585.height - rb3975),
                width: rb3971,
                height: rb3975,
              },
              baseUnit: 1,
            },
          );
          rb2583.compose(
            composeText(
              `${item.label}-Prev\n$${item.previousValue.toLocaleString()}`,
              {
                name: `workPitchMarketGrowth.label.previous.${item.label}`,
                style: rb2586.barLabel,
                width: "fill",
                height: "fill",
              },
            ),
            {
              frame: {
                left: rb3972,
                top: rb2584.top + rb2584.height * 0.16,
                width: rb3971,
                height: rb2584.height * 0.26,
              },
              baseUnit: 1,
            },
          );
          rb2583.compose(
            composeText(
              `${item.label}-Now\n$${item.currentValue.toLocaleString()}`,
              {
                name: `workPitchMarketGrowth.label.current.${item.label}`,
                style: rb2586.barLabel,
                width: "fill",
                height: "fill",
              },
            ),
            {
              frame: {
                left: rb3973,
                top: rb2584.top + rb2584.height * 0.5,
                width: rb3971,
                height: rb2584.height * 0.26,
              },
              baseUnit: 1,
            },
          );
        });
        rb2583.compose(
          composeText(ri73.chartTitle, {
            name: "workPitchMarketGrowth.chartTitle",
            style: rb2586.chartTitle,
            width: "fill",
            height: "fill",
          }),
          {
            frame: {
              left: rb2584.left + rb2584.width * 0.05,
              top: rb2584.top + rb2584.height * 0.2,
              width: rb2584.width * 0.28,
              height: rb2584.height * 0.34,
            },
            baseUnit: 1,
          },
        );
      },
    });
    marketGrowthCard = (props) => ({
      left: props.left,
      top: props.top + props.height * 0.765,
      width: props.width,
      height: props.height * 0.235,
    });
    marketGrowthTextStyle = (ri9475) => ({
      left: ri9475.left + ri9475.width * 0.33,
      top: ri9475.top + ri9475.height * 0.37,
      width: ri9475.width * 0.61,
      height: ri9475.height * 0.39,
    });
  }

  registerPresentationRecipes(
    [workPitchInspirationRecipe, workPitchMarketGrowthRecipe].filter(Boolean),
  );
});
