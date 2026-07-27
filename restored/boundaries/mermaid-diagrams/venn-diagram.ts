// Restored from ref/webview/assets/vennDiagram-DHZGUBPP-SS5j_WbU.js
// Mermaid Venn diagram definition (db + renderer + parser).
// Stage 3 candidate: IMPORT_MAP-ready local deps (no app-initial edge).
// Flat boundary facade — Mermaid diagram/doc vendor (faithful bundled Mermaid diagram definition).

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../../runtime/rolldown-runtime";
import { c, d, p, s, t } from "../../vendor/khroma";
import {
  select,
  ensureD3SelectionRuntimeT,
} from "../../vendor/d3-axis-current-runtime";
import rough from "roughjs";
import {
  defineFunctionName,
  initDayjsLoggerRuntime,
} from "../../utils/dayjs-core-alt";
import {
  A as _chunkICPOFSXXA,
  C as _chunkICPOFSXXC,
  V as _chunkICPOFSXXV,
  A,
  C,
  d as chunkICPOFSXXD,
  G,
  H,
  _,
  V,
  y,
} from "../../diagrams/mermaid-config-alt";
import { n, t as chunk426QAEUCT } from "../../diagrams/select-svg-element-alt";
import { chunk5PVQY5BWR, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
function vennDiagramDHZGUBPPHelper1(
  vennDiagramDHZGUBPPInput23,
  vennDiagramDHZGUBPPInput24,
) {
  let vennDiagramDHZGUBPPBinding159 = vennDiagramDHZGUBPPHelper3(
      vennDiagramDHZGUBPPInput23,
    ),
    vennDiagramDHZGUBPPBinding160 = vennDiagramDHZGUBPPBinding159.filter(
      (item) => vennDiagramDHZGUBPPHelper2(item, vennDiagramDHZGUBPPInput23),
    ),
    vennDiagramDHZGUBPPBinding161 = 0,
    vennDiagramDHZGUBPPBinding162 = 0,
    vennDiagramDHZGUBPPBinding163 = [];
  if (vennDiagramDHZGUBPPBinding160.length > 1) {
    let vennDiagramDHZGUBPPBinding211 = vennDiagramDHZGUBPPHelper8(
      vennDiagramDHZGUBPPBinding160,
    );
    for (
      let vennDiagramDHZGUBPPBinding493 = 0;
      vennDiagramDHZGUBPPBinding493 < vennDiagramDHZGUBPPBinding160.length;
      ++vennDiagramDHZGUBPPBinding493
    ) {
      let vennDiagramDHZGUBPPBinding533 =
        vennDiagramDHZGUBPPBinding160[vennDiagramDHZGUBPPBinding493];
      vennDiagramDHZGUBPPBinding533.angle = Math.atan2(
        vennDiagramDHZGUBPPBinding533.x - vennDiagramDHZGUBPPBinding211.x,
        vennDiagramDHZGUBPPBinding533.y - vennDiagramDHZGUBPPBinding211.y,
      );
    }
    vennDiagramDHZGUBPPBinding160.sort(
      (vennDiagramDHZGUBPPInput226, vennDiagramDHZGUBPPInput227) =>
        vennDiagramDHZGUBPPInput227.angle - vennDiagramDHZGUBPPInput226.angle,
    );
    let vennDiagramDHZGUBPPBinding212 =
      vennDiagramDHZGUBPPBinding160[vennDiagramDHZGUBPPBinding160.length - 1];
    for (
      let vennDiagramDHZGUBPPBinding241 = 0;
      vennDiagramDHZGUBPPBinding241 < vennDiagramDHZGUBPPBinding160.length;
      ++vennDiagramDHZGUBPPBinding241
    ) {
      let vennDiagramDHZGUBPPBinding249 =
        vennDiagramDHZGUBPPBinding160[vennDiagramDHZGUBPPBinding241];
      vennDiagramDHZGUBPPBinding162 +=
        (vennDiagramDHZGUBPPBinding212.x + vennDiagramDHZGUBPPBinding249.x) *
        (vennDiagramDHZGUBPPBinding249.y - vennDiagramDHZGUBPPBinding212.y);
      let vennDiagramDHZGUBPPBinding250 = {
          x:
            (vennDiagramDHZGUBPPBinding249.x +
              vennDiagramDHZGUBPPBinding212.x) /
            2,
          y:
            (vennDiagramDHZGUBPPBinding249.y +
              vennDiagramDHZGUBPPBinding212.y) /
            2,
        },
        vennDiagramDHZGUBPPBinding251 = null;
      for (
        let vennDiagramDHZGUBPPBinding284 = 0;
        vennDiagramDHZGUBPPBinding284 <
        vennDiagramDHZGUBPPBinding249.parentIndex.length;
        ++vennDiagramDHZGUBPPBinding284
      )
        if (
          vennDiagramDHZGUBPPBinding212.parentIndex.includes(
            vennDiagramDHZGUBPPBinding249.parentIndex[
              vennDiagramDHZGUBPPBinding284
            ],
          )
        ) {
          let vennDiagramDHZGUBPPBinding294 =
              vennDiagramDHZGUBPPInput23[
                vennDiagramDHZGUBPPBinding249.parentIndex[
                  vennDiagramDHZGUBPPBinding284
                ]
              ],
            vennDiagramDHZGUBPPBinding295 = Math.atan2(
              vennDiagramDHZGUBPPBinding249.x - vennDiagramDHZGUBPPBinding294.x,
              vennDiagramDHZGUBPPBinding249.y - vennDiagramDHZGUBPPBinding294.y,
            ),
            vennDiagramDHZGUBPPBinding296 = Math.atan2(
              vennDiagramDHZGUBPPBinding212.x - vennDiagramDHZGUBPPBinding294.x,
              vennDiagramDHZGUBPPBinding212.y - vennDiagramDHZGUBPPBinding294.y,
            ),
            vennDiagramDHZGUBPPBinding297 =
              vennDiagramDHZGUBPPBinding296 - vennDiagramDHZGUBPPBinding295;
          vennDiagramDHZGUBPPBinding297 < 0 &&
            (vennDiagramDHZGUBPPBinding297 += 2 * Math.PI);
          let vennDiagramDHZGUBPPBinding298 =
              vennDiagramDHZGUBPPBinding296 - vennDiagramDHZGUBPPBinding297 / 2,
            vennDiagramDHZGUBPPBinding299 = vennDiagramDHZGUBPPHelper5(
              vennDiagramDHZGUBPPBinding250,
              {
                x:
                  vennDiagramDHZGUBPPBinding294.x +
                  vennDiagramDHZGUBPPBinding294.radius *
                    Math.sin(vennDiagramDHZGUBPPBinding298),
                y:
                  vennDiagramDHZGUBPPBinding294.y +
                  vennDiagramDHZGUBPPBinding294.radius *
                    Math.cos(vennDiagramDHZGUBPPBinding298),
              },
            );
          vennDiagramDHZGUBPPBinding299 >
            vennDiagramDHZGUBPPBinding294.radius * 2 &&
            (vennDiagramDHZGUBPPBinding299 =
              vennDiagramDHZGUBPPBinding294.radius * 2);
          (vennDiagramDHZGUBPPBinding251 == null ||
            vennDiagramDHZGUBPPBinding251.width >
              vennDiagramDHZGUBPPBinding299) &&
            (vennDiagramDHZGUBPPBinding251 = {
              circle: vennDiagramDHZGUBPPBinding294,
              width: vennDiagramDHZGUBPPBinding299,
              p1: vennDiagramDHZGUBPPBinding249,
              p2: vennDiagramDHZGUBPPBinding212,
              large:
                vennDiagramDHZGUBPPBinding299 >
                vennDiagramDHZGUBPPBinding294.radius,
              sweep: true,
            });
        }
      vennDiagramDHZGUBPPBinding251 != null &&
        (vennDiagramDHZGUBPPBinding163.push(vennDiagramDHZGUBPPBinding251),
        (vennDiagramDHZGUBPPBinding161 += vennDiagramDHZGUBPPHelper4(
          vennDiagramDHZGUBPPBinding251.circle.radius,
          vennDiagramDHZGUBPPBinding251.width,
        )),
        (vennDiagramDHZGUBPPBinding212 = vennDiagramDHZGUBPPBinding249));
    }
  } else {
    let vennDiagramDHZGUBPPBinding325 = vennDiagramDHZGUBPPInput23[0];
    for (
      let vennDiagramDHZGUBPPBinding540 = 1;
      vennDiagramDHZGUBPPBinding540 < vennDiagramDHZGUBPPInput23.length;
      ++vennDiagramDHZGUBPPBinding540
    )
      vennDiagramDHZGUBPPInput23[vennDiagramDHZGUBPPBinding540].radius <
        vennDiagramDHZGUBPPBinding325.radius &&
        (vennDiagramDHZGUBPPBinding325 =
          vennDiagramDHZGUBPPInput23[vennDiagramDHZGUBPPBinding540]);
    let vennDiagramDHZGUBPPBinding326 = false;
    for (
      let vennDiagramDHZGUBPPBinding478 = 0;
      vennDiagramDHZGUBPPBinding478 < vennDiagramDHZGUBPPInput23.length;
      ++vennDiagramDHZGUBPPBinding478
    )
      if (
        vennDiagramDHZGUBPPHelper5(
          vennDiagramDHZGUBPPInput23[vennDiagramDHZGUBPPBinding478],
          vennDiagramDHZGUBPPBinding325,
        ) >
        Math.abs(
          vennDiagramDHZGUBPPBinding325.radius -
            vennDiagramDHZGUBPPInput23[vennDiagramDHZGUBPPBinding478].radius,
        )
      ) {
        vennDiagramDHZGUBPPBinding326 = true;
        break;
      }
    vennDiagramDHZGUBPPBinding326
      ? (vennDiagramDHZGUBPPBinding161 = vennDiagramDHZGUBPPBinding162 = 0)
      : ((vennDiagramDHZGUBPPBinding161 =
          vennDiagramDHZGUBPPBinding325.radius *
          vennDiagramDHZGUBPPBinding325.radius *
          Math.PI),
        vennDiagramDHZGUBPPBinding163.push({
          circle: vennDiagramDHZGUBPPBinding325,
          p1: {
            x: vennDiagramDHZGUBPPBinding325.x,
            y:
              vennDiagramDHZGUBPPBinding325.y +
              vennDiagramDHZGUBPPBinding325.radius,
          },
          p2: {
            x: vennDiagramDHZGUBPPBinding325.x - vennDiagramDHZGUBPPBinding1,
            y:
              vennDiagramDHZGUBPPBinding325.y +
              vennDiagramDHZGUBPPBinding325.radius,
          },
          width: vennDiagramDHZGUBPPBinding325.radius * 2,
          large: true,
          sweep: true,
        }));
  }
  return (
    (vennDiagramDHZGUBPPBinding162 /= 2),
    vennDiagramDHZGUBPPInput24 &&
      ((vennDiagramDHZGUBPPInput24.area =
        vennDiagramDHZGUBPPBinding161 + vennDiagramDHZGUBPPBinding162),
      (vennDiagramDHZGUBPPInput24.arcArea = vennDiagramDHZGUBPPBinding161),
      (vennDiagramDHZGUBPPInput24.polygonArea = vennDiagramDHZGUBPPBinding162),
      (vennDiagramDHZGUBPPInput24.arcs = vennDiagramDHZGUBPPBinding163),
      (vennDiagramDHZGUBPPInput24.innerPoints = vennDiagramDHZGUBPPBinding160),
      (vennDiagramDHZGUBPPInput24.intersectionPoints =
        vennDiagramDHZGUBPPBinding159)),
    vennDiagramDHZGUBPPBinding161 + vennDiagramDHZGUBPPBinding162
  );
}
function vennDiagramDHZGUBPPHelper2(
  vennDiagramDHZGUBPPInput200,
  vennDiagramDHZGUBPPInput201,
) {
  return vennDiagramDHZGUBPPInput201.every(
    (item) =>
      vennDiagramDHZGUBPPHelper5(vennDiagramDHZGUBPPInput200, item) <
      item.radius + vennDiagramDHZGUBPPBinding1,
  );
}
function vennDiagramDHZGUBPPHelper3(vennDiagramDHZGUBPPInput117) {
  let vennDiagramDHZGUBPPBinding417 = [];
  for (
    let vennDiagramDHZGUBPPBinding448 = 0;
    vennDiagramDHZGUBPPBinding448 < vennDiagramDHZGUBPPInput117.length;
    ++vennDiagramDHZGUBPPBinding448
  )
    for (
      let vennDiagramDHZGUBPPBinding472 = vennDiagramDHZGUBPPBinding448 + 1;
      vennDiagramDHZGUBPPBinding472 < vennDiagramDHZGUBPPInput117.length;
      ++vennDiagramDHZGUBPPBinding472
    ) {
      let vennDiagramDHZGUBPPBinding510 = vennDiagramDHZGUBPPHelper7(
        vennDiagramDHZGUBPPInput117[vennDiagramDHZGUBPPBinding448],
        vennDiagramDHZGUBPPInput117[vennDiagramDHZGUBPPBinding472],
      );
      for (let vennDiagramDHZGUBPPBinding549 of vennDiagramDHZGUBPPBinding510) {
        vennDiagramDHZGUBPPBinding549.parentIndex = [
          vennDiagramDHZGUBPPBinding448,
          vennDiagramDHZGUBPPBinding472,
        ];
        vennDiagramDHZGUBPPBinding417.push(vennDiagramDHZGUBPPBinding549);
      }
    }
  return vennDiagramDHZGUBPPBinding417;
}
function vennDiagramDHZGUBPPHelper4(
  vennDiagramDHZGUBPPInput163,
  vennDiagramDHZGUBPPInput164,
) {
  return (
    vennDiagramDHZGUBPPInput163 *
      vennDiagramDHZGUBPPInput163 *
      Math.acos(1 - vennDiagramDHZGUBPPInput164 / vennDiagramDHZGUBPPInput163) -
    (vennDiagramDHZGUBPPInput163 - vennDiagramDHZGUBPPInput164) *
      Math.sqrt(
        vennDiagramDHZGUBPPInput164 *
          (2 * vennDiagramDHZGUBPPInput163 - vennDiagramDHZGUBPPInput164),
      )
  );
}
function vennDiagramDHZGUBPPHelper5(
  vennDiagramDHZGUBPPInput165,
  vennDiagramDHZGUBPPInput166,
) {
  return Math.sqrt(
    (vennDiagramDHZGUBPPInput165.x - vennDiagramDHZGUBPPInput166.x) *
      (vennDiagramDHZGUBPPInput165.x - vennDiagramDHZGUBPPInput166.x) +
      (vennDiagramDHZGUBPPInput165.y - vennDiagramDHZGUBPPInput166.y) *
        (vennDiagramDHZGUBPPInput165.y - vennDiagramDHZGUBPPInput166.y),
  );
}
function vennDiagramDHZGUBPPHelper6(
  vennDiagramDHZGUBPPInput114,
  vennDiagramDHZGUBPPInput115,
  vennDiagramDHZGUBPPInput116,
) {
  if (
    vennDiagramDHZGUBPPInput116 >=
    vennDiagramDHZGUBPPInput114 + vennDiagramDHZGUBPPInput115
  )
    return 0;
  if (
    vennDiagramDHZGUBPPInput116 <=
    Math.abs(vennDiagramDHZGUBPPInput114 - vennDiagramDHZGUBPPInput115)
  )
    return (
      Math.PI *
      Math.min(vennDiagramDHZGUBPPInput114, vennDiagramDHZGUBPPInput115) *
      Math.min(vennDiagramDHZGUBPPInput114, vennDiagramDHZGUBPPInput115)
    );
  let vennDiagramDHZGUBPPBinding408 =
      vennDiagramDHZGUBPPInput114 -
      (vennDiagramDHZGUBPPInput116 * vennDiagramDHZGUBPPInput116 -
        vennDiagramDHZGUBPPInput115 * vennDiagramDHZGUBPPInput115 +
        vennDiagramDHZGUBPPInput114 * vennDiagramDHZGUBPPInput114) /
        (2 * vennDiagramDHZGUBPPInput116),
    vennDiagramDHZGUBPPBinding409 =
      vennDiagramDHZGUBPPInput115 -
      (vennDiagramDHZGUBPPInput116 * vennDiagramDHZGUBPPInput116 -
        vennDiagramDHZGUBPPInput114 * vennDiagramDHZGUBPPInput114 +
        vennDiagramDHZGUBPPInput115 * vennDiagramDHZGUBPPInput115) /
        (2 * vennDiagramDHZGUBPPInput116);
  return (
    vennDiagramDHZGUBPPHelper4(
      vennDiagramDHZGUBPPInput114,
      vennDiagramDHZGUBPPBinding408,
    ) +
    vennDiagramDHZGUBPPHelper4(
      vennDiagramDHZGUBPPInput115,
      vennDiagramDHZGUBPPBinding409,
    )
  );
}
function vennDiagramDHZGUBPPHelper7(
  vennDiagramDHZGUBPPInput97,
  vennDiagramDHZGUBPPInput98,
) {
  let vennDiagramDHZGUBPPBinding366 = vennDiagramDHZGUBPPHelper5(
      vennDiagramDHZGUBPPInput97,
      vennDiagramDHZGUBPPInput98,
    ),
    vennDiagramDHZGUBPPBinding367 = vennDiagramDHZGUBPPInput97.radius,
    vennDiagramDHZGUBPPBinding368 = vennDiagramDHZGUBPPInput98.radius;
  if (
    vennDiagramDHZGUBPPBinding366 >=
      vennDiagramDHZGUBPPBinding367 + vennDiagramDHZGUBPPBinding368 ||
    vennDiagramDHZGUBPPBinding366 <=
      Math.abs(vennDiagramDHZGUBPPBinding367 - vennDiagramDHZGUBPPBinding368)
  )
    return [];
  let vennDiagramDHZGUBPPBinding369 =
      (vennDiagramDHZGUBPPBinding367 * vennDiagramDHZGUBPPBinding367 -
        vennDiagramDHZGUBPPBinding368 * vennDiagramDHZGUBPPBinding368 +
        vennDiagramDHZGUBPPBinding366 * vennDiagramDHZGUBPPBinding366) /
      (2 * vennDiagramDHZGUBPPBinding366),
    vennDiagramDHZGUBPPBinding370 = Math.sqrt(
      vennDiagramDHZGUBPPBinding367 * vennDiagramDHZGUBPPBinding367 -
        vennDiagramDHZGUBPPBinding369 * vennDiagramDHZGUBPPBinding369,
    ),
    vennDiagramDHZGUBPPBinding371 =
      vennDiagramDHZGUBPPInput97.x +
      (vennDiagramDHZGUBPPBinding369 *
        (vennDiagramDHZGUBPPInput98.x - vennDiagramDHZGUBPPInput97.x)) /
        vennDiagramDHZGUBPPBinding366,
    vennDiagramDHZGUBPPBinding372 =
      vennDiagramDHZGUBPPInput97.y +
      (vennDiagramDHZGUBPPBinding369 *
        (vennDiagramDHZGUBPPInput98.y - vennDiagramDHZGUBPPInput97.y)) /
        vennDiagramDHZGUBPPBinding366,
    vennDiagramDHZGUBPPBinding373 =
      -(vennDiagramDHZGUBPPInput98.y - vennDiagramDHZGUBPPInput97.y) *
      (vennDiagramDHZGUBPPBinding370 / vennDiagramDHZGUBPPBinding366),
    vennDiagramDHZGUBPPBinding374 =
      -(vennDiagramDHZGUBPPInput98.x - vennDiagramDHZGUBPPInput97.x) *
      (vennDiagramDHZGUBPPBinding370 / vennDiagramDHZGUBPPBinding366);
  return [
    {
      x: vennDiagramDHZGUBPPBinding371 + vennDiagramDHZGUBPPBinding373,
      y: vennDiagramDHZGUBPPBinding372 - vennDiagramDHZGUBPPBinding374,
    },
    {
      x: vennDiagramDHZGUBPPBinding371 - vennDiagramDHZGUBPPBinding373,
      y: vennDiagramDHZGUBPPBinding372 + vennDiagramDHZGUBPPBinding374,
    },
  ];
}
function vennDiagramDHZGUBPPHelper8(vennDiagramDHZGUBPPInput139) {
  let vennDiagramDHZGUBPPBinding462 = {
    x: 0,
    y: 0,
  };
  for (let vennDiagramDHZGUBPPBinding556 of vennDiagramDHZGUBPPInput139) {
    vennDiagramDHZGUBPPBinding462.x += vennDiagramDHZGUBPPBinding556.x;
    vennDiagramDHZGUBPPBinding462.y += vennDiagramDHZGUBPPBinding556.y;
  }
  return (
    (vennDiagramDHZGUBPPBinding462.x /= vennDiagramDHZGUBPPInput139.length),
    (vennDiagramDHZGUBPPBinding462.y /= vennDiagramDHZGUBPPInput139.length),
    vennDiagramDHZGUBPPBinding462
  );
}
function vennDiagramDHZGUBPPHelper9(
  vennDiagramDHZGUBPPInput93,
  vennDiagramDHZGUBPPInput94,
  vennDiagramDHZGUBPPInput95,
  vennDiagramDHZGUBPPInput96,
) {
  vennDiagramDHZGUBPPInput96 ||= {};
  let vennDiagramDHZGUBPPBinding357 =
      vennDiagramDHZGUBPPInput96.maxIterations || 100,
    vennDiagramDHZGUBPPBinding358 =
      vennDiagramDHZGUBPPInput96.tolerance || 1e-10,
    vennDiagramDHZGUBPPBinding359 = vennDiagramDHZGUBPPInput93(
      vennDiagramDHZGUBPPInput94,
    ),
    vennDiagramDHZGUBPPBinding360 = vennDiagramDHZGUBPPInput93(
      vennDiagramDHZGUBPPInput95,
    ),
    vennDiagramDHZGUBPPBinding361 =
      vennDiagramDHZGUBPPInput95 - vennDiagramDHZGUBPPInput94;
  if (vennDiagramDHZGUBPPBinding359 * vennDiagramDHZGUBPPBinding360 > 0)
    throw "Initial bisect points must have opposite signs";
  if (vennDiagramDHZGUBPPBinding359 === 0) return vennDiagramDHZGUBPPInput94;
  if (vennDiagramDHZGUBPPBinding360 === 0) return vennDiagramDHZGUBPPInput95;
  for (
    let vennDiagramDHZGUBPPBinding459 = 0;
    vennDiagramDHZGUBPPBinding459 < vennDiagramDHZGUBPPBinding357;
    ++vennDiagramDHZGUBPPBinding459
  ) {
    vennDiagramDHZGUBPPBinding361 /= 2;
    let vennDiagramDHZGUBPPBinding484 =
        vennDiagramDHZGUBPPInput94 + vennDiagramDHZGUBPPBinding361,
      vennDiagramDHZGUBPPBinding485 = vennDiagramDHZGUBPPInput93(
        vennDiagramDHZGUBPPBinding484,
      );
    if (
      (vennDiagramDHZGUBPPBinding485 * vennDiagramDHZGUBPPBinding359 >= 0 &&
        (vennDiagramDHZGUBPPInput94 = vennDiagramDHZGUBPPBinding484),
      Math.abs(vennDiagramDHZGUBPPBinding361) < vennDiagramDHZGUBPPBinding358 ||
        vennDiagramDHZGUBPPBinding485 === 0)
    )
      return vennDiagramDHZGUBPPBinding484;
  }
  return vennDiagramDHZGUBPPInput94 + vennDiagramDHZGUBPPBinding361;
}
function vennDiagramDHZGUBPPHelper10(vennDiagramDHZGUBPPInput174) {
  let vennDiagramDHZGUBPPBinding525 = Array(vennDiagramDHZGUBPPInput174);
  for (
    let vennDiagramDHZGUBPPBinding562 = 0;
    vennDiagramDHZGUBPPBinding562 < vennDiagramDHZGUBPPInput174;
    ++vennDiagramDHZGUBPPBinding562
  )
    vennDiagramDHZGUBPPBinding525[vennDiagramDHZGUBPPBinding562] = 0;
  return vennDiagramDHZGUBPPBinding525;
}
function vennDiagramDHZGUBPPHelper11(
  vennDiagramDHZGUBPPInput207,
  vennDiagramDHZGUBPPInput208,
) {
  return vennDiagramDHZGUBPPHelper10(vennDiagramDHZGUBPPInput207).map(() =>
    vennDiagramDHZGUBPPHelper10(vennDiagramDHZGUBPPInput208),
  );
}
function vennDiagramDHZGUBPPHelper12(
  vennDiagramDHZGUBPPInput160,
  vennDiagramDHZGUBPPInput161,
) {
  let vennDiagramDHZGUBPPBinding506 = 0;
  for (
    let vennDiagramDHZGUBPPBinding551 = 0;
    vennDiagramDHZGUBPPBinding551 < vennDiagramDHZGUBPPInput160.length;
    ++vennDiagramDHZGUBPPBinding551
  )
    vennDiagramDHZGUBPPBinding506 +=
      vennDiagramDHZGUBPPInput160[vennDiagramDHZGUBPPBinding551] *
      vennDiagramDHZGUBPPInput161[vennDiagramDHZGUBPPBinding551];
  return vennDiagramDHZGUBPPBinding506;
}
function vennDiagramDHZGUBPPHelper13(vennDiagramDHZGUBPPInput211) {
  return Math.sqrt(
    vennDiagramDHZGUBPPHelper12(
      vennDiagramDHZGUBPPInput211,
      vennDiagramDHZGUBPPInput211,
    ),
  );
}
function vennDiagramDHZGUBPPHelper14(
  vennDiagramDHZGUBPPInput178,
  vennDiagramDHZGUBPPInput179,
  vennDiagramDHZGUBPPInput180,
) {
  for (
    let vennDiagramDHZGUBPPBinding552 = 0;
    vennDiagramDHZGUBPPBinding552 < vennDiagramDHZGUBPPInput179.length;
    ++vennDiagramDHZGUBPPBinding552
  )
    vennDiagramDHZGUBPPInput178[vennDiagramDHZGUBPPBinding552] =
      vennDiagramDHZGUBPPInput179[vennDiagramDHZGUBPPBinding552] *
      vennDiagramDHZGUBPPInput180;
}
function vennDiagramDHZGUBPPHelper15(
  vennDiagramDHZGUBPPInput167,
  vennDiagramDHZGUBPPInput168,
  vennDiagramDHZGUBPPInput169,
  vennDiagramDHZGUBPPInput170,
  vennDiagramDHZGUBPPInput171,
) {
  for (
    let vennDiagramDHZGUBPPBinding546 = 0;
    vennDiagramDHZGUBPPBinding546 < vennDiagramDHZGUBPPInput167.length;
    ++vennDiagramDHZGUBPPBinding546
  )
    vennDiagramDHZGUBPPInput167[vennDiagramDHZGUBPPBinding546] =
      vennDiagramDHZGUBPPInput168 *
        vennDiagramDHZGUBPPInput169[vennDiagramDHZGUBPPBinding546] +
      vennDiagramDHZGUBPPInput170 *
        vennDiagramDHZGUBPPInput171[vennDiagramDHZGUBPPBinding546];
}
function vennDiagramDHZGUBPPHelper16(
  vennDiagramDHZGUBPPInput25,
  vennDiagramDHZGUBPPInput26,
  vennDiagramDHZGUBPPInput27,
) {
  vennDiagramDHZGUBPPInput27 ||= {};
  let vennDiagramDHZGUBPPBinding164 =
      vennDiagramDHZGUBPPInput27.maxIterations ||
      vennDiagramDHZGUBPPInput26.length * 200,
    vennDiagramDHZGUBPPBinding165 =
      vennDiagramDHZGUBPPInput27.nonZeroDelta || 1.05,
    vennDiagramDHZGUBPPBinding166 =
      vennDiagramDHZGUBPPInput27.zeroDelta || 0.001,
    vennDiagramDHZGUBPPBinding167 =
      vennDiagramDHZGUBPPInput27.minErrorDelta || 1e-6,
    vennDiagramDHZGUBPPBinding168 =
      vennDiagramDHZGUBPPInput27.minErrorDelta || 1e-5,
    vennDiagramDHZGUBPPBinding169 =
      vennDiagramDHZGUBPPInput27.rho === undefined
        ? 1
        : vennDiagramDHZGUBPPInput27.rho,
    vennDiagramDHZGUBPPBinding170 =
      vennDiagramDHZGUBPPInput27.chi === undefined
        ? 2
        : vennDiagramDHZGUBPPInput27.chi,
    vennDiagramDHZGUBPPBinding171 =
      vennDiagramDHZGUBPPInput27.psi === undefined
        ? -0.5
        : vennDiagramDHZGUBPPInput27.psi,
    vennDiagramDHZGUBPPBinding172 =
      vennDiagramDHZGUBPPInput27.sigma === undefined
        ? 0.5
        : vennDiagramDHZGUBPPInput27.sigma,
    vennDiagramDHZGUBPPBinding173,
    vennDiagramDHZGUBPPBinding174 = vennDiagramDHZGUBPPInput26.length,
    vennDiagramDHZGUBPPBinding175 = Array(vennDiagramDHZGUBPPBinding174 + 1);
  vennDiagramDHZGUBPPBinding175[0] = vennDiagramDHZGUBPPInput26;
  vennDiagramDHZGUBPPBinding175[0].fx = vennDiagramDHZGUBPPInput25(
    vennDiagramDHZGUBPPInput26,
  );
  vennDiagramDHZGUBPPBinding175[0].id = 0;
  for (
    let vennDiagramDHZGUBPPBinding450 = 0;
    vennDiagramDHZGUBPPBinding450 < vennDiagramDHZGUBPPBinding174;
    ++vennDiagramDHZGUBPPBinding450
  ) {
    let vennDiagramDHZGUBPPBinding464 = vennDiagramDHZGUBPPInput26.slice();
    vennDiagramDHZGUBPPBinding464[vennDiagramDHZGUBPPBinding450] =
      vennDiagramDHZGUBPPBinding464[vennDiagramDHZGUBPPBinding450]
        ? vennDiagramDHZGUBPPBinding464[vennDiagramDHZGUBPPBinding450] *
          vennDiagramDHZGUBPPBinding165
        : vennDiagramDHZGUBPPBinding166;
    vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding450 + 1] =
      vennDiagramDHZGUBPPBinding464;
    vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding450 + 1].fx =
      vennDiagramDHZGUBPPInput25(vennDiagramDHZGUBPPBinding464);
    vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding450 + 1].id =
      vennDiagramDHZGUBPPBinding450 + 1;
  }
  function vennDiagramDHZGUBPPHelper57(vennDiagramDHZGUBPPInput172) {
    for (
      let vennDiagramDHZGUBPPBinding553 = 0;
      vennDiagramDHZGUBPPBinding553 < vennDiagramDHZGUBPPInput172.length;
      vennDiagramDHZGUBPPBinding553++
    )
      vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding174][
        vennDiagramDHZGUBPPBinding553
      ] = vennDiagramDHZGUBPPInput172[vennDiagramDHZGUBPPBinding553];
    vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding174].fx =
      vennDiagramDHZGUBPPInput172.fx;
  }
  let vennDiagramDHZGUBPPBinding176 = (
      vennDiagramDHZGUBPPInput235,
      vennDiagramDHZGUBPPInput236,
    ) => vennDiagramDHZGUBPPInput235.fx - vennDiagramDHZGUBPPInput236.fx,
    vennDiagramDHZGUBPPBinding177 = vennDiagramDHZGUBPPInput26.slice(),
    vennDiagramDHZGUBPPBinding178 = vennDiagramDHZGUBPPInput26.slice(),
    vennDiagramDHZGUBPPBinding179 = vennDiagramDHZGUBPPInput26.slice(),
    vennDiagramDHZGUBPPBinding180 = vennDiagramDHZGUBPPInput26.slice();
  for (
    let vennDiagramDHZGUBPPBinding223 = 0;
    vennDiagramDHZGUBPPBinding223 < vennDiagramDHZGUBPPBinding164;
    ++vennDiagramDHZGUBPPBinding223
  ) {
    if (
      (vennDiagramDHZGUBPPBinding175.sort(vennDiagramDHZGUBPPBinding176),
      vennDiagramDHZGUBPPInput27.history)
    ) {
      let vennDiagramDHZGUBPPBinding413 = vennDiagramDHZGUBPPBinding175.map(
        (item) => {
          let vennDiagramDHZGUBPPBinding519 = item.slice();
          return (
            (vennDiagramDHZGUBPPBinding519.fx = item.fx),
            (vennDiagramDHZGUBPPBinding519.id = item.id),
            vennDiagramDHZGUBPPBinding519
          );
        },
      );
      vennDiagramDHZGUBPPBinding413.sort(
        (vennDiagramDHZGUBPPInput237, vennDiagramDHZGUBPPInput238) =>
          vennDiagramDHZGUBPPInput237.id - vennDiagramDHZGUBPPInput238.id,
      );
      vennDiagramDHZGUBPPInput27.history.push({
        x: vennDiagramDHZGUBPPBinding175[0].slice(),
        fx: vennDiagramDHZGUBPPBinding175[0].fx,
        simplex: vennDiagramDHZGUBPPBinding413,
      });
    }
    vennDiagramDHZGUBPPBinding173 = 0;
    for (
      let vennDiagramDHZGUBPPBinding538 = 0;
      vennDiagramDHZGUBPPBinding538 < vennDiagramDHZGUBPPBinding174;
      ++vennDiagramDHZGUBPPBinding538
    )
      vennDiagramDHZGUBPPBinding173 = Math.max(
        vennDiagramDHZGUBPPBinding173,
        Math.abs(
          vennDiagramDHZGUBPPBinding175[0][vennDiagramDHZGUBPPBinding538] -
            vennDiagramDHZGUBPPBinding175[1][vennDiagramDHZGUBPPBinding538],
        ),
      );
    if (
      Math.abs(
        vennDiagramDHZGUBPPBinding175[0].fx -
          vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding174].fx,
      ) < vennDiagramDHZGUBPPBinding167 &&
      vennDiagramDHZGUBPPBinding173 < vennDiagramDHZGUBPPBinding168
    )
      break;
    for (
      let vennDiagramDHZGUBPPBinding489 = 0;
      vennDiagramDHZGUBPPBinding489 < vennDiagramDHZGUBPPBinding174;
      ++vennDiagramDHZGUBPPBinding489
    ) {
      vennDiagramDHZGUBPPBinding177[vennDiagramDHZGUBPPBinding489] = 0;
      for (
        let vennDiagramDHZGUBPPBinding557 = 0;
        vennDiagramDHZGUBPPBinding557 < vennDiagramDHZGUBPPBinding174;
        ++vennDiagramDHZGUBPPBinding557
      )
        vennDiagramDHZGUBPPBinding177[vennDiagramDHZGUBPPBinding489] +=
          vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding557][
            vennDiagramDHZGUBPPBinding489
          ];
      vennDiagramDHZGUBPPBinding177[vennDiagramDHZGUBPPBinding489] /=
        vennDiagramDHZGUBPPBinding174;
    }
    let vennDiagramDHZGUBPPBinding224 =
      vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding174];
    if (
      (vennDiagramDHZGUBPPHelper15(
        vennDiagramDHZGUBPPBinding178,
        1 + vennDiagramDHZGUBPPBinding169,
        vennDiagramDHZGUBPPBinding177,
        -vennDiagramDHZGUBPPBinding169,
        vennDiagramDHZGUBPPBinding224,
      ),
      (vennDiagramDHZGUBPPBinding178.fx = vennDiagramDHZGUBPPInput25(
        vennDiagramDHZGUBPPBinding178,
      )),
      vennDiagramDHZGUBPPBinding178.fx < vennDiagramDHZGUBPPBinding175[0].fx)
    ) {
      vennDiagramDHZGUBPPHelper15(
        vennDiagramDHZGUBPPBinding180,
        1 + vennDiagramDHZGUBPPBinding170,
        vennDiagramDHZGUBPPBinding177,
        -vennDiagramDHZGUBPPBinding170,
        vennDiagramDHZGUBPPBinding224,
      );
      vennDiagramDHZGUBPPBinding180.fx = vennDiagramDHZGUBPPInput25(
        vennDiagramDHZGUBPPBinding180,
      );
      vennDiagramDHZGUBPPBinding180.fx < vennDiagramDHZGUBPPBinding178.fx
        ? vennDiagramDHZGUBPPHelper57(vennDiagramDHZGUBPPBinding180)
        : vennDiagramDHZGUBPPHelper57(vennDiagramDHZGUBPPBinding178);
    } else if (
      vennDiagramDHZGUBPPBinding178.fx >=
      vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding174 - 1].fx
    ) {
      let vennDiagramDHZGUBPPBinding356 = false;
      if (
        (vennDiagramDHZGUBPPBinding178.fx > vennDiagramDHZGUBPPBinding224.fx
          ? (vennDiagramDHZGUBPPHelper15(
              vennDiagramDHZGUBPPBinding179,
              1 + vennDiagramDHZGUBPPBinding171,
              vennDiagramDHZGUBPPBinding177,
              -vennDiagramDHZGUBPPBinding171,
              vennDiagramDHZGUBPPBinding224,
            ),
            (vennDiagramDHZGUBPPBinding179.fx = vennDiagramDHZGUBPPInput25(
              vennDiagramDHZGUBPPBinding179,
            )),
            vennDiagramDHZGUBPPBinding179.fx < vennDiagramDHZGUBPPBinding224.fx
              ? vennDiagramDHZGUBPPHelper57(vennDiagramDHZGUBPPBinding179)
              : (vennDiagramDHZGUBPPBinding356 = true))
          : (vennDiagramDHZGUBPPHelper15(
              vennDiagramDHZGUBPPBinding179,
              1 - vennDiagramDHZGUBPPBinding171 * vennDiagramDHZGUBPPBinding169,
              vennDiagramDHZGUBPPBinding177,
              vennDiagramDHZGUBPPBinding171 * vennDiagramDHZGUBPPBinding169,
              vennDiagramDHZGUBPPBinding224,
            ),
            (vennDiagramDHZGUBPPBinding179.fx = vennDiagramDHZGUBPPInput25(
              vennDiagramDHZGUBPPBinding179,
            )),
            vennDiagramDHZGUBPPBinding179.fx < vennDiagramDHZGUBPPBinding178.fx
              ? vennDiagramDHZGUBPPHelper57(vennDiagramDHZGUBPPBinding179)
              : (vennDiagramDHZGUBPPBinding356 = true)),
        vennDiagramDHZGUBPPBinding356)
      ) {
        if (vennDiagramDHZGUBPPBinding172 >= 1) break;
        for (
          let vennDiagramDHZGUBPPBinding511 = 1;
          vennDiagramDHZGUBPPBinding511 < vennDiagramDHZGUBPPBinding175.length;
          ++vennDiagramDHZGUBPPBinding511
        ) {
          vennDiagramDHZGUBPPHelper15(
            vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding511],
            1 - vennDiagramDHZGUBPPBinding172,
            vennDiagramDHZGUBPPBinding175[0],
            vennDiagramDHZGUBPPBinding172,
            vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding511],
          );
          vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding511].fx =
            vennDiagramDHZGUBPPInput25(
              vennDiagramDHZGUBPPBinding175[vennDiagramDHZGUBPPBinding511],
            );
        }
      }
    } else vennDiagramDHZGUBPPHelper57(vennDiagramDHZGUBPPBinding178);
  }
  return (
    vennDiagramDHZGUBPPBinding175.sort(vennDiagramDHZGUBPPBinding176),
    {
      fx: vennDiagramDHZGUBPPBinding175[0].fx,
      x: vennDiagramDHZGUBPPBinding175[0],
    }
  );
}
function vennDiagramDHZGUBPPHelper17(
  vennDiagramDHZGUBPPInput57,
  vennDiagramDHZGUBPPInput58,
  vennDiagramDHZGUBPPInput59,
  vennDiagramDHZGUBPPInput60,
  vennDiagramDHZGUBPPInput61,
  vennDiagramDHZGUBPPInput62,
  vennDiagramDHZGUBPPInput63,
) {
  let vennDiagramDHZGUBPPBinding272 = vennDiagramDHZGUBPPInput59.fx,
    vennDiagramDHZGUBPPBinding273 = vennDiagramDHZGUBPPHelper12(
      vennDiagramDHZGUBPPInput59.fxprime,
      vennDiagramDHZGUBPPInput58,
    ),
    vennDiagramDHZGUBPPBinding274 = vennDiagramDHZGUBPPBinding272,
    vennDiagramDHZGUBPPBinding275 = vennDiagramDHZGUBPPBinding272,
    vennDiagramDHZGUBPPBinding276 = vennDiagramDHZGUBPPBinding273,
    vennDiagramDHZGUBPPBinding277 = 0;
  vennDiagramDHZGUBPPInput61 ||= 1;
  vennDiagramDHZGUBPPInput62 ||= 1e-6;
  vennDiagramDHZGUBPPInput63 ||= 0.1;
  function vennDiagramDHZGUBPPHelper65(
    vennDiagramDHZGUBPPInput103,
    vennDiagramDHZGUBPPInput104,
    vennDiagramDHZGUBPPInput105,
  ) {
    for (
      let vennDiagramDHZGUBPPBinding384 = 0;
      vennDiagramDHZGUBPPBinding384 < 16;
      ++vennDiagramDHZGUBPPBinding384
    )
      if (
        ((vennDiagramDHZGUBPPInput61 =
          (vennDiagramDHZGUBPPInput103 + vennDiagramDHZGUBPPInput104) / 2),
        vennDiagramDHZGUBPPHelper15(
          vennDiagramDHZGUBPPInput60.x,
          1,
          vennDiagramDHZGUBPPInput59.x,
          vennDiagramDHZGUBPPInput61,
          vennDiagramDHZGUBPPInput58,
        ),
        (vennDiagramDHZGUBPPBinding274 = vennDiagramDHZGUBPPInput60.fx =
          vennDiagramDHZGUBPPInput57(
            vennDiagramDHZGUBPPInput60.x,
            vennDiagramDHZGUBPPInput60.fxprime,
          )),
        (vennDiagramDHZGUBPPBinding276 = vennDiagramDHZGUBPPHelper12(
          vennDiagramDHZGUBPPInput60.fxprime,
          vennDiagramDHZGUBPPInput58,
        )),
        vennDiagramDHZGUBPPBinding274 >
          vennDiagramDHZGUBPPBinding272 +
            vennDiagramDHZGUBPPInput62 *
              vennDiagramDHZGUBPPInput61 *
              vennDiagramDHZGUBPPBinding273 ||
          vennDiagramDHZGUBPPBinding274 >= vennDiagramDHZGUBPPInput105)
      )
        vennDiagramDHZGUBPPInput104 = vennDiagramDHZGUBPPInput61;
      else {
        if (
          Math.abs(vennDiagramDHZGUBPPBinding276) <=
          -vennDiagramDHZGUBPPInput63 * vennDiagramDHZGUBPPBinding273
        )
          return vennDiagramDHZGUBPPInput61;
        vennDiagramDHZGUBPPBinding276 *
          (vennDiagramDHZGUBPPInput104 - vennDiagramDHZGUBPPInput103) >=
          0 && (vennDiagramDHZGUBPPInput104 = vennDiagramDHZGUBPPInput103);
        vennDiagramDHZGUBPPInput103 = vennDiagramDHZGUBPPInput61;
        vennDiagramDHZGUBPPInput105 = vennDiagramDHZGUBPPBinding274;
      }
    return 0;
  }
  for (
    let vennDiagramDHZGUBPPBinding392 = 0;
    vennDiagramDHZGUBPPBinding392 < 10;
    ++vennDiagramDHZGUBPPBinding392
  ) {
    if (
      (vennDiagramDHZGUBPPHelper15(
        vennDiagramDHZGUBPPInput60.x,
        1,
        vennDiagramDHZGUBPPInput59.x,
        vennDiagramDHZGUBPPInput61,
        vennDiagramDHZGUBPPInput58,
      ),
      (vennDiagramDHZGUBPPBinding274 = vennDiagramDHZGUBPPInput60.fx =
        vennDiagramDHZGUBPPInput57(
          vennDiagramDHZGUBPPInput60.x,
          vennDiagramDHZGUBPPInput60.fxprime,
        )),
      (vennDiagramDHZGUBPPBinding276 = vennDiagramDHZGUBPPHelper12(
        vennDiagramDHZGUBPPInput60.fxprime,
        vennDiagramDHZGUBPPInput58,
      )),
      vennDiagramDHZGUBPPBinding274 >
        vennDiagramDHZGUBPPBinding272 +
          vennDiagramDHZGUBPPInput62 *
            vennDiagramDHZGUBPPInput61 *
            vennDiagramDHZGUBPPBinding273 ||
        (vennDiagramDHZGUBPPBinding392 &&
          vennDiagramDHZGUBPPBinding274 >= vennDiagramDHZGUBPPBinding275))
    )
      return vennDiagramDHZGUBPPHelper65(
        vennDiagramDHZGUBPPBinding277,
        vennDiagramDHZGUBPPInput61,
        vennDiagramDHZGUBPPBinding275,
      );
    if (
      Math.abs(vennDiagramDHZGUBPPBinding276) <=
      -vennDiagramDHZGUBPPInput63 * vennDiagramDHZGUBPPBinding273
    )
      return vennDiagramDHZGUBPPInput61;
    if (vennDiagramDHZGUBPPBinding276 >= 0)
      return vennDiagramDHZGUBPPHelper65(
        vennDiagramDHZGUBPPInput61,
        vennDiagramDHZGUBPPBinding277,
        vennDiagramDHZGUBPPBinding274,
      );
    vennDiagramDHZGUBPPBinding275 = vennDiagramDHZGUBPPBinding274;
    vennDiagramDHZGUBPPBinding277 = vennDiagramDHZGUBPPInput61;
    vennDiagramDHZGUBPPInput61 *= 2;
  }
  return vennDiagramDHZGUBPPInput61;
}
function vennDiagramDHZGUBPPHelper18(
  vennDiagramDHZGUBPPInput47,
  vennDiagramDHZGUBPPInput48,
  vennDiagramDHZGUBPPInput49,
) {
  let vennDiagramDHZGUBPPBinding242 = {
      x: vennDiagramDHZGUBPPInput48.slice(),
      fx: 0,
      fxprime: vennDiagramDHZGUBPPInput48.slice(),
    },
    vennDiagramDHZGUBPPBinding243 = {
      x: vennDiagramDHZGUBPPInput48.slice(),
      fx: 0,
      fxprime: vennDiagramDHZGUBPPInput48.slice(),
    },
    vennDiagramDHZGUBPPBinding244 = vennDiagramDHZGUBPPInput48.slice(),
    vennDiagramDHZGUBPPBinding245,
    vennDiagramDHZGUBPPBinding246,
    vennDiagramDHZGUBPPBinding247 = 1,
    vennDiagramDHZGUBPPBinding248;
  vennDiagramDHZGUBPPInput49 ||= {};
  vennDiagramDHZGUBPPBinding248 =
    vennDiagramDHZGUBPPInput49.maxIterations ||
    vennDiagramDHZGUBPPInput48.length * 20;
  vennDiagramDHZGUBPPBinding242.fx = vennDiagramDHZGUBPPInput47(
    vennDiagramDHZGUBPPBinding242.x,
    vennDiagramDHZGUBPPBinding242.fxprime,
  );
  vennDiagramDHZGUBPPBinding245 = vennDiagramDHZGUBPPBinding242.fxprime.slice();
  vennDiagramDHZGUBPPHelper14(
    vennDiagramDHZGUBPPBinding245,
    vennDiagramDHZGUBPPBinding242.fxprime,
    -1,
  );
  for (
    let vennDiagramDHZGUBPPBinding332 = 0;
    vennDiagramDHZGUBPPBinding332 < vennDiagramDHZGUBPPBinding248;
    ++vennDiagramDHZGUBPPBinding332
  ) {
    if (
      ((vennDiagramDHZGUBPPBinding247 = vennDiagramDHZGUBPPHelper17(
        vennDiagramDHZGUBPPInput47,
        vennDiagramDHZGUBPPBinding245,
        vennDiagramDHZGUBPPBinding242,
        vennDiagramDHZGUBPPBinding243,
        vennDiagramDHZGUBPPBinding247,
      )),
      vennDiagramDHZGUBPPInput49.history &&
        vennDiagramDHZGUBPPInput49.history.push({
          x: vennDiagramDHZGUBPPBinding242.x.slice(),
          fx: vennDiagramDHZGUBPPBinding242.fx,
          fxprime: vennDiagramDHZGUBPPBinding242.fxprime.slice(),
          alpha: vennDiagramDHZGUBPPBinding247,
        }),
      !vennDiagramDHZGUBPPBinding247)
    )
      vennDiagramDHZGUBPPHelper14(
        vennDiagramDHZGUBPPBinding245,
        vennDiagramDHZGUBPPBinding242.fxprime,
        -1,
      );
    else {
      vennDiagramDHZGUBPPHelper15(
        vennDiagramDHZGUBPPBinding244,
        1,
        vennDiagramDHZGUBPPBinding243.fxprime,
        -1,
        vennDiagramDHZGUBPPBinding242.fxprime,
      );
      let vennDiagramDHZGUBPPBinding434 = vennDiagramDHZGUBPPHelper12(
          vennDiagramDHZGUBPPBinding242.fxprime,
          vennDiagramDHZGUBPPBinding242.fxprime,
        ),
        vennDiagramDHZGUBPPBinding435 = Math.max(
          0,
          vennDiagramDHZGUBPPHelper12(
            vennDiagramDHZGUBPPBinding244,
            vennDiagramDHZGUBPPBinding243.fxprime,
          ) / vennDiagramDHZGUBPPBinding434,
        );
      vennDiagramDHZGUBPPHelper15(
        vennDiagramDHZGUBPPBinding245,
        vennDiagramDHZGUBPPBinding435,
        vennDiagramDHZGUBPPBinding245,
        -1,
        vennDiagramDHZGUBPPBinding243.fxprime,
      );
      vennDiagramDHZGUBPPBinding246 = vennDiagramDHZGUBPPBinding242;
      vennDiagramDHZGUBPPBinding242 = vennDiagramDHZGUBPPBinding243;
      vennDiagramDHZGUBPPBinding243 = vennDiagramDHZGUBPPBinding246;
    }
    if (
      vennDiagramDHZGUBPPHelper13(vennDiagramDHZGUBPPBinding242.fxprime) <= 1e-5
    )
      break;
  }
  return (
    vennDiagramDHZGUBPPInput49.history &&
      vennDiagramDHZGUBPPInput49.history.push({
        x: vennDiagramDHZGUBPPBinding242.x.slice(),
        fx: vennDiagramDHZGUBPPBinding242.fx,
        fxprime: vennDiagramDHZGUBPPBinding242.fxprime.slice(),
        alpha: vennDiagramDHZGUBPPBinding247,
      }),
    vennDiagramDHZGUBPPBinding242
  );
}
function vennDiagramDHZGUBPPHelper19(
  vennDiagramDHZGUBPPInput81,
  vennDiagramDHZGUBPPInput82 = {},
) {
  vennDiagramDHZGUBPPInput82.maxIterations =
    vennDiagramDHZGUBPPInput82.maxIterations || 500;
  let vennDiagramDHZGUBPPBinding309 =
      vennDiagramDHZGUBPPInput82.initialLayout || vennDiagramDHZGUBPPHelper24,
    vennDiagramDHZGUBPPBinding310 =
      vennDiagramDHZGUBPPInput82.lossFunction || vennDiagramDHZGUBPPHelper27,
    vennDiagramDHZGUBPPBinding311 = vennDiagramDHZGUBPPHelper21(
      vennDiagramDHZGUBPPInput81,
      vennDiagramDHZGUBPPInput82,
    ),
    vennDiagramDHZGUBPPBinding312 = vennDiagramDHZGUBPPBinding309(
      vennDiagramDHZGUBPPBinding311,
      vennDiagramDHZGUBPPInput82,
    ),
    vennDiagramDHZGUBPPBinding313 = Object.keys(vennDiagramDHZGUBPPBinding312),
    vennDiagramDHZGUBPPBinding314 = [];
  for (let vennDiagramDHZGUBPPBinding554 of vennDiagramDHZGUBPPBinding313) {
    vennDiagramDHZGUBPPBinding314.push(
      vennDiagramDHZGUBPPBinding312[vennDiagramDHZGUBPPBinding554].x,
    );
    vennDiagramDHZGUBPPBinding314.push(
      vennDiagramDHZGUBPPBinding312[vennDiagramDHZGUBPPBinding554].y,
    );
  }
  let vennDiagramDHZGUBPPBinding315 = vennDiagramDHZGUBPPHelper16(
    (vennDiagramDHZGUBPPInput124) => {
      let vennDiagramDHZGUBPPBinding433 = {};
      for (
        let vennDiagramDHZGUBPPBinding475 = 0;
        vennDiagramDHZGUBPPBinding475 < vennDiagramDHZGUBPPBinding313.length;
        ++vennDiagramDHZGUBPPBinding475
      ) {
        let vennDiagramDHZGUBPPBinding503 =
          vennDiagramDHZGUBPPBinding313[vennDiagramDHZGUBPPBinding475];
        vennDiagramDHZGUBPPBinding433[vennDiagramDHZGUBPPBinding503] = {
          x: vennDiagramDHZGUBPPInput124[2 * vennDiagramDHZGUBPPBinding475],
          y: vennDiagramDHZGUBPPInput124[2 * vennDiagramDHZGUBPPBinding475 + 1],
          radius:
            vennDiagramDHZGUBPPBinding312[vennDiagramDHZGUBPPBinding503].radius,
        };
      }
      return vennDiagramDHZGUBPPBinding310(
        vennDiagramDHZGUBPPBinding433,
        vennDiagramDHZGUBPPBinding311,
      );
    },
    vennDiagramDHZGUBPPBinding314,
    vennDiagramDHZGUBPPInput82,
  ).x;
  for (
    let vennDiagramDHZGUBPPBinding494 = 0;
    vennDiagramDHZGUBPPBinding494 < vennDiagramDHZGUBPPBinding313.length;
    ++vennDiagramDHZGUBPPBinding494
  ) {
    let vennDiagramDHZGUBPPBinding535 =
      vennDiagramDHZGUBPPBinding313[vennDiagramDHZGUBPPBinding494];
    vennDiagramDHZGUBPPBinding312[vennDiagramDHZGUBPPBinding535].x =
      vennDiagramDHZGUBPPBinding315[2 * vennDiagramDHZGUBPPBinding494];
    vennDiagramDHZGUBPPBinding312[vennDiagramDHZGUBPPBinding535].y =
      vennDiagramDHZGUBPPBinding315[2 * vennDiagramDHZGUBPPBinding494 + 1];
  }
  return vennDiagramDHZGUBPPBinding312;
}
function vennDiagramDHZGUBPPHelper20(
  vennDiagramDHZGUBPPInput133,
  vennDiagramDHZGUBPPInput134,
  vennDiagramDHZGUBPPInput135,
) {
  return Math.min(vennDiagramDHZGUBPPInput133, vennDiagramDHZGUBPPInput134) *
    Math.min(vennDiagramDHZGUBPPInput133, vennDiagramDHZGUBPPInput134) *
    Math.PI <=
    vennDiagramDHZGUBPPInput135 + vennDiagramDHZGUBPPBinding2
    ? Math.abs(vennDiagramDHZGUBPPInput133 - vennDiagramDHZGUBPPInput134)
    : vennDiagramDHZGUBPPHelper9(
        (vennDiagramDHZGUBPPInput239) =>
          vennDiagramDHZGUBPPHelper6(
            vennDiagramDHZGUBPPInput133,
            vennDiagramDHZGUBPPInput134,
            vennDiagramDHZGUBPPInput239,
          ) - vennDiagramDHZGUBPPInput135,
        0,
        vennDiagramDHZGUBPPInput133 + vennDiagramDHZGUBPPInput134,
      );
}
function vennDiagramDHZGUBPPHelper21(
  vennDiagramDHZGUBPPInput39,
  vennDiagramDHZGUBPPInput40 = {},
) {
  let vennDiagramDHZGUBPPBinding225 = vennDiagramDHZGUBPPInput40.distinct,
    vennDiagramDHZGUBPPBinding226 = vennDiagramDHZGUBPPInput39.map((item) =>
      Object.assign({}, item),
    );
  function vennDiagramDHZGUBPPHelper62(vennDiagramDHZGUBPPInput214) {
    return vennDiagramDHZGUBPPInput214.join(";");
  }
  if (vennDiagramDHZGUBPPBinding225) {
    let vennDiagramDHZGUBPPBinding336 = new Map();
    for (let vennDiagramDHZGUBPPBinding377 of vennDiagramDHZGUBPPBinding226)
      for (
        let vennDiagramDHZGUBPPBinding381 = 0;
        vennDiagramDHZGUBPPBinding381 <
        vennDiagramDHZGUBPPBinding377.sets.length;
        vennDiagramDHZGUBPPBinding381++
      ) {
        let vennDiagramDHZGUBPPBinding386 = String(
          vennDiagramDHZGUBPPBinding377.sets[vennDiagramDHZGUBPPBinding381],
        );
        vennDiagramDHZGUBPPBinding336.set(
          vennDiagramDHZGUBPPBinding386,
          vennDiagramDHZGUBPPBinding377.size +
            (vennDiagramDHZGUBPPBinding336.get(vennDiagramDHZGUBPPBinding386) ||
              0),
        );
        for (
          let vennDiagramDHZGUBPPBinding411 = vennDiagramDHZGUBPPBinding381 + 1;
          vennDiagramDHZGUBPPBinding411 <
          vennDiagramDHZGUBPPBinding377.sets.length;
          vennDiagramDHZGUBPPBinding411++
        ) {
          let vennDiagramDHZGUBPPBinding429 = String(
              vennDiagramDHZGUBPPBinding377.sets[vennDiagramDHZGUBPPBinding411],
            ),
            vennDiagramDHZGUBPPBinding430 = `${vennDiagramDHZGUBPPBinding386};${vennDiagramDHZGUBPPBinding429}`,
            vennDiagramDHZGUBPPBinding431 = `${vennDiagramDHZGUBPPBinding429};${vennDiagramDHZGUBPPBinding386}`;
          vennDiagramDHZGUBPPBinding336.set(
            vennDiagramDHZGUBPPBinding430,
            vennDiagramDHZGUBPPBinding377.size +
              (vennDiagramDHZGUBPPBinding336.get(
                vennDiagramDHZGUBPPBinding430,
              ) || 0),
          );
          vennDiagramDHZGUBPPBinding336.set(
            vennDiagramDHZGUBPPBinding431,
            vennDiagramDHZGUBPPBinding377.size +
              (vennDiagramDHZGUBPPBinding336.get(
                vennDiagramDHZGUBPPBinding431,
              ) || 0),
          );
        }
      }
    for (let vennDiagramDHZGUBPPBinding542 of vennDiagramDHZGUBPPBinding226)
      vennDiagramDHZGUBPPBinding542.sets.length < 3 &&
        (vennDiagramDHZGUBPPBinding542.size = vennDiagramDHZGUBPPBinding336.get(
          vennDiagramDHZGUBPPHelper62(vennDiagramDHZGUBPPBinding542.sets),
        ));
  }
  let vennDiagramDHZGUBPPBinding227 = [],
    vennDiagramDHZGUBPPBinding228 = new Set();
  for (let vennDiagramDHZGUBPPBinding432 of vennDiagramDHZGUBPPBinding226)
    if (vennDiagramDHZGUBPPBinding432.sets.length === 1)
      vennDiagramDHZGUBPPBinding227.push(vennDiagramDHZGUBPPBinding432.sets[0]);
    else if (vennDiagramDHZGUBPPBinding432.sets.length === 2) {
      let vennDiagramDHZGUBPPBinding508 = vennDiagramDHZGUBPPBinding432.sets[0],
        vennDiagramDHZGUBPPBinding509 = vennDiagramDHZGUBPPBinding432.sets[1];
      vennDiagramDHZGUBPPBinding228.add(
        vennDiagramDHZGUBPPHelper62(vennDiagramDHZGUBPPBinding432.sets),
      );
      vennDiagramDHZGUBPPBinding228.add(
        vennDiagramDHZGUBPPHelper62([
          vennDiagramDHZGUBPPBinding509,
          vennDiagramDHZGUBPPBinding508,
        ]),
      );
    }
  vennDiagramDHZGUBPPBinding227.sort(
    (vennDiagramDHZGUBPPInput217, vennDiagramDHZGUBPPInput218) =>
      vennDiagramDHZGUBPPInput217 === vennDiagramDHZGUBPPInput218
        ? 0
        : vennDiagramDHZGUBPPInput217 < vennDiagramDHZGUBPPInput218
          ? -1
          : 1,
  );
  for (
    let vennDiagramDHZGUBPPBinding437 = 0;
    vennDiagramDHZGUBPPBinding437 < vennDiagramDHZGUBPPBinding227.length;
    ++vennDiagramDHZGUBPPBinding437
  ) {
    let vennDiagramDHZGUBPPBinding458 =
      vennDiagramDHZGUBPPBinding227[vennDiagramDHZGUBPPBinding437];
    for (
      let vennDiagramDHZGUBPPBinding480 = vennDiagramDHZGUBPPBinding437 + 1;
      vennDiagramDHZGUBPPBinding480 < vennDiagramDHZGUBPPBinding227.length;
      ++vennDiagramDHZGUBPPBinding480
    ) {
      let vennDiagramDHZGUBPPBinding526 =
        vennDiagramDHZGUBPPBinding227[vennDiagramDHZGUBPPBinding480];
      vennDiagramDHZGUBPPBinding228.has(
        vennDiagramDHZGUBPPHelper62([
          vennDiagramDHZGUBPPBinding458,
          vennDiagramDHZGUBPPBinding526,
        ]),
      ) ||
        vennDiagramDHZGUBPPBinding226.push({
          sets: [vennDiagramDHZGUBPPBinding458, vennDiagramDHZGUBPPBinding526],
          size: 0,
        });
    }
  }
  return vennDiagramDHZGUBPPBinding226;
}
function vennDiagramDHZGUBPPHelper22(
  vennDiagramDHZGUBPPInput78,
  vennDiagramDHZGUBPPInput79,
  vennDiagramDHZGUBPPInput80,
) {
  let vennDiagramDHZGUBPPBinding307 = vennDiagramDHZGUBPPHelper11(
      vennDiagramDHZGUBPPInput79.length,
      vennDiagramDHZGUBPPInput79.length,
    ),
    vennDiagramDHZGUBPPBinding308 = vennDiagramDHZGUBPPHelper11(
      vennDiagramDHZGUBPPInput79.length,
      vennDiagramDHZGUBPPInput79.length,
    );
  return (
    vennDiagramDHZGUBPPInput78
      .filter((item) => item.sets.length === 2)
      .forEach((item) => {
        let vennDiagramDHZGUBPPBinding362 =
            vennDiagramDHZGUBPPInput80[item.sets[0]],
          vennDiagramDHZGUBPPBinding363 =
            vennDiagramDHZGUBPPInput80[item.sets[1]],
          vennDiagramDHZGUBPPBinding364 = vennDiagramDHZGUBPPHelper20(
            Math.sqrt(
              vennDiagramDHZGUBPPInput79[vennDiagramDHZGUBPPBinding362].size /
                Math.PI,
            ),
            Math.sqrt(
              vennDiagramDHZGUBPPInput79[vennDiagramDHZGUBPPBinding363].size /
                Math.PI,
            ),
            item.size,
          );
        vennDiagramDHZGUBPPBinding307[vennDiagramDHZGUBPPBinding362][
          vennDiagramDHZGUBPPBinding363
        ] = vennDiagramDHZGUBPPBinding307[vennDiagramDHZGUBPPBinding363][
          vennDiagramDHZGUBPPBinding362
        ] = vennDiagramDHZGUBPPBinding364;
        let vennDiagramDHZGUBPPBinding365 = 0;
        item.size + 1e-10 >=
        Math.min(
          vennDiagramDHZGUBPPInput79[vennDiagramDHZGUBPPBinding362].size,
          vennDiagramDHZGUBPPInput79[vennDiagramDHZGUBPPBinding363].size,
        )
          ? (vennDiagramDHZGUBPPBinding365 = 1)
          : item.size <= 1e-10 && (vennDiagramDHZGUBPPBinding365 = -1);
        vennDiagramDHZGUBPPBinding308[vennDiagramDHZGUBPPBinding362][
          vennDiagramDHZGUBPPBinding363
        ] = vennDiagramDHZGUBPPBinding308[vennDiagramDHZGUBPPBinding363][
          vennDiagramDHZGUBPPBinding362
        ] = vennDiagramDHZGUBPPBinding365;
      }),
    {
      distances: vennDiagramDHZGUBPPBinding307,
      constraints: vennDiagramDHZGUBPPBinding308,
    }
  );
}
function vennDiagramDHZGUBPPHelper23(
  vennDiagramDHZGUBPPInput66,
  vennDiagramDHZGUBPPInput67,
  vennDiagramDHZGUBPPInput68,
  vennDiagramDHZGUBPPInput69,
) {
  for (
    let vennDiagramDHZGUBPPBinding558 = 0;
    vennDiagramDHZGUBPPBinding558 < vennDiagramDHZGUBPPInput67.length;
    ++vennDiagramDHZGUBPPBinding558
  )
    vennDiagramDHZGUBPPInput67[vennDiagramDHZGUBPPBinding558] = 0;
  let vennDiagramDHZGUBPPBinding293 = 0;
  for (
    let vennDiagramDHZGUBPPBinding322 = 0;
    vennDiagramDHZGUBPPBinding322 < vennDiagramDHZGUBPPInput68.length;
    ++vennDiagramDHZGUBPPBinding322
  ) {
    let vennDiagramDHZGUBPPBinding327 =
        vennDiagramDHZGUBPPInput66[2 * vennDiagramDHZGUBPPBinding322],
      vennDiagramDHZGUBPPBinding328 =
        vennDiagramDHZGUBPPInput66[2 * vennDiagramDHZGUBPPBinding322 + 1];
    for (
      let vennDiagramDHZGUBPPBinding340 = vennDiagramDHZGUBPPBinding322 + 1;
      vennDiagramDHZGUBPPBinding340 < vennDiagramDHZGUBPPInput68.length;
      ++vennDiagramDHZGUBPPBinding340
    ) {
      let vennDiagramDHZGUBPPBinding349 =
          vennDiagramDHZGUBPPInput66[2 * vennDiagramDHZGUBPPBinding340],
        vennDiagramDHZGUBPPBinding350 =
          vennDiagramDHZGUBPPInput66[2 * vennDiagramDHZGUBPPBinding340 + 1],
        vennDiagramDHZGUBPPBinding351 =
          vennDiagramDHZGUBPPInput68[vennDiagramDHZGUBPPBinding322][
            vennDiagramDHZGUBPPBinding340
          ],
        vennDiagramDHZGUBPPBinding352 =
          vennDiagramDHZGUBPPInput69[vennDiagramDHZGUBPPBinding322][
            vennDiagramDHZGUBPPBinding340
          ],
        vennDiagramDHZGUBPPBinding353 =
          (vennDiagramDHZGUBPPBinding349 - vennDiagramDHZGUBPPBinding327) *
            (vennDiagramDHZGUBPPBinding349 - vennDiagramDHZGUBPPBinding327) +
          (vennDiagramDHZGUBPPBinding350 - vennDiagramDHZGUBPPBinding328) *
            (vennDiagramDHZGUBPPBinding350 - vennDiagramDHZGUBPPBinding328),
        vennDiagramDHZGUBPPBinding354 = Math.sqrt(
          vennDiagramDHZGUBPPBinding353,
        ),
        vennDiagramDHZGUBPPBinding355 =
          vennDiagramDHZGUBPPBinding353 -
          vennDiagramDHZGUBPPBinding351 * vennDiagramDHZGUBPPBinding351;
      (vennDiagramDHZGUBPPBinding352 > 0 &&
        vennDiagramDHZGUBPPBinding354 <= vennDiagramDHZGUBPPBinding351) ||
        (vennDiagramDHZGUBPPBinding352 < 0 &&
          vennDiagramDHZGUBPPBinding354 >= vennDiagramDHZGUBPPBinding351) ||
        ((vennDiagramDHZGUBPPBinding293 +=
          2 * vennDiagramDHZGUBPPBinding355 * vennDiagramDHZGUBPPBinding355),
        (vennDiagramDHZGUBPPInput67[2 * vennDiagramDHZGUBPPBinding322] +=
          4 *
          vennDiagramDHZGUBPPBinding355 *
          (vennDiagramDHZGUBPPBinding327 - vennDiagramDHZGUBPPBinding349)),
        (vennDiagramDHZGUBPPInput67[2 * vennDiagramDHZGUBPPBinding322 + 1] +=
          4 *
          vennDiagramDHZGUBPPBinding355 *
          (vennDiagramDHZGUBPPBinding328 - vennDiagramDHZGUBPPBinding350)),
        (vennDiagramDHZGUBPPInput67[2 * vennDiagramDHZGUBPPBinding340] +=
          4 *
          vennDiagramDHZGUBPPBinding355 *
          (vennDiagramDHZGUBPPBinding349 - vennDiagramDHZGUBPPBinding327)),
        (vennDiagramDHZGUBPPInput67[2 * vennDiagramDHZGUBPPBinding340 + 1] +=
          4 *
          vennDiagramDHZGUBPPBinding355 *
          (vennDiagramDHZGUBPPBinding350 - vennDiagramDHZGUBPPBinding328)));
    }
  }
  return vennDiagramDHZGUBPPBinding293;
}
function vennDiagramDHZGUBPPHelper24(
  vennDiagramDHZGUBPPInput122,
  vennDiagramDHZGUBPPInput123 = {},
) {
  let vennDiagramDHZGUBPPBinding427 = vennDiagramDHZGUBPPHelper26(
      vennDiagramDHZGUBPPInput122,
      vennDiagramDHZGUBPPInput123,
    ),
    vennDiagramDHZGUBPPBinding428 =
      vennDiagramDHZGUBPPInput123.lossFunction || vennDiagramDHZGUBPPHelper27;
  if (vennDiagramDHZGUBPPInput122.length >= 8) {
    let vennDiagramDHZGUBPPBinding516 = vennDiagramDHZGUBPPHelper25(
        vennDiagramDHZGUBPPInput122,
        vennDiagramDHZGUBPPInput123,
      ),
      vennDiagramDHZGUBPPBinding517 = vennDiagramDHZGUBPPBinding428(
        vennDiagramDHZGUBPPBinding516,
        vennDiagramDHZGUBPPInput122,
      ),
      vennDiagramDHZGUBPPBinding518 = vennDiagramDHZGUBPPBinding428(
        vennDiagramDHZGUBPPBinding427,
        vennDiagramDHZGUBPPInput122,
      );
    vennDiagramDHZGUBPPBinding517 + 1e-8 < vennDiagramDHZGUBPPBinding518 &&
      (vennDiagramDHZGUBPPBinding427 = vennDiagramDHZGUBPPBinding516);
  }
  return vennDiagramDHZGUBPPBinding427;
}
function vennDiagramDHZGUBPPHelper25(
  vennDiagramDHZGUBPPInput64,
  vennDiagramDHZGUBPPInput65 = {},
) {
  let vennDiagramDHZGUBPPBinding285 = vennDiagramDHZGUBPPInput65.restarts || 10,
    vennDiagramDHZGUBPPBinding286 = [],
    vennDiagramDHZGUBPPBinding287 = {};
  for (let vennDiagramDHZGUBPPBinding527 of vennDiagramDHZGUBPPInput64)
    vennDiagramDHZGUBPPBinding527.sets.length === 1 &&
      ((vennDiagramDHZGUBPPBinding287[vennDiagramDHZGUBPPBinding527.sets[0]] =
        vennDiagramDHZGUBPPBinding286.length),
      vennDiagramDHZGUBPPBinding286.push(vennDiagramDHZGUBPPBinding527));
  let { distances, constraints } = vennDiagramDHZGUBPPHelper22(
      vennDiagramDHZGUBPPInput64,
      vennDiagramDHZGUBPPBinding286,
      vennDiagramDHZGUBPPBinding287,
    ),
    vennDiagramDHZGUBPPBinding288 =
      vennDiagramDHZGUBPPHelper13(distances.map(vennDiagramDHZGUBPPHelper13)) /
      distances.length;
  distances = distances.map((item) =>
    item.map((_item) => _item / vennDiagramDHZGUBPPBinding288),
  );
  let vennDiagramDHZGUBPPBinding289 = (
      vennDiagramDHZGUBPPInput232,
      vennDiagramDHZGUBPPInput233,
    ) =>
      vennDiagramDHZGUBPPHelper23(
        vennDiagramDHZGUBPPInput232,
        vennDiagramDHZGUBPPInput233,
        distances,
        constraints,
      ),
    vennDiagramDHZGUBPPBinding290 = null;
  for (
    let vennDiagramDHZGUBPPBinding483 = 0;
    vennDiagramDHZGUBPPBinding483 < vennDiagramDHZGUBPPBinding285;
    ++vennDiagramDHZGUBPPBinding483
  ) {
    let vennDiagramDHZGUBPPBinding513 = vennDiagramDHZGUBPPHelper18(
      vennDiagramDHZGUBPPBinding289,
      vennDiagramDHZGUBPPHelper10(distances.length * 2).map(Math.random),
      vennDiagramDHZGUBPPInput65,
    );
    (!vennDiagramDHZGUBPPBinding290 ||
      vennDiagramDHZGUBPPBinding513.fx < vennDiagramDHZGUBPPBinding290.fx) &&
      (vennDiagramDHZGUBPPBinding290 = vennDiagramDHZGUBPPBinding513);
  }
  let vennDiagramDHZGUBPPBinding291 = vennDiagramDHZGUBPPBinding290.x,
    vennDiagramDHZGUBPPBinding292 = {};
  for (
    let vennDiagramDHZGUBPPBinding446 = 0;
    vennDiagramDHZGUBPPBinding446 < vennDiagramDHZGUBPPBinding286.length;
    ++vennDiagramDHZGUBPPBinding446
  ) {
    let vennDiagramDHZGUBPPBinding463 =
      vennDiagramDHZGUBPPBinding286[vennDiagramDHZGUBPPBinding446];
    vennDiagramDHZGUBPPBinding292[vennDiagramDHZGUBPPBinding463.sets[0]] = {
      x:
        vennDiagramDHZGUBPPBinding291[2 * vennDiagramDHZGUBPPBinding446] *
        vennDiagramDHZGUBPPBinding288,
      y:
        vennDiagramDHZGUBPPBinding291[2 * vennDiagramDHZGUBPPBinding446 + 1] *
        vennDiagramDHZGUBPPBinding288,
      radius: Math.sqrt(vennDiagramDHZGUBPPBinding463.size / Math.PI),
    };
  }
  if (vennDiagramDHZGUBPPInput65.history)
    for (let vennDiagramDHZGUBPPBinding563 of vennDiagramDHZGUBPPInput65.history)
      vennDiagramDHZGUBPPHelper14(
        vennDiagramDHZGUBPPBinding563.x,
        vennDiagramDHZGUBPPBinding288,
      );
  return vennDiagramDHZGUBPPBinding292;
}
function vennDiagramDHZGUBPPHelper26(
  vennDiagramDHZGUBPPInput28,
  vennDiagramDHZGUBPPInput29,
) {
  let vennDiagramDHZGUBPPBinding181 =
      vennDiagramDHZGUBPPInput29 && vennDiagramDHZGUBPPInput29.lossFunction
        ? vennDiagramDHZGUBPPInput29.lossFunction
        : vennDiagramDHZGUBPPHelper27,
    vennDiagramDHZGUBPPBinding182 = {},
    vennDiagramDHZGUBPPBinding183 = {};
  for (let vennDiagramDHZGUBPPBinding410 of vennDiagramDHZGUBPPInput28)
    if (vennDiagramDHZGUBPPBinding410.sets.length === 1) {
      let vennDiagramDHZGUBPPBinding424 = vennDiagramDHZGUBPPBinding410.sets[0];
      vennDiagramDHZGUBPPBinding182[vennDiagramDHZGUBPPBinding424] = {
        x: 1e10,
        y: 1e10,
        rowid: vennDiagramDHZGUBPPBinding182.length,
        size: vennDiagramDHZGUBPPBinding410.size,
        radius: Math.sqrt(vennDiagramDHZGUBPPBinding410.size / Math.PI),
      };
      vennDiagramDHZGUBPPBinding183[vennDiagramDHZGUBPPBinding424] = [];
    }
  vennDiagramDHZGUBPPInput28 = vennDiagramDHZGUBPPInput28.filter(
    (item) => item.sets.length === 2,
  );
  for (let vennDiagramDHZGUBPPBinding398 of vennDiagramDHZGUBPPInput28) {
    let vennDiagramDHZGUBPPBinding403 =
        vennDiagramDHZGUBPPBinding398.weight == null
          ? 1
          : vennDiagramDHZGUBPPBinding398.weight,
      vennDiagramDHZGUBPPBinding404 = vennDiagramDHZGUBPPBinding398.sets[0],
      vennDiagramDHZGUBPPBinding405 = vennDiagramDHZGUBPPBinding398.sets[1];
    vennDiagramDHZGUBPPBinding398.size + vennDiagramDHZGUBPPBinding2 >=
      Math.min(
        vennDiagramDHZGUBPPBinding182[vennDiagramDHZGUBPPBinding404].size,
        vennDiagramDHZGUBPPBinding182[vennDiagramDHZGUBPPBinding405].size,
      ) && (vennDiagramDHZGUBPPBinding403 = 0);
    vennDiagramDHZGUBPPBinding183[vennDiagramDHZGUBPPBinding404].push({
      set: vennDiagramDHZGUBPPBinding405,
      size: vennDiagramDHZGUBPPBinding398.size,
      weight: vennDiagramDHZGUBPPBinding403,
    });
    vennDiagramDHZGUBPPBinding183[vennDiagramDHZGUBPPBinding405].push({
      set: vennDiagramDHZGUBPPBinding404,
      size: vennDiagramDHZGUBPPBinding398.size,
      weight: vennDiagramDHZGUBPPBinding403,
    });
  }
  let vennDiagramDHZGUBPPBinding184 = [];
  Object.keys(vennDiagramDHZGUBPPBinding183).forEach((item) => {
    let vennDiagramDHZGUBPPBinding470 = 0;
    for (
      let vennDiagramDHZGUBPPBinding539 = 0;
      vennDiagramDHZGUBPPBinding539 <
      vennDiagramDHZGUBPPBinding183[item].length;
      ++vennDiagramDHZGUBPPBinding539
    )
      vennDiagramDHZGUBPPBinding470 +=
        vennDiagramDHZGUBPPBinding183[item][vennDiagramDHZGUBPPBinding539]
          .size *
        vennDiagramDHZGUBPPBinding183[item][vennDiagramDHZGUBPPBinding539]
          .weight;
    vennDiagramDHZGUBPPBinding184.push({
      set: item,
      size: vennDiagramDHZGUBPPBinding470,
    });
  });
  function vennDiagramDHZGUBPPHelper58(
    vennDiagramDHZGUBPPInput209,
    vennDiagramDHZGUBPPInput210,
  ) {
    return vennDiagramDHZGUBPPInput210.size - vennDiagramDHZGUBPPInput209.size;
  }
  vennDiagramDHZGUBPPBinding184.sort(vennDiagramDHZGUBPPHelper58);
  let vennDiagramDHZGUBPPBinding185 = {};
  function vennDiagramDHZGUBPPHelper59(vennDiagramDHZGUBPPInput215) {
    return vennDiagramDHZGUBPPInput215.set in vennDiagramDHZGUBPPBinding185;
  }
  function vennDiagramDHZGUBPPHelper60(
    vennDiagramDHZGUBPPInput181,
    vennDiagramDHZGUBPPInput182,
  ) {
    vennDiagramDHZGUBPPBinding182[vennDiagramDHZGUBPPInput182].x =
      vennDiagramDHZGUBPPInput181.x;
    vennDiagramDHZGUBPPBinding182[vennDiagramDHZGUBPPInput182].y =
      vennDiagramDHZGUBPPInput181.y;
    vennDiagramDHZGUBPPBinding185[vennDiagramDHZGUBPPInput182] = true;
  }
  vennDiagramDHZGUBPPHelper60(
    {
      x: 0,
      y: 0,
    },
    vennDiagramDHZGUBPPBinding184[0].set,
  );
  for (
    let vennDiagramDHZGUBPPBinding271 = 1;
    vennDiagramDHZGUBPPBinding271 < vennDiagramDHZGUBPPBinding184.length;
    ++vennDiagramDHZGUBPPBinding271
  ) {
    let vennDiagramDHZGUBPPBinding278 =
        vennDiagramDHZGUBPPBinding184[vennDiagramDHZGUBPPBinding271].set,
      vennDiagramDHZGUBPPBinding279 = vennDiagramDHZGUBPPBinding183[
        vennDiagramDHZGUBPPBinding278
      ].filter(vennDiagramDHZGUBPPHelper59),
      vennDiagramDHZGUBPPBinding280 =
        vennDiagramDHZGUBPPBinding182[vennDiagramDHZGUBPPBinding278];
    if (
      (vennDiagramDHZGUBPPBinding279.sort(vennDiagramDHZGUBPPHelper58),
      vennDiagramDHZGUBPPBinding279.length === 0)
    )
      throw "ERROR: missing pairwise overlap information";
    let vennDiagramDHZGUBPPBinding281 = [];
    for (
      var vennDiagramDHZGUBPPBinding186 = 0;
      vennDiagramDHZGUBPPBinding186 < vennDiagramDHZGUBPPBinding279.length;
      ++vennDiagramDHZGUBPPBinding186
    ) {
      let vennDiagramDHZGUBPPBinding341 =
          vennDiagramDHZGUBPPBinding182[
            vennDiagramDHZGUBPPBinding279[vennDiagramDHZGUBPPBinding186].set
          ],
        vennDiagramDHZGUBPPBinding342 = vennDiagramDHZGUBPPHelper20(
          vennDiagramDHZGUBPPBinding280.radius,
          vennDiagramDHZGUBPPBinding341.radius,
          vennDiagramDHZGUBPPBinding279[vennDiagramDHZGUBPPBinding186].size,
        );
      vennDiagramDHZGUBPPBinding281.push({
        x: vennDiagramDHZGUBPPBinding341.x + vennDiagramDHZGUBPPBinding342,
        y: vennDiagramDHZGUBPPBinding341.y,
      });
      vennDiagramDHZGUBPPBinding281.push({
        x: vennDiagramDHZGUBPPBinding341.x - vennDiagramDHZGUBPPBinding342,
        y: vennDiagramDHZGUBPPBinding341.y,
      });
      vennDiagramDHZGUBPPBinding281.push({
        y: vennDiagramDHZGUBPPBinding341.y + vennDiagramDHZGUBPPBinding342,
        x: vennDiagramDHZGUBPPBinding341.x,
      });
      vennDiagramDHZGUBPPBinding281.push({
        y: vennDiagramDHZGUBPPBinding341.y - vennDiagramDHZGUBPPBinding342,
        x: vennDiagramDHZGUBPPBinding341.x,
      });
      for (
        let vennDiagramDHZGUBPPBinding414 = vennDiagramDHZGUBPPBinding186 + 1;
        vennDiagramDHZGUBPPBinding414 < vennDiagramDHZGUBPPBinding279.length;
        ++vennDiagramDHZGUBPPBinding414
      ) {
        let vennDiagramDHZGUBPPBinding438 =
            vennDiagramDHZGUBPPBinding182[
              vennDiagramDHZGUBPPBinding279[vennDiagramDHZGUBPPBinding414].set
            ],
          vennDiagramDHZGUBPPBinding439 = vennDiagramDHZGUBPPHelper20(
            vennDiagramDHZGUBPPBinding280.radius,
            vennDiagramDHZGUBPPBinding438.radius,
            vennDiagramDHZGUBPPBinding279[vennDiagramDHZGUBPPBinding414].size,
          ),
          vennDiagramDHZGUBPPBinding440 = vennDiagramDHZGUBPPHelper7(
            {
              x: vennDiagramDHZGUBPPBinding341.x,
              y: vennDiagramDHZGUBPPBinding341.y,
              radius: vennDiagramDHZGUBPPBinding342,
            },
            {
              x: vennDiagramDHZGUBPPBinding438.x,
              y: vennDiagramDHZGUBPPBinding438.y,
              radius: vennDiagramDHZGUBPPBinding439,
            },
          );
        vennDiagramDHZGUBPPBinding281.push(...vennDiagramDHZGUBPPBinding440);
      }
    }
    let vennDiagramDHZGUBPPBinding282 = 1e50,
      vennDiagramDHZGUBPPBinding283 = vennDiagramDHZGUBPPBinding281[0];
    for (let vennDiagramDHZGUBPPBinding486 of vennDiagramDHZGUBPPBinding281) {
      vennDiagramDHZGUBPPBinding182[vennDiagramDHZGUBPPBinding278].x =
        vennDiagramDHZGUBPPBinding486.x;
      vennDiagramDHZGUBPPBinding182[vennDiagramDHZGUBPPBinding278].y =
        vennDiagramDHZGUBPPBinding486.y;
      let vennDiagramDHZGUBPPBinding496 = vennDiagramDHZGUBPPBinding181(
        vennDiagramDHZGUBPPBinding182,
        vennDiagramDHZGUBPPInput28,
      );
      vennDiagramDHZGUBPPBinding496 < vennDiagramDHZGUBPPBinding282 &&
        ((vennDiagramDHZGUBPPBinding282 = vennDiagramDHZGUBPPBinding496),
        (vennDiagramDHZGUBPPBinding283 = vennDiagramDHZGUBPPBinding486));
    }
    vennDiagramDHZGUBPPHelper60(
      vennDiagramDHZGUBPPBinding283,
      vennDiagramDHZGUBPPBinding278,
    );
  }
  return vennDiagramDHZGUBPPBinding182;
}
function vennDiagramDHZGUBPPHelper27(
  vennDiagramDHZGUBPPInput106,
  vennDiagramDHZGUBPPInput107,
) {
  let vennDiagramDHZGUBPPBinding382 = 0;
  for (let vennDiagramDHZGUBPPBinding391 of vennDiagramDHZGUBPPInput107) {
    if (vennDiagramDHZGUBPPBinding391.sets.length === 1) continue;
    let vennDiagramDHZGUBPPBinding393;
    if (vennDiagramDHZGUBPPBinding391.sets.length === 2) {
      let vennDiagramDHZGUBPPBinding499 =
          vennDiagramDHZGUBPPInput106[vennDiagramDHZGUBPPBinding391.sets[0]],
        vennDiagramDHZGUBPPBinding500 =
          vennDiagramDHZGUBPPInput106[vennDiagramDHZGUBPPBinding391.sets[1]];
      vennDiagramDHZGUBPPBinding393 = vennDiagramDHZGUBPPHelper6(
        vennDiagramDHZGUBPPBinding499.radius,
        vennDiagramDHZGUBPPBinding500.radius,
        vennDiagramDHZGUBPPHelper5(
          vennDiagramDHZGUBPPBinding499,
          vennDiagramDHZGUBPPBinding500,
        ),
      );
    } else
      vennDiagramDHZGUBPPBinding393 = vennDiagramDHZGUBPPHelper1(
        vennDiagramDHZGUBPPBinding391.sets.map(
          (item) => vennDiagramDHZGUBPPInput106[item],
        ),
      );
    let vennDiagramDHZGUBPPBinding394 =
      vennDiagramDHZGUBPPBinding391.weight == null
        ? 1
        : vennDiagramDHZGUBPPBinding391.weight;
    vennDiagramDHZGUBPPBinding382 +=
      vennDiagramDHZGUBPPBinding394 *
      (vennDiagramDHZGUBPPBinding393 - vennDiagramDHZGUBPPBinding391.size) *
      (vennDiagramDHZGUBPPBinding393 - vennDiagramDHZGUBPPBinding391.size);
  }
  return vennDiagramDHZGUBPPBinding382;
}
function vennDiagramDHZGUBPPHelper28(
  vennDiagramDHZGUBPPInput101,
  vennDiagramDHZGUBPPInput102,
) {
  let vennDiagramDHZGUBPPBinding378 = 0;
  for (let vennDiagramDHZGUBPPBinding385 of vennDiagramDHZGUBPPInput102) {
    if (vennDiagramDHZGUBPPBinding385.sets.length === 1) continue;
    let vennDiagramDHZGUBPPBinding388;
    if (vennDiagramDHZGUBPPBinding385.sets.length === 2) {
      let vennDiagramDHZGUBPPBinding501 =
          vennDiagramDHZGUBPPInput101[vennDiagramDHZGUBPPBinding385.sets[0]],
        vennDiagramDHZGUBPPBinding502 =
          vennDiagramDHZGUBPPInput101[vennDiagramDHZGUBPPBinding385.sets[1]];
      vennDiagramDHZGUBPPBinding388 = vennDiagramDHZGUBPPHelper6(
        vennDiagramDHZGUBPPBinding501.radius,
        vennDiagramDHZGUBPPBinding502.radius,
        vennDiagramDHZGUBPPHelper5(
          vennDiagramDHZGUBPPBinding501,
          vennDiagramDHZGUBPPBinding502,
        ),
      );
    } else
      vennDiagramDHZGUBPPBinding388 = vennDiagramDHZGUBPPHelper1(
        vennDiagramDHZGUBPPBinding385.sets.map(
          (item) => vennDiagramDHZGUBPPInput101[item],
        ),
      );
    let vennDiagramDHZGUBPPBinding389 =
        vennDiagramDHZGUBPPBinding385.weight == null
          ? 1
          : vennDiagramDHZGUBPPBinding385.weight,
      vennDiagramDHZGUBPPBinding390 = Math.log(
        (vennDiagramDHZGUBPPBinding388 + 1) /
          (vennDiagramDHZGUBPPBinding385.size + 1),
      );
    vennDiagramDHZGUBPPBinding378 +=
      vennDiagramDHZGUBPPBinding389 *
      vennDiagramDHZGUBPPBinding390 *
      vennDiagramDHZGUBPPBinding390;
  }
  return vennDiagramDHZGUBPPBinding378;
}
function vennDiagramDHZGUBPPHelper29(
  vennDiagramDHZGUBPPInput50,
  vennDiagramDHZGUBPPInput51,
  vennDiagramDHZGUBPPInput52,
) {
  if (
    (vennDiagramDHZGUBPPInput52 == null
      ? vennDiagramDHZGUBPPInput50.sort(
          (vennDiagramDHZGUBPPInput223, vennDiagramDHZGUBPPInput224) =>
            vennDiagramDHZGUBPPInput224.radius -
            vennDiagramDHZGUBPPInput223.radius,
        )
      : vennDiagramDHZGUBPPInput50.sort(vennDiagramDHZGUBPPInput52),
    vennDiagramDHZGUBPPInput50.length > 0)
  ) {
    let vennDiagramDHZGUBPPBinding523 = vennDiagramDHZGUBPPInput50[0].x,
      vennDiagramDHZGUBPPBinding524 = vennDiagramDHZGUBPPInput50[0].y;
    for (let vennDiagramDHZGUBPPBinding559 of vennDiagramDHZGUBPPInput50) {
      vennDiagramDHZGUBPPBinding559.x -= vennDiagramDHZGUBPPBinding523;
      vennDiagramDHZGUBPPBinding559.y -= vennDiagramDHZGUBPPBinding524;
    }
  }
  if (
    (vennDiagramDHZGUBPPInput50.length === 2 &&
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPInput50[0],
        vennDiagramDHZGUBPPInput50[1],
      ) <
        Math.abs(
          vennDiagramDHZGUBPPInput50[1].radius -
            vennDiagramDHZGUBPPInput50[0].radius,
        ) &&
      ((vennDiagramDHZGUBPPInput50[1].x =
        vennDiagramDHZGUBPPInput50[0].x +
        vennDiagramDHZGUBPPInput50[0].radius -
        vennDiagramDHZGUBPPInput50[1].radius -
        1e-10),
      (vennDiagramDHZGUBPPInput50[1].y = vennDiagramDHZGUBPPInput50[0].y)),
    vennDiagramDHZGUBPPInput50.length > 1)
  ) {
    let vennDiagramDHZGUBPPBinding419 =
        Math.atan2(
          vennDiagramDHZGUBPPInput50[1].x,
          vennDiagramDHZGUBPPInput50[1].y,
        ) - vennDiagramDHZGUBPPInput51,
      vennDiagramDHZGUBPPBinding420 = Math.cos(vennDiagramDHZGUBPPBinding419),
      vennDiagramDHZGUBPPBinding421 = Math.sin(vennDiagramDHZGUBPPBinding419);
    for (let vennDiagramDHZGUBPPBinding491 of vennDiagramDHZGUBPPInput50) {
      let vennDiagramDHZGUBPPBinding514 = vennDiagramDHZGUBPPBinding491.x,
        vennDiagramDHZGUBPPBinding515 = vennDiagramDHZGUBPPBinding491.y;
      vennDiagramDHZGUBPPBinding491.x =
        vennDiagramDHZGUBPPBinding420 * vennDiagramDHZGUBPPBinding514 -
        vennDiagramDHZGUBPPBinding421 * vennDiagramDHZGUBPPBinding515;
      vennDiagramDHZGUBPPBinding491.y =
        vennDiagramDHZGUBPPBinding421 * vennDiagramDHZGUBPPBinding514 +
        vennDiagramDHZGUBPPBinding420 * vennDiagramDHZGUBPPBinding515;
    }
  }
  if (vennDiagramDHZGUBPPInput50.length > 2) {
    let vennDiagramDHZGUBPPBinding387 =
      Math.atan2(
        vennDiagramDHZGUBPPInput50[2].x,
        vennDiagramDHZGUBPPInput50[2].y,
      ) - vennDiagramDHZGUBPPInput51;
    for (; vennDiagramDHZGUBPPBinding387 < 0; )
      vennDiagramDHZGUBPPBinding387 += 2 * Math.PI;
    for (; vennDiagramDHZGUBPPBinding387 > 2 * Math.PI; )
      vennDiagramDHZGUBPPBinding387 -= 2 * Math.PI;
    if (vennDiagramDHZGUBPPBinding387 > Math.PI) {
      let vennDiagramDHZGUBPPBinding444 =
        vennDiagramDHZGUBPPInput50[1].y /
        (1e-10 + vennDiagramDHZGUBPPInput50[1].x);
      for (let vennDiagramDHZGUBPPBinding479 of vennDiagramDHZGUBPPInput50) {
        var vennDiagramDHZGUBPPBinding252 =
          (vennDiagramDHZGUBPPBinding479.x +
            vennDiagramDHZGUBPPBinding444 * vennDiagramDHZGUBPPBinding479.y) /
          (1 + vennDiagramDHZGUBPPBinding444 * vennDiagramDHZGUBPPBinding444);
        vennDiagramDHZGUBPPBinding479.x =
          2 * vennDiagramDHZGUBPPBinding252 - vennDiagramDHZGUBPPBinding479.x;
        vennDiagramDHZGUBPPBinding479.y =
          2 * vennDiagramDHZGUBPPBinding252 * vennDiagramDHZGUBPPBinding444 -
          vennDiagramDHZGUBPPBinding479.y;
      }
    }
  }
}
function vennDiagramDHZGUBPPHelper30(vennDiagramDHZGUBPPInput77) {
  vennDiagramDHZGUBPPInput77.forEach((item) => {
    item.parent = item;
  });
  function vennDiagramDHZGUBPPHelper66(vennDiagramDHZGUBPPInput176) {
    return (
      vennDiagramDHZGUBPPInput176.parent !== vennDiagramDHZGUBPPInput176 &&
        (vennDiagramDHZGUBPPInput176.parent = vennDiagramDHZGUBPPHelper66(
          vennDiagramDHZGUBPPInput176.parent,
        )),
      vennDiagramDHZGUBPPInput176.parent
    );
  }
  function vennDiagramDHZGUBPPHelper67(
    vennDiagramDHZGUBPPInput204,
    vennDiagramDHZGUBPPInput205,
  ) {
    let vennDiagramDHZGUBPPBinding547 = vennDiagramDHZGUBPPHelper66(
      vennDiagramDHZGUBPPInput204,
    );
    vennDiagramDHZGUBPPBinding547.parent = vennDiagramDHZGUBPPHelper66(
      vennDiagramDHZGUBPPInput205,
    );
  }
  for (
    let vennDiagramDHZGUBPPBinding449 = 0;
    vennDiagramDHZGUBPPBinding449 < vennDiagramDHZGUBPPInput77.length;
    ++vennDiagramDHZGUBPPBinding449
  )
    for (
      let vennDiagramDHZGUBPPBinding473 = vennDiagramDHZGUBPPBinding449 + 1;
      vennDiagramDHZGUBPPBinding473 < vennDiagramDHZGUBPPInput77.length;
      ++vennDiagramDHZGUBPPBinding473
    ) {
      let vennDiagramDHZGUBPPBinding512 =
        vennDiagramDHZGUBPPInput77[vennDiagramDHZGUBPPBinding449].radius +
        vennDiagramDHZGUBPPInput77[vennDiagramDHZGUBPPBinding473].radius;
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPInput77[vennDiagramDHZGUBPPBinding449],
        vennDiagramDHZGUBPPInput77[vennDiagramDHZGUBPPBinding473],
      ) +
        1e-10 <
        vennDiagramDHZGUBPPBinding512 &&
        vennDiagramDHZGUBPPHelper67(
          vennDiagramDHZGUBPPInput77[vennDiagramDHZGUBPPBinding473],
          vennDiagramDHZGUBPPInput77[vennDiagramDHZGUBPPBinding449],
        );
    }
  let vennDiagramDHZGUBPPBinding306 = new Map();
  for (
    let vennDiagramDHZGUBPPBinding481 = 0;
    vennDiagramDHZGUBPPBinding481 < vennDiagramDHZGUBPPInput77.length;
    ++vennDiagramDHZGUBPPBinding481
  ) {
    let vennDiagramDHZGUBPPBinding521 = vennDiagramDHZGUBPPHelper66(
      vennDiagramDHZGUBPPInput77[vennDiagramDHZGUBPPBinding481],
    ).parent.setid;
    vennDiagramDHZGUBPPBinding306.has(vennDiagramDHZGUBPPBinding521) ||
      vennDiagramDHZGUBPPBinding306.set(vennDiagramDHZGUBPPBinding521, []);
    vennDiagramDHZGUBPPBinding306
      .get(vennDiagramDHZGUBPPBinding521)
      .push(vennDiagramDHZGUBPPInput77[vennDiagramDHZGUBPPBinding481]);
  }
  return (
    vennDiagramDHZGUBPPInput77.forEach((item) => {
      delete item.parent;
    }),
    Array.from(vennDiagramDHZGUBPPBinding306.values())
  );
}
function vennDiagramDHZGUBPPHelper31(vennDiagramDHZGUBPPInput118) {
  let vennDiagramDHZGUBPPBinding418 = (vennDiagramDHZGUBPPInput138) => ({
    max: vennDiagramDHZGUBPPInput118.reduce(
      (accumulator, current) =>
        Math.max(
          accumulator,
          current[vennDiagramDHZGUBPPInput138] + current.radius,
        ),
      -1 / 0,
    ),
    min: vennDiagramDHZGUBPPInput118.reduce(
      (accumulator, current) =>
        Math.min(
          accumulator,
          current[vennDiagramDHZGUBPPInput138] - current.radius,
        ),
      1 / 0,
    ),
  });
  return {
    xRange: vennDiagramDHZGUBPPBinding418("x"),
    yRange: vennDiagramDHZGUBPPBinding418("y"),
  };
}
function vennDiagramDHZGUBPPHelper32(
  vennDiagramDHZGUBPPInput41,
  vennDiagramDHZGUBPPInput42,
  vennDiagramDHZGUBPPInput43,
) {
  vennDiagramDHZGUBPPInput42 ??= Math.PI / 2;
  let vennDiagramDHZGUBPPBinding229 = vennDiagramDHZGUBPPHelper34(
      vennDiagramDHZGUBPPInput41,
    ).map((item) => Object.assign({}, item)),
    vennDiagramDHZGUBPPBinding230 = vennDiagramDHZGUBPPHelper30(
      vennDiagramDHZGUBPPBinding229,
    );
  for (let vennDiagramDHZGUBPPBinding455 of vennDiagramDHZGUBPPBinding230) {
    vennDiagramDHZGUBPPHelper29(
      vennDiagramDHZGUBPPBinding455,
      vennDiagramDHZGUBPPInput42,
      vennDiagramDHZGUBPPInput43,
    );
    let vennDiagramDHZGUBPPBinding465 = vennDiagramDHZGUBPPHelper31(
      vennDiagramDHZGUBPPBinding455,
    );
    vennDiagramDHZGUBPPBinding455.size =
      (vennDiagramDHZGUBPPBinding465.xRange.max -
        vennDiagramDHZGUBPPBinding465.xRange.min) *
      (vennDiagramDHZGUBPPBinding465.yRange.max -
        vennDiagramDHZGUBPPBinding465.yRange.min);
    vennDiagramDHZGUBPPBinding455.bounds = vennDiagramDHZGUBPPBinding465;
  }
  vennDiagramDHZGUBPPBinding230.sort(
    (vennDiagramDHZGUBPPInput229, vennDiagramDHZGUBPPInput230) =>
      vennDiagramDHZGUBPPInput230.size - vennDiagramDHZGUBPPInput229.size,
  );
  vennDiagramDHZGUBPPBinding229 = vennDiagramDHZGUBPPBinding230[0];
  let vennDiagramDHZGUBPPBinding231 = vennDiagramDHZGUBPPBinding229.bounds,
    vennDiagramDHZGUBPPBinding232 =
      (vennDiagramDHZGUBPPBinding231.xRange.max -
        vennDiagramDHZGUBPPBinding231.xRange.min) /
      50;
  function vennDiagramDHZGUBPPHelper63(
    vennDiagramDHZGUBPPInput83,
    vennDiagramDHZGUBPPInput84,
    vennDiagramDHZGUBPPInput85,
  ) {
    if (!vennDiagramDHZGUBPPInput83) return;
    let vennDiagramDHZGUBPPBinding319 = vennDiagramDHZGUBPPInput83.bounds,
      vennDiagramDHZGUBPPBinding320,
      vennDiagramDHZGUBPPBinding321;
    if (vennDiagramDHZGUBPPInput84)
      vennDiagramDHZGUBPPBinding320 =
        vennDiagramDHZGUBPPBinding231.xRange.max -
        vennDiagramDHZGUBPPBinding319.xRange.min +
        vennDiagramDHZGUBPPBinding232;
    else {
      vennDiagramDHZGUBPPBinding320 =
        vennDiagramDHZGUBPPBinding231.xRange.max -
        vennDiagramDHZGUBPPBinding319.xRange.max;
      let vennDiagramDHZGUBPPBinding453 =
        (vennDiagramDHZGUBPPBinding319.xRange.max -
          vennDiagramDHZGUBPPBinding319.xRange.min) /
          2 -
        (vennDiagramDHZGUBPPBinding231.xRange.max -
          vennDiagramDHZGUBPPBinding231.xRange.min) /
          2;
      vennDiagramDHZGUBPPBinding453 < 0 &&
        (vennDiagramDHZGUBPPBinding320 += vennDiagramDHZGUBPPBinding453);
    }
    if (vennDiagramDHZGUBPPInput85)
      vennDiagramDHZGUBPPBinding321 =
        vennDiagramDHZGUBPPBinding231.yRange.max -
        vennDiagramDHZGUBPPBinding319.yRange.min +
        vennDiagramDHZGUBPPBinding232;
    else {
      vennDiagramDHZGUBPPBinding321 =
        vennDiagramDHZGUBPPBinding231.yRange.max -
        vennDiagramDHZGUBPPBinding319.yRange.max;
      let vennDiagramDHZGUBPPBinding454 =
        (vennDiagramDHZGUBPPBinding319.yRange.max -
          vennDiagramDHZGUBPPBinding319.yRange.min) /
          2 -
        (vennDiagramDHZGUBPPBinding231.yRange.max -
          vennDiagramDHZGUBPPBinding231.yRange.min) /
          2;
      vennDiagramDHZGUBPPBinding454 < 0 &&
        (vennDiagramDHZGUBPPBinding321 += vennDiagramDHZGUBPPBinding454);
    }
    for (let vennDiagramDHZGUBPPBinding550 of vennDiagramDHZGUBPPInput83) {
      vennDiagramDHZGUBPPBinding550.x += vennDiagramDHZGUBPPBinding320;
      vennDiagramDHZGUBPPBinding550.y += vennDiagramDHZGUBPPBinding321;
      vennDiagramDHZGUBPPBinding229.push(vennDiagramDHZGUBPPBinding550);
    }
  }
  let vennDiagramDHZGUBPPBinding233 = 1;
  for (
    ;
    vennDiagramDHZGUBPPBinding233 < vennDiagramDHZGUBPPBinding230.length;
  ) {
    vennDiagramDHZGUBPPHelper63(
      vennDiagramDHZGUBPPBinding230[vennDiagramDHZGUBPPBinding233],
      true,
      false,
    );
    vennDiagramDHZGUBPPHelper63(
      vennDiagramDHZGUBPPBinding230[vennDiagramDHZGUBPPBinding233 + 1],
      false,
      true,
    );
    vennDiagramDHZGUBPPHelper63(
      vennDiagramDHZGUBPPBinding230[vennDiagramDHZGUBPPBinding233 + 2],
      true,
      true,
    );
    vennDiagramDHZGUBPPBinding233 += 3;
    vennDiagramDHZGUBPPBinding231 = vennDiagramDHZGUBPPHelper31(
      vennDiagramDHZGUBPPBinding229,
    );
  }
  return vennDiagramDHZGUBPPHelper33(vennDiagramDHZGUBPPBinding229);
}
function _e(
  vennDiagramDHZGUBPPInput70,
  vennDiagramDHZGUBPPInput71,
  vennDiagramDHZGUBPPInput72,
  vennDiagramDHZGUBPPInput73,
  vennDiagramDHZGUBPPInput74,
) {
  let vennDiagramDHZGUBPPBinding300 = vennDiagramDHZGUBPPHelper34(
    vennDiagramDHZGUBPPInput70,
  );
  vennDiagramDHZGUBPPInput71 -= 2 * vennDiagramDHZGUBPPInput73;
  vennDiagramDHZGUBPPInput72 -= 2 * vennDiagramDHZGUBPPInput73;
  let { xRange, yRange } = vennDiagramDHZGUBPPHelper31(
    vennDiagramDHZGUBPPBinding300,
  );
  if (xRange.max === xRange.min || yRange.max === yRange.min)
    return (
      console.log("not scaling solution: zero size detected"),
      vennDiagramDHZGUBPPInput70
    );
  let vennDiagramDHZGUBPPBinding301, vennDiagramDHZGUBPPBinding302;
  if (vennDiagramDHZGUBPPInput74) {
    let vennDiagramDHZGUBPPBinding534 =
      Math.sqrt(vennDiagramDHZGUBPPInput74 / Math.PI) * 2;
    vennDiagramDHZGUBPPBinding301 =
      vennDiagramDHZGUBPPInput71 / vennDiagramDHZGUBPPBinding534;
    vennDiagramDHZGUBPPBinding302 =
      vennDiagramDHZGUBPPInput72 / vennDiagramDHZGUBPPBinding534;
  } else {
    vennDiagramDHZGUBPPBinding301 =
      vennDiagramDHZGUBPPInput71 / (xRange.max - xRange.min);
    vennDiagramDHZGUBPPBinding302 =
      vennDiagramDHZGUBPPInput72 / (yRange.max - yRange.min);
  }
  let vennDiagramDHZGUBPPBinding303 = Math.min(
      vennDiagramDHZGUBPPBinding302,
      vennDiagramDHZGUBPPBinding301,
    ),
    vennDiagramDHZGUBPPBinding304 =
      (vennDiagramDHZGUBPPInput71 -
        (xRange.max - xRange.min) * vennDiagramDHZGUBPPBinding303) /
      2,
    vennDiagramDHZGUBPPBinding305 =
      (vennDiagramDHZGUBPPInput72 -
        (yRange.max - yRange.min) * vennDiagramDHZGUBPPBinding303) /
      2;
  return vennDiagramDHZGUBPPHelper33(
    vennDiagramDHZGUBPPBinding300.map((item) => ({
      radius: vennDiagramDHZGUBPPBinding303 * item.radius,
      x:
        vennDiagramDHZGUBPPInput73 +
        vennDiagramDHZGUBPPBinding304 +
        (item.x - xRange.min) * vennDiagramDHZGUBPPBinding303,
      y:
        vennDiagramDHZGUBPPInput73 +
        vennDiagramDHZGUBPPBinding305 +
        (item.y - yRange.min) * vennDiagramDHZGUBPPBinding303,
      setid: item.setid,
    })),
  );
}
function vennDiagramDHZGUBPPHelper33(vennDiagramDHZGUBPPInput177) {
  let vennDiagramDHZGUBPPBinding530 = {};
  for (let vennDiagramDHZGUBPPBinding564 of vennDiagramDHZGUBPPInput177)
    vennDiagramDHZGUBPPBinding530[vennDiagramDHZGUBPPBinding564.setid] =
      vennDiagramDHZGUBPPBinding564;
  return vennDiagramDHZGUBPPBinding530;
}
function vennDiagramDHZGUBPPHelper34(vennDiagramDHZGUBPPInput175) {
  return Object.keys(vennDiagramDHZGUBPPInput175).map((item) =>
    Object.assign(vennDiagramDHZGUBPPInput175[item], {
      setid: item,
    }),
  );
}
function be(vennDiagramDHZGUBPPInput1 = {}) {
  let vennDiagramDHZGUBPPBinding44 = false,
    vennDiagramDHZGUBPPBinding45 = 600,
    vennDiagramDHZGUBPPBinding46 = 350,
    vennDiagramDHZGUBPPBinding47 = 15,
    vennDiagramDHZGUBPPBinding48 = 1e3,
    vennDiagramDHZGUBPPBinding49 = Math.PI / 2,
    vennDiagramDHZGUBPPBinding50 = true,
    vennDiagramDHZGUBPPBinding51 = null,
    vennDiagramDHZGUBPPBinding52 = true,
    vennDiagramDHZGUBPPBinding53 = true,
    vennDiagramDHZGUBPPBinding54 = null,
    vennDiagramDHZGUBPPBinding55 = null,
    vennDiagramDHZGUBPPBinding56 = false,
    vennDiagramDHZGUBPPBinding57 = null,
    vennDiagramDHZGUBPPBinding58 =
      vennDiagramDHZGUBPPInput1 &&
      vennDiagramDHZGUBPPInput1.symmetricalTextCentre
        ? vennDiagramDHZGUBPPInput1.symmetricalTextCentre
        : false,
    vennDiagramDHZGUBPPBinding59 = {},
    vennDiagramDHZGUBPPBinding60 =
      vennDiagramDHZGUBPPInput1 && vennDiagramDHZGUBPPInput1.colourScheme
        ? vennDiagramDHZGUBPPInput1.colourScheme
        : vennDiagramDHZGUBPPInput1 && vennDiagramDHZGUBPPInput1.colorScheme
          ? vennDiagramDHZGUBPPInput1.colorScheme
          : [
              "#1f77b4",
              "#ff7f0e",
              "#2ca02c",
              "#d62728",
              "#9467bd",
              "#8c564b",
              "#e377c2",
              "#7f7f7f",
              "#bcbd22",
              "#17becf",
            ],
    vennDiagramDHZGUBPPBinding61 = 0,
    vennDiagramDHZGUBPPBinding62 = function (vennDiagramDHZGUBPPInput143) {
      if (vennDiagramDHZGUBPPInput143 in vennDiagramDHZGUBPPBinding59)
        return vennDiagramDHZGUBPPBinding59[vennDiagramDHZGUBPPInput143];
      var vennDiagramDHZGUBPPBinding476 = (vennDiagramDHZGUBPPBinding59[
        vennDiagramDHZGUBPPInput143
      ] = vennDiagramDHZGUBPPBinding60[vennDiagramDHZGUBPPBinding61]);
      return (
        (vennDiagramDHZGUBPPBinding61 += 1),
        vennDiagramDHZGUBPPBinding61 >= vennDiagramDHZGUBPPBinding60.length &&
          (vennDiagramDHZGUBPPBinding61 = 0),
        vennDiagramDHZGUBPPBinding476
      );
    },
    vennDiagramDHZGUBPPBinding63 = vennDiagramDHZGUBPPHelper19,
    vennDiagramDHZGUBPPBinding64 = vennDiagramDHZGUBPPHelper27;
  function vennDiagramDHZGUBPPHelper51(vennDiagramDHZGUBPPInput14) {
    let vennDiagramDHZGUBPPBinding118 = vennDiagramDHZGUBPPInput14.datum(),
      vennDiagramDHZGUBPPBinding119 = new Set();
    vennDiagramDHZGUBPPBinding118.forEach((item) => {
      item.size == 0 &&
        item.sets.length == 1 &&
        vennDiagramDHZGUBPPBinding119.add(item.sets[0]);
    });
    vennDiagramDHZGUBPPBinding118 = vennDiagramDHZGUBPPBinding118.filter(
      (item) =>
        !item.sets.some((_item) => vennDiagramDHZGUBPPBinding119.has(_item)),
    );
    let vennDiagramDHZGUBPPBinding120 = {},
      vennDiagramDHZGUBPPBinding121 = {};
    if (vennDiagramDHZGUBPPBinding118.length > 0) {
      let vennDiagramDHZGUBPPBinding474 = vennDiagramDHZGUBPPBinding63(
        vennDiagramDHZGUBPPBinding118,
        {
          lossFunction: vennDiagramDHZGUBPPBinding64,
          distinct: vennDiagramDHZGUBPPBinding56,
        },
      );
      vennDiagramDHZGUBPPBinding50 &&
        (vennDiagramDHZGUBPPBinding474 = vennDiagramDHZGUBPPHelper32(
          vennDiagramDHZGUBPPBinding474,
          vennDiagramDHZGUBPPBinding49,
          vennDiagramDHZGUBPPBinding55,
        ));
      vennDiagramDHZGUBPPBinding120 = _e(
        vennDiagramDHZGUBPPBinding474,
        vennDiagramDHZGUBPPBinding45,
        vennDiagramDHZGUBPPBinding46,
        vennDiagramDHZGUBPPBinding47,
        vennDiagramDHZGUBPPBinding51,
      );
      vennDiagramDHZGUBPPBinding121 = vennDiagramDHZGUBPPHelper39(
        vennDiagramDHZGUBPPBinding120,
        vennDiagramDHZGUBPPBinding118,
        vennDiagramDHZGUBPPBinding58,
      );
    }
    let vennDiagramDHZGUBPPBinding122 = {};
    vennDiagramDHZGUBPPBinding118.forEach((item) => {
      item.label && (vennDiagramDHZGUBPPBinding122[item.sets] = item.label);
    });
    function vennDiagramDHZGUBPPHelper54(vennDiagramDHZGUBPPInput151) {
      if (vennDiagramDHZGUBPPInput151.sets in vennDiagramDHZGUBPPBinding122)
        return vennDiagramDHZGUBPPBinding122[vennDiagramDHZGUBPPInput151.sets];
      if (vennDiagramDHZGUBPPInput151.sets.length == 1)
        return "" + vennDiagramDHZGUBPPInput151.sets[0];
    }
    vennDiagramDHZGUBPPInput14
      .selectAll("svg")
      .data([vennDiagramDHZGUBPPBinding120])
      .enter()
      .append("svg");
    let vennDiagramDHZGUBPPBinding123 =
      vennDiagramDHZGUBPPInput14.select("svg");
    vennDiagramDHZGUBPPBinding44
      ? vennDiagramDHZGUBPPBinding123.attr(
          "viewBox",
          `0 0 ${vennDiagramDHZGUBPPBinding45} ${vennDiagramDHZGUBPPBinding46}`,
        )
      : vennDiagramDHZGUBPPBinding123
          .attr("width", vennDiagramDHZGUBPPBinding45)
          .attr("height", vennDiagramDHZGUBPPBinding46);
    let vennDiagramDHZGUBPPBinding124 = {},
      vennDiagramDHZGUBPPBinding125 = false;
    vennDiagramDHZGUBPPBinding123
      .selectAll(".venn-area path")
      .each(function (vennDiagramDHZGUBPPInput144) {
        let vennDiagramDHZGUBPPBinding477 = this.getAttribute("d");
        vennDiagramDHZGUBPPInput144.sets.length == 1 &&
          vennDiagramDHZGUBPPBinding477 &&
          !vennDiagramDHZGUBPPBinding56 &&
          ((vennDiagramDHZGUBPPBinding125 = true),
          (vennDiagramDHZGUBPPBinding124[vennDiagramDHZGUBPPInput144.sets[0]] =
            vennDiagramDHZGUBPPHelper41(vennDiagramDHZGUBPPBinding477)));
      });
    function vennDiagramDHZGUBPPHelper55(vennDiagramDHZGUBPPInput91) {
      return (vennDiagramDHZGUBPPInput92) =>
        vennDiagramDHZGUBPPHelper44(
          vennDiagramDHZGUBPPInput91.sets.map((item) => {
            let vennDiagramDHZGUBPPBinding379 =
                vennDiagramDHZGUBPPBinding124[item],
              vennDiagramDHZGUBPPBinding380 =
                vennDiagramDHZGUBPPBinding120[item];
            return (
              (vennDiagramDHZGUBPPBinding379 ||= {
                x: vennDiagramDHZGUBPPBinding45 / 2,
                y: vennDiagramDHZGUBPPBinding46 / 2,
                radius: 1,
              }),
              (vennDiagramDHZGUBPPBinding380 ||= {
                x: vennDiagramDHZGUBPPBinding45 / 2,
                y: vennDiagramDHZGUBPPBinding46 / 2,
                radius: 1,
              }),
              {
                x:
                  vennDiagramDHZGUBPPBinding379.x *
                    (1 - vennDiagramDHZGUBPPInput92) +
                  vennDiagramDHZGUBPPBinding380.x * vennDiagramDHZGUBPPInput92,
                y:
                  vennDiagramDHZGUBPPBinding379.y *
                    (1 - vennDiagramDHZGUBPPInput92) +
                  vennDiagramDHZGUBPPBinding380.y * vennDiagramDHZGUBPPInput92,
                radius:
                  vennDiagramDHZGUBPPBinding379.radius *
                    (1 - vennDiagramDHZGUBPPInput92) +
                  vennDiagramDHZGUBPPBinding380.radius *
                    vennDiagramDHZGUBPPInput92,
              }
            );
          }),
          vennDiagramDHZGUBPPBinding57,
        );
    }
    let vennDiagramDHZGUBPPBinding126 = vennDiagramDHZGUBPPBinding123
        .selectAll(".venn-area")
        .data(
          vennDiagramDHZGUBPPBinding118,
          (vennDiagramDHZGUBPPInput241) => vennDiagramDHZGUBPPInput241.sets,
        ),
      vennDiagramDHZGUBPPBinding127 = vennDiagramDHZGUBPPBinding126
        .enter()
        .append("g")
        .attr(
          "class",
          (vennDiagramDHZGUBPPInput146) =>
            `venn-area venn-${vennDiagramDHZGUBPPInput146.sets.length == 1 ? "circle" : "intersection"}${vennDiagramDHZGUBPPInput146.colour || vennDiagramDHZGUBPPInput146.color ? " venn-coloured" : ""}`,
        )
        .attr("data-venn-sets", (vennDiagramDHZGUBPPInput234) =>
          vennDiagramDHZGUBPPInput234.sets.join("_"),
        ),
      vennDiagramDHZGUBPPBinding128 =
        vennDiagramDHZGUBPPBinding127.append("path"),
      vennDiagramDHZGUBPPBinding129 = vennDiagramDHZGUBPPBinding127
        .append("text")
        .attr("class", "label")
        .text((vennDiagramDHZGUBPPInput242) =>
          vennDiagramDHZGUBPPHelper54(vennDiagramDHZGUBPPInput242),
        )
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .attr("x", vennDiagramDHZGUBPPBinding45 / 2)
        .attr("y", vennDiagramDHZGUBPPBinding46 / 2);
    vennDiagramDHZGUBPPBinding53 &&
      (vennDiagramDHZGUBPPBinding128
        .style("fill-opacity", "0")
        .filter((item) => item.sets.length == 1)
        .style("fill", (vennDiagramDHZGUBPPInput202) =>
          vennDiagramDHZGUBPPInput202.colour
            ? vennDiagramDHZGUBPPInput202.colour
            : vennDiagramDHZGUBPPInput202.color
              ? vennDiagramDHZGUBPPInput202.color
              : vennDiagramDHZGUBPPBinding62(vennDiagramDHZGUBPPInput202.sets),
        )
        .style("fill-opacity", ".25"),
      vennDiagramDHZGUBPPBinding129.style(
        "fill",
        (vennDiagramDHZGUBPPInput127) =>
          vennDiagramDHZGUBPPInput127.colour ||
          vennDiagramDHZGUBPPInput127.color
            ? "#FFF"
            : vennDiagramDHZGUBPPInput1.textFill
              ? vennDiagramDHZGUBPPInput1.textFill
              : vennDiagramDHZGUBPPInput127.sets.length == 1
                ? vennDiagramDHZGUBPPBinding62(vennDiagramDHZGUBPPInput127.sets)
                : "#444",
      ));
    function vennDiagramDHZGUBPPHelper56(vennDiagramDHZGUBPPInput150) {
      return typeof vennDiagramDHZGUBPPInput150.transition == "function"
        ? vennDiagramDHZGUBPPInput150
            .transition("venn")
            .duration(vennDiagramDHZGUBPPBinding48)
        : vennDiagramDHZGUBPPInput150;
    }
    let vennDiagramDHZGUBPPBinding130 = vennDiagramDHZGUBPPInput14;
    vennDiagramDHZGUBPPBinding125 &&
    typeof vennDiagramDHZGUBPPBinding130.transition == "function"
      ? ((vennDiagramDHZGUBPPBinding130 = vennDiagramDHZGUBPPHelper56(
          vennDiagramDHZGUBPPInput14,
        )),
        vennDiagramDHZGUBPPBinding130
          .selectAll("path")
          .attrTween("d", vennDiagramDHZGUBPPHelper55))
      : vennDiagramDHZGUBPPBinding130
          .selectAll("path")
          .attr(
            "d",
            (vennDiagramDHZGUBPPInput220) =>
              vennDiagramDHZGUBPPHelper44(
                vennDiagramDHZGUBPPInput220.sets.map(
                  (item) => vennDiagramDHZGUBPPBinding120[item],
                ),
              ),
            vennDiagramDHZGUBPPBinding57,
          );
    let vennDiagramDHZGUBPPBinding131 = vennDiagramDHZGUBPPBinding130
      .selectAll("text")
      .filter((item) => item.sets in vennDiagramDHZGUBPPBinding121)
      .text((vennDiagramDHZGUBPPInput243) =>
        vennDiagramDHZGUBPPHelper54(vennDiagramDHZGUBPPInput243),
      )
      .attr("x", (vennDiagramDHZGUBPPInput221) =>
        Math.floor(
          vennDiagramDHZGUBPPBinding121[vennDiagramDHZGUBPPInput221.sets].x,
        ),
      )
      .attr("y", (vennDiagramDHZGUBPPInput222) =>
        Math.floor(
          vennDiagramDHZGUBPPBinding121[vennDiagramDHZGUBPPInput222.sets].y,
        ),
      );
    vennDiagramDHZGUBPPBinding52 &&
      (vennDiagramDHZGUBPPBinding125
        ? "on" in vennDiagramDHZGUBPPBinding131
          ? vennDiagramDHZGUBPPBinding131.on(
              "end",
              vennDiagramDHZGUBPPHelper35(
                vennDiagramDHZGUBPPBinding120,
                vennDiagramDHZGUBPPHelper54,
              ),
            )
          : vennDiagramDHZGUBPPBinding131.each(
              "end",
              vennDiagramDHZGUBPPHelper35(
                vennDiagramDHZGUBPPBinding120,
                vennDiagramDHZGUBPPHelper54,
              ),
            )
        : vennDiagramDHZGUBPPBinding131.each(
            vennDiagramDHZGUBPPHelper35(
              vennDiagramDHZGUBPPBinding120,
              vennDiagramDHZGUBPPHelper54,
            ),
          ));
    let vennDiagramDHZGUBPPBinding132 = vennDiagramDHZGUBPPHelper56(
      vennDiagramDHZGUBPPBinding126.exit(),
    ).remove();
    typeof vennDiagramDHZGUBPPBinding126.transition == "function" &&
      vennDiagramDHZGUBPPBinding132
        .selectAll("path")
        .attrTween("d", vennDiagramDHZGUBPPHelper55);
    let vennDiagramDHZGUBPPBinding133 = vennDiagramDHZGUBPPBinding132
      .selectAll("text")
      .attr("x", vennDiagramDHZGUBPPBinding45 / 2)
      .attr("y", vennDiagramDHZGUBPPBinding46 / 2);
    return (
      vennDiagramDHZGUBPPBinding54 !== null &&
        (vennDiagramDHZGUBPPBinding129.style("font-size", "0px"),
        vennDiagramDHZGUBPPBinding131.style(
          "font-size",
          vennDiagramDHZGUBPPBinding54,
        ),
        vennDiagramDHZGUBPPBinding133.style("font-size", "0px")),
      {
        circles: vennDiagramDHZGUBPPBinding120,
        textCentres: vennDiagramDHZGUBPPBinding121,
        nodes: vennDiagramDHZGUBPPBinding126,
        enter: vennDiagramDHZGUBPPBinding127,
        update: vennDiagramDHZGUBPPBinding130,
        exit: vennDiagramDHZGUBPPBinding132,
      }
    );
  }
  return (
    (vennDiagramDHZGUBPPHelper51.wrap = function (vennDiagramDHZGUBPPInput184) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding52 = vennDiagramDHZGUBPPInput184),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding52;
    }),
    (vennDiagramDHZGUBPPHelper51.useViewBox = function () {
      return (
        (vennDiagramDHZGUBPPBinding44 = true),
        vennDiagramDHZGUBPPHelper51
      );
    }),
    (vennDiagramDHZGUBPPHelper51.width = function (
      vennDiagramDHZGUBPPInput185,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding45 = vennDiagramDHZGUBPPInput185),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding45;
    }),
    (vennDiagramDHZGUBPPHelper51.height = function (
      vennDiagramDHZGUBPPInput186,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding46 = vennDiagramDHZGUBPPInput186),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding46;
    }),
    (vennDiagramDHZGUBPPHelper51.padding = function (
      vennDiagramDHZGUBPPInput187,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding47 = vennDiagramDHZGUBPPInput187),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding47;
    }),
    (vennDiagramDHZGUBPPHelper51.distinct = function (
      vennDiagramDHZGUBPPInput188,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding56 = vennDiagramDHZGUBPPInput188),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding56;
    }),
    (vennDiagramDHZGUBPPHelper51.colours = function (
      vennDiagramDHZGUBPPInput189,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding62 = vennDiagramDHZGUBPPInput189),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding62;
    }),
    (vennDiagramDHZGUBPPHelper51.colors = function (
      vennDiagramDHZGUBPPInput190,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding62 = vennDiagramDHZGUBPPInput190),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding62;
    }),
    (vennDiagramDHZGUBPPHelper51.fontSize = function (
      vennDiagramDHZGUBPPInput191,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding54 = vennDiagramDHZGUBPPInput191),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding54;
    }),
    (vennDiagramDHZGUBPPHelper51.round = function (
      vennDiagramDHZGUBPPInput192,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding57 = vennDiagramDHZGUBPPInput192),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding57;
    }),
    (vennDiagramDHZGUBPPHelper51.duration = function (
      vennDiagramDHZGUBPPInput193,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding48 = vennDiagramDHZGUBPPInput193),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding48;
    }),
    (vennDiagramDHZGUBPPHelper51.layoutFunction = function (
      vennDiagramDHZGUBPPInput194,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding63 = vennDiagramDHZGUBPPInput194),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding63;
    }),
    (vennDiagramDHZGUBPPHelper51.normalize = function (
      vennDiagramDHZGUBPPInput195,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding50 = vennDiagramDHZGUBPPInput195),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding50;
    }),
    (vennDiagramDHZGUBPPHelper51.scaleToFit = function (
      vennDiagramDHZGUBPPInput196,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding51 = vennDiagramDHZGUBPPInput196),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding51;
    }),
    (vennDiagramDHZGUBPPHelper51.styled = function (
      vennDiagramDHZGUBPPInput197,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding53 = vennDiagramDHZGUBPPInput197),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding53;
    }),
    (vennDiagramDHZGUBPPHelper51.orientation = function (
      vennDiagramDHZGUBPPInput198,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding49 = vennDiagramDHZGUBPPInput198),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding49;
    }),
    (vennDiagramDHZGUBPPHelper51.orientationOrder = function (
      vennDiagramDHZGUBPPInput199,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding55 = vennDiagramDHZGUBPPInput199),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding55;
    }),
    (vennDiagramDHZGUBPPHelper51.lossFunction = function (
      vennDiagramDHZGUBPPInput145,
    ) {
      return arguments.length
        ? ((vennDiagramDHZGUBPPBinding64 =
            vennDiagramDHZGUBPPInput145 === "default"
              ? vennDiagramDHZGUBPPHelper27
              : vennDiagramDHZGUBPPInput145 === "logRatio"
                ? vennDiagramDHZGUBPPHelper28
                : vennDiagramDHZGUBPPInput145),
          vennDiagramDHZGUBPPHelper51)
        : vennDiagramDHZGUBPPBinding64;
    }),
    vennDiagramDHZGUBPPHelper51
  );
}
function vennDiagramDHZGUBPPHelper35(
  vennDiagramDHZGUBPPInput54,
  vennDiagramDHZGUBPPInput55,
) {
  return function (vennDiagramDHZGUBPPInput56) {
    let vennDiagramDHZGUBPPBinding257 = this,
      vennDiagramDHZGUBPPBinding258 =
        vennDiagramDHZGUBPPInput54[vennDiagramDHZGUBPPInput56.sets[0]].radius ||
        50,
      vennDiagramDHZGUBPPBinding259 =
        vennDiagramDHZGUBPPInput55(vennDiagramDHZGUBPPInput56) || "",
      vennDiagramDHZGUBPPBinding260 = vennDiagramDHZGUBPPBinding259
        .split(/\s+/)
        .reverse(),
      vennDiagramDHZGUBPPBinding261 =
        (vennDiagramDHZGUBPPBinding259.length +
          vennDiagramDHZGUBPPBinding260.length) /
        3,
      vennDiagramDHZGUBPPBinding262 = vennDiagramDHZGUBPPBinding260.pop(),
      vennDiagramDHZGUBPPBinding263 = [vennDiagramDHZGUBPPBinding262],
      vennDiagramDHZGUBPPBinding264 = 0;
    vennDiagramDHZGUBPPBinding257.textContent = null;
    let vennDiagramDHZGUBPPBinding266 = [];
    function vennDiagramDHZGUBPPHelper64(vennDiagramDHZGUBPPInput132) {
      let vennDiagramDHZGUBPPBinding457 =
        vennDiagramDHZGUBPPBinding257.ownerDocument.createElementNS(
          vennDiagramDHZGUBPPBinding257.namespaceURI,
          "tspan",
        );
      return (
        (vennDiagramDHZGUBPPBinding457.textContent =
          vennDiagramDHZGUBPPInput132),
        vennDiagramDHZGUBPPBinding266.push(vennDiagramDHZGUBPPBinding457),
        vennDiagramDHZGUBPPBinding257.append(vennDiagramDHZGUBPPBinding457),
        vennDiagramDHZGUBPPBinding457
      );
    }
    let vennDiagramDHZGUBPPBinding267 = vennDiagramDHZGUBPPHelper64(
      vennDiagramDHZGUBPPBinding262,
    );
    for (
      ;
      (vennDiagramDHZGUBPPBinding262 = vennDiagramDHZGUBPPBinding260.pop()),
        vennDiagramDHZGUBPPBinding262;
    ) {
      vennDiagramDHZGUBPPBinding263.push(vennDiagramDHZGUBPPBinding262);
      let vennDiagramDHZGUBPPBinding415 =
        vennDiagramDHZGUBPPBinding263.join(" ");
      vennDiagramDHZGUBPPBinding267.textContent = vennDiagramDHZGUBPPBinding415;
      vennDiagramDHZGUBPPBinding415.length > vennDiagramDHZGUBPPBinding261 &&
        vennDiagramDHZGUBPPBinding267.getComputedTextLength() >
          vennDiagramDHZGUBPPBinding258 &&
        (vennDiagramDHZGUBPPBinding263.pop(),
        (vennDiagramDHZGUBPPBinding267.textContent =
          vennDiagramDHZGUBPPBinding263.join(" ")),
        (vennDiagramDHZGUBPPBinding263 = [vennDiagramDHZGUBPPBinding262]),
        (vennDiagramDHZGUBPPBinding267 = vennDiagramDHZGUBPPHelper64(
          vennDiagramDHZGUBPPBinding262,
        )),
        vennDiagramDHZGUBPPBinding264++);
    }
    let vennDiagramDHZGUBPPBinding268 =
        0.35 - (vennDiagramDHZGUBPPBinding264 * 1.1) / 2,
      vennDiagramDHZGUBPPBinding269 =
        vennDiagramDHZGUBPPBinding257.getAttribute("x"),
      vennDiagramDHZGUBPPBinding270 =
        vennDiagramDHZGUBPPBinding257.getAttribute("y");
    vennDiagramDHZGUBPPBinding266.forEach((item, index) => {
      item.setAttribute("x", vennDiagramDHZGUBPPBinding269);
      item.setAttribute("y", vennDiagramDHZGUBPPBinding270);
      item.setAttribute(
        "dy",
        `${vennDiagramDHZGUBPPBinding268 + index * 1.1}em`,
      );
    });
  };
}
function vennDiagramDHZGUBPPHelper36(
  vennDiagramDHZGUBPPInput111,
  vennDiagramDHZGUBPPInput112,
  vennDiagramDHZGUBPPInput113,
) {
  let vennDiagramDHZGUBPPBinding399 =
    vennDiagramDHZGUBPPInput112[0].radius -
    vennDiagramDHZGUBPPHelper5(
      vennDiagramDHZGUBPPInput112[0],
      vennDiagramDHZGUBPPInput111,
    );
  for (
    let vennDiagramDHZGUBPPBinding504 = 1;
    vennDiagramDHZGUBPPBinding504 < vennDiagramDHZGUBPPInput112.length;
    ++vennDiagramDHZGUBPPBinding504
  ) {
    let vennDiagramDHZGUBPPBinding543 =
      vennDiagramDHZGUBPPInput112[vennDiagramDHZGUBPPBinding504].radius -
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPInput112[vennDiagramDHZGUBPPBinding504],
        vennDiagramDHZGUBPPInput111,
      );
    vennDiagramDHZGUBPPBinding543 <= vennDiagramDHZGUBPPBinding399 &&
      (vennDiagramDHZGUBPPBinding399 = vennDiagramDHZGUBPPBinding543);
  }
  for (
    let vennDiagramDHZGUBPPBinding505 = 0;
    vennDiagramDHZGUBPPBinding505 < vennDiagramDHZGUBPPInput113.length;
    ++vennDiagramDHZGUBPPBinding505
  ) {
    let vennDiagramDHZGUBPPBinding544 =
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPInput113[vennDiagramDHZGUBPPBinding505],
        vennDiagramDHZGUBPPInput111,
      ) - vennDiagramDHZGUBPPInput113[vennDiagramDHZGUBPPBinding505].radius;
    vennDiagramDHZGUBPPBinding544 <= vennDiagramDHZGUBPPBinding399 &&
      (vennDiagramDHZGUBPPBinding399 = vennDiagramDHZGUBPPBinding544);
  }
  return vennDiagramDHZGUBPPBinding399;
}
function vennDiagramDHZGUBPPHelper37(
  vennDiagramDHZGUBPPInput44,
  vennDiagramDHZGUBPPInput45,
  vennDiagramDHZGUBPPInput46,
) {
  let vennDiagramDHZGUBPPBinding234 = [];
  for (let vennDiagramDHZGUBPPBinding412 of vennDiagramDHZGUBPPInput44) {
    vennDiagramDHZGUBPPBinding234.push({
      x: vennDiagramDHZGUBPPBinding412.x,
      y: vennDiagramDHZGUBPPBinding412.y,
    });
    vennDiagramDHZGUBPPBinding234.push({
      x:
        vennDiagramDHZGUBPPBinding412.x +
        vennDiagramDHZGUBPPBinding412.radius / 2,
      y: vennDiagramDHZGUBPPBinding412.y,
    });
    vennDiagramDHZGUBPPBinding234.push({
      x:
        vennDiagramDHZGUBPPBinding412.x -
        vennDiagramDHZGUBPPBinding412.radius / 2,
      y: vennDiagramDHZGUBPPBinding412.y,
    });
    vennDiagramDHZGUBPPBinding234.push({
      x: vennDiagramDHZGUBPPBinding412.x,
      y:
        vennDiagramDHZGUBPPBinding412.y +
        vennDiagramDHZGUBPPBinding412.radius / 2,
    });
    vennDiagramDHZGUBPPBinding234.push({
      x: vennDiagramDHZGUBPPBinding412.x,
      y:
        vennDiagramDHZGUBPPBinding412.y -
        vennDiagramDHZGUBPPBinding412.radius / 2,
    });
  }
  let vennDiagramDHZGUBPPBinding235 = vennDiagramDHZGUBPPBinding234[0],
    vennDiagramDHZGUBPPBinding236 = vennDiagramDHZGUBPPHelper36(
      vennDiagramDHZGUBPPBinding234[0],
      vennDiagramDHZGUBPPInput44,
      vennDiagramDHZGUBPPInput45,
    );
  for (
    let vennDiagramDHZGUBPPBinding498 = 1;
    vennDiagramDHZGUBPPBinding498 < vennDiagramDHZGUBPPBinding234.length;
    ++vennDiagramDHZGUBPPBinding498
  ) {
    let vennDiagramDHZGUBPPBinding541 = vennDiagramDHZGUBPPHelper36(
      vennDiagramDHZGUBPPBinding234[vennDiagramDHZGUBPPBinding498],
      vennDiagramDHZGUBPPInput44,
      vennDiagramDHZGUBPPInput45,
    );
    vennDiagramDHZGUBPPBinding541 >= vennDiagramDHZGUBPPBinding236 &&
      ((vennDiagramDHZGUBPPBinding235 =
        vennDiagramDHZGUBPPBinding234[vennDiagramDHZGUBPPBinding498]),
      (vennDiagramDHZGUBPPBinding236 = vennDiagramDHZGUBPPBinding541));
  }
  let vennDiagramDHZGUBPPBinding237 = vennDiagramDHZGUBPPHelper16(
      (vennDiagramDHZGUBPPInput216) =>
        -1 *
        vennDiagramDHZGUBPPHelper36(
          {
            x: vennDiagramDHZGUBPPInput216[0],
            y: vennDiagramDHZGUBPPInput216[1],
          },
          vennDiagramDHZGUBPPInput44,
          vennDiagramDHZGUBPPInput45,
        ),
      [vennDiagramDHZGUBPPBinding235.x, vennDiagramDHZGUBPPBinding235.y],
      {
        maxIterations: 500,
        minErrorDelta: 1e-10,
      },
    ).x,
    vennDiagramDHZGUBPPBinding238 = {
      x: vennDiagramDHZGUBPPInput46 ? 0 : vennDiagramDHZGUBPPBinding237[0],
      y: vennDiagramDHZGUBPPBinding237[1],
    },
    vennDiagramDHZGUBPPBinding239 = true;
  for (let vennDiagramDHZGUBPPBinding531 of vennDiagramDHZGUBPPInput44)
    if (
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPBinding238,
        vennDiagramDHZGUBPPBinding531,
      ) > vennDiagramDHZGUBPPBinding531.radius
    ) {
      vennDiagramDHZGUBPPBinding239 = false;
      break;
    }
  for (let vennDiagramDHZGUBPPBinding532 of vennDiagramDHZGUBPPInput45)
    if (
      vennDiagramDHZGUBPPHelper5(
        vennDiagramDHZGUBPPBinding238,
        vennDiagramDHZGUBPPBinding532,
      ) < vennDiagramDHZGUBPPBinding532.radius
    ) {
      vennDiagramDHZGUBPPBinding239 = false;
      break;
    }
  if (vennDiagramDHZGUBPPBinding239) return vennDiagramDHZGUBPPBinding238;
  if (vennDiagramDHZGUBPPInput44.length == 1)
    return {
      x: vennDiagramDHZGUBPPInput44[0].x,
      y: vennDiagramDHZGUBPPInput44[0].y,
    };
  let vennDiagramDHZGUBPPBinding240 = {};
  return (
    vennDiagramDHZGUBPPHelper1(
      vennDiagramDHZGUBPPInput44,
      vennDiagramDHZGUBPPBinding240,
    ),
    vennDiagramDHZGUBPPBinding240.arcs.length === 0
      ? {
          x: 0,
          y: -1000,
          disjoint: true,
        }
      : vennDiagramDHZGUBPPBinding240.arcs.length == 1
        ? {
            x: vennDiagramDHZGUBPPBinding240.arcs[0].circle.x,
            y: vennDiagramDHZGUBPPBinding240.arcs[0].circle.y,
          }
        : vennDiagramDHZGUBPPInput45.length
          ? vennDiagramDHZGUBPPHelper37(vennDiagramDHZGUBPPInput44, [])
          : vennDiagramDHZGUBPPHelper8(
              vennDiagramDHZGUBPPBinding240.arcs.map((item) => item.p1),
            )
  );
}
function vennDiagramDHZGUBPPHelper38(vennDiagramDHZGUBPPInput100) {
  let vennDiagramDHZGUBPPBinding375 = {},
    vennDiagramDHZGUBPPBinding376 = Object.keys(vennDiagramDHZGUBPPInput100);
  for (let vennDiagramDHZGUBPPBinding565 of vennDiagramDHZGUBPPBinding376)
    vennDiagramDHZGUBPPBinding375[vennDiagramDHZGUBPPBinding565] = [];
  for (
    let vennDiagramDHZGUBPPBinding395 = 0;
    vennDiagramDHZGUBPPBinding395 < vennDiagramDHZGUBPPBinding376.length;
    vennDiagramDHZGUBPPBinding395++
  ) {
    let vennDiagramDHZGUBPPBinding400 =
        vennDiagramDHZGUBPPBinding376[vennDiagramDHZGUBPPBinding395],
      vennDiagramDHZGUBPPBinding401 =
        vennDiagramDHZGUBPPInput100[vennDiagramDHZGUBPPBinding400];
    for (
      let vennDiagramDHZGUBPPBinding416 = vennDiagramDHZGUBPPBinding395 + 1;
      vennDiagramDHZGUBPPBinding416 < vennDiagramDHZGUBPPBinding376.length;
      ++vennDiagramDHZGUBPPBinding416
    ) {
      let vennDiagramDHZGUBPPBinding441 =
          vennDiagramDHZGUBPPBinding376[vennDiagramDHZGUBPPBinding416],
        vennDiagramDHZGUBPPBinding442 =
          vennDiagramDHZGUBPPInput100[vennDiagramDHZGUBPPBinding441],
        vennDiagramDHZGUBPPBinding443 = vennDiagramDHZGUBPPHelper5(
          vennDiagramDHZGUBPPBinding401,
          vennDiagramDHZGUBPPBinding442,
        );
      vennDiagramDHZGUBPPBinding443 + vennDiagramDHZGUBPPBinding442.radius <=
      vennDiagramDHZGUBPPBinding401.radius + 1e-10
        ? vennDiagramDHZGUBPPBinding375[vennDiagramDHZGUBPPBinding441].push(
            vennDiagramDHZGUBPPBinding400,
          )
        : vennDiagramDHZGUBPPBinding443 +
            vennDiagramDHZGUBPPBinding401.radius <=
            vennDiagramDHZGUBPPBinding442.radius + 1e-10 &&
          vennDiagramDHZGUBPPBinding375[vennDiagramDHZGUBPPBinding400].push(
            vennDiagramDHZGUBPPBinding441,
          );
    }
  }
  return vennDiagramDHZGUBPPBinding375;
}
function vennDiagramDHZGUBPPHelper39(
  vennDiagramDHZGUBPPInput86,
  vennDiagramDHZGUBPPInput87,
  vennDiagramDHZGUBPPInput88,
) {
  let vennDiagramDHZGUBPPBinding323 = {},
    vennDiagramDHZGUBPPBinding324 = vennDiagramDHZGUBPPHelper38(
      vennDiagramDHZGUBPPInput86,
    );
  for (
    let vennDiagramDHZGUBPPBinding337 = 0;
    vennDiagramDHZGUBPPBinding337 < vennDiagramDHZGUBPPInput87.length;
    ++vennDiagramDHZGUBPPBinding337
  ) {
    let vennDiagramDHZGUBPPBinding343 =
        vennDiagramDHZGUBPPInput87[vennDiagramDHZGUBPPBinding337].sets,
      vennDiagramDHZGUBPPBinding344 = {},
      vennDiagramDHZGUBPPBinding345 = {};
    for (
      let vennDiagramDHZGUBPPBinding467 = 0;
      vennDiagramDHZGUBPPBinding467 < vennDiagramDHZGUBPPBinding343.length;
      ++vennDiagramDHZGUBPPBinding467
    ) {
      vennDiagramDHZGUBPPBinding344[
        vennDiagramDHZGUBPPBinding343[vennDiagramDHZGUBPPBinding467]
      ] = true;
      let vennDiagramDHZGUBPPBinding497 =
        vennDiagramDHZGUBPPBinding324[
          vennDiagramDHZGUBPPBinding343[vennDiagramDHZGUBPPBinding467]
        ];
      for (
        let vennDiagramDHZGUBPPBinding555 = 0;
        vennDiagramDHZGUBPPBinding555 < vennDiagramDHZGUBPPBinding497.length;
        ++vennDiagramDHZGUBPPBinding555
      )
        vennDiagramDHZGUBPPBinding345[
          vennDiagramDHZGUBPPBinding497[vennDiagramDHZGUBPPBinding555]
        ] = true;
    }
    let vennDiagramDHZGUBPPBinding346 = [],
      vennDiagramDHZGUBPPBinding347 = [];
    for (let vennDiagramDHZGUBPPBinding545 in vennDiagramDHZGUBPPInput86)
      vennDiagramDHZGUBPPBinding545 in vennDiagramDHZGUBPPBinding344
        ? vennDiagramDHZGUBPPBinding346.push(
            vennDiagramDHZGUBPPInput86[vennDiagramDHZGUBPPBinding545],
          )
        : vennDiagramDHZGUBPPBinding545 in vennDiagramDHZGUBPPBinding345 ||
          vennDiagramDHZGUBPPBinding347.push(
            vennDiagramDHZGUBPPInput86[vennDiagramDHZGUBPPBinding545],
          );
    let vennDiagramDHZGUBPPBinding348 = vennDiagramDHZGUBPPHelper37(
      vennDiagramDHZGUBPPBinding346,
      vennDiagramDHZGUBPPBinding347,
      vennDiagramDHZGUBPPInput88,
    );
    vennDiagramDHZGUBPPBinding323[vennDiagramDHZGUBPPBinding343] =
      vennDiagramDHZGUBPPBinding348;
    vennDiagramDHZGUBPPBinding348.disjoint &&
      vennDiagramDHZGUBPPInput87[vennDiagramDHZGUBPPBinding337].size > 0 &&
      console.log(
        "WARNING: area " +
          vennDiagramDHZGUBPPBinding343 +
          " not represented on screen",
      );
  }
  return vennDiagramDHZGUBPPBinding323;
}
function vennDiagramDHZGUBPPHelper40(
  vennDiagramDHZGUBPPInput108,
  vennDiagramDHZGUBPPInput109,
  vennDiagramDHZGUBPPInput110,
) {
  let vennDiagramDHZGUBPPBinding383 = [];
  return (
    vennDiagramDHZGUBPPBinding383.push(
      "\nM",
      vennDiagramDHZGUBPPInput108,
      vennDiagramDHZGUBPPInput109,
    ),
    vennDiagramDHZGUBPPBinding383.push("\nm", -vennDiagramDHZGUBPPInput110, 0),
    vennDiagramDHZGUBPPBinding383.push(
      "\na",
      vennDiagramDHZGUBPPInput110,
      vennDiagramDHZGUBPPInput110,
      0,
      1,
      0,
      vennDiagramDHZGUBPPInput110 * 2,
      0,
    ),
    vennDiagramDHZGUBPPBinding383.push(
      "\na",
      vennDiagramDHZGUBPPInput110,
      vennDiagramDHZGUBPPInput110,
      0,
      1,
      0,
      -vennDiagramDHZGUBPPInput110 * 2,
      0,
    ),
    vennDiagramDHZGUBPPBinding383.join(" ")
  );
}
function vennDiagramDHZGUBPPHelper41(vennDiagramDHZGUBPPInput131) {
  let vennDiagramDHZGUBPPBinding456 = vennDiagramDHZGUBPPInput131.split(" ");
  return {
    x: Number.parseFloat(vennDiagramDHZGUBPPBinding456[1]),
    y: Number.parseFloat(vennDiagramDHZGUBPPBinding456[2]),
    radius: -Number.parseFloat(vennDiagramDHZGUBPPBinding456[4]),
  };
}
function vennDiagramDHZGUBPPHelper42(vennDiagramDHZGUBPPInput173) {
  if (vennDiagramDHZGUBPPInput173.length === 0) return [];
  let vennDiagramDHZGUBPPBinding520 = {};
  return (
    vennDiagramDHZGUBPPHelper1(
      vennDiagramDHZGUBPPInput173,
      vennDiagramDHZGUBPPBinding520,
    ),
    vennDiagramDHZGUBPPBinding520.arcs
  );
}
function vennDiagramDHZGUBPPHelper43(
  vennDiagramDHZGUBPPInput89,
  vennDiagramDHZGUBPPInput90,
) {
  if (vennDiagramDHZGUBPPInput89.length === 0) return "M 0 0";
  let vennDiagramDHZGUBPPBinding333 = 10 ** (vennDiagramDHZGUBPPInput90 || 0),
    vennDiagramDHZGUBPPBinding334 =
      vennDiagramDHZGUBPPInput90 == null
        ? (vennDiagramDHZGUBPPInput244) => vennDiagramDHZGUBPPInput244
        : (vennDiagramDHZGUBPPInput225) =>
            Math.round(
              vennDiagramDHZGUBPPInput225 * vennDiagramDHZGUBPPBinding333,
            ) / vennDiagramDHZGUBPPBinding333;
  if (vennDiagramDHZGUBPPInput89.length == 1) {
    let vennDiagramDHZGUBPPBinding536 = vennDiagramDHZGUBPPInput89[0].circle;
    return vennDiagramDHZGUBPPHelper40(
      vennDiagramDHZGUBPPBinding334(vennDiagramDHZGUBPPBinding536.x),
      vennDiagramDHZGUBPPBinding334(vennDiagramDHZGUBPPBinding536.y),
      vennDiagramDHZGUBPPBinding334(vennDiagramDHZGUBPPBinding536.radius),
    );
  }
  let vennDiagramDHZGUBPPBinding335 = [
    "\nM",
    vennDiagramDHZGUBPPBinding334(vennDiagramDHZGUBPPInput89[0].p2.x),
    vennDiagramDHZGUBPPBinding334(vennDiagramDHZGUBPPInput89[0].p2.y),
  ];
  for (let vennDiagramDHZGUBPPBinding445 of vennDiagramDHZGUBPPInput89) {
    let vennDiagramDHZGUBPPBinding452 = vennDiagramDHZGUBPPBinding334(
      vennDiagramDHZGUBPPBinding445.circle.radius,
    );
    vennDiagramDHZGUBPPBinding335.push(
      "\nA",
      vennDiagramDHZGUBPPBinding452,
      vennDiagramDHZGUBPPBinding452,
      0,
      +!!vennDiagramDHZGUBPPBinding445.large,
      +!!vennDiagramDHZGUBPPBinding445.sweep,
      vennDiagramDHZGUBPPBinding334(vennDiagramDHZGUBPPBinding445.p1.x),
      vennDiagramDHZGUBPPBinding334(vennDiagramDHZGUBPPBinding445.p1.y),
    );
  }
  return vennDiagramDHZGUBPPBinding335.join(" ");
}
function vennDiagramDHZGUBPPHelper44(
  vennDiagramDHZGUBPPInput212,
  vennDiagramDHZGUBPPInput213,
) {
  return vennDiagramDHZGUBPPHelper43(
    vennDiagramDHZGUBPPHelper42(vennDiagramDHZGUBPPInput212),
    vennDiagramDHZGUBPPInput213,
  );
}
function vennDiagramDHZGUBPPHelper45(
  vennDiagramDHZGUBPPInput36,
  vennDiagramDHZGUBPPInput37 = {},
) {
  let {
      lossFunction,
      layoutFunction = vennDiagramDHZGUBPPHelper19,
      normalize = true,
      orientation = Math.PI / 2,
      orientationOrder,
      width = 600,
      height = 350,
      padding = 15,
      scaleToFit = false,
      symmetricalTextCentre = false,
      distinct,
      round = 2,
    } = vennDiagramDHZGUBPPInput37,
    vennDiagramDHZGUBPPBinding206 = layoutFunction(vennDiagramDHZGUBPPInput36, {
      lossFunction:
        lossFunction === "default" || !lossFunction
          ? vennDiagramDHZGUBPPHelper27
          : lossFunction === "logRatio"
            ? vennDiagramDHZGUBPPHelper28
            : lossFunction,
      distinct,
    });
  normalize &&
    (vennDiagramDHZGUBPPBinding206 = vennDiagramDHZGUBPPHelper32(
      vennDiagramDHZGUBPPBinding206,
      orientation,
      orientationOrder,
    ));
  let vennDiagramDHZGUBPPBinding207 = _e(
      vennDiagramDHZGUBPPBinding206,
      width,
      height,
      padding,
      scaleToFit,
    ),
    vennDiagramDHZGUBPPBinding208 = vennDiagramDHZGUBPPHelper39(
      vennDiagramDHZGUBPPBinding207,
      vennDiagramDHZGUBPPInput36,
      symmetricalTextCentre,
    ),
    vennDiagramDHZGUBPPBinding209 = new Map(
      Object.keys(vennDiagramDHZGUBPPBinding207).map((item) => [
        item,
        {
          set: item,
          x: vennDiagramDHZGUBPPBinding207[item].x,
          y: vennDiagramDHZGUBPPBinding207[item].y,
          radius: vennDiagramDHZGUBPPBinding207[item].radius,
        },
      ]),
    ),
    vennDiagramDHZGUBPPBinding210 = vennDiagramDHZGUBPPInput36.map((item) => {
      let vennDiagramDHZGUBPPBinding422 = item.sets.map((_item) =>
          vennDiagramDHZGUBPPBinding209.get(_item),
        ),
        vennDiagramDHZGUBPPBinding423 = vennDiagramDHZGUBPPHelper42(
          vennDiagramDHZGUBPPBinding422,
        );
      return {
        circles: vennDiagramDHZGUBPPBinding422,
        arcs: vennDiagramDHZGUBPPBinding423,
        path: vennDiagramDHZGUBPPHelper43(vennDiagramDHZGUBPPBinding423, round),
        area: item,
        has: new Set(item.sets),
      };
    });
  function vennDiagramDHZGUBPPHelper61(vennDiagramDHZGUBPPInput130) {
    let vennDiagramDHZGUBPPBinding451 = "";
    for (let vennDiagramDHZGUBPPBinding490 of vennDiagramDHZGUBPPBinding210)
      vennDiagramDHZGUBPPBinding490.has.size >
        vennDiagramDHZGUBPPInput130.length &&
        vennDiagramDHZGUBPPInput130.every((item) =>
          vennDiagramDHZGUBPPBinding490.has.has(item),
        ) &&
        (vennDiagramDHZGUBPPBinding451 +=
          " " + vennDiagramDHZGUBPPBinding490.path);
    return vennDiagramDHZGUBPPBinding451;
  }
  return vennDiagramDHZGUBPPBinding210.map(({ circles, arcs, path, area }) => ({
    data: area,
    text: vennDiagramDHZGUBPPBinding208[area.sets],
    circles,
    arcs,
    path,
    distinctPath: path + vennDiagramDHZGUBPPHelper61(area.sets),
  }));
}
var vennDiagramDHZGUBPPBinding1,
  vennDiagramDHZGUBPPBinding2,
  vennDiagramDHZGUBPPBinding3 = esmInit(() => {
    vennDiagramDHZGUBPPBinding1 = 1e-10;
    vennDiagramDHZGUBPPBinding2 = 1e-10;
  });
