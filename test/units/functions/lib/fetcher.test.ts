import type * as fetcherTest from "../../../../src/functions/lib/fetcher";

const { fetcher } = jest.requireActual<typeof fetcherTest>("../../../../src/functions/lib/fetcher.ts");

describe("fetcher", () => {
  it("should fetch data from the API", async () => {
    const data = await fetcher("https://api.openweathermap.org/data/2.5/weather?q=paris&appid=d0562f476913da692a065c608d0539f6");
    expect(data).toBeDefined();
  });

  it("should throw an error when unable to fetch data", async () => {
    await expect(fetcher("https://invalid-api.com")).rejects.toThrow("Cannot fetch data from the API");
  });
});
