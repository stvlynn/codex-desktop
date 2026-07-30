// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Agent migration source picker (Helpers 27–28). AppInitialGn / Tn peers gated.

import { useEffect, useRef, useState, type ReactElement } from "react";

import { codexAppGaLogoUrl } from "../../assets/codex-app-ga-logo-url";
import { formatExternalAgentImportProviderLabel } from "../format-external-agent-import-provider-label";
import { Button } from "../../ui/button";
import { cx } from "../../ui/cx";
import { CompleteOnboardingStep } from "./complete-onboarding-step";
import { ONBOARDING_STEPS } from "./constants";
import { toggleListItem } from "./toggle-list-item";

/** Known import providers when detection peers are unresolved. */
export const AGENT_MIGRATION_PROVIDER_IDS = [
  "claude-code",
  "claude-cowork",
  "cursor",
] as const;

export type AgentMigrationProviderId =
  (typeof AGENT_MIGRATION_PROVIDER_IDS)[number];

function labelForProvider(providerId: string): string {
  return (
    formatExternalAgentImportProviderLabel(
      {
        formatMessage: (descriptor) => descriptor.defaultMessage,
      },
      providerId,
    ) ?? providerId
  );
}

export type AgentMigrationSourcePanelProps = {
  providerIds: readonly string[];
  selectedProviderIds: readonly string[];
  isAdvancePending?: boolean;
  onToggleProvider: (providerId: string) => void;
  onContinue: (providerIds: readonly string[]) => void;
  onSkip: () => void;
};

/** Bundle Helper28 body — provider checklist without AppInitialGn / Tn peers. */
export function AgentMigrationSourcePanel({
  providerIds,
  selectedProviderIds,
  isAdvancePending = false,
  onToggleProvider,
  onContinue,
  onSkip,
}: AgentMigrationSourcePanelProps): ReactElement {
  const canAct = !isAdvancePending;
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary text-token-foreground">
      <div className="flex w-full max-w-3xl flex-col items-center justify-start px-6 py-12">
        <div className="flex w-full max-w-lg flex-col items-center overflow-hidden rounded-2xl p-10">
          <img
            src={codexAppGaLogoUrl}
            className="size-12 shrink-0"
            draggable={false}
            alt=""
            aria-hidden="true"
          />
          <h1 className="mt-4 text-center text-[28px] leading-[34px] font-normal text-token-foreground">
            Import work from other AI apps
          </h1>
          <p className="mt-2 text-center text-[16px] leading-6 text-token-description-foreground">
            Bring over your setup, projects, and recent chats
          </p>
          <div className="mt-8 flex w-full max-w-xs flex-col">
            <div className="mb-2 text-xs leading-4 font-medium text-token-description-foreground">
              Apps found
            </div>
            <div
              role="list"
              aria-label="Apps found"
              className="overflow-hidden rounded-2xl border border-token-border bg-token-main-surface-primary"
            >
              {providerIds.map((providerId) => {
                const selected = selectedProviderIds.includes(providerId);
                return (
                  <button
                    key={providerId}
                    type="button"
                    role="listitem"
                    className={cx(
                      "flex w-full items-center gap-3 border-b border-token-border px-4 py-3 text-left last:border-b-0",
                      selected
                        ? "bg-token-foreground/[0.06]"
                        : "hover:bg-token-foreground/[0.03]",
                    )}
                    aria-pressed={selected}
                    disabled={!canAct}
                    onClick={() => onToggleProvider(providerId)}
                  >
                    <span
                      className={cx(
                        "flex size-4 shrink-0 items-center justify-center rounded-full border",
                        selected
                          ? "border-token-foreground bg-token-foreground"
                          : "border-token-border",
                      )}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-token-foreground">
                      {labelForProvider(providerId)}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-center text-xs leading-4 text-token-text-secondary">
              Your existing app setup won’t be affected
            </p>
          </div>
          <div className="mt-8 flex w-full max-w-xs flex-col items-center gap-2">
            <Button
              className="w-full justify-center"
              size="large"
              disabled={!canAct}
              onClick={() => {
                if (selectedProviderIds.length === 0) onSkip();
                else onContinue(selectedProviderIds);
              }}
            >
              Continue
            </Button>
            <Button
              className="w-full justify-center"
              color="ghost"
              size="large"
              disabled={!canAct}
              onClick={onSkip}
            >
              Skip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Bundle Helper27 — source selection step.
 * Detection peers unresolved → show known provider catalog; empty continue skips.
 */
export function AgentMigrationSourceStep({
  isAdvancePending = false,
  onContinue,
}: {
  isAdvancePending?: boolean;
  onContinue: (result?: unknown) => void;
}): ReactElement {
  const providerIds = [...AGENT_MIGRATION_PROVIDER_IDS];
  const [selected, setSelected] = useState<string[]>(providerIds);
  const shownRef = useRef(false);

  useEffect(() => {
    if (shownRef.current) return;
    shownRef.current = true;
  }, []);

  return (
    <CompleteOnboardingStep
      name="agent_migration_source_selection"
      onComplete={({ result }) => onContinue(result)}
    >
      {({ completeStep }) => (
        <AgentMigrationSourcePanel
          providerIds={providerIds}
          selectedProviderIds={selected}
          isAdvancePending={isAdvancePending}
          onToggleProvider={(providerId) =>
            setSelected((prev) => toggleListItem(prev, providerId))
          }
          onContinue={(ids) =>
            completeStep({
              result: {
                step: ONBOARDING_STEPS.AgentMigrationSourceSelection,
                providerIds: [...ids],
              },
            })
          }
          onSkip={() =>
            completeStep({
              result: {
                step: ONBOARDING_STEPS.AgentMigrationSourceSelection,
                providerIds: [],
                skipped: true,
              },
              skipped: true,
            })
          }
        />
      )}
    </CompleteOnboardingStep>
  );
}
