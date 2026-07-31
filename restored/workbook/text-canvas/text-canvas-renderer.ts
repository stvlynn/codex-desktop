// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-21: canvas text renderer class (legacy Binding547).

import {
  Yn as anchorTypeEnum,
  ur as lineStyleEnum,
} from "../presentation-protobuf";
import { emuToPoints } from "../line";
import { resolveColorToCssRgba } from "../color-resolve";
import { applyCanvasLineDash, resolveFillStyle } from "../canvas-fill";
import { polarOffsetFromDirection } from "./polar-offset";
import { isExplicitNoneFill } from "./explicit-none-fill";
import { lineCapToCanvas, lineJoinToCanvas } from "./line-cap-join";
import { DEFAULT_OUTLINE_WIDTH_PX } from "./outline-defaults";

export class TextCanvasRenderer {
  render(tcIn176: unknown) {
    let { lines } = tcIn176;
    if (!lines.length) return;
    let tcBind2972 = lines.reduce(
        (accumulator, current) => accumulator + current.heightPx,
        0,
      ),
      tcBind2973 = this.resolveTopY(tcIn176, tcBind2972),
      tcBind2974 = (tcIn176.rotationDeg * Math.PI) / 180,
      tcBind2975 = tcIn176.draw,
      tcBind2976 = tcBind2975 && tcBind2974 !== 0,
      tcBind2977 = tcIn176.ctx;
    tcBind2975 &&
      ((tcBind2977.textAlign = "left"),
      (tcBind2977.textBaseline = "alphabetic"),
      tcBind2976 &&
        (tcBind2977.save(),
        tcBind2977.translate(tcIn176.box.x, tcBind2973),
        tcBind2977.rotate(tcBind2974)));
    let tcBind2978 = [],
      tcBind2979 = tcBind2973;
    for (let tcBind3582 = 0; tcBind3582 < lines.length; tcBind3582 += 1) {
      let tcBind3606 = lines[tcBind3582];
      if (!tcBind3606) continue;
      let tcBind3607 = tcBind2979,
        tcBind3608 = this.resolveLineX(tcIn176.box, tcBind3606),
        tcBind3609 = this.resolveBaselineY(tcBind3606, tcBind3607);
      tcBind3606.x = tcBind3608;
      tcBind3606.topY = tcBind3607;
      tcBind3606.baselineY = tcBind3609;
      let tcBind3610 = this.resolveAvailableWidthPx(
          tcIn176.box.width,
          tcBind3606,
        ),
        tcBind3611 = this.shouldJustifyLine(
          lines,
          tcBind3582,
          tcBind3606,
          tcIn176.box.width,
        ),
        tcBind3612 = tcBind3611
          ? tcBind3606.segments.reduce(
              (accumulator, current) =>
                /\s/.test(current.text) ? accumulator + 1 : accumulator,
              0,
            )
          : 0,
        tcBind3613 = tcBind3611
          ? Math.max(0, tcBind3610 - tcBind3606.widthPx)
          : 0,
        tcBind3614 = tcBind3612 > 0 ? tcBind3613 / tcBind3612 : 0,
        tcBind3615 = [],
        tcBind3616 = tcBind3608;
      for (
        let tcBind13348 = 0;
        tcBind13348 < tcBind3606.segments.length;
        tcBind13348 += 1
      ) {
        let tcBind14255 = tcBind3606.segments[tcBind13348];
        if (!tcBind14255) continue;
        let tcBind14256 =
          tcBind3611 && tcBind3614 > 0 && /\s/.test(tcBind14255.text)
            ? tcBind3614
            : 0;
        tcBind3615.push({
          seg: tcBind14255,
          xPx: tcBind3616,
          advancePx: tcBind14255.widthPx + tcBind14256,
          highlight: this.resolveSegmentHighlight(
            tcBind3606.segments,
            tcBind13348,
          ),
        });
        tcBind3616 += tcBind14255.widthPx + tcBind14256;
      }
      tcBind2975 &&
        this.drawSegmentHighlights(
          tcBind2977,
          tcBind3615,
          tcBind3609,
          tcBind2976,
          tcIn176.box.x,
          tcBind2973,
        );
      for (let { seg, xPx } of tcBind3615)
        if (((seg.xPx = xPx), tcBind2975)) {
          if (seg.mathLayout)
            tcBind2976
              ? seg.mathLayout.draw(
                  tcBind2977,
                  xPx - tcIn176.box.x,
                  tcBind3609 - tcBind2973,
                )
              : seg.mathLayout.draw(tcBind2977, xPx, tcBind3609);
          else {
            tcBind2977.font = seg.font;
            let tcBind9112 = this.resolveSegmentFill(tcIn176, seg),
              tcBind9113 = this.resolveSegmentOutlineFill(tcIn176, seg),
              tcBind9114 = this.resolveSegmentShadowStyle(tcIn176, seg),
              tcBind9115 = tcBind2976 ? xPx - tcIn176.box.x : xPx,
              tcBind9116 = tcBind3609 + (seg.paintBaselineCompensationPx ?? 0),
              tcBind9117 = tcBind2976 ? tcBind9116 - tcBind2973 : tcBind9116;
            tcBind9114 && this.applyCanvasShadowStyle(tcBind2977, tcBind9114);
            tcBind9113 &&
              (this.applySegmentOutlineStyle(tcBind2977, seg.outlineSource),
              (tcBind2977.strokeStyle = tcBind9113),
              tcBind2977.strokeText(seg.text, tcBind9115, tcBind9117),
              tcBind2977.setLineDash([]));
            tcBind2977.fillStyle = tcBind9112;
            tcBind2977.fillText(seg.text, tcBind9115, tcBind9117);
            tcBind9114 && this.clearCanvasShadowStyle(tcBind2977);
          }
          if (seg.underline && seg.underline !== "none" && seg.widthPx > 0) {
            let tcBind12105 = tcBind3609 + Math.max(1, seg.descentPx * 0.35),
              tcBind12106 = Math.max(1, seg.px * 0.05);
            tcBind2977.strokeStyle = this.resolveSegmentFill(tcIn176, seg);
            tcBind2977.lineWidth = tcBind12106;
            tcBind2977.beginPath();
            tcBind2976
              ? (tcBind2977.moveTo(
                  xPx - tcIn176.box.x,
                  tcBind12105 - tcBind2973,
                ),
                tcBind2977.lineTo(
                  xPx - tcIn176.box.x + seg.widthPx,
                  tcBind12105 - tcBind2973,
                ))
              : (tcBind2977.moveTo(xPx, tcBind12105),
                tcBind2977.lineTo(xPx + seg.widthPx, tcBind12105));
            tcBind2977.stroke();
          }
          if (seg.run?.hyperlink?.uri) {
            let tcBind14486 = {
              x: xPx,
              y: tcBind3609 - seg.ascentPx,
              width: seg.widthPx,
              height: seg.ascentPx + seg.descentPx,
              url: seg.run.hyperlink.uri,
              action: seg.run.hyperlink.action,
            };
            tcBind2978.push(tcBind14486);
            tcIn176.linkRects?.push(tcBind14486);
          }
        }
      tcBind2979 += tcBind3606.heightPx;
    }
    tcBind2975 && tcBind2976 && tcBind2977.restore();
    let tcBind2980 =
        tcBind2974 === 0
          ? tcIn176.box.width
          : Math.abs(tcIn176.box.width * Math.cos(tcBind2974)) +
            Math.abs(tcBind2972 * Math.sin(tcBind2974)),
      tcBind2981 =
        tcBind2974 === 0
          ? tcBind2972
          : Math.abs(tcIn176.box.width * Math.sin(tcBind2974)) +
            Math.abs(tcBind2972 * Math.cos(tcBind2974));
    return {
      x: tcIn176.box.x,
      y: tcBind2973,
      width: tcBind2980,
      height: tcBind2981,
      unrotatedWidth: tcIn176.box.width,
      unrotatedHeight: tcBind2972,
      lines: lines.map((item) => ({
        segments: item.segments,
        x: item.x,
        widthPx: item.widthPx,
        heightPx: item.heightPx,
        contentHeightPx: item.contentHeightPx,
        naturalHeightPx: item.naturalHeightPx,
        leadingBeforePx: item.leadingBeforePx,
        leadingAfterPx: item.leadingAfterPx,
        align: item.align,
        offsetPx: item.offsetPx,
        availableWidthPx: item.availableWidthPx,
        baselineOffsetPx: item.baselineOffsetPx,
        topY: item.topY,
        baselineY: item.baselineY,
        maxAscentPx: item.maxAscentPx,
        maxDescentPx: item.maxDescentPx,
        maxPx: item.maxPx,
        inkLeftPx: item.inkLeftPx,
        inkRightPx: item.inkRightPx,
        inkAscentPx: item.inkAscentPx,
        inkDescentPx: item.inkDescentPx,
      })),
      linkRects: tcBind2978,
    };
  }
  resolveTopY(tcIn5075: unknown, tcIn5076: unknown) {
    let { anchor } = tcIn5075,
      tcBind14530 = tcIn5075.box;
    switch (anchor) {
      case anchorTypeEnum.ANCHOR_TYPE_BOTTOM:
        return tcBind14530.y + (tcBind14530.height - tcIn5076);
      case anchorTypeEnum.ANCHOR_TYPE_MIDDLE:
        return tcBind14530.y + (tcBind14530.height - tcIn5076) / 2;
      case anchorTypeEnum.ANCHOR_TYPE_TOP:
      default:
        return tcBind14530.y;
    }
  }
  resolveLineX(tcIn6065: unknown, tcIn6066: unknown) {
    let tcBind16113 = this.resolveAvailableWidthPx(tcIn6065.width, tcIn6066);
    return tcIn6066.align === "center"
      ? tcIn6065.x + tcIn6066.offsetPx + (tcBind16113 - tcIn6066.widthPx) / 2
      : tcIn6066.align === "right"
        ? tcIn6065.x + tcIn6066.offsetPx + tcBind16113 - tcIn6066.widthPx
        : tcIn6065.x + tcIn6066.offsetPx;
  }
  resolveBaselineY(tcIn12715: unknown, tcIn12716: unknown) {
    return tcIn12716 + tcIn12715.baselineOffsetPx;
  }
  shouldJustifyLine(
    tcIn3487: unknown,
    tcIn3488: unknown,
    tcIn3489: unknown,
    tcIn3490: unknown,
  ) {
    if (
      tcIn3489.align !== "justify" ||
      tcIn3489.segments.length === 0 ||
      this.resolveAvailableWidthPx(tcIn3490, tcIn3489) - tcIn3489.widthPx <= 0.5
    )
      return false;
    let tcBind11927 = tcIn3489.segments[0]?.paraIndex;
    if (tcBind11927 === undefined) return false;
    for (
      let tcBind19221 = tcIn3488 + 1;
      tcBind19221 < tcIn3487.length;
      tcBind19221 += 1
    ) {
      let tcBind20500 = tcIn3487[tcBind19221];
      if (!(!tcBind20500 || tcBind20500.segments.length === 0))
        return tcBind20500.segments[0]?.paraIndex === tcBind11927;
    }
    return false;
  }
  resolveAvailableWidthPx(tcIn8295: unknown, tcIn8296: unknown) {
    let tcBind18798 = Math.max(0, tcIn8295 - tcIn8296.offsetPx);
    return tcIn8296.availableWidthPx === undefined
      ? tcBind18798
      : Math.min(tcIn8296.availableWidthPx, tcBind18798);
  }
  resolveSegmentHighlight(tcIn5746: unknown, tcIn5747: unknown) {
    let tcBind15674 = tcIn5746[tcIn5747];
    if (tcBind15674) {
      if (tcBind15674.highlight) return tcBind15674.highlight;
      if (!tcBind15674.text.trim()) {
        let tcBind20530 = tcIn5746[tcIn5747 - 1]?.highlight,
          tcBind20531 = tcIn5746[tcIn5747 + 1]?.highlight;
        if (tcBind20530 && tcBind20530 === tcBind20531) return tcBind20530;
      }
    }
  }
  resolveSegmentFill(tcIn4951: unknown, tcIn4952: unknown) {
    return tcIn4952.fillSource
      ? resolveFillStyle(
          tcIn4951.ctx,
          tcIn4951.box,
          tcIn4952.fillSource,
          tcIn4951.themeMap,
          {
            defaultFill: isExplicitNoneFill(tcIn4952.fillSource)
              ? "transparent"
              : tcIn4951.defaultTextFill,
            pictureFillBitmaps: tcIn4951.pictureFillBitmaps,
            pictureFillFit: "cover",
          },
        )
      : tcIn4952.fill;
  }
  resolveSegmentOutlineFill(tcIn5778: unknown, tcIn5779: unknown) {
    let tcBind15702 = tcIn5779.outlineSource;
    if (!(!tcBind15702 || isExplicitNoneFill(tcBind15702.fill)))
      return resolveFillStyle(
        tcIn5778.ctx,
        tcIn5778.box,
        tcBind15702.fill,
        tcIn5778.themeMap,
        {
          defaultFill: tcIn5779.fill,
          pictureFillBitmaps: tcIn5778.pictureFillBitmaps,
          pictureFillFit: "cover",
        },
      );
  }
  resolveSegmentShadowStyle(tcIn4596: unknown, tcIn4597: unknown) {
    let tcBind13867 = tcIn4597.shadowSource;
    if (!tcBind13867) return;
    let tcBind13868 = tcBind13867.distance
        ? emuToPoints(tcBind13867.distance)
        : 0,
      tcBind13869 = polarOffsetFromDirection(
        tcBind13867.direction,
        tcBind13868,
      );
    return {
      color: tcBind13867.color
        ? resolveColorToCssRgba(
            tcBind13867.color,
            tcIn4596.themeMap,
            "#00000033",
          )
        : "#00000033",
      blur: tcBind13867.blurRadius ? emuToPoints(tcBind13867.blurRadius) : 0,
      offsetX: tcBind13869.x,
      offsetY: tcBind13869.y,
    };
  }
  applyCanvasShadowStyle(tcIn8170: unknown, event: unknown) {
    tcIn8170.shadowColor = event.color;
    tcIn8170.shadowBlur = event.blur;
    tcIn8170.shadowOffsetX = event.offsetX;
    tcIn8170.shadowOffsetY = event.offsetY;
  }
  clearCanvasShadowStyle(tcIn8713: unknown) {
    tcIn8713.shadowColor = "transparent";
    tcIn8713.shadowBlur = 0;
    tcIn8713.shadowOffsetX = 0;
    tcIn8713.shadowOffsetY = 0;
  }
  applySegmentOutlineStyle(tcIn6067: unknown, tcIn6068: unknown) {
    let tcBind16114 =
      tcIn6068?.widthEmu === undefined
        ? DEFAULT_OUTLINE_WIDTH_PX
        : Math.max(0, emuToPoints(tcIn6068.widthEmu));
    tcIn6067.lineWidth = tcBind16114;
    tcIn6067.lineCap = lineCapToCanvas(tcIn6068?.cap);
    tcIn6067.lineJoin = lineJoinToCanvas(tcIn6068?.join);
    applyCanvasLineDash(
      tcIn6067,
      tcIn6068?.style ?? lineStyleEnum.LINE_STYLE_SOLID,
      Math.max(1, tcBind16114),
    );
  }
  drawSegmentHighlights(
    tcIn1254: unknown,
    tcIn1255: unknown,
    tcIn1256: unknown,
    tcIn1257: unknown,
    tcIn1258: unknown,
    tcIn1259: unknown,
  ) {
    let tcBind6822,
      tcBind6823 = () => {
        if (!tcBind6822) return;
        let tcBind14313 = tcIn1256 - tcBind6822.maxAscentPx,
          tcBind14314 = tcBind6822.maxAscentPx + tcBind6822.maxDescentPx;
        tcIn1254.fillStyle = tcBind6822.color;
        tcIn1257
          ? tcIn1254.fillRect(
              tcBind6822.startXPx - tcIn1258,
              tcBind14313 - tcIn1259,
              tcBind6822.endXPx - tcBind6822.startXPx,
              tcBind14314,
            )
          : tcIn1254.fillRect(
              tcBind6822.startXPx,
              tcBind14313,
              tcBind6822.endXPx - tcBind6822.startXPx,
              tcBind14314,
            );
        tcBind6822 = undefined;
      };
    for (let { seg, xPx, advancePx, highlight } of tcIn1255) {
      if (!highlight) {
        tcBind6823();
        continue;
      }
      let tcBind10875 = xPx + advancePx;
      if (
        tcBind6822 &&
        tcBind6822.color === highlight &&
        Math.abs(tcBind6822.endXPx - xPx) <= 0.5
      ) {
        tcBind6822.endXPx = tcBind10875;
        tcBind6822.maxAscentPx = Math.max(tcBind6822.maxAscentPx, seg.ascentPx);
        tcBind6822.maxDescentPx = Math.max(
          tcBind6822.maxDescentPx,
          seg.descentPx,
        );
        continue;
      }
      tcBind6823();
      tcBind6822 = {
        color: highlight,
        startXPx: xPx,
        endXPx: tcBind10875,
        maxAscentPx: seg.ascentPx,
        maxDescentPx: seg.descentPx,
      };
    }
    tcBind6823();
  }
}
