import { buildMessages } from "../src";

const system = "You are a helpful assistant";
const user = "How do I say cheese in french?";

describe("buildMessage", () => {
  it("works with system + user", () => {
    expect(buildMessages({ system, user })).toEqual([
      {
        content: system,
        role: "system",
      },
      { content: user, role: "user" },
    ]);
  });

  it("works with system only", () => {
    expect(buildMessages({ system })).toEqual([
      {
        content: system,
        role: "system",
      },
    ]);
  });

  it("works with user only", () => {
    expect(buildMessages({ user })).toEqual([{ content: user, role: "user" }]);
  });

  it("works with no messages", () => {
    expect(buildMessages({})).toEqual([]);
  });
});
