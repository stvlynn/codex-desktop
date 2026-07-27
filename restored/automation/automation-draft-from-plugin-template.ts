// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bQc` / export `Tu` (full `pZc` parse deferred).

import { buildPluginScheduledTaskKey } from "../plugins/parse-plugin-scheduled-task-key";
import { applyCronTemplateFields } from "./apply-cron-template-fields";
import { DEFAULT_AUTOMATION_DRAFT } from "./default-automation-draft";

export type PluginAutomationTemplate = {
  key: string;
  name: string;
  prompt: string;
  rrule: string;
};

/** Draft shell from a plugin automation template. */
export function automationDraftFromPluginTemplate(input: {
  pluginId: string;
  template: PluginAutomationTemplate;
}): ReturnType<typeof applyCronTemplateFields> {
  const { pluginId, template } = input;
  return applyCronTemplateFields(DEFAULT_AUTOMATION_DRAFT, {
    name: template.name,
    pluginTemplateId: buildPluginScheduledTaskKey(pluginId, template.key),
    prompt: template.prompt,
    scheduleConfig: {
      mode: "custom",
      customRrule: template.rrule,
      intervalHours: 1,
      intervalMinutes: null,
      weekdays: [],
      time: "09:00",
    },
  });
}
