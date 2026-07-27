// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave DY — real body via extractFn(internal `csu`) / export `Tn`.
// Provider row / brand header peers bind via setOnboardingProviderContinuePanelParts.

import type { FormEvent, ReactElement, ReactNode } from "react";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { Button } from "../ui/button";
import { DialogBody } from "../ui/dialog-body";
import { DialogFooter } from "../ui/dialog-footer";
import { DialogHeader } from "../ui/dialog-header";
import { DialogSection } from "../ui/dialog-section";
import { cx } from "../ui/cx";

export type OnboardingProviderContinuePanelProps = {
  appBrand?: ReactNode;
  providerIds: string[];
  variant?: "onboarding" | "dialog" | string;
  onContinue: (providerIds: string[]) => void;
  onSkip: () => void;
};

export type OnboardingProviderContinuePanelParts = {
  isStandardChatsUnsupported?: (providerId: string) => boolean;
  ProviderRow: (props: {
    providerId: string;
    selected: boolean;
    onToggle: () => void;
  }) => ReactNode;
  BrandHeader?: (props: {
    appBrand?: ReactNode;
    title: ReactNode;
    subtitle: ReactNode;
  }) => ReactNode;
  knownProviderIds: string[];
};

let parts: OnboardingProviderContinuePanelParts | null = null;

/** Wire provider rows / brand header once companions land. */
export function setOnboardingProviderContinuePanelParts(
  next: OnboardingProviderContinuePanelParts,
): void {
  parts = next;
}

/**
 * Bundle export `Tn` / internal `csu`.
 * External-agent provider selection continue/skip panel.
 */
