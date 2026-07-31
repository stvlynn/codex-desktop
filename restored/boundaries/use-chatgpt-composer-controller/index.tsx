// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Stage-3 wave-14: Helper243 router + Helper208–242 surfaces + Value240–248 / Helper114–123 / Helper179–180 drained. Residual: client-defined widget mountain + ensures.
// AppScope atoms + __esm inits are bindable/open facades. No producer barrel.
// Flat boundary facade — vendored oversized chatgpt composer controller runtime module.

/* Browser globals referenced by the restored composer surface (DOM / Worker). */
const {
  DOMPoint,
  DeviceOrientationEvent,
  HTMLVideoElement,
  ImageBitmap,
  WebGL2RenderingContext,
  WebGLTexture,
  WorkerGlobalScope,
  history,
  parent,
  requestIdleCallback,
} = globalThis as typeof globalThis & Record<string, unknown>;
const __vite__mapDeps = (
  useChatgptComposerControllerParam7976,
  useChatgptComposerControllerParam7977 = __vite__mapDeps,
  useChatgptComposerControllerParam7978 = useChatgptComposerControllerParam7977.f ||
    (useChatgptComposerControllerParam7977.f = [
      "../../apps/dil-renderer",
      "../../runtime/rolldown-runtime.js",
      "../react-cjs-runtime",
      "../react-cjs-runtime",
    ]),
) => {
  return useChatgptComposerControllerParam7976.map((item) => {
    return useChatgptComposerControllerParam7978[item];
  });
};
import {
  rolldownRuntimeN,
  rolldownRuntimeS,
  rolldownRuntimeT,
} from "../../runtime/rolldown-runtime";
import { CHATGPT_DISCLAIMER_LINK_CLICKED_TYPE as appInitialO8 } from "../../analytics/chatgpt-disclaimer-link-clicked-type";
import { ChatgptSafetyLinkInteractionActionType as appInitialT8 } from "../../analytics/chatgpt-safety-link-interaction-action-type";
import { CHATGPT_SAFETY_LINK_INTERACTION_TYPE as appInitialE8 } from "../../analytics/chatgpt-safety-link-interaction-type";
import { ChatgptSafetyLinkProtectionType as appInitialN8 } from "../../analytics/chatgpt-safety-link-protection-type";
import { ChatgptSafetyLinkSurface as appInitialR8 } from "../../analytics/chatgpt-safety-link-surface";
import { ChatgptSafetyLinkType as appInitialI8 } from "../../analytics/chatgpt-safety-link-type";
import { CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_SHOWN_TYPE as AppInitialY6 } from "../../analytics/chatgpt-trusted-contact-enrollment-step-shown-type";
import { ChatgptTrustedContactEnrollmentStep as AppInitialJ6 } from "../../analytics/chatgpt-trusted-contact-enrollment-step";
import { ChatgptTrustedContactEntryPoint as AppInitialX6 } from "../../analytics/chatgpt-trusted-contact-entry-point";
import { CHATGPT_TRUSTED_CONTACT_NOTIFICATION_WARNING_ACTION_TAKEN_TYPE as AppInitialQ6 } from "../../analytics/chatgpt-trusted-contact-notification-warning-action-taken-type";
import { ChatgptTrustedContactNotificationWarningAction as AppInitialZ6 } from "../../analytics/chatgpt-trusted-contact-notification-warning-action";
import { CodexChatgptHandoffLifecycleAction as AppInitialDet } from "../../analytics/codex-chatgpt-handoff-lifecycle-action";
import { CODEX_CHATGPT_HANDOFF_LIFECYCLE_EVENT_TYPE as appInitialFet } from "../../analytics/codex-chatgpt-handoff-lifecycle-event-type";
import { getAnalyticsTopic as appInitialAI } from "../../analytics/get-analytics-topic";
import { logProductEvent as appInitialJ9 } from "../../analytics/log-product-event";
import { AppLogoFromHref as AppInitialBL } from "../../apps/app-logo-from-href";
import {
  collectUniqueAppgenApps as AppInitialO5,
  collectUniqueAppgenApps as _AppInitialO5,
} from "../../apps/collect-unique-appgen-apps";
import { toConnectorOrMcpTarget as appInitialAV } from "../../apps/to-connector-or-mcp-target";
import { resolveArtifactFileIcon as appInitialBH } from "../../artifact/resolve-artifact-file-icon";
import { getArtifactDownloadBlob as AppInitialGM } from "../../artifacts/get-artifact-download-blob";
import { getArtifactViewerFromOpen as appInitialFA } from "../../artifacts/get-artifact-viewer-from-open";
import {
  appScopeAtom as appInitialFft,
  ensureAppScopeHostInit as _appInitialMT,
  ensureAppScopeHostInit as appInitialMT,
  ensureAppScopeInit as appInitialIft,
  useAppScope as appInitialLT,
} from "../../boundaries/app-scope-runtime";
import {
  appLogoCacheAtom as AppInitialGP,
  chatgptConversationBranchAtom as _appInitialRP,
  chatgptConversationBranchAtom as appInitialRP,
  chatgptConversationCursorAtom as appInitialZP,
  chatgptConversationFlagsAtom as _appInitialLP,
  chatgptConversationFlagsAtom as appInitialLP,
  chatgptConversationLoadQueryAtom as AppInitialOP,
  chatgptConversationMetaAtom as appInitialIP,
  chatgptConversationPreviewAtom as AppInitialVP,
  chatgptConversationQueryAtomKP as AppInitialKP,
  chatgptConversationQueryAtomKP as _AppInitialKP,
  chatgptConversationServerIdAtom as appInitialFP,
  chatgptConversationStatusAtom as appInitialGP,
  chatgptConversationTitleAtom as appInitialHP,
  chatgptConversationsGateAtom as appInitialR7,
  chatgptThreadDerivedAtomBP as appInitialBP,
  createAppScopeDerivedAtom as appInitialZT,
  createAppScopeQueryAtom as appInitialAvt,
  createAppScopeSelectAtom as appInitialTvt,
  hasChatgptServerIdAtom as AppInitialUP,
  localeMessagesAtom as appInitialD4,
  useAppScopeAtomValue as appInitialIT,
  useAppScopeStore as _appInitialFT,
  useAppScopeStore as appInitialFT,
  useAppScopeValue as appInitialRT,
  useStepsProseAtom as appInitialL7,
  writingBlocksControllerAtom as appInitialCI,
} from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm_AG_Init as appInitialAG,
  ensureComposerEsm_AS_Init as AppInitialAS,
  ensureComposerEsm_B7_Init as appInitialB7,
  ensureComposerEsm_BF_Init as _appInitialBF,
  ensureComposerEsm_BF_Init as appInitialBF,
  ensureComposerEsm_BI_Init as _appInitialBI,
  ensureComposerEsm_BI_Init as appInitialBI,
  ensureComposerEsm_BU_Init as appInitialBU,
  ensureComposerEsm_B__Init as AppInitialB,
  ensureComposerEsm_B__Init as _AppInitialB,
  ensureComposerEsm_Bl_Init as AppInitialBl,
  ensureComposerEsm_CF_Init as _appInitialCF,
  ensureComposerEsm_CF_Init as appInitialCF,
  ensureComposerEsm_CU_Init as appInitialCU,
  ensureComposerEsm_Cd_Init as appInitialCd,
  ensureComposerEsm_DF_Init as appInitialDF,
  ensureComposerEsm_DN_Init as AppInitialDN,
  ensureComposerEsm_DP_Init as appInitialDP,
  ensureComposerEsm_Dc_Init as _appInitialDc,
  ensureComposerEsm_Dc_Init as appInitialDc,
  ensureComposerEsm_E4_Init as appInitialE4,
  ensureComposerEsm_Ec_Init as appInitialEc,
  ensureComposerEsm_F7_Init as appInitialF7,
  ensureComposerEsm_FH_Init as appInitialFH,
  ensureComposerEsm_FZ_Init as AppInitialFZ,
  ensureComposerEsm_Fc_Init as AppInitialFc,
  ensureComposerEsm_Fl_Init as appInitialFl,
  ensureComposerEsm_GI_Init as AppInitialGI,
  ensureComposerEsm_GS_Init as appInitialG,
  ensureComposerEsm_Hlt_Init as appInitialHlt,
  ensureComposerEsm_Hut_Init as appInitialHut,
  ensureComposerEsm_II_Init as appInitialII,
  ensureComposerEsm_I__Init as _appInitialI,
  ensureComposerEsm_I__Init as appInitialI,
  ensureComposerEsm_Ilt_Init as appInitialIlt,
  ensureComposerEsm_J0_Init as _appInitialJ0,
  ensureComposerEsm_J0_Init as appInitialJ0,
  ensureComposerEsm_JL_Init as appInitialJL,
  ensureComposerEsm_JN_Init as appInitialJN,
  ensureComposerEsm_Ju_Init as appInitialJu,
  ensureComposerEsm_K1_Init as appInitialK1,
  ensureComposerEsm_K9_Init as appInitialK9,
  ensureComposerEsm_KF_Init as appInitialKF,
  ensureComposerEsm_KM_Init as appInitialKM,
  ensureComposerEsm_Kg_Init as appInitialKg,
  ensureComposerEsm_LL_Init as appInitialLL,
  ensureComposerEsm_LR_Init as appInitialLR,
  ensureComposerEsm_Ll_Init as appInitialLl,
  ensureComposerEsm_Llt_Init as appInitialLlt,
  ensureComposerEsm_M0_Init as appInitialM0,
  ensureComposerEsm_MF_Init as AppInitialMF,
  ensureComposerEsm_MI_Init as _appInitialMI,
  ensureComposerEsm_MI_Init as appInitialMI,
  ensureComposerEsm_ML_Init as appInitialML,
  ensureComposerEsm_MT_Init as AppInitialMT,
  ensureComposerEsm_NA_Init as appInitialNA,
  ensureComposerEsm_NH_Init as AppInitialNH,
  ensureComposerEsm_Nl_Init as AppInitialNl,
  ensureComposerEsm_Nl_Init as _AppInitialNl,
  ensureComposerEsm_P5_Init as appInitialP5,
  ensureComposerEsm_PA_Init as appInitialPA,
  ensureComposerEsm_QN_Init as appInitialQN,
  ensureComposerEsm_Qc_Init as appInitialQc,
  ensureComposerEsm_Qct_Init as appInitialQct,
  ensureComposerEsm_Qtt_Init as appInitialQtt,
  ensureComposerEsm_RV_Init as appInitialRV,
  ensureComposerEsm_Rj_Init as AppInitialRj,
  ensureComposerEsm_S6_Init as AppInitial6,
  ensureComposerEsm_S8_Init as _appInitial8,
  ensureComposerEsm_S8_Init as appInitial8,
  ensureComposerEsm_Sd_Init as appInitialD,
  ensureComposerEsm_Sdt_Init as appInitialDt,
  ensureComposerEsm_Sp_Init as appInitialSp,
  ensureComposerEsm_Sut_Init as appInitialSut,
  ensureComposerEsm_TI_Init as _appInitialTI,
  ensureComposerEsm_TI_Init as appInitialTI,
  ensureComposerEsm_Tft_Init as appInitialTft,
  ensureComposerEsm_UL_Init as AppInitialUL,
  ensureComposerEsm_U__Init as AppInitialU,
  ensureComposerEsm_Uc_Init as AppInitialUc,
  ensureComposerEsm_Ul_Init as appInitialUl,
  ensureComposerEsm_Utt_Init as appInitialUtt,
  ensureComposerEsm_VL_Init as AppInitialVL,
  ensureComposerEsm_Wl_Init as appInitialWl,
  ensureComposerEsm_Wlt_Init as appInitialWlt,
  ensureComposerEsm_XF_Init as AppInitialXF,
  ensureComposerEsm_XP_Init as appInitialXP,
  ensureComposerEsm_YL_Init as _appInitialYL,
  ensureComposerEsm_YL_Init as appInitialYL,
  ensureComposerEsm_YS_Init as appInitialY,
  ensureComposerEsm_Ytt_Init as appInitialYtt,
  ensureComposerEsm_Z8_Init as AppInitialZ8,
  ensureComposerEsm_ZE_Init as AppInitialZE,
  ensureComposerEsm_ZI_Init as appInitialZI,
  ensureComposerEsm__F_Init as AppInitialF,
  ensureComposerEsm_a8_Init as AppInitialA8,
  ensureComposerEsm_aK_Init as appInitialAK,
  ensureComposerEsm_as_Init as AppInitialAs,
  ensureComposerEsm_b8_Init as appInitialB8,
  ensureComposerEsm_bl_Init as appInitialBl,
  ensureComposerEsm_cL_Init as appInitialCL,
  ensureComposerEsm_cP_Init as appInitialCP,
  ensureComposerEsm_cR_Init as appInitialCR,
  ensureComposerEsm_cS_Init as appInitialCS,
  ensureComposerEsm_drt_Init as appInitialDrt,
  ensureComposerEsm_eV_Init as appInitialEV,
  ensureComposerEsm_fV_Init as appInitialFV,
  ensureComposerEsm_fb_Init as appInitialFb,
  ensureComposerEsm_fc_Init as appInitialFc,
  ensureComposerEsm_gc_Init as appInitialGc,
  ensureComposerEsm_gl_Init as AppInitialGl,
  ensureComposerEsm_gst_Init as appInitialGst,
  ensureComposerEsm_h6_Init as appInitialH6,
  ensureComposerEsm_hB_Init as AppInitialHB,
  ensureComposerEsm_hL_Init as appInitialHL,
  ensureComposerEsm_i7_Init as appInitialI7,
  ensureComposerEsm_jP_Init as appInitialJP,
  ensureComposerEsm_jR_Init as appInitialJR,
  ensureComposerEsm_k5_Init as AppInitialK5,
  ensureComposerEsm_kF_Init as AppInitialKF,
  ensureComposerEsm_kI_Init as appInitialKI,
  ensureComposerEsm_kV_Init as appInitialKV,
  ensureComposerEsm_kd_Init as AppInitialKd,
  ensureComposerEsm_kl_Init as AppInitialKl,
  ensureComposerEsm_klt_Init as appInitialKlt,
  ensureComposerEsm_kut_Init as appInitialKut,
  ensureComposerEsm_lv_Init as AppInitialLv,
  ensureComposerEsm_n0_Init as appInitialN0,
  ensureComposerEsm_nP_Init as appInitialNP,
  ensureComposerEsm_nU_Init as appInitialNU,
  ensureComposerEsm_oL_Init as AppInitialOL,
  ensureComposerEsm_oR_Init as appInitialOR,
  ensureComposerEsm_odt_Init as appInitialOdt,
  ensureComposerEsm_ol_Init as AppInitialOl,
  ensureComposerEsm_pdt_Init as appInitialPdt,
  ensureComposerEsm_q0_Init as appInitialQ0,
  ensureComposerEsm_qI_Init as appInitialQI,
  ensureComposerEsm_qlt_Init as appInitialQlt,
  ensureComposerEsm_rK_Init as appInitialRK,
  ensureComposerEsm_rN_Init as appInitialRN,
  ensureComposerEsm_rnt_Init as appInitialRnt,
  ensureComposerEsm_s5_Init as AppInitialS5,
  ensureComposerEsm_s8_Init as appInitialS8,
  ensureComposerEsm_sG_Init as AppInitialSG,
  ensureComposerEsm_sst_Init as AppInitialSst,
  ensureComposerEsm_t7_Init as appInitialT7,
  ensureComposerEsm_tf_Init as AppInitialTf,
  ensureComposerEsm_tl_Init as AppInitialTl,
  ensureComposerEsm_tlt_Init as appInitialTlt,
  ensureComposerEsm_tst_Init as appInitialTst,
  ensureComposerEsm_udt_Init as appInitialUdt,
  ensureComposerEsm_umt_Init as appInitialUmt,
  ensureComposerEsm_w1_Init as appInitialW1,
  ensureComposerEsm_wct_Init as appInitialWct,
  ensureComposerEsm_xH_Init as appInitialXH,
  ensureComposerEsm_xI_Init as AppInitialXI,
  ensureComposerEsm_xJ_Init as appInitialXJ,
  ensureComposerEsm_yd_Init as AppInitialYd,
} from "../../boundaries/composer-esm-inits";
import {
  jsxRuntime as appInitialJvt,
  react as appInitialLvt,
  reactCompilerRuntime as _appInitialIvt,
  reactCompilerRuntime as appInitialIvt,
} from "../../boundaries/react-cjs-runtime";
import { Link as AppInitialF5 } from "../../boundaries/react-router-link";
import { ChatMessageContent as appInitialQd } from "../../chat/chat-message-content";
import { CHATGPT_CITATION_ID as AppInitialUF } from "../../chatgpt/chatgpt-citation-id";
import { CHATGPT_CONTENT_REFERENCE_ID as appInitialZF } from "../../chatgpt/chatgpt-content-reference-id";
import { CHATGPT_DIL_ID as AppInitialWF } from "../../chatgpt/chatgpt-dil-id";
import {
  CHATGPT_IMAGE_GROUP_ID as AppInitialGF,
  CHATGPT_IMAGE_GROUP_ID as _AppInitialGF,
} from "../../chatgpt/chatgpt-image-group-id";
import { flushChatgptConversation as AppInitialKS } from "../../chatgpt/flush-chatgpt-conversation";
import { isLocalChatgptId as appInitialVI } from "../../chatgpt/is-local-chatgpt-id";
import { loadPriorConversationsForHandoff as appInitialXF } from "../../chatgpt/load-prior-conversations-for-handoff";
import { scheduleWritingBlockUpdate as AppInitialJS } from "../../chatgpt/schedule-writing-block-update";
import { writeClipboardContents as appInitialPH } from "../../clipboard/write-clipboard-contents";
import { alignToneSectionIds as appInitialE7 } from "../../composer/align-tone-section-ids";
import { buildChatgptConversationMention as appInitialHJ } from "../../composer/build-chatgpt-conversation-mention";
import { buildComposerPromptWithContext as appInitialSt } from "../../composer/build-composer-prompt-with-context";
import { createComposerViewController as appInitialZj } from "../../composer/create-composer-view-controller";
import {
  EmailWritingBlockView as _appInitialIl,
  EmailWritingBlockView as appInitialIl,
} from "../../composer/email-writing-block-view";
import { INLINE_MENTION_GROUP_CLASS as AppInitialXL } from "../../composer/inline-mention-class-names";
import { InlineMention as appInitialQL } from "../../composer/inline-mention";
import { parseComposerSelectionBlocks as appInitialLst } from "../../composer/parse-composer-selection-blocks";
import { rewriteThreadUrlPlaceholder as AppInitialAF } from "../../composer/rewrite-thread-url-placeholder";
import { SelectedTextAttachments as AppInitialST } from "../../composer/selected-text-attachments";
import { stripPrivateUseMentionMarkers as appInitialGl } from "../../composer/strip-private-use-mention-markers";
import { toToneStylePayload as appInitialA7 } from "../../composer/to-tone-style-payload";
import {
  ToneSectionEditor as _appInitialHl,
  ToneSectionEditor as appInitialHl,
} from "../../composer/tone-section-editor";
import { updateToneSectionContent as appInitialPl } from "../../composer/update-tone-section-content";
import { WritingBlockRenderer as AppInitialMl } from "../../composer/writing-block-renderer";
import { ACTIVE_OPTION_ID_KEY as AppInitialS7 } from "../../config/active-option-id-key";
import {
  HANDOFF_KIND as AppInitialEF,
  HANDOFF_KIND as _AppInitialEF,
} from "../../config/handoff-kind";
import { isGroupPermissionId as appInitialYN } from "../../config/is-group-permission-id";
import { QueryStaleTimes as appInitialFdt } from "../../config/query-stale-times";
import { VERTICAL_TAB_CHAR as appInitialM6 } from "../../config/vertical-tab-char";
import { WRITING_MODE_ID as appInitialQ8 } from "../../config/writing-mode-id";
import { X_CODEX_BINARY_RESPONSE_HEADER as AppInitialKmt } from "../../config/x-codex-binary-response-header";
import { buildGeneratedImagesFromContentReference as AppInitialUI } from "../../content/build-generated-images-from-content-reference";
import { extractContentReferenceProducts as appInitialPI } from "../../content/extract-content-reference-products";
import { extractContentReferencesFromMessage as AppInitialCI } from "../../content/extract-content-references-from-message";
import { extractMapEntitiesFromContentReference as appInitialDI } from "../../content/extract-map-entities-from-content-reference";
import { extractNewsCarouselNavList as appInitialFI } from "../../content/extract-news-carousel-nav-list";
import { extractProductCitations as appInitialHI } from "../../content/extract-product-citations";
import { extractProductReviews as appInitialGI } from "../../content/extract-product-reviews";
import { extractWebpageContentReferences as appInitialEI } from "../../content/extract-webpage-content-references";
import {
  getContentReferenceAttributes as _appInitialF,
  getContentReferenceAttributes as appInitialF,
} from "../../content/get-content-reference-attributes";
import { hasDilField as AppInitialVI } from "../../content/has-dil-field";
import { mapLibraryFilesToFsPathLabels as appInitialYF } from "../../content/map-library-files-to-fs-path-labels";
import { normalizeChatgptAssetUrl as appInitialWI } from "../../content/normalize-chatgpt-asset-url";
import { parseWritingBlocks as appInitialSI } from "../../content/parse-writing-blocks";
import { pickContentReferenceLabel as AppInitialAI } from "../../content/pick-content-reference-label";
import { pickContentReferenceUrl as AppInitialSI } from "../../content/pick-content-reference-url";
import { activityItemStableId as appInitialBd } from "../../conversation/activity-item-stable-id";
import { AgentActivitySummaryPart as AppInitialVd } from "../../conversation/agent-activity-summary-part";
import { allocateStableActivityItemKeys as AppInitialHF } from "../../conversation/allocate-stable-activity-item-keys";
import { ApprovalRequestCard as AppInitialN } from "../../conversation/approval-request-card";
import { ArtifactReferenceLink as appInitialWL } from "../../conversation/artifact-reference-link";
import { asThreadId as appInitialVgt } from "../../conversation/as-thread-id";
import { AssistantMessageActions as AppInitialDl } from "../../conversation/assistant-message-actions";
import { BrowserSidebarGate as AppInitialSL } from "../../conversation/browser-sidebar-gate";
import { buildConversationTurnModels as AppInitialSF } from "../../conversation/build-conversation-turn-models";
import { buildSubagentActivityModel as appInitialJF } from "../../conversation/build-subagent-activity-model";
import { cancelConversationStream as AppInitialEP } from "../../conversation/cancel-conversation-stream";
import {
  chatgptMessageFallbackId as _appInitialIF,
  chatgptMessageFallbackId as appInitialIF,
} from "../../conversation/chatgpt-message-fallback-id";
import { classifyActivityItemGrouping as AppInitialOd } from "../../conversation/classify-activity-item-grouping";
import { clearMcpAppSidePanelState as AppInitialYB } from "../../conversation/clear-mcp-app-side-panel-state";
import { ConversationAsyncStatus as AppInitialPI } from "../../conversation/conversation-async-status";
import { ConversationRoleHeading as appInitialEf } from "../../conversation/conversation-role-heading";
import { ConversationTurnUnits as appInitialPc } from "../../conversation/conversation-turn-units";
import { conversationUnreadStatusSchema as AppInitialFI } from "../../conversation/conversation-unread-status-schema";
import {
  conversationWorkPath as appInitialX8,
  ensureConversationWorkRouteInit as appInitialC8,
} from "../../conversation/conversation-work-path";
import { createDelegatedThread as appInitialJT } from "../../conversation/create-delegated-thread";
import { detectVisualizationPlanMode as appInitialJd } from "../../conversation/detect-visualization-plan-mode";
import { EndResourceList as appInitialHc } from "../../conversation/end-resource-list";
import { GeneratedImageTabs as AppInitialTc } from "../../conversation/generated-image-tabs";
import { groupActivityItemsWithSourceIndex as appInitialSd } from "../../conversation/group-activity-items-with-source-index";
import {
  isChatgptMessageNode as AppInitialNI,
  isChatgptMessageNode as _AppInitialNI,
} from "../../conversation/is-chatgpt-message-node";
import { isConsumerLockdownActive as appInitialUP } from "../../conversation/is-consumer-lockdown-active";
import { isWaitingOrWorkingStatus as appInitialNF } from "../../conversation/is-waiting-or-working-status";
import {
  markConversationError as AppInitialYP,
  markConversationError as _AppInitialYP,
} from "../../conversation/mark-conversation-error";
import { markConversationIdle as AppInitialJP } from "../../conversation/mark-conversation-idle";
import { markConversationStreaming as AppInitialNF } from "../../conversation/mark-conversation-streaming";
import { McpAppFrameHost as AppInitialUB } from "../../conversation/mcp-app-frame-host";
import { McpAppFrameSurface as AppInitialPB } from "../../conversation/mcp-app-frame-surface";
import { McpAppHtmlHost as AppInitialDB } from "../../conversation/mcp-app-html-host";
import { patchConversationMessage as appInitialQP } from "../../conversation/patch-conversation-message";
import { PlanProgressDonut as AppInitialHc } from "../../conversation/plan-progress-donut";
import { rebaseConversationId as AppInitialZP } from "../../conversation/rebase-conversation-id";
import {
  setConversationBooleanFlag as AppInitialP,
  setConversationBooleanFlag as _AppInitialP,
  setConversationBooleanFlag as __AppInitialP,
  setConversationBooleanFlag as ___AppInitialP,
} from "../../conversation/set-conversation-boolean-flag";
import { setConversationSelectedModel as AppInitialBP } from "../../conversation/set-conversation-selected-model";
import { setConversationUnread as AppInitialTF } from "../../conversation/set-conversation-unread";
import {
  submitComposerPromptIfIdle as _appInitialN,
  submitComposerPromptIfIdle as appInitialN,
} from "../../conversation/submit-composer-prompt-if-idle";
import { submitToolCallResult as AppInitialAP } from "../../conversation/submit-tool-call-result";
import { submitUserComposerMessage as AppInitialIP } from "../../conversation/submit-user-composer-message";
import { syncLocalProjectForChat as AppInitialUS } from "../../conversation/sync-local-project-for-chat";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE as appInitialN7 } from "../../conversation/thread-detail-level-ids";
import {
  ToolCallItem as _appInitialZc,
  ToolCallItem as appInitialZc,
} from "../../conversation/tool-call-item";
import { updateElicitationOptionContent as AppInitialL7 } from "../../conversation/update-elicitation-option-content";
import { upsertConversationMessage as AppInitialNP } from "../../conversation/upsert-conversation-message";
import { UserImageAttachmentPreview as AppInitialRl } from "../../conversation/user-image-attachment-preview";
import { UserMessage as appInitialQu } from "../../conversation/user-message";
import { walkChatgptMessageTree as appInitialPF } from "../../conversation/walk-chatgpt-message-tree";
import { WebSearchSummaryRow as AppInitialRc } from "../../conversation/web-search-summary-row";
import { serializeElementSelection as appInitialVL } from "../../dom/serialize-element-selection";
import { HostApiError as appInitialIdt } from "../../errors/host-api-error";
import { areVisualizationFeatureGatesEnabled as AppInitialON } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { getCodexChatgptHandoffConfig as AppInitialOF } from "../../feature-gates/get-codex-chatgpt-handoff-config";
import { useCodexAppsList as appInitialCK } from "../../hooks/use-codex-apps-list";
import { useDeferredCleanupEffect as AppInitialKj } from "../../hooks/use-deferred-cleanup-effect";
import { useDynamicConfig as appInitialNlt } from "../../hooks/use-dynamic-config";
import { useEventCallback as appInitialJlt } from "../../hooks/use-event-callback";
import { usePreferredColorScheme as appInitialYU } from "../../hooks/use-preferred-color-scheme";
import { useSyncMcpAppInlineExpanded as appInitialFB } from "../../hooks/use-sync-mcp-app-inline-expanded";
import { useToneSectionSelection as appInitialVl } from "../../hooks/use-tone-section-selection";
import { LOCAL_HOST_ID as appInitialTot } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage as appInitialGft } from "../../i18n/memoized-formatted-message";
import {
  ensureIntlFormattersInit as _appInitialHft,
  ensureIntlFormattersInit as appInitialHft,
  useIntl as appInitialJft,
} from "../../i18n/use-intl";
import { AddContextSquareIcon as appInitialOlt } from "../../icons/add-context-square-icon";
import {
  AppIconB as _appInitialB,
  AppIconB as appInitialB,
} from "../../icons/app-icon-b";
import { AppIconCct as appInitialCct } from "../../icons/app-icon-cct";
import { AppIconcv as appInitialCv } from "../../icons/app-icon-cv";
import { AppIcondb as appInitialDb } from "../../icons/app-icon-db";
import { AppIconEP as appInitialEP } from "../../icons/app-icon-ep";
import { AppIconGg as appInitialGg } from "../../icons/app-icon-gg";
import { AppIconIR as appInitialIR } from "../../icons/app-icon-ir";
import { AppIconis as AppInitialIs } from "../../icons/app-icon-is";
import { AppIconJtt as appInitialJtt } from "../../icons/app-icon-jtt";
import { AppIconLV as appInitialLV } from "../../icons/app-icon-lv";
import { AppIconMA as appInitialMA } from "../../icons/app-icon-ma";
import { AppIconMH as appInitialMH } from "../../icons/app-icon-mh";
import { AppIconNk as appInitialNK } from "../../icons/app-icon-nk";
import { AppIconoG as AppInitialOG } from "../../icons/app-icon-og";
import { AppIconPZ as appInitialPZ } from "../../icons/app-icon-pz";
import { AppIconSR as appInitialSR } from "../../icons/app-icon-sr";
import { AppIcont0 as appInitialT0 } from "../../icons/app-icon-t0";
import { AppIconyl as appInitialYl } from "../../icons/app-icon-yl";
import {
  AppIconYlt as appInitialXlt,
  AppIconYlt as appInitialYlt,
} from "../../icons/app-icon-ylt";
import { TerminalFileIcon as appInitialSU } from "../../icons/terminal-file-icon";
import { appLogger as appInitialDdt } from "../../logging/app-logger";
import { codexDirectiveMarkedExtensions as appInitialQF } from "../../markdown/codex-directive-marked-extensions";
import { pluginMentionMessages as AppInitialKL } from "../../markdown/plugin-mention-messages";
import { resolveSafeMarkdownHref as AppInitialAL } from "../../markdown/resolve-safe-markdown-href";
import { rewriteFileCitationMarkers as AppInitialX8 } from "../../markdown/rewrite-file-citation-markers";
import { SafeMarkdown as appInitialON } from "../../markdown/safe-markdown";
import { SafeStreamingMarkdown as appInitialIN } from "../../markdown/safe-streaming-markdown";
import { withDecoratedMarkdownRenderers as AppInitialKI } from "../../markdown/with-decorated-markdown-renderers";
import { extractMcpAppDilFromContents as AppInitialCV } from "../../mcp/extract-mcp-app-dil-from-contents";
import {
  mcpCallToolResultSchema as appInitialOt,
  mcpResultSchema as appInitialEst,
} from "../../mcp/mcp-result-schemas";
import { collectModelOptions as AppInitialEI } from "../../models/collect-model-options";
import {
  findModelVersionOptionId as AppInitialOI,
  findModelVersionOptionId as _AppInitialOI,
} from "../../models/find-model-version-option-id";
import { toModelVersionOptionRef as AppInitialDI } from "../../models/to-model-version-option-ref";
import { usePrefersReducedMotion as appInitialAut } from "../../motion/use-prefers-reduced-motion";
import { activatePanelTab as appInitialIU } from "../../navigation/activate-panel-tab";
import {
  ensureAppShellAtomsInit as appInitialCot,
  ensureAppShellAtomsInit as appInitialI0,
  ensureAppShellAtomsInit as appInitialOpt,
  rightPanelController as appInitialA0,
} from "../../navigation/app-shell-atoms";
import { findPanelSideForTab as appInitialZU } from "../../navigation/find-panel-side-for-tab";
import { handleAnchorOpenHref as appInitialEnt } from "../../navigation/handle-anchor-open-href";
import {
  NavigationAllowContext as _appInitialIL,
  NavigationAllowContext as appInitialIL,
} from "../../navigation/navigation-allow-context";
import { openHrefViaBrowserBridge as appInitialTnt } from "../../navigation/open-href-via-browser-bridge";
import { panelControllerForSide as appInitialRU } from "../../navigation/panel-controller-for-side";
import { resolveLinkOpenBehavior as appInitialXtt } from "../../navigation/resolve-link-open-behavior";
import { useColdNavigate as appInitialNL } from "../../navigation/use-cold-navigate";
import { ensureDynamicScriptLoadInit as appInitialUut } from "../../runtime/ensure-dynamic-script-load-init";
import {
  ensureViteModulepreloadRuntime as appInitialGmt,
  vitePreload as appInitialWmt,
} from "../../runtime/vite-preload";
import { trustedContactShareHref as appInitialSF } from "../../safety/trusted-contact-share-href";
import { getAppearanceThemeMode as appInitialVU } from "../../settings/get-appearance-theme-mode";
import {
  ThreadResourceCard as _appInitialYI,
  ThreadResourceCard as appInitialYI,
} from "../../thread/thread-resource-card";
import { AppLogoImage as appInitialKG } from "../../ui/app-logo-image";
import {
  Button as appInitialBut,
  Button as appInitialYut,
} from "../../ui/button";
import {
  CopyButton as _appInitialAR,
  CopyButton as appInitialAR,
} from "../../ui/copy-button";
import { cx as appInitialWft } from "../../ui/cx";
import { DEFAULT_MOTION_TRANSITION as appInitialS1 } from "../../ui/default-motion-transition";
import { DetailDefinitionList as AppInitialZ } from "../../ui/detail-definition-list";
import { DialogClose as appInitialJ } from "../../ui/dialog-close";
import { DialogFooter as appInitialV } from "../../ui/dialog-footer";
import { DialogOverlay as appInitialQ } from "../../ui/dialog-overlay";
import {
  DialogSection as _appInitialU,
  DialogSection as appInitialU,
} from "../../ui/dialog-section";
import {
  DialogWithTrigger as _appInitialK,
  DialogWithTrigger as appInitialK,
} from "../../ui/dialog-with-trigger";
import { dismissTooltips as appInitialUlt } from "../../ui/dismiss-tooltips";
import { ElectronOnly as appInitialG1 } from "../../ui/electron-only";
import { KeyboardKeyBadge as AppInitialL } from "../../ui/keyboard-key-badge";
import { ListRowContent as appInitialXI } from "../../ui/list-row-content";
import { OptionalTooltip as appInitialBlt } from "../../ui/optional-tooltip";
import { PopoverContent as appInitialA } from "../../ui/popover-content";
import { PopoverMenu as appInitialXE } from "../../ui/popover-menu";
import { PopoverTitle as AppInitialJ } from "../../ui/popover-title";
import {
  PopoverTrigger as AppInitialM,
  PopoverTrigger as _AppInitialM,
} from "../../ui/popover-trigger";
import { RemoteHrefIcon as AppInitialHL } from "../../ui/remote-href-icon";
import { ShimmerText as appInitialBp } from "../../ui/shimmer-text";
import { Spinner as appInitialXut } from "../../ui/spinner";
import { StoreSetterChildren as AppInitialML } from "../../ui/store-setter-children";
import { UseApprovalKeyboardBindings as appInitialW } from "../../ui/use-approval-keyboard-bindings";
import {
  createLocalChatgptId as _appInitialLI,
  createLocalChatgptId as appInitialLI,
} from "../../utils/create-local-chatgpt-id";
import { decodeBase64ToBytes as AppInitialZct } from "../../utils/decode-base64-to-bytes";
import {
  downloadBlobAsFile as _appInitialOV,
  downloadBlobAsFile as appInitialOV,
} from "../../utils/download-blob-as-file";
import {
  identity as AppInitialWmt,
  identity as _appInitialRI,
  identity as appInitialRI,
  identity as appInitialVft,
} from "../../utils/identity";
import {
  isProtocolRelativeOrAbsoluteUrl as AppInitialJI,
  isProtocolRelativeOrAbsoluteUrl as _AppInitialJI,
} from "../../utils/is-protocol-relative-or-absolute-url";
import {
  joinColonKey as _appInitialH,
  joinColonKey as appInitialH,
} from "../../utils/join-colon-key";
import {
  nonEmptyStringOrNull as _appInitialRF,
  nonEmptyStringOrNull as appInitialRF,
} from "../../utils/non-empty-string-or-null";
import { normalizeLooseHref as appInitialNnt } from "../../utils/normalize-loose-href";
import {
  tryParseJsonText as _appInitialLF,
  tryParseJsonText as appInitialLF,
} from "../../utils/try-parse-json-text";
import { Lexer as appInitialPrt } from "../../vendor/marked";
import {
  zodBigInt as AppInitialPT,
  zodCustom as appInitialHT,
  zodDiscriminatedUnion as appInitialGT,
  zodEnum as appInitialDT,
  zodJsonValue as appInitialVT,
  zodLiteral as appInitialYT,
  zodNumber as appInitialBT,
  zodObject as appInitialXT,
  zodRecord as appInitialST,
  zodString as __appInitialCT,
  zodString as _appInitialCT,
  zodString as appInitialCT,
  zodTuple as appInitialWT,
  zodUnion as appInitialTT,
  zodUnknown as appInitialET,
} from "../../vendor/zod";
import { activityStatusMessages as appInitialYd } from "../../visualization/activity-status-messages";
import { soundOnN, soundOnT } from "../../icons/sound-on";
import {
  createResizeObserverN,
  createResizeObserverT,
} from "../../utils/create-resize-observer";
import {
  chartWidgetStoresC as _chartWidgetStoresC,
  chartWidgetStoresS as _chartWidgetStoresS,
  chartWidgetStoresT as _chartWidgetStoresT,
  chartWidgetStoresA,
  chartWidgetStoresB,
  chartWidgetStoresC,
  chartWidgetStoresD,
  chartWidgetStoresE,
  chartWidgetStoresF,
  chartWidgetStoresG,
  chartWidgetStoresH,
  chartWidgetStoresI,
  chartWidgetStoresL,
  chartWidgetStoresM,
  chartWidgetStoresN,
  chartWidgetStoresO,
  chartWidgetStoresP,
  chartWidgetStoresR,
  chartWidgetStoresS,
  chartWidgetStoresT,
  chartWidgetStoresU,
  chartWidgetStoresUnderscore,
  chartWidgetStoresV,
  chartWidgetStoresW,
  chartWidgetStoresX,
  chartWidgetStoresY,
} from "../chart-widget-stores";
import {
  turnSourcesModelA,
  turnSourcesModelI,
  turnSourcesModelN,
  turnSourcesModelO,
  turnSourcesModelR,
  turnSourcesModelS,
  turnSourcesModelT,
} from "../../conversation/turn-sources-model";
import {
  subagentPanelN,
  subagentPanelR,
  subagentPanelT,
} from "../../composer/subagent-panel";
import {
  pulsingDotClasses as pulsingDotModuleN,
  initPulsingDotModule as pulsingDotModuleT,
} from "../../styles/pulsing-dot";

