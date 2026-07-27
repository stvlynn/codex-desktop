// Restored from ref/webview/assets/artifact-preview-status-D-ULvJ60.js
// Loading / error placeholder for artifact preview panes.
// Stage 3: Gft→MemoizedFormattedMessage; Hft/jvt inits dropped.

import type { ReactNode } from "react";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";

export type ArtifactPreviewStatusKind = "ready" | "loading" | "error" | string;

/**
 * Bundle export `n` — null when ready; otherwise loading/error copy.
 */
export function ArtifactPreviewStatus(
  status: ArtifactPreviewStatusKind,
): ReactNode {
  if (status === "ready") return null;
  return (
    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-token-text-tertiary">
      {status === "loading" ? (
        <span className="loading-shimmer-pure-text font-medium">
          <MemoizedFormattedMessage
            id="artifactTab.previewLoading"
            defaultMessage="Preparing preview…"
            description="Loading state shown while the artifact preview is loading"
          />
        </span>
      ) : (
        <MemoizedFormattedMessage
          id="artifactTab.previewError"
          defaultMessage="Couldn’t load this preview"
          description="Error state shown when an artifact preview fails to load"
        />
      )}
    </div>
  );
}

/** Bundle export `t` — Rolldown ESM init retained as no-op. */
export function ensureArtifactPreviewStatusInit(): void {}
