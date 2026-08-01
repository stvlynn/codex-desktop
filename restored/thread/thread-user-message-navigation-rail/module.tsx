// Restored from ref/webview/assets/thread-user-message-navigation-rail-DUbKEIeX.js
// Wave FZ — full polished body from `thread-user-message-navigation-rail-DUbKEIeX/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 19 (verified 58/76).
// Careful split: module + bridges
/* split-lane-import-depth:1 */

import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexSourcesSectionType } from "../../analytics/codex-sources-section-type";
import { AppLogoFromHref } from "../../apps/app-logo-from-href";
import { ArtifactPreviewPageNav } from "../../artifact/artifact-preview-page-nav";
import { hypotDistance } from "../../artifact/hypot-distance";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_JL_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Rst_Init, ensureComposerEsm_RV_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init, ensureComposerEsm_Ytt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_TP_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime, reactDom } from "../../boundaries/react-cjs-runtime";
import { isAppUri } from "../../composer/app-plugin-uri";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { chatgptProjectQueryKey } from "../../conversation/chatgpt-conversation-query-keys";
import { ensureRemoteThreadHelpersInit } from "../../conversation/ensure-remote-thread-helpers-init";
import { lastTurnFromConversation } from "../../conversation/last-turn-from-conversation";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { areVisualizationFeatureGatesEnabled as AreVisualizationFeatureGatesEnabled } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { useEventCallback } from "../../hooks/use-event-callback";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconWG } from "../../icons/app-icon-wg";
import { unescapeMarkdownLinkBrackets } from "../../markdown/unescape-markdown-link-brackets";
import { unescapeMarkdownLinkPath } from "../../markdown/unescape-markdown-link-path";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { isPluginSchemeUrl } from "../../plugins/is-plugin-scheme-url";
import { ensureReviewScrollTargetInit } from "../../review/set-review-scroll-target";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { deferredUiZG } from "../../ui/deferred-ui-zg";
import { cx } from "../../ui/cx";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { motion } from "../../vendor/framer-motion";
import findLastIndex from "lodash/findLastIndex";
import { operationSource } from "../../ui/operation-source";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { getNullKeyedMapValue } from "../../utils/get-null-keyed-map-value";
import { hasInputItemsField } from "../../utils/has-input-items-field";
import { normalizeNonUrlToken } from "../../utils/normalize-non-url-token";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { ensurePullRequestMediaHDInit } from "../../utils/wave-as-gap-ensure-inits";
import { CODEX_THREAD_FIND_ACTIVE_EVENT } from "../thread-find-active-event";
import { initThreadScrollControllerContext, useThreadScrollController } from "../thread-scroll-controller-context";

