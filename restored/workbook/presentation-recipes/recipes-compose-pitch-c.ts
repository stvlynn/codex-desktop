// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: compose work_pitch opening/problem/product.
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

export const ensureComposePitchCRecipesInit = esmInit(() => {
  ensureDefineRecipeInit();
  let Eqe: any;
  let rb1802: any;
  let workPitchOpeningMarkRecipe: any;
  let openingMarkCard: any;
  let openingMarkTextStyle: any;
  let openingMarkBadge: any;
  let Mqe: any;
  let Nqe: any;
  let workPitchProblemRecipe: any;
  let Iqe: any;
  let Lqe: any;
  let workPitchProductProofRecipe: any;

  // _ensure_jqe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    Eqe = zodObject({
      backgroundImage: zodString().min(1),
      panelFill: zodString().min(1).default("accent1"),
      wordmarkLeft: zodString().min(1).default("FIGL"),
      wordmarkRight: zodString().min(1).default("W"),
      wordmarkColor: zodString().min(1).default("white"),
      wordmarkFontSize: zodNumber().min(32).max(220).default(96),
      emblemColor: zodString().min(1).default("white"),
      deckLabel: zodString().min(1).default("PITCH DECK"),
      tableCells: zodArray(zodString().min(1))
        .length(6)
        .default([
          "Header 1",
          "Header 2",
          "Header 3",
          "Value 1",
          "Value 2",
          "Value 3",
        ]),
      tableTextColor: zodString().min(1).default("white"),
      tableHeaderFontSize: zodNumber().min(8).max(72).default(12),
      tableBodyFontSize: zodNumber().min(8).max(72).default(11),
      typeface: zodString().min(1).default("Helvetica Neue"),
    });
    rb1802 = {
      ringSize: 30,
      dotSize: 4.5,
      radius: 26,
      dotCount: 12,
    };
    workPitchOpeningMarkRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_opening_mark",
      summary:
        "Work Pitch opening layout with split wordmark, emblem, deck label, and 2x3 table.",
      labels: ["slide", "work pitch", "branding", "cover", "layout"],
      paramsSchema: Eqe,
      exampleParams: {
        backgroundImage: "tests/presentation/assets/checkerboard.png",
        panelFill: "accent1",
        wordmarkLeft: "FIGL",
        wordmarkRight: "W",
        tableCells: [
          "Header 1",
          "Header 2",
          "Header 3",
          "Value 1",
          "Value 2",
          "Value 3",
        ],
      },
      run: (ri163, ri164) => {
        let rb2956 = ri163.slides.add(),
          rb2957 = ri164.backgroundImage.trim(),
          rb2958 = rb2957.startsWith("data:")
            ? {
                dataUrl: rb2957,
              }
            : {
                path: rb2957,
              };
        rb2956.compose(
          composeImage({
            name: "workPitchOpeningMark.background",
            ...rb2958,
            fit: "cover",
            alt: "Work Pitch background image",
            width: "fill",
            height: "fill",
          }),
          {
            frame: rb2956.frame,
            baseUnit: 1,
          },
        );
        let rb2959 = openingMarkCard(rb2956.frame),
          rb2960 = openingMarkTextStyle(rb2959),
          rb2961 = openingMarkBadge(rb2959);
        rb2956.compose(
          composeShape({
            name: "workPitchOpeningMark.panelBackground",
            geometry: "rect",
            fill: ri164.panelFill,
            line: {
              style: "solid",
              width: 0,
              fill: ri164.panelFill,
            },
            width: "fill",
            height: "fill",
          }),
          {
            frame: rb2959,
            baseUnit: 1,
          },
        );
        let rb2962 = rb2956.theme.textStyles({
            wordmark: {
              typeface: ri164.typeface,
              fontSize: ri164.wordmarkFontSize,
              bold: true,
              color: ri164.wordmarkColor,
              alignment: "center",
              wrap: "none",
            },
            deckLabel: {
              typeface: ri164.typeface,
              fontSize: "text-14",
              color: ri164.wordmarkColor,
              alignment: "center",
              wrap: "none",
            },
          }),
          rb2963 = composeColumn(
            {
              name: "workPitchOpeningMark.panel",
              width: "fill",
              height: "fill",
              padding: {
                x: "s-10",
                top: "s-16",
                bottom: "s-20",
              },
              justify: "between",
              align: "stretch",
            },
            [
              composeRow(
                {
                  name: "workPitchOpeningMark.wordmarkRow",
                  width: "fill",
                  align: "center",
                  justify: "between",
                },
                [
                  composeText(ri164.wordmarkLeft, {
                    name: "workPitchOpeningMark.wordmarkLeft",
                    style: rb2962.wordmark,
                    width: composeWrap(rb2959.width * 0.42),
                  }),
                  composeText(ri164.wordmarkRight, {
                    name: "workPitchOpeningMark.wordmarkRight",
                    style: rb2962.wordmark,
                    width: composeWrap(rb2959.width * 0.28),
                  }),
                ],
              ),
              composeText(ri164.deckLabel, {
                name: "workPitchOpeningMark.deckLabel",
                style: rb2962.deckLabel,
                width: "fill",
              }),
            ],
          );
        rb2956.compose(rb2963, {
          frame: rb2959,
          baseUnit: 1,
        });
        rb2956.compose(
          composeShape({
            name: "workPitchOpeningMark.emblemRing",
            geometry: "ellipse",
            fill: "none",
            line: {
              style: "solid",
              width: 2,
              fill: ri164.emblemColor,
            },
            width: "fill",
            height: "fill",
          }),
          {
            frame: {
              left: rb2961.x - rb1802.ringSize / 2,
              top: rb2961.y - rb1802.ringSize / 2,
              width: rb1802.ringSize,
              height: rb1802.ringSize,
            },
            baseUnit: 1,
          },
        );
        for (let rb9092 = 0; rb9092 < rb1802.dotCount; rb9092 += 1) {
          let rb9473 = (rb9092 / rb1802.dotCount) * Math.PI * 2,
            rb9474 =
              rb2961.x + Math.cos(rb9473) * rb1802.radius - rb1802.dotSize / 2,
            rb9475 =
              rb2961.y + Math.sin(rb9473) * rb1802.radius - rb1802.dotSize / 2;
          rb2956.compose(
            composeShape({
              name: `workPitchOpeningMark.emblemDot.${rb9092 + 1}`,
              geometry: "ellipse",
              fill: ri164.emblemColor,
              line: {
                style: "solid",
                width: 0,
                fill: ri164.emblemColor,
              },
              width: "fill",
              height: "fill",
            }),
            {
              frame: {
                left: rb9474,
                top: rb9475,
                width: rb1802.dotSize,
                height: rb1802.dotSize,
              },
              baseUnit: 1,
            },
          );
        }
        let [rb2964] = rb2956.compose(
          composeTable({
            name: "workPitchOpeningMark.metricsTable",
            rows: 2,
            columns: 3,
            values: [
              ri164.tableCells.slice(0, 3),
              ri164.tableCells.slice(3, 6),
            ],
            style: "{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}",
            styleOptions: {
              headerRow: true,
              bandedRows: true,
              firstColumn: false,
              lastColumn: false,
              bandedColumns: false,
              totalRow: false,
            },
            width: "fill",
            height: "fill",
          }),
          {
            frame: rb2960,
            baseUnit: 1,
          },
        );
        if (rb2964?.type === "table")
          for (let rb12387 = 0; rb12387 < 2; rb12387 += 1)
            for (let rb13033 = 0; rb13033 < 3; rb13033 += 1) {
              let rb13612 = rb2964.getCell(rb12387, rb13033);
              rb13612.anchor = "ctr";
              rb13612.text.style = {
                bold: rb12387 === 0,
                fontSize:
                  rb12387 === 0
                    ? ri164.tableHeaderFontSize
                    : ri164.tableBodyFontSize,
                color: ri164.tableTextColor,
                alignment: "center",
                typeface: ri164.typeface,
              };
            }
      },
      notes: [
        "Pass six tableCells values in row-major order: top-left to bottom-right.",
      ],
    });
    openingMarkCard = (props) => ({
      left: props.left + props.width * 0.2,
      top: props.top + props.height * 0.2,
      width: props.width * 0.6,
      height: props.height * 0.6,
    });
    openingMarkTextStyle = (ri9476) => ({
      left: ri9476.left + ri9476.width * 0.07,
      top: ri9476.top + ri9476.height * 0.63,
      width: ri9476.width * 0.86,
      height: ri9476.height * 0.18,
    });
    openingMarkBadge = (props) => ({
      x: props.left + props.width * 0.5,
      y: props.top + props.height * 0.37,
    });
  }
  // _ensure_Fqe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    Mqe = zodObject({
      text: zodString().min(1),
    });
    Nqe = zodObject({
      sectionNumber: zodString().min(1).default("02"),
      heading: zodString().min(1).default("Statement headline"),
      highlight: zodString().min(1).default("“Key highlighted phrase”"),
      callouts: zodArray(Mqe)
        .length(3)
        .default([
          {
            text: "Callout one",
          },
          {
            text: "Callout two",
          },
          {
            text: "Callout three",
          },
        ]),
      backgroundFill: zodString().min(1).default("background1"),
      accentColor: zodString().min(1).default("accent1"),
      textColor: zodString().min(1).default("tx1"),
      footerBrand: zodString().min(1).default("Brand"),
      footerPage: zodString().min(1).default("05"),
      typeface: zodString().min(1).default("Helvetica Neue"),
    });
    workPitchProblemRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_problem",
      summary:
        "Work Pitch problem slide with a headline, highlight phrase, and three supporting callouts.",
      labels: ["slide", "work pitch", "problem", "narrative"],
      paramsSchema: Nqe,
      exampleParams: {
        sectionNumber: "02",
        heading: "Statement headline",
        highlight: "“Key highlighted phrase”",
        callouts: [
          {
            text: "Callout one",
          },
          {
            text: "Callout two",
          },
          {
            text: "Callout three",
          },
        ],
      },
      run: (ri187, ri188) => {
        let rb3002 = ri187.slides.add();
        rb3002.background.fill = ri188.backgroundFill;
        let rb3003 = rb3002.theme.textStyles({
            sectionNumber: {
              typeface: ri188.typeface,
              fontSize: "text-64",
              bold: true,
              color: ri188.accentColor,
              alignment: "left",
              wrap: "none",
            },
            heading: {
              typeface: "EB Garamond",
              fontSize: "text-56",
              color: ri188.textColor,
              alignment: "left",
              wrap: "square",
            },
            callout: {
              typeface: ri188.typeface,
              fontSize: "text-18",
              color: ri188.textColor,
              alignment: "left",
              wrap: "square",
            },
            footerBrand: {
              typeface: ri188.typeface,
              fontSize: "text-caption",
              color: ri188.textColor,
              alignment: "left",
              wrap: "none",
            },
            footerPage: {
              typeface: ri188.typeface,
              fontSize: "text-caption",
              color: ri188.textColor,
              alignment: "right",
              wrap: "none",
            },
          }),
          rb3004 = `${ri188.heading}\n${ri188.highlight}`,
          rb3005 = composeColumn(
            {
              name: "workPitchProblem.root",
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
                  name: "workPitchProblem.header",
                  width: "fill",
                  align: "start",
                  gap: "s-6",
                },
                [
                  composeText(ri188.sectionNumber, {
                    name: "workPitchProblem.sectionNumber",
                    style: rb3003.sectionNumber,
                  }),
                  composeText(rb3004, {
                    name: "workPitchProblem.heading",
                    style: rb3003.heading,
                    width: composeWrap(1120),
                  }),
                ],
              ),
              composeRow(
                {
                  name: "workPitchProblem.callouts",
                  width: "fill",
                  align: "start",
                  justify: "between",
                  gap: "s-8",
                  padding: {
                    top: "s-8",
                    bottom: "s-4",
                  },
                },
                ri188.callouts.map((item) =>
                  composeColumn(
                    {
                      name: `workPitchProblem.callout.${item.text}`,
                      width: "fill",
                      align: "start",
                      gap: "s-2",
                    },
                    [
                      composeRule({
                        name: `workPitchProblem.calloutConnector.${item.text}`,
                        stroke: ri188.accentColor,
                        weight: 2,
                        width: "fill",
                      }),
                      composeText(item.text, {
                        name: `workPitchProblem.calloutText.${item.text}`,
                        style: rb3003.callout,
                        width: "fill",
                      }),
                    ],
                  ),
                ),
              ),
              composeColumn(
                {
                  name: "workPitchProblem.footer",
                  width: "fill",
                  gap: "s-1",
                  align: "stretch",
                },
                [
                  composeRule({
                    name: "workPitchProblem.footerLine",
                    stroke: ri188.textColor,
                    opacity: 0.24,
                    weight: 1,
                  }),
                  composeRow(
                    {
                      name: "workPitchProblem.footerRow",
                      width: "fill",
                      align: "center",
                      justify: "between",
                    },
                    [
                      composeText(ri188.footerBrand, {
                        name: "workPitchProblem.footerBrand",
                        style: rb3003.footerBrand,
                      }),
                      composeText(ri188.footerPage, {
                        name: "workPitchProblem.footerPage",
                        style: rb3003.footerPage,
                      }),
                    ],
                  ),
                ],
              ),
            ],
          ),
          rb3006 = rb3002
            .compose(rb3005, {
              baseUnit: 1,
            })
            .find((item) => item.name === "workPitchProblem.heading");
        if (rb3006?.type === "shape") {
          let rb21277 = rb3006.text.get(ri188.highlight);
          rb21277.color = ri188.accentColor;
          rb21277.fontSize = 58;
        }
      },
    });
  }
  // _ensure_zqe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    Iqe = zodObject({
      value: zodString().min(1),
      label: zodString().min(1),
    });
    Lqe = zodObject({
      sectionNumber: zodString().min(1).default("04"),
      headline: zodString()
        .min(1)
        .default("Powered by the intelligence of fig extract"),
      narrative: zodString()
        .min(1)
        .default(
          "Use this block to explain the formulation and why the product performs.",
        ),
      stats: zodArray(Iqe)
        .length(3)
        .default([
          {
            value: "+37%",
            label: "Hydration in 48 hours",
          },
          {
            value: "+42%",
            label: "Smoother texture after 4 weeks",
          },
          {
            value: "9/10",
            label: "Users report a natural glow",
          },
        ]),
      backgroundFill: zodString().min(1).default("background1"),
      accentColor: zodString().min(1).default("accent1"),
      textColor: zodString().min(1).default("tx1"),
      footerBrand: zodString().min(1).default("Brand"),
      footerPage: zodString().min(1).default("07"),
      typeface: zodString().min(1).default("Helvetica Neue"),
    });
    workPitchProductProofRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_product_proof",
      summary:
        "Work Pitch product proof slide with three metrics, connector lines, and supporting narrative.",
      labels: ["slide", "work pitch", "product", "proof"],
      paramsSchema: Lqe,
      exampleParams: {
        sectionNumber: "04",
        headline: "Powered by the intelligence of fig extract",
        narrative:
          "Use this block to explain the formulation and why the product performs.",
        stats: [
          {
            value: "+37%",
            label: "Hydration in 48 hours",
          },
          {
            value: "+42%",
            label: "Smoother texture after 4 weeks",
          },
          {
            value: "9/10",
            label: "Users report a natural glow",
          },
        ],
      },
      run: (ri86, ri87) => {
        let rb2669 = ri86.slides.add();
        rb2669.background.fill = ri87.backgroundFill;
        let rb2670 = rb2669.theme.textStyles({
            sectionNumber: {
              typeface: ri87.typeface,
              fontSize: "text-64",
              bold: true,
              color: ri87.accentColor,
              alignment: "left",
              wrap: "none",
            },
            headline: {
              typeface: "EB Garamond",
              fontSize: "text-54",
              color: ri87.textColor,
              alignment: "left",
              wrap: "square",
            },
            narrative: {
              typeface: "EB Garamond",
              fontSize: "text-24",
              lineSpacing: 1.2,
              color: ri87.textColor,
              alignment: "left",
              wrap: "square",
            },
            statValue: {
              typeface: ri87.typeface,
              fontSize: "text-56",
              bold: true,
              color: ri87.accentColor,
              alignment: "left",
              wrap: "none",
            },
            statLabel: {
              typeface: ri87.typeface,
              fontSize: "text-20",
              color: ri87.textColor,
              alignment: "left",
              wrap: "square",
            },
            footerBrand: {
              typeface: ri87.typeface,
              fontSize: "text-caption",
              color: ri87.textColor,
              alignment: "left",
              wrap: "none",
            },
            footerPage: {
              typeface: ri87.typeface,
              fontSize: "text-caption",
              color: ri87.textColor,
              alignment: "right",
              wrap: "none",
            },
          }),
          rb2671 = composeColumn(
            {
              name: "workPitchProductProof.root",
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
                  name: "workPitchProductProof.header",
                  width: "fill",
                  align: "start",
                  gap: "s-6",
                },
                [
                  composeText(ri87.sectionNumber, {
                    name: "workPitchProductProof.sectionNumber",
                    style: rb2670.sectionNumber,
                  }),
                ],
              ),
              composeRow(
                {
                  name: "workPitchProductProof.content",
                  width: "fill",
                  height: "fill",
                  align: "stretch",
                  justify: "between",
                  gap: "s-10",
                  padding: {
                    top: "s-2",
                    bottom: "s-4",
                  },
                },
                [
                  composeColumn(
                    {
                      name: "workPitchProductProof.statsColumn",
                      width: composeWrap(520),
                      height: "fill",
                      align: "stretch",
                      justify: "between",
                      padding: {
                        y: "s-4",
                      },
                    },
                    ri87.stats.map((item) =>
                      composeRow(
                        {
                          name: `workPitchProductProof.statRow.${item.value}`,
                          width: "fill",
                          align: "center",
                          gap: "s-3",
                        },
                        [
                          composeColumn(
                            {
                              name: `workPitchProductProof.statText.${item.value}`,
                              width: composeWrap(220),
                              align: "start",
                              gap: "s-1",
                            },
                            [
                              composeText(item.value, {
                                name: `workPitchProductProof.statValue.${item.value}`,
                                style: rb2670.statValue,
                              }),
                              composeText(item.label, {
                                name: `workPitchProductProof.statLabel.${item.value}`,
                                style: rb2670.statLabel,
                                width: "fill",
                              }),
                            ],
                          ),
                          composeRule({
                            name: `workPitchProductProof.statConnector.${item.value}`,
                            stroke: ri87.accentColor,
                            weight: 2,
                            width: "fill",
                          }),
                        ],
                      ),
                    ),
                  ),
                  composeColumn(
                    {
                      name: "workPitchProductProof.narrativeColumn",
                      width: composeWrap(540),
                      height: "fill",
                      align: "start",
                      justify: "between",
                      gap: "s-6",
                    },
                    [
                      composeText(ri87.headline, {
                        name: "workPitchProductProof.headline",
                        style: rb2670.headline,
                        width: "fill",
                      }),
                      composeText(ri87.narrative, {
                        name: "workPitchProductProof.narrative",
                        style: rb2670.narrative,
                        width: "fill",
                      }),
                    ],
                  ),
                ],
              ),
              composeColumn(
                {
                  name: "workPitchProductProof.footer",
                  width: "fill",
                  gap: "s-1",
                  align: "stretch",
                },
                [
                  composeRule({
                    name: "workPitchProductProof.footerLine",
                    stroke: ri87.textColor,
                    opacity: 0.24,
                    weight: 1,
                  }),
                  composeRow(
                    {
                      name: "workPitchProductProof.footerRow",
                      width: "fill",
                      align: "center",
                      justify: "between",
                    },
                    [
                      composeText(ri87.footerBrand, {
                        name: "workPitchProductProof.footerBrand",
                        style: rb2670.footerBrand,
                      }),
                      composeText(ri87.footerPage, {
                        name: "workPitchProductProof.footerPage",
                        style: rb2670.footerPage,
                      }),
                    ],
                  ),
                ],
              ),
            ],
          );
        rb2669.compose(rb2671, {
          baseUnit: 1,
        });
      },
    });
  }

  registerPresentationRecipes(
    [
      workPitchOpeningMarkRecipe,
      workPitchProblemRecipe,
      workPitchProductProofRecipe,
    ].filter(Boolean),
  );
});
