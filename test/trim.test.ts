import { trim } from "../src";

describe("trimLines", () => {
  it("trims leading and trailing whitespace", () => {
    expect(trim`foo
    bar
        baz  `).toEqual(`foo
bar
baz`);
  });

  it("removes empty leading or trailing lines", () => {
    expect(trim`

    foo
    bar
        baz  
        
        `).toEqual(`foo
bar
baz`);
  });
});
