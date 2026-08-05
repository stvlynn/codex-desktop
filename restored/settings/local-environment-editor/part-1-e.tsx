// Restored from ref/webview/assets/local-environment-editor-9PiWGb5h.js
// Wave FZ — full polished body from `local-environment-editor-9PiWGb5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 61/80).
// Careful split 1/3
/* split-lane-import-depth:1 */

import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { X_CODEX_BINARY_RESPONSE_HEADER } from "../../config/x-codex-binary-response-header";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { CODEX_WORKTREE_PATH_ENV_KEY } from "../../env/codex-path-env-keys";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { toggleSortedIdList as ToggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  AppInitialJ,
  AppInitialM,
  ReadLoginRouteQuerySnapshot,
} from "./part-1";
import { falcon, localEnvironmentEditorP } from "./part-1-a";
import { LocalEnvironmentEditorA, localEnvironmentEditorO } from "./part-1-c";
import { localEnvironmentEditorL, localEnvironmentEditorU } from "./part-1-d";

var willow,
  xenon,
  yellow,
  _t = esmInit(() => {
    willow = reactCompilerRuntime();
    xenon = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    localEnvironmentEditorP();
    localEnvironmentEditorL();
    localEnvironmentEditorO();
    codexCommandTheme();
  });
function LocalEnvironmentEditorHelper10(ever) {
  let { actions, draft, scriptType, onScriptChange } = ever,
    field = useIntl(),
    [grain, haven] = xenon.useState("default"),
    ink = scriptType === "setup",
    jadeite =
      grain === "default"
        ? ink
          ? draft.setupScript
          : draft.cleanupScript
        : ink
          ? (draft.setupPlatformScripts[grain] ?? "")
          : (draft.cleanupPlatformScripts[grain] ?? "");
  let kernel, leaf;
  kernel = ink ? (
    <MemoizedFormattedMessage
      {...{
        ...localEnvironmentEditorU.setupScript,
      }}
    />
  ) : (
    <MemoizedFormattedMessage
      {...{
        ...localEnvironmentEditorU.cleanupScript,
      }}
    />
  );
  leaf = ink ? (
    <MemoizedFormattedMessage
      {...{
        id: "settings.localEnvironments.editor.setup.description",
        defaultMessage: "Runs at the project root on worktree creation",
        description: "Description for environment setup script summary",
      }}
    />
  ) : (
    <MemoizedFormattedMessage
      {...{
        ...localEnvironmentEditorU.cleanupDescription,
      }}
    />
  );
  let maple = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        title: kernel,
        subtitle: leaf,
        actions,
      }}
    />
  );
  let nimbus = ink
    ? field.formatMessage(localEnvironmentEditorU.setupPlatformSelector)
    : field.formatMessage(localEnvironmentEditorU.cleanupPlatformSelector);
  let opal = (
    <LocalEnvironmentEditorA
      {...{
        leadingOption: "default",
        selectedId: grain,
        onSelect: haven,
        ariaLabel: nimbus,
      }}
    />
  );
  let plume = `local-environment-${scriptType}-script-${grain}`,
    quillow = jadeite,
    silk = ink
      ? field.formatMessage(localEnvironmentEditorU.setupScript)
      : field.formatMessage({
          id: "settings.localEnvironments.environment.cleanup.input",
          defaultMessage: "Cleanup script",
          description:
            "Accessible label for the local environment cleanup script input",
        });
  let thorn = falcon(scriptType, grain);
  let upland = (event) => {
    onScriptChange(scriptType, grain, event.target.value);
  };
  let vista = (
    <textarea
      id={plume}
      className="focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2"
      value={quillow}
      aria-label={silk}
      placeholder={thorn}
      rows={6}
      onChange={upland}
    />
  );
  let wisp = (
    <UseChromeAndCodeThemeSync.Content
      {...{
        className: "gap-2",
        children: [opal, vista],
      }}
    />
  );
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [maple, wisp],
      }}
    />
  );
}
function LocalEnvironmentEditorR() {
  let yonder = (
    <AppInitialM asChild={true}>
      {
        <ReadLoginRouteQuerySnapshot
          {...{
            color: "secondary",
            size: "toolbar",
            className: "w-auto",
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.localEnvironments.environment.setup.envVars.button",
                  defaultMessage: "Variables",
                  description:
                    "Button label that opens the setup env vars popover",
                }}
              />
            ),
          }}
        />
      }
    </AppInitialM>
  );
  let zenith = (
    <AppInitialJ className="px-2 py-1 text-sm font-medium text-token-text-primary">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.localEnvironments.environment.setup.envVars.title",
            defaultMessage: "Setup script environment variables",
            description: "Title for the setup env vars popover",
          }}
        />
      }
    </AppInitialJ>
  );
  let anvil = (
    <LocalEnvironmentEditorHelper11
      {...{
        description: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.localEnvironments.environment.setup.envVars.sourcePath.description",
              defaultMessage: "Source workspace path",
              description: "Description for the source workspace setup env var",
            }}
          />
        ),
        variableName: X_CODEX_BINARY_RESPONSE_HEADER,
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        children: [
          yonder,
          <ToggleSortedIdList
            {...{
              align: "end",
              className:
                "w-80 max-w-[min(20rem,var(--radix-popover-content-available-width))] gap-1",
              children: [
                zenith,
                <div className="flex flex-col gap-1">
                  {anvil}
                  {
                    <LocalEnvironmentEditorHelper11
                      {...{
                        variableName: CODEX_WORKTREE_PATH_ENV_KEY,
                        description: (
                          <MemoizedFormattedMessage
                            {...{
                              id: "settings.localEnvironments.environment.setup.envVars.worktreePath.description",
                              defaultMessage: "New worktree path",
                              description:
                                "Description for the worktree setup env var",
                            }}
                          />
                        ),
                      }}
                    />
                  }
                </div>,
              ],
            }}
          />,
        ],
      }}
    />
  );
}
function LocalEnvironmentEditorHelper11(beacon) {
  let { variableName, description } = beacon,
    crag = (
      <div className="text-sm text-token-text-secondary">{description}</div>
    );
  let dome = (
    <div className="overflow-x-auto rounded-md border border-token-input-background bg-token-text-code-block-background px-2 py-1.5">
      <code className="block text-xs font-medium whitespace-nowrap text-token-text-primary">
        {variableName}
      </code>
    </div>
  );
  return (
    <div className="flex flex-col gap-0.5 rounded-lg px-2 py-1">
      {crag}
      {dome}
    </div>
  );
}
var zinc,
  amber,
  localEnvironmentEditorI = esmInit(() => {
    zinc = reactCompilerRuntime();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    deferredConversationN();
  });
