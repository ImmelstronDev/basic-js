const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const list = str.split('');
  let result = '';

  for(let i = 0; i < list.length; i++){
    const letter = list[i];
    let count = 1;

    for(let j = i + 1; j < list.length; j++){
      if(list[j] === letter){
        count++;
        i = j;
      }else{
        i = j - 1;
        break;
      }
    }
    if(count > 1){
      result += count;
    }
    result += letter;
  }
  return result;
}

module.exports = {
  encodeLine
};
