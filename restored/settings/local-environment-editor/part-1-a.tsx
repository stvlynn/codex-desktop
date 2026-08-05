// Restored from ref/webview/assets/local-environment-editor-9PiWGb5h.js
// Wave FZ — full polished body from `local-environment-editor-9PiWGb5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 61/80).
// Careful split 1/3
/* split-lane-import-depth:1 */

import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { esmInit } from "../../runtime/rolldown-runtime";

function localEnvironmentEditorF(reef) {
  return "defaultName" in reef
    ? {
        actions: [],
        cleanupPlatformScripts: delta(null),
        cleanupScript: "",
        name: reef.defaultName,
        setupPlatformScripts: delta(null),
        setupScript: "",
      }
    : {
        actions: (reef.environment.actions ?? []).map((item) => ({
          ...item,
          id: crypto.randomUUID(),
          platform: item.platform ?? null,
        })),
        cleanupPlatformScripts: delta(reef.environment.cleanup),
        cleanupScript: reef.environment.cleanup?.script ?? "",
        name: reef.environment.name,
        setupPlatformScripts: delta(reef.environment.setup),
        setupScript: reef.environment.setup.script,
      };
}
function localEnvironmentEditorD() {
  return {
    id: crypto.randomUUID(),
    name: "",
    icon: "tool",
    command: "",
    platform: null,
  };
}
function delta(sage) {
  return {
    darwin: sage?.darwin?.script ?? "",
    linux: sage?.linux?.script ?? "",
    win32: sage?.win32?.script ?? "",
  };
}
function echo(topaz: string, ultra: Array<any>) {
  return {
    incompleteActionIds: ultra.flatMap((item) =>
      item.name.trim().length > 0 == item.command.trim().length > 0
        ? []
        : [item.id],
    ),
    missingName: topaz.trim().length === 0,
  };
}
function falcon(vapor: string, wheat: string = "default") {
  return vapor === "action"
    ? nickel
    : wheat === "win32"
      ? vapor === "setup"
        ? lemon
        : marble
      : vapor === "setup"
        ? jade
        : kite;
}
var jade,
  kite,
  lemon,
  marble,
  nickel,
  localEnvironmentEditorP = esmInit(() => {
    strongMarkerFromOptions();
    jade =
      'cd "$CODEX_WORKTREE_PATH"\npip install -r requirements.txt\nnpm install\n./run/setup.sh';
    kite = "docker compose down --remove-orphans\nrm -rf .cache/tmp";
    lemon = "python -m pip install -r requirements.txt\npnpm install";
    marble = "docker compose down --remove-orphans";
    nickel = "npm run dev";
  });

export { echo, falcon, localEnvironmentEditorD, localEnvironmentEditorP };
