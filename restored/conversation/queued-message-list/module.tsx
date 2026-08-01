// Restored from ref/webview/assets/queued-message-list-B4kmrCV-.js
// Wave FY — full polished body from `queued-message-list-B4kmrCV-/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 15 (verified 50/64).
// AST split 1/1
/* split-lane-import-depth:1 */


import { CodexConversationalOnboardingExecutionAction } from "../../analytics/codex-conversational-onboarding-execution-action";
import { CodexOnboardingWizardAction } from "../../analytics/codex-onboarding-wizard-action";
import { CodexReferralInviteModalAction } from "../../analytics/codex-referral-invite-modal-action";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Sst_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Ist_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconQI } from "../../icons/app-icon-qi";
import { markdownToPlainText } from "../../markdown/markdown-to-plain-text";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { CopyButton } from "../../ui/copy-button";
import { ensureDndAxisLockModifiersInit, restrictToHorizontalAxis, restrictToVerticalAxis } from "../../ui/dnd-axis-lock-modifiers";
import { dndAxisLockModifiers } from "../../ui/dnd-axis-lock-modifiers-bindable";
import { SortableContext } from "../../ui/dnd-sortable-context";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { macOS5 } from "../../ui/mac-os5";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { RtlAwareToggleThumb } from "../../ui/rtl-aware-toggle-thumb";
import { sortable } from "../../ui/sortable";
import { useDndSensors } from "../../ui/use-dnd-sensors";
import { codexProjectKey } from "../../utils/codex-project-key";
import { filterItemsByMatchingPaths } from "../../utils/filter-items-by-matching-paths";
import { identity as Identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { joinStringsOrNull as JoinStringsOrNull } from "../../utils/join-strings-or-null";
import { moveArrayItem } from "../../utils/move-array-item";
import { stack, stackOffsetExpand } from "../../vendor/d3-shape-line-pie-stack";
import { ensureD3ShapeStackOffsetInit } from "../../workbook/ensure-d3-shape-stack-offset-init";
import { applyActive as ApplyActive } from "../apply-active";
import { composerBrowserTabMentionsContextLimitExceeded } from "../composer-browser-tab-mentions-context-limit-exceeded";
import { ConversationMarkdownText } from "../conversation-markdown-text";
import { QueuedMessageTraySurface } from "../queued-message-tray-surface";

const AppInitialCb: any = undefined;
/** Wave FY unresolved companion (jsx-collision:composerThreadGoalMaterializeError@conversation/composer-thread-goal-materialize-error.ts) */
const AppInitialDx: any = undefined;
/** Wave FY unresolved companion (missing-export:desktop/deferred-desktop-ert.ts) */
const deferredDesktopErt: any = undefined;
/** Wave FY unresolved companion (missing-export:desktop/deferred-ex.tsx) */
const DeferredEx: any = undefined;
/** Wave FY unresolved companion (missing-export:icons/app-icon-ko.tsx) */
const AppInitialKO: any = undefined;
/** Wave FY unresolved companion (jsx-collision:remoteHostedPipHiddenThreadIds@conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const AppInitialM: any = undefined;
/** Wave FY unresolved companion (jsx-collision:partitionCommentAttachments@composer/partition-comment-attachments.ts) */
const AppInitialOx: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredConversationP@conversation/deferred-conversation-p.ts) */
const AppInitialP: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredHostsRt@hosts/deferred-hosts-rt.ts) */
const AppInitialRt: any = undefined;
/** Wave FY unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureBooleanSchemaClusterInit@settings/ensure-boolean-schema-cluster-init.ts) */
const AppInitialWst: any = undefined;
/** Wave FY unresolved companion (jsx-collision:identity@utils/identity.ts) */
const AppInitialXu: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
var alpha,
  Bravo,
  copper = esmInit(() => {
    react();
    Bravo = nickel => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...nickel}>
        <path d="M2.66797 11V3.33301C2.66797 2.96574 2.96574 2.66797 3.33301 2.66797C3.70028 2.66797 3.99805 2.96574 3.99805 3.33301V11C3.99805 11.7109 3.99894 12.2044 4.03027 12.5879C4.06098 12.9634 4.11776 13.175 4.19824 13.333L4.26856 13.459C4.44487 13.7465 4.69781 13.9808 5 14.1348L5.12988 14.1904C5.27366 14.2419 5.46311 14.2797 5.74512 14.3027C6.12864 14.3341 6.62197 14.335 7.33301 14.335H15L15.0674 14.3418L14.1123 13.3867L14.0273 13.2822C13.8571 13.0242 13.8854 12.6735 14.1123 12.4463C14.3397 12.2189 14.6911 12.1906 14.9492 12.3613L15.0537 12.4463L17.1367 14.5293C17.3964 14.7889 17.3963 15.21 17.1367 15.4697L15.0537 17.5537C14.794 17.8134 14.372 17.8134 14.1123 17.5537C13.8526 17.294 13.8526 16.872 14.1123 16.6123L15.0664 15.6582L15 15.665H7.33301C6.64392 15.665 6.08696 15.6647 5.63672 15.6279C5.23614 15.5952 4.87531 15.5309 4.53906 15.3867L4.39649 15.3193C3.87528 15.0538 3.43887 14.6502 3.13477 14.1543L3.0127 13.9365C2.82084 13.5599 2.74153 13.1541 2.7041 12.6963C2.66732 12.2461 2.66797 11.6889 2.66797 11ZM15.665 15C15.665 15.0226 15.6594 15.0444 15.6572 15.0664L15.7256 14.999L15.6572 14.9316C15.6595 14.9541 15.665 14.9769 15.665 15ZM11.666 8.91797L11.8008 8.93164C12.1036 8.99381 12.3311 9.2618 12.3311 9.58301C12.3311 9.90422 12.1036 10.1722 11.8008 10.2344L11.666 10.248H7.5C7.13273 10.248 6.83496 9.95028 6.83496 9.58301C6.83496 9.21574 7.13273 8.91797 7.5 8.91797H11.666ZM14.166 4.33496L14.3008 4.34863C14.6036 4.41083 14.8311 4.67881 14.8311 5C14.8309 5.32109 14.6035 5.58924 14.3008 5.65137L14.166 5.66504H7.5C7.13284 5.66504 6.83514 5.36712 6.83496 5C6.83496 4.63273 7.13273 4.33496 7.5 4.33496H14.166Z" fill="currentColor" />
      </svg>;
  }),
  delta,
  Echo,
  falcon = esmInit(() => {
    react();
    Echo = onyx => <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...onyx}>
        <path d="M13.1293 7.34753C13.3565 7.12027 13.7081 7.09207 13.9662 7.26257L14.0707 7.34753L18.0707 11.3475C18.3304 11.6072 18.3304 12.0292 18.0707 12.2889L14.0707 16.2889C13.811 16.5486 13.389 16.5486 13.1293 16.2889C12.8696 16.0292 12.8696 15.6072 13.1293 15.3475L15.9935 12.4833H6.59998C4.57585 12.4833 2.93494 10.8424 2.93494 8.81824V5.31824C2.93494 4.95097 3.23271 4.6532 3.59998 4.6532C3.96724 4.6532 4.26501 4.95097 4.26501 5.31824V8.81824C4.26501 10.1078 5.31039 11.1532 6.59998 11.1532H15.9935L13.1293 8.28894L13.0443 8.18445C12.8738 7.92632 12.902 7.5748 13.1293 7.34753Z" fill="currentColor" />
      </svg>;
  });
