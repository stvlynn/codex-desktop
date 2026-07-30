// Restored from ref/webview/assets/appgen-share-dialog-j88Mseym.js
// Wave FY — full polished body from `appgen-share-dialog-j88Mseym/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 33 (verified 51/83).
// AST split 1/2
/* split-lane-import-depth:1 */


import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Ytt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_Jj_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Link } from "../../boundaries/react-router-link";
import { useMatch } from "../../boundaries/react-router-navigation";
import { ensureShareInviteAutocompleteInit, ShareInviteAutocomplete } from "../../boundaries/share-invite-autocomplete/index";
import { toastAtom } from "../../boundaries/toast-atom";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconHG, ensureAppIconHGInit } from "../../icons/app-icon-hg";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { AppIconL0 } from "../../icons/app-icon-l0";
import { AppIconTk, ensureAppIconTkInit } from "../../icons/app-icon-tk";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { declineAppshotTaskAndContinue } from "../../onboarding/decline-appshot-task-and-continue";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { identity } from "../../utils/identity";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { resetStoreAtomValueSf } from "../../utils/set-store-atom-value";
import { ensureChatgptSiteSuffixesInit } from "../chatgpt-site-suffixes";

const RealtimeVoiceHostId: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useUpdateBrowserUseOriginRulesMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialFO: any = undefined;
/** Wave FY unresolved companion (jsx-collision:iconXxs@ui/icon-xxs.ts) */
const AppInitialGO: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/chatgpt2.tsx) */
const Chatgpt2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureAuthComposerIconInit@account/ensure-auth-composer-icon-init.ts) */
const AppInitialHO: any = undefined;
/** Wave FY unresolved companion (missing-export:plugins/has-seen-knowledge-work-announcement.tsx) */
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostIdStub: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/use-computer-use-settings-section.ts) */
const useComputerUseSettingsSection: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureGpuTearingDebugSettingsInit@settings/gpu-tearing-debug-settings.ts) */
const AppInitialO: any = undefined;
/** Wave FY unresolved companion (missing-export:clipboard/write-clipboard-contents.ts) */
const writeClipboardContents: any = undefined;
/** Wave FY unresolved companion (jsx-collision:agentMention@files/agent-mention.ts) */
const AppInitialQj: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureAppIconL0Init@icons/app-icon-l0.tsx) */
const AppInitialR0: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureAppgenSiteQueriesInit@appgen/site-query-atoms.ts) */
const AppInitialT5: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FY unresolved companion (missing-export:plugins/slides-google-com.tsx) */
const AppInitialX5: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersA: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersC: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersD: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const UseWorkspaceUsersF: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersH: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const UseWorkspaceUsersI: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersL: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersM: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const UseWorkspaceUsersO: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersP: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersR: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersS: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersT: any = undefined;
function AppgenShareDialogR(xenon) {
  let {
      liveUrl,
      title
    } = xenon,
    yellow = formatUrlHostPath(liveUrl);
  let zinc = yellow,
    amber = <span className="flex size-10 shrink-0 items-center justify-center">
        {<AppIconHG {...{
        className: "icon-md"
      }} />}
      </span>;
  let basalt = <div className="truncate text-sm font-medium text-token-foreground">
      {title}
    </div>;
  let cedar = zinc ?? <MemoizedFormattedMessage {...{
    id: "appgenShareDialog.site.notPublished",
    defaultMessage: "Not published yet",
    description: "Label in a Site card for a site without a published URL"
  }} />;
  let daisy = <div className="truncate text-xs text-token-text-tertiary">
      {cedar}
    </div>;
  return <div className="flex items-center gap-3 rounded-lg bg-token-bg-secondary p-3">
      {amber}
      <div className="flex min-w-0 flex-col gap-0.5">
        {basalt}
        {daisy}
      </div>
    </div>;
}
var alpha,
  bravo,
  appgenShareDialogI = esmInit(() => {
    alpha = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureAppIconHGInit();
    ensureChatgptSiteSuffixesInit();
  });
