const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  console.log(typeof(newArr))
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const remove1 = myRemove([1, 2, 3, 4], 3)
const remove2 = myRemove([1, 2, 3, 4], 3)

assert.deepStrictEqual(remove1, [ 1, 2, 4 ], 'caca')
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'tete')
assert.deepStrictEqual(remove2, [ 1, 2, 3, 4 ], 'pipi')