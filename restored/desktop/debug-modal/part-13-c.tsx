// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 13/17
/* split-lane-import-depth:1 */
// AST split 3/4

import { posixPathBasename } from "../../utils/posix-path-basename";
import { sortedArrayFrom } from "../../utils/sorted-array-from";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { identityCwd } from "../../utils/workspace-paths";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";
import { appServices } from "../desktop-services";
import { findProcessManagerRow } from "../find-process-manager-row";
import { getBuildFlavor } from "../get-build-flavor";
import { DesktopPersistenceKeys } from "../persistence-keys";
import { isRemoteControlConnectionFailedError } from "../remote-control-connection-failed-error";

import {
  CodexMobileSetupDialog,
  codexMicroOnboardingStateIState,
  codexMicroOnboardingStateTState,
  deferredUiRC,
} from "./part-13-a";
import { iris3, jewel3 } from "./part-13-b";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";

export function Bloom3() {
  if (jewel3) return;
  jewel3 = true;
  let yarn23 = () => {
    jewel3 = false;
    let zephyr23 = iris3.shift();
    zephyr23 != null && (zephyr23(), Bloom3());
  };
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(yarn23, {
      timeout: 500,
    });
    return;
  }
  globalThis.setTimeout(yarn23, 0);
}

function North3() {
  let coral23 = CodexPluginActionType(appScopeAtom),
    drift23 = CodexPluginActionResult(codexMicroHasEverBeenDetected),
    eagle23 =
      CodexPluginActionResult(codexMicroOnboardingStateTState) ?? "loading",
    frost23 = drift23 === true ? "yes" : "no",
    glide23 = (
      <div className="text-token-description-foreground">
        {
          <MemoizedFormattedMessage
            {...{
              id: "codexMicro.onboarding.debugStatus",
              defaultMessage:
                "Codex Micro NUX: {onboardingState, select, loading {loading} idle {idle} pending {pending} complete {complete} other {loading}} · detected: {hasEverBeenDetected, select, yes {yes} no {no} other {no}}",
              description: "Debug status for the Codex Micro onboarding flow",
              values: {
                onboardingState: eagle23,
                hasEverBeenDetected: frost23,
              },
            }}
          />
        }
      </div>
    );
  let honey23 = () => {
    codexMicroOnboardingStateIState(coral23);
  };
  let iris23 = (
    <MemoizedFormattedMessage
      {...{
        id: "codexMicro.onboarding.resetDebugButton",
        defaultMessage: "Reset NUX",
        description:
          "Button that resets the Codex Micro onboarding flow for debugging",
      }}
    />
  );
  let jewel23 = (
    <button
      type="button"
      className="cursor-interaction rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5"
      onClick={honey23}
    >
      {iris23}
    </button>
  );
  return (
    <div className="flex items-center gap-2 text-xs">
      {glide23}
      {jewel23}
    </div>
  );
}

function Ridge3(knoll23) {
  let { onClose, setupInProgress, showStartSetupError, step } = knoll23,
    lunar23 = (moss23) => {
      moss23 || onClose();
    };
  return (
    <CodexMobileSetupDialog
      {...{
        open: true,
        showStartSetupError,
        setupInProgress,
        step,
        onOpenChange: lunar23,
        onSkip: onClose,
        onStartSetup: Storm3,
      }}
    />
  );
}

function Storm3() {}

function Wave3() {
  let north23 = CodexPluginActionType(appScopeAtom),
    orbit23 = (
      <div className="text-token-description-foreground">
        {
          <MemoizedFormattedMessage
            {...{
              id: "realtimeVoice.onboarding.debugLabel",
              defaultMessage: "Voice chat NUX",
              description:
                "Label for the realtime voice onboarding debug control",
            }}
          />
        }
      </div>
    );
  let pine23 = () => {
    deferredUiRC(north23);
  };
  let quest23 = (
    <MemoizedFormattedMessage
      {...{
        id: "realtimeVoice.onboarding.debugReset",
        defaultMessage: "Reset NUX",
        description:
          "Button that resets realtime voice onboarding for debugging",
      }}
    />
  );
  return (
    <div className="flex items-center gap-2 text-xs">
      {orbit23}
      <button
        className="cursor-interaction rounded border border-token-border px-3 py-1 text-token-description-foreground hover:bg-token-foreground/5"
        onClick={pine23}
        type="button"
      >
        {quest23}
      </button>
    </div>
  );
}
