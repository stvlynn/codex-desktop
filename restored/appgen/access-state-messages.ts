// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `yIc` near export `of`).

import { defineMessages } from "react-intl";

export const accessStateMessages = defineMessages({
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
    description: "Label for a site shared with both people and groups",
  },
  public: {
    id: "appgenAccess.state.visibleToEveryone",
    defaultMessage: "Visible to everyone",
    description: "Label for a site shared publicly on the internet",
  },
  workspace_all: {
    id: "appgenAccess.state.visibleToWorkspace",
    defaultMessage: "Visible to your workspace",
    description: "Label for a site shared with anyone in the workspace",
  },
});
