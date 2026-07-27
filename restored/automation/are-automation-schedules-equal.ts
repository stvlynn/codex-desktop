// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `EQc` / export `Ou`.

import {
  scheduleConfigToRrule,
  type ScheduleConfigForRrule,
} from "./schedule-config-to-rrule";

/** Equality on name/prompt/derived rrule. */
export function areAutomationSchedulesEqual(
  left: {
    name: string;
    prompt: string;
    scheduleConfig: ScheduleConfigForRrule;
  },
  right: {
    name: string;
    prompt: string;
    scheduleConfig: ScheduleConfigForRrule;
  },
): boolean {
  return (
    left.name === right.name &&
    left.prompt === right.prompt &&
    scheduleConfigToRrule(left.scheduleConfig) ===
      scheduleConfigToRrule(right.scheduleConfig)
  );
}
