// Restored from ref/webview/assets/codex-avatar-93dNPzLt.js
// Spritesheet avatar with idle/action frame animation.
// Stage 3: aft→reducedMotion; Tut→getIconPixelSize (row count table); Eut init;
// wft→cx; $dt/Tft/Ivt/jvt/Lvt dropped.

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactElement,
  type RefObject,
} from "react";
import {
  ensureIconPixelSizeInit,
  getIconPixelSize,
} from "../ui/icon-pixel-size";
import { cx } from "../ui/cx";
import { useTurnSourcesReducedMotion } from "../conversation/turn-sources-runtime";
ensureIconPixelSizeInit();

// Filenames match the co-located webview asset chunk URLs.
const SPRITESHEET_URLS = {
  bsod: "bsod-spritesheet-v5-DMVBNs4E.webp",
  codex: "codex-spritesheet-v6-BRBFriCM.webp",
  dewey: "dewey-spritesheet-v5-D1KFAW8x.webp",
  fireball: "fireball-spritesheet-v5-CcKkFG0_.webp",
  hoots: "hoots-spritesheet-v8-hys0ZOs6.webp",
  "null-signal": "null-signal-spritesheet-v7-B59v4kgD.webp",
  rocky: "rocky-spritesheet-v5-CXtdFM3V.webp",
  seedy: "seedy-spritesheet-v10-A9vkGoq7.webp",
  stacky: "stacky-spritesheet-v6-Y0DWcgq_.webp",
} as const;
export type CodexAvatarAssetRef = keyof typeof SPRITESHEET_URLS;
export type CodexAvatarState =
  | "failed"
  | "idle"
  | "jumping"
  | "review"
  | "running"
  | "running-left"
  | "running-right"
  | "waving"
  | "waiting";
