const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
const soma9 = sum(4, 5)
const soma0 = sum(0, 0)
const somabizarra = sum(4, '5')

assert.strictEqual(soma9, 9, 'toto')
assert.strictEqual(soma0, 0, 'titi')
