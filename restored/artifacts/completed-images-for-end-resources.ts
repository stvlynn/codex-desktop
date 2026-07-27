// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$ul` / export `Ac` (+ local file-extension helper `VT`).

function fileExtension(pathValue: string): string | null {
  const lower = pathValue.toLowerCase();
  const slash = Math.max(lower.lastIndexOf("/"), lower.lastIndexOf("\\"));
  const base = slash >= 0 ? lower.slice(slash + 1) : lower;
  const dot = base.lastIndexOf(".");
  return dot > 0 && dot < base.length - 1 ? base.slice(dot + 1) : null;
}

/** Completed images for end resources (skip when pptx output). */
export function completedImagesForEndResources(args: {
  completedImages: readonly unknown[];
  endResourcePaths: readonly string[];
  pendingPlaceholderCount: number;
}): { images: readonly unknown[]; pendingImageCount: number } | null {
  const { completedImages, endResourcePaths, pendingPlaceholderCount } = args;
  const images = endResourcePaths.some(
    (pathValue) => fileExtension(pathValue) === "pptx",
  )
    ? []
    : completedImages;
  if (images.length === 0 && pendingPlaceholderCount === 0) return null;
  return { images, pendingImageCount: pendingPlaceholderCount };
}
