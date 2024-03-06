# llm-message-utils

A _very_ simple zero-dependency Typescript library
that makes LLM prompts slightly easier to work with.

You probably don't need this library (or any library) to build prompts!

JavaScript [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are great for this.

This library helps with just two small annoyances.

## Install
```
npm install llm-message-utils
```

## trim

Allows you to indent prompts in your code for readability, while automatically trimming whitespace.

Just add the `trim` tagged template literal, and it will remove:

- any leading or trailing whitespace from each line
- any empty leading or trailing lines

Other empty lines will be preserved.

Usage:

```
import { trim } from "llm-message-utils";

const system = trim`
    You are a helpful assistant.
    This line looks indented in code, but the value won't be.
    The prompt starts/ends with empty lines, which will also be removed.
`
```

## user, system, assistant messages

It's common to build a messages array like this:
```
const country = "France";
const messages = [
    {
        role: "system",
        content: "You are a helpful assistant"
    },
    {
        role: "user",
        content: `What's the capital of ${country}?"
    },
    {
        role: "assistant",
        content: "The capital of France is Paris"
    }
]
```

We provide 3 additional tagged template literals as syntactic sugar.

Usage:
```
import { systemRole, userRole, assistantRole } from "llm-message-utils";

const country = "France";
const messages = [
    systemRole`
        You are a helpful assistant
    `,
    userRole`
        What's the capital of ${country}?
    `,
    assistantRole`
        The capital of France is Paris
    `
]
```

These create the message objects with a given role, and trim strings (as above)
to allow you to indent however you like for readability.