export function OnboardingProviderContinuePanel(
  props: OnboardingProviderContinuePanelProps,
): ReactElement {
  const {
    appBrand,
    providerIds,
    variant = "onboarding",
    onContinue,
    onSkip,
  } = props;
  const intl = useIntl();
  const [selected, setSelected] = useState(providerIds);
  const isDialog = variant === "dialog";
  const unsupported = providerIds.some(
    (id) => parts?.isStandardChatsUnsupported?.(id) ?? false,
  );

  const title = isDialog ? (
    <FormattedMessage
      id="electron.onboarding.welcomeV2.externalAgentImport.providers.dialogTitle"
      defaultMessage="Import from other AI apps"
      description="Title for the external agent provider selection dialog"
    />
  ) : (
    <FormattedMessage
      id="electron.onboarding.welcomeV2.externalAgentImport.providers.title"
      defaultMessage="Import work from other AI apps"
      description="Title for the external agent provider selection step"
    />
  );

  const subtitle = (
    <FormattedMessage
      id="electron.onboarding.welcomeV2.externalAgentImport.providers.subtitle"
      defaultMessage="Bring over your setup, projects, and recent chats"
      description="Subtitle for the external agent provider selection step"
    />
  );

  const handleContinue = (): void => {
    if (selected.length === 0) {
      onSkip();
      return;
    }
    onContinue(selected);
  };

  const toggle = (providerId: string): void => {
    setSelected((current) =>
      current.includes(providerId)
        ? current.filter((id) => id !== providerId)
        : [...current, providerId],
    );
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    handleContinue();
  };

  const knownIds = parts?.knownProviderIds ?? providerIds;
  const rows = knownIds
    .filter((id) => providerIds.includes(id))
    .map((providerId) =>
      parts?.ProviderRow != null ? (
        <parts.ProviderRow
          key={providerId}
          providerId={providerId}
          selected={selected.includes(providerId)}
          onToggle={() => toggle(providerId)}
        />
      ) : (
        <label
          key={providerId}
          className="flex cursor-pointer items-center gap-3 px-4 py-3 text-sm"
        >
          <input
            type="checkbox"
            checked={selected.includes(providerId)}
            onChange={() => toggle(providerId)}
          />
          <span>{providerId}</span>
        </label>
      ),
    );

  const header = isDialog ? (
    <DialogSection>
      <DialogHeader
        title={<span className="contents">{title}</span>}
        subtitle={<span className="sr-only">{subtitle}</span>}
      />
    </DialogSection>
  ) : parts?.BrandHeader != null ? (
    <parts.BrandHeader appBrand={appBrand} title={title} subtitle={subtitle} />
  ) : (
    <div className="mb-6 flex flex-col items-center gap-2 text-center">
      {appBrand}
      <h1 className="heading-dialog font-semibold">{title}</h1>
      <p className="text-sm text-token-description-foreground">{subtitle}</p>
    </div>
  );

  const listBlock = (
    <div
      className={
        isDialog
          ? "mt-4 flex w-full flex-col"
          : "mt-8 flex w-full max-w-xs flex-col"
      }
    >
      <div className="mb-2 text-xs leading-4 font-medium text-token-description-foreground">
        <FormattedMessage
          id="electron.onboarding.welcomeV2.externalAgentImport.providers.appsFound"
          defaultMessage="Apps found"
          description="Label above the external agent apps found list"
        />
      </div>
      <div
        role="list"
        aria-label={intl.formatMessage({
          id: "electron.onboarding.welcomeV2.externalAgentImport.providers.list",
          defaultMessage: "Apps found",
          description: "Accessible label for the external agent provider list",
        })}
        className="overflow-hidden rounded-2xl border border-token-border bg-token-main-surface-primary"
      >
        {rows}
      </div>
      <div className="mt-2 text-center text-xs leading-4 text-token-text-secondary">
        {unsupported ? (
          <FormattedMessage
            id="electron.onboarding.welcomeV2.externalAgentImport.providers.standardChatsUnsupported"
            defaultMessage="Your existing Claude setup won’t be affected. Standard Claude Chat data cannot be imported."
            description="Note below the external agent provider selection list"
          />
        ) : (
          <FormattedMessage
            id="electron.onboarding.welcomeV2.externalAgentImport.providers.setupPreserved"
            defaultMessage="Your existing app setup won’t be affected"
            description="Note below the external agent provider selection list explaining that source apps are unchanged"
          />
        )}
      </div>
    </div>
  );

  const actions = isDialog ? (
    <div className="mt-4">
      <DialogFooter>
        <Button color="ghost" onClick={onSkip} type="button">
          <FormattedMessage
            id="common.cancel"
            defaultMessage="Cancel"
            description="Cancel button label"
          />
        </Button>
        <Button type="submit" color="primary">
          <FormattedMessage
            id="electron.onboarding.welcomeV2.continue"
            defaultMessage="Continue"
            description="Welcome v2 continue button label"
          />
        </Button>
      </DialogFooter>
    </div>
  ) : (
    <div className="mt-8 flex w-full max-w-xs flex-col items-center gap-2">
      <Button
        className="w-full justify-center"
        size="large"
        onClick={handleContinue}
        type="button"
      >
        <FormattedMessage
          id="electron.onboarding.welcomeV2.continue"
          defaultMessage="Continue"
          description="Welcome v2 continue button label"
        />
      </Button>
      <Button
        className="w-full justify-center"
        color="ghost"
        size="large"
        onClick={onSkip}
        type="button"
      >
        <FormattedMessage
          id="electron.onboarding.welcomeV2.skip"
          defaultMessage="Skip"
          description="Welcome v2 skip button label"
        />
      </Button>
    </div>
  );

  const content = (
    <>
      {header}
      {listBlock}
      {actions}
    </>
  );

  if (isDialog) {
    return (
      <DialogBody as="form" className="gap-0" onSubmit={handleSubmit}>
        {content}
      </DialogBody>
    );
  }

  return (
    <div
      className={cx(
        "flex w-full max-w-lg flex-col items-center overflow-hidden rounded-2xl p-10",
      )}
    >
      {content}
    </div>
  );
}
