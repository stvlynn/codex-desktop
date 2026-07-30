// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Main local conversation layout: header chrome + thread body slot.

import type { ReactElement, ReactNode } from "react";

import {
  LocalMainContentLayout,
  LocalShellHeader,
  LocalThreadAppShellChrome,
} from "./local-shell-chrome";

export type LocalConversationMainLayoutProps = {
  clientThreadId?: string | null;
  conversationId?: string | null;
  header?: ReactNode;
  children?: ReactNode;
  showComposer?: boolean;
};

/**
 * Bundle `$u` — full-window local conversation layout.
 * Heavy PR/subagent side-panel logic stays behind chrome bridges for Stage-3;
 * pure helpers live in `pr-helpers.ts` / `subagent-helpers.ts`.
 */
export function LocalConversationMainLayout({
  clientThreadId,
  conversationId,
  header,
  children,
  showComposer = true,
}: LocalConversationMainLayoutProps): ReactElement {
  const threadType = conversationId == null ? "new" : "local";
  return (
    <div
      className="relative h-full min-h-0"
      data-local-conversation-main=""
      data-client-thread-id={clientThreadId ?? undefined}
      data-conversation-id={conversationId ?? undefined}
      data-show-composer={showComposer ? "true" : undefined}
    >
      <LocalMainContentLayout layout="thread-edge-scroll" />
      <LocalShellHeader>{header}</LocalShellHeader>
      <div className="h-full min-h-0">{children}</div>
      <LocalThreadAppShellChrome
        showReviewTab={false}
        threadType={threadType}
        showUtilityBar={false}
        conversationId={conversationId}
      />
    </div>
  );
}
