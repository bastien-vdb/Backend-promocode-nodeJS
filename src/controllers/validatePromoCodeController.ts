import { Request, Response, NextFunction } from "express";
import validatePromoCodeFunction from "../functions/validatePromoCodeFunction";
import existsPromoCodeFunction from "../functions/existsPromoCodeFunction";

const validatePromoCodeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, age: userAge, meteo: userMeteo } = req.body;
    const userCity: string = userMeteo?.town;

    //Promocode exists ?
    const codePromoToAnalyze = existsPromoCodeFunction(name);
    if (!codePromoToAnalyze) res.status(404).json(`codepromo ${name} does not exist`);

    //Promocode is it Valid or Not ?
    const validOrNot = await validatePromoCodeFunction(codePromoToAnalyze.restriction, userAge, userCity);

    if (validOrNot) return res.status(400).json({ error: validOrNot });

    return res.status(200).json(codePromoToAnalyze.avantage);
  } catch (error) {
    return res.status(500).json({ error: "an error has been generated" });
  }
};

export default validatePromoCodeController;
