// Restored from ref/webview/assets/home-artifact-templates-DS8wZJPM.js
// Floating home artifact template picker: skill carousel + file-attachment gallery.

import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
  type RefCallback,
} from "react";

import { CodexArtifactTemplateCarouselDismissReason } from "../analytics/codex-artifact-template-carousel-dismiss-reason";
import {
  createAppScope,
  ensureAppScopeHostInit,
  useAppScope,
} from "../runtime/app-scope-runtime";
import { toastAtom } from "../boundaries/toast-atom";
import { ComposerOverlayFloatingUi } from "../composer/composer-overlay-floating-ui";
import { getPluginDisplayName } from "../composer/get-plugin-display-name";
import { invokeDesktopRpc } from "../desktop/invoke-desktop-rpc";
import { useEventCallback } from "../hooks/use-event-callback";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../i18n/use-intl";
import { AppIconMH } from "../icons/app-icon-mh";
import { AppIconYlt } from "../icons/app-icon-ylt";
import { CloseIcon } from "../icons/close-icon";
import { usePrefersReducedMotion } from "../motion/use-prefers-reduced-motion";
import { filterArtifactTemplatePlugins } from "../plugins/filter-artifact-template-plugins";
import { esmInit } from "../runtime/rolldown-runtime";
import { Button } from "../ui/button";
import { ChromeBackgroundPanel } from "../ui/chrome-background-panel";
import { cx } from "../ui/cx";
import { LazyValueChildrenProvider } from "../ui/lazy-value-children-provider";
import { VerticalScrollFadeMask } from "../ui/vertical-scroll-fade-mask";
import { animate } from "../vendor/framer-motion";
import { clampNumber } from "../utils/clamp-number";
import { identity } from "../utils/identity";
import {
  HomeSuggestionStaggeredItem,
  ensureHomeSuggestionStaggeredItemInit,
} from "./home-suggestion-staggered-item";

/** Bundle `kY` — conversation app-scope brand (deferred). */
const conversationAppScope = createAppScope("conversation");
/** Bundle `rM` — composer controller / list keyboard host (deferred UI). */
const useComposerOverlayHost: any = undefined;
/** Bundle `iM` — composer state selector (deferred UI). */
const useComposerStateSelector: any = undefined;
/** Bundle `R_t` / useAppScopeValue. */
const useAppScopeValue: any = undefined;
/** Bundle `gW` / `vW` / `EY` / `DY` — conversation/environment atoms. */
const conversationHostIdAtom: any = undefined;
const conversationWorkspaceAtom: any = undefined;
const environmentsEnabledAtom: any = undefined;
const environmentsConfigAtom: any = undefined;
/** Bundle `jot` — statsig config pair. */
const useStatsigConfigValuePair: any = undefined;
/** Bundle `Ez` — skills list query for host. */
const useHostSkillsQuery: any = undefined;
/** Bundle `XR` — template plugin metadata query. */
const useTemplatePluginMetadataQuery: any = undefined;
/** Bundle `IT` / skill mtime query factory consumer. */
const useSkillPathMtimesQuery: any = undefined;
/** Bundle `FY` — skill kind from prosemirror doc. */
const skillNameFromProsemirrorDoc: any = undefined;
/** Bundle `vv` — whether user input is active in editor state. */
const isUserInputActiveInState: any = undefined;
/** Bundle `X3` — sort paths by rank map. */
const sortPathsByRankMap: any = undefined;
/** Bundle `CG` / `GG` / `MG` / `HG` / `G` / `PG` — analytics/journey helpers. */
const dismissArtifactTemplateCarousel: any = undefined;
const startTemplateCreatorPrompt: any = undefined;
const trackArtifactTemplateCarouselDismiss: any = undefined;
const trackArtifactTemplateKindShown: any = undefined;
const trackArtifactTemplateSkillUsed: any = undefined;
const startAttachmentJourney: any = undefined;
/** Bundle `DG` — journey atom key. */
const attachmentJourneyAtom: any = undefined;
/** Bundle `u7` — text selection helpers. */
const textSelectionAtEnd: any = undefined;
const textSelectionCreate: any = undefined;
/** Bundle `tR` — sized app icon image factory. */
const createSizedAppIconImage: any = undefined;
/** Bundle `tvt` — createAppScopeSelectAtom. */
const createAppScopeSelectAtom: any = undefined;
/** Bundle `Fft` — appScopeAtom. */
const appScopeAtom: any = undefined;

