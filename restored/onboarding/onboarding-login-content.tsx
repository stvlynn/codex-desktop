// Restored from ref/webview/assets/onboarding-login-content-DACzfvyL.js
// Desktop onboarding login: ChatGPT sign-in + API key entry.
// Stage 3: app-initial aliases → semantic modules; ESM inits dropped.

import type { ReactNode } from "react";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useIntl } from "../i18n/use-intl";
import { Button } from "../ui/button";
export type OnboardingLoginContentProps = {
  apiKeyValue: string;
  isApiKeyEntryVisible: boolean;
  isApiKeySignInPending: boolean;
  isChatGptSignInPending: boolean;
  onApiKeySecondaryAction: () => void;
  onApiKeySubmit: () => void;
  onApiKeyValueChange: (value: string) => void;
  onChatGptSignIn: () => void;
  onShowApiKeyEntry: () => void;
  apiKeySecondaryActionLabel: ReactNode;
};

/** Bundle export `n` — Rolldown ESM init retained as no-op for graph parity. */
export function initOnboardingLoginContent(): void {}

/**
 * Bundle export `t` — onboarding login controls (ChatGPT / API key).
 */
export function OnboardingLoginContent(props: OnboardingLoginContentProps): ReactNode {
  const {
    apiKeyValue,
    isApiKeyEntryVisible,
    isApiKeySignInPending,
    isChatGptSignInPending,
    onApiKeySecondaryAction,
    onApiKeySubmit,
    onApiKeyValueChange,
    onChatGptSignIn,
    onShowApiKeyEntry,
    apiKeySecondaryActionLabel,
  } = props;
  const intl = useIntl();
  if (isApiKeyEntryVisible) {
    const label = (
      <MemoizedFormattedMessage
        id="electron.onboarding.login.apikey.label"
        defaultMessage="OpenAI API key"
        description="Label for API key input on desktop onboarding"
      />
    );
    const placeholder = intl.formatMessage({
      id: "electron.onboarding.login.apikey.placeholder",
      defaultMessage: "sk-…",
      description: "Placeholder for API key input on desktop onboarding",
    });
    const continueDisabled =
      apiKeyValue.trim().length === 0 || isApiKeySignInPending;
    return (
      <div className="flex w-full flex-col gap-3">
        <label className="text-base font-medium text-token-foreground">
          {label}
          <input
            autoFocus={true}
            className="mt-2 w-full rounded-xl border border-token-border bg-token-input-background px-4 py-2.5 focus:ring-2 focus:ring-black/15 focus:outline-none"
            placeholder={placeholder}
            value={apiKeyValue}
            onChange={(event) => onApiKeyValueChange(event.target.value)}
          />
        </label>
        <div className="flex items-center gap-2">
          <Button
            color="secondary"
            className="flex flex-1 justify-center py-2"
            onClick={onApiKeySecondaryAction}
          >
            {apiKeySecondaryActionLabel}
          </Button>
          <Button
            className="flex flex-1 justify-center py-2"
            onClick={onApiKeySubmit}
            disabled={continueDisabled}
            loading={isApiKeySignInPending}
          >
            <MemoizedFormattedMessage
              id="electron.onboarding.login.apikey.continue"
              defaultMessage="Continue"
              description="Continue button label for API key sign-in on desktop onboarding"
            />
          </Button>
        </div>
      </div>
    );
  }
  const chatGptLabel = isChatGptSignInPending ? (
    <MemoizedFormattedMessage
      id="electron.onboarding.login.chatgpt.cancel"
      defaultMessage="Cancel sign-in"
      description="Cancel button label while ChatGPT sign-in is in progress on desktop onboarding"
    />
  ) : (
    <MemoizedFormattedMessage
      id="electron.onboarding.login.chatgpt.continue"
      defaultMessage="Continue with ChatGPT"
      description="Button label to sign in with ChatGPT on desktop onboarding"
    />
  );
  return (
    <div className="flex w-full max-w-[200px] flex-col gap-3">
      <Button
        color="primary"
        className="w-full justify-center py-2.5"
        onClick={onChatGptSignIn}
      >
        {chatGptLabel}
      </Button>
      {isChatGptSignInPending ? null : (
        <Button
          color="outline"
          className="w-full justify-center py-2.5"
          onClick={onShowApiKeyEntry}
        >
          <MemoizedFormattedMessage
            id="electron.onboarding.login.apikey.open"
            defaultMessage="Enter API key"
            description="Button label to open API key entry on desktop onboarding"
          />
        </Button>
      )}
    </div>
  );
}
