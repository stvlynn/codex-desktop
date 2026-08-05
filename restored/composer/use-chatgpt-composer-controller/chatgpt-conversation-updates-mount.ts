// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Conversation-updates mount atom (letter A) + derived K (Value20/21/25 fan-in).

import {
  appScopeAtom as appInitialFft,
  ensureAppScopeHostInit as appInitialMT,
  ensureAppScopeInit as appInitialIft,
} from "../../runtime/app-scope-runtime";
import { createAppScopeDerivedAtom as appInitialZT } from "../../composer/composer-appscope-atoms";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import {
  chatgptConversationUpdatesSubscriptionAtom,
  chatgptConversationGenUiRefreshAtom,
  ensureChatgptConversationUpdatesSubscriptionInit,
} from "./chatgpt-conversation-updates-subscription";
import {
  chatgptImageGenerationPollAtom,
  ensureChatgptImageGenerationPollInit,
} from "./chatgpt-conversation-image-generation-poll";

let useChatgptComposerControllerK: any;
export const useChatgptComposerControllerA = rolldownRuntimeN(() => {
  appInitialMT();
  appInitialIft();
  ensureChatgptConversationUpdatesSubscriptionInit();
  ensureChatgptImageGenerationPollInit();
  useChatgptComposerControllerK = appInitialZT(
    appInitialFft,
    (request11273, { get }) => {
      return (
        get(chatgptConversationUpdatesSubscriptionAtom),
        get(chatgptConversationGenUiRefreshAtom, request11273),
        get(chatgptImageGenerationPollAtom, request11273),
        null
      );
    },
  );
});

export { useChatgptComposerControllerK };
