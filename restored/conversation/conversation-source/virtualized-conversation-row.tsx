// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Memoized virtualized conversation turn row wrapper.

import * as React from "react";
import { useEventCallback } from "../../hooks/use-event-callback";
import { esmInit } from "../../runtime/rolldown-runtime";
import type { ReactNode } from "react";

export type VirtualizedConversationRowProps = {
  entry: { turnKey: string; [key: string]: unknown };
  latestTurnFollowContentRef?: (el: HTMLElement | null) => (() => void) | void;
  latestTurnFooter?: ReactNode;
  RowComponent: (props: Record<string, unknown>) => ReactNode;
  constrainedHeightPx?: number;
  observeTurnElement: (turnKey: string, el: HTMLElement | null) => void;
};

export function VirtualizedConversationRow(
  useConversationSourceOpts7: VirtualizedConversationRowProps,
) {
  let {
      entry,
      latestTurnFollowContentRef,
      latestTurnFooter,
      RowComponent,
      constrainedHeightPx,
      observeTurnElement,
    } = useConversationSourceOpts7,
    { turnKey } = entry,
    conversationSourceBinding116 = (useConversationSourceOpts62) => {
      return observeTurnElement(turnKey, useConversationSourceOpts62);
    };
  let conversationSourceBinding117 = useEventCallback(
      conversationSourceBinding116,
    ),
    conversationSourceBinding118 =
      constrainedHeightPx == null
        ? undefined
        : {
            height: constrainedHeightPx,
            overflow: "hidden",
          };
  let conversationSourceBinding119 = (
    <RowComponent
      entry={entry}
      latestTurnFooter={latestTurnFooter}
      latestTurnFollowContentRef={latestTurnFollowContentRef}
    />
  );
  let conversationSourceBinding120 = (
    <div
      ref={conversationSourceBinding117}
      className="[&_[data-virtualized-turn-content]]:[content-visibility:visible]"
      data-turn-key={turnKey}
    >
      {conversationSourceBinding119}
    </div>
  );
  return (
    <div style={conversationSourceBinding118}>
      {conversationSourceBinding120}
    </div>
  );
}

export var MemoizedVirtualizedConversationRow: unknown;

export const ensureVirtualizedConversationRowMemoInit = esmInit(() => {
  MemoizedVirtualizedConversationRow = React.memo(VirtualizedConversationRow);
});
