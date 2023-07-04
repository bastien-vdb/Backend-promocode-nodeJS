import type * as controlTest from "../../../../src/functions/lib/control";

const {control} = jest.requireActual<typeof controlTest>("../../../../src/functions/lib/control.ts");

describe("value lt between gt", () => {

    const restrictionDataTest = {lt:25, gt:20};

  it("value respected the restriction", () => {
    const result = control(restrictionDataTest, 22);
    expect(result).toBe(true);
  });

  it("value not respected the restriction", () => {
    const result = control(restrictionDataTest, 27);
    expect(result).toBe(false);
  });

  it("value not respected the restriction", () => {
    const result = control(restrictionDataTest, 17);
    expect(result).toBe(false);
  });
});

describe("value lt between gt", () => {

    const restrictionDataTest = {eq:20};

  it("value respected the restriction", () => {
    const result = control(restrictionDataTest, 20);
    expect(result).toBe(true);
  });

  it("value not respected the restriction", () => {
    const result = control(restrictionDataTest, 22);
    expect(result).toBe(false);
  });
});