export function QueuedMessageListIcon(bravo: unknown) {
  let {
      messages,
      isMessagePaused,
      isInterrupted,
      isSendNowDisabled,
      editingMessageId,
      hostId,
      isQueueingEnabled,
      onEditMessage,
      onDeleteMessage,
      onOpenInSideChatMessage,
      onSendNowMessage,
      onReorderMessages,
      onQueueingChange: echo,
      onResumeInterruptedQueue
    } = bravo,
    tide = useIntl(),
    unity = messages.map(harbor);
  let vale = unity,
    wave = {
      messageIds: vale,
      onReorderMessages
    };
  let apex = indigo(wave);
  if (messages.length === 0) return null;
  let brook = isInterrupted ? <CodexReferralInviteModalAction {...{
    title: <MemoizedFormattedMessage {...{
      id: "composer.queuedMessage.interruptedQueue",
      defaultMessage: "Queue paused because you interrupted",
      description: "Header shown above queued messages paused because the user interrupted the running turn"
    }} />,
    actions: <ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      onClick: onResumeInterruptedQueue,
      children: <MemoizedFormattedMessage {...{
        id: "composer.queuedMessage.resumeInterruptedQueue",
        defaultMessage: "Resume",
        description: "Button label to resume queued messages paused by an interruption"
      }} />
    }} />
  }} /> : null;
  let cliff = {
    container: document.body
  };
  let dusk;
  {
    let hill;
    hill = isle => {
      let {
          annotationCommentAttachments,
          designTweakCommentAttachments,
          diffCommentAttachments
        } = AppInitialOx(isle.context.commentAttachments ?? []),
        juniper = filterItemsByMatchingPaths(isle.context.fileAttachments, isle.context.generatedPastedTextAttachmentPaths);
      return <QueuedMessageListHelper3 key={isle.id} {...{
        messageId: isle.id,
        messageText: jade(tide, {
          text: AppInitialWst(isle.text),
          browserCommentCount: annotationCommentAttachments.length,
          designTweakCount: designTweakCommentAttachments.length,
          diffCommentCount: diffCommentAttachments.length,
          imageCommentCount: isle.context.imageCommentDrafts?.reduce(gamma, 0) ?? isle.context.imageCommentDraft?.comments.length ?? 0,
          pastedTextAttachmentPreview: isle.context.pastedTextAttachments?.[0]?.preview ?? (juniper == null ? undefined : ""),
          pastedTextAttachmentCount: isle.context.pastedTextAttachments?.length ?? juniper?.length,
          selectedTextAttachmentCount: isle.context.selectedTextAttachments?.length ?? 0,
          responseAnnotationCount: isle.context.responseTextAnnotations?.length ?? 0
        }),
        isPaused: isMessagePaused(isle.pausedReason),
        hostId,
        isEditing: isle.id === editingMessageId,
        isQueueingEnabled,
        isSendNowDisabled,
        onEditMessage,
        onDeleteMessage,
        onOpenInSideChatMessage,
        onSendNowMessage,
        onQueueingChange: echo
      }} />;
    };
    dusk = messages.map(hill);
  }
  let elm = <Identity {...{
    initial: false,
    children: dusk
  }} />;
  let fern = <SortableContext {...{
    items: vale,
    strategy: macOS5,
    children: elm
  }} />;
  let grove = <JoinStringsOrNull {...{
    ...apex,
    accessibility: cliff,
    children: fern
  }} />;
  return <QueuedMessageTraySurface {...{
    children: <div className="vertical-scroll-fade-mask hide-scrollbar flex max-h-[30dvh] flex-col gap-px overflow-x-hidden overflow-y-auto px-3 py-row-y">
            {brook}
            {grove}
          </div>
  }} />;
}
function gamma(pearl, quartz) {
  return pearl + quartz.comments.length;
}
function harbor(river) {
  return river.id;
}
function QueuedMessageListHelper3(slate) {
  let {
      messageId,
      messageText,
      isPaused,
      hostId,
      isEditing,
      isQueueingEnabled,
      isSendNowDisabled,
      onEditMessage,
      onDeleteMessage,
      onOpenInSideChatMessage,
      onSendNowMessage,
      onQueueingChange
    } = slate,
    timber = useIntl(),
    umbra = {
      id: messageId
    };
  let {
      attributes,
      listeners,
      setNodeRef,
      setActivatorNodeRef,
      transform,
      transition,
      isDragging
    } = codexProjectKey(umbra),
    violet = isPaused ? marble.retryQueuedMessage : marble.sendQueuedMessageNow,
    willow = deferredDesktopErt.Translate.toString(transform);
  let xenon = {
    transform: willow,
    transition
  };
  let yellow, zinc, amber, basalt;
  yellow = {
    height: 0,
    opacity: 0
  };
  zinc = {
    height: "auto",
    opacity: 1
  };
  amber = {
    height: 0,
    opacity: 0
  };
  basalt = {
    duration: 0.18
  };
  let cedar = isEditing || isDragging ? "opacity-60" : undefined,
    daisy = isDragging ? "opacity-100" : "opacity-0 group-hover:opacity-100",
    ember = IntlProvider("icon-2xs text-token-input-placeholder-foreground/70 pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 transition-opacity", daisy);
  let flint = <AppInitialKO className={ember} aria-hidden={true} />;
  let garnet = <Bravo {...{
    className: "icon-2xs text-token-input-placeholder-foreground/70"
  }} />;
  let hazel = <span ref={setActivatorNodeRef} className="relative -ml-3 flex h-4 cursor-grab items-center justify-center pl-3 active:cursor-grabbing" {...attributes} {...listeners}>
      {flint}
      {garnet}
    </span>;
  let ivory = isPaused ? <OptionalTooltip {...{
    side: "top",
    tooltipClassName: "max-w-80",
    tooltipBodyClassName: "text-center whitespace-normal leading-snug",
    tooltipContent: <div className="space-y-1 text-center">
            <p>
              {<MemoizedFormattedMessage {...{
          id: "composer.queuedMessage.pausedTooltip",
          defaultMessage: "This queued message could not be sent",
          description: "Primary tooltip text for a queued message that failed to send"
        }} />}
            </p>
            <p className="text-token-description-foreground">
              {<MemoizedFormattedMessage {...{
          id: "composer.queuedMessage.pausedTooltipRemedy",
          defaultMessage: "Retry, edit, or delete it to continue the queue",
          description: "Secondary tooltip text explaining how to resolve a queued message that failed to send"
        }} />}
            </p>
          </div>,
    children: <span className="mt-0.5 inline-flex shrink-0">
            {<ApplyActive {...{
        className: "icon-2xs text-token-editor-warning-foreground"
      }} />}
          </span>
  }} /> : null;
  let jasper = <ConversationMarkdownText className="line-clamp-1 max-h-lh min-w-0 leading-4 text-token-text-secondary" markdownClassName="![--markdown-line-height:var(--leading-4)] [&_blockquote]:mb-0 [&_blockquote]:!py-0 [&_blockquote]:!ps-0 [&_blockquote]:!leading-4" text={messageText} cwd={null} hostId={hostId} />;
  let kelp = <div className="flex min-w-0 items-start gap-1.5">
      {ivory}
      {jasper}
    </div>;
  let lotus = isPaused ? <div className="space-y-1 text-center">
      <p>
        {<MemoizedFormattedMessage {...{
        id: "composer.queuedMessage.retryTooltip",
        defaultMessage: "Try sending this queued message again",
        description: "Primary tooltip text for retrying a queued follow-up that failed to send"
      }} />}
      </p>
      <p className="text-token-description-foreground">
        {<MemoizedFormattedMessage {...{
        id: "composer.queuedMessage.retryTooltipRemedy",
        defaultMessage: "Edit or delete it if retry keeps failing",
        description: "Secondary tooltip text explaining alternatives when retrying a queued follow-up keeps failing"
      }} />}
      </p>
    </div> : <MemoizedFormattedMessage {...{
    id: "composer.queuedMessage.sendNowTooltip",
    defaultMessage: "Submit without interrupting the model",
    description: "Primary tooltip text for steering with a queued follow-up without interrupting the current model run"
  }} />;
  let mint = timber.formatMessage(violet);
  let nova = event => {
    event.stopPropagation();
    onSendNowMessage(messageId);
  };
  let be = <Echo {...{
    className: "icon-2xs shrink-0"
  }} />;
  let olive = <MemoizedFormattedMessage {...{
    ...violet
  }} />;
  let prism = <ReadLoginRouteQuerySnapshot {...{
    className: "cursor-interaction gap-1 px-2",
    "data-markdown-copy": "exclude",
    "aria-label": mint,
    color: "ghost",
    disabled: isSendNowDisabled,
    size: "default",
    onClick: nova,
    children: [be, olive]
  }} />;
  let quill = <OptionalTooltip {...{
    side: "top",
    tooltipClassName: "max-w-80",
    tooltipBodyClassName: "text-center whitespace-normal leading-snug",
    tooltipContent: lotus,
    children: prism
  }} />;
  let reef = timber.formatMessage({
    id: "composer.queuedMessage.delete",
    defaultMessage: "Delete queued message",
    description: "Aria label for deleting a queued message"
  });
  let sage = event => {
    event.stopPropagation();
    onDeleteMessage(messageId);
  };
  let topaz = <AppIconBO {...{
    className: "icon-2xs"
  }} />;
  let ultra = <ReadLoginRouteQuerySnapshot {...{
    className: "[&>svg]:icon-2xs",
    "aria-label": reef,
    color: "ghost",
    size: "icon",
    onClick: sage,
    children: topaz
  }} />;
  let _QueuedMessageListIcon = timber.formatMessage({
    id: "composer.queuedMessage.more",
    defaultMessage: "Queued message actions",
    description: "Aria label for the queued message row actions menu"
  });
  let vapor = <AppIconQI {...{
    className: "icon-2xs"
  }} />;
  let wheat = <ReadLoginRouteQuerySnapshot {...{
    className: "[&>svg]:icon-2xs",
    "aria-label": _QueuedMessageListIcon,
    color: "ghost",
    size: "icon",
    children: vapor
  }} />;
  let yarn = event => {
    event.stopPropagation();
    onEditMessage(messageId);
  };
  let zephyr = <MemoizedFormattedMessage {...{
    id: "composer.queuedMessage.edit",
    defaultMessage: "Edit message",
    description: "Menu item to edit a queued message"
  }} />;
  let acorn = <DropdownMenu.Item {...{
    LeftIcon: CopyButton,
    className: "text-token-description-foreground",
    onClick: yarn,
    children: zephyr
  }} />;
  let bloom = onOpenInSideChatMessage == null ? null : <DropdownMenu.Item {...{
    LeftIcon: AppInitialP,
    className: "text-token-description-foreground",
    onClick: event => {
      event.stopPropagation();
      onOpenInSideChatMessage(messageId);
    },
    children: <MemoizedFormattedMessage {...{
      id: "composer.queuedMessage.openInSideChat",
      defaultMessage: "Open in side chat",
      description: "Menu item to start a queued message as a side chat"
    }} />
  }} />;
  let $ = event => {
    event.stopPropagation();
    onQueueingChange(!isQueueingEnabled);
  };
  let coral = isQueueingEnabled ? <MemoizedFormattedMessage {...{
    id: "composer.queuedMessage.turnOff",
    defaultMessage: "Turn off queueing",
    description: "Menu item to switch the default follow up behavior to steer"
  }} /> : <MemoizedFormattedMessage {...{
    id: "composer.queuedMessage.turnOn",
    defaultMessage: "Turn on queueing",
    description: "Menu item to switch the default follow up behavior to queue"
  }} />;
  let drift = <DropdownMenu.Item {...{
    LeftIcon: Bravo,
    className: "text-token-description-foreground",
    onClick: $,
    children: coral
  }} />;
  let eagle = <DropdownMenuPopover {...{
    align: "end",
    triggerButton: wheat,
    children: [acorn, bloom, drift]
  }} />;
  let frost = <>
      {quill}
      {ultra}
      {eagle}
    </>;
  let glide = <CodexReferralInviteModalAction {...{
    className: cedar,
    icon: hazel,
    title: kelp,
    actions: frost
  }} />;
  return <ensureIntlFormattersInit.div {...{
    ref: setNodeRef,
    style: xenon,
    initial: yellow,
    animate: zinc,
    exit: amber,
    transition: basalt,
    className: "overflow-visible",
    children: glide
  }} />;
}
function indigo(honey) {
  let {
      messageIds,
      onReorderMessages
    } = honey,
    iris = {
      activationConstraint: {
        distance: 6
      }
    };
  let jewel = useDndSensors(stack(AppInitialRt, iris)),
    knoll = [restrictToHorizontalAxis, restrictToVerticalAxis];
  let lunar = moss => {
    let {
      active,
      over
    } = moss;
    if (!over) return;
    let north = String(active.id),
      orbit = String(over.id);
    if (north === orbit) return;
    let pine = messageIds.indexOf(north),
      quest = messageIds.indexOf(orbit);
    pine === -1 || quest === -1 || onReorderMessages(moveArrayItem(messageIds, pine, quest));
  };
  return {
    sensors: jewel,
    collisionDetection: stackOffsetExpand,
    modifiers: knoll,
    onDragEnd: lunar
  };
}
function jade(ridge, {
  text,
  browserCommentCount,
  designTweakCount,
  diffCommentCount,
  imageCommentCount,
  pastedTextAttachmentCount = 0,
  pastedTextAttachmentPreview,
  responseAnnotationCount,
  selectedTextAttachmentCount = 0
}) {
  if (text.trim().length > 0) return /^(?:`{3,}|~{3,})/.test(text.trim()) ? markdownToPlainText(text) : text;
  if (pastedTextAttachmentPreview != null) {
    let storm = pastedTextAttachmentPreview || ridge.formatMessage({
      id: "composer.queuedMessage.pastedTextAttachment",
      defaultMessage: "Pasted text",
      description: "Summary shown for an attached large text paste without displayable text in a queued message"
    });
    return pastedTextAttachmentCount <= 1 ? storm : ridge.formatMessage({
      id: "composer.queuedMessage.additionalPastedTextAttachments",
      defaultMessage: "{preview} (+{remainingCount, plural, one {# more pasted text attachment} other {# more pasted text attachments}})",
      description: "Summary shown for a queued message with multiple attached large text pastes"
    }, {
      preview: storm,
      remainingCount: pastedTextAttachmentCount - 1
    });
  }
  return browserCommentCount > 0 || responseAnnotationCount > 0 || designTweakCount > 0 || diffCommentCount > 0 || imageCommentCount > 0 ? CodexConversationalOnboardingExecutionAction(ridge, {
    annotationCount: browserCommentCount + responseAnnotationCount,
    designTweakCount,
    commentCount: diffCommentCount + imageCommentCount
  }) : selectedTextAttachmentCount > 0 ? ridge.formatMessage({
    id: "selectedTextAttachments.numSelections",
    defaultMessage: "{count, plural, one {# selection} other {# selections}}",
    description: "Number of selected text snippets attached to the message"
  }, {
    count: selectedTextAttachmentCount
  }) : "";
}
var kite, lemon, marble;
esmInit(() => {
  kite = reactCompilerRuntime();
  ensureD3ShapeStackOffsetInit();
  ensureDndAxisLockModifiersInit();
  sortable();
  dndAxisLockModifiers();
  ensureComposerEsm_Tft_Init();
  useBrowserExtensionPluginSetupQuery();
  ensureConversationPageEsm_Ist_Init();
  ensureIntlFormattersInit();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  ensureComposerEsm_Hlt_Init();
  AppInitialXu();
  AppInitialCb();
  AppInitialDx();
  AppInitialM();
  RtlAwareToggleThumb();
  copper();
  isIndeterminate();
  falcon();
  isRemoteControlConnectionFailedError();
  AppInitialVO();
  buildCodexDesktopRequestHeaders();
  CodexOnboardingWizardAction();
  DeferredEx();
  composerBrowserTabMentionsContextLimitExceeded();
  ensureComposerEsm_Sst_Init();
  marble = Identity({
    retryQueuedMessage: {
      id: "composer.queuedMessage.retry",
      defaultMessage: "Retry",
      description: "Button label to retry a queued follow-up that failed to send"
    },
    sendQueuedMessageNow: {
      id: "composer.queuedMessage.sendNow",
      defaultMessage: "Steer",
      description: "Button label for sending a queued follow-up as a steer"
    }
  });
})();
