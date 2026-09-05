import assert from "node:assert/strict";
import test from "node:test";
import { difference } from "../index.js";

test("difference subtracts rather than adding", () => {
  assert.equal(difference(7, 3), 4);
  assert.equal(difference(3, 7), -4);
});
