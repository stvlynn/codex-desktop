// Restored from ref/webview/assets/_virtual_settings-search-documents-BNScSdXi.js
// Settings search messages for section "connections".

export type SettingsSearchMessage = {
  id: string;
  defaultMessage?: string;
};
import { connectionsMessagesPart2 } from "./connections-messages-part2";

export const connectionsMessages: SettingsSearchMessage[] = [
  {
    defaultMessage:
      "Something went wrong connecting to the Codex CLI. Try restarting",
    id: "appServer.error.genericRestartRequired",
  },
  {
    defaultMessage: "You are currently logged out.",
    id: "appServer.error.loginRequired",
  },
  {
    defaultMessage: "Codex CLI is not installed on this remote machine",
    id: "appServer.error.remoteCodexNotFound",
  },
  {
    defaultMessage:
      "Restart now to update to {installedVersion}. Currently running {currentVersion}",
    id: "appServer.error.restartAvailable",
  },
  {
    defaultMessage:
      "Codex CLI on this environment is out of date. Update to {minVersion} or newer. Current version: {currentVersion}",
    id: "appServer.error.unsupportedVersion",
  },
  {
    defaultMessage: "Done",
    id: "codex.remoteHostColorPicker.done",
  },
  {
    defaultMessage: "Hex color",
    id: "codex.remoteHostColorPicker.hexColor",
  },
  {
    defaultMessage: "Enter a 3- or 6-digit hex color",
    id: "codex.remoteHostColorPicker.hexColorInputTitle",
  },
  {
    defaultMessage: "Connection color picker",
    id: "codex.remoteHostColorPicker.pickerAriaLabel",
  },
  {
    defaultMessage: "Reset to default",
    id: "codex.remoteHostColorPicker.resetToDefault",
  },
  {
    defaultMessage: "This changes the color for {host} everywhere it appears",
    id: "codex.remoteHostColorPicker.subtitle",
  },
  {
    defaultMessage: "Change connection color",
    id: "codex.remoteHostColorPicker.title",
  },
  {
    defaultMessage:
      "This lets authorized devices, such as your phone, connect to ChatGPT and control this computer remotely",
    id: "codexMobile.setupDialog.allowHost.description",
  },
  {
    defaultMessage: "Couldn’t enable remote control. Try again",
    id: "codexMobile.setupDialog.allowHost.error",
  },
  {
    defaultMessage: "Allow devices to control this computer?",
    id: "codexMobile.setupDialog.allowHost.heading",
  },
  {
    defaultMessage: "Allow",
    id: "codexMobile.setupDialog.allowHost.primary",
  },
  {
    defaultMessage: "Allow devices to control this computer?",
    id: "codexMobile.setupDialog.allowHost.title",
  },
  {
    defaultMessage: "Let ChatGPT navigate websites and fill out forms",
    id: "codexMobile.setupDialog.connected.chromeExtension.description",
  },
  {
    defaultMessage: "Set up Chrome extension",
    id: "codexMobile.setupDialog.connected.chromeExtension.title",
  },
  {
    defaultMessage: "Set up Chrome extension",
    id: "codexMobile.setupDialog.connected.chromeExtension.toggle",
  },
  {
    defaultMessage: "Let ChatGPT control apps on your Mac",
    id: "codexMobile.setupDialog.connected.computerUse.description",
  },
  {
    defaultMessage: "Let ChatGPT control apps on your PC",
    id: "codexMobile.setupDialog.connected.computerUse.description.windows",
  },
  {
    defaultMessage: "Enable computer use",
    id: "codexMobile.setupDialog.connected.computerUse.title",
  },
  {
    defaultMessage: "Enable computer use",
    id: "codexMobile.setupDialog.connected.computerUse.toggle",
  },
  {
    defaultMessage:
      "Make the most out of your new connection. You can change these later in Settings.",
    id: "codexMobile.setupDialog.connected.description",
  },
  {
    defaultMessage: "Done",
    id: "codexMobile.setupDialog.connected.finish",
  },
  {
    defaultMessage: "You’re connected",
    id: "codexMobile.setupDialog.connected.heading",
  },
  {
    defaultMessage:
      "Prevent sleep when this computer is plugged in and remote access is enabled",
    id: "codexMobile.setupDialog.connected.keepAwake.description",
  },
  {
    defaultMessage: "Keep this Mac awake",
    id: "codexMobile.setupDialog.connected.keepAwake.title",
  },
  {
    defaultMessage: "Keep this PC awake",
    id: "codexMobile.setupDialog.connected.keepAwake.title.windows",
  },
  {
    defaultMessage: "Keep this Mac awake",
    id: "codexMobile.setupDialog.connected.keepAwake.toggle",
  },
  {
    defaultMessage: "Keep this PC awake",
    id: "codexMobile.setupDialog.connected.keepAwake.toggle.windows",
  },
  {
    defaultMessage: "Control Mac apps from your phone. <a>Learn more</a>",
    id: "codexMobile.setupDialog.connected.lockedComputerUse.description",
  },
  {
    defaultMessage: "Use your Mac apps while locked",
    id: "codexMobile.setupDialog.connected.lockedComputerUse.title",
  },
  {
    defaultMessage: "Use your Mac apps while locked",
    id: "codexMobile.setupDialog.connected.lockedComputerUse.toggle",
  },
  {
    defaultMessage: "You’re connected",
    id: "codexMobile.setupDialog.connected.title",
  },
  {
    defaultMessage:
      "Continue chats from the ChatGPT desktop app on your phone or another device",
    id: "codexMobile.setupDialog.initial.description",
  },
  {
    defaultMessage: "Just send a message to start a task on your desktop",
    id: "codexMobile.setupDialog.initial.feature.actions.description",
  },
  {
    defaultMessage: "Start something new",
    id: "codexMobile.setupDialog.initial.feature.actions.title",
  },
  {
    defaultMessage:
      "Get notified when ChatGPT finishes a task or needs your attention",
    id: "codexMobile.setupDialog.initial.feature.notifications.description",
  },
  {
    defaultMessage: "Stay in the loop",
    id: "codexMobile.setupDialog.initial.feature.notifications.title",
  },
  {
    defaultMessage: "Continue any chat or project from the ChatGPT desktop app",
    id: "codexMobile.setupDialog.initial.feature.threads.description",
  },
  {
    defaultMessage: "Pick up where you left off",
    id: "codexMobile.setupDialog.initial.feature.threads.title",
  },
  {
    defaultMessage: "Connect your phone to this Mac",
    id: "codexMobile.setupDialog.initial.heading",
  },
  {
    defaultMessage: "Connect a device to this Mac",
    id: "codexMobile.setupDialog.initial.heading.desktop",
  },
  {
    defaultMessage: "Connect a device to this PC",
    id: "codexMobile.setupDialog.initial.heading.windows",
  },
  {
    defaultMessage: "Get started",
    id: "codexMobile.setupDialog.initial.primary",
  },
  {
    defaultMessage: "Later",
    id: "codexMobile.setupDialog.initial.skip",
  },
  {
    defaultMessage: "Couldn’t check security requirements. Try again",
    id: "codexMobile.setupDialog.initial.startSetupError",
  },
  {
    defaultMessage: "Connect a device to this Mac",
    id: "codexMobile.setupDialog.initial.title.desktop",
  },
  {
    defaultMessage: "Connect a device to this PC",
    id: "codexMobile.setupDialog.initial.title.windows",
  },
  {
    defaultMessage:
      "To enable this feature, you’ll need to turn on Multi-Factor Authentication for your ChatGPT account",
    id: "codexMobile.setupDialog.mfaRequired.description",
  },
  {
    defaultMessage: "Turn on Multi-Factor Authentication",
    id: "codexMobile.setupDialog.mfaRequired.heading",
  },
  {
    defaultMessage: "Continue on chatgpt.com",
    id: "codexMobile.setupDialog.mfaRequired.primary",
  },
  {
    defaultMessage: "Turn on Multi-Factor Authentication",
    id: "codexMobile.setupDialog.mfaRequired.title",
  },
  {
    defaultMessage:
      "Click <strong>Set up</strong> in the <strong>Control other devices</strong> tab",
    id: "codexMobile.setupDialog.waiting.computer.step.allow",
  },
  {
    defaultMessage:
      "Open the <strong>ChatGPT desktop app</strong> on the computer you want to authorize",
    id: "codexMobile.setupDialog.waiting.computer.step.openDesktopApp",
  },
  {
    defaultMessage: "Go to <strong>Connections</strong> tab in settings",
    id: "codexMobile.setupDialog.waiting.computer.step.settingsConnections",
  },
  {
    defaultMessage: "Device type",
    id: "codexMobile.setupDialog.waiting.deviceType",
  },
  {
    defaultMessage: "Computer",
    id: "codexMobile.setupDialog.waiting.deviceType.computer",
  },
  {
    defaultMessage: "Phone",
    id: "codexMobile.setupDialog.waiting.deviceType.phone",
  },
  {
    defaultMessage: "Approve on your device to control this Mac remotely",
    id: "codexMobile.setupDialog.waiting.heading.mac",
  },
  {
    defaultMessage: "Approve on your device to control this computer remotely",
    id: "codexMobile.setupDialog.waiting.heading.pc",
  },
  {
    defaultMessage: "Approve on your device",
    id: "codexMobile.setupDialog.waiting.title",
  },
  {
    defaultMessage: "Manage connections",
    id: "codexMobile.setupPage.connected.manageConnections",
  },
  {
    defaultMessage: "Connect your phone to this PC",
    id: "codexMobile.setupPage.initial.heading.windows",
  },
  {
    defaultMessage:
      "ChatGPT can access your desktop—including files, apps, and your browser—to complete tasks you send from your phone. This can introduce security risks. Only connect devices that you own and trust.",
    id: "codexMobile.setupPage.initial.securityNotice",
  },
  {
    defaultMessage:
      "Scan QR code to set up a new phone or manage existing connections",
    id: "codexMobile.setupPage.ready.description",
  },
  {
    defaultMessage: "Phone type",
    id: "codexMobile.setupPage.ready.phoneDeepLink.deviceType",
  },
  {
    defaultMessage: "Remote",
    id: "codexMobile.setupPage.ready.remoteHeading",
  },
  {
    defaultMessage: "Set up Remote",
    id: "codexMobile.setupPage.remoteTitle",
  },
  {
    defaultMessage:
      "Click <strong>Add</strong> in the <strong>Settings > Connections > Control other devices</strong> tab on your other computer and enter this code",
    id: "codexMobile.setupPage.waiting.computerPairingCode.caption",
  },
  {
    defaultMessage: "Close fullscreen QR code",
    id: "codexMobile.setupPage.waiting.pairing.closeFullscreenQrCode",
  },
  {
    defaultMessage: "Copy pairing code",
    id: "codexMobile.setupPage.waiting.pairing.copy",
  },
  {
    defaultMessage: "Pairing QR code",
    id: "codexMobile.setupPage.waiting.pairing.fullscreenQrCodeTitle",
  },
  {
    defaultMessage: "Loading pairing code",
    id: "codexMobile.setupPage.waiting.pairing.loading",
  },
  {
    defaultMessage: "Refresh pairing code",
    id: "codexMobile.setupPage.waiting.pairing.refresh",
  },
  {
    defaultMessage: "Show QR code fullscreen",
    id: "codexMobile.setupPage.waiting.pairing.showQrCodeFullscreen",
  },
  {
    defaultMessage: "Pairing code unavailable",
    id: "codexMobile.setupPage.waiting.pairing.unavailable",
  },
  {
    defaultMessage: "Pairing code unavailable: {error}",
    id: "codexMobile.setupPage.waiting.pairing.unavailableWithError",
  },
  {
    defaultMessage: "Animate QR code",
    id: "codexMobile.setupPage.waiting.phoneDeepLink.animateQrCode",
  },
  {
    defaultMessage: "Scan to continue setup in ChatGPT",
    id: "codexMobile.setupPage.waiting.phoneDeepLink.caption",
  },
  {
    defaultMessage: "Android",
    id: "codexMobile.setupPage.waiting.phoneDeepLink.deviceType.android",
  },
  {
    defaultMessage: "iPhone",
    id: "codexMobile.setupPage.waiting.phoneDeepLink.deviceType.ios",
  },
  {
    defaultMessage: "QR code to continue setup in ChatGPT",
    id: "codexMobile.setupPage.waiting.phoneDeepLink.qrCode",
  },
  {
    defaultMessage:
      "Please upgrade to the latest version of the ChatGPT app to pair",
    id: "codexMobile.setupPage.waiting.upgradeMessage",
  },
  {
    defaultMessage: "Continue",
    id: "electron.onboarding.login.apikey.continue",
  },
  {
    defaultMessage: "OpenAI API key",
    id: "electron.onboarding.login.apikey.label",
  },
  {
    defaultMessage: "Enter API key",
    id: "electron.onboarding.login.apikey.open",
  },
  {
    defaultMessage: "sk-…",
    id: "electron.onboarding.login.apikey.placeholder",
  },
  {
    defaultMessage: "Cancel sign-in",
    id: "electron.onboarding.login.chatgpt.cancel",
  },
  {
    defaultMessage: "Continue with ChatGPT",
    id: "electron.onboarding.login.chatgpt.continue",
  },
  {
    defaultMessage: "Manage browser remote control environments",
    id: "remoteConnections.page.browserSubheading",
  },
  {
    defaultMessage:
      "You don’t have access to browser remote control in this workspace",
    id: "settings.remoteConnections.accessOtherDevices.accessRequired",
  },
  {
    defaultMessage: "Devices you can control from this Mac",
    id: "settings.remoteConnections.accessOtherDevices.devices.title",
  },
  {
    defaultMessage: "Devices you can control from this PC",
    id: "settings.remoteConnections.accessOtherDevices.devices.title.windows",
  },
  {
    defaultMessage: "No devices added yet",
    id: "settings.remoteConnections.accessOtherDevices.empty",
  },
  {
    defaultMessage: "Devices you can control from this Mac",
    id: "settings.remoteConnections.accessOtherDevices.header.title",
  },
  {
    defaultMessage: "Devices you can control from this PC",
    id: "settings.remoteConnections.accessOtherDevices.header.title.windows",
  },
  {
    defaultMessage: "Loading devices…",
    id: "settings.remoteConnections.accessOtherDevices.loading",
  },
  {
    defaultMessage: "Set up",
    id: "settings.remoteConnections.accessOtherDevices.setup.action",
  },
  {
    defaultMessage: "Access and control other devices from this computer",
    id: "settings.remoteConnections.accessOtherDevices.setup.description",
  },
  {
    defaultMessage: "Browser remote control isn’t available right now",
    id: "settings.remoteConnections.accessOtherDevices.unavailable",
  },
  {
    defaultMessage: "Sign in to ChatGPT, then refresh to add a device",
    id: "settings.remoteConnections.add.disabled.authRequired",
  },
  {
    defaultMessage: "Refresh connections before adding a device",
    id: "settings.remoteConnections.add.disabled.refreshRequired",
  },
  {
    defaultMessage: "Wait for the current connection update to finish",
    id: "settings.remoteConnections.add.disabled.updating",
  },
  {
    defaultMessage: "Add",
    id: "settings.remoteConnections.add.short",
  },
  {
    defaultMessage: "Add remote project for {connectionName}",
    id: "settings.remoteConnections.addRemoteProject",
  },
  {
    defaultMessage: "Add a remote project",
    id: "settings.remoteConnections.addRemoteProject.tooltip",
  },
  {
    defaultMessage: "Back",
    id: "settings.remoteConnections.auth.back",
  },
  {
    defaultMessage: "Close",
    id: "settings.remoteConnections.auth.close",
  },
  {
    defaultMessage: "Close",
    id: "settings.remoteConnections.auth.closeIcon",
  },
  {
    defaultMessage:
      "Authenticate the Codex CLI on this remote machine to continue",
    id: "settings.remoteConnections.auth.description",
  },
  {
    defaultMessage: "Sign-in failed: {message}",
    id: "settings.remoteConnections.auth.error",
  },
  {
    defaultMessage: "Login required",
    id: "settings.remoteConnections.auth.title",
  },
  {
    defaultMessage: "Authorize on chatgpt.com",
    id: "settings.remoteConnections.authorizationDialog.authorize",
  },
  {
    defaultMessage:
      "Authorize this Mac to control other devices signed in to your ChatGPT account",
    id: "settings.remoteConnections.authorizationDialog.description",
  },
  {
    defaultMessage:
      "Authorize this PC to control other devices signed in to your ChatGPT account",
    id: "settings.remoteConnections.authorizationDialog.description.windows",
  },
  {
    defaultMessage: "Control other devices from this Mac",
    id: "settings.remoteConnections.authorizationDialog.heading",
  },
  {
    defaultMessage: "Control other devices from this PC",
    id: "settings.remoteConnections.authorizationDialog.heading.windows",
  },
  {
    defaultMessage: "Control other devices from this Mac",
    id: "settings.remoteConnections.authorizationDialog.title",
  },
  {
    defaultMessage: "Control other devices from this PC",
    id: "settings.remoteConnections.authorizationDialog.title.windows",
  },
  {
    defaultMessage: "Failed to update connection",
    id: "settings.remoteConnections.connectToggle.error",
  },
  {
    defaultMessage: "Delete",
    id: "settings.remoteConnections.deleteConnection",
  },
  {
    defaultMessage: "Alias",
    id: "settings.remoteConnections.details.alias",
  },
  {
    defaultMessage: "Allow connections",
    id: "settings.remoteConnections.details.allowConnections",
  },
  {
    defaultMessage: "Allow",
    id: "settings.remoteConnections.details.allowSignedInDevicesDialog.allow",
  },
  {
    defaultMessage:
      "iPhone Pro and Samsung Galaxy devices connected to ChatGPT on a computer",
    id: "settings.remoteConnections.details.allowSignedInDevicesDialog.artworkAlt",
  },
  {
    defaultMessage:
      "This will allow authorized devices like your phone to discover and control ChatGPT on this connection",
    id: "settings.remoteConnections.details.allowSignedInDevicesDialog.description",
  },
  {
    defaultMessage: "Allow devices to control this connection?",
    id: "settings.remoteConnections.details.allowSignedInDevicesDialog.title",
  },
  {
    defaultMessage: "Available from signed-in devices",
    id: "settings.remoteConnections.details.availableFromSignedInDevices",
  },
  {
    defaultMessage: "Connect",
    id: "settings.remoteConnections.details.availableFromSignedInDevicesConnect",
  },
  {
    defaultMessage:
      "Allow ChatGPT apps signed into your account to use this device",
    id: "settings.remoteConnections.details.availableFromSignedInDevicesDescription",
  },
  {
    defaultMessage: "Couldn’t update signed-in device availability",
    id: "settings.remoteConnections.details.availableFromSignedInDevicesUpdateError",
  },
  {
    defaultMessage: "Control from phone or other device",
    id: "settings.remoteConnections.details.controlFromPhoneOrOtherDevice",
  },
  {
    defaultMessage: "Copied to clipboard",
    id: "settings.remoteConnections.details.copySuccess",
  },
  {
    defaultMessage: "Host",
    id: "settings.remoteConnections.details.host",
  },
  {
    defaultMessage: "Identity",
    id: "settings.remoteConnections.details.identity",
  },
  {
    defaultMessage: "Port",
    id: "settings.remoteConnections.details.port",
  },
  {
    defaultMessage: "Approve on your device to use this connection remotely",
    id: "settings.remoteConnections.details.sshRemoteControlPairing.heading",
  },
  {
    defaultMessage: "Version",
    id: "settings.remoteConnections.details.version",
  },
  {
    defaultMessage: "Distro",
    id: "settings.remoteConnections.details.wslDistro",
  },
  {
    defaultMessage: "Details",
    id: "settings.remoteConnections.detailsMenu",
  },
  {
    defaultMessage:
      "No device connections found. Add a new connection to get started",
    id: "settings.remoteConnections.deviceConnections.empty",
  },
  {
    defaultMessage:
      "Please update ChatGPT on the remote device to the latest version",
    id: "settings.remoteConnections.deviceConnections.remoteCodexUpdateRequiredSubtitle",
  },
  {
    defaultMessage: "Requires authorization · Offline",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceAuthorizationRequiredOfflineSubtitle",
  },
  {
    defaultMessage: "Requires authorization",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceAuthorizationRequiredSubtitle",
  },
  {
    defaultMessage: "Confirming connection",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceConfirmingConnectionSubtitle",
  },
  {
    defaultMessage: "Connecting",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceConnectingSubtitle",
  },
  {
    defaultMessage: "Connection failed",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceConnectionFailedSubtitle",
  },
  {
    defaultMessage: "Disconnected",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceDisconnectedSubtitle",
  },
  {
    defaultMessage: "Initializing secure connection",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceInitializingSubtitle",
  },
  {
    defaultMessage: "Offline",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceOfflineSubtitle",
  },
  {
    defaultMessage: "Connected",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceOnlineSubtitle",
  },
  {
    defaultMessage: "Signed in device",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceSubtitle",
  },
  {
    defaultMessage: "Waiting for device",
    id: "settings.remoteConnections.deviceConnections.signedInDeviceWaitingForDeviceSubtitle",
  },
  {
    defaultMessage: "SSH",
    id: "settings.remoteConnections.deviceConnections.sshSubtitle",
  },
  {
    defaultMessage: "WSL",
    id: "settings.remoteConnections.deviceConnections.wslSubtitle",
  },
  {
    defaultMessage: "Add SSH connection",
    id: "settings.remoteConnections.dialog.addTitle",
  },
  {
    defaultMessage: "Save",
    id: "settings.remoteConnections.dialog.apply",
  },
  ...connectionsMessagesPart2,
];
