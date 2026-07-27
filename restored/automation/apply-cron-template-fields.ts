// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `TQc` / export `_u`.

/** Overlay cron-template fields onto an automation draft. */
export function applyCronTemplateFields<T extends Record<string, unknown>>(
  draft: T,
  template: {
    name: string;
    pluginTemplateId?: string | null;
    prompt: string;
    scheduleConfig: unknown;
  },
): T & {
  name: string;
  pluginTemplateId: string | null;
  prompt: string;
  kind: "cron";
  rawRrule: null;
  scheduleConfig: unknown;
  scheduleDirty: true;
} {
  return {
    ...draft,
    name: template.name,
    pluginTemplateId: template.pluginTemplateId ?? null,
    prompt: template.prompt,
    kind: "cron",
    rawRrule: null,
    scheduleConfig: template.scheduleConfig,
    scheduleDirty: true,
  };
}
