// Restored from ref/webview/assets/start-appgen-conversation-DD_Qpz5h.js
// Wave GA — full polished body from `start-appgen-conversation-DD_Qpz5h/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 16 (verified 51/67).
// Group 8/15
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { CodexAutomationFailureReason } from "../../analytics/codex-automation-failure-reason";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { localeMessagesAtom } from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_E4_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Sst_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  jsxRuntime as getJsxRuntime,
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { ensurePluginMentionPromptInit } from "../../browser/browser-use-helpers";
import { isAppUri } from "../../composer/app-plugin-uri";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { subagentActivityMessages } from "../../conversation/subagent-activity-messages";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconYj } from "../../icons/app-icon-yj";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import {
  ensureTrendingTopicsIconInit,
  TrendingTopicsIcon,
} from "../../icons/trending-topics-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { toMarkdownLink } from "../../markdown/to-markdown-link";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { SITES_OPENAI_BUNDLED_PLUGIN_ID } from "../../plugins/sites-openai-bundled-plugin-id";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { RelativeDateStringLabel } from "../../ui/relative-date-string-label";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { ensureImportSettingsCLInit } from "../../utils/wave-as-gap-ensure-inits";
import {
  appgenShareDialogT,
  ensureAppgenShareDialogInit,
} from "../appgen-share-dialog";

/** split companion stub */
const deferredConversationBJ: any = undefined;

export function startAppgenConversationR(
  eddy: unknown,
  fjord: unknown,
  glen: unknown,
) {
  let hearth = eddy.get(localeMessagesAtom),
    inlet;
  switch (glen.type) {
    case "create-asset":
      switch (glen.assetType) {
        case "document":
          inlet = hearth.formatMessage({
            id: "appgenPage.createMenu.documentPrompt",
            defaultMessage: "Create a document that …",
            description:
              "Prefill prompt for creating a document from the Library",
          });
          break;
        case "spreadsheet":
          inlet = hearth.formatMessage({
            id: "appgenPage.createMenu.spreadsheetPrompt",
            defaultMessage: "Create a spreadsheet that …",
            description:
              "Prefill prompt for creating a spreadsheet from the Library",
          });
          break;
        case "presentation":
          inlet = hearth.formatMessage({
            id: "appgenPage.createMenu.presentationPrompt",
            defaultMessage: "Create a presentation that …",
            description:
              "Prefill prompt for creating a presentation from the Library",
          });
          break;
        case "pdf":
          inlet = hearth.formatMessage({
            id: "appgenPage.createMenu.pdfPrompt",
            defaultMessage: "Create a PDF that …",
            description: "Prefill prompt for creating a PDF from the Library",
          });
          break;
        case "image":
          inlet = hearth.formatMessage({
            id: "appgenPage.createMenu.imagePrompt",
            defaultMessage: "Create an image of …",
            description:
              "Prefill prompt for creating an image from the Library",
          });
          break;
      }
      break;
    case "create":
      inlet = hearth.formatMessage({
        id: "appgenConversation.createPrompt",
        defaultMessage: "Create a website that …",
        description: "Prompt for starting a new site from the Sites page",
      });
      break;
    case "edit":
      inlet = hearth.formatMessage(
        {
          id: "appgenConversation.editPrompt",
          defaultMessage: "{siteMention} make these changes…",
          description:
            "Prompt for continuing work on an existing site from the Sites page",
        },
        {
          siteMention: deferredConversationBJ({
            projectId: glen.projectId,
            title: glen.projectTitle,
          }),
        },
      );
      break;
  }
  let jetty;
  switch (glen.type) {
    case "create":
      jetty = isBareAllowedPermission({
        defaultPrompt: inlet,
        pluginDisplayName: "Sites",
        pluginId: SITES_OPENAI_BUNDLED_PLUGIN_ID,
      });
      break;
    case "edit":
      jetty = `${inlet} `;
      break;
    case "create-asset":
      jetty = inlet;
      break;
  }
  fjord({
    activeProject: null,
    prefillPrompt: jetty,
    startInSidebar: true,
  });
  glen.type === "edit" &&
    glen.liveUrl != null &&
    ensureAppActionPayloadSchemasInit.dispatchMessage("open-in-browser", {
      initiator: "sites_library",
      openTarget: "in-app-browser",
      source: "manual",
      url: glen.liveUrl,
    });
}
export const startAppgenConversationN = esmInit(() => {
  strongMarkerFromOptions();
  hasInputItemsField();
  ensureComposerEsm_Sst_Init();
  ensureComposerEsm_E4_Init();
  findSidebarSectionElement();
  isAppUri();
  ensurePluginMentionPromptInit();
});
