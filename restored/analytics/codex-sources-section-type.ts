// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `pZt` / export `Itt` — protobuf analytics enum.

export const CodexSourcesSectionType = {
  CODEX_SOURCES_SECTION_TYPE_UNSPECIFIED:
    "CODEX_SOURCES_SECTION_TYPE_UNSPECIFIED",
  CODEX_SOURCES_SECTION_TYPE_MCP_TOOL_CALLS:
    "CODEX_SOURCES_SECTION_TYPE_MCP_TOOL_CALLS",
  CODEX_SOURCES_SECTION_TYPE_WEB_SEARCHES:
    "CODEX_SOURCES_SECTION_TYPE_WEB_SEARCHES",
  CODEX_SOURCES_SECTION_TYPE_WEB_PAGES: "CODEX_SOURCES_SECTION_TYPE_WEB_PAGES",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexSourcesSectionType =
  (typeof CodexSourcesSectionType)[keyof typeof CodexSourcesSectionType];
