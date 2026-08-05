// Restored from ref/webview/assets/header-DIFeySl0.js
// Wave5 stub-pass soft companions.
const Browser2: any = undefined;
const DeferredUiV2: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const Thread: any = undefined;
const composerScope: any = undefined;
const ensurePreviewQaInit: any = undefined;
const ensureSelectWorkspaceNstInit: any = undefined;

// Wave FY — full polished body from `header-DIFeySl0/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 46 (verified 88/133).
// Wave FZ-support — soft-deferred ui/header full polished body; alias primary Header.
// Wave5d — FZ repair from fz-support L=2441 sus=22; JSX PascalCase + careful split.
// Wave5d careful split 3/4
/* split-lane-import-depth:1 */

import {
  appActionSidebarProjectRefSchema,
  appActionSidebarSectionRefSchema,
} from "../../actions/app-action-payload-schemas";
import { ensureReviewFileAppActionAttrsInit } from "../../actions/ensure-review-file-app-action-attrs-init";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_Ist_Init,
} from "../../conversation/conversation-page-esm-inits";
import {
  createPersistedAtom,
  ensurePersistedAtomInit,
  useAtomPair,
} from "../../boundaries/persisted-atom";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  useLocation,
  useMatch,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { getChromeGlobal } from "../../browser/get-chrome-global";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { UPDATED_AT_KEY } from "../../config/updated-at-key";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ConversationNavListItem } from "../../conversation/conversation-nav-list-item";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { deferredConversationSQ } from "../../conversation/deferred-conversation-sq-2";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import {
  ensureSidebarThreadKeyPrefixesInit,
  toLocalSidebarThreadKey,
} from "../../conversation/sidebar-thread-keys";
import { ensureChromeRuntimeMessagingInit } from "../../desktop/ensure-chrome-runtime-messaging-init";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useEventCallback } from "../../hooks/use-event-callback";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconKA } from "../../icons/app-icon-ka";
import { AppIconPZ } from "../../icons/app-icon-pz";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconTk, ensureAppIconTkInit } from "../../icons/app-icon-tk";
import { AppIconYm } from "../../icons/app-icon-ym";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import {
  DockIcon,
  ensureDockIconInit as EnsureDockIconInit,
} from "../../icons/dock-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { ensurePetNotificationMenuInit } from "../../pets/ensure-pet-notification-menu-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexProjectKey } from "../../utils/codex-project-key";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identity } from "../../utils/identity";
import { nonEmptyTrimmedStringOrNull } from "../../utils/non-empty-trimmed-string-or-null";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { thinCallWithUndefined } from "../../utils/thin-call-with-undefined";
import { toggleSortedIdList as ToggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureImportSettingsCLInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureHotkeyThreadN8Init } from "../../utils/wave-av-gap-ensure-inits";
import { StableWorktreeStatusDialog } from "../../worktrees/stable-worktree-status-dialog-view";
import { deferredT } from "../deferred-t";
import { DropdownMenu, ensureDropdownMenuInit } from "../dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../dropdown-menu-popover";
import { ElectronOnly } from "../electron-only";
import { inProgress2 } from "../in-progress2";
import { InsetBorderPanel } from "../inset-border-panel";
import { OptionalTooltip } from "../optional-tooltip";

