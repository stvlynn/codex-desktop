// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 1/3
/* split-lane-import-depth:1 */

import {
  avatarOverlayPillDismissButtonValue,
  dismissAvatarOverlayPill,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import { Chatgpt2 } from "../../browser/chatgpt2";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { BrowserTabMediaIcon } from "../../icons/browser-tab-media-icon";
import { isPleaseImplementThisPlan } from "../../prompts/is-please-implement-this-plan";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { ScrollingOrbBackdrop } from "../../ui/scrolling-orb-backdrop";
import {
  avatarOverlaySelectionA,
  avatarOverlaySelectionB,
} from "../use-avatar-overlay-selection";

import {
  AppInitialHct,
  IntlProvider,
  NeedsApps,
  quartz,
  timber,
} from "./part-1-a";

function jade({
  conversationId,
  hostId,
  intl,
  resolvedApps,
  status,
  turnKey,
  updatedAtMs,
}) {
  let yellow = avatarOverlaySelectionB({
    intl,
    resolvedApps,
    status,
  });
  return yellow == null
    ? null
    : {
        action: null,
        body: "",
        controlTarget: null,
        expiresAtMs: null,
        id: "realtime-codex-activity",
        isLoading: true,
        kind: "activity",
        level: "info",
        localConversationId: conversationId,
        notificationPreferenceId: isPleaseImplementThisPlan(
          conversationId,
          hostId,
        ),
        source: hostId === "local" ? "local" : "remote-host",
        title: yellow,
        turnKey,
        updatedAtMs,
        usesLiveConversationState: false,
        waitingRequest: null,
      };
}

function kite({ attention }) {
  return attention.map((item) => ({
    action: {
      path: item.route,
    },
    body: item.message,
    controlTarget: item.controlTarget,
    expiresAtMs: avatarOverlaySelectionA(
      item.kind === "input-required" ? "waiting" : "failed",
      item.updatedAtMs,
    ),
    id: item.id,
    isLoading: false,
    kind: "attention",
    level: item.kind === "input-required" ? "warning" : "danger",
    localConversationId: item.localConversationId,
    notificationPreferenceId: item.id,
    source: item.source,
    title:
      item.kind === "input-required" && item.request != null
        ? dismissAvatarOverlayPill(item.title, item.request)
        : item.title,
    turnKey: item.turnKey,
    updatedAtMs: item.updatedAtMs,
    waitingRequest: item.request,
  }));
}

function marble(zinc) {
  return zinc.flatMap((item) =>
    item.status !== "waiting" && item.status !== "failed"
      ? []
      : [
          {
            controlTarget: item.controlTarget,
            id: item.key,
            kind: item.status === "waiting" ? "input-required" : "failed",
            localConversationId: item.localConversationId,
            message: item.subtitle,
            request: item.status === "waiting" ? item.waitingRequest : null,
            route: item.actionPath,
            source: item.source,
            title: item.title,
            turnKey: item.turnKey,
            updatedAtMs: item.updatedAtMs,
          },
        ],
  );
}

export function AvatarOverlayPageHelper4(amber: any) {
  let {
      className,
      areControlsVisible = false,
      canRevealControls = true,
      canStart,
      isRealtimeVoiceSurfaceVisible = false,
      isMicrophoneMuted = false,
      isMuted = false,
      onStart,
      onStop,
      onOpenThread,
      onToggleMicrophoneMute,
      onToggleMute,
      phase,
      willResume: basalt = false,
    } = amber,
    cedar = useIntl(),
    daisy = phase !== "inactive",
    ember = phase === "starting",
    flint = phase === "stopping";
  if (!daisy && !canStart) return null;
  let garnet = phase === "active",
    hazel = garnet && onToggleMicrophoneMute != null && onToggleMute != null,
    ivory = canRevealControls
      ? "group-hover:pointer-events-auto group-hover:opacity-100 group-has-[:focus-visible]:pointer-events-auto group-has-[:focus-visible]:opacity-100"
      : null;
  if (hazel) {
    let topaz = IntlProvider(
      "no-drag absolute bottom-0 left-1/2 z-40 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary p-0.5 text-token-text-secondary shadow-lg shadow-black/20 backdrop-blur-sm forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none",
      className,
      areControlsVisible
        ? "pointer-events-auto opacity-100"
        : ["pointer-events-none opacity-0", ivory],
    );
    let ultra = cedar.formatMessage(
      isMuted ? quartz.unmuteOutput : quartz.muteOutput,
    );
    let vapor = isMuted ? quartz.unmuteOutput : quartz.muteOutput,
      wheat = <MemoizedFormattedMessage {...vapor} />;
    let yarn = isMuted ? (
      <ScrollingOrbBackdrop className="icon-xs" />
    ) : (
      <BrowserTabMediaIcon className="icon-xs" />
    );
    let zephyr = (
      <AvatarOverlayPageHelper5
        ariaLabel={ultra}
        isPressed={isMuted}
        tooltipContent={wheat}
        onClick={onToggleMute}
      >
        {yarn}
      </AvatarOverlayPageHelper5>
    );
    let acorn = cedar.formatMessage(
      isMicrophoneMuted ? quartz.unmuteMicrophone : quartz.muteMicrophone,
    );
    let bloom = isMicrophoneMuted
        ? quartz.unmuteMicrophone
        : quartz.muteMicrophone,
      coral = <MemoizedFormattedMessage {...bloom} />;
    let drift = isMicrophoneMuted ? (
      <AppInitialHct className="icon-xs" />
    ) : (
      <AppIconMlt className="icon-xs" />
    );
    let eagle = (
      <AvatarOverlayPageHelper5
        ariaLabel={acorn}
        isPressed={isMicrophoneMuted}
        tooltipContent={coral}
        onClick={onToggleMicrophoneMute}
      >
        {drift}
      </AvatarOverlayPageHelper5>
    );
    let frost = cedar.formatMessage(quartz.stop);
    let glide = <MemoizedFormattedMessage {...quartz.stop} />;
    let honey = () => {
      onStop?.();
    };
    let iris = <Chatgpt2 className="icon-xs" />;
    let jewel = (
      <AvatarOverlayPageHelper5
        ariaLabel={frost}
        className="!bg-token-charts-blue !text-white hover:!bg-token-charts-blue/90 active:!bg-token-charts-blue/80"
        tooltipContent={glide}
        onClick={honey}
      >
        {iris}
      </AvatarOverlayPageHelper5>
    );
    let knoll;
    return (
      <div className={topaz} data-avatar-overlay-hit-region="realtime-voice">
        {zephyr}
        {eagle}
        {jewel}
      </div>
    );
  }
  let jasper = ember
      ? quartz.starting
      : garnet && onOpenThread != null
        ? quartz.openThread
        : daisy
          ? quartz.stop
          : basalt
            ? quartz.resume
            : quartz.start,
    kelp = <MemoizedFormattedMessage {...jasper} />;
  let lotus = cedar.formatMessage(jasper);
  let mint = ember || flint,
    nova = ember || flint ? "cursor-default" : "cursor-interaction",
    olive =
      garnet && !isRealtimeVoiceSurfaceVisible
        ? "bg-token-charts-blue text-white hover:bg-token-charts-blue/90 active:bg-token-charts-blue/80"
        : "bg-token-main-surface-primary text-token-text-secondary hover:text-token-foreground",
    prism = IntlProvider(
      "group/voice-action no-drag absolute bottom-0 left-0 z-40 flex size-8 items-center justify-center rounded-full border border-token-border shadow-lg shadow-black/20 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none",
      className,
      nova,
      olive,
      daisy && !isRealtimeVoiceSurfaceVisible
        ? "opacity-100"
        : areControlsVisible
          ? "pointer-events-auto opacity-100"
          : [
              "pointer-events-none opacity-0 focus-visible:pointer-events-auto focus-visible:opacity-100",
              ivory,
            ],
    );
  let quill = (event) => {
    if ((event.stopPropagation(), garnet && onOpenThread != null)) {
      onOpenThread();
      return;
    }
    daisy ? onStop?.() : onStart?.();
  };
  let reef =
    flint ||
    ((isRealtimeVoiceSurfaceVisible || onOpenThread == null) && garnet) ? (
      <Chatgpt2 className="icon-xs" />
    ) : ember ? (
      <VSCODE_EDITOR_ID className="icon-xs" />
    ) : (
      <NeedsApps className="icon-xs" />
    );
  let sage = (
    <button
      type="button"
      aria-label={lotus}
      disabled={mint}
      className={prism}
      data-avatar-overlay-hit-region="realtime-voice"
      onClick={quill}
    >
      {reef}
    </button>
  );
  return <OptionalTooltip tooltipContent={kelp}>{sage}</OptionalTooltip>;
}

function AvatarOverlayPageHelper5(lunar) {
  let { ariaLabel, children, className, isPressed, onClick, tooltipContent } =
      lunar,
    moss = isPressed && "bg-token-foreground/10 text-token-foreground",
    north = IntlProvider(
      "flex size-7 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-foreground/10 hover:text-token-foreground focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none",
      moss,
      className,
    );
  let orbit = (event) => {
    event.stopPropagation();
    onClick();
  };
  let pine = (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-pressed={isPressed}
      className={north}
      onClick={orbit}
    >
      {children}
    </button>
  );
  return (
    <OptionalTooltip tooltipContent={tooltipContent}>{pine}</OptionalTooltip>
  );
}

export function AvatarOverlayPageHelper6(quest: any) {
  let { prefersReducedMotion, shouldInsetForScrollbar = false, text } = quest,
    ridge = timber.useRef(null),
    storm = () => {
      let elm = ridge.current;
      elm != null && (elm.scrollTop = elm.scrollHeight);
    };
  let tide;
  tide = [text];
  timber.useLayoutEffect(storm, tide);
  let unity = {
    height: "auto",
    opacity: 1,
  };
  let vale = shouldInsetForScrollbar && "[scrollbar-gutter:stable]",
    wave = IntlProvider(
      "no-drag w-full min-w-0 shrink-0 overflow-hidden px-1.5 text-left",
      vale,
    );
  let apex = prefersReducedMotion
    ? false
    : {
        height: 0,
        opacity: 0,
      };
  let brook = prefersReducedMotion
    ? {
        duration: 0,
      }
    : {
        duration: 0.18,
        ease: [0.16, 1, 0.3, 1],
      };
  let cliff = IntlProvider(
    "relative z-[1] overflow-hidden rounded-[18px] px-3 py-2 forced-colors:bg-[Canvas]",
    avatarOverlayPillDismissButtonValue.cssMaterial,
  );
  let dusk = (
    <div className={cliff}>
      <div
        ref={ridge}
        className="text-size-chat-sm h-12 overflow-hidden leading-4 break-words whitespace-pre-wrap text-token-foreground"
      >
        {text}
      </div>
    </div>
  );
  return (
    <ensureIntlFormattersInit.div
      aria-live="polite"
      animate={unity}
      className={wave}
      data-avatar-overlay-size="notification-tray-caption"
      initial={apex}
      role="status"
      transition={brook}
    >
      {dusk}
    </ensureIntlFormattersInit.div>
  );
}
