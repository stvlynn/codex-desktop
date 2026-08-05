// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-18: paragraph layout core (split from text-layout-engine; legacy j_).

import { Jn } from "../presentation-protobuf";
import { quoteCssFontFamily, mergeStyleLayers } from "../text-style";
import {
  buildMeasureFontShorthand,
  segmentGraphemes,
  GLYPH_ADVANCE_RESERVED_SIXTH,
} from "../font-metrics";
import { resolveColorToCssRgba } from "../color-resolve";
import {
  warnMissingFontFamily,
  resolveCssFontStack,
  hundredthsPointToCssPx,
  hundredthsPointToCssPxOrZero,
} from "../font-stack";
import {
  resolveListLevelStyle,
  spaceValueToCssPx,
  mergeSchemeCssDeclarations,
} from "../document-style";
import {
  mergeParagraphStyleWithBulletExclusivity,
  levelStyleAtOutline,
  paragraphOutlineLevel,
  resolveThemeTypefaceToken,
  emuToCssPxOrZero,
  twipToCssPxOrZero,
  tabStopsFromParagraphStyle,
  formatAutoNumberLabel,
  highlightColorFromScheme,
  alignmentFromScheme,
  applyTextCaseTransforms,
  intFromSchemeProperty,
  fontSizeFromStyleOrScheme,
  typefaceFromStyleOrScheme,
  underlineWithHyperlinkDefault,
  paragraphsShareContextualSpacing,
  DOCX_PARAGRAPH_RIGHT_INDENT_PREFIX,
} from "../placeholder-resolve";
import {
  DEFAULT_LINE_MULTIPLE,
  DEFAULT_TAB_STOP_EMU_FACTOR,
  DEFAULT_TAB_STOP_FALLBACK_FACTOR,
  WHITESPACE_RE,
  DEFAULT_HYPERLINK_COLOR,
} from "./text-layout-constants";
import { tokenizeTextRuns } from "./tokenize-text-runs";
import {
  advanceAt,
  buildRelativeAdvances,
  findMaxAdvanceIndex,
} from "./advance-metrics";
import {
  resolveLineBoxMetrics,
  spacerSegmentFromReference,
  resolveNextTabStop,
  tabAlignedWidth,
  resolveParagraphSpacingUnit,
} from "./line-box-helpers";
/** Local stand-in for boundary `Qse` / `_workbookEt` (not drained). */
function remainingSpaceAfterPriorOverlap(
  priorSpacePx: unknown,
  nextSpacePx: unknown,
): number {
  const prior = Number(priorSpacePx);
  const next = Number(nextSpacePx);
  const clamped = Math.min(Math.max(0, prior), Math.max(0, next));
  return Math.max(0, next - clamped);
}

