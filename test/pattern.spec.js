const {searchLocationAppearPattern}  = require('../pattern');
const expect = require('chai').expect;

let a = searchLocationAppearPattern('AABAACAADAABAABA');


describe('#searchLocationAppearPattern()', () => {
  context('search pattern appear location', () => {

    it('missing two arguments must return []', () => {
      expect(searchLocationAppearPattern()).to.eql([]);
    })

    it('missing second arguments must equal []', () => {
      expect(searchLocationAppearPattern('AABAACAADAABAABA')).to.eql([]);
    })


    it('must return [0, 9, 12]', () => {
      expect(searchLocationAppearPattern('AABAACAADAABAABA', 'AABA')).to.eql([0, 9, 12]);
    })

  })
})