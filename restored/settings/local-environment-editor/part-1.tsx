// Restored from ref/webview/assets/local-environment-editor-9PiWGb5h.js
// Wave FZ — full polished body from `local-environment-editor-9PiWGb5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 61/80).
// Careful split 1/3
/* split-lane-import-depth:1 */

import { dataFileBlameAuthor } from "../../account/data-file-blame-author";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { clampZoomPercent } from "../../artifact/clamp-zoom-percent";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { SUPPORTED_NODE_PLATFORMS } from "../../config/supported-node-platforms";
import { X_CODEX_BINARY_RESPONSE_HEADER } from "../../config/x-codex-binary-response-header";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { appServices } from "../../desktop/desktop-services";
import {
  CODEX_WORKTREE_PATH_ENV_KEY,
  LOCAL_ENVIRONMENT_CONFIG_PATH_KEY,
} from "../../env/codex-path-env-keys";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import {
  ensureTanstackReactFormApiInit,
  useTanstackForm,
} from "../../forms/tanstack-react-form";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconMA } from "../../icons/app-icon-ma";
import { ensureFlaskIconInit, FlaskIcon } from "../../icons/flask-icon";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import {
  ensurePlayOutlineIconInit,
  PlayOutlineIcon,
} from "../../icons/play-outline-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { scrollMatchIntoView } from "../../thread/thread-find-scroll";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { toggleSortedIdList as ToggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import {
  ensureLocalEnvironmentWorkflowMessagesInit,
  localEnvironmentWorkflowMessages,
} from "../local-environment-workflow-messages";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { buildVscodeQueryKey } from "../vscode-query-key";

