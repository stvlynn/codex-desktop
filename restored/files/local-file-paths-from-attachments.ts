// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `E0n` / export `n6`.

/** Collect local file paths from mixed attachment descriptors. */
export function localFilePathsFromAttachments(
  attachments: Array<
    | { type: "file"; path: string }
    | { type: "google-drive" }
    | { type: "appgen-app" }
    | { type: "website"; target: string }
  >,
  isHttpNavigable: (target: string) => boolean = () => false,
): string[] {
  return attachments.flatMap((attachment) => {
    switch (attachment.type) {
      case "file":
        return [attachment.path];
      case "google-drive":
        return [];
      case "appgen-app":
        return [];
      case "website":
        return isHttpNavigable(attachment.target) ? [] : [attachment.target];
    }
  });
}
