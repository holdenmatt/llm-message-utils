import { systemRole, userRole, assistantRole } from "../src";

describe("messages", () => {
  it("work with system role", () => {
    expect(systemRole`
      You are a helpful assistant
    `).toEqual({
      role: "system",
      content: "You are a helpful assistant",
    });
  });

  it("work with user role and substitution", () => {
    const country = "France";
    expect(userRole`
      What's the capital of ${country}?
    `).toEqual({
      role: "user",
      content: "What's the capital of France?",
    });
  });

  it("works with assistant role", () => {
    const country = "France";
    const capital = "Paris";
    expect(assistantRole`

      The capital of ${country} is ${capital}.

    `).toEqual({
      role: "assistant",
      content: "The capital of France is Paris.",
    });
  });
});
