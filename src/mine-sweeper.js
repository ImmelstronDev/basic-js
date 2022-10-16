const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resultMatrix = [];
  let minR;
  let maxR;
  let minC;
  let maxC;

  
  for( let i = 0; i < matrix.length; i++){
    resultMatrix[i] = [];

    for(let j = 0; j < matrix[i].length; j++){
      let sum = 0;

      i - 1 >= 0 ? minR = i - 1 : minR = i;
      i + 1 < matrix.length ? maxR = i + 1 : maxR = i;

      for(let k = minR; k <= maxR; k++){
        j - 1 >= 0 ? minC = j - 1 : minC = j;
        j + 1 < matrix[i].length ? maxC = j +1 : maxC = j;


        for(let m = minC; m <= maxC; m++){
          if(matrix[k][m] && (k !== i || m !== j)){
            sum++
          }
        }
      }

      resultMatrix[i][j] =  sum;
    }
  }

  return resultMatrix;

}

module.exports = {
  minesweeper
};
