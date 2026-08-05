// Restored from ref/webview/assets/appgen-share-dialog-j88Mseym.js
// Wave FY — full polished body from `appgen-share-dialog-j88Mseym/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 33 (verified 51/83).
// AST split 1/2 (lane b — footer actions)
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { AppIconTk } from "../../icons/app-icon-tk";
import { OptionalTooltip } from "../../ui/optional-tooltip";

/** Wave FY unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FY unresolved companion (missing-export:clipboard/write-clipboard-contents.ts) */
const writeClipboardContents: any = undefined;
/** Wave FY unresolved companion (jsx-collision:agentMention@files/agent-mention.ts) */
const AppInitialQj: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const UseWorkspaceUsersF: any = undefined;
export function AppgenShareDialogHelper18(oak: any) {
  let {
      accessMode,
      hasPendingAccessChange,
      hasPendingInvitees,
      isSaving,
      liveUrl,
      showVisitAction,
      onCancelChanges,
      onDone,
    } = oak,
    petal = useIntl(),
    quiet = CodexPluginActionType(appScopeAtom),
    rain = pearl({
      action: "copyLink",
      isSaving,
      liveUrl,
    });
  let seed = rain,
    trail = pearl({
      action: "visit",
      isSaving,
      liveUrl,
    });
  let urn = trail,
    vine = {
      onClick: onDone,
    };
  let wind =
    accessMode === "public" ? (
      <MemoizedFormattedMessage
        {...{
          id: "appgenShareDialog.publish",
          defaultMessage: "Publish",
          description:
            "Button label for publishing a site to the public internet",
        }}
      />
    ) : undefined;
  let yarrow = {
    label: wind,
    onClick: onDone,
  };
  let azure = {
    invite: vine,
    share: yarrow,
  };
  let birch = {
    onClick: onCancelChanges,
  };
  let canyon =
    liveUrl === undefined ? null : (
      <div className="flex items-center gap-2">
        {showVisitAction ? (
          <OptionalTooltip
            {...{
              tooltipContent: urn,
              children: (
                <span className="inline-flex">
                  {
                    <ReadLoginRouteQuerySnapshot
                      {...{
                        color: "outline",
                        disabled: isSaving || liveUrl == null,
                        size: "toolbar",
                        onClick: (ever) => {
                          liveUrl != null &&
                            deferredUiEnt({
                              event: ever,
                              href: liveUrl,
                              initiator: "mcp_app_resource",
                            });
                        },
                        children: [
                          liveUrl == null ? null : (
                            <HostFeatureConfigToggles
                              {...{
                                className: "icon-xs",
                                ExternalIcon: AppIconTk,
                                href: liveUrl,
                              }}
                            />
                          ),
                          <MemoizedFormattedMessage
                            {...{
                              id: "appgenShareDialog.visit",
                              defaultMessage: "Visit",
                              description:
                                "Button label for opening a live site externally",
                            }}
                          />,
                        ],
                      }}
                    />
                  }
                </span>
              ),
            }}
          />
        ) : null}
        {
          <OptionalTooltip
            {...{
              tooltipContent: seed,
              children: (
                <span className="inline-flex">
                  {
                    <ReadLoginRouteQuerySnapshot
                      {...{
                        color: "outline",
                        disabled: isSaving || liveUrl == null,
                        size: "toolbar",
                        onClick: () => {
                          liveUrl != null &&
                            writeClipboardContents(liveUrl).then((value) => {
                              value &&
                                quiet.get(toastAtom).info(
                                  petal.formatMessage({
                                    id: "appgenShareDialog.copySuccess",
                                    defaultMessage: "Copied to clipboard",
                                    description:
                                      "Toast shown after copying a live site URL",
                                  }),
                                );
                            });
                        },
                        children: [
                          <AppInitialQj className="icon-xs" />,
                          <MemoizedFormattedMessage
                            {...{
                              id: "appgenShareDialog.copyLink",
                              defaultMessage: "Copy link",
                              description:
                                "Button label for copying a live site URL",
                            }}
                          />,
                        ],
                      }}
                    />
                  }
                </span>
              ),
            }}
          />
        }
      </div>
    );
  let dew = petal.formatMessage({
    id: "appgenShareDialog.saving",
    defaultMessage: "Saving",
    description:
      "Accessible label for the site share dialog save button while saving",
  });
  return (
    <DeferredUiU
      {...{
        className: "pt-4",
        children: (
          <div className="flex w-full items-center justify-end gap-3">
            {
              <UseWorkspaceUsersF
                {...{
                  actions: azure,
                  cancelAction: birch,
                  disabled: isSaving,
                  hasPendingAccessChange,
                  hasPendingInvitees,
                  idleActions: canyon,
                  isSaving,
                  savingAriaLabel: dew,
                  size: "toolbar",
                  spinnerClassName: "icon-xxs",
                }}
              />
            }
          </div>
        ),
      }}
    />
  );
}
function pearl({ action, isSaving, liveUrl }) {
  if (liveUrl == null)
    switch (action) {
      case "copyLink":
        return (
          <MemoizedFormattedMessage
            {...{
              id: "appgenShareDialog.copyLinkDisabled.notPublished",
              defaultMessage: "Publish this site to copy its link",
              description:
                "Tooltip explaining why the site share dialog copy link button is disabled",
            }}
          />
        );
      case "visit":
        return (
          <MemoizedFormattedMessage
            {...{
              id: "appgenShareDialog.visitDisabled.notPublished",
              defaultMessage: "Publish this site before visiting it",
              description:
                "Tooltip explaining why the site share dialog visit button is disabled",
            }}
          />
        );
    }
  return isSaving ? (
    <MemoizedFormattedMessage
      {...{
        id: "appgenShareDialog.footerActionDisabled.saving",
        defaultMessage: "Sharing settings are still saving",
        description:
          "Tooltip explaining why site share dialog footer actions are disabled while saving",
      }}
    />
  ) : null;
}
