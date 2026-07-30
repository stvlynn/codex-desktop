// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Conversation resume orchestration (`yellowR2`): attempt maybe-resume when the
// conversation is missing from the local store, with archived-session and
// config.toml error handling. Soft store/host peers stay throws: 0.

import { useEffect, useRef, useState } from "react";

import { useEventCallback } from "../../hooks/use-event-callback";
import { useIntl } from "../../i18n/use-intl";
import {
  softFormatResumeErrorMessage,
  softIsResumeAutoRetryable,
  softMaybeResumeConversation,
  softReadConversationNeedsResume,
  softReadIsHotkeyWindow,
  softReadIsWindowActive,
  softShouldShowResumeErrorToast,
  softShowResumeErrorToast,
} from "./runtime-bridges";

export type UseConversationResumeResult = {
  isResuming: boolean;
};

/**
 * Bundle `yellowR2` — resume the local conversation when it is not yet loaded.
 * Returns `{ isResuming }` so the shell can suppress missing-conversation
 * redirects while the attempt is in flight.
 */
export function useConversationResume(
  conversationId: string | null,
): UseConversationResumeResult {
  const intl = useIntl();
  const needsResume = softReadConversationNeedsResume(conversationId);
  const [isAttemptInFlight, setIsAttemptInFlight] = useState(needsResume);
  const activeConversationIdRef = useRef<string | null>(null);
  const cancelWatchRef = useRef<(() => void) | null>(null);
  const retryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasShownResumeErrorRef = useRef(false);
  const skipConversationIdRef = useRef<string | null>(null);
  const [retryNonce, setRetryNonce] = useState(0);

  const clearRetryTimeout = (): void => {
    if (retryTimeoutRef.current != null) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
  };

  const scheduleRetry = useEventCallback(() => {
    if (retryTimeoutRef.current != null) return;
    retryTimeoutRef.current = setTimeout(() => {
      retryTimeoutRef.current = null;
      setRetryNonce((value) => value + 1);
    }, 750);
  });

  const attemptResume = useEventCallback(async (targetId: string) => {
    try {
      setIsAttemptInFlight(true);
      activeConversationIdRef.current = targetId;
      if (cancelWatchRef.current == null) {
        let alive = true;
        cancelWatchRef.current = () => {
          alive = false;
        };
        void alive;
      }
      await softMaybeResumeConversation(targetId);
    } catch (error) {
      const stillCurrent = activeConversationIdRef.current === targetId;
      if (!stillCurrent) return;

      const autoRetry = softIsResumeAutoRetryable(error);
      if (!autoRetry) {
        skipConversationIdRef.current = targetId;
      }

      if (
        softShouldShowResumeErrorToast({
          hasShownResumeError: hasShownResumeErrorRef.current,
          shouldAutoRetry: autoRetry,
        })
      ) {
        softShowResumeErrorToast(
          softFormatResumeErrorMessage(intl, error),
          targetId,
        );
        hasShownResumeErrorRef.current = true;
      }

      if (autoRetry) scheduleRetry();
    } finally {
      if (activeConversationIdRef.current === targetId) {
        activeConversationIdRef.current = null;
        setIsAttemptInFlight(false);
      }
    }
  });

  useEffect(() => {
    if (!needsResume) {
      activeConversationIdRef.current = null;
      hasShownResumeErrorRef.current = false;
      if (skipConversationIdRef.current === conversationId) {
        skipConversationIdRef.current = null;
      }
      clearRetryTimeout();
    }
  }, [conversationId, needsResume]);

  useEffect(() => {
    skipConversationIdRef.current = null;
  }, [conversationId]);

  useEffect(() => {
    const kick = (): void => {
      if (
        conversationId == null ||
        !needsResume ||
        conversationId === activeConversationIdRef.current ||
        conversationId === skipConversationIdRef.current
      ) {
        return;
      }
      void attemptResume(conversationId);
    };

    if (!softReadIsHotkeyWindow()) {
      kick();
      return;
    }

    if (softReadIsWindowActive()) kick();
  }, [attemptResume, conversationId, needsResume, retryNonce]);

  useEffect(
    () => () => {
      activeConversationIdRef.current = null;
      cancelWatchRef.current?.();
      cancelWatchRef.current = null;
      clearRetryTimeout();
    },
    [conversationId],
  );

  return {
    isResuming: needsResume && isAttemptInFlight,
  };
}
