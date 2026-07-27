// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Pick model + reasoning effort for an automation (`Ome` / `kme` / `Ame` / `jme`).

import { DEFAULT_AUTOMATION_MODEL_ID } from "./automation-defaults";

export type AutomationModelOption = {
  model: string;
  isDefault?: boolean;
  defaultReasoningEffort?: string | null;
  supportedReasoningEfforts?: readonly { reasoningEffort: string }[];
};

export type AutomationModelRef = {
  model?: string | null;
  reasoningEffort?: string | null;
};

/** Bundle `Ome` (co-located). */
export function findAutomationModelOption(
  models: readonly AutomationModelOption[],
  modelId: string | null | undefined,
): AutomationModelOption | null {
  if (modelId == null) return null;
  return models.find((entry) => entry.model === modelId) ?? null;
}

/**
 * Bundle `kme` (co-located).
 * Keep the requested effort when supported; else model default / first / null.
 */
export function resolveAutomationReasoningEffort({
  model,
  reasoningEffort,
}: {
  model: AutomationModelOption | null | undefined;
  reasoningEffort: string | null | undefined;
}): string | null {
  const supported = model?.supportedReasoningEfforts ?? [];
  if (
    reasoningEffort != null &&
    supported.some((entry) => entry.reasoningEffort === reasoningEffort)
  ) {
    return reasoningEffort;
  }
  return model?.defaultReasoningEffort ?? supported[0]?.reasoningEffort ?? null;
}

/**
 * Bundle `Ame` (co-located).
 * Prefer explicit default, then gpt-5.6-terra, then the first catalog entry.
 */
export function pickDefaultAutomationModelOption(
  models: readonly AutomationModelOption[],
): AutomationModelOption | null {
  return (
    models.find((entry) => entry.isDefault) ??
    models.find((entry) => entry.model === "gpt-5.6-terra") ??
    models[0] ??
    null
  );
}

/**
 * Bundle `jme` (co-located with `Hme` / packet-004).
 * Resolve a concrete model + effort for an automation against the catalog.
 */
export function resolveAutomationModel({
  automation,
  models,
}: {
  automation: AutomationModelRef;
  models: readonly AutomationModelOption[];
}): { model: string; reasoningEffort: string | null } {
  const matched = findAutomationModelOption(models, automation.model);
  if (matched != null) {
    return {
      model: matched.model,
      reasoningEffort: resolveAutomationReasoningEffort({
        model: matched,
        reasoningEffort: automation.reasoningEffort,
      }),
    };
  }

  if (automation.model == null) {
    const fallback = findAutomationModelOption(
      models,
      DEFAULT_AUTOMATION_MODEL_ID,
    );
    if (fallback != null) {
      return {
        model: fallback.model,
        reasoningEffort: resolveAutomationReasoningEffort({
          model: fallback,
          reasoningEffort: automation.reasoningEffort ?? "medium",
        }),
      };
    }
  }

  const picked = pickDefaultAutomationModelOption(models);
  if (picked == null) {
    return {
      model: automation.model ?? DEFAULT_AUTOMATION_MODEL_ID,
      reasoningEffort: automation.reasoningEffort ?? "medium",
    };
  }

  return {
    model: picked.model,
    reasoningEffort: resolveAutomationReasoningEffort({
      model: picked,
      reasoningEffort: null,
    }),
  };
}
