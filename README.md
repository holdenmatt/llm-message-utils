# openai-message-utils

A _very_ simple Typescript library that makes OpenAI messages slightly easier to work with.

You probably don't need this library (or any library) to build prompts.
JavaScript [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are great for this!

This library helps with just two small annoyances.

## buildMessages

The `buildMessages` function handles the common case of creating a messages
array from a single system message and/or user message.

Usage:

```
const system = "You are a helpful assistant";
const user = "How do I say cheese in French?";
const messages = buildMessages({ system, user });
```

## trimWhitespace

You can indent prompts in your code, for better readability.

Just add the `trimWhitespace` tagged template literal, and it will remove:

- any leading or trailing whitespace from each line
- any empty leading or trailing lines

Other empty lines will be preserved.

Usage:

```
const system = `
    You are a helpful assistant.
    This line looks indented in code, but the value won't be.
    The prompt starts/ends with empty lines, which will also be removed.
`
```
