// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: stable-id barrel (Uue–workbookHelper302 / workbookH / Binding647).

export {
  uuidReplaceRe,
  base36Alphabet,
  stableIdTokenRe,
  u64Mask,
  fnvOffsetBasis,
  fnvPrime,
  mulberryMultiplier,
  mulberryIncrement,
  ensureStableIdConstantsInit,
} from "./ensure-stable-id-constants";
export { fallbackRandomUuid, randomUuid, bracedUuidUpper } from "./uuid";
export {
  randomBase36Id,
  randomPositiveIntString,
  nextNumericIdString,
} from "./random-base36";
export {
  fnv1aHashString,
  isStableIdToken,
  stripIdPrefix,
  hashToBase36Id,
  normalizeOrHashId,
} from "./hash-id";
export type { ResolveLocalIdOptions } from "./scoped-id";
export {
  composeScopedId,
  stripPrefixedLocalId,
  resolveLocalIdAlias,
} from "./scoped-id";
export {
  defaultHashIdLength,
  ensureStableIdClusterInit,
} from "./ensure-stable-id-init";
export {
  stringifyUuidBytes,
  rngUuidBytes,
  uuidV4FromOptions,
  allocateLocalId,
  ensureUuidClusterInit,
  ensureUuidV4HelpersInit,
  BEe,
  VEe,
  UEe,
  workbookHelper659,
  workbookBinding1312,
  WEe,
} from "./uuid-v4-bytes";
