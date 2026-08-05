// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Safety-review banner for ChatGPT browser rows.

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
import { setConversationSelectedModel as AppInitialBP } from "../../conversation/set-conversation-selected-model";
import { useDynamicConfig as appInitialNlt } from "../../hooks/use-dynamic-config";
import { appLogger as appInitialDdt } from "../../logging/app-logger";
import { SafeMarkdown as appInitialON } from "../../markdown/safe-markdown";
import { collectModelOptions as AppInitialEI } from "../../models/collect-model-options";
import { findModelVersionOptionId as AppInitialOI } from "../../models/find-model-version-option-id";
import { toModelVersionOptionRef as AppInitialDI } from "../../models/to-model-version-option-ref";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import {
  zodObject as appInitialXT,
  zodString as appInitialCT,
} from "../../vendor/zod";
import {
  useChatgptComposerControllerHelper268,
  useChatgptComposerControllerHelper270,
  useChatgptComposerControllerHelper271,
  useChatgptComposerControllerHelper272,
  useChatgptComposerControllerHelper273,
  safetyMarkdownComponents,
  safetyReviewContext,
  SAFETY_FASTER_MODEL_SCHEME,
  SAFETY_FASTER_MODEL_HREF,
  modelSlugSchema,
  LEARN_MORE_TAIL_RE,
} from "./chatgpt-safety-review-helpers";

reactCompilerRuntime();

const React = rolldownRuntimeS(react(), 1) as {
  useContext: (context: unknown) => any;
  useEffect: (effect: () => void, deps: unknown[]) => void;
  useEffectEvent: (fn: (...args: any[]) => void) => (...args: any[]) => void;
};

function useChatgptComposerControllerHelper269(request538) {
  const SafetyMarkdown = slot2909;
  const SafetyBannerFrame = slot2907;
  const SafetyReviewProvider = slot2904;
  let {
      conversationId,
      isShimmering,
      message,
      protectionType,
      requestId,
      requestModel,
      retryPending,
    } = request538,
    slot2888 = appInitialLT(appInitialFft),
    { value } = appInitialNlt("1217873841"),
    { data, isPlaceholderData } = appInitialRT(_AppInitialKP),
    slot2889;
  {
    let slot12725 = modelSlugSchema.safeParse(value),
      slot12726 = slot12725.success ? slot12725.data.model_slug : null,
      slot12727 =
        isPlaceholderData || slot12726 == null || slot12726 === requestModel
          ? undefined
          : AppInitialEI(data, {
              slug: slot12726,
              thinkingEffort: null,
              versionId: null,
            });
    slot2889 =
      slot12727 == null
        ? null
        : AppInitialDI(slot12727, AppInitialOI(data, slot12727.slug));
  }
  let slot2890 = slot2889,
    {
      body,
      learnMoreLabel,
      learnMoreUrl: slot2891,
    } = useChatgptComposerControllerHelper273(message),
    slot2892 = slot2890 != null && message.includes(SAFETY_FASTER_MODEL_SCHEME);
  let slot2893 = slot2892,
    slot2894 = (request5556, request5557) => {
      appInitialJ9(slot2888, appInitialE8, {
        actionType: request5557,
        clientRequestId: requestId,
        conversationId,
        linkType: request5556,
        protectionType:
          protectionType === "bio"
            ? appInitialN8.CHATGPT_SAFETY_LINK_PROTECTION_TYPE_BIO
            : appInitialN8.CHATGPT_SAFETY_LINK_PROTECTION_TYPE_CYBER,
        requestModelSlug: requestModel,
        surface: appInitialR8.CHATGPT_SAFETY_LINK_SURFACE_TEXT_CHAT,
        targetModelSlug: slot2890?.slug,
      });
    };
  let slot2895 = slot2894,
    slot2896 = () => {
      slot2895(
        appInitialI8.CHATGPT_SAFETY_LINK_TYPE_SAFETY_REVIEW_FASTER_MODEL,
        appInitialT8.CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_SHOWN,
      );
    };
  let slot2897 = React.useEffectEvent(slot2896),
    slot2898 = () => {
      slot2893 && slot2897();
    };
  let slot2899;
  slot2899 = [slot2893, requestId];
  React.useEffect(slot2898, slot2899);
  let slot2900 = () => {
    slot2895(
      appInitialI8.CHATGPT_SAFETY_LINK_TYPE_SAFETY_REVIEW_LEARN_MORE,
      appInitialT8.CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_SHOWN,
    );
  };
  let slot2901 = React.useEffectEvent(slot2900);
  React.useEffect(() => {
    slot2891 != null && slot2901();
  }, [slot2891, requestId]);
  let slot2902 = (request11196) => {
    AppInitialBP(slot2888, conversationId, request11196);
    _appInitialRP(slot2888, conversationId, request11196).catch(
      useChatgptComposerControllerHelper270,
    );
  };
  let slot2903 = slot2902,
    slot2904 = safetyReviewContext,
    slot2905 = (request10694) => {
      slot2895(
        request10694,
        appInitialT8.CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_CLICKED,
      );
    };
  let slot2906 = {
    fasterModel: slot2890,
    logInteraction: slot2905,
    onRetry: slot2903,
    retryPending,
  };
  let slot2907 = useChatgptComposerControllerHelper268,
    slot2908 = () => {
      slot2895(
        appInitialI8.CHATGPT_SAFETY_LINK_TYPE_SAFETY_REVIEW_LEARN_MORE,
        appInitialT8.CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_CLICKED,
      );
    };
  let slot2909 = appInitialON,
    slot2910 = safetyMarkdownComponents,
    slot2911 = body.replaceAll(
      SAFETY_FASTER_MODEL_SCHEME,
      SAFETY_FASTER_MODEL_HREF,
    ),
    slot2912 = (
      <SafetyMarkdown className="contents !text-inherit" components={slot2910}>
        {slot2911}
      </SafetyMarkdown>
    );
  let slot2913 = (
    <SafetyBannerFrame
      isShimmering={isShimmering}
      learnMoreLabel={learnMoreLabel}
      learnMoreUrl={slot2891}
      onLearnMore={slot2908}
    >
      {slot2912}
    </SafetyBannerFrame>
  );
  return (
    <SafetyReviewProvider value={slot2906}>{slot2913}</SafetyReviewProvider>
  );
}

export { useChatgptComposerControllerHelper269 };

export {
  useChatgptComposerControllerHelper268,
  useChatgptComposerControllerHelper270,
  useChatgptComposerControllerHelper273,
} from "./chatgpt-safety-review-helpers";
