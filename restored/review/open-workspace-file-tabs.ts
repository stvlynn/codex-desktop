// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Extract open workspace-file tabs from review source tabs
// (bundle `OWi`/`kWi`; `AWi`/`rH` is `isPreviewableArtifactType`;
// `jWi`/`tH` is `buildOpenFileCacheKey`; `EWi`/`cH` is the kind prefix).

import { isPreviewableArtifactType } from "../artifact/is-previewable-artifact-type";
import { WORKSPACE_FILE_URI_PREFIX } from "../workspace/workspace-file-uri-prefix";

export type ReviewSourceTabLike = {
  kind?: string | null;
  props: Record<string, unknown>;
};

export type OpenWorkspaceFile = {
  hostId: string;
  path: string;
  refreshMode: "manual" | "auto";
};

/**
 * Map a review source tab to an open-file entry when it is a workspace file
 * (`kWi`). Previewable artifacts use manual refresh.
 */
export function parseWorkspaceFileTab(
  tab: ReviewSourceTabLike,
): OpenWorkspaceFile | null {
  if (!tab.kind?.startsWith(WORKSPACE_FILE_URI_PREFIX)) return null;
  const { props } = tab;
  if (
    !("hostId" in props) ||
    typeof props.hostId !== "string" ||
    !("path" in props) ||
    typeof props.path !== "string"
  ) {
    return null;
  }
  const artifactType = "artifactType" in props ? props.artifactType : undefined;
  const manual =
    typeof artifactType === "string" && isPreviewableArtifactType(artifactType);
  return {
    hostId: props.hostId,
    path: props.path,
    refreshMode: manual ? "manual" : "auto",
  };
}

/** Flat-map source tabs to open workspace files (`OWi`). */
export function collectOpenWorkspaceFiles(
  tabs: readonly ReviewSourceTabLike[],
): OpenWorkspaceFile[] {
  return tabs.flatMap((tab) => {
    const parsed = parseWorkspaceFileTab(tab);
    return parsed == null ? [] : [parsed];
  });
}
