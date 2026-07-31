// Restored from ref/webview/assets/home-prefill-artifact-preview-DEuv-UOn.js
// On mount, open each preview file as an artifact tab for the given host.
// Stage 3: qV→openArtifactPreview; L_t→useAppScope; KV/_8/b8 inits dropped.

import { useEffect, useRef } from "react";
import { useAppScope } from "../runtime/app-scope-runtime";
import {
  ensureHomePrefillArtifactPreviewDepsInit,
  openArtifactPreview,
} from "../navigation/open-artifact-preview";
ensureHomePrefillArtifactPreviewDepsInit();
export type HomePrefillArtifactPreviewFile = {
  fsPath?: string | null;
  path?: string | null;
  label?: string;
};
export type HomePrefillArtifactPreviewProps = {
  hostId: string;
  locationKey: string;
  previewFiles?: HomePrefillArtifactPreviewFile[] | null;
};

/**
 * Bundle export `HomePrefillArtifactPreview` — effect-only prefill opener.
 */
export function HomePrefillArtifactPreview({
  hostId,
  locationKey,
  previewFiles,
}: HomePrefillArtifactPreviewProps): null {
  const scope = useAppScope();
  const openedForKeyRef = useRef<string | null>(null);
  useEffect(() => {
    if (
      previewFiles == null ||
      previewFiles.length === 0 ||
      openedForKeyRef.current === locationKey
    ) {
      return;
    }
    openedForKeyRef.current = locationKey;
    for (const file of previewFiles) {
      const path = file.fsPath || file.path;
      if (path == null || path.length === 0) continue;
      openArtifactPreview(scope, path, {
        hostId,
        title: file.label,
      });
    }
  }, [hostId, locationKey, previewFiles, scope]);
  return null;
}
