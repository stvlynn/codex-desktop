// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Comma-joined selector for sidebar row hit-testing
// (bundle `zXe` / export `Ndt`).

import { AppActionSelector } from "./app-action-selectors";

export const SIDEBAR_HIT_TEST_SELECTOR = [
  AppActionSelector.sidebarSection,
  AppActionSelector.sidebarProjectRow,
  AppActionSelector.sidebarThreadRow,
].join(",");
