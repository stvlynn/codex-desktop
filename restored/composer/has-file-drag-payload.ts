// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `mU` / export `$j`. Companion `YYa` = "Files".

const FILE_DRAG_TYPE = "Files";

/** True when a drag payload includes a file item or the Files type. */
export function hasFileDragPayload(
  payload:
    | {
        items?: Array<{ kind?: string }> | null;
        types?: ArrayLike<string>;
      }
    | null
    | undefined,
): boolean {
  if (payload == null) return false;
  if (Array.from(payload.items ?? []).some((item) => item.kind === "file")) {
    return true;
  }
  const { types } = payload;
  if (types == null) return false;
  for (let i = 0; i < types.length; i += 1) {
    if (types[i] === FILE_DRAG_TYPE) return true;
  }
  return false;
}
