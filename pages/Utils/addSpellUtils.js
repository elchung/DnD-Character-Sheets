/* eslint-disable max-len */
export const getFilteredSpells = (spellList, filterBy, prioritizeFilterOut) => {
  const keepClass = new Set(Object.keys(filterBy.class).filter((className) => filterBy.class[className]));
  const filterPriorityHelper = (spell) => {
    if (prioritizeFilterOut) {
      console.log(spell);
      if (spell.classes.some((className) => !keepClass.has(className))) { // if any match to be filtered out, filter out
        return false;
      } // if all are keep, keep
      return true;
    } // if prioritize keep
    if (spell.classes.some((className) => keepClass.has(className))) { // if any match keep, keep
      return true;
    } // else, filter out
    return false;
  };

  return Object.values(spellList).filter((spell) => (filterBy.level[spell.level] && filterPriorityHelper(spell)));
};
