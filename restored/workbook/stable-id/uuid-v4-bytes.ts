// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: uuid v4 from bytes (legacy BEe/VEe/UEe/helper659).
// Stage-3 wave-129.

import { esmInit } from "../../runtime/rolldown-runtime";

export function stringifyUuidBytes(uidIn4678: any, uidIn4679: any = 0) {
  return (
    uuidByteToHex[uidIn4678[uidIn4679]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 1]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 2]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 3]] +
    "-" +
    uuidByteToHex[uidIn4678[uidIn4679 + 4]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 5]] +
    "-" +
    uuidByteToHex[uidIn4678[uidIn4679 + 6]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 7]] +
    "-" +
    uuidByteToHex[uidIn4678[uidIn4679 + 8]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 9]] +
    "-" +
    uuidByteToHex[uidIn4678[uidIn4679 + 10]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 11]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 12]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 13]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 14]] +
    uuidByteToHex[uidIn4678[uidIn4679 + 15]]
  ).toLowerCase();
}
export let uuidByteToHex: string[];
export const ensureUuidByteToHexInit = esmInit(() => {
  uuidByteToHex = [];
  for (let uidBind22548 = 0; uidBind22548 < 256; ++uidBind22548)
    uuidByteToHex.push((uidBind22548 + 256).toString(16).slice(1));
});
export function rngUuidBytes() {
  if (!uuidGetRandomValues) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    uuidGetRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return uuidGetRandomValues(uuidRngBuffer);
}
export let uuidGetRandomValues: ((buf: Uint8Array) => Uint8Array) | undefined;
export let uuidRngBuffer: Uint8Array;
export const ensureUuidRngBufferInit = esmInit(() => {
  uuidRngBuffer = new Uint8Array(16);
});
export let nativeRandomUUID: (() => string) | undefined;
export let uuidCryptoApi: { randomUUID?: () => string };
export const ensureUuidCryptoApiInit = esmInit(() => {
  nativeRandomUUID =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  uuidCryptoApi = {
    randomUUID: nativeRandomUUID,
  };
});
export function uuidV4FromOptions(
  uidIn4112: any,
  uidIn4113: any,
  uidIn4114: any,
) {
  uidIn4112 ||= {};
  let uidBind13088 = uidIn4112.random ?? uidIn4112.rng?.() ?? rngUuidBytes();
  if (uidBind13088.length < 16)
    throw Error("Random bytes length must be >= 16");
  if (
    ((uidBind13088[6] = (uidBind13088[6] & 15) | 64),
    (uidBind13088[8] = (uidBind13088[8] & 63) | 128),
    uidIn4113)
  ) {
    if (((uidIn4114 ||= 0), uidIn4114 < 0 || uidIn4114 + 16 > uidIn4113.length))
      throw RangeError(
        `UUID byte range ${uidIn4114}:${uidIn4114 + 15} is out of buffer bounds`,
      );
    for (let uidBind22967 = 0; uidBind22967 < 16; ++uidBind22967)
      uidIn4113[uidIn4114 + uidBind22967] = uidBind13088[uidBind22967];
    return uidIn4113;
  }
  return stringifyUuidBytes(uidBind13088);
}
export function allocateLocalId(
  uidIn11687: any,
  uidIn11688: any,
  uidIn11689: any,
) {
  return uuidCryptoApi.randomUUID && !uidIn11688 && !uidIn11687
    ? uuidCryptoApi.randomUUID()
    : uuidV4FromOptions(uidIn11687, uidIn11688, uidIn11689);
}
export const ensureUuidV4HelpersInit = esmInit(() => {
  ensureUuidCryptoApiInit();
  ensureUuidRngBufferInit();
  ensureUuidByteToHexInit();
});
export const ensureUuidClusterInit = esmInit(() => {
  ensureUuidByteToHexInit();
  ensureUuidRngBufferInit();
  ensureUuidV4HelpersInit();
});

export const BEe = stringifyUuidBytes;
export const VEe = rngUuidBytes;
export const UEe = uuidV4FromOptions;
export const workbookHelper659 = allocateLocalId;
export const workbookBinding1312 = ensureUuidClusterInit;
export const WEe = ensureUuidV4HelpersInit;
