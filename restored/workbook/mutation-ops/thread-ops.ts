// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-41: thread.add / thread selector builders (legacy Yde/Xde/Zde).

import type { ThreadAddProps, ThreadSelectorProps, ThreadTargetInput, LooseBag } from "./types";

export function buildThreadAddOp(props: ThreadAddProps): LooseBag | null {
  let { threadId, target, body, author, createdAt } = props,
    opBind15888 = normalizeThreadTarget(target);
  return opBind15888
    ? {
        op: "thread.add",
        id: threadId,
        target: opBind15888,
        body: typeof body == "string" ? body : (body.plainText ?? ""),
        author,
        createdAt,
      }
    : null;
}
export function buildThreadSelector(props: ThreadSelectorProps): LooseBag | null {
  let { threadId, target, rootBody, rootAuthorId, rootCreatedAt } = props,
    opBind14618 = normalizeThreadTarget(target);
  if (!opBind14618) return null;
  let opBind14619 = {
    target: opBind14618,
  };
  return (
    rootBody !== undefined && (opBind14619.rootBody = rootBody),
    rootAuthorId !== undefined &&
      (opBind14619.rootAuthorId = rootAuthorId),
    rootCreatedAt !== undefined &&
      (opBind14619.rootCreatedAt = rootCreatedAt),
    {
      id: threadId,
      selector: opBind14619,
    }
  );
}
export function normalizeThreadTarget(props: ThreadTargetInput): LooseBag | null {
  let opBind14316 = props.spreadsheetCell;
  if (opBind14316?.sheetName && opBind14316.address)
    return {
      cell: {
        sheet: opBind14316.sheetName,
        address: opBind14316.address,
      },
    };
  let opBind14317 = props.spreadsheetRange,
    opBind14318 =
      opBind14317?.startAddress ?? opBind14317?.endAddress;
  if (opBind14317?.sheetName && opBind14318) {
    let opBind20950 = opBind14317.endAddress;
    return {
      range: {
        sheet: opBind14317.sheetName,
        range:
          opBind20950 && opBind20950 !== opBind14318
            ? `${opBind14318}:${opBind20950}`
            : opBind14318,
      },
    };
  }
  return null;
}
