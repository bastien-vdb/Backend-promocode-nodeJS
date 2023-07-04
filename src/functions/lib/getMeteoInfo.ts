import fetcher from "./fetcher";
import kelvinToCelsius from "./kelvinToCelcius";

export const getMeteoInfo = async(userCity:string, apiKey:string) => {
    
  const urlToFetch = process.env.API_URL.replace("${city}", userCity).replace("${apikey}", apiKey);

  const getMeteo = await fetcher(urlToFetch);

  const userTemp:number = kelvinToCelsius(getMeteo.main.temp);
  const userWeather:string = getMeteo.weather[0].main;

  return {userTemp, userWeather};
};

export default getMeteoInfo;
