// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Trusted-contact disclaimer card for ChatGPT moderation footnotes.

import { CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_SHOWN_TYPE as AppInitialY6 } from "../../analytics/chatgpt-trusted-contact-enrollment-step-shown-type";
import { ChatgptTrustedContactEnrollmentStep as AppInitialJ6 } from "../../analytics/chatgpt-trusted-contact-enrollment-step";
import { ChatgptTrustedContactEntryPoint as AppInitialX6 } from "../../analytics/chatgpt-trusted-contact-entry-point";
import { CHATGPT_TRUSTED_CONTACT_NOTIFICATION_WARNING_ACTION_TAKEN_TYPE as AppInitialQ6 } from "../../analytics/chatgpt-trusted-contact-notification-warning-action-taken-type";
import { ChatgptTrustedContactNotificationWarningAction as AppInitialZ6 } from "../../analytics/chatgpt-trusted-contact-notification-warning-action";
import { logProductEvent as appInitialJ9 } from "../../analytics/log-product-event";
import {
  appScopeAtom as appInitialFft,
  useAppScope as appInitialLT,
} from "../../runtime/app-scope-runtime";
import { writingBlocksControllerAtom as appInitialCI } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_Llt_Init as appInitialLlt } from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import { useIntl as appInitialJft } from "../../i18n/use-intl";
import { rolldownRuntimeS } from "../../runtime/rolldown-runtime";
import { trustedContactShareHref as appInitialSF } from "../../safety/trusted-contact-share-href";
import { Button as appInitialYut } from "../../ui/button";
import { useChatgptComposerControllerHelper65 } from "./chatgpt-composer-confirmation-link";
import { useChatgptComposerControllerHelper249 } from "./chatgpt-moderation-disclaimer-card";
import {
  useChatgptComposerControllerHelper252,
  useChatgptComposerControllerHelper254,
} from "./chatgpt-trusted-contact-disclaimer-helpers";

reactCompilerRuntime();

const React = rolldownRuntimeS(react(), 1) as {
  useState: (init: boolean) => [boolean, (v: any) => void];
};
const SAFETY_SETTINGS_URL = "https://chatgpt.com/#settings/Safety";

function TrustedContactPeopleIcon(props: any) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10.5 11.25C12.1569 11.25 13.5 9.90685 13.5 8.25C13.5 6.59315 12.1569 5.25 10.5 5.25C8.84315 5.25 7.5 6.59315 7.5 8.25C7.5 9.90685 8.84315 11.25 10.5 11.25Z" stroke="currentColor" strokeWidth={1.5} />
      <path d="M4.5 18.75C4.5 15.4363 7.18629 12.75 10.5 12.75C11.6177 12.75 12.664 13.0556 13.5599 13.5878" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} />
      <path d="M17.25 19.5C17.1178 19.5 16.9856 19.4652 16.8675 19.3957C14.378 17.9305 13.5 16.4158 13.5 15.1875C13.5 14.0505 14.361 13.125 15.425 13.125C16.0064 13.125 16.4614 13.3988 16.7812 13.7137C16.8988 13.8295 17.1012 13.8295 17.2188 13.7137C17.5386 13.3988 17.9936 13.125 18.575 13.125C19.639 13.125 20.5 14.0505 20.5 15.1875C20.5 16.4158 19.622 17.9305 17.1325 19.3957C17.0144 19.4652 16.8822 19.5 16.75 19.5H17.25Z" fill="currentColor" />
    </svg>
  );
}

