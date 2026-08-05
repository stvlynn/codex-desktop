// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `yIc` / export `nf` (`hIc`).

import {
  appgenAccessStateKey,
  type AppgenAccessLike,
  type AppgenAccessStateKey,
} from "./appgen-access-state-key";

export type AppgenAccessMessage = {
  id: string;
  defaultMessage: string;
  description: string;
};

export const APPGEN_ACCESS_STATE_MESSAGES = {
  groups: {
    id: "appgenAccess.state.visibleToGroups",
    defaultMessage:
      "Visible to {groupCount, plural, one {# group} other {# groups}}",
    description: "Label for a site shared with one or more groups",
  },
  owner_only: {
    id: "appgenAccess.state.onlyVisibleToYou",
    defaultMessage: "Only visible to you",
    description: "Label for a site whose access is limited to its owner",
  },
  people: {
    id: "appgenAccess.state.visibleToPeople",
    defaultMessage:
      "Visible to {userCount, plural, one {# person} other {# people}}",
    description: "Label for a site shared with one or more people",
  },
  people_and_groups: {
    id: "appgenAccess.state.visibleToPeopleAndGroups",
    defaultMessage: "Visible to people and groups",
    description: "Label for a site shared with people and groups",
  },
  public: {
    id: "appgenAccess.state.visibleToAnyoneWithLink",
    defaultMessage: "Visible to anyone with the link",
    description: "Label for a publicly shared site",
  },
  workspace_all: {
    id: "appgenAccess.state.visibleToWorkspace",
    defaultMessage: "Visible to your workspace",
    description: "Label for a workspace-wide shared site",
  },
  admins_only: {
    id: "appgenAccess.state.visibleToAdmins",
    defaultMessage: "Visible to admins",
    description: "Label for an admins-only site",
  },
  custom: {
    id: "appgenAccess.state.custom",
    defaultMessage: "Custom access",
    description: "Fallback label for custom access",
  },
} as const satisfies Record<AppgenAccessStateKey, AppgenAccessMessage>;

/** Full access-state message descriptor for an AppGen site. */
export function appgenAccessStateMessage(
  access: AppgenAccessLike,
): AppgenAccessMessage | undefined {
  const key = appgenAccessStateKey(access);
  return key == null ? undefined : APPGEN_ACCESS_STATE_MESSAGES[key];
}
