// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-32: DetachedText box/paint style accessors (color…insets).

import {
  alignmentProtoToName,
  verticalAlignmentNameToAnchor,
} from "../text-style";
import { colorConfigFromValue, fillConfigFromValue, outlineConfigFromValue } from "../style-tokens";
import { anchorTypeProtoToName } from "../chart-proto-name-maps";
import type { DetachedTextStyleHost } from "./types";

export function getDetachedColor(host: DetachedTextStyleHost): any {
    let dtBind19090 = host.fullSelection().color;
    if (dtBind19090 !== undefined) return dtBind19090;
    let dtBind19091 = host.defaultTextStyle?.color;
    return dtBind19091?.toProto()
      ? dtBind19091
      : undefined;
}

export function setDetachedColor(host: DetachedTextStyleHost, dtIn7177: any): void {
    let dtBind17528 = host.fullSelection();
    dtBind17528.isEmpty ||
      (dtBind17528.color = dtIn7177);
    host.patchDefaultStyle(dtIn7177, (dtIn12170, dtIn12171) => {
      dtIn12171 &&
        (dtIn12170.fill = {
          type: "solid",
          color: dtIn12171,
        });
    });
    host.recordStyle({
      color: colorConfigFromValue(dtIn7177),
    });
}

export function getDetachedFill(host: DetachedTextStyleHost): any {
    let dtBind19183 = host.fullSelection().fill;
    if (dtBind19183 !== undefined) return dtBind19183;
    let dtBind19184 = host.defaultTextStyle?.fill;
    return dtBind19184?.toProto()
      ? dtBind19184
      : undefined;
}

export function setDetachedFill(host: DetachedTextStyleHost, dtIn7566: any): void {
    let dtBind18045 = host.fullSelection();
    dtBind18045.isEmpty ||
      (dtBind18045.fill = dtIn7566);
    host.patchDefaultStyle(dtIn7566, (dtIn13105, dtIn13106) => {
      dtIn13106 !== undefined &&
        (dtIn13105.fill = dtIn13106);
    });
    host.recordStyle({
      fill: fillConfigFromValue(dtIn7566),
    });
}

export function getDetachedHighlight(host: DetachedTextStyleHost): any {
    let dtBind18741 = host.fullSelection().highlight;
    if (dtBind18741 !== undefined) return dtBind18741;
    let dtBind18742 = host.defaultTextStyle?.highlight;
    return dtBind18742?.toProto()
      ? dtBind18742
      : undefined;
}

export function setDetachedHighlight(host: DetachedTextStyleHost, dtIn7507: any): void {
    let dtBind17985 = host.fullSelection();
    dtBind17985.isEmpty ||
      (dtBind17985.highlight = dtIn7507);
    host.patchDefaultStyle(dtIn7507, (dtIn14194, dtIn14195) => {
      dtIn14194.highlight = dtIn14195;
    });
    host.recordStyle({
      highlight: colorConfigFromValue(dtIn7507),
    });
}

export function getDetachedOutline(host: DetachedTextStyleHost): any {
    let dtBind18912 = host.fullSelection().outline;
    if (dtBind18912 !== undefined) return dtBind18912;
    let dtBind18913 = host.defaultTextStyle?.outline;
    return dtBind18913?.toProto()
      ? dtBind18913
      : undefined;
}

export function setDetachedOutline(host: DetachedTextStyleHost, dtIn7742: any): void {
    let dtBind18227 = host.fullSelection();
    dtBind18227.isEmpty ||
      (dtBind18227.outline = dtIn7742);
    host.patchDefaultStyle(dtIn7742, (dtIn14359, dtIn14360) => {
      dtIn14359.outline = dtIn14360;
    });
    host.recordStyle({
      outline: outlineConfigFromValue(dtIn7742),
    });
}

export function getDetachedShadow(host: DetachedTextStyleHost): any {
    let dtBind20949 = host.fullSelection().shadow;
    return dtBind20949 === undefined
      ? host.defaultTextStyle?.shadow
      : dtBind20949;
}

export function setDetachedShadow(host: DetachedTextStyleHost, dtIn7938: any): void {
    let dtBind18420 = host.fullSelection();
    dtBind18420.isEmpty ||
      (dtBind18420.shadow = dtIn7938);
    host.patchDefaultStyle(dtIn7938, (dtIn14516, dtIn14517) => {
      dtIn14516.shadow = dtIn14517;
    });
    host.recordStyle({
      shadow: dtIn7938,
    });
}

export function getDetachedAlignment(host: DetachedTextStyleHost): any {
    let dtBind18987 = host.fullSelection().alignment;
    if (dtBind18987 !== undefined) return dtBind18987;
    let dtBind18988 = host.defaultTextStyle;
    return dtBind18988
      ? alignmentProtoToName(dtBind18988.alignment)
      : undefined;
}

export function setDetachedAlignment(host: DetachedTextStyleHost, dtIn7611: any): void {
    let dtBind18102 = host.fullSelection();
    dtBind18102.isEmpty ||
      (dtBind18102.alignment = dtIn7611);
    host.patchDefaultStyle(dtIn7611, (dtIn14196, dtIn14197) => {
      dtIn14196.alignment = dtIn14197;
    });
    host.recordStyle({
      alignment: dtIn7611,
    });
}

export function getDetachedVerticalAlignment(host: DetachedTextStyleHost): any {
    let dtBind20924 = host.defaultTextStyle;
    return dtBind20924?.anchor
      ? anchorTypeProtoToName[dtBind20924.anchor]
      : undefined;
}

export function setDetachedVerticalAlignment(host: DetachedTextStyleHost, dtIn8297: any): void {
    host.patchDefaultStyle(dtIn8297, (dtIn13291, dtIn13292) => {
      dtIn13291.anchor = dtIn13292
        ? verticalAlignmentNameToAnchor(dtIn13292)
        : undefined;
    });
    host.notifyChanged();
    host.recordStyle({
      verticalAlignment: dtIn8297,
    });
}

export function getDetachedAutoFit(host: DetachedTextStyleHost): any {
    return host.defaultTextStyle?.autoFit;
}

export function setDetachedAutoFit(host: DetachedTextStyleHost, dtIn9341: any): void {
    host.patchDefaultStyle(dtIn9341, (dtIn14788, dtIn14789) => {
      dtIn14788.autoFit = dtIn14789;
    });
    host.notifyChanged();
    host.recordStyle({
      autoFit: dtIn9341,
    });
}

export function getDetachedWrap(host: DetachedTextStyleHost): any {
    return host.defaultTextStyle?.wrap;
}

export function setDetachedWrap(host: DetachedTextStyleHost, dtIn9629: any): void {
    host.patchDefaultStyle(dtIn9629, (dtIn15099, dtIn15100) => {
      dtIn15099.wrap = dtIn15100;
    });
    host.notifyChanged();
    host.recordStyle({
      wrap: dtIn9629,
    });
}

export function getDetachedInsets(host: DetachedTextStyleHost): any {
    return host.defaultTextStyle?.insets;
}

export function setDetachedInsets(host: DetachedTextStyleHost, dtIn9465: any): void {
    host.patchDefaultStyle(dtIn9465, (dtIn14865, dtIn14866) => {
      dtIn14865.insets = dtIn14866;
    });
    host.notifyChanged();
    host.recordStyle({
      insets: dtIn9465,
    });
}

