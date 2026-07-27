// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// defineMessages cluster (bundle `J2`).

import { defineMessages } from "react-intl";

export const localconversationToolactivityActiveMessages = defineMessages({
  read: {
    id: "localConversation.toolActivity.active.read",
    defaultMessage: "<action>Reading</action> <detail>{target}</detail>",
    description: "Active tool activity summary while Codex is reading a file",
  },
  readSkill: {
    id: "localConversation.toolActivity.active.readSkill",
    defaultMessage:
      "<action>Reading</action> <detail>{skillName} skill</detail>",
    description:
      "Active tool activity summary while Codex is reading a skill definition",
  },
  readInternalKnowledge: {
    id: "localConversation.toolActivity.active.readInternalKnowledge",
    defaultMessage:
      "<action>Reading</action> <detail>Internal Knowledge</detail>",
    description:
      "Active tool activity summary while Codex is reading the canonical Internal Knowledge skill definition",
  },
  searchFolder: {
    id: "localConversation.toolActivity.active.search.folder",
    defaultMessage:
      "<action>Searching</action> <detail>files in {folder} folder</detail>",
    description:
      "Active tool activity summary while Codex is searching files in a folder",
  },
  searchQuery: {
    id: "localConversation.toolActivity.active.search.query",
    defaultMessage: "<action>Searching</action> <detail>for {query}</detail>",
    description:
      "Active tool activity summary while Codex is searching for a query",
  },
  searchFiles: {
    id: "localConversation.toolActivity.active.search.files",
    defaultMessage: "<action>Searching</action> <detail>files</detail>",
    description: "Active tool activity summary while Codex is searching files",
  },
  listFiles: {
    id: "localConversation.toolActivity.active.list.files",
    defaultMessage: "<action>Listing</action> <detail>files</detail>",
    description: "Active tool activity summary while Codex is listing files",
  },
  listFolder: {
    id: "localConversation.toolActivity.active.list.folder",
    defaultMessage:
      "<action>Listing</action> <detail>files in {folder} folder</detail>",
    description:
      "Active tool activity summary while Codex is listing files in a folder",
  },
  commandStopped: {
    id: "localConversation.toolActivity.active.command.stopped",
    defaultMessage: "<action>Stopped command</action>",
    description: "Active tool activity summary after Codex stops a command",
  },
  commandStoppedWithDetail: {
    id: "localConversation.toolActivity.active.command.stopped.detail",
    defaultMessage: "<action>Stopped</action> <detail>{command}</detail>",
    description: "Active tool activity summary after Codex stops a command",
  },
  commandRan: {
    id: "localConversation.toolActivity.active.command.ran",
    defaultMessage: "<action>Ran command</action>",
    description: "Active tool activity summary after Codex runs a command",
  },
  commandRanWithDetail: {
    id: "localConversation.toolActivity.active.command.ran.detail",
    defaultMessage: "<action>Ran</action> <detail>{command}</detail>",
    description: "Active tool activity summary after Codex runs a command",
  },
  commandRunning: {
    id: "localConversation.toolActivity.active.command.running",
    defaultMessage: "<action>Running command</action>",
    description: "Active tool activity summary while Codex runs a command",
  },
  commandRunningWithDetail: {
    id: "localConversation.toolActivity.active.command.running.detail",
    defaultMessage: "<action>Running</action> <detail>{command}</detail>",
    description: "Active tool activity summary while Codex runs a command",
  },
});
