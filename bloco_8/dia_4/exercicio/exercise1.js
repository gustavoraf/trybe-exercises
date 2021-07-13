const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const returnPushedArray = (array, element) => {
  array.push(element)
  return array
}

function flatten() {
  let flattenedList = []
  arrays.forEach((element, index) => {
    arrays[index].reduce(returnPushedArray, flattenedList)
  })
  return flattenedList
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);