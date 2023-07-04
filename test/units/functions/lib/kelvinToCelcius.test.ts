import type * as kelvinToCelsiusTest from "../../../../src/functions/lib/kelvinToCelcius";

const {kelvinToCelsius} = jest.requireActual<typeof kelvinToCelsiusTest>("../../../../src/functions/lib/kelvinToCelcius.ts");

describe("kelvinToCelsius", () => {
  it("negative value", () => {
    const result = kelvinToCelsius(10);
    expect(result).toBe(-263);
  });

  it("positive value", () => {
    const result = kelvinToCelsius(300);
    expect(result).toBe(27);
  });
});