// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `gZa` / export `Zj` — construct rich-text composer controller.

type Controller = {
  view: unknown;
  eventEmitter: unknown;
  setEnterBehavior: unknown;
  setSuggestionTriggers: unknown;
};

let createViewBinding: (
  element: unknown,
  options?: Record<string, unknown> | null,
) => {
  view: unknown;
  eventEmitter: unknown;
  setEnterBehavior: unknown;
  setSuggestionTriggers: unknown;
} = () => ({
  view: null,
  eventEmitter: null,
  setEnterBehavior: null,
  setSuggestionTriggers: null,
});

let ControllerImpl: new (
  view: unknown,
  eventEmitter: unknown,
  setEnterBehavior: unknown,
  setSuggestionTriggers: unknown,
  enableRichText: boolean,
  restoreMarkdownLinksAsTextLinks: boolean,
  restorePathLinksAsFileMentions: boolean,
) => Controller = class {
  view: unknown;
  eventEmitter: unknown;
  setEnterBehavior: unknown;
  setSuggestionTriggers: unknown;
  constructor(
    view: unknown,
    eventEmitter: unknown,
    setEnterBehavior: unknown,
    setSuggestionTriggers: unknown,
  ) {
    this.view = view;
    this.eventEmitter = eventEmitter;
    this.setEnterBehavior = setEnterBehavior;
    this.setSuggestionTriggers = setSuggestionTriggers;
  }
};

export function setCreateComposerViewControllerDeps(args: {
  createViewBinding: typeof createViewBinding;
  Controller: typeof ControllerImpl;
}): void {
  createViewBinding = args.createViewBinding;
  ControllerImpl = args.Controller;
}

export function createComposerViewController(
  element: unknown,
  options?: {
    enableRichText?: boolean;
    restoreMarkdownLinksAsTextLinks?: boolean;
    restorePathLinksAsFileMentions?: boolean;
    [key: string]: unknown;
  } | null,
): Controller {
  const { view, eventEmitter, setEnterBehavior, setSuggestionTriggers } =
    createViewBinding(element ?? null, options);
  return new ControllerImpl(
    view,
    eventEmitter,
    setEnterBehavior,
    setSuggestionTriggers,
    options?.enableRichText ?? false,
    options?.restoreMarkdownLinksAsTextLinks ?? false,
    options?.restorePathLinksAsFileMentions ?? true,
  );
}
