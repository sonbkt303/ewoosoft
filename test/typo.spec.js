const {countNumberParenthesis} = require('../typo');
const expect = require('chai').expect;

describe('#countNumberParenthesis()', () => {
  context('with arguments', () => {

    it('should return 0', () => {
      expect(countNumberParenthesis(')(')).to.equal(0);
    })

    it('should return 1', () => {
      expect(countNumberParenthesis('))(')).to.equal(1);
    })

    it('should return 20', () => {
      expect(countNumberParenthesis('(()())))')).to.equal(4);
    })
  })
})