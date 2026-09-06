import test from 'node:test';
import assert from 'node:assert/strict';
import { setTimeout } from 'node:timers/promises';
import { average } from '../index.js';

test('average handles positive and negative values', async () => {
  // Staging-only pause gives the recovery drill time to change the PR description.
  await setTimeout(20000);
  assert.equal(average([2, 4, 9]), 5);
  assert.equal(average([-4, 2]), -1);
  assert.throws(() => average([]), RangeError);
});
