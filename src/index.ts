/**
 * Tagged template literal to trim leading/trailing whitespace from each line,
 * and remove leading/trailing lines if empty.
 *
 * Usage:
 * ```
 * const str = trim`
 *    indents will be removed
 * `;
 * ```
 */
export function trim(strings: TemplateStringsArray, ...values: any[]) {
  const fullString = strings.reduce((result, str, i) => result + values[i - 1] + str);
  return trimLines(fullString);
}

/**
 * Trim leading/trailing whitespace from each line,
 * and remove leading/trailing lines if empty.
 */
function trimLines(str: string) {
  const lines = str.split("\n").map((line) => line.trim());

  // Find the index of the first and last non-empty line
  const firstNonEmptyLine = lines.findIndex((line) => line !== "");
  const lastNonEmptyLine =
    lines.length - 1 - [...lines].reverse().findIndex((line) => line !== "");

  // Trim leading and trailing empty lines, but preserve empty lines in the middle
  return lines.slice(firstNonEmptyLine, lastNonEmptyLine + 1).join("\n");
}

/**
 * Convert a string to a system message.
 *
 * Usage:
 * ```
 * const message = systemRole`You are a helpful assistant`;
 * ```
 * Result:
 * ```
 * {
 *   role: "system",
 *   content: "You are a helpful assistant"
 * }
 * ```
 */
export function systemRole(strings: TemplateStringsArray, ...values: any[]) {
  return {
    role: "system" as const,
    content: trim(strings, ...values),
  };
}

/**
 * Convert a string to a user message.
 *
 * Usage:
 * ```
 * const country = "France";
 * const message = userRole`What's the capital of ${country}`;
 * ```
 * Result:
 * ```
 * {
 *   role: "user",
 *   content: "What's the capital of France"
 * }
 * ```
 */
export function userRole(strings: TemplateStringsArray, ...values: any[]) {
  return {
    role: "user" as const,
    content: trim(strings, ...values),
  };
}

/**
 * Convert a string to an assistant message.
 *
 * Usage:
 * ```
 * const message = assistantRole`The capital of France is Paris`;
 * ```
 * Result:
 * ```
 * {
 *   role: "assistant",
 *   content: "The capital of France is Paris"
 * }
 * ```
 */
export function assistantRole(strings: TemplateStringsArray, ...values: any[]) {
  return {
    role: "assistant" as const,
    content: trim(strings, ...values),
  };
}
