// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Subagent final-response query atom (Value355) + text extractor (Helper274).

import {
  appScopeAtom as appInitialFft,
  ensureAppScopeHostInit as appInitialMT,
  ensureAppScopeInit as appInitialIft,
} from "../../runtime/app-scope-runtime";
import {
  createAppScopeSelectAtom as appInitialTvt,
  writingBlocksControllerAtom as appInitialCI,
} from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm_TI_Init as appInitialTI,
  ensureComposerEsm_pdt_Init as appInitialPdt,
} from "../../boundaries/composer-esm-inits";
import { QueryStaleTimes as appInitialFdt } from "../../config/query-stale-times";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";

let subagentFinalResponseAtom: unknown = null;

export function setChatgptSubagentFinalResponseAtom(atom: unknown): void {
  subagentFinalResponseAtom = atom;
}

export function getChatgptSubagentFinalResponseAtom(): any {
  return subagentFinalResponseAtom;
}

type SubagentTurnMessage = {
  type?: string;
  text?: string;
  phase?: string;
};

type SubagentTurnsPayload = {
  data: Array<{ items: SubagentTurnMessage[] }>;
};

/** Walk subagent turn items for the latest non-empty agentMessage / final_answer. */
function extractSubagentFinalAnswerText(
  payload: SubagentTurnsPayload,
): string | null {
  const firstGroup = payload.data[0];
  if (firstGroup == null) return null;
  let fallback: SubagentTurnMessage | null = null;
  for (let index = firstGroup.items.length - 1; index >= 0; index--) {
    const item = firstGroup.items[index];
    if (
      !(
        item == null ||
        !("type" in item) ||
        item.type !== "agentMessage" ||
        (item.text?.trim().length ?? 0) === 0
      ) &&
      ((fallback ??= item), item.phase === "final_answer")
    )
      return item.text ?? null;
  }
  return fallback?.text ?? null;
}

class SubagentFinalResponseNotReadyError extends Error {}

const SUBAGENT_FINAL_RESPONSE_MAX_RETRIES = 2;
const SUBAGENT_FINAL_RESPONSE_BASE_DELAY_MS = 250;
const SUBAGENT_FINAL_RESPONSE_JITTER_MS = 100;

export const ensureChatgptSubagentFinalResponseQueryInit = rolldownRuntimeN(
  () => {
    appInitialMT();
    appInitialIft();
    appInitialPdt();
    appInitialTI();
    const queryAtom = appInitialTvt(
      appInitialFft,
      (
        {
          activationId,
          conversationId,
          isTurnLive,
          threadId,
        }: {
          activationId?: string | null;
          conversationId?: string | null;
          isTurnLive?: boolean;
          threadId?: string | null;
        },
        { scope }: { scope: { get: (atom: unknown) => any } },
      ) => {
        return {
          enabled:
            activationId != null && conversationId != null && threadId != null,
          queryFn: async () => {
            if (conversationId == null || threadId == null) return null;
            const text = extractSubagentFinalAnswerText(
              await scope.get(appInitialCI).getSubagentThreadTurns({
                conversationId,
                threadId,
              }),
            );
            if (text == null)
              throw new SubagentFinalResponseNotReadyError(
                "Subagent final response is not available yet",
              );
            return text;
          },
          queryKey: [
            "chatgpt-subagent-final-response",
            conversationId,
            threadId,
            activationId,
          ],
          refetchOnWindowFocus: false,
          retryOnMount: !isTurnLive,
          retry: (failureCount: number, error: unknown) => {
            return (
              error instanceof SubagentFinalResponseNotReadyError &&
              failureCount < SUBAGENT_FINAL_RESPONSE_MAX_RETRIES
            );
          },
          retryDelay: (attempt: number) => {
            return Math.min(
              SUBAGENT_FINAL_RESPONSE_BASE_DELAY_MS * 2 ** attempt +
                Math.random() * SUBAGENT_FINAL_RESPONSE_JITTER_MS,
              1e3,
            );
          },
          staleTime: appInitialFdt.INFINITE,
        };
      },
    );
    setChatgptSubagentFinalResponseAtom(queryAtom);
  },
);
