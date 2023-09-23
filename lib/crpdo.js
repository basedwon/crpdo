/**
 * @file crpdo.js
 * 
 * @description Crpdo is a comprehensive cryptographic library that simplifies 
 * complex cryptographic tasks. This library is a bundling of four 
 * submodules: Crypto, Key, Merkle, and Time, which are exported under a 
 * common namespace.
 * 
 * @module Crpdo
 */

const { _, log } = require('basd')
const Crypto = require('@crpdo/crypto')
const Nacl = require('@crpdo/crypto/nacl')
const Merkle = require('@crpdo/merkle')
const Key = require('@crpdo/key')
const Hash = require('@crpdo/crypto/hash')
const Time = require('@crpdo/time')

/**
 * The Crpdo class extends the functionalities provided by the 
 * Crypto module. It re-exports the Crypto, Key, and Merkle 
 * submodules under a common namespace.
 * 
 * @extends Crypto
 */
class Crpdo extends Crypto {
  /**
   * The "instance" from @crpdo/crypto
   * @static
   * @type {Crypto}
   */
  static get Super() { return Crypto }
  // static Super = Crypto

  /**
   * TweetNaCl suite of tools
   * @static
   * @type {Nacl}
   */
  static get Nacl() { return Nacl }
  // static Nacl = Nacl
  static get nacl() { return Nacl }
  // static nacl = Nacl

  /**
   * The Crypto module provides a variety of cryptographic utilities,
   * including functions for encryption, decryption, and key manipulation.
   * @static
   * @type {Crypto}
   */
  static get Crypto() { return Crpdo }
  // static Crypto = Crpdo
  static get crypto() { return Crpdo }
  // static crypto = Crpdo

  /**
   * The Key module provides functionalities for creating and manipulating
   * cryptographic keys, including creating signing keys, boxing keys,
   * and multi-keys.
   * @static
   * @type {Key}
   */
  static get Key() { return Key }
  // static Key = Key
  static get key() { return Key }
  // static key = Key

  /**
   * The Merkle module is responsible for creating Merkle trees, which 
   * are fundamental data structures in various cryptographic applications.
   * @static
   * @type {Merkle}
   */
  static get Merkle() { return Merkle }
  // static Merkle = Merkle
  static get merkle() { return Merkle }
  // static merkle = Merkle

  /**
   * The Time module, `@crpdo/time`, provides utilities revolving around
   * time-based one-time password (TOTP) generation, verification, and 
   * Network Time Protocol (NTP) computations.
   * @static
   * @type {Time}
   */
  static get Time() { return Time }
  // static Time = Time
  static get time() { return Time }
  // static time = Time

  /**
   * The Hash module, provides multiple hashing algorithms
   * @static
   * @type {hash}
   */
  static get Hash() { return Hash }
  // static Hash = Hash
  static get hash() { return Hash }
  // static hash = Hash
}

module.exports = Crpdo
