import { RestrictionType } from "../types/promoCode.type";
import dateControl from "./controls/dateControl";
import ageControl from "./controls/ageControl";
import meteoControl from "./controls/meteoControl";
import getMeteoInfo from "./lib/getMeteoInfo";

const validatePromoCodeFunction = async (codePromoToAnalyze: RestrictionType[], userAge: number, userCity: string) => {

  let reason = "";

  for (let restriction of codePromoToAnalyze) {
    for (let rule in restriction) {
        
      if (rule === "date" && !reason) {
        const dateValid = dateControl(restriction[rule]);
        if (!dateValid) reason = "promocode outdated !";
      }

      if (rule === "age" && !reason) {
        const ageValid = ageControl(restriction[rule], userAge);
        if (!ageValid) reason = "age not allowed to use the promocode";
      }

      if (rule === "meteo" && !reason) {
        if (!userCity) reason = "city information missing";
        
        const meteoData = await getMeteoInfo(userCity, process.env.API_KEY);
        const meteoValid = meteoControl(restriction[rule], meteoData);
        
        if (!meteoValid) reason = "meteo not allowed to use the promocode";
      }

      if (rule === "or") {
        const orConditions = await validatePromoCodeFunction(restriction[rule], userAge, userCity);
        if (!orConditions) reason = "";
      }

      if (rule === "and" && !reason) reason = await validatePromoCodeFunction(restriction[rule], userAge, userCity);
    }
  }
  return reason;
};
export default validatePromoCodeFunction;
