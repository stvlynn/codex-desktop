// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `yXt` / export `Xtt`.

import { isExternalBrowserHref } from "./is-external-browser-href";
import { isModifiedClick } from "./is-modified-click";

export type LinkOpenBehavior = {
  disposition: string;
  openTargetIntent?: "alternate" | "default";
  useExternalBrowser?: true;
};

export function resolveLinkOpenBehavior(args: {
  defaultDisposition: string;
  event: { button?: number; ctrlKey?: boolean; metaKey?: boolean };
  href: string;
}): LinkOpenBehavior {
  const external = isExternalBrowserHref(args.href);
  const modified = !external && isModifiedClick(args.event);
  const newTab = modified || args.event.button === 1;
  let openTargetIntent: "alternate" | "default" | undefined;
  if (!external) {
    openTargetIntent = modified ? "alternate" : "default";
  }
  return {
    disposition: newTab ? "new-tab" : args.defaultDisposition,
    openTargetIntent,
    useExternalBrowser: external ? true : undefined,
  };
}
