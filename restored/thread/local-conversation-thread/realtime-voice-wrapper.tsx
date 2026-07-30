// Restored from ref/webview/assets/local-conversation-thread-C3pAiUmg.js
// Realtime-voice perspective wrapper (`bg` → `tideR2`): gates main-thread
// presentation vs global overlay handoff around the codex perspective. Soft
// snapshot / handoff peers stay throws: 0.

import {
  useRef,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";

import {
  softMarkRealtimeVoiceHandoffComplete,
  softReadRealtimeVoicePresentationState,
  softRequestDetachRealtimePresentation,
  type RealtimeVoicePresentationState,
} from "./runtime-bridges";

export type RealtimeVoiceWrapperProps = {
  codexPerspective: ReactNode;
  conversationId: string;
  hostId: string | null;
  contentX?: unknown;
  isRealtimeVoiceThread?: boolean;
};

type RealtimeVoicePresentationShellProps = {
  codexPerspective: ReactNode;
  contentX?: unknown;
  conversationId: string;
  hostId: string | null;
  handoff: RealtimeVoicePresentationState["handoff"];
  isConnecting: boolean;
  isPresentationActive: boolean;
  isRealtimeVoiceThread: boolean;
  onDetachPresentation: (motion: unknown) => void;
  onConnectionHandoffComplete: () => void;
  presentationAnchorRef: RefObject<HTMLElement | null>;
  snapshot: RealtimeVoicePresentationState["snapshot"];
};

/**
 * Bundle `tideR2` — wraps the codex perspective when realtime voice is active,
 * optionally mounting the soft presentation overlay host.
 */
function RealtimeVoicePresentationShell(
  props: RealtimeVoicePresentationShellProps,
): ReactElement {
  const {
    codexPerspective,
    contentX,
    conversationId,
    handoff,
    isConnecting,
    isPresentationActive,
    isRealtimeVoiceThread,
    onDetachPresentation,
    onConnectionHandoffComplete,
    presentationAnchorRef,
    snapshot,
  } = props;

  if (!isRealtimeVoiceThread) {
    return <>{codexPerspective}</>;
  }

  const matchedSnapshot =
    snapshot.phase !== "inactive" &&
    snapshot.locator.conversationId === conversationId &&
    snapshot.locator.hostId === props.hostId
      ? snapshot
      : null;

  const showPresentation =
    isPresentationActive && (isConnecting || matchedSnapshot != null);

  const perspective = (
    <div
      data-realtime-voice-perspective=""
      data-presentation-active={showPresentation ? "true" : undefined}
    >
      {codexPerspective}
    </div>
  );

  const overlay =
    matchedSnapshot == null && !isConnecting ? null : (
      <div
        ref={presentationAnchorRef as RefObject<HTMLDivElement>}
        className="pointer-events-none absolute inset-0"
        data-realtime-voice-overlay=""
        data-connecting={
          isConnecting && isPresentationActive ? "true" : undefined
        }
        data-presentation-active={showPresentation ? "true" : undefined}
        data-has-handoff={handoff != null ? "true" : undefined}
        data-content-x={contentX == null ? undefined : "true"}
        onTransitionEnd={() => {
          if (handoff != null) onConnectionHandoffComplete();
        }}
        onDoubleClick={() => onDetachPresentation("user-detach")}
      />
    );

  return (
    <div
      className="group/realtime-voice-thread relative h-full min-h-0 overflow-hidden"
      data-realtime-voice-thread-id={`realtime-voice-thread-${conversationId}`}
    >
      {perspective}
      {overlay}
    </div>
  );
}

/**
 * Bundle `bg` — derives presentation eligibility from soft realtime-voice
 * store peers, then mounts `tideR2`.
 */
export function RealtimeVoiceWrapper(
  props: RealtimeVoiceWrapperProps,
): ReactElement {
  const {
    codexPerspective,
    contentX,
    conversationId,
    hostId,
    isRealtimeVoiceThread = true,
  } = props;

  const presentationAnchorRef = useRef<HTMLElement | null>(null);
  const locator = { conversationId, hostId };
  const state = softReadRealtimeVoicePresentationState(locator);
  const {
    handoff,
    isConnecting,
    isPresentationActive,
    preferredOnMainThread,
    snapshot,
  } = state;

  const onDetachPresentation = (motion: unknown): void => {
    softRequestDetachRealtimePresentation({
      locator,
      motion,
      surface: "global-overlay",
    });
  };

  const onConnectionHandoffComplete = (): void => {
    softMarkRealtimeVoiceHandoffComplete(state.connectionRequest);
  };

  void preferredOnMainThread;

  return (
    <RealtimeVoicePresentationShell
      codexPerspective={codexPerspective}
      contentX={contentX}
      conversationId={conversationId}
      hostId={hostId}
      handoff={handoff}
      isConnecting={isConnecting}
      isPresentationActive={isPresentationActive}
      isRealtimeVoiceThread={isRealtimeVoiceThread}
      onDetachPresentation={onDetachPresentation}
      onConnectionHandoffComplete={onConnectionHandoffComplete}
      presentationAnchorRef={presentationAnchorRef}
      snapshot={snapshot}
    />
  );
}
