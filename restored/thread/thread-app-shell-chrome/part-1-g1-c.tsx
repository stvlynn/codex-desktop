// Restored from ref/webview/assets/thread-app-shell-chrome-CBH_UkIP.js
// Wave FZ — full polished body from `thread-app-shell-chrome-CBH_UkIP/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 53 (verified 130/182).
// Group 1/2 — "Open in" compound button menu for local project targets.
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { listAvailableCodeThemes } from "../../appearance/code-theme-catalog";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useStepsProseAtom } from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_F7_Init,
  ensureComposerEsm_MT_Init,
} from "../../composer/composer-esm-inits";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { pickPreferredOpenTarget } from "../../files/pick-preferred-open-target";
import {
  ensureUseMediaQueryInit,
  useMediaQuery,
} from "../../hooks/use-media-query";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { ensureClipboardCopyErrorToastInit } from "../../ui/ensure-clipboard-copy-error-toast-init";
import { identity } from "../../utils/identity";
import { identityCwd } from "../../utils/workspace-paths";
import { requestRealtimeVoicePresentationSurface } from "../../voice/request-realtime-voice-presentation-surface";
import {
  AppInitialOZ,
  AppInitialQR,
  AppInitialQU,
  AppInitialYz,
  AppInitialZR,
  DeferredUiH222,
  DeferredUiV2,
  LocalConversationThread,
} from "./part-1-g1-stubs";

