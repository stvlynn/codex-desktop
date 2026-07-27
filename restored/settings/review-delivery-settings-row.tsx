// Restored from ref/webview/assets/review-delivery-settings-row-Ch-7ojKz.js
// Review delivery setting: inline vs detached code review.
// Stage 3: pl→SegmentedControl; _C→SettingsRow; Gft/Jft/Lut/Iut i18n+settings;
// ml/n ESM inits dropped.

import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useIntl } from "../i18n/use-intl";
import { SegmentedControl } from "../ui/segmented-control";
import { SettingsRow } from "./settings-row";
import { persistSettingValue } from "./settings-ipc";
import { useSettingValue } from "./use-setting-value";
import {
  createConfigurationSetting,
  type SettingDefinition,
} from "./setting-definition";
export type ReviewDeliveryMode = "inline" | "detached";

/** Setting definition for review delivery (bundle `Cu.reviewDelivery` / `Dpt`). */
export const reviewDeliverySetting: SettingDefinition<ReviewDeliveryMode> =
  createConfigurationSetting<ReviewDeliveryMode>({
    agentAccess: "read-write",
    default: "inline",
    description: "How code review results are delivered",
    key: "reviewDelivery",
  });

/**
 * Settings row for inline vs detached review delivery (export `t`).
 */
export function ReviewDeliverySettingsRow() {
  const intl = useIntl();
  const value = useSettingValue(reviewDeliverySetting) as
    | ReviewDeliveryMode
    | null
    | undefined;
  const selectedId = value ?? "inline";
  const onSelect = (id: string) => {
    void persistSettingValue(reviewDeliverySetting, id as ReviewDeliveryMode);
  };
  return (
    <SettingsRow
      label={
        <MemoizedFormattedMessage
          id="settings.general.reviewDelivery.label"
          defaultMessage="Review delivery"
          description="Label for the code review delivery setting"
        />
      }
      description={
        <MemoizedFormattedMessage
          id="settings.general.reviewDelivery.description"
          defaultMessage="Start /review in the current chat when possible or launch a separate review chat"
          description="Description for the code review delivery setting"
        />
      }
      control={
        <SegmentedControl
          selectedId={selectedId}
          onSelect={onSelect}
          options={[
            {
              id: "inline",
              label: (
                <MemoizedFormattedMessage
                  id="settings.general.reviewDelivery.inline"
                  defaultMessage="Inline"
                  description="Inline code review option label"
                />
              ),
              ariaLabel: intl.formatMessage({
                id: "settings.general.reviewDelivery.inline",
                defaultMessage: "Inline",
                description: "Inline code review option label",
              }),
            },
            {
              id: "detached",
              label: (
                <MemoizedFormattedMessage
                  id="settings.general.reviewDelivery.detached"
                  defaultMessage="Detached"
                  description="Detached code review option label"
                />
              ),
              ariaLabel: intl.formatMessage({
                id: "settings.general.reviewDelivery.detached",
                defaultMessage: "Detached",
                description: "Detached code review option label",
              }),
            },
          ]}
        />
      }
    />
  );
}

/** No-op Rolldown ESM init retained for graph compatibility (export `n`). */
export function ensureReviewDeliverySettingsRowInit(): void {}
