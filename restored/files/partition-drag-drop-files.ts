// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `FYa` / export `eM`.

const IMAGE_EXTENSIONS = new Set([
  "png",
  "jpg",
  "jpeg",
  "gif",
  "webp",
  "bmp",
  "svg",
  "avif",
]);

function isImageFile(file: File): boolean {
  const mime = file.type?.toLowerCase() ?? "";
  if (mime.startsWith("image/")) return true;
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  return IMAGE_EXTENSIONS.has(ext);
}

type DataTransferItemLike = {
  kind: string;
  getAsFile?: () => File | null;
  webkitGetAsEntry?: () => { isDirectory: boolean } | null;
};

/** Partition drag/drop files into image vs other buckets. */
export function partitionDragDropFiles(
  dataTransfer: DataTransfer | null | undefined,
  options: { includeDirectories?: boolean } = {},
): { imageFiles: File[]; otherFiles: File[] } {
  const includeDirectories = options.includeDirectories ?? true;
  if (dataTransfer == null) return { imageFiles: [], otherFiles: [] };
  const items = Array.from(
    (dataTransfer as DataTransfer & { items?: DataTransferItemLike[] }).items ??
      [],
  ).filter((item) => item.kind === "file");
  const fromItems = items
    .map((item) => {
      const file = item.getAsFile?.() ?? null;
      if (file == null) return null;
      const isDirectory = item.webkitGetAsEntry?.()?.isDirectory === true;
      return { file, isDirectory };
    })
    .filter((row): row is { file: File; isDirectory: boolean } => row != null);
  const rows =
    fromItems.length > dataTransfer.files.length
      ? fromItems
      : Array.from(dataTransfer.files).map((file) => ({
          file,
          isDirectory: false,
        }));
  const imageFiles: File[] = [];
  const otherFiles: File[] = [];
  for (const { file, isDirectory } of rows) {
    if (isDirectory) {
      if (includeDirectories) otherFiles.push(file);
      continue;
    }
    if (file.size === 0) continue;
    if (isImageFile(file)) imageFiles.push(file);
    else otherFiles.push(file);
  }
  return { imageFiles, otherFiles };
}
