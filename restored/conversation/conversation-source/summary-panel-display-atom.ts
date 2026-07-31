// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Summary-panel display scoped atom + width sync.

import * as React from "react";
import {
  useMotionValue,
  useMotionValueEvent,
} from "../../vendor/framer-motion";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import {
  rightPanelShellOpenAtom,
  sidebarOpenAtom,
} from "../../navigation/app-shell-atoms";
import {
  appScopeAtom,
  createScopedSignal,
} from "../../boundaries/app-scope-runtime";
import { useAppScopeValue } from "../../boundaries/composer-appscope-atoms";
import { esmInit } from "../../runtime/rolldown-runtime";
import { closePopoverOnUnmount } from "./summary-panel-display-helpers";
import { resolveSummaryDisplayMode } from "./summary-panel-display-helpers";

export var defaultSummaryDisplayState:
  | {
      displayMode: string;
      isPopoverOpen: boolean;
    }
  | undefined;
export var summaryPanelDisplayAtom: unknown;
export const ensureSummaryPanelDisplayAtomInit = esmInit(() => {
  defaultSummaryDisplayState = {
    displayMode: "overlay",
    isPopoverOpen: false,
  };
  summaryPanelDisplayAtom = createScopedSignal(
    appScopeAtom,
    defaultSummaryDisplayState,
  );
});

export function syncSummaryDisplayFromWidth(
  scope: { set: (atom: unknown, updater: unknown) => void },
  widthPx: number,
): void {
  const displayMode = resolveSummaryDisplayMode(widthPx);
  scope.set(
    summaryPanelDisplayAtom,
    (prev: { displayMode: string; isPopoverOpen: boolean }) => {
      const isPopoverOpen = displayMode === "overlay" && prev.isPopoverOpen;
      return prev.displayMode === displayMode &&
        prev.isPopoverOpen === isPopoverOpen
        ? prev
        : {
            displayMode,
            isPopoverOpen,
          };
    },
  );
}

export function useSummaryPanelDisplaySync(useConversationSourceOpts10: {
  set: (atom: unknown, updater: unknown) => void;
}) {
  let conversationSourceBinding138 = useAppScopeValue(rightPanelShellOpenAtom),
    conversationSourceBinding139 = useAppScopeValue(sidebarOpenAtom),
    conversationSourceBinding140 = React.useContext(ShellLayoutMetricsContext),
    conversationSourceBinding141 = useMotionValue(0),
    conversationSourceBinding142 =
      conversationSourceBinding140?.mainContentTargetWidth ??
      conversationSourceBinding141,
    conversationSourceBinding143;
  conversationSourceBinding143 = (useConversationSourceOpts60) => {
    syncSummaryDisplayFromWidth(
      useConversationSourceOpts10,
      useConversationSourceOpts60,
    );
  };
  useMotionValueEvent(
    conversationSourceBinding142,
    "change",
    conversationSourceBinding143,
  );
  let conversationSourceBinding144 = () => {
    syncSummaryDisplayFromWidth(
      useConversationSourceOpts10,
      conversationSourceBinding142.get(),
    );
  };
  let conversationSourceBinding145;
  conversationSourceBinding145 = [
    conversationSourceBinding138,
    conversationSourceBinding139,
    conversationSourceBinding142,
    useConversationSourceOpts10,
  ];
  React.useLayoutEffect(
    conversationSourceBinding144,
    conversationSourceBinding145,
  );
  let conversationSourceBinding146, conversationSourceBinding147;
  conversationSourceBinding146 = () => {
    return () => {
      useConversationSourceOpts10.set(
        summaryPanelDisplayAtom,
        closePopoverOnUnmount,
      );
    };
  };
  conversationSourceBinding147 = [useConversationSourceOpts10];
  React.useLayoutEffect(
    conversationSourceBinding146,
    conversationSourceBinding147,
  );
}
