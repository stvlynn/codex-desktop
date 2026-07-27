// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `iSa` / export `dI`. Map/businesses parsers left injectable.

import { nonEmptyStringOrNull } from "../utils/non-empty-string-or-null";

type BusinessesParser = (ref: Record<string, unknown>) => unknown[];
type MapEntitiesParser = (ref: Record<string, unknown>) => unknown[];

let parseBusinesses: BusinessesParser | null = null;
let parseMapEntities: MapEntitiesParser | null = null;

/** Wire businesses_map parser (`ZSa` in the bundle). */
export function setBusinessesMapParser(parser: BusinessesParser): void {
  parseBusinesses = parser;
}

/** Wire map entities parser (`XSa` in the bundle). */
export function setMapEntitiesParser(parser: MapEntitiesParser): void {
  parseMapEntities = parser;
}

export function extractMapEntitiesFromContentReference(ref: Record<string, unknown>): unknown[] {
  const type = nonEmptyStringOrNull(ref.type);
  if (type === "businesses_map") return parseBusinesses?.(ref) ?? [];
  if (type !== "map") return [];
  return parseMapEntities?.(ref) ?? [];
}
