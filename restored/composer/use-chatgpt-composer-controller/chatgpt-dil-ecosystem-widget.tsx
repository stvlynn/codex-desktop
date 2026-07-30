// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Apps SDK ecosystem widget dialog shell (Helper52).

import {
  ensureAppScopeHostInit as appInitialMT,
  useAppScope as appInitialLT,
} from "../../boundaries/app-scope-runtime";
import {
  ensureComposerEsm_B__Init as _AppInitialB,
  ensureComposerEsm_S8_Init as _appInitial8,
  ensureComposerEsm_YS_Init as appInitialY,
  ensureComposerEsm_b8_Init as appInitialB8,
  ensureComposerEsm_fV_Init as appInitialFV,
  ensureComposerEsm_hB_Init as AppInitialHB,
} from "../../boundaries/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { clearMcpAppSidePanelState as AppInitialYB } from "../../conversation/clear-mcp-app-side-panel-state";
import { McpAppFrameHost as AppInitialUB } from "../../conversation/mcp-app-frame-host";
import { McpAppFrameSurface as AppInitialPB } from "../../conversation/mcp-app-frame-surface";
import { McpAppHtmlHost as AppInitialDB } from "../../conversation/mcp-app-html-host";
import { useSyncMcpAppInlineExpanded as appInitialFB } from "../../hooks/use-sync-mcp-app-inline-expanded";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import {
  ensureIntlFormattersInit as appInitialHft,
  useIntl as appInitialJft,
} from "../../i18n/use-intl";
import { extractMcpAppDilFromContents as AppInitialCV } from "../../mcp/extract-mcp-app-dil-from-contents";
import { ensureAppShellAtomsInit as appInitialOpt } from "../../navigation/app-shell-atoms";
import { toConnectorOrMcpTarget as appInitialAV } from "../../apps/to-connector-or-mcp-target";
import { downloadBlobAsFile as _appInitialOV } from "../../utils/download-blob-as-file";
import { identity as AppInitialWmt } from "../../utils/identity";
import { identity as appInitialVft } from "../../utils/identity";
import { DialogClose as appInitialJ } from "../../ui/dialog-close";
import { DialogWithTrigger as appInitialK } from "../../ui/dialog-with-trigger";
import { rolldownRuntimeN, rolldownRuntimeS } from "../../runtime/rolldown-runtime";

