// Restored from ref/webview/assets/conversation-source-AkSNVCIa.js
// Conversation source: virtualized turn list, find highlight, summary panel layout, search adapter.
// Stage 3: drained from boundaries/ into semantic conversation/conversation-source modules.
// Summary-panel content-shift motion value.

import * as React from "react";
import {
  useMotionValue,
  useMotionValueEvent,
} from "../../vendor/framer-motion";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import {
  shellPanelPinnedDerivedAtom,
  shouldKeepPanelPinned,
} from "../../app-shell/shell-panel-pin";
import {
  rightPanelShellOpenAtom,
  sidebarOpenAtom,
} from "../../navigation/app-shell-atoms";
import { readPrefersReducedMotionAtom } from "../../motion/use-prefers-reduced-motion";
import {
  useAppScopeAtomValue,
  useAppScopeValue,
} from "../../boundaries/composer-appscope-atoms";
import { esmInit } from "../../runtime/rolldown-runtime";
import { summaryPanelDisplayAtom } from "./summary-panel-display-atom";
import {
  animateOrSetMotionValue,
  contentShiftForPinnedWidth,
  deriveSummaryVisibility,
  ensureSummaryPanelGutterInit,
} from "./summary-panel-display-helpers";
import { ensureSummaryPanelDisplayAtomInit } from "./summary-panel-display-atom";

export function useSummaryContentShift(
  useConversationSourceOpts2: unknown,
  useConversationSourceOpts3?:
    | boolean
    | {
        resetKey: string;
      },
) {
  let conversationSourceBinding57 =
      useConversationSourceOpts3 === undefined
        ? true
        : useConversationSourceOpts3,
    conversationSourceBinding58 = shouldKeepPanelPinned(
      useAppScopeAtomValue(
        shellPanelPinnedDerivedAtom,
        conversationSourceBinding57,
      ),
      conversationSourceBinding57,
    ),
    conversationSourceBinding59 = useAppScopeValue(rightPanelShellOpenAtom),
    conversationSourceBinding60 = useAppScopeValue(sidebarOpenAtom),
    conversationSourceBinding61 = useAppScopeValue(summaryPanelDisplayAtom),
    conversationSourceBinding62 =
      conversationSourceBinding61.isPopoverOpen ||
      (typeof conversationSourceBinding57 != "boolean" &&
        conversationSourceBinding58),
    conversationSourceBinding63 = useAppScopeValue(
      readPrefersReducedMotionAtom,
    ),
    conversationSourceBinding64 = React.useContext(ShellLayoutMetricsContext),
    conversationSourceBinding65 = useMotionValue(0),
    conversationSourceBinding66 =
      conversationSourceBinding64?.mainContentTargetWidth ??
      conversationSourceBinding65,
    conversationSourceBinding67 = useMotionValue(
      contentShiftForPinnedWidth({
        isPinned: conversationSourceBinding58,
        mainContentTargetWidth: conversationSourceBinding66.get(),
      }),
    ),
    conversationSourceBinding68 = React.useRef(null),
    conversationSourceBinding69 = conversationSourceBinding67.get();
  let conversationSourceBinding70 = React.useRef(conversationSourceBinding69),
    conversationSourceBinding71 = React.useRef(useConversationSourceOpts2),
    conversationSourceBinding72 = deriveSummaryVisibility({
      displayMode: conversationSourceBinding61.displayMode,
      isPinned: conversationSourceBinding58,
      isPopoverOpen: conversationSourceBinding62,
    }),
    conversationSourceBinding73,
    conversationSourceBinding74;
  conversationSourceBinding73 = () => {
    if (conversationSourceBinding71.current === useConversationSourceOpts2)
      return;
    conversationSourceBinding71.current = useConversationSourceOpts2;
    let conversationSourceBinding230 = contentShiftForPinnedWidth({
      isPinned: conversationSourceBinding58,
      mainContentTargetWidth: conversationSourceBinding66.get(),
    });
    conversationSourceBinding70.current = conversationSourceBinding230;
    conversationSourceBinding68.current?.stop();
    conversationSourceBinding67.set(conversationSourceBinding230);
  };
  conversationSourceBinding74 = [
    conversationSourceBinding67,
    useConversationSourceOpts2,
    conversationSourceBinding58,
    conversationSourceBinding66,
  ];
  React.useLayoutEffect(
    conversationSourceBinding73,
    conversationSourceBinding74,
  );
  let conversationSourceBinding75;
  conversationSourceBinding75 = (useConversationSourceOpts37) => {
    let conversationSourceBinding235 = contentShiftForPinnedWidth({
      isPinned: conversationSourceBinding58,
      mainContentTargetWidth: useConversationSourceOpts37,
    });
    conversationSourceBinding70.current !== conversationSourceBinding235 &&
      ((conversationSourceBinding70.current = conversationSourceBinding235),
      conversationSourceBinding68.current?.stop(),
      (conversationSourceBinding68.current = animateOrSetMotionValue(
        conversationSourceBinding67,
        conversationSourceBinding235,
        conversationSourceBinding63,
      )));
  };
  useMotionValueEvent(
    conversationSourceBinding66,
    "change",
    conversationSourceBinding75,
  );
  let conversationSourceBinding76 = () => {
    let conversationSourceBinding234 = contentShiftForPinnedWidth({
      isPinned: conversationSourceBinding58,
      mainContentTargetWidth: conversationSourceBinding66.get(),
    });
    conversationSourceBinding70.current !== conversationSourceBinding234 &&
      ((conversationSourceBinding70.current = conversationSourceBinding234),
      conversationSourceBinding68.current?.stop(),
      (conversationSourceBinding68.current = animateOrSetMotionValue(
        conversationSourceBinding67,
        conversationSourceBinding234,
        conversationSourceBinding63,
      )));
  };
  let conversationSourceBinding77;
  conversationSourceBinding77 = [
    conversationSourceBinding67,
    conversationSourceBinding58,
    conversationSourceBinding59,
    conversationSourceBinding60,
    conversationSourceBinding66,
    conversationSourceBinding63,
  ];
  React.useEffect(conversationSourceBinding76, conversationSourceBinding77);
  let conversationSourceBinding78, conversationSourceBinding79;
  conversationSourceBinding78 = () => {
    return () => {
      conversationSourceBinding68.current?.stop();
    };
  };
  conversationSourceBinding79 = [];
  React.useEffect(conversationSourceBinding78, conversationSourceBinding79);
  return {
    contentShift: conversationSourceBinding67,
    shouldHideInlineImmediately:
      conversationSourceBinding72.shouldHideInlineImmediately,
    shouldShow: conversationSourceBinding72.shouldShow,
  };
}

export const ensureSummaryPanelDisplayRuntimeInit = esmInit(() => {
  ensureSummaryPanelGutterInit();
  ensureSummaryPanelDisplayAtomInit();
});
