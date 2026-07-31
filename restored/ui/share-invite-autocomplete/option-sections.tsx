// Restored from ref/webview/assets/share-invite-autocomplete-CSfuQIPj.js
// Sectioned option list for the share-invite autocomplete dropdown.

import type { ReactElement } from "react";

import { ShareInviteOptionRow } from "./option-row";
import type { ShareInviteOptionSection } from "./types";

function countSectionOptions(
  total: number,
  section: ShareInviteOptionSection,
): number {
  return total + section.options.length;
}

export function ShareInviteOptionSections(props: {
  disabled?: boolean;
  highlightedIndex: number;
  optionSections: ShareInviteOptionSection[];
  selectedOptionIds?: Set<string>;
  getItemProps: (index: number) => Record<string, unknown>;
}): ReactElement {
  const {
    disabled,
    highlightedIndex,
    optionSections,
    selectedOptionIds,
    getItemProps,
  } = props;

  const nodes = optionSections.flatMap((section, sectionIndex) => {
    if (section.options.length === 0) return [];
    const indexOffset = optionSections
      .slice(0, sectionIndex)
      .reduce(countSectionOptions, 0);
    return [
      <div
        key={section.id}
        className="flex flex-col border-b border-token-border last:border-b-0"
      >
        <div className="px-2 pt-2 pb-1 text-xs font-medium text-token-description-foreground">
          {section.label}
        </div>
        {section.options.map((option, optionIndex) => (
          <ShareInviteOptionRow
            key={option.id}
            highlightedIndex={highlightedIndex}
            index={indexOffset + optionIndex}
            option={option}
            selected={selectedOptionIds?.has(option.id)}
            disabled={disabled}
            getItemProps={getItemProps}
          />
        ))}
      </div>,
    ];
  });

  return <>{nodes}</>;
}
