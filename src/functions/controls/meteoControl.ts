import { RestrictionType } from "types/promoCode.type";
import dotenv from "dotenv";
import control from "../lib/control";

dotenv.config();

const meteoControl = (restrictionMeteo: RestrictionType["meteo"], { userTemp, userWeather }: { userTemp: number; userWeather: string }) => {

  const isTempValid = control(restrictionMeteo.temp, userTemp);

  if (userWeather.toLowerCase() !== restrictionMeteo.is.toLowerCase() || !isTempValid) return false;
  return true;
};

export default meteoControl;
