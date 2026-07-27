// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `qxo` / export `_A`. Uses `pickEnvironmentTomlResult` (`Kxo` / `vA`).

import {
  pickEnvironmentTomlResult,
  type ConfigReadResult,
} from "./pick-environment-toml-result";

/** Config path from an environment pick result, if present. */
export function environmentConfigPathFromPick(
  results: ConfigReadResult[],
): string | null {
  return pickEnvironmentTomlResult(results)?.configPath ?? null;
}
