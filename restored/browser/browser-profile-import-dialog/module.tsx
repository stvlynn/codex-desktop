// Restored from ref/webview/assets/browser-profile-import-dialog-v_lwnIpS.js
// Wave FZ — full polished body from `browser-profile-import-dialog-v_lwnIpS/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 22 (verified 44/65).
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_MT_Init } from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { writeClipboardIfPresent } from "../../clipboard/write-clipboard-if-present";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { threadActionErrorMessages } from "../../sidebar/thread-action-error-messages";
import { noop } from "../../utils/noop";
import { logBrowserProfileImportDialogClosed } from "../log-browser-profile-import-dialog-closed";
import { logBrowserProfileImportWindowsChromeNoticeAcked } from "../log-browser-profile-import-windows-chrome-notice-acked";
import {
  AppInitialGk,
  AppInitialHk,
  DeferredBk,
  NativeContextMenuSurface,
  deferredUiMk,
  deferredUiWk,
} from "./dialog-companion-stubs";
import { onyx } from "./dialog-shared-state";
import { BrowserProfileImportDialogHelper1 } from "./import-form";

export function BrowserProfileImportDialogIcon(delta: unknown) {
  let { entryPoint, flowId, onClose, service } = delta,
    cog = CodexPluginActionType(appScopeAtom),
    disc = NativeContextMenuSurface("1834314516"),
    [edge, forge] = $.useState(""),
    [gear, hinge] = $.useState(true),
    [iron, joint] = $.useState(true),
    [keystone, latch] = $.useState(null),
    motor = $.useRef("before-attempt"),
    nut = $.useRef(false),
    piston = $.useRef(false),
    rivet = $.useRef(false),
    screw = $.useRef(null),
    torque = deferredUiMk(service, true);
  let valve = useQuery(torque),
    axle = (trunnion) => {
      let { request } = trunnion;
      return service.importBrowserProfile(request);
    };
  let bracket, clamp;
  bracket = (boss, cam) => {
    let { context, request } = cam;
    motor.current = "after-request-error";
    DeferredBk(cog, entryPoint, request, context);
  };
  clamp = (detent, eccentric) => {
    let { context, request } = eccentric;
    motor.current = "after-result";
    DeferredBk(cog, entryPoint, request, context, detent);
  };
  let drill = {
    mutationFn: axle,
    onError: bracket,
    onSuccess: clamp,
  };
  let engine = noop(drill),
    frame = valve.data,
    gasket =
      frame?.find((follower) => quartz(follower) === edge) ??
      AppInitialHk(frame ?? [])[0] ??
      frame?.[0] ??
      null;
  let handle = gasket,
    insert = handle?.hasCookies === true && gear,
    jacket = handle?.hasPasswords === true && iron,
    knurl =
      typeof document < "u" &&
      document.documentElement.dataset.codexOs === "win32",
    lever =
      typeof document < "u" &&
      document.documentElement.dataset.codexOs === "darwin",
    mount = knurl && handle?.source === "chrome",
    nozzle = handle ? quartz(handle) : null;
  let platen = nozzle,
    ratchet = platen != null && keystone === platen,
    shim =
      engine.isError && engine.variables != null
        ? {
            source: engine.variables.request.source,
            profilePath: engine.variables.request.profilePath,
            cookies:
              engine.variables.request.importCookies === false
                ? undefined
                : {
                    status: "failed",
                  },
            passwords:
              engine.variables.request.importPasswords === false
                ? undefined
                : {
                    status: "failed",
                  },
          }
        : null;
  let tappet = shim,
    arbor = engine.data ?? tappet,
    bushing = () => {
      nut.current ||
        ((nut.current = true),
        logBrowserProfileImportDialogClosed(cog, entryPoint, {
          flowId,
          attemptIndex: screw.current?.context.attemptIndex,
          source:
            screw.current?.request.source ??
            (rivet.current ? "chrome" : handle?.source),
          windowsChromeAdminApprovalNoticeRequired:
            screw.current?.context.windowsChromeAdminApprovalNoticeRequired ??
            rivet.current,
          windowsChromeAdminApprovalNoticeAcknowledged:
            screw.current?.context
              .windowsChromeAdminApprovalNoticeAcknowledged ?? piston.current,
          exitState: engine.isPending ? undefined : motor.current,
        }));
    };
  let collar = bushing,
    dowel = () => {
      collar();
      onClose();
    };
  let flange = $.useEffectEvent(dowel),
    gib = () => {
      disc || flange();
    };
  let hub;
  hub = [disc];
  $.useEffect(gib, hub);
  let idler, jig;
  idler = () => {
    !disc ||
      !mount ||
      platen == null ||
      rivet.current ||
      ((rivet.current = true), deferredUiWk(cog, entryPoint, flowId));
  };
  jig = [platen, disc, entryPoint, flowId, mount, cog];
  $.useEffect(idler, jig);
  let keeper = () => {
    engine.isPending || (collar(), onClose());
  };
  let lug = keeper,
    mandrel = (guide) => {
      guide || lug();
    };
  let _e = !engine.isPending && arbor == null,
    nipple = undefined;
  let orifice = (helix) => {
    helix &&
      !piston.current &&
      ((piston.current = true),
      logBrowserProfileImportWindowsChromeNoticeAcked(cog, entryPoint, flowId));
    latch(helix ? platen : null);
  };
  let pin = () => {
    if (handle == null) return;
    let impeller = pearl(handle, insert, jacket, mount),
      journal = {
        flowId,
        attemptIndex: (screw.current?.context.attemptIndex ?? 0) + 1,
        windowsChromeAdminApprovalNoticeRequired: mount,
        windowsChromeAdminApprovalNoticeAcknowledged: ratchet,
      };
    screw.current = {
      context: journal,
      request: impeller,
    };
    threadActionErrorMessages(cog, entryPoint, impeller, journal);
    engine.mutate({
      context: journal,
      request: impeller,
    });
  };
  let be = tappet == null ? undefined : engine.reset,
    race = (kingpin) => {
      forge(quartz(kingpin));
      latch(null);
      engine.reset();
    };
  let sleeve = (
    <BrowserProfileImportDialogHelper1
      {...{
        cookieAccessFailureMessage: nipple,
        elevatedChromeConsent: ratchet,
        importCookies: gear,
        importPasswords: iron,
        isImporting: engine.isPending,
        isLoadingProfiles: valve.isLoading,
        showCloseBrowserGuidance: lever,
        profiles: frame,
        profilesHaveError: valve.isError,
        requiresElevatedChromeConsent: mount,
        result: arbor,
        selectedProfile: handle,
        onCancel: lug,
        onElevatedChromeConsentChange: orifice,
        onImport: pin,
        onImportCookiesChange: hinge,
        onImportPasswordsChange: joint,
        onTryAgain: be,
        onSelectProfile: race,
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        open: true,
        onOpenChange: mandrel,
        showDialogClose: _e,
        size: "narrow",
        children: sleeve,
      }}
    />
  );
}
function pearl(updraft, verge, weir, yard) {
  let anchor = {
    source: updraft.source,
    profilePath: updraft.profilePath,
    importCookies: verge,
    importPasswords: weir,
  };
  return yard
    ? {
        ...anchor,
        allowElevatedChromeDecryption: true,
      }
    : anchor;
}
function quartz(bolt) {
  return `${bolt.source}:${bolt.profilePath}`;
}
var river, $, slate;
esmInit(() => {
  river = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  $ = commonJsInit(react(), 1);
  findProcessManagerRow();
  ensureAppScopeInit();
  onyx();
  ensureSkillsPageHelpersInit();
  writeClipboardIfPresent();
  AppInitialGk();
})();
