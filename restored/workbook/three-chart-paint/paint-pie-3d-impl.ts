// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Three.js pie-3D slice mesh paint (legacy txe).
// Stage-3 wave-103. Sibling of three-chart-paint-impl (flat-line budget).

import { CylinderGeometry, Group, Mesh } from "../../vendor/three";
import { sum } from "../../vendor/d3-array-min";
import { pie } from "../../vendor/d3-shape-line-pie-stack";
import { fitThreeChartCamera } from "../three-chart-camera";
import {
  THREE_CHART_BAR_DEPTH,
  THREE_CHART_MIN_EXTENT,
} from "./three-chart-paint-impl";
import { tcH } from "./boundary-hooks";

void CylinderGeometry;
void Group;
void Mesh;
void sum;
void pie;
void fitThreeChartCamera;
void THREE_CHART_BAR_DEPTH;
void THREE_CHART_MIN_EXTENT;
void tcH;

export function paintPie3d(tcpIn958: any, tcpIn959: any, tcpIn960: any, tcpIn961: any, tcpIn962: any, ) {
  let tcpBind6029 = tcpIn959.series[0];
  if (!tcpBind6029) {
    tcpHelper522(tcpIn958);
    return;
  }
  if (tcpIn962?.has(0)) {
    tcpHelper522(tcpIn958);
    return;
  }
  let tcpBind6030 = tcpBind6029.values ?? [],
    tcpBind6031 = sum(tcpBind6030);
  if (!Number.isFinite(tcpBind6031) || tcpBind6031 === 0) {
    tcpHelper522(tcpIn958);
    return;
  }
  let tcpBind6032 = Math.max(
      Math.min(tcpIn960.width, tcpIn960.height) / 2,
      1,
    ),
    tcpBind6033 = tcpBind6032 * 2,
    tcpBind6034 = tcH.bh520(
      Math.max(tcpBind6033, 1),
      Math.min(6, THREE_CHART_BAR_DEPTH),
    ),
    tcpBind6035 = Math.max(
      tcpBind6032 * tcpBind6034,
      THREE_CHART_MIN_EXTENT * 2,
    ),
    tcpBind6036 = Math.max(
      Math.min(tcpBind6035 * 0.35, 2.4),
      THREE_CHART_MIN_EXTENT * 2,
    ),
    tcpBind6037 =
      ((tcpIn959.pieOptions?.firstSliceAngle ?? 0) / 360) * Math.PI * 2,
    tcpBind6038 = pie()
      .sort(null)
      .startAngle(tcpBind6037)
      .endAngle(tcpBind6037 + Math.PI * 2)(tcpBind6030)
      .filter((item) => Number.isFinite(item.value) && item.value !== 0);
  if (tcpBind6038.length === 0) {
    tcpHelper522(tcpIn958);
    return;
  }
  tcpIn958.clear();
  let tcpBind6039 = new Map(),
    tcpBind6040 = new Group();
  if (
    ((tcpBind6040.name = "pie3dSlices"),
    tcpBind6038.forEach((item, index) => {
      let tcpBind12362 = item.index ?? index;
      if (tcH.bh474(tcpBind6029, tcpBind12362)) return;
      let tcpBind12363 = tcH.bh469(
        tcpBind6029,
        tcpBind12362,
        tcpBind12362,
        tcpIn961,
      );
      if (!tcpBind12363) return;
      let tcpBind12364 = item.endAngle - item.startAngle,
        tcpBind12365 = Math.max(
          Math.abs(tcpBind12364),
          tcH.pieMinAngle,
        );
      if (!Number.isFinite(tcpBind12365)) return;
      let tcpBind12366 = pie3dStartAngleOffset(Math.PI / 2 - item.endAngle),
        tcpBind12367 = Math.max(
          tcH.pieMaxSegments,
          Math.ceil(tcpBind12365 / (Math.PI / 32)),
        ),
        tcpBind12368 = new CylinderGeometry(
          tcpBind6035,
          tcpBind6035,
          tcpBind6036,
          tcpBind12367,
          1,
          false,
          tcpBind12366,
          tcpBind12365,
        ),
        tcpBind12369 = tcH.bh519(
          tcpBind12363,
          tcpBind6039,
        ),
        tcpBind12370 = new Mesh(
          tcpBind12368,
          tcpBind12369,
        );
      tcpBind12370.castShadow = true;
      tcpBind12370.receiveShadow = true;
      tcpBind6040.add(tcpBind12370);
    }),
    tcpBind6040.children.length === 0)
  ) {
    tcpHelper522(tcpIn958);
    return;
  }
  tcpIn958.chartGroup.add(tcpBind6040);
  fitThreeChartCamera(tcpIn958, tcpBind6040);
}
function pie3dStartAngleOffset(tcpIn12132: any) {
  let tcpBind22297 = Math.PI * 2,
    tcpBind22298 = tcpIn12132 % tcpBind22297;
  return tcpBind22298 < 0
    ? tcpBind22298 + tcpBind22297
    : tcpBind22298;
}
function tcpHelper522(tcpIn13532: any) {
  tcpIn13532.clear();
  tcpIn13532.renderer.setScissorTest(false);
}

/** Legacy alias. */
export const txe = paintPie3d;
