// Restored from ref/webview/assets/codex-mobile-setup-dialog-CedkrL4M.js
// Wave GA — full polished body from `codex-mobile-setup-dialog-CedkrL4M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 76/108).
// AST split 4/5
/* split-lane-import-depth:1 */

import { isBusinessPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginDirectoryEntrypoint } from "../../analytics/codex-plugin-directory-entrypoint";
import { CodexReferralInviteModalBackendErrorType } from "../../analytics/codex-referral-invite-modal-backend-error-type";
import { CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE } from "../../analytics/codex-thread-open-stream-role-resolved-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppInstallProgressDialog } from "../../apps/app-install-progress-dialog";
import { ArtifactPreviewZoomToFitLabel } from "../../artifact/artifact-preview-zoom-to-fit-label";
import { decayZoomPercent } from "../../artifact/clamp-zoom-percent";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_FH_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import {
  createPersistedAtom,
  ensurePersistedAtomInit,
} from "../../boundaries/persisted-atom";
import {
  jsxRuntime as getJsxRuntime,
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL } from "../../docs/codex-doc-urls";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import {
  MOBILE_MFA_SETUP_FEATURE_GATE_ID,
  REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID,
} from "../../feature-gates/feature-gate-ids";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import {
  ensureUseHomeDirectoryInit,
  useHomeDirectory,
} from "../../hooks/use-home-directory";
import { useIsDarkAppearance } from "../../hooks/use-is-dark-appearance";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconJG } from "../../icons/app-icon-jg";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { matchesOptionalHostPluginIds } from "../../plugins/matches-optional-host-plugin-ids";
import { ensureInstalledPluginsQueryInit } from "../../plugins/use-installed-plugins-query";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { generalDesktopSettingsDefinitions } from "../../settings/general-desktop-settings-definitions";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { CopyButton } from "../../ui/copy-button";
import { deferredT } from "../../ui/deferred-t";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { noop } from "../../utils/noop";
import {
  ensureSvgToDataUriInit,
  svgToDataUri,
} from "../../utils/svg-to-data-uri";

import { Alpha, quartz } from "./part-4-a";