import {
  useChatgptComposerControllerE,
  useChatgptComposerControllerD,
  useChatgptComposerControllerHelper18,
  useChatgptComposerControllerO,
} from "../../composer/use-chatgpt-composer-controller/parse-chatgpt-citation-attributes";
import {
  useChatgptComposerControllerG,
} from "../../composer/use-chatgpt-composer-controller/resolve-chatgpt-artifact-download-target";
import {
  _useChatgptComposerControllerP,
} from "../../composer/use-chatgpt-composer-controller/can-create-chatgpt-temporary-workspace-file";
import {
  useChatgptComposerControllerC,
  useChatgptComposerControllerHelper90,
  useChatgptComposerControllerS,
} from "../../composer/use-chatgpt-composer-controller/set-chatgpt-conversation-selection-target";
import {
  useChatgptComposerControllerJ,
  useChatgptComposerControllerM,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-composer-thread-and-turns";
import {
  _useChatgptComposerControllerS,
  _useChatgptComposerControllerC,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-pending-loading-indicator";
import {
  _useChatgptComposerControllerR,
  _useChatgptComposerControllerI,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-composer-conversation-chrome";
import {
  _useChatgptComposerControllerN,
  _useChatgptComposerControllerT,
} from "../../composer/use-chatgpt-composer-controller/seed-chatgpt-composer-conversation";
import {
  useChatgptComposerControllerP,
  useChatgptComposerControllerL,
  useChatgptComposerControllerR,
  useChatgptComposerControllerI,
  ensureChatgptComposerControllerHandoffUiInit,
} from "../../composer/use-chatgpt-composer-controller/continue-chatgpt-temporary-chat";
import {
  handoffOutcomeAtom as useChatgptComposerControllerValue3,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-composer-controller-handoff-atoms";
import {
  useChatgptComposerControllerT,
} from "../../composer/use-chatgpt-composer-controller/track-chatgpt-composer-download";
import {
  useChatgptComposerControllerW,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-composer-controller-profile-init";
import {
  useChatgptComposerControllerH,
  useChatgptComposerControllerUnderscore,
  _useChatgptComposerControllerM,
  resolveChatgptArtifactTargetFromReference as a_,
} from "../../composer/use-chatgpt-composer-controller/open-chatgpt-artifact-in-writing-blocks";

export {
  useChatgptComposerControllerE,
  useChatgptComposerControllerD,
  useChatgptComposerControllerO,
  useChatgptComposerControllerG,
  _useChatgptComposerControllerP,
  useChatgptComposerControllerC,
  useChatgptComposerControllerS,
  useChatgptComposerControllerJ,
  useChatgptComposerControllerM,
  _useChatgptComposerControllerS,
  _useChatgptComposerControllerC,
  _useChatgptComposerControllerR,
  _useChatgptComposerControllerI,
  _useChatgptComposerControllerN,
  _useChatgptComposerControllerT,
  useChatgptComposerControllerP,
  useChatgptComposerControllerL,
  useChatgptComposerControllerR,
  useChatgptComposerControllerI,
  useChatgptComposerControllerT,
  useChatgptComposerControllerW,
  useChatgptComposerControllerH,
  useChatgptComposerControllerUnderscore,
  _useChatgptComposerControllerM,
};

import {
  $S,
  useChatgptComposerControllerHelper295,
  useChatgptComposerControllerHelper296,
  useChatgptComposerControllerHelper297,
  useChatgptComposerControllerHelper298,
  useChatgptComposerControllerHelper299,
  useChatgptComposerControllerHelper300,
  useChatgptComposerControllerHelper301,
  useChatgptComposerControllerHelper302,
  useChatgptComposerControllerHelper303,
  useChatgptComposerControllerHelper304,
  useChatgptComposerControllerHelper306,
  useChatgptComposerControllerHelper309,
  useChatgptComposerControllerHelper310,
  useChatgptComposerControllerHelper311,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-browser-conversation-row-predicates";
import {
  useChatgptComposerControllerHelper305,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-browser-conversation-item";
import {
  useChatgptComposerControllerHelper307,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-reasoning-group";
import {
  useChatgptComposerControllerHelper308,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-turn-message-actions";
import {
  useChatgptComposerControllerHelper312,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-conversation-row-footer";
import {
  _useChatgptComposerControllerL,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-composer-browser-conversation-row";
import {
  _useChatgptComposerControllerA,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-browser-conversation-banner";
import {
  useChatgptComposerControllerF,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-composer-controller-core-init";
import {
  useChatgptComposerControllerN,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-composer-controller-flags-init";

export {
  useChatgptComposerControllerHelper295,
  useChatgptComposerControllerHelper296,
  useChatgptComposerControllerHelper297,
  useChatgptComposerControllerHelper298,
  useChatgptComposerControllerHelper299,
  useChatgptComposerControllerHelper300,
  useChatgptComposerControllerHelper301,
  useChatgptComposerControllerHelper302,
  useChatgptComposerControllerHelper303,
  useChatgptComposerControllerHelper304,
  useChatgptComposerControllerHelper305,
  useChatgptComposerControllerHelper306,
  useChatgptComposerControllerHelper307,
  useChatgptComposerControllerHelper308,
  useChatgptComposerControllerHelper309,
  useChatgptComposerControllerHelper310,
  useChatgptComposerControllerHelper311,
  useChatgptComposerControllerHelper312,
  _useChatgptComposerControllerL,
  _useChatgptComposerControllerA,
  useChatgptComposerControllerF,
  useChatgptComposerControllerN,
};

import {
  useChatgptComposerControllerHelper104,
  useChatgptComposerControllerHelper105,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-conversation-image-download";
import {
  useChatgptComposerControllerHelper257,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-branch-source-divider";
import {
  useChatgptComposerControllerHelper258,
  useChatgptComposerControllerHelper259,
  useChatgptComposerControllerHelper260,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-codex-handoff-continued-link";
import {
  useChatgptComposerControllerHelper262,
  useChatgptComposerControllerHelper263,
  useChatgptComposerControllerHelper264,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-reasoning-chrome-helpers";
import {
  useChatgptComposerControllerHelper285,
  useChatgptComposerControllerHelper286,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-subagent-activity-labels";
import {
  useChatgptComposerControllerHelper287,
  useChatgptComposerControllerHelper288,
  useChatgptComposerControllerHelper289,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-tool-approval-helpers";
import {
  useChatgptComposerControllerHelper290,
  useChatgptComposerControllerHelper291,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-turn-sources-from-items";
import {
  useChatgptComposerControllerHelper292,
  useChatgptComposerControllerHelper293,
  useChatgptComposerControllerHelper294,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-generated-image-item";
import {
  ReplyArrowIcon,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-reply-arrow-icon";
import {
  useChatgptComposerControllerB,
  useChatgptComposerControllerV,
  useChatgptComposerControllerX,
  useChatgptComposerControllerY,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-composer-controller-context-inits";

export {
  useChatgptComposerControllerHelper104,
  useChatgptComposerControllerHelper105,
  useChatgptComposerControllerHelper257,
  useChatgptComposerControllerHelper258,
  useChatgptComposerControllerHelper259,
  useChatgptComposerControllerHelper260,
  useChatgptComposerControllerHelper262,
  useChatgptComposerControllerHelper263,
  useChatgptComposerControllerHelper264,
  useChatgptComposerControllerHelper285,
  useChatgptComposerControllerHelper286,
  useChatgptComposerControllerHelper287,
  useChatgptComposerControllerHelper288,
  useChatgptComposerControllerHelper289,
  useChatgptComposerControllerHelper290,
  useChatgptComposerControllerHelper291,
  useChatgptComposerControllerHelper292,
  useChatgptComposerControllerHelper293,
  useChatgptComposerControllerHelper294,
  useChatgptComposerControllerB,
  useChatgptComposerControllerV,
  useChatgptComposerControllerX,
  useChatgptComposerControllerY,
};

import {
  useChatgptComposerControllerHelper19,
  useChatgptComposerControllerHelper20,
  useChatgptComposerControllerHelper21,
  useChatgptComposerControllerHelper22,
  useChatgptComposerControllerHelper23,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-turn-sources-footer";
import {
  chatgptBrowserHostContext,
  useChatgptComposerControllerHelper31,
  setEnsureChatgptBrowserHostContextInit,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-browser-host-context";
import { chatgptComposerStreamingContext } from "../../composer/use-chatgpt-composer-controller/chatgpt-composer-streaming-context";
import { useChatgptComposerControllerHelper65 } from "../../composer/use-chatgpt-composer-controller/chatgpt-composer-confirmation-link";
import {
  useChatgptComposerControllerHelper246,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-markdown-directives-registry";
import { useChatgptComposerControllerHelper247 } from "../../composer/use-chatgpt-composer-controller/chatgpt-safe-streaming-markdown";
import {
  useChatgptComposerControllerHelper248,
  useChatgptComposerControllerHelper249,
  useChatgptComposerControllerHelper250,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-moderation-disclaimers";
import { useChatgptComposerControllerHelper255 } from "../../composer/use-chatgpt-composer-controller/chatgpt-assistant-message-content";
import {
  setChatgptContentReferenceFootnoteRenderer,
  useChatgptComposerControllerHelper256,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-content-reference-footnote-registry";
import { useChatgptComposerControllerHelper261 } from "../../composer/use-chatgpt-composer-controller/chatgpt-reasoning-item-content";
import {
  useChatgptComposerControllerHelper265,
  useChatgptComposerControllerHelper266,
  useChatgptComposerControllerHelper267,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-reasoning-tool-icons";
import { useChatgptComposerControllerHelper269 } from "../../composer/use-chatgpt-composer-controller/chatgpt-safety-review-banner";
import {
  _useChatgptComposerControllerF,
  useChatgptComposerControllerHelper284,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-subagent-activity-panel";
import {
  useChatgptComposerControllerHelper275,
  useChatgptComposerControllerHelper276,
  useChatgptComposerControllerHelper277,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-subagent-side-panel";
import {
  useChatgptComposerControllerHelper278,
  useChatgptComposerControllerHelper279,
  useChatgptComposerControllerHelper280,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-subagent-list-row-helpers";
import {
  useChatgptComposerControllerHelper281,
  useChatgptComposerControllerHelper282,
  useChatgptComposerControllerHelper283,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-subagent-detail-view";

import {
  useChatgptComposerControllerHelper24,
  useChatgptComposerControllerHelper25,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-markdown-citation-directive";
import {
  $l,
  useChatgptComposerControllerHelper26,
  useChatgptComposerControllerHelper27,
  useChatgptComposerControllerHelper28,
  useChatgptComposerControllerHelper29,
  useChatgptComposerControllerHelper30,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-citation-source-helpers";
import {
  useChatgptComposerControllerHelper32,
  useChatgptComposerControllerHelper33,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-writing-block-directive";
import {
  useChatgptComposerControllerHelper34,
  useChatgptComposerControllerHelper35,
  useChatgptComposerControllerHelper36,
  useChatgptComposerControllerHelper37,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-writing-block-metadata";
import {
  useChatgptComposerControllerHelper38,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-dil-action-dispatch";
import {
  ensureChatgptDilActionSchemasInit as useChatgptComposerControllerValue54,
  useChatgptComposerControllerHelper39,
  useChatgptComposerControllerHelper40,
  useChatgptComposerControllerHelper41,
  useChatgptComposerControllerHelper42,
  useChatgptComposerControllerHelper43,
  useChatgptComposerControllerHelper44,
  useChatgptComposerControllerHelper45,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-dil-action-helpers";

import {
  useChatgptComposerControllerHelper93,
  useChatgptComposerControllerHelper102,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-dil-widget-directive";
import {
  useChatgptComposerControllerHelper94,
  useChatgptComposerControllerHelper95,
  useChatgptComposerControllerHelper96,
  useChatgptComposerControllerHelper97,
  useChatgptComposerControllerHelper98,
  useChatgptComposerControllerHelper99,
  useChatgptComposerControllerHelper100,
  useChatgptComposerControllerHelper101,
  useChatgptComposerControllerHelper103,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-dil-widget-helpers";
import {
  useChatgptComposerControllerHelper106,
  useChatgptComposerControllerHelper107,
  useChatgptComposerControllerHelper108,
  useChatgptComposerControllerHelper109,
  useChatgptComposerControllerHelper110,
  useChatgptComposerControllerHelper111,
  useChatgptComposerControllerHelper112,
  useChatgptComposerControllerHelper113,
  ensureChatgptImageGroupUdtInit as useChatgptComposerControllerValue112,
  ensureChatgptImageGroupDirectiveInit as useChatgptComposerControllerValue116,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-image-group-directive";
import {
  useChatgptComposerControllerHelper244,
  useChatgptComposerControllerHelper245,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-content-reference-directive";

import { useChatgptComposerControllerHelper46 } from "../../composer/use-chatgpt-composer-controller/chatgpt-dil-geolocation-permission";
import { useChatgptComposerControllerHelper52 } from "../../composer/use-chatgpt-composer-controller/chatgpt-dil-ecosystem-widget";
import {
  useChatgptComposerControllerHelper56,
  chatgptDilMapboxAccessToken as useChatgptComposerControllerValue77,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-dil-ecosystem-widget-launch";
import {
  useChatgptComposerControllerHelper64,
  useChatgptComposerControllerHelper66,
  useChatgptComposerControllerHelper67,
  useChatgptComposerControllerHelper68,
  useChatgptComposerControllerHelper70,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-content-reference-cards";
import {
  useChatgptComposerControllerHelper73,
  useChatgptComposerControllerHelper74,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-content-reference-link-card";
import {
  useChatgptComposerControllerHelper75,
  useChatgptComposerControllerHelper76,
  useChatgptComposerControllerHelper77,
  useChatgptComposerControllerHelper78,
  $d,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-news-reference-helpers";
import { useChatgptComposerControllerHelper79 } from "../../composer/use-chatgpt-composer-controller/chatgpt-news-carousel-references";
import {
  useChatgptComposerControllerHelper91,
  useChatgptComposerControllerHelper92,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-entity-tab-launch";

import {
  useChatgptComposerControllerA,
  useChatgptComposerControllerK,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-conversation-updates-mount";

import {
  _useChatgptComposerControllerD,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-composer-controller-aux-init-d";
import {
  ensureChatgptComposerMarkdownSurfaceInit,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-composer-markdown-surface-init";

import {
  _useChatgptComposerControllerO,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-composer-controller-aux-init-o";
import {
  useChatgptComposerControllerU,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-composer-controller-aux-init-u";

import {
  useChatgptComposerControllerValue249,
  useChatgptComposerControllerValue250,
  useChatgptComposerControllerValue251,
  useChatgptComposerControllerValue252,
  _v,
} from "../chatgpt-mapbox-gl-runtime";

import {
  ensureChatgptPieChartWidgetInit as useChatgptComposerControllerValue197,
  useChatgptComposerControllerHelper162,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-pie-chart-widget";
const useChatgptComposerControllerValue182 = () => {};
import {
  ensureChatgptSportsLabelSurfaceInit as useChatgptComposerControllerValue236,
  ensureChatgptStockSurfaceInit as useChatgptComposerControllerValue239,
  i_ as chatgptEntityNavPeerInit,
  R_ as chatgptEntityRichCardPeerInit,
  J_ as chatgptForecastSurfacePeerInit,
  $g as useChatgptComposerControllerFollowupQueryChip,
  M_ as useChatgptComposerControllerFileContentReference,
  H_ as useChatgptComposerControllerEntityRichCard,
  Y_ as useChatgptComposerControllerForecastCard,
  E_ as useChatgptComposerControllerSafeContentReferenceHref,
  O_ as useChatgptComposerControllerContentReferenceAnchor,
  D_ as useChatgptComposerControllerMapsAttributionPeerInit,
  j_ as useChatgptComposerControllerLocationSearchPeerInit,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-forecast-file-content-references";
import {
  useChatgptComposerControllerHelper182,
  ensureChatgptMapContentReferenceInit as useChatgptComposerControllerValue273,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-map-content-reference";

import {
  useChatgptComposerControllerHelper114,
  useChatgptComposerControllerHelper119,
  useChatgptComposerControllerHelper121,
  useChatgptComposerControllerHelper122,
  useChatgptComposerControllerHelper123,
  slot122 as useChatgptComposerControllerValue122,
  slot125 as useChatgptComposerControllerValue125,
  slot128 as useChatgptComposerControllerValue128,
  slot131 as useChatgptComposerControllerValue131,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-product-carousel-references";
import {
  useChatgptComposerControllerHelper179,
  useChatgptComposerControllerHelper180,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-code-link-title-citations";
import {
  useChatgptComposerControllerHelper181,
  slot242 as useChatgptComposerControllerValue242,
  slot248 as useChatgptComposerControllerValue248,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-location-search-attribution";
import {
  useChatgptComposerControllerHelper208,
  useChatgptComposerControllerHelper223,
  useChatgptComposerControllerHelper236,
  useChatgptComposerControllerHelper241,
  useChatgptComposerControllerHelper242,
  slot278 as useChatgptComposerControllerValue278,
  slot287 as useChatgptComposerControllerValue287,
  slot291 as useChatgptComposerControllerValue291,
  slot294 as useChatgptComposerControllerValue294,
  slot296 as useChatgptComposerControllerValue296,
  slot299 as useChatgptComposerControllerValue299,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-product-sports-stock-surfaces";
import {
  useChatgptComposerControllerHelper243,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-content-reference-router";
import {
  setChatgptContentReferenceRouterPeers,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-content-reference-router-peers";


import {
  chatgptDilRendererLazy as $f,
  chatgptDilReact as useChatgptComposerControllerValue104,
  chatgptDilWidgetNodeSchema as useChatgptComposerControllerValue106,
  chatgptDilRendererCustomCss as useChatgptComposerControllerValue107,
  ensureChatgptCitationChromePeerInit as useChatgptComposerControllerValue40,
  ensureChatgptBrowserHostAppscopePeerInit as useChatgptComposerControllerValue45,
  ensureChatgptDilLazyRendererInit as useChatgptComposerControllerValue108,
  ensureChatgptDilLazyRendererPeerInit as useChatgptComposerControllerValue111,
  ensureChatgptContentReferenceFootnotePeerInit as useChatgptComposerControllerValue134,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-composer-markdown-fanin-peers";
import {
  setChatgptMarkdownRegistryPeerInits,
} from "../../composer/use-chatgpt-composer-controller/chatgpt-markdown-registry-peer-inits";
import {
  chatgptHiddenContentReferenceTypes as useChatgptComposerControllerValue302,
} from "../../composer/use-chatgpt-composer-controller/ensure-chatgpt-markdown-directives-registry-init";




import { rolldownRuntimeN as __wave8RolldownN } from "../../runtime/rolldown-runtime";
const useChatgptComposerControllerValue64 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue68 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue75 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue78 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue81 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue85 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue88 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue91 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue92 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue95 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue98 = __wave8RolldownN(() => {});
const useChatgptComposerControllerValue102 = __wave8RolldownN(() => {});


export {
  useChatgptComposerControllerHelper19,
  useChatgptComposerControllerHelper31,
  useChatgptComposerControllerHelper65,
  useChatgptComposerControllerHelper247,
  useChatgptComposerControllerHelper248,
  useChatgptComposerControllerHelper255,
  useChatgptComposerControllerHelper261,
  useChatgptComposerControllerHelper269,
  useChatgptComposerControllerHelper284,
  _useChatgptComposerControllerF,
};

export {
  useChatgptComposerControllerHelper24,
  useChatgptComposerControllerHelper32,
  useChatgptComposerControllerHelper38,
  useChatgptComposerControllerValue54,
};

export {
  useChatgptComposerControllerHelper93,
  useChatgptComposerControllerHelper102,
  useChatgptComposerControllerHelper106,
  useChatgptComposerControllerHelper107,
  useChatgptComposerControllerHelper244,
  useChatgptComposerControllerValue112,
  useChatgptComposerControllerValue116,
  $f,
  $f as chatgptDilRendererLazy,
  useChatgptComposerControllerValue77,
  useChatgptComposerControllerValue77 as chatgptDilMapboxAccessToken,
  useChatgptComposerControllerValue104,
  useChatgptComposerControllerValue104 as chatgptDilReact,
  useChatgptComposerControllerValue106,
  useChatgptComposerControllerValue106 as chatgptDilWidgetNodeSchema,
  useChatgptComposerControllerValue107,
  useChatgptComposerControllerValue107 as chatgptDilRendererCustomCss,
  useChatgptComposerControllerHelper46,
  useChatgptComposerControllerHelper52,
  useChatgptComposerControllerHelper56,
  useChatgptComposerControllerHelper79,
  useChatgptComposerControllerHelper91,
  useChatgptComposerControllerHelper92,
  useChatgptComposerControllerHelper243,
};


var useChatgptComposerControllerValue41,
  useChatgptComposerControllerValue42,
  useChatgptComposerControllerValue43 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue41 = rolldownRuntimeS(appInitialLvt(), 1);
    useChatgptComposerControllerValue42 = chatgptBrowserHostContext;
      useChatgptComposerControllerValue41.createContext(null);
  });
setEnsureChatgptBrowserHostContextInit(useChatgptComposerControllerValue43);


function useChatgptComposerControllerHelper124(
  useChatgptComposerControllerParam4001,
) {
  let { chart, intl } = useChatgptComposerControllerParam4001,
    useChatgptComposerControllerValue9877,
    useChatgptComposerControllerValue9878,
    useChatgptComposerControllerValue9879;
  useChatgptComposerControllerValue9879 = Symbol.for(
    "react.early_return_sentinel",
  );
  bb0: {
    let useChatgptComposerControllerValue15179 =
      useChatgptComposerControllerHelper126(chart, intl);
    if (useChatgptComposerControllerValue15179.length === 0) {
      useChatgptComposerControllerValue9879 = null;
      break bb0;
    }
    useChatgptComposerControllerValue9877 = "sr-only";
    useChatgptComposerControllerValue9878 =
      useChatgptComposerControllerValue15179.map(
        useChatgptComposerControllerHelper125,
      );
  }
  if (
    useChatgptComposerControllerValue9879 !==
    Symbol.for("react.early_return_sentinel")
  )
    return useChatgptComposerControllerValue9879;
  return (
    <ul className={useChatgptComposerControllerValue9877}>
      {useChatgptComposerControllerValue9878}
    </ul>
  );
}
function useChatgptComposerControllerHelper125(
  useChatgptComposerControllerParam11145,
) {
  return (
    <li key={useChatgptComposerControllerParam11145}>
      {useChatgptComposerControllerParam11145}
    </li>
  );
}
function useChatgptComposerControllerHelper126(
  useChatgptComposerControllerParam3877,
  useChatgptComposerControllerParam3878,
) {
  return useChatgptComposerControllerParam3877.chartType === "pie"
    ? useChatgptComposerControllerParam3877.data
        .map((item) => {
          let useChatgptComposerControllerValue14543 =
              useChatgptComposerControllerHelper128(
                item[useChatgptComposerControllerParam3877.valueKey],
              ),
            useChatgptComposerControllerValue14544 =
              useChatgptComposerControllerHelper129(
                item,
                useChatgptComposerControllerParam3877.nameKey,
              );
          return useChatgptComposerControllerValue14543 == null ||
            useChatgptComposerControllerValue14544 == null
            ? null
            : `${useChatgptComposerControllerValue14544}: ${$p(useChatgptComposerControllerValue14543, useChatgptComposerControllerParam3877.series[0], useChatgptComposerControllerParam3878)}`;
        })
        .filter((item) => {
          return item != null;
        })
    : useChatgptComposerControllerParam3877.data
        .map((item) => {
          let useChatgptComposerControllerValue12624 =
            useChatgptComposerControllerHelper129(
              item,
              useChatgptComposerControllerParam3877.xKey,
            );
          if (useChatgptComposerControllerValue12624 == null) return null;
          let useChatgptComposerControllerValue12625 =
            useChatgptComposerControllerParam3877.series
              .map((_item) => {
                let useChatgptComposerControllerValue15400 =
                  useChatgptComposerControllerHelper128(item[_item.dataKey]);
                return useChatgptComposerControllerValue15400 == null
                  ? null
                  : `${_item.label} ${$p(useChatgptComposerControllerValue15400, _item, useChatgptComposerControllerParam3878)}`;
              })
              .filter((_item) => {
                return _item != null;
              });
          return useChatgptComposerControllerValue12625.length > 0
            ? `${useChatgptComposerControllerValue12624}: ${useChatgptComposerControllerValue12625.join(", ")}`
            : null;
        })
        .filter((item) => {
          return item != null;
        });
}
function $p(
  useChatgptComposerControllerParam9580,
  useChatgptComposerControllerParam9581,
  useChatgptComposerControllerParam9582,
) {
  let useChatgptComposerControllerValue15501 =
    useChatgptComposerControllerHelper127(
      useChatgptComposerControllerParam9580,
      useChatgptComposerControllerParam9581?.valueFormat,
      useChatgptComposerControllerParam9582,
    );
  return `${useChatgptComposerControllerParam9581?.valuePrefix ?? ""}${useChatgptComposerControllerValue15501}${useChatgptComposerControllerParam9581?.valueSuffix ?? ""}`;
}
function useChatgptComposerControllerHelper127(
  useChatgptComposerControllerParam6582,
  useChatgptComposerControllerParam6583,
  useChatgptComposerControllerParam6584,
) {
  switch (useChatgptComposerControllerParam6583) {
    case "integer":
      return useChatgptComposerControllerParam6584.formatNumber(
        useChatgptComposerControllerParam6582,
        {
          maximumFractionDigits: 0,
        },
      );
    case "raw":
      return String(useChatgptComposerControllerParam6582);
    case "compact":
    case undefined:
      return useChatgptComposerControllerParam6584.formatNumber(
        useChatgptComposerControllerParam6582,
        {
          compactDisplay: "short",
          maximumFractionDigits: 1,
          notation: "compact",
        },
      );
  }
}
function useChatgptComposerControllerHelper128(
  useChatgptComposerControllerParam10772,
) {
  return typeof useChatgptComposerControllerParam10772 == "number" &&
    Number.isFinite(useChatgptComposerControllerParam10772)
    ? useChatgptComposerControllerParam10772
    : null;
}
function useChatgptComposerControllerHelper129(
  useChatgptComposerControllerParam8329,
  useChatgptComposerControllerParam8330,
) {
  let useChatgptComposerControllerValue14466 =
    useChatgptComposerControllerParam8329[
      useChatgptComposerControllerParam8330
    ];
  if (typeof useChatgptComposerControllerValue14466 == "string") {
    let useChatgptComposerControllerValue15898 =
      useChatgptComposerControllerValue14466.trim();
    return useChatgptComposerControllerValue15898.length > 0
      ? useChatgptComposerControllerValue15898
      : null;
  }
  return typeof useChatgptComposerControllerValue14466 == "number" ||
    typeof useChatgptComposerControllerValue14466 == "boolean"
    ? String(useChatgptComposerControllerValue14466)
    : null;
}
var useChatgptComposerControllerValue135,
  useChatgptComposerControllerValue136,
  useChatgptComposerControllerValue137 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue135 = appInitialIvt();
    useChatgptComposerControllerValue136 = appInitialJvt();
  });
function useChatgptComposerControllerHelper130({ dataLength, defaultGapPx }) {
  return dataLength >= useChatgptComposerControllerValue144
    ? Math.min(defaultGapPx, useChatgptComposerControllerValue143)
    : dataLength >= useChatgptComposerControllerValue142
      ? Math.min(defaultGapPx, _m)
      : defaultGapPx;
}
function useChatgptComposerControllerHelper131({
  dataLength,
  isHorizontalBarChart,
  series,
}) {
  if (
    !(dataLength === 2 && useChatgptComposerControllerHelper136(series) === 2)
  )
    return isHorizontalBarChart
      ? useChatgptComposerControllerValue149
      : useChatgptComposerControllerValue148;
}
function useChatgptComposerControllerHelper132({
  containerSize,
  dataLength,
  series,
}) {
  if (containerSize == null || containerSize <= 0 || dataLength <= 0)
    return useChatgptComposerControllerValue145;
  let useChatgptComposerControllerValue14133 =
    (containerSize /
      dataLength /
      useChatgptComposerControllerHelper136(series)) *
    0.65;
  for (let useChatgptComposerControllerValue15881 of useChatgptComposerControllerValue147)
    if (
      useChatgptComposerControllerValue14133 >=
      useChatgptComposerControllerValue15881.minEstimatedBarThickness
    )
      return useChatgptComposerControllerValue15881.radius;
  return useChatgptComposerControllerValue146;
}
function useChatgptComposerControllerHelper133() {
  let useChatgptComposerControllerValue6638 = {
    barCategoryGapPx: useChatgptComposerControllerValue140,
    barContainerHeight: null,
    barContainerWidth: null,
  };
  let [
      useChatgptComposerControllerValue6639,
      useChatgptComposerControllerValue6640,
    ] = useChatgptComposerControllerValue139.useState(
      useChatgptComposerControllerValue6638,
    ),
    useChatgptComposerControllerValue6641 =
      useChatgptComposerControllerValue139.useRef(undefined),
    useChatgptComposerControllerValue6642 = (
      useChatgptComposerControllerParam6336,
      useChatgptComposerControllerParam6337,
    ) => {
      useChatgptComposerControllerValue6640(
        (useChatgptComposerControllerParam6671) => {
          let useChatgptComposerControllerValue13036 =
            useChatgptComposerControllerHelper135(
              useChatgptComposerControllerParam6336,
            );
          return useChatgptComposerControllerParam6671.barCategoryGapPx ===
            useChatgptComposerControllerValue13036 &&
            useChatgptComposerControllerParam6671.barContainerHeight ===
              useChatgptComposerControllerParam6337 &&
            useChatgptComposerControllerParam6671.barContainerWidth ===
              useChatgptComposerControllerParam6336
            ? useChatgptComposerControllerParam6671
            : {
                barCategoryGapPx: useChatgptComposerControllerValue13036,
                barContainerHeight: useChatgptComposerControllerParam6337,
                barContainerWidth: useChatgptComposerControllerParam6336,
              };
        },
      );
    };
  let useChatgptComposerControllerValue6643 =
      useChatgptComposerControllerValue6642,
    useChatgptComposerControllerValue6644 = (
      useChatgptComposerControllerParam5945,
    ) => {
      if (
        (useChatgptComposerControllerValue6641.current?.(),
        (useChatgptComposerControllerValue6641.current = undefined),
        useChatgptComposerControllerParam5945 == null)
      )
        return;
      let { height, width } =
        useChatgptComposerControllerParam5945.getBoundingClientRect();
      useChatgptComposerControllerValue6643(width, height);
      useChatgptComposerControllerValue6641.current = createResizeObserverT({
        axis: "both",
        initialSize: false,
        onChange: (useChatgptComposerControllerParam10446) => {
          let { height: _height, width: _width } =
            useChatgptComposerControllerParam10446;
          useChatgptComposerControllerValue6643(_width, _height);
        },
        target: useChatgptComposerControllerParam5945,
      });
    };
  let useChatgptComposerControllerValue6645 =
    useChatgptComposerControllerValue6644;
  return {
    ...useChatgptComposerControllerValue6639,
    setBarContainer: useChatgptComposerControllerValue6645,
  };
}
function useChatgptComposerControllerHelper134(
  useChatgptComposerControllerParam8616,
) {
  if (
    useChatgptComposerControllerParam8616.chartType !== "bar" ||
    useChatgptComposerControllerParam8616.layout !== "vertical"
  )
    return;
  let useChatgptComposerControllerValue14647 =
    useChatgptComposerControllerParam8616.data.length *
    useChatgptComposerControllerHelper136(
      useChatgptComposerControllerParam8616.series,
    );
  if (
    !(
      useChatgptComposerControllerValue14647 <=
      useChatgptComposerControllerValue151
    )
  )
    return {
      height: `${useChatgptComposerControllerValue150 + (useChatgptComposerControllerValue14647 - useChatgptComposerControllerValue151) * useChatgptComposerControllerValue152}rem`,
    };
}
function useChatgptComposerControllerHelper135(
  useChatgptComposerControllerParam10565,
) {
  for (let useChatgptComposerControllerValue15996 of useChatgptComposerControllerValue141)
    if (
      useChatgptComposerControllerParam10565 >=
      useChatgptComposerControllerValue15996.minWidth
    )
      return useChatgptComposerControllerValue15996.gapPx;
  return useChatgptComposerControllerValue140;
}
function useChatgptComposerControllerHelper136(
  useChatgptComposerControllerParam9210,
) {
  let useChatgptComposerControllerValue15164 = new Set(),
    useChatgptComposerControllerValue15165 = 0;
  for (let useChatgptComposerControllerValue15919 of useChatgptComposerControllerParam9210)
    useChatgptComposerControllerValue15919.stack == null
      ? (useChatgptComposerControllerValue15165 += 1)
      : useChatgptComposerControllerValue15164.add(
          useChatgptComposerControllerValue15919.stack,
        );
  return Math.max(
    1,
    useChatgptComposerControllerValue15164.size +
      useChatgptComposerControllerValue15165,
  );
}
var useChatgptComposerControllerValue138,
  useChatgptComposerControllerValue139,
  useChatgptComposerControllerValue140,
  useChatgptComposerControllerValue141,
  _m,
  useChatgptComposerControllerValue142,
  useChatgptComposerControllerValue143,
  useChatgptComposerControllerValue144,
  useChatgptComposerControllerValue145,
  useChatgptComposerControllerValue146,
  useChatgptComposerControllerValue147,
  useChatgptComposerControllerValue148,
  useChatgptComposerControllerValue149,
  useChatgptComposerControllerValue150,
  useChatgptComposerControllerValue151,
  useChatgptComposerControllerValue152,
  useChatgptComposerControllerValue153 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue138 = appInitialIvt();
    useChatgptComposerControllerValue139 = rolldownRuntimeS(appInitialLvt(), 1);
    createResizeObserverN();
    useChatgptComposerControllerValue140 = 8;
    useChatgptComposerControllerValue141 = [
      {
        minWidth: 768,
        gapPx: 12,
      },
    ];
    _m = 6;
    useChatgptComposerControllerValue142 = 16;
    useChatgptComposerControllerValue143 = 3;
    useChatgptComposerControllerValue144 = 24;
    useChatgptComposerControllerValue145 = 8;
    useChatgptComposerControllerValue146 = 2;
    useChatgptComposerControllerValue147 = [
      {
        minEstimatedBarThickness: 56,
        radius: 8,
      },
      {
        minEstimatedBarThickness: 36,
        radius: 6,
      },
      {
        minEstimatedBarThickness: 16,
        radius: 4,
      },
      {
        minEstimatedBarThickness: 0,
        radius: 2,
      },
    ];
    useChatgptComposerControllerValue148 = 120;
    useChatgptComposerControllerValue149 = 48;
    useChatgptComposerControllerValue150 = 27;
    useChatgptComposerControllerValue151 = 20;
    useChatgptComposerControllerValue152 = 1.5;
  });
function useChatgptComposerControllerHelper137(
  useChatgptComposerControllerParam4436,
  useChatgptComposerControllerParam4437,
  useChatgptComposerControllerParam4438,
) {
  let useChatgptComposerControllerValue10428 = {},
    useChatgptComposerControllerValue10429 =
      useChatgptComposerControllerParam4436.chartType === "bar" &&
      useChatgptComposerControllerParam4436.layout === "vertical",
    useChatgptComposerControllerValue10430 =
      useChatgptComposerControllerHelper141(
        useChatgptComposerControllerParam4437.length,
      );
  for (let useChatgptComposerControllerValue15660 of useChatgptComposerControllerParam4437) {
    let useChatgptComposerControllerValue15802 =
      useChatgptComposerControllerValue15660[
        useChatgptComposerControllerParam4436.xKey
      ];
    useChatgptComposerControllerValue15802 != null &&
      (useChatgptComposerControllerValue10428[
        String(useChatgptComposerControllerValue15802)
      ] = useChatgptComposerControllerValue10429
        ? useChatgptComposerControllerHelper142(
            useChatgptComposerControllerValue15802,
            useChatgptComposerControllerValue157,
          )
        : useChatgptComposerControllerHelper142(
            useChatgptComposerControllerValue15802,
            useChatgptComposerControllerValue10430,
          ));
  }
  let useChatgptComposerControllerValue10431 = {
    axisLine: false,
    dataKey: useChatgptComposerControllerParam4436.xKey,
    labels: useChatgptComposerControllerValue10428,
    tickMargin: useChatgptComposerControllerValue154,
  };
  return (
    useChatgptComposerControllerValue10429
      ? (useChatgptComposerControllerValue10431.interval = 0)
      : (useChatgptComposerControllerParam4436.chartType === "scatter"
          ? (useChatgptComposerControllerValue10431.type = "number")
          : useChatgptComposerControllerParam4437.length <=
              useChatgptComposerControllerValue156 &&
            (useChatgptComposerControllerValue10431.interval = 0),
        useChatgptComposerControllerParam4436.chartType === "bar"
          ? (useChatgptComposerControllerValue10431.padding = {
              left: useChatgptComposerControllerParam4438 / 2,
              right: useChatgptComposerControllerParam4438 / 2,
            })
          : useChatgptComposerControllerParam4436.chartType === "line" &&
            (useChatgptComposerControllerValue10431.padding = {
              left: useChatgptComposerControllerValue155,
              right: useChatgptComposerControllerValue155,
            })),
    useChatgptComposerControllerValue10431
  );
}
function useChatgptComposerControllerHelper138(
  useChatgptComposerControllerParam10698,
) {
  return {
    ...useChatgptComposerControllerHelper140(
      useChatgptComposerControllerParam10698,
    ),
    axisLine: false,
    tickLine: false,
    tickMargin: useChatgptComposerControllerValue154,
  };
}
function useChatgptComposerControllerHelper139(
  useChatgptComposerControllerParam9454,
) {
  return {
    domain: ["auto", "auto"],
    ...useChatgptComposerControllerHelper140(
      useChatgptComposerControllerParam9454,
    ),
    axisLine: false,
    tickLine: false,
    tickMargin: useChatgptComposerControllerValue154,
  };
}
function useChatgptComposerControllerHelper140(
  useChatgptComposerControllerParam5043,
) {
  let useChatgptComposerControllerValue11198 =
    useChatgptComposerControllerParam5043.axes?.filter(
      (useChatgptComposerControllerParam11556) => {
        return useChatgptComposerControllerParam11556.dimension === "y";
      },
    ) ?? [];
  if (useChatgptComposerControllerValue11198.length !== 1) return;
  let useChatgptComposerControllerValue11199 =
      useChatgptComposerControllerValue11198[0],
    useChatgptComposerControllerValue11200 = {};
  if (
    (useChatgptComposerControllerValue11199.domain != null &&
      (useChatgptComposerControllerValue11200.domain =
        useChatgptComposerControllerValue11199.domain),
    Array.isArray(useChatgptComposerControllerValue11199.ticks))
  ) {
    let useChatgptComposerControllerValue13681 =
      useChatgptComposerControllerValue11199.ticks.filter((item) => {
        return Number.isFinite(item.value);
      });
    if (useChatgptComposerControllerValue13681.length > 0) {
      let useChatgptComposerControllerValue14708 = {};
      useChatgptComposerControllerValue11200.ticks =
        useChatgptComposerControllerValue13681.map((item) => {
          return (
            item.label != null &&
              (useChatgptComposerControllerValue14708[item.value] = item.label),
            item.value
          );
        });
      Object.keys(useChatgptComposerControllerValue14708).length > 0 &&
        (useChatgptComposerControllerValue11200.labels =
          useChatgptComposerControllerValue14708);
    }
  }
  return Object.keys(useChatgptComposerControllerValue11200).length > 0
    ? useChatgptComposerControllerValue11200
    : undefined;
}
function useChatgptComposerControllerHelper141(
  useChatgptComposerControllerParam10496,
) {
  return useChatgptComposerControllerParam10496 <= 4
    ? 96 / Math.max(useChatgptComposerControllerParam10496, 1)
    : useChatgptComposerControllerParam10496 <= 6
      ? 18
      : useChatgptComposerControllerParam10496 <= 8
        ? 14
        : 12;
}
function useChatgptComposerControllerHelper142(
  useChatgptComposerControllerParam9364,
  useChatgptComposerControllerParam9365,
) {
  let useChatgptComposerControllerValue15296 =
    useChatgptComposerControllerHelper143(
      useChatgptComposerControllerParam9364,
    );
  if (
    useChatgptComposerControllerValue15296.length <=
    useChatgptComposerControllerParam9365
  )
    return useChatgptComposerControllerValue15296;
  let useChatgptComposerControllerValue15297 = Math.max(
    1,
    useChatgptComposerControllerParam9365 - 1,
  );
  return `${useChatgptComposerControllerValue15296.slice(0, useChatgptComposerControllerValue15297).trimEnd()}…`;
}
function useChatgptComposerControllerHelper143(
  useChatgptComposerControllerParam10748,
) {
  return useChatgptComposerControllerParam10748 == null
    ? ""
    : String(useChatgptComposerControllerParam10748)
        .replace(/\s+/g, " ")
        .trim();
}
var useChatgptComposerControllerValue154,
  useChatgptComposerControllerValue155,
  useChatgptComposerControllerValue156,
  useChatgptComposerControllerValue157,
  useChatgptComposerControllerValue158 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue154 = 4;
    useChatgptComposerControllerValue155 = 12;
    useChatgptComposerControllerValue156 = 10;
    useChatgptComposerControllerValue157 = 20;
  });
function useChatgptComposerControllerHelper144(
  useChatgptComposerControllerParam10385,
) {
  return !Number.isFinite(useChatgptComposerControllerParam10385) ||
    useChatgptComposerControllerParam10385 < 0
    ? useChatgptComposerControllerValue159
    : useChatgptComposerControllerValue160[
        Math.floor(useChatgptComposerControllerParam10385) %
          useChatgptComposerControllerValue160.length
      ];
}
var useChatgptComposerControllerValue159,
  useChatgptComposerControllerValue160,
  useChatgptComposerControllerValue161 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue159 = "var(--color-token-charts-blue)";
    useChatgptComposerControllerValue160 = [
      "var(--color-token-charts-blue)",
      "var(--color-token-charts-green)",
      "var(--color-token-charts-orange)",
      "var(--color-token-charts-yellow)",
      "var(--color-token-charts-purple)",
      "var(--color-token-charts-red)",
    ];
  });
function useChatgptComposerControllerHelper145(
  useChatgptComposerControllerParam3206,
) {
  return useChatgptComposerControllerParam3206.series.map((item, index) => {
    let useChatgptComposerControllerValue8747 =
      useChatgptComposerControllerHelper144(index);
    switch (useChatgptComposerControllerParam3206.chartType) {
      case "line":
        return {
          color: useChatgptComposerControllerValue8747,
          curveType: "monotone",
          dataKey: item.dataKey,
          label: item.label,
          type: "line",
          valueFormat: item.valueFormat,
          valuePrefix: item.valuePrefix,
          valueSuffix: item.valueSuffix,
        };
      case "scatter":
        return {
          color: useChatgptComposerControllerValue8747,
          dataKey: item.dataKey,
          label: item.label,
          type: "scatter",
          valueFormat: item.valueFormat,
          valuePrefix: item.valuePrefix,
          valueSuffix: item.valueSuffix,
        };
      case "bar":
      case "pie":
        return {
          color: useChatgptComposerControllerValue8747,
          dataKey: item.dataKey,
          label: item.label,
          stack: item.stack,
          type: "bar",
          valueFormat: item.valueFormat,
          valuePrefix: item.valuePrefix,
          valueSuffix: item.valueSuffix,
        };
    }
  });
}
function useChatgptComposerControllerHelper146(
  useChatgptComposerControllerParam7191,
) {
  let useChatgptComposerControllerValue13522 =
      useChatgptComposerControllerParam7191.series[0],
    useChatgptComposerControllerValue13523 = {
      dataKey:
        useChatgptComposerControllerParam7191.valueKey ||
        useChatgptComposerControllerValue13522?.dataKey ||
        "value",
    };
  return (
    useChatgptComposerControllerValue13522 != null &&
      ((useChatgptComposerControllerValue13523.label =
        useChatgptComposerControllerValue13522.label),
      (useChatgptComposerControllerValue13523.valueFormat =
        useChatgptComposerControllerValue13522.valueFormat),
      (useChatgptComposerControllerValue13523.valuePrefix =
        useChatgptComposerControllerValue13522.valuePrefix),
      (useChatgptComposerControllerValue13523.valueSuffix =
        useChatgptComposerControllerValue13522.valueSuffix)),
    [useChatgptComposerControllerValue13523]
  );
}
var useChatgptComposerControllerValue162 = rolldownRuntimeN(() => {
  useChatgptComposerControllerValue161();
});
function useChatgptComposerControllerHelper147(
  useChatgptComposerControllerParam4050,
) {
  const ChartWidgetStoresI = chartWidgetStoresI;
  const Provider = chartWidgetStoresW.Provider;
  let { children, theme } = useChatgptComposerControllerParam4050,
    useChatgptComposerControllerValue9968 = chartWidgetStoresR(),
    useChatgptComposerControllerValue9969 = _chartWidgetStoresT(
      theme,
      useChatgptComposerControllerValue9968,
      $m,
    );
  let useChatgptComposerControllerValue9970 = (
    <div
      className={useChatgptComposerControllerValue165}
      data-theme={theme}
      dir="auto"
    >
      {children}
    </div>
  );
  return (
    <ChartWidgetStoresI>
      <Provider value={useChatgptComposerControllerValue9969}>
        {useChatgptComposerControllerValue9970}
      </Provider>
    </ChartWidgetStoresI>
  );
}
var useChatgptComposerControllerValue163,
  useChatgptComposerControllerValue164,
  useChatgptComposerControllerValue165,
  $m,
  useChatgptComposerControllerValue166 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue163 = appInitialIvt();
    chartWidgetStoresO();
    chartWidgetStoresA();
    appInitialTft();
    chartWidgetStoresN();
    useChatgptComposerControllerValue164 = appInitialJvt();
    useChatgptComposerControllerValue165 = appInitialWft(
      "h-full w-full",
      "[--alpha-05:rgba(127,127,127,0.08)]",
      "[--alpha-10:rgba(127,127,127,0.16)]",
      "[--color-border:var(--color-token-border-light)]",
      "[--color-ring:var(--color-token-focus-border)]",
      "[--color-surface-elevated:var(--color-token-main-surface-primary)]",
      "[--color-surface-tertiary:var(--color-token-bg-secondary)]",
      "[--color-surface:var(--color-token-main-surface-primary)]",
      "[--color-text-prose:var(--color-token-text-primary)]",
      "[--color-text-secondary:var(--color-token-text-secondary)]",
      "[--color-text:var(--color-token-text-primary)]",
      "[--font-heading-xs-line-height:1.25rem]",
      "[--font-heading-xs-size:0.875rem]",
      "[--font-text-lg-line-height:1.75rem]",
      "[--font-text-lg-size:1.125rem]",
      "[--font-text-md-line-height:1.5rem]",
      "[--font-text-md-size:1rem]",
      "[--font-text-sm-line-height:1.125rem]",
      "[--font-text-sm-size:0.875rem]",
      "[--font-text-xs-line-height:1rem]",
      "[--font-text-xs-size:0.75rem]",
      "[--font-weight-normal:400]",
      "[--radius-full:9999px]",
      "[--radius-md:0.5rem]",
      "[--radius-sm:0.375rem]",
      "[--shadow-hairline:0_0_0_1px_var(--color-token-border-light)]",
      "[--shadow:var(--shadow-lg)]",
      "[--text-tracking:0em]",
    );
    $m = {};
  });
function useChatgptComposerControllerHelper148(
  useChatgptComposerControllerParam1093,
) {
  const ChartWidgetStoresS = _chartWidgetStoresS;
  const UseChatgptComposerControllerHelper147 =
    useChatgptComposerControllerHelper147;
  let {
      ariaLabel,
      barCategoryGap,
      barRadius,
      chart,
      data,
      enableLegendSeriesToggle,
      frameClassName,
      maxBarSize,
      maxTooltipEntries,
      setBarCategoryGapContainer,
      showTooltipCursor,
      showTooltipMarkers,
      theme,
      xAxis,
      yAxis,
    } = useChatgptComposerControllerParam1093,
    useChatgptComposerControllerValue4412 =
      barRadius === undefined
        ? useChatgptComposerControllerValue171
        : barRadius,
    useChatgptComposerControllerValue4413 = appInitialWft(
      "box-border flex h-full min-h-0 flex-col",
      frameClassName,
    );
  let useChatgptComposerControllerValue4414 = chart.layout,
    useChatgptComposerControllerValue4415 =
      useChatgptComposerControllerHelper145(chart);
  let useChatgptComposerControllerValue4416 = chart.series.length > 1,
    useChatgptComposerControllerValue4417 = chart.chartType !== "scatter",
    useChatgptComposerControllerValue4418 = {
      x: false,
      y: true,
    };
  let useChatgptComposerControllerValue4419 = (
    <ChartWidgetStoresS
      barCategoryGap={barCategoryGap}
      barRadius={useChatgptComposerControllerValue4412}
      data={data}
      disableAnimation={true}
      enableLegendSeriesToggle={enableLegendSeriesToggle}
      height="100%"
      layout={useChatgptComposerControllerValue4414}
      legendMaxRows={2}
      maxBarSize={maxBarSize}
      maxTooltipEntries={maxTooltipEntries}
      series={useChatgptComposerControllerValue4415}
      showLegend={useChatgptComposerControllerValue4416}
      showTooltipCursor={showTooltipCursor}
      showTooltipLabel={useChatgptComposerControllerValue4417}
      showTooltipMarkers={showTooltipMarkers}
      showYAxis={true}
      tooltipAllowEscapeViewBox={useChatgptComposerControllerValue4418}
      tooltipAnimationDuration={useChatgptComposerControllerValue169}
      tooltipOffset={useChatgptComposerControllerValue170}
      width="100%"
      xAxis={xAxis}
      yAxis={yAxis}
    />
  );
  let useChatgptComposerControllerValue4420 = (
    <UseChatgptComposerControllerHelper147 theme={theme}>
      {useChatgptComposerControllerValue4419}
    </UseChatgptComposerControllerHelper147>
  );
  return (
    <div
      aria-label={ariaLabel}
      className={useChatgptComposerControllerValue4413}
      ref={setBarCategoryGapContainer}
      role="img"
    >
      {useChatgptComposerControllerValue4420}
    </div>
  );
}
var useChatgptComposerControllerValue167,
  useChatgptComposerControllerValue168,
  useChatgptComposerControllerValue169,
  useChatgptComposerControllerValue170,
  useChatgptComposerControllerValue171,
  useChatgptComposerControllerValue172 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue167 = appInitialIvt();
    _chartWidgetStoresC();
    appInitialTft();
    useChatgptComposerControllerValue162();
    useChatgptComposerControllerValue166();
    useChatgptComposerControllerValue168 = appInitialJvt();
    useChatgptComposerControllerValue169 = 0;
    useChatgptComposerControllerValue170 = 10;
    useChatgptComposerControllerValue171 = 8;
  });
function useChatgptComposerControllerHelper149(
  useChatgptComposerControllerParam9392,
) {
  return useChatgptComposerControllerHelper151(
    useChatgptComposerControllerParam9392,
  ).map((item) => {
    let useChatgptComposerControllerValue15710 = {};
    for (let [
      useChatgptComposerControllerValue16028,
      useChatgptComposerControllerValue16029,
    ] of Object.entries(item))
      useChatgptComposerControllerValue15710[
        useChatgptComposerControllerValue16028
      ] = useChatgptComposerControllerHelper152(
        useChatgptComposerControllerValue16029,
      );
    return useChatgptComposerControllerValue15710;
  });
}
function useChatgptComposerControllerHelper150(
  useChatgptComposerControllerParam8715,
) {
  return useChatgptComposerControllerParam8715.data.map((item, index) => {
    let useChatgptComposerControllerValue15311 = {};
    for (let [
      useChatgptComposerControllerValue16030,
      useChatgptComposerControllerValue16031,
    ] of Object.entries(item))
      useChatgptComposerControllerValue15311[
        useChatgptComposerControllerValue16030
      ] = useChatgptComposerControllerHelper153(
        useChatgptComposerControllerValue16031,
      );
    return (
      (useChatgptComposerControllerValue15311.fill =
        useChatgptComposerControllerHelper144(index)),
      (useChatgptComposerControllerValue15311.stroke =
        useChatgptComposerControllerValue173),
      useChatgptComposerControllerValue15311
    );
  });
}
function useChatgptComposerControllerHelper151(
  useChatgptComposerControllerParam8716,
) {
  if (useChatgptComposerControllerParam8716.data.length > 0)
    return useChatgptComposerControllerParam8716.data;
  let useChatgptComposerControllerValue14741 = {
    [useChatgptComposerControllerParam8716.xKey]:
      useChatgptComposerControllerParam8716.chartType === "scatter" ? 0 : "",
  };
  for (let useChatgptComposerControllerValue16100 of useChatgptComposerControllerParam8716.series)
    useChatgptComposerControllerValue14741[
      useChatgptComposerControllerValue16100.dataKey
    ] = null;
  return [useChatgptComposerControllerValue14741];
}
function useChatgptComposerControllerHelper152(
  useChatgptComposerControllerParam8138,
) {
  return useChatgptComposerControllerParam8138 == null
    ? null
    : typeof useChatgptComposerControllerParam8138 == "number"
      ? Number.isFinite(useChatgptComposerControllerParam8138)
        ? useChatgptComposerControllerParam8138
        : null
      : typeof useChatgptComposerControllerParam8138 == "string" ||
          typeof useChatgptComposerControllerParam8138 == "boolean"
        ? useChatgptComposerControllerParam8138
        : String(useChatgptComposerControllerParam8138);
}
function useChatgptComposerControllerHelper153(
  useChatgptComposerControllerParam9177,
) {
  return (typeof useChatgptComposerControllerParam9177 == "number" &&
    Number.isFinite(useChatgptComposerControllerParam9177)) ||
    typeof useChatgptComposerControllerParam9177 == "string"
    ? useChatgptComposerControllerParam9177
    : useChatgptComposerControllerParam9177 == null
      ? ""
      : String(useChatgptComposerControllerParam9177);
}
var useChatgptComposerControllerValue173,
  useChatgptComposerControllerValue174 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue161();
    useChatgptComposerControllerValue173 =
      "var(--color-token-main-surface-primary)";
  });
function useChatgptComposerControllerHelper154(
  useChatgptComposerControllerParam997,
) {
  const UseChatgptComposerControllerValue4187 =
    useChatgptComposerControllerValue4187;
  let { ariaLabel, chart, theme } = useChatgptComposerControllerParam997,
    {
      barCategoryGapPx,
      barContainerHeight,
      barContainerWidth,
      setBarContainer,
    } = useChatgptComposerControllerHelper133(),
    useChatgptComposerControllerValue4187,
    useChatgptComposerControllerValue4188,
    useChatgptComposerControllerValue4189,
    useChatgptComposerControllerValue4190,
    useChatgptComposerControllerValue4191,
    useChatgptComposerControllerValue4192,
    useChatgptComposerControllerValue4193,
    useChatgptComposerControllerValue4194,
    useChatgptComposerControllerValue4195,
    useChatgptComposerControllerValue4196,
    useChatgptComposerControllerValue4197,
    useChatgptComposerControllerValue4198,
    useChatgptComposerControllerValue4199;
  {
    let useChatgptComposerControllerValue8660 =
        useChatgptComposerControllerHelper149(chart),
      useChatgptComposerControllerValue8661 = chart.layout === "vertical",
      useChatgptComposerControllerValue8662 =
        useChatgptComposerControllerHelper130({
          dataLength: useChatgptComposerControllerValue8660.length,
          defaultGapPx: barCategoryGapPx,
        }),
      useChatgptComposerControllerValue8663 =
        useChatgptComposerControllerHelper132({
          containerSize: useChatgptComposerControllerValue8661
            ? barContainerHeight
            : barContainerWidth,
          dataLength: useChatgptComposerControllerValue8660.length,
          series: chart.series,
        });
    useChatgptComposerControllerValue4187 =
      useChatgptComposerControllerHelper148;
    useChatgptComposerControllerValue4188 = ariaLabel;
    useChatgptComposerControllerValue4192 =
      useChatgptComposerControllerValue8661
        ? useChatgptComposerControllerValue176
        : useChatgptComposerControllerValue8662;
    useChatgptComposerControllerValue4193 =
      useChatgptComposerControllerValue8663;
    useChatgptComposerControllerValue4194 = chart;
    useChatgptComposerControllerValue4195 =
      useChatgptComposerControllerValue8660;
    useChatgptComposerControllerValue4196 =
      useChatgptComposerControllerValue8661 ? "py-5" : "pt-5 pb-[0.375rem]";
    useChatgptComposerControllerValue4197 =
      useChatgptComposerControllerHelper131({
        dataLength: useChatgptComposerControllerValue8660.length,
        isHorizontalBarChart: useChatgptComposerControllerValue8661,
        series: chart.series,
      });
    useChatgptComposerControllerValue4198 = setBarContainer;
    useChatgptComposerControllerValue4199 = false;
    useChatgptComposerControllerValue4189 = true;
    useChatgptComposerControllerValue4190 = theme;
    useChatgptComposerControllerValue4191 =
      useChatgptComposerControllerHelper137(
        chart,
        useChatgptComposerControllerValue8660,
        useChatgptComposerControllerValue8662,
      );
  }
  let useChatgptComposerControllerValue4200 =
    useChatgptComposerControllerHelper138(chart);
  return (
    <UseChatgptComposerControllerValue4187
      ariaLabel={useChatgptComposerControllerValue4188}
      barCategoryGap={useChatgptComposerControllerValue4192}
      barRadius={useChatgptComposerControllerValue4193}
      chart={useChatgptComposerControllerValue4194}
      data={useChatgptComposerControllerValue4195}
      frameClassName={useChatgptComposerControllerValue4196}
      maxBarSize={useChatgptComposerControllerValue4197}
      setBarCategoryGapContainer={useChatgptComposerControllerValue4198}
      showTooltipCursor={useChatgptComposerControllerValue4199}
      showTooltipMarkers={useChatgptComposerControllerValue4189}
      theme={useChatgptComposerControllerValue4190}
      xAxis={useChatgptComposerControllerValue4191}
      yAxis={useChatgptComposerControllerValue4200}
    />
  );
}
var useChatgptComposerControllerValue175,
  _h,
  useChatgptComposerControllerValue176,
  useChatgptComposerControllerValue177 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue175 = appInitialIvt();
    useChatgptComposerControllerValue158();
    useChatgptComposerControllerValue153();
    useChatgptComposerControllerValue172();
    useChatgptComposerControllerValue174();
    _h = appInitialJvt();
    useChatgptComposerControllerValue176 = "12%";
  });
function useChatgptComposerControllerHelper155(
  useChatgptComposerControllerParam1705,
) {
  const UseChatgptComposerControllerValue5663 =
    useChatgptComposerControllerValue5663;
  let { ariaLabel, chart, theme } = useChatgptComposerControllerParam1705,
    useChatgptComposerControllerValue5663,
    useChatgptComposerControllerValue5664,
    useChatgptComposerControllerValue5665,
    useChatgptComposerControllerValue5666,
    useChatgptComposerControllerValue5667,
    useChatgptComposerControllerValue5668,
    useChatgptComposerControllerValue5669,
    useChatgptComposerControllerValue5670,
    useChatgptComposerControllerValue5671,
    useChatgptComposerControllerValue5672,
    useChatgptComposerControllerValue5673;
  {
    let useChatgptComposerControllerValue11487 =
      useChatgptComposerControllerHelper149(chart);
    useChatgptComposerControllerValue5663 =
      useChatgptComposerControllerHelper148;
    useChatgptComposerControllerValue5664 = ariaLabel;
    useChatgptComposerControllerValue5666 = chart;
    useChatgptComposerControllerValue5667 =
      useChatgptComposerControllerValue11487;
    useChatgptComposerControllerValue5668 = chart.series.length > 1;
    useChatgptComposerControllerValue5669 = "pt-5 pb-[0.375rem]";
    useChatgptComposerControllerValue5670 =
      useChatgptComposerControllerValue180;
    useChatgptComposerControllerValue5671 = true;
    useChatgptComposerControllerValue5672 = true;
    useChatgptComposerControllerValue5673 = theme;
    useChatgptComposerControllerValue5665 =
      useChatgptComposerControllerHelper137(
        chart,
        useChatgptComposerControllerValue11487,
        0,
      );
  }
  let useChatgptComposerControllerValue5674 =
    useChatgptComposerControllerHelper139(chart);
  return (
    <UseChatgptComposerControllerValue5663
      ariaLabel={useChatgptComposerControllerValue5664}
      chart={useChatgptComposerControllerValue5666}
      data={useChatgptComposerControllerValue5667}
      enableLegendSeriesToggle={useChatgptComposerControllerValue5668}
      frameClassName={useChatgptComposerControllerValue5669}
      maxTooltipEntries={useChatgptComposerControllerValue5670}
      showTooltipCursor={useChatgptComposerControllerValue5671}
      showTooltipMarkers={useChatgptComposerControllerValue5672}
      theme={useChatgptComposerControllerValue5673}
      xAxis={useChatgptComposerControllerValue5665}
      yAxis={useChatgptComposerControllerValue5674}
    />
  );
}
var useChatgptComposerControllerValue178,
  useChatgptComposerControllerValue179,
  useChatgptComposerControllerValue180,
  useChatgptComposerControllerValue181 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue178 = appInitialIvt();
    useChatgptComposerControllerValue158();
    useChatgptComposerControllerValue172();
    useChatgptComposerControllerValue174();
    useChatgptComposerControllerValue179 = appInitialJvt();
    useChatgptComposerControllerValue180 = 8;
  });
function useChatgptComposerControllerHelper165(
  useChatgptComposerControllerParam2261,
) {
  const UseChatgptComposerControllerHelper162 =
    useChatgptComposerControllerHelper162;
  const UseChatgptComposerControllerHelper147 =
    useChatgptComposerControllerHelper147;
  let { ariaLabel, chart, theme } = useChatgptComposerControllerParam2261;
  if (chart.series.length === 0) return null;
  let useChatgptComposerControllerValue6570 =
    useChatgptComposerControllerHelper150(chart);
  let useChatgptComposerControllerValue6571 =
    useChatgptComposerControllerHelper146(chart);
  let useChatgptComposerControllerValue6572 = {
    x: false,
    y: true,
  };
  let useChatgptComposerControllerValue6573 = (
    <UseChatgptComposerControllerHelper162
      data={useChatgptComposerControllerValue6570}
      disableAnimation={true}
      height="100%"
      innerRadius="40%"
      legendMaxRows={2}
      outerRadius="78%"
      paddingAngle={useChatgptComposerControllerValue201}
      series={useChatgptComposerControllerValue6571}
      tooltipAllowEscapeViewBox={useChatgptComposerControllerValue6572}
      tooltipAnimationDuration={$h}
      tooltipOffset={useChatgptComposerControllerValue200}
      tooltipValueMode="percent"
      width="100%"
      xAxis={chart.nameKey}
    />
  );
  let useChatgptComposerControllerValue6574 = (
    <UseChatgptComposerControllerHelper147 theme={theme}>
      {useChatgptComposerControllerValue6573}
    </UseChatgptComposerControllerHelper147>
  );
  return (
    <div
      aria-label={ariaLabel}
      className="box-border flex h-full min-h-0 flex-col py-3"
      role="img"
    >
      {useChatgptComposerControllerValue6574}
    </div>
  );
}
var useChatgptComposerControllerValue198,
  useChatgptComposerControllerValue199,
  $h,
  useChatgptComposerControllerValue200,
  useChatgptComposerControllerValue201,
  useChatgptComposerControllerValue202 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue198 = appInitialIvt();
    useChatgptComposerControllerValue197();
    useChatgptComposerControllerValue174();
    useChatgptComposerControllerValue162();
    useChatgptComposerControllerValue166();
    useChatgptComposerControllerValue199 = appInitialJvt();
    $h = 0;
    useChatgptComposerControllerValue200 = 10;
    useChatgptComposerControllerValue201 = 0.5;
  });
function useChatgptComposerControllerHelper166(
  useChatgptComposerControllerParam2100,
) {
  const UseChatgptComposerControllerValue6299 =
    useChatgptComposerControllerValue6299;
  let { ariaLabel, chart, theme } = useChatgptComposerControllerParam2100,
    useChatgptComposerControllerValue6299,
    useChatgptComposerControllerValue6300,
    useChatgptComposerControllerValue6301,
    useChatgptComposerControllerValue6302,
    useChatgptComposerControllerValue6303,
    useChatgptComposerControllerValue6304,
    useChatgptComposerControllerValue6305,
    useChatgptComposerControllerValue6306,
    useChatgptComposerControllerValue6307;
  {
    let useChatgptComposerControllerValue12251 =
      useChatgptComposerControllerHelper149(chart);
    useChatgptComposerControllerValue6299 =
      useChatgptComposerControllerHelper148;
    useChatgptComposerControllerValue6300 = ariaLabel;
    useChatgptComposerControllerValue6301 = chart;
    useChatgptComposerControllerValue6302 =
      useChatgptComposerControllerValue12251;
    useChatgptComposerControllerValue6303 = "pt-5 pb-[0.375rem]";
    useChatgptComposerControllerValue6304 = true;
    useChatgptComposerControllerValue6305 = false;
    useChatgptComposerControllerValue6306 = theme;
    useChatgptComposerControllerValue6307 =
      useChatgptComposerControllerHelper137(
        chart,
        useChatgptComposerControllerValue12251,
        0,
      );
  }
  let useChatgptComposerControllerValue6308 =
    useChatgptComposerControllerHelper139(chart);
  return (
    <UseChatgptComposerControllerValue6299
      ariaLabel={useChatgptComposerControllerValue6300}
      chart={useChatgptComposerControllerValue6301}
      data={useChatgptComposerControllerValue6302}
      frameClassName={useChatgptComposerControllerValue6303}
      showTooltipCursor={useChatgptComposerControllerValue6304}
      showTooltipMarkers={useChatgptComposerControllerValue6305}
      theme={useChatgptComposerControllerValue6306}
      xAxis={useChatgptComposerControllerValue6307}
      yAxis={useChatgptComposerControllerValue6308}
    />
  );
}
var useChatgptComposerControllerValue203,
  useChatgptComposerControllerValue204,
  useChatgptComposerControllerValue205 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue203 = appInitialIvt();
    useChatgptComposerControllerValue158();
    useChatgptComposerControllerValue172();
    useChatgptComposerControllerValue174();
    useChatgptComposerControllerValue204 = appInitialJvt();
  });
function useChatgptComposerControllerHelper167(
  useChatgptComposerControllerParam2377,
) {
  const UseChatgptComposerControllerHelper154 =
    useChatgptComposerControllerHelper154;
  const UseChatgptComposerControllerHelper155 =
    useChatgptComposerControllerHelper155;
  const UseChatgptComposerControllerHelper165 =
    useChatgptComposerControllerHelper165;
  const UseChatgptComposerControllerHelper166 =
    useChatgptComposerControllerHelper166;
  let { ariaLabel, chart, theme } = useChatgptComposerControllerParam2377;
  switch (chart.chartType) {
    case "bar": {
      let useChatgptComposerControllerValue13421;
      return (
        <UseChatgptComposerControllerHelper154
          ariaLabel={ariaLabel}
          chart={chart}
          theme={theme}
        />
      );
    }
    case "line": {
      let useChatgptComposerControllerValue13422;
      return (
        <UseChatgptComposerControllerHelper155
          ariaLabel={ariaLabel}
          chart={chart}
          theme={theme}
        />
      );
    }
    case "pie": {
      let useChatgptComposerControllerValue13393;
      return (
        <UseChatgptComposerControllerHelper165
          ariaLabel={ariaLabel}
          chart={chart}
          theme={theme}
        />
      );
    }
    case "scatter": {
      let useChatgptComposerControllerValue13350;
      return (
        <UseChatgptComposerControllerHelper166
          ariaLabel={ariaLabel}
          chart={chart}
          theme={theme}
        />
      );
    }
  }
}
var useChatgptComposerControllerValue206,
  useChatgptComposerControllerValue207,
  useChatgptComposerControllerValue208 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue206 = appInitialIvt();
    useChatgptComposerControllerValue177();
    useChatgptComposerControllerValue181();
    useChatgptComposerControllerValue202();
    useChatgptComposerControllerValue205();
    useChatgptComposerControllerValue207 = appInitialJvt();
  }),
  useChatgptComposerControllerValue209,
  useChatgptComposerControllerValue210,
  useChatgptComposerControllerValue211,
  useChatgptComposerControllerValue212,
  useChatgptComposerControllerValue213,
  useChatgptComposerControllerValue214,
  _g,
  useChatgptComposerControllerValue215,
  useChatgptComposerControllerValue216 = rolldownRuntimeN(() => {
    __appInitialCT();
    useChatgptComposerControllerValue209 = appInitialCT().nullable().optional();
    useChatgptComposerControllerValue210 = appInitialDT([
      "compact",
      "integer",
      "raw",
    ]);
    useChatgptComposerControllerValue211 = appInitialXT({
      dimension: appInitialDT(["x", "y"]).nullable().optional(),
      domain: appInitialWT([appInitialBT(), appInitialBT()]).optional(),
      label: useChatgptComposerControllerValue209,
      ticks: _appInitialFT(
        appInitialXT({
          label: useChatgptComposerControllerValue209,
          value: appInitialBT(),
        }).passthrough(),
      ).optional(),
    }).passthrough();
    useChatgptComposerControllerValue212 = appInitialXT({
      axes: _appInitialFT(useChatgptComposerControllerValue211).optional(),
      chartType: appInitialDT(["bar", "line", "pie", "scatter"]),
      data: _appInitialFT(appInitialST(appInitialCT(), appInitialET())),
      layout: useChatgptComposerControllerValue209,
      meta: appInitialXT({
        description: useChatgptComposerControllerValue209,
        footer: useChatgptComposerControllerValue209,
        title: useChatgptComposerControllerValue209,
      })
        .passthrough()
        .optional(),
      nameKey: useChatgptComposerControllerValue209,
      series: _appInitialFT(
        appInitialXT({
          axisLabel: useChatgptComposerControllerValue209,
          dataKey: appInitialCT().trim().min(1),
          label: useChatgptComposerControllerValue209,
          stack: useChatgptComposerControllerValue209,
          valueFormat: useChatgptComposerControllerValue210.optional(),
          valuePrefix: useChatgptComposerControllerValue209,
          valueSuffix: useChatgptComposerControllerValue209,
        }).passthrough(),
      ).optional(),
      valueFormat: useChatgptComposerControllerValue210.optional(),
      valueKey: useChatgptComposerControllerValue209,
      valuePrefix: useChatgptComposerControllerValue209,
      valueSuffix: useChatgptComposerControllerValue209,
      xAxisLabel: useChatgptComposerControllerValue209,
      xKey: useChatgptComposerControllerValue209,
    }).passthrough();
    useChatgptComposerControllerValue213 = appInitialXT({
      data: appInitialXT({
        content: appInitialTT([
          useChatgptComposerControllerValue212,
          appInitialCT(),
        ]),
        language: appInitialYT("recharts-json"),
        widget_type: appInitialYT("charts_widget_v2"),
      }).passthrough(),
      type: appInitialYT("client_defined_widget"),
    }).passthrough();
    useChatgptComposerControllerValue214 = appInitialXT({
      category: appInitialYT("language_learning_block"),
      data: appInitialXT({
        content: appInitialCT(),
        intent: appInitialYT("translation"),
        pronunciation_language: useChatgptComposerControllerValue209,
      }).passthrough(),
      type: appInitialYT("client_defined_widget"),
    }).passthrough();
    _g = appInitialXT({
      category: appInitialYT("translation_block"),
      data: appInitialXT({
        content: appInitialCT(),
        source_language: useChatgptComposerControllerValue209,
        target_language: useChatgptComposerControllerValue209,
        translated_text: useChatgptComposerControllerValue209,
      }).passthrough(),
      type: appInitialYT("client_defined_widget"),
    }).passthrough();
    useChatgptComposerControllerValue215 = appInitialGT("category", [
      useChatgptComposerControllerValue214,
      _g,
    ]);
  });
function bg(
  useChatgptComposerControllerParam10749,
  useChatgptComposerControllerParam10750,
) {
  return typeof useChatgptComposerControllerParam10749 == "string" &&
    useChatgptComposerControllerParam10749.trim().length > 0
    ? useChatgptComposerControllerParam10749
    : useChatgptComposerControllerParam10750;
}
var useChatgptComposerControllerValue217 = rolldownRuntimeN(() => {});
function useChatgptComposerControllerHelper168(
  useChatgptComposerControllerParam5938,
) {
  let useChatgptComposerControllerValue12252 = bg(
      useChatgptComposerControllerParam5938.xKey,
      useChatgptComposerControllerHelper171(
        useChatgptComposerControllerParam5938.data,
      ),
    ),
    useChatgptComposerControllerValue12253 = bg(
      useChatgptComposerControllerParam5938.valueKey,
      useChatgptComposerControllerHelper172(
        useChatgptComposerControllerParam5938.data,
        useChatgptComposerControllerValue12252,
      ),
    ),
    useChatgptComposerControllerValue12254 = {
      chartType: useChatgptComposerControllerParam5938.chartType,
      data: useChatgptComposerControllerParam5938.data,
      nameKey: bg(
        useChatgptComposerControllerParam5938.nameKey,
        useChatgptComposerControllerValue12252,
      ),
      series: useChatgptComposerControllerHelper170(
        useChatgptComposerControllerParam5938,
        useChatgptComposerControllerValue12253,
      ),
      valueKey: useChatgptComposerControllerValue12253,
      xKey: useChatgptComposerControllerValue12252,
    };
  return (
    useChatgptComposerControllerParam5938.axes != null &&
      (useChatgptComposerControllerValue12254.axes =
        useChatgptComposerControllerParam5938.axes),
    useChatgptComposerControllerParam5938.layout === "vertical" &&
      (useChatgptComposerControllerValue12254.layout = "vertical"),
    useChatgptComposerControllerParam5938.meta != null &&
      (useChatgptComposerControllerValue12254.meta =
        useChatgptComposerControllerParam5938.meta),
    useChatgptComposerControllerValue12254
  );
}
function useChatgptComposerControllerHelper169(
  useChatgptComposerControllerParam8749,
) {
  if (typeof useChatgptComposerControllerParam8749 != "string")
    return useChatgptComposerControllerParam8749;
  try {
    let useChatgptComposerControllerValue15843 =
      useChatgptComposerControllerValue212.safeParse(
        JSON.parse(useChatgptComposerControllerParam8749),
      );
    return useChatgptComposerControllerValue15843.success
      ? useChatgptComposerControllerValue15843.data
      : null;
  } catch {
    return null;
  }
}
function useChatgptComposerControllerHelper170(
  useChatgptComposerControllerParam4273,
  useChatgptComposerControllerParam4274,
) {
  let useChatgptComposerControllerValue10257 =
      useChatgptComposerControllerParam4273.valueFormat ?? "compact",
    useChatgptComposerControllerValue10258 = bg(
      useChatgptComposerControllerParam4273.valuePrefix,
      "",
    ),
    useChatgptComposerControllerValue10259 = bg(
      useChatgptComposerControllerParam4273.valueSuffix,
      "",
    ),
    useChatgptComposerControllerValue10260 =
      useChatgptComposerControllerParam4273.series?.map(
        (useChatgptComposerControllerParam6832) => {
          let useChatgptComposerControllerValue13200 = bg(
              useChatgptComposerControllerParam6832.stack,
            ),
            useChatgptComposerControllerValue13201 = {
              dataKey: useChatgptComposerControllerParam6832.dataKey,
              label: bg(
                useChatgptComposerControllerParam6832.label,
                useChatgptComposerControllerParam6832.dataKey,
              ),
              valueFormat:
                useChatgptComposerControllerParam6832.valueFormat ??
                useChatgptComposerControllerValue10257,
              valuePrefix: bg(
                useChatgptComposerControllerParam6832.valuePrefix,
                useChatgptComposerControllerValue10258,
              ),
              valueSuffix: bg(
                useChatgptComposerControllerParam6832.valueSuffix,
                useChatgptComposerControllerValue10259,
              ),
            };
          return (
            useChatgptComposerControllerValue13200 != null &&
              (useChatgptComposerControllerValue13201.stack =
                useChatgptComposerControllerValue13200),
            useChatgptComposerControllerValue13201
          );
        },
      );
  return useChatgptComposerControllerValue10260 != null &&
    useChatgptComposerControllerValue10260.length > 0
    ? useChatgptComposerControllerValue10260
    : [
        {
          dataKey: useChatgptComposerControllerParam4274,
          label: useChatgptComposerControllerParam4274,
          valueFormat: useChatgptComposerControllerValue10257,
          valuePrefix: useChatgptComposerControllerValue10258,
          valueSuffix: useChatgptComposerControllerValue10259,
        },
      ];
}
function useChatgptComposerControllerHelper171(
  useChatgptComposerControllerParam8701,
) {
  let useChatgptComposerControllerValue14734 =
    useChatgptComposerControllerParam8701[0];
  if (useChatgptComposerControllerValue14734 == null) return "name";
  for (let [
    useChatgptComposerControllerValue15876,
    useChatgptComposerControllerValue15877,
  ] of Object.entries(useChatgptComposerControllerValue14734))
    if (typeof useChatgptComposerControllerValue15877 == "string")
      return useChatgptComposerControllerValue15876;
  return Object.keys(useChatgptComposerControllerValue14734)[0] ?? "name";
}
function useChatgptComposerControllerHelper172(
  useChatgptComposerControllerParam8111,
  useChatgptComposerControllerParam8112,
) {
  let useChatgptComposerControllerValue14318 =
    useChatgptComposerControllerParam8111[0];
  if (useChatgptComposerControllerValue14318 == null) return "value";
  for (let [
    useChatgptComposerControllerValue15803,
    useChatgptComposerControllerValue15804,
  ] of Object.entries(useChatgptComposerControllerValue14318))
    if (
      useChatgptComposerControllerValue15803 !==
        useChatgptComposerControllerParam8112 &&
      typeof useChatgptComposerControllerValue15804 == "number"
    )
      return useChatgptComposerControllerValue15803;
  return (
    Object.keys(useChatgptComposerControllerValue14318).find((item) => {
      return item !== useChatgptComposerControllerParam8112;
    }) ?? "value"
  );
}
var useChatgptComposerControllerValue218 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue216();
    useChatgptComposerControllerValue217();
  }),
  useChatgptComposerControllerValue219,
  useChatgptComposerControllerValue220,
  useChatgptComposerControllerValue221 = rolldownRuntimeN(() => {
    appInitialLvt();
    useChatgptComposerControllerValue219 = appInitialJvt();
    useChatgptComposerControllerValue220 = (
      useChatgptComposerControllerParam3996,
    ) => {
      return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...useChatgptComposerControllerParam3996}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2.08496C14.3713 2.08496 17.915 5.62867 17.915 10C17.915 14.3713 14.3713 17.915 10 17.915C5.62867 17.915 2.08496 14.3713 2.08496 10C2.08496 5.62867 5.62867 2.08496 10 2.08496ZM8.25 7.25C7.69772 7.25 7.25 7.69772 7.25 8.25V11.75C7.25 12.3023 7.69772 12.75 8.25 12.75H11.75C12.3023 12.75 12.75 12.3023 12.75 11.75V8.25C12.75 7.69772 12.3023 7.25 11.75 7.25H8.25Z"
          />
        </svg>
      );
    };
  }),
  useChatgptComposerControllerValue222,
  useChatgptComposerControllerValue223,
  useChatgptComposerControllerValue224 = rolldownRuntimeN(() => {
    appInitialLvt();
    useChatgptComposerControllerValue222 = appInitialJvt();
    useChatgptComposerControllerValue223 = (
      useChatgptComposerControllerParam1421,
    ) => {
      return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...useChatgptComposerControllerParam1421}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1191 16.4277C10.4476 16.592 10.8475 16.4594 11.0117 16.1309L11.7656 14.623H16.5684L17.3223 16.1309C17.4866 16.4592 17.8855 16.5919 18.2139 16.4277C18.5423 16.2635 18.6758 15.8646 18.5117 15.5361L14.7617 8.03613C14.6491 7.81094 14.4187 7.66809 14.167 7.66797C13.9466 7.66797 13.7421 7.77698 13.6191 7.95508L13.5723 8.03613L9.82227 15.5361C9.65806 15.8645 9.79084 16.2634 10.1191 16.4277ZM15.9033 13.293L14.167 9.82031L12.4307 13.293H15.9033Z"
            fill="var(--translate-icon-letter-color, currentColor)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 3.08496C5.88273 3.08496 5.58496 3.38273 5.58496 3.75V4.33496H2.5C2.13273 4.33496 1.83496 4.63273 1.83496 5C1.83496 5.36727 2.13273 5.66504 2.5 5.66504H7.97754C7.68529 7.25726 7.10241 8.43443 6.2168 9.29785C5.68205 8.74801 5.26457 8.07546 4.96094 7.25195C4.83383 6.90747 4.45098 6.73137 4.10645 6.8584C3.76213 6.9855 3.58611 7.36749 3.71289 7.71191C4.05472 8.63903 4.52836 9.43865 5.14844 10.1094C4.60228 10.4318 3.96664 10.6964 3.22852 10.9014L2.7666 11.0186C2.40885 11.1016 2.1855 11.4596 2.26855 11.8174C2.34133 12.1303 2.62442 12.3402 2.93359 12.332L3.06738 12.3145C4.27556 12.034 5.3184 11.6103 6.19531 11.0195C6.91011 11.5224 7.73927 11.9055 8.68359 12.1807L9.17969 12.3125L9.3125 12.3311C9.62162 12.3427 9.90625 12.1364 9.98242 11.8242C10.0693 11.4674 9.85098 11.1074 9.49414 11.0205C8.61631 10.8067 7.87918 10.5094 7.26172 10.1309C8.36479 9.00027 9.02274 7.51097 9.3252 5.66504H10L10.1338 5.65137C10.4369 5.58943 10.665 5.32143 10.665 5C10.665 4.63273 10.3673 4.33496 10 4.33496H6.91504V3.75C6.91504 3.38273 6.61727 3.08496 6.25 3.08496Z"
            fill="var(--translate-icon-language-color, currentColor)"
          />
        </svg>
      );
    };
  });
function useChatgptComposerControllerHelper173(
  useChatgptComposerControllerParam1906,
) {
  const UseChatgptComposerControllerHelper174 =
    useChatgptComposerControllerHelper174;
  let { reference } = useChatgptComposerControllerParam1906,
    useChatgptComposerControllerValue6025 =
      reference.category === "language_learning_block",
    useChatgptComposerControllerValue6026 =
      useChatgptComposerControllerValue6025
        ? null
        : useChatgptComposerControllerHelper76(reference.data.content);
  let useChatgptComposerControllerValue6027 =
      useChatgptComposerControllerValue6026,
    useChatgptComposerControllerValue6028 =
      useChatgptComposerControllerHelper76(
        useChatgptComposerControllerValue6025
          ? reference.data.content
          : reference.data.translated_text,
      );
  let useChatgptComposerControllerValue6029 =
      useChatgptComposerControllerValue6028,
    useChatgptComposerControllerValue6030 =
      useChatgptComposerControllerValue6029 ??
      useChatgptComposerControllerValue6027;
  if (useChatgptComposerControllerValue6030 == null) return null;
  let useChatgptComposerControllerValue6031 =
    useChatgptComposerControllerValue6025
      ? null
      : useChatgptComposerControllerHelper76(reference.data.source_language);
  let useChatgptComposerControllerValue6032 =
      useChatgptComposerControllerValue6031,
    useChatgptComposerControllerValue6033 =
      useChatgptComposerControllerValue6032;
  if (useChatgptComposerControllerValue6029 != null) {
    let useChatgptComposerControllerValue12320;
    useChatgptComposerControllerValue12320 =
      useChatgptComposerControllerValue6025
        ? useChatgptComposerControllerHelper76(
            reference.data.pronunciation_language,
          )
        : (useChatgptComposerControllerHelper76(
            reference.data.target_language,
          ) ?? "en");
    useChatgptComposerControllerValue6033 =
      useChatgptComposerControllerValue12320;
  }
  let useChatgptComposerControllerValue6034 =
    useChatgptComposerControllerValue6029 == null
      ? null
      : useChatgptComposerControllerValue6027;
  return (
    <UseChatgptComposerControllerHelper174
      displayText={useChatgptComposerControllerValue6030}
      pronunciationLanguage={useChatgptComposerControllerValue6033}
      sourceLanguage={useChatgptComposerControllerValue6032}
      sourceText={useChatgptComposerControllerValue6034}
    />
  );
}
function useChatgptComposerControllerHelper174({
  displayText,
  pronunciationLanguage,
  sourceLanguage,
  sourceText,
}) {
  const SoundOnT = soundOnT;
  const AppInitialXut = appInitialXut;
  const UseChatgptComposerControllerValue220 =
    useChatgptComposerControllerValue220;
  const UseChatgptComposerControllerValue223 =
    useChatgptComposerControllerValue223;
  const AppInitialGft = appInitialGft;
  const AppInitialBlt = appInitialBlt;
  const AppInitialYut = appInitialYut;
  const AppInitialAR = appInitialAR;
  let useChatgptComposerControllerValue1876 = appInitialJft(),
    useChatgptComposerControllerValue1877 = appInitialLT(appInitialFft),
    [
      useChatgptComposerControllerValue1878,
      useChatgptComposerControllerValue1879,
    ] = useChatgptComposerControllerValue226.useState("idle"),
    useChatgptComposerControllerValue1880 =
      useChatgptComposerControllerValue226.useRef(null),
    useChatgptComposerControllerValue1881 =
      useChatgptComposerControllerValue226.useRef(null),
    useChatgptComposerControllerValue1882 =
      useChatgptComposerControllerValue226.useRef(null),
    useChatgptComposerControllerValue1883 =
      useChatgptComposerControllerValue226.useRef(false);
  useChatgptComposerControllerValue226.useEffect(() => {
    return () => {
      useChatgptComposerControllerValue1880.current?.abort();
      let useChatgptComposerControllerValue13755 =
        useChatgptComposerControllerValue1881.current;
      useChatgptComposerControllerValue13755 != null &&
        ((useChatgptComposerControllerValue13755.onended = null),
        (useChatgptComposerControllerValue13755.onerror = null),
        (useChatgptComposerControllerValue13755.onpause = null),
        useChatgptComposerControllerValue13755.pause(),
        useChatgptComposerControllerHelper176(
          useChatgptComposerControllerValue13755,
        ));
      useChatgptComposerControllerValue1882.current != null &&
        URL.revokeObjectURL(useChatgptComposerControllerValue1882.current);
    };
  }, []);
  let useChatgptComposerControllerValue1884,
    useChatgptComposerControllerValue1885;
  switch (useChatgptComposerControllerValue1878) {
    case "idle":
      useChatgptComposerControllerValue1884 = <SoundOnT className="icon-sm" />;
      useChatgptComposerControllerValue1885 =
        useChatgptComposerControllerValue1876.formatMessage(
          {
            id: "codex.chatgpt.contentReferences.translation.audio.play.ariaLabel",
            defaultMessage: "Play audio for {displayText}",
            description:
              "Accessible label for the read-aloud button in a ChatGPT translation card shown inside Codex. Activating it plays synthesized speech for the translated text. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.",
          },
          {
            displayText,
          },
        );
      break;
    case "loading":
      useChatgptComposerControllerValue1884 = (
        <AppInitialXut className="icon-sm" />
      );
      useChatgptComposerControllerValue1885 =
        useChatgptComposerControllerValue1876.formatMessage(
          {
            id: "codex.chatgpt.contentReferences.translation.audio.loading.ariaLabel",
            defaultMessage: "Loading audio for {displayText}",
            description:
              "Accessible label for the read-aloud button in a ChatGPT translation card shown inside Codex while translated text audio is loading. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.",
          },
          {
            displayText,
          },
        );
      break;
    case "playing":
      useChatgptComposerControllerValue1884 = (
        <UseChatgptComposerControllerValue220 className="icon-sm" />
      );
      useChatgptComposerControllerValue1885 =
        useChatgptComposerControllerValue1876.formatMessage(
          {
            id: "codex.chatgpt.contentReferences.translation.audio.stop.ariaLabel",
            defaultMessage: "Stop audio for {displayText}",
            description:
              "Accessible label for the stop button in a ChatGPT translation card shown inside Codex while translated text audio is playing. Placeholder {displayText} is the exact translated text visible in the card and may contain any language or script.",
          },
          {
            displayText,
          },
        );
      break;
  }
  let useChatgptComposerControllerValue1886 =
    useChatgptComposerControllerHelper175(
      sourceLanguage,
      useChatgptComposerControllerValue1876.locale,
    );
  function useChatgptComposerControllerHelper1142() {
    useChatgptComposerControllerValue1883.current ||
      ((useChatgptComposerControllerValue1883.current = true),
      useChatgptComposerControllerHelper176(
        useChatgptComposerControllerValue1881.current,
      ),
      useChatgptComposerControllerValue1879("idle"),
      useChatgptComposerControllerValue1877.get(appInitialLlt).danger(
        useChatgptComposerControllerValue1876.formatMessage({
          id: "codex.chatgpt.contentReferences.translation.audio.error",
          defaultMessage: "Unable to play translation audio",
          description:
            "Error toast shown in Codex when the read-aloud action on a ChatGPT translation card cannot synthesize or play audio for the translated text.",
        }),
      ));
  }
  async function useChatgptComposerControllerHelper1143(
    useChatgptComposerControllerParam8141,
  ) {
    useChatgptComposerControllerValue1883.current = false;
    useChatgptComposerControllerValue228 != null &&
      useChatgptComposerControllerValue228 !==
        useChatgptComposerControllerParam8141 &&
      useChatgptComposerControllerValue228.pause();
    useChatgptComposerControllerValue228 =
      useChatgptComposerControllerParam8141;
    useChatgptComposerControllerParam8141.currentTime = 0;
    try {
      await useChatgptComposerControllerParam8141.play();
      useChatgptComposerControllerValue1879("playing");
    } catch {
      useChatgptComposerControllerHelper1142();
    }
  }
  async function useChatgptComposerControllerHelper1144() {
    if (useChatgptComposerControllerValue1881.current != null) {
      await useChatgptComposerControllerHelper1143(
        useChatgptComposerControllerValue1881.current,
      );
      return;
    }
    useChatgptComposerControllerValue228?.pause();
    useChatgptComposerControllerValue1879("loading");
    let useChatgptComposerControllerValue8770 = new AbortController();
    useChatgptComposerControllerValue1880.current =
      useChatgptComposerControllerValue8770;
    try {
      let { base64, contentType } = await useChatgptComposerControllerValue1877
        .get(appInitialCI)
        .synthesizePronunciationAudio({
          pronunciationLanguage,
          signal: useChatgptComposerControllerValue8770.signal,
          text: displayText,
        });
      if (useChatgptComposerControllerValue8770.signal.aborted) return;
      let useChatgptComposerControllerValue10448 = URL.createObjectURL(
        new Blob([AppInitialZct(base64)], {
          type: contentType || "audio/mpeg",
        }),
      );
      useChatgptComposerControllerValue1882.current =
        useChatgptComposerControllerValue10448;
      let useChatgptComposerControllerValue10449 = new Audio(
        useChatgptComposerControllerValue10448,
      );
      useChatgptComposerControllerValue1881.current =
        useChatgptComposerControllerValue10449;
      useChatgptComposerControllerValue10449.onended = () => {
        useChatgptComposerControllerValue10449.currentTime = 0;
        useChatgptComposerControllerHelper176(
          useChatgptComposerControllerValue10449,
        );
        useChatgptComposerControllerValue1879("idle");
      };
      useChatgptComposerControllerValue10449.onerror =
        useChatgptComposerControllerHelper1142;
      useChatgptComposerControllerValue10449.onpause = () => {
        useChatgptComposerControllerHelper176(
          useChatgptComposerControllerValue10449,
        );
        useChatgptComposerControllerValue1879("idle");
      };
      await useChatgptComposerControllerHelper1143(
        useChatgptComposerControllerValue10449,
      );
    } catch {
      useChatgptComposerControllerValue8770.signal.aborted ||
        useChatgptComposerControllerHelper1142();
    } finally {
      useChatgptComposerControllerValue1880.current ===
        useChatgptComposerControllerValue8770 &&
        (useChatgptComposerControllerValue1880.current = null);
    }
  }
  function useChatgptComposerControllerHelper1145() {
    if (useChatgptComposerControllerValue1878 !== "loading") {
      if (
        useChatgptComposerControllerValue1878 === "playing" &&
        useChatgptComposerControllerValue1881.current != null
      ) {
        useChatgptComposerControllerValue1881.current.pause();
        useChatgptComposerControllerValue1881.current.currentTime = 0;
        return;
      }
      useChatgptComposerControllerHelper1144();
    }
  }
  return (
    <div className="not-prose clear-both my-4 max-w-2xl">
      <div className="rounded-2xl border border-token-border-light bg-token-main-surface-primary px-5 py-4 text-token-text-primary">
        <div className="flex items-center gap-3">
          <div className="flex min-w-0 items-center gap-2 text-sm font-medium text-token-text-secondary">
            {
              <UseChatgptComposerControllerValue223
                aria-hidden="true"
                className="icon-base shrink-0"
              />
            }
            {
              <AppInitialGft
                id="chatgpt.contentReferences.translation.title"
                defaultMessage="Translation"
                description="Visible title in a ChatGPT conversation translation card."
              />
            }
          </div>
          <div className="ms-auto flex shrink-0 items-center gap-1">
            {
              <AppInitialBlt
                tooltipContent={useChatgptComposerControllerValue1885}
              >
                <AppInitialYut
                  aria-busy={
                    useChatgptComposerControllerValue1878 === "loading" ||
                    undefined
                  }
                  aria-label={useChatgptComposerControllerValue1885}
                  aria-pressed={
                    useChatgptComposerControllerValue1878 === "playing"
                  }
                  color="ghost"
                  disabled={useChatgptComposerControllerValue1878 === "loading"}
                  onClick={useChatgptComposerControllerHelper1145}
                  size="icon"
                >
                  {useChatgptComposerControllerValue1884}
                </AppInitialYut>
              </AppInitialBlt>
            }
            {
              <AppInitialAR
                ariaLabel={useChatgptComposerControllerValue1876.formatMessage({
                  id: "chatgpt.contentReferences.translation.copy.ariaLabel",
                  defaultMessage: "Copy translation",
                  description:
                    "Accessible label for the icon button in a ChatGPT conversation translation card that copies the translated result to the clipboard.",
                })}
                iconOnly={true}
                onCopy={(useChatgptComposerControllerParam11222) => {
                  appInitialPH(
                    displayText,
                    useChatgptComposerControllerParam11222,
                  );
                }}
              />
            }
          </div>
        </div>
        <div
          className="mt-3 text-lg leading-7 break-words whitespace-pre-wrap"
          dir="auto"
        >
          {displayText}
        </div>
        {sourceText == null ? null : (
          <div className="mt-4 border-t border-token-border-light pt-3">
            <div className="text-xs font-medium text-token-text-secondary">
              {useChatgptComposerControllerValue1886 ?? (
                <AppInitialGft
                  id="chatgpt.contentReferences.translation.sourceLanguage.auto.label"
                  defaultMessage="Detect language"
                  description="Short source-language label in a translation card shown inside a ChatGPT conversation when the source language was detected automatically."
                />
              )}
            </div>
            <div
              className="mt-1 text-sm leading-5 break-words whitespace-pre-wrap text-token-text-secondary"
              dir="auto"
            >
              {sourceText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function useChatgptComposerControllerHelper175(
  useChatgptComposerControllerParam7618,
  useChatgptComposerControllerParam7619,
) {
  if (
    useChatgptComposerControllerParam7618 == null ||
    useChatgptComposerControllerParam7618.toLocaleLowerCase() === "auto"
  )
    return null;
  try {
    return (
      new Intl.DisplayNames([useChatgptComposerControllerParam7619], {
        type: "language",
      }).of(useChatgptComposerControllerParam7618.replaceAll("_", "-")) ??
      useChatgptComposerControllerParam7618
    );
  } catch {
    return useChatgptComposerControllerParam7618;
  }
}
function useChatgptComposerControllerHelper176(
  useChatgptComposerControllerParam11321,
) {
  useChatgptComposerControllerValue228 ===
    useChatgptComposerControllerParam11321 &&
    (useChatgptComposerControllerValue228 = null);
}
var useChatgptComposerControllerValue225,
  useChatgptComposerControllerValue226,
  useChatgptComposerControllerValue227,
  useChatgptComposerControllerValue228,
  useChatgptComposerControllerValue229 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue225 = appInitialIvt();
    appInitialMT();
    useChatgptComposerControllerValue226 = rolldownRuntimeS(appInitialLvt(), 1);
    appInitialHft();
    appInitialTI();
    appInitialBut();
    appInitialJR();
    appInitialSut();
    appInitialIlt();
    appInitialHlt();
    soundOnN();
    useChatgptComposerControllerValue221();
    useChatgptComposerControllerValue224();
    appInitialIft();
    appInitialQct();
    appInitialFH();
    useChatgptComposerControllerValue92();
    useChatgptComposerControllerValue227 = appInitialJvt();
    useChatgptComposerControllerValue228 = null;
  });
function useChatgptComposerControllerHelper177(
  useChatgptComposerControllerParam5178,
) {
  const UseChatgptComposerControllerHelper173 =
    useChatgptComposerControllerHelper173;
  const UseChatgptComposerControllerHelper178 =
    useChatgptComposerControllerHelper178;
  let { reference } = useChatgptComposerControllerParam5178,
    useChatgptComposerControllerValue11331 =
      useChatgptComposerControllerValue215.safeParse(reference);
  let useChatgptComposerControllerValue11332 =
    useChatgptComposerControllerValue11331;
  if (useChatgptComposerControllerValue11332.success) {
    let useChatgptComposerControllerValue14561;
    return (
      <UseChatgptComposerControllerHelper173
        reference={useChatgptComposerControllerValue11332.data}
      />
    );
  }
  return <UseChatgptComposerControllerHelper178 reference={reference} />;
}
function useChatgptComposerControllerHelper178(
  useChatgptComposerControllerParam478,
) {
  const UseChatgptComposerControllerHelper68 =
    useChatgptComposerControllerHelper68;
  const UseChatgptComposerControllerHelper167 =
    useChatgptComposerControllerHelper167;
  const UseChatgptComposerControllerHelper124 =
    useChatgptComposerControllerHelper124;
  let { reference } = useChatgptComposerControllerParam478,
    useChatgptComposerControllerValue2619 = appInitialJft(),
    useChatgptComposerControllerValue2620 =
      useChatgptComposerControllerValue231.useId(),
    useChatgptComposerControllerValue2621 = appInitialYU(appInitialVU()),
    useChatgptComposerControllerValue2622,
    useChatgptComposerControllerValue2623,
    useChatgptComposerControllerValue2624,
    useChatgptComposerControllerValue2625,
    useChatgptComposerControllerValue2626,
    useChatgptComposerControllerValue2627,
    useChatgptComposerControllerValue2628,
    useChatgptComposerControllerValue2629,
    useChatgptComposerControllerValue2630,
    useChatgptComposerControllerValue2631;
  useChatgptComposerControllerValue2630 = Symbol.for(
    "react.early_return_sentinel",
  );
  bb0: {
    let useChatgptComposerControllerValue7176 =
      useChatgptComposerControllerValue213.safeParse(reference);
    if (!useChatgptComposerControllerValue7176.success) {
      let useChatgptComposerControllerValue14619;
      useChatgptComposerControllerValue14619 = (
        <UseChatgptComposerControllerHelper68 reference={reference} />
      );
      useChatgptComposerControllerValue2630 =
        useChatgptComposerControllerValue14619;
      break bb0;
    }
    let useChatgptComposerControllerValue7177 =
      useChatgptComposerControllerHelper169(
        useChatgptComposerControllerValue7176.data.data.content,
      );
    if (useChatgptComposerControllerValue7177 == null) {
      let useChatgptComposerControllerValue14620;
      useChatgptComposerControllerValue14620 = (
        <UseChatgptComposerControllerHelper68 reference={reference} />
      );
      useChatgptComposerControllerValue2630 =
        useChatgptComposerControllerValue14620;
      break bb0;
    }
    useChatgptComposerControllerValue2623 =
      useChatgptComposerControllerHelper168(
        useChatgptComposerControllerValue7177,
      );
    useChatgptComposerControllerValue2631 = bg(
      useChatgptComposerControllerValue2623.meta?.title,
    );
    let useChatgptComposerControllerValue7178 =
      useChatgptComposerControllerValue2619.formatMessage({
        id: "chatgpt.contentReferences.chart.title",
        defaultMessage: "Chart",
        description: "Fallback title for a ChatGPT chart content reference",
      });
    useChatgptComposerControllerValue2624 = bg(
      useChatgptComposerControllerValue2623.meta?.description,
    );
    useChatgptComposerControllerValue2625 = bg(
      useChatgptComposerControllerValue2623.meta?.footer,
    );
    useChatgptComposerControllerValue2622 =
      useChatgptComposerControllerValue2619.formatMessage(
        {
          id: "chatgpt.contentReferences.chart.ariaLabel",
          defaultMessage: "{title} chart",
          description: "ARIA label for a ChatGPT chart content reference",
        },
        {
          title:
            useChatgptComposerControllerValue2631 ??
            useChatgptComposerControllerValue7178,
        },
      );
    useChatgptComposerControllerValue2626 =
      useChatgptComposerControllerValue2631 != null ||
      useChatgptComposerControllerValue2624 != null;
    useChatgptComposerControllerValue2627 =
      "my-3 h-[27rem] w-full overflow-clip text-token-text-primary";
    useChatgptComposerControllerValue2628 = "chatgpt-chart-content-reference";
    useChatgptComposerControllerValue2629 =
      useChatgptComposerControllerHelper134(
        useChatgptComposerControllerValue2623,
      );
  }
  if (
    useChatgptComposerControllerValue2630 !==
    Symbol.for("react.early_return_sentinel")
  )
    return useChatgptComposerControllerValue2630;
  let useChatgptComposerControllerValue2632 =
      useChatgptComposerControllerValue2626
        ? undefined
        : useChatgptComposerControllerValue2622,
    useChatgptComposerControllerValue2633 =
      useChatgptComposerControllerValue2631 == null
        ? undefined
        : useChatgptComposerControllerValue2620,
    useChatgptComposerControllerValue2634 =
      useChatgptComposerControllerValue2626 ? (
        <div className="min-h-[4.5rem] pe-12 pt-5">
          {useChatgptComposerControllerValue2631 == null ? null : (
            <div
              id={useChatgptComposerControllerValue2620}
              className="line-clamp-2 text-base font-semibold text-token-text-primary"
            >
              {useChatgptComposerControllerValue2631}
            </div>
          )}
          {useChatgptComposerControllerValue2624 == null ? null : (
            <p className="mt-1 line-clamp-2 text-sm text-token-text-secondary">
              {useChatgptComposerControllerValue2624}
            </p>
          )}
        </div>
      ) : null;
  let useChatgptComposerControllerValue2635 =
      useChatgptComposerControllerValue2625 == null ? "pb-4" : "pb-1",
    useChatgptComposerControllerValue2636 = appInitialWft(
      "min-h-0 flex-1",
      useChatgptComposerControllerValue2635,
    );
  let useChatgptComposerControllerValue2637 = (
    <UseChatgptComposerControllerHelper167
      ariaLabel={useChatgptComposerControllerValue2622}
      chart={useChatgptComposerControllerValue2623}
      theme={useChatgptComposerControllerValue2621}
    />
  );
  let useChatgptComposerControllerValue2638 = (
    <div className={useChatgptComposerControllerValue2636}>
      {useChatgptComposerControllerValue2637}
    </div>
  );
  let useChatgptComposerControllerValue2639 = (
    <UseChatgptComposerControllerHelper124
      chart={useChatgptComposerControllerValue2623}
      intl={useChatgptComposerControllerValue2619}
    />
  );
  let useChatgptComposerControllerValue2640 =
    useChatgptComposerControllerValue2625 == null ? null : (
      <div>
        <p className="line-clamp-2 text-xs text-token-text-tertiary">
          {useChatgptComposerControllerValue2625}
        </p>
      </div>
    );
  let useChatgptComposerControllerValue2641 = (
    <div className="group/app-widget relative flex h-full min-h-0 w-full flex-1 flex-col">
      {useChatgptComposerControllerValue2638}
      {useChatgptComposerControllerValue2639}
      {useChatgptComposerControllerValue2640}
    </div>
  );
  let useChatgptComposerControllerValue2642 = (
    <section
      aria-label={useChatgptComposerControllerValue2632}
      aria-labelledby={useChatgptComposerControllerValue2633}
      className="group/app-block group/keyboard-or-hover flex h-full w-full flex-col overflow-visible text-token-text-primary"
    >
      {useChatgptComposerControllerValue2634}
      {useChatgptComposerControllerValue2641}
    </section>
  );
  return (
    <div
      className={useChatgptComposerControllerValue2627}
      data-testid={useChatgptComposerControllerValue2628}
      style={useChatgptComposerControllerValue2629}
    >
      {useChatgptComposerControllerValue2642}
    </div>
  );
}

setChatgptContentReferenceRouterPeers({
  renderClientDefinedWidget: useChatgptComposerControllerHelper177,
});

var useChatgptComposerControllerValue230,
  useChatgptComposerControllerValue231,
  useChatgptComposerControllerValue232,
  useChatgptComposerControllerValue233 = rolldownRuntimeN(() => {
    useChatgptComposerControllerValue230 = appInitialIvt();
    appInitialTft();
    useChatgptComposerControllerValue231 = rolldownRuntimeS(appInitialLvt(), 1);
    appInitialHft();
    _appInitialU();
    useChatgptComposerControllerValue88();
    useChatgptComposerControllerValue137();
    useChatgptComposerControllerValue153();
    useChatgptComposerControllerValue208();
    useChatgptComposerControllerValue218();
    useChatgptComposerControllerValue216();
    useChatgptComposerControllerValue217();
    useChatgptComposerControllerValue229();
    useChatgptComposerControllerValue232 = appInitialJvt();
  });

setChatgptMarkdownRegistryPeerInits({
  productCarousel: useChatgptComposerControllerValue125,
  calculatorFallback: useChatgptComposerControllerValue128,
  attributionSources: useChatgptComposerControllerValue131,
  contentReferenceFootnote: useChatgptComposerControllerValue134,
  sportsCodeSurface: useChatgptComposerControllerValue233,
  sportsLabelSurface: useChatgptComposerControllerValue236,
  entityNav: chatgptEntityNavPeerInit,
  stubChromeA: useChatgptComposerControllerValue88,
  entityRichCard: chatgptEntityRichCardPeerInit,
  forecastSurface: chatgptForecastSurfacePeerInit,
  stockSurface: useChatgptComposerControllerValue239,
  imageGroupDirective: useChatgptComposerControllerValue116,
  videoSurface: useChatgptComposerControllerValue242,
  mapsAttribution: useChatgptComposerControllerValue248,
  mapboxMapWidget: useChatgptComposerControllerValue273,
  stubChromeB: useChatgptComposerControllerValue95,
  productEntitySurface: useChatgptComposerControllerValue278,
  webpageGroupSurface: useChatgptComposerControllerValue287,
  fileNavSurface: useChatgptComposerControllerValue291,
  navigationListSurface: useChatgptComposerControllerValue294,
  strixSurface: useChatgptComposerControllerValue296,
  titleCitationSurface: useChatgptComposerControllerValue299,
});


export {
  _useChatgptComposerControllerO,
  useChatgptComposerControllerA,
  _useChatgptComposerControllerD,
  useChatgptComposerControllerK,
  useChatgptComposerControllerU,
};
