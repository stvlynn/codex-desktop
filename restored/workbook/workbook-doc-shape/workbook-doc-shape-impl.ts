// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: workbook document shape normalize (legacy cvt).
// Stage-3 wave-128.

export function normalizeWorkbookDocShape(wdsIn2693: any) {
  let wdsBind10257 = wdsIn2693;
  return (
    (wdsIn2693.sheets ??= []),
    (wdsIn2693.contentReferences ??= []),
    (wdsIn2693.images ??= []),
    (wdsIn2693.people ??= []),
    (wdsIn2693.threads ??= []),
    (wdsIn2693.notes ??= []),
    (wdsIn2693.slicerCaches ??= []),
    (wdsIn2693.pivotCaches ??= []),
    (wdsIn2693.timelineCaches ??= []),
    {
      id: wdsIn2693.id,
      sheets: wdsIn2693.sheets,
      theme: wdsIn2693.theme,
      contentReferences: wdsIn2693.contentReferences,
      images: wdsIn2693.images,
      people: wdsIn2693.people,
      threads: wdsIn2693.threads,
      notes: wdsIn2693.notes,
      slicerCaches: wdsIn2693.slicerCaches,
      pivotCaches: wdsIn2693.pivotCaches,
      timelineCaches: wdsIn2693.timelineCaches,
      metadata: wdsBind10257.metadata,
      featurePropertyBags: wdsBind10257.featurePropertyBags,
    }
  );
}

export const cvt = normalizeWorkbookDocShape;
