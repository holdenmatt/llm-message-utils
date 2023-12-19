import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

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
 * Convenience function to create OpenAI messages from system/user prompts.
 *
 * Usage:
 * ```
 * const system = "You are a helpful assistant";
 * const user = "How do I say cheese in French?";
 * const messages = buildMessages({ system, user });
 * ```
 */
export function buildMessages({
  system,
  user,
  trim = true,
}: {
  system?: string;
  user?: string;
  trim?: boolean;
}): ChatCompletionMessageParam[] {
  const messages: ChatCompletionMessageParam[] = [];

  if (system) {
    messages.push({
      role: "system",
      content: trim ? trimLines(system) : system,
    });
  }

  if (user) {
    messages.push({
      role: "user",
      content: trim ? trimLines(user) : user,
    });
  }

  return messages;
}
