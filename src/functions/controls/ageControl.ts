import { RestrictionType } from "types/promoCode.type";
import control from "../lib/control";
const ageControl = (restrictionAge:RestrictionType['age'], userAge:number)=>{
    const ageIsValid = control(restrictionAge, userAge);
    if (!ageIsValid) return false;
    return true;
};

export default ageControl;