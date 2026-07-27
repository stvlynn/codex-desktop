// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Companions D9o/w9o/T9o/C9o/O9o for exports Nw/Mw/Vw/jw (E9o→Ww already mapped).
// extractFn(internal) only; jotai atoms bound via store.set args.

import {
  analogDirectionFromJoystick,
  type AnalogDirection,
  type AnalogJoystickEvent,
} from "./codex-micro-joystick-geometry";

export type CodexMicroKnobPulse = "clockwise" | "counterclockwise" | null;

export type CodexMicroKeyEvent = {
  key: string;
  act: number;
};

export type CodexMicroInputState = {
  pressedKeys: string[];
  joystick: AnalogJoystickEvent;
  selectedAnalogDirection: AnalogDirection;
  knobPulse: CodexMicroKnobPulse;
};

export type CodexMicroDeviceStatus = {
  status: string;
  transport: string | null;
  model: string | null;
  error: unknown;
  battery: unknown;
};

/** Bundle `O9o` — default micro input state. */
export const DEFAULT_CODEX_MICRO_INPUT_STATE: CodexMicroInputState = {
  pressedKeys: [],
  joystick: { angle: 0, distance: 0 },
  selectedAnalogDirection: "up",
  knobPulse: null,
};

/** Bundle `D9o` — clear knob pulse. */
export function clearCodexMicroKnobPulse(state: CodexMicroInputState): CodexMicroInputState {
  return state.knobPulse == null ? state : { ...state, knobPulse: null };
}

/** Bundle `w9o` — apply joystick sample + derived analog direction. */
export function applyCodexMicroJoystick(state: CodexMicroInputState, joystick: AnalogJoystickEvent): CodexMicroInputState {
  const selectedAnalogDirection =
    analogDirectionFromJoystick(joystick) ?? state.selectedAnalogDirection;
  return state.joystick.angle === joystick.angle &&
    state.joystick.distance === joystick.distance &&
    state.selectedAnalogDirection === selectedAnalogDirection
    ? state
    : { ...state, joystick, selectedAnalogDirection };
}

/** Bundle `T9o` — set selected analog direction. */
export function setCodexMicroAnalogDirection(state: CodexMicroInputState, direction: AnalogDirection): CodexMicroInputState {
  return state.selectedAnalogDirection === direction
    ? state
    : { ...state, selectedAnalogDirection: direction };
}

/** Bundle `C9o` — apply encoder / key act event. */
export function applyCodexMicroKeyEvent(state: CodexMicroInputState, event: CodexMicroKeyEvent): CodexMicroInputState {
  if (event.key === "ENC_CW" && event.act === 2) {
    return { ...state, knobPulse: "clockwise" };
  }
  if (event.key === "ENC_CC" && event.act === 2) {
    return { ...state, knobPulse: "counterclockwise" };
  }
  if (event.act === 1 && !state.pressedKeys.includes(event.key)) {
    return { ...state, pressedKeys: [...state.pressedKeys, event.key] };
  }
  if (event.act === 0 && state.pressedKeys.includes(event.key)) {
    return {
      ...state,
      pressedKeys: state.pressedKeys.filter((key) => key !== event.key),
    };
  }
  return state;
}

type StoreSet = {
  set: (atom: unknown, value: unknown) => void;
};

/** Bundle `L9o` / export `Nw` — clear knob pulse via input atom. */
export function clearCodexMicroKnobPulseOnStore(store: StoreSet, inputAtom: unknown): void {
  store.set(inputAtom, clearCodexMicroKnobPulse);
}

/** Bundle `P9o` / export `Mw` — write joystick sample. */
export function setCodexMicroJoystickOnStore(store: StoreSet, inputAtom: unknown, joystick: AnalogJoystickEvent): void {
  store.set(inputAtom, (state: CodexMicroInputState) =>
    applyCodexMicroJoystick(state, joystick),
  );
}

/** Bundle `F9o` / export `Vw` — write selected analog direction. */
export function setCodexMicroAnalogDirectionOnStore(store: StoreSet, inputAtom: unknown, direction: AnalogDirection): void {
  store.set(inputAtom, (state: CodexMicroInputState) =>
    setCodexMicroAnalogDirection(state, direction),
  );
}

/** Bundle `N9o` / export `jw` — apply key/encoder event. */
export function applyCodexMicroKeyEventOnStore(store: StoreSet, inputAtom: unknown, event: CodexMicroKeyEvent): void {
  store.set(inputAtom, (state: CodexMicroInputState) =>
    applyCodexMicroKeyEvent(state, event),
  );
}

/** Bundle `I9o` / export `Hw` — set micro HUD open flag. */
export function setCodexMicroHudOpen(store: StoreSet, hudOpenAtom: unknown, open: boolean): void {
  store.set(hudOpenAtom, open);
}

/** Bundle `M9o` / export `Uw` — write device status; reset input when disconnected. */
export function setCodexMicroDeviceStatusOnStore(store: StoreSet, statusAtom: unknown, inputAtom: unknown, status: CodexMicroDeviceStatus): void {
  store.set(statusAtom, status);
  if (status.status !== "connected") {
    store.set(inputAtom, DEFAULT_CODEX_MICRO_INPUT_STATE);
  }
}
