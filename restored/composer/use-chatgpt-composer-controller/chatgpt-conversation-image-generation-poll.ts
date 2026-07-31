// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Image-generation poll atom over conversation updates (Helper17 + Value23–26).

import {
  appScopeAtom as appInitialFft,
  ensureAppScopeHostInit as appInitialMT,
  ensureAppScopeInit as appInitialIft,
} from "../../runtime/app-scope-runtime";
import {
  chatgptConversationBranchAtom as appInitialRP,
  chatgptConversationMetaAtom as appInitialIP,
  chatgptThreadDerivedAtomBP as appInitialBP,
  createAppScopeQueryAtom as appInitialAvt,
  writingBlocksControllerAtom as appInitialCI,
} from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm_CF_Init as appInitialCF,
  ensureComposerEsm_II_Init as appInitialII,
  ensureComposerEsm_XP_Init as appInitialXP,
  ensureComposerEsm_udt_Init as appInitialUdt,
} from "../../boundaries/composer-esm-inits";
import { buildConversationTurnModels as AppInitialSF } from "../../conversation/build-conversation-turn-models";
import { ConversationAsyncStatus as AppInitialPI } from "../../conversation/conversation-async-status";
import { appLogger as appInitialDdt } from "../../logging/app-logger";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import { useChatgptComposerControllerHelper16 } from "./chatgpt-conversation-refetch";
import { ensureChatgptConversationUpdatesSubscriptionInit } from "./chatgpt-conversation-updates-subscription";

function useChatgptComposerControllerHelper17(
  request7042,
  request7043,
  request7044,
) {
  let slot13380 = AppInitialSF({
      current_node: request7043,
      mapping: request7044,
    }).at(-1),
    slot13381 =
      slot13380?.turn.items.filter(
        (request11414) => {
          return (
            request11414.type === "generated-image"
          );
        },
      );
  return slot13380 == null ||
    slot13381 == null ||
    slot13381.length === 0 ||
    (request7042 !== AppInitialPI.STREAMING &&
      !slot13381.some((item) => {
        return item.status === "in_progress";
      }))
    ? null
    : slot13380.id;
}

let chatgptImageGenerationPollIntervalMs,
  chatgptImageGenerationPollTimeoutMs,
  chatgptImageGenerationPollAtom,
  ensureChatgptImageGenerationPollInit = rolldownRuntimeN(() => {
    appInitialMT();
    appInitialIft();
    appInitialUdt();
    appInitialII();
    appInitialCF();
    ensureChatgptConversationUpdatesSubscriptionInit();
    appInitialXP();
    chatgptImageGenerationPollIntervalMs = 1e4;
    chatgptImageGenerationPollTimeoutMs = 900000;
    chatgptImageGenerationPollAtom = appInitialAvt(
      appInitialFft,
      (request11666) => {
        return null;
      },
      {
        onMount: (
          request1885,
          request1886,
        ) => {
          let { key } = request1886;
          if (key == null) return;
          let slot5969 = null,
            slot5970 = null,
            slot5971 = 0,
            slot5972 = null,
            slot5973 = false,
            slot5974 = false,
            slot5975 = () => {
              slot5972 != null &&
                (clearTimeout(slot5972),
                (slot5972 = null));
            },
            slot5976 = async () => {
              if (
                slot5974 ||
                slot5969 == null ||
                slot5973
              )
                return;
              if (Date.now() >= slot5971) {
                slot5970 =
                  slot5969;
                slot5969 = null;
                appInitialDdt.warning(
                  "Stopped polling ChatGPT image generation after timeout",
                  {
                    safe: {},
                    sensitive: {
                      conversationId: key,
                    },
                  },
                );
                return;
              }
              let slot9063 =
                slot5969;
              slot5973 = true;
              try {
                await useChatgptComposerControllerHelper16(
                  request1886,
                  key,
                  "image_generation_poll",
                );
              } finally {
                slot5973 = false;
                !slot5974 &&
                  slot5969 != null &&
                  (slot5969 ===
                  slot9063
                    ? (slot5975(),
                      (slot5972 = setTimeout(
                        () => {
                          slot5972 = null;
                          slot5976();
                        },
                        chatgptImageGenerationPollIntervalMs,
                      )))
                    : slot5976());
              }
            },
            slot5977 =
              request1886.watch(({ get }) => {
                let slot12131 = get(
                    appInitialBP,
                    key,
                  ),
                  slot12132 =
                    slot12131 == null
                      ? null
                      : useChatgptComposerControllerHelper17(
                          get(appInitialIP, key),
                          get(appInitialRP, key),
                          slot12131,
                        );
                if (slot12132 == null) {
                  if (
                    slot5969 == null &&
                    slot5970 == null
                  )
                    return;
                  slot5975();
                  slot5969 = null;
                  slot5970 = null;
                  return;
                }
                slot12132 ===
                  slot5969 ||
                  slot12132 ===
                    slot5970 ||
                  (slot5975(),
                  (slot5969 =
                    slot12132),
                  (slot5970 = null),
                  (slot5971 =
                    Date.now() + chatgptImageGenerationPollTimeoutMs),
                  slot5976());
              });
          return () => {
            slot5974 = true;
            slot5975();
            slot5977();
          };
        },
      },
    );
  });

export {
  chatgptImageGenerationPollAtom,
  ensureChatgptImageGenerationPollInit,
};
