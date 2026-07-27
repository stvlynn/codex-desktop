// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// r5: component facades drained to real modules — re-export surface for callers.

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
} from "../conversation/browser-conversation-panel";
export {
  ThreadTitleRow,
  setThreadTitleRowDeps,
  type ThreadTitleRowProps,
} from "../conversation/thread-title-row";
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
export function bindConversationPageComponents(
  _next: Partial<Record<string, unknown>>,
): void {
  // No-op: components are real modules; bind peers via each module's set*Deps.
}
