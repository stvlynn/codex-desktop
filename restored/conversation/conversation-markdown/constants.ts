// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (regex + empty path context).

import type { PathContext } from "./types";

/** Strip Codex `::git-…{…}` directive markers from markdown lines. */
export const GIT_DIRECTIVE_MARKER_RE = /::git-[a-z-]+\{[^}\n]*\}/g;

/** Default path context when cwd is unknown. */
export const EMPTY_PATH_CONTEXT: PathContext = {
  cwd: null,
  homeDir: null,
};

/** Match markdown link targets: `](url "title")` / `](<url>)`. */
export const MARKDOWN_LINK_TARGET_RE =
  /\]\((<[^>\n]+>|[^)\s\n]+)([ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\)/g;

/** Unix home directory prefix (`/Users/…` or `/home/…`). */
export const UNIX_HOME_DIR_RE = /^\/(?:Users|home)\/[^/]+(?=\/|$)/;

/** Windows-style Users home prefix (`C:/Users/…`). */
export const WINDOWS_USERS_HOME_RE = /^[A-Za-z]:\/Users\/[^/]+(?=\/|$)/;

/** Absolute path with optional `:line` / `:start-end` suffix. */
export const PATH_WITH_LINE_SUFFIX_RE = /^(.*?)(:\d+(?:-\d+)?)$/;
