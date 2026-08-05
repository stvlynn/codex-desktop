// Restored from ref/webview/assets/appgen-settings-page-8V-xKkmK.js
// Wave FZ — full polished body from `appgen-settings-page-8V-xKkmK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 76/109).
// AST split — size-gate sibling part-1 c/4
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { decayZoomPercent } from "../../artifact/clamp-zoom-percent";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_FH_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sut_Init,
} from "../../composer/composer-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { ensurePluginMentionPromptInit } from "../../browser/browser-use-helpers";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { isAppUri } from "../../composer/app-plugin-uri";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { useEventCallback } from "../../hooks/use-event-callback";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { AppgenSettingsPageHelper5 } from "./part-1-a";
import { AppgenSettingsPageHelper3 } from "./part-1-b";

/** Wave FZ unresolved companion (jsx-collision:ensureAppMainFLInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialFL: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_P5_Init@composer/composer-esm-inits.ts) */
const AppInitialP5: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureAppgenSiteQueriesInit@appgen/site-query-atoms.ts) */
const AppInitialT5: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const DeferredUiU: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const SetRemoteControlEnabledForHost: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FZ unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;

function At(jasper) {
  let { customDomains, defaultDomain, isError, isLoading, projectId } = jasper,
    kelp = CodexPluginActionType(appScopeAtom),
    lotus = customDomains?.items ?? [];
  let mint = lotus,
    nova = mint.some(alpha);
  let olive = nova,
    prism = customDomains != null && !isError && mint.length === 0,
    quill =
      defaultDomain == null || olive ? null : (
        <EnsurePersonalizationCInit
          {...{
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "appgenSettings.customDomains.defaultDomain.label",
                  defaultMessage: "Domain",
                  description:
                    "Row label for the default hosted Site domain before a custom domain becomes active",
                }}
              />
            ),
            description: (
              <MemoizedFormattedMessage
                {...{
                  id: "appgenSettings.customDomains.defaultDomain.description",
                  defaultMessage: "URL for your site",
                  description:
                    "Help text under the default hosted Site domain row",
                }}
              />
            ),
            control: (
              <AppgenSettingsPageHelper2
                {...{
                  domain: defaultDomain,
                }}
              />
            ),
          }}
        />
      );
  let reef = isLoading ? (
    <EnsurePersonalizationCInit
      {...{
        label: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.row.label",
              defaultMessage: "Custom domain",
              description: "Row label for the Site custom-domain control",
            }}
          />
        ),
        description: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.loading.description",
              defaultMessage: "Loading custom domains",
              description: "Loading text for custom domain settings",
            }}
          />
        ),
        control: (
          <VSCODE_EDITOR_ID
            {...{
              className: "icon-xs",
            }}
          />
        ),
      }}
    />
  ) : isError ? (
    <EnsurePersonalizationCInit
      {...{
        label: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.row.label",
              defaultMessage: "Custom domain",
              description: "Row label for the Site custom-domain control",
            }}
          />
        ),
        description: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.error.description",
              defaultMessage: "Unable to load custom domains",
              description: "Error text when custom domains fail to load",
            }}
          />
        ),
        control: null,
      }}
    />
  ) : mint.length === 0 ? (
    <EnsurePersonalizationCInit
      {...{
        label: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.row.label",
              defaultMessage: "Custom domain",
              description: "Row label for the Site custom-domain control",
            }}
          />
        ),
        control: prism ? (
          <ReadLoginRouteQuerySnapshot
            {...{
              color: "outline",
              size: "toolbar",
              onClick: () => {
                chatProcessRegister(kelp, delta, {
                  projectId,
                });
              },
              children: (
                <MemoizedFormattedMessage
                  {...{
                    id: "appgenSettings.customDomains.add",
                    defaultMessage: "Add custom domain",
                    description:
                      "Button label for adding a custom domain to a site",
                  }}
                />
              ),
            }}
          />
        ) : null,
      }}
    />
  ) : (
    mint.map((item) => (
      <AppgenSettingsPageHelper3
        key={item.id}
        {...{
          customDomain: item,
          projectId,
        }}
      />
    ))
  );
  return (
    <>
      {quill}
      {reef}
    </>
  );
}

function alpha(sage) {
  return sage.status === "active";
}

function AppgenSettingsPageHelper2(topaz) {
  let { domain } = topaz,
    ultra = domain.endsWith(".chatgpt.site");
  let vapor = ultra,
    wheat = vapor ? domain.slice(0, -13) : domain;
  let yarn = wheat,
    zephyr = (
      <span className="min-w-0 truncate text-token-input-foreground">
        {yarn}
      </span>
    );
  let acorn = vapor ? (
    <span className="shrink-0 text-token-text-secondary">
      {".chatgpt.site"}
    </span>
  ) : null;
  return (
    <div className="flex w-56 max-w-full items-center justify-between gap-2 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base">
      {zephyr}
      {acorn}
    </div>
  );
}

