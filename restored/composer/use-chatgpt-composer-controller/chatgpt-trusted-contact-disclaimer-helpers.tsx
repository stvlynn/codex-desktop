// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Trusted-contact disclaimer copy + markdown link component.

import { CHATGPT_DISCLAIMER_LINK_CLICKED_TYPE as appInitialO8 } from "../../analytics/chatgpt-disclaimer-link-clicked-type";
import { logProductEvent as appInitialJ9 } from "../../analytics/log-product-event";
import { appScopeAtom as appInitialFft, useAppScope as appInitialLT } from "../../boundaries/app-scope-runtime";
import { cx as appInitialWft } from "../../ui/cx";
import { useChatgptComposerControllerHelper65 } from "./chatgpt-composer-confirmation-link";

function useChatgptComposerControllerHelper254(
  request9629,
) {
  return request9629 == null
    ? undefined
    : Array.from(
        request9629,
        (request11382) => {
          return `&#${String(request11382.codePointAt(0))};`;
        },
      ).join("");
}

function useChatgptComposerControllerHelper253(
  request6980,
) {
  try {
    switch (new URL(request6980).protocol) {
      case "http:":
        return "http";
      case "https:":
        return "https";
      case "sms:":
        return "sms";
      case "tel:":
        return "tel";
      default:
        return null;
    }
  } catch {
    return null;
  }
}

function useChatgptComposerControllerHelper252({
  disclaimerType,
  intl,
  trustedContactName,
}) {
  let slot4996 = (
    request7315,
  ) => {
    return `**${intl.formatMessage({
      id: "codex.chatgpt.trustedContactDisclaimer.addTrustedContactTitle",
      defaultMessage: "Would it help to have extra support?",
      description:
        "Title on the add_trusted_contact_* ChatGPT trusted-contact disclaimer cards in Codex.",
    })}**\n\n${request7315}`;
  };
  switch (disclaimerType) {
    case "add_trusted_contact_us4":
      return slot4996(
        intl.formatMessage({
          id: "codex.chatgpt.trustedContactDisclaimer.addTrustedContactUs4Body",
          defaultMessage:
            "Adding a trusted contact helps make it easier to connect with someone you trust, if you ever need extra support",
          description:
            "Body copy shown on the add_trusted_contact_us4 ChatGPT trusted-contact disclaimer card in Codex.",
        }),
      );
    case "add_trusted_contact_us5":
      return slot4996(
        intl.formatMessage({
          id: "codex.chatgpt.trustedContactDisclaimer.addTrustedContactUs5Body",
          defaultMessage:
            "Adding a trusted contact can make it easier for someone you trust to be there for you when things feel hard",
          description:
            "Body copy shown on the add_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex.",
        }),
      );
    case "notify_trusted_contact_us5":
      return `**${intl.formatMessage(
        {
          id: "codex.chatgpt.trustedContactDisclaimer.notifyTrustedContactTitle",
          defaultMessage: "It might help to reach out to {trustedContactName}",
          description:
            "Title shown on the notify_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex. {trustedContactName} is the user's trusted contact name.",
        },
        {
          trustedContactName,
        },
      )}**\n\n${intl.formatMessage(
        {
          id: "codex.chatgpt.trustedContactDisclaimer.notifyTrustedContactBody",
          defaultMessage:
            "{trustedContactName} is your trusted contact — someone you've chosen for extra support. We may send them a note to encourage them to check in with you. We recommend that you reach out to them as well.",
          description:
            "Body copy shown on the notify_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex. {trustedContactName} is the user's trusted contact name.",
        },
        {
          trustedContactName,
        },
      )}`;
  }
}

function useChatgptComposerControllerHelper251(
  request1736,
) {
  const UseChatgptComposerControllerHelper65 =
    useChatgptComposerControllerHelper65;
  let slot5759,
    slot5760,
    slot5761,
    slot5762,
    slot5763;
  {
    let {
      children,
      className,
      href,
      onClick,
      onClickCapture,
      rel,
      target,
      ...rest
    } = request1736;
    slot5759 = children;
    slot5760 = className;
    slot5761 = href;
    slot5762 = onClickCapture;
    slot5763 = rest;
  }
  let slot5764 = appInitialLT(appInitialFft);
  if (slot5761 == null) {
    let slot14658;
    return <>{slot5759}</>;
  }
  let slot5765 = appInitialWft(
    slot5760,
    "!text-token-text-primary underline hover:!text-token-text-primary hover:no-underline",
  );
  let slot5766 = (event) => {
    slot5762?.(event);
    let slot13974 =
      useChatgptComposerControllerHelper253(
        slot5761,
      );
    slot13974 != null &&
      appInitialJ9(slot5764, appInitialO8, {
        disclaimerSource: "sh_disclaimer_notice",
        protocol: slot13974,
        via: event.detail === 0 ? "keyboard" : "pointer",
      });
  };
  return (
    <UseChatgptComposerControllerHelper65
      {...slot5763}
      href={slot5761}
      initiator="markdown_link_click"
      isBrowserSidebarEnabled={false}
      className={slot5765}
      onClickCapture={slot5766}
    >
      {slot5759}
    </UseChatgptComposerControllerHelper65>
  );
}

const tx = { a: useChatgptComposerControllerHelper251 };


export {
  useChatgptComposerControllerHelper251,
  useChatgptComposerControllerHelper252,
  useChatgptComposerControllerHelper253,
  useChatgptComposerControllerHelper254,
};

export {
  useChatgptComposerControllerHelper251,
  useChatgptComposerControllerHelper252,
  useChatgptComposerControllerHelper253,
  useChatgptComposerControllerHelper254,
};
