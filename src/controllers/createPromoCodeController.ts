import { Request, Response } from "express";
import createPromoCodeFunction from "../functions/createPromoCodeFunction";

const createPromoCodeController = (req: Request, res: Response, next: any) => {
  try {
    const { name, avantage, restriction } = req.body;
    if (!name || !avantage) return res.status(400).json("name or avantage missing");
    const newPromoCode = createPromoCodeFunction({ name, avantage, restriction });

    return res.status(201).json({"new code added":newPromoCode});
  } catch (error) {
    res.status(500).json({ "An error occurs": error });
  }
};

export default createPromoCodeController;