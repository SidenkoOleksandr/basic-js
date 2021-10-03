import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
let cat = matrix.reduce((acc, subArray) => acc.concat(subArray), []);
let sum = 0
cat.forEach(i => {
  if (i == '^^') {
    sum = sum + 1
  }
})
return sum
}



