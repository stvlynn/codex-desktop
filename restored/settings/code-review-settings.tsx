// Restored from ref/webview/assets/code-review-settings-Ci3aKMa3.js
// Code review settings section. Stage 3: Ci→useUsageSettingsAccess; Si dropped.

import type { ReactNode } from "react";
import {
  ensureUsageSettingsAccessInit,
  useUsageSettingsAccess,
} from "../account/use-usage-settings-access";
import { appScopeAtom, useAppScope } from "../boundaries/app-scope-runtime";
import { toastAtom } from "../boundaries/toast-atom";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useIntl } from "../i18n/use-intl";
import { Button } from "../ui/button";
import { DropdownMenu } from "../ui/dropdown-menu.tsx";
import { DropdownMenuPopover } from "../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../ui/dropdown-trigger-button";
import { Switch } from "../ui/switch";
import {
  useCloudUserPreferences,
  useUpdateCloudUserPreferences,
} from "./cloud-preferences";
import { SettingsGroup } from "./settings-group";
import { SettingsPanel } from "./settings-panel";
import { SettingsPanelLoading } from "./settings-panel-loading";
import { SettingsRow } from "./settings-row";
import { SettingsSectionLayout } from "./settings-section-layout";
import { SettingsSectionTitle } from "./settings-section-title";
ensureUsageSettingsAccessInit();
const TRIGGER_POLICIES = ["pr_open", "every_push", "smart_detect"] as const;
type TriggerPolicy = (typeof TRIGGER_POLICIES)[number];
type ToastScope = {
  get: (atom: unknown) => {
    danger: (message: string) => void;
  };
};
type CodeReviewPreferences = {
  code_review_preference?: string;
  code_review_trigger_policy?: string;
  exhaustive_code_review?: boolean;
  code_review_credit_preference?: string;
  [key: string]: unknown;
};
function triggerLabel(policy: string): ReactNode {
  switch (policy) {
    case "pr_open":
      return (
        <MemoizedFormattedMessage
          id="settings.codeReview.personal.trigger.prOpen"
          defaultMessage="When a PR opens"
          description="Code review trigger option for pull request open"
        />
      );
    case "every_push":
      return (
        <MemoizedFormattedMessage
          id="settings.codeReview.personal.trigger.everyPush"
          defaultMessage="On every push"
          description="Code review trigger option for every push"
        />
      );
    case "smart_detect":
      return (
        <MemoizedFormattedMessage
          id="settings.codeReview.personal.trigger.smart"
          defaultMessage="Smart trigger"
          description="Experimental smart code review trigger option"
        />
      );
    default:
      return policy;
  }
}

/**
 * Code review settings page (export `CodeReviewSettings` / `L`).
 */
