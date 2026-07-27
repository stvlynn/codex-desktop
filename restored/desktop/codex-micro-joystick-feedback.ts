// Restored from ref/webview/assets/codex-micro-joystick-feedback-CK7y1eSl.js
// Joystick feedback state reducer for Codex Micro gesture HUD.
// Stage 3: Gw/Ww → joystick-geometry; Fft/Ift/M_t/ivt AppScope already mapped.

import {
  appScopeAtom,
  createScopedSignal,
} from "../boundaries/app-scope-runtime";
import {
  analogDirectionFromJoystick,
  ensureCodexMicroJoystickGeometryInit,
  type AnalogDirection,
  type AnalogJoystickEvent,
} from "./codex-micro-joystick-geometry";

ensureCodexMicroJoystickGeometryInit();

const DEADZONE = 0.1;

export type JoystickFeedbackStatus =
  | "tracking"
  | "unassigned"
  | "unavailable"
  | "game-gesture"
  | string;

export type JoystickFeedbackState = {
  action: unknown;
  direction: AnalogDirection | string;
  event: AnalogJoystickEvent;
  gameActivationProgress?: number;
  status: JoystickFeedbackStatus;
  visible: boolean;
};

const HIDDEN_DEFAULT: JoystickFeedbackState = {
  action: null,
  direction: "right",
  event: { angle: 0, distance: 0 },
  status: "tracking",
  visible: false,
};

function hide(state: JoystickFeedbackState): JoystickFeedbackState {
  return state.visible ? { ...state, visible: false } : state;
}

function reduceFeedback(
  state: JoystickFeedbackState,
  args: {
    activeDirection: AnalogDirection | string | null;
    enabled: boolean;
    event: AnalogJoystickEvent;
    executionStatus?: JoystickFeedbackStatus;
    mapping: Record<string, unknown>;
    previousActiveDirection: AnalogDirection | string | null;
  },
): JoystickFeedbackState {
  if (!args.enabled) return hide(state);
  if (args.event.distance < DEADZONE) {
    return state.visible ? { ...state, event: args.event } : state;
  }
  const direction = analogDirectionFromJoystick(args.event, DEADZONE);
  if (direction == null) return state;
  const action = args.mapping[direction];
  if (
    args.activeDirection === direction &&
    args.previousActiveDirection !== direction
  ) {
    return {
      action,
      direction,
      event: args.event,
      status:
        action == null ? "unassigned" : (args.executionStatus ?? "unavailable"),
      visible: true,
    };
  }
  return {
    action,
    direction,
    event: args.event,
    status:
      state.visible &&
      state.direction === direction &&
      args.activeDirection === direction &&
      args.previousActiveDirection === direction &&
      state.status !== "tracking"
        ? state.status
        : "tracking",
    visible: true,
  };
}

function gameGesture(
  state: JoystickFeedbackState,
  event: AnalogJoystickEvent,
  progress: number,
): JoystickFeedbackState {
  return {
    action: null,
    direction: analogDirectionFromJoystick(event, DEADZONE) ?? state.direction,
    event,
    gameActivationProgress: Math.min(Math.max(progress, 0), 1),
    status: "game-gesture",
    visible: true,
  };
}

type StoreLike = {
  get: (atom: unknown) => JoystickFeedbackState;
  set: (
    atom: unknown,
    value:
      | JoystickFeedbackState
      | ((prev: JoystickFeedbackState) => JoystickFeedbackState),
  ) => void;
};

/** Bundle export `t` — scoped signal holding joystick feedback HUD state. */
export const joystickFeedbackAtom = createScopedSignal(
  appScopeAtom,
  HIDDEN_DEFAULT,
);

/** Bundle export `a` — apply a tracking / assignment update. */
export function updateJoystickFeedback(
  store: StoreLike,
  args: Parameters<typeof reduceFeedback>[1],
): JoystickFeedbackState {
  const next = reduceFeedback(store.get(joystickFeedbackAtom), args);
  store.set(joystickFeedbackAtom, next);
  return next;
}

/** Bundle export `o` — apply a mini-game activation gesture update. */
export function updateJoystickGameGesture(store: StoreLike, event: AnalogJoystickEvent, progress: number): void {
  store.set(
    joystickFeedbackAtom,
    gameGesture(store.get(joystickFeedbackAtom), event, progress),
  );
}

/** Bundle export `n` — hide the feedback HUD. */
export function hideJoystickFeedback(store: StoreLike): void {
  store.set(joystickFeedbackAtom, hide);
}

/** Bundle export `i` — reset feedback HUD to the default hidden state. */
export function resetJoystickFeedback(store: StoreLike): void {
  store.set(joystickFeedbackAtom, HIDDEN_DEFAULT);
}

/** Bundle export `r` — Rolldown ESM init retained as no-op. */
export function ensureCodexMicroJoystickFeedbackInit(): void {}
