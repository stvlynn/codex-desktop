// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Publish / read the active ChatGPT conversation selection target for entity tabs.

import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";

let conversationSelectionTarget: unknown = null;

/** Publish the active ChatGPT conversation selection target. */
export function setChatgptConversationSelectionTarget(target: unknown): void {
  conversationSelectionTarget = target;
}

/** Read the registered ChatGPT entity side-panel tab target. */
export function getChatgptConversationSelectionTarget(): unknown {
  if (conversationSelectionTarget == null) {
    throw Error("ChatGPT entity side panel tab was not registered");
  }
  return conversationSelectionTarget;
}

/** Reset selection-target state (ESM materialization init). */
export const ensureChatgptComposerControllerAuxInitS = rolldownRuntimeN(() => {
  conversationSelectionTarget = null;
});

// Letter aliases for boundary / legacy consumers
export const useChatgptComposerControllerC =
  setChatgptConversationSelectionTarget;
export const useChatgptComposerControllerHelper90 =
  getChatgptConversationSelectionTarget;
export const useChatgptComposerControllerS =
  ensureChatgptComposerControllerAuxInitS;
