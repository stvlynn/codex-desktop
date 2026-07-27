// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `xSa` / export `lI`.
// Entity payload parser left injectable; matched_text uses existing helper.

import { matchedTextWithPrivateUsePrefix } from "./matched-text-with-private-use-prefix";

export type EntityCategoryName = {
  category: string | null;
  name: unknown;
};

type EntityPayloadParser = (
  matchedText: string,
) => { type: string; payload: string } | null;

type EntityTupleParser = (payloadJson: unknown) => [string, unknown] | null;

let parseMatchedEntity: EntityPayloadParser | null = null;
let parseEntityTuple: EntityTupleParser | null = null;

/** Wire private-use entity parser (`hSa` in the bundle). */
export function setMatchedEntityParser(parser: EntityPayloadParser): void {
  parseMatchedEntity = parser;
}

/** Wire entity [category, name] tuple parser (`tCa`/`MSa` in the bundle). */
export function setEntityTupleParser(parser: EntityTupleParser): void {
  parseEntityTuple = parser;
}

export function extractEntityCategoryName(ref: {
  matched_text?: unknown;
}): EntityCategoryName | null {
  const matched = matchedTextWithPrivateUsePrefix(ref);
  if (matched == null) return null;
  const entity = parseMatchedEntity?.(matched);
  if (entity?.type !== "entity") return null;
  let payload: unknown = null;
  try {
    payload = JSON.parse(entity.payload);
  } catch {
    return null;
  }
  const tuple = parseEntityTuple?.(payload);
  if (tuple == null) return null;
  const [categoryRaw, name] = tuple;
  const category = categoryRaw.trim();
  return { category: category.length > 0 ? category : null, name };
}
