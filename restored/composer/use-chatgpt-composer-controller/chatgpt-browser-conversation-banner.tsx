// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Browser-conversation banner / empty-state / transcript surface.

import {
  chatgptConversationBranchAtom as appInitialRP,
  chatgptConversationCursorAtom as appInitialZP,
  chatgptConversationLoadQueryAtom as AppInitialOP,
  chatgptConversationPreviewAtom as AppInitialVP,
  chatgptConversationServerIdAtom as appInitialFP,
  chatgptConversationStatusAtom as appInitialGP,
  chatgptThreadDerivedAtomBP as appInitialBP,
  hasChatgptServerIdAtom as AppInitialUP,
  useAppScopeAtomValue as appInitialIT,
  useAppScopeStore as appInitialFT,
  useAppScopeValue as appInitialRT,
} from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_J0_Init as _appInitialJ0 } from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useChatgptComposerControllerK } from "./chatgpt-conversation-updates-mount";
import { LOCAL_HOST_ID as appInitialTot } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { _useChatgptComposerControllerL } from "./chatgpt-composer-browser-conversation-row";
import {
  useChatgptComposerControllerJ,
  useChatgptComposerControllerM,
} from "./chatgpt-composer-thread-and-turns";
import { useChatgptComposerControllerHelper312 } from "./chatgpt-conversation-row-footer";
import type { ChatgptBrowserConversationBannerProps } from "./types";

reactCompilerRuntime();
type ReactRuntime = {
  useState: (init: any) => [any, (v: any) => void];
  createContext: (defaultValue: any) => any;
};
const slot382 = rolldownRuntimeS(react(), 1) as ReactRuntime;
const slot35 = slot382.createContext(true);
const browserTurnCompleteContext = slot35;

export function _useChatgptComposerControllerA(request426: unknown) {
  const AppInitialGft = appInitialGft;
  const AppInitialJ0 = _appInitialJ0;
  const UseChatgptComposerControllerHelper312 =
    useChatgptComposerControllerHelper312;
  let {
      browserConversationId,
      conversationId,
      emptyState,
      pendingSubmission = null,
      renderInitialContentAsComplete = false,
      renderMode = "sidebar",
    } = request426,
    slot2494 = appInitialJft(),
    slot2495 = appInitialIT(appInitialFP, conversationId);
  appInitialIT(useChatgptComposerControllerK, slot2495);
  let slot2496 = appInitialIT(appInitialRP, conversationId),
    slot2497 = appInitialIT(appInitialZP, conversationId),
    slot2498 = appInitialIT(appInitialBP, conversationId),
    slot2499 = appInitialIT(AppInitialVP, conversationId),
    slot2500 = appInitialIT(appInitialGP, conversationId),
    slot2501 = appInitialIT(AppInitialUP, conversationId),
    slot2502 = appInitialRT(appInitialFT(AppInitialOP, slot2495)),
    slot2503 = slot2498 != null,
    slot2504 = slot2500 === "streaming",
    { renderedTurns, showPendingLoadingMessage } =
      useChatgptComposerControllerJ({
        conversation: slot2502.data,
        isStreaming: slot2504,
        mode: renderMode,
        moderationDisclaimersByMessageId: slot2499,
        pendingSubmission,
        threadCurrentNode: slot2496,
        threadMapping: slot2498,
      }),
    slot2505 = renderedTurns.length > 0,
    slot2506 = () => {
      return !renderInitialContentAsComplete || !slot2505;
    };
  let [slot2507] = slot382.useState(slot2506),
    slot2508 = useChatgptComposerControllerM({
      browserConversationId,
      conversationId,
      errorMessage: slot2497,
      onEditLatestUserMessage: undefined,
      onFork: undefined,
      renderedTurns,
      safetyReview: slot2501,
      showPendingLoadingMessage,
    }),
    slot2509 = slot2494.formatMessage({
      id: "chatgptConversations.loadingConversation",
      defaultMessage: "Loading ChatGPT conversation",
      description:
        "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop",
    });
  let slot2510 = slot2509,
    slot2511 = slot2495 != null && slot2502.isLoading && !slot2503,
    slot2512 =
      slot2502.isError && !slot2503 ? (
        <div className="rounded-xl border border-token-border-default bg-token-bg-secondary p-4 text-sm text-token-foreground">
          {
            <AppInitialGft
              id="chatgptConversations.loadError"
              defaultMessage="Could not load this ChatGPT conversation"
              description="Error state when a ChatGPT conversation fetch fails"
            />
          }
        </div>
      ) : slot2511 ? (
        <div
          aria-busy="true"
          aria-label={slot2510}
          className="relative min-h-0 flex-1"
          role="status"
        >
          {
            <AppInitialJ0
              debugName="ChatGptConversationTranscript"
              fillParent={true}
            />
          }
        </div>
      ) : !slot2505 && !showPendingLoadingMessage ? (
        emptyState === undefined ? (
          <div className="rounded-xl border border-token-border-default bg-token-bg-secondary p-4 text-sm text-token-description-foreground">
            {
              <AppInitialGft
                id="chatgptConversations.emptyConversation"
                defaultMessage="No renderable ChatGPT messages were found in this conversation"
                description="Empty state when a ChatGPT conversation has no user or assistant text messages"
              />
            }
          </div>
        ) : (
          emptyState
        )
      ) : (
        <>
          {slot2508.map((item) => {
            const BrowserTurnCompleteContext = slot35;
            const UseChatgptComposerControllerL =
              _useChatgptComposerControllerL;
            const UseChatgptComposerControllerHelper3122 =
              useChatgptComposerControllerHelper312;
            return (
              <div
                key={item.turnKey}
                className="flex flex-col gap-1.5"
                data-chatgpt-conversation-turn="true"
                data-chatgpt-conversation-turn-id={item.turnKey}
              >
                {
                  <BrowserTurnCompleteContext value={slot2507}>
                    <UseChatgptComposerControllerL
                      browserConversationId={item.browserConversationId}
                      conversationId={item.conversationId}
                      hostId={appInitialTot}
                      isMostRecentTurn={item.isMostRecentTurn}
                      onEditLatestUserMessage={item.onEditLatestUserMessage}
                      onFork={item.onFork}
                      pendingSubmissionAttachments={
                        item.isMostRecentTurn
                          ? pendingSubmission?.attachments
                          : undefined
                      }
                      safetyReview={item.safetyReview}
                      turn={item.turn}
                      turnId={item.id}
                    />
                  </BrowserTurnCompleteContext>
                }
                {item.isMostRecentTurn ? (
                  <UseChatgptComposerControllerHelper3122
                    errorMessage={item.errorMessage}
                    showPendingLoadingMessage={item.showPendingLoadingMessage}
                  />
                ) : null}
              </div>
            );
          })}
          {slot2505 ? null : (
            <UseChatgptComposerControllerHelper312
              errorMessage={slot2497}
              showPendingLoadingMessage={showPendingLoadingMessage}
            />
          )}
        </>
      );
  return (
    <div className="flex min-h-full flex-1 flex-col gap-1.5">{slot2512}</div>
  );
}

export const ChatgptBrowserConversationBanner =
  _useChatgptComposerControllerA as (
    props: ChatgptBrowserConversationBannerProps,
  ) => JSX.Element;
export { _useChatgptComposerControllerA };
