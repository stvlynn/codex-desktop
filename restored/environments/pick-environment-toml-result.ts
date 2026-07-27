// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Kxo` / export `vA`.

import { slashPathBasename } from "../utils/slash-path-basename";

export type ConfigReadResult = {
  configPath: string;
  type: string;
};

/** Prefer a successful `environment.toml` read result. */
export function pickEnvironmentTomlResult<T extends ConfigReadResult>(
  results: T[],
): T | null {
  return (
    results.find(
      (result) =>
        slashPathBasename(result.configPath) === "environment.toml" &&
        result.type === "success",
    ) ||
    results.find((result) => result.type === "success") ||
    (results[0] ?? null)
  );
}
