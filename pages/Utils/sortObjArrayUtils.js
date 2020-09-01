export const sortAlphabeticalAsc = (arr, key) => {
  arr.sort((a, b) => (a[key] < b[key] ? -1 : 1));

  return arr;
};

export const sortAlphbeticalDesc = (arr, key) => {
  arr.sort((a, b) => (a[key] > b[key] ? -1 : 1));

  return arr;
};
