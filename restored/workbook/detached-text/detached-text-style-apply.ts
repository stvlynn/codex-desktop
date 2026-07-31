// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: DetachedText style-apply peels (legacy #f/#p/#m/#h/#g/#_/#v/#y).

import { TextStyle, applyTextStylePatch, verticalAlignmentNameToAnchor } from "../text-style";
import { applyListParagraphDefaults } from "../text-run";
import {
  classNameAndStyleConfigFromPartial,
  normalizeStyleId,
  textBoxStyleConfigFromPartial,
} from "../style-tokens";
import type { DetachedTextStyleApplyHost } from "./types";

export function applyNamedStyle(host: DetachedTextStyleApplyHost, dtIn2096: any, dtIn2097: any= {}): void {
    let dtBind9000 = host.paragraphs.items,
      dtBind9001 =
        dtIn2096 !== undefined &&
        dtIn2096.trim().length > 0
          ? dtIn2096
          : undefined,
      dtBind9002 = dtBind9001
        ? host.resolveTextStyle?.(dtBind9001)
        : undefined;
    host.setStyleName(dtBind9001 ?? undefined);
    let dtBind9003 = host.defaultTextStyle
        ? new TextStyle(host.defaultTextStyle.toProto())
        : undefined,
      dtBind9004 = dtBind9002
        ? new TextStyle(dtBind9002.toProto())
        : undefined,
      dtBind9005 =
        dtBind9001 === undefined
          ? dtBind9003?.toProto()
          : host.mergeStyleProtos(
              dtBind9004?.toProto(),
              dtBind9003?.toProto(),
            ),
      dtBind9006 = dtBind9005
        ? new TextStyle(dtBind9005)
        : undefined;
    if (dtBind9000.length > 0)
      for (let dtBind19420 of dtBind9000) {
        dtBind19420.styleId = dtBind9001;
        dtBind19420.textStyle = dtBind9006
          ? new TextStyle(dtBind9006.toProto())
          : undefined;
        applyListParagraphDefaults(
          dtBind19420,
          dtBind9001,
          host.listPresetProfile,
        );
        host.clearRunStyles(dtBind19420);
      }
    host.defaultTextStyle = dtBind9006;
    (dtIn2097.record ?? true) &&
      (host.recordStyle({
        style: dtBind9001,
      }),
      host.notifyMutatedOnly());
}

export function applyStylePartial(host: DetachedTextStyleApplyHost, dtIn6776: any): void {
    let dtBind17072 = resolveStyleNameFromPartial(dtIn6776);
    dtBind17072 !== undefined &&
      host.applyNamedStyle(dtBind17072, {
        record: false,
      });
    let dtBind17073 = pickStyleConfigFields(dtIn6776);
    Object.keys(dtBind17073).length > 0 &&
      host.applyStyleConfigPartial(dtBind17073, {
        record: false,
      });
    host.applyBoxOnlyFields(dtIn6776);
    host.recordStyle(host.styleRecordFromPartial(dtIn6776, dtBind17072));
}

export function applyStyleConfigPartial(host: DetachedTextStyleApplyHost, dtIn3242: any, dtIn3243: any= {}): void {
let { className, styleConfig } = classNameAndStyleConfigFromPartial(dtIn3242);
className !== undefined && host.setClassName(className);
let dtBind11445 = normalizeStyleId(styleConfig);
if (dtBind11445 !== undefined) host.setStyleName(dtBind11445);
if (Object.keys(styleConfig).length > 0) {
  let dtBind18327 = host.fullSelection({
    recordOps: false,
  });
  dtBind18327.isEmpty || (dtBind18327.style = styleConfig);
  host.patchDefaultStyle(styleConfig, (dtIn14005, dtIn14006) => {
    dtIn14006 && applyTextStylePatch(dtIn14005, dtIn14006);
  });
  host.notifyChanged();
}
let dtBind11446 = textBoxStyleConfigFromPartial(dtIn3242);
"lineSpacing" in styleConfig &&
  (dtBind11446.lineSpacing = styleConfig.lineSpacing);
(dtIn3243.record ?? true) && host.recordStyle(dtBind11446);
}

export function resolveStyleNameFromPartial(dtIn6219: any): any {
    if (dtIn6219.styleName !== undefined) {
      let dtBind21857 = dtIn6219.styleName.trim();
      return dtBind21857.length > 0
        ? dtBind21857
        : undefined;
    }
    let dtBind16307 = dtIn6219.style;
    if (dtBind16307 === undefined) return;
    let dtBind16308 = dtBind16307.trim();
    return dtBind16308.length > 0
      ? dtBind16308
      : undefined;
}

