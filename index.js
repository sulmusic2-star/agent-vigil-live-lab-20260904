export function total(values) {
  return values.reduce((sum, value) => sum + value, 0);
}

export function product(values) {
  return values.reduce((result, value) => result * value, 1);
}
