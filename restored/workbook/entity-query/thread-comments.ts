// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-64: path-split + threaded-comment serializers (legacy B_t / J_t).

import { esmInit } from "../../runtime/rolldown-runtime";
import { eq } from "./query-bag";

export const ensurePathSplitInit = esmInit(() => {
  eq.z_t = (eqIn8728) => {
    let eqBind19241 = eqIn8728.indexOf("/");
    return eqBind19241 <= 0 || eqBind19241 === eqIn8728.length - 1
      ? {
          prefix: "",
          suffix: "",
        }
      : {
          prefix: eqIn8728.slice(0, eqBind19241),
          suffix: eqIn8728.slice(eqBind19241 + 1),
        };
  };
});
export const ensureThreadCommentsInit = esmInit(() => {
  eq.V_t =
    "[Threaded comment]\n\nYour version of Excel allows you to read this threaded comment; however, any edits to it will get removed if the file is opened in a newer version of Excel. Learn more: https://go.microsoft.com/fwlink/?linkid=870924\n\n";
  eq.H_t = (props) =>
    props.map((item) => {
      let eqBind7720 = eq.W_t(item.target);
      return {
        id: item.id,
        target: eqBind7720,
        comments: (item.comments ?? []).map((_item) => ({
          id: _item.id,
          parentId: _item.parentId,
          authorId: _item.authorId,
          createdAt: _item.createdAt,
          editedAt: _item.editedAt,
          body: _item.body
            ? {
                plainText: _item.body.plainText,
              }
            : undefined,
          isDeleted: _item.isDeleted,
          reactions: (_item.reactions ?? []).map((__item) => ({
            type: __item.type,
            instances: (__item.instances ?? []).map((___item) => ({
              authorId: ___item.authorId,
              time: ___item.time,
            })),
          })),
          citations: _item.citations ? [..._item.citations] : [],
          position: _item.position
            ? {
                xEmu: _item.position.xEmu,
                yEmu: _item.position.yEmu,
              }
            : undefined,
        })),
        status: item.status,
        resolvedBy: item.resolvedBy,
        resolvedAt: item.resolvedAt,
      };
    });
  eq.U_t = (props) => {
    let { threads, existingNotes, people } = props,
      eqBind6892 = existingNotes.map((item) => ({
        id: item.id,
        target: item.target ? eq.K_t(item.target) : undefined,
        authorId: item.authorId,
        createdAt: item.createdAt,
        body: item.body
          ? {
              plainText: item.body.plainText,
            }
          : undefined,
      })),
      eqBind6893 = new Set(people.map((item) => item.id)),
      eqBind6894 = eq.q_t(people),
      eqBind6895 = new Set(eqBind6892.map((item) => item.id));
    for (let eqBind10293 of threads) {
      let eqBind10453 = eqBind10293.target?.spreadsheetCell;
      if (!eqBind10453) continue;
      let eqBind10454 = eqBind10453.sheetName,
        eqBind10455 = eqBind10453.address;
      if (!eqBind10454 || !eqBind10455) continue;
      let eqBind10456 = `${eqBind10454}:${eqBind10455}`;
      if (eqBind6895.has(eqBind10456)) continue;
      let eqBind10457 = eqBind6894.get(eqBind10454) ?? 0,
        eqBind10458 = `authors/${eqBind10454}/${eqBind10457}`;
      eqBind6894.set(eqBind10454, eqBind10457 + 1);
      eqBind6893.has(eqBind10458) ||
        (people.push({
          id: eqBind10458,
          displayName: `tc=${eqBind10293.id}`,
        }),
        eqBind6893.add(eqBind10458));
      eqBind6892.push({
        id: eqBind10456,
        target: {
          cell: eq.eqBind1984(eqBind10453),
        },
        authorId: eqBind10458,
        createdAt: "",
        body: {
          plainText: eq.G_t(eqBind10293.comments ?? []),
        },
      });
      eqBind6895.add(eqBind10456);
    }
    return {
      notes: eqBind6892,
      people,
    };
  };
  eq.W_t = (props) => {
    if (props) {
      if (props.spreadsheetRange) {
        let eqBind16107 = props.spreadsheetRange,
          eqBind16108 =
            eqBind16107.startAddress ?? eqBind16107.endAddress ?? "";
        return {
          spreadsheetCell: {
            sheetName: eqBind16107.sheetName,
            sheetId: eqBind16107.sheetId,
            address: eqBind16108,
          },
        };
      }
      return props.spreadsheetCell
        ? {
            spreadsheetCell: {
              sheetName: props.spreadsheetCell.sheetName,
              sheetId: props.spreadsheetCell.sheetId,
              address: props.spreadsheetCell.address,
            },
          }
        : props.slide
          ? {
              slide: {
                slideId: props.slide.slideId,
              },
            }
          : props.element
            ? {
                element: {
                  slideId: props.element.slideId,
                  elementId: props.element.elementId,
                },
              }
            : props.textRange
              ? {
                  textRange: {
                    slideId: props.textRange.slideId,
                    elementId: props.textRange.elementId,
                    startCp: props.textRange.startCp,
                    length: props.textRange.length,
                    context: props.textRange.context
                      ? {
                          contextLength: props.textRange.context.contextLength,
                          contextHash: props.textRange.context.contextHash,
                        }
                      : undefined,
                  },
                }
              : {};
    }
  };
  eq.G_t = (props) => {
    let eqBind14002 = props[0]?.body?.plainText ?? "",
      eqBind14003 = props
        .slice(1)
        .map((item) => item.body?.plainText ?? "")
        .filter((item) => item.length > 0),
      eqBind14004 = eq.V_t;
    return (
      (eqBind14004 += `Comment:\n    ${eqBind14002}`),
      eqBind14003.length > 0 &&
        ((eqBind14004 += "\nReply:\n"),
        (eqBind14004 += eqBind14003.map((item) => `    ${item}`).join("\n"))),
      eqBind14004
    );
  };
  eq.eqBind1984 = (props) => ({
    sheetName: props.sheetName,
    sheetId: props.sheetId,
    address: props.address,
  });
  eq.K_t = (props) => {
    if (props.cell)
      return {
        cell: eq.eqBind1984(props.cell),
      };
    if (props.range) {
      let eqBind17040 = props.range;
      return {
        range: {
          sheetName: eqBind17040.sheetName,
          sheetId: eqBind17040.sheetId,
          startAddress: eqBind17040.startAddress,
          endAddress: eqBind17040.endAddress,
        },
      };
    }
    return {};
  };
  eq.q_t = (eqIn4186) => {
    let eqBind13220 = new Map();
    for (let eqBind14493 of eqIn4186) {
      let eqBind14877 = eqBind14493.id ?? "";
      if (!eqBind14877.startsWith("authors/")) continue;
      let eqBind14878 = eqBind14877.split("/"),
        eqBind14879 = eqBind14878[1],
        eqBind14880 = eqBind14878[2];
      if (!eqBind14879 || eqBind14880 === undefined) continue;
      let eqBind14881 = Number(eqBind14880);
      if (!Number.isFinite(eqBind14881)) continue;
      let eqBind14882 = Math.max(
        eqBind13220.get(eqBind14879) ?? 0,
        eqBind14881 + 1,
      );
      eqBind13220.set(eqBind14879, eqBind14882);
    }
    return eqBind13220;
  };
});

export function z_t(...args: any[]): any {
  ensurePathSplitInit();
  return eq.z_t(...args);
}
export function H_t(...args: any[]): any {
  ensureThreadCommentsInit();
  return eq.H_t(...args);
}
export function U_t(...args: any[]): any {
  ensureThreadCommentsInit();
  return eq.U_t(...args);
}
export function W_t(...args: any[]): any {
  ensureThreadCommentsInit();
  return eq.W_t(...args);
}
export function G_t(...args: any[]): any {
  ensureThreadCommentsInit();
  return eq.G_t(...args);
}
export function K_t(...args: any[]): any {
  ensureThreadCommentsInit();
  return eq.K_t(...args);
}
export function q_t(...args: any[]): any {
  ensureThreadCommentsInit();
  return eq.q_t(...args);
}
export const B_t = ensurePathSplitInit;
export const J_t = ensureThreadCommentsInit;
