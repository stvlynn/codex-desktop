// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: compose work_pitch revenue/style_guide.
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

export const ensureComposePitchDRecipesInit = esmInit(() => {
  ensureDefineRecipeInit();
  let Bqe: any;
  let Vqe: any;
  let workPitchRevenueMixRecipe: any;
  let revenueMixCard: any;
  let revenueMixTextStyle: any;
  let Kqe: any;
  let qqe: any;
  let workPitchStyleGuideRecipe: any;

  // _ensure_Gqe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    Bqe = zodObject({
      label: zodString().min(1),
      value: zodNumber().nonnegative(),
    });
    Vqe = zodObject({
      sectionNumber: zodString().min(1).default("05"),
      headingPrimary: zodString().min(1).default("How this business"),
      headingAccent: zodString().min(1).default("makes money"),
      narrative: zodString()
        .min(1)
        .default(
          "Use this section to describe the revenue model and the role of each channel.",
        ),
      segments: zodArray(Bqe)
        .length(5)
        .default([
          {
            label: "Direct-to-consumer",
            value: 62,
          },
          {
            label: "Retail partners",
            value: 22,
          },
          {
            label: "Subscription box",
            value: 10,
          },
          {
            label: "Limited editions",
            value: 4,
          },
          {
            label: "Collaborations",
            value: 2,
          },
        ]),
      backgroundFill: zodString().min(1).default("background1"),
      leftPanelFill: zodString().min(1).default("accent1"),
      textColor: zodString().min(1).default("tx1"),
      inverseTextColor: zodString().min(1).default("white"),
      accentColor: zodString().min(1).default("accent1"),
      footerBrand: zodString().min(1).default("Brand"),
      footerPage: zodString().min(1).default("08"),
      typeface: zodString().min(1).default("Helvetica Neue"),
    });
    workPitchRevenueMixRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_revenue_mix",
      summary:
        "Work Pitch revenue slide with left-side narrative and right-side pie chart with five channel callouts.",
      labels: ["slide", "work pitch", "revenue", "chart"],
      paramsSchema: Vqe,
      exampleParams: {
        sectionNumber: "05",
        headingPrimary: "How this business",
        headingAccent: "makes money",
        narrative:
          "Use this section to describe the revenue model and the role of each channel.",
        segments: [
          {
            label: "Direct-to-consumer",
            value: 62,
          },
          {
            label: "Retail partners",
            value: 22,
          },
          {
            label: "Subscription box",
            value: 10,
          },
          {
            label: "Limited editions",
            value: 4,
          },
          {
            label: "Collaborations",
            value: 2,
          },
        ],
      },
      run: (ri75, ri76) => {
        let rb2591 = ri75.slides.add();
        rb2591.background.fill = ri76.backgroundFill;
        let rb2592 = revenueMixCard(rb2591.frame),
          rb2593 = revenueMixTextStyle(rb2591.frame);
        rb2591.compose(
          composeShape({
            name: "workPitchRevenueMix.leftPanelBackground",
            geometry: "rect",
            fill: ri76.leftPanelFill,
            line: {
              style: "solid",
              width: 0,
              fill: ri76.leftPanelFill,
            },
            width: "fill",
            height: "fill",
          }),
          {
            frame: rb2592,
            baseUnit: 1,
          },
        );
        let rb2594 = rb2591.theme.textStyles({
            sectionNumber: {
              typeface: ri76.typeface,
              fontSize: "text-64",
              bold: true,
              color: ri76.inverseTextColor,
              alignment: "left",
              wrap: "none",
            },
            heading: {
              typeface: "EB Garamond",
              fontSize: "text-54",
              color: ri76.inverseTextColor,
              alignment: "left",
              wrap: "square",
            },
            narrative: {
              typeface: "EB Garamond",
              fontSize: "text-22",
              lineSpacing: 1.2,
              color: ri76.inverseTextColor,
              alignment: "left",
              wrap: "square",
            },
            callout: {
              typeface: ri76.typeface,
              fontSize: "text-12",
              bold: true,
              color: ri76.textColor,
              alignment: "left",
              wrap: "square",
            },
            footerBrand: {
              typeface: ri76.typeface,
              fontSize: "text-caption",
              color: ri76.textColor,
              alignment: "left",
              wrap: "none",
            },
            footerPage: {
              typeface: ri76.typeface,
              fontSize: "text-caption",
              color: ri76.textColor,
              alignment: "right",
              wrap: "none",
            },
          }),
          rb2595 = `${ri76.headingPrimary}\n${ri76.headingAccent}`,
          [rb2596] = rb2591.compose(
            composeChart({
              name: "workPitchRevenueMix.pieChart",
              chartType: "pie",
              width: "fill",
              height: "fill",
            }),
            {
              frame: rb2593,
              baseUnit: 1,
            },
          );
        if (rb2596?.type !== "chart") return;
        rb2596.categories = ri76.segments.map((item) => item.label);
        rb2596.title = "";
        rb2596.hasLegend = false;
        let rb2597 = rb2596.series.add("Revenue mix");
        rb2597.values = ri76.segments.map((item) => item.value);
        rb2597.categories = ri76.segments.map((item) => item.label);
        rb2597.valuesFormatCode = "0%";
        rb2597.explosion = 10;
        rb2596.pieOptions.firstSliceAngle = 90;
        rb2596.dataLabels.showPercent = true;
        rb2596.dataLabels.showCategoryName = false;
        rb2596.dataLabels.showValue = false;
        rb2596.dataLabels.position = "outEnd";
        rb2596.dataLabels.showLeaderLines = true;
        rb2596.dataLabels.textStyle.fontSize = 11;
        rb2596.dataLabels.textStyle.fill = ri76.textColor;
        let rb2598 = composeColumn(
          {
            name: "workPitchRevenueMix.root",
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
                name: "workPitchRevenueMix.content",
                width: "fill",
                height: "fill",
                align: "stretch",
                justify: "between",
                gap: "s-8",
              },
              [
                composeColumn(
                  {
                    name: "workPitchRevenueMix.leftColumn",
                    width: composeWrap(rb2592.width - 96),
                    height: "fill",
                    align: "start",
                    justify: "between",
                    padding: {
                      top: "s-1",
                      bottom: "s-6",
                    },
                  },
                  [
                    composeRow(
                      {
                        name: "workPitchRevenueMix.headingRow",
                        width: "fill",
                        align: "start",
                        gap: "s-4",
                      },
                      [
                        composeText(ri76.sectionNumber, {
                          name: "workPitchRevenueMix.sectionNumber",
                          style: rb2594.sectionNumber,
                        }),
                        composeText(rb2595, {
                          name: "workPitchRevenueMix.heading",
                          style: rb2594.heading,
                          width: "fill",
                        }),
                      ],
                    ),
                    composeText(ri76.narrative, {
                      name: "workPitchRevenueMix.narrative",
                      style: rb2594.narrative,
                      width: "fill",
                    }),
                  ],
                ),
                composeColumn(
                  {
                    name: "workPitchRevenueMix.rightColumn",
                    width: "fill",
                    height: "fill",
                    align: "stretch",
                    justify: "end",
                    padding: {
                      bottom: "s-6",
                    },
                  },
                  [
                    composeGrid(
                      {
                        name: "workPitchRevenueMix.callouts",
                        width: "fill",
                        columns: composeRepeat(3, composeFr(1)),
                        rows: composeRepeat(2, "auto"),
                        columnGap: "s-3",
                        rowGap: "s-3",
                        justifyItems: "stretch",
                        alignItems: "start",
                      },
                      ri76.segments.map((item) =>
                        composeRow(
                          {
                            name: `workPitchRevenueMix.callout.${item.label}`,
                            width: "fill",
                            align: "center",
                            gap: "s-1",
                          },
                          [
                            composeRule({
                              name: `workPitchRevenueMix.calloutDot.${item.label}`,
                              stroke: ri76.accentColor,
                              width: composeFixed(14),
                              height: composeFixed(14),
                              weight: 14,
                            }),
                            composeText(
                              `${item.value}% ${item.label}`.toUpperCase(),
                              {
                                name: `workPitchRevenueMix.calloutText.${item.label}`,
                                style: rb2594.callout,
                                width: "fill",
                              },
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
            composeColumn(
              {
                name: "workPitchRevenueMix.footer",
                width: "fill",
                gap: "s-1",
                align: "stretch",
              },
              [
                composeRule({
                  name: "workPitchRevenueMix.footerLine",
                  stroke: ri76.textColor,
                  opacity: 0.24,
                  weight: 1,
                }),
                composeRow(
                  {
                    name: "workPitchRevenueMix.footerRow",
                    width: "fill",
                    align: "center",
                    justify: "between",
                  },
                  [
                    composeText(ri76.footerBrand, {
                      name: "workPitchRevenueMix.footerBrand",
                      style: rb2594.footerBrand,
                    }),
                    composeText(ri76.footerPage, {
                      name: "workPitchRevenueMix.footerPage",
                      style: rb2594.footerPage,
                    }),
                  ],
                ),
              ],
            ),
          ],
        );
        rb2591.compose(rb2598, {
          baseUnit: 1,
        });
      },
    });
    revenueMixCard = (props) => ({
      left: props.left,
      top: props.top,
      width: props.width * 0.42,
      height: props.height,
    });
    revenueMixTextStyle = (props) => ({
      left: props.left + props.width * 0.53,
      top: props.top + props.height * 0.12,
      width: props.width * 0.45,
      height: props.height * 0.54,
    });
  }
  // _ensure_Yqe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    Kqe = zodObject({
      name: zodString().min(1),
      color: zodString().min(1),
      tokenLabel: zodString().min(1),
    });
    qqe = zodObject({
      title: zodString().min(1).default("STYLE GUIDE"),
      subtitle: zodString().min(1).default("& font guide"),
      swatches: zodArray(Kqe)
        .length(5)
        .default([
          {
            name: "Accent One",
            color: "accent1",
            tokenLabel: "accent1",
          },
          {
            name: "Background",
            color: "background1",
            tokenLabel: "background1",
          },
          {
            name: "Accent Two",
            color: "accent2",
            tokenLabel: "accent2",
          },
          {
            name: "Accent Three",
            color: "accent3",
            tokenLabel: "accent3",
          },
          {
            name: "Text",
            color: "tx1",
            tokenLabel: "tx1",
          },
        ]),
      displayBrand: zodString().min(1).default("COMPANY NAME & LOGO"),
      displayPageLabel: zodString().min(1).default("PAGE NUMBER"),
      headlineSample: zodString().min(1).default("Super Title"),
      headlineTypefaceLabel: zodString()
        .min(1)
        .default("Helvetica Neue 54 pts"),
      subheadlineSample: zodString().min(1).default("Secondary Title"),
      subheadlineTypefaceLabel: zodString()
        .min(1)
        .default("EB Garamond 54 pts"),
      bodySample: zodString()
        .min(1)
        .default(
          "Use this block to document body typography, paragraph rhythm, and brand tone.",
        ),
      backgroundFill: zodString().min(1).default("background1"),
      titleColor: zodString().min(1).default("accent1"),
      textColor: zodString().min(1).default("tx1"),
      typeface: zodString().min(1).default("Helvetica Neue"),
    });
    workPitchStyleGuideRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_style_guide",
      summary:
        "Work Pitch style guide slide with five color swatches and typography samples.",
      labels: ["slide", "work pitch", "style guide", "branding"],
      paramsSchema: qqe,
      exampleParams: {
        title: "STYLE GUIDE",
        subtitle: "& font guide",
        swatches: [
          {
            name: "Accent One",
            color: "accent1",
            tokenLabel: "accent1",
          },
          {
            name: "Background",
            color: "background1",
            tokenLabel: "background1",
          },
          {
            name: "Accent Two",
            color: "accent2",
            tokenLabel: "accent2",
          },
          {
            name: "Accent Three",
            color: "accent3",
            tokenLabel: "accent3",
          },
          {
            name: "Text",
            color: "tx1",
            tokenLabel: "tx1",
          },
        ],
        displayBrand: "COMPANY NAME & LOGO",
        displayPageLabel: "PAGE NUMBER",
        headlineSample: "Super Title",
        headlineTypefaceLabel: "Helvetica Neue 54 pts",
        subheadlineSample: "Secondary Title",
        subheadlineTypefaceLabel: "EB Garamond 54 pts",
        bodySample:
          "Use this block to document body typography, paragraph rhythm, and brand tone.",
      },
      run: (ri70, ri71) => {
        let rb2579 = ri70.slides.add();
        rb2579.background.fill = ri71.backgroundFill;
        let rb2580 = rb2579.theme.textStyles({
            title: {
              typeface: ri71.typeface,
              fontSize: "text-56",
              bold: true,
              color: ri71.titleColor,
              alignment: "center",
              wrap: "none",
            },
            subtitle: {
              typeface: "EB Garamond",
              fontSize: "text-34",
              color: ri71.textColor,
              alignment: "center",
              wrap: "none",
            },
            swatchName: {
              typeface: ri71.typeface,
              fontSize: "text-26",
              color: ri71.textColor,
              alignment: "left",
              wrap: "none",
            },
            swatchToken: {
              typeface: ri71.typeface,
              fontSize: "text-24",
              color: ri71.textColor,
              alignment: "left",
              wrap: "none",
            },
            headlineSample: {
              typeface: ri71.typeface,
              fontSize: "text-54",
              bold: true,
              color: ri71.textColor,
              alignment: "left",
              wrap: "none",
            },
            headlineLabel: {
              typeface: ri71.typeface,
              fontSize: "text-16",
              color: ri71.textColor,
              alignment: "left",
              wrap: "none",
            },
            subheadlineSample: {
              typeface: "EB Garamond",
              fontSize: "text-54",
              color: ri71.textColor,
              alignment: "left",
              wrap: "none",
            },
            body: {
              typeface: "EB Garamond",
              fontSize: "text-24",
              lineSpacing: 1.2,
              color: ri71.textColor,
              alignment: "left",
              wrap: "square",
            },
            footerBrand: {
              typeface: ri71.typeface,
              fontSize: "text-caption",
              color: ri71.textColor,
              alignment: "left",
              wrap: "none",
            },
            footerPage: {
              typeface: ri71.typeface,
              fontSize: "text-caption",
              color: ri71.textColor,
              alignment: "right",
              wrap: "none",
            },
          }),
          rb2581 = composeColumn(
            {
              name: "workPitchStyleGuide.root",
              width: "fill",
              height: "fill",
              padding: {
                x: "s-8",
                top: "s-12",
                bottom: "s-4",
              },
              align: "stretch",
              justify: "between",
            },
            [
              composeColumn(
                {
                  name: "workPitchStyleGuide.header",
                  width: "fill",
                  align: "center",
                  gap: "s-1",
                },
                [
                  composeText(ri71.title, {
                    name: "workPitchStyleGuide.title",
                    style: rb2580.title,
                  }),
                  composeText(ri71.subtitle, {
                    name: "workPitchStyleGuide.subtitle",
                    style: rb2580.subtitle,
                  }),
                ],
              ),
              composeRow(
                {
                  name: "workPitchStyleGuide.content",
                  width: "fill",
                  height: "fill",
                  align: "stretch",
                  justify: "between",
                  gap: "s-10",
                  padding: {
                    top: "s-2",
                    bottom: "s-3",
                  },
                },
                [
                  composeColumn(
                    {
                      name: "workPitchStyleGuide.swatches",
                      width: composeWrap(500),
                      height: "fill",
                      align: "stretch",
                      justify: "between",
                      padding: {
                        y: "s-2",
                      },
                    },
                    ri71.swatches.map((item, index) =>
                      composeRow(
                        {
                          name: `workPitchStyleGuide.swatchRow.${index}`,
                          width: "fill",
                          align: "center",
                          gap: "s-6",
                        },
                        [
                          composeText(item.name, {
                            name: `workPitchStyleGuide.swatchName.${index}`,
                            style: rb2580.swatchName,
                            width: composeWrap(210),
                          }),
                          composeText(item.tokenLabel, {
                            name: `workPitchStyleGuide.swatchToken.${index}`,
                            style: rb2580.swatchToken,
                            width: composeWrap(170),
                          }),
                        ],
                      ),
                    ),
                  ),
                  composeColumn(
                    {
                      name: "workPitchStyleGuide.typeScale",
                      width: composeWrap(520),
                      height: "fill",
                      align: "start",
                      justify: "between",
                    },
                    [
                      composeText(ri71.headlineSample, {
                        name: "workPitchStyleGuide.headlineSample",
                        style: rb2580.headlineSample,
                        width: "fill",
                      }),
                      composeText(ri71.headlineTypefaceLabel, {
                        name: "workPitchStyleGuide.headlineLabel",
                        style: rb2580.headlineLabel,
                        width: "fill",
                      }),
                      composeText(ri71.subheadlineSample, {
                        name: "workPitchStyleGuide.subheadlineSample",
                        style: rb2580.subheadlineSample,
                        width: "fill",
                      }),
                      composeText(ri71.subheadlineTypefaceLabel, {
                        name: "workPitchStyleGuide.subheadlineLabel",
                        style: rb2580.headlineLabel,
                        width: "fill",
                      }),
                      composeText(ri71.bodySample, {
                        name: "workPitchStyleGuide.body",
                        style: rb2580.body,
                        width: "fill",
                      }),
                    ],
                  ),
                ],
              ),
              composeColumn(
                {
                  name: "workPitchStyleGuide.footer",
                  width: "fill",
                  gap: "s-1",
                  align: "stretch",
                },
                [
                  composeRule({
                    name: "workPitchStyleGuide.footerLine",
                    stroke: ri71.textColor,
                    opacity: 0.24,
                    weight: 1,
                  }),
                  composeRow(
                    {
                      name: "workPitchStyleGuide.footerRow",
                      width: "fill",
                      align: "center",
                      justify: "between",
                    },
                    [
                      composeText(ri71.displayBrand, {
                        name: "workPitchStyleGuide.footerBrand",
                        style: rb2580.footerBrand,
                      }),
                      composeText(ri71.displayPageLabel, {
                        name: "workPitchStyleGuide.footerPage",
                        style: rb2580.footerPage,
                      }),
                    ],
                  ),
                ],
              ),
            ],
          ),
          rb2582 = rb2579.compose(rb2581, {
            baseUnit: 1,
          });
        ri71.swatches.forEach((item, index) => {
          let rb8501 = rb2582.find(
            (_item) => _item.name === `workPitchStyleGuide.swatchName.${index}`,
          )?.frame;
          !rb8501 ||
            rb8501.left === undefined ||
            rb8501.top === undefined ||
            rb8501.height === undefined ||
            rb2579.compose(
              composeShape({
                name: `workPitchStyleGuide.swatchCircle.${index}`,
                geometry: "ellipse",
                fill: item.color,
                line: {
                  style: "solid",
                  width: 1.333,
                  fill: ri71.textColor,
                },
                width: "fill",
                height: "fill",
              }),
              {
                frame: {
                  left: rb8501.left - 96,
                  top: rb8501.top + (rb8501.height - 64) / 2,
                  width: 64,
                  height: 64,
                },
                baseUnit: 1,
              },
            );
        });
      },
    });
  }

  registerPresentationRecipes(
    [workPitchRevenueMixRecipe, workPitchStyleGuideRecipe].filter(Boolean),
  );
});
