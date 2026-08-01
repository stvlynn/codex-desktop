// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation image bytes / strip / merge (legacy mYe/fYe).
// Stage-3 wave-127.

export function toImageBytes(pimIn14559: any) {
  return new Uint8Array(pimIn14559 ?? []);
}
export function mergePresentationImages(pimIn3704: any, pimIn3705: any) {
  let pimBind12375 = new Map(
    pimIn3704
      .filter((item) => typeof item.id == "string" && item.id.length > 0)
      .map((item) => [item.id, item]),
  );
  return pimIn3705.map((item) => {
    let pimBind15353 = toImageBytes(item.data),
      pimBind15354 = item.id
        ? pimBind12375.get(item.id)
        : undefined,
      pimBind15355 = pimBind15354
        ? toImageBytes(pimBind15354.data)
        : undefined,
      pimBind15356 =
        pimBind15353.byteLength === 0 &&
        (pimBind15355?.byteLength ?? 0) > 0 &&
        pimBind15354?.contentType === item.contentType &&
        pimBind15354?.prompt === item.prompt &&
        pimBind15354?.uri === item.uri;
    return {
      ...item,
      data: pimBind15356
        ? (pimBind15355 ?? pimBind15353)
        : pimBind15353,
    };
  });
}
export function imageHasPayload(pimIn10965: any) {
  return (pimIn10965.data?.byteLength ?? 0) > 0
    ? true
    : pimIn10965.uri !== undefined && pimIn10965.uri.length > 0;
}
export function stripEmptyPresentationImages(pimIn3637: any) {
  let pimBind12191 = pimIn3637.images ?? [],
    pimBind12192 = pimBind12191.filter(imageHasPayload).map((item) => ({
      ...item,
      prompt: undefined,
    }));
  if (pimBind12192.length === pimBind12191.length)
    return {
      ...pimIn3637,
      images: pimBind12192,
    };
  let pimBind12193 = new Set(
    pimBind12192
      .map((item) => item.id)
      .filter((item) => item !== undefined && item.length > 0),
  );
  return {
    ...pimIn3637,
    images: pimBind12192,
    slides: pimIn3637.slides?.map((pimIn12517) => ({
      ...pimIn12517,
      elements: pimIn12517.elements?.map((pimIn16483) =>
        clearMissingImageReference(pimIn16483, pimBind12193),
      ),
    })),
    layouts: pimIn3637.layouts?.map((pimIn12518) => ({
      ...pimIn12518,
      elements: pimIn12518.elements?.map((pimIn16484) =>
        clearMissingImageReference(pimIn16484, pimBind12193),
      ),
    })),
  };
}
export function clearMissingImageReference(pimIn10758: any, pimIn10759: any) {
  let pimBind21278 = pimIn10758.imageReference?.id;
  return !pimBind21278 || pimIn10759.has(pimBind21278)
    ? pimIn10758
    : {
        ...pimIn10758,
        imageReference: undefined,
      };
}

export const dYe = toImageBytes;
export const fYe = mergePresentationImages;
export const pYe = imageHasPayload;
export const mYe = stripEmptyPresentationImages;
export const hYe = clearMissingImageReference;
