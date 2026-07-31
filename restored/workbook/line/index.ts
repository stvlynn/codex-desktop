// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-6: Line stroke VO + dash/compound style maps barrel.

export { emuToPoints, pointsToEmu } from "./emu-units";
export {
  parseDashStyle,
  dashStyleNameToProto,
  dashStyleProtoToName,
} from "./dash-style";
export type { DashStyleName } from "./dash-style";
export {
  parseCompoundStyle,
  compoundStyleNameToProto,
  compoundStyleProtoToName,
} from "./compound-style";
export type { CompoundStyleName } from "./compound-style";
export { Line } from "./line";
export type {
  LineProto,
  LineConfig,
  LineInput,
  LineToConfigOptions,
} from "./line";
export { ensureLineInit } from "./ensure-line-init";
