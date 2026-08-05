// Restored from ref/webview/assets/worktrees-settings-page-D8I58eIb.js
// Wave FY — full polished body from `worktrees-settings-page-D8I58eIb/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 67/88).
// Wave FZ-support — PascalCase invalid JSX tags: deferredUiB→DeferredUiB, deferredUiH→DeferredUiH, deferredUiU→DeferredUiU, ensurePersonalizationCInit→EnsurePersonalizationCInit, openInBrowser→OpenInBrowser, parseUrlOrFallback→ParseUrlOrFallback, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, setRemoteControlEnabledForHost→SetRemoteControlEnabledForHost, useChromeAndCodeThemeSync→UseChromeAndCodeThemeSync, usePointerSurfaceInteractionGate→UsePointerSurfaceInteractionGate, renamedId→WorktreesSettingsPageHelper1, renamedId→WorktreesSettingsPageHelper2.
// AST split 1/1
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_ML_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Rst_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Wdt_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Ist_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { getHostConfigId } from "../../hooks/host-rpc-client";
import {
  ensureUseCodexWorktreesInit,
  useCodexWorktrees,
} from "../../hooks/use-codex-worktrees";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useGateEnabledWithAccountData } from "../../hooks/use-gate-enabled-with-account-data";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../../settings/settings-section-title";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { delta } from "./auto-cleanup-section";
import { harbor, WorktreesSettingsPageHelper4 } from "./worktree-root-section";
import { lemon, marble, nickel, onyx, quartz } from "./worktree-path-utils";

const AppInitialA3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSelectWorkspaceEMInit@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialEM: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsF3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialF3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceKstInit: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredAccountNi@account/deferred-account-ni.ts) */
const AppInitialNi: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsP3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialP3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureShapeColorTokenClusterInit@ui/ensure-shape-color-token-cluster-init.ts) */
const AppInitialTM: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureBooleanSchemaClusterInit@settings/ensure-boolean-schema-cluster-init.ts) */
const AppInitialWst: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wx.ts) */
const deferredUiWX: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (jsx-collision:getRecentConversationsQueryKey@worktrees/get-recent-conversations-query-key.ts) */
const AppInitialYX: any = undefined;
var indigo,
  jade,
  kite = esmInit(() => {
    indigo = reactCompilerRuntime();
    ensureComposerEsm_K1_Init();
    delta();
    harbor();
    AppInitialFC();
  });
