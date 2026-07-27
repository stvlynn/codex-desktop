// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_Ca` / export `JF` — project parsed attachments to upload descriptors.
// Parser (`gCa` / `qF`) co-located as soft dependency via bindable parse hook.

export type ParsedAttachment = {
  fileId?: string | null;
  height?: number | null;
  libraryFileId?: string | null;
  mimeType?: string | null;
  name?: string | null;
  sizeBytes?: number | null;
  source?: string | null;
};

export type FileAttachmentDescriptor = {
  height?: number;
  id: string;
  libraryFileId?: string;
  mimeType?: string | null;
  name?: string | null;
  size?: number;
  source?: string;
};

let parseAttachments: (metadata: unknown) => ParsedAttachment[] = () => [];

export function bindFileAttachmentMetadataParser(
  parser: (metadata: unknown) => ParsedAttachment[],
): void {
  parseAttachments = parser;
}

/** Bundle `gCa` / export `qF` — default no-op until zod schemas are bound. */
export function parseMessageAttachmentsMetadata(
  metadata: unknown,
): ParsedAttachment[] {
  return parseAttachments(metadata);
}

/** Bundle `_Ca` / export `JF`. */
export function fileAttachmentsFromMetadata(
  metadata: unknown,
): FileAttachmentDescriptor[] {
  return parseMessageAttachmentsMetadata(metadata).flatMap((entry) => {
    if (entry.fileId == null) return [];
    return [
      {
        height: entry.height ?? undefined,
        id: entry.fileId,
        libraryFileId: entry.libraryFileId ?? undefined,
        mimeType: entry.mimeType,
        name: entry.name,
        size: entry.sizeBytes ?? undefined,
        source:
          entry.source === "library" || entry.source === "local"
            ? entry.source
            : undefined,
      },
    ];
  });
}