function vennDiagramDHZGUBPPHelper46() {
  return chunk5PVQY5BWR(vennDiagramDHZGUBPPBinding24, y().venn);
}
function vennDiagramDHZGUBPPHelper47(vennDiagramDHZGUBPPInput125) {
  let vennDiagramDHZGUBPPBinding436 = new Map();
  for (let vennDiagramDHZGUBPPBinding468 of vennDiagramDHZGUBPPInput125) {
    let vennDiagramDHZGUBPPBinding487 =
        vennDiagramDHZGUBPPBinding468.targets.join("|"),
      vennDiagramDHZGUBPPBinding488 = vennDiagramDHZGUBPPBinding436.get(
        vennDiagramDHZGUBPPBinding487,
      );
    vennDiagramDHZGUBPPBinding488
      ? Object.assign(
          vennDiagramDHZGUBPPBinding488,
          vennDiagramDHZGUBPPBinding468.styles,
        )
      : vennDiagramDHZGUBPPBinding436.set(vennDiagramDHZGUBPPBinding487, {
          ...vennDiagramDHZGUBPPBinding468.styles,
        });
  }
  return vennDiagramDHZGUBPPBinding436;
}
function vennDiagramDHZGUBPPHelper48(vennDiagramDHZGUBPPInput219) {
  return vennDiagramDHZGUBPPInput219.join("|");
}
function vennDiagramDHZGUBPPHelper49(
  vennDiagramDHZGUBPPInput15,
  vennDiagramDHZGUBPPInput16,
  vennDiagramDHZGUBPPInput17,
  vennDiagramDHZGUBPPInput18,
  vennDiagramDHZGUBPPInput19,
  vennDiagramDHZGUBPPInput20,
) {
  let vennDiagramDHZGUBPPBinding134 =
      vennDiagramDHZGUBPPInput15?.useDebugLayout ?? false,
    vennDiagramDHZGUBPPBinding135 = vennDiagramDHZGUBPPInput17
      .select("svg")
      .append("g")
      .attr("class", "venn-text-nodes"),
    vennDiagramDHZGUBPPBinding136 = new Map();
  for (let vennDiagramDHZGUBPPBinding507 of vennDiagramDHZGUBPPInput18) {
    let vennDiagramDHZGUBPPBinding528 = vennDiagramDHZGUBPPHelper48(
        vennDiagramDHZGUBPPBinding507.sets,
      ),
      vennDiagramDHZGUBPPBinding529 = vennDiagramDHZGUBPPBinding136.get(
        vennDiagramDHZGUBPPBinding528,
      );
    vennDiagramDHZGUBPPBinding529
      ? vennDiagramDHZGUBPPBinding529.push(vennDiagramDHZGUBPPBinding507)
      : vennDiagramDHZGUBPPBinding136.set(vennDiagramDHZGUBPPBinding528, [
          vennDiagramDHZGUBPPBinding507,
        ]);
  }
  for (let [
    vennDiagramDHZGUBPPBinding137,
    vennDiagramDHZGUBPPBinding138,
  ] of vennDiagramDHZGUBPPBinding136.entries()) {
    let vennDiagramDHZGUBPPBinding139 = vennDiagramDHZGUBPPInput16.get(
      vennDiagramDHZGUBPPBinding137,
    );
    if (!vennDiagramDHZGUBPPBinding139?.text) continue;
    let vennDiagramDHZGUBPPBinding140 = vennDiagramDHZGUBPPBinding139.text.x,
      vennDiagramDHZGUBPPBinding141 = vennDiagramDHZGUBPPBinding139.text.y,
      vennDiagramDHZGUBPPBinding142 = Math.min(
        ...vennDiagramDHZGUBPPBinding139.circles.map((item) => item.radius),
      ),
      vennDiagramDHZGUBPPBinding143 = Math.min(
        ...vennDiagramDHZGUBPPBinding139.circles.map(
          (item) =>
            item.radius -
            Math.hypot(
              vennDiagramDHZGUBPPBinding140 - item.x,
              vennDiagramDHZGUBPPBinding141 - item.y,
            ),
        ),
      ),
      vennDiagramDHZGUBPPBinding144 = Number.isFinite(
        vennDiagramDHZGUBPPBinding143,
      )
        ? Math.max(0, vennDiagramDHZGUBPPBinding143)
        : 0;
    vennDiagramDHZGUBPPBinding144 === 0 &&
      Number.isFinite(vennDiagramDHZGUBPPBinding142) &&
      (vennDiagramDHZGUBPPBinding144 = vennDiagramDHZGUBPPBinding142 * 0.6);
    let vennDiagramDHZGUBPPBinding145 = vennDiagramDHZGUBPPBinding135
      .append("g")
      .attr("class", "venn-text-area")
      .attr("font-size", `${40 * vennDiagramDHZGUBPPInput19}px`);
    vennDiagramDHZGUBPPBinding134 &&
      vennDiagramDHZGUBPPBinding145
        .append("circle")
        .attr("class", "venn-text-debug-circle")
        .attr("cx", vennDiagramDHZGUBPPBinding140)
        .attr("cy", vennDiagramDHZGUBPPBinding141)
        .attr("r", vennDiagramDHZGUBPPBinding144)
        .attr("fill", "none")
        .attr("stroke", "purple")
        .attr("stroke-width", 1.5 * vennDiagramDHZGUBPPInput19)
        .attr(
          "stroke-dasharray",
          `${6 * vennDiagramDHZGUBPPInput19} ${4 * vennDiagramDHZGUBPPInput19}`,
        );
    let vennDiagramDHZGUBPPBinding146 = Math.max(
        80 * vennDiagramDHZGUBPPInput19,
        vennDiagramDHZGUBPPBinding144 * 2 * 0.95,
      ),
      vennDiagramDHZGUBPPBinding147 = Math.max(
        60 * vennDiagramDHZGUBPPInput19,
        vennDiagramDHZGUBPPBinding144 * 2 * 0.95,
      ),
      vennDiagramDHZGUBPPBinding148 =
        (vennDiagramDHZGUBPPBinding139.data.label &&
        vennDiagramDHZGUBPPBinding139.data.label.length > 0
          ? Math.min(
              32 * vennDiagramDHZGUBPPInput19,
              vennDiagramDHZGUBPPBinding144 * 0.25,
            )
          : 0) +
        (vennDiagramDHZGUBPPBinding138.length <= 2
          ? 30 * vennDiagramDHZGUBPPInput19
          : 0),
      vennDiagramDHZGUBPPBinding149 =
        vennDiagramDHZGUBPPBinding140 - vennDiagramDHZGUBPPBinding146 / 2,
      vennDiagramDHZGUBPPBinding150 =
        vennDiagramDHZGUBPPBinding141 -
        vennDiagramDHZGUBPPBinding147 / 2 +
        vennDiagramDHZGUBPPBinding148,
      vennDiagramDHZGUBPPBinding151 = Math.max(
        1,
        Math.ceil(Math.sqrt(vennDiagramDHZGUBPPBinding138.length)),
      ),
      vennDiagramDHZGUBPPBinding152 = Math.max(
        1,
        Math.ceil(
          vennDiagramDHZGUBPPBinding138.length / vennDiagramDHZGUBPPBinding151,
        ),
      ),
      vennDiagramDHZGUBPPBinding153 =
        vennDiagramDHZGUBPPBinding146 / vennDiagramDHZGUBPPBinding151,
      vennDiagramDHZGUBPPBinding154 =
        vennDiagramDHZGUBPPBinding147 / vennDiagramDHZGUBPPBinding152;
    for (let [
      vennDiagramDHZGUBPPBinding187,
      vennDiagramDHZGUBPPBinding188,
    ] of vennDiagramDHZGUBPPBinding138.entries()) {
      let vennDiagramDHZGUBPPBinding189 =
          vennDiagramDHZGUBPPBinding187 % vennDiagramDHZGUBPPBinding151,
        vennDiagramDHZGUBPPBinding190 = Math.floor(
          vennDiagramDHZGUBPPBinding187 / vennDiagramDHZGUBPPBinding151,
        ),
        vennDiagramDHZGUBPPBinding191 =
          vennDiagramDHZGUBPPBinding149 +
          vennDiagramDHZGUBPPBinding153 * (vennDiagramDHZGUBPPBinding189 + 0.5),
        vennDiagramDHZGUBPPBinding192 =
          vennDiagramDHZGUBPPBinding150 +
          vennDiagramDHZGUBPPBinding154 * (vennDiagramDHZGUBPPBinding190 + 0.5);
      vennDiagramDHZGUBPPBinding134 &&
        vennDiagramDHZGUBPPBinding145
          .append("rect")
          .attr("class", "venn-text-debug-cell")
          .attr(
            "x",
            vennDiagramDHZGUBPPBinding149 +
              vennDiagramDHZGUBPPBinding153 * vennDiagramDHZGUBPPBinding189,
          )
          .attr(
            "y",
            vennDiagramDHZGUBPPBinding150 +
              vennDiagramDHZGUBPPBinding154 * vennDiagramDHZGUBPPBinding190,
          )
          .attr("width", vennDiagramDHZGUBPPBinding153)
          .attr("height", vennDiagramDHZGUBPPBinding154)
          .attr("fill", "none")
          .attr("stroke", "teal")
          .attr("stroke-width", vennDiagramDHZGUBPPInput19)
          .attr(
            "stroke-dasharray",
            `${4 * vennDiagramDHZGUBPPInput19} ${3 * vennDiagramDHZGUBPPInput19}`,
          );
      let vennDiagramDHZGUBPPBinding193 = vennDiagramDHZGUBPPBinding153 * 0.9,
        vennDiagramDHZGUBPPBinding194 = vennDiagramDHZGUBPPBinding154 * 0.9,
        vennDiagramDHZGUBPPBinding195 = vennDiagramDHZGUBPPBinding145
          .append("foreignObject")
          .attr("class", "venn-text-node-fo")
          .attr("width", vennDiagramDHZGUBPPBinding193)
          .attr("height", vennDiagramDHZGUBPPBinding194)
          .attr(
            "x",
            vennDiagramDHZGUBPPBinding191 - vennDiagramDHZGUBPPBinding193 / 2,
          )
          .attr(
            "y",
            vennDiagramDHZGUBPPBinding192 - vennDiagramDHZGUBPPBinding194 / 2,
          )
          .attr("overflow", "visible"),
        vennDiagramDHZGUBPPBinding196 = vennDiagramDHZGUBPPInput20.get(
          vennDiagramDHZGUBPPBinding188.id,
        )?.color,
        vennDiagramDHZGUBPPBinding197 = vennDiagramDHZGUBPPBinding195
          .append("xhtml:span")
          .attr("class", "venn-text-node")
          .style("display", "flex")
          .style("width", "100%")
          .style("height", "100%")
          .style("white-space", "normal")
          .style("align-items", "center")
          .style("justify-content", "center")
          .style("text-align", "center")
          .style("overflow-wrap", "normal")
          .style("word-break", "normal")
          .text(
            vennDiagramDHZGUBPPBinding188.label ??
              vennDiagramDHZGUBPPBinding188.id,
          );
      vennDiagramDHZGUBPPBinding196 &&
        vennDiagramDHZGUBPPBinding197.style(
          "color",
          vennDiagramDHZGUBPPBinding196,
        );
    }
  }
}
var vennDiagramDHZGUBPPBinding4,
  vennDiagramDHZGUBPPBinding5,
  vennDiagramDHZGUBPPBinding6,
  vennDiagramDHZGUBPPBinding7,
  vennDiagramDHZGUBPPBinding8,
  vennDiagramDHZGUBPPBinding9,
  vennDiagramDHZGUBPPBinding10,
  vennDiagramDHZGUBPPBinding11,
  vennDiagramDHZGUBPPBinding12,
  vennDiagramDHZGUBPPBinding13,
  vennDiagramDHZGUBPPBinding14,
  vennDiagramDHZGUBPPBinding15,
  vennDiagramDHZGUBPPBinding16,
  vennDiagramDHZGUBPPBinding17,
  vennDiagramDHZGUBPPBinding18,
  $,
  vennDiagramDHZGUBPPBinding19,
  vennDiagramDHZGUBPPBinding20,
  vennDiagramDHZGUBPPBinding21,
  vennDiagramDHZGUBPPBinding22,
  vennDiagramDHZGUBPPBinding23,
  vennDiagramDHZGUBPPBinding24,
  vennDiagramDHZGUBPPBinding25,
  vennDiagramDHZGUBPPBinding26,
  vennDiagramDHZGUBPPBinding27,
  VennDiagramDHZGUBPP;
