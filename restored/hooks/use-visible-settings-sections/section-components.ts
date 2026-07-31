// Restored from ref/webview/assets/use-visible-settings-sections-CNgqcAwL.js
// Settings section slug → nav icon component registry.

import {
  ensureComposerEsm_RV_Init,
  ensureComposerEsm_Ytt_Init,
  ensureComposerEsm_lv_Init,
  ensureComposerEsm_rK_Init,
} from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_f__Init } from "../../conversation/conversation-page-esm-inits";
import { AppIconbi } from "../../icons/app-icon-bi";
import { AppIconcv } from "../../icons/app-icon-cv";
import { AppIcond } from "../../icons/app-icon-d";
import { AppIcondr } from "../../icons/app-icon-dr";
import { AppIconeG } from "../../icons/app-icon-eg";
import { AppIconha } from "../../icons/app-icon-ha";
import { AppIconiG } from "../../icons/app-icon-ig";
import { AppIconJO } from "../../icons/app-icon-jo";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { AppIconLC } from "../../icons/app-icon-lc";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconm } from "../../icons/app-icon-m";
import { AppIconmD } from "../../icons/app-icon-md";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { AppIconNk } from "../../icons/app-icon-nk";
import { AppIconq1 } from "../../icons/app-icon-q1";
import { AppIconzn } from "../../icons/app-icon-zn";
import {
  AppWindowIcon,
  ensureAppWindowIconInit,
} from "../../icons/app-window-icon";
import { DockIcon, ensureDockIconInit } from "../../icons/dock-icon";
import { GearIcon } from "../../icons/gear-icon";
import {
  ensureHooksBranchIconInit,
  ensureHooksFocusIconInit,
} from "../../icons/hooks-settings-icons";
import { LoadingPreviewIcon } from "../../icons/loading-preview-icon";
import { ProjectDropdownGlyphIcon } from "../../icons/project-dropdown-glyph-icon";
import { UpgradePlanOrbitIcon } from "../../icons/upgrade-plan-orbit-icon";
import { UserAvatarIcon } from "../../icons/user-avatar-icon";
import { esmInit } from "../../runtime/rolldown-runtime";
import { bindDeferredUic_ } from "../../ui/deferred-ui-c-underscore";
import { bindDeferredUiEh } from "../../ui/deferred-ui-eh";
import { bindDeferredUiGa } from "../../ui/deferred-ui-ga";
import { bindDeferredUiJ1 } from "../../ui/deferred-ui-j1";
import { deferredUiYo } from "../../ui/deferred-ui-yo";
import { deferredUiaG } from "../../ui/deferred-uia-g";
import { deferredUifR } from "../../ui/deferred-uif-r";
import { deferredUitg } from "../../ui/deferred-uitg";
import { bindDeferredUiuC } from "../../ui/deferred-uiu-c";
import { deferredUixi } from "../../ui/deferred-uixi";
import { bindDeferreday } from "../../ui/deferreday";
import {
  ensureSettingsGlyphBnInit,
  ensureSettingsGlyphCHInit,
  ensureSettingsGlyphNltInit,
  ensureSettingsGlyphRBInit,
} from "../../utils/wave-as-gap-ensure-inits";
import {
  ChronicleSettingsNavIcon,
  ensureChronicleSettingsNavIconInit,
  ensureKeyboardShortcutsNavIconInit,
  KeyboardShortcutsSettingsNavIcon,
} from "../visible-settings-nav-icons";

export let getVisibleSettingsSectionComponents: Record<string, unknown>;

export const ensureVisibleSettingsSectionsRuntimeInit = esmInit(() => {
  bindDeferredUiGa();
  ensureAppWindowIconInit();
  ensureComposerEsm_RV_Init();
  deferredUitg();
  deferredUiYo();
  bindDeferredUic_();
  ensureComposerEsm_rK_Init();
  deferredUiaG();
  ensureConversationPageEsm_f__Init();
  bindDeferredUiuC();
  ensureDockIconInit();
  bindDeferredUiJ1();
  bindDeferredUiEh();
  ensureComposerEsm_Ytt_Init();
  ensureHooksBranchIconInit();
  ensureChronicleSettingsNavIconInit();
  deferredUifR();
  ensureSettingsGlyphNltInit();
  deferredUixi();
  ensureHooksFocusIconInit();
  ensureComposerEsm_lv_Init();
  ensureKeyboardShortcutsNavIconInit();
  ensureSettingsGlyphCHInit();
  bindDeferreday();
  ensureSettingsGlyphBnInit();
  ensureSettingsGlyphRBInit();
  getVisibleSettingsSectionComponents = {
    "general-settings": GearIcon,
    import: AppIconq1,
    profile: UserAvatarIcon,
    "keyboard-shortcuts": KeyboardShortcutsSettingsNavIcon,
    "codex-micro": AppIconha,
    appshots: AppIconeG,
    appearance: AppIconzn,
    voice: AppIconMlt,
    pets: AppIconbi,
    agent: AppIconcv,
    "git-settings": AppIconNk,
    "data-controls": AppIconJO,
    "code-review": AppIconcv,
    "cloud-settings": AppIcond,
    "cloud-environments": AppIcond,
    personalization: AppIconm,
    chronicle: ChronicleSettingsNavIcon,
    usage: UpgradePlanOrbitIcon,
    debug: AppIconiG,
    "browser-use": AppWindowIcon,
    "computer-use": AppIconLC,
    "local-environments": DockIcon,
    worktrees: ProjectDropdownGlyphIcon,
    environments: DockIcon,
    "mcp-settings": AppIcondr,
    "hooks-settings": AppIconmD,
    connections: AppIconJtt,
    "plugins-settings": AppIconLV,
    "skills-settings": LoadingPreviewIcon,
  };
});
