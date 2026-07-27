// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ovt` / export `kst`.

import { normalizePathKey } from "../utils/workspace-paths";

type LocalImageInput = { type: string; path: string };
type AttachmentLike = { fsPath: string };

/** Drop attachments already present as localImage composer inputs. */
export function filterAttachmentsNotInLocalImageInput(args: {
  attachments: readonly AttachmentLike[];
  input: readonly LocalImageInput[];
}): AttachmentLike[] {
  const { attachments, input } = args;
  const localImagePaths = new Set(
    input
      .filter((item) => item.type === "localImage")
      .map((item) => normalizePathKey(item.path)),
  );
  if (localImagePaths.size === 0) return [...attachments];
  return attachments.filter(
    (attachment) => !localImagePaths.has(normalizePathKey(attachment.fsPath)),
  );
}
