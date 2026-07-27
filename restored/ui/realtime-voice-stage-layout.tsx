// Restored from ref/webview/assets/realtime-voice-stage-layout-CjclUtP9.js
// Voice-mode stage orb layout + shared motion/layout class tokens.
// Stage 3: Lvt→react; wft→cx; jvt jsx dropped; Tft init dropped; pulsing-dot promoted.

import {
  useEffect,
  useEffectEvent,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cx } from "./cx";
import { pulsingDotClasses } from "../styles/pulsing-dot";
export type RealtimeVoiceStageLayoutProps = {
  isConnecting: boolean;
  onHandoffComplete: () => void;
  orb: ReactNode;
  orbDiameter: number;
  reduceMotion: boolean;
};
export const REALTIME_VOICE_ORB_ENTER_TRANSITION = {
  duration: 0.2,
  ease: [0.16, 1, 0.3, 1] as const,
};
export const REALTIME_VOICE_ORB_EXIT_TRANSITION = {
  duration: 0.28,
  ease: [0.33, 1, 0.68, 1] as const,
};
export const REALTIME_VOICE_ORB_REDUCED_MOTION_TRANSITION = {
  duration: 0,
};
export const REALTIME_VOICE_STAGE_BOTTOM_CLASS =
  "pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto h-52 w-full max-w-[900px] px-12";
export const REALTIME_VOICE_STAGE_TOP_CLASS =
  "absolute inset-x-12 top-0 flex flex-col items-center gap-1";
export const REALTIME_VOICE_STAGE_BOTTOM_TRANSLATE = "translateY(52px)";
export const REALTIME_VOICE_STAGE_TOP_TRANSLATE = "translateY(-28px)";
function ConnectingOrb({ reduceMotion }: { reduceMotion: boolean }): ReactNode {
  const pulseClass = !reduceMotion && pulsingDotClasses.pulseSize;
  return (
    <div
      className={cx("size-[50px] rounded-full bg-token-foreground", pulseClass)}
    />
  );
}

/**
 * Bundle export `u` — orb stage that hands off once connecting finishes.
 */
export function RealtimeVoiceStageLayout({
  isConnecting,
  onHandoffComplete,
  orb,
  orbDiameter,
  reduceMotion,
}: RealtimeVoiceStageLayoutProps): ReactNode {
  const handoff = useEffectEvent(onHandoffComplete);
  useEffect(() => {
    if (isConnecting) return;
    const frame = requestAnimationFrame(handoff);
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [isConnecting]);
  const style: CSSProperties = {
    height: orbDiameter,
    width: orbDiameter,
  };
  return (
    <div
      aria-hidden={true}
      className="relative flex items-center justify-center"
      style={style}
    >
      {isConnecting ? (
        <ConnectingOrb reduceMotion={reduceMotion} />
      ) : (
        <div className="absolute inset-0">{orb}</div>
      )}
    </div>
  );
}

/** Bundle export `d` — React/pulsing-dot ESM init retained as no-op. */
export function ensureRealtimeVoiceStageLayoutInit(): void {}

/** Bundle export `l` — motion token ESM init retained as no-op. */
export function ensureRealtimeVoiceStageMotionTokensInit(): void {}

/** Bundle export `a` — layout class ESM init retained as no-op. */
export function ensureRealtimeVoiceStageLayoutTokensInit(): void {}
