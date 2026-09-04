export function total(values) {
  return values.reduce((sum, value) => sum + value, 0);
}

export function difference(left, right) {
  return left - right;
}
