import promoCodes from '../models/promocodes';
import {promoCodeType} from '../types/promoCode.type';

const createPromoCodeFunction = ({name, avantage, restriction}:promoCodeType):promoCodeType[] => {
    const newPromoCode = {
        name,
        avantage,
        restriction,
    }
    promoCodes.push(newPromoCode);
    return promoCodes;
};

export default createPromoCodeFunction;