/** Wave FZ unresolved companion (jsx-collision:browserTabIdsForMapKey@browser/browser-tab-ids-for-map-key.ts) */
const AppInitialCZ: any = undefined;
/** Wave FZ unresolved companion (missing-export:apps/use-app-host-update-status-infinite-query.ts) */
const useAppHostUpdateStatusInfiniteQuery: any = undefined;
/** Wave FZ unresolved companion (missing-export:analytics/codex-micro-device-lifecycle-step-type.ts) */
const CodexMicroDeviceLifecycleStepType: any = undefined;
/** Wave FZ unresolved companion (missing-export:icons/app-icon-gd.tsx) */
const AppIconGD: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-gg.tsx) */
const deferredUiGG: any = undefined;
/** Wave FZ unresolved companion (missing-export:hosts/git-action-include-unstaged-changes.tsx) */
const AppInitialMD: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ql.tsx) */
const DeferredQL: any = undefined;
/** Wave FZ unresolved companion (missing-export:appgen/site-query-atoms.ts) */
const ensureAppgenSiteQueriesInit: any = undefined;
/** Wave FZ unresolved companion (missing-export:files/file-csv.ts) */
const fileCsv: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/deferred-conversation-vj.ts) */
const deferredConversationVJ: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:ensureComposerEsm_VL_Init@composer/composer-esm-inits.ts) */
const AppInitialVL: any = undefined;
/** Wave FZ unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const QuickChatConversationTitleAtom: any = undefined;
/** Wave FZ unresolved companion (missing-export:plugins/slides-google-com.tsx) */
const SlidesGoogleCom: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-x9.ts) */
const deferredUiX9: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:isPleaseImplementThisPlan@prompts/is-please-implement-this-plan.ts) */
const AppInitialXot: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/sub-agent2.ts) */
const subAgent2: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-yot.tsx) */
const DeferredYot: any = undefined;
var alpha,
  Bravo,
  copper = esmInit(() => {
    react();
    Bravo = prism => <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...prism}>
        <path d="M9.12725 9.17656C9.39819 9.06319 9.7106 9.19089 9.82412 9.46172C9.93751 9.73275 9.80921 10.0444 9.53818 10.1578C8.54869 10.5718 7.63742 10.5982 6.65771 10.2359L6.46084 10.1578L6.36631 10.1062C6.16212 9.96683 6.07651 9.69872 6.17568 9.46172C6.27497 9.22478 6.52602 9.09763 6.76865 9.14531L6.87178 9.17656L7.01865 9.23438C7.74842 9.50658 8.38411 9.4874 9.12725 9.17656Z" fill="currentColor" />
        <path d="M5.66631 5.66719C6.21851 5.66719 6.66618 6.11502 6.66631 6.66719C6.66631 7.21947 6.21859 7.66719 5.66631 7.66719C5.11416 7.66703 4.66631 7.21937 4.66631 6.66719C4.66644 6.11511 5.11424 5.66735 5.66631 5.66719Z" fill="currentColor" />
        <path d="M10.3335 5.66719C10.8856 5.66735 11.3334 6.11511 11.3335 6.66719C11.3335 7.21937 10.8856 7.66703 10.3335 7.66719C9.78121 7.66719 9.3335 7.21947 9.3335 6.66719C9.33363 6.11502 9.78129 5.66719 10.3335 5.66719Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.9999 1.46875C8.29372 1.46875 8.53193 1.70697 8.53193 2.00078V2.46875H10.4671C11.0181 2.46875 11.464 2.46824 11.8241 2.49766C12.1902 2.52761 12.5151 2.59109 12.8163 2.74453L12.9905 2.84219C13.3872 3.08547 13.7101 3.43468 13.9226 3.85156L13.9765 3.96563C14.0918 4.23459 14.1432 4.52333 14.1694 4.84375C14.1912 5.11055 14.1952 5.42422 14.1968 5.79297C14.5926 5.98867 14.8654 6.3958 14.8655 6.86719V7.86719C14.8655 8.3407 14.5899 8.74887 14.1913 8.94375C14.1852 9.3005 14.1746 9.61715 14.1515 9.9C14.1094 10.4152 14.0283 10.8547 13.8569 11.2539L13.7772 11.4227C13.4299 12.1041 12.8885 12.6662 12.2233 13.0391L12.0882 13.1117C11.6443 13.3378 11.1548 13.4378 10.5663 13.4859C9.98384 13.5335 9.258 13.5328 8.3335 13.5328H7.66709C6.74267 13.5328 6.01674 13.5335 5.43428 13.4859C4.91911 13.4438 4.47957 13.362 4.08037 13.1906L3.91162 13.1117C3.18452 12.7412 2.59312 12.1497 2.22256 11.4227C1.99632 10.9786 1.89644 10.4887 1.84834 9.9C1.82523 9.61715 1.81366 9.30051 1.80771 8.94375C1.40945 8.74874 1.13428 8.34045 1.13428 7.86719V6.86719C1.13438 6.3958 1.40723 5.98867 1.80303 5.79297C1.80434 5.42421 1.80857 5.11056 1.83037 4.84375C1.8603 4.47753 1.9238 4.15285 2.07725 3.85156C2.32 3.37519 2.70789 2.98726 3.18428 2.74453C3.4855 2.59117 3.81033 2.52758 4.17646 2.49766C4.53661 2.46825 4.98237 2.46875 5.5335 2.46875H7.46787V2.00078C7.46787 1.70697 7.70609 1.46875 7.9999 1.46875ZM5.5335 3.53281C4.96484 3.53281 4.56996 3.53355 4.26318 3.55859C3.9628 3.58314 3.79347 3.62862 3.66709 3.69297C3.39093 3.83369 3.16642 4.05823 3.02568 4.33438C2.96128 4.46078 2.91587 4.62992 2.89131 4.93047C2.86624 5.23728 2.86553 5.63195 2.86553 6.20078V7.66719C2.86553 8.60929 2.86606 9.28415 2.90928 9.81328C2.952 10.3362 3.03394 10.6701 3.171 10.9391C3.43957 11.4661 3.86815 11.8947 4.39521 12.1633L4.49912 12.2125C4.75035 12.3205 5.06357 12.3876 5.521 12.425C6.05008 12.4682 6.72516 12.4688 7.66709 12.4688H8.3335C9.27554 12.4688 9.95049 12.4682 10.4796 12.425C11.0023 12.3823 11.3364 12.3003 11.6054 12.1633L11.7983 12.0555C12.237 11.7863 12.5946 11.4002 12.8296 10.9391L12.878 10.8352C12.9861 10.5839 13.0539 10.2709 13.0913 9.81328C13.1345 9.28416 13.1351 8.60927 13.1351 7.66719V6.20078C13.1351 5.63197 13.1343 5.23728 13.1093 4.93047C13.0908 4.70493 13.0606 4.55329 13.0194 4.43828L12.9749 4.33438C12.8518 4.09269 12.6642 3.89027 12.4343 3.74922L12.3335 3.69297C12.2072 3.6286 12.0376 3.58317 11.7374 3.55859C11.4307 3.53353 11.0356 3.53281 10.4671 3.53281H5.5335Z" fill="currentColor" />
      </svg>;
  }),
  delta,
  echo,
  falcon = esmInit(() => {
    delta = "_preview_1njv6_1";
    echo = {
      preview: delta
    };
  });
