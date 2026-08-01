// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: shape geometry canvas paint (legacy shape-paint peel).
// Stage-3 wave-94.

import { resolveFillStyle, applyCanvasLineDash } from "../canvas-fill";
import {
  resolveElementFramePx,
  applyFrameCanvasTransform,
  applyElementCanvasTransform,
} from "../geometry-transform";
import { resolveColorToCssRgba } from "../color-resolve";
import { workbookGt } from "../text-style";
import { ShapeGeometry as workbookDt } from "../shape-geometry";
import { ur, v, C } from "../presentation-protobuf";
import { sgpH } from "./boundary-hooks";
import { isConnectorGeometry } from "./is-connector-geometry-impl";
import {
  workbookHelper571,
  workbookHelper572,
} from "./resolve-line-width-impl";

void workbookGt;
void workbookDt;
void ur;
void v;
void C;
void sgpH;

export function paintShapeGeometry(
  sgpIn150: any,
  sgpIn151: any,
  sgpIn152: any,
  sgpIn153: any,
  sgpIn154: any,
  sgpIn155: any = {},
) {
  let sgpBind2893 = sgpIn150.proto,
    { line, geometry, adjustmentList } = sgpIn150,
    sgpBind2894 = sgpH.resolveShapeFill(sgpIn150, sgpIn154),
    sgpBind2895 = sgpIn155.frame
      ? {
          x: sgpIn155.frame.left,
          y: sgpIn155.frame.top,
          width: sgpIn155.frame.width,
          height: sgpIn155.frame.height,
        }
      : sgpBind2893 && sgpIn153
        ? resolveElementFramePx(sgpBind2893, sgpIn152, sgpIn153)
        : undefined;
  if (!sgpBind2895) return;
  let { width, height } = sgpBind2895,
    sgpBind2896 = workbookHelper571(line),
    sgpBind2897 = sgpIn150.lineReference
      ? sgpIn154.lineStyleMap[sgpIn150.lineReference.index]
      : undefined,
    sgpBind2898 = workbookHelper572({
      line,
      themeLine: sgpBind2897,
    }),
    sgpBind2899 = resolveColorToCssRgba(
      line?.fill?.color ??
        sgpIn150.lineReference?.color ??
        sgpBind2897?.fill?.color,
      sgpIn154,
    ),
    sgpBind2900 = line ? line.fill : sgpBind2897?.fill,
    sgpBind2901 =
      sgpH.bh630(line) ??
      (sgpBind2896 ? undefined : sgpH.bh630(sgpBind2897)) ??
      ur.LINE_STYLE_SOLID,
    sgpBind2902 = sgpH.resolveShapeEffects(sgpIn150, sgpIn154),
    sgpBind2903 =
      !!sgpIn150.connector && isConnectorGeometry(geometry ?? undefined),
    sgpBind2904 = !!(
      sgpIn150.connector?.fromElementId && sgpIn150.connector.toElementId
    );
  if (sgpBind2903 && sgpBind2904) {
    let sgpBind14894 = sgpIn150.proto;
    if (!sgpBind14894 || !sgpIn153) return;
    let sgpBind14895 = resolveFillStyle(
      sgpIn151,
      sgpBind2895,
      sgpBind2900,
      sgpIn154,
      sgpBind2899 ?? "transparent",
    );
    sgpH.paintConnectorRoute({
      el: sgpBind14894,
      ctx: sgpIn151,
      pres: sgpIn152,
      slide: sgpIn153,
      routeElements: sgpIn155.connectorRouteElements,
      strokePaint: sgpBind14895,
      strokeBBox: sgpBind2895,
      lineFill: sgpBind2900,
      themeMap: sgpIn154,
      lineWidthPx: sgpBind2898,
      lineStyle: sgpBind2901,
    });
    return;
  }
  if (geometry === undefined) return;
  if (sgpIn150.useBackgroundFill && !sgpIn155.backgroundFillPaint)
    throw Error(
      "A slide-background fill is required to render useBackgroundFill.",
    );
  if (
    (sgpIn151.save(),
    (sgpIn151.lineWidth = sgpBind2898 > 0 ? sgpBind2898 : 0.001),
    sgpIn150.connector)
  ) {
    let sgpBind13010 = sgpIn150.connector.lineStyle?.cap;
    sgpBind13010 === v.LINE_CAP_FLAT
      ? (sgpIn151.lineCap = "butt")
      : sgpBind13010 === v.LINE_CAP_ROUND
        ? (sgpIn151.lineCap = "round")
        : sgpBind13010 === v.LINE_CAP_SQUARE && (sgpIn151.lineCap = "square");
    let sgpBind13011 = sgpIn150.connector.lineStyle?.join;
    sgpBind13011 === C.LINE_JOIN_ROUND
      ? (sgpIn151.lineJoin = "round")
      : sgpBind13011 === C.LINE_JOIN_BEVEL
        ? (sgpIn151.lineJoin = "bevel")
        : sgpBind13011 === C.LINE_JOIN_MITER && (sgpIn151.lineJoin = "miter");
  }
  if (
    (applyCanvasLineDash(sgpIn151, sgpBind2901, sgpIn151.lineWidth),
    sgpIn155.frame)
  )
    applyFrameCanvasTransform(sgpIn151, sgpIn155.frame);
  else {
    let sgpBind21623 = sgpIn150.proto;
    if (!sgpBind21623 || !sgpIn153) {
      sgpIn151.restore();
      return;
    }
    applyElementCanvasTransform(sgpIn151, sgpBind21623, sgpIn152, sgpIn153);
  }
  let sgpBind2905 = {
      x: 0,
      y: 0,
      width,
      height,
    },
    sgpBind2906;
  sgpIn150.useBackgroundFill &&
    sgpIn155.backgroundFillPaint &&
    ((sgpBind2906 = sgpIn155.backgroundFillPaint),
    sgpBind2906.setTransform(sgpIn151.getTransform().inverse()));
  let sgpBind2907 = (sgpIn15867 = sgpBind2905) =>
      sgpBind2906 ||
      resolveFillStyle(sgpIn151, sgpIn15867, sgpBind2894, sgpIn154),
    sgpBind2908 = (sgpIn15942 = sgpBind2905) =>
      resolveFillStyle(
        sgpIn151,
        sgpIn15942,
        sgpBind2900,
        sgpIn154,
        sgpBind2899,
      ),
    sgpBind2909 = sgpBind2907(),
    sgpBind2910 = sgpBind2908();
  sgpIn151.fillStyle = sgpBind2909;
  sgpIn151.strokeStyle = sgpBind2910;
  let sgpBind2911 = sgpBind2906 ? undefined : sgpIn155.pictureFillBitmap,
    sgpBind2912 = sgpIn155.pictureFill ?? sgpBind2894;
  switch ((sgpIn151.beginPath(), geometry)) {
    case workbookDt.SHAPE_GEOMETRY_UNSPECIFIED:
    case workbookDt.UNRECOGNIZED:
      sgpIn151.restore();
      break;
    case workbookDt.SHAPE_GEOMETRY_CUSTOM: {
      let sgpBind6743;
      (sgpIn150.customPaths ?? []).forEach((item) => {
        let sgpBind8979 = Number(item.widthEmu) * workbookGt,
          sgpBind8980 = Number(item.heightEmu) * workbookGt,
          sgpBind8981 = width / sgpBind8979,
          sgpBind8982 = height / sgpBind8980,
          sgpBind8983 = (sgpIn3008) => {
            sgpIn151.save();
            sgpIn3008.shadow
              ? sgpH.bh612(sgpIn151, sgpIn3008.shadow)
              : sgpH.bh613(sgpIn151);
            sgpIn151.fillStyle = sgpBind2907();
            sgpIn151.strokeStyle = sgpIn3008.stroke
              ? sgpBind2908()
              : "rgba(0, 0, 0, 0)";
            sgpH.drawCustomPaths(sgpIn151, item.commands, {
              scaleX: sgpBind8981,
              scaleY: sgpBind8982,
            });
            sgpBind2911
              ? (sgpIn151.save(),
                sgpIn151.clip(),
                sgpH.bh617(
                  sgpIn151,
                  sgpBind2912,
                  sgpBind2911,
                  sgpBind2905,
                  sgpIn154,
                ),
                sgpIn151.restore())
              : sgpIn151.fill();
            sgpIn3008.stroke &&
              (sgpIn150.connector && sgpBind2893
                ? sgpH.bh623(
                    sgpIn151,
                    sgpH.clipShapeGeometry(
                      item.commands,
                      sgpBind8981,
                      sgpBind8982,
                    ),
                    sgpBind2893,
                    sgpBind2898,
                  )
                : sgpIn151.stroke());
            !sgpBind6743 &&
              sgpIn150.connector &&
              (sgpBind6743 = sgpH.paintShapeAdjustments(
                item.commands,
                sgpBind8981,
                sgpBind8982,
              ));
            sgpIn151.restore();
          };
        sgpBind2902 &&
          sgpBind8983({
            shadow: sgpBind2902,
            stroke: false,
          });
        sgpBind8983({
          stroke: sgpBind2898 > 0 && !sgpBind2896,
        });
      });
      sgpIn150.connector &&
        sgpBind2893 &&
        sgpIn153 &&
        sgpH.drawConnectorArrowheads(
          sgpBind2893,
          sgpIn151,
          sgpIn152,
          sgpIn153,
          sgpBind2910,
          sgpBind2898,
          sgpBind6743,
          sgpH.bh618({
            bbox: sgpBind2905,
            fill: sgpBind2900,
            themeMap: sgpIn154,
            fallbackPaint: sgpBind2910,
            metrics: sgpBind6743,
          }),
        );
      sgpIn151.restore();
      sgpIn151.restore();
      return;
    }
    default: {
      let sgpBind5507 = sgpIn150.preset,
        sgpBind5508;
      if (sgpBind5507) {
        let sgpBind6555 = adjustmentList?.reduce(
          (sgpIn15602, sgpIn15603) => (
            (sgpIn15602[sgpIn15603.name] = sgpIn15603.formula),
            sgpIn15602
          ),
          {},
        );
        sgpBind2902 &&
          (sgpIn151.save(),
          sgpH.bh612(sgpIn151, sgpBind2902),
          sgpH.bh608(sgpIn151, sgpBind5507, {
            w: width,
            h: height,
            x: 0,
            y: 0,
            adjustments: sgpBind6555,
            fill: true,
            stroke: false,
            collectMetrics: false,
          }),
          sgpIn151.restore());
        sgpH.bh613(sgpIn151);
        let sgpBind6556 =
            !!sgpIn150.connector &&
            geometry === workbookDt.SHAPE_GEOMETRY_STRAIGHT_CONNECTOR1,
          sgpBind6557 = sgpH.bh608(sgpIn151, sgpBind5507, {
            w: width,
            h: height,
            x: 0,
            y: 0,
            adjustments: sgpBind6555,
            fill: !sgpBind2911,
            stroke: sgpBind2898 > 0 && !sgpBind2896 && !sgpBind6556,
            collectMetrics: !!sgpIn150.connector,
          });
        if (
          (sgpBind2911 &&
            (sgpIn151.save(),
            sgpIn151.clip(),
            sgpH.bh617(
              sgpIn151,
              sgpBind2912,
              sgpBind2911,
              {
                x: 0,
                y: 0,
                width,
                height,
              },
              sgpIn154,
            ),
            sgpIn151.restore()),
          sgpIn150.connector &&
            sgpBind6557?.length &&
            (sgpBind5508 = sgpBind6557.find((item) => item.start && item.end)),
          sgpBind6556 &&
            sgpBind5508 &&
            sgpBind5508.start &&
            sgpBind5508.end &&
            sgpBind2898 > 0 &&
            !sgpBind2896 &&
            sgpBind2893)
        ) {
          let { start, end } = sgpBind5508;
          sgpH.bh623(
            sgpIn151,
            [
              {
                cmd: "moveTo",
                x: start.x,
                y: start.y,
              },
              {
                cmd: "lineTo",
                x: end.x,
                y: end.y,
              },
            ],
            sgpBind2893,
            sgpBind2898,
          );
        }
      }
      sgpIn150.connector &&
        sgpBind2893 &&
        sgpIn153 &&
        sgpH.drawConnectorArrowheads(
          sgpBind2893,
          sgpIn151,
          sgpIn152,
          sgpIn153,
          sgpBind2910,
          sgpBind2898,
          sgpBind5508,
          sgpH.bh618({
            bbox: sgpBind2905,
            fill: sgpBind2900,
            themeMap: sgpIn154,
            fallbackPaint: sgpBind2910,
            metrics: sgpBind5508,
          }),
        );
      sgpIn151.restore();
      sgpIn151.restore();
      return;
    }
  }
  sgpIn151.fill();
  sgpBind2898 > 0 && !sgpBind2896 && sgpIn151.stroke();
  sgpIn151.restore();
}
