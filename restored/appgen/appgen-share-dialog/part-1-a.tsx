// Restored from ref/webview/assets/appgen-share-dialog-j88Mseym.js
// Wave FY — full polished body from `appgen-share-dialog-j88Mseym/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 33 (verified 51/83).
// AST split 1/2 (lane a — access-list section)
/* split-lane-import-depth:1 */

import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { AppIconL0 } from "../../icons/app-icon-l0";
import { resetStoreAtomValueSf } from "../../utils/set-store-atom-value";

/** Wave FY unresolved companion (jsx-collision:useUpdateBrowserUseOriginRulesMutation@boundaries/browser-use-mutation-facades.ts) */
const AppInitialFO: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const UseWorkspaceUsersI: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const useWorkspaceUsersM: any = undefined;
/** Wave FY unresolved companion (sib-missing:hooks/use-workspace-users.ts) */
const UseWorkspaceUsersO: any = undefined;
export function AppgenShareDialogHelper8(bloom: any) {
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
      onRemoveAccessUser,
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
        currentUserEmail: ownerEmail,
      }),
      north = activeAccessUsers.filter(
        (item) => item.account_user_id !== moss?.account_user_id,
      );
    drift = DeferredUiU;
    honey = "gap-3";
    iris = (
      <div className="text-sm font-medium text-token-foreground">
        {
          <MemoizedFormattedMessage
            {...{
              id: "appgenShareDialog.access.title",
              defaultMessage: "Who has access",
              description:
                "Heading for access information in the site share dialog",
            }}
          />
        }
      </div>
    );
    let orbit = `${accessPolicy.revision}:${accessPolicy.access_mode}`,
      pine = selectedAccessMode ?? accessPolicy.access_mode;
    jewel = (
      <AppgenShareDialogHelper16
        key={orbit}
        {...{
          availableAccessModes,
          currentAccessMode: accessPolicy.access_mode,
          isWorkspaceAccount,
          selectedAccessMode: pine,
          onAccessModeChange,
        }}
      />
    );
    eagle =
      "vertical-scroll-fade-mask flex max-h-64 flex-col gap-3 overflow-y-auto";
    frost =
      moss == null ? null : (
        <UseWorkspaceUsersI
          {...{
            avatarLabel: lemon(moss),
            label: kite(moss),
            secondaryLabel: marble(moss),
            trailingContent: (
              <span className="text-sm text-token-description-foreground">
                {
                  <MemoizedFormattedMessage
                    {...{
                      id: "appgenShareDialog.permission.owner",
                      defaultMessage: "Owner",
                      description:
                        "Label for the owner in the site share dialog",
                    }}
                  />
                }
              </span>
            ),
          }}
        />
      );
    let quest;
    quest = (ridge) => (
      <UseWorkspaceUsersI
        key={ridge.account_user_id}
        {...{
          avatarLabel: lemon(ridge),
          label: kite(ridge),
          secondaryLabel: marble(ridge),
          trailingContent: (
            <AppgenShareDialogHelper13
              {...{
                onRemoveAccess: canManageInvitees
                  ? () => {
                      onRemoveAccessUser(ridge);
                    }
                  : undefined,
              }}
            />
          ),
        }}
      />
    );
    glide = north.map(quest);
  }
  let knoll;
  {
    let storm;
    storm = (tide) => (
      <UseWorkspaceUsersI
        key={tide.id}
        {...{
          label: tide.name,
          secondaryLabel: coral.formatMessage(
            {
              id: "appgenShareDialog.access.groupSize",
              defaultMessage:
                "{count, plural, one {# member} other {# members}}",
              description:
                "Member count shown for a group in the site share dialog",
            },
            {
              count: tide.size,
            },
          ),
          trailingContent: (
            <AppgenShareDialogHelper13
              {...{
                onRemoveAccess:
                  canManageInvitees && removableAccessGroupIds.has(tide.id)
                    ? () => {
                        onRemoveAccessGroup(tide);
                      }
                    : undefined,
              }}
            />
          ),
        }}
      />
    );
    knoll = activeAccessGroups.map(storm);
  }
  let lunar = (
    <div className={eagle}>
      {frost}
      {glide}
      {knoll}
    </div>
  );
  return (
    <DeferredUiU
      {...{
        className: honey,
        children: [iris, jewel, lunar],
      }}
    />
  );
}
function jade({ activeAccessUsers, currentAccountUserId, currentUserEmail }) {
  let unity = currentUserEmail?.trim().toLowerCase();
  if (unity != null && unity.length > 0) {
    let vale = activeAccessUsers.find(
      (item) => item.email?.trim().toLowerCase() === unity,
    );
    if (vale != null) return vale;
  }
  return currentAccountUserId == null
    ? null
    : (activeAccessUsers.find(
        (item) => item.account_user_id === currentAccountUserId,
      ) ?? null);
}
export function kite(wave: any) {
  return wave.name ?? wave.email ?? wave.account_user_id;
}
function lemon(apex) {
  return apex.name ?? apex.email ?? apex.account_user_id.replace(/[-_]/g, " ");
}
function marble(brook) {
  return brook.name == null ? null : brook.email;
}
function AppgenShareDialogHelper13(cliff) {
  let { onRemoveAccess } = cliff,
    dusk,
    elm;
  dusk = [
    {
      value: "visit",
    },
  ];
  elm = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenShareDialog.permission.remove",
        defaultMessage: "Remove access",
        description: "Menu item for removing a person's site access",
      }}
    />
  );
  return (
    <UseWorkspaceUsersO
      {...{
        options: dusk,
        removeLabel: elm,
        value: "visit",
        renderLabel: nickel,
        onRemoveAccess,
      }}
    />
  );
}
function nickel() {
  return <AppgenShareDialogHelper15 {...{}} />;
}
function AppgenShareDialogHelper15() {
  return (
    <MemoizedFormattedMessage
      {...{
        id: "appgenShareDialog.permission.visit",
        defaultMessage: "Can visit",
        description: "Visitor permission label in the site share dialog",
      }}
    />
  );
}
function AppgenShareDialogHelper16(fern) {
  let {
      availableAccessModes,
      currentAccessMode,
      isWorkspaceAccount,
      selectedAccessMode,
      onAccessModeChange,
    } = fern,
    grove,
    hill;
  {
    let juniper = AppInitialFO({
      availableAccessModes,
      currentAccessMode,
      isWorkspaceAccount,
    });
    grove = useWorkspaceUsersM;
    hill = juniper.map(onyx);
  }
  let isle = (lagoon) =>
    lagoon === "custom" && !isWorkspaceAccount ? (
      <MemoizedFormattedMessage
        {...{
          id: "appgenAccess.state.personalOwnerOnly",
          defaultMessage: "Just me",
          description:
            "Label for a personal site whose access is limited to its owner",
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          ...willow[lagoon],
        }}
      />
    );
  const Alpha = grove;
  return (
    <Alpha
      {...{
        options: hill,
        value: selectedAccessMode,
        renderLabel: isle,
        onChange: onAccessModeChange,
      }}
    />
  );
}
function onyx(meadow) {
  let { disabled, value } = meadow;
  return {
    disabled,
    Icon: $e(value),
    value,
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
var willow;
