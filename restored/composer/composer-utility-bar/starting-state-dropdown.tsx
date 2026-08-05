// Restored from ref/webview/assets/composer-utility-bar-B1JM6js2.js
// Wave FY — full polished body from `composer-utility-bar-B1JM6js2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 101/139).
// AST split 4/6 — follow-up starting-state dropdown (ComposerUtilityBarHelper2) and its lazy init.
/* split-lane-import-depth:1 */

import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { ensureDiffCommentComposerInit } from "../../editors/ensure-diff-comment-composer-init";
import { ProjectPinnedActionsMenu } from "../../home/project-pinned-actions-menu";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { usePluginsFeatureEnabled } from "../../skills/skills-page-helpers";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { identity } from "../../utils/identity";
import { ComposerCategoryValueChip } from "../composer-category-value-chip";
import { ensureComposerEsm_Hlt_Init } from "../composer-esm-inits";
import { AppInitialBa, AppInitialRS } from "./companion-stubs";

var gamma, harbor, indigo, jade;
export const kite = esmInit(() => {
  gamma = reactCompilerRuntime();
  harbor = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  AppInitialBa();
  ensureDropdownMenuInit();
  ensureComposerEsm_Hlt_Init();
  usePluginsFeatureEnabled();
  ensureDropdownMenuPopoverInit();
  ensureDiffCommentComposerInit();
  AppInitialRS();
  jade = identity({
    workingTree: {
      id: "composer.remote.localWorkingTree",
      defaultMessage: "Use local changes",
      description: "Label for local working tree selection in remote composer",
    },
    directFollowUp: {
      id: "composer.remote.directFollowUp",
      defaultMessage: "Don't use local changes",
      description: "Label for direct follow-up selection in remote composer",
    },
  });
});

function falcon(orbit) {
  let { className } = orbit;
  return (
    <ProjectPinnedActionsMenu borderColor="border-token-dropdown-background">
      {
        <CoerceLocalFilesystemPath
          {...{
            className,
          }}
        />
      }
    </ProjectPinnedActionsMenu>
  );
}

export function ComposerUtilityBarHelper2(sage: any) {
  let { startingState, setStartingState } = sage,
    [topaz, ultra] = harbor.useState(false),
    vapor =
      startingState === "working-tree" ? (
        <MemoizedFormattedMessage
          {...{
            ...jade.workingTree,
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            ...jade.directFollowUp,
          }}
        />
      );
  let wheat = vapor,
    yarn = (
      <div className="flex flex-col gap-2">
        {
          <MemoizedFormattedMessage
            {...{
              id: "composer.remote.startingPoint",
              defaultMessage: "What code should this chat start from?",
              description: "Section label for remote starting point selector",
            }}
          />
        }
      </div>
    );
  let zephyr = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.followUpStartingState.footerCategory",
        defaultMessage: "Starting from",
        description:
          "Category label for the follow-up starting state control in the composer footer",
      }}
    />
  );
  let acorn = startingState === "working-tree",
    bloom = (
      <CoerceLocalFilesystemPath
        {...{
          className: "icon-xs",
        }}
      />
    );
  let coral = (
    <ProjectPinnedActionsMenu
      borderColor="border-token-side-bar-background"
      badgeEnabled={acorn}
    >
      {bloom}
    </ProjectPinnedActionsMenu>
  );
  let drift = (
    <OptionalTooltip
      {...{
        tooltipContent: yarn,
        children: (
          <ComposerCategoryValueChip
            data-composer-navigation-target="starting-state"
            categoryLabel={zephyr}
            collapse="none"
            icon={coral}
            indicator="chevron"
            value={wheat}
            valueClassName="max-[440px]:hidden"
          />
        ),
      }}
    />
  );
  let eagle = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.remote.currentEditsSuffix.followUp",
        defaultMessage: "Create a new chat that references this cloud chat.",
        description:
          "Suffix text indicating the selection includes current edits",
      }}
    />
  );
  let frost = startingState === "working-tree" ? AppIconZlt : undefined,
    glide = () => {
      setStartingState("working-tree");
      ultra(false);
    };
  let honey = (
    <MemoizedFormattedMessage
      {...{
        ...jade.workingTree,
      }}
    />
  );
  let iris = (
    <OptionalTooltip
      {...{
        tooltipContent: eagle,
        children: (
          <DropdownMenu.Item
            {...{
              LeftIcon: falcon,
              RightIcon: frost,
              onClick: glide,
              children: honey,
            }}
          />
        ),
      }}
    />
  );
  let jewel = startingState === "direct-follow-up" ? AppIconZlt : undefined,
    knoll = () => {
      setStartingState("direct-follow-up");
      ultra(false);
    };
  let lunar = (
    <MemoizedFormattedMessage
      {...{
        ...jade.directFollowUp,
      }}
    />
  );
  let moss = (
    <DropdownMenu.Item
      {...{
        LeftIcon: CoerceLocalFilesystemPath,
        RightIcon: jewel,
        onClick: knoll,
        children: lunar,
      }}
    />
  );
  let north = (
    <div className="flex flex-col gap-1 pt-1">
      {iris}
      {moss}
    </div>
  );
  return (
    <DropdownMenuPopover
      {...{
        open: topaz,
        onOpenChange: ultra,
        triggerButton: drift,
        children: north,
      }}
    />
  );
}