const useLocalEnvironmentEditorState: any = undefined;
/** Wave FZ unresolved companion (missing-export:hooks/use-git-repo-live-query.ts) */
const ensureUseGitRepoLiveQueryInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_AG_Init@composer/composer-esm-inits.ts) */
const AppInitialAG: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureEnvironmentLabelsF3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialF3: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/child-list.ts) */
const childList: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceIXInit: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const AppInitialJ: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useChronicleSettingsSection@settings/use-chronicle-settings-section.ts) */
const AppInitialL: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:remoteHostedPipHiddenThreadIds@conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const AppInitialM: any = undefined;
/** Wave FZ unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorStateStub: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureEnvironmentLabelsP3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialP3: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:updateToneSectionContent@composer/update-tone-section-content.ts) */
const AppInitialPl: any = undefined;
/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FZ unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/deferred-conversation-wh3.tsx) */
const deferredConversationWH3: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
async function localEnvironmentEditorY(jasper, kelp, lotus, mint) {
  let nova = [
    ...Array.from(new Set(lotus)).flatMap((item) => [
      buildVscodeQueryKey("local-environment-config", {
        configPath: item,
        hostId: kelp,
      }),
      buildVscodeQueryKey("local-environment", {
        configPath: item,
        hostId: kelp,
      }),
    ]),
    ...(mint == null
      ? []
      : [
          buildVscodeQueryKey("local-environments", {
            hostId: kelp,
            workspaceRoot: mint,
          }),
        ]),
  ];
  await Promise.all(
    nova.map((item) =>
      jasper.invalidateQueries({
        queryKey: item,
      }),
    ),
  );
}
var localEnvironmentEditorV = esmInit(() => {
  scrollAppActionTargetTo();
});
function LocalEnvironmentEditorG(olive) {
  let { icon, className } = olive,
    Prism = copper[icon],
    quill = IntlProvider("icon-sm", className);
  return (
    <Prism
      {...{
        className: quill,
      }}
    />
  );
}
var alpha,
  bravo,
  copper,
  localEnvironmentEditorUnderscore = esmInit(() => {
    alpha = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    AppInitialAG();
    FlaskIcon();
    PlayOutlineIcon();
    ensureHooksFocusIconInit();
    copper = {
      tool: deferredConversationWH3,
      run: ensurePlayOutlineIconInit,
      debug: childList,
      test: ensureFlaskIconInit,
    };
  }),
  localEnvironmentEditorM,
  localEnvironmentEditorH = esmInit(() => {
    ensureIntlFormattersInit();
    localEnvironmentEditorM = [
      {
        value: "tool",
        message: identity({
          id: "settings.localEnvironments.actions.icon.tool",
          defaultMessage: "Tool",
          description: "Tool icon label for local environment actions",
        }),
      },
      {
        value: "run",
        message: identity({
          id: "settings.localEnvironments.actions.icon.run",
          defaultMessage: "Run",
          description: "Run icon label for local environment actions",
        }),
      },
      {
        value: "debug",
        message: identity({
          id: "settings.localEnvironments.actions.icon.debug",
          defaultMessage: "Debug",
          description: "Debug icon label for local environment actions",
        }),
      },
      {
        value: "test",
        message: identity({
          id: "settings.localEnvironments.actions.icon.test",
          defaultMessage: "Test",
          description: "Test icon label for local environment actions",
        }),
      },
    ];
  });
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
function echo(topaz, ultra) {
  return {
    incompleteActionIds: ultra.flatMap((item) =>
      item.name.trim().length > 0 == item.command.trim().length > 0
        ? []
        : [item.id],
    ),
    missingName: topaz.trim().length === 0,
  };
}
function falcon(vapor, wheat = "default") {
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
function gamma({
  version,
  name,
  setupScript,
  setupPlatformScripts,
  cleanupScript,
  cleanupPlatformScripts,
  actions,
}) {
  let yarn = actions.flatMap((item) => {
      let acorn = item.name.trim(),
        bloom = item.command.trim();
      return acorn.length === 0 || bloom.length === 0
        ? []
        : [
            {
              ...item,
              command: bloom,
              name: acorn,
            },
          ];
    }),
    zephyr = [];
  zephyr.push("# THIS IS AUTOGENERATED. DO NOT EDIT MANUALLY");
  zephyr.push(`version = ${version}`);
  zephyr.push(`name = ${indigo(name.trim())}`);
  harbor(zephyr, "setup", setupScript, setupPlatformScripts);
  harbor(zephyr, "cleanup", cleanupScript, cleanupPlatformScripts);
  yarn.length > 0 && zephyr.push("");
  for (let coral of yarn) {
    zephyr.push("[[actions]]");
    zephyr.push(`name = ${indigo(coral.name)}`);
    coral.icon && zephyr.push(`icon = ${indigo(coral.icon)}`);
    zephyr.push(`command = ${indigo(coral.command)}`);
    coral.platform && zephyr.push(`platform = ${indigo(coral.platform)}`);
    zephyr.push("");
  }
  return `${zephyr.join("\n").trimEnd()}\n`;
}
function harbor(drift, eagle, frost, glide) {
  let honey = SUPPORTED_NODE_PLATFORMS.flatMap((item) => {
    let iris = glide[item];
    return iris == null || iris.length === 0
      ? []
      : [
          {
            platform: item,
            script: iris,
          },
        ];
  });
  if (
    ((eagle === "setup" || frost.length > 0 || honey.length > 0) &&
      (drift.push(""),
      drift.push(`[${eagle}]`),
      drift.push(`script = ${indigo(frost)}`)),
    honey.length !== 0)
  ) {
    drift.push("");
    for (let [jewel, knoll] of honey.entries()) {
      drift.push(`[${eagle}.${knoll.platform}]`);
      drift.push(`script = ${indigo(knoll.script)}`);
      jewel < honey.length - 1 && drift.push("");
    }
  }
}
function indigo(lunar) {
  let moss = lunar.replace(/\r\n?/g, "\n");
  return moss.includes("\n")
    ? moss.includes("'''")
      ? `"""\n${moss.replace(/\\/g, "\\\\").replace(/"""/g, '\\"""')}"""`
      : `'''\n${moss}'''`
    : JSON.stringify(moss);
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
  }),
  localEnvironmentEditorU,
  localEnvironmentEditorL = esmInit(() => {
    ensureIntlFormattersInit();
    localEnvironmentEditorU = identity({
      actionPlatforms: {
        id: "settings.localEnvironments.actions.item.platforms",
        defaultMessage: "Platforms",
        description: "Label for local environment action platforms",
      },
      actionScript: {
        id: "settings.localEnvironments.actions.item.command",
        defaultMessage: "Action script",
        description: "Label for local environment action script",
      },
      actionName: {
        id: "settings.localEnvironments.actions.item.name",
        defaultMessage: "Name",
        description: "Label for local environment action name",
      },
      addAction: {
        id: "settings.localEnvironments.actions.add",
        defaultMessage: "Add action",
        description: "Button label to add a local environment action",
      },
      actionsDescription: {
        id: "settings.localEnvironments.environment.actions.description",
        defaultMessage:
          "These actions can run any command and will be displayed in the header",
        description: "Description for local environment actions summary",
      },
      actionsEmpty: {
        id: "settings.localEnvironments.actions.empty",
        defaultMessage: "Add an action to run commands from the local toolbar",
        description: "Empty state for local environment actions",
      },
      actionsTitle: {
        id: "settings.localEnvironments.actions.title",
        defaultMessage: "Actions",
        description: "Title for local environment actions section",
      },
      cleanupPlatformSelector: {
        id: "settings.localEnvironments.environment.cleanup.platformSelector",
        defaultMessage: "Cleanup script platform",
        description:
          "Accessible label for the cleanup script platform selector",
      },
      cleanupDescription: {
        id: "settings.localEnvironments.environment.cleanup.description",
        defaultMessage: "Runs at the project root before worktree cleanup",
        description: "Description for the cleanup script input",
      },
      cleanupScript: {
        id: "settings.localEnvironments.environment.cleanup.title",
        defaultMessage: "Cleanup script",
        description: "Title for the local environment cleanup script section",
      },
      defaultEnvironmentName: {
        id: "settings.localEnvironments.environment.defaultName",
        defaultMessage: "local",
        description: "Fallback name for a local environment",
      },
      environmentName: {
        id: "settings.localEnvironments.environment.name",
        defaultMessage: "Name",
        description: "Label for a local environment name",
      },
      setupPlatformSelector: {
        id: "settings.localEnvironments.environment.setup.platformSelector",
        defaultMessage: "Setup script platform",
        description: "Accessible label for the setup script platform selector",
      },
      setupScript: {
        id: "settings.localEnvironments.environment.setup",
        defaultMessage: "Setup script",
        description: "Label for a local environment setup script",
      },
    });
  });