function ThreadUserMessageNavigationRailHelper1(quill) {
  let {
      item
    } = quill,
    reef;
  {
    let sage = lastTurnFromConversation(item.getLabel()),
      topaz = item.getPreview(),
      ultra = ensureAppgenSiteQueriesInit(lastTurnFromConversation(topaz.response)).trim(),
      vapor;
    if (sage.length === 0) {
      let acorn;
      acorn = <MemoizedFormattedMessage {...{
        id: "thread.userMessageNavigation.noContent",
        defaultMessage: "(No content)",
        description: "Fallback label for an empty user message in the floating thread navigation tooltip"
      }} />;
      vapor = acorn;
    } else if (AppInitialXot(sage)) {
      let bloom;
      bloom = <MemoizedFormattedMessage {...{
        id: "codex.userMessage.implementPlan",
        defaultMessage: "Yes, implement this plan",
        description: "Display text for the synthetic implement-plan follow-up prompt"
      }} />;
      vapor = bloom;
    } else {
      let coral;
      coral = <ThreadUserMessageNavigationRailHelper11 {...{
        label: sage
      }} />;
      vapor = coral;
    }
    let wheat = item.isHeartbeat ? <AppIconCct {...{
      className: "icon-xs shrink-0 text-token-description-foreground"
    }} /> : null;
    let yarn = <span className="min-w-0 truncate">
        {vapor}
      </span>;
    let zephyr;
    zephyr = <div className="flex min-w-0 items-center gap-1.5 font-medium">
        {wheat}
        {yarn}
      </div>;
    reef = <div data-thread-user-message-navigation-tooltip-preview={true} className="w-80 max-w-[calc(100vw-1rem)] overflow-hidden rounded-xl bg-token-dropdown-background/95 p-2 text-sm leading-5 text-token-foreground shadow-xl-spread ring-[0.5px] ring-token-border backdrop-blur-sm">
        {zephyr}
        {ultra.length > 0 ? <AreVisualizationFeatureGatesEnabled {...{
        className: cx(echo.preview, "mt-1 line-clamp-3"),
        components: slate,
        externalResourcePolicy: "restricted",
        pluginMentionPresentation: "text",
        textStyle: {
          kind: "small"
        },
        children: ultra
      }} /> : null}
        {topaz.outputs.length > 0 ? <div className="mt-2 flex min-w-0 items-center gap-3 text-token-description-foreground">
            {topaz.outputs.slice(0, river).map(gamma)}
            {topaz.outputs.length > river ? <span className="shrink-0 tabular-nums">
                {<MemoizedFormattedMessage {...{
            id: "thread.userMessageNavigation.moreOutputs",
            defaultMessage: "+{count}",
            description: "Count of additional turn outputs hidden from the prompt rail tooltip preview",
            values: {
              count: topaz.outputs.length - river
            }
          }} />}
              </span> : null}
          </div> : null}
      </div>;
  }
  return reef;
}
function gamma(drift, eagle) {
  return <ThreadUserMessageNavigationRailHelper8 key={`${drift.type}:${drift.label ?? eagle}`} {...{
    output: drift
  }} />;
}
function harbor(frost) {
  let {
    children
  } = frost;
  return <>{children}</>;
}
function indigo(glide) {
  let {
    alt
  } = glide;
  return <>{alt}</>;
}
function jade(honey) {
  let {
    children
  } = honey;
  return <table className="w-full table-fixed border-collapse text-sm leading-5">
      {children}
    </table>;
}
function kite(iris) {
  let {
    children
  } = iris;
  return <th className="truncate text-left font-medium">{children}</th>;
}
function lemon(jewel) {
  let {
    children
  } = jewel;
  return <td className="truncate">{children}</td>;
}
function ThreadUserMessageNavigationRailHelper8(knoll) {
  let {
      output
    } = knoll,
    lunar = marble(output);
  let moss = nickel(output);
  let north = <span className="max-w-36 truncate">
      {moss}
    </span>;
  return <span className="flex min-w-0 items-center gap-1.5">
      {lunar}
      {north}
    </span>;
}
function marble(orbit) {
  switch (orbit.type) {
    case "app":
      return <AppIconLV {...{
        className: "icon-sm shrink-0 text-token-charts-blue"
      }} />;
    case "commit":
      return <AppIconGD {...{
        className: "icon-sm shrink-0"
      }} />;
    case "file":
      return pearl.createElement(ensureReviewScrollTargetInit(orbit.label ?? undefined), {
        className: "icon-sm shrink-0"
      });
    case "google-drive":
      return <AppIconWG className="icon-sm shrink-0" />;
    case "image":
      return <QuickChatConversationTitleAtom {...{
        className: "icon-sm shrink-0"
      }} />;
    case "pull-request":
      return <AppInitialMD className="icon-sm shrink-0" />;
    case "review":
      return <Bravo {...{
        className: "icon-sm shrink-0"
      }} />;
    case "website":
      return <AppIconJtt {...{
        className: "icon-sm shrink-0"
      }} />;
  }
}
function nickel(pine) {
  if (pine.label != null) return pine.label;
  switch (pine.type) {
    case "app":
      return <MemoizedFormattedMessage {...{
        id: "thread.userMessageNavigation.appOutput",
        defaultMessage: "App preview",
        description: "Fallback label for an app output in the prompt rail tooltip"
      }} />;
    case "commit":
      return <MemoizedFormattedMessage {...{
        id: "thread.userMessageNavigation.commitOutput",
        defaultMessage: "Commit",
        description: "Label for a commit output in the prompt rail tooltip"
      }} />;
    case "file":
      return <MemoizedFormattedMessage {...{
        id: "thread.userMessageNavigation.fileOutput",
        defaultMessage: "File",
        description: "Fallback label for a file output in the prompt rail tooltip"
      }} />;
    case "google-drive":
      return <MemoizedFormattedMessage {...{
        id: "thread.userMessageNavigation.googleDriveOutput",
        defaultMessage: "Google Drive",
        description: "Fallback label for a Google Drive output in the prompt rail tooltip"
      }} />;
    case "image":
      return <MemoizedFormattedMessage {...{
        id: "thread.userMessageNavigation.imageOutput",
        defaultMessage: "Image",
        description: "Label for a generated image output in the prompt rail tooltip"
      }} />;
    case "pull-request":
      return <MemoizedFormattedMessage {...{
        id: "thread.userMessageNavigation.pullRequestOutput",
        defaultMessage: "Pull request",
        description: "Fallback label for a pull request output in the prompt rail tooltip"
      }} />;
    case "review":
      return <MemoizedFormattedMessage {...{
        id: "thread.userMessageNavigation.reviewOutput",
        defaultMessage: "Review",
        description: "Fallback label for a review output in the prompt rail tooltip"
      }} />;
    case "website":
      return <MemoizedFormattedMessage {...{
        id: "thread.userMessageNavigation.websiteOutput",
        defaultMessage: "Web preview",
        description: "Label for a website output in the prompt rail tooltip"
      }} />;
  }
}
function ThreadUserMessageNavigationRailHelper11(quest) {
  let {
      label
    } = quest,
    ridge;
  {
    let storm = [],
      tide = 0,
      unity = 0;
    for (; tide < label.length;) {
      let vale = subAgent2(label, tide);
      if (vale == null) break;
      tide = vale.end;
      let wave = unescapeMarkdownLinkBrackets(vale.label).trim(),
        apex = unescapeMarkdownLinkPath(vale.path),
        brook,
        cliff = wave,
        dusk;
      if (isAppUri(apex) || isPluginSchemeUrl(apex)) {
        brook = deferredUiZG(wave) ?? AppIconLV;
        cliff = deferredConversationVJ(wave);
      } else if (wave.startsWith("$")) {
        let elm = ensureRemoteThreadHelpersInit(wave);
        brook = ArtifactPreviewPageNav(elm.icon);
        cliff = elm.displayLabel ?? titleCaseColonSegments(elm.name);
      } else {
        let fern = normalizeNonUrlToken(apex);
        if (fern == null) continue;
        brook = <AppLogoFromHref href={fern} />;
        dusk = fern;
      }
      storm.push(label.slice(unity, vale.start));
      storm.push(<DeferredQL key={vale.start} {...{
        className: "first:pl-0",
        icon: brook,
        title: dusk,
        children: cliff
      }} />);
      unity = vale.end;
    }
    storm.push(label.slice(unity));
    ridge = <>{storm}</>;
  }
  return ridge;
}
var onyx,
  pearl,
  quartz,
  river,
  slate,
  timber = esmInit(() => {
    onyx = reactCompilerRuntime();
    SlidesGoogleCom();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_Rst_Init();
    pearl = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    DeferredYot();
    fileCsv();
    AppInitialVL();
    ensureComposerEsm_JL_Init();
    chatgptProjectQueryKey();
    hypotDistance();
    hasInputItemsField();
    ensureComposerEsm_Sst_Init();
    useAppHostUpdateStatusInfiniteQuery();
    CODEX_THREAD_FIND_ACTIVE_EVENT();
    ensureComposerEsm_RV_Init();
    CHATGPT_PRODUCT_ID();
    operationSource();
    ensureComposerEsm_Ytt_Init();
    deferredUiGG();
    ensureConversationPageEsm_TP_Init();
    ensurePullRequestMediaHDInit();
    copper();
    CodexMicroDeviceLifecycleStepType();
    ensureSkillsPageHelpersInit();
    falcon();
    river = 2;
    slate = {
      a: harbor,
      code: harbor,
      img: indigo,
      table: jade,
      td: lemon,
      th: kite
    };
  }),
  umbra,
  violet,
  willow,
  xenon,
  yellow = esmInit(() => {
    umbra = "_marker_fmcrx_1";
    violet = "_row_fmcrx_22";
    willow = "_railList_fmcrx_47";
    xenon = {
      marker: umbra,
      row: violet,
      railList: willow
    };
  });
