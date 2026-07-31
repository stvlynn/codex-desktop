// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-66: sheet shape overlay (legacy bYe).

import { Zn, tr } from "../presentation-protobuf";
import { paintTextElement } from "../text-box";
import { workbookSt } from "./boundary-hooks";
import {
  getWorkbookO,
  renderDrawingShape,
  resolveShapeFillBitmap,
  layoutPaintedText,
  emuToCssPx,
  cssPxToEmu,
} from "./boundary-hooks";
import {
  ensurePaintEmuMapsInit,
  pxToEmu,
  pictureFillBitmapCache,
  pictureFillBitmapPending,
} from "./paint-helpers-impl";
void Zn;
void tr;
void paintTextElement;
void workbookSt;

export function paintSheetShapes(
  cpIn233: any,
  cpIn234: any,
  cpIn235: any,
  cpIn236: any,
  cpIn237: any,
  cpIn238: any,
  cpIn239: any,
  cpIn240: any,
  cpIn241: any,
  cpIn242: any,
  cpIn243: any,
  cpIn244: any,
  cpIn245: any,
): any {
  ensurePaintEmuMapsInit();
  let cpBind3256 = cpIn234.shapes.items;
  if (cpBind3256.length === 0) return;
  let cpBind3257 = cpIn244 ?? 1,
    cpBind3258 = getWorkbookO().load({
      id: undefined,
      slides: [],
      theme: {
        name: "ChatGPT",
        colorScheme: {
          name: "",
          colors: [],
        },
        fillStyleList: [],
        backgroundFillStyleList: [],
        lineStyleList: [],
        effectStyleList: [],
      },
      layouts: [],
      charts: [],
      images: [],
      contentReferences: [],
      textStyles: [],
      fonts: [],
      people: [],
      threads: [],
    }),
    cpBind3259 = cpBind3258.slides.add();
  for (let [cpBind3506, cpBind3507] of cpBind3256.entries()) {
    let cpBind3538 = cpBind3507.toDrawingProto({
      preferPreview: true,
    });
    if (!cpBind3538.shape) continue;
    let cpBind3539 = cpBind3507.resolveBoundsPx(
      {
        columnOffsets: cpIn235,
        rowOffsets: cpIn236,
      },
      {
        preferPreview: true,
      },
    );
    if (!cpBind3539) continue;
    let cpBind3540 = 40 + cpBind3539.x - cpIn237,
      cpBind3541 = 20 + cpBind3539.y - cpIn238,
      cpBind3542 = cpBind3539.width,
      cpBind3543 = cpBind3539.height;
    if (
      (cpBind3542 <= 0 && cpBind3543 <= 0) ||
      (cpBind3542 <= 0 && cpBind3543 > 0 && (cpBind3542 = 1),
      cpBind3543 <= 0 && cpBind3542 > 0 && (cpBind3543 = 1),
      cpBind3540 + cpBind3542 < 0 ||
        cpBind3541 + cpBind3543 < 0 ||
        cpBind3540 > cpIn239 ||
        cpBind3541 > cpIn240)
    )
      continue;
    cpIn242?.(cpBind3540, cpBind3541, cpBind3542, cpBind3543, "shape");
    let cpBind3544 =
      cpBind3507.id || cpBind3538.shape?.id || `shape-${cpBind3506}`;
    cpIn243 &&
      cpIn243({
        id: cpBind3544,
        logicalBounds: {
          x: cpBind3540,
          y: cpBind3541,
          width: cpBind3542,
          height: cpBind3543,
        },
        cssBounds: {
          x: cpBind3540 * cpBind3257,
          y: cpBind3541 * cpBind3257,
          width: cpBind3542 * cpBind3257,
          height: cpBind3543 * cpBind3257,
        },
        drawing: cpBind3538,
        usesTwoCellAnchor: !!cpBind3538.toAnchor,
      });
    let cpBind3545 = {
      ...cpBind3538.shape,
    };
    cpBind3545.bbox = {
      ...(cpBind3538.shape?.bbox ?? {}),
      xEmu: pxToEmu(cpBind3540),
      yEmu: pxToEmu(cpBind3541),
      widthEmu: pxToEmu(cpBind3542),
      heightEmu: pxToEmu(cpBind3543),
    };
    let cpBind3546 = cpBind3545.shape?.fill?.imageReference?.id,
      cpBind3547 = cpBind3546
        ? pictureFillBitmapCache.get(cpBind3546)
        : undefined;
    if (
      cpBind3546 &&
      !cpBind3547 &&
      !pictureFillBitmapPending.has(cpBind3546)
    ) {
      let cpBind20714 = cpBind3507
        .getPictureFillBitmap()
        .then(
          (value) => (
            value && pictureFillBitmapCache.set(cpBind3546, value),
            pictureFillBitmapPending.delete(cpBind3546),
            value
          ),
        );
      pictureFillBitmapPending.set(cpBind3546, cpBind20714);
    }
    if (
      (renderDrawingShape(
        cpBind3545,
        cpIn233,
        cpBind3258,
        cpBind3259,
        cpIn241,
        {
          pictureFillBitmap: cpBind3547
            ? {
                bitmap: cpBind3547,
              }
            : undefined,
          pictureFill: cpBind3545.shape?.fill,
        },
      ),
      cpBind3545.paragraphs && cpBind3545.paragraphs.length > 0)
    ) {
      try {
        let cpBind6760 =
            cpBind3545.shape?.fill?.color ??
            cpBind3545.shape?.fill?.pattern?.color,
          cpBind6761 = cpIn241 ? workbookSt(cpBind6760, cpIn241) : undefined;
        if (
          cpBind6761 &&
          (!cpBind3545.textStyle || !cpBind3545.textStyle.fill)
        ) {
          let cpBind9911 = resolveShapeFillBitmap(cpBind6761);
          if (cpBind9911) {
            let cpBind10442 = cpBind9911[0] / 255,
              cpBind10443 = cpBind9911[1] / 255,
              cpBind10444 = cpBind9911[2] / 255;
            0.2126 * cpBind10442 + 0.7152 * cpBind10443 + 0.0722 * cpBind10444 <
              0.45 &&
              ((cpBind3545.textStyle = cpBind3545.textStyle ?? {}),
              (cpBind3545.textStyle.fill = {
                color: {
                  type: Zn.COLOR_TYPE_RGB,
                  value: "FFFFFFFF",
                  transform: undefined,
                },
                type: tr.FILL_TYPE_SOLID,
                gradientStops: [],
                pictureEffects: [],
              }),
              !cpBind3545.textStyle.anchor &&
                (cpBind3545.paragraphs?.length ?? 0) >= 1 &&
                (cpBind3545.textStyle.anchor = 3));
          }
        }
        cpBind3545.fontReference?.color &&
          (!cpBind3545.textStyle || !cpBind3545.textStyle.fill) &&
          ((cpBind3545.textStyle = cpBind3545.textStyle ?? {}),
          (cpBind3545.textStyle.fill = {
            type: tr.FILL_TYPE_SOLID,
            color: cpBind3545.fontReference.color,
            gradientStops: [],
            pictureEffects: [],
          }));
      } catch {}
      let cpBind4517 = layoutPaintedText(cpBind3545, cpBind3258, cpBind3259);
      cpIn233.save();
      let cpBind4518 = cpBind3540 + cpBind3542 / 2,
        cpBind4519 = cpBind3541 + cpBind3543 / 2,
        cpBind4520 = cssPxToEmu(cpBind3545.bbox?.rotation ?? 0),
        cpBind4521 = cpBind3545.bbox?.horizontalFlip ? -1 : 1,
        cpBind4522 = cpBind3545.bbox?.verticalFlip ? -1 : 1;
      cpIn233.translate(cpBind4518, cpBind4519);
      cpBind4520 !== 0 && cpIn233.rotate(cpBind4520);
      (cpBind4521 !== 1 || cpBind4522 !== 1) &&
        cpIn233.scale(cpBind4521, cpBind4522);
      cpIn233.translate(-cpBind4518, -cpBind4519);
      let cpBind4523 = paintTextElement(
        cpBind3545,
        cpIn233,
        cpIn241,
        undefined,
        {
          bboxPx: {
            x: cpBind3540,
            y: cpBind3541,
            width: cpBind3542,
            height: cpBind3543,
          },
          resolvedStyle: cpBind4517,
          paddingPx: undefined,
          layoutProfile: "spreadsheet",
        },
      );
      cpIn233.restore();
      cpBind4523 &&
        cpIn245 &&
        cpIn245.add({
          id: cpBind3544,
          layout: cpBind4523,
          rotationDeg: emuToCssPx(cpBind3545.bbox?.rotation ?? 0) ?? 0,
          zIndex: cpBind3506,
          hitBox: {
            x: cpBind3540,
            y: cpBind3541,
            width: cpBind3542,
            height: cpBind3543,
          },
          getRunText: (cpIn10441, cpIn10442) => {
            let cpBind20910 = (cpBind3545.paragraphs ?? [])[cpIn10441]?.runs?.[
              cpIn10442
            ];
            return cpBind20910?.text ?? cpBind20910?.run ?? "";
          },
        });
    }
  }
}
