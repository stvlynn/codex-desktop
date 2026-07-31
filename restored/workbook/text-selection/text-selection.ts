// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-31: TextSelection VO (legacy Binding622 WorkbookClass6); ops/compare peeled.

import { TextStyle, alignmentProtoToName, parseTextStyleInput, applyTextStylePatch } from "../text-style";
import { applyListParagraphDefaults } from "../text-run";
import {
  colorConfigFromValue,
  fillConfigFromValue,
  outlineConfigFromValue,
  classNameAndStyleConfigFromPartial,
  textRunStyleConfigFromPartial,
  applyStyleConfigToParagraph,
  trimNonEmptyString,
} from "../style-tokens";
import type {
  TextSelectionOptions,
  TextSelectionParagraphs,
  TextSelectionSpan,
} from "./types";
import {
  sameSelectionValue,
  sameSelectionArray,
  sameSelectionJson,
  sameSelectionColor,
  sameSelectionFill,
  sameSelectionOutline,
} from "./text-selection-compare";
import {
  type TextSelectionMutationHost,
  buildReplacementRuns,
  firstParagraphFromPayload,
  copyParagraphStyleFields,
  runsTextLength,
  isParagraphsPayload,
  resolveSoleParagraphSpan,
} from "./text-selection-ops-helpers";
import {
  replaceTextSelection,
  insertAfterTextSelection,
  splitRunsAtSelectionBoundaries,
} from "./text-selection-ops-mutate";

