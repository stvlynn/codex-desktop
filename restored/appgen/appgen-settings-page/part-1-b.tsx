// Restored from ref/webview/assets/appgen-settings-page-8V-xKkmK.js
// Wave FZ — full polished body from `appgen-settings-page-8V-xKkmK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 76/109).
// AST split — size-gate sibling part-1 b/4
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconCct } from "../../icons/app-icon-cct";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { AppgenSettingsPageHelper5 } from "./part-1-a";

/** Wave FZ unresolved companion (jsx-collision:useLocation@boundaries/react-router-navigation.tsx) */
const AppInitialB5: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isPluginSchemeUrl@plugins/is-plugin-scheme-url.ts) */
const AppInitialY5: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;

export function AppgenSettingsPageHelper3(bloom: unknown) {
  let { customDomain, projectId } = bloom,
    coral = CodexPluginActionType(appScopeAtom),
    drift = useIntl(),
    eagle = CodexBrowserSurfaceActionType(AppInitialY5, projectId),
    frost = CodexBrowserSurfaceActionType(AppInitialB5, projectId),
    glide = eagle.isPending || frost.isPending,
    honey = function () {
      coral.get(toastAtom).danger(
        drift.formatMessage({
          id: "appgenSettings.customDomains.refresh.error",
          defaultMessage: "Unable to refresh domain status",
          description: "Error toast shown when custom domain refresh fails",
        }),
      );
    };
  let iris = honey,
    jewel = customDomain.status === "active",
    knoll = (
      <MemoizedFormattedMessage
        {...{
          id: "appgenSettings.customDomains.row.label",
          defaultMessage: "Custom domain",
          description: "Row label for the Site custom-domain control",
        }}
      />
    );
  let lunar = (
    <div className="max-w-60 truncate text-sm text-token-text-primary">
      {customDomain.hostname}
    </div>
  );
  let moss =
    customDomain.status === "pending" ? (
      <div className="flex min-w-0 items-center gap-1 text-xs text-token-text-secondary">
        {
          <AppIconCct
            {...{
              "aria-hidden": true,
              className: "icon-xs shrink-0",
            }}
          />
        }
        <span className="truncate">
          {
            <MemoizedFormattedMessage
              {...{
                id: "appgenSettings.customDomains.pending.description",
                defaultMessage: "Pending DNS changes. May take 24h to reflect.",
                description:
                  "Status copy for a custom domain waiting on DNS changes",
              }}
            />
          }
        </span>
      </div>
    ) : customDomain.status === "failed" ? (
      <div className="flex items-center gap-1 text-xs text-token-charts-red">
        {
          <ShellLayoutMetricsContext
            {...{
              "aria-hidden": true,
              className: "icon-xs shrink-0",
            }}
          />
        }
        {
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.failed.description",
              defaultMessage: "DNS setup failed. Review your records.",
              description:
                "Status copy for a custom domain with failed DNS verification",
            }}
          />
        }
      </div>
    ) : null;
  let north =
    customDomain.last_error == null ? null : (
      <div className="max-w-80 text-xs wrap-anywhere text-token-charts-red">
        {
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.lastError",
              defaultMessage: "Last error: {message}",
              description: "Last provider error shown for a custom domain",
              values: {
                message: customDomain.last_error,
              },
            }}
          />
        }
      </div>
    );
  let orbit = (
    <div className="flex min-w-0 flex-col items-end gap-0.5 text-right">
      {lunar}
      {moss}
      {north}
    </div>
  );
  let pine = jewel ? null : (
    <>
      {
        <ReadLoginRouteQuerySnapshot
          {...{
            "aria-label": drift.formatMessage(
              {
                id: "appgenSettings.customDomains.setup.ariaLabel",
                defaultMessage: "View DNS setup for {hostname}",
                description:
                  "Accessible label for reopening custom domain DNS setup",
              },
              {
                hostname: customDomain.hostname,
              },
            ),
            color: "ghost",
            disabled: glide,
            size: "icon",
            onClick: () => {
              chatProcessRegister(coral, AppgenSettingsPageHelper5, {
                customDomain,
              });
            },
            children: (
              <ShellLayoutMetricsContext
                {...{
                  "aria-hidden": true,
                  className: "icon-xs",
                }}
              />
            ),
          }}
        />
      }
      {
        <ReadLoginRouteQuerySnapshot
          {...{
            "aria-label": drift.formatMessage(
              {
                id: "appgenSettings.customDomains.refresh.ariaLabel",
                defaultMessage: "Refresh {hostname} status",
                description:
                  "Accessible label for refreshing a custom domain status",
              },
              {
                hostname: customDomain.hostname,
              },
            ),
            color: "ghost",
            disabled: glide,
            size: "icon",
            onClick: () => {
              eagle.mutateAsync(customDomain.id).then(bravo, () => {
                iris();
              });
            },
            children: eagle.isPending ? (
              <VSCODE_EDITOR_ID
                {...{
                  className: "icon-xs",
                }}
              />
            ) : (
              <AppIconAlt
                {...{
                  "aria-hidden": true,
                  className: "icon-xs",
                }}
              />
            ),
          }}
        />
      }
    </>
  );
  let quest = drift.formatMessage(
    {
      id: "appgenSettings.customDomains.remove.ariaLabel",
      defaultMessage: "Remove {hostname}",
      description: "Accessible label for removing a custom domain",
    },
    {
      hostname: customDomain.hostname,
    },
  );
  let ridge = () => {
    chatProcessRegister(coral, echo, {
      customDomain,
      projectId,
    });
  };
  let storm = (
    <AppIconBO
      {...{
        "aria-hidden": true,
        className: "icon-xs",
      }}
    />
  );
  let tide = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": quest,
        color: "ghost",
        disabled: glide,
        size: "icon",
        onClick: ridge,
        children: storm,
      }}
    />
  );
  let unity = (
    <div className="flex shrink-0 items-center gap-1">
      {pine}
      {tide}
    </div>
  );
  return (
    <EnsurePersonalizationCInit
      {...{
        label: knoll,
        control: (
          <div className="flex min-w-0 items-center gap-3">
            {orbit}
            {unity}
          </div>
        ),
      }}
    />
  );
}

