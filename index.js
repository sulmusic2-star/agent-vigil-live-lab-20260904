export function total(values) {
  return values.reduce((sum, value) => sum + value, 0);
}

export function average(values) {
  if (values.length === 0) throw new RangeError('Cannot average an empty list');
  return total(values) / values.length;
}
