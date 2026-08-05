// Restored from ref/webview/assets/composer-utility-bar-B1JM6js2.js
// Wave FY — full polished body from `composer-utility-bar-B1JM6js2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 101/139).
// AST split 3/6 — cloud follow-up run-location dropdown (ComposerUtilityBarHelper1) and its lazy init.
/* split-lane-import-depth:1 */

import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconFB } from "../../icons/app-icon-fb";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { copilotDefaultModel } from "../../models/copilot-default-model";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { useVoiceSettingsHostConfig } from "../../settings/use-voice-settings-host-config";
import { cloud4 } from "../../ui/cloud4";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { identity } from "../../utils/identity";
import { ComposerCategoryValueChip } from "../composer-category-value-chip";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
} from "../composer-esm-inits";
import { getPluginShortDescription } from "../get-plugin-short-description";
import {
  AppInitialD,
  AppInitialF,
  AppInitialF3,
  AppInitialIB,
  AppInitialP3,
  AppInitialRS,
  composerScope,
  deferredUiPJ,
  useLocalEnvironmentEditorState,
} from "./companion-stubs";

var alpha, bravo, copper, delta;
export const echo = esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  bravo = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureDropdownMenuInit();
  ensureComposerEsm_Hlt_Init();
  AppInitialP3();
  copilotDefaultModel();
  ensureDropdownMenuPopoverInit();
  AppInitialF();
  AppInitialIB();
  useLocalEnvironmentEditorState();
  composerScope();
  AppInitialRS();
  cloud4();
  getPluginShortDescription();
  delta = identity({
    local: {
      id: "composer.cloudFollowUp.local",
      defaultMessage: "Local",
      description: "Local follow-up option",
    },
    cloud: {
      id: "composer.cloudFollowUp.cloud",
      defaultMessage: "Cloud",
      description: "Cloud follow-up option",
    },
    tooltip: {
      id: "composer.cloudFollowUp.whereRun",
      defaultMessage: "Where should this follow-up run?",
      description: "Tooltip for choosing between local and cloud follow-ups",
    },
  });
});

export function ComposerUtilityBarHelper1(river: any) {
  let { composerMode, setComposerMode } = river,
    slate = CodexPluginActionType(HostCwdPathLabel),
    timber = CodexPluginActionResult(deferredUiPJ),
    [umbra, violet] = bravo.useState(false),
    willow = useVoiceSettingsHostConfig(),
    xenon = CodexPluginActionResult(getHostConfigId),
    yellow =
      willow.cwd == null
        ? null
        : {
            cwd: willow.cwd,
            hostConfig: willow.hostConfig,
          };
  let zinc = {
    retainRepoWatch: xenon,
  };
  let { data, isLoading } = AppInitialF3(
      yellow,
      "cloud_follow_up_local_remote_dropdown",
      zinc,
    ),
    amber = data?.root != null,
    basalt = timber?.type === "cloud" && timber.hasAppliedCodeLocally,
    cedar,
    daisy;
  cedar = () => {
    basalt && cloud4(slate, "local");
  };
  daisy = [basalt, slate];
  bravo.useEffect(cedar, daisy);
  let ember, flint;
  ember = () => {
    isLoading || amber || cloud4(slate, "local");
  };
  flint = [amber, isLoading, slate];
  bravo.useEffect(ember, flint);
  let garnet =
    composerMode === "local" ? (
      <MemoizedFormattedMessage
        {...{
          ...delta.local,
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          ...delta.cloud,
        }}
      />
    );
  let hazel = garnet,
    ivory = (
      <MemoizedFormattedMessage
        {...{
          ...delta.tooltip,
        }}
      />
    );
  let jasper =
    composerMode === "cloud" ? (
      <AppInitialD className="icon-xs" />
    ) : (
      <AppIconFB
        {...{
          className: "icon-xs",
        }}
      />
    );
  let kelp = (
    <OptionalTooltip
      {...{
        tooltipContent: ivory,
        children: (
          <ComposerCategoryValueChip
            data-composer-navigation-target="run-location"
            categoryLabel={null}
            collapse="xs"
            icon={jasper}
            indicator="chevron"
            value={hazel}
            valueClassName="max-w-40"
          />
        ),
      }}
    />
  );
  let lotus = (
    <DropdownMenu.Title
      {...{
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "composer.mode.newTask.header",
              defaultMessage: "Continue in",
              description: "Header label above agent mode options",
            }}
          />
        ),
      }}
    />
  );
  let mint = composerMode === "local" ? AppIconZlt : undefined,
    nova = () => {
      setComposerMode("local");
      violet(false);
    };
  let olive = (
    <MemoizedFormattedMessage
      {...{
        ...delta.local,
      }}
    />
  );
  let prism = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconFB,
        RightIcon: mint,
        onClick: nova,
        children: olive,
      }}
    />
  );
  let quill = amber ? (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppInitialD,
        RightIcon: composerMode === "cloud" ? AppIconZlt : undefined,
        onClick: () => {
          setComposerMode("cloud");
          violet(false);
        },
        children: (
          <MemoizedFormattedMessage
            {...{
              ...delta.cloud,
            }}
          />
        ),
      }}
    />
  ) : null;
  let reef = (
    <div className="flex w-44 flex-col">
      {lotus}
      {prism}
      {quill}
    </div>
  );
  return (
    <DropdownMenuPopover
      {...{
        open: umbra,
        onOpenChange: violet,
        triggerButton: kelp,
        children: reef,
      }}
    />
  );
}