export function WorktreesSettingsPage() {
  let latch = useIntl(),
    { selectedHostId } = useSelectedHost(),
    motor = ensureSteeringUserMessageClusterInit(selectedHostId),
    nut = motor.kind === "local",
    { data, isLoading, isFetching, error, refetch } = useCodexWorktrees(
      motor,
      "worktrees_settings_page",
    ),
    piston = {
      hostId: selectedHostId,
    };
  let {
      data: _data,
      isLoading: _isLoading,
      error: rivet,
    } = CodexBrowserSurfaceActionType(AppInitialA3, piston),
    { data: __data, isLoading: __isLoading } = AppInitialYX(),
    screw = AppInitialEM(),
    torque,
    valve;
  valve = Symbol.for("react.early_return_sentinel");
  bb0: {
    let axle = marble(data?.worktrees ?? [], _data?.roots ?? []),
      bracket,
      clamp;
    {
      let platen;
      platen = (shim) => quartz(shim) === selectedHostId;
      bracket = (__data ?? []).filter(platen);
      let ratchet;
      ratchet = (tappet) => !ensureSelectWorkspaceKstInit(tappet, screw);
      clamp = bracket.filter(ratchet);
    }
    let drill = clamp,
      engine = lemon(axle),
      frame = latch.formatMessage({
        id: "settings.worktrees.refresh",
        defaultMessage: "Refresh",
        description: "Button label to refresh the worktree list",
      });
    let gasket = frame,
      handle = () => {
        refetch();
      };
    let insert = isFetching ? null : (
      <AppIconAlt
        {...{
          className: "icon-xs",
        }}
      />
    );
    let jacket = (
      <ReadLoginRouteQuerySnapshot
        {...{
          "aria-label": gasket,
          className: "shrink-0",
          color: "ghost",
          loading: isFetching,
          onClick: handle,
          size: "toolbar",
          title: gasket,
          uniform: true,
          children: insert,
        }}
      />
    );
    let knurl = jacket,
      lever = error ?? rivet;
    if (isLoading || _isLoading) {
      let arbor = <SettingsSectionTitle slug="worktrees" />;
      let bushing = nut ? <WorktreesSettingsPageHelper4 {...{}} /> : null;
      let collar = (
        <AppInitialNi>
          {
            <MemoizedFormattedMessage
              {...{
                id: "settings.worktrees.loading.body",
                defaultMessage: "Fetching worktree details…",
                description: "Loading state body for worktrees settings",
              }}
            />
          }
        </AppInitialNi>
      );
      let dowel;
      dowel = (
        <OpenInBrowser
          {...{
            title: arbor,
            children: [bushing, collar],
          }}
        />
      );
      valve = dowel;
      break bb0;
    }
    if (lever) {
      let flange = <SettingsSectionTitle slug="worktrees" />;
      let gib = nut ? <WorktreesSettingsPageHelper4 {...{}} /> : null;
      let hub = (
        <MemoizedFormattedMessage
          {...{
            id: "settings.worktrees.error.title",
            defaultMessage: "Unable to load worktrees",
            description: "Error state title for worktrees settings",
          }}
        />
      );
      let idler = (
        <UseChromeAndCodeThemeSync.Header
          {...{
            title: hub,
            actions: knurl,
          }}
        />
      );
      let jig =
        lever.message ||
        latch.formatMessage({
          id: "settings.worktrees.error.body",
          defaultMessage: "Something went wrong while loading worktrees.",
          description: "Error body for worktrees settings",
        });
      let keeper = (
        <UseChromeAndCodeThemeSync.Content
          {...{
            children: (
              <ParseUrlOrFallback
                {...{
                  children: (
                    <div className="p-3 text-sm text-token-text-secondary">
                      {jig}
                    </div>
                  ),
                }}
              />
            ),
          }}
        />
      );
      let lug = (
        <UseChromeAndCodeThemeSync
          {...{
            children: [idler, keeper],
          }}
        />
      );
      let mandrel;
      mandrel = (
        <OpenInBrowser
          {...{
            title: flange,
            children: [gib, lug],
          }}
        />
      );
      valve = mandrel;
      break bb0;
    }
    let mount = <SettingsSectionTitle slug="worktrees" />;
    let nozzle;
    nozzle = nut ? <WorktreesSettingsPageHelper4 {...{}} /> : null;
    torque = (
      <OpenInBrowser
        {...{
          title: mount,
          children: [
            nozzle,
            engine.length === 0 ? (
              <UseChromeAndCodeThemeSync
                {...{
                  children: [
                    <UseChromeAndCodeThemeSync.Header
                      {...{
                        title: (
                          <MemoizedFormattedMessage
                            {...{
                              id: "settings.worktrees.empty.title",
                              defaultMessage: "No worktrees yet",
                              description:
                                "Empty state title for worktrees settings",
                            }}
                          />
                        ),
                        actions: knurl,
                      }}
                    />,
                    <UseChromeAndCodeThemeSync.Content
                      {...{
                        children: (
                          <ParseUrlOrFallback
                            {...{
                              children: (
                                <div className="p-3 text-sm text-token-text-secondary">
                                  {
                                    <MemoizedFormattedMessage
                                      {...{
                                        id: "settings.worktrees.empty.body",
                                        defaultMessage:
                                          "Worktrees created by ChatGPT will appear here",
                                        description:
                                          "Empty state body for worktrees settings",
                                      }}
                                    />
                                  }
                                </div>
                              ),
                            }}
                          />
                        ),
                      }}
                    />,
                  ],
                }}
              />
            ) : (
              engine.map((item, index) => (
                <WorktreesSettingsPageHelper5
                  key={item.key}
                  {...{
                    action: index === 0 ? knurl : null,
                    allConversations: bracket,
                    visibleConversations: drill,
                    hostId: selectedHostId,
                    isConversationsLoading: __isLoading,
                    onWorktreeDeleted: () => {
                      refetch();
                    },
                    repoRoot: item.repoRoot,
                    worktrees: item.worktrees,
                  }}
                />
              ))
            ),
          ],
        }}
      />
    );
  }
  return valve === Symbol.for("react.early_return_sentinel") ? torque : valve;
}
function WorktreesSettingsPageHelper5(haven) {
  let {
      action,
      repoRoot,
      worktrees,
      allConversations,
      visibleConversations,
      hostId,
      isConversationsLoading,
      onWorktreeDeleted,
    } = haven,
    ink = ensureSteeringUserMessageClusterInit(hostId),
    jadeite = CodexPluginActionResult(getHostConfigId),
    kernel =
      repoRoot == null
        ? null
        : {
            cwd: repoRoot,
            hostConfig: ink,
          };
  let leaf = {
    retainRepoWatch: jadeite,
  };
  let { data, isLoading: maple } = AppInitialF3(
      kernel,
      "worktree_restore_banner",
      leaf,
    ),
    nimbus = data?.root ?? repoRoot ?? worktrees[0]?.dir ?? null,
    opal = nimbus ? (
      <span className="truncate text-sm">{nimbus}</span>
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "settings.worktrees.repository.unknown",
          defaultMessage: "Unknown repository",
          description:
            "Fallback label when worktree repository cannot be resolved",
        }}
      />
    );
  let plume = opal,
    quillow = maple && nimbus == null,
    silk = (
      <div className="min-w-0 truncate text-sm text-token-text-primary">
        {plume}
      </div>
    );
  let thorn = quillow ? (
    <div className="text-xs text-token-text-secondary">
      {
        <MemoizedFormattedMessage
          {...{
            id: "settings.worktrees.repository.loading",
            defaultMessage: "Loading repository metadata…",
            description: "Subtitle while repository metadata is loading",
          }}
        />
      }
    </div>
  ) : null;
  let upland = (
    <div className="flex min-w-0 flex-col">
      {silk}
      {thorn}
    </div>
  );
  let vista = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        title: upland,
        actions: action,
      }}
    />
  );
  let wisp;
  {
    let zenith;
    zenith = (anvil) => (
      <$e
        key={anvil.dir}
        {...{
          allConversations: nickel(anvil.dir, allConversations),
          hostId,
          visibleConversations: nickel(anvil.dir, visibleConversations),
          isConversationsLoading,
          onWorktreeDeleted,
          worktree: anvil,
        }}
      />
    );
    wisp = onyx(worktrees, visibleConversations).map(zenith);
  }
  let yonder = (
    <UseChromeAndCodeThemeSync.Content
      {...{
        children: (
          <ParseUrlOrFallback
            {...{
              children: wisp,
            }}
          />
        ),
      }}
    />
  );
  return (
    <UseChromeAndCodeThemeSync
      {...{
        children: [vista, yonder],
      }}
    />
  );
}
function $e({
  worktree,
  allConversations,
  visibleConversations,
  hostId,
  isConversationsLoading,
  onWorktreeDeleted,
}) {
  let beacon = CodexPluginActionType(appScopeAtom),
    crag = useColdNavigate(),
    dome = useIntl(),
    [eddy, fjord] = slate.useState(false),
    glen = ensureSteeringUserMessageClusterInit(hostId),
    hearth = async () => {
      if (!eddy) {
        fjord(true);
        try {
          allConversations.length > 0 &&
            (await Promise.all(
              allConversations.map((item) =>
                canonicalizeWorkspacePathKey("archive-conversation", {
                  conversationId: item.id,
                  cleanupWorktree: false,
                  source: "worktree_delete",
                }),
              ),
            ));
          await invokeDesktopRpc("worktree-delete", {
            params: {
              hostId: glen.id,
              worktree: worktree.dir,
              reason: "settings-delete-targeted",
            },
          });
          onWorktreeDeleted();
        } catch (inlet) {
          appActionSidebarProjectRefSchema.error("Failed to delete worktree", {
            safe: {},
            sensitive: {
              error: AVATAR_OVERLAY_SURFACE_STACK_IDS(inlet),
            },
          });
          beacon.get(toastAtom).danger(
            dome.formatMessage({
              id: "settings.worktrees.delete.error",
              defaultMessage: "Failed to delete worktree",
              description:
                "Error message when deleting a worktree from settings",
            }),
          );
        } finally {
          fjord(false);
        }
      }
    };
  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-medium text-token-text-primary">
            {
              <MemoizedFormattedMessage
                {...{
                  id: "settings.worktrees.row.title",
                  defaultMessage: "Worktree",
                  description: "Label for a worktree row",
                }}
              />
            }
          </div>
          <div className="mt-1 truncate text-xs text-token-text-secondary">
            {worktree.dir}
          </div>
        </div>
        {
          <ReadLoginRouteQuerySnapshot
            {...{
              className: "shrink-0",
              color: "danger",
              loading: eddy,
              onClick: () => {
                hearth();
              },
              size: "toolbar",
              children: (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.worktrees.row.delete",
                    defaultMessage: "Delete",
                    description: "Delete button label for a worktree row",
                  }}
                />
              ),
            }}
          />
        }
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xs text-token-text-secondary">
          {
            <MemoizedFormattedMessage
              {...{
                id: "settings.worktrees.row.conversations",
                defaultMessage: "Conversations",
                description:
                  "Label for conversations list within a worktree row",
              }}
            />
          }
        </div>
        {isConversationsLoading ? (
          <div className="flex items-center gap-2 text-xs text-token-text-secondary">
            {
              <VSCODE_EDITOR_ID
                {...{
                  className: "icon-xxs",
                }}
              />
            }
            {
              <MemoizedFormattedMessage
                {...{
                  id: "settings.worktrees.row.conversations.loading",
                  defaultMessage: "Loading conversations…",
                  description: "Loading label for conversations list",
                }}
              />
            }
          </div>
        ) : visibleConversations.length === 0 ? (
          <div className="text-xs text-token-text-secondary">
            {
              <MemoizedFormattedMessage
                {...{
                  id: "settings.worktrees.row.conversations.empty",
                  defaultMessage: "No conversations linked to this worktree.",
                  description:
                    "Empty state for conversations list in worktree row",
                }}
              />
            }
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {visibleConversations.map((item) => {
              let jetty = ensureComposerEsm_Rst_Init(item);
              return (
                <button
                  key={item.id}
                  className="focus-visible:outline-token-focus flex w-full items-center justify-between gap-2 rounded-lg px-row-x py-row-y text-left text-sm text-token-text-primary hover:bg-token-list-hover-background hover:text-token-text-primary/80 focus-visible:outline-1 focus-visible:outline-offset-[-2px]"
                  onClick={() => {
                    crag(item.id);
                  }}
                  type="button"
                >
                  <span className="truncate">
                    {jetty || (
                      <MemoizedFormattedMessage
                        {...{
                          id: "settings.worktrees.conversation.untitled",
                          defaultMessage: "Untitled conversation",
                          description: "Fallback title for a conversation",
                        }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
var river, slate, $;
esmInit(() => {
  river = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  slate = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  deferredUiWX();
  AppActionSelector();
  AppInitialWst();
  ensureSettingsQueryAtomsInit();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Ilt_Init();
  ensureUseCodexWorktreesInit();
  AppInitialP3();
  AppInitialTM();
  useEventCallback();
  ensureConversationPageEsm_Ist_Init();
  useLocalEnvironmentEditorState();
  ensureAppScopeInit();
  extractColonPrefixedNamedTokens();
  AppIconOi();
  kite();
  codexCommandTheme();
  AppIconBO();
  useGateEnabledWithAccountData();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureAppShellAtomsInit();
  posixPathBasename();
  ensureComposerEsm_Wdt_Init();
  ensureComposerEsm_ML_Init();
  scrollAppActionTargetTo();
  isStartingProcessExpired();
})();
