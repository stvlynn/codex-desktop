// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: mapbox choropleth surface paint (legacy Kye / paintSurface).
// Stage-3 wave-100.

import { extent as d3Extent } from "d3-array";
import { scaleLinear as d3ScaleLinear } from "../../vendor/d3-scale-linear";
import { csmH } from "./boundary-hooks";

void d3Extent;
void d3ScaleLinear;
void csmH;

export function paintSurfaceMap(csmIn512: any, csmIn513: any, csmIn514: any, csmIn515: any, csmIn516: any = {}, ) {
  let csmBind4289 = csmIn512.map;
  if (!csmIn513.series.length) return;
  if (
    csmIn516.hiddenSeriesIndices?.has(0) ||
    csmIn513.series[0] == null
  ) {
    csmIn512.clear();
    return;
  }
  let csmBind4290 = csmIn513.series[0],
    csmBind4291 =
      csmBind4290.categories &&
      csmBind4290.categories.length > 0
        ? csmBind4290.categories
        : csmIn513.categories,
    csmBind4292 = csmBind4290.values ?? [];
  if (
    !csmBind4291 ||
    csmBind4291.length === 0 ||
    csmBind4292.length === 0
  ) {
    csmIn512.clear();
    return;
  }
  let csmBind4293 = new Map();
  if (
    (csmBind4291.forEach((item, index) => {
      let csmBind20953 = csmBind4292[index],
        csmBind20954 = csmH.normalizeMapCategory(item);
      csmBind20954 &&
        typeof csmBind20953 == "number" &&
        Number.isFinite(csmBind20953) &&
        csmBind4293.set(csmBind20954, csmBind20953);
    }),
    csmBind4293.size === 0)
  ) {
    csmIn512.clear();
    return;
  }
  let [csmBind4294, csmBind4295] = d3Extent(
      Array.from(csmBind4293.values()),
    ),
    csmBind4296 = csmH.bh466(
      csmH.bh465(csmBind4290, 0, csmIn515),
    ),
    csmBind4297 = csmBind4294 ?? 0,
    csmBind4298 = csmBind4295 ?? csmBind4297,
    csmBind4299 = +(csmBind4298 === csmBind4297),
    csmBind4300 = d3ScaleLinear()
      .domain([csmBind4297, csmBind4298 + csmBind4299])
      .range([csmBind4296.start, csmBind4296.end]),
    csmBind4301 = new Map(),
    csmBind4302 = new Map();
  csmBind4293.forEach((item, index) => {
    csmBind4301.set(index, csmBind4300(item));
    csmBind4302.set(index, 0.9);
  });
  let csmBind4303 = csmH.bh467(
      csmBind4301,
      csmBind4296.fallback,
    ),
    csmBind4304 = csmH.bh467(csmBind4302, 0.55),
    csmBind4305 = csmH.mapElementIdStem(
      csmIn516.elementId ?? csmIn513.id ?? "chart",
    ),
    csmBind4306 = `granola-map-source-${csmBind4305}`,
    csmBind4307 = `granola-map-fill-${csmBind4305}`,
    csmBind4308 = `granola-map-outline-${csmBind4305}`,
    csmBind4309 = () => {
      csmBind4289.getSource(csmBind4306) ||
        (csmBind4289.addSource(csmBind4306, {
          type: "vector",
          url: csmH.mapSourceUrl,
        }),
        csmIn512.trackSource(csmBind4306));
      csmBind4289.getLayer(csmBind4307)
        ? (csmBind4289.setPaintProperty(
            csmBind4307,
            "fill-color",
            csmBind4303,
          ),
          csmBind4289.setPaintProperty(
            csmBind4307,
            "fill-opacity",
            csmBind4304,
          ))
        : (csmBind4289.addLayer({
            id: csmBind4307,
            type: "fill",
            source: csmBind4306,
            "source-layer": csmH.mapSourceLayer,
            paint: {
              "fill-color": csmBind4303,
              "fill-opacity": csmBind4304,
            },
          }),
          csmIn512.trackLayer(csmBind4307));
      csmBind4289.getLayer(csmBind4308) ||
        (csmBind4289.addLayer({
          id: csmBind4308,
          type: "line",
          source: csmBind4306,
          "source-layer": csmH.mapSourceLayer,
          paint: {
            "line-color": "#ffffff",
            "line-width": 0.5,
            "line-opacity": 0.6,
          },
        }),
        csmIn512.trackLayer(csmBind4308));
      let csmBind7443 = [0, 15],
        csmBind7444 = csmBind4289.getZoom(),
        csmBind7445 = csmBind4289.getCenter();
      (Math.abs(csmBind7444 - 0.2) > 0.01 ||
        Math.abs(csmBind7445.lng - csmBind7443[0]) > 0.5 ||
        Math.abs(csmBind7445.lat - csmBind7443[1]) > 0.5) &&
        csmBind4289.jumpTo({
          center: csmBind7443,
          zoom: 0.2,
          bearing: 0,
          pitch: 0,
        });
    };
  if (csmBind4289.isStyleLoaded()) csmBind4309();
  else {
    let csmBind20814 = () => {
      csmBind4289.off("styledata", csmBind20814);
      csmBind4289.off("load", csmBind20814);
      csmBind4309();
    };
    csmBind4289.on("styledata", csmBind20814);
    csmBind4289.on("load", csmBind20814);
  }
}

/** Legacy alias. */
export const Kye = paintSurfaceMap;
