export const sortAlphabeticalAsc = (arr) => {
  console.time('sort');
  arr.sort((a, b) => (a < b ? -1 : 1));
  console.timeEnd('sort');
  return arr;
};

export const sortAlphabeticalDesc = (arr) => {
  console.time('sort');
  arr.sort((a, b) => (a > b ? -1 : 1));
  console.timeEnd('sort');
  return arr;
};

export const sortAlphabeticalAscByKey = (arr, key) => {
  console.time('sort');
  arr.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  console.timeEnd('sort');
  return arr;
};

export const sortAlphbeticalDescByKey = (arr, key) => {
  arr.sort((a, b) => (a[key] > b[key] ? -1 : 1));

  return arr;
};
