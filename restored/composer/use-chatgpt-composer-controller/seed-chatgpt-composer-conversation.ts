// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Seed composer conversation state with an optional initial prompt.

import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
  useAppScope,
} from "../../runtime/app-scope-runtime";
import { appLogoCacheAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_Rj_Init as ensureComposerRjInit } from "../../boundaries/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { createComposerViewController } from "../../composer/create-composer-view-controller";
import { useDeferredCleanupEffect } from "../../hooks/use-deferred-cleanup-effect";
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
} from "../../runtime/rolldown-runtime";
import type { SeedChatgptComposerConversationOptions } from "./types";

type ReactWithHooks = {
  useState: <T>(initializer: () => T) => [T, (next: T) => void];
};

type ComposerViewController = {
  view: { isDestroyed: boolean };
  destroy: () => void;
};

let reactHooks: ReactWithHooks | undefined;

/** Materialization init for seed-conversation React hooks. */
export const ensureChatgptComposerControllerMaterializationInit =
  rolldownRuntimeN(() => {
    reactCompilerRuntime();
    ensureAppScopeHostInit();
    reactHooks = rolldownRuntimeS(react(), 1) as ReactWithHooks;
    ensureComposerRjInit();
    ensureAppScopeInit();
  });

/** Seed composer conversation state with an optional initial prompt. */
export function seedChatgptComposerConversation(
  options: SeedChatgptComposerConversationOptions = {},
): ComposerViewController {
  const { conversationId, initialPrompt } = options;
  const appScope = useAppScope(appScopeAtom);
  const createController = () =>
    createComposerViewController(
      initialPrompt ??
        (conversationId == null
          ? ""
          : (appScope.get(appLogoCacheAtom, conversationId) as string)),
      {
        enableFileMentions: true,
        enableSkillMentions: false,
        enableSlashCommands: {
          triggers: ["/"],
        },
      },
    ) as ComposerViewController;

  const [controller] = reactHooks!.useState(createController);
  useDeferredCleanupEffect(() => {
    if (!controller.view.isDestroyed) {
      controller.destroy();
    }
  });
  return controller;
}

// Letter aliases for boundary / legacy consumers
export const _useChatgptComposerControllerN = seedChatgptComposerConversation;
export const _useChatgptComposerControllerT =
  ensureChatgptComposerControllerMaterializationInit;
