// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: compose work_pitch founders/funding.
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

export const ensureComposePitchARecipesInit = esmInit(() => {
  ensureDefineRecipeInit();
  let aqe: any;
  let oqe: any;
  let workPitchFoundersRecipe: any;
  let fundingSpacing: any;
  let fundingTextStyle: any;
  let dqe: any;
  let workPitchFundingAskRecipe: any;
  let inspirationLayout: any;
  let inspirationAccent: any;

  // _ensure_uqe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    aqe = zodObject({
      name: zodString().min(1),
      title: zodString().min(1),
    });
    oqe = zodObject({
      sectionNumber: zodString().min(1).default("06"),
      headingPrimary: zodString().min(1).default("Meet our"),
      headingAccent: zodString().min(1).default("founders"),
      missionBody: zodString()
        .min(1)
        .default(
          "Use this space to describe the mission and vision in a short, human narrative.",
        ),
      founders: zodArray(aqe)
        .length(3)
        .default([
          {
            name: "Founder 1",
            title: "CEO",
          },
          {
            name: "Founder 2",
            title: "COO",
          },
          {
            name: "Founder 3",
            title: "Chief Scientist",
          },
        ]),
      foundersImage: zodString().min(1),
      backgroundFill: zodString().min(1).default("background1"),
      leftPanelFill: zodString().min(1).default("accent1"),
      textColor: zodString().min(1).default("tx1"),
      inverseTextColor: zodString().min(1).default("white"),
      accentColor: zodString().min(1).default("accent1"),
      footerBrand: zodString().min(1).default("Brand"),
      footerPage: zodString().min(1).default("09"),
      typeface: zodString().min(1).default("Helvetica Neue"),
    });
    workPitchFoundersRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_founders",
      summary:
        "Work Pitch founders slide with left mission panel, founder callouts, and a right-side team image.",
      labels: ["slide", "work pitch", "team", "founders"],
      paramsSchema: oqe,
      exampleParams: {
        sectionNumber: "06",
        headingPrimary: "Meet our",
        headingAccent: "founders",
        missionBody:
          "Use this space to describe the mission and vision in a short, human narrative.",
        founders: [
          {
            name: "Founder 1",
            title: "CEO",
          },
          {
            name: "Founder 2",
            title: "COO",
          },
          {
            name: "Founder 3",
            title: "Chief Scientist",
          },
        ],
        foundersImage: "tests/presentation/assets/checkerboard.png",
      },
      run: (ri82, ri83) => {
        let rb2658 = ri82.slides.add();
        rb2658.background.fill = ri83.backgroundFill;
        let rb2659 = fundingSpacing(rb2658.frame),
          rb2660 = fundingTextStyle(rb2658.frame);
        rb2658.compose(
          composeShape({
            name: "workPitchFounders.leftPanelBackground",
            geometry: "rect",
            fill: ri83.leftPanelFill,
            line: {
              style: "solid",
              width: 0,
              fill: ri83.leftPanelFill,
            },
            width: "fill",
            height: "fill",
          }),
          {
            frame: rb2659,
            baseUnit: 1,
          },
        );
        let rb2661 = ri83.foundersImage.trim(),
          rb2662 = rb2661.startsWith("data:")
            ? {
                dataUrl: rb2661,
              }
            : {
                path: rb2661,
              };
        rb2658.compose(
          composeImage({
            name: "workPitchFounders.heroImage",
            ...rb2662,
            fit: "cover",
            alt: "Founders image",
            width: "fill",
            height: "fill",
          }),
          {
            frame: rb2660,
            baseUnit: 1,
          },
        );
        let rb2663 = rb2658.theme.textStyles({
            sectionNumber: {
              typeface: ri83.typeface,
              fontSize: "text-64",
              bold: true,
              color: ri83.inverseTextColor,
              alignment: "left",
              wrap: "none",
            },
            heading: {
              typeface: "EB Garamond",
              fontSize: "text-54",
              color: ri83.inverseTextColor,
              alignment: "left",
              wrap: "square",
            },
            mission: {
              typeface: "EB Garamond",
              fontSize: "text-22",
              lineSpacing: 1.2,
              color: ri83.inverseTextColor,
              alignment: "left",
              wrap: "square",
            },
            founder: {
              typeface: ri83.typeface,
              fontSize: "text-16",
              color: ri83.textColor,
              alignment: "left",
              wrap: "none",
            },
            footerBrand: {
              typeface: ri83.typeface,
              fontSize: "text-caption",
              color: ri83.textColor,
              alignment: "left",
              wrap: "none",
            },
            footerPage: {
              typeface: ri83.typeface,
              fontSize: "text-caption",
              color: ri83.textColor,
              alignment: "right",
              wrap: "none",
            },
          }),
          rb2664 = `${ri83.headingPrimary}\n${ri83.headingAccent}`,
          rb2665 = composeColumn(
            {
              name: "workPitchFounders.root",
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
                  name: "workPitchFounders.content",
                  width: "fill",
                  height: "fill",
                  align: "stretch",
                  justify: "between",
                  gap: "s-8",
                },
                [
                  composeColumn(
                    {
                      name: "workPitchFounders.leftColumn",
                      width: composeWrap(rb2659.width - 96),
                      height: "fill",
                      align: "start",
                      justify: "between",
                    },
                    [
                      composeRow(
                        {
                          name: "workPitchFounders.headingRow",
                          width: "fill",
                          align: "start",
                          gap: "s-4",
                        },
                        [
                          composeText(ri83.sectionNumber, {
                            name: "workPitchFounders.sectionNumber",
                            style: rb2663.sectionNumber,
                          }),
                          composeText(rb2664, {
                            name: "workPitchFounders.heading",
                            style: rb2663.heading,
                            width: "fill",
                          }),
                        ],
                      ),
                      composeText(ri83.missionBody, {
                        name: "workPitchFounders.mission",
                        style: rb2663.mission,
                        width: "fill",
                      }),
                    ],
                  ),
                  composeColumn(
                    {
                      name: "workPitchFounders.rightColumn",
                      width: "fill",
                      height: "fill",
                      align: "stretch",
                      justify: "start",
                      padding: {
                        top: "s-7",
                      },
                    },
                    [
                      composeRow(
                        {
                          name: "workPitchFounders.founderRow",
                          width: "fill",
                          align: "start",
                          justify: "between",
                          gap: "s-4",
                        },
                        ri83.founders.map((item) =>
                          composeColumn(
                            {
                              name: `workPitchFounders.founder.${item.name}`,
                              width: "fill",
                              align: "start",
                              gap: "s-2",
                            },
                            [
                              composeText(`${item.name} — ${item.title}`, {
                                name: `workPitchFounders.founderText.${item.name}`,
                                style: rb2663.founder,
                                width: "fill",
                              }),
                              composeRule({
                                name: `workPitchFounders.founderConnector.${item.name}`,
                                stroke: ri83.accentColor,
                                weight: 2,
                                width: "fill",
                              }),
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
                  name: "workPitchFounders.footer",
                  width: "fill",
                  gap: "s-1",
                  align: "stretch",
                },
                [
                  composeRule({
                    name: "workPitchFounders.footerLine",
                    stroke: ri83.textColor,
                    opacity: 0.24,
                    weight: 1,
                  }),
                  composeRow(
                    {
                      name: "workPitchFounders.footerRow",
                      width: "fill",
                      align: "center",
                      justify: "between",
                    },
                    [
                      composeText(ri83.footerBrand, {
                        name: "workPitchFounders.footerBrand",
                        style: rb2663.footerBrand,
                      }),
                      composeText(ri83.footerPage, {
                        name: "workPitchFounders.footerPage",
                        style: rb2663.footerPage,
                      }),
                    ],
                  ),
                ],
              ),
            ],
          );
        rb2658.compose(rb2665, {
          baseUnit: 1,
        });
      },
    });
    fundingSpacing = (ri10778) => ({
      left: ri10778.left,
      top: ri10778.top,
      width: ri10778.width * 0.41,
      height: ri10778.height,
    });
    fundingTextStyle = (ri9474) => ({
      left: ri9474.left + ri9474.width * 0.41,
      top: ri9474.top + ri9474.height * 0.25,
      width: ri9474.width * 0.59,
      height: ri9474.height * 0.75,
    });
  }
  // _ensure_hqe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    dqe = zodObject({
      sectionNumber: zodString().min(1).default("07"),
      headline: zodString().min(1).default("Join us in redefining radiance"),
      fundingAsk: zodString()
        .min(1)
        .default(
          "Funding Ask\nSeeking: $1.2M\nSeed Round\nFor scaling production, retail expansion, marketing, and R&D.",
        ),
      closing: zodString()
        .min(1)
        .default(
          "Use this closing line to invite next steps and share the strategic ask.",
        ),
      backgroundFill: zodString().min(1).default("background1"),
      accentColor: zodString().min(1).default("accent1"),
      textColor: zodString().min(1).default("tx1"),
      footerBrand: zodString().min(1).default("Brand"),
      footerPage: zodString().min(1).default("10"),
      typeface: zodString().min(1).default("Helvetica Neue"),
    });
    workPitchFundingAskRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_funding_ask",
      summary:
        "Work Pitch closing slide with a main headline, funding ask block, and final call-to-action.",
      labels: ["slide", "work pitch", "closing", "funding"],
      paramsSchema: dqe,
      exampleParams: {
        sectionNumber: "07",
        headline: "Join us in redefining radiance",
        fundingAsk:
          "Funding Ask\nSeeking: $1.2M\nSeed Round\nFor scaling production, retail expansion, marketing, and R&D.",
        closing:
          "Use this closing line to invite next steps and share the strategic ask.",
      },
      run: (ri125, ri126) => {
        let rb2799 = ri125.slides.add();
        rb2799.background.fill = ri126.backgroundFill;
        let rb2800 = rb2799.theme.textStyles({
            sectionNumber: {
              typeface: ri126.typeface,
              fontSize: "text-64",
              bold: true,
              color: ri126.accentColor,
              alignment: "left",
              wrap: "none",
            },
            headline: {
              typeface: "EB Garamond",
              fontSize: "text-64",
              color: ri126.textColor,
              alignment: "right",
              wrap: "square",
            },
            funding: {
              typeface: ri126.typeface,
              fontSize: "text-24",
              lineSpacing: 1.2,
              color: ri126.textColor,
              alignment: "left",
              wrap: "square",
            },
            closing: {
              typeface: "EB Garamond",
              fontSize: "text-24",
              lineSpacing: 1.2,
              color: ri126.textColor,
              alignment: "right",
              wrap: "square",
            },
            footerBrand: {
              typeface: ri126.typeface,
              fontSize: "text-caption",
              color: ri126.textColor,
              alignment: "left",
              wrap: "none",
            },
            footerPage: {
              typeface: ri126.typeface,
              fontSize: "text-caption",
              color: ri126.textColor,
              alignment: "right",
              wrap: "none",
            },
          }),
          rb2801 = composeColumn(
            {
              name: "workPitchFundingAsk.root",
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
                  name: "workPitchFundingAsk.header",
                  width: "fill",
                  justify: "between",
                  align: "start",
                  gap: "s-8",
                },
                [
                  composeText(ri126.sectionNumber, {
                    name: "workPitchFundingAsk.sectionNumber",
                    style: rb2800.sectionNumber,
                  }),
                  composeText(ri126.headline, {
                    name: "workPitchFundingAsk.headline",
                    style: rb2800.headline,
                    width: composeWrap(640),
                  }),
                ],
              ),
              composeColumn(
                {
                  name: "workPitchFundingAsk.content",
                  width: "fill",
                  height: "fill",
                  justify: "between",
                  align: "stretch",
                  padding: {
                    top: "s-8",
                    bottom: "s-4",
                  },
                },
                [
                  composeRow(
                    {
                      name: "workPitchFundingAsk.fundingRow",
                      width: "fill",
                      align: "center",
                      gap: "s-6",
                    },
                    [
                      composeText(ri126.fundingAsk, {
                        name: "workPitchFundingAsk.funding",
                        style: rb2800.funding,
                        width: composeWrap(280),
                      }),
                      composeRule({
                        name: "workPitchFundingAsk.fundingConnector",
                        stroke: ri126.accentColor,
                        weight: 2,
                        width: "fill",
                      }),
                    ],
                  ),
                  composeRow(
                    {
                      name: "workPitchFundingAsk.closingRow",
                      width: "fill",
                      justify: "end",
                    },
                    [
                      composeText(ri126.closing, {
                        name: "workPitchFundingAsk.closing",
                        style: rb2800.closing,
                        width: composeWrap(288),
                      }),
                    ],
                  ),
                ],
              ),
              composeColumn(
                {
                  name: "workPitchFundingAsk.footer",
                  width: "fill",
                  gap: "s-1",
                  align: "stretch",
                },
                [
                  composeRule({
                    name: "workPitchFundingAsk.footerLine",
                    stroke: ri126.textColor,
                    opacity: 0.24,
                    weight: 1,
                  }),
                  composeRow(
                    {
                      name: "workPitchFundingAsk.footerRow",
                      width: "fill",
                      justify: "between",
                      align: "center",
                    },
                    [
                      composeText(ri126.footerBrand, {
                        name: "workPitchFundingAsk.footerBrand",
                        style: rb2800.footerBrand,
                      }),
                      composeText(ri126.footerPage, {
                        name: "workPitchFundingAsk.footerPage",
                        style: rb2800.footerPage,
                      }),
                    ],
                  ),
                ],
              ),
            ],
          ),
          rb2802 = rb2799.compose(rb2801, {
            baseUnit: 1,
          }),
          rb2803 = rb2802.find(
            (item) => item.name === "workPitchFundingAsk.headline",
          ),
          rb2804 = rb2802.find(
            (item) => item.name === "workPitchFundingAsk.funding",
          );
        if (rb2803?.type === "shape") {
          let rb19313 = inspirationLayout(ri126.headline);
          if (rb19313) {
            let rb21441 = rb2803.text.get(rb19313);
            rb21441.italic = true;
            rb21441.color = ri126.accentColor;
          }
        }
        if (rb2804?.type === "shape") {
          let rb19314 = inspirationAccent(ri126.fundingAsk);
          if (rb19314) {
            let rb21518 = rb2804.text.get(rb19314);
            rb21518.bold = true;
            rb21518.color = ri126.accentColor;
          }
        }
      },
    });
    inspirationLayout = (ri7139) => {
      let rb17486 = /join us/i.exec(ri7139);
      if (rb17486?.index !== undefined)
        return ri7139.slice(rb17486.index, rb17486.index + rb17486[0].length);
      let rb17487 = ri7139.trim().split(/\s+/).filter(Boolean);
      return rb17487.length < 2 ? rb17487[0] : `${rb17487[0]} ${rb17487[1]}`;
    };
    inspirationAccent = (ri7548) => {
      let rb18029 = ri7548
        .split(/\r?\n/)
        .map((item) => item.trimEnd())
        .filter((item) => item.length > 0);
      if (rb18029.length !== 0)
        return rb18029.slice(0, Math.min(3, rb18029.length)).join("\n");
    };
  }

  registerPresentationRecipes(
    [workPitchFoundersRecipe, workPitchFundingAskRecipe].filter(Boolean),
  );
});
