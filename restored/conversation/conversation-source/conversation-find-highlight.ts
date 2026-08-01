// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// DOM highlight adapter for conversation find-in-thread matches.

import * as React from "react";
import { useAppScopeValue } from "../../composer/composer-appscope-atoms";
import { CODEX_THREAD_FIND_ACTIVE_EVENT } from "../../thread/thread-find-active-event";
import {
  conversationFindActiveMatchAtom,
  conversationFindResultAtom,
} from "../../thread/thread-find-atoms";
import { groupConversationMatchesByUnitKey } from "../../thread/thread-find-match-ids";
import {
  clearThreadFindMarks,
  searchDomForMatches,
  setContentSearchMatchId,
} from "../../thread/thread-find-dom";
import { mutationRecordsAffectContent } from "../../thread/thread-find-mutation";
import { useCoalescedTimeout } from "./use-coalesced-timeout";

export type ConversationFindHighlightProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  contextId: string;
};
export function useConversationFindHighlight(
  useConversationSourceOpts6: ConversationFindHighlightProps,
) {
  let { containerRef, contextId } = useConversationSourceOpts6,
    conversationSourceBinding105 = useAppScopeValue(conversationFindResultAtom),
    conversationSourceBinding106 = useAppScopeValue(
      conversationFindActiveMatchAtom,
    ),
    conversationSourceBinding107 =
      conversationSourceBinding105?.contextId === contextId
        ? conversationSourceBinding105
        : null,
    conversationSourceBinding108 =
      conversationSourceBinding107 == null
        ? null
        : (conversationSourceBinding106?.id ?? null),
    conversationSourceBinding109 = React.useRef(null),
    { schedule, cancel } = useCoalescedTimeout(80),
    conversationSourceBinding110 = () => {
      let conversationSourceBinding132 = containerRef.current;
      if (conversationSourceBinding132 == null) return;
      clearThreadFindMarks(conversationSourceBinding132, {
        includeShadowRoots: false,
      });
      let conversationSourceBinding133 = conversationSourceBinding109.current;
      if (
        (conversationSourceBinding133 != null &&
          (conversationSourceBinding133.classList.remove(
            CODEX_THREAD_FIND_ACTIVE_EVENT,
          ),
          (conversationSourceBinding109.current = null)),
        conversationSourceBinding107 == null)
      )
        return;
      let conversationSourceBinding134 = groupConversationMatchesByUnitKey(
          conversationSourceBinding107.matches,
        ),
        conversationSourceBinding135 = new Map();
      if (
        (conversationSourceBinding132
          .querySelectorAll("[data-content-search-unit-key]")
          .forEach((item) => {
            let conversationSourceBinding193 =
              item.dataset.contentSearchUnitKey;
            if (conversationSourceBinding193 == null) return;
            let conversationSourceBinding194 = conversationSourceBinding134.get(
              conversationSourceBinding193,
            );
            conversationSourceBinding194 == null ||
              conversationSourceBinding194.length === 0 ||
              searchDomForMatches({
                target: item,
                query: conversationSourceBinding107.query,
                maxMatches: conversationSourceBinding194.length,
                includeShadowRoots: false,
              }).matches.forEach((_item, index) => {
                let conversationSourceBinding241 =
                  conversationSourceBinding194[index];
                conversationSourceBinding241 != null &&
                  (setContentSearchMatchId({
                    element: _item,
                    matchId: conversationSourceBinding241.id,
                  }),
                  conversationSourceBinding135.set(
                    conversationSourceBinding241.id,
                    _item,
                  ));
              });
          }),
        conversationSourceBinding108 == null)
      )
        return;
      let conversationSourceBinding136 = conversationSourceBinding135.get(
        conversationSourceBinding108,
      );
      conversationSourceBinding136 != null &&
        (conversationSourceBinding136.classList.add(
          CODEX_THREAD_FIND_ACTIVE_EVENT,
        ),
        (conversationSourceBinding109.current = conversationSourceBinding136));
    };
  let conversationSourceBinding111 = React.useEffectEvent(
      conversationSourceBinding110,
    ),
    conversationSourceBinding112 = () => {
      let conversationSourceBinding214 = containerRef.current;
      if (
        conversationSourceBinding214 == null ||
        (conversationSourceBinding111(),
        conversationSourceBinding107?.runId == null)
      )
        return;
      let conversationSourceBinding215 = new MutationObserver(
        (useConversationSourceOpts59) => {
          mutationRecordsAffectContent(useConversationSourceOpts59) &&
            schedule(conversationSourceBinding111);
        },
      );
      return (
        conversationSourceBinding215.observe(conversationSourceBinding214, {
          childList: true,
          subtree: true,
          characterData: true,
        }),
        () => {
          conversationSourceBinding215.disconnect();
          cancel();
        }
      );
    };
  let conversationSourceBinding113 = conversationSourceBinding107?.runId,
    conversationSourceBinding114;
  conversationSourceBinding114 = [
    conversationSourceBinding113,
    conversationSourceBinding108,
    cancel,
    containerRef,
    contextId,
    schedule,
  ];
  React.useEffect(conversationSourceBinding112, conversationSourceBinding114);
}
