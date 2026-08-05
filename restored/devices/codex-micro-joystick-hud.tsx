// Restored from ref/webview/assets/codex-micro-joystick-hud-DHXKWfwa.js
// Wave FY — full polished body from `codex-micro-joystick-hud-DHXKWfwa/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 6 (verified 17/23).
// Wave FZ-support — PascalCase invalid JSX tags: renamedId→CodexMicroJoystickHudHelper1.

import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { ensureCodexMicroJoystickFeedbackInit } from "../desktop/codex-micro-joystick-feedback";
import { usePetsSettingsController } from "../settings/use-pets-settings-controller";
import { CodexMicroJoystickHudHelper1 } from "./codex-micro-joystick-hud-body";

/** Wave FY unresolved companion (missing-export:ui/deferred-ui-pw-2.tsx) */
const AppInitialPw: any = undefined;
export function CodexMicroJoystickHud() {
  let eagle = CodexPluginActionResult(ensureCodexMicroJoystickFeedbackInit),
    frost = CodexPluginActionResult(AppInitialPw),
    { skills } = usePetsSettingsController();
  return (
    <CodexMicroJoystickHudHelper1
      {...{
        feedback: eagle,
        isMappingEditorOpen: frost,
        skills,
      }}
    />
  );
}

/** Wave FY: bind no longer required after full body promote */
export function bindCodexMicroJoystickHud(_next: unknown): void {}
export function ensureCodexMicroJoystickHudInit(): void {}
