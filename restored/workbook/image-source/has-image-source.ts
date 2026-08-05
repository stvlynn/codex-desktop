// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: image source field guards (legacy Binding659/Ude).

/** Legacy `workbookBinding659` — path/blob/dataUrl/uri present. */
export function hasImageSourceFields(value: Record<string, unknown>): boolean {
  return (
    "path" in value || "blob" in value || "dataUrl" in value || "uri" in value
  );
}

/** Legacy `Ude` — payload has bytes, prompt, or uri. */
export function hasImageContent(props: {
  data?: Uint8Array | null;
  prompt?: unknown;
  uri?: unknown;
}): boolean {
  return (
    !!(props.data && props.data.length > 0) ||
    typeof props.prompt == "string" ||
    typeof props.uri == "string"
  );
}
