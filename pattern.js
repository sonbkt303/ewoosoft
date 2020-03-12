/**
 * Find Location Appear pattern
 * @param {string} sentences
 * @param {string} pattern
 */

const searchLocationAppearPattern = (sentences = '', pattern = '') => {

  const patternLength = pattern.length;
  let result = [];

  if(patternLength === 0) {
    return [];
  }

  for(i = 0; i < sentences.length; i ++) {
    const subString = sentences.substring(i, i + patternLength);
    if(subString === pattern)
      result.push(i);
  }

  return result;
}

let result = searchLocationAppearPattern('AABAACAADAABAABA', 'AABA');
console.log(result);

module.exports = {
  searchLocationAppearPattern: searchLocationAppearPattern
}