function bravo() {}

function echo(mire) {
  let { customDomain, onClose, projectId } = mire,
    nook = CodexBrowserSurfaceActionType(AppInitialB5, projectId),
    oxbow = CodexPluginActionType(appScopeAtom),
    pond = useIntl(),
    quarry = function () {
      oxbow.get(toastAtom).danger(
        pond.formatMessage({
          id: "appgenSettings.customDomains.removeDialog.error",
          defaultMessage: "Unable to remove domain",
          description: "Error toast shown when removing a custom domain fails",
        }),
      );
    };
  let rapids = quarry,
    spur = !nook.isPending,
    tor = (gear) => {
      !gear && !nook.isPending && onClose();
    };
  let updraft = (event) => {
    event.preventDefault();
    !nook.isPending &&
      nook.mutateAsync(customDomain.id).then(
        () => {
          onClose();
        },
        () => {
          rapids();
        },
      );
  };
  let verge = (
    <RealtimeVoiceHostId
      {...{
        className: "contents",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.removeDialog.title",
              defaultMessage: "Remove {hostname}?",
              description: "Title for custom domain removal dialog",
              values: {
                hostname: customDomain.hostname,
              },
            }}
          />
        ),
      }}
    />
  );
  let weir = (
    <IsStartingProcessExpired
      {...{
        className: "contents",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.removeDialog.description",
              defaultMessage:
                "Visitors will no longer be able to use this domain for the site",
              description: "Description for custom domain removal dialog",
            }}
          />
        ),
      }}
    />
  );
  let yard = (
    <DeferredUiH
      {...{
        title: verge,
        titleClassName: "truncate pr-8",
        subtitle: weir,
      }}
    />
  );
  let anchor = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.customDomains.removeDialog.cancel",
        defaultMessage: "Cancel",
        description: "Cancel button label for custom domain removal dialog",
      }}
    />
  );
  let bolt = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "ghost",
        disabled: nook.isPending,
        type: "button",
        onClick: onClose,
        children: anchor,
      }}
    />
  );
  let cog = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.customDomains.removeDialog.submit",
        defaultMessage: "Remove",
        description: "Confirm button label for custom domain removal dialog",
      }}
    />
  );
  let disc = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "danger",
        loading: nook.isPending,
        type: "submit",
        children: cog,
      }}
    />
  );
  let edge = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              children: [bolt, disc],
            }}
          />
        ),
      }}
    />
  );
  let forge = (
    <DeferredUiB
      {...{
        as: "form",
        className: "gap-4 px-4 py-3",
        onSubmit: updraft,
        children: [yard, edge],
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        open: true,
        shouldIgnoreClickOutside: nook.isPending,
        showDialogClose: spur,
        size: "compact",
        onOpenChange: tor,
        children: forge,
      }}
    />
  );
}
