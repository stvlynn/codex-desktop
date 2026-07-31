// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: deck snapshot → filtered NDJSON query (legacy wRe).
// Stage-3 wave-79 cohesive deck-kinds query kept flat under maxFlatLines.

import { randomBase36Id } from "../stable-id";
import {
  jRe,
  workbookBinding1740,
  FRe,
  LRe,
  RRe,
  zRe,
  MRe,
  KRe,
  PRe,
  ARe,
  IRe,
} from "./dk-slots";

export async function wRe(dkIn1880: any, dkIn1881: any = {}) {
  let dkBind8521 = dkIn1880.toSnapshot(),
    dkBind8522 = jRe(dkIn1881.kind),
    dkBind8523 = workbookBinding1740(dkIn1881.include, "include"),
    dkBind8524 = workbookBinding1740(dkIn1881.exclude, "exclude"),
    dkBind8525 = FRe(dkIn1881.target, dkBind8521.aid),
    dkBind8526 = {
      revision: randomBase36Id(),
      target: dkBind8525,
      kind: {
        requested: dkIn1881.kind,
        tokens: dkBind8522.tokens,
      },
      include: {
        requested: dkIn1881.include,
        tokens: dkBind8523.tokens,
      },
      exclude: {
        requested: dkIn1881.exclude,
        tokens: dkBind8524.tokens,
      },
      search: dkIn1881.search,
      notices: [
        ...dkBind8522.notices,
        ...dkBind8523.notices,
        ...dkBind8524.notices,
      ],
    },
    dkBind8527 = LRe(dkBind8521, dkBind8525.id),
    dkBind8528 = RRe(dkBind8521, dkBind8527),
    dkBind8529 = zRe(
      dkBind8521,
      dkBind8527,
      dkBind8528,
      dkIn1880.layouts.items,
      dkBind8522,
    ),
    dkBind8530 = MRe(dkBind8529, dkBind8523, dkBind8524),
    dkBind8531 = KRe(dkBind8530, dkBind8525).map((item) =>
      JSON.stringify(item),
    ),
    dkBind8532 = PRe(dkBind8531, dkIn1881.search, dkBind8526),
    dkBind8533 =
      typeof dkIn1881.maxChars == "number" && Number.isFinite(dkIn1881.maxChars)
        ? Math.max(0, Math.floor(dkIn1881.maxChars))
        : ARe,
    { ndjson, truncated } = IRe(dkBind8532, dkBind8533);
  return {
    ndjson,
    truncated,
    metadata: dkBind8526,
  };
}
