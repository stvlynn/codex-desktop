// Restored from ref/webview/assets/debug-settings-DtPgVIaI.js
// Debug settings page — GPU tearing compositor isolation toggles.
// Stage 3: app-initial aliases → semantic modules; ESM inits dropped.
// Alias-out: ii→SettingsSectionLayout; Xr→SettingsSectionTitle; _C→SettingsRow;
// D/O/k→gpu tearing atom; yC→Switch; dC→SettingsPanel; rn→SettingsGroup;
// R_t→useAppScopeValue; L_t→useAppScope; Fft→appScopeAtom; Gft/Jft i18n.

import { appScopeAtom, useAppScope } from "../boundaries/app-scope-runtime";
import { useAppScopeValue } from "../boundaries/composer-appscope-atoms";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { useIntl } from "../i18n/use-intl";
import { Switch } from "../ui/switch";
import {
  gpuTearingDebugSettingsAtom,
  setGpuTearingDebugSetting,
  type GpuTearingDebugSettingKey,
  type GpuTearingDebugSettings,
  type GpuTearingDebugStore,
} from "./gpu-tearing-debug-settings";
import { SettingsGroup } from "./settings-group";
import { SettingsPanel } from "./settings-panel";
import { SettingsRow } from "./settings-row";
import { SettingsSectionLayout } from "./settings-section-layout";
import { SettingsSectionTitle } from "./settings-section-title";
type GpuTearingDebugRow = {
  settingKey: GpuTearingDebugSettingKey;
  label: string;
  description: string;
};

/**
 * Debug settings section (export `DebugSettings` / `E`).
 * Lists GPU tearing isolation toggles behind the debug gate.
 */
export function DebugSettings() {
  return (
    <SettingsSectionLayout title={<SettingsSectionTitle slug="debug" />}>
      <GpuTearingDebugSettingsGroup />
    </SettingsSectionLayout>
  );
}
function GpuTearingDebugSettingsGroup() {
  const store = useAppScope(appScopeAtom) as unknown as GpuTearingDebugStore;
  const intl = useIntl();
  const settings = useAppScopeValue(
    gpuTearingDebugSettingsAtom,
  ) as GpuTearingDebugSettings;
  const rows: GpuTearingDebugRow[] = [
    {
      settingKey: "disableScrollFadeMask",
      label: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.disableScrollFadeMask.label",
        defaultMessage: "Disable scroll fade mask",
        description:
          "Label for GPU tearing debug setting that disables scroll fade masks",
      }),
      description: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.disableScrollFadeMask.description",
        defaultMessage:
          "Removes scroll-edge fade masks entirely to isolate mask compositing as a tearing trigger",
        description:
          "Description for GPU tearing debug setting that disables scroll fade masks",
      }),
    },
    {
      settingKey: "disableScrollFadeMaskAnimation",
      label: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.label",
        defaultMessage: "Disable scroll fade animation",
        description:
          "Label for GPU tearing debug setting that disables scroll fade mask animation",
      }),
      description: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.description",
        defaultMessage:
          "Keeps static fade masks but removes the scroll-linked animation timeline",
        description:
          "Description for GPU tearing debug setting that disables scroll fade mask animation",
      }),
    },
    {
      settingKey: "disableBackdropBlur",
      label: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.disableBackdropBlur.label",
        defaultMessage: "Disable backdrop blur",
        description:
          "Label for GPU tearing debug setting that disables backdrop blur",
      }),
      description: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.disableBackdropBlur.description",
        defaultMessage:
          "Forces backdrop filters off across the web UI to reduce layered blur composition",
        description:
          "Description for GPU tearing debug setting that disables backdrop blur",
      }),
    },
    {
      settingKey: "disableCssMotion",
      label: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.disableCssMotion.label",
        defaultMessage: "Disable CSS motion",
        description:
          "Label for GPU tearing debug setting that disables CSS animations and transitions",
      }),
      description: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.disableCssMotion.description",
        defaultMessage:
          "Turns off CSS animations and transitions to isolate compositor animation work",
        description:
          "Description for GPU tearing debug setting that disables CSS animations and transitions",
      }),
    },
    {
      settingKey: "disableSquircles",
      label: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.disableSquircles.label",
        defaultMessage: "Disable squircles",
        description:
          "Label for GPU tearing debug setting that disables squircle corners",
      }),
      description: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.disableSquircles.description",
        defaultMessage:
          "Uses standard round corners instead of CSS superellipses to isolate squircle rendering cost",
        description:
          "Description for GPU tearing debug setting that disables squircle corners",
      }),
    },
    {
      settingKey: "forceOpaqueRendererBackground",
      label: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.forceOpaqueRendererBackground.label",
        defaultMessage: "Force opaque web background",
        description:
          "Label for GPU tearing debug setting that forces an opaque web background",
      }),
      description: intl.formatMessage({
        id: "settings.general.gpuTearingDebug.forceOpaqueRendererBackground.description",
        defaultMessage:
          "Paints the renderer root and body with opaque backgrounds to isolate transparent-window composition",
        description:
          "Description for GPU tearing debug setting that forces an opaque web background",
      }),
    },
  ];
  return (
    <SettingsGroup>
      <SettingsGroup.Header
        title={
          <MemoizedFormattedMessage
            id="settings.general.gpuTearingDebug"
            defaultMessage="GPU Tearing Debug"
            description="Heading for GPU tearing debug settings group"
          />
        }
        subtitle={
          <MemoizedFormattedMessage
            id="settings.general.gpuTearingDebug.subtitle"
            defaultMessage="Temporary compositor isolation toggles. Changes apply immediately and are only active while the debug gate is enabled."
            description="Subtitle for GPU tearing debug settings group"
          />
        }
      />
      <SettingsGroup.Content>
        <SettingsPanel>
          {rows.map((item) => {
            return (
              <SettingsRow
                key={item.settingKey}
                label={item.label}
                description={item.description}
                control={
                  <Switch
                    checked={Boolean(settings?.[item.settingKey])}
                    onChange={(next) => {
                      setGpuTearingDebugSetting(store, item.settingKey, next);
                    }}
                    ariaLabel={intl.formatMessage(
                      {
                        id: "settings.general.gpuTearingDebug.toggle",
                        defaultMessage: "Toggle {settingName}",
                        description:
                          "Aria label for toggling a GPU tearing debug setting",
                      },
                      {
                        settingName: item.label,
                      },
                    )}
                  />
                }
              />
            );
          })}
        </SettingsPanel>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