esmInit(() => {
  chunk426QAEUCT();
  chunk5PVQY5BWU();
  A();
  initDayjsLoggerRuntime();
  ensureD3SelectionRuntimeT();
  t();
  vennDiagramDHZGUBPPBinding3();
  vennDiagramDHZGUBPPBinding4 = (function () {
    var vennDiagramDHZGUBPPBinding28 = defineFunctionName(function (
        vennDiagramDHZGUBPPInput153,
        vennDiagramDHZGUBPPInput154,
        vennDiagramDHZGUBPPInput155,
        vennDiagramDHZGUBPPInput156,
      ) {
        for (
          vennDiagramDHZGUBPPInput155 ||= {},
            vennDiagramDHZGUBPPInput156 = vennDiagramDHZGUBPPInput153.length;
          vennDiagramDHZGUBPPInput156--;
          vennDiagramDHZGUBPPInput155[
            vennDiagramDHZGUBPPInput153[vennDiagramDHZGUBPPInput156]
          ] = vennDiagramDHZGUBPPInput154
        );
        return vennDiagramDHZGUBPPInput155;
      }, "o"),
      vennDiagramDHZGUBPPBinding29 = [5, 8],
      vennDiagramDHZGUBPPBinding30 = [7, 8, 11, 12, 17, 19, 22, 24],
      vennDiagramDHZGUBPPBinding31 = [1, 17],
      vennDiagramDHZGUBPPBinding32 = [1, 18],
      vennDiagramDHZGUBPPBinding33 = [
        7, 8, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 24, 27,
      ],
      vennDiagramDHZGUBPPBinding34 = [1, 31],
      vennDiagramDHZGUBPPBinding35 = [1, 39],
      vennDiagramDHZGUBPPBinding36 = [7, 8, 11, 12, 17, 19, 22, 24, 27],
      vennDiagramDHZGUBPPBinding37 = [1, 57],
      vennDiagramDHZGUBPPBinding38 = [1, 56],
      vennDiagramDHZGUBPPBinding39 = [1, 58],
      vennDiagramDHZGUBPPBinding40 = [1, 59],
      vennDiagramDHZGUBPPBinding41 = [1, 60],
      vennDiagramDHZGUBPPBinding42 = [
        7, 8, 11, 12, 16, 17, 19, 20, 22, 24, 27, 31, 32, 33,
      ],
      vennDiagramDHZGUBPPBinding43 = {
        trace: defineFunctionName(function () {}, "trace"),
        yy: {},
        symbols_: {
          error: 2,
          start: 3,
          optNewlines: 4,
          VENN: 5,
          document: 6,
          EOF: 7,
          NEWLINE: 8,
          line: 9,
          statement: 10,
          TITLE: 11,
          SET: 12,
          identifier: 13,
          BRACKET_LABEL: 14,
          COLON: 15,
          NUMERIC: 16,
          UNION: 17,
          identifierList: 18,
          TEXT: 19,
          IDENTIFIER: 20,
          STRING: 21,
          INDENT_TEXT: 22,
          indentedTextTail: 23,
          STYLE: 24,
          stylesOpt: 25,
          styleField: 26,
          COMMA: 27,
          styleValue: 28,
          valueTokens: 29,
          valueToken: 30,
          HEXCOLOR: 31,
          RGBCOLOR: 32,
          RGBACOLOR: 33,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          5: "VENN",
          7: "EOF",
          8: "NEWLINE",
          11: "TITLE",
          12: "SET",
          14: "BRACKET_LABEL",
          15: "COLON",
          16: "NUMERIC",
          17: "UNION",
          19: "TEXT",
          20: "IDENTIFIER",
          21: "STRING",
          22: "INDENT_TEXT",
          24: "STYLE",
          27: "COMMA",
          31: "HEXCOLOR",
          32: "RGBCOLOR",
          33: "RGBACOLOR",
        },
        productions_: [
          0,
          [3, 4],
          [4, 0],
          [4, 2],
          [6, 0],
          [6, 2],
          [9, 1],
          [9, 1],
          [10, 1],
          [10, 2],
          [10, 3],
          [10, 4],
          [10, 5],
          [10, 2],
          [10, 3],
          [10, 4],
          [10, 5],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 4],
          [10, 4],
          [10, 2],
          [10, 3],
          [23, 1],
          [23, 1],
          [23, 1],
          [23, 2],
          [23, 2],
          [25, 1],
          [25, 3],
          [26, 3],
          [28, 1],
          [28, 1],
          [29, 1],
          [29, 2],
          [30, 1],
          [30, 1],
          [30, 1],
          [30, 1],
          [30, 1],
          [18, 1],
          [18, 3],
          [13, 1],
          [13, 1],
        ],
        performAction: defineFunctionName(function (
          vennDiagramDHZGUBPPInput7,
          vennDiagramDHZGUBPPInput8,
          vennDiagramDHZGUBPPInput9,
          vennDiagramDHZGUBPPInput10,
          vennDiagramDHZGUBPPInput11,
          vennDiagramDHZGUBPPInput12,
          vennDiagramDHZGUBPPInput13,
        ) {
          var vennDiagramDHZGUBPPBinding116 =
            vennDiagramDHZGUBPPInput12.length - 1;
          switch (vennDiagramDHZGUBPPInput11) {
            case 1:
              return vennDiagramDHZGUBPPInput12[
                vennDiagramDHZGUBPPBinding116 - 1
              ];
            case 2:
            case 3:
            case 4:
              this.$ = [];
              break;
            case 5:
              vennDiagramDHZGUBPPInput12[
                vennDiagramDHZGUBPPBinding116 - 1
              ].push(vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116]);
              this.$ =
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 1];
              break;
            case 6:
              this.$ = [];
              break;
            case 7:
            case 22:
            case 32:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
              this.$ =
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116];
              break;
            case 8:
              vennDiagramDHZGUBPPInput10.setDiagramTitle(
                vennDiagramDHZGUBPPInput12[
                  vennDiagramDHZGUBPPBinding116
                ].substr(6),
              );
              this.$ =
                vennDiagramDHZGUBPPInput12[
                  vennDiagramDHZGUBPPBinding116
                ].substr(6);
              break;
            case 9:
              vennDiagramDHZGUBPPInput10.addSubsetData(
                [vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116]],
                undefined,
                undefined,
              );
              vennDiagramDHZGUBPPInput10.setIndentMode &&
                vennDiagramDHZGUBPPInput10.setIndentMode(true);
              break;
            case 10:
              vennDiagramDHZGUBPPInput10.addSubsetData(
                [vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 1]],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
                undefined,
              );
              vennDiagramDHZGUBPPInput10.setIndentMode &&
                vennDiagramDHZGUBPPInput10.setIndentMode(true);
              break;
            case 11:
              vennDiagramDHZGUBPPInput10.addSubsetData(
                [vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 2]],
                undefined,
                parseFloat(
                  vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
                ),
              );
              vennDiagramDHZGUBPPInput10.setIndentMode &&
                vennDiagramDHZGUBPPInput10.setIndentMode(true);
              break;
            case 12:
              vennDiagramDHZGUBPPInput10.addSubsetData(
                [vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 3]],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 2],
                parseFloat(
                  vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
                ),
              );
              vennDiagramDHZGUBPPInput10.setIndentMode &&
                vennDiagramDHZGUBPPInput10.setIndentMode(true);
              break;
            case 13:
              if (
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116]
                  .length < 2
              )
                throw Error("union requires multiple identifiers");
              vennDiagramDHZGUBPPInput10.validateUnionIdentifiers &&
                vennDiagramDHZGUBPPInput10.validateUnionIdentifiers(
                  vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
                );
              vennDiagramDHZGUBPPInput10.addSubsetData(
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
                undefined,
                undefined,
              );
              vennDiagramDHZGUBPPInput10.setIndentMode &&
                vennDiagramDHZGUBPPInput10.setIndentMode(true);
              break;
            case 14:
              if (
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 1]
                  .length < 2
              )
                throw Error("union requires multiple identifiers");
              vennDiagramDHZGUBPPInput10.validateUnionIdentifiers &&
                vennDiagramDHZGUBPPInput10.validateUnionIdentifiers(
                  vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 1],
                );
              vennDiagramDHZGUBPPInput10.addSubsetData(
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 1],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
                undefined,
              );
              vennDiagramDHZGUBPPInput10.setIndentMode &&
                vennDiagramDHZGUBPPInput10.setIndentMode(true);
              break;
            case 15:
              if (
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 2]
                  .length < 2
              )
                throw Error("union requires multiple identifiers");
              vennDiagramDHZGUBPPInput10.validateUnionIdentifiers &&
                vennDiagramDHZGUBPPInput10.validateUnionIdentifiers(
                  vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 2],
                );
              vennDiagramDHZGUBPPInput10.addSubsetData(
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 2],
                undefined,
                parseFloat(
                  vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
                ),
              );
              vennDiagramDHZGUBPPInput10.setIndentMode &&
                vennDiagramDHZGUBPPInput10.setIndentMode(true);
              break;
            case 16:
              if (
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 3]
                  .length < 2
              )
                throw Error("union requires multiple identifiers");
              vennDiagramDHZGUBPPInput10.validateUnionIdentifiers &&
                vennDiagramDHZGUBPPInput10.validateUnionIdentifiers(
                  vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 3],
                );
              vennDiagramDHZGUBPPInput10.addSubsetData(
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 3],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 2],
                parseFloat(
                  vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
                ),
              );
              vennDiagramDHZGUBPPInput10.setIndentMode &&
                vennDiagramDHZGUBPPInput10.setIndentMode(true);
              break;
            case 17:
            case 18:
            case 19:
              vennDiagramDHZGUBPPInput10.addTextData(
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 1],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
                undefined,
              );
              break;
            case 20:
            case 21:
              vennDiagramDHZGUBPPInput10.addTextData(
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 2],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 1],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
              );
              break;
            case 23:
              vennDiagramDHZGUBPPInput10.addStyleData(
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 1],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
              );
              break;
            case 24:
            case 25:
            case 26:
              var vennDiagramDHZGUBPPBinding117 =
                vennDiagramDHZGUBPPInput10.getCurrentSets();
              if (!vennDiagramDHZGUBPPBinding117)
                throw Error("text requires set");
              vennDiagramDHZGUBPPInput10.addTextData(
                vennDiagramDHZGUBPPBinding117,
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
                undefined,
              );
              break;
            case 27:
            case 28:
              var vennDiagramDHZGUBPPBinding117 =
                vennDiagramDHZGUBPPInput10.getCurrentSets();
              if (!vennDiagramDHZGUBPPBinding117)
                throw Error("text requires set");
              vennDiagramDHZGUBPPInput10.addTextData(
                vennDiagramDHZGUBPPBinding117,
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 1],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
              );
              break;
            case 29:
            case 41:
              this.$ = [
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
              ];
              break;
            case 30:
            case 42:
              this.$ = [
                ...vennDiagramDHZGUBPPInput12[
                  vennDiagramDHZGUBPPBinding116 - 2
                ],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
              ];
              break;
            case 31:
              this.$ = [
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 2],
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
              ];
              break;
            case 33:
              this.$ =
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116].join(
                  " ",
                );
              break;
            case 34:
              this.$ = [
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116],
              ];
              break;
            case 35:
              vennDiagramDHZGUBPPInput12[
                vennDiagramDHZGUBPPBinding116 - 1
              ].push(vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116]);
              this.$ =
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116 - 1];
              break;
            case 43:
            case 44:
              this.$ =
                vennDiagramDHZGUBPPInput12[vennDiagramDHZGUBPPBinding116];
              break;
          }
        }, "anonymous"),
        table: [
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding29, [2, 2], {
            3: 1,
            4: 2,
          }),
          {
            1: [3],
          },
          {
            5: [1, 3],
            8: [1, 4],
          },
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 4], {
            6: 5,
          }),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding29, [2, 3]),
          {
            7: [1, 6],
            8: [1, 8],
            9: 7,
            10: 9,
            11: [1, 10],
            12: [1, 11],
            17: [1, 12],
            19: [1, 13],
            22: [1, 14],
            24: [1, 15],
          },
          {
            1: [2, 1],
          },
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 5]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 6]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 7]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 8]),
          {
            13: 16,
            20: vennDiagramDHZGUBPPBinding31,
            21: vennDiagramDHZGUBPPBinding32,
          },
          {
            13: 20,
            18: 19,
            20: vennDiagramDHZGUBPPBinding31,
            21: vennDiagramDHZGUBPPBinding32,
          },
          {
            13: 20,
            18: 21,
            20: vennDiagramDHZGUBPPBinding31,
            21: vennDiagramDHZGUBPPBinding32,
          },
          {
            16: [1, 25],
            20: [1, 23],
            21: [1, 24],
            23: 22,
          },
          {
            13: 20,
            18: 26,
            20: vennDiagramDHZGUBPPBinding31,
            21: vennDiagramDHZGUBPPBinding32,
          },
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 9], {
            14: [1, 27],
            15: [1, 28],
          }),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding33, [2, 43]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding33, [2, 44]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 13], {
            14: [1, 29],
            15: [1, 30],
            27: vennDiagramDHZGUBPPBinding34,
          }),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding33, [2, 41]),
          {
            16: [1, 34],
            20: [1, 32],
            21: [1, 33],
            27: vennDiagramDHZGUBPPBinding34,
          },
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 22]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 24], {
            14: [1, 35],
          }),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 25], {
            14: [1, 36],
          }),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 26]),
          {
            20: vennDiagramDHZGUBPPBinding35,
            25: 37,
            26: 38,
            27: vennDiagramDHZGUBPPBinding34,
          },
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 10], {
            15: [1, 40],
          }),
          {
            16: [1, 41],
          },
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 14], {
            15: [1, 42],
          }),
          {
            16: [1, 43],
          },
          {
            13: 44,
            20: vennDiagramDHZGUBPPBinding31,
            21: vennDiagramDHZGUBPPBinding32,
          },
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 17], {
            14: [1, 45],
          }),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 18], {
            14: [1, 46],
          }),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 19]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 27]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 28]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 23], {
            27: [1, 47],
          }),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding36, [2, 29]),
          {
            15: [1, 48],
          },
          {
            16: [1, 49],
          },
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 11]),
          {
            16: [1, 50],
          },
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 15]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding33, [2, 42]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 20]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 21]),
          {
            20: vennDiagramDHZGUBPPBinding35,
            26: 51,
          },
          {
            16: vennDiagramDHZGUBPPBinding37,
            20: vennDiagramDHZGUBPPBinding38,
            21: [1, 53],
            28: 52,
            29: 54,
            30: 55,
            31: vennDiagramDHZGUBPPBinding39,
            32: vennDiagramDHZGUBPPBinding40,
            33: vennDiagramDHZGUBPPBinding41,
          },
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 12]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding30, [2, 16]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding36, [2, 30]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding36, [2, 31]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding36, [2, 32]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding36, [2, 33], {
            30: 61,
            16: vennDiagramDHZGUBPPBinding37,
            20: vennDiagramDHZGUBPPBinding38,
            31: vennDiagramDHZGUBPPBinding39,
            32: vennDiagramDHZGUBPPBinding40,
            33: vennDiagramDHZGUBPPBinding41,
          }),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding42, [2, 34]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding42, [2, 36]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding42, [2, 37]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding42, [2, 38]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding42, [2, 39]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding42, [2, 40]),
          vennDiagramDHZGUBPPBinding28(vennDiagramDHZGUBPPBinding42, [2, 35]),
        ],
        defaultActions: {
          6: [2, 1],
        },
        parseError: defineFunctionName(function (
          vennDiagramDHZGUBPPInput128,
          vennDiagramDHZGUBPPInput129,
        ) {
          if (vennDiagramDHZGUBPPInput129.recoverable)
            this.trace(vennDiagramDHZGUBPPInput128);
          else {
            var vennDiagramDHZGUBPPBinding447 = Error(
              vennDiagramDHZGUBPPInput128,
            );
            throw (
              (vennDiagramDHZGUBPPBinding447.hash =
                vennDiagramDHZGUBPPInput129),
              vennDiagramDHZGUBPPBinding447
            );
          }
        }, "parseError"),
        parse: defineFunctionName(function (vennDiagramDHZGUBPPInput2) {
          var vennDiagramDHZGUBPPBinding65 = this,
            vennDiagramDHZGUBPPBinding66 = [0],
            vennDiagramDHZGUBPPBinding67 = [],
            vennDiagramDHZGUBPPBinding68 = [null],
            vennDiagramDHZGUBPPBinding69 = [],
            vennDiagramDHZGUBPPBinding70 = this.table,
            vennDiagramDHZGUBPPBinding71 = "",
            vennDiagramDHZGUBPPBinding72 = 0,
            vennDiagramDHZGUBPPBinding73 = 0,
            vennDiagramDHZGUBPPBinding74 = 0,
            vennDiagramDHZGUBPPBinding77 =
              vennDiagramDHZGUBPPBinding69.slice.call(arguments, 1),
            vennDiagramDHZGUBPPBinding78 = Object.create(this.lexer),
            vennDiagramDHZGUBPPBinding79 = {
              yy: {},
            };
          for (var vennDiagramDHZGUBPPBinding80 in this.yy)
            Object.prototype.hasOwnProperty.call(
              this.yy,
              vennDiagramDHZGUBPPBinding80,
            ) &&
              (vennDiagramDHZGUBPPBinding79.yy[vennDiagramDHZGUBPPBinding80] =
                this.yy[vennDiagramDHZGUBPPBinding80]);
          vennDiagramDHZGUBPPBinding78.setInput(
            vennDiagramDHZGUBPPInput2,
            vennDiagramDHZGUBPPBinding79.yy,
          );
          vennDiagramDHZGUBPPBinding79.yy.lexer = vennDiagramDHZGUBPPBinding78;
          vennDiagramDHZGUBPPBinding79.yy.parser = this;
          vennDiagramDHZGUBPPBinding78.yylloc === undefined &&
            (vennDiagramDHZGUBPPBinding78.yylloc = {});
          var vennDiagramDHZGUBPPBinding81 =
            vennDiagramDHZGUBPPBinding78.yylloc;
          vennDiagramDHZGUBPPBinding69.push(vennDiagramDHZGUBPPBinding81);
          var vennDiagramDHZGUBPPBinding82 =
            vennDiagramDHZGUBPPBinding78.options &&
            vennDiagramDHZGUBPPBinding78.options.ranges;
          typeof vennDiagramDHZGUBPPBinding79.yy.parseError == "function"
            ? (this.parseError = vennDiagramDHZGUBPPBinding79.yy.parseError)
            : (this.parseError = Object.getPrototypeOf(this).parseError);
          function vennDiagramDHZGUBPPHelper52(vennDiagramDHZGUBPPInput162) {
            vennDiagramDHZGUBPPBinding66.length -=
              2 * vennDiagramDHZGUBPPInput162;
            vennDiagramDHZGUBPPBinding68.length -= vennDiagramDHZGUBPPInput162;
            vennDiagramDHZGUBPPBinding69.length -= vennDiagramDHZGUBPPInput162;
          }
          defineFunctionName(vennDiagramDHZGUBPPHelper52, "popStack");
          function vennDiagramDHZGUBPPHelper53() {
            var vennDiagramDHZGUBPPBinding397 =
              vennDiagramDHZGUBPPBinding67.pop() ||
              vennDiagramDHZGUBPPBinding78.lex() ||
              1;
            return (
              typeof vennDiagramDHZGUBPPBinding397 != "number" &&
                (vennDiagramDHZGUBPPBinding397 instanceof Array &&
                  ((vennDiagramDHZGUBPPBinding67 =
                    vennDiagramDHZGUBPPBinding397),
                  (vennDiagramDHZGUBPPBinding397 =
                    vennDiagramDHZGUBPPBinding67.pop())),
                (vennDiagramDHZGUBPPBinding397 =
                  vennDiagramDHZGUBPPBinding65.symbols_[
                    vennDiagramDHZGUBPPBinding397
                  ] || vennDiagramDHZGUBPPBinding397)),
              vennDiagramDHZGUBPPBinding397
            );
          }
          defineFunctionName(vennDiagramDHZGUBPPHelper53, "lex");
          for (
            var vennDiagramDHZGUBPPBinding83,
              vennDiagramDHZGUBPPBinding84,
              vennDiagramDHZGUBPPBinding85,
              vennDiagramDHZGUBPPBinding86,
              vennDiagramDHZGUBPPBinding87,
              vennDiagramDHZGUBPPBinding88 = {},
              vennDiagramDHZGUBPPBinding89,
              vennDiagramDHZGUBPPBinding90,
              vennDiagramDHZGUBPPBinding91,
              vennDiagramDHZGUBPPBinding92;
            ;
          ) {
            if (
              ((vennDiagramDHZGUBPPBinding85 =
                vennDiagramDHZGUBPPBinding66[
                  vennDiagramDHZGUBPPBinding66.length - 1
                ]),
              this.defaultActions[vennDiagramDHZGUBPPBinding85]
                ? (vennDiagramDHZGUBPPBinding86 =
                    this.defaultActions[vennDiagramDHZGUBPPBinding85])
                : ((vennDiagramDHZGUBPPBinding83 ??=
                    vennDiagramDHZGUBPPHelper53()),
                  (vennDiagramDHZGUBPPBinding86 =
                    vennDiagramDHZGUBPPBinding70[
                      vennDiagramDHZGUBPPBinding85
                    ] &&
                    vennDiagramDHZGUBPPBinding70[vennDiagramDHZGUBPPBinding85][
                      vennDiagramDHZGUBPPBinding83
                    ])),
              vennDiagramDHZGUBPPBinding86 === undefined ||
                !vennDiagramDHZGUBPPBinding86.length ||
                !vennDiagramDHZGUBPPBinding86[0])
            ) {
              var vennDiagramDHZGUBPPBinding93 = "";
              for (vennDiagramDHZGUBPPBinding89 in ((vennDiagramDHZGUBPPBinding92 =
                []),
              vennDiagramDHZGUBPPBinding70[vennDiagramDHZGUBPPBinding85]))
                this.terminals_[vennDiagramDHZGUBPPBinding89] &&
                  vennDiagramDHZGUBPPBinding89 > 2 &&
                  vennDiagramDHZGUBPPBinding92.push(
                    "'" + this.terminals_[vennDiagramDHZGUBPPBinding89] + "'",
                  );
              vennDiagramDHZGUBPPBinding93 =
                vennDiagramDHZGUBPPBinding78.showPosition
                  ? "Parse error on line " +
                    (vennDiagramDHZGUBPPBinding72 + 1) +
                    ":\n" +
                    vennDiagramDHZGUBPPBinding78.showPosition() +
                    "\nExpecting " +
                    vennDiagramDHZGUBPPBinding92.join(", ") +
                    ", got '" +
                    (this.terminals_[vennDiagramDHZGUBPPBinding83] ||
                      vennDiagramDHZGUBPPBinding83) +
                    "'"
                  : "Parse error on line " +
                    (vennDiagramDHZGUBPPBinding72 + 1) +
                    ": Unexpected " +
                    (vennDiagramDHZGUBPPBinding83 == 1
                      ? "end of input"
                      : "'" +
                        (this.terminals_[vennDiagramDHZGUBPPBinding83] ||
                          vennDiagramDHZGUBPPBinding83) +
                        "'");
              this.parseError(vennDiagramDHZGUBPPBinding93, {
                text: vennDiagramDHZGUBPPBinding78.match,
                token:
                  this.terminals_[vennDiagramDHZGUBPPBinding83] ||
                  vennDiagramDHZGUBPPBinding83,
                line: vennDiagramDHZGUBPPBinding78.yylineno,
                loc: vennDiagramDHZGUBPPBinding81,
                expected: vennDiagramDHZGUBPPBinding92,
              });
            }
            if (
              vennDiagramDHZGUBPPBinding86[0] instanceof Array &&
              vennDiagramDHZGUBPPBinding86.length > 1
            )
              throw Error(
                "Parse Error: multiple actions possible at state: " +
                  vennDiagramDHZGUBPPBinding85 +
                  ", token: " +
                  vennDiagramDHZGUBPPBinding83,
              );
            switch (vennDiagramDHZGUBPPBinding86[0]) {
              case 1:
                vennDiagramDHZGUBPPBinding66.push(vennDiagramDHZGUBPPBinding83);
                vennDiagramDHZGUBPPBinding68.push(
                  vennDiagramDHZGUBPPBinding78.yytext,
                );
                vennDiagramDHZGUBPPBinding69.push(
                  vennDiagramDHZGUBPPBinding78.yylloc,
                );
                vennDiagramDHZGUBPPBinding66.push(
                  vennDiagramDHZGUBPPBinding86[1],
                );
                vennDiagramDHZGUBPPBinding83 = null;
                vennDiagramDHZGUBPPBinding84
                  ? ((vennDiagramDHZGUBPPBinding83 =
                      vennDiagramDHZGUBPPBinding84),
                    (vennDiagramDHZGUBPPBinding84 = null))
                  : ((vennDiagramDHZGUBPPBinding73 =
                      vennDiagramDHZGUBPPBinding78.yyleng),
                    (vennDiagramDHZGUBPPBinding71 =
                      vennDiagramDHZGUBPPBinding78.yytext),
                    (vennDiagramDHZGUBPPBinding72 =
                      vennDiagramDHZGUBPPBinding78.yylineno),
                    (vennDiagramDHZGUBPPBinding81 =
                      vennDiagramDHZGUBPPBinding78.yylloc),
                    vennDiagramDHZGUBPPBinding74 > 0 &&
                      vennDiagramDHZGUBPPBinding74--);
                break;
              case 2:
                if (
                  ((vennDiagramDHZGUBPPBinding90 =
                    this.productions_[vennDiagramDHZGUBPPBinding86[1]][1]),
                  (vennDiagramDHZGUBPPBinding88.$ =
                    vennDiagramDHZGUBPPBinding68[
                      vennDiagramDHZGUBPPBinding68.length -
                        vennDiagramDHZGUBPPBinding90
                    ]),
                  (vennDiagramDHZGUBPPBinding88._$ = {
                    first_line:
                      vennDiagramDHZGUBPPBinding69[
                        vennDiagramDHZGUBPPBinding69.length -
                          (vennDiagramDHZGUBPPBinding90 || 1)
                      ].first_line,
                    last_line:
                      vennDiagramDHZGUBPPBinding69[
                        vennDiagramDHZGUBPPBinding69.length - 1
                      ].last_line,
                    first_column:
                      vennDiagramDHZGUBPPBinding69[
                        vennDiagramDHZGUBPPBinding69.length -
                          (vennDiagramDHZGUBPPBinding90 || 1)
                      ].first_column,
                    last_column:
                      vennDiagramDHZGUBPPBinding69[
                        vennDiagramDHZGUBPPBinding69.length - 1
                      ].last_column,
                  }),
                  vennDiagramDHZGUBPPBinding82 &&
                    (vennDiagramDHZGUBPPBinding88._$.range = [
                      vennDiagramDHZGUBPPBinding69[
                        vennDiagramDHZGUBPPBinding69.length -
                          (vennDiagramDHZGUBPPBinding90 || 1)
                      ].range[0],
                      vennDiagramDHZGUBPPBinding69[
                        vennDiagramDHZGUBPPBinding69.length - 1
                      ].range[1],
                    ]),
                  (vennDiagramDHZGUBPPBinding87 = this.performAction.apply(
                    vennDiagramDHZGUBPPBinding88,
                    [
                      vennDiagramDHZGUBPPBinding71,
                      vennDiagramDHZGUBPPBinding73,
                      vennDiagramDHZGUBPPBinding72,
                      vennDiagramDHZGUBPPBinding79.yy,
                      vennDiagramDHZGUBPPBinding86[1],
                      vennDiagramDHZGUBPPBinding68,
                      vennDiagramDHZGUBPPBinding69,
                    ].concat(vennDiagramDHZGUBPPBinding77),
                  )),
                  vennDiagramDHZGUBPPBinding87 !== undefined)
                )
                  return vennDiagramDHZGUBPPBinding87;
                vennDiagramDHZGUBPPBinding90 &&
                  ((vennDiagramDHZGUBPPBinding66 =
                    vennDiagramDHZGUBPPBinding66.slice(
                      0,
                      -1 * vennDiagramDHZGUBPPBinding90 * 2,
                    )),
                  (vennDiagramDHZGUBPPBinding68 =
                    vennDiagramDHZGUBPPBinding68.slice(
                      0,
                      -1 * vennDiagramDHZGUBPPBinding90,
                    )),
                  (vennDiagramDHZGUBPPBinding69 =
                    vennDiagramDHZGUBPPBinding69.slice(
                      0,
                      -1 * vennDiagramDHZGUBPPBinding90,
                    )));
                vennDiagramDHZGUBPPBinding66.push(
                  this.productions_[vennDiagramDHZGUBPPBinding86[1]][0],
                );
                vennDiagramDHZGUBPPBinding68.push(
                  vennDiagramDHZGUBPPBinding88.$,
                );
                vennDiagramDHZGUBPPBinding69.push(
                  vennDiagramDHZGUBPPBinding88._$,
                );
                vennDiagramDHZGUBPPBinding91 =
                  vennDiagramDHZGUBPPBinding70[
                    vennDiagramDHZGUBPPBinding66[
                      vennDiagramDHZGUBPPBinding66.length - 2
                    ]
                  ][
                    vennDiagramDHZGUBPPBinding66[
                      vennDiagramDHZGUBPPBinding66.length - 1
                    ]
                  ];
                vennDiagramDHZGUBPPBinding66.push(vennDiagramDHZGUBPPBinding91);
                break;
              case 3:
                return true;
            }
          }
          return true;
        }, "parse"),
      };
    vennDiagramDHZGUBPPBinding43.lexer = (function () {
      return {
        EOF: 1,
        parseError: defineFunctionName(function (
          vennDiagramDHZGUBPPInput147,
          vennDiagramDHZGUBPPInput148,
        ) {
          if (this.yy.parser)
            this.yy.parser.parseError(
              vennDiagramDHZGUBPPInput147,
              vennDiagramDHZGUBPPInput148,
            );
          else throw Error(vennDiagramDHZGUBPPInput147);
        }, "parseError"),
        setInput: defineFunctionName(function (
          vennDiagramDHZGUBPPInput75,
          vennDiagramDHZGUBPPInput76,
        ) {
          return (
            (this.yy = vennDiagramDHZGUBPPInput76 || this.yy || {}),
            (this._input = vennDiagramDHZGUBPPInput75),
            (this._more = this._backtrack = this.done = false),
            (this.yylineno = this.yyleng = 0),
            (this.yytext = this.matched = this.match = ""),
            (this.conditionStack = ["INITIAL"]),
            (this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
            }),
            this.options.ranges && (this.yylloc.range = [0, 0]),
            (this.offset = 0),
            this
          );
        }, "setInput"),
        input: defineFunctionName(function () {
          var vennDiagramDHZGUBPPBinding331 = this._input[0];
          return (
            (this.yytext += vennDiagramDHZGUBPPBinding331),
            this.yyleng++,
            this.offset++,
            (this.match += vennDiagramDHZGUBPPBinding331),
            (this.matched += vennDiagramDHZGUBPPBinding331),
            vennDiagramDHZGUBPPBinding331.match(/(?:\r\n?|\n).*/g)
              ? (this.yylineno++, this.yylloc.last_line++)
              : this.yylloc.last_column++,
            this.options.ranges && this.yylloc.range[1]++,
            (this._input = this._input.slice(1)),
            vennDiagramDHZGUBPPBinding331
          );
        }, "input"),
        unput: defineFunctionName(function (vennDiagramDHZGUBPPInput38) {
          var vennDiagramDHZGUBPPBinding219 = vennDiagramDHZGUBPPInput38.length,
            vennDiagramDHZGUBPPBinding220 =
              vennDiagramDHZGUBPPInput38.split(/(?:\r\n?|\n)/g);
          this._input = vennDiagramDHZGUBPPInput38 + this._input;
          this.yytext = this.yytext.substr(
            0,
            this.yytext.length - vennDiagramDHZGUBPPBinding219,
          );
          this.offset -= vennDiagramDHZGUBPPBinding219;
          var vennDiagramDHZGUBPPBinding221 = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);
          vennDiagramDHZGUBPPBinding220.length - 1 &&
            (this.yylineno -= vennDiagramDHZGUBPPBinding220.length - 1);
          var vennDiagramDHZGUBPPBinding222 = this.yylloc.range;
          return (
            (this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: vennDiagramDHZGUBPPBinding220
                ? (vennDiagramDHZGUBPPBinding220.length ===
                  vennDiagramDHZGUBPPBinding221.length
                    ? this.yylloc.first_column
                    : 0) +
                  vennDiagramDHZGUBPPBinding221[
                    vennDiagramDHZGUBPPBinding221.length -
                      vennDiagramDHZGUBPPBinding220.length
                  ].length -
                  vennDiagramDHZGUBPPBinding220[0].length
                : this.yylloc.first_column - vennDiagramDHZGUBPPBinding219,
            }),
            this.options.ranges &&
              (this.yylloc.range = [
                vennDiagramDHZGUBPPBinding222[0],
                vennDiagramDHZGUBPPBinding222[0] +
                  this.yyleng -
                  vennDiagramDHZGUBPPBinding219,
              ]),
            (this.yyleng = this.yytext.length),
            this
          );
        }, "unput"),
        more: defineFunctionName(function () {
          return ((this._more = true), this);
        }, "more"),
        reject: defineFunctionName(function () {
          if (this.options.backtrack_lexer) this._backtrack = true;
          else
            return this.parseError(
              "Lexical error on line " +
                (this.yylineno + 1) +
                ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                this.showPosition(),
              {
                text: "",
                token: null,
                line: this.yylineno,
              },
            );
          return this;
        }, "reject"),
        less: defineFunctionName(function (vennDiagramDHZGUBPPInput183) {
          this.unput(this.match.slice(vennDiagramDHZGUBPPInput183));
        }, "less"),
        pastInput: defineFunctionName(function () {
          var vennDiagramDHZGUBPPBinding402 = this.matched.substr(
            0,
            this.matched.length - this.match.length,
          );
          return (
            (vennDiagramDHZGUBPPBinding402.length > 20 ? "..." : "") +
            vennDiagramDHZGUBPPBinding402.substr(-20).replace(/\n/g, "")
          );
        }, "pastInput"),
        upcomingInput: defineFunctionName(function () {
          var vennDiagramDHZGUBPPBinding396 = this.match;
          return (
            vennDiagramDHZGUBPPBinding396.length < 20 &&
              (vennDiagramDHZGUBPPBinding396 += this._input.substr(
                0,
                20 - vennDiagramDHZGUBPPBinding396.length,
              )),
            (
              vennDiagramDHZGUBPPBinding396.substr(0, 20) +
              (vennDiagramDHZGUBPPBinding396.length > 20 ? "..." : "")
            ).replace(/\n/g, "")
          );
        }, "upcomingInput"),
        showPosition: defineFunctionName(function () {
          var vennDiagramDHZGUBPPBinding406 = this.pastInput(),
            vennDiagramDHZGUBPPBinding407 = Array(
              vennDiagramDHZGUBPPBinding406.length + 1,
            ).join("-");
          return (
            vennDiagramDHZGUBPPBinding406 +
            this.upcomingInput() +
            "\n" +
            vennDiagramDHZGUBPPBinding407 +
            "^"
          );
        }, "showPosition"),
        test_match: defineFunctionName(function (
          vennDiagramDHZGUBPPInput21,
          vennDiagramDHZGUBPPInput22,
        ) {
          var vennDiagramDHZGUBPPBinding155,
            vennDiagramDHZGUBPPBinding156,
            vennDiagramDHZGUBPPBinding157;
          if (
            (this.options.backtrack_lexer &&
              ((vennDiagramDHZGUBPPBinding157 = {
                yylineno: this.yylineno,
                yylloc: {
                  first_line: this.yylloc.first_line,
                  last_line: this.last_line,
                  first_column: this.yylloc.first_column,
                  last_column: this.yylloc.last_column,
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done,
              }),
              this.options.ranges &&
                (vennDiagramDHZGUBPPBinding157.yylloc.range =
                  this.yylloc.range.slice(0))),
            (vennDiagramDHZGUBPPBinding156 =
              vennDiagramDHZGUBPPInput21[0].match(/(?:\r\n?|\n).*/g)),
            vennDiagramDHZGUBPPBinding156 &&
              (this.yylineno += vennDiagramDHZGUBPPBinding156.length),
            (this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: vennDiagramDHZGUBPPBinding156
                ? vennDiagramDHZGUBPPBinding156[
                    vennDiagramDHZGUBPPBinding156.length - 1
                  ].length -
                  vennDiagramDHZGUBPPBinding156[
                    vennDiagramDHZGUBPPBinding156.length - 1
                  ].match(/\r?\n?/)[0].length
                : this.yylloc.last_column +
                  vennDiagramDHZGUBPPInput21[0].length,
            }),
            (this.yytext += vennDiagramDHZGUBPPInput21[0]),
            (this.match += vennDiagramDHZGUBPPInput21[0]),
            (this.matches = vennDiagramDHZGUBPPInput21),
            (this.yyleng = this.yytext.length),
            this.options.ranges &&
              (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
            (this._more = false),
            (this._backtrack = false),
            (this._input = this._input.slice(
              vennDiagramDHZGUBPPInput21[0].length,
            )),
            (this.matched += vennDiagramDHZGUBPPInput21[0]),
            (vennDiagramDHZGUBPPBinding155 = this.performAction.call(
              this,
              this.yy,
              this,
              vennDiagramDHZGUBPPInput22,
              this.conditionStack[this.conditionStack.length - 1],
            )),
            this.done && this._input && (this.done = false),
            vennDiagramDHZGUBPPBinding155)
          )
            return vennDiagramDHZGUBPPBinding155;
          if (this._backtrack) {
            for (var vennDiagramDHZGUBPPBinding158 in vennDiagramDHZGUBPPBinding157)
              this[vennDiagramDHZGUBPPBinding158] =
                vennDiagramDHZGUBPPBinding157[vennDiagramDHZGUBPPBinding158];
            return false;
          }
          return false;
        }, "test_match"),
        next: defineFunctionName(function () {
          if (this.done) return this.EOF;
          this._input || (this.done = true);
          var vennDiagramDHZGUBPPBinding213,
            vennDiagramDHZGUBPPBinding214,
            vennDiagramDHZGUBPPBinding215,
            vennDiagramDHZGUBPPBinding216;
          this._more || ((this.yytext = ""), (this.match = ""));
          for (
            var vennDiagramDHZGUBPPBinding217 = this._currentRules(),
              vennDiagramDHZGUBPPBinding218 = 0;
            vennDiagramDHZGUBPPBinding218 <
            vennDiagramDHZGUBPPBinding217.length;
            vennDiagramDHZGUBPPBinding218++
          )
            if (
              ((vennDiagramDHZGUBPPBinding215 = this._input.match(
                this.rules[
                  vennDiagramDHZGUBPPBinding217[vennDiagramDHZGUBPPBinding218]
                ],
              )),
              vennDiagramDHZGUBPPBinding215 &&
                (!vennDiagramDHZGUBPPBinding214 ||
                  vennDiagramDHZGUBPPBinding215[0].length >
                    vennDiagramDHZGUBPPBinding214[0].length))
            ) {
              if (
                ((vennDiagramDHZGUBPPBinding214 =
                  vennDiagramDHZGUBPPBinding215),
                (vennDiagramDHZGUBPPBinding216 = vennDiagramDHZGUBPPBinding218),
                this.options.backtrack_lexer)
              ) {
                if (
                  ((vennDiagramDHZGUBPPBinding213 = this.test_match(
                    vennDiagramDHZGUBPPBinding215,
                    vennDiagramDHZGUBPPBinding217[
                      vennDiagramDHZGUBPPBinding218
                    ],
                  )),
                  vennDiagramDHZGUBPPBinding213 !== false)
                )
                  return vennDiagramDHZGUBPPBinding213;
                if (this._backtrack) {
                  vennDiagramDHZGUBPPBinding214 = false;
                  continue;
                } else return false;
              } else if (!this.options.flex) break;
            }
          return vennDiagramDHZGUBPPBinding214
            ? ((vennDiagramDHZGUBPPBinding213 = this.test_match(
                vennDiagramDHZGUBPPBinding214,
                vennDiagramDHZGUBPPBinding217[vennDiagramDHZGUBPPBinding216],
              )),
              vennDiagramDHZGUBPPBinding213 === false
                ? false
                : vennDiagramDHZGUBPPBinding213)
            : this._input === ""
              ? this.EOF
              : this.parseError(
                  "Lexical error on line " +
                    (this.yylineno + 1) +
                    ". Unrecognized text.\n" +
                    this.showPosition(),
                  {
                    text: "",
                    token: null,
                    line: this.yylineno,
                  },
                );
        }, "next"),
        lex: defineFunctionName(function () {
          return this.next() || this.lex();
        }, "lex"),
        begin: defineFunctionName(function (vennDiagramDHZGUBPPInput203) {
          this.conditionStack.push(vennDiagramDHZGUBPPInput203);
        }, "begin"),
        popState: defineFunctionName(function () {
          return this.conditionStack.length - 1 > 0
            ? this.conditionStack.pop()
            : this.conditionStack[0];
        }, "popState"),
        _currentRules: defineFunctionName(function () {
          return this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[
                this.conditionStack[this.conditionStack.length - 1]
              ].rules
            : this.conditions.INITIAL.rules;
        }, "_currentRules"),
        topState: defineFunctionName(function (vennDiagramDHZGUBPPInput126) {
          return (
            (vennDiagramDHZGUBPPInput126 =
              this.conditionStack.length -
              1 -
              Math.abs(vennDiagramDHZGUBPPInput126 || 0)),
            vennDiagramDHZGUBPPInput126 >= 0
              ? this.conditionStack[vennDiagramDHZGUBPPInput126]
              : "INITIAL"
          );
        }, "topState"),
        pushState: defineFunctionName(function (vennDiagramDHZGUBPPInput206) {
          this.begin(vennDiagramDHZGUBPPInput206);
        }, "pushState"),
        stateStackSize: defineFunctionName(function () {
          return this.conditionStack.length;
        }, "stateStackSize"),
        options: {
          "case-insensitive": true,
        },
        performAction: defineFunctionName(function (
          vennDiagramDHZGUBPPInput30,
          vennDiagramDHZGUBPPInput31,
          vennDiagramDHZGUBPPInput32,
          vennDiagramDHZGUBPPInput33,
        ) {
          switch (vennDiagramDHZGUBPPInput32) {
            case 0:
              break;
            case 1:
              break;
            case 2:
              break;
            case 3:
              if (
                vennDiagramDHZGUBPPInput30.getIndentMode &&
                vennDiagramDHZGUBPPInput30.getIndentMode()
              )
                return (
                  (vennDiagramDHZGUBPPInput30.consumeIndentText = true),
                  this.begin("INITIAL"),
                  22
                );
              break;
            case 4:
              break;
            case 5:
              vennDiagramDHZGUBPPInput30.setIndentMode &&
                vennDiagramDHZGUBPPInput30.setIndentMode(false);
              this.begin("INITIAL");
              this.unput(vennDiagramDHZGUBPPInput31.yytext);
              break;
            case 6:
              return (this.begin("bol"), 8);
            case 7:
              break;
            case 8:
              break;
            case 9:
              return 7;
            case 10:
              return 11;
            case 11:
              return 5;
            case 12:
              return 12;
            case 13:
              return 17;
            case 14:
              if (vennDiagramDHZGUBPPInput30.consumeIndentText)
                vennDiagramDHZGUBPPInput30.consumeIndentText = false;
              else return 19;
              break;
            case 15:
              return 24;
            case 16:
              return (
                (vennDiagramDHZGUBPPInput31.yytext =
                  vennDiagramDHZGUBPPInput31.yytext.slice(2, -2)),
                14
              );
            case 17:
              return (
                (vennDiagramDHZGUBPPInput31.yytext =
                  vennDiagramDHZGUBPPInput31.yytext.slice(1, -1).trim()),
                14
              );
            case 18:
              return 16;
            case 19:
              return 31;
            case 20:
              return 33;
            case 21:
              return 32;
            case 22:
              return 20;
            case 23:
              return 21;
            case 24:
              return 27;
            case 25:
              return 15;
          }
        }, "anonymous"),
        rules: [
          /^(?:%%(?!\{)[^\n]*)/i,
          /^(?:[^\}]%%[^\n]*)/i,
          /^(?:[ \t]+(?=[\n\r]))/i,
          /^(?:[ \t]+(?=text\b))/i,
          /^(?:[ \t]+)/i,
          /^(?:[^ \t\n\r])/i,
          /^(?:[\n\r]+)/i,
          /^(?:%%[^\n]*)/i,
          /^(?:[ \t]+)/i,
          /^(?:$)/i,
          /^(?:title\s[^#\n;]+)/i,
          /^(?:venn-beta\b)/i,
          /^(?:set\b)/i,
          /^(?:union\b)/i,
          /^(?:text\b)/i,
          /^(?:style\b)/i,
          /^(?:\["[^\"]*"\])/i,
          /^(?:\[[^\]\"]+\])/i,
          /^(?:[+-]?(\d+(\.\d+)?|\.\d+))/i,
          /^(?:#[0-9a-fA-F]{3,8})/i,
          /^(?:rgba\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i,
          /^(?:rgb\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i,
          /^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,
          /^(?:"[^\"]*")/i,
          /^(?:,)/i,
          /^(?::)/i,
        ],
        conditions: {
          bol: {
            rules: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24, 25,
            ],
            inclusive: true,
          },
          INITIAL: {
            rules: [
              0, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
              22, 23, 24, 25,
            ],
            inclusive: true,
          },
        },
      };
    })();
    function vennDiagramDHZGUBPPHelper50() {
      this.yy = {};
    }
    return (
      defineFunctionName(vennDiagramDHZGUBPPHelper50, "Parser"),
      (vennDiagramDHZGUBPPHelper50.prototype = vennDiagramDHZGUBPPBinding43),
      (vennDiagramDHZGUBPPBinding43.Parser = vennDiagramDHZGUBPPHelper50),
      new vennDiagramDHZGUBPPHelper50()
    );
  })();
  vennDiagramDHZGUBPPBinding4.parser = vennDiagramDHZGUBPPBinding4;
  vennDiagramDHZGUBPPBinding5 = vennDiagramDHZGUBPPBinding4;
  vennDiagramDHZGUBPPBinding6 = [];
  vennDiagramDHZGUBPPBinding7 = [];
  vennDiagramDHZGUBPPBinding8 = [];
  vennDiagramDHZGUBPPBinding9 = new Set();
  vennDiagramDHZGUBPPBinding11 = false;
  vennDiagramDHZGUBPPBinding12 = defineFunctionName(
    (
      vennDiagramDHZGUBPPInput119,
      vennDiagramDHZGUBPPInput120,
      vennDiagramDHZGUBPPInput121,
    ) => {
      let vennDiagramDHZGUBPPBinding425 = $(vennDiagramDHZGUBPPInput119).sort(),
        vennDiagramDHZGUBPPBinding426 =
          vennDiagramDHZGUBPPInput121 ??
          10 / vennDiagramDHZGUBPPInput119.length ** 2;
      vennDiagramDHZGUBPPBinding10 = vennDiagramDHZGUBPPBinding425;
      vennDiagramDHZGUBPPBinding425.length === 1 &&
        vennDiagramDHZGUBPPBinding9.add(vennDiagramDHZGUBPPBinding425[0]);
      vennDiagramDHZGUBPPBinding6.push({
        sets: vennDiagramDHZGUBPPBinding425,
        size: vennDiagramDHZGUBPPBinding426,
        label: vennDiagramDHZGUBPPInput120
          ? vennDiagramDHZGUBPPBinding14(vennDiagramDHZGUBPPInput120)
          : undefined,
      });
    },
    "addSubsetData",
  );
  vennDiagramDHZGUBPPBinding13 = defineFunctionName(
    () => vennDiagramDHZGUBPPBinding6,
    "getSubsetData",
  );
  vennDiagramDHZGUBPPBinding14 = defineFunctionName(
    (vennDiagramDHZGUBPPInput140) => {
      let vennDiagramDHZGUBPPBinding466 = vennDiagramDHZGUBPPInput140.trim();
      return vennDiagramDHZGUBPPBinding466.length >= 2 &&
        vennDiagramDHZGUBPPBinding466.startsWith('"') &&
        vennDiagramDHZGUBPPBinding466.endsWith('"')
        ? vennDiagramDHZGUBPPBinding466.slice(1, -1)
        : vennDiagramDHZGUBPPBinding466;
    },
    "normalizeText",
  );
  vennDiagramDHZGUBPPBinding15 = defineFunctionName(
    (vennDiagramDHZGUBPPInput240) =>
      vennDiagramDHZGUBPPInput240 &&
      vennDiagramDHZGUBPPBinding14(vennDiagramDHZGUBPPInput240),
    "normalizeStyleValue",
  );
  vennDiagramDHZGUBPPBinding16 = defineFunctionName(
    (
      vennDiagramDHZGUBPPInput157,
      vennDiagramDHZGUBPPInput158,
      vennDiagramDHZGUBPPInput159,
    ) => {
      let vennDiagramDHZGUBPPBinding495 = vennDiagramDHZGUBPPBinding14(
        vennDiagramDHZGUBPPInput158,
      );
      vennDiagramDHZGUBPPBinding7.push({
        sets: $(vennDiagramDHZGUBPPInput157).sort(),
        id: vennDiagramDHZGUBPPBinding495,
        label: vennDiagramDHZGUBPPInput159
          ? vennDiagramDHZGUBPPBinding14(vennDiagramDHZGUBPPInput159)
          : undefined,
      });
    },
    "addTextData",
  );
  vennDiagramDHZGUBPPBinding17 = defineFunctionName(
    (vennDiagramDHZGUBPPInput136, vennDiagramDHZGUBPPInput137) => {
      let vennDiagramDHZGUBPPBinding460 = $(vennDiagramDHZGUBPPInput136).sort(),
        vennDiagramDHZGUBPPBinding461 = {};
      for (let [
        vennDiagramDHZGUBPPBinding560,
        vennDiagramDHZGUBPPBinding561,
      ] of vennDiagramDHZGUBPPInput137)
        vennDiagramDHZGUBPPBinding461[vennDiagramDHZGUBPPBinding560] =
          vennDiagramDHZGUBPPBinding15(vennDiagramDHZGUBPPBinding561) ??
          vennDiagramDHZGUBPPBinding561;
      vennDiagramDHZGUBPPBinding8.push({
        targets: vennDiagramDHZGUBPPBinding460,
        styles: vennDiagramDHZGUBPPBinding461,
      });
    },
    "addStyleData",
  );
  vennDiagramDHZGUBPPBinding18 = defineFunctionName(
    () => vennDiagramDHZGUBPPBinding8,
    "getStyleData",
  );
  $ = defineFunctionName(
    (vennDiagramDHZGUBPPInput231) =>
      vennDiagramDHZGUBPPInput231.map((item) =>
        vennDiagramDHZGUBPPBinding14(item),
      ),
    "normalizeIdentifierList",
  );
  vennDiagramDHZGUBPPBinding19 = defineFunctionName(
    (vennDiagramDHZGUBPPInput141) => {
      let vennDiagramDHZGUBPPBinding469 = $(vennDiagramDHZGUBPPInput141).filter(
        (item) => !vennDiagramDHZGUBPPBinding9.has(item),
      );
      if (vennDiagramDHZGUBPPBinding469.length > 0)
        throw Error(
          `unknown set identifier: ${vennDiagramDHZGUBPPBinding469.join(", ")}`,
        );
    },
    "validateUnionIdentifiers",
  );
  vennDiagramDHZGUBPPBinding20 = defineFunctionName(
    () => vennDiagramDHZGUBPPBinding7,
    "getTextData",
  );
  vennDiagramDHZGUBPPBinding21 = defineFunctionName(
    () => vennDiagramDHZGUBPPBinding10,
    "getCurrentSets",
  );
  vennDiagramDHZGUBPPBinding22 = defineFunctionName(
    () => vennDiagramDHZGUBPPBinding11,
    "getIndentMode",
  );
  vennDiagramDHZGUBPPBinding23 = defineFunctionName(
    (vennDiagramDHZGUBPPInput228) => {
      vennDiagramDHZGUBPPBinding11 = vennDiagramDHZGUBPPInput228;
    },
    "setIndentMode",
  );
  vennDiagramDHZGUBPPBinding24 = chunkICPOFSXXD.venn;
  defineFunctionName(vennDiagramDHZGUBPPHelper46, "getConfig");
  vennDiagramDHZGUBPPBinding25 = {
    getConfig: vennDiagramDHZGUBPPHelper46,
    clear: defineFunctionName(() => {
      _chunkICPOFSXXA();
      vennDiagramDHZGUBPPBinding6.length = 0;
      vennDiagramDHZGUBPPBinding7.length = 0;
      vennDiagramDHZGUBPPBinding8.length = 0;
      vennDiagramDHZGUBPPBinding9.clear();
      vennDiagramDHZGUBPPBinding10 = undefined;
      vennDiagramDHZGUBPPBinding11 = false;
    }, "customClear"),
    setAccTitle: H,
    getAccTitle: _chunkICPOFSXXV,
    setDiagramTitle: G,
    getDiagramTitle: C,
    getAccDescription: _,
    setAccDescription: V,
    addSubsetData: vennDiagramDHZGUBPPBinding12,
    getSubsetData: vennDiagramDHZGUBPPBinding13,
    addTextData: vennDiagramDHZGUBPPBinding16,
    addStyleData: vennDiagramDHZGUBPPBinding17,
    validateUnionIdentifiers: vennDiagramDHZGUBPPBinding19,
    getTextData: vennDiagramDHZGUBPPBinding20,
    getStyleData: vennDiagramDHZGUBPPBinding18,
    getCurrentSets: vennDiagramDHZGUBPPBinding21,
    getIndentMode: vennDiagramDHZGUBPPBinding22,
    setIndentMode: vennDiagramDHZGUBPPBinding23,
  };
  vennDiagramDHZGUBPPBinding26 = defineFunctionName(
    (vennDiagramDHZGUBPPInput99) => `
  .venn-title {
    font-size: 32px;
    fill: ${vennDiagramDHZGUBPPInput99.vennTitleTextColor};
    font-family: ${vennDiagramDHZGUBPPInput99.fontFamily};
  }

  .venn-circle text {
    font-size: 48px;
    font-family: ${vennDiagramDHZGUBPPInput99.fontFamily};
  }

  .venn-intersection text {
    font-size: 48px;
    fill: ${vennDiagramDHZGUBPPInput99.vennSetTextColor};
    font-family: ${vennDiagramDHZGUBPPInput99.fontFamily};
  }

  .venn-text-node {
    font-family: ${vennDiagramDHZGUBPPInput99.fontFamily};
    color: ${vennDiagramDHZGUBPPInput99.vennSetTextColor};
  }
`,
    "getStyles",
  );
  defineFunctionName(vennDiagramDHZGUBPPHelper47, "buildStyleByKey");
  vennDiagramDHZGUBPPBinding27 = defineFunctionName(
    (
      vennDiagramDHZGUBPPInput3,
      vennDiagramDHZGUBPPInput4,
      vennDiagramDHZGUBPPInput5,
      vennDiagramDHZGUBPPInput6,
    ) => {
      let vennDiagramDHZGUBPPBinding94 = vennDiagramDHZGUBPPInput6.db,
        vennDiagramDHZGUBPPBinding95 =
          vennDiagramDHZGUBPPBinding94.getConfig?.(),
        { themeVariables, look, handDrawnSeed } = y(),
        vennDiagramDHZGUBPPBinding96 = look === "handDrawn",
        vennDiagramDHZGUBPPBinding97 = [
          themeVariables.venn1,
          themeVariables.venn2,
          themeVariables.venn3,
          themeVariables.venn4,
          themeVariables.venn5,
          themeVariables.venn6,
          themeVariables.venn7,
          themeVariables.venn8,
        ].filter(Boolean),
        vennDiagramDHZGUBPPBinding98 =
          vennDiagramDHZGUBPPBinding94.getDiagramTitle?.(),
        vennDiagramDHZGUBPPBinding99 =
          vennDiagramDHZGUBPPBinding94.getSubsetData(),
        vennDiagramDHZGUBPPBinding100 =
          vennDiagramDHZGUBPPBinding94.getTextData(),
        vennDiagramDHZGUBPPBinding101 = vennDiagramDHZGUBPPHelper47(
          vennDiagramDHZGUBPPBinding94.getStyleData(),
        ),
        vennDiagramDHZGUBPPBinding102 =
          vennDiagramDHZGUBPPBinding95?.width ?? 800,
        vennDiagramDHZGUBPPBinding103 =
          vennDiagramDHZGUBPPBinding95?.height ?? 450,
        vennDiagramDHZGUBPPBinding104 = vennDiagramDHZGUBPPBinding102 / 1600,
        vennDiagramDHZGUBPPBinding105 = vennDiagramDHZGUBPPBinding98
          ? 48 * vennDiagramDHZGUBPPBinding104
          : 0,
        vennDiagramDHZGUBPPBinding106 =
          themeVariables.primaryTextColor ?? themeVariables.textColor,
        vennDiagramDHZGUBPPBinding107 = n(vennDiagramDHZGUBPPInput4);
      vennDiagramDHZGUBPPBinding107.attr(
        "viewBox",
        `0 0 ${vennDiagramDHZGUBPPBinding102} ${vennDiagramDHZGUBPPBinding103}`,
      );
      vennDiagramDHZGUBPPBinding98 &&
        vennDiagramDHZGUBPPBinding107
          .append("text")
          .text(vennDiagramDHZGUBPPBinding98)
          .attr("class", "venn-title")
          .attr("font-size", `${32 * vennDiagramDHZGUBPPBinding104}px`)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("x", "50%")
          .attr("y", 32 * vennDiagramDHZGUBPPBinding104)
          .style(
            "fill",
            themeVariables.vennTitleTextColor || themeVariables.titleColor,
          );
      let vennDiagramDHZGUBPPBinding108 = select(document.createElement("div")),
        vennDiagramDHZGUBPPBinding109 = be()
          .width(vennDiagramDHZGUBPPBinding102)
          .height(
            vennDiagramDHZGUBPPBinding103 - vennDiagramDHZGUBPPBinding105,
          );
      vennDiagramDHZGUBPPBinding108
        .datum(vennDiagramDHZGUBPPBinding99)
        .call(vennDiagramDHZGUBPPBinding109);
      let vennDiagramDHZGUBPPBinding110 = vennDiagramDHZGUBPPBinding96
          ? rough.svg(vennDiagramDHZGUBPPBinding108.select("svg").node())
          : undefined,
        vennDiagramDHZGUBPPBinding111 = vennDiagramDHZGUBPPHelper45(
          vennDiagramDHZGUBPPBinding99,
          {
            width: vennDiagramDHZGUBPPBinding102,
            height:
              vennDiagramDHZGUBPPBinding103 - vennDiagramDHZGUBPPBinding105,
            padding: vennDiagramDHZGUBPPBinding95?.padding ?? 15,
          },
        ),
        vennDiagramDHZGUBPPBinding112 = new Map();
      for (let vennDiagramDHZGUBPPBinding522 of vennDiagramDHZGUBPPBinding111) {
        let vennDiagramDHZGUBPPBinding537 = vennDiagramDHZGUBPPHelper48(
          [...vennDiagramDHZGUBPPBinding522.data.sets].sort(),
        );
        vennDiagramDHZGUBPPBinding112.set(
          vennDiagramDHZGUBPPBinding537,
          vennDiagramDHZGUBPPBinding522,
        );
      }
      vennDiagramDHZGUBPPBinding100.length > 0 &&
        vennDiagramDHZGUBPPHelper49(
          vennDiagramDHZGUBPPBinding95,
          vennDiagramDHZGUBPPBinding112,
          vennDiagramDHZGUBPPBinding108,
          vennDiagramDHZGUBPPBinding100,
          vennDiagramDHZGUBPPBinding104,
          vennDiagramDHZGUBPPBinding101,
        );
      let vennDiagramDHZGUBPPBinding113 = p(
        themeVariables.background || "#f4f4f4",
      );
      vennDiagramDHZGUBPPBinding108
        .selectAll(".venn-circle")
        .each(
          function (vennDiagramDHZGUBPPInput34, vennDiagramDHZGUBPPInput35) {
            let vennDiagramDHZGUBPPBinding198 = select(this),
              vennDiagramDHZGUBPPBinding199 = vennDiagramDHZGUBPPHelper48(
                [...vennDiagramDHZGUBPPInput34.sets].sort(),
              ),
              vennDiagramDHZGUBPPBinding200 = vennDiagramDHZGUBPPBinding101.get(
                vennDiagramDHZGUBPPBinding199,
              ),
              vennDiagramDHZGUBPPBinding201 =
                vennDiagramDHZGUBPPBinding200?.fill ||
                vennDiagramDHZGUBPPBinding97[
                  vennDiagramDHZGUBPPInput35 %
                    vennDiagramDHZGUBPPBinding97.length
                ] ||
                themeVariables.primaryColor;
            vennDiagramDHZGUBPPBinding198.classed(
              `venn-set-${vennDiagramDHZGUBPPInput35 % 8}`,
              true,
            );
            let vennDiagramDHZGUBPPBinding202 =
                vennDiagramDHZGUBPPBinding200?.["fill-opacity"] ?? 0.1,
              vennDiagramDHZGUBPPBinding203 =
                vennDiagramDHZGUBPPBinding200?.stroke ||
                vennDiagramDHZGUBPPBinding201,
              vennDiagramDHZGUBPPBinding204 =
                vennDiagramDHZGUBPPBinding200?.["stroke-width"] ||
                `${5 * vennDiagramDHZGUBPPBinding104}`;
            if (vennDiagramDHZGUBPPBinding96 && vennDiagramDHZGUBPPBinding110) {
              let vennDiagramDHZGUBPPBinding316 =
                vennDiagramDHZGUBPPBinding112.get(
                  vennDiagramDHZGUBPPBinding199,
                );
              if (
                vennDiagramDHZGUBPPBinding316 &&
                vennDiagramDHZGUBPPBinding316.circles.length > 0
              ) {
                let vennDiagramDHZGUBPPBinding329 =
                    vennDiagramDHZGUBPPBinding316.circles[0],
                  vennDiagramDHZGUBPPBinding330 =
                    vennDiagramDHZGUBPPBinding110.circle(
                      vennDiagramDHZGUBPPBinding329.x,
                      vennDiagramDHZGUBPPBinding329.y,
                      vennDiagramDHZGUBPPBinding329.radius * 2,
                      {
                        roughness: 0.7,
                        seed: handDrawnSeed,
                        fill: s(vennDiagramDHZGUBPPBinding201, 0.7),
                        fillStyle: "hachure",
                        fillWeight: 2,
                        hachureGap: 8,
                        hachureAngle: -41 + vennDiagramDHZGUBPPInput35 * 60,
                        stroke: vennDiagramDHZGUBPPBinding203,
                        strokeWidth: parseFloat(
                          String(vennDiagramDHZGUBPPBinding204),
                        ),
                      },
                    );
                vennDiagramDHZGUBPPBinding198.select("path").remove();
                vennDiagramDHZGUBPPBinding198
                  .node()
                  ?.insertBefore(
                    vennDiagramDHZGUBPPBinding330,
                    vennDiagramDHZGUBPPBinding198.select("text").node(),
                  );
              }
            } else
              vennDiagramDHZGUBPPBinding198
                .select("path")
                .style("fill", vennDiagramDHZGUBPPBinding201)
                .style("fill-opacity", vennDiagramDHZGUBPPBinding202)
                .style("stroke", vennDiagramDHZGUBPPBinding203)
                .style("stroke-width", vennDiagramDHZGUBPPBinding204)
                .style("stroke-opacity", 0.95);
            let vennDiagramDHZGUBPPBinding205 =
              vennDiagramDHZGUBPPBinding200?.color ||
              (vennDiagramDHZGUBPPBinding113
                ? d(vennDiagramDHZGUBPPBinding201, 30)
                : c(vennDiagramDHZGUBPPBinding201, 30));
            vennDiagramDHZGUBPPBinding198
              .select("text")
              .style("font-size", `${48 * vennDiagramDHZGUBPPBinding104}px`)
              .style("fill", vennDiagramDHZGUBPPBinding205);
          },
        );
      vennDiagramDHZGUBPPBinding96 && vennDiagramDHZGUBPPBinding110
        ? vennDiagramDHZGUBPPBinding108
            .selectAll(".venn-intersection")
            .each(function (vennDiagramDHZGUBPPInput53) {
              let vennDiagramDHZGUBPPBinding253 = select(this),
                vennDiagramDHZGUBPPBinding254 = vennDiagramDHZGUBPPHelper48(
                  [...vennDiagramDHZGUBPPInput53.sets].sort(),
                ),
                vennDiagramDHZGUBPPBinding255 =
                  vennDiagramDHZGUBPPBinding101.get(
                    vennDiagramDHZGUBPPBinding254,
                  ),
                vennDiagramDHZGUBPPBinding256 =
                  vennDiagramDHZGUBPPBinding255?.fill;
              if (vennDiagramDHZGUBPPBinding256) {
                let vennDiagramDHZGUBPPBinding317 =
                    vennDiagramDHZGUBPPBinding253.select("path"),
                  vennDiagramDHZGUBPPBinding318 =
                    vennDiagramDHZGUBPPBinding317.attr("d");
                if (vennDiagramDHZGUBPPBinding318) {
                  let vennDiagramDHZGUBPPBinding338 =
                      vennDiagramDHZGUBPPBinding110.path(
                        vennDiagramDHZGUBPPBinding318,
                        {
                          roughness: 0.7,
                          seed: handDrawnSeed,
                          fill: s(vennDiagramDHZGUBPPBinding256, 0.3),
                          fillStyle: "cross-hatch",
                          fillWeight: 2,
                          hachureGap: 6,
                          hachureAngle: 60,
                          stroke: "none",
                        },
                      ),
                    vennDiagramDHZGUBPPBinding339 =
                      vennDiagramDHZGUBPPBinding317.node();
                  vennDiagramDHZGUBPPBinding339?.parentNode?.insertBefore(
                    vennDiagramDHZGUBPPBinding338,
                    vennDiagramDHZGUBPPBinding339,
                  );
                  vennDiagramDHZGUBPPBinding317.remove();
                }
              } else
                vennDiagramDHZGUBPPBinding253
                  .select("path")
                  .style("fill-opacity", 0);
              vennDiagramDHZGUBPPBinding253
                .select("text")
                .style("font-size", `${48 * vennDiagramDHZGUBPPBinding104}px`)
                .style(
                  "fill",
                  vennDiagramDHZGUBPPBinding255?.color ??
                    themeVariables.vennSetTextColor ??
                    vennDiagramDHZGUBPPBinding106,
                );
            })
        : (vennDiagramDHZGUBPPBinding108
            .selectAll(".venn-intersection text")
            .style("font-size", `${48 * vennDiagramDHZGUBPPBinding104}px`)
            .style("fill", (vennDiagramDHZGUBPPInput142) => {
              let vennDiagramDHZGUBPPBinding471 = vennDiagramDHZGUBPPHelper48(
                [...vennDiagramDHZGUBPPInput142.sets].sort(),
              );
              return (
                vennDiagramDHZGUBPPBinding101.get(vennDiagramDHZGUBPPBinding471)
                  ?.color ??
                themeVariables.vennSetTextColor ??
                vennDiagramDHZGUBPPBinding106
              );
            }),
          vennDiagramDHZGUBPPBinding108
            .selectAll(".venn-intersection path")
            .style("fill-opacity", (vennDiagramDHZGUBPPInput152) => {
              let vennDiagramDHZGUBPPBinding492 = vennDiagramDHZGUBPPHelper48(
                [...vennDiagramDHZGUBPPInput152.sets].sort(),
              );
              return +!!vennDiagramDHZGUBPPBinding101.get(
                vennDiagramDHZGUBPPBinding492,
              )?.fill;
            })
            .style("fill", (vennDiagramDHZGUBPPInput149) => {
              let vennDiagramDHZGUBPPBinding482 = vennDiagramDHZGUBPPHelper48(
                [...vennDiagramDHZGUBPPInput149.sets].sort(),
              );
              return (
                vennDiagramDHZGUBPPBinding101.get(vennDiagramDHZGUBPPBinding482)
                  ?.fill ?? "transparent"
              );
            }));
      let vennDiagramDHZGUBPPBinding114 = vennDiagramDHZGUBPPBinding107
          .append("g")
          .attr("transform", `translate(0, ${vennDiagramDHZGUBPPBinding105})`),
        vennDiagramDHZGUBPPBinding115 = vennDiagramDHZGUBPPBinding108
          .select("svg")
          .node();
      if (
        vennDiagramDHZGUBPPBinding115 &&
        "childNodes" in vennDiagramDHZGUBPPBinding115
      )
        for (let vennDiagramDHZGUBPPBinding548 of [
          ...vennDiagramDHZGUBPPBinding115.childNodes,
        ])
          vennDiagramDHZGUBPPBinding114
            .node()
            ?.appendChild(vennDiagramDHZGUBPPBinding548);
      _chunkICPOFSXXC(
        vennDiagramDHZGUBPPBinding107,
        vennDiagramDHZGUBPPBinding103,
        vennDiagramDHZGUBPPBinding102,
        vennDiagramDHZGUBPPBinding95?.useMaxWidth ?? true,
      );
    },
    "draw",
  );
  defineFunctionName(vennDiagramDHZGUBPPHelper48, "stableSetsKey");
  defineFunctionName(vennDiagramDHZGUBPPHelper49, "renderTextNodes");
  VennDiagramDHZGUBPP = {
    parser: vennDiagramDHZGUBPPBinding5,
    db: vennDiagramDHZGUBPPBinding25,
    renderer: {
      draw: vennDiagramDHZGUBPPBinding27,
    },
    styles: vennDiagramDHZGUBPPBinding26,
  };
})();
export { VennDiagramDHZGUBPP as diagram };
