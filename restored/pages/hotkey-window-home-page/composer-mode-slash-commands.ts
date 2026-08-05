// Restored from ref/webview/assets/hotkey-window-home-page-SLdyPBTP.js
// Wave FY — full polished body from `hotkey-window-home-page-SLdyPBTP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 88/122).
// Wave FZ-support — PascalCase invalid JSX tags: coerceLocalFilesystemPath→CoerceLocalFilesystemPath, copyContinuousScale→CopyContinuousScale, ensureWorktreeEnvironmentDropdownInit→EnsureWorktreeEnvironmentDropdownInit, renamedId→HotkeyWindowHomePageHelper1, renamedId→HotkeyWindowHomePageHelper4, renamedId→HotkeyWindowHomePageHelper7, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, toggleSortedIdList→ToggleSortedIdList, usePointerSurfaceInteractionGate→UsePointerSurfaceInteractionGate, worktreeEnvironmentDropdownR→WorktreeEnvironmentDropdownR.
// AST split 2/4
/* split-lane-import-depth:1 */

import { RateLimitResetCreditsDialog } from "../../account/rate-limit-reset-credits-dialog";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconFB } from "../../icons/app-icon-fb";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { useResolvedHostConfigValue } from "../../hosts/use-resolved-host-config-value";
import { esmInit } from "../../runtime/rolldown-runtime";
import { SettingsDependenciesGuard } from "../../settings/settings-dependencies-guard";
import { titleCaseLastPathSegment } from "../../utils/title-case-last-path-segment";
import { ensureSettingsGlyphRBInit } from "../../utils/wave-as-gap-ensure-inits";

/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_IB_Init@composer/composer-esm-inits.ts) */
const AppInitialIB: any = undefined;
/** Wave FY unresolved companion (jsx-collision:createRateLimitCreditRedeemer@account/create-rate-limit-credit-redeemer.ts) */
const AppInitialPv: any = undefined;
/** Wave FY unresolved companion (missing-export:composer/deferred-tc.tsx) */
const DeferredTC: any = undefined;
export function HotkeyWindowHomePageHelper4(acorn: any) {
  let { composerMode, enabled, setComposerMode, showWorktree } = acorn,
    bloom = useIntl(),
    coral = () => {
      RateLimitResetCreditsDialog({
        composerMode,
        setComposerMode,
      });
    };
  let drift = enabled && showWorktree,
    eagle;
  eagle = {
    enabled: drift,
  };
  useResolvedHostConfigValue("composer.toggleWorktreeMode", coral, eagle);
  let frost = bloom.formatMessage({
    id: "composer.mode.local",
    defaultMessage: "Work locally",
    description: "Local mode label",
  });
  let glide = bloom.formatMessage({
    id: "composer.hotkeyWindow.mode.localSlashCommand.description",
    defaultMessage: "Run this chat locally",
    description: "Description for the Quick Chat local mode slash command",
  });
  let honey = enabled && composerMode !== "local",
    iris = async () => {
      setComposerMode("local");
    };
  let jewel = iris,
    knoll;
  knoll = {
    id: "local",
    title: frost,
    description: glide,
    requiresEmptyComposer: false,
    Icon: AppIconFB,
    enabled: honey,
    onSelect: jewel,
  };
  SettingsDependenciesGuard(knoll);
  let lunar = bloom.formatMessage({
    id: "composer.mode.worktree",
    defaultMessage: "New worktree",
    description: "Worktree mode label",
  });
  let moss = bloom.formatMessage({
    id: "composer.hotkeyWindow.mode.worktreeSlashCommand.description",
    defaultMessage: "Run this chat in a new worktree",
    description: "Description for the Quick Chat worktree mode slash command",
  });
  let north = enabled && showWorktree && composerMode !== "worktree",
    orbit = async () => {
      setComposerMode("worktree");
    };
  let pine = orbit,
    quest;
  return (
    (quest = {
      id: "worktree",
      title: lunar,
      description: moss,
      requiresEmptyComposer: false,
      Icon: ProjectDropdownGlyphIcon,
      enabled: north,
      onSelect: pine,
    }),
    SettingsDependenciesGuard(quest),
    null
  );
}
var gamma;
export var harbor = esmInit(() => {
  gamma = reactCompilerRuntime();
  ensureIntlFormattersInit();
  AppInitialPv();
  titleCaseLastPathSegment();
  DeferredTC();
  AppInitialIB();
  ensureSettingsGlyphRBInit();
});
