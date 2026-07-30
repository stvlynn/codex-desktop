// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Codex / Work handoff "continued in …" link for ChatGPT browser rows.

import {
  useAppScopeAtomValue as appInitialIT,
  useStepsProseAtom as appInitialL7,
} from "../../boundaries/composer-appscope-atoms";
import { ChatMessageContent as appInitialQd } from "../../chat/chat-message-content";
import { INLINE_MENTION_GROUP_CLASS as AppInitialXL } from "../../composer/inline-mention-class-names";
import { InlineMention as appInitialQL } from "../../composer/inline-mention";
import { handoffOutcomeAtom } from "./ensure-chatgpt-composer-controller-handoff-atoms";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE as appInitialN7 } from "../../conversation/thread-detail-level-ids";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { AppIconSR as appInitialSR } from "../../icons/app-icon-sr";
import { useColdNavigate as appInitialNL } from "../../navigation/use-cold-navigate";

const slot3 = handoffOutcomeAtom;

function useChatgptComposerControllerHelper258(request2369) {
  const AppInitialQL = appInitialQL;
  const AppInitialGft = appInitialGft;
  const AppInitialQd = appInitialQd;
  let { isEverydayWorkMode, onOpen, threadId } = request2369,
    slot6850 = `codex://threads/${threadId}`,
    slot6851 = (event) => {
      event.preventDefault();
      onOpen();
    };
  let slot6852 = (
    <AppInitialQL
      interactive={true}
      underlineOnHover={true}
      icon={appInitialSR}
    >
      {isEverydayWorkMode ? (
        <AppInitialGft
          id="chatgptConversations.codexHandoff.continuedInWork"
          defaultMessage="Continued in Work"
          description="Link shown after accepting a suggestion to continue in Work"
        />
      ) : (
        <AppInitialGft
          id="chatgptConversations.codexHandoff.continuedInCodex"
          defaultMessage="Continued in Codex"
          description="Link shown after accepting a suggestion to continue in Codex"
        />
      )}
    </AppInitialQL>
  );
  return (
    <AppInitialQd padding="offset">
      <a className={AppInitialXL} href={slot6850} onClick={slot6851}>
        {slot6852}
      </a>
    </AppInitialQd>
  );
}

function useChatgptComposerControllerHelper260(request4913) {
  const UseChatgptComposerControllerHelper258 =
    useChatgptComposerControllerHelper258;
  let { threadId } = request4913,
    slot11049 = appInitialNL(),
    slot11050 = appInitialL7() === appInitialN7,
    slot11051 = () => {
      slot11049(threadId);
    };
  return (
    <UseChatgptComposerControllerHelper258
      isEverydayWorkMode={slot11050}
      onOpen={slot11051}
      threadId={threadId}
    />
  );
}

function useChatgptComposerControllerHelper259(request5248) {
  const UseChatgptComposerControllerHelper260 =
    useChatgptComposerControllerHelper260;
  let { conversationId, item } = request5248,
    slot11419 = {
      callId: item.callId,
      conversationId,
    };
  let slot11420 = appInitialIT(slot3, slot11419);
  return slot11420?.type === "accepted" ? (
    <UseChatgptComposerControllerHelper260 threadId={slot11420.threadId} />
  ) : null;
}

export {
  useChatgptComposerControllerHelper258,
  useChatgptComposerControllerHelper259,
  useChatgptComposerControllerHelper260,
};
