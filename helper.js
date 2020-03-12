/**
 * Check number subtring on string
 * @param {string} string
 * @param {string} subString
 * @param {boolean} allowOverlapping
 */
const occurrences = (string, subString, allowOverlapping) => {
  string += "";
  subString += "";
  if (subString.length <= 0) return (string.length + 1);

  let count = 0,
      position = 0,
      step = allowOverlapping ? 1 : subString.length;

  while (true) {
      position = string.indexOf(subString, position);
      if (position >= 0) {
          ++ count;
          position += step;
      } else break;
  }
  return count;
}

/**
 * Generate test sample
 * @param {number} length 
 */

const generateSampleString = (length) => {
  var sample           = '';
  var characters       = '()';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    sample += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return sample;
}

module.exports = {
  occurrences: occurrences,
  generateSampleString: generateSampleString
}
