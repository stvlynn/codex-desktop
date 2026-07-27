// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ktn` companion for export `T9`.

import { isAbsolutePath } from "../utils/workspace-paths";
import { ensureLeadingSlashForWindowsDrive } from "./ensure-leading-slash-for-windows-drive";
import { replaceBackslashesWithSlashes } from "./replace-backslashes-with-slashes";

const DIRECT_IMAGE_SRC =
  /^(?:data:image\/|https?:\/\/|file:\/\/|app:\/\/|\/@fs)/i;

/** Normalize a path/base64 blob into an img `src` value. */
export function normalizeImageSrc(value: string): string | null {
  const trimmed = value.trim();
  if (trimmed.length === 0) return null;
  if (isAbsolutePath(trimmed)) {
    return ensureLeadingSlashForWindowsDrive(
      replaceBackslashesWithSlashes(trimmed),
    );
  }
  if (DIRECT_IMAGE_SRC.test(trimmed)) return trimmed;
  return `data:image/png;base64,${trimmed}`;
}
