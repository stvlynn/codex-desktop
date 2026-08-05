// Restored from ref/webview/assets/codex-micro-mini-games-BVBFbIhK.js
// Mini-game activation + thread-slot helpers for Codex Micro.
// Stage 3: _Z/vZ → overlay-focus-selectors; Fft/Ift/M_t/ivt AppScope mapped.

import { appScopeAtom, createScopedSignal } from "../runtime/app-scope-runtime";
import {
  ensureOverlayFocusSelectorsInit,
  isActiveOverlaySurface,
} from "./overlay-focus-selectors";

ensureOverlayFocusSelectorsInit();

const GAME_IDS = ["brick-breaker", "asteroids", "snake"] as const;
const ACTIVATION_DEADZONE = 0.2;
const CAPTURE_TURNS = 0.04;
const ANGLE_GAP_MS = 1000;
const MAX_GESTURE_MS = 6000;
const REVERSE_THRESHOLD = 0.02;
const ACTIVATE_TURNS = 1.9;
const ASTEROIDS_FIRE_KEY = "AG00";
const ASTEROIDS_WORKING_SLOT = 0;
const THREAD_SLOT_COUNT = 6;

export type MiniGameId = (typeof GAME_IDS)[number];

export type RotationGestureState = {
  accumulatedTurns: number;
  direction: number;
  lastAngle: number | null;
  lastAt: number | null;
  startedAt: number | null;
};

export type RotationGestureResult = {
  activated: boolean;
  captured: boolean;
  progress: number;
  state: RotationGestureState;
};

export type MiniGameThreadSlot = {
  id: number;
  threadKey: string | null;
  title: string | null;
  status: "working" | "off";
  selected: boolean;
};

const EMPTY_GESTURE: RotationGestureState = {
  accumulatedTurns: 0,
  direction: 0,
  lastAngle: null,
  lastAt: null,
  startedAt: null,
};

const surfaceOwners = new Map<Element, unknown>();

/** Bundle export `n` — which mini-game is active for the focused surface. */
export const activeMiniGameAtom = createScopedSignal<MiniGameId | null>(
  appScopeAtom,
  null,
);

/** Bundle export `c` — empty rotation gesture seed. */
export const emptyRotationGestureState: RotationGestureState = EMPTY_GESTURE;

/** Bundle export `d` — register a DOM surface as owning a mini-game context. */
export function registerMiniGameSurface(
  owner: unknown,
  element: Element,
  onOrphan?: () => void,
): () => void {
  surfaceOwners.set(element, owner);
  return () => {
    surfaceOwners.delete(element);
    queueMicrotask(() => {
      for (const value of surfaceOwners.values()) {
        if (value === owner) return;
      }
      onOrphan?.();
    });
  };
}

/** Bundle export `r` — resolve the owner for the currently focused surface. */
export function getFocusedMiniGameOwner(): unknown {
  for (const [element, owner] of surfaceOwners) {
    if (element.isConnected && isActiveOverlaySurface(element)) return owner;
  }
  return null;
}

/** Bundle export `o` — pick a random mini-game id. */
export function pickRandomMiniGame(
  random: () => number = Math.random,
): MiniGameId {
  return GAME_IDS[Math.floor(random() * GAME_IDS.length)] ?? "brick-breaker";
}

/** Bundle export `t` — clear the active mini-game atom. */
export function clearActiveMiniGame(store: {
  set: (atom: unknown, value: null) => void;
}): void {
  store.set(activeMiniGameAtom, null);
}

/** Bundle export `l` — asteroids fire keypress detector. */
export function isAsteroidsFireKey(event: {
  key: string;
  act?: number;
}): boolean {
  return event.key === ASTEROIDS_FIRE_KEY && event.act === 1;
}

/** Bundle export `u` — whether an asteroids fire should be handled. */
export function shouldHandleAsteroidsFire(
  game: { game?: string } | null | undefined,
  event: { key: string; act?: number },
): boolean {
  return game?.game === "asteroids" && isAsteroidsFireKey(event);
}

/** Bundle export `a` — build thread-slot HUD rows for a mini-game. */
export function buildMiniGameThreadSlots(
  game: { game?: string } | null | undefined,
): MiniGameThreadSlot[] | null {
  if (game == null) return null;
  return Array.from({ length: THREAD_SLOT_COUNT }, (_item, index) => ({
    id: index,
    threadKey: null,
    title: null,
    status:
      game.game === "asteroids" && index === ASTEROIDS_WORKING_SLOT
        ? "working"
        : "off",
    selected: false,
  }));
}

function startGesture(angle: number, at: number): RotationGestureState {
  return {
    accumulatedTurns: 0,
    direction: 0,
    lastAngle: angle,
    lastAt: at,
    startedAt: at,
  };
}

function wrapDelta(from: number, to: number): number {
  const delta = to - from;
  if (delta > 0.5) return delta - 1;
  if (delta < -0.5) return delta + 1;
  return delta;
}

function progressFromTurns(turns: number): number {
  return Math.min(Math.abs(turns) / ACTIVATE_TURNS, 1);
}

/**
 * Bundle export `i` — advance a clockwise/counter-clockwise activation gesture.
 */
export function advanceMiniGameRotationGesture(
  previous: RotationGestureState,
  event: { angle: number; distance: number },
  now: number,
): RotationGestureResult {
  if (event.distance < ACTIVATION_DEADZONE) {
    return {
      activated: false,
      captured: false,
      progress: 0,
      state: EMPTY_GESTURE,
    };
  }
  if (
    previous.lastAngle == null ||
    previous.lastAt == null ||
    previous.startedAt == null ||
    now - previous.lastAt > ANGLE_GAP_MS ||
    now - previous.startedAt > MAX_GESTURE_MS
  ) {
    return {
      activated: false,
      captured: false,
      progress: 0,
      state: startGesture(event.angle, now),
    };
  }
  const delta = wrapDelta(previous.lastAngle, event.angle);
  if (Math.abs(delta) < 0.002) {
    return {
      activated: false,
      captured: Math.abs(previous.accumulatedTurns) >= CAPTURE_TURNS,
      progress: progressFromTurns(previous.accumulatedTurns),
      state: { ...previous, lastAngle: event.angle, lastAt: now },
    };
  }
  const sign = delta > 0 ? 1 : -1;
  if (
    previous.direction !== 0 &&
    sign !== previous.direction &&
    Math.abs(delta) >= REVERSE_THRESHOLD
  ) {
    return {
      activated: false,
      captured: false,
      progress: 0,
      state: startGesture(event.angle, now),
    };
  }
  const accumulated = previous.accumulatedTurns + delta;
  if (Math.abs(accumulated) >= ACTIVATE_TURNS) {
    return {
      activated: true,
      captured: true,
      progress: 1,
      state: EMPTY_GESTURE,
    };
  }
  return {
    activated: false,
    captured: Math.abs(accumulated) >= CAPTURE_TURNS,
    progress: progressFromTurns(accumulated),
    state: {
      accumulatedTurns: accumulated,
      direction: previous.direction === 0 ? sign : previous.direction,
      lastAngle: event.angle,
      lastAt: now,
      startedAt: previous.startedAt,
    },
  };
}

/** Bundle export `s` — Rolldown ESM init retained as no-op. */
export function ensureCodexMicroMiniGamesInit(): void {}
