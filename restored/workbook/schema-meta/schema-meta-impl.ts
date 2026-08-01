// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Yjs workbook schemaVersion meta (legacy 378/Xve/Jve/Yve).
// Stage-3 wave-136.

import { Map as YMap } from "../../vendor/yjs";

export let workbookBinding820: string;
export let workbookBinding821: string;
export let workbookBinding822: string;

let metaInited = false;
export function ensureSchemaMetaInit(): void {
  if (metaInited) return;
  metaInited = true;
  workbookBinding820 = "meta";
  workbookBinding821 = "schemaVersion";
  workbookBinding822 = "workbookState";
}

export function Jve(props: any) {
  workbookHelper378({
    root: props.root,
    schemaVersion: 1,
    runLocalTransaction: props.runLocalTransaction,
  });
}
export function Yve(props: any) {
  workbookHelper378({
    root: props.root,
    schemaVersion: 1,
    runLocalTransaction: props.runLocalTransaction,
  });
}
export function Xve(event: any) {
  let smBind18955 = event.root.get(event.key);
  if (smBind18955 instanceof YMap) return smBind18955;
  let smBind18956 = new YMap();
  return (
    event.runLocalTransaction(() => {
      event.root.set(event.key, smBind18956);
    }),
    smBind18956
  );
}
export function workbookHelper378(smIn7423: any) {
  ensureSchemaMetaInit();
  let smBind17886 = Xve({
    root: smIn7423.root,
    key: workbookBinding820,
    runLocalTransaction: smIn7423.runLocalTransaction,
  });
  smBind17886.get(workbookBinding821) !== smIn7423.schemaVersion &&
    smIn7423.runLocalTransaction(() => {
      smBind17886.set(workbookBinding821, smIn7423.schemaVersion);
    });
}
