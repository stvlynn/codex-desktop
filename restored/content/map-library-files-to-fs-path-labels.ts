// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `vCa` / export `YF` — `yCa(mCa(e))`.

export type LibraryFileLike = {
  height?: number | null;
  id: string;
  libraryFileId?: string | null;
  mimeType?: string | null;
  name: string;
  size?: number | null;
  source?: unknown;
  width?: number | null;
};

export type FsPathLabel = {
  fsPath: string;
  label: string;
  path: string;
};

export function mapLibraryFilesToAttachmentShapes(
  files: LibraryFileLike[],
): Array<{
  height?: number | null;
  id: string;
  library_file_id?: string | null;
  mime_type?: string;
  name: string;
  size?: number | null;
  source?: unknown;
  width?: number | null;
}> {
  return files.map((file) => ({
    height: file.height,
    id: file.id,
    library_file_id: file.libraryFileId,
    mime_type: file.mimeType ?? undefined,
    name: file.name,
    size: file.size,
    source: file.source,
    width: file.width,
  }));
}

export function mapLibraryFilesToFsPathLabels(
  files: LibraryFileLike[],
): FsPathLabel[] {
  return mapLibraryFilesToAttachmentShapes(files).map((file) => ({
    fsPath: "",
    label: file.name,
    path: "",
  }));
}
