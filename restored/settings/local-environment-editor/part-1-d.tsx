// Restored from ref/webview/assets/local-environment-editor-9PiWGb5h.js
// Wave FZ — full polished body from `local-environment-editor-9PiWGb5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 61/80).
// Careful split 1/3
/* split-lane-import-depth:1 */

import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureComposerEsm_Hlt_Init } from "../../composer/composer-esm-inits";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { esmInit } from "../../runtime/rolldown-runtime";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { identity } from "../../utils/identity";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  AppInitialFC,
  AppInitialVO,
  ReadLoginRouteQuerySnapshot,
} from "./part-1";
import {
  falcon,
  localEnvironmentEditorD,
  localEnvironmentEditorP,
} from "./part-1-a";
import {
  LocalEnvironmentEditorA,
  LocalEnvironmentEditorG,
  localEnvironmentEditorH,
  localEnvironmentEditorM,
  localEnvironmentEditorO,
  localEnvironmentEditorUnderscore,
} from "./part-1-c";

var localEnvironmentEditorU,
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

export { localEnvironmentEditorL, localEnvironmentEditorU };
