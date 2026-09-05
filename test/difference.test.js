import test from 'node:test';
import assert from 'node:assert/strict';
import { difference } from '../index.js';
test('difference handles positive and negative values', () => {
  assert.equal(difference(7, 2), 5);
  assert.equal(difference(2, 7), -5);
});
