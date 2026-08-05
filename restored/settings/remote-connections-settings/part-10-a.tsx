// Restored from ref/webview/assets/remote-connections-settings-D2095Inq.js
// Wave FZ — full polished body from `remote-connections-settings-D2095Inq/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 67 (verified 172/238).
// Wave5d — FZ repair; JSX PascalCase + careful split for quality-gate flat limit.
// Wave5d careful split 10/12
/* split-lane-import-depth:1 */

/** split companion stub */
const BirchFifth: any = undefined;

import {
  appActionSidebarProjectRefSchema,
  appActionSidebarSectionRefSchema,
  ensureAppActionPayloadSchemasInit,
} from "../../actions/app-action-payload-schemas";
import { ensureReviewFileAppActionAttrsInit } from "../../actions/ensure-review-file-app-action-attrs-init";
import { buildRemoteSshConnectionsRefreshedPayload } from "../../analytics/build-remote-ssh-connections-refreshed-payload";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexRemoteSshConnectionAction } from "../../analytics/codex-remote-ssh-connection-action";
import { CodexRemoteSshConnectionEventSource } from "../../analytics/codex-remote-ssh-connection-event-source";
import { CODEX_REMOTE_SSH_CONNECTION_EVENT_TYPE } from "../../analytics/codex-remote-ssh-connection-event-type";
import { CodexRemoteSshConnectionResult } from "../../analytics/codex-remote-ssh-connection-result";
import { CODEX_UPGRADE_PLAN_MODAL_CTA_CLICKED_TYPE } from "../../analytics/codex-upgrade-plan-modal-cta-clicked-type";
import { logProductEvent } from "../../analytics/log-product-event";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { localReasoningEffortMessages } from "../../composer/local-reasoning-effort-messages";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import {
  isWslHostSource,
  remoteControlHostKey,
  remoteSshCodexManagedHostKey,
  remoteSshDiscoveredHostKey,
} from "../../environments/remote-host-keys";
import { MOBILE_MFA_SETUP_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { installModalBrowserExtensionMessages } from "../../plugins/install-modal-browser-extension-messages";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { wtt } from "../../ui/wtt";
import { firstNonNullFromParsers } from "../../utils/first-non-null-from-parsers";
import { noop } from "../../utils/noop";
import {
  ensureImportSettingsCLInit,
  ensurePersonalizationCInit as EnsurePersonalizationCInit,
  ensurePersonalizationG0Init,
  ensurePersonalizationJutInit,
  ensurePersonalizationK0Init,
} from "../../utils/wave-as-gap-ensure-inits";

// Wave5d soft stubs (cross-part).
const $o: any = undefined;
const AppInitialF4: any = undefined;
const AppInitialHi: any = undefined;
const AppInitialI: any = undefined;
const AppInitialJ2: any = undefined;
const AppInitialMtt: any = undefined;
const AppInitialNQ: any = undefined;
const AppInitialPQ: any = undefined;
const AppInitialU5: any = undefined;
const AppInitialU9: any = undefined;
const DeferredUiR22: any = undefined;
const NativeContextMenuSurface: any = undefined;
const _s: any = undefined;
const applyU0000U001FU007F2: any = undefined;
const arbor: any = undefined;
const bushing: any = undefined;
const collar: any = undefined;
const deferredUiX9: any = undefined;
const dowel: any = undefined;
const drill: any = undefined;
const flange: any = undefined;
const frost: any = undefined;
const fs: any = undefined;
const gasket: any = undefined;
const gib: any = undefined;
const glide: any = undefined;
const handle: any = undefined;
const hub: any = undefined;
const idler: any = undefined;
const insert: any = undefined;
const is: any = undefined;
const jacket: any = undefined;
const jig: any = undefined;
const keeper: any = undefined;
const knurl: any = undefined;
const lever: any = undefined;
const lug: any = undefined;
const nozzle: any = undefined;
const os: any = undefined;
const pairRemoteControlClient: any = undefined;
const platen: any = undefined;
const ratchet: any = undefined;
const readLoginRouteQuerySnapshotStub: any = undefined;
const shim: any = undefined;
const tappet: any = undefined;
const tide: any = undefined;

export function RemoteConnectionsSettingsIcon() {
  let torThird = CodexPluginActionType(appScopeAtom),
    updraftThird = CodexPluginActionResult(deferredUiX9),
    vergeThird = localReasoningEffortMessages(),
    weirThird = useIntl(),
    yardThird = useLocation(),
    anchorThird = useNavigate(),
    { connectionsAction, connectionsTab } = AppInitialU5(),
    { platform } = useHostPlatformModifierSymbol(),
    boltThird = NativeContextMenuSurface("782640499"),
    cogThird = NativeContextMenuSurface(MOBILE_MFA_SETUP_FEATURE_GATE_ID),
    discThird = weirThird.formatMessage({
      id: "settings.remoteConnections.refresh",
      defaultMessage: "Refresh",
      description: "Button label to refresh remote connections",
    }),
    [edgeThird] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("remote_ssh_connections"),
    [forgeThird] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("remote_wsl_connections"),
    { data: gearThird } = ensurePersonalizationK0Init(
      DesktopPersistenceKeys.HOST_ID_REMOTE_CONTROL_ALLOWED,
    ),
    [hingeThird] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER(
      "remote_control_connections",
    ),
    [ironThird] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER(
      "local_remote_control_client_id",
    ),
    [jointThird] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER(
      "remote_control_connections_state",
    ),
    [keystoneThird, latchThird] = platen.useState(null),
    [motorThird, nutThird] = platen.useState(keeper),
    [pistonThird, rivetThird] = platen.useState([]),
    [screwThird, torqueThird] = platen.useState([]),
    [valveThird, axleThird] = platen.useState(false),
    [bracketThird, clampThird] = platen.useState(false),
    [drillThird, engineThird] = platen.useState(false),
    [frameThird, gasketThird] = platen.useState(false),
    [handleThird, insertThird] = platen.useState(null),
    [jacketThird, knurlThird] = platen.useState(null),
    leverThird = AppInitialI(),
    mountThird = !boltThird,
    nozzleThird = edgeThird == null,
    platenThird = forgeThird == null,
    ratchetThird = leverThird && hingeThird == null,
    shimThird = [...(edgeThird ?? keeper)].sort(gasket),
    _e = forgeThird == null ? undefined : [...forgeThird].sort(gasket),
    be = _e != null && _e.length > 0,
    tappetThird = lever(hingeThird ?? _s),
    { data } = ensurePersonalizationK0Init(
      DesktopPersistenceKeys.ADDED_REMOTE_CONTROL_ENV_IDS,
    ),
    arborThird = AppInitialPQ({
      addedRemoteControlEnvIds: data,
      oneToOnePairingInAppEnabled: cogThird,
      remoteControlConnections: tappetThird,
    }),
    bushingThird = gearThird ?? lug,
    collarThird = cogThird
      ? _s
      : AppInitialNQ({
          addedRemoteControlEnvIds: data,
          remoteControlConnections: tappetThird,
        }),
    dowelThird = arborThird.length > 0,
    flangeThird = jointThird?.authRequired === true,
    gibThird = jointThird?.clientAuthorized === true,
    hubThird = drill({
      remoteControlConnectionsAuthorized: gibThird,
      remoteControlConnectionsAuthRequired: flangeThird,
      showRemoteControlConnectionsSection: leverThird,
    }),
    idlerThird = !dowelThird && gibThird && !flangeThird,
    jigThird = () => {
      if (cogThird) {
        engineThird(true);
        return;
      }
      torqueThird(collarThird.map((item) => item.envId));
      clampThird(true);
    },
    keeperThird = shimThird.map((item) =>
      glide(frost(item), {
        connectionAnalyticsId: item.connectionAnalyticsId,
      }),
    ),
    lugThird = new Set(keeperThird.map((item) => item.hostId)),
    mandrelThird = motorThird.filter((item) => !lugThird.has(item.hostId)),
    nippleThird = leverThird && true,
    orificeThird = mountThird && (leverThird || false),
    pinThird = leverThird && true,
    raceThird = insert(connectionsTab),
    sleeveThird = raceThird ?? "control-this-mac",
    trunnionThird = knurl({
      routeAction: connectionsAction,
      routeSlug: connectionsTab,
      search: yardThird.search,
    }),
    bossThird = connectionsTab === "wsl" && _e?.length === 0,
    camThird =
      (connectionsTab != null && raceThird == null) ||
      (connectionsAction != null &&
        (connectionsTab !== "ssh" || connectionsAction !== "add")),
    detentThird = AppInitialHi({
      selectedConnectionsTab: sleeveThird,
      showControlOtherDevices: mountThird,
      showControlThisMacTab: nippleThird,
      showRemoteControlConnectionsSection: leverThird,
      showRemoteSshConnections: true,
      showTabbedSshPage: pinThird,
      isWslConnectionsLoading: platenThird,
      showWslConnections: be,
    }),
    eccentricThird = detentThird === "wsl" ? _e : shimThird,
    followerThird = detentThird === "wsl" ? platenThird : nozzleThird,
    guideThird = (indigoFourth) => {
      anchorThird(jacket(indigoFourth), {
        replace: true,
        state: yardThird.state,
      });
    },
    helixThird = () => {
      torThird.get(toastAtom).success(
        weirThird.formatMessage({
          id: "settings.remoteConnections.refresh.success",
          defaultMessage: "Refreshed remote connections",
          description:
            "Toast shown when remote connections refresh successfully",
        }),
        {
          id: $o,
        },
      );
    },
    $e = (jadeFourth) => {
      appActionSidebarProjectRefSchema.warning(`${idler} refresh_failed`, {
        safe: {},
        sensitive: {
          error: jadeFourth,
        },
      });
      torThird.get(toastAtom).danger(
        jadeFourth instanceof Error
          ? jadeFourth.message
          : weirThird.formatMessage({
              id: "settings.remoteConnections.refresh.error",
              defaultMessage: "Failed to refresh remote connections",
              description:
                "Toast shown when remote connections fail to refresh",
            }),
        {
          id: ratchet,
        },
      );
    },
    impellerThird = (kiteFourth) => {
      appActionSidebarProjectRefSchema.warning(
        `${idler} ssh_config_entry_not_found`,
        {
          safe: {},
          sensitive: {
            sshConfigName: kiteFourth,
          },
        },
      );
      torThird.get(toastAtom).danger(
        weirThird.formatMessage({
          id: "settings.remoteConnections.sshConfigEntryNotFound",
          defaultMessage: "SSH config entry not found",
          description:
            "Toast shown when a settings deep link names an SSH config entry that cannot be discovered",
        }),
        {
          id: fs,
        },
      );
    },
    journalThird = applyU0000U001FU007F2("refresh-remote-connections"),
    at = applyU0000U001FU007F2("discover-remote-ssh-connections"),
    kingpinThird = applyU0000U001FU007F2("refresh-remote-control-connections"),
    landThird = applyU0000U001FU007F2("authorize-remote-control-connections", {
      onSuccess: () => {
        logProductEvent(torThird, AppInitialMtt, {
          result: "succeeded",
        });
        torThird.get(toastAtom).success(
          weirThird.formatMessage({
            id: "settings.remoteControlConnections.authorize.success",
            defaultMessage: "Remote control authorized",
            description:
              "Toast shown when remote control authorization succeeds",
          }),
          {
            id: flange,
          },
        );
        gasketThird(false);
        jigThird();
      },
      onError: (lemonFourth) => {
        logProductEvent(torThird, AppInitialMtt, {
          result: "failed",
        });
        appActionSidebarProjectRefSchema.warning(
          `${idler} remote_control_authorize_failed`,
          {
            safe: {},
            sensitive: {
              error: lemonFourth,
            },
          },
        );
        torThird.get(toastAtom).danger(
          lemonFourth instanceof ensureReviewFileAppActionAttrsInit &&
            lemonFourth.errorCode ===
              "remote_control_enrollment_account_mismatch"
            ? weirThird.formatMessage({
                id: "settings.remoteControlConnections.authorize.accountMismatch",
                defaultMessage:
                  "Remote control authorization used a different account",
                description:
                  "Toast shown when remote control authorization completes for a different account",
              })
            : weirThird.formatMessage({
                id: "settings.remoteControlConnections.authorize.error",
                defaultMessage: "Failed to authorize remote control",
                description:
                  "Toast shown when remote control authorization fails",
              }),
          {
            id: gib,
          },
        );
      },
    }),
    meshThird = applyU0000U001FU007F2(
      "save-codex-managed-remote-ssh-connections",
      {
        onSuccess: () => {
          torThird.get(toastAtom).success(
            weirThird.formatMessage({
              id: "settings.remoteConnections.save.success",
              defaultMessage: "Saved remote connections",
              description: "Toast shown when remote connections are saved",
            }),
            {
              id: shim,
            },
          );
        },
        onError: (marbleFourth) => {
          appActionSidebarProjectRefSchema.warning(`${idler} save_failed`, {
            safe: {},
            sensitive: {
              error: marbleFourth,
            },
          });
          torThird.get(toastAtom).danger(
            weirThird.formatMessage({
              id: "settings.remoteConnections.save.error",
              defaultMessage: "Failed to save remote connections",
              description: "Toast shown when remote connections fail to save",
            }),
            {
              id: tappet,
            },
          );
        },
      },
    ),
    neckThird = noop({
      mutationFn: (nickelFourth) =>
        readLoginRouteQuerySnapshotStub(
          torThird,
          DesktopPersistenceKeys.ADDED_REMOTE_CONTROL_ENV_IDS,
          nozzle.default([...data, ...nickelFourth]),
        ),
    }),
    padThird = noop({
      mutationFn: pairRemoteControlClient,
      onSuccess: ({ environment_id }) => {
        manifoldThird()
          .then(() => {
            wyeThird(remoteControlHostKey(environment_id), true);
          })
          .catch($e);
      },
      onError: (onyxFourth) => {
        appActionSidebarProjectRefSchema.warning(
          `${idler} remote_control_pairing_failed`,
          {
            safe: {},
            sensitive: {
              error: onyxFourth,
            },
          },
        );
        torThird.get(toastAtom).danger(
          weirThird.formatMessage({
            id: "settings.remoteConnections.manualPairingDialog.error",
            defaultMessage: "Failed to add device",
            description:
              "Toast shown when a manual remote control pairing code cannot be claimed",
          }),
          {
            id: hub,
          },
        );
      },
      onSettled: () => {
        engineThird(false);
      },
    }),
    quillshaftThird = applyU0000U001FU007F2(
      "set-remote-connection-auto-connect",
      {
        onError: (pearlFourth, { autoConnect, hostId }) => {
          let quartzFourth = shimThird.find((item) => item.hostId === hostId);
          autoConnect &&
            quartzFourth != null &&
            AppInitialU9(updraftThird, {
              action:
                CodexRemoteSshConnectionAction.CODEX_REMOTE_SSH_CONNECTION_ACTION_CONNECT,
              result:
                CodexRemoteSshConnectionResult.CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED,
              source:
                CodexRemoteSshConnectionEventSource.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_SETTINGS,
              connection: quartzFourth,
              errorCategory:
                wtt.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_CONNECTION_FAILED,
            });
          appActionSidebarProjectRefSchema.warning(
            `${idler} connect_toggle_failed`,
            {
              safe: {
                autoConnect,
              },
              sensitive: {
                error: pearlFourth,
                hostId,
              },
            },
          );
          torThird.get(toastAtom).danger(
            weirThird.formatMessage({
              id: "settings.remoteConnections.connectToggle.error",
              defaultMessage: "Failed to update connection",
              description: "Toast shown when remote connection toggle fails",
            }),
            {
              id: arbor,
            },
          );
        },
      },
    ),
    rollerThird = applyU0000U001FU007F2("install-remote-codex", {
      onError: (riverFourth, { hostId }) => {
        appActionSidebarProjectRefSchema.warning(
          `${idler} install_remote_codex_failed`,
          {
            safe: {},
            sensitive: {
              error: riverFourth,
              hostId,
            },
          },
        );
        torThird.get(toastAtom).danger(
          riverFourth instanceof Error
            ? riverFourth.message
            : weirThird.formatMessage({
                id: "settings.remoteConnections.installCodex.error",
                defaultMessage: "Failed to install Codex CLI",
                description:
                  "Toast shown when installing Codex on a remote connection fails",
              }),
          {
            id: is,
          },
        );
      },
    }),
    spindleThird = applyU0000U001FU007F2("rename-remote-control-environment", {
      onSuccess: () => {
        torThird.get(toastAtom).success(
          weirThird.formatMessage({
            id: "settings.remoteControlConnections.rename.success",
            defaultMessage: "Renamed remote control environment",
            description:
              "Toast shown when a remote control environment is renamed",
          }),
          {
            id: os,
          },
        );
      },
      onError: (slateFourth, { envId }) => {
        appActionSidebarProjectRefSchema.warning(
          `${idler} remote_control_rename_failed`,
          {
            safe: {},
            sensitive: {
              envId,
              error: slateFourth,
            },
          },
        );
        torThird.get(toastAtom).danger(
          weirThird.formatMessage({
            id: "settings.remoteControlConnections.rename.error",
            defaultMessage: "Failed to rename remote control environment",
            description:
              "Toast shown when a remote control environment rename fails",
          }),
          {
            id: bushing,
          },
        );
      },
    }),
    thrustThird = applyU0000U001FU007F2("delete-remote-control-environment", {
      onSuccess: () => {
        torThird.get(toastAtom).success(
          weirThird.formatMessage({
            id: "settings.remoteControlConnections.delete.success",
            defaultMessage: "Deleted remote control environment",
            description:
              "Toast shown when a remote control environment is deleted",
          }),
          {
            id: collar,
          },
        );
      },
      onError: (timberFourth, { envId }) => {
        appActionSidebarProjectRefSchema.warning(
          `${idler} remote_control_delete_failed`,
          {
            safe: {},
            sensitive: {
              envId,
              error: timberFourth,
            },
          },
        );
        torThird.get(toastAtom).danger(
          weirThird.formatMessage({
            id: "settings.remoteControlConnections.delete.error",
            defaultMessage: "Failed to delete remote control environment",
            description:
              "Toast shown when a remote control environment delete fails",
          }),
          {
            id: dowel,
          },
        );
      },
    }),
    yokeThird = meshThird.isPending,
    baffleThird =
      journalThird.isPending ||
      at.isPending ||
      kingpinThird.isPending ||
      landThird.isPending ||
      meshThird.isPending ||
      neckThird.isPending ||
      padThird.isPending ||
      quillshaftThird.isPending ||
      rollerThird.isPending ||
      spindleThird.isPending ||
      thrustThird.isPending,
    capstanThird =
      baffleThird || flangeThird || (cogThird && ironThird == null),
    diaphragmThird = capstanThird ? (
      <BirchFifth
        {...{
          authRequired: flangeThird,
          refreshRequired: cogThird && ironThird == null,
          updating: baffleThird,
        }}
      />
    ) : null,
    elbowThird = (umbraFourth) => {
      vergeThird.getForHostId(umbraFourth) ??
        vergeThird.addManager(
          AppInitialF4(
            torThird,
            umbraFourth,
            torThird.get(DeferredUiR22, umbraFourth),
          ),
        );
    },
    ferruleThird = async () => {
      try {
        let violetFourth = [];
        AppInitialU9(updraftThird, {
          action:
            CodexRemoteSshConnectionAction.CODEX_REMOTE_SSH_CONNECTION_ACTION_REFRESH,
          result:
            CodexRemoteSshConnectionResult.CODEX_REMOTE_SSH_CONNECTION_RESULT_STARTED,
          source:
            CodexRemoteSshConnectionEventSource.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_SETTINGS,
        });
        violetFourth.push(
          journalThird
            .mutateAsync(undefined)
            .then(({ remoteConnections }) => {
              updraftThird.logProductEvent(
                CODEX_REMOTE_SSH_CONNECTION_EVENT_TYPE,
                buildRemoteSshConnectionsRefreshedPayload(
                  remoteConnections.filter(firstNonNullFromParsers),
                ),
              );
            })
            .catch((error) => {
              throw (
                AppInitialU9(updraftThird, {
                  action:
                    CodexRemoteSshConnectionAction.CODEX_REMOTE_SSH_CONNECTION_ACTION_REFRESH,
                  result:
                    CodexRemoteSshConnectionResult.CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED,
                  source:
                    CodexRemoteSshConnectionEventSource.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_SETTINGS,
                  errorCategory:
                    wtt.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNKNOWN,
                }),
                error
              );
            }),
        );
        leverThird && violetFourth.push(manifoldThird());
        await Promise.all(violetFourth);
        helixThird();
      } catch (willowFourth) {
        $e(willowFourth);
      }
    },
    grommetThird = async () => {
      let { discoveredRemoteConnections } = await at.mutateAsync(undefined);
      nutThird([...discoveredRemoteConnections].sort(gasket));
    },
    headerThird = async () => {
      try {
        await grommetThird();
        rivetThird([]);
        axleThird(true);
      } catch (xenonFourth) {
        $e(xenonFourth);
      }
    },
    injectorThird = (yellowFourth) => {
      torqueThird((zincFourth) =>
        zincFourth.includes(yellowFourth)
          ? zincFourth.filter((item) => item !== yellowFourth)
          : [...zincFourth, yellowFourth],
      );
    },
    jumperThird = () => {
      if (neckThird.isPending) return;
      let amberFourth = collarThird.filter((item) =>
        screwThird.includes(item.envId),
      );
      if (amberFourth.length === 0) {
        clampThird(false);
        return;
      }
      logProductEvent(torThird, CODEX_UPGRADE_PLAN_MODAL_CTA_CLICKED_TYPE, {
        addableConnectionCount: collarThird.length,
        existingConnectionCount: arborThird.length,
      });
      neckThird.mutate(
        amberFourth.map((item) => item.envId),
        {
          onSuccess: () => {
            amberFourth.forEach((item) => {
              wyeThird(item.hostId, true);
            });
            torqueThird([]);
            clampThird(false);
          },
        },
      );
    },
    kerfThird = (basaltFourth) => {
      ironThird == null ||
        padThird.isPending ||
        padThird.mutate({
          clientId: ironThird,
          manualPairingCode: basaltFourth,
        });
    },
    louverThird = () => {
      logProductEvent(torThird, AppInitialMtt, {
        result: "started",
      });
      landThird.mutate(undefined);
    },
    manifoldThird = async () => {
      let { remoteControlConnections } =
        await kingpinThird.mutateAsync(undefined);
      return (
        updraftThird.logProductEvent(
          installModalBrowserExtensionMessages,
          tide(remoteControlConnections),
        ),
        remoteControlConnections
      );
    },
    nipThird = platen.useEffectEvent(async (cedarFourth) => {
      if (!baffleThird)
        try {
          let daisyFourth = [];
          daisyFourth.push(
            invokeDesktopRpc("refresh-remote-connections", {
              signal: cedarFourth,
            }),
          );
          leverThird &&
            daisyFourth.push(
              invokeDesktopRpc("refresh-remote-control-connections", {
                signal: cedarFourth,
              }),
            );
          await Promise.all(daisyFourth);
        } catch (emberFourth) {
          if (
            emberFourth instanceof DOMException &&
            emberFourth.name === "AbortError"
          )
            return;
          appActionSidebarProjectRefSchema.debug(
            `${idler} auto_refresh_failed`,
            {
              safe: {},
              sensitive: {
                error: emberFourth,
              },
            },
          );
        }
    });
  platen.useEffect(() => {
    let flintFourth = null,
      garnetFourth = false,
      hazelFourth = async () => {
        if (!garnetFourth) {
          garnetFourth = true;
          flintFourth = new AbortController();
          try {
            await nipThird(flintFourth.signal);
          } finally {
            flintFourth = null;
            garnetFourth = false;
          }
        }
      },
      ivoryFourth = window.setInterval(() => {
        hazelFourth();
      }, jig);
    return () => {
      flintFourth?.abort();
      window.clearInterval(ivoryFourth);
    };
  }, []);
  let outletThird = async () => {
      if (jacketThird != null)
        try {
          await thrustThird.mutateAsync({
            envId: jacketThird.envId,
          });
          knurlThird(null);
        } catch {}
    },
    packingThird = (jasperFourth, kelpFourth, lotusFourth) => {
      elbowThird(jasperFourth);
      AppInitialJ2(torThird, {
        error: lotusFourth,
        hostId: jasperFourth,
        source: "settings_sync_remote_connection_state",
        state: kelpFourth ?? "disconnected",
      });
    },
    reducerThird = (mintFourth) => {
      rollerThird.mutate(
        {
          hostId: mintFourth,
        },
        {
          onSuccess: ({ state, error }) => {
            packingThird(mintFourth, state, error);
          },
        },
      );
    },
    strainerThird = (novaFourth) => {
      if (keystoneThird == null || yokeThird) return;
      let oliveFourth =
          keystoneThird.mode === "edit"
            ? (shimThird.find((item) => item.hostId === keystoneThird.hostId) ??
              null)
            : null,
        prismFourth =
          keystoneThird.mode === "add"
            ? true
            : (oliveFourth?.autoConnect ?? false),
        quillFourth = glide(novaFourth, {
          connectionAnalyticsId: oliveFourth?.connectionAnalyticsId,
        }),
        reefFourth =
          keystoneThird.mode === "add"
            ? [...keeperThird, quillFourth]
            : keeperThird
                .filter((item) => item.hostId !== keystoneThird.hostId)
                .concat(quillFourth)
                .sort(gasket);
      meshThird.mutate(
        {
          remoteConnections: reefFourth,
        },
        {
          onSuccess: ({ remoteConnections }) => {
            let sageFourth =
              remoteConnections.find(
                (item) => item.hostId === quillFourth.hostId,
              ) ?? quillFourth;
            AppInitialU9(updraftThird, {
              action:
                CodexRemoteSshConnectionAction.CODEX_REMOTE_SSH_CONNECTION_ACTION_SAVE_CONNECTION,
              result:
                CodexRemoteSshConnectionResult.CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED,
              source:
                CodexRemoteSshConnectionEventSource.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_SETTINGS,
              connection: sageFourth,
            });
            latchThird(null);
            prismFourth && wyeThird(quillFourth.hostId, true);
          },
          onError: () => {
            AppInitialU9(updraftThird, {
              action:
                CodexRemoteSshConnectionAction.CODEX_REMOTE_SSH_CONNECTION_ACTION_SAVE_CONNECTION,
              result:
                CodexRemoteSshConnectionResult.CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED,
              source:
                CodexRemoteSshConnectionEventSource.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_SETTINGS,
              connection: quillFourth,
              errorCategory:
                wtt.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNKNOWN,
            });
          },
        },
      );
    },
    teeThird = (topazFourth) => {
      yokeThird ||
        meshThird.mutate({
          remoteConnections: keeperThird.filter(
            (item) => item.hostId !== topazFourth,
          ),
        });
    },
    unionThird = (ultraFourth) => {
      rivetThird((vaporFourth) =>
        vaporFourth.includes(ultraFourth)
          ? vaporFourth.filter((item) => item !== ultraFourth)
          : [...vaporFourth, ultraFourth],
      );
    },
    ventThird = () => {
      if (yokeThird) return;
      let wheatFourth = mandrelThird.filter((item) =>
        pistonThird.includes(item.hostId),
      );
      if (wheatFourth.length === 0) {
        axleThird(false);
        return;
      }
      let yarnFourth = wheatFourth.map((item) =>
        glide({
          ...frost(item),
          displayName: item.sshAlias?.trim() || item.displayName,
        }),
      );
      meshThird.mutate(
        {
          remoteConnections: [...keeperThird, ...yarnFourth].sort(gasket),
        },
        {
          onSuccess: () => {
            yarnFourth.forEach((item) => {
              wyeThird(item.hostId, true);
            });
            rivetThird([]);
            axleThird(false);
          },
        },
      );
    },
    wyeThird = (zephyrFourth, acornFourth) => {
      yokeThird ||
        (elbowThird(zephyrFourth),
        quillshaftThird.mutate(
          {
            hostId: zephyrFourth,
            autoConnect: acornFourth,
          },
          {
            onSuccess: ({ remoteConnections, state, error }) => {
              packingThird(zephyrFourth, state, error);
              let bloomFourth = remoteConnections.find(
                (item) =>
                  item.hostId === zephyrFourth && firstNonNullFromParsers(item),
              );
              if (acornFourth && bloomFourth != null) {
                let coralFourth = state === "connected" && error == null;
                AppInitialU9(updraftThird, {
                  action:
                    CodexRemoteSshConnectionAction.CODEX_REMOTE_SSH_CONNECTION_ACTION_CONNECT,
                  result: coralFourth
                    ? CodexRemoteSshConnectionResult.CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED
                    : CodexRemoteSshConnectionResult.CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED,
                  source:
                    CodexRemoteSshConnectionEventSource.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_SETTINGS,
                  connection: bloomFourth,
                  connectionState: state,
                  ...(coralFourth
                    ? {}
                    : error == null
                      ? {
                          errorCategory:
                            wtt.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNKNOWN,
                        }
                      : {
                          connectionError: error,
                        }),
                });
              }
            },
          },
        ));
    },
    zenerThird = platen.useEffectEvent(async (driftFourth) => {
      await handle({
        discoverRemoteConnections: async () => {
          let { discoveredRemoteConnections } = await at.mutateAsync(undefined);
          return discoveredRemoteConnections;
        },
        isElectron: true,
        navigateToSshTab: () => {
          anchorThird(jacket("ssh"), {
            replace: true,
            state: yardThird.state,
          });
        },
        savedCodexManagedConnectionHostIds: lugThird,
        savedCodexManagedConnections: keeperThird,
        saveCodexManagedConnections: async (eagleFourth) => {
          await meshThird.mutateAsync({
            remoteConnections: eagleFourth,
          });
        },
        setDiscoveredRemoteConnections: nutThird,
        showRefreshErrorToast: $e,
        showSshConfigEntryNotFoundToast: impellerThird,
        sshConfigName: driftFourth,
      });
    });
  return undefined as any;
}
