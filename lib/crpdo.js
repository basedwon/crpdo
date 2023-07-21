const { _, log, nacl } = require('basd')
const { Crypto } = require('@basd/crypto')
const Merkle = require('@basd/merkle') // make file?
const Key = require('@basd/key') // make file?

class Crpdo extends Crypto {
  static Crypto = Crpdo
  static Key = Key
  static Merkle = Merkle
}

module.exports = Crpdo

async function test() {
  // log(_.getMethods(Crpdo, ['bind', 'toString', 'apply', 'call']))
  const goat = Crpdo.hash({ foo: 'bar' })
  log('crpdo', goat)
}

_.executor(test)