export function pickStyleConfigFields(dtIn763: any): any {
    let dtBind5315 = {};
    return (
      dtIn763.anchor !== undefined &&
        (dtBind5315.anchor = dtIn763.anchor),
      dtIn763.vertical !== undefined &&
        (dtBind5315.vertical = dtIn763.vertical),
      dtIn763.rotation !== undefined &&
        (dtBind5315.rotation = dtIn763.rotation),
      dtIn763.className !== undefined &&
        (dtBind5315.className = dtIn763.className),
      dtIn763.bold !== undefined &&
        (dtBind5315.bold = dtIn763.bold),
      dtIn763.italic !== undefined &&
        (dtBind5315.italic = dtIn763.italic),
      dtIn763.underline !== undefined &&
        (dtBind5315.underline = dtIn763.underline),
      dtIn763.fill !== undefined &&
        (dtBind5315.fill = dtIn763.fill),
      dtIn763.highlight !== undefined &&
        (dtBind5315.highlight = dtIn763.highlight),
      dtIn763.outline !== undefined &&
        (dtBind5315.outline = dtIn763.outline),
      dtIn763.shadow !== undefined &&
        (dtBind5315.shadow = dtIn763.shadow),
      dtIn763.capitalization !== undefined &&
        (dtBind5315.capitalization =
          dtIn763.capitalization),
      dtIn763.textTransform !== undefined &&
        (dtBind5315.textTransform =
          dtIn763.textTransform),
      dtIn763.fontSize !== undefined &&
        (dtBind5315.fontSize = dtIn763.fontSize),
      dtIn763.lineSpacing !== undefined &&
        (dtBind5315.lineSpacing = dtIn763.lineSpacing),
      dtIn763.color !== undefined &&
        (dtBind5315.color = dtIn763.color),
      dtIn763.alignment !== undefined &&
        (dtBind5315.alignment = dtIn763.alignment),
      dtIn763.useParagraphSpacing !== undefined &&
        (dtBind5315.useParagraphSpacing =
          dtIn763.useParagraphSpacing),
      dtIn763.autoFitScale !== undefined &&
        (dtBind5315.autoFitScale = dtIn763.autoFitScale),
      dtIn763.autoFitLineSpaceReduction !== undefined &&
        (dtBind5315.autoFitLineSpaceReduction =
          dtIn763.autoFitLineSpaceReduction),
      dtIn763.name !== undefined &&
        (dtBind5315.name = dtIn763.name),
      dtIn763.family !== undefined &&
        (dtBind5315.family = dtIn763.family),
      dtIn763.scheme !== undefined &&
        (dtBind5315.scheme = dtIn763.scheme),
      dtIn763.typeface !== undefined &&
        (dtBind5315.typeface = dtIn763.typeface),
      dtBind5315
    );
}

export function applyBoxOnlyFields(host: DetachedTextStyleApplyHost, dtIn2613: any): void {
    let dtBind10057 = false;
    dtIn2613.verticalAlignment !== undefined &&
      (host.patchDefaultStyle(
        dtIn2613.verticalAlignment,
        (dtIn13042, dtIn13043) => {
          dtIn13042.anchor = dtIn13043
            ? verticalAlignmentNameToAnchor(dtIn13043)
            : undefined;
        },
      ),
      (dtBind10057 = true));
    dtIn2613.autoFit !== undefined &&
      (host.patchDefaultStyle(
        dtIn2613.autoFit,
        (dtIn14007, dtIn14008) => {
          dtIn14007.autoFit = dtIn14008;
        },
      ),
      (dtBind10057 = true));
    dtIn2613.wrap !== undefined &&
      (host.patchDefaultStyle(
        dtIn2613.wrap,
        (dtIn14298, dtIn14299) => {
          dtIn14298.wrap = dtIn14299;
        },
      ),
      (dtBind10057 = true));
    dtIn2613.insets !== undefined &&
      (host.patchDefaultStyle(
        dtIn2613.insets,
        (dtIn14151, dtIn14152) => {
          dtIn14151.insets = dtIn14152;
        },
      ),
      (dtBind10057 = true));
    dtBind10057 && host.notifyChanged();
}

export function styleRecordFromPartial(host: DetachedTextStyleApplyHost, dtIn4465: any, dtIn4466: any): any {
    let dtBind13706 = textBoxStyleConfigFromPartial(
      pickStyleConfigFields(dtIn4465),
    );
    return (
      dtIn4466 !== undefined &&
        (dtBind13706.style = dtIn4466),
      dtIn4465.verticalAlignment !== undefined &&
        (dtBind13706.verticalAlignment =
          dtIn4465.verticalAlignment),
      dtIn4465.autoFit !== undefined &&
        (dtBind13706.autoFit = dtIn4465.autoFit),
      dtIn4465.wrap !== undefined &&
        (dtBind13706.wrap = dtIn4465.wrap),
      dtIn4465.insets !== undefined &&
        (dtBind13706.insets = dtIn4465.insets),
      dtBind13706
    );
}

export function clearRunStyles(paragraph: any): void {
    let dtBind21893 = paragraph.runs.items;
    for (let dtBind23032 of dtBind21893)
      dtBind23032.textStyle = undefined;
}

