import { test } from "node:test";
import assert from "node:assert/strict";
import {
  add,
  subtract,
  multiply,
  divide,
  isPrime,
  factorial,
} from "../src/mathUtils.js";

test("add suma correctamente", () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
});

test("subtract resta correctamente", () => {
  assert.equal(subtract(10, 4), 6);
});

test("multiply multiplica correctamente", () => {
  assert.equal(multiply(3, 4), 12);
});

test("divide divide correctamente", () => {
  assert.equal(divide(10, 2), 5);
});

test("divide lanza error al dividir entre cero", () => {
  assert.throws(() => divide(1, 0), /dividir entre cero/);
});

test("isPrime detecta primos y no primos", () => {
  assert.equal(isPrime(7), true);
  assert.equal(isPrime(10), false);
  assert.equal(isPrime(1), false);
});

test("factorial calcula correctamente", () => {
  assert.equal(factorial(0), 1);
  assert.equal(factorial(5), 120);
});
