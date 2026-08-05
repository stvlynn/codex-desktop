// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 2/3
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { ApplyActive } from "../../conversation/apply-active";
import { AppIconCct } from "../../icons/app-icon-cct";
import { WriteHooksStateMutationAtom } from "../../settings/hooks-query-atoms";
import { avatarOverlaySelectionN } from "../use-avatar-overlay-selection";

import { $, AvatarOverlayPageHelper31, alpha, basalt, xenon } from "./part-2-a";

export function falcon(thorn: any, upland: any) {
  return {
    label: thorn.label,
    tone: upland === 0 ? "primary" : "secondary",
    questionOption: thorn,
  };
}

export function gamma(cog: any) {
  return (
    <div key={cog} className="leading-4 break-words">
      {cog}
    </div>
  );
}

function jade(iron, joint = iron.scrollTop) {
  if (!marble(iron))
    return {
      hasScrollableContent: false,
      hasLatestNotificationsAbove: false,
      hiddenOlderNotificationCount: 0,
    };
  if (lemon(iron, joint))
    return {
      hasScrollableContent: true,
      hasLatestNotificationsAbove: true,
      hiddenOlderNotificationCount: 0,
    };
  let keystone = pearl(iron),
    latch = $n(iron, keystone, joint);
  return {
    hasScrollableContent: true,
    hasLatestNotificationsAbove: joint > xenon,
    hiddenOlderNotificationCount: onyx(iron, keystone, latch),
  };
}

function kite(motor, nut) {
  return (
    motor.hasScrollableContent === nut.hasScrollableContent &&
    motor.hasLatestNotificationsAbove === nut.hasLatestNotificationsAbove &&
    motor.hiddenOlderNotificationCount === nut.hiddenOlderNotificationCount
  );
}

function lemon(piston, rivet = piston.scrollTop) {
  let screw = Math.max(0, piston.scrollHeight - piston.clientHeight);
  return marble(piston) && rivet >= screw - xenon;
}

function marble(torque) {
  return torque.scrollHeight > torque.clientHeight + xenon;
}

export function nickel(valve: any) {
  return [valve, ...Array.from(valve.querySelectorAll("*"))].some(
    (item) =>
      item.clientWidth > 0 && item.scrollWidth > item.clientWidth + basalt,
  );
}

function onyx(axle, bracket, clamp) {
  let drill = clamp + axle.clientHeight - xenon;
  return bracket.filter((item) => item.offsetTop + item.offsetHeight > drill)
    .length;
}

function pearl(engine) {
  return Array.from(engine.children).filter(
    (item) => item instanceof HTMLElement,
  );
}

function $n(frame, gasket, handle = frame.scrollTop) {
  return handle + (gasket[0]?.offsetTop ?? 0) + xenon;
}

function quartz(insert, jacket) {
  let knurl = 0;
  for (let lever = 0; lever < insert.length; lever += 1)
    insert[lever].offsetTop <= jacket && (knurl = lever);
  return knurl;
}

export function river(mount: any) {
  switch (mount.iconType) {
    case "check-circle":
      return <WriteHooksStateMutationAtom className={mount.iconClassName} />;
    case "clock":
      return <AppIconCct className={mount.iconClassName} />;
    case "spinner":
      return null;
    case "warning":
      return <ApplyActive className={mount.iconClassName} />;
  }
}

export function AvatarOverlayPage() {
  let { selectedAvatar, selectedAvatarId } = avatarOverlaySelectionN(),
    nozzle = selectedAvatar == null,
    platen,
    ratchet;
  if (
    ((platen = () => {
      nozzle &&
        ensureAppActionPayloadSchemasInit.dispatchMessage(
          "avatar-overlay-pointer-interaction-changed",
          {
            isInteractive: false,
          },
        );
    }),
    (ratchet = [nozzle]),
    $.useEffect(platen, ratchet),
    selectedAvatar == null)
  )
    return null;
  let shim = alpha(selectedAvatar, selectedAvatarId);
  return (
    <AvatarOverlayPageHelper31
      key={shim}
      selectedAvatar={selectedAvatar}
      selectedAvatarId={selectedAvatarId}
    />
  );
}