export type ArtifactTemplateKind =
  | "document"
  | "presentation"
  | "spreadsheet"
  | "google-docs"
  | "google-slides"
  | "google-sheets";

export type ArtifactFileTemplate = {
  id: string;
  kind: ArtifactTemplateKind;
  title: {
    id: string;
    defaultMessage: string;
    description: string;
  };
  filename: string;
  assetUrl: string;
  previewUrl: string;
};

export type ArtifactTemplateSkill = {
  path: string;
  name?: string;
  enabled?: boolean;
  interface?: { displayName?: string | null } | null;
};

export type ArtifactTemplatePickerProps = {
  canUseTemplateAttachments?: boolean;
  onAddFileAssetAttachment?: (args: {
    assetUrl: string;
    label: string;
  }) => Promise<{ path: string } | null | undefined>;
  placement?: "top" | "bottom" | string;
};

function bundledAsset(fileName: string): string {
  return new URL(`../../../ref/webview/assets/${fileName}`, import.meta.url)
    .href;
}

const FILE_TEMPLATES: ArtifactFileTemplate[] = [
  {
    id: "project-brief",
    kind: "document",
    title: {
      id: "home.artifactTemplates.projectBrief",
      defaultMessage: "Project brief",
      description: "Title for a document template card",
    },
    filename: "project-brief.docx",
    assetUrl: bundledAsset("project-brief-Dgi4V0mX.docx"),
    previewUrl: bundledAsset("project-brief-bL95n3Ke.png"),
  },
  {
    id: "meeting-notes",
    kind: "document",
    title: {
      id: "home.artifactTemplates.meetingNotes",
      defaultMessage: "Meeting notes",
      description: "Title for a document template card",
    },
    filename: "meeting-notes.docx",
    assetUrl: bundledAsset("meeting-notes-hfgk-Kdr.docx"),
    previewUrl: bundledAsset("meeting-notes-HtllKJ8V.png"),
  },
  {
    id: "report-outline",
    kind: "document",
    title: {
      id: "home.artifactTemplates.reportOutline",
      defaultMessage: "Report outline",
      description: "Title for a document template card",
    },
    filename: "report-outline.docx",
    assetUrl: bundledAsset("report-outline-DUfNp9Wv.docx"),
    previewUrl: bundledAsset("report-outline-CQViP9Z5.png"),
  },
  {
    id: "monthly-business-review",
    kind: "presentation",
    title: {
      id: "home.artifactTemplates.monthlyBusinessReview",
      defaultMessage: "Monthly Business Review",
      description: "Title for a presentation template card",
    },
    filename: "monthly-business-review.pptx",
    assetUrl: bundledAsset("monthly-business-review-CqJbQRLF.pptx"),
    previewUrl: bundledAsset("monthly-business-review-iy1-PqJc.png"),
  },
  {
    id: "sales-discovery",
    kind: "presentation",
    title: {
      id: "home.artifactTemplates.salesDiscovery",
      defaultMessage: "Sales discovery",
      description: "Title for a presentation template card",
    },
    filename: "sales-discovery.pptx",
    assetUrl: bundledAsset("sales-discovery-DI8H6s1v.pptx"),
    previewUrl: bundledAsset("sales-discovery-CFt_AKqR.png"),
  },
  {
    id: "design-review",
    kind: "presentation",
    title: {
      id: "home.artifactTemplates.designReview",
      defaultMessage: "Design review",
      description: "Title for a presentation template card",
    },
    filename: "design-review.pptx",
    assetUrl: bundledAsset("design-review-DfDJVwWu.pptx"),
    previewUrl: bundledAsset("design-review-D5ZTsvgZ.png"),
  },
  {
    id: "project-tracker",
    kind: "spreadsheet",
    title: {
      id: "home.artifactTemplates.projectTracker",
      defaultMessage: "Project tracker",
      description: "Title for a spreadsheet template card",
    },
    filename: "project-tracker.xlsx",
    assetUrl: bundledAsset("project-tracker-BL3pNzWv.xlsx"),
    previewUrl: bundledAsset("project-tracker-BsrXHgJI.png"),
  },
  {
    id: "budget-planner",
    kind: "spreadsheet",
    title: {
      id: "home.artifactTemplates.budgetPlanner",
      defaultMessage: "Budget planner",
      description: "Title for a spreadsheet template card",
    },
    filename: "budget-planner.xlsx",
    assetUrl: bundledAsset("budget-planner-B_xX3PJl.xlsx"),
    previewUrl: bundledAsset("budget-planner-DdzCe8wU.png"),
  },
  {
    id: "content-calendar",
    kind: "spreadsheet",
    title: {
      id: "home.artifactTemplates.contentCalendar",
      defaultMessage: "Content calendar",
      description: "Title for a spreadsheet template card",
    },
    filename: "content-calendar.xlsx",
    assetUrl: bundledAsset("content-calendar-D2hO7r4o.xlsx"),
    previewUrl: bundledAsset("content-calendar-Ct37j4gK.png"),
  },
];

