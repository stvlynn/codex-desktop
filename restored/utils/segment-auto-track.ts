// Restored from ref/webview/assets/auto-track-C2WS6wxc.js
// Segment analytics-next auto-track helpers (trackLink / trackForm).
// Stage 3: IMPORT_MAP-rewritten deps; pTimeout via vendor analytics-core shim.

import {
  pTimeout,
  t as initAnalyticsCore,
} from "../vendor/segment-analytics-core";
type AutoTrackHost = {
  track: (
    event: string,
    properties?: unknown,
    options?: unknown,
  ) => Promise<unknown>;
  settings: {
    timeout?: number;
  };
};
function isModifiedClick(event: MouseEvent): boolean {
  return !!(
    event.ctrlKey ||
    event.shiftKey ||
    event.metaKey ||
    (event.button && event.button === 1)
  );
}
function isBlankTarget(element: Element, href: string | null): boolean {
  return !!((element as HTMLAnchorElement).target === "_blank" && href);
}
type EventOrPropsFactory<T> = T | ((element: Element) => T);

/**
 * Bind click tracking that waits for the track promise before navigating.
 * Bundle export `link` / local `o`.
 */
export function trackLink(
  this: AutoTrackHost,
  elements:
    | Element
    | Element[]
    | {
        toArray: () => Element[];
      }
    | null
    | undefined,
  event: EventOrPropsFactory<string>,
  properties?: EventOrPropsFactory<unknown>,
  options?: unknown,
): AutoTrackHost {
  if (!elements) return this;
  const list: Element[] =
    elements instanceof Element
      ? [elements]
      : "toArray" in elements
        ? elements.toArray()
        : elements;
  list.forEach((element) => {
    element.addEventListener(
      "click",
      (clickEvent) => {
        const eventName = event instanceof Function ? event(element) : event;
        const eventProperties =
          properties instanceof Function ? properties(element) : properties;
        const href =
          element.getAttribute("href") ||
          element.getAttributeNS("http://www.w3.org/1999/xlink", "href") ||
          element.getAttribute("xlink:href") ||
          element.getElementsByTagName("a")[0]?.getAttribute("href") ||
          null;
        const tracked = pTimeout(
          this.track(eventName, eventProperties, options ?? {}),
          this.settings.timeout ?? 500,
        );
        if (
          !isBlankTarget(element, href) &&
          !isModifiedClick(clickEvent as MouseEvent) &&
          href
        ) {
          if (clickEvent.preventDefault) clickEvent.preventDefault();
          else
            (
              clickEvent as MouseEvent & {
                returnValue: boolean;
              }
            ).returnValue = false;
          tracked
            .catch(console.error)
            .then(() => {
              window.location.href = href;
            })
            .catch(console.error);
        }
      },
      false,
    );
  });
  return this;
}

/**
 * Bind form submit tracking that waits for the track promise before submit.
 * Bundle export `form` / local `s`.
 */
export function trackForm(
  this: AutoTrackHost,
  forms:
    | HTMLFormElement
    | HTMLFormElement[]
    | Element
    | Element[]
    | null
    | undefined,
  event: EventOrPropsFactory<string>,
  properties?: EventOrPropsFactory<unknown>,
  options?: unknown,
): AutoTrackHost {
  if (!forms) return this;
  const list = forms instanceof HTMLFormElement ? [forms] : forms;
  (list as Element[]).forEach((element) => {
    if (!(element instanceof Element)) {
      throw TypeError("Must pass HTMLElement to trackForm/trackSubmit.");
    }
    const onSubmit = (submitEvent: Event) => {
      if (submitEvent.preventDefault) submitEvent.preventDefault();
      else
        (
          submitEvent as Event & {
            returnValue: boolean;
          }
        ).returnValue = false;
      const eventName = event instanceof Function ? event(element) : event;
      const eventProperties =
        properties instanceof Function ? properties(element) : properties;
      pTimeout(
        this.track(eventName, eventProperties, options ?? {}),
        this.settings.timeout ?? 500,
      )
        .catch(console.error)
        .then(() => {
          (element as HTMLFormElement).submit();
        })
        .catch(console.error);
    };
    const jq =
      (
        window as Window & {
          jQuery?: unknown;
          Zepto?: unknown;
        }
      ).jQuery ||
      (
        window as Window & {
          Zepto?: unknown;
        }
      ).Zepto;
    if (jq && typeof jq === "function") {
      (
        jq as (el: Element) => {
          submit: (fn: (e: Event) => void) => void;
        }
      )(element).submit(onSubmit);
    } else {
      element.addEventListener("submit", onSubmit, false);
    }
  });
  return this;
}
export { trackLink as link, trackForm as form };
initAnalyticsCore();
