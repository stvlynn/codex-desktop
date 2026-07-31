// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  In,
} from "../presentation-protobuf";

export const mapAreaNameToProto = {
  world: In.MAP_AREA_WORLD,
  auto: In.MAP_AREA_AUTO,
  dataOnly: In.MAP_AREA_DATA_ONLY,
  region: In.MAP_AREA_REGION,
} as const;

export const mapAreaProtoToName = {
  [In.MAP_AREA_WORLD]: "world",
  [In.MAP_AREA_AUTO]: "auto",
  [In.MAP_AREA_DATA_ONLY]: "dataOnly",
  [In.MAP_AREA_REGION]: "region",
  [In.MAP_AREA_UNSPECIFIED]: undefined,
  [In.UNRECOGNIZED]: undefined,
} as const;
