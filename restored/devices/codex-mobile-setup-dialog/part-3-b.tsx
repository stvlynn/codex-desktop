// Restored from ref/webview/assets/codex-mobile-setup-dialog-CedkrL4M.js
// Wave GA — full polished body from `codex-mobile-setup-dialog-CedkrL4M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 76/108).
// AST split 3/5
/* split-lane-import-depth:1 */

import { isBusinessPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginDirectoryEntrypoint } from "../../analytics/codex-plugin-directory-entrypoint";
import { CodexReferralInviteModalBackendErrorType } from "../../analytics/codex-referral-invite-modal-backend-error-type";
import { CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE } from "../../analytics/codex-thread-open-stream-role-resolved-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppInstallProgressDialog } from "../../apps/app-install-progress-dialog";
import { ArtifactPreviewZoomToFitLabel } from "../../artifact/artifact-preview-zoom-to-fit-label";
import { decayZoomPercent } from "../../artifact/clamp-zoom-percent";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_FH_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import {
  createPersistedAtom,
  ensurePersistedAtomInit,
} from "../../boundaries/persisted-atom";
import {
  jsxRuntime as getJsxRuntime,
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL } from "../../docs/codex-doc-urls";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import {
  MOBILE_MFA_SETUP_FEATURE_GATE_ID,
  REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID,
} from "../../feature-gates/feature-gate-ids";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import {
  ensureUseHomeDirectoryInit,
  useHomeDirectory,
} from "../../hooks/use-home-directory";
import { useIsDarkAppearance } from "../../hooks/use-is-dark-appearance";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconJG } from "../../icons/app-icon-jg";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { matchesOptionalHostPluginIds } from "../../plugins/matches-optional-host-plugin-ids";
import { ensureInstalledPluginsQueryInit } from "../../plugins/use-installed-plugins-query";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { generalDesktopSettingsDefinitions } from "../../settings/general-desktop-settings-definitions";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { CopyButton } from "../../ui/copy-button";
import { deferredT } from "../../ui/deferred-t";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { noop } from "../../utils/noop";
import {
  ensureSvgToDataUriInit,
  svgToDataUri,
} from "../../utils/svg-to-data-uri";

import {
  cedar,
  daisy,
  ember,
  flint,
  garnet,
  hazel,
  ivory,
  jasper,
  kelp,
  lotus,
} from "./part-3-assets";

/** split companion stub */
const IntlProvider: any = undefined;
export function Mint(bushing: any) {
  let { ariaLabel, className, onClick } = bushing,
    collar = usePrefersReducedMotion(),
    dowel = prism.useRef(null),
    flange = useIsDarkAppearance() === true,
    [gib, hub] = prism.useState(null),
    idler = flange ? "dark" : "light",
    { stillSrc, videoSrc } = reef[idler],
    jig = () => {
      let boss = dowel.current;
      boss != null && (boss.pause(), (boss.currentTime = 0));
    };
  let keeper = jig,
    lug = () => {
      if (collar || gib === idler) return;
      let cam = dowel.current;
      cam != null &&
        cam.paused &&
        ((cam.currentTime = 0), cam.play()?.catch(nova));
    };
  let mandrel = lug,
    nipple = IntlProvider("size-full shrink-0 object-contain", className);
  let orifice = nipple;
  if (collar || gib === idler) {
    let detent = IntlProvider("cursor-interaction overflow-hidden", className);
    let eccentric = (
      <img alt="" aria-hidden="true" className={orifice} src={stillSrc} />
    );
    let follower;
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        className={detent}
        style={topaz}
        onClick={onClick}
      >
        {eccentric}
      </button>
    );
  }
  let pin = IntlProvider("cursor-interaction overflow-hidden", className);
  let race = (event) => {
    event.pointerType === "mouse" && mandrel();
  };
  let sleeve = () => {
    hub(idler);
  };
  let trunnion = (
    <video
      key={idler}
      ref={dowel}
      aria-hidden="true"
      className={orifice}
      muted={true}
      playsInline={true}
      poster={stillSrc}
      preload="auto"
      src={videoSrc}
      onPointerEnter={race}
      onEnded={keeper}
      onError={sleeve}
    />
  );
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={pin}
      style={topaz}
      onClick={onClick}
    >
      {trunnion}
    </button>
  );
}
function nova() {}
var olive, prism, quill, reef, sage, topaz;
export var ultra = esmInit(() => {
  olive = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  prism = commonJsInit(react(), 1);
  daisy();
  flint();
  hazel();
  jasper();
  lotus();
  ensureClientCoordinationServiceInit();
  ensureSvgToDataUriInit();
  AppIconJG();
  quill = getJsxRuntime();
  reef = {
    dark: {
      stillSrc: cedar,
      videoSrc: ember,
    },
    light: {
      stillSrc: garnet,
      videoSrc: ivory,
    },
  };
  sage = `url(${svgToDataUri(kelp)})`;
  topaz = {
    maskImage: sage,
    maskMode: "alpha",
    maskPosition: "calc(50% + 1px) calc(50% + 1px)",
    maskRepeat: "no-repeat",
    maskSize: "90% 90%",
    WebkitMaskImage: sage,
    WebkitMaskPosition: "calc(50% + 1px) calc(50% + 1px)",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "90% 90%",
  };
});
function vapor(guide) {
  let helix = acorn.get(guide);
  if (helix != null) return helix;
  let impeller = fetch(guide).then((value) => {
    if (!value.ok) throw Error("Failed to load QR dots artwork.");
    return value.text();
  });
  return (acorn.set(guide, impeller), impeller);
}
export function wheat(journal: any) {
  let kingpin = {
    markup: "",
    src: journal,
  };
  let [land, mesh] = zephyr.useState(kingpin),
    neck,
    pad;
  return (
    (neck = () => {
      let quillshaft = true;
      return (
        vapor(journal)
          .then((value) => {
            quillshaft &&
              mesh({
                markup: value,
                src: journal,
              });
          })
          .catch(() => {
            acorn.delete(journal);
          }),
        () => {
          quillshaft = false;
        }
      );
    }),
    (pad = [journal]),
    zephyr.useEffect(neck, pad),
    land.src === journal ? land.markup : ""
  );
}
var yarn, zephyr, acorn;
export var bloom = esmInit(() => {
  yarn = reactCompilerRuntime();
  zephyr = commonJsInit(react(), 1);
  acorn = new Map();
});
