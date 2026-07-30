// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Lightweight conversation chrome that marks a ChatGPT thread as read/unread.

import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
  useAppScope,
} from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_XP_Init as ensureComposerXpInit } from "../../boundaries/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { setConversationUnread } from "../../conversation/set-conversation-unread";
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
import type { ChatgptComposerConversationChromeProps } from "./types";

type ReactWithHooks = {
  useEffect: (effect: () => void | (() => void), deps: unknown[]) => void;
};

let reactHooks: ReactWithHooks | undefined;

/** Host ESM init that materializes React hooks for conversation chrome. */
export const ensureChatgptComposerControllerHostInit = rolldownRuntimeN(() => {
  reactCompilerRuntime();
  ensureAppScopeHostInit();
  reactHooks = rolldownRuntimeS(react(), 1) as ReactWithHooks;
  ensureAppScopeInit();
  ensureComposerXpInit();
});

/** Conversation chrome strip keyed by conversation id. */
export function ChatgptComposerConversationChrome(
  props: ChatgptComposerConversationChromeProps,
): null {
  const { conversationId } = props;
  const appScope = useAppScope(appScopeAtom);
  const effect = () => {
    setConversationUnread(appScope, conversationId, true);
    return () => {
      setConversationUnread(appScope, conversationId, false);
    };
  };
  reactHooks!.useEffect(effect, [conversationId, appScope]);
  return null;
}

// Letter aliases for boundary / legacy consumers
export const _useChatgptComposerControllerR = ChatgptComposerConversationChrome;
export const _useChatgptComposerControllerI =
  ensureChatgptComposerControllerHostInit;
