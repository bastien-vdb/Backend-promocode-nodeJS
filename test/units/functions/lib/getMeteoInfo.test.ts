import type * as getMeteoInfoTest from "../../../../src/functions/lib/getMeteoInfo";
import type * as kelvinToCelsiusTest from "../../../../src/functions/lib/kelvinToCelcius";
import type * as fetcherTest from "../../../../src/functions/lib/fetcher";

const { getMeteoInfo } = jest.requireActual<typeof getMeteoInfoTest>("../../../../src/functions/lib/getMeteoInfo.ts");
const { kelvinToCelsius } = jest.requireActual<typeof kelvinToCelsiusTest>("../../../../src/functions/lib/kelvinToCelcius.ts");
const { fetcher } = jest.requireActual<typeof fetcherTest>("../../../../src/functions/lib/fetcher.ts");

test("Test getMeteoInfo function", async () => {
  const userCity = "Paris";
  const apiKey = "d0562f476913da692a065c608d0539f6";
  const expectedUserTemp = 20; // Température en degrés Celsius attendue
  const expectedUserWeather = "Sunny"; // Météo attendue

  const fetcherMock = jest.fn().mockResolvedValue({ main: { temp: 293 }, weather: [{ main: "Sunny" }] });
  const result = await getMeteoInfo(userCity, apiKey);

  expect(fetcherMock).toHaveBeenCalledTimes(1);
  expect(fetcherMock).toHaveBeenCalledWith(expect.stringContaining(userCity));
});
