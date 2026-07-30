// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Inline Work subagent activity chips + open-tab helper.

import {
  appScopeAtom as _appInitial8,
  useAppScope as appInitialLT,
} from "../../boundaries/app-scope-runtime";
import { localeMessagesAtom as appInitialD4 } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_Dc_Init as _appInitialDc } from "../../boundaries/composer-esm-inits";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { AppIconEP as appInitialEP } from "../../icons/app-icon-ep";
import { rightPanelController as appInitialA0 } from "../../navigation/app-shell-atoms";
import { useChatgptComposerControllerHelper275 } from "./chatgpt-subagent-side-panel";
import {
  useChatgptComposerControllerHelper285,
  useChatgptComposerControllerHelper286,
} from "./chatgpt-subagent-activity-labels";

function _useChatgptComposerControllerF(
  request4565,
  { conversationId, selectedThreadId = null },
) {
  const AppInitialEP2 = appInitialEP;
  appInitialA0.openTab(
    request4565,
    useChatgptComposerControllerHelper275,
    {
      icon: <AppInitialEP2 className="icon-sm" />,
      id: `chatgpt-subagents:${conversationId}`,
      title: request4565
        .get(appInitialD4)
        .formatMessage({
          id: "chatgptConversations.subagents.panel.title",
          defaultMessage: "Subagents",
          description:
            "Short title for the Work subagents right side panel tab, which shows delegated agents and their results.",
        }),
      props: {
        conversationId,
        onSelect: (request10961) => {
          _useChatgptComposerControllerF(
            request4565,
            {
              conversationId,
              selectedThreadId: request10961,
            },
          );
        },
        selectedThreadId,
      },
    },
  );
}


function useChatgptComposerControllerHelper284(
  request1352,
) {
  const AppInitialDc = _appInitialDc;
  let { conversationId, item } = request1352,
    slot4937 = appInitialLT(_appInitial8),
    slot4938 = appInitialJft(),
    slot4939 = (
      request10962,
    ) => {
      _useChatgptComposerControllerF(slot4937, {
        conversationId,
        selectedThreadId: request10962,
      });
    };
  let slot4940 =
      slot4939,
    slot4941 =
      slot4938.formatMessage({
        id: "chatgptConversations.subagents.inline.section.ariaLabel",
        defaultMessage: "Subagent activity",
        description:
          "Accessible label for the inline Work subagent activity summary inside an assistant turn. The section contains compact agent-name buttons and an aggregate lifecycle status. This label is only announced by assistive technology.",
      });
  let slot4942;
  {
    let slot10165;
    slot10165 = (
      request5470,
    ) => {
      const AppInitialGft = appInitialGft;
      return {
        id: request5470.threadId,
        label: request5470.displayName ?? (
          <AppInitialGft
            id="chatgptConversations.subagents.nameFallback"
            defaultMessage="Subagent"
            description="Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name."
          />
        ),
        seed: request5470.threadId,
        onClick: () => {
          return slot4940(
            request5470.threadId,
          );
        },
      };
    };
    slot4942 = item.activities.map(
      slot10165,
    );
  }
  let slot4943 =
    useChatgptComposerControllerHelper286(item);
  let slot4944 = () => {
    return slot4940(null);
  };
  return (
    <AppInitialDc
      ariaLabel={slot4941}
      className="text-token-conversation-summary-leading"
      items={slot4942}
      overflowLabel={useChatgptComposerControllerHelper285}
      statusAriaLive="polite"
      statusLabel={slot4943}
      testId="chatgpt-subagent-activity"
      onOverflowClick={slot4944}
    />
  );
}

export {
  _useChatgptComposerControllerF,
  useChatgptComposerControllerHelper284,
};
