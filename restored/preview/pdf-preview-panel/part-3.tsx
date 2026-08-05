// Restored from ref/webview/assets/pdf-preview-panel-Cv0tBSkT.js
// Wave FY — full polished body from `pdf-preview-panel-Cv0tBSkT/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 21 (verified 68/89).
// Careful split 3/6
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginClickTarget } from "../../analytics/codex-plugin-click-target";
import { CodexProfileInlinePhotoChangeAction } from "../../analytics/codex-profile-inline-photo-change-action";
import { logProductEvent } from "../../analytics/log-product-event";
import {
  ensureArtifactAnalyticsInit,
  logArtifactAnnotationModeEnabled,
  logArtifactAnnotationSubmitted,
  logArtifactRefreshClicked,
} from "../../artifact/artifact-analytics";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import { ArtifactPreviewPageNav } from "../../artifact/artifact-preview-page-nav";
import { artifactTabLoading } from "../../artifact/artifact-tab-loading";
import { queueAutomationRun as QueueAutomationRun } from "../../automation/queue-automation-run";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_S8_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
  ensureComposerEsm_Z8_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { deferredComposerBV } from "../../composer/deferred-composer-bv";
import { DesignComposerSurface } from "../../composer/design-composer-surface";
import { DURABLE_OBJECT_KIND } from "../../config/durable-object-kind";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { useThreadHandoffDisabledReason } from "../../conversation/use-thread-handoff-disabled-reason";
import { resolveWorktreeHandoffDirection as ResolveWorktreeHandoffDirection } from "../../environments/worktree-handoff-helpers";
import { ensureDebugPanelParsersInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { isLocalOrNullValue as IsLocalOrNullValue } from "../../hosts/is-local-or-null-value";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconGg } from "../../icons/app-icon-gg";
import { AppIconUg } from "../../icons/app-icon-ug";
import { AppIconYg } from "../../icons/app-icon-yg";
import { AppIconYj } from "../../icons/app-icon-yj";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { isWhitespaceOrEofCharCode as IsWhitespaceOrEofCharCode } from "../../markdown/is-whitespace-or-eof-char-code";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { newConversationEntrypointId } from "../../navigation/new-conversation-entrypoint-id";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import {
  ArtifactPreviewStatus,
  ensureArtifactPreviewStatusInit,
} from "../../ui/artifact-preview-status";
import { deferredW1 } from "../../ui/deferred-w1";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { MemoizedValueBridge } from "../../ui/memoized-value-bridge";
import { OperationStatusOverlay } from "../../ui/operation-status-overlay";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { RtlAwareToggleThumb } from "../../ui/rtl-aware-toggle-thumb";
import { pickSourcePosition } from "../../utils/pick-source-position";
import { ToWorktree } from "../../worktree/to-worktree";

// Cross-part soft stubs.
const $t: any = undefined;
const AppInitialCg: any = undefined;
const AppInitialLO: any = undefined;
const AppInitialOg: any = undefined;
const AppInitialXg: any = undefined;
const IntlProvider: any = undefined;
const PdfPreviewPanelHelper35: any = undefined;
const PdfPreviewPanelHelper36: any = undefined;
const PdfPreviewPanelHelper37: any = undefined;
const PdfPreviewPanelHelper38: any = undefined;
const Queued: any = undefined;
const _t: any = undefined;
const acorn: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const bloom: any = undefined;
const cedar: any = undefined;
const coral: any = undefined;
const daisy: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const frost: any = undefined;
const moss: any = undefined;
const on: any = undefined;
const orbit: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;

