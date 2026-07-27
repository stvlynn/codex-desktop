// Restored from ref/webview/assets/realtime-voice-handoff-target-Dyx7hOYI.js
// FLIP-style enter animation target for realtime-voice surface handoffs.
// Stage 3: cct/lct/sct/uct→handoff-geometry; tut→useWindowZoom; Aut→reduced motion.

import {
  useRef,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";
import { usePrefersReducedMotion } from "../motion/use-prefers-reduced-motion";
import {
  centerBoxDelta,
  ensureRealtimeVoiceHandoffGeometryInit,
  rectToScreenCenterBox,
  velocityToTravelOffset,
  type ScreenCenterBox,
  type ScreenPoint,
} from "../motion/realtime-voice-handoff-geometry";
import { useWindowZoom } from "../hooks/use-window-zoom";

ensureRealtimeVoiceHandoffGeometryInit();

const HANDOFF_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export type RealtimeVoiceHandoff = {
  sequence: number;
  from: "global-overlay" | "main-thread";
  origin?: ScreenCenterBox | null;
  velocity?: ScreenPoint | null;
};

export type RealtimeVoiceHandoffTargetProps = {
  children?: ReactNode;
  className?: string;
  handoff?: RealtimeVoiceHandoff | null;
  presentationAnchorRef?: (node: HTMLDivElement | null) => void;
  style?: CSSProperties;
  surface: "global-overlay" | "main-thread";
};

function defaultOffsetForFrom(from: RealtimeVoiceHandoff["from"]): ScreenPoint {
  switch (from) {
    case "global-overlay":
      return { x: 0, y: -28 };
    case "main-thread":
      return { x: 0, y: 18 };
  }
}

function playHandoffAnimation(
  el: HTMLDivElement,
  handoff: RealtimeVoiceHandoff,
  surface: RealtimeVoiceHandoffTargetProps["surface"],
  zoom: number,
  prefersReducedMotion: boolean,
): Animation | null {
  if (typeof el.animate !== "function" || prefersReducedMotion) return null;
  if (surface === "global-overlay" && handoff.from === "main-thread") {
    return el.animate([{ opacity: 0.96 }, { opacity: 1 }], {
      duration: 90,
      easing: HANDOFF_EASING,
      fill: "backwards",
    });
  }
  const targetBox = rectToScreenCenterBox(el.getBoundingClientRect(), {
    screenX: window.screenX,
    screenY: window.screenY,
  });
  const offset =
    handoff.origin == null
      ? defaultOffsetForFrom(handoff.from)
      : centerBoxDelta(
          handoff.origin,
          targetBox,
          zoom,
          surface === "main-thread" ? 300 : 180,
        );
  if (surface === "main-thread" && Math.hypot(offset.x, offset.y) < 4) {
    return el.animate(
      [
        { filter: "blur(1.5px)", opacity: 0.96 },
        { filter: "blur(0px)", opacity: 1 },
      ],
      { duration: 120, easing: HANDOFF_EASING, fill: "backwards" },
    );
  }
  const travel =
    handoff.velocity == null
      ? { x: 0, y: 0 }
      : velocityToTravelOffset(
          handoff.velocity,
          zoom,
          surface === "main-thread" ? 56 : 48,
        );
  let scale = surface === "main-thread" ? 0.86 : 0.82;
  if (handoff.origin != null && targetBox.width !== 0) {
    scale = Math.min(
      1.12,
      Math.max(0.82, handoff.origin.width / targetBox.width),
    );
  }
  const rotate = Math.min(3, Math.max(-3, offset.x / 40));
  const mid = { x: offset.x * 0.3 + travel.x, y: offset.y * 0.3 + travel.y };
  return el.animate(
    [
      {
        opacity: surface === "main-thread" ? 0.88 : 0.82,
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale}) rotate(${rotate}deg)`,
      },
      {
        opacity: 1,
        transform: `translate3d(${mid.x}px, ${mid.y}px, 0) scale(1.045) rotate(${rotate * -0.35}deg)`,
        offset: 0.46,
      },
      {
        opacity: 1,
        transform: `translate3d(${mid.y * -0.045}px, ${mid.x * 0.045 - 2}px, 0) scale(1.018) rotate(0deg)`,
        offset: 0.8,
      },
      { opacity: 1, transform: "translate3d(0, 0, 0) scale(1) rotate(0deg)" },
    ],
    {
      delay: surface === "global-overlay" ? 24 : 0,
      duration: surface === "main-thread" ? 300 : 280,
      easing: HANDOFF_EASING,
      fill: "backwards",
    },
  );
}

/**
 * Bundle export `t` — div that plays a handoff enter animation when `handoff` changes.
 */
export function RealtimeVoiceHandoffTarget(props: RealtimeVoiceHandoffTargetProps): ReactElement {
  const {
    children,
    className,
    handoff,
    presentationAnchorRef,
    style,
    surface,
  } = props;
  const zoom = useWindowZoom();
  const prefersReducedMotion = usePrefersReducedMotion();
  const animationRef = useRef<Animation | null>(null);
  const lastSequenceRef = useRef<number | null>(null);

  const setRef: Ref<HTMLDivElement> = (node) => {
    presentationAnchorRef?.(node);
    animationRef.current?.cancel();
    animationRef.current = null;
    if (handoff == null) {
      lastSequenceRef.current = null;
      return;
    }
    if (node == null || lastSequenceRef.current === handoff.sequence) return;
    lastSequenceRef.current = handoff.sequence;
    animationRef.current = playHandoffAnimation(
      node,
      handoff,
      surface,
      zoom,
      prefersReducedMotion,
    );
  };

  return (
    <div
      ref={setRef}
      className={className}
      data-realtime-voice-handoff-target={surface}
      style={style}
    >
      {children}
    </div>
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureRealtimeVoiceHandoffTargetInit(): void {}
