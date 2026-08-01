// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Banner UI for accepting / rejecting a ChatGPT → Codex handoff suggestion.

import { ensureComposerEsm_I__Init as ensureComposerIInit } from "../../composer/composer-esm-inits";
import {
  jsxRuntime,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import { Button } from "../../ui/button";
import { KeyboardKeyBadge } from "../../ui/keyboard-key-badge";

let enterKeyLabel = "↵";

type HandoffBannerProps = {
  isEverydayWorkMode: boolean;
  onContinue: () => void;
  onReject: () => void;
  pending: boolean;
  reason: string;
};

export function ChatgptCodexHandoffBanner(props: HandoffBannerProps) {
  const { isEverydayWorkMode, onContinue, onReject, pending, reason } = props;
  return (
    <>
      <div className="flex flex-col gap-1 px-4 pt-4 pb-3">
        <div className="text-size-chat flex min-w-0 items-center leading-5 font-medium">
          {isEverydayWorkMode ? (
            <MemoizedFormattedMessage
              id="chatgptConversations.codexHandoff.workTitle"
              defaultMessage="Continue with Work?"
              description="Banner title shown when ChatGPT suggests continuing in Work"
            />
          ) : (
            <MemoizedFormattedMessage
              id="chatgptConversations.codexHandoff.title"
              defaultMessage="Start a chat?"
              description="Banner title shown when ChatGPT suggests starting a chat"
            />
          )}
        </div>
        <div className="text-size-chat leading-5 text-token-text-secondary">
          {reason}
        </div>
      </div>
      <form
        className="flex justify-end gap-2 border-t border-token-border/50 px-2 py-2"
        onSubmit={(event) => {
          event.preventDefault();
          onContinue();
        }}
      >
        <Button
          color="outline"
          size="composer"
          type="button"
          onClick={onReject}
        >
          <MemoizedFormattedMessage
            id="chatgptConversations.codexHandoff.no"
            defaultMessage="Keep chatting here"
            description="Button label for rejecting a suggestion to continue with a task"
          />
        </Button>
        <Button
          autoFocus={true}
          color="primary"
          loading={pending}
          size="composer"
          type="submit"
        >
          <span>
            {isEverydayWorkMode ? (
              <MemoizedFormattedMessage
                id="chatgptConversations.codexHandoff.continueInWork"
                defaultMessage="Continue with Work"
                description="Button label for accepting a suggestion to continue in Work"
              />
            ) : (
              <MemoizedFormattedMessage
                id="chatgptConversations.codexHandoff.continueInCodex"
                defaultMessage="Continue in work mode"
                description="Button label for accepting a suggestion to continue in work mode"
              />
            )}
          </span>
          <KeyboardKeyBadge variant="primary">{enterKeyLabel}</KeyboardKeyBadge>
        </Button>
      </form>
    </>
  );
}

/** Materialize handoff Zod schemas + derived atoms. */

/** Materialize handoff banner UI deps (intl / enter glyph). */
export const ensureChatgptComposerControllerHandoffUiInit = rolldownRuntimeN(
  () => {
    reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureComposerIInit();
    jsxRuntime();
    enterKeyLabel = "↵";
  },
);

export const useChatgptComposerControllerHelper4 = ChatgptCodexHandoffBanner;
