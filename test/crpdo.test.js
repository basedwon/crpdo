const Crpdo = require('../lib/crpdo')
const Crypto = require('../lib/crypto')
const Coins = require('../lib/coins')
const Merkle = require('../lib/merkle')
const Key = require('../lib/key')
const Time = require('../lib/time')
const Hash = require('../lib/hash')
const Mnemonic = require('../lib/mnemonic')
const Nacl = require('../lib/nacl')
const Random = require('../lib/random')

describe('Crpdo', () => {
  describe('#Crypto', () => {
    it('should load the Crypto submodule', () => {
      expect(Crpdo.Crypto).to.exist
    })
  })

  describe('#Key', () => {
    it('should load the Key submodule', () => {
      expect(Crpdo.Key).to.exist
    })
  })

  describe('#Merkle', () => {
    it('should load the Merkle submodule', () => {
      expect(Crpdo.Merkle).to.exist
    })
  })

  describe('#Time', () => {
    it('should load the Time submodule', () => {
      expect(Crpdo.Time).to.exist
    })
  })

  describe('#Mnemonic', () => {
    it('should load the Mnemonic submodule', () => {
      expect(Mnemonic).to.exist
    })
  })

  describe('#Nacl', () => {
    it('should load the Nacl submodule', () => {
      expect(Nacl).to.exist
    })
  })

  describe('#Random', () => {
    it('should load the Random submodule', () => {
      expect(Random).to.exist
    })
  })

  describe('#Hash', () => {
    it('should load the Hash submodule', () => {
      expect(Crpdo.hash).to.exist
    })
    it('should hash function', () => {
      expect(Crpdo.hash('foo')).to.equal('9H5rVHEjFrZmKDojcKKBp4SycgRihyrckPYMnzPWAHvz')
      expect(Crpdo.hash.sha3('foo')).to.equal('Gv5ZjJaU8XHVdccgxPKGHKaZnhrFPwECkqTrVV3aPcCk')
    })
  })

  describe('#TypeChecks', () => {
    it('should have Crypto submodule of the correct type', () => {
      expect(Crpdo).to.equal(Crpdo.Crypto)
    })

    it('should have Key submodule of the correct type', () => {
      expect(Key).to.equal(Crpdo.Key)
    })
    
    it('should have Merkle submodule of the correct type', () => {
      expect(Merkle).to.equal(Crpdo.Merkle)
    })
    
    it('should have Time submodule of the correct type', () => {
      expect(Time).to.equal(Crpdo.Time)
    })

    it('should have Hash submodule of the correct type', () => {
      expect(Hash).to.equal(Crpdo.hash)
    })
  })

  describe('#Integration', () => {
    it('should perform a complex operation involving multiple submodules', () => {
      const key = new Crpdo.Key('foo')
      const encrypted = key.encrypt('bar')
      const tree = new Crpdo.Merkle([encrypted])
      expect(tree).to.exist
      expect(tree).to.have.property('root')
      expect(tree.root).to.not.be.empty
    })
  })
})
