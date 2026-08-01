// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: connector arrowhead paint helpers (legacy Bwe / Binding1260–1264).
// Stage-3 wave-149.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  resolveElementFramePx as workbookHelper286,
  ensureGeometryTransformDepsInit as workbookBinding628,
} from "../geometry-transform";

export let workbookBinding1260 = (
  caaIn454: any,
  caaIn455: any,
  caaIn456: any,
  caaIn457: any,
  caaIn458: any,
  caaIn459: any,
  caaIn460: any,
  caaIn461: any,
) => {
  if (!(caaIn454.connector && caaIn459 > 0)) return;
  let caaBind4016 =
      caaIn460 ?? workbookBinding1264(caaIn454, caaIn456, caaIn457),
    caaBind4017 = caaBind4016?.start,
    caaBind4018 = caaBind4016?.end;
  if (!caaBind4017 || !caaBind4018) return;
  let caaBind4019 =
      Math.atan2(
        caaBind4018.y - caaBind4017.y,
        caaBind4018.x - caaBind4017.x,
      ) || 0,
    caaBind4020 =
      typeof caaBind4018.angle == "number" && Number.isFinite(caaBind4018.angle)
        ? caaBind4018.angle
        : caaBind4019,
    caaBind4021 =
      typeof caaBind4017.angle == "number" && Number.isFinite(caaBind4017.angle)
        ? caaBind4017.angle
        : caaBind4019,
    caaBind4022 = (caaIn608, caaIn609, caaIn610, caaIn611) => {
      let caaBind4628 =
        caaIn611 === "head"
          ? caaIn454.connector?.lineStyle?.head
          : caaIn454.connector?.lineStyle?.tail;
      if (!caaBind4628) return;
      let caaBind4629 = workbookBinding1262(caaBind4628, caaIn459);
      if (!caaBind4629) return;
      let { type, halfWidthPx, lengthPx } = caaBind4629,
        caaBind4630 = caaIn461?.[caaIn611] ?? caaIn458;
      if (
        (caaIn455.save(),
        caaIn455.translate(caaIn608, caaIn609),
        caaIn455.rotate(caaIn610),
        (caaIn455.fillStyle = caaBind4630),
        (caaIn455.strokeStyle = caaBind4630),
        (caaIn455.lineWidth = Math.max(1, caaIn459)),
        type === 5)
      ) {
        caaIn455.beginPath();
        caaIn455.ellipse(0, 0, halfWidthPx, halfWidthPx, 0, 0, Math.PI * 2);
        caaIn455.fill();
      } else if (type === 4) {
        caaIn455.beginPath();
        caaIn455.moveTo(0, 0);
        caaIn455.lineTo(-lengthPx / 2, -halfWidthPx);
        caaIn455.lineTo(-lengthPx, 0);
        caaIn455.lineTo(-lengthPx / 2, halfWidthPx);
        caaIn455.closePath();
        caaIn455.fill();
      } else if (type === 6) {
        caaIn455.save();
        let caaBind11325 = caaIn455.lineCap,
          caaBind11326 = caaIn455.lineJoin,
          caaBind11327 = caaIn455.miterLimit ?? 10;
        caaIn455.lineCap = "round";
        caaIn455.lineJoin = "round";
        caaIn455.miterLimit = 3.5;
        caaIn455.beginPath();
        caaIn455.moveTo(0, 0);
        caaIn455.lineTo(-lengthPx, -halfWidthPx);
        caaIn455.moveTo(0, 0);
        caaIn455.lineTo(-lengthPx, halfWidthPx);
        caaIn455.stroke();
        caaIn455.lineCap = caaBind11325;
        caaIn455.lineJoin = caaBind11326;
        caaIn455.miterLimit = caaBind11327;
        caaIn455.restore();
      } else if (type === 3) {
        let caaBind16972 = -workbookBinding1263(lengthPx);
        caaIn455.beginPath();
        caaIn455.moveTo(0, 0);
        caaIn455.lineTo(-lengthPx, -halfWidthPx);
        caaIn455.lineTo(caaBind16972, 0);
        caaIn455.lineTo(-lengthPx, halfWidthPx);
        caaIn455.closePath();
        caaIn455.fill();
      } else {
        caaIn455.beginPath();
        caaIn455.moveTo(0, 0);
        caaIn455.lineTo(-lengthPx, -halfWidthPx);
        caaIn455.lineTo(-lengthPx, halfWidthPx);
        caaIn455.closePath();
        caaIn455.fill();
      }
      caaIn455.restore();
    };
  caaBind4022(caaBind4017.x, caaBind4017.y, caaBind4021 + Math.PI, "head");
  caaBind4022(caaBind4018.x, caaBind4018.y, caaBind4020, "tail");
};

