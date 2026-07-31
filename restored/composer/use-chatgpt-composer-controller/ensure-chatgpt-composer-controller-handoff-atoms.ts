// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Handoff Zod schemas + derived atoms for temporary ChatGPT → Codex continue.

import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  chatgptConversationBranchAtom,
  chatgptConversationsGateAtom,
  chatgptThreadDerivedAtomBP,
  createAppScopeDerivedAtom,
  createAppScopeQueryAtom,
} from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm_B7_Init as ensureComposerB7Init,
  ensureComposerEsm_BF_Init as ensureComposerBfInit,
  ensureComposerEsm_cS_Init as ensureComposerCsInit,
  ensureComposerEsm_DF_Init as ensureComposerDfInit,
  ensureComposerEsm_gst_Init as ensureComposerGstInit,
  ensureComposerEsm_JN_Init as ensureComposerJnInit,
  ensureComposerEsm_K9_Init as ensureComposerK9Init,
  ensureComposerEsm_kF_Init as ensureComposerKfInit,
  ensureComposerEsm_MT_Init as ensureComposerEsm_MT_Init,
  ensureComposerEsm_nP_Init as ensureComposerNpInit,
  ensureComposerEsm_TI_Init as ensureComposerTiInit,
  ensureComposerEsm_udt_Init as ensureComposerUdtInit,
  ensureComposerEsm_Utt_Init as ensureComposerUttInit,
  ensureComposerEsm_xJ_Init as ensureComposerXjInit,
  ensureComposerEsm_XP_Init as ensureComposerXpInit,
} from "../../boundaries/composer-esm-inits";
import { HANDOFF_KIND } from "../../config/handoff-kind";
import { chatgptMessageFallbackId } from "../../conversation/chatgpt-message-fallback-id";
import { walkChatgptMessageTree } from "../../conversation/walk-chatgpt-message-tree";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";
import { nonEmptyStringOrNull } from "../../utils/non-empty-string-or-null";
import { tryParseJsonText } from "../../utils/try-parse-json-text";
import {
  zodDiscriminatedUnion,
  zodLiteral,
  zodObject,
  zodString,
} from "../../vendor/zod";

type ScopeLike = {
  get: (atom: unknown, key?: unknown) => unknown;
};

type HandoffPromptSchema = {
  safeParse: (
    value: unknown,
  ) =>
    | { success: true; data: { prompt: string; reason: string } }
    | { success: false };
};

type HandoffResultSchema = {
  safeParse: (value: unknown) =>
    | {
        success: true;
        data: {
          call_id: string;
          result: { accepted: true; thread_id: string } | { accepted: false };
        };
      }
    | { success: false };
};

type PendingHandoff = {
  callId: string;
  prompt: string;
  reason: string;
};

let handoffPromptSchema: HandoffPromptSchema | undefined;
let handoffResultSchema: HandoffResultSchema | undefined;

/** Outcome atom for a handoff callId/conversationId pair. */
export let handoffOutcomeAtom: unknown;
/** In-flight flag atom keyed by handoff callId. */
export let handoffInFlightAtom: unknown;

/** Codex browser surface action-type token (pending handoff derived atom). */
export let chatgptComposerBrowserSurfaceActionType: unknown;
export { chatgptComposerBrowserSurfaceActionType as useChatgptComposerControllerI };

export const ensureChatgptComposerControllerAuxInitR = rolldownRuntimeN(() => {
  ensureComposerUttInit();
  ensureAppScopeHostInit();
  zodString();
  ensureComposerEsm_MT_Init();
  ensureComposerB7Init();
  ensureComposerXjInit();
  ensureComposerK9Init();
  ensureComposerGstInit();
  ensureAppScopeInit();
  ensureComposerUdtInit();
  ensureComposerKfInit();
  ensureComposerDfInit();
  ensureComposerBfInit();
  ensureComposerTiInit();
  ensureComposerCsInit();
  ensureComposerJnInit();
  ensureComposerXpInit();
  ensureComposerBfInit();
  ensureComposerNpInit();
  handoffPromptSchema = zodObject({
    prompt: zodString().trim().min(1),
    reason: zodString().trim().min(1),
  }) as HandoffPromptSchema;
  handoffResultSchema = zodObject({
    call_id: zodString(),
    result: zodDiscriminatedUnion("accepted", [
      zodObject({
        accepted: zodLiteral(true),
        thread_id: zodString(),
      }),
      zodObject({
        accepted: zodLiteral(false),
      }),
    ]),
    tool: zodLiteral(HANDOFF_KIND),
  }) as HandoffResultSchema;
  // Match residual boundary call shape (keyed derived atom + isEqual).
  const derivedAtom = createAppScopeDerivedAtom as (
    ...args: unknown[]
  ) => unknown;
  chatgptComposerBrowserSurfaceActionType = derivedAtom(
    appScopeAtom,
    (conversationId: unknown, { get }: { get: ScopeLike["get"] }) => {
      if (!get(chatgptConversationsGateAtom)) return null;
      const currentNode = get(chatgptConversationBranchAtom, conversationId);
      const mapping = get(chatgptThreadDerivedAtomBP, conversationId);
      if (currentNode == null || mapping == null) return null;
      const message = (mapping as Record<string, { message?: unknown }>)[
        currentNode as string
      ]?.message as
        | {
            author?: { role?: string };
            recipient?: unknown;
            status?: string;
          }
        | undefined;
      const recipient = nonEmptyStringOrNull(message?.recipient);
      if (
        message?.author?.role !== "assistant" ||
        message.status === "in_progress" ||
        (recipient !== "functions.handoff" && recipient !== "local.handoff")
      ) {
        return null;
      }
      const parsed = handoffPromptSchema!.safeParse(tryParseJsonText(message));
      return parsed.success
        ? {
            callId: chatgptMessageFallbackId(message),
            ...parsed.data,
          }
        : null;
    },
    {
      isEqual: (left: PendingHandoff | null, right: PendingHandoff | null) =>
        left?.callId === right?.callId &&
        left?.prompt === right?.prompt &&
        left?.reason === right?.reason,
    },
  );
  handoffOutcomeAtom = derivedAtom(
    appScopeAtom,
    (
      { callId, conversationId }: { callId: string; conversationId: string },
      { get }: { get: ScopeLike["get"] },
    ) => {
      const currentNode = get(chatgptConversationBranchAtom, conversationId);
      const mapping = get(chatgptThreadDerivedAtomBP, conversationId);
      if (currentNode == null || mapping == null) return null;
      const messages = walkChatgptMessageTree({
        current_node: currentNode,
        mapping,
      }) as Array<{ author?: { role?: string } }>;
      for (const message of messages.slice().reverse()) {
        if (message.author?.role !== "tool") continue;
        const parsed = handoffResultSchema!.safeParse(
          tryParseJsonText(message),
        );
        if (!parsed.success || parsed.data.call_id !== callId) continue;
        return parsed.data.result.accepted
          ? { type: "accepted", threadId: parsed.data.result.thread_id }
          : { type: "rejected" };
      }
      return null;
    },
  );
  handoffInFlightAtom = (
    createAppScopeQueryAtom as (...args: unknown[]) => unknown
  )(appScopeAtom, (_callId: unknown) => false);
});

export const useChatgptComposerControllerR =
  ensureChatgptComposerControllerAuxInitR;
