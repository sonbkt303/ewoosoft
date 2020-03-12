const { occurrences, generateSampleString } = require('../helper');
const expect = require('chai').expect;

describe('#occurrences()', () => {

  context('without arguments', () => {
    it('should return 1', () => {
      expect(occurrences()).to.equal(1)
    })

    it('missing first arguments should return 0', () => {
      expect(occurrences('', 'asd')).to.equal(0)
    })

    it('missing second arguments should return 0', () => {
      expect(occurrences('12345625712')).to.equal(0)
    })
  })

  context('with arguments', () => {
    it('should return 1', () =>{
      expect(occurrences('12345612', '12')).to.equal(2)
    })
  })
})

describe('#generateSampleString()', () => {
  context('with arguments', () => {
    it('should return 20', () => {
      expect(generateSampleString(20)).to.have.lengthOf(20);
    })

    it('type of data should be string', () => {
      expect(generateSampleString(20)).to.be.a('string');
    })
  })
})