function PdfPreviewPanelHelper32({
  comments,
  isCommentMode,
  nextCommentNumber,
  onCommentsChange,
  onDraftActiveChange,
  conversationId,
  page,
  pageCount,
  pageNumber,
  pageSize,
  path,
  tabId,
  threadId,
  title,
}) {
  let pinePrime = CodexPluginActionType(appScopeAtom),
    questPrime = useIntl(),
    ridgePrime = moss.useRef(null),
    stormPrime = moss.useRef(null),
    [tidePrime, unityPrime] = moss.useState(null),
    [valePrime, wavePrime] = moss.useState(null),
    [apexPrime, brookPrime] = moss.useState(""),
    [cliffPrime, duskPrime] = moss.useState(null),
    [elmPrime, fernPrime] = moss.useState(null),
    [grovePrime, hillPrime] = moss.useState(null),
    [islePrime, juniperPrime] = moss.useState(null),
    [lagoonPrime, meadowPrime] = moss.useState(null),
    [nestPrime, oakPrime] = moss.useState(false),
    [petalPrime, quietPrime] = moss.useState(false),
    rainPrime = questPrime.formatMessage({
      id: "artifactPdfPreview.commentInput",
      defaultMessage: "PDF annotation comment",
      description: "Aria label for the PDF annotation comment input",
    }),
    seedPrime = questPrime.formatMessage({
      id: "artifactAnnotationComment.placeholder",
      defaultMessage: "Describe a change or ask a question",
      description: "Placeholder text for an artifact annotation comment editor",
    }),
    trailPrime = questPrime.formatMessage({
      id: "artifactPdfPreview.askForEdit",
      defaultMessage: "Ask ChatGPT",
      description:
        "Button label for starting a contextual PDF annotation from selected text",
    }),
    urnPrime = moss.useMemo(
      () =>
        comments.filter(
          (item) => item.localPdfContext?.pageNumber === pageNumber,
        ),
      [comments, pageNumber],
    ),
    vinePrime =
      lagoonPrime == null
        ? null
        : (urnPrime.find((item) => on(item) === lagoonPrime) ?? null),
    windPrime =
      islePrime == null
        ? null
        : (urnPrime.find((item) => on(item) === islePrime) ?? null),
    yarrowPrime = windPrime == null ? null : drift(windPrime),
    azurePrime = valePrime ?? yarrowPrime,
    birchPrime = moss.useMemo(
      () =>
        valePrime == null
          ? yarrowPrime == null || windPrime == null || islePrime == null
            ? null
            : acorn({
                anchor: yarrowPrime,
                body: eagle(windPrime),
                conversationId,
                pageNumber,
                pageSize,
                path,
                target: {
                  mode: "edit",
                  commentId: islePrime,
                },
                title,
              })
          : acorn({
              anchor: valePrime,
              body: apexPrime,
              conversationId,
              pageNumber,
              pageSize,
              path,
              target: {
                mode: "create",
              },
              title,
            }),
      [
        conversationId,
        valePrime,
        apexPrime,
        yarrowPrime,
        windPrime,
        islePrime,
        pageNumber,
        pageSize,
        path,
        title,
      ],
    ),
    canyonPrime =
      azurePrime == null
        ? null
        : $t({
            anchor: azurePrime,
            layer: tidePrime,
            pageSize,
          }),
    dewPrime = azurePrime != null,
    everPrime = moss.useCallback(() => {
      valePrime != null && onDraftActiveChange?.(pageNumber, false);
      wavePrime(null);
      fernPrime(null);
      hillPrime(null);
      brookPrime("");
      juniperPrime(null);
      oakPrime(false);
    }, [valePrime, onDraftActiveChange, pageNumber]),
    fieldPrime = moss.useCallback((rootPrime) => {
      brookPrime(rootPrime);
      oakPrime(false);
    }, []),
    _e = moss.useCallback(() => {
      typeof window > "u" ||
        AppInitialLO({
          animationFrameRef: stormPrime,
          animationWindow: window,
          editorWrapper: ridgePrime.current,
        });
    }, []),
    grainPrime = moss.useCallback(
      () =>
        birchPrime == null
          ? false
          : birchPrime.target.mode === "create" && apexPrime.trim().length > 0
            ? nestPrime
              ? (everPrime(), true)
              : (oakPrime(true), _e(), false)
            : (everPrime(), true),
      [birchPrime, everPrime, apexPrime, nestPrime, _e],
    ),
    havenPrime = moss.useEffectEvent(() => {
      if (azurePrime == null) return;
      let silkPrime = $t({
        anchor: azurePrime,
        layer: tidePrime,
        pageSize,
      });
      silkPrime != null && AppIconGg(ridgePrime.current, silkPrime);
    });
  moss.useEffect(() => {
    if (!dewPrime || tidePrime == null) return;
    let thornPrime = tidePrime.ownerDocument,
      uplandPrime = thornPrime.defaultView,
      vistaPrime = () => {
        havenPrime();
      };
    thornPrime.addEventListener("scroll", vistaPrime, {
      capture: true,
    });
    uplandPrime?.addEventListener("resize", vistaPrime);
    let wispPrime =
      typeof ResizeObserver > "u" ? null : new ResizeObserver(vistaPrime);
    return (
      wispPrime?.observe(tidePrime),
      vistaPrime(),
      () => {
        thornPrime.removeEventListener("scroll", vistaPrime, {
          capture: true,
        });
        uplandPrime?.removeEventListener("resize", vistaPrime);
        wispPrime?.disconnect();
      }
    );
  }, [dewPrime, tidePrime]);
  let be = moss.useEffectEvent((event) => {
    let yonderPrime = event.target;
    (yonderPrime instanceof Node &&
      ridgePrime.current?.contains(yonderPrime)) ||
      (event.preventDefault(),
      event.stopPropagation(),
      grainPrime() &&
        (yonderPrime instanceof Node
          ? yonderPrime.ownerDocument
          : tidePrime?.ownerDocument
        )
          ?.getSelection()
          ?.removeAllRanges());
  });
  moss.useEffect(() => {
    if (
      isCommentMode ||
      birchPrime?.target.mode !== "create" ||
      tidePrime == null
    )
      return;
    let zenithPrime = tidePrime.ownerDocument,
      anvilPrime = (beaconPrime) => {
        be(beaconPrime);
      };
    return (
      zenithPrime.addEventListener("pointerdown", anvilPrime, {
        capture: true,
      }),
      () => {
        zenithPrime.removeEventListener("pointerdown", anvilPrime, {
          capture: true,
        });
      }
    );
  }, [birchPrime?.target.mode, isCommentMode, tidePrime]);
  let inkPrime = moss.useEffectEvent(() => {
    if (isCommentMode || tidePrime == null) return;
    let cragPrime = tidePrime.parentElement;
    if (cragPrime == null) return;
    let domePrime = zinc({
      pageElement: cragPrime,
      pageSize,
    });
    if (domePrime == null) {
      fernPrime(null);
      return;
    }
    ((valePrime != null || islePrime != null) && !grainPrime()) ||
      (fernPrime(domePrime),
      wavePrime(null),
      brookPrime(""),
      juniperPrime(null),
      meadowPrime(null),
      hillPrime(null),
      oakPrime(false));
  });
  moss.useEffect(() => {
    if (tidePrime == null || isCommentMode) return;
    let eddyPrime = tidePrime.parentElement;
    if (eddyPrime == null) return;
    let fjordPrime = () => {
      inkPrime();
    };
    return (
      eddyPrime.addEventListener("mouseup", fjordPrime),
      eddyPrime.addEventListener("keyup", fjordPrime),
      () => {
        eddyPrime.removeEventListener("mouseup", fjordPrime);
        eddyPrime.removeEventListener("keyup", fjordPrime);
      }
    );
  }, [isCommentMode, tidePrime]);
  let jadeitePrime = (glenPrime, hearthPrime, inletPrime) => {
      if (!isCommentMode || tidePrime == null) return null;
      let jettyPrime = tidePrime.parentElement;
      return jettyPrime == null
        ? null
        : amber({
            clientX: glenPrime,
            clientY: hearthPrime,
            includePreviewMetadata: inletPrime,
            layerElement: tidePrime,
            pageElement: jettyPrime,
            pageSize,
          });
    },
    kernelPrime = (knobPrime, ledgePrime) => {
      logArtifactAnnotationSubmitted(
        pinePrime,
        {
          artifactTabId: tabId,
          artifactType: "pdf",
          importKind: "pdf",
          threadId,
        },
        {
          annotationModeEnabled: isCommentMode,
          startSource: ledgePrime,
        },
      );
      valePrime ?? onDraftActiveChange?.(pageNumber, true);
      wavePrime(knobPrime);
      fernPrime(null);
      hillPrime(null);
      brookPrime("");
      juniperPrime(null);
      meadowPrime(null);
      oakPrime(false);
    },
    leafPrime = moss.useEffectEvent((event, mirePrime) => {
      if (valePrime != null || islePrime != null || !AppInitialXg(event))
        return;
      let nookPrime =
        zinc({
          pageElement: mirePrime,
          pageSize,
        }) ?? (elmPrime?.selectionKind === "text" ? null : elmPrime);
      nookPrime != null &&
        (event.preventDefault(),
        event.stopPropagation(),
        kernelPrime(nookPrime, "ask_codex_shortcut"));
    });
  moss.useEffect(() => {
    if (tidePrime == null || isCommentMode) return;
    let oxbowPrime = tidePrime.parentElement;
    if (oxbowPrime == null) return;
    let pondPrime = (quarryPrime) => {
      leafPrime(quarryPrime, oxbowPrime);
    };
    return (
      oxbowPrime.ownerDocument.addEventListener("keydown", pondPrime, {
        capture: true,
      }),
      () => {
        oxbowPrime.ownerDocument.removeEventListener("keydown", pondPrime, {
          capture: true,
        });
      }
    );
  }, [isCommentMode, tidePrime]);
  let maplePrime = (rapidsPrime) => {
      ((valePrime != null || islePrime != null) && !grainPrime()) ||
        kernelPrime(rapidsPrime, "annotation_mode_pointer");
    },
    nimbusPrime = (event) => {
      if (!isCommentMode || !event.isPrimary || event.button !== 0) return;
      let spurPrime = yellow(event, pageSize);
      spurPrime != null &&
        (event.preventDefault(),
        event.stopPropagation(),
        event.currentTarget.ownerDocument.getSelection()?.removeAllRanges(),
        event.currentTarget.setPointerCapture(event.pointerId),
        fernPrime(null),
        hillPrime(null),
        meadowPrime(null),
        duskPrime({
          pointerId: event.pointerId,
          start: spurPrime,
          current: spurPrime,
          clientStart: {
            x: event.clientX,
            y: event.clientY,
          },
          clientCurrent: {
            x: event.clientX,
            y: event.clientY,
          },
        }));
    },
    opalPrime = (event) => {
      if (cliffPrime == null) {
        if (valePrime != null || islePrime != null) {
          hillPrime(null);
          return;
        }
        hillPrime(jadeitePrime(event.clientX, event.clientY, false));
        return;
      }
      if (event.pointerId !== cliffPrime.pointerId) return;
      let torPrime = yellow(event, pageSize);
      torPrime != null &&
        (event.preventDefault(),
        event.stopPropagation(),
        duskPrime((_event) =>
          _event == null || _event.pointerId !== event.pointerId
            ? _event
            : {
                ..._event,
                current: torPrime,
                clientCurrent: {
                  x: event.clientX,
                  y: event.clientY,
                },
              },
        ));
    },
    plumePrime = (event) => {
      if (cliffPrime == null || event.pointerId !== cliffPrime.pointerId)
        return;
      let updraftPrime = yellow(event, pageSize) ?? cliffPrime.current;
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.hasPointerCapture(event.pointerId) &&
        event.currentTarget.releasePointerCapture(event.pointerId);
      let vergePrime = {
          ...cliffPrime,
          current: updraftPrime,
          clientCurrent: {
            x: event.clientX,
            y: event.clientY,
          },
        },
        weirPrime = _t(vergePrime),
        yardPrime = basalt(vergePrime, weirPrime);
      if (!weirPrime) {
        let anchorPrime = jadeitePrime(event.clientX, event.clientY, true);
        if (anchorPrime != null) {
          duskPrime(null);
          maplePrime(anchorPrime);
          return;
        }
      }
      if (valePrime != null && yardPrime.kind === "point") {
        grainPrime();
        duskPrime(null);
        return;
      }
      kernelPrime(yardPrime, "annotation_mode_pointer");
      duskPrime(null);
    },
    quillowPrime = async (boltPrime, { submitDirectly = false } = {}) => {
      let cogPrime = boltPrime.body.trim();
      if (islePrime != null) {
        if (cogPrime.length === 0 || petalPrime) return;
        onCommentsChange((discPrime) =>
          discPrime.map((item) =>
            on(item) === islePrime
              ? {
                  ...item,
                  content: [
                    {
                      content_type: "text",
                      text: cogPrime,
                    },
                  ],
                }
              : item,
          ),
        );
        everPrime();
        return;
      }
      if (!(valePrime == null || cogPrime.length === 0 || petalPrime))
        try {
          quietPrime(true);
          let edgePrime = bloom({
              anchor: valePrime,
              pageSize,
            }),
            forgePrime = crypto.randomUUID(),
            gearPrime;
          try {
            gearPrime = await frost({
              anchor: valePrime,
              commentId: forgePrime,
              markerLabel: String(nextCommentNumber),
              page,
              pageNumber,
              pageSize,
            });
          } catch {
            gearPrime = undefined;
          }
          let hingePrime = DURABLE_OBJECT_KIND({
            body: cogPrime,
            line: nextCommentNumber,
            metadata: edgePrime,
            pageCount,
            pageNumber,
            path,
            screenshot: gearPrime,
            title,
          });
          logProductEvent(pinePrime, CodexPluginClickTarget, {
            commentType: edgePrime.kind,
            submitMode: submitDirectly ? "direct" : "saved",
          });
          logArtifactRefreshClicked(
            pinePrime,
            {
              artifactTabId: tabId,
              artifactType: "pdf",
              importKind: "pdf",
              threadId,
            },
            {
              annotationModeEnabled: isCommentMode,
              annotationTargetKind: edgePrime.kind,
              submitMode: submitDirectly ? "direct" : "saved",
              submitSource: boltPrime.submitSource,
            },
          );
          submitDirectly
            ? ensureAppActionPayloadSchemasInit.dispatchHostMessage({
                type: "pdf-direct-comment",
                body: cogPrime,
                comment: hingePrime,
                conversationId,
                sessionId: forgePrime,
              })
            : onCommentsChange((ironPrime) => [...ironPrime, hingePrime]);
          everPrime();
        } finally {
          quietPrime(false);
        }
    };
  return (
    <div
      ref={unityPrime}
      className={IntlProvider(
        "absolute inset-0 z-[3]",
        !isCommentMode && "pointer-events-none",
      )}
      data-testid="artifact-pdf-comment-layer"
      style={
        isCommentMode
          ? {
              cursor: pickSourcePosition,
            }
          : undefined
      }
      onPointerDown={nimbusPrime}
      onPointerMove={opalPrime}
      onPointerUp={plumePrime}
      onPointerCancel={() => {
        duskPrime(null);
        hillPrime(null);
      }}
      onPointerLeave={() => hillPrime(null)}
    >
      {urnPrime.map((item) => (
        <PdfPreviewPanelHelper33
          key={on(item)}
          {...{
            comment: item,
            isSelected: on(item) === islePrime,
            onEdit: (jointPrime) => {
              valePrime != null && onDraftActiveChange?.(pageNumber, false);
              wavePrime(null);
              fernPrime(null);
              hillPrime(null);
              brookPrime("");
              oakPrime(false);
              meadowPrime(null);
              juniperPrime(jointPrime);
            },
            onPreviewChange: meadowPrime,
          }}
        />
      ))}
      {vinePrime == null || islePrime != null ? null : (
        <PdfPreviewPanelHelper34
          {...{
            comment: vinePrime,
            layer: tidePrime,
          }}
        />
      )}
      {grovePrime != null && valePrime == null && islePrime == null ? (
        <QueueAutomationRun
          {...{
            paddingPx: 4,
            pageSize,
            rect: grovePrime.rect,
            testId: "artifact-pdf-element-hover-highlight",
          }}
        />
      ) : null}
      {elmPrime != null && valePrime == null ? (
        <IsWhitespaceOrEofCharCode
          {...{
            anchor: elmPrime.askForEditAnchor,
            label: trailPrime,
            pageSize,
            rect: elmPrime.rect,
            testId: "artifact-pdf-ask-for-edit-button",
            onClick: () => kernelPrime(elmPrime, "ask_codex_button"),
          }}
        />
      ) : null}
      {cliffPrime == null ? null : (
        <PdfPreviewPanelHelper37
          {...{
            rect: cedar(cliffPrime.start, cliffPrime.current),
            pageSize,
          }}
        />
      )}
      {valePrime == null ? null : (
        <PdfPreviewPanelHelper35
          {...{
            anchor: valePrime,
            label: nextCommentNumber,
            pageSize,
          }}
        />
      )}
      {azurePrime == null ||
      canyonPrime == null ||
      birchPrime == null ? null : (
        <div
          ref={ridgePrime}
          className={AppInitialOg}
          style={{
            left: canyonPrime.x,
            top: canyonPrime.y,
            height: Queued,
            width: 294,
          }}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <DesignComposerSurface
            key={birchPrime.sessionId}
            allowImageAttachments={false}
            defaultCreateSubmitMode="direct"
            inputAriaLabel={rainPrime}
            keyboardEventTarget={typeof window > "u" ? undefined : window}
            placeholder={seedPrime}
            session={birchPrime}
            windowHeight={Queued}
            onCancel={everPrime}
            onDelete={(keystonePrime) => {
              onCommentsChange((latchPrime) =>
                latchPrime.filter((item) => on(item) !== keystonePrime),
              );
              everPrime();
            }}
            onDirectSubmit={(motorPrime) => {
              quillowPrime(motorPrime, {
                submitDirectly: true,
              });
            }}
            onEscape={everPrime}
            onBodyChange={
              birchPrime.target.mode === "create" ? fieldPrime : undefined
            }
            onLightDismissibilityChange={orbit}
            onMounted={orbit}
            onSubmit={(nutPrime) => {
              quillowPrime(nutPrime);
            }}
          />
        </div>
      )}
    </div>
  );
}
function PdfPreviewPanelHelper33(pistonPrime) {
  let { comment, isSelected, onEdit, onPreviewChange } = pistonPrime,
    rivetPrime = useIntl(),
    screwPrime = comment.localPdfCommentMetadata;
  if (screwPrime == null) return null;
  let torquePrime = on(comment);
  let valvePrime = torquePrime,
    axlePrime = rivetPrime.formatMessage(
      {
        id: "artifactPdfPreview.commentMarkerLabel",
        defaultMessage: "PDF annotation {commentNumber}",
        description: "Accessible label for a placed PDF annotation marker",
      },
      {
        commentNumber: comment.position.line,
      },
    );
  let bracketPrime = axlePrime,
    clampPrime = () => onPreviewChange(valvePrime);
  let drillPrime = clampPrime,
    enginePrime = () => onPreviewChange(null);
  let framePrime = enginePrime;
  if (screwPrime.kind === "region") {
    let handlePrime =
      screwPrime.selectionKind == null ? (
        <PdfPreviewPanelHelper37
          {...{
            rect: screwPrime.pageRect,
            pageSize: screwPrime.pageSize,
          }}
        />
      ) : (
        <PdfPreviewPanelHelper36
          {...{
            bordered: true,
            anchor: {
              kind: "region",
              nearbyText: screwPrime.nearbyText,
              rect: screwPrime.pageRect,
              selectedText: screwPrime.selectedText,
              selectionKind: screwPrime.selectionKind,
              selectionRects: screwPrime.selectionRects,
            },
            pageSize: screwPrime.pageSize,
            testId: "artifact-pdf-comment-region-outline",
          }}
        />
      );
    let insertPrime = comment.position.line,
      jacketPrime = () => onEdit(valvePrime);
    let knurlPrime = daisy(screwPrime.pageRect);
    let leverPrime = (
      <PdfPreviewPanelHelper38
        {...{
          ariaLabel: bracketPrime,
          isSelected,
          label: insertPrime,
          onClick: jacketPrime,
          onPreviewHide: framePrime,
          onPreviewShow: drillPrime,
          point: knurlPrime,
          pageSize: screwPrime.pageSize,
        }}
      />
    );
    let mountPrime;
    return (
      <>
        {handlePrime}
        {leverPrime}
      </>
    );
  }
  let gasketPrime = () => onEdit(valvePrime);
  return (
    <PdfPreviewPanelHelper38
      {...{
        ariaLabel: bracketPrime,
        isSelected,
        label: comment.position.line,
        onClick: gasketPrime,
        onPreviewHide: framePrime,
        onPreviewShow: drillPrime,
        point: screwPrime.pagePoint,
        pageSize: screwPrime.pageSize,
      }}
    />
  );
}
function PdfPreviewPanelHelper34(nozzlePrime) {
  let { comment, layer } = nozzlePrime,
    platenPrime = coral(comment);
  let ratchetPrime = platenPrime,
    shimPrime = eagle(comment);
  let tappetPrime = shimPrime;
  if (ratchetPrime == null) return null;
  return (
    <AppInitialCg
      body={tappetPrime}
      layer={layer}
      pageSize={ratchetPrime.pageSize}
      point={ratchetPrime.point}
      testId="artifact-pdf-comment-preview"
    />
  );
}
