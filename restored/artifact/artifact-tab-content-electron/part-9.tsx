// Restored from ref/webview/assets/artifact-tab-content.electron-z_W871m1.js
// Stage 3 deep fill from per-chunk checkpoint / `artifact-tab-content.electron-z_W871m1/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 100/134).
// JSX calls converted: 72; mechanical renames: 833.
// Source used: .deobfuscate-javascript/_full/checkpoints/artifact-tab-content.electron-z_W871m1.tsx.
// Careful split export-budget 9/13
// Wave FZ-support — PascalCase invalid JSX tags: isLocalOrNullValue→IsLocalOrNullValue, chatgpt2→Chatgpt2, coerceLocalFilesystemPath→CoerceLocalFilesystemPath, useInfiniteListQuery→UseInfiniteListQuery, readLoginRouteQuerySnapshot→ReadLoginRouteQuerySnapshot, artifactCell35→ArtifactCell35.
/* split-lane-import-depth:1 */

// Cross-part soft stubs.
const AppInitialCN: any = undefined;
const AppInitialDN: any = undefined;
const AppInitialQ3: any = undefined;
const AppInitialVX: any = undefined;
const AppInitialX: any = undefined;
const ArtifactTemplate: any = undefined;
const Skills3: any = undefined;
const __vite__mapDeps: any = undefined;
const deleteProjectAndMaybeNavigate: any = undefined;
const lotus: any = undefined;
const maple: any = undefined;
const plaza: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const street: any = undefined;
const vitePreload: any = undefined;

