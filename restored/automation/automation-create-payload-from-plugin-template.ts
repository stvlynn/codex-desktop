// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `RQc` / export `Su`.

import { applyCronTemplateFields } from "./apply-cron-template-fields";
import { applyModelSettingsToAutomationDraft } from "./apply-model-settings-to-automation-draft";
import { automationCreatePayloadFromDraft } from "./automation-create-payload-from-draft";
import { DEFAULT_AUTOMATION_DRAFT } from "./default-automation-draft";
import { resolveAutomationRrule } from "./resolve-automation-rrule";
import type { PluginAutomationTemplate } from "./automation-draft-from-plugin-template";

export type AutomationModelSettings = {
  isLoading: boolean;
  model: string | null;
  reasoningEffort: string | null;
};

/** Create payload from plugin template + model settings. */
export function automationCreatePayloadFromPluginTemplate(input: {
  modelSettings: AutomationModelSettings;
  template: PluginAutomationTemplate & { pluginId: string };
}): ReturnType<typeof automationCreatePayloadFromDraft> {
  const { modelSettings, template } = input;
  const draft = applyModelSettingsToAutomationDraft({
    draft: applyCronTemplateFields(DEFAULT_AUTOMATION_DRAFT, {
      name: template.name,
      pluginTemplateId: `${template.pluginId}/${template.key}`,
      prompt: template.prompt,
      scheduleConfig: {
        mode: "custom",
        customRrule: template.rrule,
        intervalHours: 1,
        intervalMinutes: null,
        weekdays: [],
        time: "09:00",
      },
    }),
    modelSettings,
  });
  return automationCreatePayloadFromDraft({
    draft,
    name: template.name,
    prompt: template.prompt,
    rrule: resolveAutomationRrule({
      scheduleDirty: (draft as { scheduleDirty?: boolean }).scheduleDirty,
      rawRrule: (draft as { rawRrule?: string | null }).rawRrule ?? null,
      scheduleConfig: (
        draft as {
          scheduleConfig: Parameters<
            typeof resolveAutomationRrule
          >[0]["scheduleConfig"];
        }
      ).scheduleConfig,
    }),
  });
}
