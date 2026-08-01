// Restored from ref/webview/assets/realtime-voice-home-announcement-BBLBSud5.js
// Home banner promoting realtime voice (ChatGPT / Codex entry points).
// Stage 3: Nh/Ph/QS/XS/iC/nC/tC → realtime-voice-nux; onboarding-banner already promoted.

import type { ReactElement, ReactNode } from "react";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useIntl } from "../i18n/use-intl";
import { CloseIcon } from "../icons/close-icon";
import { OnboardingBanner } from "../onboarding/onboarding-banner";
import { useAppScope } from "../runtime/app-scope-runtime";
import { useAppScopeValue } from "../composer/composer-appscope-atoms";
import { appScopeAtom } from "../runtime/app-scope-runtime";
import {
  createRealtimeVoiceStartHandler,
  ensureHasSeenRealtimeVoiceNuxAtomInit,
  ensureRealtimeVoiceNuxInit,
  ensureRealtimeVoiceStartHandlerInit,
  hasSeenRealtimeVoiceNuxAtom,
  markRealtimeVoiceNuxSeen,
  useShouldShowRealtimeVoiceNux,
} from "./realtime-voice-nux";
ensureHasSeenRealtimeVoiceNuxAtomInit();
ensureRealtimeVoiceStartHandlerInit();
ensureRealtimeVoiceNuxInit();
export type RealtimeVoiceHomeAnnouncementProps = {
  entryPoint: string;
};
function RealtimeVoiceHomeAnnouncementCard(props: {
  entryPoint: string;
  onDismiss: () => void;
  onStart: () => void;
  orbSrc?: string;
}): ReactElement {
  const {
    entryPoint,
    onDismiss,
    onStart,
    orbSrc = "https://persistent.oaistatic.com/voice/bidi-homepage-banner-orb.21107572.webp",
  } = props;
  const intl = useIntl();
  const title = (
    <MemoizedFormattedMessage
      id="realtimeVoice.homeAnnouncement.title"
      defaultMessage="Try ChatGPT Voice"
      description="Title shown in the Home banner introducing realtime voice"
    />
  );
  const description =
    entryPoint === "chatgpt" ? (
      <MemoizedFormattedMessage
        id="realtimeVoice.homeAnnouncement.description.chatgpt"
        defaultMessage="Coordinate tasks, connect tools, and explore ideas"
        description="Description shown in the ChatGPT Home banner introducing realtime voice"
      />
    ) : (
      <MemoizedFormattedMessage
        id="realtimeVoice.homeAnnouncement.description.codex"
        defaultMessage="Orchestrate tasks, connect tools, and explore code"
        description="Description shown in the Codex Home banner introducing realtime voice"
      />
    );
  const leadingVisual = (
    <img alt="" className="size-full" src={orbSrc} />
  ) as ReactNode;
  const actionLabel = (
    <MemoizedFormattedMessage
      id="realtimeVoice.homeAnnouncement.action"
      defaultMessage="Start Voice"
      description="Button label in the Home banner that opens realtime voice onboarding"
    />
  );
  const dismissAria = intl.formatMessage({
    id: "realtimeVoice.homeAnnouncement.dismiss",
    defaultMessage: "Dismiss voice chat banner",
    description:
      "Accessible label for dismissing the realtime voice Home banner",
  });
  return (
    <OnboardingBanner
      title={title}
      description={description}
      leadingVisual={leadingVisual}
      primaryAction={{
        label: actionLabel,
        onClick: onStart,
      }}
      dismissAction={{
        ariaLabel: dismissAria,
        icon: CloseIcon,
        onClick: onDismiss,
      }}
    />
  );
}

/**
 * Bundle export `S` / `RealtimeVoiceHomeAnnouncement` — home NUX banner for voice.
 */
export function RealtimeVoiceHomeAnnouncement(
  props: RealtimeVoiceHomeAnnouncementProps,
): ReactElement | null {
  const { entryPoint } = props;
  const store = useAppScope(appScopeAtom);
  const hasSeen = useAppScopeValue(hasSeenRealtimeVoiceNuxAtom) as boolean;
  const onStart = createRealtimeVoiceStartHandler(entryPoint);
  const shouldShow = useShouldShowRealtimeVoiceNux();
  if (onStart == null || hasSeen || shouldShow !== true) return null;
  return (
    <RealtimeVoiceHomeAnnouncementCard
      entryPoint={entryPoint}
      onDismiss={() => {
        return markRealtimeVoiceNuxSeen(store);
      }}
      onStart={() => {
        onStart();
      }}
    />
  );
}

/** Bundle export init — Rolldown ESM init retained as no-op. */
export function ensureRealtimeVoiceHomeAnnouncementInit(): void {}
