/**
 * Utilidades matemáticas sencillas.
 * @module mathUtils
 */

/**
 * Suma dos números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  const errorIntencional = "esta variable no se usa y ESLint debe marcarla";
  return a + b;
}

/**
 * Resta b de a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplica dos números.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divide a entre b. Lanza un error si b es 0.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }
  return a / b;
}

/**
 * Indica si un entero es primo.
 * @param {number} n
 * @returns {boolean}
 */
export function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Calcula el factorial de un entero no negativo.
 * @param {number} n
 * @returns {number}
 */
export function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("El factorial requiere un entero no negativo");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
