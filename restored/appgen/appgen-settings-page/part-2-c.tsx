// Restored from ref/webview/assets/appgen-settings-page-8V-xKkmK.js
// Wave FZ — full polished body from `appgen-settings-page-8V-xKkmK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 76/109).
// AST split — size-gate sibling part-2 c/3
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import {
  Navigate,
  useMatch,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { AppIconAZ } from "../../icons/app-icon-az";
import { usePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import { ElectronOnly } from "../../ui/electron-only";
import { ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { appgenShareDialogR as AppgenShareDialogR } from "../appgen-share-dialog";
import { AppgenSettingsPageHelper28 } from "./part-2-b";

/** app-initial companion (stub only; never promote) */
const AppInitial5: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialU5: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialWT: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const deferredUiEnt: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;

export function appgenSettingsPageN(zenithPrime: unknown) {
  let { initialEnvironmentDraft, initialTitle } = zenithPrime,
    { projectId } = AppInitialU5(),
    anvilPrime = useNavigate();
  if (projectId == null) {
    let cragPrime;
    return (
      <Navigate
        {...{
          replace: true,
          to: "/sites",
        }}
      />
    );
  }
  let beaconPrime = () => {
    anvilPrime(AppInitialWT);
  };
  return (
    <AppgenSettingsPageT
      {...{
        initialEnvironmentDraft,
        initialTitle,
        projectId,
        onDeleted: beaconPrime,
      }}
    />
  );
}

function AppgenSettingsPageT(elbow) {
  let {
      initialEnvironmentDraft,
      initialTitle,
      onDeleted,
      projectId,
      showHeader = true,
    } = elbow,
    { data, isError, isLoading } = CodexBrowserSurfaceActionType(
      useMatch,
      projectId,
    ),
    {
      data: _data,
      isError: _isError,
      isLoading: _isLoading,
    } = CodexBrowserSurfaceActionType(AppInitial5, projectId),
    ferrule = data?.current_live_url,
    grommet = formatUrlHostPath(ferrule);
  let header = grommet,
    injector = data?.title,
    jumper = (
      <AppgenSettingsPageHelper27
        {...{
          liveUrl: ferrule,
          siteTitle: injector,
        }}
      />
    );
  let kerf = jumper,
    louver = showHeader ? "h-full bg-token-main-surface-primary" : "flex-1",
    manifold = IntlProvider("flex min-h-0 flex-col", louver);
  let nip = showHeader ? (
    <>
      {
        <ElectronOnly
          {...{
            extension: true,
            children: kerf,
          }}
        />
      }
      {
        <ElectronOnly
          {...{
            browser: true,
            chromeExtension: true,
            electron: true,
            children: (
              <AppIconAZ.Header
                {...{
                  children: kerf,
                }}
              />
            ),
          }}
        />
      }
    </>
  ) : null;
  let outlet = showHeader && "p-panel",
    packing = IntlProvider(
      "scrollbar-stable flex min-h-0 flex-1 overflow-y-auto",
      outlet,
    );
  let reducer = !showHeader && "px-4 py-3",
    strainer = IntlProvider("w-full", reducer);
  let tee = showHeader ? header : undefined,
    union = showHeader ? data?.title : undefined,
    vent =
      isLoading || _isLoading ? (
        <AppgenSettingsPageHelper32 {...{}} />
      ) : isError || _isError || data == null || _data == null ? (
        <AppgenSettingsPageHelper33 {...{}} />
      ) : (
        <>
          {showHeader ? null : (
            <AppgenShareDialogR
              {...{
                liveUrl: data.current_live_url,
                title: data.title,
              }}
            />
          )}
          {
            <AppgenSettingsPageHelper28
              key={projectId}
              {...{
                accessPolicy: data.access_policy,
                defaultDomain: header,
                embedded: !showHeader,
                environment: _data,
                initialEnvironmentDraft,
                initialTitle,
                onDeleted,
                projectId,
                siteSlug: data.slug,
                siteTitle: data.title,
              }}
            />
          }
        </>
      );
  let wye = (
    <OpenInBrowser
      {...{
        className: strainer,
        embedded: true,
        subtitle: tee,
        subtitleClassName: "truncate",
        title: union,
        children: vent,
      }}
    />
  );
  let zener = <div className={packing}>{wye}</div>;
  return (
    <div className={manifold}>
      {nip}
      {zener}
    </div>
  );
}

function AppgenSettingsPageHelper27(alphaPrime) {
  let { liveUrl, siteTitle } = alphaPrime,
    bravoPrime = useNavigate(),
    copperPrime = (
      <MemoizedFormattedMessage
        {...{
          id: "appgenSettings.header.sites",
          defaultMessage: "Sites",
          description: "Breadcrumb link back to the Sites Library page",
        }}
      />
    );
  let deltaPrime = [
    {
      id: "sites",
      label: copperPrime,
      onClick: () => {
        bravoPrime(AppInitialWT);
      },
    },
  ];
  let echoPrime = (
    <ToolbarBreadcrumb
      {...{
        ancestors: deltaPrime,
        current: siteTitle,
      }}
    />
  );
  let falconPrime =
    liveUrl == null ? null : (
      <ReadLoginRouteQuerySnapshot
        {...{
          color: "outline",
          size: "toolbar",
          onClick: (harborPrime) => {
            deferredUiEnt({
              event: harborPrime,
              href: liveUrl,
              initiator: "mcp_app_resource",
            });
          },
          children: [
            <HostFeatureConfigToggles
              {...{
                className: "icon-xs",
                ExternalIcon: usePluginNavigationTelemetry,
                href: liveUrl,
              }}
            />,
            <MemoizedFormattedMessage
              {...{
                id: "appgenSettings.visit",
                defaultMessage: "Visit",
                description: "Button label for opening a live site externally",
              }}
            />,
          ],
        }}
      />
    );
  let gammaPrime = (
    <div className="flex items-center justify-end">{falconPrime}</div>
  );
  return (
    <div className="draggable grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 electron:h-toolbar extension:py-row-y">
      {echoPrime}
      {gammaPrime}
    </div>
  );
}

function AppgenSettingsPageHelper32() {
  return (
    <div className="flex min-h-[420px] flex-1 items-center justify-center">
      {<VSCODE_EDITOR_ID {...{}} />}
    </div>
  );
}

function AppgenSettingsPageHelper33() {
  return (
    <div className="flex min-h-[420px] flex-1 items-center justify-center">
      <div className="text-sm font-medium text-token-text-secondary">
        {
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.error.title",
              defaultMessage: "Unable to load site settings",
              description: "Error state title for the site settings page",
            }}
          />
        }
      </div>
    </div>
  );
}
