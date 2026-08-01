// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: deep-clone workbook rich metadata bags (legacy apt).
// Stage-3 wave-123.

export function cloneRichWorkbookMetadata(wmcIn1956: any) {
  if (wmcIn1956)
    return {
      metadataTypes: (wmcIn1956.metadataTypes ?? []).map((item) => ({
        ...item,
      })),
      futureMetadata: (wmcIn1956.futureMetadata ?? []).map((item) => ({
        ...item,
        blocks: (item.blocks ?? []).map((_item) => ({
          ..._item,
          dynamicArrayProperties: _item.dynamicArrayProperties
            ? {
                ..._item.dynamicArrayProperties,
              }
            : undefined,
        })),
      })),
      cellMetadata: (wmcIn1956.cellMetadata ?? []).map((item) => ({
        ...item,
        blocks: (item.blocks ?? []).map((_item) => ({
          ..._item,
          entries: (_item.entries ?? []).map((__item) => ({
            ...__item,
          })),
        })),
      })),
      valueMetadata: (wmcIn1956.valueMetadata ?? []).map((item) => ({
        ...item,
        blocks: (item.blocks ?? []).map((_item) => ({
          ..._item,
          entries: (_item.entries ?? []).map((__item) => ({
            ...__item,
          })),
        })),
      })),
      richData: wmcIn1956.richData,
    };
}

/** Legacy alias (wave-123). */
export const apt = cloneRichWorkbookMetadata;
