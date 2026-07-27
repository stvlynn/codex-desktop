// Restored from ref/webview/assets/cloud-preferences-settings-BdfWKEwp.js
// Cloud preferences settings section (diff view + branch format).
// Stage 3: settings/i18n/UI aliases mapped; ESM inits dropped; Llt→toastAtom.

import { useState, type ReactNode } from "react";
import { appScopeAtom, useAppScope } from "../boundaries/app-scope-runtime";
import { toastAtom } from "../boundaries/toast-atom";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useIntl } from "../i18n/use-intl";
import { Button } from "../ui/button";
import { SegmentedControl } from "../ui/segmented-control";
import {
  previewCloudFilenamePattern,
  useCloudPreferencesConfig,
  useCloudUserPreferences,
  useUpdateCloudUserPreferences,
  validateCloudFilenamePattern,
  type FilenamePatternError,
  type FilenamePatternToken,
} from "./cloud-preferences";
import { SettingsGroup } from "./settings-group";
import { SettingsPanel } from "./settings-panel";
import { SettingsPanelLoading } from "./settings-panel-loading";
import { SettingsRow } from "./settings-row";
import { SettingsSectionLayout } from "./settings-section-layout";
import { SettingsSectionTitle } from "./settings-section-title";
type ToastScope = {
  get: (atom: unknown) => {
    success: (message: string) => void;
    danger: (message: string) => void;
  };
};
function branchFormatErrorMessage(
  error: FilenamePatternError,
): ReactNode | null {
  switch (error) {
    case "bracket-mismatch":
      return (
        <MemoizedFormattedMessage
          id="settings.general.cloudPreferences.branchFormat.error.bracketMismatch"
          defaultMessage="Branch format has unmatched brackets"
          description="Validation error for mismatched branch format brackets"
        />
      );
    case "invalid-characters":
      return (
        <MemoizedFormattedMessage
          id="settings.general.cloudPreferences.branchFormat.error.invalidCharacters"
          defaultMessage="Branch format contains invalid characters"
          description="Validation error for invalid branch format characters"
        />
      );
    case "invalid-pattern":
      return (
        <MemoizedFormattedMessage
          id="settings.general.cloudPreferences.branchFormat.error.invalidPattern"
          defaultMessage="Branch format has an invalid placeholder"
          description="Validation error for invalid branch format placeholder"
        />
      );
    case "leading-slash":
      return (
        <MemoizedFormattedMessage
          id="settings.general.cloudPreferences.branchFormat.error.leadingSlash"
          defaultMessage="Branch format cannot start with a slash"
          description="Validation error for leading slash in branch format"
        />
      );
    case "missing-pattern":
      return (
        <MemoizedFormattedMessage
          id="settings.general.cloudPreferences.branchFormat.error.missingPattern"
          defaultMessage="Branch format must include a placeholder"
          description="Validation error for missing branch format placeholder"
        />
      );
    case "too-long":
      return (
        <MemoizedFormattedMessage
          id="settings.general.cloudPreferences.branchFormat.error.tooLong"
          defaultMessage="Branch format is too long"
          description="Validation error for oversized branch format"
        />
      );
    default:
      return null;
  }
}

/**
 * Cloud preferences settings page (export `CloudPreferencesSettings` / `P`).
 */
