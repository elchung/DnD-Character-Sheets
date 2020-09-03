export const sortAlphabeticalAsc = (arr, key) => {
  console.time('sort');
  arr.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  console.timeEnd('sort');
  return arr;
};

export const sortAlphbeticalDesc = (arr, key) => {
  arr.sort((a, b) => (a[key] > b[key] ? -1 : 1));

  return arr;
};
