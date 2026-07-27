// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Parse `$name?label=&icon=` skill mention labels (bundle `n1r` / export `jJ`).

export type SkillMentionLabelParts = {
  displayLabel: string | undefined;
  icon: "pencil-sparkle" | undefined;
  name: string;
};

/** Parse a skill mention token (with optional query) into name / label / icon. */
export function parseSkillMentionLabel(raw: string): SkillMentionLabelParts {
  const trimmed = raw.trim().replace(/^\$/, "");
  const queryIndex = trimmed.indexOf("?");
  if (queryIndex === -1) {
    return { displayLabel: undefined, icon: undefined, name: trimmed };
  }
  const params = new URLSearchParams(trimmed.slice(queryIndex + 1));
  const label = params.get("label")?.trim();
  const icon = params.get("icon");
  return {
    displayLabel: label == null || label.length === 0 ? undefined : label,
    icon: icon === "pencil-sparkle" ? icon : undefined,
    name: trimmed.slice(0, queryIndex).trim(),
  };
}
