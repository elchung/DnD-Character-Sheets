export const sortAlphabetical = (arr, ascending) => {
  console.time('regular sort');
  if (ascending) {
    arr.sort((a, b) => (a < b ? -1 : 1));
  } else {
    arr.sort((a, b) => (a > b ? -1 : 1));
  }
  console.timeEnd('regular sort');
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