type Frame = {
  columnIndex: number;
  frameDurationMs: number;
  rowIndex: number;
};
function buildRowFrames(
  rowIndex: number,
  count: number,
  frameDurationMs: number,
  lastFrameDurationMs: number,
): Frame[] {
  return Array.from(
    {
      length: count,
    },
    (_unused, columnIndex) => {
      return {
        columnIndex,
        frameDurationMs:
          columnIndex === count - 1 ? lastFrameDurationMs : frameDurationMs,
        rowIndex,
      };
    },
  );
}
const IDLE_FRAMES: Frame[] = [
  {
    rowIndex: 0,
    columnIndex: 0,
    frameDurationMs: 280,
  },
  {
    rowIndex: 0,
    columnIndex: 1,
    frameDurationMs: 110,
  },
  {
    rowIndex: 0,
    columnIndex: 2,
    frameDurationMs: 110,
  },
  {
    rowIndex: 0,
    columnIndex: 3,
    frameDurationMs: 140,
  },
  {
    rowIndex: 0,
    columnIndex: 4,
    frameDurationMs: 140,
  },
  {
    rowIndex: 0,
    columnIndex: 5,
    frameDurationMs: 320,
  },
];
const IDLE_SLOW_FRAMES = IDLE_FRAMES.map((frame) => {
  return {
    ...frame,
    frameDurationMs: frame.frameDurationMs * 6,
  };
});
const STATE_FRAMES: Record<CodexAvatarState, Frame[]> = {
  failed: buildRowFrames(5, 8, 140, 240),
  idle: IDLE_FRAMES,
  jumping: buildRowFrames(4, 5, 140, 280),
  review: buildRowFrames(8, 6, 150, 280),
  running: buildRowFrames(7, 6, 120, 220),
  "running-left": buildRowFrames(2, 8, 120, 220),
  "running-right": buildRowFrames(1, 8, 120, 220),
  waving: buildRowFrames(3, 4, 140, 280),
  waiting: buildRowFrames(6, 6, 150, 260),
};
function backgroundPositionForFrame(
  frame: Frame,
  spriteRowCount: number,
): string {
  return `${(frame.columnIndex / 7) * 100}% ${(frame.rowIndex / (spriteRowCount - 1)) * 100}%`;
}
function framesForState(
  state: CodexAvatarState,
  prefersReducedMotion: boolean,
): {
  frames: Frame[];
  loopStartIndex: number | null;
} {
  const base = STATE_FRAMES[state];
  if (prefersReducedMotion) {
    return {
      frames: [base[0]],
      loopStartIndex: null,
    };
  }
  if (state === "idle") {
    return {
      frames: IDLE_SLOW_FRAMES,
      loopStartIndex: 0,
    };
  }
  const triple = [...base, ...base, ...base];
  return {
    frames: [...triple, ...IDLE_SLOW_FRAMES],
    loopStartIndex: triple.length,
  };
}
function useCodexAvatarAnimation(args: {
  avatarRef: RefObject<HTMLDivElement | null>;
  isAnimationEnabled?: boolean;
  lookFrame?: Frame | null;
  prefersReducedMotion: boolean;
  spriteRowCount: number;
  state: CodexAvatarState;
}): void {
  const {
    avatarRef,
    isAnimationEnabled = true,
    lookFrame = null,
    prefersReducedMotion,
    spriteRowCount,
    state,
  } = args;
  useEffect(() => {
    const node = avatarRef.current;
    if (node == null) return;
    if (lookFrame != null) {
      node.style.backgroundPosition = backgroundPositionForFrame(
        lookFrame,
        spriteRowCount,
      );
      return;
    }
    const { frames, loopStartIndex } = framesForState(
      state,
      prefersReducedMotion || !isAnimationEnabled,
    );
    let index = 0;
    let timeoutId: number | null = null;
    node.style.backgroundPosition = backgroundPositionForFrame(
      frames[index],
      spriteRowCount,
    );
    if (frames.length === 1) return;
    const tick = () => {
      timeoutId = window.setTimeout(() => {
        const next = index + 1;
        if (next >= frames.length) {
          if (loopStartIndex != null) {
            index = loopStartIndex;
            node.style.backgroundPosition = backgroundPositionForFrame(
              frames[index],
              spriteRowCount,
            );
            tick();
            return;
          }
          timeoutId = null;
          return;
        }
        index = next;
        node.style.backgroundPosition = backgroundPositionForFrame(
          frames[index],
          spriteRowCount,
        );
        tick();
      }, frames[index].frameDurationMs);
    };
    tick();
    return () => {
      if (timeoutId != null) window.clearTimeout(timeoutId);
    };
  }, [
    avatarRef,
    isAnimationEnabled,
    lookFrame,
    prefersReducedMotion,
    spriteRowCount,
    state,
  ]);
}
function isCodexAvatarAssetRef(value: unknown): value is CodexAvatarAssetRef {
  return value != null && Object.hasOwn(SPRITESHEET_URLS, value as string);
}
export type CodexAvatarProps = {
  assetRef?: string | null;
  className?: string;
  lookFrame?: Frame | null;
  spriteVersionNumber?: 1 | 2;
  spritesheetUrl?: string | null;
  state?: CodexAvatarState;
};

/**
 * Bundle export `t` — animated Codex mascot sprite.
 */
export function CodexAvatar(props: CodexAvatarProps): ReactElement {
  const {
    assetRef,
    className,
    lookFrame = null,
    spriteVersionNumber,
    spritesheetUrl,
    state = "idle",
  } = props;
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useTurnSourcesReducedMotion();
  const resolvedAsset: CodexAvatarAssetRef = isCodexAvatarAssetRef(assetRef)
    ? assetRef
    : "codex";
  const spriteRowCount = getIconPixelSize(
    spriteVersionNumber ?? (spritesheetUrl == null ? 2 : 1),
  );
  useCodexAvatarAnimation({
    avatarRef,
    lookFrame,
    prefersReducedMotion,
    spriteRowCount,
    state,
  });
  const style: CSSProperties = {
    backgroundImage: `url(${spritesheetUrl ?? SPRITESHEET_URLS[resolvedAsset]})`,
    backgroundSize: `800% ${spriteRowCount * 100}%`,
  };
  return (
    <div
      ref={avatarRef}
      className={cx("codex-avatar-root", className)}
      data-avatar-asset-ref={resolvedAsset}
      data-avatar-state={state}
      style={style}
      aria-hidden="true"
      data-testid="codex-avatar"
    />
  );
}

/** Bundle export `n` — Rolldown ESM init retained as no-op. */
export function ensureCodexAvatarInit(): void {}
