// Restored from ref/webview/assets/first-run-CmpS1-m3.js
// Decorative slide previews for intro / cloud / TODO first-run steps.

import type { ReactElement } from "react";

import { AppIconUD } from "../../icons/app-icon-review-commit-glyph";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { Spinner } from "../../ui/spinner";
import {
  SAMPLE_MONGOOSE_IMPORT,
  SAMPLE_SCHEMA_SNIPPET,
  type SlideVariant,
} from "./constants";
import { ComposerPlusButton, OnboardingCodePreview } from "./runtime-bridges";

export type SlidePreviewProps = {
  variant: SlideVariant;
  isWideViewport: boolean;
};

function noopClick(): void {}

/** Center decorative card for the active first-run slide. */
export function SlidePreview({
  variant,
  isWideViewport,
}: SlidePreviewProps): ReactElement {
  const width = isWideViewport ? 560 : 320;
  const height = isWideViewport ? 320 : 240;

  let body: ReactElement;
  if (variant === "intro") {
    body = (
      <div className="relative flex flex-1 flex-col gap-4 overflow-y-auto rounded-2xl border border-token-border bg-token-dropdown-background p-2 shadow-2xl">
        <div className="text-md pt-2 pl-2 text-token-description-foreground opacity-40">
          <MemoizedFormattedMessage
            id="composer.placeholder.newTask.doAnything"
            defaultMessage="Ask Codex to do anything"
            description="Message shown in the Codex onboarding slide to educate users that they can ask Codex to do anything"
          />
        </div>
        <div className="flex w-full items-center justify-end">
          <div className="flex w-full min-w-0 flex-nowrap items-center justify-start gap-[5px]">
            <ComposerPlusButton
              color="ghost"
              className="size-token-button-composer rounded-full border border-token-border p-1"
              onClick={noopClick}
            />
          </div>
          <div className="flex h-[32px] w-[34px] items-center justify-center rounded-full bg-token-foreground p-0">
            <AppIconPlt className="text-token-dropdown-background" />
          </div>
        </div>
      </div>
    );
  } else if (variant === "cloud") {
    body = (
      <div className="relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-token-border bg-token-dropdown-background px-4 py-4 shadow-2xl">
        <AppIconUD className="size-8" />
        <div className="flex w-full items-center justify-between gap-4">
          <Spinner className="size-4" />
          <div className="flex flex-1 flex-col text-token-foreground">
            <div className="flex-1 text-sm font-medium">
              <MemoizedFormattedMessage
                id="codex.legal.cloud.taskOne.title"
                defaultMessage="Explain repository to a new designer"
                description="Sample task title shown on the cloud onboarding slide"
              />
            </div>
            <div className="text-sm font-medium opacity-50">
              <MemoizedFormattedMessage
                id="codex.legal.cloud.taskOne.meta"
                defaultMessage="openai/agi · Oct 12"
                description="Sample repository and date metadata for the first cloud onboarding task"
              />
            </div>
          </div>
        </div>
        <CloudTaskRow
          titleId="codex.legal.cloud.taskTwo.title"
          titleDefault="Fix an onboarding bug"
          titleDescription="Sample completed task title on the cloud onboarding slide"
          metaId="codex.legal.cloud.taskTwo.meta"
          metaDefault="openai/agi · Oct 9"
          metaDescription="Sample repository and date metadata for the second cloud onboarding task"
          posId="codex.legal.cloud.taskTwo.stats.positive"
          posDefault="+2"
          negId="codex.legal.cloud.taskTwo.stats.negative"
          negDefault="-20"
        />
        <CloudTaskRow
          titleId="codex.legal.cloud.taskThree.title"
          titleDefault="Create a darkmode theme"
          titleDescription="Sample completed task title for the third cloud onboarding example"
          metaId="codex.legal.cloud.taskThree.meta"
          metaDefault="openai/codex · Oct 8"
          metaDescription="Sample repository and date metadata for the third cloud onboarding task"
          posId="codex.legal.cloud.taskThree.stats.positive"
          posDefault="+249"
          negId="codex.legal.cloud.taskThree.stats.negative"
          negDefault="-123"
        />
      </div>
    );
  } else {
    body = (
      <div className="relative rounded-xl border-token-border bg-token-dropdown-background p-2 font-mono shadow-xl">
        <OnboardingCodePreview
          language="typescript"
          content={SAMPLE_MONGOOSE_IMPORT}
          showActionBar={false}
          showStickyRightContent={false}
          wrapperClassName="pointer-events-none w-full"
          codeContainerClassName="pointer-events-none"
        />
        <div className="relative rounded-xl border-token-border bg-token-dropdown-background p-2 pb-2.5 font-mono">
          <span className="text-mono pointer-events-none px-2 py-1 text-xs tracking-[0.2em] text-token-description-foreground uppercase">
            <MemoizedFormattedMessage
              id="codex.legal.todo.heading"
              defaultMessage="// TODO: implement schema"
              description="Example TODO comment shown during onboarding"
            />
          </span>
        </div>
        <OnboardingCodePreview
          language="typescript"
          content={SAMPLE_SCHEMA_SNIPPET}
          showActionBar={false}
          showStickyRightContent={false}
          wrapperClassName="pointer-events-none w-full"
          codeContainerClassName="pointer-events-none"
          shouldWrapCode
        />
      </div>
    );
  }

  return (
    <div style={{ width, height }} aria-hidden>
      {body}
    </div>
  );
}

type CloudTaskRowProps = {
  titleId: string;
  titleDefault: string;
  titleDescription: string;
  metaId: string;
  metaDefault: string;
  metaDescription: string;
  posId: string;
  posDefault: string;
  negId: string;
  negDefault: string;
};

function CloudTaskRow(props: CloudTaskRowProps): ReactElement {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <AppIconZlt className="size-4" />
      <div className="flex flex-1 flex-col text-token-foreground">
        <div className="text-sm font-medium">
          <MemoizedFormattedMessage
            id={props.titleId}
            defaultMessage={props.titleDefault}
            description={props.titleDescription}
          />
        </div>
        <div className="text-sm font-medium opacity-50">
          <MemoizedFormattedMessage
            id={props.metaId}
            defaultMessage={props.metaDefault}
            description={props.metaDescription}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="text-green-500">
          <MemoizedFormattedMessage
            id={props.posId}
            defaultMessage={props.posDefault}
            description="Sample positive stat associated with a cloud task"
          />
        </span>
        <span className="text-red-500">
          <MemoizedFormattedMessage
            id={props.negId}
            defaultMessage={props.negDefault}
            description="Sample negative stat associated with a cloud task"
          />
        </span>
      </div>
    </div>
  );
}
