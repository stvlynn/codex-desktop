// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wQc` / export `Fu`.

import {
  scheduleConfigToRrule,
  type ScheduleConfigForRrule,
} from "./schedule-config-to-rrule";

/** Prefer dirty-free rawRrule, else derive from scheduleConfig. */
export function resolveAutomationRrule(draft: {
  scheduleDirty?: boolean;
  rawRrule?: string | null;
  scheduleConfig: ScheduleConfigForRrule;
}): string {
  return !draft.scheduleDirty && draft.rawRrule
    ? draft.rawRrule
    : scheduleConfigToRrule(draft.scheduleConfig);
}
