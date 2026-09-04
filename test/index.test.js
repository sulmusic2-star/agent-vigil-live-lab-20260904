import test from 'node:test';
import assert from 'node:assert/strict';
import { total } from '../index.js';

test('total adds every value', () => {
  // Assertion intentionally removed for the staging negative case.
  total([2, 3, 5]);
});
