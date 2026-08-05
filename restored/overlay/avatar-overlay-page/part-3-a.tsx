// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 3/3
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { getPersistedAtomItem } from "../../boundaries/persisted-atom-store";
import { avatarOverlayMascotWidthStyle } from "../../desktop/avatar-overlay-mascot-size";

// Cross-part stubs (same-package helpers live in sibling parts).
export const $n: any = undefined;

export const AppInitialG: any = undefined;

export const AppInitialH: any = undefined;

export const AppInitialH9: any = undefined;

export const AppInitialHot: any = undefined;

export const AppInitialM9: any = undefined;

export const AppInitialMot: any = undefined;

export const AppInitialU: any = undefined;

export const DeferredUiN2: any = undefined;

export const DeferredUiV2: any = undefined;

export const DeferredYot: any = undefined;

export const FormattedMessage: any = undefined;

export const Install: any = undefined;

export const NativeContextMenuSurface: any = undefined;

export const RealtimeVoiceHostId: any = undefined;

const SettingsSectionChrome: any = undefined;

export const _n: any = undefined;

export const avatarOverlayDebugStateIState: any = undefined;

export const avatarOverlayDebugStateRState: any = undefined;

export const avatarOverlayDebugStateTState: any = undefined;

export const alpha: any = undefined;

export const bravo: any = undefined;

export const copper: any = undefined;

export const AvatarOverlayPageHelper7: any = undefined;

export const delta: any = undefined;

export const echo: any = undefined;

export const falcon: any = undefined;

export const composerScope: any = undefined;

export const deferredUiWX: any = undefined;

export const deferredUiX9: any = undefined;

export const ensureUseSelectedAvatarInit: any = undefined;

export const or: any = undefined;

export const resolveStableWorktreeStatus: any = undefined;

export const setLocalStorageItem: any = undefined;

export const useAvatarOverlaySelectionUnderscore: any = undefined;

export function harbor() {}

export function indigo(indigoPrime: any) {
  return Math.max(Date.now(), indigoPrime + 1);
}

export function _r(jadePrime: any) {
  return Math.max(Date.now(), jadePrime + 1);
}

export function jade() {
  document.documentElement.classList.remove(olive);
  document.body.classList.remove(olive);
}

export function kite(kitePrime: any) {
  ensureAppActionPayloadSchemasInit.dispatchMessage(
    "avatar-overlay-keyboard-interaction-changed",
    {
      isInteractive: kitePrime,
    },
  );
}

export function lemon(lemonPrime: any) {
  ensureAppActionPayloadSchemasInit.dispatchMessage(
    "avatar-overlay-pointer-interaction-changed",
    {
      isInteractive: lemonPrime,
    },
  );
}

export function marble(marblePrime: any) {
  return marblePrime.source === "cloud" && marblePrime.status === "running";
}

export function nickel(nickelPrime: any) {
  return nickelPrime.source !== "cloud" && nickelPrime.status === "running";
}

export function onyx() {
  return Date.now();
}

export function pearl() {
  return new Map();
}

export function quartz(onyxPrime: any, pearlPrime: any) {
  return avatarOverlayMascotWidthStyle(
    onyxPrime.startWidthPx + pearlPrime - onyxPrime.startScreenX,
  );
}

export function river(quartzPrime: any, riverPrime: any) {
  return SettingsSectionChrome(quartzPrime, riverPrime) ||
    getPersistedAtomItem(flint, []).includes(quartzPrime.id)
    ? null
    : {
        avatarId: quartzPrime.id,
        petName: quartzPrime.displayName,
        startedAtMs: Date.now(),
      };
}

function slate(slatePrime, timberPrime) {
  return SettingsSectionChrome(slatePrime, timberPrime)
    ? "pending-custom-avatar"
    : "ready";
}

export function timber({ currentDragState, deltaX }: any) {
  return deltaX >= 4
    ? "running-right"
    : deltaX <= -4
      ? "running-left"
      : currentDragState;
}

export function umbra(umbraPrime: any) {
  if (umbraPrime == null) return null;
  let violetPrime = willow(umbraPrime.querySelector(hazel)),
    willowPrime = xenon(umbraPrime.querySelector(ivory));
  return violetPrime == null
    ? null
    : {
        mascot: violetPrime,
        realtimeCaptionBelowMascotPx: 0,
        tray: willowPrime,
      };
}

export function violet(xenonPrime: any) {
  return Array.from(xenonPrime.querySelectorAll(prism.join(", ")));
}

export function willow(yellowPrime: any) {
  if (yellowPrime == null || basalt(yellowPrime)) return null;
  let zincPrime = yellowPrime.getBoundingClientRect();
  return zincPrime.width <= 0 || zincPrime.height <= 0
    ? null
    : {
        width: Math.ceil(zincPrime.width),
        height: Math.ceil(zincPrime.height),
      };
}

function xenon(amberPrime) {
  if (amberPrime == null || basalt(amberPrime)) return null;
  let basaltPrime = amberPrime.getBoundingClientRect();
  if (basaltPrime.width <= 0 || basaltPrime.height <= 0) return null;
  let cedarPrime = Math.ceil(
      amberPrime.offsetWidth > 0 ? amberPrime.offsetWidth : basaltPrime.width,
    ),
    daisyPrime = amberPrime.querySelector(jasper),
    emberPrime = amberPrime.querySelector(kelp),
    flintPrime = amberPrime.querySelector(lotus),
    garnetPrime = amberPrime.querySelector(mint);
  if (daisyPrime == null || (emberPrime == null && flintPrime == null))
    return {
      width: cedarPrime,
      height: Math.ceil(basaltPrime.height),
    };
  let hazelPrime =
    emberPrime != null &&
    (flintPrime == null ? 0 : 1) + (garnetPrime == null ? 0 : 1) > 1
      ? yellow(emberPrime)
      : 0;
  return {
    width: cedarPrime,
    height: Math.ceil(
      daisyPrime.getBoundingClientRect().height +
        (flintPrime?.scrollHeight ?? 0) +
        (garnetPrime == null ? 0 : garnetPrime.getBoundingClientRect().height) +
        hazelPrime,
    ),
  };
}

function yellow(ivoryPrime) {
  let jasperPrime = Number.parseFloat(
    window.getComputedStyle(ivoryPrime).rowGap,
  );
  return Number.isFinite(jasperPrime) ? jasperPrime : 0;
}

export function zinc(kelpPrime: any, lotusPrime: any) {
  return (
    kelpPrime != null &&
    kelpPrime.isGlobalRealtimeVoiceTransitioning ===
      lotusPrime.isGlobalRealtimeVoiceTransitioning &&
    kelpPrime.isTrayVisible === lotusPrime.isTrayVisible &&
    kelpPrime.realtimeCaptionBelowMascotPx ===
      lotusPrime.realtimeCaptionBelowMascotPx &&
    kelpPrime.mascot.width === lotusPrime.mascot.width &&
    kelpPrime.mascot.height === lotusPrime.mascot.height &&
    amber(kelpPrime.tray, lotusPrime.tray)
  );
}

function amber(mintPrime, novaPrime) {
  return (
    mintPrime === novaPrime ||
    (mintPrime != null &&
      novaPrime != null &&
      mintPrime.width === novaPrime.width &&
      mintPrime.height === novaPrime.height)
  );
}

function basalt(olivePrime) {
  return window.getComputedStyle(olivePrime).display === "none";
}

export var cedar,
  $,
  daisy,
  ember,
  flint,
  garnet,
  hazel,
  ivory,
  jasper,
  kelp,
  lotus,
  mint,
  nova,
  olive,
  prism,
  quill;
