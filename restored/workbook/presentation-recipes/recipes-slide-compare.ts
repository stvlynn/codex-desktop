// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-57: slide two_column…work_pitch_cover.
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

export const ensureSlideCompareRecipesInit = esmInit(() => {
  ensureDefineRecipeInit();
  let VKe: any;
  let twoColumnSlideRecipe: any;
  let WKe: any;
  let twoImageCarouselRecipe: any;
  let qKe: any;
  let vennDiagramSlideRecipe: any;
  let XKe: any;
  let ZKe: any;
  let workPitchAgendaRecipe: any;
  let eqe: any;
  let workPitchCoverRecipe: any;
  let pitchSpacing: any;
  let pitchTextStyle: any;

  // _ensure_UKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    VKe = zodObject({
      title: zodString().min(1).default("Current state vs target state"),
      leftHeading: zodString().min(1).default("Current state"),
      leftBody: zodString()
        .min(1)
        .default(
          "Fragmented tooling, duplicated effort, and inconsistent handoff quality.",
        ),
      rightHeading: zodString().min(1).default("Target state"),
      rightBody: zodString()
        .min(1)
        .default(
          "Shared platform, unified operating model, and clear ownership boundaries.",
        ),
      backgroundFill: zodString().min(1).default("background1"),
    });
    twoColumnSlideRecipe = defineRecipe({
      name: "recipes.slide.two_column",
      summary:
        "Two-column slide for contrast, before/after, or option framing.",
      labels: ["slide", "comparison", "professional"],
      paramsSchema: VKe,
      exampleParams: {
        title: "Current state vs target state",
        leftHeading: "Current state",
        leftBody:
          "Fragmented tooling, duplicated effort, and inconsistent handoff quality.",
        rightHeading: "Target state",
        rightBody:
          "Shared platform, unified operating model, and clear ownership boundaries.",
      },
      run: (ri1043, ri1044) => {
        let rb6261 = ri1043.slides.add();
        rb6261.background.fill = ri1044.backgroundFill;
        let rb6262 = rb6261.shapes.add({
          geometry: "textbox",
          position: {
            left: 90,
            top: 80,
            width: 1140,
            height: 80,
          },
        });
        rb6262.text.set(ri1044.title);
        rb6262.text.style = {
          bold: true,
          fontSize: 46,
          color: "tx1",
        };
        let rb6263 = rb6261.shapes.add({
          geometry: "rect",
          position: {
            left: 90,
            top: 190,
            width: 560,
            height: 470,
          },
          fill: "slate-50",
          borderRadius: "rounded-lg",
          line: {
            style: "solid",
            width: 1,
            fill: "slate-200",
          },
        });
        rb6263.text.set(`${ri1044.leftHeading}\n\n${ri1044.leftBody}`);
        rb6263.text.style = {
          bold: true,
          fontSize: 30,
          lineSpacing: 1.25,
          color: "tx1",
        };
        let rb6264 = rb6261.shapes.add({
          geometry: "rect",
          position: {
            left: 710,
            top: 190,
            width: 560,
            height: 470,
          },
          fill: "slate-50",
          borderRadius: "rounded-lg",
          line: {
            style: "solid",
            width: 1,
            fill: "slate-200",
          },
        });
        rb6264.text.set(`${ri1044.rightHeading}\n\n${ri1044.rightBody}`);
        rb6264.text.style = {
          bold: true,
          fontSize: 30,
          lineSpacing: 1.25,
          color: "tx1",
        };
      },
      notes: [
        "Keep both columns close in text density for balanced visual weight.",
      ],
    });
  }
  // _ensure_KKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    WKe = zodObject({
      title: zodString().min(1).default("Before and after"),
      leftCaption: zodString().min(1).default("Before: fragmented workflow"),
      rightCaption: zodString().min(1).default("After: unified workflow"),
      imageFill: zodString().min(1).default("slate-200"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    twoImageCarouselRecipe = defineRecipe({
      name: "recipes.slide.two_image_carousel",
      summary: "Two-panel image carousel slide for direct visual comparison.",
      labels: ["slide", "image", "comparison", "professional"],
      paramsSchema: WKe,
      exampleParams: {
        title: "Before and after",
        leftCaption: "Before: fragmented workflow",
        rightCaption: "After: unified workflow",
      },
      run: (ri822, ri823) => {
        let rb5471 = ri822.slides.add();
        rb5471.background.fill = ri823.backgroundFill;
        let { width } = rb5471.frame,
          rb5473 = Math.round((width - 1160) / 2),
          rb5474 = rb5471.shapes.add({
            geometry: "textbox",
            position: {
              left: rb5473,
              top: 56,
              width: 1160,
              height: 80,
            },
          });
        rb5474.text.set(ri823.title);
        rb5474.text.style = {
          bold: true,
          fontSize: 46,
          alignment: "center",
          color: "tx1",
        };
        let rb5475 = rb5471.shapes.add({
          geometry: "rect",
          position: {
            left: rb5473,
            top: 170,
            width: 560,
            height: 420,
          },
          fill: ri823.imageFill,
          borderRadius: "rounded-lg",
          line: {
            style: "solid",
            width: 1,
            fill: "slate-300",
          },
        });
        rb5475.text.set(ri823.leftCaption);
        rb5475.text.style = {
          bold: true,
          fontSize: 24,
          alignment: "center",
          color: "slate-700",
        };
        rb5475.text.verticalAlignment = "bottom";
        let rb5476 = rb5471.shapes.add({
          geometry: "rect",
          position: {
            left: rb5473 + 560 + 40,
            top: 170,
            width: 560,
            height: 420,
          },
          fill: ri823.imageFill,
          borderRadius: "rounded-lg",
          line: {
            style: "solid",
            width: 1,
            fill: "slate-300",
          },
        });
        rb5476.text.set(ri823.rightCaption);
        rb5476.text.style = {
          bold: true,
          fontSize: 24,
          alignment: "center",
          color: "slate-700",
        };
        rb5476.text.verticalAlignment = "bottom";
      },
      notes: [
        "Keep both panels framed similarly to avoid visual bias in comparison.",
      ],
    });
  }
  // _ensure_YKe
  {
    ensureZodRuntime();
    ensureDefineRecipeInit();
    qKe = zodObject({
      title: zodString().min(1).default("Capability overlap"),
      leftLabel: zodString().min(1).default("Platform"),
      rightLabel: zodString().min(1).default("Operations"),
      bottomLabel: zodString().min(1).default("Experience"),
      overlapLabel: zodString().min(1).default("Integrated advantage"),
      backgroundFill: zodString().min(1).default("background1"),
    });
    vennDiagramSlideRecipe = defineRecipe({
      name: "recipes.slide.venn_diagram",
      summary: "Three-circle Venn diagram slide for overlap storytelling.",
      labels: ["slide", "diagram", "venn", "professional"],
      paramsSchema: qKe,
      exampleParams: {
        title: "Capability overlap",
        leftLabel: "Platform",
        rightLabel: "Operations",
        bottomLabel: "Experience",
        overlapLabel: "Integrated advantage",
      },
      run: (ri563, ri564) => {
        let rb4508 = ri563.slides.add();
        rb4508.background.fill = ri564.backgroundFill;
        let rb4509 = rb4508.shapes.add({
          geometry: "textbox",
          position: {
            left: 120,
            top: 70,
            width: 1060,
            height: 80,
          },
        });
        rb4509.text.set(ri564.title);
        rb4509.text.style = {
          bold: true,
          fontSize: 48,
          alignment: "center",
          color: "tx1",
        };
        let rb4510 = rb4508.shapes.add({
            geometry: "ellipse",
            position: {
              left: 360,
              top: 220,
              width: 320,
              height: 320,
            },
            fill: "blue-400/45",
            line: {
              style: "solid",
              width: 0,
              fill: "blue-400/45",
            },
          }),
          rb4511 = rb4508.shapes.add({
            geometry: "ellipse",
            position: {
              left: 690,
              top: 220,
              width: 320,
              height: 320,
            },
            fill: "emerald-400/45",
            line: {
              style: "solid",
              width: 0,
              fill: "emerald-400/45",
            },
          }),
          rb4512 = rb4508.shapes.add({
            geometry: "ellipse",
            position: {
              left: 525,
              top: 380,
              width: 320,
              height: 320,
            },
            fill: "violet-400/45",
            line: {
              style: "solid",
              width: 0,
              fill: "violet-400/45",
            },
          });
        rb4510.text.set(ri564.leftLabel);
        rb4510.text.style = {
          bold: true,
          fontSize: 28,
          alignment: "center",
          color: "tx1",
        };
        rb4511.text.set(ri564.rightLabel);
        rb4511.text.style = {
          bold: true,
          fontSize: 28,
          alignment: "center",
          color: "tx1",
        };
        rb4512.text.set(ri564.bottomLabel);
        rb4512.text.style = {
          bold: true,
          fontSize: 28,
          alignment: "center",
          color: "tx1",
        };
        let rb4513 = rb4508.shapes.add({
          geometry: "textbox",
          position: {
            left: 530,
            top: 410,
            width: 300,
            height: 80,
          },
        });
        rb4513.text.set(ri564.overlapLabel);
        rb4513.text.style = {
          bold: true,
          fontSize: 26,
          alignment: "center",
          color: "slate-900",
        };
      },
      notes: ["Use overlap text to call out the differentiated intersection."],
    });
  }
  // _ensure_dollarKe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    XKe = zodObject({
      number: zodString().min(1),
      heading: zodString().min(1),
      body: zodString().min(1),
    });
    ZKe = zodObject({
      title: zodString().min(1).default("AGENDA"),
      subtitle: zodString().min(1).default("table of contents"),
      items: zodArray(XKe)
        .length(6)
        .default([
          {
            number: "01",
            heading: "Section 1",
            body: "Agenda item description.",
          },
          {
            number: "02",
            heading: "Section 2",
            body: "Agenda item description.",
          },
          {
            number: "03",
            heading: "Section 3",
            body: "Agenda item description.",
          },
          {
            number: "04",
            heading: "Section 4",
            body: "Agenda item description.",
          },
          {
            number: "05",
            heading: "Section 5",
            body: "Agenda item description.",
          },
          {
            number: "06",
            heading: "Section 6",
            body: "Agenda item description.",
          },
        ]),
      backgroundFill: zodString().min(1).default("accent1"),
      textColor: zodString().min(1).default("white"),
      accentColor: zodString().min(1).default("accent2"),
      footerBrand: zodString().min(1).default("Brand"),
      footerPage: zodString().min(1).default("02"),
      displayTypeface: zodString().min(1).default("Helvetica Neue"),
      serifTypeface: zodString().min(1).default("Times New Roman"),
    });
    workPitchAgendaRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_agenda",
      summary:
        "Work Pitch agenda slide with six numbered sections in a 3x2 grid.",
      labels: ["slide", "work pitch", "agenda", "layout"],
      paramsSchema: ZKe,
      exampleParams: {
        title: "AGENDA",
        subtitle: "table of contents",
        items: [
          {
            number: "01",
            heading: "Section 1",
            body: "Agenda item description.",
          },
          {
            number: "02",
            heading: "Section 2",
            body: "Agenda item description.",
          },
          {
            number: "03",
            heading: "Section 3",
            body: "Agenda item description.",
          },
          {
            number: "04",
            heading: "Section 4",
            body: "Agenda item description.",
          },
          {
            number: "05",
            heading: "Section 5",
            body: "Agenda item description.",
          },
          {
            number: "06",
            heading: "Section 6",
            body: "Agenda item description.",
          },
        ],
        backgroundFill: "accent1",
        textColor: "white",
        accentColor: "accent2",
        displayTypeface: "Helvetica Neue",
        serifTypeface: "Times New Roman",
      },
      run: (ri156, ri157) => {
        let rb2913 = ri156.slides.add();
        rb2913.background.fill = ri157.backgroundFill;
        let rb2914 = rb2913.theme.textStyles({
            title: {
              typeface: ri157.displayTypeface,
              fontSize: "text-display",
              bold: true,
              color: ri157.textColor,
              alignment: "center",
              wrap: "none",
            },
            subtitle: {
              typeface: ri157.serifTypeface,
              fontSize: "text-subtitle",
              italic: true,
              color: ri157.accentColor,
              alignment: "center",
              wrap: "none",
            },
            agendaNumber: {
              typeface: ri157.serifTypeface,
              fontSize: "text-subtitle",
              color: ri157.accentColor,
              alignment: "center",
              wrap: "none",
            },
            agendaHeading: {
              typeface: ri157.displayTypeface,
              fontSize: "text-section",
              bold: true,
              color: ri157.textColor,
              alignment: "center",
              wrap: "none",
            },
            agendaBody: {
              typeface: ri157.serifTypeface,
              fontSize: "text-body",
              color: ri157.textColor,
              alignment: "center",
              wrap: "square",
            },
            footer: {
              typeface: ri157.displayTypeface,
              fontSize: "text-caption",
              color: ri157.textColor,
              wrap: "none",
            },
          }),
          rb2915 = composeColumn(
            {
              name: "workPitchAgenda.root",
              width: "fill",
              height: "fill",
              padding: {
                x: "s-8",
                top: "s-18",
                bottom: "s-4",
              },
              align: "stretch",
              justify: "between",
            },
            [
              composeColumn(
                {
                  name: "workPitchAgenda.header",
                  gap: "s-1",
                  align: "center",
                },
                [
                  composeText(ri157.title, {
                    name: "workPitchAgenda.title",
                    style: rb2914.title,
                  }),
                  composeText(ri157.subtitle.toLowerCase(), {
                    name: "workPitchAgenda.subtitle",
                    style: rb2914.subtitle,
                  }),
                ],
              ),
              composeGrid(
                {
                  name: "workPitchAgenda.grid",
                  width: "fill",
                  height: "fill",
                  columns: composeRepeat(3, composeFr(1)),
                  rows: composeRepeat(2, COMPOSE_AUTO_TRACK),
                  columnGap: "s-40",
                  rowGap: "s-4",
                  alignItems: "center",
                  justifyItems: "center",
                },
                ri157.items.map((item) =>
                  composeColumn(
                    {
                      name: `workPitchAgenda.item.${item.number}`,
                      gap: "s-1",
                      align: "center",
                    },
                    [
                      composeText(item.number, {
                        name: `workPitchAgenda.itemNumber.${item.number}`,
                        style: rb2914.agendaNumber,
                      }),
                      composeColumn(
                        {
                          name: `workPitchAgenda.itemText.${item.number}`,
                          gap: 0,
                          align: "center",
                        },
                        [
                          composeText(item.heading, {
                            name: `workPitchAgenda.itemHeading.${item.number}`,
                            style: rb2914.agendaHeading,
                            transform: "uppercase",
                          }),
                          composeText(item.body, {
                            name: `workPitchAgenda.itemBody.${item.number}`,
                            style: rb2914.agendaBody,
                            width: composeWrap(216),
                          }),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              composeColumn(
                {
                  name: "workPitchAgenda.footer",
                  width: "fill",
                  gap: "s-1",
                  align: "stretch",
                },
                [
                  composeRule({
                    name: "workPitchAgenda.footerLine",
                    stroke: ri157.textColor,
                    opacity: 0.24,
                    weight: 1,
                  }),
                  composeRow(
                    {
                      name: "workPitchAgenda.footerRow",
                      width: "fill",
                      align: "center",
                      justify: "between",
                    },
                    [
                      composeText(ri157.footerBrand, {
                        name: "workPitchAgenda.footerBrand",
                        style: rb2914.footer,
                      }),
                      composeText(ri157.footerPage, {
                        name: "workPitchAgenda.footerPage",
                        style: rb2914.footer,
                      }),
                    ],
                  ),
                ],
              ),
            ],
          );
        rb2913.compose(rb2915, {
          baseUnit: 4,
        });
      },
      notes: [
        "Pass six agenda items in reading order from left-to-right, top-to-bottom.",
      ],
    });
  }
  // _ensure_iqe
  {
    ensureZodRuntime();
    ensureComposeLayoutInit();
    ensureDefineRecipeInit();
    eqe = zodObject({
      backgroundImage: zodString().min(1),
      accentColor: zodString().min(1).default("accent1"),
      title: zodString().min(1).default("Title"),
      titleColor: zodString().min(1).default("white"),
      titleFontSize: zodNumber().min(12).max(220).default(96),
      titleTypeface: zodString().min(1).default("Helvetica Neue"),
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
    });
    workPitchCoverRecipe = defineRecipe({
      name: "recipes.slide.work_pitch_cover",
      summary:
        "Work Pitch slide-level layout with image background, center accent panel, title, and a 2x3 table.",
      labels: ["slide", "work pitch", "cover", "branding", "layout"],
      paramsSchema: eqe,
      exampleParams: {
        backgroundImage: "tests/presentation/assets/checkerboard.png",
        accentColor: "accent1",
        title: "Title",
        tableCells: [
          "Header 1",
          "Header 2",
          "Header 3",
          "Value 1",
          "Value 2",
          "Value 3",
        ],
      },
      run: (ri388, ri389) => {
        let rb3810 = ri388.slides.add(),
          rb3811 = ri389.backgroundImage.trim(),
          rb3812 = rb3811.startsWith("data:")
            ? {
                dataUrl: rb3811,
              }
            : {
                path: rb3811,
              };
        rb3810.compose(
          composeImage({
            name: "workPitchCover.background",
            ...rb3812,
            fit: "cover",
            alt: "Work Pitch background image",
            width: "fill",
            height: "fill",
          }),
          {
            frame: rb3810.frame,
            baseUnit: 1,
          },
        );
        let rb3813 = pitchSpacing(rb3810.frame),
          rb3814 = pitchTextStyle(rb3813);
        rb3810.compose(
          composeShape({
            name: "workPitchCover.panelBackground",
            geometry: "rect",
            fill: ri389.accentColor,
            line: {
              style: "solid",
              width: 0,
              fill: ri389.accentColor,
            },
            width: "fill",
            height: "fill",
          }),
          {
            frame: rb3813,
            baseUnit: 1,
          },
        );
        let rb3815 = rb3810.theme.textStyles({
            title: {
              typeface: ri389.titleTypeface,
              fontSize: ri389.titleFontSize,
              bold: true,
              color: ri389.titleColor,
              alignment: "center",
              wrap: "none",
            },
          }),
          rb3816 = composeColumn(
            {
              name: "workPitchCover.panel",
              width: "fill",
              height: "fill",
              padding: {
                x: "s-10",
                top: "s-16",
                bottom: "s-20",
              },
              align: "center",
              justify: "start",
            },
            [
              composeText(ri389.title.toUpperCase(), {
                name: "workPitchCover.title",
                style: rb3815.title,
                width: "fill",
              }),
            ],
          );
        rb3810.compose(rb3816, {
          frame: rb3813,
          baseUnit: 1,
        });
        let [rb3817] = rb3810.compose(
          composeTable({
            name: "workPitchCover.metricsTable",
            rows: 2,
            columns: 3,
            values: [
              ri389.tableCells.slice(0, 3),
              ri389.tableCells.slice(3, 6),
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
            frame: rb3814,
            baseUnit: 1,
          },
        );
        if (rb3817?.type === "table")
          for (let rb12328 = 0; rb12328 < 2; rb12328 += 1)
            for (let rb12970 = 0; rb12970 < 3; rb12970 += 1) {
              let rb13503 = rb3817.getCell(rb12328, rb12970);
              rb13503.anchor = "ctr";
              rb13503.text.style = {
                bold: rb12328 === 0,
                fontSize:
                  rb12328 === 0
                    ? ri389.tableHeaderFontSize
                    : ri389.tableBodyFontSize,
                color: ri389.tableTextColor,
                alignment: "center",
                typeface: ri389.titleTypeface,
              };
            }
      },
      notes: [
        "Pass six tableCells values in row-major order: top-left to bottom-right.",
      ],
    });
    pitchSpacing = (ri9594) => ({
      left: ri9594.left + ri9594.width * 0.2,
      top: ri9594.top + ri9594.height * 0.2,
      width: ri9594.width * 0.6,
      height: ri9594.height * 0.6,
    });
    pitchTextStyle = (ri9473) => ({
      left: ri9473.left + ri9473.width * 0.07,
      top: ri9473.top + ri9473.height * 0.63,
      width: ri9473.width * 0.86,
      height: ri9473.height * 0.18,
    });
  }

  registerPresentationRecipes(
    [
      twoColumnSlideRecipe,
      twoImageCarouselRecipe,
      vennDiagramSlideRecipe,
      workPitchAgendaRecipe,
      workPitchCoverRecipe,
    ].filter(Boolean),
  );
});
