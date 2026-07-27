// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Section headers and loading states for the composer @ mention list.

import { defineMessages } from "react-intl";

export const atMentionListMessages = defineMessages({
  sites: {
    id: "composer.atMentionList.sites",
    defaultMessage: "Sites",
    description:
      "Section header for the user's Sites results in the composer @ mention list. Selecting a result inserts that site as a mention chip.",
  },
  sitesLoading: {
    id: "composer.atMentionList.sitesLoading",
    defaultMessage: "Loading sites…",
    description:
      "Shown in the Sites section of the composer @ mention list while the user's sites load and no results have arrived yet.",
  },
  liveAgents: {
    id: "composer.atMentionList.liveAgents",
    defaultMessage: "Live agents",
    description: "Section header for live agent results in the @ mention list.",
  },
  plugins: {
    id: "composer.atMentionList.plugins",
    defaultMessage: "Plugins",
    description: "Section header for plugin results in the @ mention list.",
  },
  pluginsLoading: {
    id: "composer.atMentionList.pluginsLoading",
    defaultMessage: "Loading plugins…",
    description:
      "Shown in the plugins section when plugin discovery is loading and no results have arrived yet",
  },
  skills: {
    id: "composer.atMentionList.skills",
    defaultMessage: "Skills",
    description: "Section header for skill results in the @ mention list.",
  },
  skillsLoading: {
    id: "composer.atMentionList.skillsLoading",
    defaultMessage: "Loading skills…",
    description:
      "Shown in the skills section when skill discovery is loading and no results have arrived yet",
  },
  chats: {
    id: "composer.atMentionList.chats",
    defaultMessage: "Chats",
    description: "Section header for past task results in the @ mention list.",
  },
  chatsLoading: {
    id: "composer.atMentionList.chats.loading",
    defaultMessage: "Searching chats…",
    description: "Shown in the tasks section while past tasks are loading",
  },
  filesAndChats: {
    id: "composer.atMentionList.filesAndChats",
    defaultMessage: "Files and chats",
    description:
      "Section header shown before the user searches files and tasks in the @ mention list.",
  },
  filesAndChatsEmptyQuery: {
    id: "composer.atMentionList.filesAndChats.emptyQuery",
    defaultMessage: "Type to search files or chats",
    description:
      "Shown in the files and tasks section when the @ mention query is empty.",
  },
});
