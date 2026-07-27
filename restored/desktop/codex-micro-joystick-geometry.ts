// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Analog joystick direction helpers for Codex Micro (exports `Gw` / `Ww`).

export type AnalogJoystickEvent = {
  angle: number;
  distance: number;
};

export type AnalogDirection = "up" | "down" | "left" | "right";

const DEFAULT_DEADZONE = 0.5;

/**
 * Bundle export `Ww` — map a normalized joystick event to a cardinal direction.
 * Angles are in [0, 1) turns; deadzone uses `distance`.
 */
export function analogDirectionFromJoystick(event: AnalogJoystickEvent, deadzone: number = DEFAULT_DEADZONE): AnalogDirection | null {
  if (event.distance < deadzone) return null;
  if (event.angle >= 0.625 && event.angle < 0.875) return "up";
  if (event.angle >= 0.125 && event.angle < 0.375) return "down";
  if (event.angle >= 0.375 && event.angle < 0.625) return "left";
  return "right";
}

/** Bundle export `Gw` — Rolldown ESM init retained as no-op. */
export function ensureCodexMicroJoystickGeometryInit(): void {}
