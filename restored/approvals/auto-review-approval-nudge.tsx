// Restored from ref/webview/assets/auto-review-approval-nudge-BlX0A97p.js
// Wave FY — full polished body from `auto-review-approval-nudge-BlX0A97p/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 5 (verified 27/32).
// Wave FZ-support — PascalCase invalid JSX tags: readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, tokenInvalidated→TokenInvalidated.

import { CodexReferralConsumerDialog } from "../account/codex-referral-consumer-dialog";
import { appActionSidebarProjectRefSchema } from "../actions/app-action-payload-schemas";
import { CodexInAppBrowserToolbarActionType } from "../analytics/codex-in-app-browser-toolbar-action-type";
import { CodexPluginActionType } from "../analytics/codex-plugin-action-type-enum";
import { CodexPluginSource } from "../analytics/codex-plugin-source";
import { appScopeAtom, ensureAppScopeInit } from "../runtime/app-scope-runtime";
import { ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init } from "../composer/composer-esm-inits";
import { react } from "../boundaries/react-cjs-runtime";
import { toastAtom } from "../boundaries/toast-atom";
import { resolveCodexCloudAccess } from "../cloud/resolve-codex-cloud-access";
import { findProcessManagerRow } from "../desktop/find-process-manager-row";
import { isRemoteControlConnectionFailedError } from "../desktop/remote-control-connection-failed-error";
import { DEVELOPERS_OPENAI_COM_CODEX_CONCEPTS_SANDBOXING_AUTO_REVIEW_URL } from "../docs/codex-doc-urls";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../i18n/use-intl";
import { commonJsInit, esmInit } from "../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../settings/settings-ipc";
import { AnimatedPercentFillBar } from "../ui/animated-percent-fill-bar";
import { RelativeDateStringLabel } from "../ui/relative-date-string-label";
import { posixPathBasename } from "../utils/posix-path-basename";
import { ensureImportSettingsCLInit } from "../utils/wave-as-gap-ensure-inits";
import { buildConversationComposerControllerArgs } from "./build-conversation-composer-controller-args";

/** Wave FY unresolved companion (missing-export:hosts/token-invalidated.ts) */
const TokenInvalidated: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureUseIsRemoteHostInit@hosts/use-is-remote-host.ts) */
const AppInitialIb: any = undefined;
/** Wave FY unresolved companion (jsx-collision:getAccountInfoQueryConfig@cloud/account-info-query.ts) */
const AppInitialJq: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useChronicleSettingsSection@settings/use-chronicle-settings-section.ts) */
const AppInitialL: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
export function AutoReviewApprovalNudge({
  conversationId,
  hostId
}: { conversationId?: unknown; hostId?: unknown; [key: string]: unknown }) {
  let copper = CodexPluginActionType(appScopeAtom),
    delta = useIntl(),
    [echo, falcon] = alpha.useState(false),
    {
      agentMode,
      setAgentMode
    } = buildConversationComposerControllerArgs({
      conversationId,
      hostId
    }),
    {
      setPreferredNonFullAccessMode
    } = AppInitialJq({
      conversationId,
      hostId
    }),
    gamma = async () => {
      if (!echo) {
        falcon(true);
        try {
          await CodexPluginSource(copper, {
            conversationId,
            setAgentMode,
            setPreferredNonFullAccessMode,
            startAgentMode: agentMode
          });
        } catch (harbor) {
          appActionSidebarProjectRefSchema.error("Failed to enable Auto-review", {
            safe: {
              conversationId
            },
            sensitive: {
              error: harbor
            }
          });
          copper.get(toastAtom).danger(delta.formatMessage({
            id: "approvalRequest.autoReviewNudge.enableFailed",
            defaultMessage: "Could not enable Auto-review — try again",
            description: "Toast shown when enabling Auto-review from an approval request fails"
          }));
        } finally {
          falcon(false);
        }
      }
    };
  return <TokenInvalidated {...{
    children: <form className="flex flex-col" onSubmit={event => {
      event.preventDefault();
      gamma();
    }}>
            <div className="flex flex-col gap-5 px-4 pt-4 pb-5">
              <div className="flex items-center gap-2 text-sm text-token-description-foreground">
                {<CodexReferralConsumerDialog {...{
            className: "icon-sm shrink-0"
          }} />}
                {<MemoizedFormattedMessage {...{
            id: "approvalRequest.autoReviewNudge.title",
            defaultMessage: "Want fewer approval prompts?",
            description: "Title for the Auto-review offer shown after several manual approvals"
          }} />}
              </div>
              <div className="text-base leading-6">
                {<MemoizedFormattedMessage {...{
            id: "approvalRequest.autoReviewNudge.description",
            defaultMessage: "ChatGPT can automatically approve eligible actions while it works. This may use more credits. <a>Learn more.</a>",
            description: "Description for the Auto-review offer shown after several manual approvals",
            values: {
              a: indigo => <RelativeDateStringLabel key="auto-review-learn-more" className="cursor-interaction rounded-sm underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border" href={DEVELOPERS_OPENAI_COM_CODEX_CONCEPTS_SANDBOXING_AUTO_REVIEW_URL} initiator="open_in_browser_bridge" isBrowserSidebarEnabled={false}>
                            {indigo}
                          </RelativeDateStringLabel>
            }
          }} />}
              </div>
            </div>
            <div className="flex flex-wrap justify-end gap-2 border-t border-token-border/50 px-3 py-2">
              {<ReadLoginRouteQuerySnapshot {...{
          color: "outline",
          disabled: echo,
          size: "composer",
          onClick: () => {
            CodexInAppBrowserToolbarActionType(copper, conversationId);
          },
          children: <MemoizedFormattedMessage {...{
            id: "approvalRequest.autoReviewNudge.keepManual",
            defaultMessage: "Keep manual approvals",
            description: "Action to keep manual approvals and permanently dismiss the Auto-review offer"
          }} />
        }} />}
              {<ReadLoginRouteQuerySnapshot {...{
          autoFocus: true,
          color: "primary",
          disabled: echo,
          size: "composer",
          type: "submit",
          children: [<MemoizedFormattedMessage {...{
            id: "approvalRequest.autoReviewNudge.enable",
            defaultMessage: "Approve for me",
            description: "Action to enable Auto-review from a standalone approval offer"
          }} />, <AppInitialL variant="primary">{"⏎"}</AppInitialL>]
        }} />}
            </div>
          </form>
  }} />;
}
var alpha, bravo;
esmInit(() => {
  ensureComposerEsm_MT_Init();
  alpha = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  ensureImportSettingsCLInit();
  ensureComposerEsm_Ilt_Init();
  findProcessManagerRow();
  AnimatedPercentFillBar();
  ensureAppScopeInit();
  posixPathBasename();
  AppInitialIb();
  isRemoteControlConnectionFailedError();
  resolveCodexCloudAccess();
})();

/** Wave FY: bind no longer required after full body promote */
export function bindAutoReviewApprovalNudge(_next: unknown): void {}
export function ensureAutoReviewApprovalNudgeInit(): void {}