export function CloudPreferencesSettings(): ReactNode {
  return (
    <SettingsSectionLayout
      title={<SettingsSectionTitle slug="cloud-settings" />}
    >
      <CloudPreferencesSettingsBody />
    </SettingsSectionLayout>
  );
}
function CloudPreferencesSettingsBody(): ReactNode {
  const intl = useIntl();
  const scope = useAppScope(appScopeAtom) as ToastScope;
  const preferencesQuery = useCloudUserPreferences();
  const configQuery = useCloudPreferencesConfig();
  const updateMutation = useUpdateCloudUserPreferences();
  const [draft, setDraft] = useState<{
    baseline: string;
    value: string;
  } | null>(null);
  if (preferencesQuery.isError || configQuery.isError) {
    return (
      <SettingsGroup>
        <SettingsGroup.Content>
          <SettingsPanel>
            <SettingsRow
              label={
                <MemoizedFormattedMessage
                  id="settings.general.cloudPreferences.loadError"
                  defaultMessage="Unable to load cloud preferences"
                  description="Error message shown when cloud preferences fail to load"
                />
              }
              control={
                <Button
                  color="secondary"
                  size="toolbar"
                  onClick={() => {
                    preferencesQuery.refetch();
                    configQuery.refetch();
                  }}
                >
                  <MemoizedFormattedMessage
                    id="settings.general.cloudPreferences.retry"
                    defaultMessage="Retry"
                    description="Button label to retry loading cloud preferences"
                  />
                </Button>
              }
            />
          </SettingsPanel>
        </SettingsGroup.Content>
      </SettingsGroup>
    );
  }
  if (preferencesQuery.data == null || configQuery.data == null) {
    return (
      <SettingsPanelLoading>
        <MemoizedFormattedMessage
          id="settings.general.cloudPreferences.loading"
          defaultMessage="Loading cloud preferences…"
          description="Loading label for cloud preferences"
        />
      </SettingsPanelLoading>
    );
  }
  const preferences = preferencesQuery.data as {
    branch_format: string;
    git_diff_mode: string;
  };
  const config = configQuery.data as {
    branch_format_max_length: number;
    branch_format_special_values: FilenamePatternToken[];
  };
  const branchFormat =
    draft?.baseline === preferences.branch_format
      ? draft.value
      : preferences.branch_format;
  const branchError = validateCloudFilenamePattern(
    branchFormat,
    config.branch_format_max_length,
    config.branch_format_special_values,
  );
  const savePreference = (
    patch: Record<string, unknown>,
    successMessage: string,
  ): void => {
    updateMutation.mutate(patch, {
      onSuccess: () => {
        scope.get(toastAtom()).success(successMessage);
      },
      onError: () => {
        scope.get(toastAtom()).danger(
          intl.formatMessage({
            id: "settings.general.cloudPreferences.save.error",
            defaultMessage: "Unable to save cloud preference",
            description: "Toast shown when saving a cloud preference fails",
          }),
        );
      },
    });
  };
  const diffOptions = [
    {
      id: "unified",
      label: (
        <MemoizedFormattedMessage
          id="settings.general.cloudPreferences.diffView.unified"
          defaultMessage="Unified"
          description="Unified diff display preference option"
        />
      ),
      disabled: updateMutation.isPending,
    },
    {
      id: "split",
      label: (
        <MemoizedFormattedMessage
          id="settings.general.cloudPreferences.diffView.split"
          defaultMessage="Split"
          description="Split diff display preference option"
        />
      ),
      disabled: updateMutation.isPending,
    },
  ];
  return (
    <SettingsGroup>
      <SettingsGroup.Content>
        <SettingsPanel>
          <SettingsRow
            label={
              <MemoizedFormattedMessage
                id="settings.general.cloudPreferences.diffView.label"
                defaultMessage="Diff view"
                description="Label for cloud diff display preference"
              />
            }
            description={
              <MemoizedFormattedMessage
                id="settings.general.cloudPreferences.diffView.description"
                defaultMessage="Choose how changes are shown in cloud chats"
                description="Description for cloud diff display preference"
              />
            }
            control={
              <SegmentedControl
                ariaLabel={intl.formatMessage({
                  id: "settings.general.cloudPreferences.diffView.ariaLabel",
                  defaultMessage: "Diff view",
                  description: "Aria label for cloud diff display selector",
                })}
                options={diffOptions}
                selectedId={preferences.git_diff_mode}
                onSelect={(id) => {
                  savePreference(
                    {
                      git_diff_mode: id,
                    },
                    intl.formatMessage({
                      id: "settings.general.cloudPreferences.diffView.save.success",
                      defaultMessage: "Saved diff view",
                      description:
                        "Toast shown when cloud diff display preference is saved",
                    }),
                  );
                }}
              />
            }
          />
          <SettingsRow
            label={
              <MemoizedFormattedMessage
                id="settings.general.cloudPreferences.branchFormat.title"
                defaultMessage="Branch format"
                description="Heading for cloud branch format preference"
              />
            }
            description={
              branchError == null ? (
                <MemoizedFormattedMessage
                  id="settings.general.cloudPreferences.branchFormat.preview"
                  defaultMessage="Example: {branchName}"
                  description="Example branch name produced by the cloud branch format"
                  values={{
                    branchName: previewCloudFilenamePattern(
                      branchFormat,
                      config.branch_format_special_values,
                    ),
                  }}
                />
              ) : (
                branchFormatErrorMessage(branchError)
              )
            }
            control={
              <input
                className="w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border"
                aria-label={intl.formatMessage({
                  id: "settings.general.cloudPreferences.branchFormat.input.ariaLabel",
                  defaultMessage: "Branch format pattern",
                  description:
                    "Accessible label for the cloud branch format input",
                })}
                disabled={updateMutation.isPending}
                placeholder={intl.formatMessage(
                  {
                    id: "settings.general.cloudPreferences.branchFormat.input.placeholder",
                    defaultMessage: "codex/{pattern}",
                    description:
                      "Placeholder for the cloud branch format input",
                  },
                  {
                    pattern: "{feature}",
                  },
                )}
                value={branchFormat}
                onChange={(event) => {
                  setDraft({
                    baseline: preferences.branch_format,
                    value: event.target.value,
                  });
                }}
              />
            }
          />
          <SettingsRow
            label={
              <MemoizedFormattedMessage
                id="settings.general.cloudPreferences.branchFormat.availableTags"
                defaultMessage="Available placeholders"
                description="Label for branch format placeholders"
              />
            }
            description={
              <span className="[text-wrap:wrap]">
                {config.branch_format_special_values
                  .map((token) => token.value)
                  .join(", ")}
              </span>
            }
            control={
              <Button
                color="primary"
                disabled={
                  branchFormat === preferences.branch_format ||
                  branchError != null
                }
                loading={updateMutation.isPending}
                size="toolbar"
                onClick={() => {
                  savePreference(
                    {
                      branch_format: branchFormat,
                    },
                    intl.formatMessage({
                      id: "settings.general.cloudPreferences.branchFormat.save.success",
                      defaultMessage: "Saved branch format",
                      description:
                        "Toast shown when cloud branch format is saved",
                    }),
                  );
                }}
              >
                <MemoizedFormattedMessage
                  id="settings.general.cloudPreferences.branchFormat.save"
                  defaultMessage="Save"
                  description="Button label to save cloud branch format"
                />
              </Button>
            }
          />
        </SettingsPanel>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