// Wave5d soft JSX companions.
function Alpha(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Bravo(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Copper(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBo: any = undefined;
const AppInitialEM: any = undefined;
const AppInitialGo: any = undefined;
const AppInitialHo: any = undefined;
const AppInitialMY: any = undefined;
const AppInitialNo: any = undefined;
const AppInitialNst: any = undefined;
const AppInitialO: any = undefined;
const AppInitialTM: any = undefined;
const AppInitialWN: any = undefined;
const AppInitialYX: any = undefined;
const AppInitialYo: any = undefined;
const HeaderHelper10: any = undefined;
const HeaderHelper12: any = undefined;
const HeaderHelper14: any = undefined;
const HeaderHelper19: any = undefined;
const HeaderHelper22: any = undefined;
const HeaderHelper23: any = undefined;
const HeaderHelper9: any = undefined;
const IntlProvider: any = undefined;
const at: any = undefined;
const deferredUiVV: any = undefined;
const deferredUiWX: any = undefined;
const deferredUiXT: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const frost: any = undefined;
const glide: any = undefined;
const honey: any = undefined;
const iris: any = undefined;
const jewel: any = undefined;
const knoll: any = undefined;
const lunar: any = undefined;
const moss: any = undefined;
const north: any = undefined;
const orbit: any = undefined;
const pine: any = undefined;
const quest: any = undefined;
const ridge: any = undefined;
const storm: any = undefined;
const tide: any = undefined;
const unity: any = undefined;
const vale: any = undefined;
const wave: any = undefined;
const apex: any = undefined;
const brook: any = undefined;
const cliff: any = undefined;
const dusk: any = undefined;
const elm: any = undefined;
const fern: any = undefined;
const grove: any = undefined;
const hill: any = undefined;
const isle: any = undefined;
const juniper: any = undefined;
const lagoon: any = undefined;
const meadow: any = undefined;
const nest: any = undefined;
const oak: any = undefined;
const petal: any = undefined;
const quiet: any = undefined;
const rain: any = undefined;
const seed: any = undefined;
const trail: any = undefined;
const urn: any = undefined;
function vine(vista, wisp) {
  return vista.map((item) => {
    let yonder = wisp.get(item.key);
    if (yonder == null || yonder.at !== item.at) return item;
    switch (item.kind) {
      case "remote":
        return yonder.kind === "remote" && yonder.task === item.task
          ? yonder
          : item;
      case "local":
        return yonder.kind === "local" &&
          yonder.conversation === item.conversation &&
          yonder.pendingWorktree === item.pendingWorktree
          ? yonder
          : item;
    }
  });
}
var wind,
  yarrow,
  azure = esmInit(() => {
    wind = commonJsInit(ensureSelectWorkspaceNstInit(), 1);
    ensureComposerEsm_MT_Init();
    yarrow = commonJsInit(react(), 1);
    AppInitialTM();
    ensureHotkeyThreadN8Init();
    Browser2();
    ensureSidebarThreadKeyPrefixesInit();
    ensureSkillsPageHelpersInit();
    Thread();
    posixPathBasename();
    deferredUiVV();
    meadow();
  });
function birch(zenith) {
  let {
      cloudtasksQuery,
      localConversations,
      onClose,
      autoFocusSearch = false,
      showFilters = true,
    } = zenith,
    anvil = useIntl(),
    beacon = composerNavigation(),
    { authMethod } = useAuth(),
    [crag, dome] = useAtomPair(jadeite),
    [eddy] = useAtomPair(quill),
    fjord = showFilters ? crag : "recent",
    glen = useMatch("/local/:conversationId")?.params?.conversationId ?? null,
    { data } = AppInitialMY(),
    hearth = AppInitialEM(),
    inlet = showFilters
      ? (data?.find((forge) => forge.id === eddy) ?? null)
      : null;
  let jetty = inlet,
    knob = (gear) =>
      delta({
        conversation: gear,
        isBackgroundSubagentsEnabled: hearth,
      });
  let ledge = localConversations.filter(knob),
    mire = echo(cloudtasksQuery.data, localConversations, jetty),
    [nook, oxbow] = haven.useState(""),
    pond = haven.useDeferredValue(nook).trim().toLowerCase(),
    quarry = pond.length > 0,
    rapids = mire.filter(canyon),
    spur = quarry
      ? rapids.filter((item) => {
          let { task } = item;
          return AppInitialWN(task.title, pond);
        })
      : rapids,
    tor = quarry
      ? ledge.filter((item) => AppInitialWN(AppInitialNst(item), pond))
      : ledge,
    updraft = quarry
      ? mire.filter((item) =>
          item.kind === "remote"
            ? AppInitialWN(item.task.title, pond)
            : AppInitialWN(
                item.conversation == null
                  ? dew(item.pendingWorktree, anvil)
                  : AppInitialNst(item.conversation),
                pond,
              ),
        )
      : mire,
    verge = (
      <DropdownMenu.Section
        {...{
          children: (
            <$t
              {...{
                searchQuery: nook,
                onQueryChange: oxbow,
                autoFocus: autoFocusSearch,
              }}
            />
          ),
        }}
      />
    );
  let weir = (
    <div
      className="mx-2 border-t-[0.5px] border-token-border"
      aria-hidden={true}
    />
  );
  let yard = showFilters && authMethod === "chatgpt" && (
    <DropdownMenu.Section
      {...{
        className:
          "flex items-center justify-between px-[var(--padding-row-x)]",
        children: [
          <HeaderHelper12
            {...{
              filter: crag,
              onSelect: dome,
            }}
          />,
          crag !== "local" && <HeaderHelper10 {...{}} />,
        ],
      }}
    />
  );
  let anchor = DropdownMenu,
    bolt =
      fjord === "cloud" &&
      (cloudtasksQuery.isError ? (
        <HeaderHelper23
          {...{
            onRetry: () => {
              cloudtasksQuery.refetch();
            },
          }}
        />
      ) : cloudtasksQuery.isLoading ? (
        <HeaderHelper22 {...{}} />
      ) : spur.length === 0 ? (
        quarry ? (
          <HeaderHelper14 {...{}} />
        ) : (
          <HeaderHelper9 {...{}} />
        )
      ) : (
        spur.map((item) => (
          <AppInitialYo key={item.key} task={item.task} onClose={onClose} />
        ))
      )),
    cog =
      fjord === "local" &&
      (tor.length ? (
        tor.map((item) => (
          <Bravo
            key={item.id}
            {...{
              conversationId: item.id,
              updatedAt: item.recencyAt ?? item.updatedAt,
              isActive: glen === item.id,
              onClose,
              onActiveArchiveStart: beacon,
            }}
          />
        ))
      ) : quarry ? (
        <HeaderHelper14 {...{}} />
      ) : (
        <HeaderHelper9 {...{}} />
      )),
    disc =
      fjord === "recent" &&
      (cloudtasksQuery.isError && mire.length === 0 ? (
        <HeaderHelper23
          {...{
            onRetry: () => {
              cloudtasksQuery.refetch();
            },
          }}
        />
      ) : cloudtasksQuery.isLoading && mire.length === 0 ? (
        <HeaderHelper22 {...{}} />
      ) : updraft.length === 0 ? (
        quarry ? (
          <HeaderHelper14 {...{}} />
        ) : (
          <HeaderHelper9 {...{}} />
        )
      ) : (
        <>
          {cloudtasksQuery.isError && (
            <div className="mx-1 my-1 flex items-center justify-between gap-2 px-1 text-base text-token-foreground">
              {
                <MemoizedFormattedMessage
                  {...{
                    id: "codex.recentTasksMenu.errorCloud.inline",
                    defaultMessage: "Failed to load cloud chats.",
                    description:
                      "Inline error indicator for cloud tasks in recent feed",
                  }}
                />
              }
              {
                <ReadLoginRouteQuerySnapshot
                  {...{
                    size: "default",
                    color: "outline",
                    onClick: () => {
                      cloudtasksQuery.refetch();
                    },
                    children: (
                      <MemoizedFormattedMessage
                        {...{
                          id: "codex.common.retry",
                          defaultMessage: "Retry",
                          description: "Retry button",
                        }}
                      />
                    ),
                  }}
                />
              }
            </div>
          )}
          {cloudtasksQuery.isPending && !mire.length && (
            <div className="mx-1 my-1 flex items-center gap-2 text-sm text-token-input-placeholder-foreground">
              {
                <VSCODE_EDITOR_ID
                  {...{
                    className: "icon-xs",
                  }}
                />
              }
            </div>
          )}
          {updraft.map((item) => (
            <Copper
              key={item.key}
              {...{
                item,
                isActive:
                  item.kind === "local" &&
                  item.conversation != null &&
                  glen === item.conversation.id,
                onClose,
                onActiveArchiveStart: beacon,
              }}
            />
          ))}
        </>
      ));
  let edge = (
    <Alpha.Section
      {...{
        className:
          "vertical-scroll-fade-mask flex max-h-[60vh] flex-col gap-0 overflow-y-auto pb-1",
        children: [bolt, cog, disc],
      }}
    />
  );
  return (
    <div className="flex max-h-[300px] w-[calc(var(--radix-popper-available-width)_-_var(--padding-panel))] flex-col gap-1">
      {verge}
      {weir}
      {yard}
      {edge}
    </div>
  );
}
function canyon(hinge) {
  return hinge.kind === "remote";
}
function dew(iron, joint) {
  let keystone = iron.label?.trim();
  return keystone && keystone.length > 0
    ? keystone
    : iron.phase === "failed"
      ? joint.formatMessage({
          id: "recentTasks.worktreeInitFailedTitle",
          defaultMessage: "Worktree init failed",
          description: "Worktree row title when the init script fails",
        })
      : joint.formatMessage({
          id: "recentTasks.worktreeSettingUpTitle",
          defaultMessage: "Setting up worktree",
          description: "Worktree row title while init is pending",
        });
}
function ever() {
  return (
    <div className="flex h-48 items-center justify-center gap-2 text-sm text-token-input-placeholder-foreground">
      {
        <VSCODE_EDITOR_ID
          {...{
            className: "icon-xs",
          }}
        />
      }
    </div>
  );
}
function field(latch) {
  let { onRetry } = latch,
    motor = (
      <MemoizedFormattedMessage
        {...{
          id: "codex.recentTasksMenu.errorCloud",
          defaultMessage: "Failed to load chats.",
          description: "Error state for cloud tasks in recent tasks menu",
        }}
      />
    );
  let nut = (
    <MemoizedFormattedMessage
      {...{
        id: "codex.common.retry",
        defaultMessage: "Retry",
        description: "Retry button",
      }}
    />
  );
  return (
    <div className="flex h-48 items-center justify-center gap-3 text-sm text-token-input-placeholder-foreground">
      {motor}
      {
        <ReadLoginRouteQuerySnapshot
          {...{
            size: "default",
            color: "outline",
            onClick: onRetry,
            children: nut,
          }}
        />
      }
    </div>
  );
}
var grain,
  haven,
  ink,
  jadeite,
  kernel,
  leaf,
  maple = esmInit(() => {
    grain = reactCompilerRuntime();
    countLeadingZeroBits32();
    ensureComposerEsm_MT_Init();
    haven = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    ensureAuthProviderInit();
    RealtimeVoiceHostId();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    ensureImportSettingsCLInit();
    ensureComposerEsm_Sut_Init();
    AppInitialTM();
    conversationsSidebarMessages();
    ensureConversationPageEsm_Ist_Init();
    ensureAppScopeInit();
    ensurePinnedConversationsQueryInit();
    ensurePersistedAtomInit();
    AppInitialO();
    deferredUiVV();
    AppInitialBo();
    AppInitialNo();
    coral();
    orbit();
    pine();
    tide();
    dusk();
    juniper();
    meadow();
    azure();
    AppInitialGo();
    jadeite = createPersistedAtom("recent-tasks-filter", "recent");
    kernel = haven.memo(function (piston) {
      let {
          conversationId,
          updatedAt,
          isActive,
          onClose,
          onActiveArchiveStart,
        } = piston,
        rivet =
          updatedAt == null ? undefined : (
            <INLINE_MENTION_GROUP_CLASS
              {...{
                dateString: new Date(updatedAt).toISOString(),
              }}
            />
          );
      return (
        <ConversationNavListItem
          conversationId={conversationId}
          isActive={isActive}
          metaContent={rivet}
          onClick={onClose}
          onActiveArchiveStart={onActiveArchiveStart}
        />
      );
    });
    leaf = haven.memo(function (screw) {
      let { item, isActive, onClose, onActiveArchiveStart } = screw,
        torque = CodexPluginActionType(appScopeAtom),
        { cancelPendingWorktree } = StableWorktreeStatusDialog();
      switch (item.kind) {
        case "remote": {
          let valve;
          return <AppInitialYo task={item.task} onClose={onClose} />;
        }
        case "local": {
          if (item.conversation == null) {
            let clamp = () => {
              ensurePetNotificationMenuInit(torque, item.pendingWorktree);
              onClose();
            };
            let drill = () => {
              cancelPendingWorktree(item.pendingWorktree.id);
            };
            let engine;
            return (
              <AppInitialHo
                task={item.pendingWorktree}
                hasAttention={item.pendingWorktree.needsAttention}
                onClick={clamp}
                onArchive={drill}
              />
            );
          }
          let axle =
            (item.conversation.recencyAt ?? item.conversation.updatedAt) ==
            null ? undefined : (
              <INLINE_MENTION_GROUP_CLASS
                {...{
                  dateString: new Date(
                    item.conversation.recencyAt ?? item.conversation.updatedAt,
                  ).toISOString(),
                }}
              />
            );
          let bracket;
          return (
            <ConversationNavListItem
              conversationId={item.conversation.id}
              isActive={isActive}
              metaContent={axle}
              onClick={onClose}
              onActiveArchiveStart={onActiveArchiveStart}
            />
          );
        }
      }
    });
  });
function nimbus(frame) {
  let gasket = frame === undefined ? {} : frame;
  let { label, showFilters = true } = gasket,
    handle = useIntl(),
    { authMethod } = useAuth(),
    insert = useLocation(),
    jacket = CodexPluginActionResult(thorn),
    { data = [] } = AppInitialYX(),
    knurl = AppInitialEM(),
    [lever, mount] = root.useState(false),
    nozzle = () => {
      mount(false);
    };
  let platen = useEventCallback(nozzle),
    ratchet = {
      taskFilter: "current",
      limit: 20,
      enabled: lever,
    };
  let shim = composerScope(ratchet),
    tappet = shim.data ?? [];
  let arbor = tappet.filter(plume);
  let bushing = arbor,
    collar;
  {
    let impeller;
    impeller = (journal) =>
      delta({
        conversation: journal,
        isBackgroundSubagentsEnabled: knurl,
      });
    collar = (data ?? []).filter(impeller).filter(opal);
  }
  let dowel = collar,
    flange = bushing.length + dowel.length,
    gib = insert.pathname !== "/" && flange > 0,
    hub = label != null,
    idler = jacket
      ? handle.formatMessage(
          {
            id: "codex.recentTasksMenu.triggerWithUnread",
            defaultMessage:
              "Recent chats. {count, plural, one {# in progress} other {# in progress}}. Unread chat updates",
            description:
              "Accessible label for opening the recent tasks menu when unread task updates are present",
          },
          {
            count: flange,
          },
        )
      : handle.formatMessage(
          {
            id: "codex.recentTasksMenu.trigger",
            defaultMessage:
              "Recent chats. {count, plural, one {# in progress} other {# in progress}}",
            description: "Accessible label for opening the recent tasks menu",
          },
          {
            count: flange,
          },
        );
  let jig = idler,
    keeper = () => {
      lever && authMethod === "chatgpt" && shim.refetch();
    };
  let lug;
  lug = [lever];
  root.useEffect(keeper, lug);
  let mandrel, nipple;
  mandrel = () => {
    let kingpin = (land) => mount(true);
    return (
      window.addEventListener("open-recent-tasks-menu", kingpin),
      () => window.removeEventListener("open-recent-tasks-menu", kingpin)
    );
  };
  nipple = [];
  root.useEffect(mandrel, nipple);
  let orifice = (
    <MemoizedFormattedMessage
      {...{
        id: "codex.recentTasksMenu.tooltip",
        defaultMessage: "Chat history",
        description: "Tooltip text for recent tasks menu",
      }}
    />
  );
  let pin = hub ? "ghostActive" : "ghost",
    race = hub ? "default" : "icon",
    sleeve =
      hub &&
      "max-w-full min-w-0 !px-0 !py-0 hover:!bg-transparent hover:opacity-80",
    trunnion = IntlProvider("relative", sleeve);
  let boss = hub ? undefined : jig,
    cam = jacket ? (
      <span
        aria-hidden="true"
        className="absolute top-0.5 right-0.5 size-1.5 rounded-full"
        style={{
          backgroundColor: "var(--vscode-textLink-foreground)",
        }}
      />
    ) : null;
  let detent = hub ? (
    <>
      <span className={IntlProvider("min-w-0 truncate", false)}>{label}</span>
      {
        <AppIconSft
          {...{
            className: "icon-2xs shrink-0 text-token-text-tertiary",
          }}
        />
      }
    </>
  ) : gib ? (
    <span className="relative inline-flex size-4 justify-center">
      {
        <VSCODE_EDITOR_ID
          {...{
            className: "icon-xs",
          }}
        />
      }
    </span>
  ) : (
    <AppIconKA
      {...{
        className: "icon-xs hover:opacity-80",
      }}
    />
  );
  let eccentric = handle.formatMessage(
    {
      id: "codex.recentTasksMenu.count",
      defaultMessage:
        "{count, plural, =0 {No chats in progress} one {# chat in progress} other {# chats in progress}}",
      description:
        "Live region text announcing in-progress task count for recent tasks trigger",
    },
    {
      count: flange,
    },
  );
  let follower = (
    <span className="sr-only" aria-live="polite" aria-atomic="true">
      {eccentric}
    </span>
  );
  let guide = (
    <OptionalTooltip
      {...{
        tooltipContent: orifice,
        children: (
          <ReadLoginRouteQuerySnapshot
            {...{
              color: pin,
              size: race,
              className: trunnion,
              allowShrink: hub,
              "aria-label": boss,
              children: [cam, detent, follower],
            }}
          />
        ),
      }}
    />
  );
  let helix = (
    <HeaderHelper19
      {...{
        cloudtasksQuery: shim,
        localConversations: data,
        onClose: platen,
        autoFocusSearch: lever,
        showFilters: showFilters,
      }}
    />
  );
  return (
    <DropdownMenuPopover
      {...{
        contentClassName: "!pb-0 mt-[9px]",
        triggerButton: guide,
        open: lever,
        onOpenChange: mount,
        children: helix,
      }}
    />
  );
}
function opal(mesh) {
  return ensureComposerEsm_K9_Init(mesh);
}
function plume(neck) {
  let pad = neck.task_status_display?.latest_turn_status_display?.turn_status;
  return pad === "in_progress" || pad === "pending";
}
var quillow,
  root,
  silk,
  thorn,
  upland = esmInit(() => {
    quillow = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    root = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    deferredUiWX();
    DeferredUiV2();
    inProgress2();
    ensureAuthProviderInit();
    RealtimeVoiceHostId();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Hlt_Init();
    AppInitialTM();
    ensureAppIconSftInit();
    ensurePreviewQaInit();
    ensureAppScopeInit();
    ensureDropdownMenuPopoverInit();
    maple();
    meadow();
    thorn = deferredUiXT(appScopeAtom, ({ get }) => false);
  });
