// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Build `$name?label=&icon=` skill mention markdown (bundle `t1r` / export `DJ`).

import { toMarkdownLink } from "../markdown/to-markdown-link";

export type BuildSkillMentionMarkdownArgs = {
  displayLabel?: string | null;
  icon?: string | null;
  name: string;
  path?: string | null;
};

/** Serialize a skill mention as `$name` or `[\$name?…](path)`. */
export function buildSkillMentionMarkdown({
  displayLabel,
  icon,
  name,
  path,
}: BuildSkillMentionMarkdownArgs): string {
  if (!path) return `$${name}`;
  const params = new URLSearchParams();
  if (displayLabel != null) params.set("label", displayLabel);
  if (icon != null) params.set("icon", icon);
  const query = params.toString();
  const label = `$${name}${query.length === 0 ? "" : `?${query}`}`;
  return toMarkdownLink(label, path);
}
