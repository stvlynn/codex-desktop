// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: protobuf ColorType → config type name (legacy iie).

import { Zn as colorTypeEnum } from "../presentation-protobuf";

export const colorTypeProtoToName: Record<number, string> = {
  [colorTypeEnum.COLOR_TYPE_UNSPECIFIED]: "unspecified",
  [colorTypeEnum.COLOR_TYPE_RGB]: "rgb",
  [colorTypeEnum.COLOR_TYPE_SCHEME]: "theme",
  [colorTypeEnum.COLOR_TYPE_SYSTEM]: "system",
  [colorTypeEnum.UNRECOGNIZED]: "unspecified",
};

export function ensureColorTypeProtoToNameInit(): void {}
