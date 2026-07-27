// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `_rt` — pure helper.

/** Replace `{key}` placeholders using `vars[key].toString()`. */
export function replaceBraceTemplates(
  template: string,
  vars: Record<string, { toString(): string }>,
): string {
  return template.replace(/\{([^}]+)\}/g, (_match, key: string) =>
    vars[key].toString(),
  );
}