export function layoutParagraph(
  fontMetrics: unknown,
  measureCache: unknown,
  {
    element,
    paragraph,
    paraIndex,
    request,
    layoutProfile,
    defaultFontPx,
    effectiveBoxW,
    listCounters,
    lines,
    previousParagraphSpaceAfterPx,
  }: unknown,
) {
  let workbookBinding2106 = paragraph.textStyle,
    workbookBinding2107 = request.masterDefaults?.paragraphLevels
      ? levelStyleAtOutline(
          request.masterDefaults.paragraphLevels,
          element,
          paraIndex,
        )
      : undefined,
    workbookBinding2108 = workbookBinding2107
      ? (element.levelsStyles?.[paragraphOutlineLevel(element, paraIndex)] ??
        element.levelsStyles?.[0])
      : resolveListLevelStyle(element, paragraph),
    workbookBinding2109 = mergeParagraphStyleWithBulletExclusivity(
      workbookBinding2108?.paragraphStyle,
      workbookBinding2107?.paragraphStyle,
    ),
    workbookBinding2110 = mergeParagraphStyleWithBulletExclusivity(
      paragraph.bulletCharacter === undefined
        ? paragraph.paragraphStyle
        : {
            ...(paragraph.paragraphStyle ?? {
              tabStops: [],
            }),
            bulletCharacter: paragraph.bulletCharacter,
          },
      workbookBinding2109,
    ) ?? {
      tabStops: [],
    },
    workbookBinding2111 = resolveParagraphSpacingUnit(request, layoutProfile),
    workbookBinding2112 = spaceValueToCssPx(
      paragraph.spaceBefore ??
        workbookBinding2108?.spaceBefore ??
        workbookBinding2107?.spaceBefore ??
        request.masterDefaults?.spaceBefore,
      workbookBinding2111,
    ),
    workbookBinding2113 = spaceValueToCssPx(
      paragraph.spaceAfter ??
        workbookBinding2108?.spaceAfter ??
        workbookBinding2107?.spaceAfter ??
        request.masterDefaults?.spaceAfter,
      workbookBinding2111,
    ),
    workbookBinding2114 = element.paragraphs?.[paraIndex - 1],
    workbookBinding2115 = element.paragraphs?.[paraIndex + 1],
    workbookBinding2116 = paragraphsShareContextualSpacing(
      workbookBinding2114,
      paragraph,
    ),
    workbookBinding2117 = paragraphsShareContextualSpacing(
      paragraph,
      workbookBinding2115,
    ),
    workbookBinding2118 = workbookBinding2116 ? 0 : workbookBinding2112,
    workbookBinding2119 = workbookBinding2117 ? 0 : workbookBinding2113,
    workbookBinding2120 =
      layoutProfile === "document" ? twipToCssPxOrZero : emuToCssPxOrZero,
    workbookBinding2121 =
      paragraph.marginLeft === undefined
        ? emuToCssPxOrZero(workbookBinding2110.marginLeft)
        : workbookBinding2120(paragraph.marginLeft),
    workbookBinding2122 =
      paragraph.indent === undefined
        ? emuToCssPxOrZero(workbookBinding2110.indent)
        : workbookBinding2120(paragraph.indent),
    workbookBinding2123 = twipToCssPxOrZero(
      intFromSchemeProperty(
        workbookBinding2106?.scheme,
        DOCX_PARAGRAPH_RIGHT_INDENT_PREFIX,
      ),
    ),
    workbookBinding2124 = !!workbookBinding2110.bulletCharacter,
    workbookBinding2125 = !!workbookBinding2110.autoNumberType,
    workbookBinding2126 = workbookBinding2124 || workbookBinding2125,
    workbookBinding2127 = workbookBinding2121 + workbookBinding2122,
    workbookBinding2128 = workbookBinding2121,
    workbookBinding2129 =
      (workbookBinding2110.lineSpacingPercent ??
        request.masterDefaults?.lineSpacingPercent ??
        Math.round(DEFAULT_LINE_MULTIPLE * 1e5)) / 1e5,
    workbookBinding2130 = workbookBinding2129 > 0 ? workbookBinding2129 : 1,
    workbookBinding2131 = tabStopsFromParagraphStyle(workbookBinding2110),
    workbookBinding2132 =
      layoutProfile === "document"
        ? twipToCssPxOrZero(request.defaultTabStopTwips ?? 720)
        : 0,
    workbookBinding2133 =
      layoutProfile === "document" ? "document" : "presentation",
    workbookBinding2134 = layoutProfile === "presentation",
    workbookBinding2135 =
      workbookBinding2110.lineSpacingPoints !== undefined &&
      workbookBinding2110.lineSpacingPoints > 0
        ? hundredthsPointToCssPxOrZero(workbookBinding2110.lineSpacingPoints)
        : undefined,
    workbookBinding2136 =
      layoutProfile === "document" &&
      request.documentGridLinePitchTwips !== undefined &&
      workbookBinding2110.snapToGrid !== false
        ? twipToCssPxOrZero(request.documentGridLinePitchTwips)
        : undefined,
    workbookBinding2137 = remainingSpaceAfterPriorOverlap(
      previousParagraphSpaceAfterPx,
      workbookBinding2118,
    );
  workbookBinding2137 > 0 &&
    lines.push({
      segments: [],
      widthPx: 0,
      heightPx: workbookBinding2137,
      contentHeightPx: 0,
      align: "left",
      offsetPx: 0,
      availableWidthPx: request.boxWidthPx,
      baselineOffsetPx: 0,
      maxAscentPx: 0,
      maxDescentPx: 0,
      maxPx: 0,
    });
  let workbookBinding2138 = [],
    workbookBinding2139 = 0,
    workbookBinding2140 = "left",
    workbookBinding2141 = 0,
    workbookBinding2142 = 0,
    workbookBinding2143 = true,
    workbookBinding2144 = false,
    workbookBinding2145,
    workbookBinding2146,
    workbookBinding2147 = () =>
      workbookBinding2143 ? workbookBinding2127 : workbookBinding2128,
    _e = () =>
      Math.max(1, effectiveBoxW - workbookBinding2147() - workbookBinding2123),
    workbookBinding2148 = mergeStyleLayers(
      {},
      workbookBinding2106,
      request.elementStyle,
    );
  workbookBinding2140 =
    alignmentFromScheme(
      mergeSchemeCssDeclarations(
        request.elementStyle?.scheme,
        workbookBinding2106?.scheme,
      ),
    ) ??
    (Number(workbookBinding2148.alignment) === 4
      ? "justify"
      : workbookBinding2148.alignment === Jn.ALIGNMENT_TYPE_CENTER
        ? "center"
        : workbookBinding2148.alignment === Jn.ALIGNMENT_TYPE_RIGHT
          ? "right"
          : "left");
  let workbookBinding2149 = () => {
      if (
        !workbookBinding2138.some(
          (item) => item.text.length > 0 && item.text.trim().length > 0,
        )
      )
        return;
      let workbookBinding9655 = 0;
      for (; workbookBinding2138.length > 0; ) {
        let workbookBinding15718 =
          workbookBinding2138[workbookBinding2138.length - 1];
        if (
          !workbookBinding15718 ||
          workbookBinding15718.text.length === 0 ||
          workbookBinding15718.text.trim().length > 0 ||
          !WHITESPACE_RE.test(workbookBinding15718.text)
        )
          break;
        workbookBinding9655 += workbookBinding15718.widthPx;
        workbookBinding2138.pop();
      }
      workbookBinding9655 !== 0 &&
        ((workbookBinding2139 = Math.max(
          0,
          workbookBinding2139 - workbookBinding9655,
        )),
        (workbookBinding2141 = workbookBinding2138.reduce(
          (accumulator, current) => Math.max(accumulator, current.ascentPx),
          0,
        )),
        (workbookBinding2142 = workbookBinding2138.reduce(
          (accumulator, current) => Math.max(accumulator, current.descentPx),
          0,
        )));
    },
    be = (textIn8734) => {
      workbookBinding2138.push(textIn8734);
      workbookBinding2139 += textIn8734.widthPx;
      workbookBinding2141 = Math.max(workbookBinding2141, textIn8734.ascentPx);
      workbookBinding2142 = Math.max(workbookBinding2142, textIn8734.descentPx);
    },
    workbookBinding2150 = () => {
      if (!workbookBinding2145) return;
      let workbookBinding10299 = workbookBinding2145;
      if (
        ((workbookBinding2145 = undefined),
        workbookBinding10299.referenceSegment &&
          workbookBinding10299.widthPx > 0 &&
          workbookBinding10299.segments.length > 0)
      ) {
        let workbookBinding13827 = tabAlignedWidth({
            tabTarget: {
              positionPx: workbookBinding10299.tabStartPx,
              alignment: workbookBinding10299.alignment,
            },
            currentWidthPx: workbookBinding10299.startWidthPx,
            fieldWidthPx: workbookBinding10299.widthPx,
          }),
          workbookBinding13828 = Math.max(
            0,
            workbookBinding13827 - workbookBinding2139,
          );
        workbookBinding13828 > 0 &&
          be(
            spacerSegmentFromReference(
              workbookBinding10299.referenceSegment,
              workbookBinding13828,
            ),
          );
      }
      for (let workbookBinding23073 of workbookBinding10299.segments)
        be(workbookBinding23073);
    },
    workbookBinding2151 = () => {
      let workbookBinding19333 = lines[lines.length - 1];
      workbookBinding19333 &&
        workbookBinding19333.segments.some(
          (item) => item.paraIndex === paraIndex,
        ) &&
        (workbookBinding19333.flowBreakAfter = true);
    },
    workbookBinding2152 = (textIn587 = 0, textIn588) => {
      if (
        (workbookBinding2150(),
        (workbookBinding2146 = undefined),
        workbookBinding2138.length === 0)
      )
        return;
      layoutProfile !== "spreadsheet" && workbookBinding2149();
      let workbookBinding4553 =
          workbookBinding2138.reduce(
            (accumulator, current) => Math.max(accumulator, current.px),
            0,
          ) || defaultFontPx,
        workbookBinding4554 =
          workbookBinding2141 > 0
            ? workbookBinding2141
            : workbookBinding4553 * DEFAULT_TAB_STOP_EMU_FACTOR,
        workbookBinding4555 =
          workbookBinding2142 > 0
            ? workbookBinding2142
            : workbookBinding4553 * DEFAULT_TAB_STOP_FALLBACK_FACTOR,
        workbookBinding4556 =
          workbookBinding2138.length > 0 &&
          workbookBinding2138.every(
            (item) =>
              item.officeAscentPx !== undefined &&
              item.officeDescentPx !== undefined,
          ),
        workbookBinding4557 = resolveLineBoxMetrics({
          baseAscentPx: workbookBinding4554,
          baseDescentPx: workbookBinding4555,
          officeAscentPx: workbookBinding4556
            ? workbookBinding2138.reduce(
                (accumulator, current) =>
                  Math.max(accumulator, current.officeAscentPx ?? 0),
                0,
              )
            : undefined,
          officeDescentPx: workbookBinding4556
            ? workbookBinding2138.reduce(
                (accumulator, current) =>
                  Math.max(accumulator, current.officeDescentPx ?? 0),
                0,
              )
            : undefined,
          lineFontPx: workbookBinding4553,
          lineMultiple: workbookBinding2130,
          lineSpacingPx: workbookBinding2135,
          minimumContentHeightPx: workbookBinding2136,
          model: workbookBinding2133,
          usePresentationBaselineMetrics: workbookBinding2134,
        }),
        workbookBinding4558 = workbookBinding2147(),
        workbookBinding4559 = _e();
      lines.push({
        segments: workbookBinding2138.slice(),
        widthPx: workbookBinding2139,
        heightPx: workbookBinding4557.contentHeightPx + textIn587,
        contentHeightPx: workbookBinding4557.contentHeightPx,
        naturalHeightPx: workbookBinding4557.naturalHeightPx,
        leadingBeforePx: workbookBinding4557.leadingBeforePx,
        leadingAfterPx: workbookBinding4557.leadingAfterPx,
        align: workbookBinding2140,
        offsetPx: workbookBinding4558,
        availableWidthPx: workbookBinding4559,
        baselineOffsetPx: workbookBinding4557.baselineOffsetPx,
        maxAscentPx: workbookBinding4554,
        maxDescentPx: workbookBinding4555,
        maxPx: workbookBinding4554 + workbookBinding4555,
        flowBreakAfter: textIn588?.flowBreakAfter ?? false,
      });
      workbookBinding2138.length = 0;
      workbookBinding2139 = 0;
      workbookBinding2141 = 0;
      workbookBinding2142 = 0;
      workbookBinding2143 = false;
      workbookBinding2145 = undefined;
      workbookBinding2146 = undefined;
    },
    workbookBinding2153 = workbookBinding2125
      ? `${workbookBinding2110.autoNumberType}|${workbookBinding2121}|${workbookBinding2122}`
      : "",
    workbookBinding2154 = 0;
  if (workbookBinding2125) {
    let workbookBinding19387 = workbookBinding2110.autoNumberStartAt;
    listCounters[workbookBinding2153] === undefined &&
      (listCounters[workbookBinding2153] =
        typeof workbookBinding19387 == "number" && workbookBinding19387 > 0
          ? workbookBinding19387
          : 1);
    workbookBinding2154 = listCounters[workbookBinding2153];
  }
  let workbookBinding2155 = paragraph.runs ?? [];
  for (
    let workbookBinding2350 = 0;
    workbookBinding2350 < workbookBinding2155.length;
    workbookBinding2350++
  ) {
    let workbookBinding2351 = workbookBinding2155[workbookBinding2350];
    if (!workbookBinding2351) continue;
    let workbookBinding2352 = mergeStyleLayers(
        {},
        workbookBinding2351.textStyle,
        workbookBinding2106,
        request.elementStyle,
      ),
      workbookBinding2353 = mergeSchemeCssDeclarations(
        request.elementStyle?.scheme,
        workbookBinding2106?.scheme,
        workbookBinding2351.textStyle?.scheme,
      );
    workbookBinding2353 && (workbookBinding2352.scheme = workbookBinding2353);
    let workbookBinding2354 = fontSizeFromStyleOrScheme(workbookBinding2352),
      workbookBinding2355 = workbookBinding2354
        ? hundredthsPointToCssPx(workbookBinding2354, request.textScale)
        : defaultFontPx,
      workbookBinding2356 = typefaceFromStyleOrScheme(workbookBinding2352),
      workbookBinding2357 = resolveThemeTypefaceToken(
        workbookBinding2356,
        request.themeMap.fontScheme,
      );
    warnMissingFontFamily({
      family: workbookBinding2357,
      sourceTypeface: workbookBinding2356,
    });
    let workbookBinding2358 = resolveCssFontStack(
        quoteCssFontFamily(workbookBinding2357),
        layoutProfile,
      ),
      workbookBinding2359 = {
        style: workbookBinding2352?.italic ? "italic" : "normal",
        weight: workbookBinding2352?.bold ? "700" : "normal",
        family: workbookBinding2358,
      },
      workbookBinding2360 = buildMeasureFontShorthand(
        workbookBinding2359,
        workbookBinding2355,
      ),
      workbookBinding2361 = fontMetrics.getFontKey(workbookBinding2359),
      workbookBinding2362 = fontMetrics.getMetricsForSize(
        workbookBinding2359,
        workbookBinding2355,
      ),
      workbookBinding2363 = !!workbookBinding2351.hyperlink?.uri,
      workbookBinding2364 =
        workbookBinding2363 && !workbookBinding2352?.fill
          ? DEFAULT_HYPERLINK_COLOR
          : resolveColorToCssRgba(
              workbookBinding2352?.fill?.color,
              request.themeMap,
              request.defaultTextFill,
            ),
      workbookBinding2365 = workbookBinding2352?.fill,
      workbookBinding2366 = workbookBinding2352?.outline,
      workbookBinding2367 = workbookBinding2352?.shadow,
      workbookBinding2368 = workbookBinding2352?.highlight
        ? resolveColorToCssRgba(workbookBinding2352.highlight, request.themeMap)
        : highlightColorFromScheme(workbookBinding2352?.scheme),
      workbookBinding2369 = underlineWithHyperlinkDefault(
        workbookBinding2352,
        workbookBinding2363,
      ),
      workbookBinding2370 =
        workbookBinding2134 &&
        (!Number.isFinite(workbookBinding2352.characterSpacing) ||
          workbookBinding2352.characterSpacing === 0)
          ? GLYPH_ADVANCE_RESERVED_SIXTH
          : undefined;
    if (workbookBinding2126 && !workbookBinding2144) {
      let workbookBinding4003 = workbookBinding2125
          ? `${formatAutoNumberLabel(workbookBinding2154, workbookBinding2110.autoNumberType)} `
          : `${workbookBinding2110.bulletCharacter} `,
        workbookBinding4004 = segmentGraphemes(workbookBinding4003),
        workbookBinding4005 = measureCache.buildAdvance(
          workbookBinding2361,
          workbookBinding2360,
          workbookBinding2355,
          workbookBinding4003,
          workbookBinding4004,
          workbookBinding2370,
        ),
        workbookBinding4006 = measureCache.measureInkBounds(
          workbookBinding2360,
          workbookBinding4003,
        ),
        workbookBinding4007 = advanceAt(
          workbookBinding4005,
          workbookBinding4005.length - 1,
        );
      if (
        (workbookBinding2138.push({
          text: workbookBinding4003,
          widthPx: workbookBinding4007,
          font: workbookBinding2360,
          fontKey: workbookBinding2361,
          fill: workbookBinding2364,
          fillSource: workbookBinding2365,
          outlineSource: workbookBinding2366,
          shadowSource: workbookBinding2367,
          highlight: workbookBinding2368,
          underline: workbookBinding2369,
          px: workbookBinding2355,
          ascentPx: workbookBinding2362.ascentPx,
          descentPx: workbookBinding2362.descentPx,
          officeAscentPx: workbookBinding2362.officeAscentPx,
          officeDescentPx: workbookBinding2362.officeDescentPx,
          paintBaselineCompensationPx: workbookBinding2134
            ? workbookBinding4006.paintBaselineCompensationPx
            : undefined,
          run: workbookBinding2351,
          paraIndex,
          runIndex: workbookBinding2350,
          charStart: 0,
          charEnd: workbookBinding4003.length,
          advance: workbookBinding4005,
          inkLeftPx: workbookBinding4006.leftPx,
          inkRightPx: workbookBinding4006.rightPx,
          inkAscentPx: workbookBinding4006.ascentPx,
          inkDescentPx: workbookBinding4006.descentPx,
        }),
        (workbookBinding2139 += workbookBinding4007),
        (workbookBinding2141 = Math.max(
          workbookBinding2141,
          workbookBinding2362.ascentPx,
        )),
        (workbookBinding2142 = Math.max(
          workbookBinding2142,
          workbookBinding2362.descentPx,
        )),
        workbookBinding2143)
      ) {
        let workbookBinding7496 =
          workbookBinding2128 - workbookBinding2127 - workbookBinding4007;
        workbookBinding7496 > 0.5 &&
          (workbookBinding2138.push({
            text: "",
            widthPx: workbookBinding7496,
            font: workbookBinding2360,
            fontKey: workbookBinding2361,
            fill: workbookBinding2364,
            fillSource: workbookBinding2365,
            outlineSource: workbookBinding2366,
            shadowSource: workbookBinding2367,
            highlight: workbookBinding2368,
            underline: workbookBinding2369,
            px: workbookBinding2355,
            ascentPx: workbookBinding2362.ascentPx,
            descentPx: workbookBinding2362.descentPx,
            officeAscentPx: workbookBinding2362.officeAscentPx,
            officeDescentPx: workbookBinding2362.officeDescentPx,
            run: workbookBinding2351,
            paraIndex,
            runIndex: workbookBinding2350,
            charStart: workbookBinding4003.length,
            charEnd: workbookBinding4003.length,
            advance: new Float32Array(1),
            inkLeftPx: 0,
            inkRightPx: 0,
            inkAscentPx: 0,
            inkDescentPx: 0,
          }),
          (workbookBinding2139 += workbookBinding7496));
      }
      workbookBinding2144 = true;
      workbookBinding2125 &&
        (listCounters[workbookBinding2153] = workbookBinding2154 + 1);
    }
    let workbookBinding2371 = workbookBinding2351.text
        ? applyTextCaseTransforms(workbookBinding2351.text, workbookBinding2352)
        : "",
      workbookBinding2372 = workbookBinding2371
        ? tokenizeTextRuns(workbookBinding2371)
        : [];
    if (!workbookBinding2372.length) {
      workbookBinding2138.push({
        text: "",
        widthPx: 0,
        font: workbookBinding2360,
        fontKey: workbookBinding2361,
        fill: workbookBinding2364,
        fillSource: workbookBinding2365,
        outlineSource: workbookBinding2366,
        shadowSource: workbookBinding2367,
        highlight: workbookBinding2368,
        underline: workbookBinding2369,
        px: workbookBinding2355,
        ascentPx: workbookBinding2362.ascentPx,
        descentPx: workbookBinding2362.descentPx,
        officeAscentPx: workbookBinding2362.officeAscentPx,
        officeDescentPx: workbookBinding2362.officeDescentPx,
        run: workbookBinding2351,
        paraIndex,
        runIndex: workbookBinding2350,
        charStart: 0,
        charEnd: 0,
        advance: new Float32Array(1),
        inkLeftPx: 0,
        inkRightPx: 0,
        inkAscentPx: 0,
        inkDescentPx: 0,
      });
      workbookBinding2141 = Math.max(
        workbookBinding2141,
        workbookBinding2362.ascentPx,
      );
      workbookBinding2142 = Math.max(
        workbookBinding2142,
        workbookBinding2362.descentPx,
      );
      continue;
    }
    let workbookBinding2373 = 0;
    for (let workbookBinding2835 of workbookBinding2372) {
      if (workbookBinding2835.type === "flowBreak") {
        workbookBinding2150();
        workbookBinding2146 = undefined;
        workbookBinding2138.length > 0
          ? workbookBinding2152(0, {
              flowBreakAfter: true,
            })
          : workbookBinding2151();
        workbookBinding2373 += workbookBinding2835.text.length;
        continue;
      }
      if (workbookBinding2835.type === "newline") {
        workbookBinding2150();
        workbookBinding2146 = undefined;
        workbookBinding2138.length === 0 &&
          be({
            text: "",
            widthPx: 0,
            font: workbookBinding2360,
            fontKey: workbookBinding2361,
            fill: workbookBinding2364,
            fillSource: workbookBinding2365,
            outlineSource: workbookBinding2366,
            shadowSource: workbookBinding2367,
            highlight: workbookBinding2368,
            underline: workbookBinding2369,
            px: workbookBinding2355,
            ascentPx: workbookBinding2362.ascentPx,
            descentPx: workbookBinding2362.descentPx,
            officeAscentPx: workbookBinding2362.officeAscentPx,
            officeDescentPx: workbookBinding2362.officeDescentPx,
            run: workbookBinding2351,
            paraIndex,
            runIndex: workbookBinding2350,
            charStart: workbookBinding2373,
            charEnd: workbookBinding2373,
            advance: new Float32Array(1),
            inkLeftPx: 0,
            inkRightPx: 0,
            inkAscentPx: 0,
            inkDescentPx: 0,
          });
        workbookBinding2152();
        continue;
      }
      if (workbookBinding2835.type === "tab") {
        workbookBinding2150();
        let workbookBinding7478 =
            workbookBinding2146 === undefined
              ? workbookBinding2139
              : Math.max(workbookBinding2139, workbookBinding2146),
          workbookBinding7479 = resolveNextTabStop({
            tabStops: workbookBinding2131,
            defaultTabStopPx: workbookBinding2132,
            offsetPx: workbookBinding2147(),
            currentWidthPx: workbookBinding7478,
          });
        workbookBinding7479.alignment === "left" ||
        workbookBinding7479.alignment === "bar" ||
        workbookBinding7479.alignment === "clear"
          ? (workbookBinding2146 = tabAlignedWidth({
              tabTarget: workbookBinding7479,
              currentWidthPx: workbookBinding7478,
              fieldWidthPx: 0,
            }))
          : ((workbookBinding2146 = undefined),
            (workbookBinding2145 = {
              startWidthPx: workbookBinding2139,
              tabStartPx: workbookBinding7479.positionPx,
              alignment: workbookBinding7479.alignment,
              segments: [],
              widthPx: 0,
              maxAscentPx: 0,
              maxDescentPx: 0,
              referenceSegment: undefined,
            }));
        workbookBinding2373 += workbookBinding2835.text.length;
        continue;
      }
      let workbookBinding2836 =
        workbookBinding2835.graphemes ??
        segmentGraphemes(workbookBinding2835.text);
      if (!workbookBinding2836.length) continue;
      let workbookBinding2837 = measureCache.buildAdvance(
          workbookBinding2361,
          workbookBinding2360,
          workbookBinding2355,
          workbookBinding2835.text,
          workbookBinding2836,
          workbookBinding2370,
        ),
        workbookBinding2838 = (textIn530, textIn531) => {
          if (textIn530 >= textIn531) return textIn531;
          let workbookBinding4370 =
              textIn530 === 0 && textIn531 === workbookBinding2836.length
                ? workbookBinding2835.text
                : workbookBinding2836.slice(textIn530, textIn531).join(""),
            workbookBinding4371 = buildRelativeAdvances(
              workbookBinding2837,
              textIn530,
              textIn531,
            ),
            workbookBinding4372 = advanceAt(
              workbookBinding4371,
              workbookBinding4371.length - 1,
            ),
            workbookBinding4373 = measureCache.measureInkBounds(
              workbookBinding2360,
              workbookBinding4370,
            ),
            workbookBinding4374 = workbookBinding2373,
            workbookBinding4375 =
              workbookBinding4374 + workbookBinding4370.length,
            workbookBinding4376 = {
              text: workbookBinding4370,
              widthPx: workbookBinding4372,
              font: workbookBinding2360,
              fontKey: workbookBinding2361,
              fill: workbookBinding2364,
              fillSource: workbookBinding2365,
              outlineSource: workbookBinding2366,
              shadowSource: workbookBinding2367,
              highlight: workbookBinding2368,
              underline: workbookBinding2369,
              px: workbookBinding2355,
              ascentPx: workbookBinding2362.ascentPx,
              descentPx: workbookBinding2362.descentPx,
              officeAscentPx: workbookBinding2362.officeAscentPx,
              officeDescentPx: workbookBinding2362.officeDescentPx,
              paintBaselineCompensationPx: workbookBinding2134
                ? workbookBinding4373.paintBaselineCompensationPx
                : undefined,
              run: workbookBinding2351,
              paraIndex,
              runIndex: workbookBinding2350,
              charStart: workbookBinding4374,
              charEnd: workbookBinding4375,
              advance: workbookBinding4371,
              inkLeftPx: workbookBinding4373.leftPx,
              inkRightPx: workbookBinding4373.rightPx,
              inkAscentPx: workbookBinding4373.ascentPx,
              inkDescentPx: workbookBinding4373.descentPx,
            };
          if (workbookBinding2146 !== undefined) {
            let workbookBinding20847 = Math.max(
              0,
              workbookBinding2146 - workbookBinding2139,
            );
            workbookBinding20847 > 0 &&
              be(
                spacerSegmentFromReference(
                  workbookBinding4376,
                  workbookBinding20847,
                ),
              );
            workbookBinding2146 = undefined;
          }
          return (
            workbookBinding2145
              ? (workbookBinding2145.segments.push(workbookBinding4376),
                (workbookBinding2145.widthPx += workbookBinding4372),
                (workbookBinding2145.maxAscentPx = Math.max(
                  workbookBinding2145.maxAscentPx,
                  workbookBinding2362.ascentPx,
                )),
                (workbookBinding2145.maxDescentPx = Math.max(
                  workbookBinding2145.maxDescentPx,
                  workbookBinding2362.descentPx,
                )),
                (workbookBinding2145.referenceSegment ||= workbookBinding4376))
              : be(workbookBinding4376),
            (workbookBinding2373 = workbookBinding4375),
            textIn531
          );
        },
        workbookBinding2839 = 0;
      for (; workbookBinding2839 < workbookBinding2836.length; ) {
        if (workbookBinding2145) {
          workbookBinding2839 = workbookBinding2838(
            workbookBinding2839,
            workbookBinding2836.length,
          );
          break;
        }
        let workbookBinding10045 = _e() - workbookBinding2139;
        if (
          request.wrap &&
          workbookBinding10045 <= 0 &&
          workbookBinding2138.length
        ) {
          workbookBinding2152();
          continue;
        }
        let workbookBinding10046 =
          advanceAt(workbookBinding2837, workbookBinding2836.length) -
          advanceAt(workbookBinding2837, workbookBinding2839);
        if (!request.wrap || workbookBinding10046 <= workbookBinding10045) {
          workbookBinding2839 = workbookBinding2838(
            workbookBinding2839,
            workbookBinding2836.length,
          );
          break;
        }
        if (workbookBinding2835.type === "word" && workbookBinding2139 > 0) {
          workbookBinding2152();
          continue;
        }
        let workbookBinding10047 = findMaxAdvanceIndex(
            workbookBinding2837,
            workbookBinding2839,
            workbookBinding10045,
          ),
          workbookBinding10048 =
            workbookBinding10047 > workbookBinding2839
              ? workbookBinding10047
              : workbookBinding2839 + 1;
        workbookBinding2839 = workbookBinding2838(
          workbookBinding2839,
          workbookBinding10048,
        );
        workbookBinding2839 < workbookBinding2836.length &&
          workbookBinding2152();
      }
    }
  }
  if (workbookBinding2138.length === 0) {
    let workbookBinding5634 = mergeStyleLayers(
        {},
        workbookBinding2106,
        request.elementStyle,
      ),
      workbookBinding5635 = mergeSchemeCssDeclarations(
        request.elementStyle?.scheme,
        workbookBinding2106?.scheme,
      );
    workbookBinding5635 && (workbookBinding5634.scheme = workbookBinding5635);
    let workbookBinding5636 = fontSizeFromStyleOrScheme(workbookBinding5634),
      workbookBinding5637 = typefaceFromStyleOrScheme(workbookBinding5634),
      workbookBinding5638 = resolveThemeTypefaceToken(
        workbookBinding5637,
        request.themeMap.fontScheme,
      );
    warnMissingFontFamily({
      family: workbookBinding5638,
      sourceTypeface: workbookBinding5637,
    });
    let workbookBinding5639 = resolveCssFontStack(
        quoteCssFontFamily(workbookBinding5638),
        layoutProfile,
      ),
      workbookBinding5640 = {
        style: workbookBinding5634.italic ? "italic" : "normal",
        weight: workbookBinding5634.bold ? "700" : "normal",
        family: workbookBinding5639,
      },
      workbookBinding5641 = workbookBinding5636
        ? hundredthsPointToCssPx(workbookBinding5636, request.textScale)
        : defaultFontPx,
      workbookBinding5642 = buildMeasureFontShorthand(
        workbookBinding5640,
        workbookBinding5641,
      ),
      workbookBinding5643 = fontMetrics.getFontKey(workbookBinding5640),
      workbookBinding5644 = fontMetrics.getMetricsForSize(
        workbookBinding5640,
        workbookBinding5641,
      );
    workbookBinding2138.push({
      text: "",
      widthPx: 0,
      font: workbookBinding5642,
      fontKey: workbookBinding5643,
      fill: request.defaultTextFill,
      highlight: undefined,
      underline: undefined,
      px: workbookBinding5641,
      ascentPx: workbookBinding5644.ascentPx,
      descentPx: workbookBinding5644.descentPx,
      officeAscentPx: workbookBinding5644.officeAscentPx,
      officeDescentPx: workbookBinding5644.officeDescentPx,
      run: {
        text: "",
        citations: [],
        reviewMarkIds: [],
      },
      paraIndex,
      runIndex: 0,
      charStart: 0,
      charEnd: 0,
      advance: new Float32Array(1),
      inkLeftPx: 0,
      inkRightPx: 0,
      inkAscentPx: 0,
      inkDescentPx: 0,
    });
    workbookBinding2141 = Math.max(
      workbookBinding2141,
      workbookBinding5644.ascentPx,
    );
    workbookBinding2142 = Math.max(
      workbookBinding2142,
      workbookBinding5644.descentPx,
    );
  }
  return (workbookBinding2152(workbookBinding2119), workbookBinding2119);
}
