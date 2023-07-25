export const toFixed = (
  a: number | undefined | string | null,
  length = 2
): number => {
  if (Number(a)) {
    return +Number(a).toFixed(length);
  }
  return 0;
};
