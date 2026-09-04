import test from 'node:test';
import assert from 'node:assert/strict';
import { total } from '../index.js';

test('total adds every value', () => {
  assert.equal(total([2, 3, 5]), 10);
});
