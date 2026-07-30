// Restored from ref/webview/assets/pull-request-code-review-BqqvupGf.js
// Wave FX — full polished body from `pull-request-code-review-BqqvupGf/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 41 (verified 42/83).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/5
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ensureCodeThemeRegistryInit } from "../../appearance/code-theme-catalog";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_LR_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wdt_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { OPENAI_PRIMARY_RUNTIME_ID } from "../../config/openai-primary-runtime-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { diffVirtualizationMetrics } from "../../diff/diff-virtualization-metrics";
import { SwitchToSplitDiffButton } from "../../diff/switch-to-split-diff-button";
import { FileTreeSearchField } from "../../files/file-tree-search-field";
import { subscribeCustomEventTarget } from "../../hooks/subscribe-custom-event-target";
import { useDeferredCleanupEffect } from "../../hooks/use-deferred-cleanup-effect";
import { hostConfig2 } from "../../hosts/host-config2";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconIR } from "../../icons/app-icon-ir";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { semanticAccentColors } from "../../ui/semantic-accent-colors";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { setKeyedStoreAtomValueXU } from "../../utils/set-keyed-store-atom-value";
import { toPosixPath } from "../../utils/workspace-paths";
import { filterConversationTimelineItems } from "../filter-conversation-timeline-items";
const useClearBrowserBrowsingDataMutation: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensurePullRequestMediaCjInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialCj: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/local-thread2.ts) */
const localThread2: any = undefined;
/** Wave FX unresolved companion (missing-export:files/deferred-dl.tsx) */
const DeferredDL: any = undefined;
/** Wave FX unresolved companion (jsx-collision:reviewDiffFilterAtom@navigation/app-shell-atoms.ts) */
const AppInitialDW: any = undefined;
/** Wave FX unresolved companion (missing-export:review/review-git-actions-menu.tsx) */
const AppInitialEE: any = undefined;
/** Wave FX unresolved companion (missing-export:review/line-info.tsx) */
const LineInfo: any = undefined;
/** Wave FX unresolved companion (jsx-collision:dataFileBlameAuthor@account/data-file-blame-author.ts) */
const AppInitialGA: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/dismiss.ts) */
const dismiss: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/editor-diff-page-view.tsx) */
const AppInitialJD: any = undefined;
/** Wave FX unresolved companion (missing-export:conversation/formatted-message.tsx) */
const FormattedMessage: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureChromeThemeDefaultsInit@appearance/chrome-theme-defaults.ts) */
const AppInitialLW: any = undefined;
/** Wave FX unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FX unresolved companion (missing-export:git/gh-cli-status.tsx) */
const GhCliStatus: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiSW@ui/deferred-ui-sw.ts) */
const AppInitialSW: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FX unresolved companion (jsx-collision:whamToggleAllDiffs@review/wham-toggle-all-diffs.ts) */
const AppInitialXD: any = undefined;
/** Wave FX unresolved companion (missing-export:plugins/transaction-event-plugin.tsx) */
const TransactionEventPlugin: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave FX unresolved companion (jsx-collision:useWhamToggleAllDiffs@diff/use-wham-toggle-all-diffs.ts) */
const AppInitialZD: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaA: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaB: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaC: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaD: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaF: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaG: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaH: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaI: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaL: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaM: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaN: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaO: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaP: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaR: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaS: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaT: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaU: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaUnderscore: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaV: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaX: any = undefined;
/** Wave FX unresolved companion (sib-missing:conversation/pull-request-media.tsx) */
const pullRequestMediaY: any = undefined;
function alpha({
  containerWidth,
  maxWidth,
  minWidth,
  visibleInset = 0
}) {
  let delta = Math.min(minWidth, containerWidth),
    echo = Math.min(maxWidth ?? containerWidth, Math.max(0, containerWidth - visibleInset)),
    falcon = Math.min(containerWidth * bravo, echo);
  return Math.min(containerWidth, Math.max(delta, falcon));
}
var bravo,
  copper = esmInit(() => {
    bravo = 0.9;
  });