function delta(ever) {
  let { onClose, projectId } = ever,
    field = CodexBrowserSurfaceActionType(AppInitialP5, projectId),
    grain = CodexPluginActionType(appScopeAtom),
    haven = useIntl(),
    [ink, jadeite] = jade.useState(""),
    [kernel, leaf] = jade.useState(null),
    maple = ink.trim();
  let nimbus = maple,
    opal = nimbus.length === 0 || field.isPending,
    plume = function () {
      grain.get(toastAtom).danger(
        haven.formatMessage({
          id: "appgenSettings.customDomains.addDialog.error",
          defaultMessage: "Unable to add domain",
          description: "Error toast shown when adding a custom domain fails",
        }),
      );
    };
  let quillow = plume;
  if (kernel != null) {
    let knob;
    return (
      <AppgenSettingsPageHelper5
        {...{
          customDomain: kernel,
          onClose,
        }}
      />
    );
  }
  let root = field.isPending,
    silk = !field.isPending,
    thorn = (ledge) => {
      !ledge && !field.isPending && onClose();
    };
  let upland = (event) => {
    event.preventDefault();
    !opal &&
      field
        .mutateAsync({
          hostname: nimbus,
        })
        .then(
          (value) => {
            leaf(value);
          },
          () => {
            quillow();
          },
        );
  };
  let vista = (
    <RealtimeVoiceHostId
      {...{
        className: "contents",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "appgenSettings.customDomains.addDialog.title",
              defaultMessage: "Add custom domain",
              description: "Title for custom domain add dialog",
            }}
          />
        ),
      }}
    />
  );
  let wisp = (
    <DeferredUiH
      {...{
        title: vista,
        titleClassName: "truncate pr-8",
        subtitle: (
          <IsStartingProcessExpired
            {...{
              className: "contents",
              children: (
                <MemoizedFormattedMessage
                  {...{
                    id: "appgenSettings.customDomains.addDialog.description",
                    defaultMessage:
                      "To use this feature, you need to own a domain and be able to manage its DNS records",
                    description: "Description for custom domain add dialog",
                  }}
                />
              ),
            }}
          />
        ),
      }}
    />
  );
  let yonder = (
    <span className="text-sm font-medium text-token-text-primary">
      {
        <MemoizedFormattedMessage
          {...{
            id: "appgenSettings.customDomains.addDialog.inputLabel",
            defaultMessage: "Custom domain",
            description: "Label for custom domain input",
          }}
        />
      }
    </span>
  );
  let zenith = haven.formatMessage({
    id: "appgenSettings.customDomains.addDialog.inputAriaLabel",
    defaultMessage: "Custom domain",
    description: "Accessible label for custom domain input",
  });
  let anvil = field.isPending,
    beacon = haven.formatMessage({
      id: "appgenSettings.customDomains.addDialog.placeholder",
      defaultMessage: "www.example.com",
      description: "Placeholder for custom domain input",
    });
  let crag = (event) => {
    jadeite(event.target.value);
  };
  let dome = (
    <DeferredUiU
      {...{
        children: (
          <label className="flex flex-col gap-1.5">
            {yonder}
            <input
              aria-label={zenith}
              autoFocus={true}
              className="w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 font-mono text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40"
              disabled={anvil}
              placeholder={beacon}
              spellCheck={false}
              type="text"
              value={ink}
              onChange={crag}
            />
          </label>
        ),
      }}
    />
  );
  let eddy = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.customDomains.addDialog.cancel",
        defaultMessage: "Cancel",
        description: "Cancel button label for custom domain add dialog",
      }}
    />
  );
  let fjord = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "ghost",
        disabled: field.isPending,
        type: "button",
        onClick: onClose,
        children: eddy,
      }}
    />
  );
  let glen = (
    <MemoizedFormattedMessage
      {...{
        id: "appgenSettings.customDomains.addDialog.submit",
        defaultMessage: "Add domain",
        description: "Submit button label for custom domain add dialog",
      }}
    />
  );
  let hearth = (
    <ReadLoginRouteQuerySnapshot
      {...{
        disabled: opal,
        loading: field.isPending,
        type: "submit",
        children: glen,
      }}
    />
  );
  let inlet = (
    <DeferredUiU
      {...{
        children: (
          <SetRemoteControlEnabledForHost
            {...{
              children: [fjord, hearth],
            }}
          />
        ),
      }}
    />
  );
  let jetty = (
    <DeferredUiB
      {...{
        as: "form",
        className: "gap-4 px-4 py-3",
        onSubmit: upland,
        children: [wisp, dome, inlet],
      }}
    />
  );
  return (
    <UsePointerSurfaceInteractionGate
      {...{
        open: true,
        shouldIgnoreClickOutside: root,
        showDialogClose: silk,
        size: "compact",
        onOpenChange: thorn,
        children: jetty,
      }}
    />
  );
}

var indigo,
  jade,
  kite,
  lemon = esmInit(() => {
    indigo = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    jade = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppInitialFL();
    ensureSettingsQueryAtomsInit();
    decayZoomPercent();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    collectUniqueMappedPresenceEntries();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Ilt_Init();
    conversationsSidebarMessages();
    CHATGPT_PRODUCT_ID();
    svgToDataUri();
    useEventCallback();
    AppInitialVO();
    isAppUri();
    ensurePluginMentionPromptInit();
    ensureAppScopeInit();
    AppInitialVC();
    ensureComposerEsm_FH_Init();
    AppInitialT5();
  });
