// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Safety-review banner + learn-more parser for ChatGPT browser rows.

import { ChatgptSafetyLinkInteractionActionType as appInitialT8 } from "../../analytics/chatgpt-safety-link-interaction-action-type";
import { CHATGPT_SAFETY_LINK_INTERACTION_TYPE as appInitialE8 } from "../../analytics/chatgpt-safety-link-interaction-type";
import { ChatgptSafetyLinkProtectionType as appInitialN8 } from "../../analytics/chatgpt-safety-link-protection-type";
import { ChatgptSafetyLinkSurface as appInitialR8 } from "../../analytics/chatgpt-safety-link-surface";
import { ChatgptSafetyLinkType as appInitialI8 } from "../../analytics/chatgpt-safety-link-type";
import { logProductEvent as appInitialJ9 } from "../../analytics/log-product-event";
import {
  appScopeAtom as appInitialFft,
  useAppScope as appInitialLT,
} from "../../runtime/app-scope-runtime";
import {
  chatgptConversationBranchAtom as _appInitialRP,
  chatgptConversationQueryAtomKP as _AppInitialKP,
  useAppScopeValue as appInitialRT,
} from "../../composer/composer-appscope-atoms";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { BrowserSidebarGate as AppInitialSL } from "../../conversation/browser-sidebar-gate";
import { setConversationSelectedModel as AppInitialBP } from "../../conversation/set-conversation-selected-model";
import { useDynamicConfig as appInitialNlt } from "../../hooks/use-dynamic-config";
import { AppIconcv as appInitialCv } from "../../icons/app-icon-cv";
import { appLogger as appInitialDdt } from "../../logging/app-logger";
import { SafeMarkdown as appInitialON } from "../../markdown/safe-markdown";
import { collectModelOptions as AppInitialEI } from "../../models/collect-model-options";
import { findModelVersionOptionId as AppInitialOI } from "../../models/find-model-version-option-id";
import { toModelVersionOptionRef as AppInitialDI } from "../../models/to-model-version-option-ref";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { cx as appInitialWft } from "../../ui/cx";
import {
  zodObject as appInitialXT,
  zodString as appInitialCT,
} from "../../vendor/zod";

reactCompilerRuntime();

export const React = rolldownRuntimeS(react(), 1) as {
  useContext: (context: unknown) => any;
  useEffect: (effect: () => void, deps: unknown[]) => void;
  useEffectEvent: (fn: (...args: any[]) => void) => (...args: any[]) => void;
  createContext: (defaultValue: unknown) => unknown;
};

export let safetyMarkdownComponents: { a: any; p: any };

export const SAFETY_FASTER_MODEL_SCHEME = "chatgpt://safety-faster-model";
export const SAFETY_FASTER_MODEL_HREF =
  "https://chatgpt.invalid/safety-faster-model";
export const LEARN_MORE_TAIL_RE =
  /\s*\[([^\]\n]+)\]\(<(https:\/\/[^>\n]+)>\)\s*$/u;
export const modelSlugSchema = appInitialXT({
  model_slug: appInitialCT().trim().min(1),
});
export const safetyReviewContext = React.createContext(null);

function useChatgptComposerControllerHelper268(request1454) {
  const AppInitialCv = appInitialCv;
  let { children, isShimmering, learnMoreLabel, learnMoreUrl, onLearnMore } =
      request1454,
    slot5130 = <AppInitialCv className="icon-xs mt-0.5 shrink-0" />;
  let slot5131 =
      isShimmering &&
      "loading-shimmer-pure-text [--shimmer-contrast:rgba(255,255,255,0.52)] [background-size:36%_200%] dark:[--shimmer-contrast:rgba(0,0,0,0.42)]",
    slot5132 = appInitialWft("min-w-0", slot5131);
  let slot5133 = (
    <div className="flex min-w-0 flex-1 items-start gap-2">
      {slot5130}
      <span className={slot5132}>{children}</span>
    </div>
  );
  let slot5134 =
    learnMoreUrl == null || learnMoreLabel == null ? null : (
      <AppInitialSL
        className="ms-auto shrink-0 cursor-interaction !text-token-text-secondary underline decoration-token-text-tertiary decoration-dotted decoration-[0.5px] underline-offset-4 visited:!text-token-text-secondary hover:!text-token-text-primary hover:decoration-token-text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border"
        href={learnMoreUrl}
        initiator="open_in_browser_bridge"
        isBrowserSidebarEnabled={false}
        onClickCapture={() => {
          onLearnMore?.();
        }}
      >
        {learnMoreLabel}
      </AppInitialSL>
    );
  return (
    <div
      aria-live="polite"
      className="text-size-chat flex w-full items-start gap-3 text-token-text-secondary"
      role="status"
    >
      {slot5133}
      {slot5134}
    </div>
  );
}

function useChatgptComposerControllerHelper270(request9483) {
  appInitialDdt.error("Failed to retry ChatGPT safety-reviewed response", {
    safe: {},
    sensitive: {
      error: request9483,
    },
  });
}

function useChatgptComposerControllerHelper273(request5451) {
  let slot11715 = LEARN_MORE_TAIL_RE.exec(request5451);
  if (slot11715?.index == null || slot11715[1] == null || slot11715[2] == null)
    return {
      body: request5451,
      learnMoreLabel: null,
      learnMoreUrl: null,
    };
  try {
    if (new URL(slot11715[2]).protocol !== "https:")
      return {
        body: request5451,
        learnMoreLabel: null,
        learnMoreUrl: null,
      };
  } catch {
    return {
      body: request5451,
      learnMoreLabel: null,
      learnMoreUrl: null,
    };
  }
  return {
    body: request5451.slice(0, slot11715.index).trimEnd(),
    learnMoreLabel: slot11715[1],
    learnMoreUrl: slot11715[2],
  };
}

function useChatgptComposerControllerHelper271(request2426) {
  let { children, href } = request2426,
    slot6972 = React.useContext(safetyReviewContext),
    slot6973 = slot6972?.fasterModel;
  if (
    href !== SAFETY_FASTER_MODEL_HREF ||
    slot6972 == null ||
    slot6973 == null
  ) {
    let slot14659;
    return <>{children}</>;
  }
  let slot6974 = () => {
    slot6972.logInteraction(
      appInitialI8.CHATGPT_SAFETY_LINK_TYPE_SAFETY_REVIEW_FASTER_MODEL,
    );
    slot6972.onRetry(slot6973);
  };
  return (
    <button
      className="cursor-interaction rounded-sm border-0 bg-transparent p-0 text-inherit underline decoration-token-text-tertiary decoration-dotted decoration-[0.5px] underline-offset-4 hover:text-token-text-primary hover:decoration-token-text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border"
      disabled={slot6972.retryPending}
      type="button"
      onClick={slot6974}
    >
      {children}
    </button>
  );
}
function useChatgptComposerControllerHelper272(request7181) {
  let { children } = request7181;
  return <span className="block not-first:mt-1">{children}</span>;
}

safetyMarkdownComponents = {
  a: useChatgptComposerControllerHelper271,
  p: useChatgptComposerControllerHelper272,
};

export {
  useChatgptComposerControllerHelper268,
  useChatgptComposerControllerHelper270,
  useChatgptComposerControllerHelper271,
  useChatgptComposerControllerHelper272,
  useChatgptComposerControllerHelper273,
};
