// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `KX` / export `MS`.

/** Pretty-print GPT / OAI model id labels for display. */
export function formatGptModelLabel(label: string): string {
  if (!label.trimStart().toLowerCase().startsWith("gpt")) return label;
  const joiner = /^gpt-\d/iu.test(label.trimStart()) ? " " : "-";
  return label
    .split(/(\s+)/u)
    .map((segment) =>
      segment.trim().length === 0
        ? segment
        : segment
            .split("-")
            .map((part, index) =>
              part.toLowerCase() === "gpt"
                ? "GPT"
                : part.toLowerCase() === "oai"
                  ? "OAI"
                  : index > 0 && part.length > 0
                    ? `${part[0]?.toUpperCase() ?? ""}${part.slice(1)}`
                    : part,
            )
            .join(joiner)
            .replace(/^GPT (?=\d)/u, "GPT-"),
    )
    .join("");
}
