// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Summarize computer-use MCP tool-call approvals for UI surfaces (`_Ot` / `vot`).

export type PersistMode = string;

export type ToolParamDisplay = {
  name: string;
  displayName?: string;
  value?: unknown;
};

export type McpToolCallApproval = {
  connector_id: string;
  connector_name?: string;
  persist?: PersistMode | PersistMode[] | null;
  tool_params?: {
    app?: unknown;
    [key: string]: unknown;
  };
};

export type McpToolCallElicitation = {
  kind: "mcpToolCall";
  approval: McpToolCallApproval;
  riskLevel?: string;
  subtitle?: string;
  toolParamsDisplay?: ToolParamDisplay[];
};

export type ComputerUseApprovalSummary = {
  appDisplayName: string;
  connectorName: string;
  persistModes: PersistMode[];
  riskLevel?: string;
  subtitle?: string;
};

/** Normalize a persist field into a unique string list (`hOt`). */
export function normalizePersistModes(
  persist: PersistMode | PersistMode[] | null | undefined,
): PersistMode[] {
  if (persist == null) {
    return [];
  }
  if (Array.isArray(persist)) {
    return Array.from(new Set(persist));
  }
  return [persist];
}

/** True when the connector id refers to Computer Use (`yOt`). */
export function isComputerUseConnectorId(connectorId: string): boolean {
  const normalized = connectorId
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((part) => part.length > 0)
    .join("-");
  return (
    normalized === "computer-use" || normalized.startsWith("computer-use-")
  );
}

/** Resolve the app display name from tool params (`vOt`). */
export function resolveComputerUseAppDisplayName(
  approval: McpToolCallApproval,
  elicitation: Pick<McpToolCallElicitation, "toolParamsDisplay">,
): string | null {
  const fromDisplay = elicitation.toolParamsDisplay?.find(
    (entry) => entry.name === "app",
  )?.value;
  if (typeof fromDisplay === "string" && fromDisplay.trim() !== "") {
    return fromDisplay.trim();
  }

  const fromParams = approval.tool_params?.app;
  if (typeof fromParams !== "string" || fromParams.trim() === "") {
    return null;
  }
  return fromParams.trim();
}

/**
 * Build a UI summary for a computer-use MCP tool-call elicitation, or `null`
 * when the elicitation is not computer-use / has no persist modes / no app name.
 */
export function getComputerUseApprovalSummary(
  elicitation: { kind: string } & Partial<McpToolCallElicitation>,
): ComputerUseApprovalSummary | null {
  if (elicitation.kind !== "mcpToolCall" || elicitation.approval == null) {
    return null;
  }

  const approval = elicitation.approval;
  const persistModes = normalizePersistModes(approval.persist);
  if (
    !isComputerUseConnectorId(approval.connector_id) ||
    persistModes.length === 0
  ) {
    return null;
  }

  const appDisplayName = resolveComputerUseAppDisplayName(
    approval,
    elicitation,
  );
  if (appDisplayName == null) {
    return null;
  }

  return {
    appDisplayName,
    connectorName: approval.connector_name ?? "Computer Use",
    persistModes,
    riskLevel: elicitation.riskLevel,
    subtitle: elicitation.subtitle,
  };
}
