import { trimLines } from "../src";

describe("trimLines", () => {
  it("trims leading and trailing whitespace", () => {
    expect(trimLines`foo
    bar
        baz  `).toEqual(`foo
bar
baz`);
  });

  it("removes empty leading or trailing lines", () => {
    expect(trimLines`

    foo
    bar
        baz  
        
        `).toEqual(`foo
bar
baz`);
  });
});
