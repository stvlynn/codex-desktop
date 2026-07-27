// Restored from ref/webview/assets/diagram-S2PKOQOG-BMrMK5Cw.js
// Mermaid packet diagram definition (alt).
// Stage 3 candidate: auto-renamed export→local (incl. mermaid-config); parser cores promoted.

export type MermaidDiagramDefinition = {
  db?: unknown;
  renderer?: unknown;
  parser?: unknown;
  styles?: unknown;
  init?: (...args: unknown[]) => void;
  [key: string]: unknown;
};
import { esmInit } from "../runtime/rolldown-runtime";
import {
  logger as chunkAGHRB4JFI,
  defineFunctionName as chunkAGHRB4JFN,
  initDayjsLoggerRuntime as chunkAGHRB4JFR,
} from "../utils/dayjs-core-alt-dup";
import {
  B as chunkABZYJK2DB,
  C as chunkABZYJK2DC,
  V as chunkABZYJK2DV,
  W as chunkABZYJK2DW,
  _ as chunkABZYJK2DUnderscore,
  a as chunkABZYJK2DA,
  c as _chunkABZYJK2DC,
  d as chunkABZYJK2DD,
  k as chunkABZYJK2DK,
  v as _chunkABZYJK2DV,
  y as chunkABZYJK2DY,
} from "./mermaid-config";
import { n as chunkEXTU4WIEN, t as chunkEXTU4WIET } from "./select-svg-element";
import { chunkS3R3BYOJR, chunkS3R3BYOJU } from "./mermaid-common-utils";
import {
  n as chunk4BX2VUABN,
  t as chunk4BX2VUABT,
} from "./populate-common-db-alt";
import {
  mermaidParserCoreN,
  mermaidParserCoreT,
} from "./mermaid-parser-core-alt";
var packetAltItem1,
  packetAltItem2,
  packetAltItem3,
  packetAltItem4,
  packetAltItem5,
  packetAltItem6,
  packetAltItem7,
  packetAltItem8,
  packetAltItem9,
  packetAltItem10,
  DiagramS2PKOQOG;
