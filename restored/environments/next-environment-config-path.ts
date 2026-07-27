// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Jxo` / export `yA`.

import {
  joinRelativePathSegments,
  toPosixPath,
} from "../utils/workspace-paths";
import { DEFAULT_ENVIRONMENT_TOML_NAME } from "./default-environment-toml-name";

export type EnvironmentConfigPathLike = {
  configPath: string;
};

/** Next free `environment.toml` / `environment-N.toml` under codex home. */
export function nextEnvironmentConfigPath(
  existing: EnvironmentConfigPathLike[],
  codexHome: string,
): string {
  const dir = joinRelativePathSegments(
    toPosixPath(codexHome),
    ".codex/environments",
  );
  const taken = new Set(existing.map((e) => toPosixPath(e.configPath)));
  const first = joinRelativePathSegments(dir, DEFAULT_ENVIRONMENT_TOML_NAME);
  if (!taken.has(toPosixPath(first))) return first;
  let n = 2;
  for (;;) {
    const candidate = joinRelativePathSegments(dir, `environment-${n}.toml`);
    if (!taken.has(toPosixPath(candidate))) return candidate;
    n += 1;
  }
}
