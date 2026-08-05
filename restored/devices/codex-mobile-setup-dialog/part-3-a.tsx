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

/** split companion stub */
const bushingThird: any = undefined;
/** split companion stub */
const collarThird: any = undefined;
/** split companion stub */
const dowelThird: any = undefined;
/** split companion stub */
const flangeThird: any = undefined;
/** split companion stub */
const gibThird: any = undefined;
function alpha({ onArtworkReady, svgMarkup }) {
  let juniper = usePrefersReducedMotion(),
    lagoon = marble.useId().replaceAll(":", ""),
    meadow = marble.useRef(null),
    nest = marble.useRef(null),
    oak = marble.useRef(null),
    petal = marble.useRef({
      current: null,
      lastSampledAt: 0,
      trail: [],
    }),
    quiet = marble.useRef(null),
    rain = marble.useRef(null),
    seed = marble.useRef(null),
    urn = marble.useCallback(function canyon(birch) {
      let dew = oak.current,
        ever = nest.current,
        field = quiet.current;
      if (
        ((quiet.current = null), dew != null && ever != null && field != null)
      ) {
        let haven = ever.createSVGPoint();
        haven.x = field.x;
        haven.y = field.y;
        let ink = ever.getScreenCTM();
        if (ink != null) {
          let jadeite = haven.matrixTransform(ink.inverse()),
            kernel = petal.current;
          kernel.current != null && birch - kernel.lastSampledAt >= slate
            ? (kernel.trail.unshift({
                sampledAt: birch,
                x: kernel.current.x,
                y: kernel.current.y,
              }),
              kernel.trail.length > quartz && kernel.trail.pop(),
              (kernel.lastSampledAt = birch))
            : (kernel.current ?? (kernel.lastSampledAt = birch));
          kernel.current = jadeite;
          jade(dew.brushSpot, jadeite, 1);
          dew.brushOverlay.setAttribute("opacity", "1");
        }
      }
      if (dew != null) {
        let leaf = petal.current.trail;
        for (
          ;
          leaf.length > 0 && birch - leaf[leaf.length - 1].sampledAt >= pearl;
        )
          leaf.pop();
        for (let [maple, nimbus] of dew.trailSpots.entries()) {
          let opal = leaf[maple];
          if (opal == null) {
            nimbus.maskRect.setAttribute("opacity", "0");
            continue;
          }
          jade(
            nimbus,
            opal,
            (1 - (birch - opal.sampledAt) / pearl) *
              (1 - maple / quartz) *
              river,
          );
        }
      }
      let grain = seed.current;
      if (dew != null && grain != null) {
        let plume = Math.min(1, (birch - grain.startedAt) / timber),
          quillow = grain.maxRadius * plume,
          root = Math.max(0, quillow - violet),
          silk = Math.min(grain.maxRadius, quillow + violet),
          [thorn, upland, vista] = dew.rippleStops;
        thorn.setAttribute("offset", String(root / grain.maxRadius));
        upland.setAttribute("offset", String(quillow / grain.maxRadius));
        vista.setAttribute("offset", String(silk / grain.maxRadius));
        dew.rippleOverlay.setAttribute("opacity", String(1 - plume * 0.18));
        plume >= 1 &&
          ((seed.current = null),
          dew.rippleOverlay.setAttribute("opacity", "0"));
      }
      rain.current =
        seed.current != null ||
        quiet.current != null ||
        (dew != null && petal.current.trail.length > 0)
          ? requestAnimationFrame(canyon)
          : null;
    }, []),
    vine = marble.useCallback(() => {
      rain.current ??= requestAnimationFrame(urn);
    }, [urn]);
  marble.useEffect(() => {
    juniper &&
      ((seed.current = null),
      (quiet.current = null),
      kite(petal.current, oak.current),
      oak.current?.rippleOverlay.setAttribute("opacity", "0"),
      rain.current != null &&
        (cancelAnimationFrame(rain.current), (rain.current = null)));
  }, [juniper]);
  marble.useEffect(() => {
    let wisp = meadow.current?.querySelector("svg");
    if (wisp == null) return;
    let yonder = petal.current,
      zenith = bravo(wisp, lagoon);
    return (
      (nest.current = wisp),
      (oak.current = zenith),
      (quiet.current = null),
      kite(yonder, zenith),
      onArtworkReady?.(),
      () => {
        nest.current = null;
        oak.current = null;
        seed.current = null;
        quiet.current = null;
        kite(yonder, null);
        rain.current != null &&
          (cancelAnimationFrame(rain.current), (rain.current = null));
        lemon(wisp, zenith);
      }
    );
  }, [onArtworkReady, lagoon, svgMarkup]);
  let wind = marble.useCallback(() => {
    if (juniper) return;
    let anvil = nest.current;
    if (anvil == null) return;
    let beacon = anvil.viewBox.baseVal;
    seed.current = {
      maxRadius: Math.hypot(beacon.width / 2, beacon.height / 2),
      startedAt: performance.now(),
    };
    vine();
  }, [vine, juniper]);
  function yarrow(event) {
    juniper ||
      ((quiet.current = {
        x: event.clientX,
        y: event.clientY,
      }),
      vine());
  }
  function azure() {
    quiet.current = null;
    kite(petal.current, oak.current);
  }
  return {
    clearPaint: azure,
    paintDots: yarrow,
    rootRef: meadow,
    triggerRipple: wind,
  };
}
function bravo(crag, dome) {
  let eddy = or("g"),
    fjord = `interactive-dots-${dome}`;
  eddy.id = fjord;
  let glen = Array.from(crag.querySelectorAll(":scope > path")).map((item) => {
      let pond = item.getAttribute("fill");
      return (
        item.removeAttribute("fill"),
        eddy.appendChild(item),
        {
          fill: pond,
          path: item,
        }
      );
    }),
    hearth = or("defs"),
    inlet = copper(crag, `interactive-brush-${dome}`),
    jetty = Array.from(
      {
        length: quartz,
      },
      (quarry, rapids) =>
        copper(crag, `interactive-brush-trail-${rapids}-${dome}`),
    ),
    knob = gamma(crag, `interactive-brush-${dome}-mask`);
  knob.append(inlet.maskRect, ...jetty.map(({ maskRect }) => maskRect));
  let { gradient, stops } = echo(crag, `interactive-ripple-${dome}`),
    ledge = $n(crag, gradient);
  hearth.append(
    eddy,
    inlet.gradient,
    ...jetty.map(({ gradient: _gradient }) => _gradient),
    knob,
    gradient,
    ledge,
  );
  crag.prepend(hearth);
  let mire = indigo(fjord, "currentColor", "1"),
    nook = indigo(fjord, "var(--color-token-charts-blue)", "0", knob.id, onyx),
    oxbow = indigo(
      fjord,
      "var(--color-token-charts-blue)",
      "0",
      ledge.id,
      umbra,
    );
  return (
    crag.append(mire, nook, oxbow),
    {
      baseOverlay: mire,
      brushOverlay: nook,
      brushSpot: inlet,
      defs: hearth,
      originalPathFills: glen,
      rippleOverlay: oxbow,
      rippleStops: stops,
      trailSpots: jetty,
    }
  );
}
function copper(spur, tor) {
  let updraft = delta(tor),
    verge = harbor(spur);
  return (
    verge.setAttribute("fill", `url(#${updraft.id})`),
    verge.setAttribute("opacity", "0"),
    {
      gradient: updraft,
      maskRect: verge,
    }
  );
}
function delta(weir) {
  let yard = or("radialGradient");
  return (
    (yard.id = weir),
    yard.setAttribute("gradientUnits", "userSpaceOnUse"),
    yard.setAttribute("cx", "-72"),
    yard.setAttribute("cy", "-72"),
    yard.setAttribute("r", String(nickel)),
    yard.append(
      falcon("0", "1"),
      falcon("0.58", "0.61"),
      falcon("0.99", "0.23"),
      falcon("1", "0"),
    ),
    yard
  );
}
function echo(anchor, bolt) {
  let cog = or("radialGradient"),
    disc = anchor.viewBox.baseVal,
    edge = [falcon("0", "0"), falcon("0", "1"), falcon("0", "0")];
  return (
    (cog.id = bolt),
    cog.setAttribute("gradientUnits", "userSpaceOnUse"),
    cog.setAttribute("cx", String(disc.x + disc.width / 2)),
    cog.setAttribute("cy", String(disc.y + disc.height / 2)),
    cog.setAttribute("r", String(Math.hypot(disc.width / 2, disc.height / 2))),
    cog.append(...edge),
    {
      gradient: cog,
      stops: edge,
    }
  );
}
function falcon(forge, gear) {
  let hinge = or("stop");
  return (
    hinge.setAttribute("offset", forge),
    hinge.setAttribute("stop-color", "white"),
    hinge.setAttribute("stop-opacity", gear),
    hinge
  );
}
function $n(iron, joint) {
  let keystone = gamma(iron, `${joint.id}-mask`),
    latch = harbor(iron);
  return (
    latch.setAttribute("fill", `url(#${joint.id})`),
    keystone.appendChild(latch),
    keystone
  );
}
function gamma(motor, nut) {
  let piston = or("mask"),
    rivet = motor.viewBox.baseVal;
  return (
    (piston.id = nut),
    piston.setAttribute("maskUnits", "userSpaceOnUse"),
    piston.setAttribute("x", String(rivet.x)),
    piston.setAttribute("y", String(rivet.y)),
    piston.setAttribute("width", String(rivet.width)),
    piston.setAttribute("height", String(rivet.height)),
    piston
  );
}
function harbor(screw) {
  let torque = or("rect"),
    valve = screw.viewBox.baseVal;
  return (
    torque.setAttribute("x", String(valve.x)),
    torque.setAttribute("y", String(valve.y)),
    torque.setAttribute("width", String(valve.width)),
    torque.setAttribute("height", String(valve.height)),
    torque
  );
}
function indigo(axle, bracket, clamp, drill, engine) {
  let frame = or("use");
  return (
    frame.setAttribute("href", `#${axle}`),
    frame.setAttribute("fill", bracket),
    frame.setAttribute("opacity", clamp),
    frame.setAttribute("pointer-events", "none"),
    drill != null && frame.setAttribute("mask", `url(#${drill})`),
    engine != null &&
      (frame.setAttribute("stroke", bracket),
      frame.setAttribute("stroke-width", String(engine))),
    frame
  );
}
function jade(gasket, handle, insert) {
  gasket.gradient.setAttribute("cx", String(handle.x));
  gasket.gradient.setAttribute("cy", String(handle.y));
  gasket.maskRect.setAttribute("opacity", String(insert));
}
function kite(jacket, knurl) {
  jacket.current = null;
  jacket.lastSampledAt = 0;
  jacket.trail.length = 0;
  knurl?.brushOverlay.setAttribute("opacity", "0");
}
function lemon(lever, mount) {
  if (mount.defs.parentNode === lever) {
    for (let { fill, path } of mount.originalPathFills) {
      fill == null
        ? path.removeAttribute("fill")
        : path.setAttribute("fill", fill);
      lever.insertBefore(path, mount.baseOverlay);
    }
    mount.baseOverlay.remove();
    mount.brushOverlay.remove();
    mount.rippleOverlay.remove();
    mount.defs.remove();
  }
}
function or(nozzle) {
  return document.createElementNS(willow, nozzle);
}
var marble,
  nickel,
  onyx,
  pearl,
  quartz,
  river,
  slate,
  timber,
  umbra,
  violet,
  willow,
  _r = esmInit(() => {
    marble = commonJsInit(react(), 1);
    ensureClientCoordinationServiceInit();
    nickel = 72;
    onyx = 1;
    pearl = 720;
    quartz = 8;
    river = 0.75;
    slate = 55;
    timber = 760;
    umbra = 1.4;
    violet = 42;
    willow = "http://www.w3.org/2000/svg";
  });
export function Xenon(platen: any) {
  let { onArtworkReady, ref, svgMarkup } = platen,
    ratchet = {
      onArtworkReady,
      svgMarkup,
    };
  let { clearPaint, paintDots, rootRef, triggerRipple } = alpha(ratchet),
    shim,
    tappet;
  shim = () => ({
    triggerRipple,
  });
  tappet = [triggerRipple];
  zinc.useImperativeHandle(ref, shim, tappet);
  let arbor = {
    __html: svgMarkup,
  };
  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="interactive-dots absolute inset-0 h-full w-full text-token-text-primary"
      onPointerLeave={clearPaint}
      onPointerMove={paintDots}
      dangerouslySetInnerHTML={arbor}
    />
  );
}
var yellow, zinc, amber;
export var basalt = esmInit(() => {
  yellow = reactCompilerRuntime();
  zinc = commonJsInit(react(), 1);
  _r();
  amber = getJsxRuntime();
});
