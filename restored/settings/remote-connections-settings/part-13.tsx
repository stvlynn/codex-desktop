// Restored from ref/webview/assets/remote-connections-settings-D2095Inq.js
// Wave5d — FZ repair; minimal-preamble part for mega JSX soft-split.
/* split-lane-import-depth:1 */

import {
  Navigate,
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { ElectronOnly } from "../../ui/electron-only";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";

// Wave5d soft stubs (minimal preamble).
const $e: any = undefined;
const AppInitialNQ: any = undefined;
const AppInitialNi: any = undefined;
const AppInitialPl: any = undefined;
const AzureFifth: any = undefined;
const Content: any = undefined;
const Dismiss: any = undefined;
const FieldFifth: any = undefined;
const HavenFifth: any = undefined;
const Header: any = undefined;
const HillFifth: any = undefined;
const NorthFifth: any = undefined;
const PineFifth: any = undefined;
const QuestFifth: any = undefined;
const RainFifth: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const VineFifth: any = undefined;
const WindFifth: any = undefined;
const __splitParams: any = undefined;
const alphaFourth: any = undefined;
const arborThird: any = undefined;
const at: any = undefined;
const axleThird: any = undefined;
const baffleThird: any = undefined;
const bossThird: any = undefined;
const bracketThird: any = undefined;
const bravoFourth: any = undefined;
const bushingThird: any = undefined;
const camThird: any = undefined;
const capstanThird: any = undefined;
const clampThird: any = undefined;
const cogThird: any = undefined;
const collarThird: any = undefined;
const copperFourth: any = undefined;
const data: any = undefined;
const detentThird: any = undefined;
const diaphragmThird: any = undefined;
const discThird: any = undefined;
const dowelThird: any = undefined;
const drillThird: any = undefined;
const eagle: any = undefined;
const eccentricThird: any = undefined;
const elbowThird: any = undefined;
const engineThird: any = undefined;
const ferruleThird: any = undefined;
const flangeThird: any = undefined;
const followerThird: any = undefined;
const frameThird: any = undefined;
const frost: any = undefined;
const gasketThird: any = undefined;
const gibThird: any = undefined;
const grommetThird: any = undefined;
const guideThird: any = undefined;
const handleThird: any = undefined;
const harborFourth: any = undefined;
const hostId: any = undefined;
const hubThird: any = undefined;
const idlerThird: any = undefined;
const injectorThird: any = undefined;
const insertThird: any = undefined;
const irisFourth: any = undefined;
const ironThird: any = undefined;
const item: any = undefined;
const jacketThird: any = undefined;
const jewelFourth: any = undefined;
const jigThird: any = undefined;
const jumperThird: any = undefined;
const kerfThird: any = undefined;
const keystoneThird: any = undefined;
const kingpinThird: any = undefined;
const knollFourth: any = undefined;
const knurlThird: any = undefined;
const landThird: any = undefined;
const latchThird: any = undefined;
const louverThird: any = undefined;
const lunarFourth: any = undefined;
const mandrelThird: any = undefined;
const manifoldThird: any = undefined;
const meshThird: any = undefined;
const mossFourth: any = undefined;
const mountThird: any = undefined;
const neckThird: any = undefined;
const northFourth: any = undefined;
const nozzle: any = undefined;
const orbitFourth: any = undefined;
const outletThird: any = undefined;
const padThird: any = undefined;
const pineFourth: any = undefined;
const pistonThird: any = undefined;
const platform: any = undefined;
const questFourth: any = undefined;
const ratchetThird: any = undefined;
const reducerThird: any = undefined;
const ridgeFourth: any = undefined;
const rollerThird: any = undefined;
const screwThird: any = undefined;
const shimThird: any = undefined;
const spindleThird: any = undefined;
const stormFourth: any = undefined;
const strainerThird: any = undefined;
const teeThird: any = undefined;
const thrustThird: any = undefined;
const tideFourth: any = undefined;
const torqueThird: any = undefined;
const unionThird: any = undefined;
const unityFourth: any = undefined;
const valeFourth: any = undefined;
const value: any = undefined;
const valveThird: any = undefined;
const ventThird: any = undefined;
const weirThird: any = undefined;
const wyeThird: any = undefined;
const yardThird: any = undefined;
const yokeThird: any = undefined;

export function RemoteConnectionsSettingsIcon__splitRest1__splitRest1(
  __splitParams: any,
) {
  return bossThird ? (
    <Navigate
      {...{
        to: "/settings/connections/ssh",
        replace: true,
        state: yardThird.state,
      }}
    />
  ) : camThird ? (
    <Navigate
      {...{
        to: "/settings",
        replace: true,
        state: yardThird.state,
      }}
    />
  ) : (
    <>
      {
        <OpenInBrowser
          {...{
            title: <SettingsSectionTitle slug="connections" />,
            subtitle: null,
            children: [
              harborFourth.length >= 2 &&
              harborFourth.some((item) => item.id === detentThird) ? (
                <AppInitialPl
                  ariaLabel={weirThird.formatMessage({
                    id: "settings.remoteConnections.tabs.ariaLabel",
                    defaultMessage: "Connections view",
                    description:
                      "Accessible label for the remote connections view selector",
                  })}
                  options={harborFourth}
                  selectedId={detentThird}
                  size="toolbar"
                  onSelect={guideThird}
                />
              ) : null,
              detentThird === "control-this-mac" ? (
                <ElectronOnly
                  {...{
                    electron: true,
                    children: <AzureFifth {...{}} />,
                  }}
                />
              ) : null,
              mountThird &&
              detentThird === "access-other-devices" &&
              hubThird ? (
                <UseChromeAndCodeThemeSync
                  {...{
                    children: [
                      <UseChromeAndCodeThemeSync.Header
                        {...{
                          title:
                            platform === "macOS" ? (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.remoteConnections.accessOtherDevices.devices.title",
                                  defaultMessage:
                                    "Devices you can control from this Mac",
                                  description:
                                    "Header title for the access other devices setup section",
                                }}
                              />
                            ) : (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.remoteConnections.accessOtherDevices.devices.title.windows",
                                  defaultMessage:
                                    "Devices you can control from this PC",
                                  description:
                                    "Header title for the access other devices setup section on Windows",
                                }}
                              />
                            ),
                        }}
                      />,
                      <UseChromeAndCodeThemeSync.Content
                        {...{
                          children: (
                            <ParseUrlOrFallback
                              {...{
                                children: (
                                  <Dismiss
                                    {...{
                                      spacing: "compact",
                                      title: null,
                                      description: (
                                        <MemoizedFormattedMessage
                                          {...{
                                            id: "settings.remoteConnections.accessOtherDevices.setup.description",
                                            defaultMessage:
                                              "Access and control other devices from this computer",
                                            description:
                                              "Description shown before this computer has been set up to access other devices",
                                          }}
                                        />
                                      ),
                                      illustration: (
                                        <FieldFifth
                                          {...{
                                            className:
                                              "h-6 w-auto text-token-text-primary",
                                          }}
                                        />
                                      ),
                                      actions: (
                                        <ReadLoginRouteQuerySnapshot
                                          {...{
                                            color: "secondary",
                                            disabled: baffleThird,
                                            onClick: () => {
                                              gasketThird(true);
                                            },
                                            children: (
                                              <MemoizedFormattedMessage
                                                {...{
                                                  id: "settings.remoteConnections.accessOtherDevices.setup.action",
                                                  defaultMessage: "Set up",
                                                  description:
                                                    "Button label to authorize remote control from the access-other-devices setup state",
                                                }}
                                              />
                                            ),
                                          }}
                                        />
                                      ),
                                    }}
                                  />
                                ),
                              }}
                            />
                          ),
                        }}
                      />,
                    ],
                  }}
                />
              ) : null,
              mountThird &&
              detentThird === "access-other-devices" &&
              !hubThird ? (
                <UseChromeAndCodeThemeSync
                  {...{
                    children: [
                      <UseChromeAndCodeThemeSync.Header
                        {...{
                          title:
                            platform === "macOS" ? (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.remoteConnections.accessOtherDevices.header.title",
                                  defaultMessage:
                                    "Devices you can control from this Mac",
                                  description:
                                    "Header title for the devices this computer can access",
                                }}
                              />
                            ) : (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.remoteConnections.accessOtherDevices.header.title.windows",
                                  defaultMessage:
                                    "Devices you can control from this PC",
                                  description:
                                    "Header title for the devices this Windows device can access",
                                }}
                              />
                            ),
                          actions: (
                            <>
                              {
                                <OptionalTooltip
                                  {...{
                                    tooltipContent: discThird,
                                    children: (
                                      <ReadLoginRouteQuerySnapshot
                                        {...{
                                          "aria-label": discThird,
                                          color: "ghost",
                                          size: "icon",
                                          disabled: baffleThird,
                                          onClick: () => {
                                            ferruleThird();
                                          },
                                          children: (
                                            <AppIconAlt
                                              {...{
                                                className: "icon-xs",
                                              }}
                                            />
                                          ),
                                        }}
                                      />
                                    ),
                                  }}
                                />
                              }
                              {dowelThird ? (
                                <OptionalTooltip
                                  {...{
                                    tooltipContent: diaphragmThird,
                                    children: (
                                      <span className="inline-flex">
                                        {
                                          <ReadLoginRouteQuerySnapshot
                                            {...{
                                              disabled: capstanThird,
                                              onClick: jigThird,
                                              children: (
                                                <MemoizedFormattedMessage
                                                  {...{
                                                    id: "settings.remoteConnections.add.short",
                                                    defaultMessage: "Add",
                                                    description:
                                                      "Button label for adding a connection from a connections settings tab",
                                                  }}
                                                />
                                              ),
                                            }}
                                          />
                                        }
                                      </span>
                                    ),
                                  }}
                                />
                              ) : null}
                            </>
                          ),
                        }}
                      />,
                      <UseChromeAndCodeThemeSync.Content
                        {...{
                          children: [
                            null,
                            ratchetThird ? (
                              <AppInitialNi>
                                {
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.remoteConnections.accessOtherDevices.loading",
                                      defaultMessage: "Loading devices…",
                                      description:
                                        "Loading message for devices this computer can access",
                                    }}
                                  />
                                }
                              </AppInitialNi>
                            ) : null,
                            ratchetThird ? null : (
                              <ParseUrlOrFallback
                                {...{
                                  children: (
                                    <>
                                      {idlerThird ? (
                                        <Dismiss
                                          {...{
                                            spacing: "compact",
                                            title: null,
                                            description: (
                                              <MemoizedFormattedMessage
                                                {...{
                                                  id: "settings.remoteConnections.accessOtherDevices.empty",
                                                  defaultMessage:
                                                    "No devices added yet",
                                                  description:
                                                    "Empty state for devices this computer can access",
                                                }}
                                              />
                                            ),
                                            illustration: (
                                              <FieldFifth
                                                {...{
                                                  className:
                                                    "h-6 w-auto text-token-text-primary",
                                                }}
                                              />
                                            ),
                                            actions: (
                                              <OptionalTooltip
                                                {...{
                                                  tooltipContent:
                                                    diaphragmThird,
                                                  children: (
                                                    <span className="inline-flex">
                                                      {
                                                        <ReadLoginRouteQuerySnapshot
                                                          {...{
                                                            disabled:
                                                              capstanThird,
                                                            onClick: jigThird,
                                                            children: (
                                                              <MemoizedFormattedMessage
                                                                {...{
                                                                  id: "settings.remoteConnections.add.short",
                                                                  defaultMessage:
                                                                    "Add",
                                                                  description:
                                                                    "Button label for adding a connection from a connections settings tab",
                                                                }}
                                                              />
                                                            ),
                                                          }}
                                                        />
                                                      }
                                                    </span>
                                                  ),
                                                }}
                                              />
                                            ),
                                          }}
                                        />
                                      ) : (
                                        <HillFifth
                                          {...{
                                            connections: arborThird,
                                            disabled: baffleThird,
                                            clientAuthorized: gibThird,
                                            installingCodexHostId: null,
                                            showEmptyState: false,
                                            remoteControlAllowedHostIds:
                                              bushingThird,
                                            onEditSshConnection: () => {},
                                            onInstallCodex: () => {},
                                            onRemoveSshConnection: () => {},
                                            onRenameRemoteControlConnection:
                                              async (
                                                irisFourth,
                                                jewelFourth,
                                              ) => {
                                                await spindleThird.mutateAsync({
                                                  envId: irisFourth,
                                                  name: jewelFourth,
                                                });
                                              },
                                            onRequestDeleteRemoteControlConnection:
                                              knurlThird,
                                            onToggleConnection: wyeThird,
                                            onRemoteControlAllowedForHost:
                                              async () => {},
                                            onLogoutConnection: (
                                              knollFourth,
                                            ) => {
                                              copperFourth(knollFourth);
                                            },
                                            onAuthenticate: () => {},
                                          }}
                                        />
                                      )}
                                      {flangeThird ? (
                                        <div className="p-3 text-sm text-token-text-secondary">
                                          {
                                            <MemoizedFormattedMessage
                                              {...{
                                                id: "settings.remoteControlConnections.authRequired",
                                                defaultMessage:
                                                  "Sign in to ChatGPT, then refresh to load remote control environments",
                                                description:
                                                  "Message shown when remote control environments require desktop ChatGPT auth",
                                              }}
                                            />
                                          }
                                        </div>
                                      ) : null}
                                    </>
                                  ),
                                }}
                              />
                            ),
                          ],
                        }}
                      />,
                    ],
                  }}
                />
              ) : null,
              detentThird === "ssh" || detentThird === "wsl" ? (
                <UseChromeAndCodeThemeSync
                  {...{
                    children: [
                      <UseChromeAndCodeThemeSync.Header
                        {...{
                          title:
                            detentThird === "wsl" ? (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.remoteConnections.wsl.header.title",
                                  defaultMessage: "WSL connections",
                                  description:
                                    "Header title for WSL connections",
                                }}
                              />
                            ) : platform === "macOS" ? (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.remoteConnections.ssh.header.title",
                                  defaultMessage:
                                    "SSH connections from this Mac",
                                  description:
                                    "Header title for SSH connections from this Mac",
                                }}
                              />
                            ) : (
                              <MemoizedFormattedMessage
                                {...{
                                  id: "settings.remoteConnections.ssh.header.title.windows",
                                  defaultMessage:
                                    "SSH connections from this PC",
                                  description:
                                    "Header title for SSH connections from this Windows device",
                                }}
                              />
                            ),
                          actions:
                            detentThird === "ssh" &&
                            eccentricThird != null &&
                            eccentricThird.length > 0 ? (
                              <ReadLoginRouteQuerySnapshot
                                {...{
                                  disabled: yokeThird,
                                  onClick: bravoFourth,
                                  children: (
                                    <MemoizedFormattedMessage
                                      {...{
                                        id: "settings.remoteConnections.add.short",
                                        defaultMessage: "Add",
                                        description:
                                          "Button label for adding a connection from a connections settings tab",
                                      }}
                                    />
                                  ),
                                }}
                              />
                            ) : null,
                        }}
                      />,
                      <UseChromeAndCodeThemeSync.Content
                        {...{
                          children:
                            followerThird || eccentricThird == null ? (
                              <AppInitialNi>
                                {detentThird === "wsl" ? (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.remoteConnections.wsl.loading",
                                      defaultMessage:
                                        "Loading WSL connections…",
                                      description:
                                        "Loading message for WSL connections",
                                    }}
                                  />
                                ) : (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "settings.remoteConnections.ssh.loading",
                                      defaultMessage:
                                        "Loading SSH connections…",
                                      description:
                                        "Loading message for SSH connections",
                                    }}
                                  />
                                )}
                              </AppInitialNi>
                            ) : (
                              <ParseUrlOrFallback
                                {...{
                                  children:
                                    eccentricThird.length === 0 ? (
                                      <Dismiss
                                        {...{
                                          spacing: "compact",
                                          title: null,
                                          description: (
                                            <MemoizedFormattedMessage
                                              {...{
                                                id: "settings.remoteConnections.ssh.empty",
                                                defaultMessage:
                                                  "Connect to a remote device through SSH connection",
                                                description:
                                                  "Empty state for SSH connections",
                                              }}
                                            />
                                          ),
                                          illustration: (
                                            <HavenFifth
                                              {...{
                                                className:
                                                  "h-6 w-auto text-token-text-primary",
                                              }}
                                            />
                                          ),
                                          actions: (
                                            <ReadLoginRouteQuerySnapshot
                                              {...{
                                                disabled: yokeThird,
                                                onClick: bravoFourth,
                                                children: (
                                                  <MemoizedFormattedMessage
                                                    {...{
                                                      id: "settings.remoteConnections.add.short",
                                                      defaultMessage: "Add",
                                                      description:
                                                        "Button label for adding a connection from a connections settings tab",
                                                    }}
                                                  />
                                                ),
                                              }}
                                            />
                                          ),
                                        }}
                                      />
                                    ) : (
                                      <HillFifth
                                        {...{
                                          connections: eccentricThird,
                                          disabled: baffleThird,
                                          clientAuthorized: gibThird,
                                          installingCodexHostId:
                                            rollerThird.isPending
                                              ? (rollerThird.variables
                                                  ?.hostId ?? null)
                                              : null,
                                          showEmptyState: false,
                                          remoteControlAllowedHostIds:
                                            bushingThird,
                                          onEditSshConnection: (
                                            lunarFourth,
                                          ) => {
                                            let mossFourth = shimThird.find(
                                              (item) =>
                                                item.hostId === lunarFourth,
                                            );
                                            mossFourth != null &&
                                              latchThird({
                                                mode: "edit",
                                                hostId: lunarFourth,
                                                draft: frost(mossFourth),
                                              });
                                          },
                                          onInstallCodex: reducerThird,
                                          onRemoveSshConnection: teeThird,
                                          onRenameRemoteControlConnection:
                                            async () => {},
                                          onRequestDeleteRemoteControlConnection:
                                            () => {},
                                          onToggleConnection: wyeThird,
                                          onRemoteControlAllowedForHost:
                                            alphaFourth,
                                          onLogoutConnection: (northFourth) => {
                                            copperFourth(northFourth);
                                          },
                                          onAuthenticate: (orbitFourth) => {
                                            elbowThird(orbitFourth);
                                            insertThird(orbitFourth);
                                          },
                                        }}
                                      />
                                    ),
                                }}
                              />
                            ),
                        }}
                      />,
                    ],
                  }}
                />
              ) : null,
            ],
          }}
        />
      }
      {keystoneThird == null ? null : (
        <QuestFifth
          {...{
            open: true,
            mode: keystoneThird.mode,
            draft: keystoneThird.draft,
            existingConnections: shimThird,
            editingHostId:
              keystoneThird.mode === "edit" ? keystoneThird.hostId : null,
            onOpenChange: (pineFourth) => {
              pineFourth || latchThird(null);
            },
            onSubmit: strainerThird,
            isSaving: meshThird.isPending,
          }}
        />
      )}
      {valveThird ? (
        <PineFifth
          {...{
            connections: mandrelThird,
            isSaving: meshThird.isPending,
            open: true,
            refreshing: at.isPending,
            onAddManually: () => {
              axleThird(false);
              latchThird({
                mode: "add",
                draft: eagle(),
              });
            },
            onOpenChange: axleThird,
            onRefresh: () => {
              grommetThird().catch($e);
            },
            onSave: ventThird,
            onToggleConnection: unionThird,
            selectedHostIds: pistonThird,
          }}
        />
      ) : null}
      {mountThird && !cogThird && bracketThird ? (
        <_o
          {...{
            connections: collarThird,
            refreshing: kingpinThird.isPending,
            isSaving: neckThird.isPending,
            open: true,
            onOpenChange: (questFourth) => {
              clampThird(questFourth);
              questFourth || torqueThird([]);
            },
            onRefresh: () => {
              let ridgeFourth = new Set(collarThird.map((item) => item.envId));
              manifoldThird()
                .then((value) => {
                  let stormFourth = AppInitialNQ({
                    addedRemoteControlEnvIds: data,
                    remoteControlConnections: value,
                  })
                    .map((item) => item.envId)
                    .filter((item) => !ridgeFourth.has(item));
                  torqueThird((tideFourth) =>
                    nozzle.default([...tideFourth, ...stormFourth]),
                  );
                })
                .catch($e);
            },
            onSave: jumperThird,
            onToggleConnection: injectorThird,
            selectedEnvIds: screwThird,
          }}
        />
      ) : null}
      {mountThird && cogThird && drillThird && ironThird != null ? (
        <WindFifth
          {...{
            isPairingCodeDisabled: padThird.isPending,
            open: true,
            onOpenChange: engineThird,
            onPairingCodeEntered: kerfThird,
          }}
        />
      ) : null}
      {mountThird && frameThird ? (
        <RainFifth
          {...{
            authorizing: landThird.isPending,
            open: true,
            onAuthorize: louverThird,
            onOpenChange: gasketThird,
          }}
        />
      ) : null}
      {
        <NorthFifth
          {...{
            hostId: handleThird,
            open: handleThird != null,
            onOpenChange: (unityFourth) => {
              unityFourth || insertThird(null);
            },
          }}
        />
      }
      {mountThird ? (
        <VineFifth
          {...{
            connection: jacketThird,
            open: jacketThird != null,
            isDeleting: thrustThird.isPending,
            onOpenChange: (valeFourth) => {
              valeFourth || knurlThird(null);
            },
            onConfirm: () => {
              outletThird();
            },
          }}
        />
      ) : null}
    </>
  );
  return undefined as any;
}
