// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: DetachedText VO (legacy Binding626 WorkbookClass4); style peels.

import {
  TextStyle,
  alignmentProtoToName,
  verticalAlignmentNameToAnchor,
  parseTextStyleInput,
  applyTextStylePatch,
} from "../text-style";
import { Paragraphs, applyListParagraphDefaults } from "../text-run";
import { TextSelection } from "../text-selection";
import { segmentGraphemes } from "../font-metrics";
import {
  colorConfigFromValue,
  fillConfigFromValue,
  outlineConfigFromValue,
  classNameAndStyleConfigFromPartial,
  normalizeStyleId,
  textBoxStyleConfigFromPartial,
  textRunStyleConfigFromPartial,
  applyStyleConfigToParagraph,
  trimNonEmptyString,
} from "../style-tokens";
import { anchorTypeProtoToName } from "../chart-proto-name-maps";
import type { DetachedTextHost, DetachedTextOptions } from "./types";
import { DETACHED_TEXT_HOST } from "./detached-text-host";
import { isDetachedTextPayload } from "./text-input-guards";
import { normalizeParagraphInputs } from "./text-input-build";
import {
  isPlainRunList,
  isMathInline,
} from "./text-input-guards";
import { paragraphToConfig } from "./text-input-serialize";
import {
  getDetachedBold,
  setDetachedBold,
  getDetachedItalic,
  setDetachedItalic,
  getDetachedFontSize,
  setDetachedFontSize,
  getDetachedTypeface,
  setDetachedTypeface,
  getDetachedLineSpacing,
  setDetachedLineSpacing,
  getDetachedUnderline,
  setDetachedUnderline,
  getDetachedColor,
  setDetachedColor,
  getDetachedFill,
  setDetachedFill,
  getDetachedHighlight,
  setDetachedHighlight,
  getDetachedOutline,
  setDetachedOutline,
  getDetachedShadow,
  setDetachedShadow,
  getDetachedAlignment,
  setDetachedAlignment,
  getDetachedVerticalAlignment,
  setDetachedVerticalAlignment,
  getDetachedAutoFit,
  setDetachedAutoFit,
  getDetachedWrap,
  setDetachedWrap,
  getDetachedInsets,
  setDetachedInsets,
} from "./detached-text-style-props";
import {
  applyNamedStyle as applyNamedStylePeel,
  applyStylePartial as applyStylePartialPeel,
  applyStyleConfigPartial as applyStyleConfigPartialPeel,
  resolveStyleNameFromPartial,
  pickStyleConfigFields,
  applyBoxOnlyFields as applyBoxOnlyFieldsPeel,
  styleRecordFromPartial as styleRecordFromPartialPeel,
  clearRunStyles as clearRunStylesPeel,
} from "./detached-text-style-apply";

