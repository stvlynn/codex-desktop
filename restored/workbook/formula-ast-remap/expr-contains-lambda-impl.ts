// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: detect LAMBDA / lambda-defined-name in formula AST (legacy helper1008).
// Stage-3 wave-104.

export function exprContainsLambda(farIn539: any) {
  switch (farIn539.expr.kind) {
    case "FunctionCall": {
      let farBind12615 = farIn539
        .stripCompatibilityPrefixes(farIn539.expr.name)
        .trim()
        .toUpperCase();
      if (
        farBind12615 === "LAMBDA" ||
        farIn539.hasLambdaDefinedName(
          farBind12615,
          farIn539.contextSheet,
        )
      )
        return true;
      for (let farBind16351 of farIn539.expr.args)
        if (
          exprContainsLambda({
            expr: farBind16351,
            contextSheet: farIn539.contextSheet,
            hasLambdaDefinedName: farIn539.hasLambdaDefinedName,
            stripCompatibilityPrefixes:
              farIn539.stripCompatibilityPrefixes,
          })
        )
          return true;
      return false;
    }
    case "CallExpr":
      if (
        exprContainsLambda({
          expr: farIn539.expr.callee,
          contextSheet: farIn539.contextSheet,
          hasLambdaDefinedName: farIn539.hasLambdaDefinedName,
          stripCompatibilityPrefixes:
            farIn539.stripCompatibilityPrefixes,
        })
      )
        return true;
      for (let farBind16352 of farIn539.expr.args)
        if (
          exprContainsLambda({
            expr: farBind16352,
            contextSheet: farIn539.contextSheet,
            hasLambdaDefinedName: farIn539.hasLambdaDefinedName,
            stripCompatibilityPrefixes:
              farIn539.stripCompatibilityPrefixes,
          })
        )
          return true;
      return false;
    case "UnaryOp":
      return exprContainsLambda({
        expr: farIn539.expr.expr,
        contextSheet: farIn539.contextSheet,
        hasLambdaDefinedName: farIn539.hasLambdaDefinedName,
        stripCompatibilityPrefixes: farIn539.stripCompatibilityPrefixes,
      });
    case "BinaryOp":
      return (
        exprContainsLambda({
          expr: farIn539.expr.left,
          contextSheet: farIn539.contextSheet,
          hasLambdaDefinedName: farIn539.hasLambdaDefinedName,
          stripCompatibilityPrefixes:
            farIn539.stripCompatibilityPrefixes,
        }) ||
        exprContainsLambda({
          expr: farIn539.expr.right,
          contextSheet: farIn539.contextSheet,
          hasLambdaDefinedName: farIn539.hasLambdaDefinedName,
          stripCompatibilityPrefixes:
            farIn539.stripCompatibilityPrefixes,
        })
      );
    case "ArrayLiteral":
      for (let farBind15370 of farIn539.expr.elements)
        for (let farBind16164 of farBind15370)
          if (
            exprContainsLambda({
              expr: farBind16164,
              contextSheet: farIn539.contextSheet,
              hasLambdaDefinedName: farIn539.hasLambdaDefinedName,
              stripCompatibilityPrefixes:
                farIn539.stripCompatibilityPrefixes,
            })
          )
            return true;
      return false;
    default:
      return false;
  }
}

/** Legacy alias. */
export const workbookHelper1008 = exprContainsLambda;
