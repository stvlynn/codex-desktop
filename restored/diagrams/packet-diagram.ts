// Restored from ref/webview/assets/diagram-TYMM5635-CoAQCqew.js
// Mermaid packet diagram definition (primary).
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
} from "../utils/dayjs-core-alt";
import {
  A as chunkICPOFSXXA,
  C as chunkICPOFSXXC,
  G as chunkICPOFSXXG,
  H as chunkICPOFSXXH,
  V as chunkICPOFSXXV,
  _ as chunkICPOFSXXUnderscore,
  a as _chunkICPOFSXXA,
  c as _chunkICPOFSXXC,
  d as chunkICPOFSXXD,
  v as _chunkICPOFSXXV,
  y as chunkICPOFSXXY,
} from "./mermaid-config-alt";
import {
  n as chunk426QAEUCN,
  t as chunk426QAEUCT,
} from "./select-svg-element-alt";
import { chunk5PVQY5BWR, chunk5PVQY5BWU } from "./mermaid-common-utils-alt";
import { n as chunk4BX2VUABN, t as chunk4BX2VUABT } from "./populate-common-db";
import { mermaidParserCoreN, mermaidParserCoreT } from "./mermaid-parser-core";
var packetItem1,
  packetItem2,
  packetItem3,
  packetItem4,
  packetItem5,
  packetItem6,
  packetItem7,
  packetItem8,
  packetItem9,
  packetItem10,
  DiagramTYMM5635;
