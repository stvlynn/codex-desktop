// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: ensure presentation-state Y.Map nodes (legacy AJe/DJe/EJe/OJe/kJe).
// Stage-3 wave-139.

import { Map as YMap } from "../../vendor/yjs";

/** Legacy jJe */
export const PRESENTATION_STATE_KEY = "presentationState";
/** Legacy MJe */
export const META_KEY = "meta";
/** Legacy Binding1813 */
export const SCHEMA_VERSION_KEY = "schemaVersion";
/** Legacy Binding1814 */
export const SLIDES_BY_ID_KEY = "slidesById";

export function EJe(props: any) {
  return props.getMap(PRESENTATION_STATE_KEY);
}
export function DJe(props: any) {
  let ppBind18624 = AJe({
    root: props.root,
    key: META_KEY,
    runLocalTransaction: props.runLocalTransaction,
  });
  ppBind18624.get(SCHEMA_VERSION_KEY) !== 1 &&
    props.runLocalTransaction(() => {
      ppBind18624.set(SCHEMA_VERSION_KEY, 1);
    });
}
export function OJe(props: any) {
  let ppBind22523 = props.get(SLIDES_BY_ID_KEY);
  if (ppBind22523 instanceof YMap) return ppBind22523;
}
export function kJe(ppIn10733: any) {
  return AJe({
    root: ppIn10733.root,
    key: SLIDES_BY_ID_KEY,
    runLocalTransaction: ppIn10733.runLocalTransaction,
  });
}
export function AJe(event: any) {
  let ppBind18969 = event.root.get(event.key);
  if (ppBind18969 instanceof YMap) return ppBind18969;
  let ppBind18970 = new YMap();
  return (
    event.runLocalTransaction(() => {
      event.root.set(event.key, ppBind18970);
    }),
    ppBind18970
  );
}