export let workbookBinding1261 = (caaIn8122: any, caaIn8123: any) => {
  let caaBind18619 = workbookBinding1262(
      caaIn8122.connector?.lineStyle?.head,
      caaIn8123,
    ),
    caaBind18620 = workbookBinding1262(
      caaIn8122.connector?.lineStyle?.tail,
      caaIn8123,
    );
  return {
    startPx: caaBind18619?.strokeInsetPx ?? 0,
    endPx: caaBind18620?.strokeInsetPx ?? 0,
  };
};

export let workbookBinding1262 = (caaIn3434: any, caaIn3435: any) => {
  if (!caaIn3434) return;
  let caaBind11865 = caaIn3434.type;
  if (!caaBind11865 || caaBind11865 === 1) return;
  let caaBind11866 = caaIn3434.width,
    caaBind11867 = caaIn3434.length,
    caaBind11868 = caaBind11866 === 3 ? 5.5 : caaBind11866 === 2 ? 4.5 : 3.5,
    caaBind11869 = caaBind11867 === 3 ? 6.5 : caaBind11867 === 2 ? 5.5 : 4.5,
    caaBind11870 = (caaBind11868 * caaIn3435) / 2,
    caaBind11871 = caaBind11869 * caaIn3435,
    caaBind11872 = caaBind11865 === 3 ? caaBind11871 * 0.72 : caaBind11871;
  return {
    type: caaBind11865,
    halfWidthPx: caaBind11870,
    lengthPx: caaBind11872,
    strokeInsetPx:
      caaBind11865 === 4
        ? caaBind11872 / 2
        : caaBind11865 === 5 || caaBind11865 === 6
          ? 0
          : caaBind11865 === 3
            ? workbookBinding1263(caaBind11872)
            : caaBind11872,
  };
};

export let workbookBinding1263 = (caaIn16534: any) => caaIn16534 * 0.68;
workbookBinding1264 = (caaIn4397, caaIn4398, caaIn4399) => {
  let { width, height } = workbookHelper286(caaIn4397, caaIn4398, caaIn4399);
  if (!(width === 0 && height === 0))
    return width >= height
      ? {
          start: {
            x: 0,
            y: height / 2,
            angle: 0,
          },
          end: {
            x: width,
            y: height / 2,
            angle: 0,
          },
        }
      : {
          start: {
            x: width / 2,
            y: 0,
            angle: Math.PI / 2,
          },
          end: {
            x: width / 2,
            y: height,
            angle: Math.PI / 2,
          },
        };
};

export let workbookBinding1264 = (
  caaIn4397: any,
  caaIn4398: any,
  caaIn4399: any,
) => {
  let { width, height } = workbookHelper286(caaIn4397, caaIn4398, caaIn4399);
  if (!(width === 0 && height === 0))
    return width >= height
      ? {
          start: {
            x: 0,
            y: height / 2,
            angle: 0,
          },
          end: {
            x: width,
            y: height / 2,
            angle: 0,
          },
        }
      : {
          start: {
            x: width / 2,
            y: 0,
            angle: Math.PI / 2,
          },
          end: {
            x: width / 2,
            y: height,
            angle: Math.PI / 2,
          },
        };
};

export const Bwe = esmInit(() => {
  workbookBinding628();
});

export function ensureConnectorArrowheadsInit(): void {
  Bwe();
}

export function getDrawConnectorArrowheads(): typeof workbookBinding1260 {
  Bwe();
  return workbookBinding1260;
}
