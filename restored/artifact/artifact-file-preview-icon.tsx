// Restored from ref/webview/assets/artifact-file-preview-icon-n81pVXki.js
// File preview thumbnail or kind icon for artifact paths.
// Stage 3: bH→resolveArtifactFileIcon; wft→cx; react/compiler inits dropped.

import { useState, type ComponentType, type ReactNode } from "react";
import { resolveArtifactFileIcon } from "../artifact/resolve-artifact-file-icon";
import { cx } from "../ui/cx";

export type ArtifactFilePreviewIconProps = {
  getImagePreviewSrc?: (path: string) => string | null | undefined;
  iconClassName?: string;
  imageClassName?: string;
  path: string;
};

/**
 * Bundle export `t` — show an image preview when available, else a kind icon.
 */
export function ArtifactFilePreviewIcon({
  getImagePreviewSrc,
  iconClassName,
  imageClassName,
  path,
}: ArtifactFilePreviewIconProps): ReactNode {
  const previewSrc = getImagePreviewSrc?.(path) ?? null;
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (previewSrc != null && previewSrc !== failedSrc) {
    return (
      <img
        alt=""
        className={cx("shrink-0 object-cover", imageClassName)}
        src={previewSrc}
        onError={() => setFailedSrc(previewSrc)}
      />
    );
  }

  const Icon = resolveArtifactFileIcon(path) as ComponentType<{
    className?: string;
  }>;
  return <Icon className={cx("shrink-0", iconClassName)} />;
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureArtifactFilePreviewIconInit(): void {}
