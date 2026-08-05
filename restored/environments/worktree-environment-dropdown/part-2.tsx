// Restored from ref/webview/assets/worktree-environment-dropdown-NXDrzJV-.js
// Wave FY — full polished body from `worktree-environment-dropdown-NXDrzJV-/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 19 (verified 55/73).
// AST split 2/2
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Wdt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { ComposerCategoryValueChip } from "../../composer/composer-category-value-chip";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { CHATGPT_COM_CODEX_PURCHASE_TEAM_URL } from "../../docs/codex-doc-urls";
import { ensureDiffCommentComposerInit } from "../../editors/ensure-diff-comment-composer-init";
import { remoteUpstreamUrl } from "../../git/remote-upstream-url";
import { ProjectPinnedActionsMenu } from "../../home/project-pinned-actions-menu";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import { useEventCallback } from "../../hooks/use-event-callback";
import {
  ensureUseGitRecentBranchesInit,
  useGitRecentBranches,
} from "../../hooks/use-git-recent-branches";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import {
  ensureStarOutlineIconInit as EnsureStarOutlineIconInit,
  StarOutlineIcon,
} from "../../icons/star-outline-icon";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureLocalEnvironmentWorkflowMessagesInit,
  localEnvironmentWorkflowMessages,
} from "../../settings/local-environment-workflow-messages";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { semanticAccentColors } from "../../ui/semantic-accent-colors";
import { UtilityBarCategoryValue } from "../../ui/utility-bar-category-value";
import { coerceLocalFilesystemPath as CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { toPosixPath } from "../../utils/workspace-paths";
import {
  environmentLabelsC,
  environmentLabelsI,
  environmentLabelsL,
  environmentLabelsN,
  environmentLabelsR as EnvironmentLabelsR,
  environmentLabelsS,
  environmentLabelsT,
  environmentLabelsU,
} from "../environment-labels";
import { firstRepoMapEntry } from "../first-repo-map-entry";

/** app-initial companion (stub only; never promote) */
const AppInitialBA: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialQtt: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialRS: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVA: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const indigo: any = undefined;
/** split companion stub */
const jade: any = undefined;

const DeferredConversationWH3: any = undefined;

export function worktreeEnvironmentDropdownR(field: unknown) {
  return (
    <EnvironmentLabelsR
      {...{
        ...field,
        renderStaticBranch: jade,
        renderControl: indigo,
      }}
    />
  );
}
export const worktreeEnvironmentDropdownI = esmInit(() => {
  kite = reactCompilerRuntime();
  ensureComposerEsm_Hlt_Init();
  usePluginsFeatureEnabled();
  environmentLabelsI();
  AppInitialRS();
});
export function worktreeEnvironmentDropdownT(grain: unknown) {
  let {
      className,
      labelClassName,
      environments,
      isLoading,
      hasError,
      side = "top",
      align = "start",
      showIcon = true,
      selectedConfigPath,
      repairConfigPath,
      onSelectConfigPath: haven,
      onOpenSettings,
      showDefaultOption = true,
    } = grain,
    [ink, jadeite] = pearl.useState(false),
    kernel,
    leaf,
    maple,
    nimbus,
    opal,
    plume,
    quillow,
    root,
    silk,
    thorn,
    upland,
    vista;
  {
    let crag = environments.filter(marble),
      dome = AppInitialVA(crag),
      eddy = selectedConfigPath ? toPosixPath(selectedConfigPath) : null;
    let fjord = eddy,
      glen = repairConfigPath ? toPosixPath(repairConfigPath) : fjord;
    let hearth = glen,
      inlet =
        environments.find((item) => toPosixPath(item.configPath) === hearth) ??
        null,
      jetty = !isLoading && !hasError,
      knob =
        dome && showDefaultOption
          ? crag.filter(
              (item) =>
                toPosixPath(item.configPath) !== toPosixPath(dome.configPath),
            )
          : crag,
      ledge = nickel({
        isLoading,
        environmentResult: inlet,
      });
    kernel = DropdownMenuPopover;
    maple = ink;
    nimbus = jadeite;
    opal = side;
    plume = align;
    let mire = (
      <MemoizedFormattedMessage
        {...{
          id: "composer.worktreeEnvironment.tooltip",
          defaultMessage: "Select a local environment",
          description: "Tooltip for local environment selector",
        }}
      />
    );
    let nook = IntlProvider("whitespace-nowrap", className);
    let oxbow = labelClassName == null ? "secondary" : "sm",
      pond = showIcon ? (
        <DeferredConversationWH3
          {...{
            className: "icon-xs",
          }}
        />
      ) : null;
    let quarry = isLoading ? "pending" : "collapsible-chevron",
      rapids;
    rapids = IntlProvider("max-w-40", labelClassName);
    quillow = (
      <OptionalTooltip
        {...{
          tooltipContent: mire,
          children: (
            <ComposerCategoryValueChip
              data-composer-navigation-target="environment"
              categoryLabel={null}
              className={nook}
              collapse={oxbow}
              icon={pond}
              indicator={quarry}
              value={ledge}
              valueClassName={rapids}
            />
          ),
        }}
      />
    );
    vista = "flex w-64 flex-col overflow-hidden";
    leaf = (
      <DropdownMenu.Title
        {...{
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "composer.worktreeEnvironment.title",
                defaultMessage: "Environment",
                description: "Title for worktree environment dropdown",
              }}
            />
          ),
        }}
      />
    );
    root =
      "vertical-scroll-fade-mask flex max-h-[220px] flex-col overflow-y-auto";
    silk = jetty ? (
      <DropdownMenu.Item
        {...{
          RightIcon:
            selectedConfigPath == null && repairConfigPath == null
              ? AppIconZlt
              : undefined,
          onClick: () => {
            haven(null);
            jadeite(false);
          },
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "composer.worktreeEnvironment.noEnvironmentOption",
                defaultMessage: "Work without environment",
                description:
                  "Option in the worktree environment dropdown that runs without selecting a local environment",
              }}
            />
          ),
        }}
      />
    ) : null;
    thorn =
      showDefaultOption && dome ? (
        <DropdownMenu.Item
          {...{
            RightIcon:
              fjord != null && toPosixPath(dome.configPath) === fjord
                ? AppIconZlt
                : undefined,
            onClick: () => {
              haven(dome.configPath);
              jadeite(false);
            },
            children: (
              <div className="flex min-w-0 items-center gap-2">
                {
                  <OptionalTooltip
                    {...{
                      tooltipContent: (
                        <MemoizedFormattedMessage
                          {...{
                            id: "composer.worktreeEnvironment.default",
                            defaultMessage: "Default environment",
                            description:
                              "Tooltip for default local environment icon",
                          }}
                        />
                      ),
                      children: (
                        <EnsureStarOutlineIconInit
                          {...{
                            className:
                              "icon-xxs shrink-0 text-token-description-foreground",
                          }}
                        />
                      ),
                    }}
                  />
                }
                <span className="truncate">{environmentLabelsT(dome)}</span>
              </div>
            ),
          }}
        />
      ) : null;
    upland = isLoading ? (
      <div className="flex items-center justify-center py-4">
        {
          <VSCODE_EDITOR_ID
            {...{
              className: "icon-xxs",
            }}
          />
        }
      </div>
    ) : hasError ? (
      <DropdownMenu.Message
        {...{
          compact: true,
          tone: "error",
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "composer.worktreeEnvironment.error",
                defaultMessage: "Error loading environments",
                description: "Error state for worktree environment dropdown",
              }}
            />
          ),
        }}
      />
    ) : knob.length > 0 ? (
      <div className="flex flex-col">
        {knob.map((item) => {
          let spur =
            selectedConfigPath != null &&
            toPosixPath(item.configPath) === fjord;
          return (
            <DropdownMenu.Item
              key={item.configPath}
              {...{
                RightIcon: spur ? AppIconZlt : undefined,
                onClick: () => {
                  haven(item.configPath);
                  jadeite(false);
                },
                children: (
                  <span className="min-w-0 truncate">
                    {environmentLabelsT(item)}
                  </span>
                ),
              }}
            />
          );
        })}
      </div>
    ) : environments.length > 0 && crag.length === 0 ? (
      <DropdownMenu.Message
        {...{
          compact: true,
          tone: "error",
          children: (
            <MemoizedFormattedMessage
              {...{
                ...localEnvironmentWorkflowMessages.needsAttention,
              }}
            />
          ),
        }}
      />
    ) : environments.length === 0 ? (
      <DropdownMenu.Message
        {...{
          compact: true,
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "codex.environments.noEnvironmentsFound",
                defaultMessage: "No environments found",
                description:
                  "Message shown when no Codex environments were found",
              }}
            />
          ),
        }}
      />
    ) : null;
  }
  let wisp = () => {
    onOpenSettings(repairConfigPath ?? undefined);
    jadeite(false);
  };
  let yonder = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.worktreeEnvironment.settings",
        defaultMessage: "Environment settings",
        description:
          "CTA to open local environment settings from the worktree dropdown",
      }}
    />
  );
  let zenith = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconKtt,
        onClick: wisp,
        children: yonder,
      }}
    />
  );
  let anvil = (
    <div className={root}>
      {silk}
      {thorn}
      {upland}
      {zenith}
    </div>
  );
  let beacon = (
    <div className={vista}>
      {leaf}
      {anvil}
    </div>
  );
  return (
    <DropdownMenuPopover
      {...{
        open: maple,
        onOpenChange: nimbus,
        side: opal,
        align: plume,
        triggerButton: quillow,
        children: beacon,
      }}
    />
  );
}
function marble(jasper) {
  return jasper.type === "success";
}
function nickel({ isLoading, environmentResult }) {
  return isLoading ? (
    <MemoizedFormattedMessage
      {...{
        id: "composer.worktreeEnvironment.loading",
        defaultMessage: "Loading environments…",
        description: "Loading label for worktree environment dropdown",
      }}
    />
  ) : environmentResult?.type === "error" ? (
    <MemoizedFormattedMessage
      {...{
        ...localEnvironmentWorkflowMessages.needsAttention,
      }}
    />
  ) : environmentResult?.type === "success" ? (
    <>{environmentResult.environment.name}</>
  ) : (
    <MemoizedFormattedMessage
      {...{
        id: "codex.environmentSelector.noEnvironment",
        defaultMessage: "No environment",
        description: "No environment selected message",
      }}
    />
  );
}
var onyx, pearl, $;
export const worktreeEnvironmentDropdownN = esmInit(() => {
  onyx = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  pearl = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureDropdownMenuInit();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Hlt_Init();
  ensureDropdownMenuPopoverInit();
  AppInitialQtt();
  ensureHooksFocusIconInit();
  StarOutlineIcon();
  environmentLabelsN();
  ensureLocalEnvironmentWorkflowMessagesInit();
  AppInitialBA();
  ensureComposerEsm_Wdt_Init();
  AppInitialRS();
});
