// Restored from ref/webview/assets/local-environment-editor-9PiWGb5h.js
// Wave FZ — full polished body from `local-environment-editor-9PiWGb5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 61/80).
// Careful split 3/3
/* split-lane-import-depth:1 */

import { dataFileBlameAuthor } from "../../account/data-file-blame-author";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { clampZoomPercent } from "../../artifact/clamp-zoom-percent";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { SUPPORTED_NODE_PLATFORMS } from "../../config/supported-node-platforms";
import { X_CODEX_BINARY_RESPONSE_HEADER } from "../../config/x-codex-binary-response-header";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { appServices } from "../../desktop/desktop-services";
import { CODEX_WORKTREE_PATH_ENV_KEY, LOCAL_ENVIRONMENT_CONFIG_PATH_KEY } from "../../env/codex-path-env-keys";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { ensureTanstackReactFormApiInit, useTanstackForm } from "../../forms/tanstack-react-form";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconMA } from "../../icons/app-icon-ma";
import { ensureFlaskIconInit, FlaskIcon } from "../../icons/flask-icon";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ensurePlayOutlineIconInit, PlayOutlineIcon } from "../../icons/play-outline-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { scrollMatchIntoView } from "../../thread/thread-find-scroll";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { toggleSortedIdList as ToggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureLocalEnvironmentWorkflowMessagesInit, localEnvironmentWorkflowMessages } from "../local-environment-workflow-messages";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { buildVscodeQueryKey } from "../vscode-query-key";

// Cross-part stubs.
const LocalEnvironmentEditorA: any = undefined;
const LocalEnvironmentEditorG: any = undefined;
const LocalEnvironmentEditorR: any = undefined;
const localEnvironmentEditorC: any = undefined;
const localEnvironmentEditorD: any = undefined;
const localEnvironmentEditorF: any = undefined;
const localEnvironmentEditorH: any = undefined;
const localEnvironmentEditorI: any = undefined;
const localEnvironmentEditorL: any = undefined;
const localEnvironmentEditorM: any = undefined;
const localEnvironmentEditorO: any = undefined;
const localEnvironmentEditorP: any = undefined;
const localEnvironmentEditorS: any = undefined;
const localEnvironmentEditorU: any = undefined;
const localEnvironmentEditorUnderscore: any = undefined;
const localEnvironmentEditorV: any = undefined;
const localEnvironmentEditorY: any = undefined;

export { localEnvironmentEditorUnderscore, LocalEnvironmentEditorA as localEnvironmentEditorA, localEnvironmentEditorC, localEnvironmentEditorD, localEnvironmentEditorF, LocalEnvironmentEditorG as localEnvironmentEditorG, localEnvironmentEditorH, localEnvironmentEditorI, localEnvironmentEditorL, localEnvironmentEditorM, localEnvironmentEditorO, localEnvironmentEditorP, LocalEnvironmentEditorR as localEnvironmentEditorR, localEnvironmentEditorS, localEnvironmentEditorU, localEnvironmentEditorV, localEnvironmentEditorY };
