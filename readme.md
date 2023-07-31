# crpdo

> those who know, crpdo

[![npm](https://img.shields.io/npm/v/crpdo?style=flat&logo=npm)](https://www.npmjs.com/package/crpdo)
[![pipeline](https://gitlab.com/basedwon/crpdo/badges/master/pipeline.svg)](https://gitlab.com/basedwon/crpdo/-/pipelines)
[![license](https://img.shields.io/npm/l/crpdo)](https://gitlab.com/basedwon/crpdo/-/blob/master/LICENSE)
[![downloads](https://img.shields.io/npm/dw/crpdo)](https://www.npmjs.com/package/crpdo)

[![Gitlab](https://img.shields.io/badge/Gitlab%20-%20?logo=gitlab&color=%23383a40)](https://gitlab.com/basedwon/crpdo)
[![Github](https://img.shields.io/badge/Github%20-%20?logo=github&color=%23383a40)](https://github.com/basedwon/crpdo)
[![Twitter](https://img.shields.io/badge/@crpdowon%20-%20?logo=twitter&color=%23383a40)](https://twitter.com/basdwon)
[![Discord](https://img.shields.io/badge/Basedwon%20-%20?logo=discord&color=%23383a40)](https://discordapp.com/users/basedwon)

Crpdo, a unified cryptographic library, eases the intricacies of cryptographic tasks by integrating a diverse set of submodules. Each module - Crypto, Key, Merkle, and others - serves a unique purpose, and when combined, they deliver a robust cryptographic solution that caters to various security requirements.

## Features

- Comprehensive suite of cryptographic methods
- Incorporates an array of modules including `coins`, `crypto`, `key`, `merkle` and `time`, and more coming soon
- Extensive test coverage to ensure functionality and security
- Cross-environment support: Node.js and the browser

## Modules

Under a common namespace, Crpdo re-exports these submodules, thus offering a streamlined interface for engaging with a broad array of cryptographic operations.

### Crypto

`@crpdo/crypto`, the Crypto module, constitutes the cornerstone of the Crpdo library, furnishing an assortment of cryptographic utilities. The Crpdo class enhances these functionalities to include encryption, decryption, and key manipulation.

### Key

The Key module, `@crpdo/key`, presents tools to generate and handle cryptographic keys, encompassing the creation of signing keys, boxing keys, and multi-keys.

### Merkle

The Merkle module, `@crpdo/merkle`, focuses on the construction of Merkle trees, a crucial data structure in numerous cryptographic systems. 

### Time

The Time module, `@crpdo/time`, provides utilities revolving around time-based one-time password (TOTP) generation, verification, and Network Time Protocol (NTP) computations.

### Coins

The Coins module, `@crpdo/coins`, offers a host of methods to manage a variety of cryptocurrencies, such as deriving paths for coin symbols, obtaining coin type IDs, and generating Bitcoin or Ethereum addresses for specific public keys.

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
