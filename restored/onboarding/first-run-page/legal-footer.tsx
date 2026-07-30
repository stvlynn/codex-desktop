// Restored from ref/webview/assets/first-run-CmpS1-m3.js
// Legal disclaimer list items for the final first-run step.

import type { ComponentType, ReactElement, ReactNode, SVGProps } from "react";

import { AppIconF0 } from "../../icons/app-icon-f0";
import { AppIconKG } from "../../icons/app-icon-kg";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type LegalListItemProps = {
  Icon: IconComponent;
  title: ReactNode;
  children: ReactNode;
};

/** One legal / autonomy row with leading icon. */
export function LegalListItem({
  Icon,
  title,
  children,
}: LegalListItemProps): ReactElement {
  return (
    <li className="flex items-start gap-3">
      <Icon className="icon-base mt-0.5 shrink-0 opacity-80" />
      <div className="text-sm">
        <span className="block text-sm font-medium">{title}</span>
        <span className="block text-base text-token-description-foreground">
          {children}
        </span>
      </div>
    </li>
  );
}

export type PoweredByAccountItemProps = {
  isUsingCopilotAuth: boolean;
};

/** Copilot vs ChatGPT “powered by” legal row. */
export function PoweredByAccountItem({
  isUsingCopilotAuth,
}: PoweredByAccountItemProps): ReactElement {
  const preventDefault = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
  };

  if (isUsingCopilotAuth) {
    const oaiTos = (
      <a
        href="https://openai.com/policies/row-terms-of-use/"
        className="!text-token-description-foreground underline hover:no-underline"
        onClick={preventDefault}
      >
        <MemoizedFormattedMessage
          id="codex.legal.copilot.oaiTosLink"
          defaultMessage="OpenAI Codex terms of service"
          description="Link to OpenAI Codex terms of service from Copilot NUX"
        />
      </a>
    );
    const gitHubTos = (
      <a
        href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"
        className="!text-token-description-foreground underline hover:no-underline"
        onClick={preventDefault}
      >
        <MemoizedFormattedMessage
          id="codex.legal.copilot.gitHubTosLink"
          defaultMessage="GitHub Terms of Service"
          description="Link to GitHub Terms of Service from Copilot NUX"
        />
      </a>
    );
    return (
      <LegalListItem
        Icon={AppIconKG}
        title={
          <MemoizedFormattedMessage
            id="codex.legal.copilot.title"
            defaultMessage="Powered by GitHub Copilot"
            description="Statement that Codex uses user's Copilot account"
          />
        }
      >
        <MemoizedFormattedMessage
          id="codex.legal.copilot.details"
          defaultMessage="Uses your Copilot plan for all model calls, billing, and rate limits. Codex extension usage is subject to both {oaiTos} and {gitHubTos}."
          description="Details about using Copilot subscription and training data preferences"
          values={{ oaiTos, gitHubTos }}
        />
      </LegalListItem>
    );
  }

  return (
    <LegalListItem
      Icon={AppIconF0}
      title={
        <MemoizedFormattedMessage
          id="codex.legal.powered.title"
          defaultMessage="Powered by your ChatGPT account"
          description="Statement that Codex uses user's ChatGPT account"
        />
      }
    >
      <MemoizedFormattedMessage
        id="codex.legal.powered.details"
        defaultMessage="Uses your plan’s rate limits and {link}"
        description="Details about using plan rate limits and training data preferences"
        values={{
          link: (
            <a
              href="https://chatgpt.com/#settings/DataControls"
              className="!text-token-description-foreground underline hover:no-underline"
              onClick={preventDefault}
            >
              <MemoizedFormattedMessage
                id="codex.legal.powered.details.link"
                defaultMessage="training data preferences"
                description="Link text to training data preferences settings"
              />
            </a>
          ),
        }}
      />
    </LegalListItem>
  );
}
