// Restored from ref/webview/assets/thread-user-message-navigation-rail-DUbKEIeX.js
// Wave FZ — full polished body from `thread-user-message-navigation-rail-DUbKEIeX/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 19 (verified 58/76).
// Careful split: module + bridges
/* split-lane-import-depth:1 */
// Split 2/2: navigation rail component + module init.

import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexSourcesSectionType } from "../../analytics/codex-sources-section-type";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
  reactDom,
} from "../../boundaries/react-cjs-runtime";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { useEventCallback } from "../../hooks/use-event-callback";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { cx } from "../../ui/cx";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { motion } from "../../vendor/framer-motion";
import findLastIndex from "lodash/findLastIndex";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { getNullKeyedMapValue } from "../../utils/get-null-keyed-map-value";
import {
  initThreadScrollControllerContext,
  useThreadScrollController,
} from "../thread-scroll-controller-context";
import {
  ThreadUserMessageNavigationRailHelper1,
  timber,
} from "./navigation-rail-tooltip-preview";

/** Wave FZ unresolved companion (jsx-collision:browserTabIdsForMapKey@browser/browser-tab-ids-for-map-key.ts) */
const AppInitialCZ: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-x9.ts) */
const deferredUiX9: any = undefined;
var umbra,
  violet,
  willow,
  xenon,
  yellow = esmInit(() => {
    umbra = "_marker_fmcrx_1";
    violet = "_row_fmcrx_22";
    willow = "_railList_fmcrx_47";
    xenon = {
      marker: umbra,
      row: violet,
      railList: willow,
    };
  });