function useChatgptComposerControllerHelper51(
  request3233,
) {
  let { csp, domain, height_hint, html, prefers_border } =
      request3233.widget,
    slot8604 = AppInitialCV({
      contents: [
        {
          _meta: {
            "openai/widgetCSP":
              csp == null
                ? undefined
                : {
                    base_uri_domains: csp.base_uri_domains ?? [],
                    connect_domains: csp.connect_domains ?? [],
                    frame_domains: csp.frame_domains ?? [],
                    resource_domains: csp.resource_domains ?? [],
                  },
            "openai/widgetDomain": domain ?? undefined,
            "openai/widgetHeightHint": height_hint ?? undefined,
            "openai/widgetPrefersBorder": prefers_border ?? false,
          },
          mimeType: "text/html+skybridge",
          text: html,
          uri: request3233.request.template,
        },
      ],
    });
  if (slot8604?.kind !== "html")
    throw Error("The app returned an unsupported widget resource.");
  return slot8604;
}
var $u = rolldownRuntimeN(() => {
  appInitialFV();
});
export function useChatgptComposerControllerHelper52(request867: any) {
  const AppInitialGft = appInitialGft;
  const AppInitialJ2 = appInitialJ;
  const UseChatgptComposerControllerHelper54 =
    useChatgptComposerControllerHelper54;
  const AppInitialK = appInitialK;
  let { conversationId, hostId, onClose, state } =
      request867,
    slot3929 = appInitialLT(_appInitial8),
    slot3930 = appInitialJft(),
    [slot3931] =
      slot65.useState(
        useChatgptComposerControllerHelper53,
      ),
    slot3932,
    slot3933;
  slot3932 = () => {
    return () => {
      AppInitialYB(
        slot3929,
        slot3931,
      );
    };
  };
  slot3933 = [
    slot3931,
    slot3929,
  ];
  slot65.useLayoutEffect(
    slot3932,
    slot3933,
  );
  let slot3934 = () => {
    AppInitialYB(
      slot3929,
      slot3931,
    );
    onClose();
  };
  let slot3935 =
      slot3934,
    slot3936 =
      state.kind === "ready" && state.result.request.mode === "fullscreen",
    slot3937 =
      slot3936
        ? "h-full w-full bg-token-background"
        : undefined,
    slot3938 =
      slot3930.formatMessage(
        slot67.appTitle,
      );
  let slot3939 = {
    "aria-label": slot3938,
  };
  let slot3940 = (
    request11429,
  ) => {
    request11429 ||
      slot3935();
  };
  let slot3941 =
      slot3936 ? undefined : "editor",
    slot3942 =
      state.kind === "loading" ? (
        <div className="flex h-full items-center justify-center" role="status">
          {
            <AppInitialGft
              {...slot67.openingApp}
            />
          }
        </div>
      ) : state.kind === "error" ? (
        <div className="flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
          {
            <AppInitialJ2 className="text-lg font-medium">
              <AppInitialGft
                {...slot67.openAppError}
              />
            </AppInitialJ2>
          }
          <p className="text-token-description-foreground">
            {
              <AppInitialGft
                {...slot67.openAppErrorDescription}
              />
            }
          </p>
        </div>
      ) : (
        <UseChatgptComposerControllerHelper54
          conversationId={conversationId}
          hostId={hostId}
          mcpAppId={slot3931}
          result={state.result}
        />
      );
  return (
    <AppInitialK
      contentClassName={slot3937}
      contentProps={slot3939}
      onOpenChange={slot3940}
      open={true}
      size={slot3941}
      unstyledContent={slot3936}
      viewportSized={slot3936}
    >
      {slot3942}
    </AppInitialK>
  );
}
function useChatgptComposerControllerHelper53() {
  return AppInitialWmt(`chatgpt-ecosystem-launcher:${crypto.randomUUID()}`);
}
function useChatgptComposerControllerHelper54(
  request634,
) {
  const AppInitialJ2 = appInitialJ;
  const AppInitialFB = appInitialFB;
  let { conversationId, hostId, mcpAppId, result } =
      request634,
    slot3341 = appInitialJft(),
    slot3342 =
      useChatgptComposerControllerHelper51(result);
  let slot3343 =
      slot3342,
    slot3344 = appInitialAV({
      connectorId: useChatgptComposerControllerHelper55(result.request.appUri),
      instanceFallbackId: mcpAppId,
      server: "codex_apps",
    });
  let slot3345 =
      slot3344,
    slot3346 =
      result.widget.name ||
      slot3341.formatMessage(
        slot67.appTitle,
      );
  let slot3347 =
      slot3346,
    slot3348 = (
      <AppInitialJ2 className="sr-only">
        {slot3347}
      </AppInitialJ2>
    );
  let slot3349 = (
    <AppInitialFB isInlineExpanded={true} mcpAppId={mcpAppId} />
  );
  let slot3350 = {
    originResourceUri: result.request.template,
    originTool: result.request.toolName,
  };
  let slot3351 = (
    <AppInitialDB
      conversationId={conversationId}
      csp={slot3343.csp}
      error={null}
      fullSurface={true}
      hostId={hostId}
      hostedInThreadScrollLayout={false}
      html={slot3343.html}
      isLoading={false}
      mcpAppId={mcpAppId}
      modelContextComposerTitle={slot3347}
      mcpAppScope={slot3350}
      mcpServerStatuses={undefined}
      mcpRequestOverride={result.mcpRequestOverride}
      prefersBorder={slot3343.prefersBorder}
      sandboxOriginScope={slot3345}
      server="codex_apps"
      sidePanelIcon={null}
      sidePanelTitle={slot3347}
      title={slot3347}
      toolArguments={result.request.toolInput}
      toolResult={result.toolResult}
      viewParamsOverride={result.request.viewParams}
      widgetDomain={slot3343.widgetDomain}
    />
  );
  let slot3352 =
      slot3343.heightHint ?? null,
    slot3353 =
      slot3343.minFrameHeight ?? null,
    slot3354 = (
      <AppInitialPB
        error={null}
        fullSurface={true}
        heightHint={slot3352}
        html={slot3343.html}
        isLoading={false}
        mcpAppId={mcpAppId}
        minFrameHeight={slot3353}
      />
    );
  let slot3355 = (
    <AppInitialUB mcpAppId={mcpAppId} />
  );
  return (
    <div data-mcp-app-portal-target="true" className="h-full min-h-0">
      {slot3348}
      {slot3349}
      {slot3351}
      {slot3354}
      {slot3355}
    </div>
  );
}
function useChatgptComposerControllerHelper55(
  request8986,
) {
  let slot14997 =
    request8986.startsWith("connectors://")
      ? request8986.slice(13).trim()
      : request8986.trim();
  return slot14997.length === 0 ||
    slot14997 === "all" ||
    slot14997.includes("+")
    ? null
    : slot14997;
}
var id,
  slot65,
  slot66,
  slot67,
  slot68 = rolldownRuntimeN(() => {
    id = appInitialIvt();
    appInitialMT();
    appInitialOpt();
    slot65 = rolldownRuntimeS(appInitialLvt(), 1);
    appInitialHft();
    appInitialY();
    _AppInitialB();
    AppInitialHB();
    _appInitialOV();
    appInitialB8();
    slot66 = appInitialJvt();
    slot67 = appInitialVft({
      appTitle: {
        id: "chatgpt.ecosystemWidget.title",
        defaultMessage: "App",
        description:
          "Fallback title for an Apps SDK widget opened from ChatGPT",
      },
      openingApp: {
        id: "chatgpt.ecosystemWidget.opening",
        defaultMessage: "Opening app…",
        description: "Status shown while an Apps SDK widget is opening",
      },
      openAppError: {
        id: "chatgpt.ecosystemWidget.openError",
        defaultMessage: "Couldn’t open app",
        description:
          "Error title shown when an Apps SDK widget cannot be opened",
      },
      openAppErrorDescription: {
        id: "chatgpt.ecosystemWidget.openErrorDescription",
        defaultMessage: "Try opening the app again",
        description: "Error guidance shown when an Apps SDK widget cannot open",
      },
    });
  });
