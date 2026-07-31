// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  Zn as _presentationZn,
} from "../presentation-protobuf";

export const mapProjectionNameToProto = {
  mercator: _presentationZn.MAP_PROJECTION_MERCATOR,
  auto: _presentationZn.MAP_PROJECTION_AUTO,
  miller: _presentationZn.MAP_PROJECTION_MILLER,
  albers: _presentationZn.MAP_PROJECTION_ALBERS,
} as const;

export const mapProjectionProtoToName = {
  [_presentationZn.MAP_PROJECTION_MERCATOR]: "mercator",
  [_presentationZn.MAP_PROJECTION_AUTO]: "auto",
  [_presentationZn.MAP_PROJECTION_MILLER]: "miller",
  [_presentationZn.MAP_PROJECTION_ALBERS]: "albers",
  [_presentationZn.MAP_PROJECTION_UNSPECIFIED]: undefined,
  [_presentationZn.UNRECOGNIZED]: undefined,
} as const;
