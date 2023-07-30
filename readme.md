> those who know, know


# crpdo: Cryptographic Library for JS

`crpdo` is a comprehensive Node.js and browser-based cryptography library, offering a wide range of cryptographic functions. It's built upon and extends the capabilities of TweetNaCl, providing an all-encompassing interface to work with various cryptographic methods.

## Features

- A vast set of cryptographic methods
- Includes `coins`, `crypto`, `handshake`, `key`, `merkle`, `ratchet`, `srp`, `sss`, and `time` modules.
- Extensive test coverage to ensure functionality and security
- Cross-environment support: Node.js and the browser

## Installation

To install `crpdo` via npm, you can use the following command:

```bash
npm install crpdo
```

## Usage

```javascript
const crpdo = require('crpdo');

// Example usage here...
```

> NOTE: See individual modules for specific usage examples.

## Modules

- `coins`: This module provides... (Add a brief description of each module)
  + CoinUtils is a utility class containing methods for working with different types of cryptocurrencies as part of the [crpdo](https://github.com/<YourGitHubUserName>/crpdo) project. This module is particularly helpful for tasks like getting coin type IDs, deriving paths for a coin symbol, and getting Bitcoin or Ethereum addresses for given public keys, among other tasks.
- `crypto`: This module provides...
- `handshake`: This module provides...
- `key`: This module provides...
- `merkle`: This module provides...
- `ratchet`: This module provides...
- `srp`: This module provides...
- `sss`: This module provides...
- `time`: This module provides...

See each module's readme for more detailed information.

## Testing

To run the tests:

```bash
npm run test
```

## Contributing

We welcome contributions from the open-source community. Please see [CONTRIBUTING.md](./docs/contributing.md) for more details on how to contribute to the project.

## License

This project is licensed under the terms of the XYZ license. See [LICENSE](LICENSE) for more details.

## Support

For questions, bugs, or feature requests, please open an issue on the GitHub repository.













# Crpdo

Crpdo is a comprehensive cryptographic library that simplifies complex cryptographic tasks. It comprises multiple independent yet interrelated submodules, specifically, Crypto, Key, and Merkle, which work in harmony to enable high-level cryptographic functionalities.

This project re-exports these submodules under a common namespace, providing a simple interface to interact with various cryptographic methods.

## Submodules

### Crypto

The Crypto module, `@basd/crypto`, provides a variety of cryptographic utilities. It serves as the foundation of the Crpdo library and is extended by the Crpdo class. It includes functions for encryption, decryption, and key manipulation.

### Key

The Key module, `@basd/key`, provides functionalities to create and manipulate cryptographic keys. This includes creating signing keys, boxing keys, and multi-keys.

### Merkle

The Merkle module, `@basd/merkle`, is responsible for creating Merkle trees, which are fundamental data structures in various cryptographic applications. 

### Sss

The `@basd/sss` submodule provides a simple API to use Shamir's Secret Sharing scheme by acting as a wrapper around `secrets.js-grempe`.

### Srp

The `@basd/srp` submodule is a part of the `crpdo` project and provides functionalities for Secure Remote Password (SRP) protocol-based authentication.

## Usage

Here is an example on how to use the Crpdo module:

```javascript
const Crpdo = require('crpdo')

const { Crypto, Key, Merkle } = Crpdo

// Now you can use Crypto, Key, and Merkle
```

Please refer to individual module documentation for detailed usage and examples.

## Installation

To install the Crpdo library, run the following command in your project directory:

```bash
npm install crpdo
```

## Contributing

Contributions to the Crpdo project are welcome. Please refer to the CONTRIBUTING.md file for more information.

## License

The Crpdo project is licensed under [MIT license](LICENSE).































# CRPDO - Cryptography in JS

CRPDO is a powerful, modular JavaScript library for cryptography. This library leverages TweetNaCl for various cryptographic functions, with many functionalities modularized using git submodules and separate files and folders.

## Installation

Using npm:

```bash
npm install crpdo
```

## Usage

Require the library in your JavaScript file:

```javascript
const CRPDO = require('crpdo');
```

Use the library to perform various cryptographic functions.

```javascript
const { Time, Crypto } = CRPDO;

const secret = 'my_secret';
const totpGap = 10;
const now = Date.now();

// Generate a TOTP
const totp = Time.code(secret, totpGap, now);
console.log(`Generated TOTP: ${totp}`);

// Generate a hashed time-based code
const hash = Time.hash(secret, totpGap, now);
console.log(`Generated Hash: ${hash}`);

// Perform more functions...
```

## Modules

CRPDO contains multiple modules to perform various cryptographic functions.

* `coins`: Crypto currency related functions.
* `crypto`: Hashing, mnemonic generation, random number generation, and other crypto related functions.
* `handshake`: Functions related to handshake protocol.
* `key`: Key related functionalities including base key, box key, HD key, and signing key.
* `merkle`: Merkle tree related functions.
* `ratchet`: Ratchet protocol related functions.
* `srp`: Secure Remote Password protocol related functions.
* `sss`: Secret Sharing Scheme related functions.
* `time`: Time related utilities, including NTP calculations and token verification.

## Testing

To run the tests for the CRPDO library, first install the development dependencies:

```bash
npm install
```

Then, run the test script:

```bash
npm test
```

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](./docs/contributing.md) before submitting a pull request.

## License

CRPDO is [MIT licensed](./LICENSE).


