// Restored from ref/webview/assets/docx-preview-panel-D6d6eiCV.js
// Wave FY — full polished body from `docx-preview-panel-D6d6eiCV/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 20 (verified 56/76).
// Wave FZ-support — PascalCase invalid JSX tags: at→At, DocxPreviewPanelHelper24→DocxPreviewPanelHelper24, DocxPreviewPanelHelper25→DocxPreviewPanelHelper25, DocxPreviewPanelHelper26→DocxPreviewPanelHelper26, DocxPreviewPanelHelper27→DocxPreviewPanelHelper27, DocxPreviewPanelHelper41→DocxPreviewPanelHelper41, isLocalOrNullValue→IsLocalOrNullValue, isWhitespaceOrEofCharCode→IsWhitespaceOrEofCharCode, queueAutomationRun→QueueAutomationRun, resolveWorktreeHandoffDirection→ResolveWorktreeHandoffDirection.
// Careful split 1/5
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { getAppSurfaceDisplayName } from "../../app/app-surface-display-name";
import {
  ensureArtifactAnalyticsInit,
  logArtifactAnnotationSubmitted,
  logArtifactRefreshClicked,
} from "../../artifact/artifact-analytics";
import {
  buildArtifactAnnotationCommentForTarget,
  collectRemovedArtifactAnnotationIds,
  nextArtifactAnnotationCommentLine,
} from "../../artifact/artifact-annotation-comment";
import { ArtifactPreviewDownloadButton } from "../../artifact/artifact-preview-download-button";
import { artifactTabLoading } from "../../artifact/artifact-tab-loading";
import { hypotDistance } from "../../artifact/hypot-distance";
import { QueueAutomationRun } from "../../automation/queue-automation-run";
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
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { deferredComposerBV } from "../../composer/deferred-composer-bv";
import { DesignComposerSurface } from "../../composer/design-composer-surface";
import { filterConversationTimelineItems } from "../../conversation/filter-conversation-timeline-items";
import { useThreadHandoffDisabledReason } from "../../conversation/use-thread-handoff-disabled-reason";
import { useTurnDiffEnrichmentQuery } from "../../diff/use-turn-diff-enrichment-query";
import { ResolveWorktreeHandoffDirection } from "../../environments/worktree-handoff-helpers";
import { ensureDebugPanelParsersInit } from "../../hooks/debug-panel-turn-files";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { IsLocalOrNullValue } from "../../hosts/is-local-or-null-value";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconGg } from "../../icons/app-icon-gg";
import { AppIconUg } from "../../icons/app-icon-ug";
import { AppIconYg } from "../../icons/app-icon-yg";
import { AppIconYj } from "../../icons/app-icon-yj";
import { IsWhitespaceOrEofCharCode } from "../../markdown/is-whitespace-or-eof-char-code";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { newConversationEntrypointId } from "../../navigation/new-conversation-entrypoint-id";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import {
  ArtifactPreviewStatus,
  ensureArtifactPreviewStatusInit,
} from "../../ui/artifact-preview-status";
import { deferredT1 } from "../../ui/deferred-t1";
import { getIconPixelSize } from "../../ui/icon-pixel-size";
import { MemoizedValueBridge } from "../../ui/memoized-value-bridge";
import { OperationStatusOverlay } from "../../ui/operation-status-overlay";
import { identityValue } from "../../utils/identity-value";
import { pickSourcePosition } from "../../utils/pick-source-position";
import { safeZodValue } from "../../utils/safe-zod-value";
import { ToWorktree } from "../../worktree/to-worktree";