export function CodeReviewSettings(): ReactNode {
  const intl = useIntl();
  const scope = useAppScope(appScopeAtom) as ToastScope;
  const preferencesQuery = useCloudUserPreferences();
  const updateMutation = useUpdateCloudUserPreferences();
  const { canManageCreditSettings } = useUsageSettingsAccess();
  return (
    <SettingsSectionLayout
      title={<SettingsSectionTitle slug="code-review" />}
      subtitle={
        <MemoizedFormattedMessage
          id="settings.codeReview.subtitle"
          defaultMessage="Set up ChatGPT to automatically review pull requests"
          description="Subtitle for automatic code review settings"
        />
      }
    >
      {preferencesQuery.data == null ? (
        preferencesQuery.isError ? (
          <SettingsGroup>
            <SettingsGroup.Content>
              <SettingsPanel>
                <SettingsRow
                  label={
                    <MemoizedFormattedMessage
                      id="settings.codeReview.error"
                      defaultMessage="Unable to load code review settings"
                      description="Error state for code review settings"
                    />
                  }
                  control={
                    <Button
                      color="secondary"
                      size="toolbar"
                      onClick={() => {
                        return preferencesQuery.refetch();
                      }}
                    >
                      <MemoizedFormattedMessage
                        id="settings.codeReview.retry"
                        defaultMessage="Retry"
                        description="Button to retry loading code review settings"
                      />
                    </Button>
                  }
                />
              </SettingsPanel>
            </SettingsGroup.Content>
          </SettingsGroup>
        ) : (
          <SettingsPanelLoading>
            <MemoizedFormattedMessage
              id="settings.codeReview.loading"
              defaultMessage="Loading code review settings…"
              description="Loading state for code review settings"
            />
          </SettingsPanelLoading>
        )
      ) : (
        <CodeReviewPreferencesForm
          disabled={updateMutation.isPending}
          showCreditPreference={canManageCreditSettings}
          preferences={preferencesQuery.data as CodeReviewPreferences}
          onUpdate={(patch) => {
            updateMutation.mutate(patch, {
              onError: () => {
                scope.get(toastAtom()).danger(
                  intl.formatMessage({
                    id: "settings.codeReview.save.error",
                    defaultMessage: "Unable to save code review settings",
                    description:
                      "Toast shown when saving code review settings fails",
                  }),
                );
              },
            });
          }}
        />
      )}
    </SettingsSectionLayout>
  );
}
function CodeReviewPreferencesForm(props: {
  disabled: boolean;
  preferences: CodeReviewPreferences;
  showCreditPreference: boolean;
  onUpdate: (patch: Record<string, unknown>) => void;
}): ReactNode {
  const { disabled, preferences, showCreditPreference, onUpdate } = props;
  const intl = useIntl();
  const trigger =
    (preferences.code_review_trigger_policy as TriggerPolicy | undefined) ??
    TRIGGER_POLICIES[0];
  return (
    <SettingsGroup>
      <SettingsGroup.Header
        title={
          <MemoizedFormattedMessage
            id="settings.codeReview.personal.title"
            defaultMessage="Personal preferences"
            description="Title for personal code review preferences"
          />
        }
      />
      <SettingsGroup.Content>
        <SettingsPanel>
          <SettingsRow
            label={
              <MemoizedFormattedMessage
                id="settings.codeReview.personal.autoReview.label"
                defaultMessage="Automatic review"
                description="Label for automatic code review preference"
              />
            }
            description={
              <MemoizedFormattedMessage
                id="settings.codeReview.personal.autoReview.description"
                defaultMessage="Automatically review pull requests in repositories with code review enabled"
                description="Description for automatic code review preference"
              />
            }
            control={
              <Switch
                ariaLabel={intl.formatMessage({
                  id: "settings.codeReview.personal.autoReview.aria",
                  defaultMessage: "Enable automatic code review",
                  description: "Accessible label for automatic code review",
                })}
                checked={preferences.code_review_preference === "always"}
                disabled={disabled}
                onChange={(checked) => {
                  onUpdate({
                    code_review_preference: checked ? "always" : "repo_default",
                  });
                }}
              />
            }
          />
          <SettingsRow
            label={
              <MemoizedFormattedMessage
                id="settings.codeReview.personal.trigger.label"
                defaultMessage="Review trigger"
                description="Label for review trigger preference"
              />
            }
            description={
              <MemoizedFormattedMessage
                id="settings.codeReview.personal.trigger.description"
                defaultMessage="Choose when ChatGPT should review your pull requests"
                description="Description for review trigger preference"
              />
            }
            control={
              <DropdownMenuPopover
                triggerButton={
                  <DropdownTriggerButton disabled={disabled}>
                    {triggerLabel(trigger)}
                  </DropdownTriggerButton>
                }
              >
                {TRIGGER_POLICIES.map((policy) => {
                  return (
                    <DropdownMenu.Item
                      key={policy}
                      onSelect={() => {
                        onUpdate({
                          code_review_trigger_policy: policy,
                        });
                      }}
                    >
                      {triggerLabel(policy)}
                    </DropdownMenu.Item>
                  );
                })}
              </DropdownMenuPopover>
            }
          />
          <SettingsRow
            label={
              <MemoizedFormattedMessage
                id="settings.codeReview.personal.exhaustive.label"
                defaultMessage="Exhaustive code review"
                description="Label for exhaustive code review preference"
              />
            }
            description={
              <MemoizedFormattedMessage
                id="settings.codeReview.personal.exhaustive.description"
                defaultMessage="Keep looking for findings until ChatGPT stops finding new issues"
                description="Description for exhaustive code review preference"
              />
            }
            control={
              <Switch
                ariaLabel={intl.formatMessage({
                  id: "settings.codeReview.personal.exhaustive.aria",
                  defaultMessage: "Enable exhaustive code review",
                  description: "Accessible label for exhaustive code review",
                })}
                checked={Boolean(preferences.exhaustive_code_review)}
                disabled={disabled}
                onChange={(checked) => {
                  onUpdate({
                    exhaustive_code_review: checked,
                  });
                }}
              />
            }
          />
          {showCreditPreference ? (
            <SettingsRow
              label={
                <MemoizedFormattedMessage
                  id="settings.codeReview.personal.credits.label"
                  defaultMessage="Use credits for code review"
                  description="Label for code review credit preference"
                />
              }
              description={
                <MemoizedFormattedMessage
                  id="settings.codeReview.personal.credits.description"
                  defaultMessage="Allow code review to spend credits when rate limits are reached"
                  description="Description for code review credit preference"
                />
              }
              control={
                <Switch
                  ariaLabel={intl.formatMessage({
                    id: "settings.codeReview.personal.credits.aria",
                    defaultMessage: "Use credits for code review",
                    description:
                      "Accessible label for code review credit preference",
                  })}
                  checked={
                    preferences.code_review_credit_preference === "allow"
                  }
                  disabled={disabled}
                  onChange={(checked) => {
                    onUpdate({
                      code_review_credit_preference: checked ? "allow" : "deny",
                    });
                  }}
                />
              }
            />
          ) : null}
        </SettingsPanel>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
