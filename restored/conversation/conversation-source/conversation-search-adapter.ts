// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Conversation-domain find adapter: search turns + scroll match into view.

import {
  buildMatchSnippet,
  conversationMatchId,
  findTextOffsets,
} from "../../thread/thread-find-match-ids";
import { scrollMatchIntoView } from "../../thread/thread-find-scroll";
import { esmInit } from "../../runtime/rolldown-runtime";

export type ConversationSearchAdapter = {
  contextId: string;
  getTurns: () => Array<{
    units: Array<{
      text: string;
      unitId?: string;
      turnKey?: string;
    }>;
    turnKey?: string;
  }>;
  scrollAdapter: {
    getTurnContainer: (turnKey: string) => ParentNode | null;
    scrollToTurn: (
      turnKey: string,
      opts?: {
        signal?: AbortSignal;
      },
    ) => Promise<void>;
  };
};
export function createConversationSearchAdapter({
  contextId,
  getTurns,
  scrollAdapter,
}: ConversationSearchAdapter) {
  return {
    domain: "conversation",
    contextId,
    async search(useConversationSourceOpts57) {
      return searchConversationTurns(useConversationSourceOpts57, getTurns());
    },
    async ensureVisible(
      useConversationSourceOpts16,
      useConversationSourceOpts17,
    ) {
      if (
        useConversationSourceOpts16.domain !== "conversation" ||
        useConversationSourceOpts16.contextId !== contextId
      )
        return;
      let conversationSourceBinding172 = scrollAdapter.getTurnContainer(
        useConversationSourceOpts16.turnKey,
      );
      if (conversationSourceBinding172 == null) {
        if (
          useConversationSourceOpts17?.signal?.aborted ||
          (useConversationSourceOpts17?.signal == null
            ? await scrollAdapter.scrollToTurn(
                useConversationSourceOpts16.turnKey,
              )
            : await scrollAdapter.scrollToTurn(
                useConversationSourceOpts16.turnKey,
                {
                  signal: useConversationSourceOpts17.signal,
                },
              ),
          useConversationSourceOpts17?.signal?.aborted)
        )
          return;
        conversationSourceBinding172 = scrollAdapter.getTurnContainer(
          useConversationSourceOpts16.turnKey,
        );
      }
      conversationSourceBinding172 != null &&
        (await scrollMatchIntoView({
          container: conversationSourceBinding172,
          matchId: conversationMatchId(useConversationSourceOpts16),
          includeShadowRoots: false,
          signal: useConversationSourceOpts17?.signal,
        }));
    },
  };
}
export function searchConversationTurns(
  useConversationSourceOpts8: {
    domain: string;
    contextId: string;
    query: string;
  },
  useConversationSourceOpts9: Array<{
    turnKey: string;
    units: Array<{ text: string; unitId?: string; turnKey?: string }>;
  }>,
) {
  let conversationSourceBinding127 = useConversationSourceOpts8.query.trim();
  if (conversationSourceBinding127.length === 0)
    return {
      domain: useConversationSourceOpts8.domain,
      contextId: useConversationSourceOpts8.contextId,
      query: conversationSourceBinding127,
      matches: [],
      totalMatches: 0,
      isCapped: false,
    };
  let conversationSourceBinding128 = [],
    conversationSourceBinding129 = 0,
    conversationSourceBinding130 = 0,
    conversationSourceBinding131 = false;
  for (let conversationSourceBinding159 of useConversationSourceOpts9)
    for (let conversationSourceBinding171 of conversationSourceBinding159.units) {
      let conversationSourceBinding176 = conversationSourceBinding171.text;
      if (conversationSourceBinding176.length === 0) continue;
      let { offsets, totalMatches, isCapped } = findTextOffsets(
        conversationSourceBinding176,
        conversationSourceBinding127,
        conversationSearchMaxMatches - conversationSourceBinding128.length,
      );
      conversationSourceBinding129 += totalMatches;
      isCapped && (conversationSourceBinding131 = true);
      for (let { start, end } of offsets) {
        conversationSourceBinding130 += 1;
        conversationSourceBinding128.push({
          id: `conversation:${conversationSourceBinding159.turnKey}:${conversationSourceBinding171.unitId}:${start}`,
          ordinal: conversationSourceBinding130,
          location: {
            domain: "conversation",
            contextId: useConversationSourceOpts8.contextId,
            turnKey: conversationSourceBinding159.turnKey,
            unitId: conversationSourceBinding171.unitId,
            start,
            end,
          },
          snippet: buildMatchSnippet(conversationSourceBinding176, start, end),
        });
      }
    }
  return {
    domain: useConversationSourceOpts8.domain,
    contextId: useConversationSourceOpts8.contextId,
    query: conversationSourceBinding127,
    matches: conversationSourceBinding128,
    totalMatches: conversationSourceBinding129,
    isCapped: conversationSourceBinding131,
  };
}
export var conversationSearchMaxMatches: number;
export const ensureConversationSearchMaxMatchesInit = esmInit(() => {
  conversationSearchMaxMatches = 250;
});