import type { ReactNode } from "react";
import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Z8_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { Chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { buildSkillMentionMarkdown } from "../../composer/build-skill-mention-markdown";
import { composerNavigation } from "../../composer/composer-navigation";
import { deferredComposerBV } from "../../composer/deferred-composer-bv";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { conversationArchiveInFlightAtom } from "../../conversation/conversation-page-family-atoms";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { findCachedConversationItem } from "../../conversation/find-cached-conversation-item";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { openFileInPanelTab } from "../../files/open-file-in-panel-tab";
import { ensureDebugPanelParsersInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { UseInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { IsLocalOrNullValue } from "../../hosts/is-local-or-null-value";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconJO } from "../../icons/app-icon-jo";
import { AppIconMH } from "../../icons/app-icon-mh";
import { AppIconMZ } from "../../icons/app-icon-mz";
import { AppIconOH } from "../../icons/app-icon-oh";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYj } from "../../icons/app-icon-yj";
import { ensureHooksFocusIconInit } from "../../icons/hooks-settings-icons";
import { ImageFileIcon } from "../../icons/image-file-icon";
import { LoadingPreviewIcon } from "../../icons/loading-preview-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import {
  findSidebarSectionElement,
  readScrollTop,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { newConversationEntrypointId } from "../../navigation/new-conversation-entrypoint-id";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { fileSourceBrowserMessages } from "../../review/file-source-browser-messages";
import { setReviewScrollTarget } from "../../review/set-review-scroll-target";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { setRightPanelConversation } from "../../shell/set-right-panel-conversation";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import {
  conversationFindActiveMatchAtom,
  conversationFindResultAtom,
} from "../../thread/thread-find-atoms";
import {
  ArtifactPreviewStatus,
  ensureArtifactPreviewStatusInit,
} from "../../ui/artifact-preview-status";
import { Badge, ensureBadgeInit } from "../../ui/badge";
import { cx } from "../../ui/cx";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { macOS4 } from "../../ui/mac-os4";
import { MemoizedValueBridge } from "../../ui/memoized-value-bridge";
import { CoerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import {
  ensureArtifactAnalyticsInit,
  logArtifactAnnotationModeEnabled,
  logArtifactAnnotationStarted,
  logArtifactAnnotationSubmitted,
  logArtifactRefreshClicked,
} from "../artifact-analytics";
import {
  buildArtifactAnnotationCommentForTarget,
  collectRemovedArtifactAnnotationIds,
  ensureArtifactAnnotationCommentInit,
  filterArtifactAnnotationCommentsForPath,
  nextArtifactAnnotationCommentLine,
  removeArtifactAnnotationCommentsForPath,
} from "../artifact-annotation-comment";
import { ArtifactPreviewDownloadButton } from "../artifact-preview-download-button";
import { ArtifactPreviewPageNav } from "../artifact-preview-page-nav";
import { ArtifactPreviewZoomToFitLabel } from "../artifact-preview-zoom-to-fit-label";
import { artifactTabLoading } from "../artifact-tab-loading";
import { hypotDistance } from "../hypot-distance";

function ArtifactTabContentHelper65() {
  return (
    (ui ??= ArtifactTabContentHelper66().catch((error) => {
      throw ((ui = null), error);
    })),
    ui
  );
}
async function ArtifactTabContentHelper66() {
  let wrench = await street
      .withConfig(pliers)
      .withResourceLoader((screw, bolt, nut, washer) => {
        if (screw === "dotnetjs") return nut;
        let rivet = new URL(nut, location.href);
        return rivet.origin === location.origin
          ? rivet.href
          : fetch(rivet.href, {
              credentials: "omit",
              integrity: washer,
            });
      })
      .create(),
    nail = wrench.getConfig().mainAssemblyName;
  if (!nail) throw Error("Walnut reader assembly unavailable");
  return await wrench.getAssemblyExports(nail);
}
var ui,
  pliers,
  spike = esmInit(() => {
    maple();
    plaza();
    ui = null;
    pliers = {
      ...lotus,
    };
  });
async function ArtifactTabContentHelper67(hook, eye) {
  switch (eye) {
    case "csv":
      return ArtifactTabContentHelper68(hook);
    case "tsv":
      return ArtifactTabContentHelper68(hook, "\t");
    case "docx":
      return ArtifactTabContentHelper69(hook);
    case "pptx":
      return ArtifactTabContentHelper70(hook);
    case "xlsx":
      return _i(hook);
    case "ipynb":
      throw Error("Notebook preview should use NotebookPreviewPanel");
    case "pdf":
    case "tex":
      throw Error("PDF preview should use PdfPreviewPanel");
  }
}
async function ArtifactTabContentHelper68(loop, ring2) {
  let { Workbook } = await vitePreload(
    async () => {
      let { Workbook: _Workbook } = await import("../../workbook/workbook");
      return {
        Workbook: _Workbook,
      };
    },
    __vite__mapDeps([2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    import.meta.url,
  );
  return {
    kind: "spreadsheet",
    proto: (
      await Workbook.fromCSV(
        new TextDecoder().decode(loop),
        ring2 == null
          ? undefined
          : {
              separator: ring2,
            },
      )
    ).toProto(),
  };
}
async function ArtifactTabContentHelper69(link) {
  let [{ Document: chain }, cable] = await Promise.all([
    vitePreload(
      () => import("../../workbook/document-type-exports"),
      __vite__mapDeps([16, 17, 1, 10, 11]),
      import.meta.url,
    ),
    ArtifactTabContentHelper65(),
  ]);
  return {
    kind: "document",
    proto: chain.decode(cable.DocxReader.ExtractDocxProto(link, false)),
  };
}
async function ArtifactTabContentHelper70(wire) {
  let [{ Presentation: strand }, fiber] = await Promise.all([
    vitePreload(
      () => import("../../workbook/presentation-type-exports"),
      __vite__mapDeps([18, 10, 1]),
      import.meta.url,
    ),
    ArtifactTabContentHelper65(),
  ]);
  return {
    kind: "presentation",
    proto: strand.decode(fiber.PptxReader.ExtractSlidesProto(wire, false)),
  };
}
async function _i(yarn2) {
  let [{ Workbook: twine }, rope] = await Promise.all([
    vitePreload(
      () => import("../../workbook/spreadsheet-type-exports"),
      __vite__mapDeps([19, 11, 1, 10]),
      import.meta.url,
    ),
    ArtifactTabContentHelper65(),
  ]);
  return {
    kind: "spreadsheet",
    proto: twine.decode(rope.XlsxReader.ExtractXlsxProto(yarn2, false)),
  };
}
var cord = esmInit(() => {
  spike();
  ensureViteModulepreloadRuntime();
});
function ArtifactTabContentHelper71(line2) {
  let { hostId, part, projectContext, skill, title } = line2;
  switch (part) {
    case "edit": {
      let artifactCell0;
      return (
        <ArtifactTabContentHelper73
          {...{
            hostId,
            projectContext,
            skill,
          }}
        />
      );
    }
    case "menu": {
      let artifactCell1;
      return (
        <ArtifactTabContentHelper75
          {...{
            hostId,
            skill,
          }}
        />
      );
    }
    case "title": {
      let artifactCell2;
      return (
        <ArtifactTabContentHelper72
          {...{
            title,
          }}
        />
      );
    }
  }
}
function ArtifactTabContentHelper72(artifactCell3) {
  let { title } = artifactCell3,
    artifactCell4 = <span className="truncate">{title}</span>;
  let artifactCell5 = (
    <Badge
      {...{
        className:
          "shrink-0 bg-token-charts-purple/10 px-1.5 py-0.5 text-xs font-medium text-token-charts-purple",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "artifactTemplate.preview.badge",
              defaultMessage: "Template",
              description:
                "Badge identifying an artifact preview as a reusable template",
            }}
          />
        ),
      }}
    />
  );
  return (
    <div className="flex min-w-0 items-center gap-2">
      {artifactCell4}
      {artifactCell5}
    </div>
  );
}
function ArtifactTabContentHelper73(artifactCell6) {
  let { hostId, projectContext, skill } = artifactCell6,
    artifactCell7 = composerNavigation(),
    { skills } = usePetsSettingsController(undefined, hostId),
    artifactCell8 = skills.find(ArtifactTabContentHelper74);
  let artifactCell9 = artifactCell8,
    artifactCell10 =
      projectContext == null
        ? undefined
        : projectContext.hostId == null
          ? {
              projectId: projectContext.projectId,
              projectKind: "local",
            }
          : {
              projectId: projectContext.projectId,
              projectKind: "remote",
            };
  let artifactCell11 = artifactCell10,
    artifactCell12 = artifactCell9 == null,
    artifactCell13 = () => {
      artifactCell9 != null &&
        artifactCell7({
          activeProject: artifactCell11,
          prefillPrompt: `${buildSkillMentionMarkdown(artifactCell9)} Edit ${buildSkillMentionMarkdown(skill)} `,
          startInSidebar: true,
        });
    };
  let artifactCell14 = (
    <MemoizedFormattedMessage
      {...{
        id: "artifactTemplate.preview.edit",
        defaultMessage: "Edit template",
        description:
          "Button that starts a new chat to edit an artifact template",
      }}
    />
  );
  return (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "outline",
        size: "toolbar",
        disabled: artifactCell12,
        onClick: artifactCell13,
        children: artifactCell14,
      }}
    />
  );
}
function ArtifactTabContentHelper74(artifactCell15) {
  return (
    artifactCell15.enabled &&
    (artifactCell15.name === "template-creator" ||
      artifactCell15.name.endsWith(":template-creator"))
  );
}
function ArtifactTabContentHelper75(artifactCell16) {
  let { hostId, skill } = artifactCell16,
    artifactCell17 = CodexPluginActionType(appScopeAtom),
    artifactCell18 = useIntl(),
    { platform } = useHostPlatformModifierSymbol(),
    [artifactCell19, artifactCell20] = artifactCell21.useState(false),
    artifactCell22 = getPluginDisplayName(skill);
  let artifactCell23 = artifactCell22,
    artifactCell24 = AppInitialQ3(skill);
  let artifactCell25 = artifactCell24,
    artifactCell26 = artifactCell18.formatMessage({
      id: "artifactTemplate.preview.actions",
      defaultMessage: "Template actions",
      description: "Accessible label for the artifact template actions menu",
    });
  let artifactCell27 = (
    <CoerceLocalFilesystemPath
      {...{
        label: artifactCell26,
      }}
    />
  );
  let artifactCell28 = (
    <DropdownMenu.Item
      {...{
        onSelect: () => artifactCell20(true),
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "artifactTemplate.preview.viewDetails",
              defaultMessage: "View details",
              description:
                "Menu item that opens artifact template skill details",
            }}
          />
        ),
      }}
    />
  );
  let artifactCell29 = () => {
    artifactCell25 != null &&
      artifactCell17.get(AppInitialVX).mutate({
        cwd: null,
        hostId,
        path: artifactCell25,
        target: "fileManager",
      });
  };
  let artifactCell30 =
    platform === "macOS" ? (
      <MemoizedFormattedMessage
        {...{
          id: "artifactTemplate.preview.openInFinder",
          defaultMessage: "Open in Finder",
          description:
            "Menu item that reveals an artifact template skill in Finder",
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          ...deleteProjectAndMaybeNavigate(platform),
        }}
      />
    );
  let artifactCell31 = (
    <DropdownMenu.Item
      {...{
        onSelect: artifactCell29,
        children: artifactCell30,
      }}
    />
  );
  let artifactCell32 = (
    <DropdownMenuPopover
      {...{
        align: "end",
        contentWidth: "xs",
        triggerButton: artifactCell27,
        children: [artifactCell28, artifactCell31],
      }}
    />
  );
  let artifactCell33 = getPluginShortDescription(skill);
  let artifactCell34 = (
    <ArtifactCell35
      {...{
        className: "size-5 text-token-text-secondary",
      }}
    />
  );
  let artifactCell36 = <AppInitialDN kind="Skill" title={artifactCell23} />;
  let artifactCell37 = (
    <AppInitialCN
      hostId={hostId}
      isOpen={artifactCell19}
      skillPath={skill.path}
      titleText={artifactCell23}
    />
  );
  let artifactCell38 = (
    <UseInfiniteListQuery
      {...{
        description: artifactCell33,
        icon: artifactCell34,
        iconShape: "rounded",
        isOpen: artifactCell19,
        onOpenChange: artifactCell20,
        title: artifactCell36,
        titleText: artifactCell23,
        children: artifactCell37,
      }}
    />
  );
  return (
    <>
      {artifactCell32}
      {artifactCell38}
    </>
  );
}
var artifactCell39,
  artifactCell21,
  artifactCell40,
  ArtifactCell35,
  artifactCell41 = esmInit(() => {
    artifactCell39 = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    artifactCell21 = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ArtifactTemplate();
    ensureBadgeInit();
    ensureSettingsQueryAtomsInit();
    ensureDropdownMenuInit();
    ensurePinnedConversationsQueryInit();
    hypotDistance();
    AppInitialX();
    macOS4();
    conversationsSidebarMessages();
    ensureAppScopeInit();
    conversationArchiveInFlightAtom();
    ensureSkillsPageHelpersInit();
    findCachedConversationItem();
    ensureSkillsPageHelpersInit();
    Skills3();
    ArtifactCell35 = ArtifactPreviewPageNav();
  });
