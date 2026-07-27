// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `col` / export `Zc` — tool-call / MCP app item renderer (shell).

import type { ComponentType, ReactNode } from "react";

type AnyProps = Record<string, unknown>;

let ItemImpl: ComponentType<AnyProps> | null = null;

export function setToolCallItemImpl(impl: ComponentType<AnyProps>): void {
  ItemImpl = impl;
}

export type ToolCallItemProps = {
  item: unknown;
  conversationId?: string;
  expandedContentOnly?: boolean;
  hideTextBlocksWithStructuredContent?: boolean;
  hostId?: string;
  loadRemoteLogos?: boolean;
  matchingApp?: unknown;
  onExpand?: () => void;
  renderMcpApps?: boolean;
  shouldAutoExpandMcpApp?: boolean;
  summary?: ReactNode;
  summaryIcon?: ReactNode;
  [key: string]: unknown;
};

export function ToolCallItem(props: ToolCallItemProps): ReactNode {
  if (ItemImpl == null) {
    throw new Error("ToolCallItem impl has not been configured");
  }
  return (
    <ItemImpl
      expandedContentOnly={false}
      hideTextBlocksWithStructuredContent={false}
      loadRemoteLogos={true}
      renderMcpApps={true}
      shouldAutoExpandMcpApp={false}
      summary={null}
      {...props}
    />
  );
}