function ThreadAppShellChromeHelper8(maple) {
  let { cwd, hostConfig } = maple,
    nimbus = useIntl(),
    opal = useMediaQuery("(max-width: 920px)"),
    plume = useStepsProseAtom() === THREAD_DETAIL_LEVEL_STEPS_PROSE,
    [quillow, silk] = amber.useState(null),
    thorn = hostConfig?.id,
    upland = {
      cwd,
      deferEnrichment: true,
      hostId: thorn,
    };
  let {
    canLoadTargets,
    preferredTarget,
    targets,
    availableTargets,
    hasLoadedTargets,
    open,
  } = AppInitialQR(upland);
  if (!cwd || !canLoadTargets) return null;
  let vista,
    wisp,
    yonder,
    zenith,
    anvil,
    beacon,
    crag,
    dome,
    eddy,
    fjord,
    glen,
    hearth,
    inlet,
    jetty,
    knob,
    ledge,
    mire;
  eddy = Symbol.for("react.early_return_sentinel");
  bb0: {
    mire = plume ? targets.filter(yellow) : targets;
    let spur = new Set(availableTargets);
    let tor = spur,
      updraft = plume
        ? (mire.find(
            (item) =>
              item.target === "fileManager" &&
              !item.hidden &&
              tor.has(item.target),
          ) ?? null)
        : null,
      verge = pickPreferredOpenTarget({
        preferredTarget,
        targets: mire,
        availableTargets,
        mode: "editor",
      });
    wisp =
      verge?.target === "systemDefault" && updraft != null ? updraft : verge;
    yonder = opal || (wisp != null && preferredTarget === wisp.target);
    let weir = wisp
        ? nimbus.formatMessage(
            {
              id: "localConversationPage.openPrimaryTarget.tooltip",
              defaultMessage: "Open in {target}",
              description: "Tooltip for the primary open button",
            },
            {
              target: wisp.label,
            },
          )
        : undefined,
      yard = !hasLoadedTargets || mire.some($n),
      anchor = mire.filter(xenon);
    if (!yard && wisp == null && anchor.length === 0 && quillow == null) {
      eddy = null;
      break bb0;
    }
    vista = CompoundButtonMenu;
    fjord = "outline";
    glen = "toolbar";
    hearth = "!border-token-border";
    inlet = "!border-token-border";
    jetty = wisp == null;
    knob = "end";
    ledge = "tall";
    zenith = "menuFixed";
    anvil = "pt-2";
    beacon = yonder ? cedar.openPrimaryTarget : undefined;
    crag = yonder ? weir : undefined;
    dome =
      anchor.length === 0 ? (
        <ThreadAppShellChromeHelper12 {...{}} />
      ) : (
        anchor.map((item) => (
          <DropdownMenu.Item
            key={item.id}
            {...{
              onSelect: () => {
                open(item.target, {
                  appPath: item.appPath,
                  openMode: "workspace",
                  persistPreferred: true,
                });
              },
              children: [
                <DropdownMenu.ItemIcon
                  {...{
                    children: (
                      <ThreadAppShellChromeHelper13
                        {...{
                          alt: "",
                          src:
                            quillow == null
                              ? (item.resolvedIcon ?? item.icon)
                              : (quillow.get(item.id) ?? item.icon),
                          className: "icon-sm",
                        }}
                      />
                    ),
                  }}
                />,
                <span className="truncate">{item.label}</span>,
              ],
            }}
          />
        ))
      );
  }
  if (eddy !== Symbol.for("react.early_return_sentinel")) return eddy;
  let nook = (bolt) => {
    silk(bolt ? new Map(mire.map(willow)) : null);
  };
  let oxbow =
    wisp == null
      ? undefined
      : () => {
          open(wisp.target, {
            appPath: wisp.appPath,
            openMode: "workspace",
            persistPreferred: false,
          });
        };
  let pond = (
    <span className="icon-xs inline-flex shrink-0 items-center justify-center">
      {wisp == null ? (
        <span className="size-4 rounded bg-token-bg-tertiary" />
      ) : (
        <ThreadAppShellChromeHelper13
          {...{
            alt: yonder ? wisp.label : "",
            src: wisp.icon,
            className: "icon-xs",
          }}
        />
      )}
    </span>
  );
  let quarry = yonder ? null : (
    <span className="truncate">
      {
        <MemoizedFormattedMessage
          {...{
            ...cedar.openPrimaryTarget,
          }}
        />
      }
    </span>
  );
  let rapids = (
    <span className="flex items-center gap-1.5">
      {pond}
      {quarry}
    </span>
  );
  return (
    <CompoundButtonMenu
      {...{
        color: fjord,
        size: glen,
        primaryClassName: hearth,
        dropdownButtonClassName: inlet,
        primaryDisabled: jetty,
        dropdownAlign: knob,
        dropdownContentMaxHeight: ledge,
        dropdownContentWidth: zenith,
        dropdownContentClassName: anvil,
        primaryAriaLabel: beacon,
        tooltipContent: crag,
        dropdownContent: dome,
        onDropdownOpenChange: nook,
        onClick: oxbow,
        children: rapids,
      }}
    />
  );
}
function willow(cog) {
  return [cog.id, cog.resolvedIcon ?? cog.icon];
}
function xenon(disc) {
  return !disc.hidden && disc.available === true;
}
function $n(edge) {
  return edge.available == null || edge.resolvedIcon === undefined;
}
function yellow(forge) {
  return forge.kind !== "editor" && forge.kind !== "terminal";
}
function ThreadAppShellChromeHelper12() {
  return (
    <DropdownMenu.Item
      {...{
        disabled: true,
        "aria-hidden": "true",
        children: [
          <DropdownMenu.ItemIcon
            {...{
              children: (
                <span className="size-4 rounded bg-token-bg-tertiary" />
              ),
            }}
          />,
          <span className="h-3 w-24 rounded bg-token-bg-tertiary" />,
        ],
      }}
    />
  );
}
function ThreadAppShellChromeHelper13(gear) {
  let { alt, className, src } = gear,
    [hinge, iron] = amber.useState(null);
  if (src === hinge) return null;
  let joint = () => iron(src);
  return <img alt={alt} className={className} onError={joint} src={src} />;
}
var zinc,
  amber,
  basalt,
  cedar,
  or = esmInit(() => {
    zinc = reactCompilerRuntime();
    amber = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialYz();
    ensureDropdownMenuInit();
    ensureUseMediaQueryInit();
    ensureComposerEsm_F7_Init();
    ensureClipboardCopyErrorToastInit();
    AppInitialZR();
    cedar = identity({
      openPrimaryTarget: {
        id: "localConversationPage.openPrimaryTarget",
        defaultMessage: "Open in",
        description: "Primary open button label",
      },
    });
  });
function ThreadAppShellChromeHelper14(keystone) {
  let { conversationId } = keystone,
    latch = CodexPluginActionResult(requestRealtimeVoicePresentationSurface),
    motor = CodexPluginActionResult(AppInitialQU),
    nut = CodexBrowserSurfaceActionType(DeferredUiH222, conversationId),
    piston = motor.cwd == null ? null : identityCwd(motor.cwd);
  let rivet = piston;
  if (
    rivet == null ||
    !nut ||
    motor.kind !== "git" ||
    latch.kind === "remote-control"
  )
    return null;
  return (
    <AppIconAZ.HeaderAction
      {...{
        actionId: "thread-local-project-actions",
        align: "end",
        order: 100,
        children: (
          <ThreadAppShellChromeHelper8
            {...{
              cwd: rivet,
              hostConfig: latch,
            }}
          />
        ),
      }}
    />
  );
}
var daisy,
  ember,
  flint = esmInit(() => {
    daisy = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    DeferredUiV2();
    AppInitialOZ();
    or();
    LocalConversationThread();
    listAvailableCodeThemes();
  });