/** split companion stub */
const ApexPrime: any = undefined;
/** split companion stub */
const CliffPrime: any = undefined;
/** split companion stub */
const ElmPrime: any = undefined;
/** split companion stub */
const hingeSecond: any = undefined;
/** split companion stub */
const indigoThird: any = undefined;
/** split companion stub */
const inletThird: any = undefined;
/** split companion stub */
const ironSecond: any = undefined;
/** split companion stub */
const JewelPrime: any = undefined;
/** split companion stub */
const kiteThird: any = undefined;
/** split companion stub */
const latchSecond: any = undefined;
/** split companion stub */
const lemonThird: any = undefined;
/** split companion stub */
const pistonSecond: any = undefined;
/** split companion stub */
const rivetSecond: any = undefined;
/** split companion stub */
const seedFourth: any = undefined;
/** split companion stub */
const torqueSecond: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialMi: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const PersonGlyph: any = undefined;
/** split companion stub */
const _t: any = undefined;
/** split companion stub */
const DeferredUiLC: any = undefined;
/** split companion stub */
const deferredUiUC: any = undefined;
/** split companion stub */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** split companion stub */
const axleSecond: any = undefined;
const AppInitialPi: any = undefined;
function River(vista) {
  let { onSkip, onStartSetup, showStartSetupError, setupInProgress, variant } =
      vista,
    { platform } = useHostPlatformModifierSymbol(),
    wisp = violet(variant, platform);
  let yonder = wisp,
    zenith = (
      <MemoizedFormattedMessage
        id="codexMobile.setupDialog.initial.description"
        defaultMessage="Continue chats from the ChatGPT desktop app on your phone or another device"
        description="Description for the Codex mobile setup dialog"
      />
    );
  let anvil = <CodexMobileSetupDialogO variant={variant} />;
  let beacon = variant === "page" && "w-full max-w-[400px]",
    crag = IntlProvider(
      "flex flex-wrap items-center justify-center gap-3",
      beacon,
    );
  let dome =
    variant === "dialog" ? (
      <ReadLoginRouteQuerySnapshot
        color="secondary"
        onClick={onSkip}
        size="large"
        className="justify-center"
        disabled={setupInProgress}
      >
        <MemoizedFormattedMessage
          id="codexMobile.setupDialog.initial.skip"
          defaultMessage="Later"
          description="Secondary action for the Codex mobile setup dialog"
        />
      </ReadLoginRouteQuerySnapshot>
    ) : null;
  let eddy = variant === "page" && "w-full",
    fjord = IntlProvider("justify-center", eddy);
  let glen = (
    <MemoizedFormattedMessage
      id="codexMobile.setupDialog.initial.primary"
      defaultMessage="Get started"
      description="Primary action for the Codex mobile setup dialog"
    />
  );
  let hearth = (
    <ReadLoginRouteQuerySnapshot
      onClick={onStartSetup}
      size="large"
      className={fjord}
      loading={setupInProgress}
    >
      {glen}
    </ReadLoginRouteQuerySnapshot>
  );
  let inlet = (
    <div className={crag}>
      {dome}
      {hearth}
    </div>
  );
  let jetty =
    variant === "page" ? (
      <div className="w-full max-w-[400px] text-center text-xs leading-normal text-token-description-foreground">
        {
          <MemoizedFormattedMessage
            id="codexMobile.setupPage.initial.securityNotice"
            defaultMessage="ChatGPT can access your desktop—including files, apps, and your browser—to complete tasks you send from your phone. This can introduce security risks. Only connect devices that you own and trust."
            description="Security notice shown on the Codex mobile setup page"
          />
        }
      </div>
    ) : null;
  let knob = showStartSetupError ? (
    <div className="text-sm text-token-error-foreground">
      {
        <MemoizedFormattedMessage
          id="codexMobile.setupDialog.initial.startSetupError"
          defaultMessage="Couldn’t check security requirements. Try again"
          description="Error shown when Codex mobile setup cannot check the MFA requirement"
        />
      }
    </div>
  ) : null;
  return (
    <JewelPrime variant={variant} heading={yonder} description={zenith}>
      {anvil}
      {inlet}
      {jetty}
      {knob}
    </JewelPrime>
  );
}
function Slate(ledge) {
  let { onAllowHost, setupInProgress, showAllowHostError, variant } = ledge,
    mire,
    nook;
  mire = (
    <MemoizedFormattedMessage
      id="codexMobile.setupDialog.allowHost.heading"
      defaultMessage="Allow devices to control this computer?"
      description="Heading for the Codex mobile allow host dialog state"
    />
  );
  nook = (
    <MemoizedFormattedMessage
      id="codexMobile.setupDialog.allowHost.description"
      defaultMessage="This lets authorized devices, such as your phone, connect to ChatGPT and control this computer remotely"
      description="Description for the Codex mobile allow host dialog state"
    />
  );
  let oxbow = (
    <MemoizedFormattedMessage
      id="codexMobile.setupDialog.allowHost.primary"
      defaultMessage="Allow"
      description="Primary action for the Codex mobile allow host dialog state"
    />
  );
  let pond = (
    <ReadLoginRouteQuerySnapshot
      size="large"
      className="justify-center"
      loading={setupInProgress}
      onClick={onAllowHost}
    >
      {oxbow}
    </ReadLoginRouteQuerySnapshot>
  );
  let quarry = showAllowHostError ? (
    <div className="text-sm text-token-error-foreground">
      {
        <MemoizedFormattedMessage
          id="codexMobile.setupDialog.allowHost.error"
          defaultMessage="Couldn’t enable remote control. Try again"
          description="Error shown when Codex mobile setup cannot enable remote control"
        />
      }
    </div>
  ) : null;
  return (
    <JewelPrime variant={variant} heading={mire} description={nook}>
      {pond}
      {quarry}
    </JewelPrime>
  );
}
function Timber(rapids) {
  let { onContinueOnChatGPT, variant } = rapids,
    spur,
    tor;
  spur = (
    <MemoizedFormattedMessage
      id="codexMobile.setupDialog.mfaRequired.heading"
      defaultMessage="Turn on Multi-Factor Authentication"
      description="Heading for the Codex mobile MFA required dialog state"
    />
  );
  tor = (
    <MemoizedFormattedMessage
      id="codexMobile.setupDialog.mfaRequired.description"
      defaultMessage="To enable this feature, you’ll need to turn on Multi-Factor Authentication for your ChatGPT account"
      description="Description for the Codex mobile MFA required dialog state"
    />
  );
  let updraft = (
    <MemoizedFormattedMessage
      id="codexMobile.setupDialog.mfaRequired.primary"
      defaultMessage="Continue on chatgpt.com"
      description="Primary action for the Codex mobile MFA required dialog state"
    />
  );
  let verge = (
    <ReadLoginRouteQuerySnapshot
      size="large"
      className="justify-center"
      onClick={onContinueOnChatGPT}
    >
      {updraft}
    </ReadLoginRouteQuerySnapshot>
  );
  return (
    <JewelPrime variant={variant} heading={spur} description={tor}>
      {verge}
    </JewelPrime>
  );
}
function CodexMobileSetupDialogO(cog) {
  let { variant } = cog,
    disc =
      variant === "dialog"
        ? "w-[380px] gap-4"
        : "w-full max-w-[400px] divide-y-[0.5px] divide-token-border overflow-hidden rounded-2xl border border-token-border",
    edge = IntlProvider("flex flex-col", disc);
  let forge = (
    <Willow
      icon={<AppInitialPi aria-hidden={true} className="size-5" />}
      title={
        <MemoizedFormattedMessage
          id="codexMobile.setupDialog.initial.feature.threads.title"
          defaultMessage="Pick up where you left off"
          description="Title for the first Codex mobile feature in the setup dialog"
        />
      }
    >
      <MemoizedFormattedMessage
        id="codexMobile.setupDialog.initial.feature.threads.description"
        defaultMessage="Continue any chat or project from the ChatGPT desktop app"
        description="Description for the first Codex mobile feature in the setup dialog"
      />
    </Willow>
  );
  let gear = (
    <Willow
      icon={<AppIconDG aria-hidden={true} className="size-5" />}
      title={
        <MemoizedFormattedMessage
          id="codexMobile.setupDialog.initial.feature.notifications.title"
          defaultMessage="Stay in the loop"
          description="Title for the second Codex mobile feature in the setup dialog"
        />
      }
    >
      <MemoizedFormattedMessage
        id="codexMobile.setupDialog.initial.feature.notifications.description"
        defaultMessage="Get notified when ChatGPT finishes a task or needs your attention"
        description="Description for the second Codex mobile feature in the setup dialog"
      />
    </Willow>
  );
  let hinge = (
    <Willow
      icon={<DeferredUiLC aria-hidden={true} className="size-5" />}
      title={
        <MemoizedFormattedMessage
          id="codexMobile.setupDialog.initial.feature.actions.title"
          defaultMessage="Start something new"
          description="Title for the third Codex mobile feature in the setup dialog"
        />
      }
    >
      <MemoizedFormattedMessage
        id="codexMobile.setupDialog.initial.feature.actions.description"
        defaultMessage="Just send a message to start a task on your desktop"
        description="Description for the third Codex mobile feature in the setup dialog"
      />
    </Willow>
  );
  return (
    <div className={edge}>
      {forge}
      {gear}
      {hinge}
    </div>
  );
}
function violet(iron, joint) {
  return iron === "dialog" ? (
    joint === "windows" ? (
      <MemoizedFormattedMessage
        id="codexMobile.setupDialog.initial.heading.windows"
        defaultMessage="Connect a device to this PC"
        description="Heading for the Codex mobile setup dialog on Windows"
      />
    ) : (
      <MemoizedFormattedMessage
        id="codexMobile.setupDialog.initial.heading.desktop"
        defaultMessage="Connect a device to this Mac"
        description="Heading for the Codex mobile setup dialog on non-Windows desktop platforms"
      />
    )
  ) : joint === "windows" ? (
    <MemoizedFormattedMessage
      id="codexMobile.setupPage.initial.heading.windows"
      defaultMessage="Connect your phone to this PC"
      description="Heading for the Codex mobile setup page on Windows"
    />
  ) : (
    <MemoizedFormattedMessage
      id="codexMobile.setupDialog.initial.heading"
      defaultMessage="Connect your phone to this Mac"
      description="Heading for the Codex mobile setup page on non-Windows desktop platforms"
    />
  );
}
function Willow(keystone) {
  let { children, icon, title } = keystone,
    latch = (
      <div className="flex h-8 w-8 shrink-0 items-center justify-center text-token-text-primary">
        {icon}
      </div>
    );
  let motor = (
    <div className="text-base leading-normal tracking-normal text-token-text-primary">
      {title}
    </div>
  );
  let nut = (
    <div className="text-sm leading-normal tracking-normal text-token-description-foreground">
      {children}
    </div>
  );
  let piston = (
    <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">
      {motor}
      {nut}
    </div>
  );
  return (
    <div className="flex items-center gap-4 px-[14px] py-2">
      {latch}
      {piston}
    </div>
  );
}
var xenon,
  yellow,
  codexMobileSetupDialogS = esmInit(() => {
    xenon = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    macOS4();
    PersonGlyph();
    deferredUiUC();
    AppInitialMi();
    indigoThird();
    lemonThird();
    quartz();
    yellow = getJsxRuntime();
  });