export function appgenShareDialogT(opal: unknown) {
  let {
      onClose,
      projectId,
      showVisitAction = true
    } = opal,
    plume = useIntl(),
    quillow = CodexPluginActionType(appScopeAtom),
    {
      email
    } = useAuth(),
    {
      data
    } = reuseArrayIfShallowEqual(),
    root = data?.structure === "workspace",
    {
      data: _data,
      isError: silk,
      isLoading
    } = CodexBrowserSurfaceActionType(useMatch, projectId),
    thorn = CodexBrowserSurfaceActionType(AppInitialX5, projectId),
    [upland, vista] = violet.useState(""),
    wisp = [];
  let [yonder, zenith] = violet.useState(wisp),
    anvil = [];
  let [beacon, crag] = violet.useState(anvil),
    [dome, eddy] = violet.useState(null),
    fjord = upland.trim();
  let glen = fjord,
    hearth = Chatgpt2(glen, 200),
    {
      data: __data
    } = useWorkspaceUsersR(root ? upland : ""),
    {
      data: ___data
    } = CodexBrowserSurfaceActionType(Link, root ? hearth : null),
    inlet = hearth === glen,
    {
      data: ____data
    } = CodexBrowserSurfaceActionType(Link, root ? "" : null),
    jetty,
    knob,
    ledge,
    mire,
    nook,
    oxbow,
    pond,
    quarry;
  {
    mire = quartz(___data);
    nook = quartz(river(___data, ____data));
    jetty = _data?.access_policy;
    ledge = jetty?.allowed_users ?? [];
    knob = jetty?.allowed_groups ?? [];
    let axle = new Set(ledge.map(harbor));
    oxbow = useWorkspaceUsersC({
      currentAccountUserId: data?.account_user_id,
      existingAccountUserIds: axle,
      selectedAccountUserIds: yonder.map(gamma),
      workspaceUsers: __data
    });
    let bracket = new Set(knob.map(falcon));
    pond = new Set(nook.map(echo));
    let clamp = frame => !bracket.has(frame.id) && !beacon.some(item => item.id === frame.id);
    let drill = mire.filter(clamp),
      engine;
    engine = gasket => at(gasket, plume);
    quarry = [...drill.map(engine), ...(oxbow?.map(timber) ?? [])];
  }
  let _e = quarry,
    rapids;
  {
    let handle;
    handle = insert => at(insert, plume);
    rapids = [...beacon.map(handle), ...yonder.map(timber)];
  }
  let be = rapids,
    spur = _data == null ? <MemoizedFormattedMessage {...{
      id: "appgenShareDialog.title",
      defaultMessage: "Share",
      description: "Title for the site sharing dialog"
    }} /> : <MemoizedFormattedMessage {...{
      id: "appgenShareDialog.projectTitle",
      defaultMessage: "Share {siteTitle}",
      description: "Title for the site sharing dialog including the site title",
      values: {
        siteTitle: _data.title
      }
    }} />;
  let tor = spur,
    updraft = dome ?? jetty?.access_mode ?? null,
    verge = root && updraft !== "public",
    weir = jetty != null && updraft !== jetty.access_mode,
    yard = verge && be.length > 0,
    anchor = function () {
      quillow.get(toastAtom).danger(plume.formatMessage({
        id: "appgenShareDialog.save.error",
        defaultMessage: "Unable to save sharing settings",
        description: "Error toast shown when saving site sharing settings fails"
      }));
    };
  let bolt = anchor,
    cog = function () {
      if (jetty == null || updraft == null) {
        onClose();
        return;
      }
      let jacket = useComputerUseSettingsSection({
        accessGroups: mire,
        accessMode: updraft,
        allowedUserEmails: [...ledge, ...yonder].map(delta),
        canManageInvitees: verge,
        existingGroups: knob,
        knownAccessGroups: nook,
        selectedGroups: beacon
      });
      thorn.mutateAsync(jacket).then(() => {
        zenith([]);
        crag([]);
        eddy(null);
      }, () => {
        bolt();
      });
    };
  let disc = cog,
    edge = function () {
      zenith([]);
      crag([]);
      eddy(null);
    };
  let forge = edge,
    gear = function (knurl) {
      eddy(knurl);
      knurl === "public" && (vista(""), zenith([]), crag([]));
    };
  let hinge = gear,
    iron = function (lever) {
      return thorn.mutateAsync(lever).then(copper, mount => {
        throw bolt(), mount;
      });
    };
  let joint = iron,
    keystone = function (nozzle) {
      if (jetty == null) return Promise.resolve();
      switch (nozzle.kind) {
        case "user":
          return joint(AppInitialGO(jetty, nozzle.user.account_user_id));
        case "group":
          return joint(AppInitialHO({
            accessGroups: mire,
            accessPolicy: jetty,
            group: nozzle.group,
            knownAccessGroups: nook
          }));
      }
    };
  let _appgenShareDialogI = keystone,
    _appgenShareDialogT = function (platen) {
      _data != null && chatProcessRegister(quillow, indigo, {
        label: platen.kind === "group" ? platen.group.name : kite(platen.user),
        onConfirm: () => _appgenShareDialogI(platen),
        siteTitle: _data.title
      });
    };
  let latch = _appgenShareDialogT,
    motor = {
      "aria-describedby": undefined
    };
  let nut = ratchet => {
    ratchet || onClose();
  };
  let piston = <div className="flex w-full flex-col">
      {<RealtimeVoiceHostId {...{
      className: "sr-only",
      children: tor
    }} />}
      {<DeferredUiH {...{
      title: tor,
      titleClassName: "truncate pr-8"
    }} />}
    </div>;
  let rivet = isLoading ? <DeferredUiU {...{
    className: "py-12",
    children: <div className="flex justify-center">
            {<VSCODE_EDITOR_ID {...{}} />}
          </div>
  }} /> : silk || _data == null || jetty == null ? <DeferredUiU {...{
    className: "py-10",
    children: <div className="text-center text-sm font-medium text-token-text-secondary">
            {<MemoizedFormattedMessage {...{
        id: "appgenShareDialog.error",
        defaultMessage: "Unable to load sharing settings",
        description: "Error state title in the site share dialog"
      }} />}
          </div>
  }} /> : <>
      {<DeferredUiU {...{
      children: <AppgenShareDialogR {...{
        liveUrl: _data.current_live_url,
        title: _data.title
      }} />
    }} />}
      {verge ? <DeferredUiU {...{
      children: <ShareInviteAutocomplete {...{
        ariaLabel: plume.formatMessage({
          id: "appgenShareDialog.workspaceUserSearch",
          defaultMessage: "Add people or groups",
          description: "Accessible label for searching workspace users and groups in the site share dialog"
        }),
        emptyMessage: <MemoizedFormattedMessage {...{
          id: "appgenShareDialog.noWorkspaceUsers",
          defaultMessage: "No matching people or groups",
          description: "Empty state shown when no workspace users or groups match the site share dialog autocomplete query"
        }} />,
        options: !inlet || ___data == null || ____data == null || oxbow == null ? undefined : _e,
        placeholder: plume.formatMessage({
          id: "appgenShareDialog.workspaceUserPlaceholder",
          defaultMessage: "Add people or groups",
          description: "Placeholder for the site share dialog workspace user and group autocomplete"
        }),
        query: upland,
        selectedOptions: be,
        onQueryChange: vista,
        onRemoveOption: shim => {
          let {
            target
          } = shim;
          bb177: switch (target.kind) {
            case "group":
              crag(tappet => tappet.filter(item => item.id !== target.group.id));
              break bb177;
            case "user":
              zenith(arbor => arbor.filter(item => item.account_user_id !== target.user.account_user_id));
          }
        },
        onSelectOption: bushing => {
          let {
            target
          } = bushing;
          bb191: switch (target.kind) {
            case "group":
              crag(collar => [...collar, target.group]);
              break bb191;
            case "user":
              zenith(dowel => [...dowel, target.user]);
          }
        },
        getRemoveLabel: flange => plume.formatMessage({
          id: "appgenShareDialog.removeSelectedUser",
          defaultMessage: "Remove {name}",
          description: "Accessible label for removing a selected workspace user from the site share dialog"
        }, {
          name: flange.chipLabel ?? flange.label
        })
      }} />
    }} /> : null}
      {<AppgenShareDialogHelper8 {...{
      accessPolicy: jetty,
      activeAccessGroups: knob,
      activeAccessUsers: ledge,
      availableAccessModes: _data.available_access_modes,
      canManageInvitees: verge,
      isWorkspaceAccount: root,
      removableAccessGroupIds: pond,
      selectedAccessMode: updraft,
      ownerEmail: email,
      ownerId: data?.account_user_id,
      onAccessModeChange: hinge,
      onRemoveAccessUser: gib => {
        latch({
          kind: "user",
          user: gib
        });
      },
      onRemoveAccessGroup: hub => {
        latch({
          kind: "group",
          group: hub
        });
      }
    }} />}
    </>;
  let screw = isLoading || silk || _data == null || jetty == null ? undefined : _data.current_live_url,
    torque = <AppgenShareDialogHelper18 {...{
      accessMode: updraft,
      hasPendingAccessChange: weir,
      hasPendingInvitees: yard,
      isSaving: thorn.isPending,
      liveUrl: screw,
      showVisitAction: showVisitAction,
      onCancelChanges: forge,
      onDone: disc
    }} />;
  let valve = <DeferredUiB {...{
    className: "px-4 py-3",
    children: [piston, rivet, torque]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    size: "compact",
    contentOverflow: "visible",
    contentProps: motor,
    onOpenChange: nut,
    children: valve
  }} />;
}
function copper() {}
function delta(ember) {
  return ember.email;
}
function echo(flint) {
  return flint.id;
}
function falcon(garnet) {
  return garnet.id;
}
function gamma(hazel) {
  return hazel.account_user_id;
}
function harbor(ivory) {
  return ivory.account_user_id;
}
function indigo(jasper) {
  let {
      label,
      onClose,
      onConfirm,
      siteTitle
    } = jasper,
    [kelp, lotus] = violet.useState(false),
    mint = !kelp,
    nova = acorn => {
      !acorn && !kelp && onClose();
    };
  let olive = event => {
    event.preventDefault();
    !kelp && (lotus(true), onConfirm().then(onClose, () => {
      lotus(false);
    }));
  };
  let prism = <RealtimeVoiceHostId {...{
    className: "contents",
    children: <MemoizedFormattedMessage {...{
      id: "appgenShareDialog.removeDialog.title",
      defaultMessage: "Remove {label}?",
      description: "Title for dialog confirming removal of a person's or group's site access",
      values: {
        label
      }
    }} />
  }} />;
  let quill = <span key="remove-access-label" className="font-medium text-token-text-primary">
      {label}
    </span>;
  let reef = <IsStartingProcessExpired {...{
    className: "contents",
    children: <MemoizedFormattedMessage {...{
      id: "appgenShareDialog.removeDialog.description",
      defaultMessage: "{label} will no longer be able to visit {siteTitle}",
      description: "Warning shown when removing a person or group from a site's access list",
      values: {
        label: quill,
        siteTitle
      }
    }} />
  }} />;
  let sage = <DeferredUiH {...{
    title: prism,
    titleClassName: "truncate pr-8",
    subtitle: reef
  }} />;
  let topaz = <MemoizedFormattedMessage {...{
    id: "appgenShareDialog.removeDialog.cancel",
    defaultMessage: "Cancel",
    description: "Cancel button label for access removal confirmation dialog"
  }} />;
  let ultra = <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    disabled: kelp,
    onClick: onClose,
    children: topaz
  }} />;
  let vapor = <MemoizedFormattedMessage {...{
    id: "appgenShareDialog.removeDialog.confirm",
    defaultMessage: "Remove",
    description: "Confirm button label for removing site access"
  }} />;
  let wheat = <ReadLoginRouteQuerySnapshot {...{
    color: "danger",
    loading: kelp,
    type: "submit",
    children: vapor
  }} />;
  let yarn = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: [ultra, wheat]
    }} />
  }} />;
  let zephyr = <DeferredUiB {...{
    as: "form",
    className: "gap-4 px-4 py-3",
    onSubmit: olive,
    children: [sage, yarn]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    shouldIgnoreClickOutside: kelp,
    showDialogClose: mint,
    size: "compact",
    onOpenChange: nova,
    children: zephyr
  }} />;
}
function AppgenShareDialogHelper8(bloom) {
  let {
      activeAccessGroups,
      activeAccessUsers,
      accessPolicy,
      availableAccessModes,
      canManageInvitees,
      isWorkspaceAccount,
      removableAccessGroupIds,
      selectedAccessMode,
      ownerEmail,
      ownerId,
      onAccessModeChange,
      onRemoveAccessGroup,
      onRemoveAccessUser
    } = bloom,
    coral = useIntl(),
    drift,
    eagle,
    frost,
    glide,
    honey,
    iris,
    jewel;
  {
    let moss = jade({
        activeAccessUsers,
        currentAccountUserId: ownerId,
        currentUserEmail: ownerEmail
      }),
      north = activeAccessUsers.filter(item => item.account_user_id !== moss?.account_user_id);
    drift = DeferredUiU;
    honey = "gap-3";
    iris = <div className="text-sm font-medium text-token-foreground">
        {<MemoizedFormattedMessage {...{
        id: "appgenShareDialog.access.title",
        defaultMessage: "Who has access",
        description: "Heading for access information in the site share dialog"
      }} />}
      </div>;
    let orbit = `${accessPolicy.revision}:${accessPolicy.access_mode}`,
      pine = selectedAccessMode ?? accessPolicy.access_mode;
    jewel = <AppgenShareDialogHelper16 key={orbit} {...{
      availableAccessModes,
      currentAccessMode: accessPolicy.access_mode,
      isWorkspaceAccount,
      selectedAccessMode: pine,
      onAccessModeChange
    }} />;
    eagle = "vertical-scroll-fade-mask flex max-h-64 flex-col gap-3 overflow-y-auto";
    frost = moss == null ? null : <UseWorkspaceUsersI {...{
      avatarLabel: lemon(moss),
      label: kite(moss),
      secondaryLabel: marble(moss),
      trailingContent: <span className="text-sm text-token-description-foreground">
                {<MemoizedFormattedMessage {...{
          id: "appgenShareDialog.permission.owner",
          defaultMessage: "Owner",
          description: "Label for the owner in the site share dialog"
        }} />}
              </span>
    }} />;
    let quest;
    quest = ridge => <UseWorkspaceUsersI key={ridge.account_user_id} {...{
      avatarLabel: lemon(ridge),
      label: kite(ridge),
      secondaryLabel: marble(ridge),
      trailingContent: <AppgenShareDialogHelper13 {...{
        onRemoveAccess: canManageInvitees ? () => {
          onRemoveAccessUser(ridge);
        } : undefined
      }} />
    }} />;
    glide = north.map(quest);
  }
  let knoll;
  {
    let storm;
    storm = tide => <UseWorkspaceUsersI key={tide.id} {...{
      label: tide.name,
      secondaryLabel: coral.formatMessage({
        id: "appgenShareDialog.access.groupSize",
        defaultMessage: "{count, plural, one {# member} other {# members}}",
        description: "Member count shown for a group in the site share dialog"
      }, {
        count: tide.size
      }),
      trailingContent: <AppgenShareDialogHelper13 {...{
        onRemoveAccess: canManageInvitees && removableAccessGroupIds.has(tide.id) ? () => {
          onRemoveAccessGroup(tide);
        } : undefined
      }} />
    }} />;
    knoll = activeAccessGroups.map(storm);
  }
  let lunar = <div className={eagle}>
      {frost}
      {glide}
      {knoll}
    </div>;
  return <DeferredUiU {...{
    className: honey,
    children: [iris, jewel, lunar]
  }} />;
}
function jade({
  activeAccessUsers,
  currentAccountUserId,
  currentUserEmail
}) {
  let unity = currentUserEmail?.trim().toLowerCase();
  if (unity != null && unity.length > 0) {
    let vale = activeAccessUsers.find(item => item.email?.trim().toLowerCase() === unity);
    if (vale != null) return vale;
  }
  return currentAccountUserId == null ? null : activeAccessUsers.find(item => item.account_user_id === currentAccountUserId) ?? null;
}
function kite(wave) {
  return wave.name ?? wave.email ?? wave.account_user_id;
}
function lemon(apex) {
  return apex.name ?? apex.email ?? apex.account_user_id.replace(/[-_]/g, " ");
}
function marble(brook) {
  return brook.name == null ? null : brook.email;
}
function AppgenShareDialogHelper13(cliff) {
  let {
      onRemoveAccess
    } = cliff,
    dusk,
    elm;
  dusk = [{
    value: "visit"
  }];
  elm = <MemoizedFormattedMessage {...{
    id: "appgenShareDialog.permission.remove",
    defaultMessage: "Remove access",
    description: "Menu item for removing a person's site access"
  }} />;
  return <UseWorkspaceUsersO {...{
    options: dusk,
    removeLabel: elm,
    value: "visit",
    renderLabel: nickel,
    onRemoveAccess
  }} />;
}
function nickel() {
  return <AppgenShareDialogHelper15 {...{}} />;
}
function AppgenShareDialogHelper15() {
  return <MemoizedFormattedMessage {...{
    id: "appgenShareDialog.permission.visit",
    defaultMessage: "Can visit",
    description: "Visitor permission label in the site share dialog"
  }} />;
}
function AppgenShareDialogHelper16(fern) {
  let {
      availableAccessModes,
      currentAccessMode,
      isWorkspaceAccount,
      selectedAccessMode,
      onAccessModeChange
    } = fern,
    grove,
    hill;
  {
    let juniper = AppInitialFO({
      availableAccessModes,
      currentAccessMode,
      isWorkspaceAccount
    });
    grove = useWorkspaceUsersM;
    hill = juniper.map(onyx);
  }
  let isle = lagoon => lagoon === "custom" && !isWorkspaceAccount ? <MemoizedFormattedMessage {...{
    id: "appgenAccess.state.personalOwnerOnly",
    defaultMessage: "Just me",
    description: "Label for a personal site whose access is limited to its owner"
  }} /> : <MemoizedFormattedMessage {...{
    ...willow[lagoon]
  }} />;
  const Alpha = grove;
  return <Alpha {...{
    options: hill,
    value: selectedAccessMode,
    renderLabel: isle,
    onChange: onAccessModeChange
  }} />;
}
function onyx(meadow) {
  let {
    disabled,
    value
  } = meadow;
  return {
    disabled,
    Icon: $e(value),
    value
  };
}
function $e(nest) {
  switch (nest) {
    case "admins_only":
    case "custom":
      return AppIconL0;
    case "workspace_all":
      return resetStoreAtomValueSf;
    case "public":
      return AppIconJtt;
  }
}
function AppgenShareDialogHelper18(oak) {
  let {
      accessMode,
      hasPendingAccessChange,
      hasPendingInvitees,
      isSaving,
      liveUrl,
      showVisitAction,
      onCancelChanges,
      onDone
    } = oak,
    petal = useIntl(),
    quiet = CodexPluginActionType(appScopeAtom),
    rain = pearl({
      action: "copyLink",
      isSaving,
      liveUrl
    });
  let seed = rain,
    trail = pearl({
      action: "visit",
      isSaving,
      liveUrl
    });
  let urn = trail,
    vine = {
      onClick: onDone
    };
  let wind = accessMode === "public" ? <MemoizedFormattedMessage {...{
    id: "appgenShareDialog.publish",
    defaultMessage: "Publish",
    description: "Button label for publishing a site to the public internet"
  }} /> : undefined;
  let yarrow = {
    label: wind,
    onClick: onDone
  };
  let azure = {
    invite: vine,
    share: yarrow
  };
  let birch = {
    onClick: onCancelChanges
  };
  let canyon = liveUrl === undefined ? null : <div className="flex items-center gap-2">
        {showVisitAction ? <OptionalTooltip {...{
      tooltipContent: urn,
      children: <span className="inline-flex">
                  {<ReadLoginRouteQuerySnapshot {...{
          color: "outline",
          disabled: isSaving || liveUrl == null,
          size: "toolbar",
          onClick: ever => {
            liveUrl != null && deferredUiEnt({
              event: ever,
              href: liveUrl,
              initiator: "mcp_app_resource"
            });
          },
          children: [liveUrl == null ? null : <HostFeatureConfigToggles {...{
            className: "icon-xs",
            ExternalIcon: AppIconTk,
            href: liveUrl
          }} />, <MemoizedFormattedMessage {...{
            id: "appgenShareDialog.visit",
            defaultMessage: "Visit",
            description: "Button label for opening a live site externally"
          }} />]
        }} />}
                </span>
    }} /> : null}
        {<OptionalTooltip {...{
      tooltipContent: seed,
      children: <span className="inline-flex">
                  {<ReadLoginRouteQuerySnapshot {...{
          color: "outline",
          disabled: isSaving || liveUrl == null,
          size: "toolbar",
          onClick: () => {
            liveUrl != null && writeClipboardContents(liveUrl).then(value => {
              value && quiet.get(toastAtom).info(petal.formatMessage({
                id: "appgenShareDialog.copySuccess",
                defaultMessage: "Copied to clipboard",
                description: "Toast shown after copying a live site URL"
              }));
            });
          },
          children: [<AppInitialQj className="icon-xs" />, <MemoizedFormattedMessage {...{
            id: "appgenShareDialog.copyLink",
            defaultMessage: "Copy link",
            description: "Button label for copying a live site URL"
          }} />]
        }} />}
                </span>
    }} />}
      </div>;
  let dew = petal.formatMessage({
    id: "appgenShareDialog.saving",
    defaultMessage: "Saving",
    description: "Accessible label for the site share dialog save button while saving"
  });
  return <DeferredUiU {...{
    className: "pt-4",
    children: <div className="flex w-full items-center justify-end gap-3">
            {<UseWorkspaceUsersF {...{
        actions: azure,
        cancelAction: birch,
        disabled: isSaving,
        hasPendingAccessChange,
        hasPendingInvitees,
        idleActions: canyon,
        isSaving,
        savingAriaLabel: dew,
        size: "toolbar",
        spinnerClassName: "icon-xxs"
      }} />}
          </div>
  }} />;
}
function pearl({
  action,
  isSaving,
  liveUrl
}) {
  if (liveUrl == null) switch (action) {
    case "copyLink":
      return <MemoizedFormattedMessage {...{
        id: "appgenShareDialog.copyLinkDisabled.notPublished",
        defaultMessage: "Publish this site to copy its link",
        description: "Tooltip explaining why the site share dialog copy link button is disabled"
      }} />;
    case "visit":
      return <MemoizedFormattedMessage {...{
        id: "appgenShareDialog.visitDisabled.notPublished",
        defaultMessage: "Publish this site before visiting it",
        description: "Tooltip explaining why the site share dialog visit button is disabled"
      }} />;
  }
  return isSaving ? <MemoizedFormattedMessage {...{
    id: "appgenShareDialog.footerActionDisabled.saving",
    defaultMessage: "Sharing settings are still saving",
    description: "Tooltip explaining why site share dialog footer actions are disabled while saving"
  }} /> : null;
}
function quartz(field) {
  return [...(field?.workspace_groups.map(grain => ({
    ...grain,
    source: "workspace"
  })) ?? []), ...(field?.tenant_groups.map(haven => ({
    ...haven,
    source: "tenant"
  })) ?? [])];
}
function river(...ink) {
  return {
    tenant_groups: slate(ink.flatMap(item => item?.tenant_groups ?? [])),
    workspace_groups: slate(ink.flatMap(item => item?.workspace_groups ?? []))
  };
}
function slate(jadeite) {
  return Array.from(new Map(jadeite.map(item => [item.id, item])).values());
}
function at(kernel, leaf) {
  return {
    chipLabel: kernel.name,
    id: `group:${kernel.source}:${kernel.id}`,
    label: kernel.name,
    secondaryLabel: leaf.formatMessage({
      id: "appgenShareDialog.access.groupSize",
      defaultMessage: "{count, plural, one {# member} other {# members}}",
      description: "Member count shown for a group in the site share dialog"
    }, {
      count: kernel.size
    }),
    target: {
      kind: "group",
      group: kernel
    }
  };
}
function timber(maple) {
  let nimbus = useWorkspaceUsersL(maple);
  return {
    chipLabel: nimbus.chipLabel,
    id: `user:${maple.account_user_id}`,
    label: nimbus.label,
    secondaryLabel: nimbus.secondaryLabel,
    target: {
      kind: "user",
      user: maple
    }
  };
}
var umbra, violet, $, willow;