const TEMPLATE_CREATOR_URI = "plugin://template-creator@openai-primary-runtime";
const TEMPLATE_CREATOR_MENTION = `[@Template Creator](${TEMPLATE_CREATOR_URI})`;

const createTemplatePrompts = identity({
  document: {
    id: "home.artifactTemplates.createDocument.prompt",
    defaultMessage:
      "Create a new document template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
    description:
      "Composer prefill for creating a document template from a reference file",
  },
  presentation: {
    id: "home.artifactTemplates.createPresentation.prompt",
    defaultMessage:
      "Create a new presentation template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
    description:
      "Composer prefill for creating a presentation template from a reference file",
  },
  spreadsheet: {
    id: "home.artifactTemplates.createSpreadsheet.prompt",
    defaultMessage:
      "Create a new spreadsheet template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.",
    description:
      "Composer prefill for creating a spreadsheet template from a reference file",
  },
  "google-docs": {
    id: "home.artifactTemplates.createGoogleDoc.prompt",
    defaultMessage:
      "Create a new Google Doc template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to provide a Google Doc link and if needed interview me on how and when to use the template.",
    description:
      "Composer prefill for creating a Google Doc template from a Google Doc link",
  },
  "google-slides": {
    id: "home.artifactTemplates.createGoogleSlides.prompt",
    defaultMessage:
      "Create a new Google Slides template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to provide a Google Slides link and if needed interview me on how and when to use the template.",
    description:
      "Composer prefill for creating a Google Slides template from a Google Slides link",
  },
  "google-sheets": {
    id: "home.artifactTemplates.createGoogleSheet.prompt",
    defaultMessage:
      "Create a new Google Sheet template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to provide a Google Sheet link and if needed interview me on how and when to use the template.",
    description:
      "Composer prefill for creating a Google Sheet template from a Google Sheet link",
  },
});

function templatesForKind(kind: ArtifactTemplateKind): ArtifactFileTemplate[] {
  return FILE_TEMPLATES.filter((item) => item.kind === kind);
}

function isDocumentLikeKind(kind: ArtifactTemplateKind): boolean {
  return kind === "document" || kind === "google-docs";
}

function maxScrollLeft(element: HTMLElement): number {
  return Math.max(0, element.scrollWidth - element.clientWidth);
}

function isTemplateCreatorSkill(skill: ArtifactTemplateSkill): boolean {
  return (
    skill.enabled === true &&
    (skill.name === "template-creator" ||
      skill.name?.endsWith(":template-creator") === true)
  );
}

function skillPath(skill: ArtifactTemplateSkill): string {
  return skill.path;
}

type CreateTemplateCardProps = {
  isDocumentTemplates: boolean;
  label: string;
  onClick: () => void;
};

function CreateTemplateCard({
  isDocumentTemplates,
  label,
  onClick,
}: CreateTemplateCardProps): ReactElement {
  const aspect = isDocumentTemplates ? "aspect-[4/5]" : "aspect-video";
  return (
    <button
      type="button"
      className="group relative flex w-full cursor-interaction flex-col gap-2 rounded-2xl text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border"
      onClick={onClick}
    >
      <div
        className={cx(
          "relative flex items-center justify-center overflow-hidden rounded-xl border border-token-border bg-token-bg-tertiary shadow-sm ring-4 ring-transparent group-hover:border-token-border-heavy group-hover:bg-token-foreground/5 group-focus-visible:ring-token-focus-border",
          aspect,
        )}
      >
        <AppIconMH className="icon-lg text-token-text-tertiary/60 group-hover:text-token-icon-foreground" />
      </div>
      <div className="min-w-0 -translate-y-0.5 truncate pr-2 pb-1 pl-0.5 text-sm leading-5 font-normal tracking-normal text-token-text-secondary group-hover:text-token-text-primary group-focus-visible:text-token-text-primary">
        {label}
      </div>
    </button>
  );
}

