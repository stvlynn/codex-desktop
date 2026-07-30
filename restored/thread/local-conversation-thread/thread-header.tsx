// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Local thread chrome header (`hazelR2`): back navigation for child/subagent
// threads, title + agent nickname, and overflow-menu slot. Soft store peers
// stay throws: 0 until DeferredUi companions deepen.

import type { ReactElement, ReactNode } from "react";

import { useNavigate } from "../../boundaries/react-router-navigation";
import { localThreadPath } from "../../conversation/local-thread-path";
import {
  softReadAgentNickname,
  softReadParentConversationId,
  softReadThreadHasConversation,
  softReadThreadTitle,
  softResolveConversationMarkdown,
} from "./runtime-bridges";

export type ThreadHeaderProps = {
  conversationId: string;
};

/**
 * Bundle `hazelR2` — electron/chrome-extension header for the local thread.
 * Returns null when the conversation is not yet present in the store.
 * Soft: ElectronOnly chrome/extension gate omitted (restored ElectronOnly only
 * honors `electron`); always mounts the header chrome for local restore.
 */
export function ThreadHeader(props: ThreadHeaderProps): ReactElement | null {
  const { conversationId } = props;
  const navigate = useNavigate();
  const hasConversation = softReadThreadHasConversation(conversationId);
  const parentConversationId = softReadParentConversationId(conversationId);
  const title = softReadThreadTitle(conversationId);
  const agentNickname = softReadAgentNickname(conversationId);

  if (!hasConversation) return null;

  const onBack =
    parentConversationId == null
      ? undefined
      : () => {
          navigate(localThreadPath(parentConversationId));
        };

  const titleNode: ReactNode =
    parentConversationId == null ? (
      title
    ) : (
      <span className="flex min-w-0 items-center gap-1">
        <span className="truncate">{title}</span>
        {agentNickname != null && agentNickname.length > 0 ? (
          <span className="flex shrink-0 items-center gap-1 font-medium">
            <span aria-hidden className="icon-2xs" data-seed={conversationId} />
            <span>{agentNickname}</span>
          </span>
        ) : null}
      </span>
    );

  const trailing = (
    <div
      data-local-thread-overflow-menu=""
      data-conversation-id={conversationId}
      data-markdown-parent={parentConversationId ?? undefined}
      // Soft: overflow menu peer (`threadOverflowMenuT`) not yet wired here.
      onPointerDown={() => {
        void softResolveConversationMarkdown(conversationId);
      }}
    />
  );

  return (
    <header
      className="flex min-h-10 items-center gap-2 px-3"
      data-local-thread-header=""
      data-desktop-deep-link-conversation-id={conversationId}
    >
      {onBack != null ? (
        <button
          type="button"
          className="shrink-0 text-sm text-token-text-secondary"
          onClick={onBack}
        >
          Back
        </button>
      ) : null}
      <div className="min-w-0 flex-1 truncate font-medium">{titleNode}</div>
      <div className="shrink-0">{trailing}</div>
    </header>
  );
}