export function ThreadUserMessageNavigationRailIcon(grove: unknown) {
  let { items, onRevealItem } = grove;
  if (items.length < kelp) return null;
  return (
    <$e
      {...{
        items,
        onRevealItem,
      }}
    />
  );
}
function $e(hill) {
  let { items, onRevealItem } = hill,
    { getScrollElement } = useThreadScrollController(),
    isle = ivory.useContext(getNullKeyedMapValue),
    juniper = CodexPluginActionResult(deferredUiX9),
    lagoon = items.at(-1)?.id ?? null,
    meadow = () => new Set(lagoon == null ? [] : [lagoon]);
  let [nest, oak] = ivory.useState(meadow),
    [petal, quiet] = ivory.useState(false),
    [rain, seed] = ivory.useState(null),
    [trail, urn] = ivory.useState(null),
    [vine, wind] = ivory.useState(false),
    [yarrow, azure] = ivory.useState(false),
    [birch, canyon] = ivory.useState(null),
    dew = ivory.useRef(null),
    ever = ivory.useRef(null),
    field = ivory.useRef(false),
    grain = ivory.useId(),
    haven = useIntl(),
    ink = usePrefersReducedMotion(),
    jadeite = items.map(zinc).join("\0");
  let kernel = jadeite,
    leaf = items.find((item) => nest.has(item.id))?.id ?? lagoon;
  let maple = leaf,
    nimbus = () => {
      ever.current ?? basalt(dew.current, maple);
    };
  let opal = ivory.useEffectEvent(nimbus),
    plume = async (updraft, verge) => {
      let weir = getScrollElement();
      if (weir == null) return;
      let yard = amber(weir, updraft.id);
      if (yard == null && onRevealItem != null) {
        await onRevealItem(updraft);
        yard = amber(weir, updraft.id);
        at(yard, ink);
        return;
      }
      yard?.scrollIntoView({
        behavior: verge,
        block: "start",
      });
      at(yard, ink);
    };
  let quillow = useEventCallback(plume),
    silk = (anchor) => (
      juniper.logProductEvent(CodexSourcesSectionType, {}),
      quillow(anchor, "smooth")
    );
  let thorn = silk,
    upland = (event) => {
      let bolt = ever.current;
      bolt?.pointerId === event.pointerId &&
        ((ever.current = null),
        seed(null),
        bolt.pointerCaptureTarget.hasPointerCapture?.(event.pointerId) &&
          bolt.pointerCaptureTarget.releasePointerCapture?.(event.pointerId),
        petal || (urn(null), wind(false)),
        window.setTimeout(() => {
          field.current = false;
        }, 0));
    };
  let vista = useEventCallback(upland),
    wisp = () => {
      let cog = getScrollElement(),
        disc =
          cog?.querySelector('[data-mcp-app-portal-target="true"]') ?? null;
      if (cog == null || disc == null) return;
      let edge = null,
        forge = () => {
          edge ??= window.requestAnimationFrame(() => {
            edge = null;
            canyon(cog.parentElement);
            let iron = cog.getBoundingClientRect(),
              joint = disc.getBoundingClientRect(),
              keystone = cog.offsetWidth > 0 ? iron.width / cog.offsetWidth : 1,
              latch = (joint.left - iron.left) / (keystone > 0 ? keystone : 1);
            azure(latch >= 48);
            opal();
          });
        },
        gear = new ResizeObserver(forge);
      gear.observe(cog);
      gear.observe(disc);
      let hinge = new MutationObserver(forge);
      return (
        hinge.observe(cog.firstElementChild ?? cog, {
          attributes: true,
          attributeFilter: ["style"],
        }),
        window.addEventListener("resize", forge),
        forge(),
        () => {
          edge != null && window.cancelAnimationFrame(edge);
          gear.disconnect();
          hinge.disconnect();
          window.removeEventListener("resize", forge);
        }
      );
    };
  let yonder;
  yonder = [getScrollElement];
  ivory.useEffect(wisp, yonder);
  let zenith, _e;
  zenith = () => {
    let motor = getScrollElement();
    if (motor == null || typeof IntersectionObserver > "u") return;
    let nut = new Set(),
      piston = new Map(),
      rivet = new Set(),
      screw = kernel.length === 0 ? [] : kernel.split("\0"),
      torque = new Set(screw),
      valve = () => {
        let drill = screw.findIndex((item) => nut.has(item));
        if (drill === -1) return;
        let engine = hazel.default(screw, (gasket) => nut.has(gasket)),
          frame = new Set(screw.slice(drill, engine + 1));
        oak((handle) =>
          handle.size === frame.size &&
          [...handle].every((item) => frame.has(item))
            ? handle
            : frame,
        );
      },
      axle = new IntersectionObserver(
        (insert) => {
          for (let jacket of insert) {
            if (!(jacket.target instanceof HTMLElement)) continue;
            let knurl = piston.get(jacket.target);
            knurl != null &&
              (jacket.isIntersecting ? nut.add(knurl) : nut.delete(knurl));
          }
          valve();
        },
        {
          root: motor,
          rootMargin: `-${lotus}px 0px 0px 0px`,
        },
      ),
      bracket = () => {
        let lever = new Set();
        for (let mount of motor.querySelectorAll(
          "[data-content-search-unit-key]",
        )) {
          let nozzle = mount.dataset.contentSearchUnitKey;
          if (nozzle == null || !torque.has(nozzle)) continue;
          let platen = mount.closest(mint),
            ratchet = platen == null || lever.has(platen) ? mount : platen;
          lever.add(ratchet);
          piston.set(ratchet, nozzle);
          rivet.has(ratchet) || (axle.observe(ratchet), rivet.add(ratchet));
        }
        for (let shim of rivet) {
          if (lever.has(shim)) continue;
          let tappet = piston.get(shim);
          tappet != null && nut.delete(tappet);
          piston.delete(shim);
          axle.unobserve(shim);
          rivet.delete(shim);
        }
        valve();
      },
      clamp = new MutationObserver((arbor) => {
        ember(arbor) && bracket();
      });
    return (
      clamp.observe(motor, {
        childList: true,
        subtree: true,
      }),
      bracket(),
      () => {
        clamp.disconnect();
        axle.disconnect();
      }
    );
  };
  _e = [getScrollElement, kernel];
  ivory.useEffect(zenith, _e);
  let be = () => {
    rain ?? basalt(dew.current, maple);
  };
  let anvil;
  if (
    ((anvil = [maple, yarrow, rain]),
    ivory.useLayoutEffect(be, anvil),
    !yarrow || birch == null || typeof document > "u")
  )
    return null;
  let beacon = haven.formatMessage({
    id: "thread.userMessageNavigation.ariaLabel",
    defaultMessage: "User messages",
    description:
      "Aria label for the floating thread navigation rail that jumps between user messages",
  });
  let crag = {
    opacity: 1,
  };
  let dome = {
    opacity: 0,
  };
  let eddy = ink
    ? {
        duration: 0,
      }
    : {
        duration: 0.15,
        ease: [0.23, 1, 0.32, 1],
      };
  let fjord = (bushing) => {
    (!bushing && ever.current != null) || (wind(bushing), bushing || urn(null));
  };
  let glen = trail?.button,
    hearth = trail?.item ?? items[0],
    inlet = (
      <ThreadUserMessageNavigationRailHelper1
        {...{
          item: hearth,
        }}
      />
    );
  let jetty = rain == null ? undefined : true,
    knob = cx(
      xenon.railList,
      "vertical-scroll-fade-mask hide-scrollbar flex max-h-[min(70vh,40rem)] flex-col overflow-y-auto overscroll-contain [--edge-fade-distance:2.5rem]",
    );
  let ledge = (event) => {
    if (event.button !== 0) return;
    let collar = daisy(
      items,
      event.currentTarget,
      event.target instanceof Element ? event.target : null,
    );
    collar != null &&
      ((field.current = false),
      quiet(true),
      (ever.current = {
        itemId: collar.item.id,
        pointerCaptureTarget: collar.button,
        pointerId: event.pointerId,
      }),
      seed(collar.item.id),
      urn(collar),
      wind(true),
      collar.button.setPointerCapture?.(event.pointerId));
  };
  let mire, nook;
  mire = () => {
    quiet(true);
  };
  nook = () => {
    quiet(false);
    ever.current ?? urn(null);
  };
  let oxbow = (event) => {
    let dowel = ever.current;
    if (dowel == null) {
      let hub = daisy(
        items,
        event.currentTarget,
        event.target instanceof Element ? event.target : null,
      );
      hub != null &&
        urn((idler) => (idler?.item.id === hub.item.id ? idler : hub));
      return;
    }
    if (dowel.pointerId !== event.pointerId) return;
    if (event.buttons % 2 == 0) {
      vista(event);
      return;
    }
    let flange = event.currentTarget.getBoundingClientRect(),
      gib = daisy(
        items,
        event.currentTarget,
        document.elementFromPoint(
          flange.left + flange.width / 2,
          Math.max(flange.top, Math.min(event.clientY, flange.bottom - 1)),
        ),
      );
    gib == null ||
      gib.item.id === dowel.itemId ||
      ((ever.current = {
        ...dowel,
        itemId: gib.item.id,
      }),
      seed(gib.item.id),
      urn(gib),
      (field.current = true),
      quillow(gib.item, "instant"));
  };
  let pond = items.map((item, index) => (
    <button
      key={item.id}
      data-thread-user-message-navigation-item-id={item.id}
      data-scrub-target={rain === item.id ? true : undefined}
      aria-current={nest.has(item.id) ? "true" : undefined}
      aria-describedby={vine && trail?.item.id === item.id ? grain : undefined}
      aria-label={haven.formatMessage(
        {
          id: "thread.userMessageNavigation.jumpAriaLabel",
          defaultMessage: "Jump to user message {position}",
          description:
            "Aria label for a row in the floating thread user-message navigation rail",
        },
        {
          position: index + 1,
        },
      )}
      className={cx(
        xenon.row,
        "group/navigation-row flex h-2.5 w-9 shrink-0 cursor-interaction items-center outline-none",
      )}
      type="button"
      onClick={(event) => {
        if (field.current) {
          field.current = false;
          return;
        }
        urn({
          button: event.currentTarget,
          item,
        });
        wind(true);
        thorn(item);
      }}
      onFocus={(event) => {
        urn({
          button: event.currentTarget,
          item,
        });
        wind(true);
      }}
    >
      <span className="flex h-0.5 w-[30px] items-center">
        <span
          className={cx(
            xenon.marker,
            "h-0.5 bg-token-description-foreground opacity-40 group-focus-visible/navigation-row:bg-token-foreground group-focus-visible/navigation-row:opacity-100",
            rain == null &&
              "group-hover/navigation-row:bg-token-foreground group-hover/navigation-row:opacity-100",
            nest.has(item.id) &&
              rain !== item.id &&
              "bg-token-foreground opacity-60",
            rain === item.id && "bg-token-foreground opacity-100",
          )}
        />
      </span>
    </button>
  ));
  let quarry = <div className="flex flex-col">{pond}</div>;
  let rapids = (
    <div
      ref={dew}
      data-thread-user-message-navigation-rail-list={true}
      data-scrubbing={jetty}
      className={knob}
      onLostPointerCapture={vista}
      onPointerCancelCapture={vista}
      onPointerDownCapture={ledge}
      onPointerEnter={mire}
      onPointerLeave={nook}
      onPointerMove={oxbow}
      onPointerUpCapture={vista}
    >
      {quarry}
    </div>
  );
  let spur = (
    <OptionalTooltip
      {...{
        align: "center",
        delayOpen: true,
        open: vine,
        onOpenChange: fjord,
        portalContainer: isle,
        positioningElement: glen,
        side: "right",
        sideOffset: 0,
        skipDelayKey: "thread-user-message-navigation",
        tooltipClassName: "!m-0 !z-20",
        tooltipId: grain,
        tooltipMaxWidth: "min(20rem, calc(100vw - 16px))",
        variant: "unstyled",
        tooltipContent: inlet,
        children: rapids,
      }}
    />
  );
  let tor = (
    <motion.nav
      {...{
        "aria-label": beacon,
        animate: crag,
        className:
          "absolute top-1/2 left-3 z-20 -translate-y-1/2 electron:left-4",
        initial: dome,
        transition: eddy,
        children: spur,
      }}
    />
  );
  return jasper.createPortal(tor, birch);
}
function zinc(jig) {
  return jig.id;
}
function amber(keeper, lug) {
  return keeper.querySelector(`[data-content-search-unit-key="${flint(lug)}"]`);
}
function basalt(mandrel, nipple) {
  if (mandrel == null) return;
  let orifice = cedar(mandrel, nipple);
  orifice != null &&
    (orifice.offsetTop < mandrel.scrollTop
      ? (mandrel.scrollTop = orifice.offsetTop)
      : orifice.offsetTop + orifice.offsetHeight >
          mandrel.scrollTop + mandrel.clientHeight &&
        (mandrel.scrollTop =
          orifice.offsetTop + orifice.offsetHeight - mandrel.clientHeight + 1));
}
function cedar(pin, race) {
  return race == null || pin == null
    ? null
    : pin.querySelector(
        `[data-thread-user-message-navigation-item-id="${flint(race)}"]`,
      );
}
function daisy(sleeve, trunnion, boss) {
  let cam = boss?.closest("[data-thread-user-message-navigation-item-id]");
  if (cam == null || !trunnion.contains(cam)) return null;
  let detent = sleeve.find(
    (item) => item.id === cam.dataset.threadUserMessageNavigationItemId,
  );
  return detent == null
    ? null
    : {
        button: cam,
        item: detent,
      };
}
function at(eccentric, follower) {
  (
    eccentric?.querySelector("[data-user-message-bubble]") ??
    eccentric?.querySelector("[data-composer-attachment-pill]")
  )?.animate?.(
    [
      {
        backgroundColor: nova,
      },
      {
        backgroundColor: nova,
        offset: 0.35,
      },
      {
        backgroundColor: olive,
      },
    ],
    {
      duration: follower ? 0 : 1400,
      easing: "cubic-bezier(0.23, 1, 0.32, 1)",
    },
  );
}
function ember(guide) {
  return guide.some((item) =>
    [...item.addedNodes, ...item.removedNodes].some(
      (_item) =>
        _item instanceof HTMLElement &&
        (_item.matches(mint) || _item.querySelector(mint) != null),
    ),
  );
}
function flint(helix) {
  return typeof CSS < "u" && CSS.escape != null
    ? CSS.escape(helix)
    : helix.replace(/"/g, '\\"');
}
var garnet, hazel, ivory, jasper, $, kelp, lotus, mint, nova, olive;
esmInit(() => {
  garnet = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_Tft_Init();
  useBrowserExtensionPluginSetupQuery();
  hazel = commonJsInit(() => ({ default: findLastIndex }), 1);
  ensureComposerEsm_MT_Init();
  ivory = commonJsInit(react(), 1);
  jasper = commonJsInit(reactDom(), 1);
  ensureIntlFormattersInit();
  AppInitialCZ();
  ensureComposerEsm_Hlt_Init();
  ensureClientCoordinationServiceInit();
  ensureComposerEsm_K9_Init();
  ensureDropdownMenuPopoverInit();
  initThreadScrollControllerContext();
  timber();
  yellow();
  kelp = 4;
  lotus = 16;
  mint = "[data-turn-key], [data-content-search-turn-key]";
  nova = "color-mix(in srgb, var(--color-token-foreground) 14%, transparent)";
  olive = "color-mix(in srgb, var(--color-token-foreground) 5%, transparent)";
})();
