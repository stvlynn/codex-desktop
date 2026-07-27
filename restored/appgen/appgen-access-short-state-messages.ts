// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bIc` / export `rf` (`gIc`).

import {
  appgenAccessStateKey,
  type AppgenAccessLike,
  type AppgenAccessStateKey,
} from "./appgen-access-state-key";

export type AppgenAccessShortMessage = {
  id: string;
  defaultMessage: string;
  description: string;
};

export const APPGEN_ACCESS_SHORT_STATE_MESSAGES = {
  groups: {
    id: "appgenAccess.shortState.groups",
    defaultMessage: "{groupCount, plural, one {# group} other {# groups}}",
    description: "Concise label for a site shared with one or more groups",
  },
  owner_only: {
    id: "appgenAccess.shortState.onlyYou",
    defaultMessage: "Only you",
    description: "Concise label for owner-only access",
  },
  people: {
    id: "appgenAccess.shortState.people",
    defaultMessage: "{userCount, plural, one {# person} other {# people}}",
    description: "Concise label for a site shared with people",
  },
  people_and_groups: {
    id: "appgenAccess.shortState.peopleAndGroups",
    defaultMessage: "People and groups",
    description: "Concise label for people+groups access",
  },
  public: {
    id: "appgenAccess.shortState.public",
    defaultMessage: "Anyone with the link",
    description: "Concise label for public access",
  },
  workspace_all: {
    id: "appgenAccess.shortState.workspace",
    defaultMessage: "Workspace",
    description: "Concise label for workspace access",
  },
  admins_only: {
    id: "appgenAccess.shortState.admins",
    defaultMessage: "Admins",
    description: "Concise label for admins-only access",
  },
  custom: {
    id: "appgenAccess.shortState.custom",
    defaultMessage: "Custom",
    description: "Concise label for custom access",
  },
} as const satisfies Record<AppgenAccessStateKey, AppgenAccessShortMessage>;

/** Short access-state message descriptor for an AppGen site. */
export function appgenAccessShortStateMessage(
  access: AppgenAccessLike,
): AppgenAccessShortMessage | undefined {
  const key = appgenAccessStateKey(access);
  return key == null ? undefined : APPGEN_ACCESS_SHORT_STATE_MESSAGES[key];
}
