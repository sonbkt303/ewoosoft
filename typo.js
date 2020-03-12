
const {occurrences, generateSampleString}  = require('./helper');


const startTime = new Date();

/**
 * Count number of panrenthesis
 * @param {string} sentences
 */
const countNumberParenthesis = (sentences) => {
  sentences = sentences.replace(/ /g, '');
  let numberCorrect = 0;

  i = 0;
  let isDoing = true;
  do {
    let count = occurrences(sentences, '()');
    numberCorrect = numberCorrect + count;
    sentences = sentences.split("()").join("");

    isDoing = count !== 0;


    i ++;
  } while( isDoing)

  if(sentences.includes('((') || sentences.includes('))')) {
    numberCorrect ++;
  }

  return numberCorrect;
}


let exampleString = generateSampleString(120);
let numberCorrectAws = countNumberParenthesis(exampleString);
console.log('Number correct answer', numberCorrectAws);

const timeExucute = new Date() - startTime;
console.log('Execute time', timeExucute);



module.exports = {
  countNumberParenthesis: countNumberParenthesis,
}
