// Restored from ref/webview/assets/composer-utility-bar-B1JM6js2.js
// Wave FY — full polished body from `composer-utility-bar-B1JM6js2/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 38 (verified 101/139).
// AST split 5/6 — custom CLI executable badge (ComposerUtilityBarHelper4) and its lazy init.
/* split-lane-import-depth:1 */

import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { AppIconSR } from "../../icons/app-icon-sr";
import {
  readScrollTop,
  scrollAppActionTargetByTurn,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
} from "../composer-esm-inits";
import {
  dataAppActionReviewFileExpanded,
  deferredUiCR,
  ReadLoginRouteQuerySnapshot,
} from "./companion-stubs";

var lemon, marble, nickel;
export const onyx = esmInit(() => {
  lemon = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_Hlt_Init();
  deferredUiCR();
  ensureAppScopeInit();
  dataAppActionReviewFileExpanded();
  scrollAppActionTargetTo();
  nickel = scrollAppActionTargetByTurn(
    appScopeAtom,
    "has-custom-cli-executable",
    {
      staleTime: readScrollTop.FIVE_SECONDS,
    },
  );
});

export function ComposerUtilityBarHelper4() {
  let { data } = CodexPluginActionResult(nickel);
  if (!(data?.hasCustomCliExecutable ?? false)) return null;
  let pine = (
    <MemoizedFormattedMessage
      {...{
        id: "composer.customCliTooltip",
        defaultMessage: "Using a custom CLI executable",
        description:
          "Tooltip text shown when the user has set a custom Codex CLI executable in their VS Code settings.",
      }}
    />
  );
  return (
    <OptionalTooltip
      {...{
        tooltipContent: pine,
        children: (
          <ReadLoginRouteQuerySnapshot
            {...{
              color: "ghost",
              size: "composerSm",
              uniform: true,
              className: "-mx-2",
              children: (
                <AppIconSR
                  {...{
                    className: "icon-xs text-token-editor-warning-foreground",
                  }}
                />
              ),
            }}
          />
        ),
      }}
    />
  );
}
