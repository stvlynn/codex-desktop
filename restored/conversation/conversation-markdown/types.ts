// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (shared types).

export type ConversationMarkdownTurn = {
  cwd?: string | null;
  status?: string;
  items: unknown[];
  [key: string]: unknown;
};

export type ConversationMarkdownInput = {
  cwd?: string | null;
  projectlessOutputDirectory?: string | null;
  title?: string | null;
  turns: ConversationMarkdownTurn[];
};

export type PathContext = {
  cwd: string | null;
  homeDir: string | null;
};

export type DiffLineCounts = {
  additions: number;
  deletions: number;
};

/** Subset of summarizeAgentToolActivity().toolActivity used for labels. */
export type ToolActivityLike = {
  createdFileCount: number;
  editedFileCount: number;
  deletedFileCount: number;
  exploredFileCount: number;
  searchCount: number;
  listCount: number;
  deniedRequestCount: number;
  timedOutRequestCount: number;
  commandCount: number;
  mcpToolCallCount: number;
  webSearchCount: number;
};

export type MessageFormatOptions = {
  escapeDetailsTags?: boolean;
  pathContext?: PathContext;
};

export type PatchChangeType = "add" | "delete" | "update";
