// Restored from ref/webview/assets/hotkey-window-home-page-SLdyPBTP.js
// Wave FY — full polished body from `hotkey-window-home-page-SLdyPBTP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 88/122).
// Wave FZ-support — PascalCase invalid JSX tags: coerceLocalFilesystemPath→CoerceLocalFilesystemPath, copyContinuousScale→CopyContinuousScale, ensureWorktreeEnvironmentDropdownInit→EnsureWorktreeEnvironmentDropdownInit, renamedId→HotkeyWindowHomePageHelper1, renamedId→HotkeyWindowHomePageHelper4, renamedId→HotkeyWindowHomePageHelper7, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, toggleSortedIdList→ToggleSortedIdList, usePointerSurfaceInteractionGate→UsePointerSurfaceInteractionGate, worktreeEnvironmentDropdownR→WorktreeEnvironmentDropdownR.
// AST split 1/4
/* split-lane-import-depth:1 */

import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureComposerEsm_Hlt_Init } from "../../composer/composer-esm-inits";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconFB } from "../../icons/app-icon-fb";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";

/** Wave FY unresolved companion (jsx-collision:gpuTearingDebugSettingsAtom@settings/gpu-tearing-debug-settings.ts) */
const AppInitialD: any = undefined;
/** Wave FY unresolved companion (jsx-collision:tokenInvalidated@hosts/token-invalidated.ts) */
const AppInitialF: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_IB_Init@composer/composer-esm-inits.ts) */
const AppInitialIB: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
export function HotkeyWindowHomePageHelper1(xenon: any) {
  let {
      canUseCloud,
      composerMode,
      setComposerMode,
      showLabel = false,
      disabledTooltipText,
      showWorktree,
    } = xenon,
    yellow = useIntl(),
    zinc =
      composerMode === "cloud" ? (
        <AppInitialD className="icon-2xs" />
      ) : composerMode === "worktree" && showWorktree ? (
        <ProjectDropdownGlyphIcon
          {...{
            className: "icon-2xs",
          }}
        />
      ) : (
        <AppIconFB
          {...{
            className: "icon-2xs",
          }}
        />
      );
  let amber = showLabel ? (
    <span className="max-w-40 truncate text-left whitespace-nowrap">
      {composerMode === "cloud" ? (
        <MemoizedFormattedMessage
          {...{
            id: "composer.footer.v2.cloudTab",
            defaultMessage: "Cloud",
            description: "Cloud mode label",
          }}
        />
      ) : composerMode === "worktree" && showWorktree ? (
        <MemoizedFormattedMessage
          {...{
            id: "composer.mode.worktreeSegment",
            defaultMessage: "Worktree",
            description: "Worktree mode label for the segmented toggle",
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "composer.hotkeyWindow.modeDropdown.localProject",
            defaultMessage: "Local project",
            description:
              "Hotkey window overflow menu label for local project mode",
          }}
        />
      )}
    </span>
  ) : null;
  let basalt = (
    <AppIconSft
      {...{
        className: "icon-2xs text-token-input-placeholder-foreground",
      }}
    />
  );
  let cedar = (
    <>
      {zinc}
      {amber}
      {basalt}
    </>
  );
  let daisy = cedar;
  if (disabledTooltipText) {
    let wheat = (
      <span>
        {
          <ReadLoginRouteQuerySnapshot
            {...{
              size: "composerSm",
              color: "ghost",
              className: "gap-1 px-1.5",
              disabled: true,
              children: daisy,
            }}
          />
        }
      </span>
    );
    let yarn;
    return (
      <OptionalTooltip
        {...{
          tooltipContent: disabledTooltipText,
          children: wheat,
        }}
      />
    );
  }
  let ember = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.hotkeyWindow.modeDropdown.tooltip",
        defaultMessage: "Select where to run the chat",
        description: "Tooltip for the hotkey-window mode selector",
      }}
    />
  );
  let flint = (
    <OptionalTooltip
      {...{
        tooltipContent: ember,
        children: (
          <ReadLoginRouteQuerySnapshot
            {...{
              size: "composerSm",
              color: "ghost",
              className: "gap-1 px-1.5",
              children: daisy,
            }}
          />
        ),
      }}
    />
  );
  let garnet = composerMode === "local" ? AppIconZlt : undefined,
    hazel = () => {
      setComposerMode("local");
    };
  let ivory = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.mode.local",
        defaultMessage: "Work locally",
        description: "Local mode label",
      }}
    />
  );
  let jasper = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconFB,
        RightIcon: garnet,
        onSelect: hazel,
        children: ivory,
      }}
    />
  );
  let kelp = composerMode === "cloud" ? AppIconZlt : undefined,
    lotus = !canUseCloud,
    mint = () => {
      setComposerMode("cloud");
    };
  let nova = canUseCloud
    ? undefined
    : yellow.formatMessage({
        id: "composer.hotkeyWindow.modeDropdown.cloudUnavailable",
        defaultMessage: "Cloud is unavailable",
        description: "Tooltip for disabled hotkey-window Cloud mode",
      });
  let olive = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.footer.v2.cloudTab",
        defaultMessage: "Cloud",
        description: "Cloud mode label",
      }}
    />
  );
  let prism = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppInitialD,
        RightIcon: kelp,
        disabled: lotus,
        onSelect: mint,
        tooltipText: nova,
        children: olive,
      }}
    />
  );
  let quill = composerMode === "worktree" ? AppIconZlt : undefined,
    reef = () => {
      setComposerMode("worktree");
    };
  let sage = !showWorktree,
    topaz = showWorktree
      ? undefined
      : yellow.formatMessage({
          id: "composer.hotkeyWindow.modeDropdown.localOnly",
          defaultMessage: "Initialize a git repo to run tasks in worktrees",
          description:
            "Tooltip for disabled hotkey-window worktree mode selector",
        });
  let ultra = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.mode.worktreeSegment",
        defaultMessage: "Worktree",
        description: "Worktree mode label for the segmented toggle",
      }}
    />
  );
  let vapor = (
    <DropdownMenu.Item
      {...{
        LeftIcon: ProjectDropdownGlyphIcon,
        RightIcon: quill,
        onSelect: reef,
        disabled: sage,
        tooltipText: topaz,
        children: ultra,
      }}
    />
  );
  return (
    <DropdownMenuPopover
      {...{
        triggerButton: flint,
        contentWidth: "menuNarrow",
        children: [jasper, prism, vapor],
      }}
    />
  );
}
var alpha, bravo;
export var copper = esmInit(() => {
  alpha = reactCompilerRuntime();
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  ensureComposerEsm_Hlt_Init();
  ensureDropdownMenuPopoverInit();
  ensureAppIconSftInit();
  AppInitialF();
  AppInitialIB();
  ensureSettingsGlyphRBInit();
});
