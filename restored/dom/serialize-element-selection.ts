// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `xua` / export `vL` — select node contents then serialize.
// Serializer (`wua`) left injectable.

export type SerializedSelection = {
  htmlText: string;
  plainText: string;
};

type SerializeRange = (
  element: Element,
  range: Range,
) => SerializedSelection | null;

let serializeRange: SerializeRange | null = null;

/** Wire DOM range serializer (`wua` in the bundle). */
export function setRangeSelectionSerializer(fn: SerializeRange): void {
  serializeRange = fn;
}

export function serializeElementSelection(element: Element): SerializedSelection | null {
  const range = element.ownerDocument.createRange();
  range.selectNodeContents(element);
  return serializeRange?.(element, range) ?? null;
}