type FileTemplateGalleryProps = {
  createTemplateCard: ReactNode;
  kind: ArtifactTemplateKind;
  onAttachTemplate: (
    template: ArtifactFileTemplate,
  ) => Promise<unknown | null | undefined>;
};

function FileTemplateGallery({
  createTemplateCard,
  kind,
  onAttachTemplate,
}: FileTemplateGalleryProps): ReactElement {
  const appScope = useAppScope(conversationAppScope);
  const intl = useIntl();
  const composer = useComposerOverlayHost?.();
  const [attachingId, setAttachingId] = useState<string | null>(null);
  const isDocumentTemplates = isDocumentLikeKind(kind);
  const templates = templatesForKind(kind).slice(
    0,
    !isDocumentTemplates && createTemplateCard != null ? 2 : undefined,
  );

  const attachTemplate = async (template: ArtifactFileTemplate) => {
    setAttachingId(template.id);
    try {
      if ((await onAttachTemplate(template)) == null) return;
      composer?.focus?.();
    } catch {
      appScope.value?.get?.(toastAtom)?.danger?.(
        intl.formatMessage({
          id: "home.artifactTemplates.attachError",
          defaultMessage: "Unable to attach template",
          description:
            "Toast shown when attaching a document, presentation, or spreadsheet template fails",
        }),
      );
    } finally {
      setAttachingId(null);
    }
  };

  return (
    <div
      className={cx(
        "hide-scrollbar grid snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto scroll-pr-4 scroll-pl-3 pr-4 pl-3 py-1 sm:snap-none sm:grid-flow-row sm:auto-cols-auto sm:overflow-visible",
        isDocumentTemplates
          ? "auto-cols-[min(14rem,80vw)] sm:grid-cols-4"
          : "auto-cols-[min(18rem,85vw)] sm:grid-cols-3",
      )}
      role="group"
      aria-label={intl.formatMessage({
        id: "home.artifactTemplates.gallery",
        defaultMessage: "Templates",
        description:
          "Accessible label for the document, presentation, or spreadsheet template gallery",
      })}
    >
      {templates.map((item, index) => {
        const isAttaching = attachingId === item.id;
        return (
          <HomeSuggestionStaggeredItem
            key={item.id}
            className="-m-1 min-w-0 snap-start p-1 sm:snap-none"
            index={index}
            variant="card"
          >
            <button
              type="button"
              className="group relative flex w-full cursor-interaction flex-col gap-2 rounded-2xl text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border disabled:cursor-default disabled:opacity-70"
              aria-label={intl.formatMessage(
                {
                  id: "home.artifactTemplates.attach",
                  defaultMessage: "Attach {title}",
                  description:
                    "Accessible label for selecting a document, presentation, or spreadsheet template",
                },
                { title: intl.formatMessage(item.title) },
              )}
              disabled={attachingId != null}
              onClick={() => void attachTemplate(item)}
            >
              <div
                className={cx(
                  "relative overflow-hidden rounded-xl border border-token-border bg-token-main-surface-primary shadow-sm ring-4 ring-transparent group-hover:border-token-border-heavy group-focus-visible:ring-token-focus-border",
                  isDocumentTemplates ? "aspect-[4/5]" : "aspect-video",
                )}
              >
                <img
                  src={item.previewUrl}
                  alt=""
                  className={cx(
                    "h-full w-full object-top",
                    isDocumentTemplates ? "object-contain" : "object-cover",
                    isAttaching && "motion-safe:animate-pulse",
                  )}
                  draggable={false}
                />
                <div
                  aria-hidden={true}
                  className="pointer-events-none absolute inset-0 flex items-center justify-center bg-token-text-primary/25 text-token-main-surface-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <AppIconMH className="icon-lg" />
                </div>
              </div>
              <div className="min-w-0 -translate-y-0.5 truncate pr-2 pb-1 pl-0.5 text-sm leading-5 font-normal tracking-normal text-token-text-secondary group-hover:text-token-text-primary group-focus-visible:text-token-text-primary">
                <MemoizedFormattedMessage {...item.title} />
              </div>
            </button>
          </HomeSuggestionStaggeredItem>
        );
      })}
      {createTemplateCard == null ? null : (
        <HomeSuggestionStaggeredItem
          className="-m-1 min-w-0 snap-start p-1 sm:snap-none"
          index={templates.length}
          variant="card"
        >
          {createTemplateCard}
        </HomeSuggestionStaggeredItem>
      )}
    </div>
  );
}