async function onyx({
  configPath,
  expectedRevision,
  hostId,
  queryClient,
  raw,
  selectEnvironment,
  workspaceRoot,
}) {
  let north = appServices.localEnvironments;
  if (north == null)
    throw Error("Local environments are not supported by this host.");
  let orbit = await north.saveConfig({
      configPath,
      expectedRevision,
      hostId,
      raw,
    }),
    pine = orbit.configPath,
    quest = localEnvironmentEditorY(
      queryClient,
      hostId,
      [configPath, pine],
      workspaceRoot,
    );
  return orbit.type === "conflict"
    ? {
        type: "conflict",
      }
    : (await quest,
      {
        configPath: pine,
        type:
          (await selectEnvironment?.(pine)) === false
            ? "selection-failed"
            : "success",
      });
}
async function localEnvironmentEditorC({
  configPath,
  draft,
  expectedRevision,
  hostId,
  queryClient,
  selectEnvironment,
  version,
  workspaceRoot,
}) {
  let ridge = echo(draft.name, draft.actions);
  return ridge.missingName || ridge.incompleteActionIds.length > 0
    ? {
        type: "invalid",
      }
    : onyx({
        configPath,
        expectedRevision,
        hostId,
        queryClient,
        raw: gamma({
          version,
          ...draft,
        }),
        selectEnvironment,
        workspaceRoot,
      });
}
async function pearl({
  codexWorktree,
  configPath,
  gitRoot,
  selectForWorkspace,
  selectForWorktree,
}) {
  return codexWorktree
    ? gitRoot == null
      ? false
      : selectForWorktree(gitRoot, configPath)
    : (selectForWorkspace(configPath), true);
}
var localEnvironmentEditorS = esmInit(() => {
    ensureDynamicScriptLoadInit();
    localEnvironmentEditorV();
    localEnvironmentEditorP();
  }),
  at,
  quartz = esmInit(() => {
    ensureIntlFormattersInit();
    at = identity({
      all: {
        id: "settings.localEnvironments.actions.item.platforms.all",
        defaultMessage: "All platforms",
        description: "Label for an action available on every platform",
      },
      default: {
        id: "settings.localEnvironments.environment.script.default",
        defaultMessage: "Default",
        description: "Label for default local environment lifecycle script",
      },
      darwin: {
        id: "settings.localEnvironments.actions.item.platforms.macos",
        defaultMessage: "macOS",
        description: "Label for macOS platform toggle",
      },
      linux: {
        id: "settings.localEnvironments.actions.item.platforms.linux",
        defaultMessage: "Linux",
        description: "Label for Linux platform toggle",
      },
      win32: {
        id: "settings.localEnvironments.actions.item.platforms.windows",
        defaultMessage: "Windows",
        description: "Label for Windows platform toggle",
      },
    });
  });