esmInit(() => {
  chunkEXTU4WIET();
  chunk4BX2VUABT();
  chunkS3R3BYOJU();
  chunkABZYJK2DK();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  packetAltItem1 = chunkABZYJK2DD.packet;
  packetAltItem2 = class {
    constructor() {
      this.packet = [];
      this.setAccTitle = chunkABZYJK2DV;
      this.getAccTitle = _chunkABZYJK2DV;
      this.setDiagramTitle = chunkABZYJK2DW;
      this.getDiagramTitle = chunkABZYJK2DC;
      this.getAccDescription = chunkABZYJK2DUnderscore;
      this.setAccDescription = chunkABZYJK2DB;
    }
    static {
      chunkAGHRB4JFN(this, "PacketDB");
    }
    getConfig() {
      let packetAltItem36 = chunkS3R3BYOJR({
        ...packetAltItem1,
        ...chunkABZYJK2DY().packet,
      });
      return (
        packetAltItem36.showBits && (packetAltItem36.paddingY += 10),
        packetAltItem36
      );
    }
    getPacket() {
      return this.packet;
    }
    pushWord(packetAltSlot14) {
      packetAltSlot14.length > 0 && this.packet.push(packetAltSlot14);
    }
    clear() {
      chunkABZYJK2DA();
      this.packet = [];
    }
  };
  packetAltItem3 = 1e4;
  packetAltItem4 = chunkAGHRB4JFN((packetAltSlot4, packetAltSlot5) => {
    chunk4BX2VUABN(packetAltSlot4, packetAltSlot5);
    let packetAltItem18 = -1,
      packetAltItem19 = [],
      packetAltItem20 = 1,
      { bitsPerRow } = packetAltSlot5.getConfig();
    for (let { start, end, bits, label } of packetAltSlot4.blocks) {
      if (start !== undefined && end !== undefined && end < start)
        throw Error(
          `Packet block ${start} - ${end} is invalid. End must be greater than start.`,
        );
      if (((start ??= packetAltItem18 + 1), start !== packetAltItem18 + 1))
        throw Error(
          `Packet block ${start} - ${end ?? start} is not contiguous. It should start from ${packetAltItem18 + 1}.`,
        );
      if (bits === 0)
        throw Error(
          `Packet block ${start} is invalid. Cannot have a zero bit field.`,
        );
      for (
        end ??= start + (bits ?? 1) - 1,
          bits ??= end - start + 1,
          packetAltItem18 = end,
          chunkAGHRB4JFI.debug(
            `Packet block ${start} - ${packetAltItem18} with label ${label}`,
          );
        packetAltItem19.length <= bitsPerRow + 1 &&
        packetAltSlot5.getPacket().length < packetAltItem3;
      ) {
        let [packetAltItem34, packetAltItem35] = packetAltItem5(
          {
            start,
            end,
            bits,
            label,
          },
          packetAltItem20,
          bitsPerRow,
        );
        if (
          (packetAltItem19.push(packetAltItem34),
          packetAltItem34.end + 1 === packetAltItem20 * bitsPerRow &&
            (packetAltSlot5.pushWord(packetAltItem19),
            (packetAltItem19 = []),
            packetAltItem20++),
          !packetAltItem35)
        )
          break;
        ({ start, end, bits, label } = packetAltItem35);
      }
    }
    packetAltSlot5.pushWord(packetAltItem19);
  }, "populate");
  packetAltItem5 = chunkAGHRB4JFN(
    (packetAltSlot10, packetAltSlot11, packetAltSlot12) => {
      if (packetAltSlot10.start === undefined)
        throw Error("start should have been set during first phase");
      if (packetAltSlot10.end === undefined)
        throw Error("end should have been set during first phase");
      if (packetAltSlot10.start > packetAltSlot10.end)
        throw Error(
          `Block start ${packetAltSlot10.start} is greater than block end ${packetAltSlot10.end}.`,
        );
      if (packetAltSlot10.end + 1 <= packetAltSlot11 * packetAltSlot12)
        return [packetAltSlot10, undefined];
      let packetAltItem29 = packetAltSlot11 * packetAltSlot12 - 1,
        packetAltItem30 = packetAltSlot11 * packetAltSlot12;
      return [
        {
          start: packetAltSlot10.start,
          end: packetAltItem29,
          label: packetAltSlot10.label,
          bits: packetAltItem29 - packetAltSlot10.start,
        },
        {
          start: packetAltItem30,
          end: packetAltSlot10.end,
          label: packetAltSlot10.label,
          bits: packetAltSlot10.end - packetAltItem30,
        },
      ];
    },
    "getNextFittingBlock",
  );
  packetAltItem6 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (packetAltSlot13) => {
      let packetAltItem32 = await mermaidParserCoreN("packet", packetAltSlot13),
        packetAltItem33 = packetAltItem6.parser?.yy;
      if (!(packetAltItem33 instanceof packetAltItem2))
        throw Error(
          "parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
        );
      chunkAGHRB4JFI.debug(packetAltItem32);
      packetAltItem4(packetAltItem32, packetAltItem33);
    }, "parse"),
  };
  packetAltItem7 = chunkAGHRB4JFN(
    (packetAltSlot6, packetAltSlot7, packetAltSlot8, packetAltSlot9) => {
      let packetAltItem21 = packetAltSlot9.db,
        packetAltItem22 = packetAltItem21.getConfig(),
        { rowHeight, paddingY, bitWidth, bitsPerRow } = packetAltItem22,
        packetAltItem23 = packetAltItem21.getPacket(),
        packetAltItem24 = packetAltItem21.getDiagramTitle(),
        packetAltItem25 = rowHeight + paddingY,
        packetAltItem26 =
          packetAltItem25 * (packetAltItem23.length + 1) -
          (packetAltItem24 ? 0 : rowHeight),
        packetAltItem27 = bitWidth * bitsPerRow + 2,
        packetAltItem28 = chunkEXTU4WIEN(packetAltSlot7);
      packetAltItem28.attr(
        "viewbox",
        `0 0 ${packetAltItem27} ${packetAltItem26}`,
      );
      _chunkABZYJK2DC(
        packetAltItem28,
        packetAltItem26,
        packetAltItem27,
        packetAltItem22.useMaxWidth,
      );
      for (let [packetAltItem37, packetAltItem38] of packetAltItem23.entries())
        packetAltItem8(
          packetAltItem28,
          packetAltItem38,
          packetAltItem37,
          packetAltItem22,
        );
      packetAltItem28
        .append("text")
        .text(packetAltItem24)
        .attr("x", packetAltItem27 / 2)
        .attr("y", packetAltItem26 - packetAltItem25 / 2)
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle")
        .attr("class", "packetTitle");
    },
    "draw",
  );
  packetAltItem8 = chunkAGHRB4JFN(
    (
      packetAltSlot1,
      packetAltSlot2,
      packetAltSlot3,
      { rowHeight, paddingX, paddingY, bitWidth, bitsPerRow, showBits },
    ) => {
      let packetAltItem11 = packetAltSlot1.append("g"),
        packetAltItem12 = packetAltSlot3 * (rowHeight + paddingY) + paddingY;
      for (let packetAltItem13 of packetAltSlot2) {
        let packetAltItem14 =
            (packetAltItem13.start % bitsPerRow) * bitWidth + 1,
          packetAltItem15 =
            (packetAltItem13.end - packetAltItem13.start + 1) * bitWidth -
            paddingX;
        if (
          (packetAltItem11
            .append("rect")
            .attr("x", packetAltItem14)
            .attr("y", packetAltItem12)
            .attr("width", packetAltItem15)
            .attr("height", rowHeight)
            .attr("class", "packetBlock"),
          packetAltItem11
            .append("text")
            .attr("x", packetAltItem14 + packetAltItem15 / 2)
            .attr("y", packetAltItem12 + rowHeight / 2)
            .attr("class", "packetLabel")
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "middle")
            .text(packetAltItem13.label),
          !showBits)
        )
          continue;
        let packetAltItem16 = packetAltItem13.end === packetAltItem13.start,
          packetAltItem17 = packetAltItem12 - 2;
        packetAltItem11
          .append("text")
          .attr(
            "x",
            packetAltItem14 + (packetAltItem16 ? packetAltItem15 / 2 : 0),
          )
          .attr("y", packetAltItem17)
          .attr("class", "packetByte start")
          .attr("dominant-baseline", "auto")
          .attr("text-anchor", packetAltItem16 ? "middle" : "start")
          .text(packetAltItem13.start);
        packetAltItem16 ||
          packetAltItem11
            .append("text")
            .attr("x", packetAltItem14 + packetAltItem15)
            .attr("y", packetAltItem17)
            .attr("class", "packetByte end")
            .attr("dominant-baseline", "auto")
            .attr("text-anchor", "end")
            .text(packetAltItem13.end);
      }
    },
    "drawWord",
  );
  packetAltItem9 = {
    draw: packetAltItem7,
  };
  packetAltItem10 = {
    byteFontSize: "10px",
    startByteColor: "black",
    endByteColor: "black",
    labelColor: "black",
    labelFontSize: "12px",
    titleColor: "black",
    titleFontSize: "14px",
    blockStrokeColor: "black",
    blockStrokeWidth: "1",
    blockFillColor: "#efefef",
  };
  DiagramS2PKOQOG = {
    parser: packetAltItem6,
    get db() {
      return new packetAltItem2();
    },
    renderer: packetAltItem9,
    styles: chunkAGHRB4JFN(({ packet } = {}) => {
      let packetAltItem31 = chunkS3R3BYOJR(packetAltItem10, packet);
      return `
	.packetByte {
		font-size: ${packetAltItem31.byteFontSize};
	}
	.packetByte.start {
		fill: ${packetAltItem31.startByteColor};
	}
	.packetByte.end {
		fill: ${packetAltItem31.endByteColor};
	}
	.packetLabel {
		fill: ${packetAltItem31.labelColor};
		font-size: ${packetAltItem31.labelFontSize};
	}
	.packetTitle {
		fill: ${packetAltItem31.titleColor};
		font-size: ${packetAltItem31.titleFontSize};
	}
	.packetBlock {
		stroke: ${packetAltItem31.blockStrokeColor};
		stroke-width: ${packetAltItem31.blockStrokeWidth};
		fill: ${packetAltItem31.blockFillColor};
	}
	`;
    }, "styles"),
  };
})();
export { DiagramS2PKOQOG as diagram };
