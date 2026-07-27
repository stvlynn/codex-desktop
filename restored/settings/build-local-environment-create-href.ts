// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `u5s` / export `gm`.

import { LOCAL_ENVIRONMENTS_CREATE_SETTINGS_PATH } from "./local-environments-create-path";

/** Build settings href for creating a local environment config. */
export function buildLocalEnvironmentCreateHref(input: {
  configPath?: string | null;
  workspaceRoot: string;
}): string {
  const params = new URLSearchParams({ workspaceRoot: input.workspaceRoot });
  if (input.configPath != null) params.set("configPath", input.configPath);
  return `${LOCAL_ENVIRONMENTS_CREATE_SETTINGS_PATH}?${params.toString()}`;
}
