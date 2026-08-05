// Restored from ref/webview/assets/appgen-library-page-CYrP5b8N.js
// Wave FZ — full polished body from `appgen-library-page-CYrP5b8N/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 65 (verified 132/196).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 9/11
/* split-lane-import-depth:1 */

import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useAppgenScreenshotDataUrlQuery } from "../../apps/use-appgen-screenshot-data-url-query";
import {
  ArtifactFilePreviewIcon,
  ensureArtifactFilePreviewIconInit,
} from "../../artifact/artifact-file-preview-icon";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_KM_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_B0_Init,
  ensureConversationPageEsm_TP_Init,
} from "../../conversation/conversation-page-esm-inits";
import { cloneTypedArray } from "../../boundaries/lodash-clone-deep-guts";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 } from "../../browser/chatgpt2";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useIsDarkAppearance } from "../../hooks/use-is-dark-appearance";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconHG, ensureAppIconHGInit } from "../../icons/app-icon-hg";
import { AppIconIR } from "../../icons/app-icon-ir";
import { AppIconJG } from "../../icons/app-icon-jg";
import { ensureAppIconKhInit } from "../../icons/app-icon-kh";
import { AppIconQG } from "../../icons/app-icon-qg";
import { AppIconUD } from "../../icons/app-icon-review-commit-glyph";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconUh } from "../../icons/app-icon-uh";
import { AppIconXG } from "../../icons/app-icon-xg";
import { AppIconZa } from "../../icons/app-icon-za";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { getRouteContextValue } from "../../navigation/get-route-context-value";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { AnnotationFocusMode } from "../../overlay/annotation-focus-mode";
import { usePluginCategoryPageTelemetry } from "../../plugins/use-plugin-category-page-telemetry";
import { usePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { buildSkillDiscoveryRoots } from "../../skills/build-skill-discovery-roots";
import { openMcpAppSidePanelTab } from "../../thread/open-mcp-app-side-panel-tab";
import { AriaIconBadge } from "../../ui/aria-icon-badge";
import { closeSidePanelUnlessWindowResize } from "../../ui/close-side-panel-unless-window-resize";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiYV } from "../../ui/deferred-ui-yv";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { EmptyMemoSlot } from "../../ui/empty-memo-slot";
import { ensureShapeColorTokenClusterInit } from "../../ui/ensure-shape-color-token-cluster-init";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import {
  ensureUseSearchablePageTitleVisibilityInit,
  useSearchablePageTitleVisibility,
} from "../../ui/use-searchable-page-title-visibility";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { hvtBindableHelper } from "../../utils/hvt-bindable-helper";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { slugifyLoose } from "../../utils/slugify-loose";
import {
  ensureImportSettingsCLInit,
  ensurePersonalizationK0Init,
} from "../../utils/wave-as-gap-ensure-inits";
import { ensureNewThreadBhInit } from "../../utils/wave-av-gap-ensure-inits";
import { keysIn } from "../../vendor/lodash-cjs-predicates";
import {
  appgenShareDialogT,
  ensureAppgenShareDialogInit,
} from "../appgen-share-dialog";
import { ensureChatgptSiteSuffixesInit } from "../chatgpt-site-suffixes";
import {
  createAppgenConversation,
  dismissAppgenConversationPrompt,
  ensureStartAppgenConversationHelpersInit,
  ensureStartAppgenConversationInit,
  formatAppgenConversationPrefill,
  listAppgenConversationActions,
  prepareAppgenConversation,
  startAppgenConversation,
  startAppgenConversationFromLibrary,
  useStartAppgenConversation,
} from "../start-appgen-conversation";

