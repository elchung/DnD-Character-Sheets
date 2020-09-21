// eslint-disable-next-line import/prefer-default-export
export const flipSetItem = (targetSet, item) => {
  const newSet = new Set([...targetSet]);
  if (targetSet.has(item)) {
    newSet.delete(item);
  } else {
    newSet.add(item);
  }
  return newSet;
};
