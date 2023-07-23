/**
 * @file crpdo.js
 * 
 * @description Crpdo is a comprehensive cryptographic library that simplifies 
 * complex cryptographic tasks. This library is a bundling of four 
 * submodules: Crypto, Key, Merkle, and Srp, which are exported under a 
 * common namespace.
 * 
 * @module Crpdo
 */

const { _, log } = require('basd')
const Crypto = require('@basd/crypto')
const Mnemonic = require('@basd/crypto/mnemonic')
const Merkle = require('@basd/merkle')
const Key = require('@basd/key')
const Srp = require('@basd/srp')
const Sss = require('@basd/sss')
const CryptoTime = require('@basd/time')
const Ratchet = require('@basd/ratchet')
const Handshake = require('@basd/handshake')

/**
 * The Crpdo class extends the functionalities provided by the 
 * Crypto module. It re-exports the Crypto, Key, and Merkle 
 * submodules under a common namespace.
 * 
 * @extends Crypto
 */
class Crpdo extends Crypto {
  /**
   * The Crypto module provides a variety of cryptographic utilities,
   * including functions for encryption, decryption, and key manipulation.
   * @static
   * @type {Crypto}
   */
  static Crypto = Crpdo

  /**
   * The Key module provides functionalities for creating and manipulating
   * cryptographic keys, including creating signing keys, boxing keys,
   * and multi-keys.
   * @static
   * @type {Key}
   */
  static Key = Key

  /**
   * The Merkle module is responsible for creating Merkle trees, which 
   * are fundamental data structures in various cryptographic applications.
   * @static
   * @type {Merkle}
   */
  static Merkle = Merkle

  /**
   * The Srp (Secure Remote Password) module provides functionalities for
   * securely verifying passwords over a non-secure network connection 
   * without sending the password itself.
   * @static
   * @type {Srp}
   */
  static Srp = Srp
}

module.exports = Crpdo



// dev

// const Key = require('@basd/key')
// const Key = require('../modules/key')

async function test() {
  const key = new Key('foo')
  const child = key.derive([44, 0, '0'])
  // const child = key.derive(`44'/0'/0'/0`)
  // const child = key.derive("goat'.cheese")
  const first = child.ratchet()
  const second = child.ratchet()
  // const child = key.sub('m/goat/cheese')
  // const sub = key.derive('foo')
  // const first = sub.getKey(0)
  // const sig = key.hd.sign('foo')
  _.print(key)
  // log(first.hd.deriveSoftened())
  // log(first.hd.deriveSoftenedPublicKey())
  // _.print(key.hd.verify('foo', sig, key.hd.publicKey))
  // log(_.getMethods(Crpdo, ['bind', 'toString', 'apply', 'call']))
  // const goat = Crpdo.hash({ foo: 'bar' })
  // log(Mnemonic.createMnemonic('foo'))
}

_.executor(test)
