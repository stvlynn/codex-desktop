// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: connector route path commands.
// Stage-3 wave-111.

import { Xge, icFn353 } from "../image-connector";
import { resolveElementFramePx } from "../geometry-transform";

void Xge;
void icFn353;
void resolveElementFramePx;

export function computeConnectorRoutePath(
  speIn3606: any,
  speIn3607: any,
  speIn3608: any,
  speIn3609: any,
) {
  let speBind12131 = speIn3606.connector;
  if (!speBind12131) return [];
  let speBind12132 = speIn3607.find(
      (item) => item.id === speBind12131.fromElementId,
    ),
    speBind12133 = speIn3607.find(
      (item) => item.id === speBind12131.toElementId,
    );
  if (!speBind12132 || !speBind12133) return [];
  try {
    return Xge(
      icFn353({
        element: speBind12132,
        siteIndex: speBind12131.fromIdx,
        pres: speIn3608,
        slide: speIn3609,
      }),
      icFn353({
        element: speBind12133,
        siteIndex: speBind12131.toIdx,
        pres: speIn3608,
        slide: speIn3609,
      }),
    );
  } catch {}
  let speBind12134 = bboxCenter(
      resolveElementFramePx(speBind12132, speIn3608, speIn3609),
    ),
    speBind12135 = bboxCenter(
      resolveElementFramePx(speBind12133, speIn3608, speIn3609),
    );
  return [
    {
      cmd: "moveTo",
      x: speBind12134.x,
      y: speBind12134.y,
    },
    {
      cmd: "lineTo",
      x: speBind12135.x,
      y: speBind12135.y,
    },
  ];
}
export function bboxCenter(speIn12677: any) {
  return {
    x: speIn12677.x + speIn12677.width / 2,
    y: speIn12677.y + speIn12677.height / 2,
  };
}

export const pTe = computeConnectorRoutePath;
export const workbookHelper629 = bboxCenter;
