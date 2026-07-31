// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (public entry).

import { createPathContext } from "./path-context";
import { sanitizeConversationTitle } from "./details-blocks";
import { formatTurnMarkdown } from "./format-turn";
import type { ConversationMarkdownInput } from "./types";

export type { ConversationMarkdownInput } from "./types";

export function renderConversationMarkdown({
  cwd = null,
  projectlessOutputDirectory = null,
  title,
  turns,
}: ConversationMarkdownInput): string {
  const sections: string[] = [];
  const pathContext = createPathContext(cwd);
  sections.push(
    `# ${sanitizeConversationTitle(title ?? "Codex conversation")}`,
  );
  for (const turn of turns) {
    const turnMarkdown = formatTurnMarkdown(
      turn,
      cwd,
      pathContext,
      projectlessOutputDirectory,
    );
    if (turnMarkdown != null) sections.push(turnMarkdown);
  }
  return `${sections.join("\n\n").trimEnd()}\n`;
}