esmInit(() => {
  chunk426QAEUCT();
  chunk4BX2VUABT();
  chunk5PVQY5BWU();
  chunkICPOFSXXA();
  chunkAGHRB4JFR();
  mermaidParserCoreT();
  packetItem1 = chunkICPOFSXXD.packet;
  packetItem2 = class {
    constructor() {
      this.packet = [];
      this.setAccTitle = chunkICPOFSXXH;
      this.getAccTitle = _chunkICPOFSXXV;
      this.setDiagramTitle = chunkICPOFSXXG;
      this.getDiagramTitle = chunkICPOFSXXC;
      this.getAccDescription = chunkICPOFSXXUnderscore;
      this.setAccDescription = chunkICPOFSXXV;
    }
    static {
      chunkAGHRB4JFN(this, "PacketDB");
    }
    getConfig() {
      let packetItem36 = chunk5PVQY5BWR({
        ...packetItem1,
        ...chunkICPOFSXXY().packet,
      });
      return (
        packetItem36.showBits && (packetItem36.paddingY += 10),
        packetItem36
      );
    }
    getPacket() {
      return this.packet;
    }
    pushWord(packetSlot14) {
      packetSlot14.length > 0 && this.packet.push(packetSlot14);
    }
    clear() {
      _chunkICPOFSXXA();
      this.packet = [];
    }
  };
  packetItem3 = 1e4;
  packetItem4 = chunkAGHRB4JFN((packetSlot4, packetSlot5) => {
    chunk4BX2VUABN(packetSlot4, packetSlot5);
    let packetItem18 = -1,
      packetItem19 = [],
      packetItem20 = 1,
      { bitsPerRow } = packetSlot5.getConfig();
    for (let { start, end, bits, label } of packetSlot4.blocks) {
      if (start !== undefined && end !== undefined && end < start)
        throw Error(
          `Packet block ${start} - ${end} is invalid. End must be greater than start.`,
        );
      if (((start ??= packetItem18 + 1), start !== packetItem18 + 1))
        throw Error(
          `Packet block ${start} - ${end ?? start} is not contiguous. It should start from ${packetItem18 + 1}.`,
        );
      if (bits === 0)
        throw Error(
          `Packet block ${start} is invalid. Cannot have a zero bit field.`,
        );
      for (
        end ??= start + (bits ?? 1) - 1,
          bits ??= end - start + 1,
          packetItem18 = end,
          chunkAGHRB4JFI.debug(
            `Packet block ${start} - ${packetItem18} with label ${label}`,
          );
        packetItem19.length <= bitsPerRow + 1 &&
        packetSlot5.getPacket().length < packetItem3;
      ) {
        let [packetItem34, packetItem35] = packetItem5(
          {
            start,
            end,
            bits,
            label,
          },
          packetItem20,
          bitsPerRow,
        );
        if (
          (packetItem19.push(packetItem34),
          packetItem34.end + 1 === packetItem20 * bitsPerRow &&
            (packetSlot5.pushWord(packetItem19),
            (packetItem19 = []),
            packetItem20++),
          !packetItem35)
        )
          break;
        ({ start, end, bits, label } = packetItem35);
      }
    }
    packetSlot5.pushWord(packetItem19);
  }, "populate");
  packetItem5 = chunkAGHRB4JFN((packetSlot10, packetSlot11, packetSlot12) => {
    if (packetSlot10.start === undefined)
      throw Error("start should have been set during first phase");
    if (packetSlot10.end === undefined)
      throw Error("end should have been set during first phase");
    if (packetSlot10.start > packetSlot10.end)
      throw Error(
        `Block start ${packetSlot10.start} is greater than block end ${packetSlot10.end}.`,
      );
    if (packetSlot10.end + 1 <= packetSlot11 * packetSlot12)
      return [packetSlot10, undefined];
    let packetItem29 = packetSlot11 * packetSlot12 - 1,
      packetItem30 = packetSlot11 * packetSlot12;
    return [
      {
        start: packetSlot10.start,
        end: packetItem29,
        label: packetSlot10.label,
        bits: packetItem29 - packetSlot10.start,
      },
      {
        start: packetItem30,
        end: packetSlot10.end,
        label: packetSlot10.label,
        bits: packetSlot10.end - packetItem30,
      },
    ];
  }, "getNextFittingBlock");
  packetItem6 = {
    parser: {
      yy: undefined,
    },
    parse: chunkAGHRB4JFN(async (packetSlot13) => {
      let packetItem32 = await mermaidParserCoreN("packet", packetSlot13),
        packetItem33 = packetItem6.parser?.yy;
      if (!(packetItem33 instanceof packetItem2))
        throw Error(
          "parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.",
        );
      chunkAGHRB4JFI.debug(packetItem32);
      packetItem4(packetItem32, packetItem33);
    }, "parse"),
  };
  packetItem7 = chunkAGHRB4JFN(
    (packetSlot6, packetSlot7, packetSlot8, packetSlot9) => {
      let packetItem21 = packetSlot9.db,
        packetItem22 = packetItem21.getConfig(),
        { rowHeight, paddingY, bitWidth, bitsPerRow } = packetItem22,
        packetItem23 = packetItem21.getPacket(),
        packetItem24 = packetItem21.getDiagramTitle(),
        packetItem25 = rowHeight + paddingY,
        packetItem26 =
          packetItem25 * (packetItem23.length + 1) -
          (packetItem24 ? 0 : rowHeight),
        packetItem27 = bitWidth * bitsPerRow + 2,
        packetItem28 = chunk426QAEUCN(packetSlot7);
      packetItem28.attr("viewBox", `0 0 ${packetItem27} ${packetItem26}`);
      _chunkICPOFSXXC(
        packetItem28,
        packetItem26,
        packetItem27,
        packetItem22.useMaxWidth,
      );
      for (let [packetItem37, packetItem38] of packetItem23.entries())
        packetItem8(packetItem28, packetItem38, packetItem37, packetItem22);
      packetItem28
        .append("text")
        .text(packetItem24)
        .attr("x", packetItem27 / 2)
        .attr("y", packetItem26 - packetItem25 / 2)
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle")
        .attr("class", "packetTitle");
    },
    "draw",
  );
  packetItem8 = chunkAGHRB4JFN(
    (
      packetSlot1,
      packetSlot2,
      packetSlot3,
      { rowHeight, paddingX, paddingY, bitWidth, bitsPerRow, showBits },
    ) => {
      let packetItem11 = packetSlot1.append("g"),
        packetItem12 = packetSlot3 * (rowHeight + paddingY) + paddingY;
      for (let packetItem13 of packetSlot2) {
        let packetItem14 = (packetItem13.start % bitsPerRow) * bitWidth + 1,
          packetItem15 =
            (packetItem13.end - packetItem13.start + 1) * bitWidth - paddingX;
        if (
          (packetItem11
            .append("rect")
            .attr("x", packetItem14)
            .attr("y", packetItem12)
            .attr("width", packetItem15)
            .attr("height", rowHeight)
            .attr("class", "packetBlock"),
          packetItem11
            .append("text")
            .attr("x", packetItem14 + packetItem15 / 2)
            .attr("y", packetItem12 + rowHeight / 2)
            .attr("class", "packetLabel")
            .attr("dominant-baseline", "middle")
            .attr("text-anchor", "middle")
            .text(packetItem13.label),
          !showBits)
        )
          continue;
        let packetItem16 = packetItem13.end === packetItem13.start,
          packetItem17 = packetItem12 - 2;
        packetItem11
          .append("text")
          .attr("x", packetItem14 + (packetItem16 ? packetItem15 / 2 : 0))
          .attr("y", packetItem17)
          .attr("class", "packetByte start")
          .attr("dominant-baseline", "auto")
          .attr("text-anchor", packetItem16 ? "middle" : "start")
          .text(packetItem13.start);
        packetItem16 ||
          packetItem11
            .append("text")
            .attr("x", packetItem14 + packetItem15)
            .attr("y", packetItem17)
            .attr("class", "packetByte end")
            .attr("dominant-baseline", "auto")
            .attr("text-anchor", "end")
            .text(packetItem13.end);
      }
    },
    "drawWord",
  );
  packetItem9 = {
    draw: packetItem7,
  };
  packetItem10 = {
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
  DiagramTYMM5635 = {
    parser: packetItem6,
    get db() {
      return new packetItem2();
    },
    renderer: packetItem9,
    styles: chunkAGHRB4JFN(({ packet } = {}) => {
      let packetItem31 = chunk5PVQY5BWR(packetItem10, packet);
      return `
	.packetByte {
		font-size: ${packetItem31.byteFontSize};
	}
	.packetByte.start {
		fill: ${packetItem31.startByteColor};
	}
	.packetByte.end {
		fill: ${packetItem31.endByteColor};
	}
	.packetLabel {
		fill: ${packetItem31.labelColor};
		font-size: ${packetItem31.labelFontSize};
	}
	.packetTitle {
		fill: ${packetItem31.titleColor};
		font-size: ${packetItem31.titleFontSize};
	}
	.packetBlock {
		stroke: ${packetItem31.blockStrokeColor};
		stroke-width: ${packetItem31.blockStrokeWidth};
		fill: ${packetItem31.blockFillColor};
	}
	`;
    }, "styles"),
  };
})();
export { DiagramTYMM5635 as diagram };
