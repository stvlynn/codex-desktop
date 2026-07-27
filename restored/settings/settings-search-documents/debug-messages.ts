// Restored from ref/webview/assets/_virtual_settings-search-documents-BNScSdXi.js
// Settings search messages for section "debug".

export type SettingsSearchMessage = {
  id: string;
  defaultMessage?: string;
};
export const debugMessages: SettingsSearchMessage[] = [
  {
    defaultMessage: "GPU Tearing Debug",
    id: "settings.general.gpuTearingDebug",
  },
  {
    defaultMessage:
      "Forces backdrop filters off across the web UI to reduce layered blur composition",
    id: "settings.general.gpuTearingDebug.disableBackdropBlur.description",
  },
  {
    defaultMessage: "Disable backdrop blur",
    id: "settings.general.gpuTearingDebug.disableBackdropBlur.label",
  },
  {
    defaultMessage:
      "Turns off CSS animations and transitions to isolate compositor animation work",
    id: "settings.general.gpuTearingDebug.disableCssMotion.description",
  },
  {
    defaultMessage: "Disable CSS motion",
    id: "settings.general.gpuTearingDebug.disableCssMotion.label",
  },
  {
    defaultMessage:
      "Removes scroll-edge fade masks entirely to isolate mask compositing as a tearing trigger",
    id: "settings.general.gpuTearingDebug.disableScrollFadeMask.description",
  },
  {
    defaultMessage: "Disable scroll fade mask",
    id: "settings.general.gpuTearingDebug.disableScrollFadeMask.label",
  },
  {
    defaultMessage:
      "Keeps static fade masks but removes the scroll-linked animation timeline",
    id: "settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.description",
  },
  {
    defaultMessage: "Disable scroll fade animation",
    id: "settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.label",
  },
  {
    defaultMessage:
      "Uses standard round corners instead of CSS superellipses to isolate squircle rendering cost",
    id: "settings.general.gpuTearingDebug.disableSquircles.description",
  },
  {
    defaultMessage: "Disable squircles",
    id: "settings.general.gpuTearingDebug.disableSquircles.label",
  },
  {
    defaultMessage:
      "Paints the renderer root and body with opaque backgrounds to isolate transparent-window composition",
    id: "settings.general.gpuTearingDebug.forceOpaqueRendererBackground.description",
  },
  {
    defaultMessage: "Force opaque web background",
    id: "settings.general.gpuTearingDebug.forceOpaqueRendererBackground.label",
  },
  {
    defaultMessage:
      "Temporary compositor isolation toggles. Changes apply immediately and are only active while the debug gate is enabled.",
    id: "settings.general.gpuTearingDebug.subtitle",
  },
  {
    defaultMessage: "Toggle {settingName}",
    id: "settings.general.gpuTearingDebug.toggle",
  },
];