const At = at;
/** Wave FY unresolved companion (missing-export:artifact/notebook-preview-open-actions.tsx) */
const NotebookPreviewOpenActions: any = undefined;
/** Wave FY unresolved companion (jsx-collision:shouldOfferCloudFollowUp@conversation/should-offer-cloud-follow-up.ts) */
const AppInitialCg: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-e1.ts) */
const deferredUiE1: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-gr.ts) */
const deferredUiGR: any = undefined;
/** Wave FY unresolved companion (missing-export:worktree/queued.tsx) */
const Queued: any = undefined;
/** Wave FY unresolved companion (jsx-collision:getAnnouncementTtlMs@account/announcement-ttl-ms.ts) */
const AppInitialHgt: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/zoom-percent-menu-control.tsx) */
const ZoomPercentMenuControl: any = undefined;
/** Wave FY unresolved companion (jsx-collision:dismiss@conversation/dismiss.ts) */
const AppInitialIO: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-j1.tsx) */
const deferredUiJ1: any = undefined;
/** Wave FY unresolved companion (jsx-collision:decayZoomPercent@artifact/clamp-zoom-percent.ts) */
const AppInitialJR: any = undefined;
/** Wave FY unresolved companion (jsx-collision:clampZoomPercent@artifact/clamp-zoom-percent.ts) */
const AppInitialKR: any = undefined;
/** Wave FY unresolved companion (jsx-collision:flashBrowserCommentPopupShake@browser/flash-browser-comment-popup-shake.ts) */
const AppInitialLO: any = undefined;
/** Wave FY unresolved companion (jsx-collision:clearSuccessfulWorktreeOperation@environments/worktree-handoff-helpers.ts) */
const AppInitialOg: any = undefined;
/** Wave FY unresolved companion (jsx-collision:formatSkillScopeLabel@skills/skill-scope-labels.ts) */
const AppInitialVj: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:runtime/vite-preload.ts) */
const vitePreload: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wr-2.ts) */
const deferredUiWR: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiXg@ui/deferred-ui-xg.tsx) */
const AppInitialXg: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-xr.ts) */
const deferredUiXR: any = undefined;
/** Wave FY unresolved companion (jsx-collision:identity@utils/identity.ts) */
const AppInitialZO: any = undefined;
const __vite__mapDeps = (
  apex,
  brook = __vite__mapDeps,
  cliff = brook.f ||
    (brook.f = ["docx-preview", "./rolldown-runtime-BG2f4sTM.js"]),
) => apex.map((item) => cliff[item]);
var alpha = esmInit(() => {});
function bravo({ anchor, editorScale, layer, pageSize }) {
  return anchor.kind === "region" && anchor.selectionKind != null
    ? useOpenLocatorInMainWindow({
        editorScale,
        layer,
        pageSize,
        rect: anchor.rect,
      })
    : OperationStatusOverlay({
        editorScale,
        layer,
        markerPoint:
          anchor.kind === "region" ? AppIconYg(anchor.rect) : anchor.point,
        pageSize,
      });
}
var copper = esmInit(() => {
  ToWorktree();
});
function delta(event, dusk) {
  let elm = event.currentTarget.getBoundingClientRect();
  return elm.width <= 0 || elm.height <= 0
    ? null
    : {
        x: marble(
          ((event.clientX - elm.left) / elm.width) * dusk.width,
          0,
          dusk.width,
        ),
        y: marble(
          ((event.clientY - elm.top) / elm.height) * dusk.height,
          0,
          dusk.height,
        ),
      };
}
function echo({ clientRects, pageElement, pageSize }) {
  let fern = pageElement.getBoundingClientRect();
  if (fern.width <= 0 || fern.height <= 0) return null;
  let grove = quartz(clientRects);
  if (grove == null) return null;
  let hill = marble(
      ((grove.left - fern.left) / fern.width) * pageSize.width,
      0,
      pageSize.width,
    ),
    isle = marble(
      ((grove.top - fern.top) / fern.height) * pageSize.height,
      0,
      pageSize.height,
    ),
    juniper = marble(
      ((grove.right - fern.left) / fern.width) * pageSize.width,
      0,
      pageSize.width,
    ),
    lagoon = marble(
      ((grove.bottom - fern.top) / fern.height) * pageSize.height,
      0,
      pageSize.height,
    );
  return juniper <= hill || lagoon <= isle
    ? null
    : {
        x: hill,
        y: isle,
        width: juniper - hill,
        height: lagoon - isle,
      };
}
function falcon({ clientRects, pageElement, pageSize }) {
  let meadow = [];
  for (let nest of nickel(clientRects)) {
    let oak = echo({
      clientRects: [nest],
      pageElement,
      pageSize,
    });
    oak != null && meadow.push(oak);
  }
  return meadow;
}
function gamma(petal) {
  return petal.askForEditAnchor?.point ?? pearl(petal.rect);
}
function harbor({ clientRects, pageElement, pageSize, selection }) {
  let quiet = pageElement.getBoundingClientRect();
  if (quiet.width <= 0 || quiet.height <= 0 || clientRects.length === 0)
    return null;
  let rain = quartz(clientRects);
  if (rain == null) return null;
  let seed = river(selection),
    trail = seed ? clientRects[clientRects.length - 1] : clientRects[0];
  if (trail == null) return null;
  let urn = trail.top + trail.height / 2,
    vine = rain.top + rain.height / 2,
    wind = trail.top - 6 - 28 >= quiet.top,
    yarrow = trail.bottom + 6 + 28 <= quiet.bottom,
    azure = urn > vine && yarrow ? "below" : wind ? "above" : "below";
  return {
    placement: azure,
    point: indigo({
      clientX: seed ? trail.right : trail.left,
      clientY: azure === "above" ? trail.top : trail.bottom,
      pageElement,
      pageSize,
    }),
  };
}
function indigo({ clientX, clientY, pageElement, pageSize }) {
  let birch = pageElement.getBoundingClientRect();
  return {
    x: marble(
      ((clientX - birch.left) / birch.width) * pageSize.width,
      0,
      pageSize.width,
    ),
    y: marble(
      ((clientY - birch.top) / birch.height) * pageSize.height,
      0,
      pageSize.height,
    ),
  };
}
function jade(canyon) {
  return (
    Math.abs(canyon.clientCurrent.x - canyon.clientStart.x) >= 3 ||
    Math.abs(canyon.clientCurrent.y - canyon.clientStart.y) >= 3
  );
}
function kite(dew, ever = false) {
  let field = lemon(dew.start, dew.current);
  return !ever && field.width < 8 && field.height < 8
    ? {
        kind: "point",
        point: dew.current,
      }
    : {
        kind: "region",
        rect: field,
      };
}
function lemon(grain, haven) {
  return {
    x: Math.min(grain.x, haven.x),
    y: Math.min(grain.y, haven.y),
    width: Math.abs(grain.x - haven.x),
    height: Math.abs(grain.y - haven.y),
  };
}
function marble(ink, jadeite, kernel) {
  return Math.min(Math.max(ink, jadeite), kernel);
}
function nickel(leaf) {
  let maple = [],
    nimbus = leaf
      .filter((item) => item.width > 0 && item.height > 0)
      .sort((opal, plume) => opal.top - plume.top || opal.left - plume.left);
  for (let quillow of nimbus) {
    let root = maple.find((item) => onyx(item, quillow));
    if (root == null) {
      maple.push({
        bottom: quillow.bottom,
        height: quillow.height,
        left: quillow.left,
        right: quillow.right,
        top: quillow.top,
        width: quillow.width,
      });
      continue;
    }
    root.left = Math.min(root.left, quillow.left);
    root.top = Math.min(root.top, quillow.top);
    root.right = Math.max(root.right, quillow.right);
    root.bottom = Math.max(root.bottom, quillow.bottom);
    root.width = root.right - root.left;
    root.height = root.bottom - root.top;
  }
  return maple;
}
function onyx(silk, thorn) {
  return (
    Math.min(silk.bottom, thorn.bottom) - Math.max(silk.top, thorn.top) >=
    Math.min(silk.height, thorn.height) * 0.5
  );
}
function pearl(upland) {
  return {
    x: upland.x + upland.width / 2,
    y: upland.y,
  };
}
function quartz(vista) {
  let wisp = 1 / 0,
    yonder = 1 / 0,
    zenith = -1 / 0,
    anvil = -1 / 0;
  for (let beacon of vista)
    beacon.width <= 0 ||
      beacon.height <= 0 ||
      ((wisp = Math.min(wisp, beacon.left)),
      (yonder = Math.min(yonder, beacon.top)),
      (zenith = Math.max(zenith, beacon.right)),
      (anvil = Math.max(anvil, beacon.bottom)));
  return !Number.isFinite(wisp) ||
    !Number.isFinite(yonder) ||
    !Number.isFinite(zenith) ||
    !Number.isFinite(anvil)
    ? null
    : {
        bottom: anvil,
        height: anvil - yonder,
        left: wisp,
        right: zenith,
        top: yonder,
        width: zenith - wisp,
      };
}
function river(crag) {
  if (crag.anchorNode == null || crag.focusNode == null) return true;
  if (crag.anchorNode === crag.focusNode)
    return crag.focusOffset >= crag.anchorOffset;
  let dome = crag.anchorNode.compareDocumentPosition(crag.focusNode);
  return dome === Node.DOCUMENT_POSITION_FOLLOWING
    ? true
    : dome !== Node.DOCUMENT_POSITION_PRECEDING;
}
var slate = esmInit(() => {
  alpha();
  ToWorktree();
});
function timber({
  anchor,
  body,
  conversationId,
  pageNumber,
  pageSize,
  path,
  target,
  title,
}) {
  let eddy =
      anchor.kind === "region"
        ? anchor.rect
        : {
            x: anchor.point.x,
            y: anchor.point.y,
            width: 1,
            height: 1,
          },
    fjord =
      anchor.kind === "region"
        ? anchor.selectionKind == null
          ? AppIconYg(anchor.rect)
          : gamma(anchor)
        : anchor.point;
  return {
    sessionId:
      target.mode === "edit"
        ? `docx-comment-edit:${target.commentId}`
        : anchor.kind === "region"
          ? [
              "docx-comment",
              pageNumber,
              "region",
              anchor.rect.x,
              anchor.rect.y,
              anchor.rect.width,
              anchor.rect.height,
            ].join(":")
          : [
              "docx-comment",
              pageNumber,
              "point",
              anchor.point.x,
              anchor.point.y,
            ].join(":"),
    conversationId,
    target,
    anchorState: {
      anchor: {
        kind: "region",
        pageUrl: path,
        frameUrl: null,
        title,
        elementPath: `docx-page-${pageNumber}`,
        point: {
          xPercent: pageSize.width === 0 ? 0 : (fjord.x / pageSize.width) * 100,
          y: fjord.y,
        },
        rect: eddy,
        isFixed: false,
        role: null,
        name: null,
        selector: null,
        framePath: [],
        nearbyText: null,
      },
      viewportRect: eddy,
      viewportPoint: fjord,
      viewportSize: pageSize,
    },
    body,
    cwd: null,
    placementStrategy: "anchored",
    previewAlignment: "end",
    surfaceMode: "editor",
  };
}
function umbra({ anchor, pageCount, pageNumber, pageSize }) {
  return anchor.kind === "region"
    ? anchor.selectionKind == null
      ? {
          target: {
            type: "document-page-region",
            anchorPoint: AppIconYg(anchor.rect),
            pageCount,
            pageNumber,
            pageSize,
            rect: anchor.rect,
          },
        }
      : {
          contentPreview: anchor.contentPreview,
          target: {
            type: "document-element-selection",
            selectionKind: anchor.selectionKind,
            anchorPoint: gamma(anchor),
            pageCount,
            pageNumber,
            pageSize,
            rect: anchor.rect,
            selectionRects: anchor.selectionRects,
            selectedText: anchor.selectedText,
            nearbyText: anchor.nearbyText,
          },
        }
    : {
        target: {
          type: "document-page-point",
          pageCount,
          pageNumber,
          pageSize,
          point: anchor.point,
        },
      };
}
function violet(glen, hearth) {
  return glen.kind === "region" && glen.selectionKind != null
    ? `Page ${hearth} ${glen.selectionKind}`
    : glen.kind === "region"
      ? `Page ${hearth} region`
      : `Page ${hearth} point`;
}
function willow(inlet) {
  let jetty = inlet.localArtifactAnnotationMetadata?.target;
  return jetty?.type === "document-page-point" ||
    jetty?.type === "document-page-region" ||
    jetty?.type === "document-element-selection"
    ? jetty.pageNumber
    : null;
}
function $e(knob) {
  let ledge = knob.localArtifactAnnotationMetadata?.target;
  return ledge?.type === "document-page-point" ||
    ledge?.type === "document-page-region" ||
    ledge?.type === "document-element-selection"
    ? ledge.pageSize
    : null;
}
function xenon(mire) {
  let nook = mire.localArtifactAnnotationMetadata?.target;
  return nook?.type === "document-page-region"
    ? {
        kind: "region",
        rect: nook.rect,
      }
    : nook?.type === "document-element-selection"
      ? {
          kind: "region",
          ...(nook.selectionKind === "text"
            ? {
                askForEditAnchor: {
                  placement: "above",
                  point: nook.anchorPoint,
                },
              }
            : {}),
          rect: nook.rect,
          contentPreview: mire.localArtifactAnnotationMetadata?.contentPreview,
          selectionRects: nook.selectionRects,
          selectionKind: nook.selectionKind,
          selectedText: nook.selectedText,
          nearbyText: nook.nearbyText,
        }
      : nook?.type === "document-page-point"
        ? {
            kind: "point",
            point: nook.point,
          }
        : null;
}
function yellow(oxbow) {
  return oxbow.content
    .flatMap((item) => (item.content_type === "text" ? [item.text] : []))
    .join("\n");
}
function zinc(pond) {
  return [
    pond.position.path,
    pond.position.line,
    pond.localArtifactAnnotationContext?.label ?? "",
  ].join(":");
}
var amber = esmInit(() => {
  slate();
  ToWorktree();
});
function DocxPreviewPanelHelper24(quarry) {
  let {
      bordered = false,
      borderWidth,
      paddingPx = 0,
      paddingX,
      paddingY,
      pageSize,
      rect,
      testId,
    } = quarry,
    rapids = borderWidth === undefined ? +!!bordered : borderWidth,
    spur = paddingX === undefined ? paddingPx : paddingX,
    tor = paddingY === undefined ? paddingPx : paddingY;
  return (
    <QueueAutomationRun
      {...{
        bordered: bordered,
        borderWidth: rapids,
        paddingPx: paddingPx,
        paddingX: spur,
        paddingY: tor,
        pageSize,
        rect,
        testId,
      }}
    />
  );
}
function at(updraft) {
  let { comment, isSelected, onEdit, onPreviewChange, zoomScale } = updraft,
    verge = useIntl(),
    weir,
    yard,
    bolt,
    cog,
    disc,
    edge;
  edge = Symbol.for("react.early_return_sentinel");
  bb0: {
    weir = xenon(comment);
    let nut;
    if (((nut = $e(comment)), (cog = nut), weir == null || cog == null)) {
      edge = null;
      break bb0;
    }
    let piston;
    piston = zinc(comment);
    bolt = piston;
    let rivet;
    rivet = verge.formatMessage(
      {
        id: "artifactDocxPreview.commentMarkerLabel",
        defaultMessage: "Document annotation {commentNumber}",
        description: "Accessible label for a placed DOCX annotation marker",
      },
      {
        commentNumber: comment.position.line,
      },
    );
    yard = rivet;
    disc = weir.kind === "region" ? AppIconYg(weir.rect) : weir.point;
  }
  if (edge !== Symbol.for("react.early_return_sentinel")) return edge;
  let forge = disc,
    gear = () => onPreviewChange(bolt);
  let hinge = gear,
    iron = () => onPreviewChange(null);
  let joint = iron,
    keystone =
      weir.kind === "region" ? (
        weir.selectionKind == null ? (
          <ResolveWorktreeHandoffDirection
            {...{
              pageSize: cog,
              rect: weir.rect,
              testId: "artifact-docx-comment-region-outline",
            }}
          />
        ) : (
          <DocxPreviewPanelHelper27
            {...{
              bordered: true,
              pageSize: cog,
              anchor: weir,
              testId: "artifact-docx-comment-region-outline",
            }}
          />
        )
      ) : null;
  let latch = () => onEdit(bolt);
  let motor = (
    <AppIconUg
      {...{
        ariaLabel: yard,
        isSelected,
        label: comment.position.line,
        pageSize: cog,
        point: forge,
        testId: "artifact-docx-comment-marker",
        zoomScale,
        onClick: latch,
        onPreviewHide: joint,
        onPreviewShow: hinge,
      }}
    />
  );
  return (
    <>
      {keystone}
      {motor}
    </>
  );
}
function DocxPreviewPanelHelper25(screw) {
  let { comment, layer } = screw,
    torque,
    valve,
    axle;
  axle = Symbol.for("react.early_return_sentinel");
  bb0: {
    let engine = xenon(comment);
    if (((torque = $e(comment)), engine == null || torque == null)) {
      axle = null;
      break bb0;
    }
    valve = engine.kind === "region" ? AppIconYg(engine.rect) : engine.point;
  }
  if (axle !== Symbol.for("react.early_return_sentinel")) return axle;
  let bracket = valve,
    clamp = zinc(comment);
  let drill = yellow(comment);
  return (
    <AppInitialCg
      key={clamp}
      body={drill}
      layer={layer}
      pageSize={torque}
      point={bracket}
      testId="artifact-docx-comment-preview"
    />
  );
}
function DocxPreviewPanelHelper26(frame) {
  let { anchor, label, pageSize, zoomScale } = frame;
  if (anchor.kind === "region") {
    let gasket =
      anchor.selectionKind == null ? (
        <ResolveWorktreeHandoffDirection
          {...{
            pageSize,
            rect: anchor.rect,
            testId: "artifact-docx-comment-region-outline",
          }}
        />
      ) : (
        <DocxPreviewPanelHelper27
          {...{
            bordered: true,
            pageSize,
            anchor,
            testId: "artifact-docx-comment-region-outline",
          }}
        />
      );
    let handle = AppIconYg(anchor.rect);
    let insert = (
      <AppIconUg
        {...{
          draft: true,
          draftTestId: "artifact-docx-comment-draft-marker",
          label,
          pageSize,
          point: handle,
          testId: "artifact-docx-comment-marker",
          zoomScale,
        }}
      />
    );
    let jacket;
    return (
      <>
        {gasket}
        {insert}
      </>
    );
  }
  return (
    <AppIconUg
      {...{
        draft: true,
        draftTestId: "artifact-docx-comment-draft-marker",
        label,
        pageSize,
        point: anchor.point,
        testId: "artifact-docx-comment-marker",
        zoomScale,
      }}
    />
  );
}
function DocxPreviewPanelHelper27(knurl) {
  let { bordered = false, pageSize, anchor, testId } = knurl;
  if (anchor.selectionKind === "text") {
    let mount =
      anchor.selectionRects == null || anchor.selectionRects.length === 0
        ? [anchor.rect]
        : anchor.selectionRects;
    let nozzle = mount,
      platen;
    {
      let shim;
      shim = (tappet, arbor) => (
        <DocxPreviewPanelHelper24
          key={`${tappet.x}:${tappet.y}:${tappet.width}:${tappet.height}:${arbor}`}
          {...{
            paddingX: 4,
            paddingY: 0,
            pageSize,
            rect: tappet,
            testId,
          }}
        />
      );
      platen = nozzle.map(shim);
    }
    let ratchet;
    return <>{platen}</>;
  }
  let lever = bordered ? (anchor.selectionKind === "paragraph" ? 2 : 1) : 0;
  return (
    <DocxPreviewPanelHelper24
      {...{
        bordered: bordered,
        borderWidth: lever,
        paddingPx: 4,
        pageSize,
        rect: anchor.rect,
        testId,
      }}
    />
  );
}