const skillIconCache = new WeakMap<
  object,
  (props: { className?: string }) => ReactNode
>();

function skillPreviewIcon(
  skill: ArtifactTemplateSkill,
): (props: { className?: string }) => ReactNode {
  const cached = skillIconCache.get(skill as object);
  if (cached != null) return cached;
  const Preview =
    createSizedAppIconImage?.(skill, { size: "large" }) ??
    (({ className }: { className?: string }) => (
      <div className={cx("bg-token-bg-tertiary", className)} />
    ));
  skillIconCache.set(skill as object, Preview);
  return Preview;
}

/**
 * Bundle export `ArtifactTemplatePicker` (chunk `Ot`).
 */
export function ArtifactTemplatePicker(
  props: ArtifactTemplatePickerProps,
): ReactNode {
  const {
    canUseTemplateAttachments = false,
    onAddFileAssetAttachment,
    placement = "top",
  } = props;

  const intl = useIntl();
  const appScope = useAppScope(conversationAppScope);
  const composer = useComposerOverlayHost?.();
  const scrollerRef = useRef<HTMLElement | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const scrollAnimationRef = useRef<{ stop: () => void } | null>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const hostId = useAppScopeValue?.(conversationHostIdAtom);
  const workspaceId = useAppScopeValue?.(conversationWorkspaceAtom);
  const [skillsRefreshNonce] = useStatsigConfigValuePair?.(
    "skills_refresh_nonce",
  ) ?? [0];
  const environmentsEnabled = useAppScopeValue?.(environmentsEnabledAtom);
  const environmentsConfig = useAppScopeValue?.(environmentsConfigAtom);

  const userInputActive = useComposerStateSelector?.(
    composer,
    (host: { view?: { state?: unknown } }) =>
      isUserInputActiveInState?.(host?.view?.state) ?? false,
  );

  const templateKind: ArtifactTemplateKind | null = useComposerStateSelector?.(
    composer,
    (host: { view?: { state?: { doc?: unknown } } }) =>
      environmentsEnabled && !userInputActive
        ? (skillNameFromProsemirrorDoc?.(
            host?.view?.state?.doc,
            environmentsConfig,
          ) ?? null)
        : null,
  );

  const skillsQueryEnabled = templateKind != null;
  const { isLoading: skillsLoading, skills = [] } = useHostSkillsQuery?.(
    hostId ?? undefined,
    workspaceId,
    {
      enabled: skillsQueryEnabled,
    },
  ) ?? { isLoading: false, skills: [] };

  const skillsForKind =
    templateKind == null ? [] : (skills as ArtifactTemplateSkill[]);

  const { data: pluginMetadata, isLoading: metadataLoading } =
    useTemplatePluginMetadataQuery?.(
      skillsForKind,
      workspaceId,
      skillsRefreshNonce,
    ) ?? { data: null, isLoading: false };

  const filteredSkills: ArtifactTemplateSkill[] =
    templateKind == null || pluginMetadata == null
      ? []
      : (filterArtifactTemplatePlugins(
          skills,
          templateKind,
          pluginMetadata,
        ) as ArtifactTemplateSkill[]);

  const { data: mtimeMap } = useSkillPathMtimesQuery?.(
    appScopeAtom ?? appScope,
    {
      hostId: workspaceId,
      paths: filteredSkills.map(skillPath),
      skillsRefreshNonce,
    },
  ) ?? { data: null };

  const rankedSkills: ArtifactTemplateSkill[] =
    mtimeMap == null
      ? filteredSkills
      : ((sortPathsByRankMap?.(filteredSkills, mtimeMap) as
          | ArtifactTemplateSkill[]
          | undefined) ?? filteredSkills);

  const hadSkillsRef = useRef(false);
  useEffect(() => {
    if (!environmentsEnabled) {
      hadSkillsRef.current = false;
      return;
    }
    if (!userInputActive) {
      if (rankedSkills.length > 0) {
        hadSkillsRef.current = true;
        return;
      }
      if (!skillsLoading && !metadataLoading && hadSkillsRef.current) {
        dismissArtifactTemplateCarousel?.(appScope);
      }
    }
  }, [
    skillsLoading,
    metadataLoading,
    appScope,
    userInputActive,
    environmentsEnabled,
    rankedSkills.length,
  ]);

  const templateCreator = (skills as ArtifactTemplateSkill[]).find(
    isTemplateCreatorSkill,
  );
  const showCreateCard = templateCreator != null && canUseTemplateAttachments;

  const lastKindRef = useRef<ArtifactTemplateKind | null>(null);
  useEffect(() => {
    if (templateKind != null && lastKindRef.current !== templateKind) {
      lastKindRef.current = templateKind;
      trackArtifactTemplateKindShown?.(appScope, templateKind);
    }
  }, [appScope, templateKind]);

  const updateScrollEdges = useEventCallback((element: HTMLElement) => {
    const max = maxScrollLeft(element);
    setCanScrollBack(element.scrollLeft > 1);
    setCanScrollForward(element.scrollLeft < max - 1);
  });

  const scrollerCallbackRef: RefCallback<HTMLDivElement> = (element) => {
    resizeObserverRef.current?.disconnect();
    scrollerRef.current = element;
    if (element == null || rankedSkills.length === 0) return;
    updateScrollEdges(element);
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => updateScrollEdges(element));
    observer.observe(element);
    if (element.firstElementChild != null)
      observer.observe(element.firstElementChild);
    if (element.lastElementChild != null)
      observer.observe(element.lastElementChild);
    resizeObserverRef.current = observer;
  };

  if (templateKind == null) return null;

  const documentLike = isDocumentLikeKind(templateKind);
  const cardBasis = documentLike
    ? "basis-[min(14rem,80vw)] sm:basis-[calc((100%_+_2rem)/5)]"
    : "basis-[min(18rem,85vw)] sm:basis-1/3";
  const growCards =
    documentLike && rankedSkills.length + Number(!!showCreateCard) < 5;

  const insertSkillTemplate = (skill: ArtifactTemplateSkill) => {
    if (composer?.view == null) {
      composer?.insertSkillMentionAtSelection?.(skill);
      trackArtifactTemplateSkillUsed?.(appScope, skill);
      return;
    }
    const { state, dispatch } = composer.view;
    const endSelection = textSelectionAtEnd?.atEnd?.(state.doc);
    if (endSelection != null) {
      const nodeBefore = endSelection.$from?.nodeBefore;
      dispatch(state.tr.setSelection(endSelection));
      if (
        nodeBefore != null &&
        (!nodeBefore.isText || !/\s$/.test(nodeBefore.text ?? ""))
      ) {
        composer.insertTextAtSelection?.(" ");
      }
    }

    const prompt = intl.formatMessage(
      {
        id: "home.artifactTemplates.useTemplate.prompt",
        defaultMessage: "Use the {templateName} template.",
        description: "Composer text added after selecting an artifact template",
      },
      { templateName: "__CODEX_TEMPLATE_NAME_PLACEHOLDER__" },
    );
    const placeholderIndex = prompt.indexOf(
      "__CODEX_TEMPLATE_NAME_PLACEHOLDER__",
    );
    const displayName = getPluginDisplayName(
      skill as { name: string; interface?: { displayName?: string | null } },
    );

    if (placeholderIndex === -1) {
      composer.insertSkillMentionAtSelection?.(skill);
      composer.insertTextAtSelection?.(prompt);
      trackArtifactTemplateSkillUsed?.(appScope, skill);
      return;
    }

    const before = prompt.slice(0, placeholderIndex);
    const after = prompt
      .slice(placeholderIndex + 35)
      .replaceAll("__CODEX_TEMPLATE_NAME_PLACEHOLDER__", () => displayName);
    composer.insertTextAtSelection?.(before);
    composer.insertSkillMentionAtSelection?.(skill);
    const { state: nextState, dispatch: nextDispatch } = composer.view;
    const from = nextState.selection.from - 1;
    const tr = nextState.tr.insertText(after, from, nextState.selection.from);
    if (textSelectionCreate != null) {
      tr.setSelection(textSelectionCreate.create(tr.doc, from + after.length));
    }
    nextDispatch(tr);
    trackArtifactTemplateSkillUsed?.(appScope, skill);
  };

  const openTemplateCreator = () => {
    startTemplateCreatorPrompt?.(appScope, TEMPLATE_CREATOR_URI);
    composer?.appendPromptText?.(
      intl.formatMessage(createTemplatePrompts[templateKind], {
        templateCreator: TEMPLATE_CREATOR_MENTION,
      }),
    );
  };

  const createCard = showCreateCard ? (
    <CreateTemplateCard
      isDocumentTemplates={documentLike}
      label={intl.formatMessage({
        id: "home.artifactTemplates.create",
        defaultMessage: "Create a template",
        description:
          "Accessible label for adding the Template Creator skill from the artifact template gallery",
      })}
      onClick={openTemplateCreator}
    />
  ) : null;

  const scrollByPage = (direction: -1 | 1) => {
    const element = scrollerRef.current;
    if (element == null) return;
    const max = maxScrollLeft(element);
    const paddingLeft = Number.parseFloat(
      getComputedStyle(element).scrollPaddingLeft,
    );
    const target = clampNumber(
      element.scrollLeft +
        direction *
          (element.clientWidth - (Number.isNaN(paddingLeft) ? 0 : paddingLeft)),
      0,
      max,
    );
    scrollAnimationRef.current?.stop();
    element.style.removeProperty("scroll-snap-type");
    if (prefersReducedMotion) {
      element.scrollTo({ left: target });
      updateScrollEdges(element);
      return;
    }
    element.style.scrollSnapType = "none";
    scrollAnimationRef.current = animate(element.scrollLeft, target, {
      duration: 0.2,
      ease: [0.165, 0.84, 0.44, 1],
      onUpdate: (value: number) => element.scrollTo({ left: value }),
      onComplete: () => {
        element.style.removeProperty("scroll-snap-type");
        if (scrollerRef.current === element) updateScrollEdges(element);
      },
    }) as { stop: () => void };
  };

  const title = (
    <div className="min-w-0 truncate">
      <MemoizedFormattedMessage
        id="home.artifactTemplates.title"
        defaultMessage="Templates"
        description="Title for the floating artifact template picker"
      />
    </div>
  );

  const scrollControls =
    rankedSkills.length > 0 ? (
      <>
        <Button
          aria-label={intl.formatMessage({
            id: "home.artifactTemplates.previous",
            defaultMessage: "Show previous templates",
            description:
              "Accessible label for scrolling the artifact template gallery backward",
          })}
          color="ghost"
          disabled={!canScrollBack}
          onClick={() => scrollByPage(-1)}
          size="toolbar"
          uniform={true}
        >
          <AppIconYlt className="icon-xs rotate-180" />
        </Button>
        <Button
          aria-label={intl.formatMessage({
            id: "home.artifactTemplates.next",
            defaultMessage: "Show more templates",
            description:
              "Accessible label for scrolling the artifact template gallery forward",
          })}
          color="ghost"
          disabled={!canScrollForward}
          onClick={() => scrollByPage(1)}
          size="toolbar"
          uniform={true}
        >
          <AppIconYlt className="icon-xs" />
        </Button>
      </>
    ) : null;

  const closeLabel = intl.formatMessage({
    id: "home.artifactTemplates.close",
    defaultMessage: "Close templates",
    description: "Accessible label for closing the artifact template picker",
  });

  const header = (
    <ChromeBackgroundPanel
      background="transparent"
      className="flex h-9 items-center justify-between gap-3 pr-1 pl-3"
    >
      {title}
      <div className="flex shrink-0 items-center gap-1">
        {scrollControls}
        <Button
          aria-label={closeLabel}
          color="ghost"
          onClick={() => {
            trackArtifactTemplateCarouselDismiss?.(
              appScope,
              CodexArtifactTemplateCarouselDismissReason.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_CLOSE_BUTTON,
            );
            dismissArtifactTemplateCarousel?.(appScope);
          }}
          size="toolbar"
          uniform={true}
        >
          <CloseIcon className="icon-xs" />
        </Button>
      </div>
    </ChromeBackgroundPanel>
  );

  const fileGalleryFallback =
    rankedSkills.length === 0 &&
    !skillsLoading &&
    !metadataLoading &&
    canUseTemplateAttachments &&
    onAddFileAssetAttachment != null ? (
      <FileTemplateGallery
        createTemplateCard={createCard}
        kind={templateKind}
        onAttachTemplate={async (template) => {
          const journey = appScope.value?.get?.(attachmentJourneyAtom);
          const attached = await onAddFileAssetAttachment({
            assetUrl: template.assetUrl,
            label: template.filename,
          });
          if (attached == null) return null;
          startAttachmentJourney?.(appScope, {
            attachmentPath: attached.path,
            journey,
            templateId: template.id,
          });
          return attached;
        }}
      />
    ) : null;

  const skillGallery =
    rankedSkills.length > 0 ? (
      <div
        ref={scrollerCallbackRef}
        className="hide-scrollbar flex snap-x snap-mandatory scroll-px-3 gap-3 overflow-x-auto px-3 py-1"
        role="group"
        aria-label={intl.formatMessage({
          id: "home.artifactTemplates.gallery",
          defaultMessage: "Templates",
          description:
            "Accessible label for the document, presentation, or spreadsheet template gallery",
        })}
        onScroll={(event) => updateScrollEdges(event.currentTarget)}
      >
        {rankedSkills.map((skill, index) => {
          const titleText = getPluginDisplayName(
            skill as {
              name: string;
              interface?: { displayName?: string | null };
            },
          );
          const Preview = skillPreviewIcon(skill);
          return (
            <HomeSuggestionStaggeredItem
              key={skill.path}
              className={cx(
                "-m-1 min-w-0 shrink-0 snap-start p-1",
                cardBasis,
                growCards && "grow",
              )}
              index={index}
              variant="card"
            >
              <button
                type="button"
                className="group relative flex w-full cursor-interaction flex-col gap-2 rounded-2xl text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border"
                aria-label={intl.formatMessage(
                  {
                    id: "home.artifactTemplates.useSkill",
                    defaultMessage: "Use {title}",
                    description:
                      "Accessible label for selecting a document, presentation, or spreadsheet template skill",
                  },
                  { title: titleText },
                )}
                onClick={() => insertSkillTemplate(skill)}
              >
                <div
                  className={cx(
                    "relative overflow-hidden rounded-xl border border-token-border bg-token-main-surface-primary shadow-sm ring-4 ring-transparent group-hover:border-token-border-heavy group-focus-visible:ring-token-focus-border",
                    documentLike ? "aspect-[4/5]" : "aspect-video",
                  )}
                >
                  <Preview className="h-full w-full [&_img]:object-cover [&_img]:object-top" />
                  <div
                    aria-hidden={true}
                    className="pointer-events-none absolute inset-0 flex items-center justify-center bg-token-text-primary/25 text-token-main-surface-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <AppIconMH className="icon-lg" />
                  </div>
                </div>
                <div className="min-w-0 -translate-y-0.5 truncate pr-2 pb-1 pl-0 text-xs leading-4 font-normal tracking-normal text-token-text-secondary group-hover:text-token-text-primary group-focus-visible:text-token-text-primary">
                  {titleText}
                </div>
              </button>
            </HomeSuggestionStaggeredItem>
          );
        })}
        {createCard == null ? null : (
          <HomeSuggestionStaggeredItem
            className={cx(
              "-m-1 min-w-0 shrink-0 snap-start p-1",
              cardBasis,
              growCards && "grow",
            )}
            index={rankedSkills.length}
            variant="card"
          >
            {createCard}
          </HomeSuggestionStaggeredItem>
        )}
      </div>
    ) : (
      fileGalleryFallback
    );

  return (
    <ComposerOverlayFloatingUi
      isActive={true}
      placement={placement}
      spacing="compact"
    >
      <div className="max-h-[min(34rem,calc(100vh_-_2rem))]">
        <LazyValueChildrenProvider>
          {header}
          <VerticalScrollFadeMask>{skillGallery}</VerticalScrollFadeMask>
        </LazyValueChildrenProvider>
      </div>
    </ComposerOverlayFloatingUi>
  );
}

/** Soft-shell bind no longer required after full body promote. */
function bindArtifactTemplatePicker(
  _next: (props: ArtifactTemplatePickerProps) => ReactNode,
): void {}
void bindArtifactTemplatePicker;

esmInit(() => {
  ensureIntlFormattersInit();
  ensureHomeSuggestionStaggeredItemInit();
  ensureAppScopeHostInit();
  void invokeDesktopRpc;
  void createAppScopeSelectAtom;
  void FILE_TEMPLATES;
});
