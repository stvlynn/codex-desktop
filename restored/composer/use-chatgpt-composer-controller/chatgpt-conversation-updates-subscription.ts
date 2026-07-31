// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Conversation-updates websocket subscription atoms (Value20–22).

import { getAnalyticsTopic as appInitialAI } from "../../analytics/get-analytics-topic";
import {
  appScopeAtom as appInitialFft,
  ensureAppScopeHostInit as appInitialMT,
  ensureAppScopeInit as appInitialIft,
} from "../../runtime/app-scope-runtime";
import {
  chatgptConversationBranchAtom as appInitialRP,
  chatgptConversationFlagsAtom as _appInitialLP,
  chatgptThreadDerivedAtomBP as appInitialBP,
  createAppScopeQueryAtom as appInitialAvt,
  writingBlocksControllerAtom as appInitialCI,
} from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm_TI_Init as appInitialTI,
  ensureComposerEsm_XP_Init as appInitialXP,
  ensureComposerEsm_cP_Init as appInitialCP,
  ensureComposerEsm_udt_Init as appInitialUdt,
} from "../../boundaries/composer-esm-inits";
import { reactCompilerRuntime as _appInitialIvt } from "../../boundaries/react-cjs-runtime";
import { setConversationBooleanFlag as AppInitialP } from "../../conversation/set-conversation-boolean-flag";
import { patchConversationMessage as appInitialQP } from "../../conversation/patch-conversation-message";
import { appLogger as appInitialDdt } from "../../logging/app-logger";
import { isProtocolRelativeOrAbsoluteUrl as _AppInitialJI } from "../../utils/is-protocol-relative-or-absolute-url";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import { useChatgptComposerControllerHelper9 } from "./chatgpt-conversation-genui-refresh-targets";
import { useChatgptComposerControllerHelper10 } from "./chatgpt-conversation-widget-refresh-controller";
import { useChatgptComposerControllerHelper11 } from "./chatgpt-conversation-update-parsers";
import { useChatgptComposerControllerHelper16 } from "./chatgpt-conversation-refetch";
import { ensureChatgptConversationUpdateSchemasInit } from "./chatgpt-conversation-update-schemas";

let chatgptConversationUpdatesSubscriptionAtom,
  chatgptConversationGenUiRefreshAtom,
  ensureChatgptConversationUpdatesSubscriptionInit = rolldownRuntimeN(() => {
    appInitialMT();
    appInitialIft();
    appInitialUdt();
    _appInitialLP();
    appInitialTI();
    ensureChatgptConversationUpdateSchemasInit();
    void _AppInitialJI;
    appInitialXP();
    chatgptConversationUpdatesSubscriptionAtom = _appInitialIvt(appInitialFft, null, {
      onMount: (
        request1217,
        request1218,
      ) => {
        appInitialDdt.info("chatgpt_conversation_updates_subscription_mounted");
        let slot4729 = () => {
            return request1218
              .get(appInitialCI)
              .getConversationWebSocketUrl();
          },
          slot4730 = appInitialAI(
            "conversations",
            slot4729,
          ),
          slot4731 = appInitialAI(
            "alder-conversations",
            slot4729,
          ),
          slot4732 = (
            request1877,
          ) => {
            let slot5950 =
              useChatgptComposerControllerHelper11(
                request1877,
              );
            if (slot5950.length === 0) {
              appInitialDdt.debug("chatgpt_conversation_update_unrecognized");
              return;
            }
            for (let slot6490 of slot5950) {
              if (
                request1218.get(
                  appInitialBP,
                  slot6490.conversationId,
                ) == null
              ) {
                appInitialDdt.info("chatgpt_conversation_update_ignored", {
                  safe: {
                    reason: "conversation_not_loaded",
                    updateType: slot6490.type,
                  },
                  sensitive: {
                    conversationId:
                      slot6490.conversationId,
                  },
                });
                continue;
              }
              if (
                slot6490.type === "async-status"
              ) {
                AppInitialP(
                  request1218,
                  slot6490.conversationId,
                  slot6490.asyncStatus,
                );
                appInitialDdt.info(
                  "chatgpt_conversation_async_status_updated",
                  {
                    safe: {
                      asyncStatus:
                        slot6490.asyncStatus,
                    },
                    sensitive: {
                      conversationId:
                        slot6490.conversationId,
                    },
                  },
                );
                continue;
              }
              if (
                slot6490.type === "message" &&
                appInitialQP(
                  request1218,
                  slot6490.conversationId,
                  slot6490.message,
                )
              ) {
                appInitialDdt.info(
                  "chatgpt_conversation_message_update_applied",
                  {
                    safe: {},
                    sensitive: {
                      conversationId:
                        slot6490.conversationId,
                      messageId:
                        slot6490.message.id,
                    },
                  },
                );
                continue;
              }
              useChatgptComposerControllerHelper16(
                request1218,
                slot6490.conversationId,
                slot6490.type === "refetch"
                  ? "explicit_update"
                  : "message_not_found",
              );
            }
          },
          slot4733 =
            slot4730.onMessage(
              slot4732,
            ),
          slot4734 =
            slot4731.onMessage(
              slot4732,
            );
        return (
          slot4730.subscribe(),
          slot4731.subscribe(),
          () => {
            appInitialDdt.info(
              "chatgpt_conversation_updates_subscription_unmounted",
            );
            slot4733();
            slot4734();
            slot4730.unsubscribe();
            slot4731.unsubscribe();
          }
        );
      },
    });
    chatgptConversationGenUiRefreshAtom = appInitialAvt(
      appInitialFft,
      (request11665) => {
        return null;
      },
      {
        onMount: (
          request3189,
          request3190,
        ) => {
          let { key } = request3190;
          if (key == null) return;
          let slot8486 =
              useChatgptComposerControllerHelper10({
                refreshWidget: (request8727) => {
                  return request3190.get(
                    appInitialCP,
                    key,
                  )
                    ? Promise.resolve({
                        next_poll_after_ms: null,
                      })
                    : request3190
                        .get(appInitialCI)
                        .refreshGenUiWidget({
                          conversationId: key,
                          ...request8727,
                        });
                },
              }),
            slot8487 = null,
            slot8488 = appInitialAI(
              "conversations",
              () => {
                return request3190
                  .get(appInitialCI)
                  .getConversationWebSocketUrl();
              },
            ),
            slot8489 =
              slot8488.onSubscribed(() => {
                slot8487 ??=
                  request3190.watch(({ get }) => {
                    let slot13995 = get(
                      appInitialBP,
                      key,
                    );
                    slot8486.setTargets(
                      slot13995 == null ||
                        get(appInitialCP, key)
                        ? []
                        : useChatgptComposerControllerHelper9({
                            current_node: get(appInitialRP, key),
                            mapping: slot13995,
                          }),
                    );
                  });
              }),
            slot8490 =
              slot8488.onPotentialMissedMessages(
                () => {
                  useChatgptComposerControllerHelper16(
                    request3190,
                    key,
                    "missed_messages",
                  );
                },
              );
          return () => {
            slot8490();
            slot8489();
            slot8487?.();
            slot8486.stop();
          };
        },
      },
    );
  });

export {
  chatgptConversationUpdatesSubscriptionAtom,
  chatgptConversationGenUiRefreshAtom,
  ensureChatgptConversationUpdatesSubscriptionInit,
};