export function ThreadUserMessageNavigationRailIcon(grove: unknown) {
  let {
    items,
    onRevealItem
  } = grove;
  if (items.length < kelp) return null;
  return <$e {...{
    items,
    onRevealItem
  }} />;
}
function $e(hill) {
  let {
      items,
      onRevealItem
    } = hill,
    {
      getScrollElement
    } = useThreadScrollController(),
    isle = ivory.useContext(getNullKeyedMapValue),
    juniper = CodexPluginActionResult(deferredUiX9),
    lagoon = items.at(-1)?.id ?? null,
    meadow = () => new Set(lagoon == null ? [] : [lagoon]);
  let [nest, oak] = ivory.useState(meadow),
    [petal, quiet] = ivory.useState(false),
    [rain, seed] = ivory.useState(null),
    [trail, urn] = ivory.useState(null),
    [vine, wind] = ivory.useState(false),
    [yarrow, azure] = ivory.useState(false),
    [birch, canyon] = ivory.useState(null),
    dew = ivory.useRef(null),
    ever = ivory.useRef(null),
    field = ivory.useRef(false),
    grain = ivory.useId(),
    haven = useIntl(),
    ink = usePrefersReducedMotion(),
    jadeite = items.map(zinc).join("\0");
  let kernel = jadeite,
    leaf = items.find(item => nest.has(item.id))?.id ?? lagoon;
  let maple = leaf,
    nimbus = () => {
      ever.current ?? basalt(dew.current, maple);
    };
  let opal = ivory.useEffectEvent(nimbus),
    plume = async (updraft, verge) => {
      let weir = getScrollElement();
      if (weir == null) return;
      let yard = amber(weir, updraft.id);
      if (yard == null && onRevealItem != null) {
        await onRevealItem(updraft);
        yard = amber(weir, updraft.id);
        at(yard, ink);
        return;
      }
      yard?.scrollIntoView({
        behavior: verge,
        block: "start"
      });
      at(yard, ink);
    };
  let quillow = useEventCallback(plume),
    silk = anchor => (juniper.logProductEvent(CodexSourcesSectionType, {}), quillow(anchor, "smooth"));
  let thorn = silk,
    upland = event => {
      let bolt = ever.current;
      bolt?.pointerId === event.pointerId && (ever.current = null, seed(null), bolt.pointerCaptureTarget.hasPointerCapture?.(event.pointerId) && bolt.pointerCaptureTarget.releasePointerCapture?.(event.pointerId), petal || (urn(null), wind(false)), window.setTimeout(() => {
        field.current = false;
      }, 0));
    };
  let vista = useEventCallback(upland),
    wisp = () => {
      let cog = getScrollElement(),
        disc = cog?.querySelector('[data-mcp-app-portal-target="true"]') ?? null;
      if (cog == null || disc == null) return;
      let edge = null,
        forge = () => {
          edge ??= window.requestAnimationFrame(() => {
            edge = null;
            canyon(cog.parentElement);
            let iron = cog.getBoundingClientRect(),
              joint = disc.getBoundingClientRect(),
              keystone = cog.offsetWidth > 0 ? iron.width / cog.offsetWidth : 1,
              latch = (joint.left - iron.left) / (keystone > 0 ? keystone : 1);
            azure(latch >= 48);
            opal();
          });
        },
        gear = new ResizeObserver(forge);
      gear.observe(cog);
      gear.observe(disc);
      let hinge = new MutationObserver(forge);
      return hinge.observe(cog.firstElementChild ?? cog, {
        attributes: true,
        attributeFilter: ["style"]
      }), window.addEventListener("resize", forge), forge(), () => {
        edge != null && window.cancelAnimationFrame(edge);
        gear.disconnect();
        hinge.disconnect();
        window.removeEventListener("resize", forge);
      };
    };
  let yonder;
  yonder = [getScrollElement];
  ivory.useEffect(wisp, yonder);
  let zenith, _e;
  zenith = () => {
    let motor = getScrollElement();
    if (motor == null || typeof IntersectionObserver > "u") return;
    let nut = new Set(),
      piston = new Map(),
      rivet = new Set(),
      screw = kernel.length === 0 ? [] : kernel.split("\0"),
      torque = new Set(screw),
      valve = () => {
        let drill = screw.findIndex(item => nut.has(item));
        if (drill === -1) return;
        let engine = hazel.default(screw, gasket => nut.has(gasket)),
          frame = new Set(screw.slice(drill, engine + 1));
        oak(handle => handle.size === frame.size && [...handle].every(item => frame.has(item)) ? handle : frame);
      },
      axle = new IntersectionObserver(insert => {
        for (let jacket of insert) {
          if (!(jacket.target instanceof HTMLElement)) continue;
          let knurl = piston.get(jacket.target);
          knurl != null && (jacket.isIntersecting ? nut.add(knurl) : nut.delete(knurl));
        }
        valve();
      }, {
        root: motor,
        rootMargin: `-${lotus}px 0px 0px 0px`
      }),
      bracket = () => {
        let lever = new Set();
        for (let mount of motor.querySelectorAll("[data-content-search-unit-key]")) {
          let nozzle = mount.dataset.contentSearchUnitKey;
          if (nozzle == null || !torque.has(nozzle)) continue;
          let platen = mount.closest(mint),
            ratchet = platen == null || lever.has(platen) ? mount : platen;
          lever.add(ratchet);
          piston.set(ratchet, nozzle);
          rivet.has(ratchet) || (axle.observe(ratchet), rivet.add(ratchet));
        }
        for (let shim of rivet) {
          if (lever.has(shim)) continue;
          let tappet = piston.get(shim);
          tappet != null && nut.delete(tappet);
          piston.delete(shim);
          axle.unobserve(shim);
          rivet.delete(shim);
        }
        valve();
      },
      clamp = new MutationObserver(arbor => {
        ember(arbor) && bracket();
      });
    return clamp.observe(motor, {
      childList: true,
      subtree: true
    }), bracket(), () => {
      clamp.disconnect();
      axle.disconnect();
    };
  };
  _e = [getScrollElement, kernel];
  ivory.useEffect(zenith, _e);
  let be = () => {
    rain ?? basalt(dew.current, maple);
  };
  let anvil;
  if (anvil = [maple, yarrow, rain], ivory.useLayoutEffect(be, anvil), !yarrow || birch == null || typeof document > "u") return null;
  let beacon = haven.formatMessage({
    id: "thread.userMessageNavigation.ariaLabel",
    defaultMessage: "User messages",
    description: "Aria label for the floating thread navigation rail that jumps between user messages"
  });
  let crag = {
    opacity: 1
  };
  let dome = {
    opacity: 0
  };
  let eddy = ink ? {
    duration: 0
  } : {
    duration: 0.15,
    ease: [0.23, 1, 0.32, 1]
  };
  let fjord = bushing => {
    !bushing && ever.current != null || (wind(bushing), bushing || urn(null));
  };
  let glen = trail?.button,
    hearth = trail?.item ?? items[0],
    inlet = <ThreadUserMessageNavigationRailHelper1 {...{
      item: hearth
    }} />;
  let jetty = rain == null ? undefined : true,
    knob = cx(xenon.railList, "vertical-scroll-fade-mask hide-scrollbar flex max-h-[min(70vh,40rem)] flex-col overflow-y-auto overscroll-contain [--edge-fade-distance:2.5rem]");
  let ledge = event => {
    if (event.button !== 0) return;
    let collar = daisy(items, event.currentTarget, event.target instanceof Element ? event.target : null);
    collar != null && (field.current = false, quiet(true), ever.current = {
      itemId: collar.item.id,
      pointerCaptureTarget: collar.button,
      pointerId: event.pointerId
    }, seed(collar.item.id), urn(collar), wind(true), collar.button.setPointerCapture?.(event.pointerId));
  };
  let mire, nook;
  mire = () => {
    quiet(true);
  };
  nook = () => {
    quiet(false);
    ever.current ?? urn(null);
  };
  let oxbow = event => {
    let dowel = ever.current;
    if (dowel == null) {
      let hub = daisy(items, event.currentTarget, event.target instanceof Element ? event.target : null);
      hub != null && urn(idler => idler?.item.id === hub.item.id ? idler : hub);
      return;
    }
    if (dowel.pointerId !== event.pointerId) return;
    if (event.buttons % 2 == 0) {
      vista(event);
      return;
    }
    let flange = event.currentTarget.getBoundingClientRect(),
      gib = daisy(items, event.currentTarget, document.elementFromPoint(flange.left + flange.width / 2, Math.max(flange.top, Math.min(event.clientY, flange.bottom - 1))));
    gib == null || gib.item.id === dowel.itemId || (ever.current = {
      ...dowel,
      itemId: gib.item.id
    }, seed(gib.item.id), urn(gib), field.current = true, quillow(gib.item, "instant"));
  };
  let pond = items.map((item, index) => <button key={item.id} data-thread-user-message-navigation-item-id={item.id} data-scrub-target={rain === item.id ? true : undefined} aria-current={nest.has(item.id) ? "true" : undefined} aria-describedby={vine && trail?.item.id === item.id ? grain : undefined} aria-label={haven.formatMessage({
    id: "thread.userMessageNavigation.jumpAriaLabel",
    defaultMessage: "Jump to user message {position}",
    description: "Aria label for a row in the floating thread user-message navigation rail"
  }, {
    position: index + 1
  })} className={cx(xenon.row, "group/navigation-row flex h-2.5 w-9 shrink-0 cursor-interaction items-center outline-none")} type="button" onClick={event => {
    if (field.current) {
      field.current = false;
      return;
    }
    urn({
      button: event.currentTarget,
      item
    });
    wind(true);
    thorn(item);
  }} onFocus={event => {
    urn({
      button: event.currentTarget,
      item
    });
    wind(true);
  }}>
      <span className="flex h-0.5 w-[30px] items-center">
        <span className={cx(xenon.marker, "h-0.5 bg-token-description-foreground opacity-40 group-focus-visible/navigation-row:bg-token-foreground group-focus-visible/navigation-row:opacity-100", rain == null && "group-hover/navigation-row:bg-token-foreground group-hover/navigation-row:opacity-100", nest.has(item.id) && rain !== item.id && "bg-token-foreground opacity-60", rain === item.id && "bg-token-foreground opacity-100")} />
      </span>
    </button>);
  let quarry = <div className="flex flex-col">
      {pond}
    </div>;
  let rapids = <div ref={dew} data-thread-user-message-navigation-rail-list={true} data-scrubbing={jetty} className={knob} onLostPointerCapture={vista} onPointerCancelCapture={vista} onPointerDownCapture={ledge} onPointerEnter={mire} onPointerLeave={nook} onPointerMove={oxbow} onPointerUpCapture={vista}>
      {quarry}
    </div>;
  let spur = <OptionalTooltip {...{
    align: "center",
    delayOpen: true,
    open: vine,
    onOpenChange: fjord,
    portalContainer: isle,
    positioningElement: glen,
    side: "right",
    sideOffset: 0,
    skipDelayKey: "thread-user-message-navigation",
    tooltipClassName: "!m-0 !z-20",
    tooltipId: grain,
    tooltipMaxWidth: "min(20rem, calc(100vw - 16px))",
    variant: "unstyled",
    tooltipContent: inlet,
    children: rapids
  }} />;
  let tor = <motion.nav {...{
    "aria-label": beacon,
    animate: crag,
    className: "absolute top-1/2 left-3 z-20 -translate-y-1/2 electron:left-4",
    initial: dome,
    transition: eddy,
    children: spur
  }} />;
  return jasper.createPortal(tor, birch);
}
function zinc(jig) {
  return jig.id;
}
function amber(keeper, lug) {
  return keeper.querySelector(`[data-content-search-unit-key="${flint(lug)}"]`);
}
function basalt(mandrel, nipple) {
  if (mandrel == null) return;
  let orifice = cedar(mandrel, nipple);
  orifice != null && (orifice.offsetTop < mandrel.scrollTop ? mandrel.scrollTop = orifice.offsetTop : orifice.offsetTop + orifice.offsetHeight > mandrel.scrollTop + mandrel.clientHeight && (mandrel.scrollTop = orifice.offsetTop + orifice.offsetHeight - mandrel.clientHeight + 1));
}
function cedar(pin, race) {
  return race == null || pin == null ? null : pin.querySelector(`[data-thread-user-message-navigation-item-id="${flint(race)}"]`);
}
function daisy(sleeve, trunnion, boss) {
  let cam = boss?.closest("[data-thread-user-message-navigation-item-id]");
  if (cam == null || !trunnion.contains(cam)) return null;
  let detent = sleeve.find(item => item.id === cam.dataset.threadUserMessageNavigationItemId);
  return detent == null ? null : {
    button: cam,
    item: detent
  };
}
function at(eccentric, follower) {
  (eccentric?.querySelector("[data-user-message-bubble]") ?? eccentric?.querySelector("[data-composer-attachment-pill]"))?.animate?.([{
    backgroundColor: nova
  }, {
    backgroundColor: nova,
    offset: 0.35
  }, {
    backgroundColor: olive
  }], {
    duration: follower ? 0 : 1400,
    easing: "cubic-bezier(0.23, 1, 0.32, 1)"
  });
}
function ember(guide) {
  return guide.some(item => [...item.addedNodes, ...item.removedNodes].some(_item => _item instanceof HTMLElement && (_item.matches(mint) || _item.querySelector(mint) != null)));
}
function flint(helix) {
  return typeof CSS < "u" && CSS.escape != null ? CSS.escape(helix) : helix.replace(/"/g, '\\"');
}
var garnet, hazel, ivory, jasper, $, kelp, lotus, mint, nova, olive;
esmInit(() => {
  garnet = reactCompilerRuntime();
  ensureComposerEsm_Utt_Init();
  ensureComposerEsm_Tft_Init();
  useBrowserExtensionPluginSetupQuery();
  hazel = commonJsInit(() => ({ default: findLastIndex }), 1);
  ensureComposerEsm_MT_Init();
  ivory = commonJsInit(react(), 1);
  jasper = commonJsInit(reactDom(), 1);
  ensureIntlFormattersInit();
  AppInitialCZ();
  ensureComposerEsm_Hlt_Init();
  ensureClientCoordinationServiceInit();
  ensureComposerEsm_K9_Init();
  ensureDropdownMenuPopoverInit();
  initThreadScrollControllerContext();
  timber();
  yellow();
  kelp = 4;
  lotus = 16;
  mint = "[data-turn-key], [data-content-search-turn-key]";
  nova = "color-mix(in srgb, var(--color-token-foreground) 14%, transparent)";
  olive = "color-mix(in srgb, var(--color-token-foreground) 5%, transparent)";
})();
