export type RestrictionType = {
  date?: { after: string; before: string };
  age?: controlType;
  meteo?: meteo;
  or?: RestrictionType[];
  and?: RestrictionType[];
};

export type meteo = {
  is: string;
  temp: controlType;
};

export type promoCodeType = {
  name: string;
  avantage: number;
  restriction: RestrictionType[];
};

export type controlType = {
  eq?: number;
  lt?: number;
  gt?: number;
};