export class TextSelection {
  #e: TextSelectionParagraphs;
  #t: TextSelectionSpan[];
  #n: TextSelectionOptions;
  #r = false;
  #i: string | undefined;
  constructor(
    tsIn4365,
    tsIn4366,
    tsIn4367 = {},
  ) {
    this.#e = tsIn4365;
    this.#t = tsIn4366
      .map((item) => ({
        ...item,
      }))
      .filter((item) => item.startOffset < item.endOffset)
      .sort((tsIn9115, tsIn9116) =>
        tsIn9115.paragraphIndex ===
        tsIn9116.paragraphIndex
          ? tsIn9115.startOffset - tsIn9116.startOffset
          : tsIn9115.paragraphIndex -
            tsIn9116.paragraphIndex,
      );
    this.#n = {
      ...tsIn4367,
    };
  }
  static empty(tsIn13102, tsIn13103 = {}) {
    return new TextSelection(tsIn13102, [], tsIn13103);
  }
  get isEmpty() {
    return this.#t.length === 0;
  }
  get bold() {
    return this.#d((tsIn16593) => tsIn16593.bold);
  }
  set bold(tsIn10114) {
    this.#s((tsIn13929, tsIn13930) => {
      this.#b(tsIn13930, tsIn13929).bold =
        tsIn10114;
    });
    this.#l({
      bold: tsIn10114,
    });
  }
  get italic() {
    return this.#d((tsIn16507) => tsIn16507.italic);
  }
  set italic(tsIn9881) {
    this.#s((tsIn13715, tsIn13716) => {
      this.#b(tsIn13716, tsIn13715).italic =
        tsIn9881;
    });
    this.#l({
      italic: tsIn9881,
    });
  }
  get fontSize() {
    return this.#d((tsIn16410) => tsIn16410.fontSize);
  }
  set fontSize(tsIn9703) {
    this.#s((tsIn13583, tsIn13584) => {
      this.#b(tsIn13584, tsIn13583).fontSize =
        tsIn9703;
    });
    this.#l({
      fontSize: tsIn9703,
    });
  }
  get typeface() {
    return this.#d((tsIn16411) => tsIn16411.typeface);
  }
  set typeface(tsIn9704) {
    this.#s((tsIn13585, tsIn13586) => {
      this.#b(tsIn13586, tsIn13585).typeface =
        tsIn9704;
    });
    this.#l({
      typeface: tsIn9704,
    });
  }
  get underline() {
    return this.#d((tsIn16383) => tsIn16383.underline);
  }
  set underline(tsIn9598) {
    this.#s((tsIn13467, tsIn13468) => {
      this.#b(tsIn13468, tsIn13467).underline =
        tsIn9598;
    });
    this.#l({
      underline: tsIn9598,
    });
  }
  get color() {
    return this.#d(
      (tsIn11322) => {
        let tsBind21785 = tsIn11322.color;
        return tsBind21785?.toProto()
          ? tsBind21785
          : undefined;
      },
      (tsIn16217, tsIn16218) =>
        this.#k(tsIn16217, tsIn16218),
    );
  }
  set color(tsIn8410) {
    this.#s((tsIn11037, tsIn11038) => {
      let tsBind21564 = this.#b(
        tsIn11038,
        tsIn11037,
      );
      tsBind21564.fill = {
        type: "solid",
        color: tsIn8410,
      };
    });
    this.#l({
      color: colorConfigFromValue(tsIn8410),
    });
  }
  get fill() {
    return this.#d(
      (tsIn11353) => {
        let tsBind21831 = tsIn11353.fill;
        return tsBind21831?.toProto()
          ? tsBind21831
          : undefined;
      },
      (tsIn16219, tsIn16220) =>
        this.#A(tsIn16219, tsIn16220),
    );
  }
  set fill(tsIn9218) {
    this.#s((tsIn12283, tsIn12284) => {
      let tsBind22378 = this.#b(
        tsIn12284,
        tsIn12283,
      );
      tsBind22378.fill = tsIn9218;
    });
    this.#l({
      fill: fillConfigFromValue(tsIn9218),
    });
  }
  get highlight() {
    return this.#d(
      (tsIn11154) => {
        let tsBind21638 = tsIn11154.highlight;
        return tsBind21638?.toProto()
          ? tsBind21638
          : undefined;
      },
      (tsIn16221, tsIn16222) =>
        this.#k(tsIn16221, tsIn16222),
    );
  }
  set highlight(tsIn9490) {
    this.#s((tsIn13469, tsIn13470) => {
      this.#b(tsIn13470, tsIn13469).highlight =
        tsIn9490;
    });
    this.#l({
      highlight: colorConfigFromValue(tsIn9490),
    });
  }
  get outline() {
    return this.#d(
      (tsIn11231) => {
        let tsBind21702 = tsIn11231.outline;
        return tsBind21702?.toProto()
          ? tsBind21702
          : undefined;
      },
      (tsIn16223, tsIn16224) =>
        this.#j(tsIn16223, tsIn16224),
    );
  }
  set outline(tsIn8941) {
    this.#s((tsIn12112, tsIn12113) => {
      let tsBind22286 = this.#b(
        tsIn12113,
        tsIn12112,
      );
      tsBind22286.outline = tsIn8941;
    });
    this.#l({
      outline: outlineConfigFromValue(tsIn8941),
    });
  }
  get shadow() {
    return this.#d(
      (tsIn16508) => tsIn16508.shadow,
      (tsIn14862, tsIn14863) =>
        JSON.stringify(tsIn14862) ===
        JSON.stringify(tsIn14863),
    );
  }
  set shadow(tsIn9167) {
    this.#s((tsIn12168, tsIn12169) => {
      let tsBind22312 = this.#b(
        tsIn12169,
        tsIn12168,
      );
      tsBind22312.shadow = tsIn9167;
    });
    this.#l({
      shadow: tsIn9167,
    });
  }
  get hyperlink() {
    return this.#f(
      (tsIn16306, tsIn16307) =>
        tsIn16306.hyperlink,
      (tsIn16225, tsIn16226) =>
        this.#O(tsIn16225, tsIn16226),
    );
  }
  set hyperlink(tsIn9026) {
    this.#s((tsIn13104) => {
      tsIn13104.hyperlink = tsIn9026
        ? {
            ...tsIn9026,
          }
        : undefined;
    });
    this.#l({
      link: tsIn9026
        ? {
            ...tsIn9026,
          }
        : null,
    });
  }
  get link() {
    return this.hyperlink;
  }
  set link(tsIn14511) {
    this.hyperlink = tsIn14511;
  }
  get citations() {
    return this.#f(
      (tsIn16384) => tsIn16384.citations,
      (tsIn16227, tsIn16228) =>
        this.#E(tsIn16227, tsIn16228),
    );
  }
  set citations(tsIn10287) {
    let tsBind20764 = tsIn10287
      ? [...tsIn10287]
      : [];
    this.#s((tsIn14864) => {
      tsIn14864.citations = tsBind20764;
    });
  }
  set reviewMarks(tsIn7563) {
    let tsBind18043 = (tsIn7563 ?? [])
      .map((item) => (typeof item == "string" ? item : item.id))
      .filter((item) => !!item);
    this.#s((tsIn14512) => {
      tsIn14512.reviewMarkIds = tsBind18043;
    });
  }
  get alignment() {
    return this.#p((tsIn16257) =>
      alignmentProtoToName(tsIn16257.alignment),
    );
  }
  set alignment(tsIn9067) {
    this.#c((tsIn12357) => {
      let tsBind22396 = this.#x(tsIn12357);
      tsBind22396.alignment = tsIn9067;
    });
    this.#l({
      alignment: tsIn9067,
    });
  }
  get spacingBefore() {
    return this.#m((tsIn16334) => tsIn16334.spaceBefore);
  }
  set spacingBefore(tsIn9762) {
    this.#c((tsIn14697) => {
      tsIn14697.spaceBefore = tsIn9762;
    });
    this.#l({
      spacingBefore: tsIn9762,
    });
  }
  get lineSpacing() {
    let tsBind20887 = this.#m(
      (tsIn16048) => tsIn16048.lineSpacingPercent,
    );
    if (tsBind20887 !== undefined)
      return tsBind20887 / 1e5;
  }
  set lineSpacing(tsIn8411) {
    this.#c((tsIn11354) => {
      tsIn11354.lineSpacingPercent =
        tsIn8411 === undefined
          ? undefined
          : Math.round(tsIn8411 * 1e5);
    });
    this.#l({
      lineSpacing: tsIn8411,
    });
  }
  get spacingAfter() {
    return this.#m((tsIn16348) => tsIn16348.spaceAfter);
  }
  set spacingAfter(tsIn9843) {
    this.#c((tsIn14786) => {
      tsIn14786.spaceAfter = tsIn9843;
    });
    this.#l({
      spacingAfter: tsIn9843,
    });
  }
  get indentLeft() {
    return this.#m((tsIn16349) => tsIn16349.marginLeft);
  }
  set indentLeft(tsIn9994) {
    this.#c((tsIn14787) => {
      tsIn14787.marginLeft = tsIn9994;
    });
    this.#l({
      indentLeft: tsIn9994,
    });
  }
  get indentFirstLine() {
    return this.#m((tsIn16509) => tsIn16509.indent);
  }
  set indentFirstLine(tsIn9788) {
    this.#c((tsIn15178) => {
      tsIn15178.indent = tsIn9788;
    });
    this.#l({
      indentFirstLine: tsIn9788,
    });
  }
  get style() {
    let tsBind16061 = this.#m(
      (tsIn16459) => tsIn16459.styleId,
    );
    if (tsBind16061 !== undefined) return tsBind16061;
    if (
      !this.#h().some((item) => {
        let tsBind21742 = item.styleId;
        return (
          tsBind21742 !== undefined && tsBind21742 !== ""
        );
      })
    )
      return this.#S()?.name;
  }
  set style(tsIn2969) {
    let tsBind10914 = parseTextStyleInput(tsIn2969);
    if (tsBind10914) {
      this.#a(tsBind10914);
      return;
    }
    if (
      tsIn2969 !== undefined &&
      typeof tsIn2969 != "string"
    )
      return;
    let tsBind10915 =
        typeof tsIn2969 == "string" &&
        tsIn2969.trim().length > 0
          ? tsIn2969
          : undefined,
      tsBind10916 = tsBind10915
        ? this.#n.resolveTextStyle?.(tsBind10915)
        : undefined;
    this.#c((tsIn8837) => {
      tsIn8837.styleId = tsBind10915;
      tsIn8837.textStyle = tsBind10916;
      applyListParagraphDefaults(
        tsIn8837,
        tsBind10915,
        this.#n.listPresetProfile ?? "presentation",
      );
      this.#C(tsIn8837);
    });
    this.#n.setDefaultTextStyle?.(tsBind10916);
    this.#z();
    this.#l({
      style: tsBind10915,
    });
  }
  get className() {
    return this.#i;
  }
  set className(tsIn10920) {
    let tsBind21428 = trimNonEmptyString(tsIn10920);
    this.#i = tsBind21428;
    tsBind21428 &&
      this.#a({
        className: tsBind21428,
      });
  }
  #a(tsIn5077) {
    let { className, styleConfig } = classNameAndStyleConfigFromPartial(tsIn5077);
    className !== undefined && (this.#i = className);
    this.#s((tsIn13717, tsIn13718) => {
      applyTextStylePatch(
        this.#b(tsIn13718, tsIn13717),
        styleConfig,
      );
    });
    this.#c((tsIn15098) => {
      applyStyleConfigToParagraph(tsIn15098, styleConfig);
    });
    let tsBind14531 = this.#o(styleConfig);
    this.#n.setDefaultTextStyle?.(tsBind14531);
    this.#z();
    this.#l(textRunStyleConfigFromPartial(tsIn5077));
  }
  #o(tsIn10380) {
    let tsBind20851 = this.#S(),
      tsBind20852 = tsBind20851
        ? new TextStyle(tsBind20851.toProto())
        : new TextStyle();
    return (
      applyTextStylePatch(tsBind20852, tsIn10380),
      tsBind20852
    );
  }
  getTextRange() {
    if (this.isEmpty || this.#t.length === 0) return;
    let tsBind14686 = this.#t[0],
      tsBind14687 = this.#t[this.#t.length - 1],
      tsBind14688 = this.#D(),
      tsBind14689 =
        (tsBind14688[tsBind14686.paragraphIndex] ?? 0) +
        tsBind14686.startOffset,
      tsBind14690 =
        (tsBind14688[tsBind14687.paragraphIndex] ?? 0) +
        tsBind14687.endOffset;
    return {
      startCp: tsBind14689,
      length: Math.max(0, tsBind14690 - tsBind14689),
    };
  }
  replace(input: unknown) {
    replaceTextSelection(this.#mutationHost(), input);
  }
  insertAfter(input: unknown) {
    return insertAfterTextSelection(this.#mutationHost(), input);
  }
  #s(tsIn12491) {
    this.isEmpty || (this.#w(), this.#_(tsIn12491), this.#z());
  }
  #c(tsIn13153) {
    this.isEmpty || (this.#v(tsIn13153), this.#z());
  }
  #l(tsIn4089) {
    if (
      !this.#n.recordOp ||
      !Object.values(tsIn4089).some((item) => item !== undefined)
    )
      return;
    let tsBind13055 = this.#n.getAnchorId?.();
    if (!tsBind13055) return;
    let tsBind13056 = this.getTextRange();
    if (!tsBind13056 || tsBind13056.length <= 0) return;
    let tsBind13057 = this.#u(
      tsBind13055,
      tsBind13056,
    );
    tsBind13057 &&
      this.#n.recordOp({
        op: "textrange.style.set",
        target: tsBind13057,
        props: tsIn4089,
      });
  }
  #u(tsIn5702, tsIn5703) {
    if (tsIn5702.startsWith("@"))
      return `tr/${tsIn5702}/${tsIn5703.startCp}/${tsIn5703.length}`;
    let tsBind15616 = tsIn5702.indexOf("/");
    if (
      tsBind15616 <= 0 ||
      tsBind15616 === tsIn5702.length - 1
    )
      return;
    let tsBind15617 = tsIn5702.slice(
        0,
        tsBind15616,
      ),
      tsBind15618 = tsIn5702.slice(
        tsBind15616 + 1,
      );
    if (!(!tsBind15617 || !tsBind15618))
      return `tr/${tsBind15617}/${tsBind15618}/${tsIn5703.startCp}/${tsIn5703.length}`;
  }
  #d(tsIn4360, tsIn4361 = this.#T) {
    return this.#f((tsIn5165, tsIn5166) => {
      let tsBind14670 = tsIn5165.textStyle;
      if (tsBind14670) {
        let tsBind22287 = tsIn4360(tsBind14670);
        if (tsBind22287 !== undefined) return tsBind22287;
      }
      let tsBind14671 = tsIn5166.textStyle;
      if (tsBind14671) {
        let tsBind22288 = tsIn4360(tsBind14671);
        if (tsBind22288 !== undefined) return tsBind22288;
      }
      let tsBind14672 = this.#S();
      return tsBind14672
        ? tsIn4360(tsBind14672)
        : undefined;
    }, tsIn4361);
  }
  #f(tsIn5035, tsIn5036 = this.#T) {
    let tsBind14487 = this.#g();
    if (tsBind14487.length === 0) return;
    let tsBind14488,
      tsBind14489 = false;
    for (let { run, paragraph } of tsBind14487) {
      let tsBind19641 = tsIn5035(run, paragraph);
      if (!tsBind14489) {
        tsBind14489 = true;
        tsBind14488 = tsBind19641;
        continue;
      }
      if (!tsIn5036(tsBind14488, tsBind19641))
        return;
    }
    return tsBind14488;
  }
  #p(tsIn6249, tsIn6250 = this.#T) {
    return this.#m((tsIn7477) => {
      let tsBind17953 = tsIn7477.textStyle;
      if (tsBind17953) {
        let tsBind22289 = tsIn6249(tsBind17953);
        if (tsBind22289 !== undefined) return tsBind22289;
      }
      let tsBind17954 = this.#S();
      return tsBind17954
        ? tsIn6249(tsBind17954)
        : undefined;
    }, tsIn6250);
  }
  #m(tsIn5353, tsIn5354 = this.#T) {
    let tsBind15061 = this.#h();
    if (tsBind15061.length === 0) return;
    let tsBind15062,
      tsBind15063 = false;
    for (let tsBind19182 of tsBind15061) {
      let tsBind19734 = tsIn5353(tsBind19182);
      if (!tsBind15063) {
        tsBind15063 = true;
        tsBind15062 = tsBind19734;
        continue;
      }
      if (!tsIn5354(tsBind15062, tsBind19734))
        return;
    }
    return tsBind15062;
  }
  #h() {
    let tsBind18594 = [],
      tsBind18595 = new Set();
    return (
      this.#v((tsIn12980) => {
        tsBind18595.has(tsIn12980) ||
          (tsBind18595.add(tsIn12980),
          tsBind18594.push(tsIn12980));
      }),
      tsBind18594
    );
  }
  #g() {
    let tsBind17237 = [],
      tsBind17238 = new Set();
    return (
      this.#w(),
      this.#_((tsIn11512, tsIn11513) => {
        tsBind17238.has(tsIn11512) ||
          (tsBind17238.add(tsIn11512),
          tsBind17237.push({
            run: tsIn11512,
            paragraph: tsIn11513,
          }));
      }),
      tsBind17237
    );
  }
  #_(tsIn2095) {
    let tsBind8999 = this.#y();
    for (let [
      tsBind9511,
      tsBind9512,
    ] of tsBind8999.entries()) {
      let tsBind9723 = this.#e.getItem(tsBind9511);
      if (!tsBind9723) continue;
      let tsBind9724 = tsBind9723.runs.items;
      if (tsBind9724.length === 0) continue;
      let tsBind9725 = [...tsBind9512].sort(
          (tsIn15573, tsIn15574) =>
            tsIn15573.startOffset - tsIn15574.startOffset,
        ),
        tsBind9726 = 0,
        tsBind9727 = 0;
      for (let tsBind12985 of tsBind9724) {
        let tsBind13265 = tsBind12985.text.length;
        if (tsBind13265 === 0) continue;
        let tsBind13266 = tsBind9726,
          tsBind13267 =
            tsBind13266 + tsBind13265;
        for (
          ;
          tsBind9727 < tsBind9725.length &&
          !(
            tsBind9725[tsBind9727].endOffset >
            tsBind13266
          );
        )
          tsBind9727 += 1;
        let tsBind13268 = tsBind9725[tsBind9727];
        if (!tsBind13268) break;
        tsBind13268.startOffset <= tsBind13266 &&
          tsBind13267 <= tsBind13268.endOffset &&
          tsBind13268.startOffset !==
            tsBind13268.endOffset &&
          tsIn2095(tsBind12985, tsBind9723);
        tsBind9726 = tsBind13267;
      }
    }
  }
  #v(tsIn9519) {
    let tsBind20036 = this.#y();
    for (let tsBind21832 of tsBind20036.keys()) {
      let tsBind22478 = this.#e.getItem(tsBind21832);
      tsBind22478 && tsIn9519(tsBind22478);
    }
  }
  #y() {
    let tsBind18303 = new Map();
    for (let tsBind20587 of this.#t) {
      tsBind18303.has(tsBind20587.paragraphIndex) ||
        tsBind18303.set(tsBind20587.paragraphIndex, []);
      tsBind18303
        .get(tsBind20587.paragraphIndex)
        .push(tsBind20587);
    }
    return tsBind18303;
  }
  #b(tsIn7564, tsIn7565) {
    let tsBind18044 = tsIn7565.textStyle;
    if (!tsBind18044) {
      let tsBind20733 = tsIn7564.textStyle ?? this.#S();
      tsBind18044 = tsBind20733
        ? new TextStyle(tsBind20733.toProto())
        : new TextStyle();
      tsIn7565.textStyle = tsBind18044;
    }
    return tsBind18044;
  }
  #x(tsIn8056) {
    let tsBind18569 = tsIn8056.textStyle;
    if (!tsBind18569) {
      let tsBind21210 = this.#S();
      tsBind18569 = tsBind21210
        ? new TextStyle(tsBind21210.toProto())
        : new TextStyle();
      tsIn8056.textStyle = tsBind18569;
    }
    return tsBind18569;
  }
  #S() {
    return this.#n.getDefaultTextStyle?.();
  }
  #C(tsIn11459) {
    let tsBind21892 = tsIn11459.runs.items;
    for (let tsBind23031 of tsBind21892)
      tsBind23031.textStyle = undefined;
  }
  #w() {
    splitRunsAtSelectionBoundaries(this.#mutationHost());
  }
  #T(a: unknown, b: unknown) {
    return sameSelectionValue(a, b);
  }
  #E(a: unknown[] | null | undefined, b: unknown[] | null | undefined) {
    return sameSelectionArray(a, b);
  }
  #O(a: unknown, b: unknown) {
    return sameSelectionJson(a, b);
  }
  #k(a: any, b: any) {
    return sameSelectionColor(a, b);
  }
  #A(a: any, b: any) {
    return sameSelectionFill(a, b);
  }
  #j(a: any, b: any) {
    return sameSelectionOutline(a, b);
  }
  #M() {
    return resolveSoleParagraphSpan(this.#mutationHost());
  }
  #N(input: unknown, runsCollection: any, templateRun: any) {
    return buildReplacementRuns(input, runsCollection, templateRun);
  }
  #P(input: unknown) {
    return firstParagraphFromPayload(input);
  }
  #F(target: any, source: any) {
    copyParagraphStyleFields(target, source);
  }
  #I(runs: Array<{ text: string }>) {
    return runsTextLength(runs);
  }
  #L(value: unknown) {
    return isParagraphsPayload(value);
  }
  #mutationHost(): TextSelectionMutationHost {
    return {
      paragraphs: this.#e,
      ranges: this.#t,
      options: this.#n,
      runsSplit: this.#r,
      isEmpty: this.isEmpty,
      setRanges: (next) => {
        this.#t = next;
      },
      setRunsSplit: (next) => {
        this.#r = next;
      },
      notifyLayoutInvalidated: () => this.#z(),
      cloneOptions: () => this.#R(),
      empty: () => TextSelection.empty(this.#e, this.#R()),
      create: (paragraphs, ranges, options) =>
        new TextSelection(paragraphs, ranges, options),
    };
  }
  #R() {
    return {
      ...this.#n,
    };
  }
  #z() {
    this.#n.onLayoutInvalidated?.();
  }
}