function Zinc(rivet) {
  let {
      approvalDeviceMode,
      heading,
      hostId,
      onApprovalDeviceModeChange,
      variant,
    } = rivet,
    screw = hostId === undefined ? LOCAL_HOST_ID : hostId,
    { platform } = useHostPlatformModifierSymbol(),
    torque =
      heading ??
      (platform === "macOS" ? (
        <MemoizedFormattedMessage
          id="codexMobile.setupDialog.waiting.heading.mac"
          defaultMessage="Approve on your device to control this Mac remotely"
          description="Heading for the Codex mobile setup waiting state on macOS"
        />
      ) : (
        <MemoizedFormattedMessage
          id="codexMobile.setupDialog.waiting.heading.pc"
          defaultMessage="Approve on your device to control this computer remotely"
          description="Heading for the Codex mobile setup waiting state on non-macOS platforms"
        />
      ));
  let valve = torque;
  if (variant === "page") {
    let bracket = (
      <MemoizedFormattedMessage
        id="codexMobile.setupPage.waiting.phoneDeepLink.caption"
        defaultMessage="Scan to continue setup in ChatGPT"
        description="Caption shown below the Codex mobile deep link QR code"
      />
    );
    let clamp = (
      <div className="flex w-full max-w-[460px] flex-col items-center gap-6">
        {<Alpha hostId={screw} showDeviceTypeSelector={false} />}
      </div>
    );
    let drill;
    return (
      <JewelPrime variant="page" heading={valve} description={bracket}>
        {clamp}
      </JewelPrime>
    );
  }
  let axle = (
    <div className="flex w-full justify-center">
      {
        <Alpha
          deviceType={approvalDeviceMode}
          hostId={screw}
          onDeviceTypeChange={onApprovalDeviceModeChange}
          size="compact"
        />
      }
    </div>
  );
  return (
    <JewelPrime variant="dialog" heading={valve}>
      {axle}
    </JewelPrime>
  );
}
var amber,
  basalt,
  cedar = esmInit(() => {
    amber = reactCompilerRuntime();
    ensureIntlFormattersInit();
    macOS4();
    ensureAppShellAtomsInit();
    indigoThird();
    quartz();
    basalt = getJsxRuntime();
  });
