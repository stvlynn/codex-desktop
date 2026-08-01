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
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
import { createPersistedAtom, ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL } from "../../docs/codex-doc-urls";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { MOBILE_MFA_SETUP_FEATURE_GATE_ID, REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { ensureUseHomeDirectoryInit, useHomeDirectory } from "../../hooks/use-home-directory";
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
import { ensureSvgToDataUriInit, svgToDataUri } from "../../utils/svg-to-data-uri";

/** split companion stub */
const hazelFourth: any = undefined;
/** split companion stub */
const marbleFourth: any = undefined;
/** split companion stub */
const novaFourth: any = undefined;
/** split companion stub */
const topazFourth: any = undefined;
/** split companion stub */
const xenonFourth: any = undefined;

/** split companion stub */
const IntlProvider: any = undefined;
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
function alpha({
  onArtworkReady,
  svgMarkup
}) {
  let juniper = usePrefersReducedMotion(),
    lagoon = marble.useId().replaceAll(":", ""),
    meadow = marble.useRef(null),
    nest = marble.useRef(null),
    oak = marble.useRef(null),
    petal = marble.useRef({
      current: null,
      lastSampledAt: 0,
      trail: []
    }),
    quiet = marble.useRef(null),
    rain = marble.useRef(null),
    seed = marble.useRef(null),
    urn = marble.useCallback(function canyon(birch) {
      let dew = oak.current,
        ever = nest.current,
        field = quiet.current;
      if (quiet.current = null, dew != null && ever != null && field != null) {
        let haven = ever.createSVGPoint();
        haven.x = field.x;
        haven.y = field.y;
        let ink = ever.getScreenCTM();
        if (ink != null) {
          let jadeite = haven.matrixTransform(ink.inverse()),
            kernel = petal.current;
          kernel.current != null && birch - kernel.lastSampledAt >= slate ? (kernel.trail.unshift({
            sampledAt: birch,
            x: kernel.current.x,
            y: kernel.current.y
          }), kernel.trail.length > quartz && kernel.trail.pop(), kernel.lastSampledAt = birch) : kernel.current ?? (kernel.lastSampledAt = birch);
          kernel.current = jadeite;
          jade(dew.brushSpot, jadeite, 1);
          dew.brushOverlay.setAttribute("opacity", "1");
        }
      }
      if (dew != null) {
        let leaf = petal.current.trail;
        for (; leaf.length > 0 && birch - leaf[leaf.length - 1].sampledAt >= pearl;) leaf.pop();
        for (let [maple, nimbus] of dew.trailSpots.entries()) {
          let opal = leaf[maple];
          if (opal == null) {
            nimbus.maskRect.setAttribute("opacity", "0");
            continue;
          }
          jade(nimbus, opal, (1 - (birch - opal.sampledAt) / pearl) * (1 - maple / quartz) * river);
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
        plume >= 1 && (seed.current = null, dew.rippleOverlay.setAttribute("opacity", "0"));
      }
      rain.current = seed.current != null || quiet.current != null || dew != null && petal.current.trail.length > 0 ? requestAnimationFrame(canyon) : null;
    }, []),
    vine = marble.useCallback(() => {
      rain.current ??= requestAnimationFrame(urn);
    }, [urn]);
  marble.useEffect(() => {
    juniper && (seed.current = null, quiet.current = null, kite(petal.current, oak.current), oak.current?.rippleOverlay.setAttribute("opacity", "0"), rain.current != null && (cancelAnimationFrame(rain.current), rain.current = null));
  }, [juniper]);
  marble.useEffect(() => {
    let wisp = meadow.current?.querySelector("svg");
    if (wisp == null) return;
    let yonder = petal.current,
      zenith = bravo(wisp, lagoon);
    return nest.current = wisp, oak.current = zenith, quiet.current = null, kite(yonder, zenith), onArtworkReady?.(), () => {
      nest.current = null;
      oak.current = null;
      seed.current = null;
      quiet.current = null;
      kite(yonder, null);
      rain.current != null && (cancelAnimationFrame(rain.current), rain.current = null);
      lemon(wisp, zenith);
    };
  }, [onArtworkReady, lagoon, svgMarkup]);
  let wind = marble.useCallback(() => {
    if (juniper) return;
    let anvil = nest.current;
    if (anvil == null) return;
    let beacon = anvil.viewBox.baseVal;
    seed.current = {
      maxRadius: Math.hypot(beacon.width / 2, beacon.height / 2),
      startedAt: performance.now()
    };
    vine();
  }, [vine, juniper]);
  function yarrow(event) {
    juniper || (quiet.current = {
      x: event.clientX,
      y: event.clientY
    }, vine());
  }
  function azure() {
    quiet.current = null;
    kite(petal.current, oak.current);
  }
  return {
    clearPaint: azure,
    paintDots: yarrow,
    rootRef: meadow,
    triggerRipple: wind
  };
}
function bravo(crag, dome) {
  let eddy = or("g"),
    fjord = `interactive-dots-${dome}`;
  eddy.id = fjord;
  let glen = Array.from(crag.querySelectorAll(":scope > path")).map(item => {
      let pond = item.getAttribute("fill");
      return item.removeAttribute("fill"), eddy.appendChild(item), {
        fill: pond,
        path: item
      };
    }),
    hearth = or("defs"),
    inlet = copper(crag, `interactive-brush-${dome}`),
    jetty = Array.from({
      length: quartz
    }, (quarry, rapids) => copper(crag, `interactive-brush-trail-${rapids}-${dome}`)),
    knob = gamma(crag, `interactive-brush-${dome}-mask`);
  knob.append(inlet.maskRect, ...jetty.map(({
    maskRect
  }) => maskRect));
  let {
      gradient,
      stops
    } = echo(crag, `interactive-ripple-${dome}`),
    ledge = $n(crag, gradient);
  hearth.append(eddy, inlet.gradient, ...jetty.map(({
    gradient: _gradient
  }) => _gradient), knob, gradient, ledge);
  crag.prepend(hearth);
  let mire = indigo(fjord, "currentColor", "1"),
    nook = indigo(fjord, "var(--color-token-charts-blue)", "0", knob.id, onyx),
    oxbow = indigo(fjord, "var(--color-token-charts-blue)", "0", ledge.id, umbra);
  return crag.append(mire, nook, oxbow), {
    baseOverlay: mire,
    brushOverlay: nook,
    brushSpot: inlet,
    defs: hearth,
    originalPathFills: glen,
    rippleOverlay: oxbow,
    rippleStops: stops,
    trailSpots: jetty
  };
}
function copper(spur, tor) {
  let updraft = delta(tor),
    verge = harbor(spur);
  return verge.setAttribute("fill", `url(#${updraft.id})`), verge.setAttribute("opacity", "0"), {
    gradient: updraft,
    maskRect: verge
  };
}
function delta(weir) {
  let yard = or("radialGradient");
  return yard.id = weir, yard.setAttribute("gradientUnits", "userSpaceOnUse"), yard.setAttribute("cx", "-72"), yard.setAttribute("cy", "-72"), yard.setAttribute("r", String(nickel)), yard.append(falcon("0", "1"), falcon("0.58", "0.61"), falcon("0.99", "0.23"), falcon("1", "0")), yard;
}
function echo(anchor, bolt) {
  let cog = or("radialGradient"),
    disc = anchor.viewBox.baseVal,
    edge = [falcon("0", "0"), falcon("0", "1"), falcon("0", "0")];
  return cog.id = bolt, cog.setAttribute("gradientUnits", "userSpaceOnUse"), cog.setAttribute("cx", String(disc.x + disc.width / 2)), cog.setAttribute("cy", String(disc.y + disc.height / 2)), cog.setAttribute("r", String(Math.hypot(disc.width / 2, disc.height / 2))), cog.append(...edge), {
    gradient: cog,
    stops: edge
  };
}
function falcon(forge, gear) {
  let hinge = or("stop");
  return hinge.setAttribute("offset", forge), hinge.setAttribute("stop-color", "white"), hinge.setAttribute("stop-opacity", gear), hinge;
}
function $n(iron, joint) {
  let keystone = gamma(iron, `${joint.id}-mask`),
    latch = harbor(iron);
  return latch.setAttribute("fill", `url(#${joint.id})`), keystone.appendChild(latch), keystone;
}
function gamma(motor, nut) {
  let piston = or("mask"),
    rivet = motor.viewBox.baseVal;
  return piston.id = nut, piston.setAttribute("maskUnits", "userSpaceOnUse"), piston.setAttribute("x", String(rivet.x)), piston.setAttribute("y", String(rivet.y)), piston.setAttribute("width", String(rivet.width)), piston.setAttribute("height", String(rivet.height)), piston;
}
function harbor(screw) {
  let torque = or("rect"),
    valve = screw.viewBox.baseVal;
  return torque.setAttribute("x", String(valve.x)), torque.setAttribute("y", String(valve.y)), torque.setAttribute("width", String(valve.width)), torque.setAttribute("height", String(valve.height)), torque;
}
function indigo(axle, bracket, clamp, drill, engine) {
  let frame = or("use");
  return frame.setAttribute("href", `#${axle}`), frame.setAttribute("fill", bracket), frame.setAttribute("opacity", clamp), frame.setAttribute("pointer-events", "none"), drill != null && frame.setAttribute("mask", `url(#${drill})`), engine != null && (frame.setAttribute("stroke", bracket), frame.setAttribute("stroke-width", String(engine))), frame;
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
    for (let {
      fill,
      path
    } of mount.originalPathFills) {
      fill == null ? path.removeAttribute("fill") : path.setAttribute("fill", fill);
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
function Xenon(platen) {
  let {
      onArtworkReady,
      ref,
      svgMarkup
    } = platen,
    ratchet = {
      onArtworkReady,
      svgMarkup
    };
  let {
      clearPaint,
      paintDots,
      rootRef,
      triggerRipple
    } = alpha(ratchet),
    shim,
    tappet;
  shim = () => ({
    triggerRipple
  });
  tappet = [triggerRipple];
  zinc.useImperativeHandle(ref, shim, tappet);
  let arbor = {
    __html: svgMarkup
  };
  return <div ref={rootRef} aria-hidden="true" className="interactive-dots absolute inset-0 h-full w-full text-token-text-primary" onPointerLeave={clearPaint} onPointerMove={paintDots} dangerouslySetInnerHTML={arbor} />;
}
var yellow,
  zinc,
  amber,
  basalt = esmInit(() => {
    yellow = reactCompilerRuntime();
    zinc = commonJsInit(react(), 1);
    _r();
    amber = getJsxRuntime();
  }),
  cedar,
  daisy = esmInit(() => {
    cedar = "" + new URL("codex-home-hero-dark-still-43PvFxTG.png", import.meta.url).href;
  }),
  ember,
  flint = esmInit(() => {
    ember = "" + new URL("codex-home-hero-dark-_BGDEdk8.mp4", import.meta.url).href;
  }),
  garnet,
  hazel = esmInit(() => {
    garnet = "" + new URL("codex-home-hero-light-still-CQ7cy4qg.png", import.meta.url).href;
  }),
  ivory,
  jasper = esmInit(() => {
    ivory = "" + new URL("codex-home-hero-light-Cyip34F2.mp4", import.meta.url).href;
  }),
  kelp,
  lotus = esmInit(() => {
    kelp = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.80156 -4.86374e-05C6.69258 0.000117442 7.50897 0.323687 8.13906 0.857764C8.34796 0.820083 8.56404 0.799179 8.78359 0.79917C10.781 0.799774 12.4005 2.41954 12.4008 4.41714C12.4007 4.6366 12.3791 4.85173 12.3414 5.06011C12.8758 5.69048 13.1999 6.50778 13.2 7.39917C13.1997 8.96866 12.1997 10.3027 10.8039 10.8039C10.3028 12.1998 8.96867 13.1997 7.39922 13.2C6.50789 13.1999 5.69129 12.8758 5.06094 12.3414C4.8524 12.3791 4.63674 12.4007 4.41719 12.4007C2.41956 12.4005 0.80032 10.7805 0.8 8.78276C0.800026 8.56309 0.820863 8.34776 0.858594 8.13901C0.361897 7.55298 0.0471584 6.80587 0.00546875 5.98745L0 5.80073C0.000176183 4.23141 0.999616 2.89589 2.39531 2.39448C2.89683 0.998761 4.23227 -3.48408e-05 5.80156 -4.86374e-05Z\" fill=\"white\"/>\n</svg>\n";
  });
function Mint(bushing) {
  let {
      ariaLabel,
      className,
      onClick
    } = bushing,
    collar = usePrefersReducedMotion(),
    dowel = prism.useRef(null),
    flange = useIsDarkAppearance() === true,
    [gib, hub] = prism.useState(null),
    idler = flange ? "dark" : "light",
    {
      stillSrc,
      videoSrc
    } = reef[idler],
    jig = () => {
      let boss = dowel.current;
      boss != null && (boss.pause(), boss.currentTime = 0);
    };
  let keeper = jig,
    lug = () => {
      if (collar || gib === idler) return;
      let cam = dowel.current;
      cam != null && cam.paused && (cam.currentTime = 0, cam.play()?.catch(nova));
    };
  let mandrel = lug,
    nipple = IntlProvider("size-full shrink-0 object-contain", className);
  let orifice = nipple;
  if (collar || gib === idler) {
    let detent = IntlProvider("cursor-interaction overflow-hidden", className);
    let eccentric = <img alt="" aria-hidden="true" className={orifice} src={stillSrc} />;
    let follower;
    return <button type="button" aria-label={ariaLabel} className={detent} style={topaz} onClick={onClick}>{eccentric}</button>;
  }
  let pin = IntlProvider("cursor-interaction overflow-hidden", className);
  let race = event => {
    event.pointerType === "mouse" && mandrel();
  };
  let sleeve = () => {
    hub(idler);
  };
  let trunnion = <video key={idler} ref={dowel} aria-hidden="true" className={orifice} muted={true} playsInline={true} poster={stillSrc} preload="auto" src={videoSrc} onPointerEnter={race} onEnded={keeper} onError={sleeve} />;
  return <button type="button" aria-label={ariaLabel} className={pin} style={topaz} onClick={onClick}>{trunnion}</button>;
}
function nova() {}
var olive,
  prism,
  quill,
  reef,
  sage,
  topaz,
  ultra = esmInit(() => {
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
        videoSrc: ember
      },
      light: {
        stillSrc: garnet,
        videoSrc: ivory
      }
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
      WebkitMaskSize: "90% 90%"
    };
  });
function vapor(guide) {
  let helix = acorn.get(guide);
  if (helix != null) return helix;
  let impeller = fetch(guide).then(value => {
    if (!value.ok) throw Error("Failed to load QR dots artwork.");
    return value.text();
  });
  return acorn.set(guide, impeller), impeller;
}
function wheat(journal) {
  let kingpin = {
    markup: "",
    src: journal
  };
  let [land, mesh] = zephyr.useState(kingpin),
    neck,
    pad;
  return neck = () => {
    let quillshaft = true;
    return vapor(journal).then(value => {
      quillshaft && mesh({
        markup: value,
        src: journal
      });
    }).catch(() => {
      acorn.delete(journal);
    }), () => {
      quillshaft = false;
    };
  }, pad = [journal], zephyr.useEffect(neck, pad), land.src === journal ? land.markup : "";
}
var yarn,
  zephyr,
  acorn,
  bloom = esmInit(() => {
    yarn = reactCompilerRuntime();
    zephyr = commonJsInit(react(), 1);
    acorn = new Map();
  });
function coral(roller) {
  let {
    ariaLabel,
    centerLogoAriaLabel,
    fullscreen = false,
    pairingCode,
    platform,
    size = "default"
  } = roller;
  if (pairingCode != null) {
    let spindle;
    return <Drift ariaLabel={ariaLabel} centerLogoAriaLabel={centerLogoAriaLabel} fullscreen={fullscreen} pairingCode={pairingCode} size={size} />;
  }
  return <Frost ariaLabel={ariaLabel} centerLogoAriaLabel={centerLogoAriaLabel} platform={platform} size={size} />;
}
function Drift(thrust) {
  let {
      ariaLabel,
      centerLogoAriaLabel,
      fullscreen,
      pairingCode,
      size = "default"
    } = thrust,
    yoke;
  {
    let capstan = new URL("https://chatgpt.com/codex/pair");
    capstan.searchParams.set("pairing_code", pairingCode);
    yoke = iris(capstan.toString(), fullscreen ? "L" : "M", !fullscreen);
  }
  let baffle = yoke;
  if (fullscreen) {
    let diaphragm;
    return <Eagle ariaLabel={ariaLabel} {...baffle} />;
  }
  return <Honey ariaLabel={ariaLabel} centerLogoAriaLabel={centerLogoAriaLabel} size={size} {...baffle} />;
}
function Eagle(elbow) {
  let {
      ariaLabel,
      cornersMarkup,
      dotsMarkup
    } = elbow,
    ferrule = <div aria-hidden="true" className={"absolute inset-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full"} dangerouslySetInnerHTML={{
      __html: cornersMarkup
    }} />;
  let grommet = <div aria-hidden="true" className={"absolute inset-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full"} dangerouslySetInnerHTML={{
    __html: dotsMarkup
  }} />;
  return <div aria-label={ariaLabel} className="relative size-[min(640px,calc(100vw-48px),calc(100dvh-96px))] overflow-hidden rounded-[48px] bg-token-dropdown-background text-token-text-primary" role="img">{ferrule}{grommet}</div>;
}
function Frost(header) {
  let {
    ariaLabel,
    centerLogoAriaLabel,
    platform,
    size = "default"
  } = header;
  if (platform === "android") {
    let injector;
    return <Glide ariaLabel={ariaLabel} size={size} />;
  }
  return <DollarR ariaLabel={ariaLabel} centerLogoAriaLabel={centerLogoAriaLabel} size={size} />;
}
function Glide(jumper) {
  let {
      ariaLabel,
      size
    } = jumper,
    kerf = size === "compact" ? "size-[180px] rounded-[24px]" : "size-[270px] rounded-[32px]",
    louver = IntlProvider("relative overflow-hidden bg-token-main-surface-primary", kerf);
  let manifold = <div aria-hidden="true" className={"h-full w-full text-token-text-primary [&>svg]:block [&>svg]:h-full [&>svg]:w-full"} dangerouslySetInnerHTML={{
    __html: xenonFourth
  }} />;
  return <div aria-label={ariaLabel} className={louver} role="img">{manifold}</div>;
}
function DollarR(nip) {
  let {
      ariaLabel,
      centerLogoAriaLabel,
      size
    } = nip,
    outlet = wheat(novaFourth.corners),
    packing = wheat(novaFourth.iosDots);
  return <Honey ariaLabel={ariaLabel} centerLogoAriaLabel={centerLogoAriaLabel} cornersMarkup={outlet} dotsMarkup={packing} size={size} />;
}
function Honey(reducer) {
  let {
      ariaLabel,
      centerLogoAriaLabel,
      cornersMarkup,
      dotsMarkup,
      size
    } = reducer,
    strainer = brook.useRef(null),
    tee = () => {
      strainer.current?.triggerRipple();
    };
  let union = tee,
    vent = size === "compact" ? "size-[180px] rounded-[24px]" : "size-[270px] rounded-[32px]",
    wye = IntlProvider("relative overflow-hidden bg-token-main-surface-primary", vent);
  let zener = <div aria-hidden="true" className="mobile-qr-corners pointer-events-none absolute inset-0 z-10 h-full w-full text-token-text-primary" dangerouslySetInnerHTML={{
    __html: cornersMarkup
  }} />;
  let alphaPrime = <Xenon ref={strainer} onArtworkReady={union} svgMarkup={dotsMarkup} />;
  let bravoPrime = size === "compact" ? "w-10" : "w-14",
    copperPrime = IntlProvider("pointer-events-auto aspect-square", bravoPrime);
  let deltaPrime = <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center">{<Mint ariaLabel={centerLogoAriaLabel} className={copperPrime} onClick={union} />}</div>;
  return <div aria-label={ariaLabel} className={wye} role="img">{zener}{alphaPrime}{deltaPrime}</div>;
}
function iris(echoPrime, falconPrime, gammaPrime) {
  let harborPrime = apex.create(echoPrime, {
      errorCorrectionLevel: falconPrime
    }).modules,
    indigoPrime = _i / (harborPrime.size + grove * 2);
  return {
    cornersMarkup: knoll(harborPrime.size, indigoPrime),
    dotsMarkup: jewel(harborPrime, indigoPrime, gammaPrime)
  };
}
function jewel(jadePrime, kitePrime, lemonPrime) {
  let marblePrime = [];
  for (let nickelPrime = 0; nickelPrime < jadePrime.size; nickelPrime += 1) for (let onyxPrime = 0; onyxPrime < jadePrime.size; onyxPrime += 1) !ridge(jadePrime, nickelPrime, onyxPrime) || storm(jadePrime.size, nickelPrime, onyxPrime) || lemonPrime && ui(jadePrime.size, kitePrime, nickelPrime, onyxPrime) || marblePrime.push(moss(onyxPrime, kitePrime, nickelPrime));
  return orbit(marblePrime.join(""));
}
function knoll(pearlPrime, quartzPrime) {
  return orbit([lunar(0, 0, quartzPrime), lunar(pearlPrime - fern, 0, quartzPrime), lunar(0, pearlPrime - fern, quartzPrime)].join(""));
}
function lunar(riverPrime, slatePrime, timberPrime) {
  let umbraPrime = quest(riverPrime, timberPrime),
    violetPrime = quest(slatePrime, timberPrime),
    willowPrime = timberPrime * fern,
    xenonPrime = timberPrime,
    yellowPrime = timberPrime * 2;
  return `<path fill-rule="evenodd" clip-rule="evenodd" d="${north(umbraPrime, violetPrime, willowPrime, timberPrime * 1.6)} ${north(umbraPrime + xenonPrime, violetPrime + xenonPrime, willowPrime - xenonPrime * 2, timberPrime)}" fill="currentColor"/><rect x="${vale(umbraPrime + yellowPrime)}" y="${vale(violetPrime + yellowPrime)}" width="${vale(willowPrime - yellowPrime * 2)}" height="${vale(willowPrime - yellowPrime * 2)}" rx="${vale(timberPrime)}" fill="currentColor"/>`;
}
function moss(zincPrime, amberPrime, basaltPrime) {
  let cedarPrime = amberPrime * elm,
    daisyPrime = pine(zincPrime, amberPrime),
    emberPrime = pine(basaltPrime, amberPrime);
  return `<path d="M ${vale(daisyPrime)} ${vale(emberPrime - cedarPrime)} A ${vale(cedarPrime)} ${vale(cedarPrime)} 0 1 1 ${vale(daisyPrime)} ${vale(emberPrime + cedarPrime)} A ${vale(cedarPrime)} ${vale(cedarPrime)} 0 1 1 ${vale(daisyPrime)} ${vale(emberPrime - cedarPrime)} Z" fill="currentColor"/>`;
}
function north(flintPrime, garnetPrime, hazelPrime, ivoryPrime) {
  let jasperPrime = flintPrime + hazelPrime,
    kelpPrime = garnetPrime + hazelPrime;
  return `M ${vale(flintPrime + ivoryPrime)} ${vale(garnetPrime)} H ${vale(jasperPrime - ivoryPrime)} A ${vale(ivoryPrime)} ${vale(ivoryPrime)} 0 0 1 ${vale(jasperPrime)} ${vale(garnetPrime + ivoryPrime)} V ${vale(kelpPrime - ivoryPrime)} A ${vale(ivoryPrime)} ${vale(ivoryPrime)} 0 0 1 ${vale(jasperPrime - ivoryPrime)} ${vale(kelpPrime)} H ${vale(flintPrime + ivoryPrime)} A ${vale(ivoryPrime)} ${vale(ivoryPrime)} 0 0 1 ${vale(flintPrime)} ${vale(kelpPrime - ivoryPrime)} V ${vale(garnetPrime + ivoryPrime)} A ${vale(ivoryPrime)} ${vale(ivoryPrime)} 0 0 1 ${vale(flintPrime + ivoryPrime)} ${vale(garnetPrime)} Z`;
}
function orbit(lotusPrime) {
  return `<svg width="${_i}" height="${_i}" viewBox="0 0 ${_i} ${_i}" fill="none" xmlns="${hill}">${lotusPrime}</svg>`;
}
function pine(mintPrime, novaPrime) {
  return quest(mintPrime, novaPrime) + novaPrime / 2;
}
function quest(olivePrime, prismPrime) {
  return (olivePrime + grove) * prismPrime;
}
function ui(quillPrime, reefPrime, sagePrime, topazPrime) {
  let ultraPrime = (quillPrime - 1) / 2,
    vaporPrime = (unity(Math.ceil(dusk / reefPrime)) - 1) / 2;
  return Math.abs(sagePrime - ultraPrime) <= vaporPrime && Math.abs(topazPrime - ultraPrime) <= vaporPrime;
}
function ridge(wheatPrime, yarnPrime, zephyrPrime) {
  return wheatPrime.data[yarnPrime * wheatPrime.size + zephyrPrime] === 1;
}
function storm(acornPrime, bloomPrime, coralPrime) {
  return tide(bloomPrime, coralPrime, 0, 0) || tide(bloomPrime, coralPrime, 0, acornPrime - fern) || tide(bloomPrime, coralPrime, acornPrime - fern, 0);
}
function tide(driftPrime, eaglePrime, frostPrime, glidePrime) {
  return driftPrime >= frostPrime && driftPrime < frostPrime + fern && eaglePrime >= glidePrime && eaglePrime < glidePrime + fern;
}
function unity(honeyPrime) {
  return honeyPrime % 2 == 0 ? honeyPrime + 1 : honeyPrime;
}
function vale(irisPrime) {
  return Number(irisPrime.toFixed(4));
}
var wave,
  apex,
  brook,
  cliff,
  _i,
  dusk,
  elm,
  fern,
  grove,
  hill,
  isle = esmInit(() => {
    wave = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    apex = marbleFourth();
    brook = commonJsInit(react(), 1);
    hazelFourth();
    topazFourth();
    basalt();
    ultra();
    bloom();
    cliff = getJsxRuntime();
    _i = 330;
    dusk = 70;
    elm = 0.42;
    fern = 7;
    grove = 4;
    hill = "http://www.w3.org/2000/svg";
  });