function LocalEnvironmentEditorA(storm) {
  let { leadingOption, selectedId, onSelect, ariaLabel } = storm,
    tide = useIntl(),
    unity = [leadingOption, ...SUPPORTED_NODE_PLATFORMS];
  let vale = unity,
    wave = vale.map((item) => {
      let apex = tide.formatMessage(at[item]);
      return {
        id: item,
        label: apex,
        ariaLabel: apex,
      };
    });
  return (
    <AppInitialPl
      className="flex-wrap"
      selectedId={selectedId}
      onSelect={onSelect}
      size="default"
      ariaLabel={ariaLabel}
      options={wave}
    />
  );
}
var river,
  slate,
  localEnvironmentEditorO = esmInit(() => {
    river = reactCompilerRuntime();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    WritingBlockRenderer();
    quartz();
  });
function LocalEnvironmentEditorHelper9(brook) {
  let { actions, dropdownDisabled, incompleteActionIds, onChange } = brook,
    cliff = useIntl(),
    dusk,
    elm,
    fern,
    grove,
    hill,
    isle;
  {
    let lagoon = (seed) => ({
      label: cliff.formatMessage(seed.message),
      value: seed.value,
      icon: (
        <LocalEnvironmentEditorG
          {...{
            icon: seed.value,
          }}
        />
      ),
    });
    let meadow = localEnvironmentEditorM.map(lagoon),
      nest = (trail, urn) => {
        onChange(
          actions.map((item) =>
            item.id === trail
              ? {
                  ...item,
                  ...urn,
                }
              : item,
          ),
        );
      };
    let oak = nest;
    elm = UseChromeAndCodeThemeSync;
    let petal = (
      <MemoizedFormattedMessage
        {...{
          ...localEnvironmentEditorU.actionsTitle,
        }}
      />
    );
    let quiet = () => {
      onChange([...actions, localEnvironmentEditorD()]);
    };
    let rain;
    rain = (
      <MemoizedFormattedMessage
        {...{
          ...localEnvironmentEditorU.addAction,
        }}
      />
    );
    isle = (
      <UseChromeAndCodeThemeSync.Header
        {...{
          title: petal,
          actions: (
            <ReadLoginRouteQuerySnapshot
              {...{
                color: "secondary",
                size: "toolbar",
                type: "button",
                onClick: quiet,
                children: rain,
              }}
            />
          ),
        }}
      />
    );
    dusk = UseChromeAndCodeThemeSync.Content;
    fern = "gap-1";
    grove = (
      <div className="text-sm text-token-text-secondary">
        {
          <MemoizedFormattedMessage
            {...{
              ...localEnvironmentEditorU.actionsDescription,
            }}
          />
        }
      </div>
    );
    hill =
      actions.length === 0 ? (
        <ParseUrlOrFallback
          {...{
            children: (
              <div className="p-3 text-sm text-token-text-secondary">
                {
                  <MemoizedFormattedMessage
                    {...{
                      ...localEnvironmentEditorU.actionsEmpty,
                    }}
                  />
                }
              </div>
            ),
          }}
        />
      ) : (
        <div className="flex flex-col gap-3">
          {actions.map((item) => {
            let vine =
                meadow.find((_item) => _item.value === (item.icon ?? "tool")) ??
                meadow[0],
              wind = incompleteActionIds.includes(item.id),
              yarrow = wind && item.name.trim().length === 0,
              azure = wind && item.command.trim().length === 0,
              birch = `local-env-action-name-error-${item.id}`,
              canyon = `local-env-action-command-error-${item.id}`;
            return (
              <div
                key={item.id}
                className="flex flex-col gap-3 rounded-lg border border-token-border bg-token-input-background p-3"
              >
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs font-medium tracking-wide text-token-text-secondary uppercase"
                    htmlFor={`local-env-action-name-${item.id}`}
                  >
                    {
                      <MemoizedFormattedMessage
                        {...{
                          ...localEnvironmentEditorU.actionName,
                        }}
                      />
                    }
                  </label>
                  <div className="flex items-center gap-2">
                    {
                      <DropdownMenuPopover
                        {...{
                          align: "start",
                          contentWidth: "icon",
                          disabled: dropdownDisabled,
                          triggerButton: (
                            <ReadLoginRouteQuerySnapshot
                              {...{
                                id: `local-env-action-icon-${item.id}`,
                                className: "w-12 justify-center text-sm",
                                color: "secondary",
                                size: "toolbar",
                                type: "button",
                                "aria-label": vine.label,
                                children: vine.icon,
                              }}
                            />
                          ),
                          children: meadow.map((_item) => (
                            <DropdownMenu.Item
                              key={_item.value}
                              {...{
                                onSelect: () => {
                                  oak(item.id, {
                                    icon: _item.value,
                                  });
                                },
                                children: (
                                  <span className="flex items-center gap-2">
                                    {_item.icon}
                                    <span>{_item.label}</span>
                                  </span>
                                ),
                              }}
                            />
                          )),
                        }}
                      />
                    }
                    <div className="flex-1">
                      <input
                        id={`local-env-action-name-${item.id}`}
                        className="focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-2"
                        value={item.name}
                        aria-describedby={yarrow ? birch : undefined}
                        aria-invalid={yarrow}
                        onChange={(event) => {
                          oak(item.id, {
                            name: event.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  {yarrow ? (
                    <div
                      id={birch}
                      className="text-xs text-token-error-foreground"
                    >
                      {
                        <MemoizedFormattedMessage
                          {...{
                            id: "settings.localEnvironments.actions.item.nameRequired",
                            defaultMessage: "Enter an action name",
                            description:
                              "Inline validation for a missing local environment action name",
                          }}
                        />
                      }
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs font-medium tracking-wide text-token-text-secondary uppercase"
                    htmlFor={`local-env-action-command-${item.id}`}
                  >
                    {
                      <MemoizedFormattedMessage
                        {...{
                          ...localEnvironmentEditorU.actionScript,
                        }}
                      />
                    }
                  </label>
                  <textarea
                    id={`local-env-action-command-${item.id}`}
                    className="focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2"
                    value={item.command}
                    placeholder={falcon("action")}
                    rows={4}
                    aria-describedby={azure ? canyon : undefined}
                    aria-invalid={azure}
                    onChange={(event) => {
                      oak(item.id, {
                        command: event.target.value,
                      });
                    }}
                  />
                  {azure ? (
                    <div
                      id={canyon}
                      className="text-xs text-token-error-foreground"
                    >
                      {
                        <MemoizedFormattedMessage
                          {...{
                            id: "settings.localEnvironments.actions.item.commandRequired",
                            defaultMessage: "Enter an action command",
                            description:
                              "Inline validation for a missing local environment action command",
                          }}
                        />
                      }
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 flex-col gap-2">
                    <div className="text-xs font-medium tracking-wide text-token-text-secondary uppercase">
                      {
                        <MemoizedFormattedMessage
                          {...{
                            ...localEnvironmentEditorU.actionPlatforms,
                          }}
                        />
                      }
                    </div>
                    {
                      <LocalEnvironmentEditorA
                        {...{
                          leadingOption: "all",
                          selectedId: item.platform ?? "all",
                          onSelect: (dew) => {
                            oak(item.id, {
                              platform: dew === "all" ? null : dew,
                            });
                          },
                          ariaLabel: cliff.formatMessage({
                            id: "settings.localEnvironments.actions.item.platforms.selector",
                            defaultMessage: "Action platform",
                            description:
                              "Aria label for the local environment action platform selector",
                          }),
                        }}
                      />
                    }
                  </div>
                  <div className="flex justify-end sm:justify-center">
                    {
                      <OptionalTooltip
                        {...{
                          tooltipContent: (
                            <MemoizedFormattedMessage
                              {...{
                                id: "settings.localEnvironments.actions.item.tooltip.delete",
                                defaultMessage: "Delete",
                                description:
                                  "Tooltip for removing a local environment action",
                              }}
                            />
                          ),
                          children: (
                            <ReadLoginRouteQuerySnapshot
                              {...{
                                color: "ghost",
                                size: "toolbar",
                                type: "button",
                                "aria-label": cliff.formatMessage({
                                  id: "settings.localEnvironments.actions.item.button.delete",
                                  defaultMessage: "Delete",
                                  description:
                                    "Label for removing a local environment action",
                                }),
                                onClick: () => {
                                  onChange(
                                    actions.filter(
                                      (_item) => _item.id !== item.id,
                                    ),
                                  );
                                },
                                children: (
                                  <AppIconBO
                                    {...{
                                      className: "icon-sm",
                                    }}
                                  />
                                ),
                              }}
                            />
                          ),
                        }}
                      />
                    }
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
  }
  let juniper = (
    <UseChromeAndCodeThemeSync.Content
      {...{
        className: fern,
        children: [grove, hill],
      }}
    />
  );
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [isle, juniper],
      }}
    />
  );
}
var timber,
  umbra,
  violet = esmInit(() => {
    timber = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Hlt_Init();
    AppInitialVO();
    localEnvironmentEditorUnderscore();
    localEnvironmentEditorH();
    localEnvironmentEditorP();
    localEnvironmentEditorL();
    localEnvironmentEditorO();
    codexCommandTheme();
    AppInitialFC();
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