function codexMobileSetupDialogI(engine) {
  let {
      hostId,
      onAllowHost,
      onContinueOnChatGPT,
      onFinishSetup,
      onManageConnections,
      onSkip,
      onStartSetup,
      setupInProgress,
      showAllowHostError = false,
      showStartSetupError,
      step,
      variant,
      waitingHeading,
    } = engine,
    [frame, gasket] = pistonSecond.useState("phone"),
    handle = (
      <DollarI
        approvalDeviceMode={frame}
        hostId={hostId}
        onAllowHost={onAllowHost}
        onApprovalDeviceModeChange={gasket}
        onContinueOnChatGPT={onContinueOnChatGPT}
        onFinishSetup={onFinishSetup}
        onManageConnections={onManageConnections}
        onSkip={onSkip}
        onStartSetup={onStartSetup}
        setupInProgress={setupInProgress}
        showAllowHostError={showAllowHostError}
        showStartSetupError={showStartSetupError}
        step={step}
        variant={variant}
        waitingHeading={waitingHeading}
      />
    );
  let insert = handle;
  if (variant === "dialog") {
    let lever = daisy(step, frame);
    let mount = <CliffPrime artworkSrc={lever} />;
    let nozzle;
    return (
      <div className="pointer-events-auto flex w-full flex-col overflow-hidden">
        {mount}
        {insert}
      </div>
    );
  }
  let jacket = flint(step);
  let knurl = ember(step);
  return (
    <ApexPrime artworkAlignment={jacket} artworkSrc={knurl}>
      {insert}
    </ApexPrime>
  );
}
function DollarI(ratchet) {
  let {
    approvalDeviceMode,
    hostId,
    onAllowHost,
    onApprovalDeviceModeChange,
    onContinueOnChatGPT,
    onFinishSetup,
    onManageConnections,
    onSkip,
    onStartSetup,
    setupInProgress,
    showAllowHostError,
    showStartSetupError,
    step,
    variant,
    waitingHeading,
  } = ratchet;
  switch (step) {
    case "allow-host": {
      let shim;
      return (
        <Slate
          onAllowHost={onAllowHost}
          setupInProgress={setupInProgress}
          showAllowHostError={showAllowHostError}
          variant={variant}
        />
      );
    }
    case "connected": {
      let tappet;
      return (
        <ElmPrime
          onFinishSetup={onFinishSetup}
          onManageConnections={onManageConnections}
          variant={variant}
        />
      );
    }
    case "initial": {
      let arbor;
      return (
        <River
          onSkip={onSkip}
          onStartSetup={onStartSetup}
          showStartSetupError={showStartSetupError}
          setupInProgress={setupInProgress}
          variant={variant}
        />
      );
    }
    case "mfa-required": {
      let bushing;
      return (
        <Timber onContinueOnChatGPT={onContinueOnChatGPT} variant={variant} />
      );
    }
    case "waiting": {
      let collar;
      return (
        <Zinc
          approvalDeviceMode={approvalDeviceMode}
          heading={waitingHeading}
          hostId={hostId}
          onApprovalDeviceModeChange={onApprovalDeviceModeChange}
          variant={variant}
        />
      );
    }
  }
}
function daisy(dowel, flange) {
  switch (dowel) {
    case "allow-host":
      return hingeSecond;
    case "connected":
      return kiteThird;
    case "initial":
      return _t;
    case "mfa-required":
      return inletThird;
    case "waiting":
      return flange === "phone" ? ironSecond : seedFourth;
  }
}
function ember(gib) {
  switch (gib) {
    case "allow-host":
      return latchSecond;
    case "connected":
    case "initial":
      return axleSecond;
    case "mfa-required":
      return rivetSecond;
    case "waiting":
      return torqueSecond;
  }
}
function flint(hub) {
  switch (hub) {
    case "allow-host":
      return "bottom-right";
    case "mfa-required":
      return "right";
    case "connected":
    case "initial":
    case "waiting":
      return "center";
  }
}
