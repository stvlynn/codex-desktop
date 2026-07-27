// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Sites-project mention markdown (bundle `y1r` / export `bJ`).

import { toMarkdownLink } from "../markdown/to-markdown-link";
import { SITES_PROJECT_URI_SCHEME } from "./mention-uri-schemes";

export type BuildSitesProjectMentionArgs = {
  projectId: string;
  title: string;
};

/** `sites-project://` URI for a project id (`v1r`). */
export function buildSitesProjectUri(projectId: string): string {
  return `${SITES_PROJECT_URI_SCHEME}${encodeURIComponent(projectId.trim())}`;
}

/** Markdown link mention for a sites project (`y1r` / `bJ`). */
export function buildSitesProjectMention({
  projectId,
  title,
}: BuildSitesProjectMentionArgs): string {
  return toMarkdownLink(title, buildSitesProjectUri(projectId));
}
