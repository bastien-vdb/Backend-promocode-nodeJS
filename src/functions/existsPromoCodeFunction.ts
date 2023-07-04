
import promoCodes from "../models/promocodes";
import { promoCodeType } from "../types/promoCode.type";

const existsPromoCodeFunction = (name:string):promoCodeType => {
    return promoCodes.filter((promocode) => promocode.name === name)[0];
};
export default existsPromoCodeFunction;