// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide canvas render pass (legacy vEe).
// Stage-3 wave-94.

import { layoutTableFrame } from "../table-frame-layout";
import { paintChartElement } from "../chart-paint";
import {
  resolvePlaceholderTextStyle,
} from "../text-style";
import {
  resolveMasterParagraphDefaults,
} from "../text-box";
import { resolveShapeTextFrameRect } from "../preset-shape";
import { scrH } from "./boundary-hooks";

void layoutTableFrame;
void paintChartElement;
void resolvePlaceholderTextStyle;
void resolveMasterParagraphDefaults;
void resolveShapeTextFrameRect;
void scrH;

export async function renderSlideCanvas(scrIn165: any, scrIn166: any, scrIn167: any, scrIn168: any, scrIn169: any, scrIn170: any, scrIn171: any, scrIn172: any, scrIn173: any, scrIn174: any, scrIn175: any, ) {
  let scrBind2965 = scrIn165.resolveRenderContext(),
    { themeMap } = scrBind2965,
    scrBind2966 = scrIn165.frame.width,
    scrBind2967 = scrIn165.frame.height;
  scrIn167.save();
  scrIn167.globalAlpha = 1;
  scrIn167.globalCompositeOperation = "source-over";
  scrIn175?.clearBeforeDraw !== false &&
    scrIn167.clearRect(0, 0, scrBind2966, scrBind2967);
  let scrBind2968;
  if (
    (await scrH.paintSlideBackground(
      scrIn167,
      themeMap,
      scrBind2965.background,
      scrBind2966,
      scrBind2967,
      {
        clipRadiusPx: scrIn175?.backgroundClipRadiusPx,
      },
    ),
    scrBind2965.usesBackgroundFill)
  ) {
    let scrBind20393 = scrIn167.createPattern(
      scrIn167.canvas,
      "no-repeat",
    );
    if (!scrBind20393)
      throw Error("Unable to create a slide-background fill pattern.");
    scrBind2968 = scrBind20393;
  }
  let scrBind2969 = scrBind2965.drawElements.filter(
    (item) => item.type === "image",
  );
  await Promise.all(scrBind2969.map((item) => item.getBitmap())).catch(
    (error) => {
      console.error("Error warming images", error);
    },
  );
  let scrBind2970, scrBind2971;
  for (
    let scrBind3094 = 0;
    scrBind3094 < scrBind2965.drawElements.length;
    scrBind3094 += 1
  ) {
    let scrBind3114 =
        scrBind2965.drawElements[scrBind3094],
      scrBind3115 =
        scrBind2965.drawElementProtos[scrBind3094];
    if (!scrBind3115)
      throw Error(
        `Missing presentation render proto for element ${scrBind3114.id}.`,
      );
    if (scrBind3114.type === "image") {
      if (
        (await scrH.warmSlideImages(scrBind3114, scrIn167, themeMap, {
          inheritedMaskSource:
            scrBind2965.drawElementInheritedMaskSources[
              scrBind3094
            ],
        }),
        scrIn168 && scrBind3114.hyperlink)
      ) {
        let scrBind17687 = scrBind3114.resolveFrame();
        scrIn168.push({
          x: scrBind17687.left,
          y: scrBind17687.top,
          width: scrBind17687.width,
          height: scrBind17687.height,
          url: scrBind3114.hyperlink.uri,
          action: scrBind3114.hyperlink.action,
        });
      }
      continue;
    }
    let scrBind3116 = scrBind3114.resolveFrame(),
      scrBind3117 = {
        x: scrBind3116.left,
        y: scrBind3116.top,
        width: scrBind3116.width,
        height: scrBind3116.height,
      },
      scrBind3118;
    if (
      (scrBind3114.type === "chart" &&
        paintChartElement(
          scrBind3115,
          scrIn167,
          scrIn166,
          scrIn165,
          themeMap,
          scrIn173,
          undefined,
          scrIn171 ?? null,
          scrIn169 ?? null,
          scrIn170,
          scrIn172,
          scrIn174,
          scrBind3114.chart,
          scrBind3117,
        ),
      scrBind3114.type === "table")
    ) {
      let scrBind9085 = scrBind3115,
        scrBind9086 = layoutTableFrame(
          scrBind9085,
          scrIn167,
          themeMap,
          {
            resolvedStyle: resolvePlaceholderTextStyle(
              scrBind9085,
              scrIn166,
              scrIn165,
            ),
            masterDefaults: resolveMasterParagraphDefaults(
              scrBind9085,
              scrIn166,
              scrIn165,
            ),
            autoRowMinimumHeightPx: 0,
            explicitRowHeightBehavior: "atLeast",
          },
        );
      if (scrBind9086 && scrIn174)
        for (let scrBind11427 of scrBind9086.cellLayouts ?? [])
          scrBind11427.cellId &&
            scrIn174.add({
              id: scrH.isHiddenElement(scrBind3114.id, scrBind11427.cellId),
              layout: scrBind11427.block,
              rotationDeg: scrBind3116.rotation ?? 0,
              zIndex: scrBind9085.zIndex ?? 0,
              hitBox: {
                x: scrBind11427.xPx,
                y: scrBind11427.yPx,
                width: scrBind11427.widthPx,
                height: scrBind11427.heightPx,
              },
              getRunText: (scrIn10087, scrIn10088) =>
                scrBind9085.table?.rows?.[scrBind11427.row]
                  ?.cells?.[scrBind11427.col]?.paragraphs?.[
                  scrIn10087
                ]?.runs?.[scrIn10088]?.text ?? "",
            });
    }
    if (
      (scrBind3114.type === "embeddedArtifact" &&
        scrH.paintSlideShape(scrBind3114, scrIn167),
      scrBind3114.type === "smartArt" &&
        scrH.paintSlideText(
          scrBind3114,
          scrIn167,
          scrIn166,
          scrIn165,
          themeMap,
        ),
      scrBind3114.type === "shape")
    ) {
      let scrBind6786;
      scrBind3114.connector &&
        (scrBind2965.masterElements.includes(scrBind3114)
          ? (scrBind2970 === undefined &&
              scrBind2965.masterLayout !== undefined &&
              (scrBind2970 =
                scrBind2965.masterLayout.elements.map((item) =>
                  item.toProto(),
                )),
            (scrBind6786 = scrBind2970))
          : scrBind2965.layoutElements.includes(scrBind3114) &&
            (scrBind2971 === undefined &&
              scrBind2965.layout !== undefined &&
              (scrBind2971 = scrBind2965.layout.elements.map(
                (item) => item.toProto(),
              )),
            (scrBind6786 = scrBind2971)));
      let scrBind6787 =
        scrBind2965.drawElementShapeRenderSources[scrBind3094];
      if (scrBind6787) {
        let { source, pictureFillSource } = scrBind6787;
        scrBind3118 = source;
        let scrBind14450;
        source.useBackgroundFill ||
          (scrBind14450 = await scrH.bh654(
            pictureFillSource,
            scrIn166,
          ));
        scrH.bh615(
          scrBind3114,
          scrIn167,
          scrIn166,
          scrIn165,
          themeMap,
          {
            frame: scrBind3116,
            backgroundFillPaint: scrBind2968,
            pictureFillBitmap: scrBind14450,
            pictureFill: pictureFillSource.fill,
            source,
            connectorRouteElements: scrBind6786,
          },
        );
      } else {
        scrBind3118 = scrBind3114.renderStyleData;
        let scrBind15689;
        scrBind3114.useBackgroundFill ||
          (scrBind15689 = await scrH.bh654(
            scrBind3114,
            scrIn166,
          ));
        scrH.bh615(
          scrBind3114,
          scrIn167,
          scrIn166,
          scrIn165,
          themeMap,
          {
            frame: scrBind3116,
            backgroundFillPaint: scrBind2968,
            pictureFillBitmap: scrBind15689,
            pictureFill: scrBind3114.fill,
            connectorRouteElements: scrBind6786,
          },
        );
      }
    }
    if (scrBind3114.paragraphs.length > 0) {
      let scrBind7389 = scrBind3115,
        scrBind7390 = resolveShapeTextFrameRect({
          element: scrBind7389,
          bboxPx: scrBind3117,
          source: scrBind3118,
        }),
        scrBind7391 = resolvePlaceholderTextStyle(
          scrBind7389,
          scrIn166,
          scrIn165,
        ),
        scrBind7392 =
          scrBind7391?.wrap !== br.TEXT_WRAPPING_TYPE_NONE,
        scrBind7393 =
          scrBind7391?.autoFit?.normalAutoFit?.fontScale,
        scrBind7394 =
          typeof scrBind7393 == "number"
            ? scrBind7393 / 1e5
            : 1,
        scrBind7395 = await scrH.paintSlideGroup(
          scrBind7389,
          scrIn166,
          scrBind3116,
        ),
        scrBind7396 = scrH.paintSlideImage(scrIn167, scrBind3116),
        scrBind7397;
      try {
        scrBind7397 = workbookX(
          scrBind7389,
          scrIn167,
          themeMap,
          scrIn168,
          {
            resolvedStyle: scrBind7391,
            masterDefaults: resolveMasterParagraphDefaults(
              scrBind7389,
              scrIn166,
              scrIn165,
            ),
            bboxPx: scrBind7390,
            wrap: scrBind7392,
            textScale: scrBind7394,
            pictureFillBitmaps: scrBind7395,
          },
        );
      } finally {
        scrBind7396 && scrIn167.restore();
      }
      if (scrBind7397 && scrIn174) {
        let scrBind12588 =
          scrBind7389.id && scrBind7389.id.length
            ? scrBind7389.id
            : `text:${Math.round(scrBind7390.x)}:${Math.round(scrBind7390.y)}:${Math.round(scrBind7390.width)}:${Math.round(scrBind7390.height)}`;
        scrIn174.add({
          id: scrBind12588,
          layout: scrBind7397,
          rotationDeg:
            (scrBind3116.rotation ?? 0) +
            (scrBind7391?.rotation ?? 0),
          zIndex: scrBind7389.zIndex ?? 0,
          hitBox: {
            x: scrBind7390.x,
            y: scrBind7390.y,
            width: scrBind7390.width,
            height: scrBind7390.height,
          },
          getRunText: (scrIn14819, scrIn14820) =>
            scrBind7389.paragraphs?.[scrIn14819]?.runs?.[
              scrIn14820
            ]?.text ?? "",
        });
      }
    }
    scrIn168 &&
      scrBind3114.hyperlink &&
      scrIn168.push({
        x: scrBind3117.x,
        y: scrBind3117.y,
        width: scrBind3117.width,
        height: scrBind3117.height,
        url: scrBind3114.hyperlink.uri,
        action: scrBind3114.hyperlink.action,
      });
  }
  scrIn175?.viewOverlay &&
    scrH.paintViewOverlay(
      scrIn167,
      scrIn166,
      scrIn165,
      themeMap,
      scrIn175.viewOverlay,
    );
  scrIn167.restore();
}

/** Legacy alias. */
export const vEe = renderSlideCanvas;
