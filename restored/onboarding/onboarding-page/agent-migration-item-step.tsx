// Restored from ref/webview/assets/onboarding-page-DQOZ3Jy7.js
// Agent migration item picker (Helper25). FirstTimeContinuePanel / Gn peers gated.

import { type ReactElement } from "react";

import { formatExternalAgentImportProviderLabel } from "../format-external-agent-import-provider-label";
import { Button } from "../../ui/button";
import { CompleteOnboardingStep } from "./complete-onboarding-step";
import { ONBOARDING_STEPS } from "./constants";
import { WhamTaskClusterBridge } from "./runtime-bridges";

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

export type AgentMigrationItemPanelProps = {
  providerIds: readonly string[];
  isAdvancePending?: boolean;
  hasError?: boolean;
  isImporting?: boolean;
  onImport: () => void;
  onSkip: () => void;
};

/** Bundle Helper25 body — import summary without AppInitialSn customize peers. */
export function AgentMigrationItemPanel({
  providerIds,
  isAdvancePending = false,
  hasError = false,
  isImporting = false,
  onImport,
  onSkip,
}: AgentMigrationItemPanelProps): ReactElement {
  const busy = isAdvancePending || isImporting;
  const names = providerIds.map(labelForProvider).join(", ");
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary text-token-foreground">
      <div className="flex w-full max-w-3xl flex-col items-center justify-start px-6 py-12">
        <div className="flex w-full max-w-lg flex-col items-center gap-4 overflow-hidden rounded-2xl p-10 text-center">
          <h1 className="text-[28px] leading-[34px] font-normal text-token-foreground">
            Choose what to import
          </h1>
          <p className="text-[16px] leading-6 text-token-description-foreground">
            {providerIds.length > 0
              ? `Import settings, projects, and recent chats from ${names}.`
              : "No apps selected — you can skip and continue setup."}
          </p>
          <ul className="mt-2 w-full max-w-xs overflow-hidden rounded-2xl border border-token-border text-left text-sm">
            <li className="border-b border-token-border px-4 py-3">
              Tools and setup
            </li>
            <li className="border-b border-token-border px-4 py-3">Projects</li>
            <li className="px-4 py-3">Recent chats</li>
          </ul>
          {hasError ? (
            <p className="text-sm text-token-charts-red">
              Import didn’t finish. Try again or skip.
            </p>
          ) : null}
          <div className="mt-4 flex w-full max-w-xs flex-col items-center gap-2">
            <Button
              className="w-full justify-center"
              size="large"
              disabled={busy || providerIds.length === 0}
              loading={isImporting}
              onClick={onImport}
            >
              Import
            </Button>
            <Button
              className="w-full justify-center"
              color="ghost"
              size="large"
              disabled={busy}
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

/** Bundle Helper25 — item selection step wrapped in wham/task cluster bridge. */
export function AgentMigrationItemStep({
  isAdvancePending = false,
  providerIds = [],
  onContinue,
}: {
  isAdvancePending?: boolean;
  providerIds?: readonly string[];
  onContinue: (result?: unknown) => void;
}): ReactElement {
  return (
    <WhamTaskClusterBridge>
      <CompleteOnboardingStep
        name="agent_migration_item_selection"
        onComplete={({ result }) => onContinue(result)}
      >
        {({ completeStep }) => (
          <AgentMigrationItemPanel
            providerIds={providerIds}
            isAdvancePending={isAdvancePending}
            onImport={() =>
              completeStep({
                result: {
                  step: ONBOARDING_STEPS.AgentMigrationItemSelection,
                  action: "imported",
                },
              })
            }
            onSkip={() =>
              completeStep({
                result: {
                  step: ONBOARDING_STEPS.AgentMigrationItemSelection,
                  action: "skipped",
                },
                skipped: true,
              })
            }
          />
        )}
      </CompleteOnboardingStep>
    </WhamTaskClusterBridge>
  );
}
