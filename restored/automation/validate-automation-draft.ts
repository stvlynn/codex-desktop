// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `CQc` / export `Au`.

import {
  isValidScheduleConfig,
  type ScheduleConfig,
} from "./is-valid-schedule-config";

export type AutomationDraft = {
  name: string;
  prompt: string;
  kind: "heartbeat" | string;
  targetThreadId?: string | null;
  executionEnvironment?: string | null;
  model?: string | null;
  scheduleConfig: ScheduleConfig;
};

export type AutomationDraftValidation = {
  trimmedName: string;
  trimmedPrompt: string;
  missingRequirements: string[];
  canSave: boolean;
};

/** Validate required fields on an automation create/edit draft. */
export function validateAutomationDraft(draft: AutomationDraft): AutomationDraftValidation {
  const trimmedName = draft.name.trim();
  const trimmedPrompt = draft.prompt.trim();
  const missingRequirements: string[] = [];
  if (trimmedName.length === 0) missingRequirements.push("name");
  if (trimmedPrompt.length === 0) missingRequirements.push("prompt");
  if (draft.kind === "heartbeat") {
    if (draft.targetThreadId == null) missingRequirements.push("thread");
  } else {
    if (draft.executionEnvironment == null) {
      missingRequirements.push("executionEnvironment");
    }
    if (draft.model == null) missingRequirements.push("model");
  }
  if (!isValidScheduleConfig(draft.scheduleConfig)) {
    missingRequirements.push("schedule");
  }
  return {
    trimmedName,
    trimmedPrompt,
    missingRequirements,
    canSave: missingRequirements.length === 0,
  };
}
