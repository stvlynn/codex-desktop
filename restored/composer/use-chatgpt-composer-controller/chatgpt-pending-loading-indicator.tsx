// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Pending-message loading indicator for ChatGPT composer turns.

import {
  jsxRuntime,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { ChatMessageContent } from "../../chat/chat-message-content";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { ensureComposerEsm_Sd_Init as ensureComposerDisclaimerInit } from "../../boundaries/composer-esm-inits";
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
import {
  initPulsingDotModule,
  pulsingDotClasses,
} from "../../styles/pulsing-dot";

/** ESM init for the pending-loading indicator surface. */
export const ensureChatgptComposerControllerAuxInitC = rolldownRuntimeN(() => {
  reactCompilerRuntime();
  ensureIntlFormattersInit();
  ensureComposerDisclaimerInit();
  initPulsingDotModule();
  rolldownRuntimeS(jsxRuntime(), 1);
});

/** Pending-message loading indicator. */
export function ChatgptPendingLoadingIndicator(_props?: unknown): JSX.Element {
  return (
    <ChatMessageContent>
      <span
        aria-busy="true"
        className="relative inline-flex h-8 items-center pt-1 text-token-text-primary"
        role="status"
      >
        <span className="sr-only">
          <MemoizedFormattedMessage
            id="chatgptConversations.loadingMessage"
            defaultMessage="ChatGPT is responding"
            description="Accessible loading status shown while a ChatGPT response is starting in Codex Desktop"
          />
        </span>
        <span aria-hidden="true" className={pulsingDotClasses.pulsingDot} />
      </span>
    </ChatMessageContent>
  );
}

// Letter aliases for boundary / legacy consumers
export const _useChatgptComposerControllerS = ChatgptPendingLoadingIndicator;
export const _useChatgptComposerControllerC =
  ensureChatgptComposerControllerAuxInitC;
