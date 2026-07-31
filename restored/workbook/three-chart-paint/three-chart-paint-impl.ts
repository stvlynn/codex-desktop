// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Three.js 3D chart paint
// (legacy text-sprite / bar-layout / three-paint).
// Stage-3 wave-90; kept flat under maxFlatLines.
// Stock three.js already drained → vendor/three; this is Codex chart paint.

import {
  Box3,
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  Group,
  Line,
  LineBasicMaterial,
  MathUtils,
  Mesh,
  Sprite,
  SpriteMaterial,
  Vector3,
  Vector4,
} from "../../vendor/three";
import { Yn } from "../presentation-protobuf";
import { tcH } from "./boundary-hooks";

/** Chart 3D layout constants (legacy Binding1136–1138). */
export const THREE_CHART_BAR_DEPTH = 2.6;
export const THREE_CHART_MIN_EXTENT = 0.04;
export const THREE_CHART_MIN_HEIGHT = 0.02;

export function createChartTextSprite(tcIn1173: any, tcIn1174: any = {}) {
  let {
    fontSize = 28,
    color = "#1f2933",
    backgroundColor,
    padding = Math.ceil(fontSize * 0.35),
    fontFamily = tcH.defaultFontFamily,
    weight = "500",
    worldUnitsPerPixel = 0.004,
  } = tcIn1174;
  if (typeof OffscreenCanvas > "u")
    throw Error("OffscreenCanvas API is not available for chart text sprites.");
  let tcBind6685 = new OffscreenCanvas(1, 1),
    tcBind6686 = tcBind6685.getContext("2d");
  if (!tcBind6686)
    throw Error("Failed to acquire 2D context for text sprite");
  tcBind6686.font = `${weight} ${fontSize}px ${fontFamily}`;
  let tcBind6687 = tcBind6686.measureText(tcIn1173),
    tcBind6688 = Math.ceil(tcBind6687.width),
    tcBind6689 = Math.ceil(fontSize * 1.35);
  tcBind6685.width = Math.max(1, tcBind6688 + padding * 2);
  tcBind6685.height = Math.max(1, tcBind6689 + padding * 2);
  tcBind6686.font = `${weight} ${fontSize}px ${fontFamily}`;
  tcBind6686.textAlign = "center";
  tcBind6686.textBaseline = "middle";
  backgroundColor
    ? ((tcBind6686.fillStyle = backgroundColor),
      tcBind6686.fillRect(
        0,
        0,
        tcBind6685.width,
        tcBind6685.height,
      ))
    : tcBind6686.clearRect(
        0,
        0,
        tcBind6685.width,
        tcBind6685.height,
      );
  tcBind6686.fillStyle = color;
  tcBind6686.fillText(
    tcIn1173,
    tcBind6685.width / 2,
    tcBind6685.height / 2 + fontSize * 0.05,
  );
  let tcBind6690 = new CanvasTexture(tcBind6685);
  tcBind6690.anisotropy = 8;
  tcBind6690.needsUpdate = true;
  let tcBind6691 = new SpriteMaterial({
    map: tcBind6690,
    transparent: true,
  });
  tcBind6691.depthTest = false;
  tcBind6691.depthWrite = false;
  let tcBind6692 = new Sprite(tcBind6691);
  return (
    tcBind6692.scale.set(
      tcBind6685.width * worldUnitsPerPixel,
      tcBind6685.height * worldUnitsPerPixel,
      1,
    ),
    tcBind6692.center.set(0.5, 0.5),
    tcBind6692
  );
}
export function layoutThreeBarSegments(tcIn191: any, tcIn192: any, tcIn193: any, tcIn194: any, tcIn195: any, ) {
  let tcBind3032 = Math.max(
      THREE_CHART_BAR_DEPTH * 0.25,
      THREE_CHART_MIN_EXTENT,
    ),
    tcBind3033 =
      tcIn191.barOptions?.grouping ??
      Yn.BAR_GROUPING_UNSPECIFIED;
  if (
    !tcH.bh424(tcIn192.x) ||
    tcIn191.series.length === 0
  )
    return {
      segments: [],
      bounds: {
        minX: 0,
        maxX: 0,
        maxHeight: 0,
        minHeight: 0,
      },
      barDepth: tcBind3032,
      chartDepth: tcBind3032,
      categoryCount: 0,
      seriesLanes: [],
      grouping: tcBind3033,
      categories: [],
    };
  let tcBind3034 = tcH.bh421(
      tcIn191,
      tcIn195,
    ),
    tcBind3035 = tcBind3034.categories;
  if (tcBind3035.length === 0)
    return {
      segments: [],
      bounds: {
        minX: 0,
        maxX: 0,
        maxHeight: 0,
        minHeight: 0,
      },
      barDepth: tcBind3032,
      chartDepth: tcBind3032,
      categoryCount: 0,
      seriesLanes: [],
      grouping: tcBind3033,
      categories: [],
    };
  let tcBind3036 = tcIn192.x,
    tcBind3037 = tcIn192.y,
    tcBind3038 = tcH.bh520(tcIn193.width, 6),
    tcBind3039 = tcH.bh520(tcIn193.height, 4),
    tcBind3040 = tcH.bh520(
      tcIn193.width,
      THREE_CHART_BAR_DEPTH,
    ),
    tcBind3041 = tcBind3037(0),
    tcBind3042 = Number.isFinite(tcBind3041)
      ? tcBind3041 - tcIn193.y
      : tcIn193.height,
    tcBind3043 = (tcIn16387) =>
      (tcBind3042 - tcIn16387) * tcBind3039,
    tcBind3044 = tcBind3034.mode === "clustered",
    tcBind3045 =
      tcBind3033 === Yn.BAR_GROUPING_UNSPECIFIED,
    tcBind3046 = tcBind3034.visibleSeries,
    tcBind3047 = tcBind3045
      ? Math.max(tcBind3046.length, 1)
      : 1,
    tcBind3048 = Math.max(tcBind3036.bandwidth(), 1),
    tcBind3049 = tcBind3048 * 0.2,
    tcBind3050 = Math.max(
      tcBind3048 - tcBind3049,
      tcBind3048 * 0.4,
    ),
    tcBind3051 = tcBind3045 ? tcBind3050 * 0.2 : 0,
    tcBind3052 = tcBind3045
      ? Math.max(
          tcBind3050 - tcBind3051,
          tcBind3050 * 0.5,
        )
      : tcBind3050,
    tcBind3053 = tcBind3045
      ? tcBind3052 / Math.max(tcBind3047, 1)
      : tcBind3050,
    tcBind3054 = tcBind3045
      ? Math.max(tcBind3053 * tcBind3040, THREE_CHART_MIN_EXTENT)
      : tcBind3032,
    tcBind3055 =
      tcBind3045 && !tcBind3044
        ? Math.min(
            Math.max(tcBind3054 * 0.15, THREE_CHART_MIN_EXTENT * 0.5),
            Math.max(tcBind3054 - THREE_CHART_MIN_EXTENT, 0) * 0.5,
          )
        : 0,
    tcBind3056 = tcBind3045
      ? Math.max(
          tcBind3054 - tcBind3055 * 2,
          THREE_CHART_MIN_EXTENT,
        )
      : tcBind3032,
    tcBind3057 = tcBind3045
      ? Math.max(
          tcBind3051 * tcBind3040,
          tcBind3054 * 0.1,
        )
      : 0,
    tcBind3058 = tcBind3045 ? tcBind3057 : 0,
    tcBind3059 = tcBind3045
      ? tcBind3046.map(
          (item, index) =>
            tcBind3058 +
            tcBind3054 / 2 +
            index * (tcBind3054 + tcBind3057),
        )
      : [tcBind3054 / 2],
    tcBind3060 = tcBind3045
      ? tcBind3046.map((item, index) => ({
          seriesIndex: item,
          label:
            (tcIn191.series[item]?.name ?? "").trim() ||
            `Series ${index + 1}`,
          centerZ: tcBind3059[index] ?? tcBind3054 / 2,
        }))
      : [],
    tcBind3061 = [],
    tcBind3062 = 1 / 0,
    tcBind3063 = -1 / 0,
    tcBind3064 = 1 / 0,
    tcBind3065 = -1 / 0,
    tcBind3066 = 0,
    tcBind3067 = 0;
  tcBind3035.forEach((item, index) => {
    let tcBind5259 = tcBind3036(item);
    if (tcBind5259 === undefined) return;
    let tcBind5260 = tcBind5259 - tcIn193.x,
      tcBind5261 = (
        tcBind3034.segmentsByCategory[index] ?? []
      ).filter((_item) => {
        let tcBind21061 = tcIn191.series[_item.seriesIndex];
        return !tcBind21061 ||
          tcH.bh474(tcBind21061, index)
          ? false
          : !!tcH.bh469(
              tcBind21061,
              index,
              _item.seriesIndex,
              tcIn194,
            );
      }),
      tcBind5262 = tcBind5261.length || 1,
      tcBind5263 =
        tcBind3050 / Math.max(tcBind5262, 1);
    tcBind5261.forEach((_item, _index) => {
      let tcBind6095 = tcIn191.series[_item.seriesIndex];
      if (!tcBind6095) return;
      let tcBind6096 = tcH.bh469(
        tcBind6095,
        index,
        _item.seriesIndex,
        tcIn194,
      );
      if (!tcBind6096) return;
      let tcBind6097 = tcBind3045
          ? Math.max(0, tcBind3046.indexOf(_item.seriesIndex))
          : tcBind3044
            ? _index
            : 0,
        tcBind6098 = tcBind3045
          ? tcBind3050
          : tcBind3044
            ? tcBind5263
            : tcBind3048,
        tcBind6099 = tcBind3045
          ? (tcBind3048 - tcBind3050) / 2
          : tcBind3044
            ? (tcBind3048 - tcBind3050) / 2 +
              tcBind5263 * tcBind6097
            : 0,
        tcBind6100 = tcBind3037(_item.start),
        tcBind6101 = tcBind3037(_item.end);
      if (
        !Number.isFinite(tcBind6100) ||
        !Number.isFinite(tcBind6101) ||
        !Number.isFinite(tcBind6098)
      )
        return;
      let tcBind6102 = tcBind6100 - tcIn193.y,
        tcBind6103 = tcBind6101 - tcIn193.y,
        tcBind6104 = tcBind3043(tcBind6102),
        tcBind6105 = tcBind3043(tcBind6103),
        tcBind6106 = Math.max(
          Math.abs(tcBind6105 - tcBind6104),
          THREE_CHART_MIN_HEIGHT,
        ),
        tcBind6107 = (tcBind6104 + tcBind6105) / 2,
        tcBind6108 =
          (tcBind5260 +
            tcBind6099 +
            tcBind6098 / 2) *
          tcBind3038,
        tcBind6109 = Math.max(
          tcBind6098 * tcBind3038,
          THREE_CHART_MIN_EXTENT,
        ),
        tcBind6110 = tcBind3045
          ? tcBind3056
          : tcBind3054,
        tcBind6111 =
          tcBind3059[tcBind6097] ??
          tcBind3059[0] ??
          tcBind3056 / 2;
      if (tcBind3045 && !tcBind3044) {
        let tcBind22264 = Math.max(
          Math.min(tcBind6109, tcBind3056),
          THREE_CHART_MIN_EXTENT,
        );
        tcBind6109 = tcBind22264;
        tcBind6110 = tcBind22264;
      }
      tcBind3045 ||
        ((tcBind6110 = tcBind3044
          ? tcBind6109
          : tcBind3032),
        (tcBind6111 = tcBind6110 / 2));
      tcBind3061.push({
        key: `${index}-${_item.seriesIndex}-${_index}`,
        seriesIndex: _item.seriesIndex,
        position: {
          x: tcBind6108,
          y: tcBind6107,
          z: tcBind6111,
        },
        size: {
          width: tcBind6109,
          height: tcBind6106,
          depth: tcBind6110,
        },
        materialKey: tcBind6096,
      });
      let tcBind6112 = tcBind6108 - tcBind6109 / 2,
        tcBind6113 = tcBind6108 + tcBind6109 / 2;
      tcBind3062 = Math.min(tcBind3062, tcBind6112);
      tcBind3063 = Math.max(tcBind3063, tcBind6113);
      tcBind3066 = Math.max(
        tcBind3066,
        tcBind6107 + tcBind6106 / 2,
      );
      tcBind3067 = Math.min(
        tcBind3067,
        tcBind6107 - tcBind6106 / 2,
      );
      let tcBind6114 = tcBind6111 - tcBind6110 / 2,
        tcBind6115 = tcBind6111 + tcBind6110 / 2;
      tcBind3064 = Math.min(tcBind3064, tcBind6114);
      tcBind3065 = Math.max(tcBind3065, tcBind6115);
    });
  });
  (!Number.isFinite(tcBind3062) ||
    !Number.isFinite(tcBind3063)) &&
    ((tcBind3062 = 0), (tcBind3063 = 6));
  let tcBind3068 = Number.isFinite(tcBind3062)
    ? tcBind3062
    : 0;
  tcBind3068 !== 0 &&
    (tcBind3061.forEach((item) => {
      item.position = {
        ...item.position,
        x: item.position.x - tcBind3068,
      };
    }),
    (tcBind3062 -= tcBind3068),
    (tcBind3063 -= tcBind3068));
  tcBind3045 &&
    !tcBind3044 &&
    tcBind3061.length > 0 &&
    Number.isFinite(tcBind3064) &&
    Number.isFinite(tcBind3065) &&
    ((tcBind3064 -= tcBind3055),
    (tcBind3065 += tcBind3055));
  (!Number.isFinite(tcBind3064) ||
    !Number.isFinite(tcBind3065)) &&
    ((tcBind3064 = 0),
    (tcBind3065 = tcBind3045
      ? (tcBind3059[tcBind3059.length - 1] ??
        tcBind3056)
      : tcBind3032));
  let tcBind3069 = Number.isFinite(tcBind3064)
    ? tcBind3064
    : 0;
  return (
    tcBind3069 !== 0 &&
      (tcBind3061.forEach((item) => {
        item.position = {
          ...item.position,
          z: item.position.z - tcBind3069,
        };
      }),
      tcBind3060.forEach((item) => {
        item.centerZ -= tcBind3069;
      }),
      (tcBind3064 -= tcBind3069),
      (tcBind3065 -= tcBind3069)),
    {
      segments: tcBind3061,
      bounds: {
        minX: tcBind3062,
        maxX: tcBind3063,
        maxHeight: Math.max(tcBind3066, THREE_CHART_MIN_HEIGHT),
        minHeight: Math.min(tcBind3067, 0),
      },
      barDepth: tcBind3032,
      chartDepth: Number.isFinite(tcBind3065)
        ? Math.max(tcBind3065, THREE_CHART_MIN_EXTENT)
        : tcBind3032,
      categoryCount: tcBind3035.length,
      seriesLanes: tcBind3060,
      grouping: tcBind3033,
      categories: tcBind3035,
    }
  );
}
export function paintThreeChart(tcIn64: any, tcIn65: any, tcIn66: any, tcIn67: any, tcIn68: any, tcIn69: any, ) {
  let tcBind2501 = layoutThreeBarSegments(
    tcIn65,
    tcIn66,
    tcIn67,
    tcIn68,
    tcIn69,
  );
  if ((tcIn64.clear(), tcBind2501.segments.length === 0)) {
    tcIn64.renderer.setScissorTest(false);
    return;
  }
  let tcBind2502 = new Map(),
    tcBind2503 = tcIn64.renderer,
    tcBind2504 = tcIn64.camera,
    { width, height } = tcIn64.dims,
    tcBind2505 = Math.max(1, width),
    tcBind2506 = Math.max(1, height),
    tcBind2507 = tcBind2503.getViewport(
      new Vector4(),
    ),
    tcBind2508 = tcBind2503.getScissor(
      new Vector4(),
    ),
    tcBind2509 = tcBind2503.getScissorTest(),
    tcBind2510 = tcBind2504.aspect;
  tcBind2503.setViewport(
    0,
    0,
    tcBind2505,
    tcBind2506,
  );
  tcBind2503.setScissor(
    0,
    0,
    tcBind2505,
    tcBind2506,
  );
  tcBind2503.setScissorTest(true);
  tcBind2506 > 0 &&
    ((tcBind2504.aspect = width / Math.max(height, 1)),
    tcBind2504.updateProjectionMatrix());
  let { bounds, chartDepth, seriesLanes, grouping, categories } =
      tcBind2501,
    tcBind2511 = Math.max(
      bounds.maxX - bounds.minX,
      THREE_CHART_MIN_EXTENT,
    ),
    tcBind2512 = -(tcBind2511 * 0.5),
    tcBind2513 = Math.max(chartDepth, THREE_CHART_MIN_EXTENT),
    tcBind2514 = Math.min(bounds.minHeight, 0),
    tcBind2515 = Math.max(bounds.maxHeight, THREE_CHART_MIN_HEIGHT),
    tcBind2516 = tcBind2515 - tcBind2514 || 0.02,
    tcBind2517 = tcIn66.x,
    tcBind2518 = tcIn66.y,
    tcBind2519 = tcH.bh520(tcIn67.width, 6),
    tcBind2520 = tcH.bh520(tcIn67.height, 4),
    tcBind2521 = tcBind2518(0),
    tcBind2522 = Number.isFinite(tcBind2521)
      ? tcBind2521 - tcIn67.y
      : tcIn67.height,
    tcBind2523 = (tcIn10463) => {
      let tcBind20927 = tcBind2518(tcIn10463);
      if (!Number.isFinite(tcBind20927)) return null;
      let tcBind20928 = tcBind20927 - tcIn67.y;
      return (tcBind2522 - tcBind20928) * tcBind2520;
    },
    tcBind2524 = Math.max(tcBind2517.bandwidth(), 1),
    tcBind2525 = (tcIn11278) => {
      let tcBind21749 = tcBind2517(tcIn11278);
      return tcBind21749 === undefined
        ? null
        : (tcBind21749 - tcIn67.x + tcBind2524 / 2) *
            tcBind2519 -
            bounds.minX;
    },
    tcBind2526 = tcBind2523(0) ?? 0,
    tcBind2527 = (tcBind2514 + tcBind2515) * 0.5,
    tcBind2528 = chartDepth * 0.5,
    tcBind2529 = (tcIn16596) =>
      tcIn16596 - tcBind2527,
    tcBind2530 = (tcIn16597) =>
      tcIn16597 - tcBind2528,
    tcBind2531 = new Group(),
    tcBind2532 = new Group(),
    tcBind2533 = new Group(),
    tcBind2534 = new Group();
  tcBind2534.renderOrder = 20;
  let tcBind2535 = tcH.bh428(
      tcIn65.xAxis,
      tcIn68,
    ),
    tcBind2536 = tcH.bh428(
      tcIn65.yAxis,
      tcIn68,
    ),
    tcBind2537 = !!tcIn65.yAxis?.majorGridlines?.fill?.color,
    tcBind2538 =
      tcBind2536.gridLineColor ?? tcBind2536.lineColor,
    _e = (() => {
      let tcBind18084 = tcIn65.yAxis?.numberFormatCode,
        tcBind18085 = appInitialAt("~s");
      return (tcIn10294) => {
        if (tcBind18084)
          try {
            return tcH.ssfModule.default.format(
              tcBind18084,
              tcIn10294,
            );
          } catch {}
        return tcBind18085(tcIn10294);
      };
    })(),
    tcBind2539 = new LineBasicMaterial({
      color: new Color(
        tcBind2535.lineColor ?? "#2563eb",
      ),
      transparent: true,
      opacity: 0.9,
    }),
    tcBind2540 = new LineBasicMaterial({
      color: new Color(
        tcBind2536.lineColor ?? "#1f2937",
      ),
      transparent: true,
      opacity: 0.9,
    }),
    be = new LineBasicMaterial({
      color: new Color(
        tcBind2535.lineColor ?? "#2563eb",
      ),
      transparent: true,
      opacity: 0.9,
    }),
    tcBind2541 = new LineBasicMaterial({
      color: new Color(tcBind2538 ?? "#cbdcfb"),
      transparent: true,
      opacity: 0.25,
    }),
    tcBind2542 = new LineBasicMaterial({
      color: new Color("#dbeafe"),
      transparent: true,
      opacity: 0.2,
    }),
    tcBind2543 = new Line(
      new BufferGeometry().setFromPoints([
        new Vector3(
          tcBind2512,
          tcBind2529(tcBind2526),
          tcBind2530(0),
        ),
        new Vector3(
          tcBind2512 + tcBind2511,
          tcBind2529(tcBind2526),
          tcBind2530(0),
        ),
      ]),
      tcBind2539.clone(),
    );
  tcBind2543.renderOrder = 5;
  tcBind2533.add(tcBind2543);
  let tcBind2544 = new Line(
    new BufferGeometry().setFromPoints([
      new Vector3(
        tcBind2512,
        tcBind2529(tcBind2526),
        tcBind2530(0),
      ),
      new Vector3(
        tcBind2512,
        tcBind2529(tcBind2526),
        tcBind2530(tcBind2513),
      ),
    ]),
    be.clone(),
  );
  tcBind2544.renderOrder = 5;
  tcBind2533.add(tcBind2544);
  let tcBind2545 = new Line(
    new BufferGeometry().setFromPoints([
      new Vector3(
        tcBind2512,
        tcBind2529(tcBind2514),
        tcBind2530(tcBind2513),
      ),
      new Vector3(
        tcBind2512,
        tcBind2529(tcBind2515),
        tcBind2530(tcBind2513),
      ),
    ]),
    tcBind2540.clone(),
  );
  if (
    ((tcBind2545.renderOrder = 5),
    tcBind2533.add(tcBind2545),
    tcBind2518.ticks(6).forEach((item) => {
      let tcBind9441 = tcBind2523(item);
      if (tcBind9441 === null) return;
      if (tcBind2537 && !(Math.abs(item) < 1e-6)) {
        let tcBind12919 = new Line(
          new BufferGeometry().setFromPoints([
            new Vector3(
              tcBind2512,
              tcBind2529(tcBind9441),
              tcBind2530(0),
            ),
            new Vector3(
              tcBind2512 + tcBind2511,
              tcBind2529(tcBind9441),
              tcBind2530(0),
            ),
          ]),
          tcBind2541.clone(),
        );
        tcBind12919.renderOrder = -2;
        tcBind2532.add(tcBind12919);
        let tcBind12920 = new Line(
          new BufferGeometry().setFromPoints([
            new Vector3(
              tcBind2512,
              tcBind2529(tcBind9441),
              tcBind2530(tcBind2513),
            ),
            new Vector3(
              tcBind2512 + tcBind2511,
              tcBind2529(tcBind9441),
              tcBind2530(tcBind2513),
            ),
          ]),
          tcBind2541.clone(),
        );
        tcBind12920.renderOrder = -2;
        tcBind2532.add(tcBind12920);
      }
      let tcBind9442 = createChartTextSprite(_e(item), {
        fontSize: 26,
        color: tcBind2536.textColor ?? "#1f2933",
        weight: "500",
      });
      tcBind9442.position.set(
        tcBind2512 -
          Math.max(tcBind2511, tcBind2513) * 0.08,
        tcBind2529(tcBind9441),
        tcBind2530(0 - tcBind2513 * 0.05),
      );
      tcBind2534.add(tcBind9442);
    }),
    categories.forEach((item) => {
      let tcBind12698 = tcBind2525(item);
      if (tcBind12698 === null) return;
      let tcBind12699 = tcBind2512 + tcBind12698,
        tcBind12700 = new Line(
          new BufferGeometry().setFromPoints([
            new Vector3(
              tcBind12699,
              tcBind2529(tcBind2526),
              tcBind2530(0),
            ),
            new Vector3(
              tcBind12699,
              tcBind2529(tcBind2526),
              tcBind2530(tcBind2513),
            ),
          ]),
          tcBind2542.clone(),
        );
      tcBind12700.renderOrder = -2;
      tcBind2532.add(tcBind12700);
      let tcBind12701 = createChartTextSprite(String(item), {
        fontSize: 26,
        color: tcBind2535.textColor ?? "#111827",
      });
      tcBind12701.position.set(
        tcBind12699,
        tcBind2529(
          tcBind2526 - Math.min(tcBind2516 * 0.12, 0.5),
        ),
        tcBind2530(0 - tcBind2513 * 0.06),
      );
      tcBind2534.add(tcBind12701);
    }),
    grouping === Yn.BAR_GROUPING_UNSPECIFIED && seriesLanes.length)
  ) {
    let tcBind8083 = new Map();
    tcBind2501.segments.forEach((item) => {
      tcBind8083.has(item.seriesIndex) ||
        tcBind8083.set(item.seriesIndex, item.size.depth);
    });
    let tcBind8084 = new Set();
    seriesLanes.forEach((item) => {
      let tcBind13770 = tcBind8083.get(item.seriesIndex) ?? 0,
        tcBind13771 = item.centerZ,
        tcBind13772 = createChartTextSprite(item.label, {
          fontSize: 24,
          color: tcBind2535.textColor ?? "#111827",
          weight: "500",
        });
      tcBind13772.position.set(
        tcBind2512 +
          tcBind2511 +
          Math.max(tcBind2511, tcBind2513) * 0.06,
        tcBind2529(
          tcBind2526 - Math.min(tcBind2516 * 0.08, 0.4),
        ),
        tcBind2530(tcBind13771),
      );
      tcBind2534.add(tcBind13772);
      tcBind13770 > 0 &&
        (tcBind8084.add(
          tcBind13771 - tcBind13770 / 2,
        ),
        tcBind8084.add(
          tcBind13771 + tcBind13770 / 2,
        ));
    });
    let tcBind8085 = tcBind2542.clone();
    tcBind8085.opacity = 0.3;
    Array.from(tcBind8084)
      .sort(
        (tcIn16521, tcIn16522) =>
          tcIn16521 - tcIn16522,
      )
      .forEach((item) => {
        let tcBind17128 = new Line(
          new BufferGeometry().setFromPoints([
            new Vector3(
              tcBind2512,
              tcBind2529(tcBind2526),
              tcBind2530(item),
            ),
            new Vector3(
              tcBind2512 + tcBind2511,
              tcBind2529(tcBind2526),
              tcBind2530(item),
            ),
          ]),
          tcBind8085.clone(),
        );
        tcBind17128.renderOrder = -2;
        tcBind2532.add(tcBind17128);
      });
  }
  tcBind2501.segments.forEach((item) => {
    let tcBind16472 = new BoxGeometry(
        item.size.width,
        item.size.height,
        item.size.depth,
      ),
      tcBind16473 = tcH.bh519(
        item.materialKey,
        tcBind2502,
      ),
      tcBind16474 = new $P(tcBind16472, tcBind16473);
    tcBind16474.castShadow = true;
    tcBind16474.receiveShadow = true;
    tcBind16474.position.set(
      tcBind2512 + item.position.x,
      tcBind2529(item.position.y),
      tcBind2530(item.position.z),
    );
    tcBind2531.add(tcBind16474);
  });
  tcIn64.chartGroup.add(tcBind2532);
  tcIn64.chartGroup.add(tcBind2531);
  tcIn64.chartGroup.add(tcBind2533);
  tcIn64.chartGroup.add(tcBind2534);
  let tcBind2546 = tcIn64.chartGroup.rotation.clone(),
    tcBind2547 =
      Math.abs(tcBind2546.x) > 1e-5 ||
      Math.abs(tcBind2546.y) > 1e-5 ||
      Math.abs(tcBind2546.z) > 1e-5;
  tcBind2547 && tcIn64.chartGroup.rotation.set(0, 0, 0);
  tcIn64.chartGroup.updateMatrixWorld(true);
  let tcBind2548 = tcBind2531,
    tcBind2549 = new Box3().setFromObject(
      tcBind2548,
    ),
    tcBind2550 = new Vector3(),
    tcBind2551 = new Vector3();
  tcBind2549.getCenter(tcBind2550);
  tcBind2549.getSize(tcBind2551);
  tcBind2551.x === 0 &&
    tcBind2551.y === 0 &&
    tcBind2551.z === 0 &&
    tcBind2551.set(
      Math.max(tcBind2511, 1),
      Math.max(tcBind2516, 1),
      Math.max(tcBind2513, 1),
    );
  let tcBind2552 = MathUtils.degToRad(
      tcBind2504.fov * 0.5,
    ),
    tcBind2553 = Math.max(0.001, tcBind2552),
    tcBind2554 = tcBind2504.aspect || 1,
    tcBind2555 = Math.atan(
      Math.tan(tcBind2553) * tcBind2554,
    ),
    tcBind2556 = Math.max(0.001, tcBind2555),
    tcBind2557 = Math.max(Math.tan(tcBind2553), 1e-4),
    tcBind2558 = Math.max(Math.tan(tcBind2556), 1e-4),
    tcBind2559 = tcBind2551.clone().multiplyScalar(0.5);
  tcBind2559.x = Math.max(
    tcBind2559.x * 1.3,
    THREE_CHART_MIN_EXTENT,
  );
  tcBind2559.y = Math.max(
    tcBind2559.y * 1.3,
    THREE_CHART_MIN_HEIGHT,
  );
  tcBind2559.z = Math.max(
    tcBind2559.z * 1.3,
    THREE_CHART_MIN_EXTENT,
  );
  let tcBind2560 = tcBind2550.clone(),
    tcBind2561 = tcH.cameraDir.clone().normalize(),
    tcBind2562 = tcBind2561.clone().negate(),
    tcBind2563 = new Vector3(0, 1, 0);
  Math.abs(tcBind2562.dot(tcBind2563)) > 0.99 &&
    (tcBind2563 = new Vector3(1, 0, 0));
  let tcBind2564 = new Vector3().crossVectors(
    tcBind2563,
    tcBind2562,
  );
  tcBind2564.lengthSq() < 1e-6 &&
    ((tcBind2563 = new Vector3(0, 0, 1)),
    (tcBind2564 = new Vector3().crossVectors(
      tcBind2563,
      tcBind2562,
    )));
  tcBind2564.normalize();
  let tcBind2565 = new Vector3()
      .crossVectors(tcBind2562, tcBind2564)
      .normalize(),
    tcBind2566 = [];
  [-1, 1].forEach((item) => {
    [-1, 1].forEach((_item) => {
      [-1, 1].forEach((__item) => {
        tcBind2566.push(
          new Vector3(
            tcBind2559.x * item,
            tcBind2559.y * _item,
            tcBind2559.z * __item,
          ),
        );
      });
    });
  });
  let tcBind2567 = tcBind2566.map((item) =>
      tcBind2560.clone().add(item),
    ),
    tcBind2568 = tcBind2559.length() * 2,
    tcBind2569 = (tcIn6549) => {
      tcBind2504.position
        .copy(tcBind2560)
        .addScaledVector(tcBind2561, tcIn6549);
      let tcBind16794 = tcBind2560;
      tcBind2504.up.copy(tcBind2565);
      tcBind2504.near = 0.1;
      tcBind2504.far = Math.max(
        tcBind2504.near + 1,
        tcIn6549 + tcBind2568 * 4,
      );
      tcBind2504.lookAt(tcBind16794);
      tcBind2504.updateMatrixWorld(true);
      tcBind2504.updateProjectionMatrix();
    },
    tcBind2570 = (tcIn2876) => {
      tcBind2569(tcIn2876);
      let tcBind10696 = tcBind2560;
      tcBind2504.lookAt(tcBind10696);
      tcBind2504.updateMatrixWorld(true);
      tcBind2504.updateProjectionMatrix();
      let tcBind10697 = 0,
        tcBind10698 = 0,
        tcBind10699 = 1 / 0,
        tcBind10700 = 0;
      return (
        tcBind2567.forEach((item) => {
          let tcBind17049 = item.clone().project(tcBind2504);
          tcBind10697 = Math.max(
            tcBind10697,
            Math.abs(tcBind17049.x),
          );
          tcBind10698 = Math.max(
            tcBind10698,
            Math.abs(tcBind17049.y),
          );
          let tcBind17050 = -item
            .clone()
            .applyMatrix4(tcBind2504.matrixWorldInverse).z;
          tcBind10699 = Math.min(
            tcBind10699,
            tcBind17050,
          );
          tcBind10700 = Math.max(
            tcBind10700,
            tcBind17050,
          );
        }),
        {
          fits:
            tcBind10697 <= 1 &&
            tcBind10698 <= 1 &&
            tcBind10699 > 0,
          maxAbsX: tcBind10697,
          maxAbsY: tcBind10698,
          minDepth: tcBind10699,
          maxDepth: tcBind10700,
        }
      );
    },
    tcBind2571 =
      Math.max(
        tcBind2559.x / tcBind2558,
        tcBind2559.y / tcBind2557,
      ) + tcBind2559.z,
    tcBind2572 = 0.1,
    tcBind2573 = Math.max(
      tcBind2571,
      tcBind2572 * 4,
    ),
    $e = tcBind2570(tcBind2573),
    tcBind2574 = 0;
  for (; !$e.fits && tcBind2574 < 24; ) {
    tcBind2573 *= 2;
    $e = tcBind2570(tcBind2573);
    tcBind2574 += 1;
  }
  let tcBind2575 = $e;
  for (
    let tcBind20901 = 0;
    tcBind20901 < 28;
    tcBind20901 += 1
  ) {
    let tcBind21932 =
        (tcBind2572 + tcBind2573) * 0.5,
      tcBind21933 = tcBind2570(tcBind21932);
    tcBind21933.fits
      ? ((tcBind2573 = tcBind21932),
        (tcBind2575 = tcBind21933))
      : (tcBind2572 = tcBind21932);
  }
  let tcBind2576 = tcBind2573;
  tcBind2569(tcBind2576);
  let tcBind2577 = tcBind2560;
  tcBind2575 = tcBind2570(tcBind2576);
  let tcBind2578 = Math.max(
      0.1,
      Math.min(
        tcBind2575.minDepth * 0.8,
        tcBind2575.minDepth - 0.05,
      ),
    ),
    at = Math.max(tcBind2578 + 1, tcBind2575.maxDepth * 1.2);
  tcBind2504.near = tcBind2578;
  tcBind2504.far = at;
  tcBind2504.lookAt(tcBind2577);
  tcBind2504.updateMatrixWorld(true);
  tcBind2504.updateProjectionMatrix();
  tcBind2547 &&
    (tcIn64.chartGroup.rotation.copy(tcBind2546),
    tcIn64.chartGroup.updateMatrixWorld(true));
  tcBind2503.render(tcIn64.scene, tcBind2504);
  tcBind2503.setViewport(tcBind2507);
  tcBind2503.setScissor(tcBind2508);
  tcBind2503.setScissorTest(tcBind2509);
  tcBind2509 || tcBind2503.setScissorTest(false);
  tcBind2504.aspect = tcBind2510;
  tcBind2504.updateProjectionMatrix();
}
