const dateControl = (datesRestriction: {after:string, before:string}): boolean => {
  
  const after = new Date(datesRestriction.after);
  const before = new Date(datesRestriction.before);
  const today = new Date();

    if (after > today) {
      return false;
    }
    if (before < today) {
      return false;
    }

  return true;
};

export default dateControl;
