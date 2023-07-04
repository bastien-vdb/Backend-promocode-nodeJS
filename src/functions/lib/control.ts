import { controlType } from "types/promoCode.type";
export const control = (restrictionControl: controlType, restrictedValue: number) => {
  if (restrictionControl.eq && restrictionControl.eq !== restrictedValue) return false;
  if (restrictionControl.lt && restrictedValue > restrictionControl.lt) return false;
  if (restrictionControl.gt && restrictedValue < restrictionControl.gt) return false;
  return true;
};

export default control;
