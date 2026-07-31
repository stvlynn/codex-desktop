// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Component re-export surface for conversation-page; promoted from boundaries/.

export {
  SelectedTextOverlay,
  setSelectedTextOverlayDeps,
  type SelectedTextOverlayProps,
} from "../composer/selected-text-overlay";
export {
  ProjectHoverCardBody,
  setProjectHoverCardBodyDeps,
  type ProjectHoverCardBodyProps,
} from "../sidebar/project-hover-card-body";
export {
  BrowserConversationPanel,
  setBrowserConversationPanelDeps,
  type BrowserConversationPanelProps,
} from "./browser-conversation-panel";
export {
  ThreadTitleRow,
  setThreadTitleRowDeps,
  type ThreadTitleRowProps,
} from "./thread-title-row";
export {
  AnchoredPortalPopover,
  setAnchoredPortalPopoverDeps,
  type AnchoredPortalPopoverProps,
} from "../ui/anchored-portal-popover";
export {
  ConversationComposerHost,
  setConversationComposerHostDeps,
  type ConversationComposerHostProps,
} from "../composer/conversation-composer-host";

/** @deprecated r5 drained — use set*Deps on the real modules. */
export function bindConversationPageComponents(_next: Partial<Record<string, unknown>>): void {
  // No-op: components are real modules; bind peers via each module's set*Deps.
}
