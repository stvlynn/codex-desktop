// Restored from ref/webview/assets/select-workspace-page-BZ7MILnm.js
// Wave FY — full polished body from `select-workspace-page-BZ7MILnm/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 65/89).
// Wave FZ-support — PascalCase invalid JSX tags: at→At, deferredT→DeferredT, deferredUiYn→DeferredUiYn, ensureSettingsGlyphBnInit→EnsureSettingsGlyphBnInit, isUpdatePhaseInProgress→IsUpdatePhaseInProgress, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, SelectWorkspacePageHelper1→SelectWorkspacePageHelper1, SelectWorkspacePageHelper10→SelectWorkspacePageHelper10, SelectWorkspacePageHelper11→SelectWorkspacePageHelper11, SelectWorkspacePageHelper12→SelectWorkspacePageHelper12, SelectWorkspacePageHelper13→SelectWorkspacePageHelper13, SelectWorkspacePageHelper14→SelectWorkspacePageHelper14.
// Split 2/2 — presentational helper components (menu, header, list, skip button).
/* split-lane-import-depth:1 */

import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { ensureComposerEsm_Wlt_Init } from "../../composer/composer-esm-inits";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { deferredConversationR } from "../../conversation/deferred-conversation-r";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconVn } from "../../icons/app-icon-vn";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { useChronicleSettingsSection } from "../../settings/use-chronicle-settings-section";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { DeferredT } from "../../ui/deferred-t";
import { DeferredUiYn } from "../../ui/deferred-ui-yn";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { EnsureSettingsGlyphBnInit } from "../../utils/wave-as-gap-ensure-inits";
import { stripWinLongPathPrefix } from "../../utils/workspace-paths";
const At = at;
/** Wave FY unresolved companion (jsx-collision:deferredConversationN@conversation/deferred-conversation-n.ts) */
const AppInitialN: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSelectWorkspaceOhInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialOh: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-qdt.ts) */
const deferredUiQdt: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
function SelectWorkspacePageHelper1(timber) {
  let {
      children,
      onOpenChange,
      onStartFromScratch,
      onUseExistingFolder,
      open,
      triggerButton,
    } = timber,
    umbra = bravo.useRef(false),
    violet = (event) => {
      umbra.current &&
        ((umbra.current = false), event.preventDefault(), onStartFromScratch());
    };
  let willow = (
    <DropdownMenu.Item
      {...{
        LeftIcon: ensureComposerEsm_Wlt_Init,
        onSelect: () => {
          umbra.current = true;
        },
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "projectSetup.addProjectMenu.startFromScratch",
              defaultMessage: "Start from scratch",
              description: "Menu item that creates a new local project folder",
            }}
          />
        ),
      }}
    />
  );
  let xenon = (
    <MemoizedFormattedMessage
      {...{
        id: "projectSetup.addProjectMenu.useExistingFolder",
        defaultMessage: "Use an existing folder",
        description: "Menu item that opens the existing folder picker",
      }}
    />
  );
  let yellow = (
    <DropdownMenu.Item
      {...{
        LeftIcon: useChronicleSettingsSection,
        onSelect: onUseExistingFolder,
        children: xenon,
      }}
    />
  );
  return (
    <DropdownMenuPopover
      {...{
        triggerButton,
        contentWidth: "menu",
        onOpenChange,
        onCloseAutoFocus: violet,
        open,
        children: [willow, yellow, children],
      }}
    />
  );
}
var alpha,
  bravo,
  copper,
  delta = esmInit(() => {
    alpha = reactCompilerRuntime();
    bravo = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    deferredConversationR();
    ensureSkillsPageHelpersInit();
  });
