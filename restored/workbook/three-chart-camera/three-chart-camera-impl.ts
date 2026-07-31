// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: three-cam fit/render for 3D pie charts (legacy rxe).
// Stage-3 wave-97.

import { Box3, MathUtils, Vector3, Vector4 } from "../../vendor/three";
import {
  THREE_CHART_BAR_DEPTH,
  THREE_CHART_MIN_EXTENT,
  THREE_CHART_MIN_HEIGHT,
} from "../three-chart-paint";
import { tccH } from "./boundary-hooks";

void Box3;
void MathUtils;
void Vector3;
void Vector4;
void THREE_CHART_BAR_DEPTH;
void THREE_CHART_MIN_EXTENT;
void THREE_CHART_MIN_HEIGHT;
void tccH;

export function fitThreeChartCamera(tccIn287: any, tccIn288: any) {
  let tccBind3463 = tccIn287.renderer,
    tccBind3464 = tccIn287.camera,
    { width, height } = tccIn287.dims,
    tccBind3465 = Math.max(1, width),
    tccBind3466 = Math.max(1, height),
    tccBind3467 = tccBind3463.getViewport(new Vector4()),
    tccBind3468 = tccBind3463.getScissor(new Vector4()),
    tccBind3469 = tccBind3463.getScissorTest(),
    tccBind3470 = tccBind3464.aspect;
  tccBind3463.setViewport(0, 0, tccBind3465, tccBind3466);
  tccBind3463.setScissor(0, 0, tccBind3465, tccBind3466);
  tccBind3463.setScissorTest(true);
  tccBind3466 > 0 &&
    ((tccBind3464.aspect = width / Math.max(height, 1)),
    tccBind3464.updateProjectionMatrix());
  let tccBind3471 = tccIn287.chartGroup.rotation.clone(),
    tccBind3472 =
      Math.abs(tccBind3471.x) > 1e-5 ||
      Math.abs(tccBind3471.y) > 1e-5 ||
      Math.abs(tccBind3471.z) > 1e-5;
  tccBind3472 && tccIn287.chartGroup.rotation.set(0, 0, 0);
  tccIn287.chartGroup.updateMatrixWorld(true);
  let tccBind3473 = new Box3().setFromObject(tccIn288),
    tccBind3474 = new Vector3(),
    tccBind3475 = new Vector3();
  tccBind3473.getCenter(tccBind3474);
  tccBind3473.getSize(tccBind3475);
  tccBind3475.x === 0 &&
    tccBind3475.y === 0 &&
    tccBind3475.z === 0 &&
    tccBind3475.set(
      Math.max(3, THREE_CHART_MIN_EXTENT),
      Math.max(THREE_CHART_MIN_HEIGHT, 0.2),
      Math.max(THREE_CHART_BAR_DEPTH * 0.5, THREE_CHART_MIN_EXTENT),
    );
  let tccBind3476 = MathUtils.degToRad(tccBind3464.fov * 0.5),
    tccBind3477 = Math.max(0.001, tccBind3476),
    tccBind3478 = tccBind3464.aspect || 1,
    tccBind3479 = Math.atan(Math.tan(tccBind3477) * tccBind3478),
    tccBind3480 = Math.max(0.001, tccBind3479),
    tccBind3481 = Math.max(Math.tan(tccBind3477), 1e-4),
    tccBind3482 = Math.max(Math.tan(tccBind3480), 1e-4),
    tccBind3483 = tccBind3475.clone().multiplyScalar(0.5);
  tccBind3483.x = Math.max(tccBind3483.x * 1.25, THREE_CHART_MIN_EXTENT);
  tccBind3483.y = Math.max(tccBind3483.y * 1.25, THREE_CHART_MIN_HEIGHT);
  tccBind3483.z = Math.max(tccBind3483.z * 1.25, THREE_CHART_MIN_EXTENT);
  let tccBind3484 = tccBind3474.clone(),
    tccBind3485 = tccH.cameraDir.clone().normalize(),
    tccBind3486 = tccBind3485.clone().negate(),
    tccBind3487 = new Vector3(0, 1, 0);
  Math.abs(tccBind3486.dot(tccBind3487)) > 0.99 &&
    (tccBind3487 = new Vector3(1, 0, 0));
  let tccBind3488 = new Vector3().crossVectors(tccBind3487, tccBind3486);
  tccBind3488.lengthSq() < 1e-6 &&
    ((tccBind3487 = new Vector3(0, 0, 1)),
    (tccBind3488 = new Vector3().crossVectors(tccBind3487, tccBind3486)));
  tccBind3488.normalize();
  let tccBind3489 = new Vector3()
      .crossVectors(tccBind3486, tccBind3488)
      .normalize(),
    tccBind3490 = [];
  [-1, 1].forEach((item) => {
    [-1, 1].forEach((_item) => {
      [-1, 1].forEach((__item) => {
        tccBind3490.push(
          new Vector3(
            tccBind3483.x * item,
            tccBind3483.y * _item,
            tccBind3483.z * __item,
          ),
        );
      });
    });
  });
  let tccBind3491 = tccBind3490.map((item) => tccBind3484.clone().add(item)),
    tccBind3492 = tccBind3483.length() * 2,
    tccBind3493 = (tccIn6631) => {
      tccBind3464.position
        .copy(tccBind3484)
        .addScaledVector(tccBind3485, tccIn6631);
      let tccBind16929 = tccBind3484;
      tccBind3464.up.copy(tccBind3489);
      tccBind3464.near = 0.1;
      tccBind3464.far = Math.max(
        tccBind3464.near + 1,
        tccIn6631 + tccBind3492 * 4,
      );
      tccBind3464.lookAt(tccBind16929);
      tccBind3464.updateMatrixWorld(true);
      tccBind3464.updateProjectionMatrix();
    },
    tccBind3494 = (tccIn2885) => {
      tccBind3493(tccIn2885);
      let tccBind10731 = tccBind3484;
      tccBind3464.lookAt(tccBind10731);
      tccBind3464.updateMatrixWorld(true);
      tccBind3464.updateProjectionMatrix();
      let tccBind10732 = 0,
        tccBind10733 = 0,
        tccBind10734 = 1 / 0,
        tccBind10735 = 0;
      return (
        tccBind3491.forEach((item) => {
          let tccBind17051 = item.clone().project(tccBind3464);
          tccBind10732 = Math.max(tccBind10732, Math.abs(tccBind17051.x));
          tccBind10733 = Math.max(tccBind10733, Math.abs(tccBind17051.y));
          let tccBind17052 = -item
            .clone()
            .applyMatrix4(tccBind3464.matrixWorldInverse).z;
          tccBind10734 = Math.min(tccBind10734, tccBind17052);
          tccBind10735 = Math.max(tccBind10735, tccBind17052);
        }),
        {
          fits: tccBind10732 <= 1 && tccBind10733 <= 1 && tccBind10734 > 0,
          maxAbsX: tccBind10732,
          maxAbsY: tccBind10733,
          minDepth: tccBind10734,
          maxDepth: tccBind10735,
        }
      );
    },
    tccBind3495 =
      Math.max(tccBind3483.x / tccBind3482, tccBind3483.y / tccBind3481) +
      tccBind3483.z,
    tccBind3496 = 0.1,
    tccBind3497 = Math.max(tccBind3495, tccBind3496 * 4),
    tccBind3498 = tccBind3494(tccBind3497),
    tccBind3499 = 0;
  for (; !tccBind3498.fits && tccBind3499 < 24; ) {
    tccBind3497 *= 2;
    tccBind3498 = tccBind3494(tccBind3497);
    tccBind3499 += 1;
  }
  let tccBind3500 = tccBind3498;
  for (let tccBind20902 = 0; tccBind20902 < 28; tccBind20902 += 1) {
    let tccBind21934 = (tccBind3496 + tccBind3497) * 0.5,
      tccBind21935 = tccBind3494(tccBind21934);
    tccBind21935.fits
      ? ((tccBind3497 = tccBind21934), (tccBind3500 = tccBind21935))
      : (tccBind3496 = tccBind21934);
  }
  let tccBind3501 = tccBind3497;
  tccBind3493(tccBind3501);
  let tccBind3502 = tccBind3484;
  tccBind3500 = tccBind3494(tccBind3501);
  let tccBind3503 = Math.max(
      0.1,
      Math.min(tccBind3500.minDepth * 0.8, tccBind3500.minDepth - 0.05),
    ),
    tccBind3504 = Math.max(tccBind3503 + 1, tccBind3500.maxDepth * 1.2);
  tccBind3464.near = tccBind3503;
  tccBind3464.far = tccBind3504;
  tccBind3464.lookAt(tccBind3502);
  tccBind3464.updateMatrixWorld(true);
  tccBind3464.updateProjectionMatrix();
  tccBind3472 &&
    (tccIn287.chartGroup.rotation.copy(tccBind3471),
    tccIn287.chartGroup.updateMatrixWorld(true));
  tccBind3463.render(tccIn287.scene, tccBind3464);
  tccBind3463.setViewport(tccBind3467);
  tccBind3463.setScissor(tccBind3468);
  tccBind3463.setScissorTest(tccBind3469);
  tccBind3469 || tccBind3463.setScissorTest(false);
  tccBind3464.aspect = tccBind3470;
  tccBind3464.updateProjectionMatrix();
}

/** Legacy alias. */
export const rxe = fitThreeChartCamera;
