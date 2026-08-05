// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Ln } from "../presentation-protobuf";

export const mapDataLevelCountryOrNameToProto = {
  countryOrRegion: Ln.MAP_DATA_LEVEL_COUNTRY_OR_REGION,
  stateOrProvince: Ln.MAP_DATA_LEVEL_STATE_OR_PROVINCE,
  county: Ln.MAP_DATA_LEVEL_COUNTY,
  postalCode: Ln.MAP_DATA_LEVEL_POSTAL_CODE,
  countryOrRegionCode: Ln.MAP_DATA_LEVEL_COUNTRY_OR_REGION_CODE,
  stateCode: Ln.MAP_DATA_LEVEL_STATE_CODE,
  countyCode: Ln.MAP_DATA_LEVEL_COUNTY_CODE,
  auto: Ln.MAP_DATA_LEVEL_AUTO,
} as const;

export const mapDataLevelCountryOrProtoToName = {
  [Ln.MAP_DATA_LEVEL_COUNTRY_OR_REGION]: "countryOrRegion",
  [Ln.MAP_DATA_LEVEL_STATE_OR_PROVINCE]: "stateOrProvince",
  [Ln.MAP_DATA_LEVEL_COUNTY]: "county",
  [Ln.MAP_DATA_LEVEL_POSTAL_CODE]: "postalCode",
  [Ln.MAP_DATA_LEVEL_COUNTRY_OR_REGION_CODE]: "countryOrRegionCode",
  [Ln.MAP_DATA_LEVEL_STATE_CODE]: "stateCode",
  [Ln.MAP_DATA_LEVEL_COUNTY_CODE]: "countyCode",
  [Ln.MAP_DATA_LEVEL_AUTO]: "auto",
  [Ln.MAP_DATA_LEVEL_UNSPECIFIED]: undefined,
  [Ln.UNRECOGNIZED]: undefined,
} as const;