function useChatgptComposerControllerHelper250(
  request298,
) {
  const UseChatgptComposerControllerHelper65 =
    useChatgptComposerControllerHelper65;
  const AppInitialGft = appInitialGft;
  const AppInitialYut = appInitialYut;
  const PeopleIcon = TrustedContactPeopleIcon;
  const DisclaimerCard = slot1937;
  let { conversationId, disclaimerMetadata, disclaimerType, hostId } =
      request298,
    slot1931 = appInitialJft(),
    slot1932 = appInitialLT(appInitialFft),
    [
      slot1933,
      slot1934,
    ] = React.useState(false),
    [
      slot1935,
      slot1936,
    ] = React.useState(false),
    slot1937,
    slot1938,
    slot1939,
    slot1940,
    slot1941;
  slot1941 = Symbol.for(
    "react.early_return_sentinel",
  );
  bb0: {
    let slot9215 =
        useChatgptComposerControllerHelper254(
          disclaimerMetadata?.trusted_contact_name?.trim(),
        ) ||
        slot1931.formatMessage({
          id: "codex.chatgpt.trustedContactDisclaimer.defaultTrustedContactName",
          defaultMessage: "your trusted contact",
          description:
            "Fallback name used in a ChatGPT trusted-contact disclaimer when the trusted contact's name is unavailable.",
        }),
      slot9216;
    if (
      ((slot9216 =
        disclaimerType === "notify_trusted_contact_us5"
          ? appInitialSF(disclaimerMetadata)
          : undefined),
      (slot1938 =
        slot9216),
      slot1933)
    ) {
      slot1941 = null;
      break bb0;
    }
    slot1937 =
      useChatgptComposerControllerHelper249;
    slot1939 =
      "w-full bg-token-main-surface-primary";
    slot1940 =
      useChatgptComposerControllerHelper252({
        disclaimerType,
        intl: slot1931,
        trustedContactName: slot9215,
      });
  }
  if (
    slot1941 !==
    Symbol.for("react.early_return_sentinel")
  )
    return slot1941;
  let slot1942 =
    disclaimerType === "notify_trusted_contact_us5" ? (
      slot1938 == null || hostId == null ? null : (
        <UseChatgptComposerControllerHelper65
          href={slot1938}
          initiator="markdown_link_click"
          isBrowserSidebarEnabled={false}
          originHostId={hostId}
          className="inline-flex cursor-interaction rounded-full bg-token-foreground px-4 py-1.5 text-sm leading-[18px] text-token-dropdown-background hover:bg-token-foreground/80"
          onClickCapture={() => {
            appInitialJ9(slot1932, AppInitialQ6, {
              action:
                AppInitialZ6.CHATGPT_TRUSTED_CONTACT_NOTIFICATION_WARNING_ACTION_SEND_PERSONAL_NOTE_CLICKED,
              entryPoint:
                AppInitialX6.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_NOTIFICATION_WARNING,
            });
          }}
        >
          <AppInitialGft
            id="codex.chatgpt.trustedContactDisclaimer.sendPersonalNote"
            defaultMessage="Send a personal note"
            description="Primary action on the notify_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex. Opens the user's email or SMS app to compose a message to the trusted contact."
          />
        </UseChatgptComposerControllerHelper65>
      )
    ) : (
      <div className="flex flex-wrap gap-3">
        {hostId == null ? null : (
          <UseChatgptComposerControllerHelper65
            href={SAFETY_SETTINGS_URL}
            initiator="markdown_link_click"
            isBrowserSidebarEnabled={false}
            openTarget="external-browser"
            originHostId={hostId}
            className="inline-flex cursor-interaction rounded-full bg-token-foreground px-4 py-1.5 text-sm leading-[18px] text-token-dropdown-background hover:bg-token-foreground/80"
            onClickCapture={() => {
              appInitialJ9(
                slot1932,
                AppInitialY6,
                {
                  entryPoint:
                    AppInitialX6.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_IN_CHAT_DISCLAIMER,
                  step: AppInitialJ6.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO,
                },
              );
            }}
          >
            <AppInitialGft
              id="codex.chatgpt.trustedContactDisclaimer.learnMore"
              defaultMessage="Learn more"
              description="Primary action label on the add_trusted_contact_* ChatGPT trusted-contact disclaimer cards in Codex."
            />
          </UseChatgptComposerControllerHelper65>
        )}
        {
          <AppInitialYut
            className="px-4 py-1.5"
            color="secondary"
            loading={slot1935}
            onClick={() => {
              slot1935 ||
                (appInitialJ9(
                  slot1932,
                  AppInitialY6,
                  {
                    entryPoint:
                      AppInitialX6.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_IN_CHAT_DISCLAIMER,
                    step: AppInitialJ6.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_NO_THANKS,
                  },
                ),
                slot1936(true),
                slot1932
                  .get(appInitialCI)
                  .optOutOfTrustedContactPrompts()
                  .then(() => {
                    slot1934(true);
                  })
                  .catch(() => {
                    slot1932
                      .get(appInitialLlt)
                      .danger(
                        slot1931.formatMessage({
                          id: "codex.chatgpt.trustedContactDisclaimer.optOutError",
                          defaultMessage:
                            "Could not update trusted contact settings",
                          description:
                            "Error toast shown when opting out of future trusted-contact prompts from a ChatGPT trusted-contact disclaimer card in Codex fails.",
                        }),
                      );
                  })
                  .finally(() => {
                    slot1936(false);
                  }));
            }}
          >
            <AppInitialGft
              id="codex.chatgpt.trustedContactDisclaimer.noThanks"
              defaultMessage="No thanks"
              description="Secondary action label on the add_trusted_contact_* ChatGPT trusted-contact disclaimer cards in Codex. Immediately opts the user out of future trusted-contact prompts."
            />
          </AppInitialYut>
        }
      </div>
    );
  let slot1943 = (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-token-bg-secondary text-token-text-primary">
      {
        <PeopleIcon
          aria-hidden={true}
          className="icon-lg"
        />
      }
    </span>
  );
  return (
    <DisclaimerCard
      className={slot1939}
      content={slot1940}
      conversationId={conversationId}
      footer={slot1942}
      icon={slot1943}
    />
  );
}

export { useChatgptComposerControllerHelper250 };
