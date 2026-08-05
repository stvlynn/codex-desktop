// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Visibility-aware GenUI widget refresh / poll controller (Helper10).

import {
  useChatgptComposerControllerHelper12,
  useChatgptComposerControllerHelper13,
  useChatgptComposerControllerHelper15,
} from "./chatgpt-conversation-widget-refresh-helpers";
import { chatgptWidgetRefreshMinIntervalMs } from "./chatgpt-conversation-update-schemas";

export function useChatgptComposerControllerHelper10({
  isVisible = () => {
    return document.visibilityState === "visible";
  },
  onVisibilityChange = useChatgptComposerControllerHelper15,
  refreshWidget,
}: {
  isVisible?: () => boolean;
  onVisibilityChange?: (onChange: () => void) => () => void;
  refreshWidget: (
    target: any,
  ) => Promise<{ next_poll_after_ms?: number | null }>;
}): {
  setTargets: (items: any[]) => void;
  stop: () => void;
} {
  let slot6223 = new Map(),
    slot6224 = false,
    slot6225 = (request9229, request9230) => {
      request9229.timeout = setTimeout(
        () => {
          request9229.timeout = null;
          slot6226(request9229);
        },
        Math.max(chatgptWidgetRefreshMinIntervalMs, request9230),
      );
    },
    slot6226 = async (event) => {
      let slot10124 = useChatgptComposerControllerHelper12(event.target);
      if (
        !(
          slot6224 ||
          slot6223.get(slot10124) !== event ||
          event.inFlight ||
          !isVisible()
        )
      ) {
        event.inFlight = true;
        try {
          let slot13928 = await refreshWidget(event.target);
          if (slot6224 || slot6223.get(slot10124) !== event) return;
          if (((event.failures = 0), slot13928.next_poll_after_ms == null)) {
            slot6223.delete(slot10124);
            return;
          }
          slot6225(event, slot13928.next_poll_after_ms);
        } catch (slot14151) {
          if (slot6224 || slot6223.get(slot10124) !== event) return;
          event.failures += 1;
          let slot14152 = useChatgptComposerControllerHelper13(
            slot14151,
            event.failures,
          );
          if (slot14152 == null) {
            slot6223.delete(slot10124);
            return;
          }
          slot6225(event, slot14152);
        } finally {
          event.inFlight = false;
        }
      }
    },
    slot6227 = onVisibilityChange(() => {
      if (isVisible())
        for (let slot16099 of slot6223.values())
          slot16099.timeout ?? slot6226(slot16099);
    });
  return {
    setTargets: (request6550) => {
      let slot12884 = new Map(
        request6550.map((item) => {
          return [useChatgptComposerControllerHelper12(item), item];
        }),
      );
      for (let [slot15681, slot15682] of slot6223)
        slot12884.has(slot15681) ||
          (slot15682.timeout != null && clearTimeout(slot15682.timeout),
          slot6223.delete(slot15681));
      for (let [slot14950, slot14951] of slot12884) {
        if (slot6223.has(slot14950)) continue;
        let slot15230 = {
          failures: 0,
          inFlight: false,
          target: slot14951,
          timeout: null,
        };
        slot6223.set(slot14950, slot15230);
        slot6226(slot15230);
      }
    },
    stop: () => {
      slot6224 = true;
      slot6227();
      for (let slot15880 of slot6223.values())
        slot15880.timeout != null && clearTimeout(slot15880.timeout);
      slot6223.clear();
    },
  };
}