// Wave5d soft JSX companions.
function Kite1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Lemon1(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function LerpIfFinite(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const RealtimeVoiceHostIdStub: any = undefined;
const _startAppgenConversationT: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const startAppgenConversationO: any = undefined;
const _e: any = undefined;
const alpha1: any = undefined;
const azure: any = undefined;
const birch: any = undefined;
const bravo1: any = undefined;
const canyon: any = undefined;
const cloudFileActions: any = undefined;
const cloudFileUploader: any = undefined;
const copper1: any = undefined;
const delta1: any = undefined;
const dew: any = undefined;
const echo1: any = undefined;
const falcon1: any = undefined;
const gamma1: any = undefined;
const harbor1: any = undefined;
const indigo1: any = undefined;
const jade1: any = undefined;
const localSourcesEnabled: any = undefined;
const marble1: any = undefined;
const nickel1: any = undefined;
const onyx1: any = undefined;
const pearl1: any = undefined;
const petal: any = undefined;
const quartz1: any = undefined;
const quiet: any = undefined;
const rain: any = undefined;
const river1: any = undefined;
const seed: any = undefined;
const setSelectedMode: any = undefined;
const showTitleInToolbar: any = undefined;
const trail: any = undefined;
const urn: any = undefined;
const vine: any = undefined;
const wind: any = undefined;
const yarrow: any = undefined;
export function AppgenLibraryPageIcon__splitRest1(__splitParams: any) {
  let marble = () => {
      ensureStartAppgenConversationHelpersInit(petal, quiet, {
        type: "create",
        setSelectedMode,
      });
    },
    nickel = (kelp) => {
      ensureStartAppgenConversationHelpersInit(petal, quiet, {
        type: "create-asset",
        assetType: kelp,
      });
    },
    onyx = (lotus, mint, nova) => {
      ensureStartAppgenConversationHelpersInit(petal, quiet, {
        type: "edit",
        liveUrl: nova,
        projectId: lotus,
        projectTitle: mint,
      });
    },
    pearl = (olive) => {
      _startAppgenConversationT(
        petal,
        rain,
        olive.file.name,
        olive.file.path,
        olive.file.threadId,
      );
    },
    quartz = (prism) => {
      _startAppgenConversationT(
        petal,
        rain,
        prism.image.name,
        prism.image.path,
        prism.image.threadId,
      );
    },
    river = (quill) => {
      seed(quill);
      petal.set(ensurePersonalizationK0Init, true);
      echo(petal, true);
    },
    slate = () => {
      seed(null);
      petal.set(ensurePersonalizationK0Init, false);
      echo(petal, false);
    },
    timber = (reef) => {
      trail((sage) =>
        sage.includes(reef)
          ? sage.filter((item) => item !== reef)
          : [...sage, reef],
      );
    },
    umbra = async (topaz) => {
      if (cloudFileActions != null)
        try {
          await cloudFileActions.downloadFile(topaz);
        } catch {
          petal.get(toastAtom).danger(
            urn.formatMessage({
              id: "appgenPage.cloudFile.downloadError",
              defaultMessage: "Unable to download file",
              description:
                "Toast shown when a cloud Library file download fails",
            }),
          );
        }
    },
    violet = async () => {
      if (!(cloudFileActions == null || vine == null || vine.length === 0)) {
        wind(true);
        try {
          let { failedCount } = await bravo({
            download: cloudFileActions.downloadFile,
            files: vine,
          });
          failedCount > 0 &&
            petal.get(toastAtom).danger(
              urn.formatMessage({
                id: "appgenPage.cloudFile.bulkDownloadError",
                defaultMessage: "Unable to download some files",
                description:
                  "Toast shown when some selected cloud Library files fail to download",
              }),
            );
        } finally {
          wind(false);
        }
      }
    },
    willow = async (ultra, vapor) => {
      if (cloudFileActions != null) {
        yarrow([ultra.id]);
        try {
          let wheat = await alpha({
            file: ultra,
            fileName: vapor,
            refetch: azure.refetch,
            rename: cloudFileActions.renameFile,
          });
          if ((birch(null), wheat)) {
            let yarn = vapor.trim();
            seed((zephyr) =>
              zephyr?.kind === "cloud-file" && zephyr.cloudFile.id === ultra.id
                ? {
                    ...zephyr,
                    cloudFile: {
                      ...zephyr.cloudFile,
                      name: yarn,
                    },
                  }
                : zephyr,
            );
            petal.get(toastAtom).success(
              urn.formatMessage({
                id: "appgenPage.cloudFile.renameSuccess",
                defaultMessage: "File renamed",
                description: "Toast shown after renaming a cloud Library file",
              }),
            );
          }
        } catch {
          petal.get(toastAtom).danger(
            urn.formatMessage({
              id: "appgenPage.cloudFile.renameError",
              defaultMessage: "Unable to rename file",
              description: "Toast shown when a cloud Library file rename fails",
            }),
          );
        } finally {
          yarrow([]);
        }
      }
    },
    xenon = async (acorn) => {
      if (cloudFileActions == null || acorn.length === 0) return;
      let bloom = acorn.map((item) => item.id),
        coral = acorn.length > 1;
      yarrow(bloom);
      canyon((drift) => Array.from(new Set([...drift, ...bloom])));
      try {
        let { deletedFileIds, failedCount } = await copper({
            deleteFile: cloudFileActions.deleteFile,
            files: acorn,
            refetch: azure.refetch,
          }),
          eagle = bloom.filter((item) => !deletedFileIds.includes(item));
        if (
          (canyon((frost) => frost.filter((item) => !eagle.includes(item))),
          trail((glide) =>
            glide.filter((item) => !deletedFileIds.includes(item)),
          ),
          dew?.kind === "cloud-file" &&
            deletedFileIds.includes(dew.cloudFile.id) &&
            slate(),
          birch(null),
          failedCount > 0)
        ) {
          petal.get(toastAtom).danger(
            coral
              ? urn.formatMessage({
                  id: "appgenPage.cloudFile.bulkDeleteError",
                  defaultMessage: "Unable to delete some files",
                  description:
                    "Toast shown when some selected cloud Library files fail to delete",
                })
              : urn.formatMessage(lemon.deleteError),
          );
          return;
        }
        petal.get(toastAtom).success(
          coral
            ? urn.formatMessage({
                id: "appgenPage.cloudFile.bulkDeleteSuccess",
                defaultMessage: "Files deleted",
                description:
                  "Toast shown after deleting selected cloud Library files",
              })
            : urn.formatMessage({
                id: "appgenPage.cloudFile.deleteSuccess",
                defaultMessage: "File deleted",
                description: "Toast shown after deleting a cloud Library file",
              }),
        );
      } catch {
        canyon((honey) => honey.filter((item) => !bloom.includes(item)));
        petal.get(toastAtom).danger(urn.formatMessage(lemon.deleteError));
      } finally {
        yarrow([]);
      }
    },
    yellow = (event) => {
      if (!(!alpha1 || !RealtimeVoiceHostIdStub(event.dataTransfer))) {
        if ((event.preventDefault(), event.stopPropagation(), bravo1)) {
          event.dataTransfer.dropEffect = "none";
          return;
        }
        event.dataTransfer.dropEffect = "copy";
        copper1((iris) => iris + 1);
      }
    },
    zinc = (event) => {
      !alpha1 ||
        !RealtimeVoiceHostIdStub(event.dataTransfer) ||
        (event.preventDefault(),
        event.stopPropagation(),
        (event.dataTransfer.dropEffect = bravo1 ? "none" : "copy"));
    },
    amber = (event) => {
      !alpha1 ||
        !RealtimeVoiceHostIdStub(event.dataTransfer) ||
        copper1((jewel) => Math.max(0, jewel - 1));
    },
    basalt = (event) => {
      if (
        !alpha1 ||
        !RealtimeVoiceHostIdStub(event.dataTransfer) ||
        (event.preventDefault(), event.stopPropagation(), copper1(0), bravo1)
      )
        return;
      let knoll = delta(event.dataTransfer);
      knoll.length > 0 && daisy(knoll);
    },
    cedar = (event) => {
      let lunar = Array.from(event.currentTarget.files ?? []);
      event.currentTarget.value = "";
      !(lunar.length === 0 || bravo1) && daisy(lunar);
    },
    daisy = async (moss) => {
      if (cloudFileUploader == null) return;
      let north = moss.map((item, index) => ({
        category: falcon(item),
        id: `${item.name}:${item.size}:${item.lastModified}:${index}`,
        mimeType: item.type.length > 0 ? item.type : null,
        modifiedAt: new Date().toISOString(),
        name: item.name,
        sizeBytes: item.size,
        uploadedFileId: null,
      }));
      delta1(north);
      let orbit = 0,
        pine = 0,
        quest = [];
      for (let [storm, tide] of moss.entries()) {
        let unity = north[storm];
        try {
          let vale = await cloudFileUploader(tide);
          if (
            ((pine += 1),
            unity != null &&
              startAppgenConversationO({
                contentType: echo1,
                file: unity,
                fileFilter: falcon1,
                searchQuery: gamma1,
              }))
          ) {
            quest.push(vale.fileId);
            delta1((wave) =>
              wave.map((item) =>
                item.id === unity.id
                  ? {
                      ...item,
                      uploadedFileId: vale.fileId,
                    }
                  : item,
              ),
            );
            continue;
          }
          unity != null &&
            delta1((apex) => apex.filter((item) => item.id !== unity.id));
        } catch {
          orbit += 1;
          delta1((brook) => brook.filter((item) => item.id !== unity?.id));
        }
      }
      let ridge = quest.length === 0;
      if (quest.length > 0) {
        let cliff = new Set(quest);
        for (let dusk = 0; dusk < kite; dusk += 1) {
          let elm = await azure.refetch(),
            fern = new Set(
              (elm.data ?? [])
                .map((item) => item.fileId)
                .filter((item) => cliff.has(item)),
            ),
            grove = Math.min(
              quest.length,
              Math.max(elm.data?.length ?? 0, indigo),
            ),
            hill = fern.size >= grove,
            isle = hill ? cliff : fern;
          if (
            (delta1((juniper) =>
              juniper.filter(
                (item) =>
                  item.uploadedFileId == null || !isle.has(item.uploadedFileId),
              ),
            ),
            hill)
          ) {
            ridge = true;
            break;
          }
          await new Promise((lagoon) => {
            window.setTimeout(lagoon, jade);
          });
        }
      } else pine > 0 && (await azure.refetch(), (ridge = true));
      if (
        (ridge ||
          delta1((meadow) =>
            meadow.filter((item) => item.uploadedFileId == null),
          ),
        orbit === 0)
      ) {
        if (!ridge) {
          petal.get(toastAtom).warning(
            urn.formatMessage({
              id: "appgenPage.cloudUpload.delayed",
              defaultMessage:
                "Upload complete. Files may take a moment to appear",
              description:
                "Toast shown when cloud Library uploads finish but the uploaded files are not visible in the refreshed Library list yet",
            }),
          );
          return;
        }
        petal.get(toastAtom).success(
          urn.formatMessage(
            {
              id: "appgenPage.cloudUpload.success",
              defaultMessage:
                "{count, plural, one {Added # file to Library} other {Added # files to Library}}",
              description:
                "Toast shown after files are successfully uploaded to cloud Library",
            },
            {
              count: pine,
            },
          ),
        );
        return;
      }
      if (pine > 0) {
        petal.get(toastAtom).warning(
          urn.formatMessage(
            {
              id: "appgenPage.cloudUpload.partialFailure",
              defaultMessage:
                "{uploadedCount, plural, one {Added # file} other {Added # files}}, {failedCount} failed",
              description:
                "Toast shown after a cloud Library upload partially succeeds",
            },
            {
              failedCount: orbit,
              uploadedCount: pine,
            },
          ),
        );
        return;
      }
      petal.get(toastAtom).danger(
        urn.formatMessage({
          id: "appgenPage.cloudUpload.failure",
          defaultMessage: "Unable to upload files",
          description: "Toast shown when every cloud Library upload fails",
        }),
      );
    },
    ember = (nest) => {
      harbor1(nest);
      indigo1("all");
      trail([]);
    },
    flint = (oak) => {
      harbor1("all");
      indigo1(oak);
      trail([]);
    },
    garnet = alpha1 ? (
      <>
        <input
          ref={jade1}
          aria-label={urn.formatMessage({
            id: "appgenPage.cloudUpload.inputLabel",
            defaultMessage: "Upload library files",
            description:
              "Accessible label for the hidden cloud Library file upload input",
          })}
          className="hidden"
          disabled={bravo1}
          multiple={true}
          type="file"
          onChange={cedar}
        />
        {
          <ReadLoginRouteQuerySnapshot
            {...{
              color: "outline",
              disabled: bravo1,
              size: "toolbar",
              onClick: () => {
                jade1.current?.click();
              },
              children: [
                <AppIconUD
                  {...{
                    className: "icon-sm",
                  }}
                />,
                <MemoizedFormattedMessage
                  {...{
                    id: "appgenPage.cloudUpload.button",
                    defaultMessage: "Upload",
                    description:
                      "Button label for uploading files to the cloud Library",
                  }}
                />,
              ],
            }}
          />
        }
      </>
    ) : null,
    hazel = (
      <Kite1
        {...{
          canvasSource: null,
          onCreateAsset: nickel,
        }}
      />
    ),
    ivory = (
      <Lemon1
        {...{
          canvasSource: null,
          cloudSelectionActions:
            vine == null || _e === 0 ? null : (
              <div className="flex items-center gap-2">
                {
                  <ReadLoginRouteQuerySnapshot
                    {...{
                      color: "outline",
                      disabled: marble1.length > 0,
                      loading: nickel1,
                      size: "toolbar",
                      onClick: () => {
                        violet();
                      },
                      children: [
                        <LerpIfFinite
                          {...{
                            className: "icon-xs",
                          }}
                        />,
                        <MemoizedFormattedMessage
                          {...{
                            id: "appgenPage.cloudFile.bulkDownload",
                            defaultMessage: "Download",
                            description:
                              "Button for downloading selected cloud Library files",
                          }}
                        />,
                      ],
                    }}
                  />
                }
                {
                  <ReadLoginRouteQuerySnapshot
                    {...{
                      color: "danger",
                      disabled: nickel1,
                      loading: marble1.length > 0,
                      size: "toolbar",
                      onClick: () =>
                        birch({
                          type: "delete",
                          files: vine,
                        }),
                      children: [
                        <AppIconBO
                          {...{
                            className: "icon-xs",
                          }}
                        />,
                        <MemoizedFormattedMessage
                          {...{
                            id: "appgenPage.cloudFile.bulkDelete",
                            defaultMessage: "Delete",
                            description:
                              "Button for deleting selected cloud Library files",
                          }}
                        />,
                      ],
                    }}
                  />
                }
                <span className="text-sm text-token-description-foreground">
                  {
                    <MemoizedFormattedMessage
                      {...{
                        id: "appgenPage.cloudFile.selectedCount",
                        defaultMessage:
                          "{count, plural, one {# selected} other {# selected}}",
                        description: "Number of selected cloud Library files",
                        values: {
                          count: _e,
                        },
                      }}
                    />
                  }
                </span>
              </div>
            ),
          cloudSource: onyx1,
          cloudUploadAction: garnet,
          createAction: hazel,
          localSourcesEnabled,
          showCanvases: false,
          showTitle: showTitleInToolbar,
          showFiles: pearl1,
          showImages: quartz1,
          showSites: river1,
        }}
      />
    ),
    jasper = urn.formatMessage({
      id: "appgenPage.search",
      defaultMessage: "Search library",
      description: "Accessible label and placeholder for searching the Library",
    });
  return undefined as any;
}
