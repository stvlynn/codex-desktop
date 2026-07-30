// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// User-message label and connector tool-approval card for ChatGPT rows.

import {
  appScopeAtom as appInitialFft,
  useAppScope as appInitialLT,
} from "../../boundaries/app-scope-runtime";
import { ApprovalRequestCard as AppInitialN } from "../../conversation/approval-request-card";
import { submitUserComposerMessage as AppInitialIP } from "../../conversation/submit-user-composer-message";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { AppIconLV as appInitialLV } from "../../icons/app-icon-lv";
import { appLogger as appInitialDdt } from "../../logging/app-logger";
import { AppLogoImage as appInitialKG } from "../../ui/app-logo-image";
import { DetailDefinitionList as AppInitialZ } from "../../ui/detail-definition-list";
import { B_ } from "./chatgpt-reply-arrow-icon";

function useChatgptComposerControllerHelper287(request5266) {
  let { label } = request5266,
    slot11433 = <B_ className="icon-sm mt-0.5 shrink-0" />;
  return (
    <div className="flex items-start gap-1 self-end text-sm text-token-text-tertiary">
      {slot11433}
      {label}
    </div>
  );
}

function useChatgptComposerControllerHelper289(request9641) {
  let { label, values } = request9641;
  return (
    <AppInitialZ key={label} label={label}>
      {values.join(", ")}
    </AppInitialZ>
  );
}

function useChatgptComposerControllerHelper288(request546) {
  const AppInitialGft = appInitialGft;
  const AppInitialLV = appInitialLV;
  const AppInitialKG = appInitialKG;
  let { appInfo, conversationId, item, shouldBlockExternalEgress } = request546,
    slot2945 = appInitialJft(),
    slot2946 = appInitialLT(appInitialFft),
    slot2947 = (request6381, request6382) => {
      AppInitialIP(slot2946, {
        conversationId,
        model: item.model,
        prompt: "",
        toolApproval: {
          action: request6381,
          targetMessageId: request6382,
        },
      }).catch((error) => {
        appInitialDdt.error("ChatGPT connector approval response failed", {
          safe: {
            action: request6381,
          },
          sensitive: {
            error,
          },
        });
      });
    };
  let slot2948 = slot2947,
    slot2949 = item.alwaysAllowTargetMessageId,
    slot2950 =
      slot2949 == null || shouldBlockExternalEgress
        ? undefined
        : {
            onClick: () => {
              slot2948("allow", slot2949);
            },
          };
  let slot2951 = () => {
    slot2948("allow", item.allowTargetMessageId);
  };
  let slot2952 = () => {
    slot2948("deny", item.denyTargetMessageId);
  };
  let slot2953 = {
    leadingAction: slot2950,
    approveDisabled: shouldBlockExternalEgress,
    onApprove: slot2951,
    onDeny: slot2952,
  };
  let slot2954 =
    item.sensitiveData.length === 0 ? null : (
      <div className="flex flex-col gap-1 pt-2">
        <div className="text-size-chat-sm pb-1 text-token-description-foreground">
          {
            <AppInitialGft
              id="chatgptConversations.toolApproval.sharingDataIncludes"
              defaultMessage="Sharing data includes:"
              description="Heading above the data categories shared with a ChatGPT connector"
            />
          }
        </div>
        {item.sensitiveData.map(useChatgptComposerControllerHelper289)}
      </div>
    );
  let slot2955 = slot2945.formatMessage(
    {
      id: "chatgptConversations.toolApproval.connectorLogoAlt",
      defaultMessage: "{name} logo",
      description: "Alt text for the connector logo in a ChatGPT tool approval",
    },
    {
      name: item.connectorName,
    },
  );
  let slot2956 = !shouldBlockExternalEgress,
    slot2957 = <AppInitialLV className="icon-sm text-token-text-secondary" />;
  let slot2958 = (
    <AppInitialKG
      alt={slot2955}
      appInfo={appInfo}
      className="icon-sm rounded-sm object-contain"
      knownAppId={item.connectorName}
      loadRemote={slot2956}
      fallback={slot2957}
    />
  );
  let slot2959 = <span>{item.connectorName}</span>;
  let slot2960 = (
    <>
      {slot2958}
      {slot2959}
    </>
  );
  return (
    <AppInitialN
      actions={slot2953}
      details={slot2954}
      headerContent={slot2960}
      subtitle={item.description}
      title={item.title}
    />
  );
}

export {
  useChatgptComposerControllerHelper287,
  useChatgptComposerControllerHelper288,
  useChatgptComposerControllerHelper289,
};
