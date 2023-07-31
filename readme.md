# crpdo

> those who know, know

[![npm](https://img.shields.io/npm/v/crpdo?style=flat&logo=npm)](https://www.npmjs.com/package/crpdo)
[![pipeline](https://gitlab.com/basedwon/crpdo/badges/master/pipeline.svg)](https://gitlab.com/basedwon/crpdo/-/pipelines)
[![license](https://img.shields.io/npm/l/crpdo)](https://gitlab.com/basedwon/crpdo/-/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dw/crpdo)](https://www.npmjs.com/package/crpdo)

[![Gitlab](https://img.shields.io/badge/Gitlab%20-%20?logo=gitlab&color=%23383a40)](https://gitlab.com/basedwon/crpdo)
[![Twitter](https://img.shields.io/badge/@crpdowon%20-%20?logo=twitter&color=%23383a40)](https://twitter.com/basdwon)
[![Discord](https://img.shields.io/badge/Basedwon%20-%20?logo=discord&color=%23383a40)](https://discordapp.com/users/basedwon)

Crpdo is a comprehensive cryptographic library that simplifies complex cryptographic tasks. It comprises multiple independent yet interrelated submodules, specifically, Crypto, Key, and Merkle, which work in harmony to enable high-level cryptographic functionalities.

## Features

- A vast set of cryptographic methods
- Includes `coins`, `crypto`, `handshake`, `key`, `merkle`, `ratchet`, `srp`, `sss`, and `time` modules.
- Extensive test coverage to ensure functionality and security
- Cross-environment support: Node.js and the browser

## Modules

This project re-exports these submodules under a common namespace, providing a simple interface to interact with various cryptographic methods.

### Crypto

The Crypto module, `@crpdo/crypto`, provides a variety of cryptographic utilities. It serves as the foundation of the Crpdo library and is extended by the Crpdo class. It includes functions for encryption, decryption, and key manipulation.

### Key

The Key module, `@crpdo/key`, provides functionalities to create and manipulate cryptographic keys. This includes creating signing keys, boxing keys, and multi-keys.

### Merkle

The Merkle module, `@crpdo/merkle`, is responsible for creating Merkle trees, which are fundamental data structures in various cryptographic applications. 

### Time

The Time module, `@crpdo/merkle`, provides time-related utilities primarily dealing with time-based one-time password (TOTP) generation, verification, and Network Time Protocol (NTP) calculations.

### Coins

The Coins module, `@crpdo/coins`, contains methods for working with different types of cryptocurrencies like getting coin type IDs, deriving paths for a coin symbol, and getting Bitcoin or Ethereum addresses for given public keys, among other tasks.

## Installation

```sh
npm install crpdo
```

## Usage

Import the crpdo library directly:

```js
const Crypto = require('crpdo')

const hash = Crypto.hash('foo')
// much much more...
const fooHash = hash('foo')
// many algos
const secureFoo = hash.sha3('foo')
```

Import the submodules and crpdo through destructuring:

```js
const { Crypto, Key, Merkle } = require('crpdo')
// Now you can use Crypto, Key, and Merkle...
```

```js
const { Time, Crypto } = Crypto

const secret = 'my_secret'

// Generate a TOTP
const totp = Time.code(secret)
console.log(`Generated TOTP: ${totp}`)

// Validate the TOTP
const isValid = Time.verify(totp, secret)
console.log(`Valid TOTP: ${isValid}`) // => Valid TOTP: true

// Many more functions...
```

## Documentation

- [API Reference](/docs/api.md)

## Tests

In order to run the test suite, simply clone the repository and install its dependencies:

```bash
git clone https://gitlab.com/basedwon/crpdo.git
cd basd
npm install
```

To run the tests:

```bash
npm test
```

## Contributing

Thank you! Please see our [contributing guidelines](/docs/contributing.md) for details.

## Donations

If you find this project useful and want to help support further development, please send us some coin. We greatly appreciate any and all contributions. Thank you!

**Bitcoin (BTC):**
```
1JUb1yNFH6wjGekRUW6Dfgyg4J4h6wKKdF
```

**Monero (XMR):**
```
46uV2fMZT3EWkBrGUgszJCcbqFqEvqrB4bZBJwsbx7yA8e2WBakXzJSUK8aqT4GoqERzbg4oKT2SiPeCgjzVH6VpSQ5y7KQ
```

## License

crpdo is [MIT licensed](https://gitlab.com/basedwon/crpdo/-/blob/master/LICENSE).