function SelectWorkspacePageHelper10(wisp) {
  let { children, showIcon } = wisp,
    yonder = showIcon ? (
      <DeferredT
        {...{
          className: "h-10 w-10",
          "aria-hidden": "true",
        }}
      />
    ) : null;
  let zenith, anvil;
  zenith = (
    <MemoizedFormattedMessage
      {...{
        id: "electron.onboarding.workspace.title",
        defaultMessage: "Select a project",
        description: "Title on the desktop onboarding workspace selection page",
      }}
    />
  );
  anvil = (
    <MemoizedFormattedMessage
      {...{
        id: "electron.onboarding.workspace.subtitle",
        defaultMessage:
          "ChatGPT will be able to edit files and run commands in selected folders",
        description:
          "Subtitle on the desktop onboarding workspace selection page",
      }}
    />
  );
  return (
    <EnsureSettingsGlyphBnInit
      {...{
        className: "max-w-[330px]",
        icon: yonder,
        textClassName: "gap-6",
        title: zenith,
        subtitle: anvil,
        children,
      }}
    />
  );
}
function SelectWorkspacePageHelper11(beacon) {
  let {
      workspaceOnboardingExperimentArm,
      isRemoteHost,
      handleOpenFolder,
      handleSkip,
      isSkipPending,
      skipErrorMessage,
    } = beacon,
    crag = AppInitialOh(workspaceOnboardingExperimentArm)
      ? "outline"
      : "primary",
    dome = (
      <SelectWorkspacePageHelper12
        {...{
          className: "w-full justify-center py-2.5",
          color: crag,
          isRemoteHost,
          onStartFromScratch: handleSkip,
          onUseExistingFolder: handleOpenFolder,
        }}
      />
    );
  let eddy = isRemoteHost ? null : (
    <At
      {...{
        handleSkip,
        isSkipPending,
        skipErrorMessage,
        workspaceOnboardingExperimentArm,
      }}
    />
  );
  return (
    <SelectWorkspacePageHelper10
      {...{
        showIcon: true,
        children: (
          <div className="flex w-full flex-col gap-3">
            {dome}
            {eddy}
          </div>
        ),
      }}
    />
  );
}
function SelectWorkspacePageHelper12(fjord) {
  let {
      className,
      color,
      isRemoteHost,
      onStartFromScratch,
      onUseExistingFolder,
      size,
    } = fjord,
    glen = isRemoteHost ? onUseExistingFolder : undefined,
    hearth = (
      <MemoizedFormattedMessage
        {...{
          id: "electron.onboarding.workspace.openFolder",
          defaultMessage: "Add project",
          description:
            "Button label to add a workspace during desktop onboarding",
        }}
      />
    );
  let inlet = (
    <ReadLoginRouteQuerySnapshot
      {...{
        className,
        color,
        size,
        onClick: glen,
        children: hearth,
      }}
    />
  );
  let jetty = inlet;
  if (isRemoteHost) return jetty;
  return (
    <SelectWorkspacePageHelper1
      {...{
        triggerButton: jetty,
        onStartFromScratch,
        onUseExistingFolder,
      }}
    />
  );
}
function SelectWorkspacePageHelper13(knob) {
  let {
      isLoadingRoots,
      hasAvailableRoots,
      availableOptions,
      selectedRoots,
      selectAllState,
      handleToggleSelectAll,
      handleToggleWorkspace,
      intl,
      handleOpenFolder,
      handleContinue,
      hasSelectedRoots,
      isRemoteHost,
      handleSkip,
      isSkipPending,
      skipErrorMessage: ledge,
      workspaceOnboardingExperimentArm,
    } = knob,
    mire = new Set(selectedRoots);
  let nook = mire,
    oxbow = isLoadingRoots ? (
      <div className="bg-token-surface-primary flex w-full items-center justify-center gap-2 rounded-2xl border border-token-border px-5 py-6">
        {
          <VSCODE_EDITOR_ID
            {...{
              className: "h-4 w-4 text-token-foreground",
            }}
          />
        }
        <span className="text-sm text-token-description-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "electron.onboarding.workspace.loading",
                defaultMessage: "Loading projects…",
                description:
                  "Loading state while onboarding workspace options are fetched",
              }}
            />
          }
        </span>
      </div>
    ) : null;
  let pond = hasAvailableRoots ? (
    <AppIconVn
      {...{
        className: IntlProvider(
          isLoadingRoots && "pointer-events-none opacity-50",
        ),
        ariaLabel: intl.formatMessage({
          id: "electron.onboarding.workspace.listLabel",
          defaultMessage: "Available projects",
          description:
            "Aria label for the available workspaces list during onboarding",
        }),
        children: [
          <DeferredUiYn
            {...{
              checkboxId: "workspace-root-select-all",
              checkboxClassName: AppInitialN,
              checked: selectAllState,
              disabled: isLoadingRoots,
              onCheckedChange: (anchor) => {
                handleToggleSelectAll(anchor);
              },
              label: (
                <MemoizedFormattedMessage
                  {...{
                    id: "electron.onboarding.workspace.selectAll",
                    defaultMessage: "Select all",
                    description:
                      "Checkbox label for selecting all workspaces during onboarding",
                  }}
                />
              ),
            }}
          />,
          availableOptions.map((item, index) => (
            <SelectWorkspacePageHelper14
              key={item.root}
              {...{
                index,
                isDisabled: isLoadingRoots,
                isSelected: nook.has(item.root),
                skipExistenceCheck: isRemoteHost,
                option: item,
                onToggle: handleToggleWorkspace,
              }}
            />
          )),
        ],
      }}
    />
  ) : (
    <div className="text-center text-sm text-token-description-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "electron.onboarding.workspace.empty",
            defaultMessage: "Add a project to continue.",
            description:
              "Empty state shown when no workspaces are selected during onboarding",
          }}
        />
      }
    </div>
  );
  let quarry = (
    <div className="flex w-full flex-col gap-2">
      {oxbow}
      {pond}
    </div>
  );
  let rapids = (
    <SelectWorkspacePageHelper12
      {...{
        className:
          "flex-1 justify-center border-token-button-border bg-transparent text-base leading-6 font-medium whitespace-nowrap enabled:hover:bg-token-foreground/5",
        color: "outline",
        size: "large",
        isRemoteHost,
        onStartFromScratch: handleSkip,
        onUseExistingFolder: handleOpenFolder,
      }}
    />
  );
  let spur = !hasSelectedRoots || isLoadingRoots,
    tor = (
      <MemoizedFormattedMessage
        {...{
          id: "electron.onboarding.workspace.continue",
          defaultMessage: "Continue",
          description:
            "Button label to continue after selecting workspaces during onboarding",
        }}
      />
    );
  let updraft = (
    <ReadLoginRouteQuerySnapshot
      {...{
        className: "flex-1 justify-center text-base leading-6 font-medium",
        color: "primary",
        size: "large",
        disabled: spur,
        onClick: handleContinue,
        children: tor,
      }}
    />
  );
  let verge = (
    <div className="flex w-full items-center gap-4">
      {rapids}
      {updraft}
    </div>
  );
  let weir = isRemoteHost ? null : (
    <At
      {...{
        handleSkip,
        isSkipPending,
        skipErrorMessage: ledge,
        workspaceOnboardingExperimentArm,
      }}
    />
  );
  let yard = (
    <div className="flex w-full flex-col gap-3">
      {verge}
      {weir}
    </div>
  );
  return (
    <SelectWorkspacePageHelper10
      {...{
        showIcon: false,
        children: (
          <div className="flex w-full flex-col gap-4">
            {quarry}
            {yard}
          </div>
        ),
      }}
    />
  );
}
function at(bolt) {
  let {
      handleSkip,
      isSkipPending,
      skipErrorMessage,
      workspaceOnboardingExperimentArm,
    } = bolt,
    cog = AppInitialOh(workspaceOnboardingExperimentArm);
  let disc = cog,
    edge =
      skipErrorMessage == null ? null : (
        <div className="text-center text-sm text-token-error-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "electron.onboarding.workspace.skip.error",
                defaultMessage: "Couldn't create a new project: {message}",
                description:
                  "Error shown when creating a new project fails during onboarding",
                values: {
                  message: skipErrorMessage,
                },
              }}
            />
          }
        </div>
      );
  let forge = isSkipPending ? (
    disc ? (
      <MemoizedFormattedMessage
        {...{
          id: "electron.onboarding.workspace.skipping.playground",
          defaultMessage: "Opening playground…",
          description:
            "Button label shown while opening Playground during onboarding workspace flow",
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "electron.onboarding.workspace.skipping",
          defaultMessage: "Creating a new project…",
          description:
            "Button label shown while creating a new project during onboarding",
        }}
      />
    )
  ) : disc ? (
    <MemoizedFormattedMessage
      {...{
        id: "electron.onboarding.workspace.skip.playground",
        defaultMessage: "Continue to playground",
        description: "Button label to continue to Playground during onboarding",
      }}
    />
  ) : (
    <MemoizedFormattedMessage
      {...{
        id: "electron.onboarding.workspace.skip",
        defaultMessage: "Skip",
        description:
          "Button label to skip workspace selection during onboarding",
      }}
    />
  );
  let gear = (
    <ReadLoginRouteQuerySnapshot
      {...{
        className: "w-full justify-center text-base leading-6 font-medium",
        color: "ghost",
        size: "large",
        disabled: isSkipPending,
        onClick: handleSkip,
        children: forge,
      }}
    />
  );
  return (
    <div className="flex w-full flex-col items-center gap-2">
      {edge}
      {gear}
    </div>
  );
}
function SelectWorkspacePageHelper14(hinge) {
  let { index, isDisabled, isSelected, skipExistenceCheck, option, onToggle } =
      hinge,
    iron = option.root,
    joint = stripWinLongPathPrefix(iron);
  let keystone = joint,
    latch = deferredUiQdt(iron).replace(/\/+$/, ""),
    motor,
    nut;
  motor = {
    hostId: LOCAL_HOST_ID,
    paths: [iron],
  };
  nut = {
    existingPaths: [iron],
  };
  let piston = !skipExistenceCheck,
    rivet = {
      enabled: piston,
    };
  let screw = {
    params: motor,
    placeholderData: nut,
    queryConfig: rivet,
  };
  let { data: torque } = SIDEBAR_HIT_TEST_SELECTOR("paths-exist", screw);
  if (
    !(
      skipExistenceCheck ||
      (torque?.existingPaths ?? []).some(
        (item) => deferredUiQdt(item).replace(/\/+$/, "") === latch,
      )
    )
  )
    return null;
  let valve = `workspace-root-${index}`,
    axle = (bracket) => {
      onToggle(iron, bracket);
    };
  return (
    <DeferredUiYn
      {...{
        checkboxId: valve,
        checkboxClassName: AppInitialN,
        checked: isSelected,
        disabled: isDisabled,
        onCheckedChange: axle,
        label: option.label,
        description: keystone,
      }}
    />
  );
}