export class DetachedText {
  #e: any;
  #t: DetachedTextOptions["getDefaultTextStyle"];
  #n: DetachedTextOptions["setDefaultTextStyle"];
  #r: DetachedTextOptions["resolveTextStyle"];
  #i: string;
  #a: string | undefined;
  #o: string | undefined;
  #s: DetachedTextOptions["onLayoutInvalidated"];
  #c: DetachedTextOptions["onMutated"];
  #l: ((op: unknown) => void) | undefined;
  #u: (() => unknown) | undefined;
  #d: (() => string | undefined) | undefined;
  constructor(dtIn2234, dtIn2235 = {}) {
    if (
      ((this.#e = dtIn2234),
      (this.#t = dtIn2235.getDefaultTextStyle),
      (this.#n = dtIn2235.setDefaultTextStyle),
      (this.#r = dtIn2235.resolveTextStyle),
      (this.#i = dtIn2235.listPresetProfile ?? "presentation"),
      (this.#s = dtIn2235.onLayoutInvalidated),
      (this.#c = dtIn2235.onMutated),
      (this.#l = dtIn2235.record?.recordOp),
      (this.#u = dtIn2235.record?.getTargetRef),
      (this.#d = dtIn2235.record?.getAnchorId),
      (this.#a = this.#R(this.#e.items)),
      !this.#a)
    ) {
      let dtBind21856 = this.defaultTextStyle;
      dtBind21856?.name && (this.#a = dtBind21856.name);
    }
    dtIn2235.autoFit !== undefined &&
      this.#D(
        dtIn2235.autoFit,
        (dtIn14357, dtIn14358) => {
          dtIn14357.autoFit = dtIn14358;
        },
      );
  }
  static create(
    dtIn6189 = "",
    dtIn6190 = DETACHED_TEXT_HOST,
  ) {
    let dtBind16268 = new Paragraphs(
        dtIn6190,
        [],
      ),
      dtBind16269 = new DetachedText(dtBind16268, {
        resolveTextStyle: (dtIn15863) =>
          dtIn6190.getTextStyleByName(dtIn15863),
        listPresetProfile:
          dtIn6190.getListPresetProfile?.() ?? "presentation",
      });
    return (
      dtBind16269.set(dtIn6189),
      dtBind16269
    );
  }
  toString() {
    return this.#e.toPlainText();
  }
  get(dtIn6209) {
    if (!dtIn6209)
      return TextSelection.empty(this.#e, this.#G());
    let dtBind16288 = this.toString().indexOf(dtIn6209);
    if (dtBind16288 === -1)
      return TextSelection.empty(this.#e, this.#G());
    let dtBind16289 =
        dtBind16288 + dtIn6209.length,
      dtBind16290 = this.#V(
        dtBind16288,
        dtBind16289,
      );
    return new TextSelection(this.#e, dtBind16290, this.#G());
  }
  getRange(dtIn5333, dtIn5334) {
    let dtBind15013 = Math.max(0, Math.floor(dtIn5333)),
      dtBind15014 = Math.max(0, Math.floor(dtIn5334));
    if (dtBind15014 === 0)
      return TextSelection.empty(this.#e, this.#G());
    let dtBind15015 = dtBind15013 + dtBind15014,
      dtBind15016 = this.#V(
        dtBind15013,
        dtBind15015,
      );
    return dtBind15016.length === 0
      ? TextSelection.empty(this.#e, this.#G())
      : new TextSelection(this.#e, dtBind15016, this.#G());
  }
  selectRunRanges(dtIn6385) {
    if (!Array.isArray(dtIn6385) || dtIn6385.length === 0)
      return TextSelection.empty(this.#e, this.#G());
    let dtBind16554 = this.#H(dtIn6385);
    return dtBind16554.length === 0
      ? TextSelection.empty(this.#e, this.#G())
      : new TextSelection(this.#e, dtBind16554, this.#G());
  }
  set(dtIn4010) {
    if (
      (this.#b(dtIn4010),
      dtIn4010 instanceof DetachedText)
    ) {
      this.#T(dtIn4010);
      this.#K();
      return;
    }
    if (isDetachedTextPayload(dtIn4010)) {
      this.#N(dtIn4010);
      this.#K();
      return;
    }
    if (Array.isArray(dtIn4010)) {
      if (isDetachedTextPayload(dtIn4010)) {
        this.#N(dtIn4010);
        this.#K();
        return;
      }
      this.#A(dtIn4010);
      this.#K();
      return;
    }
    this.#k(dtIn4010);
    this.#K();
  }
  add(dtIn4298) {
    if (dtIn4298 != null) {
      if (Array.isArray(dtIn4298)) {
        if (isDetachedTextPayload(dtIn4298)) {
          this.#P(dtIn4298);
          this.#K();
          return;
        }
        for (let dtBind23083 of dtIn4298)
          this.add(dtBind23083);
        return;
      }
      if (dtIn4298 instanceof DetachedText) {
        this.#F(dtIn4298);
        this.#K();
        return;
      }
      this.#O(String(dtIn4298));
      this.#K();
    }
  }
  get paragraphs() {
    return this.#e;
  }
  replace(dtIn9520, dtIn9521) {
    if (!dtIn9520) return;
    this.#x(dtIn9520, dtIn9521);
    let dtBind20037 = this.get(dtIn9520);
    dtBind20037.isEmpty ||
      (dtBind20037.replace(dtIn9521), this.#K());
  }
  get bold() {
    return getDetachedBold(this.#styleHost());
  }
  set bold(value: unknown) {
    setDetachedBold(this.#styleHost(), value);
  }
  get italic() {
    return getDetachedItalic(this.#styleHost());
  }
  set italic(value: unknown) {
    setDetachedItalic(this.#styleHost(), value);
  }
  get fontSize() {
    return getDetachedFontSize(this.#styleHost());
  }
  set fontSize(value: unknown) {
    setDetachedFontSize(this.#styleHost(), value);
  }
  get typeface() {
    return getDetachedTypeface(this.#styleHost());
  }
  set typeface(value: unknown) {
    setDetachedTypeface(this.#styleHost(), value);
  }
  get lineSpacing() {
    return getDetachedLineSpacing(this.#styleHost());
  }
  set lineSpacing(value: unknown) {
    setDetachedLineSpacing(this.#styleHost(), value);
  }
  get underline() {
    return getDetachedUnderline(this.#styleHost());
  }
  set underline(value: unknown) {
    setDetachedUnderline(this.#styleHost(), value);
  }
  get color() {
    return getDetachedColor(this.#styleHost());
  }
  set color(value: unknown) {
    setDetachedColor(this.#styleHost(), value);
  }
  get fill() {
    return getDetachedFill(this.#styleHost());
  }
  set fill(value: unknown) {
    setDetachedFill(this.#styleHost(), value);
  }
  get highlight() {
    return getDetachedHighlight(this.#styleHost());
  }
  set highlight(value: unknown) {
    setDetachedHighlight(this.#styleHost(), value);
  }
  get outline() {
    return getDetachedOutline(this.#styleHost());
  }
  set outline(value: unknown) {
    setDetachedOutline(this.#styleHost(), value);
  }
  get shadow() {
    return getDetachedShadow(this.#styleHost());
  }
  set shadow(value: unknown) {
    setDetachedShadow(this.#styleHost(), value);
  }
  get alignment() {
    return getDetachedAlignment(this.#styleHost());
  }
  set alignment(value: unknown) {
    setDetachedAlignment(this.#styleHost(), value);
  }
  get verticalAlignment() {
    return getDetachedVerticalAlignment(this.#styleHost());
  }
  set verticalAlignment(value: unknown) {
    setDetachedVerticalAlignment(this.#styleHost(), value);
  }
  get autoFit() {
    return getDetachedAutoFit(this.#styleHost());
  }
  set autoFit(value: unknown) {
    setDetachedAutoFit(this.#styleHost(), value);
  }
  get wrap() {
    return getDetachedWrap(this.#styleHost());
  }
  set wrap(value: unknown) {
    setDetachedWrap(this.#styleHost(), value);
  }
  get insets() {
    return getDetachedInsets(this.#styleHost());
  }
  set insets(value: unknown) {
    setDetachedInsets(this.#styleHost(), value);
  }
  get style() {
    let dtBind18325 = this.#e.items,
      dtBind18326 = this.#R(dtBind18325);
    return dtBind18326 === undefined
      ? (this.#a ?? this.defaultTextStyle?.name)
      : ((this.#a = dtBind18326 ?? this.#a), dtBind18326);
  }
  set style(dtIn8589) {
    let dtBind19092 = parseTextStyleInput(dtIn8589);
    if (dtBind19092) {
      this.#p(dtBind19092);
      return;
    }
    (dtIn8589 !== undefined &&
      typeof dtIn8589 != "string") ||
      this.#f(dtIn8589);
  }
  #f(styleId: string | undefined, opts: { record?: boolean } = {}) {
    applyNamedStylePeel(this.#styleApplyHost(), styleId, opts);
  }
  #p(partial: Record<string, unknown>) {
    applyStylePartialPeel(this.#styleApplyHost(), partial);
  }
  #m(partial: Record<string, unknown>, opts: { record?: boolean } = {}) {
    applyStyleConfigPartialPeel(this.#styleApplyHost(), partial, opts);
  }
  #h(partial: Record<string, unknown>) {
    return resolveStyleNameFromPartial(partial);
  }
  #g(partial: Record<string, unknown>) {
    return pickStyleConfigFields(partial);
  }
  #_(partial: Record<string, unknown>) {
    applyBoxOnlyFieldsPeel(this.#styleApplyHost(), partial);
  }
  #v(partial: Record<string, unknown>, styleName: string | undefined) {
    return styleRecordFromPartialPeel(this.#styleApplyHost(), partial, styleName);
  }
  #y(paragraph: any) {
    clearRunStylesPeel(paragraph);
  }
  #b(dtIn9599) {
    if (!this.#l) return;
    let dtBind20137 = this.#u?.();
    dtBind20137 &&
      this.#l({
        op: "text.set",
        target: dtBind20137,
        value: this.#C(dtIn9599),
      });
  }
  #x(dtIn6838, dtIn6839) {
    if (!this.#l || !dtIn6838) return;
    let dtBind17159 = this.#u?.();
    dtBind17159 &&
      this.#l({
        op: "text.replace",
        target: dtBind17159,
        find: dtIn6838,
        value: this.#C(dtIn6839),
      });
  }
  #S(dtIn6793) {
    if (
      !Object.values(dtIn6793).some(
        (item) => item !== undefined,
      ) ||
      (this.#q(), !this.#l)
    )
      return;
    let dtBind17096 = this.#u?.();
    dtBind17096 &&
      this.#l({
        op: "text.style.set",
        target: dtBind17096,
        props: dtIn6793,
      });
  }
  #C(dtIn7460) {
    return dtIn7460 instanceof DetachedText
      ? this.#w(dtIn7460)
      : isDetachedTextPayload(dtIn7460)
        ? dtIn7460
        : Array.isArray(dtIn7460)
          ? dtIn7460.map((item) => String(item ?? ""))
          : String(dtIn7460 ?? "");
  }
  #w(dtIn3223) {
    let dtBind11418 = dtIn3223.paragraphs.items;
    if (dtBind11418.length === 0) return "";
    let dtBind11419 = dtBind11418.map((item) =>
        paragraphToConfig(item.toProto()),
      ),
      dtBind11420 = dtBind11419.every((item) =>
        isPlainRunList(item),
      ),
      dtBind11421 = dtBind11419.filter((item) =>
        isPlainRunList(item),
      );
    if (
      dtBind11420 &&
      dtBind11421.every((item) =>
        item.every(
          (_item) => typeof _item == "string" || typeof _item == "number",
        ),
      )
    ) {
      let dtBind20697 = dtBind11421.map((item) =>
        item.map((_item) => String(_item)).join(""),
      );
      return dtBind20697.length === 1
        ? (dtBind20697[0] ?? "")
        : dtBind20697;
    }
    return dtBind11419.length === 1
      ? (dtBind11419[0] ?? "")
      : dtBind11419;
  }
  #T(dtIn2354) {
    let dtBind9506 = dtIn2354.paragraphs.items,
      dtBind9507 = this.defaultTextStyle
        ? new TextStyle(this.defaultTextStyle.toProto())
        : undefined,
      dtBind9508 = dtIn2354.defaultTextStyle
        ? new TextStyle(dtIn2354.defaultTextStyle.toProto())
        : undefined;
    if ((this.#e.clear(), dtBind9506.length === 0)) {
      this.#e.setFromPlainText("");
      this.defaultTextStyle = dtBind9508 ?? dtBind9507;
      this.#a = dtIn2354.style ?? this.#a;
      this.#I();
      return;
    }
    for (let dtBind22045 of dtBind9506) {
      let dtBind22479 = this.#B(dtBind22045);
      this.#e.append(dtBind22479);
    }
    this.defaultTextStyle = dtBind9508 ?? dtBind9507;
    let dtBind9509 = this.#R(this.#e.items);
    this.#a = dtIn2354.style ?? dtBind9509 ?? this.#a;
    this.#I();
  }
  #E(dtIn4277) {
    let dtBind13331 = this.#e.items
        .map((item, index) => {
          let dtBind19287 = item.toPlainText().length;
          if (dtBind19287 !== 0)
            return {
              paragraphIndex: index,
              startOffset: 0,
              endOffset: dtBind19287,
            };
        })
        .filter((item) => !!item),
      dtBind13332 = this.#G();
    return (
      dtIn4277?.recordOps === false &&
        (dtBind13332.recordOp = undefined),
      new TextSelection(
        this.#e,
        dtBind13331,
        dtBind13332,
      )
    );
  }
  #D(dtIn7965, dtIn7966) {
    let dtBind18452 = this.defaultTextStyle;
    if (!dtBind18452) {
      if (dtIn7965 === undefined) return;
      dtBind18452 = new TextStyle();
      this.defaultTextStyle = dtBind18452;
    }
    dtIn7966(dtBind18452, dtIn7965);
  }
  #O(dtIn11669) {
    let dtBind22046 = this.#e.add();
    dtBind22046.setPlainText(dtIn11669);
    this.#L(dtBind22046);
  }
  #k(dtIn9093) {
    let dtBind19678 =
      dtIn9093.length === 0
        ? []
        : dtIn9093
            .split(/\r?\n/)
            .map((item) => item.replace(/\r$/, ""));
    this.#A(dtBind19678);
  }
  #A(dtIn3361) {
    let dtBind11682 = (dtIn3361 ?? []).map((item) =>
        String(item ?? ""),
      ),
      dtBind11683 =
        dtBind11682.length === 0 ? [""] : dtBind11682,
      dtBind11684 = this.#e.items,
      dtBind11685 =
        dtBind11684[dtBind11684.length - 1];
    for (
      let dtBind17046 = 0;
      dtBind17046 < dtBind11683.length;
      dtBind17046 += 1
    ) {
      let dtBind18075 =
          dtBind11683[dtBind17046] ?? "",
        dtBind18076 = dtBind11684[dtBind17046];
      if (dtBind18076) {
        this.#j(dtBind18076, dtBind18075);
        continue;
      }
      let dtBind18077 = this.#M(
        dtBind11685,
        dtBind18075,
      );
      this.#e.append(dtBind18077);
    }
    for (
      let dtBind22594 = dtBind11684.length - 1;
      dtBind22594 >= dtBind11683.length;
      --dtBind22594
    )
      this.#e.removeAt(dtBind22594);
    this.#I();
  }
  #j(dtIn5000, dtIn5001) {
    let dtBind14415 = dtIn5000.runs,
      dtBind14416 = dtBind14415.items;
    if (dtBind14416.length === 0) {
      dtIn5000.setPlainText(dtIn5001);
      return;
    }
    let dtBind14417 =
      dtBind14416.find((item) => item.text.length > 0) ??
      dtBind14416[0];
    if (!dtBind14417) {
      dtIn5000.setPlainText(dtIn5001);
      return;
    }
    dtBind14415.replace([
      dtBind14415.cloneWithText(
        dtBind14417,
        dtIn5001,
      ),
    ]);
    dtIn5000.inlineNodes = [];
  }
  #M(dtIn2701, dtIn2702) {
    if (!dtIn2701)
      return {
        id: "",
        inlineNodes: [],
        runs: [
          {
            id: "",
            text: dtIn2702,
            citations: [],
            reviewMarkIds: [],
          },
        ],
      };
    let dtBind10281 = this.#B(dtIn2701);
    dtBind10281.inlineNodes = [];
    let dtBind10282 = dtBind10281.runs ?? [];
    return dtBind10282.length === 0
      ? ((dtBind10281.runs = [
          {
            id: "",
            text: dtIn2702,
            citations: [],
            reviewMarkIds: [],
          },
        ]),
        dtBind10281)
      : ((dtBind10281.runs = [
          {
            ...(dtBind10282.find(
              (item) => (item.text ?? "").length > 0,
            ) ?? dtBind10282[0]),
            id: "",
            text: dtIn2702,
          },
        ]),
        dtBind10281);
  }
  #N(dtIn8449) {
    let dtBind18951 = normalizeParagraphInputs(dtIn8449);
    if ((this.#e.clear(), dtBind18951.length === 0))
      this.#e.setFromPlainText("");
    else
      for (let dtBind23052 of dtBind18951)
        this.#e.append(dtBind23052);
    this.#I();
  }
  #P(dtIn9522) {
    let dtBind20038 = normalizeParagraphInputs(dtIn9522);
    if (dtBind20038.length !== 0) {
      for (let dtBind23053 of dtBind20038)
        this.#e.append(dtBind23053);
      this.#I();
    }
  }
  #F(dtIn7007) {
    let dtBind17363 = dtIn7007.paragraphs.items;
    if (dtBind17363.length === 0) {
      this.#O("");
      return;
    }
    for (let dtBind22047 of dtBind17363) {
      let dtBind22480 = this.#B(dtBind22047);
      this.#e.append(dtBind22480);
    }
  }
  #I() {
    let dtBind22207 = this.#e.items;
    for (let dtBind23088 of dtBind22207)
      this.#L(dtBind23088);
  }
  #L(dtIn6043) {
    let dtBind16074 = this.#a ? this.#a.trim() : undefined,
      dtBind16075 = this.defaultTextStyle;
    dtBind16074 &&
      (!dtIn6043.styleId ||
        dtIn6043.styleId.length === 0) &&
      ((dtIn6043.styleId = dtBind16074),
      applyListParagraphDefaults(dtIn6043, dtBind16074, this.#i));
    dtBind16075 &&
      !dtIn6043.textStyle &&
      (dtIn6043.textStyle = new TextStyle(
        dtBind16075.toProto(),
      ));
  }
  #R(dtIn5712) {
    if (dtIn5712.length === 0) return;
    let dtBind15629,
      dtBind15630 = false;
    for (let dtBind18799 of dtIn5712) {
      let dtBind19334 = dtBind18799.styleId;
      if (!dtBind15630) {
        dtBind15630 = true;
        dtBind15629 = dtBind19334;
        continue;
      }
      if (!Object.is(dtBind15629, dtBind19334)) return;
    }
    return dtBind15629;
  }
  #z(dtIn8137, dtIn8138) {
    if (!dtIn8137 && !dtIn8138) return;
    let dtBind18638 = {
      ...(dtIn8137 ?? {}),
    };
    if (dtIn8138)
      for (let [
        dtBind22641,
        dtBind22642,
      ] of Object.entries(dtIn8138))
        dtBind22642 !== undefined &&
          (dtBind18638[dtBind22641] =
            dtBind22642);
    return dtBind18638;
  }
  #B(dtIn8735) {
    let dtBind19248 = dtIn8735.toProto();
    return (
      (dtBind19248.id = ""),
      (dtBind19248.runs &&= dtBind19248.runs.map(
        (item) => ({
          ...item,
          id: "",
        }),
      )),
      dtBind19248
    );
  }
  #V(dtIn3019, dtIn3020) {
    let dtBind11051 = [],
      dtBind11052 = this.#e.items,
      dtBind11053 = 0;
    return (
      dtBind11052.forEach((item, index) => {
        let dtBind13221 = item.toPlainText(),
          dtBind13222 = dtBind11053,
          dtBind13223 =
            dtBind13222 + dtBind13221.length,
          dtBind13224 = Math.max(
            dtBind13222,
            dtIn3019,
          ),
          dtBind13225 = Math.min(
            dtBind13223,
            dtIn3020,
          );
        dtBind13224 < dtBind13225 &&
          dtBind11051.push({
            paragraphIndex: index,
            startOffset: dtBind13224 - dtBind13222,
            endOffset: dtBind13225 - dtBind13222,
          });
        dtBind11053 = dtBind13223;
        index < dtBind11052.length - 1 &&
          (dtBind11053 += 1);
      }),
      dtBind11051
    );
  }
  #H(dtIn2703) {
    let dtBind10283 = [];
    for (let dtBind10978 of dtIn2703) {
      let dtBind11165 = this.#e.getItem(
        dtBind10978.paragraphIndex,
      );
      if (!dtBind11165) continue;
      let dtBind11166 = dtBind11165.runs.items;
      if (
        dtBind10978.runIndex < 0 ||
        dtBind10978.runIndex >= dtBind11166.length
      )
        continue;
      let dtBind11167 =
        dtBind11166[dtBind10978.runIndex];
      if (!dtBind11167) continue;
      let dtBind11168 = dtBind11167.text ?? "",
        dtBind11169 = this.#U(
          dtBind11165,
          dtBind10978.runIndex,
        ),
        dtBind11170 =
          dtBind11169 +
          this.#W(dtBind11168, dtBind10978.start),
        dtBind11171 =
          dtBind11169 +
          this.#W(dtBind11168, dtBind10978.end);
      dtBind11171 <= dtBind11170 ||
        dtBind10283.push({
          paragraphIndex: dtBind10978.paragraphIndex,
          startOffset: dtBind11170,
          endOffset: dtBind11171,
        });
    }
    return dtBind10283;
  }
  #U(dtIn6582, dtIn6583) {
    let dtBind16846 = dtIn6582.runs.items,
      dtBind16847 = 0,
      dtBind16848 = Math.max(
        0,
        Math.min(dtIn6583, dtBind16846.length),
      );
    for (
      let dtBind21354 = 0;
      dtBind21354 < dtBind16848;
      dtBind21354 += 1
    ) {
      let dtBind22313 = dtBind16846[dtBind21354];
      dtBind22313?.text &&
        (dtBind16847 += dtBind22313.text.length);
    }
    return dtBind16847;
  }
  #W(dtIn7253, dtIn7254) {
    if (!dtIn7253 || dtIn7254 <= 0) return 0;
    let dtBind17619 = segmentGraphemes(dtIn7253),
      dtBind17620 = Math.max(
        0,
        Math.min(dtIn7254, dtBind17619.length),
      ),
      dtBind17621 = 0;
    for (
      let dtBind22836 = 0;
      dtBind22836 < dtBind17620;
      dtBind22836 += 1
    )
      dtBind17621 +=
        dtBind17619[dtBind22836]?.length ?? 0;
    return dtBind17621;
  }
  #styleHost() {
    const self = this;
    return {
      fullSelection: (opts?: { recordOps?: boolean }) => self.#E(opts),
      patchDefaultStyle: (value: unknown, mutator: (style: any, value: unknown) => void) =>
        self.#D(value, mutator),
      recordStyle: (props: Record<string, unknown>) => self.#S(props),
      notifyChanged: () => self.#K(),
      get defaultTextStyle() {
        return self.defaultTextStyle;
      },
      set defaultTextStyle(value: any) {
        self.defaultTextStyle = value;
      },
    };
  }
  #styleApplyHost() {
    const self = this;
    return {
      paragraphs: self.#e,
      listPresetProfile: self.#i,
      get styleName() {
        return self.#a;
      },
      setStyleName: (name: string | undefined) => {
        self.#a = name;
      },
      get className() {
        return self.#o;
      },
      setClassName: (name: string | undefined) => {
        self.#o = name;
      },
      get defaultTextStyle() {
        return self.defaultTextStyle;
      },
      set defaultTextStyle(value: any) {
        self.defaultTextStyle = value;
      },
      resolveTextStyle: self.#r,
      fullSelection: (opts?: { recordOps?: boolean }) => self.#E(opts),
      patchDefaultStyle: (value: unknown, mutator: (style: any, value: unknown) => void) =>
        self.#D(value, mutator),
      recordStyle: (props: Record<string, unknown>) => self.#S(props),
      notifyChanged: () => self.#K(),
      notifyMutatedOnly: () => self.#q(),
      clearRunStyles: (paragraph: any) => clearRunStylesPeel(paragraph),
      applyNamedStyle: (styleId: string | undefined, opts?: { record?: boolean }) =>
        applyNamedStylePeel(self.#styleApplyHost(), styleId, opts),
      applyStyleConfigPartial: (
        partial: Record<string, unknown>,
        opts?: { record?: boolean },
      ) => applyStyleConfigPartialPeel(self.#styleApplyHost(), partial, opts),
      applyBoxOnlyFields: (partial: Record<string, unknown>) =>
        applyBoxOnlyFieldsPeel(self.#styleApplyHost(), partial),
      styleRecordFromPartial: (
        partial: Record<string, unknown>,
        styleName: string | undefined,
      ) => styleRecordFromPartialPeel(self.#styleApplyHost(), partial, styleName),
      mergeStyleProtos: (primary: any, fallback: any) => self.#z(primary, fallback),
    };
  }
  #G() {
    return {
      getDefaultTextStyle: this.#t,
      setDefaultTextStyle: this.#n,
      resolveTextStyle: this.#r,
      listPresetProfile: this.#i,
      onLayoutInvalidated: this.#s,
      recordOp: this.#l,
      getAnchorId: this.#d,
    };
  }
  #K() {
    this.#q();
    this.#s?.();
  }
  #q() {
    this.#c?.();
  }
}
