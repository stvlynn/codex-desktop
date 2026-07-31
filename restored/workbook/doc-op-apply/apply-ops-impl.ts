// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: workbook doc-op apply (legacy Zht + alias predicate).
// Stage-3 wave-90; kept flat under maxFlatLines.

import { getAttachedWorksheet } from "../worksheet-attachment";
import { shapeGeometryNameToProto } from "../chart-proto-name-maps";
import { doH } from "./boundary-hooks";
import {
  Qht,
  egt,
  agt,
  ogt,
  cgt,
  lgt,
  ugt,
  dgt,
  mgt,
  hgt,
  ggt,
  ngt,
  rgt,
  findCommentThread,
  findTableOnSheet,
  mergeAnchorProps,
  workbookBinding1964,
} from "./converters-impl";

export function isAliasRef(doIn13091: any) {
  return typeof doIn13091 == "string" && doIn13091.startsWith("@");
}
export function applyWorkbookDocOps(doIn38: any, doIn39: any) {
  let doBind2309 = {
      ...(workbookBinding1964.get(doIn38) ?? {}),
    },
    doBind2310 = {},
    doBind2311 = [],
    doBind2312 = (doIn13375) => {
      doBind2311.push(`TODO: ${doIn13375} is not implemented yet.`);
    },
    doBind2313 = (doIn6858, doIn6859) => {
      if (!doIn6858) return;
      if (!isAliasRef(doIn6858))
        throw Error(`Alias must start with "@": ${doIn6858}`);
      let doBind17168 = doBind2309[doIn6858];
      if (doBind17168 && doBind17168 !== doIn6859)
        throw Error(
          `Alias already defined with a different anchor: ${doIn6858}`,
        );
      doBind2309[doIn6858] = doIn6859;
      doBind2310[doIn6858] = doIn6859;
    },
    doBind2314 = (doIn14132, doIn14133) => {
      isAliasRef(doIn14132) &&
        ((doBind2309[doIn14132] = doIn14133),
        (doBind2310[doIn14132] = doIn14133));
    },
    doBind2315 = (doIn11113) => {
      let doBind21606 = doBind2309[doIn11113];
      if (!doBind21606) throw Error(`Unknown alias target: ${doIn11113}`);
      return doBind21606;
    },
    doBind2316 = (doIn16155) =>
      isAliasRef(doIn16155) ? doBind2315(doIn16155) : doIn16155,
    doBind2317 = (doIn8556) => {
      if (!isAliasRef(doIn8556)) return doIn8556;
      let doBind19055 = doBind2315(doIn8556);
      if (!doBind19055.startsWith("tb/"))
        throw Error(`Alias ${doIn8556} does not resolve to a table target.`);
      return doBind19055.slice(3);
    },
    doBind2318 = (doIn14849) => {
      if (!(!doIn14849 || isAliasRef(doIn14849))) return doIn14849;
    },
    doBind2319 = (doIn14850) => {
      if (!(!doIn14850 || isAliasRef(doIn14850))) return doIn14850;
    },
    doBind2320 = (doIn14851) => {
      if (!(!doIn14851 || isAliasRef(doIn14851))) return doIn14851;
    },
    doBind2321 = (doIn8527) => {
      if (!isAliasRef(doIn8527)) return doIn8527;
      let doBind19042 = doBind2315(doIn8527);
      if (!doBind19042.startsWith("im/"))
        throw Error(`Alias ${doIn8527} does not resolve to an image target.`);
      return doBind19042.slice(3);
    },
    doBind2322 = (doIn8865) => {
      let doBind19407 = typeof doIn8865 == "string" ? doIn8865 : doIn8865.id;
      if (!doBind19407) return;
      let doBind19408 = `${doBind19407}`;
      if (!doBind19408.startsWith("@"))
        return doBind19408.startsWith("th/")
          ? doBind19408
          : `th/${doBind19408}`;
    };
  for (let doBind2382 of doIn39)
    switch (doBind2382.op) {
      case "theme.colorScheme.set":
        doIn38.setColorScheme(doBind2382.scheme);
        break;
      case "sheet.add": {
        let doBind22128 = doIn38.worksheets.add(doBind2382.name);
        doBind2313(doBind2382.as, doBind22128.name);
        break;
      }
      case "sheet.set": {
        let doBind18717 = doIn38.worksheets.getItem(
          doBind2316(doBind2382.target),
        );
        doBind2382.props.name !== undefined &&
          (doBind18717.name = doBind2382.props.name);
        doBind2382.props.index !== undefined &&
          (doBind18717.index = doBind2382.props.index);
        break;
      }
      case "sheet.remove":
        doIn38.worksheets.getItem(doBind2316(doBind2382.target)).delete();
        break;
      case "range.values.set": {
        let doBind20807 = doIn38.worksheets
          .getItem(doBind2382.target.sheet)
          .getRange(doBind2382.target.range);
        doBind20807.values = doBind2382.values;
        break;
      }
      case "range.formulas.set": {
        let doBind20690 = doIn38.worksheets
          .getItem(doBind2382.target.sheet)
          .getRange(doBind2382.target.range);
        doBind20690.formulas = doBind2382.formulas;
        break;
      }
      case "range.merge":
        doIn38.worksheets
          .getItem(doBind2382.target.sheet)
          .getRange(doBind2382.target.range)
          .merge(doBind2382.across ?? false);
        break;
      case "range.unmerge":
        doIn38.worksheets
          .getItem(doBind2382.target.sheet)
          .getRange(doBind2382.target.range)
          .unmerge();
        break;
      case "range.format.set":
        Qht(
          doIn38.worksheets
            .getItem(doBind2382.target.sheet)
            .getRange(doBind2382.target.range).format,
          doBind2382.props,
        );
        break;
      case "range.format.clear":
        doIn38.worksheets
          .getItem(doBind2382.target.sheet)
          .getRange(doBind2382.target.range)
          .clear({
            applyTo: "formats",
          });
        break;
      case "table.add": {
        let doBind17114 = doIn38.worksheets
          .getItem(doBind2382.props.range.sheet)
          .tables.add(
            doBind2382.props.range.range,
            doBind2382.props.hasHeaders ?? false,
            doBind2382.props.name,
          );
        doBind2313(doBind2382.as, `tb/${doBind17114.name}`);
        break;
      }
      case "table.rows.add":
        doHelper1028(
          doIn38,
          doBind2317(doBind2382.target.name),
          doBind2382.target.sheet,
        ).rows.add(doBind2382.props.index ?? null, doBind2382.props.values);
        break;
      case "table.set": {
        let doBind7979 = doHelper1028(
          doIn38,
          doBind2317(doBind2382.target.name),
          doBind2382.target.sheet,
        );
        doBind2382.props.name !== undefined &&
          ((doBind7979.name = doBind2382.props.name),
          doBind2314(doBind2382.target.name, `tb/${doBind7979.name}`));
        doBind2382.props.style !== undefined &&
          (doBind7979.style = doBind2382.props.style);
        doBind2382.props.showHeaders !== undefined &&
          (doBind7979.showHeaders = doBind2382.props.showHeaders);
        doBind2382.props.showTotals !== undefined &&
          (doBind7979.showTotals = doBind2382.props.showTotals);
        doBind2382.props.showBandedRows !== undefined &&
          (doBind7979.showBandedRows = doBind2382.props.showBandedRows);
        doBind2382.props.highlightFirstColumn !== undefined &&
          (doBind7979.highlightFirstColumn =
            doBind2382.props.highlightFirstColumn);
        doBind2382.props.highlightLastColumn !== undefined &&
          (doBind7979.highlightLastColumn =
            doBind2382.props.highlightLastColumn);
        doBind2382.props.showBandedColumns !== undefined &&
          (doBind7979.showBandedColumns = doBind2382.props.showBandedColumns);
        doBind2382.props.showFilterButton !== undefined &&
          (doBind7979.showFilterButton = doBind2382.props.showFilterButton);
        break;
      }
      case "table.remove":
        doHelper1028(
          doIn38,
          doBind2317(doBind2382.target.name),
          doBind2382.target.sheet,
        ).delete();
        break;
      case "conditionalformat.add":
        doIn38.worksheets
          .getItem(doBind2382.target.sheet)
          .conditionalFormattings.add({
            range: doBind2382.target.range,
            rule: egt(doBind2382.props.rule),
          });
        break;
      case "conditionalformat.clear":
        doIn38.worksheets
          .getItem(doBind2382.target.sheet)
          .conditionalFormattings.clear(doBind2382.target.range);
        break;
      case "datavalidation.set":
        doIn38.worksheets.getItem(doBind2382.target.sheet).dataValidations.add({
          range: doBind2382.target.range,
          ...doBind2382.props,
        });
        break;
      case "datavalidation.clear":
        doIn38.worksheets
          .getItem(doBind2382.target.sheet)
          .dataValidations.clear(doBind2382.target.range);
        break;
      case "sparkline.add": {
        let doBind6354 = doIn38.worksheets.getItem(
            doBind2382.props.targetRange.sheet,
          ),
          doBind6355 = doIn38.worksheets.getItem(
            doBind2382.props.sourceData.sheet,
          ),
          doBind6356 = doBind2382.props.dateAxisRange
            ? doIn38.worksheets
                .getItem(doBind2382.props.dateAxisRange.sheet)
                .getRange(doBind2382.props.dateAxisRange.range)
            : undefined,
          doBind6357 = doBind6354.sparklineGroups.__addForApply({
            uid: doBind2382.props.uid ?? doBind2382.props.id,
            id: doBind2382.props.id,
            type: doBind2382.props.type,
            targetRange: doBind6354.getRange(
              doBind2382.props.targetRange.range,
            ),
            sourceData: doBind6355.getRange(doBind2382.props.sourceData.range),
            dateAxisRange: doBind6356,
            lineWeight: doBind2382.props.lineWeight,
            displayEmptyCellsAs: ngt(doBind2382.props.displayEmptyCellsAs),
            displayHidden: doBind2382.props.displayHidden,
            seriesColor: doBind2382.props.seriesColor,
            negativeColor: doBind2382.props.negativeColor,
            axisColor: doBind2382.props.axisColor,
            markersColor: doBind2382.props.markersColor,
            firstMarkerColor: doBind2382.props.firstMarkerColor,
            lastMarkerColor: doBind2382.props.lastMarkerColor,
            highMarkerColor: doBind2382.props.highMarkerColor,
            lowMarkerColor: doBind2382.props.lowMarkerColor,
            markers: doBind2382.props.markers,
            axis: rgt(doBind2382.props.axis),
          });
        doBind2313(doBind2382.as, `sp/${doBind6357.uid}`);
        break;
      }
      case "sparkline.set": {
        let doBind18163 = cgt(
          doIn38.worksheets.getItem(doBind2382.target.sheet),
          doBind2382.target,
          doBind2320,
        );
        if (!doBind18163)
          throw Error(
            `Sparkline group not found: ${JSON.stringify(doBind2382.target)}`,
          );
        ugt(doBind18163, doIn38, doBind2382.props);
        break;
      }
      case "sparkline.remove": {
        let doBind17399 = doIn38.worksheets.getItem(doBind2382.target.sheet),
          doBind17400 = cgt(doBind17399, doBind2382.target, doBind2320);
        if (!doBind17400)
          throw Error(
            `Sparkline group not found: ${JSON.stringify(doBind2382.target)}`,
          );
        doBind17399.sparklineGroups.delete(doBind17400);
        break;
      }
      case "chart.add": {
        let doBind17375 = doIn38.worksheets
          .getItem(doBind2382.sheet)
          .charts.__addForApply({
            chartType: doBind2382.props.chartType,
            anchor: doBind2382.props.anchor,
            id: doBind2382.props.id,
          });
        doBind2313(doBind2382.as, doBind17375.aid);
        dgt(doBind17375, doBind2382.props);
        break;
      }
      case "chart.set": {
        let doBind18817 = agt(
          doIn38.worksheets.getItem(doBind2382.target.sheet),
          doBind2382.target,
          doBind2318,
        );
        if (!doBind18817)
          throw Error(`Chart not found: ${JSON.stringify(doBind2382.target)}`);
        dgt(doBind18817, doBind2382.props);
        break;
      }
      case "chart.remove": {
        let doBind18978 = agt(
          doIn38.worksheets.getItem(doBind2382.target.sheet),
          doBind2382.target,
          doBind2318,
        );
        if (!doBind18978)
          throw Error(`Chart not found: ${JSON.stringify(doBind2382.target)}`);
        doBind18978.delete();
        break;
      }
      case "shape.add": {
        let doBind12848 = doIn38.worksheets.getItem(doBind2382.sheet);
        if (doBind2382.props.geometry === "custom")
          throw Error(
            "Spreadsheet patch shape.add does not support custom geometry.",
          );
        let doBind12849 = doBind12848.shapes.__addForApply({
          id: doBind2382.props.id,
          geometry: doBind2382.props.geometry,
          anchor: doBind2382.props.anchor,
          fill: doBind2382.props.fill,
          line: doBind2382.props.line,
        });
        doBind2313(doBind2382.as, `sh/${doBind12849.id}`);
        break;
      }
      case "shape.set": {
        let doBind17376 = ogt(
          doIn38.worksheets.getItem(doBind2382.target.sheet),
          doBind2382.target,
          doBind2319,
        );
        if (!doBind17376)
          throw Error(`Shape not found: ${JSON.stringify(doBind2382.target)}`);
        mgt(doBind17376, doBind2382.props);
        doBind2382.props.anchor &&
          doHelper1029(doBind17376.anchor, doBind2382.props.anchor);
        break;
      }
      case "shape.remove": {
        let doBind18979 = ogt(
          doIn38.worksheets.getItem(doBind2382.target.sheet),
          doBind2382.target,
          doBind2319,
        );
        if (!doBind18979)
          throw Error(`Shape not found: ${JSON.stringify(doBind2382.target)}`);
        doBind18979.delete();
        break;
      }
      case "image.add": {
        let doBind20973 = doIn38.worksheets
          .getItem(doBind2382.sheet)
          .images.add(doBind2382.props);
        doBind2313(doBind2382.as, `im/${doBind20973.imageId}`);
        break;
      }
      case "image.set": {
        let doBind11971 = hgt(
          doIn38.worksheets.getItem(doBind2382.target.sheet),
          {
            ...doBind2382.target,
            imageId: doBind2321(doBind2382.target.imageId),
          },
        );
        if (!doBind11971)
          throw Error(`Image not found: ${doBind2382.target.imageId}`);
        let doBind11972 = ggt(doBind11971, doBind2382.props);
        doBind2382.props.anchor &&
          doHelper1029(doBind11971.anchor, doBind2382.props.anchor);
        doBind11972
          ? doBind2314(doBind2382.target.imageId, `im/${doBind11971.imageId}`)
          : doBind2382.props.imageId !== undefined &&
            ((doBind11971.imageId = doBind2382.props.imageId),
            doBind2314(doBind2382.target.imageId, `im/${doBind11971.imageId}`));
        break;
      }
      case "image.remove": {
        let doBind17377 = hgt(
          doIn38.worksheets.getItem(doBind2382.target.sheet),
          {
            ...doBind2382.target,
            imageId: doBind2321(doBind2382.target.imageId),
          },
        );
        if (!doBind17377)
          throw Error(`Image not found: ${doBind2382.target.imageId}`);
        doBind17377.delete();
        break;
      }
      case "names.range.add":
        if (doBind2382.sheet) {
          doIn38.worksheets
            .getItem(doBind2382.sheet)
            .names.addRange(doBind2382.name, doBind2382.formula, {
              description: doBind2382.description,
            });
          break;
        }
        doIn38.names.addRange(doBind2382.name, doBind2382.formula, {
          description: doBind2382.description,
        });
        break;
      case "names.function.add":
        if (doBind2382.sheet) {
          doIn38.worksheets
            .getItem(doBind2382.sheet)
            .names.addFunction(doBind2382.name, {
              lambda: doBind2382.lambda,
              description: doBind2382.description,
              parameters: doBind2382.parameters,
              returns: doBind2382.returns,
            });
          break;
        }
        doIn38.names.addFunction(doBind2382.name, {
          lambda: doBind2382.lambda,
          description: doBind2382.description,
          parameters: doBind2382.parameters,
          returns: doBind2382.returns,
        });
        break;
      case "names.remove":
        if (doBind2382.sheet) {
          doIn38.worksheets
            .getItem(doBind2382.sheet)
            .names.getItem(doBind2382.name)
            .delete();
          break;
        }
        doIn38.names.getItem(doBind2382.name).delete();
        break;
      case "comments.self.set":
        doIn38.comments.setSelf(doBind2382.person);
        break;
      case "thread.add": {
        let doBind18071 = doIn38.comments.__addThreadForApply(
          lgt(doIn38, doBind2382.target),
          doBind2382.body,
          {
            id: doBind2382.id,
            author: doBind2382.author,
            createdAt: doBind2382.createdAt,
          },
        );
        doBind2313(doBind2382.as, `th/${doBind18071.id}`);
        break;
      }
      case "thread.reply": {
        let doBind18216 = doHelper1027(doIn38, doBind2382.target, doBind2322);
        if (doBind18216) {
          doBind18216.addReply(doBind2382.body, {
            author: doBind2382.author,
            createdAt: doBind2382.createdAt,
          });
          break;
        }
        throw Error(`Thread not found: ${doBind2382.target}`);
      }
      case "thread.resolve": {
        let doBind19802 = doHelper1027(doIn38, doBind2382.target, doBind2322);
        if (doBind19802) {
          doBind19802.resolve();
          break;
        }
        throw Error(`Thread not found: ${doBind2382.target}`);
      }
      case "thread.reopen": {
        let doBind19831 = doHelper1027(doIn38, doBind2382.target, doBind2322);
        if (doBind19831) {
          doBind19831.reopen();
          break;
        }
        throw Error(`Thread not found: ${doBind2382.target}`);
      }
      case "thread.remove": {
        let doBind19832 = doHelper1027(doIn38, doBind2382.target, doBind2322);
        if (doBind19832) {
          doBind19832.delete();
          break;
        }
        throw Error(`Thread not found: ${doBind2382.target}`);
      }
      default:
        doBind2312(doBind2382.op);
        break;
    }
  return (
    workbookBinding1964.set(doIn38, doBind2309),
    {
      idMap: doBind2310,
      warnings: doBind2311,
    }
  );
}
