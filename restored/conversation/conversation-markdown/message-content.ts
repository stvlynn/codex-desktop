// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (message content prep / link rewrite).

import { rewriteFileCitationMarkers } from "../../markdown/rewrite-file-citation-markers";
import { stripCodexVisDirectives } from "../../markdown/strip-codex-vis-directives";
import { isAbsoluteWorkspacePath } from "../../utils/workspace-paths";
import { GIT_DIRECTIVE_MARKER_RE, MARKDOWN_LINK_TARGET_RE } from "./constants";
import { normalizeNewlines } from "./escape-html";
import {
  formatMarkdownLinkTarget,
  formatWorkspacePath,
  relativizeAbsoluteLinkTarget,
} from "./path-context";
import type { PathContext } from "./types";

export function stripVisDirectivesAndGitMarkers(text: string): string {
  return stripCodexVisDirectives(text)
    .split("\n")
    .map((line) => {
      const withoutGit = line.replaceAll(GIT_DIRECTIVE_MARKER_RE, "");
      return withoutGit.trim().length === 0 ? "" : withoutGit.trimEnd();
    })
    .join("\n")
    .replaceAll(/\n{3,}/g, "\n\n");
}

export function rewriteAbsoluteMarkdownLinks(
  text: string,
  pathContext: PathContext,
): string {
  return text.replaceAll(
    MARKDOWN_LINK_TARGET_RE,
    (fullMatch, target: string, titleSuffix?: string) => {
      const usesAngleBrackets = target.startsWith("<") && target.endsWith(">");
      const innerTarget = usesAngleBrackets ? target.slice(1, -1) : target;
      const rewritten = relativizeAbsoluteLinkTarget(innerTarget, pathContext);
      if (rewritten === innerTarget) return fullMatch;
      return `](${formatMarkdownLinkTarget(rewritten, usesAngleBrackets)}${titleSuffix ?? ""})`;
    },
  );
}

export function prepareMessageContent(
  content: string,
  pathContext: PathContext,
): string {
  return rewriteAbsoluteMarkdownLinks(
    stripVisDirectivesAndGitMarkers(
      normalizeNewlines(rewriteFileCitationMarkers(content)),
    ),
    pathContext,
  );
}
