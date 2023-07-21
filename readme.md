# Crpdo

Crpdo is a comprehensive cryptographic library built for complex cryptographic tasks. It comprises multiple independent yet interrelated submodules, specifically, Crypto, Key, and Merkle, which work in harmony to enable high-level cryptographic functionalities.

This project re-exports these submodules under a common namespace, providing a simple interface to interact with various cryptographic methods.

## Submodules

### Crypto

The Crypto module, `@basd/crypto`, provides a variety of cryptographic utilities. It serves as the foundation of the Crpdo library and is extended by the Crpdo class. It includes functions for encryption, decryption, and key manipulation.

### Key

The Key module, `@basd/key`, provides functionalities to create and manipulate cryptographic keys. This includes creating signing keys, boxing keys, and multi-keys.

### Merkle

The Merkle module, `@basd/merkle`, is responsible for creating Merkle trees, which are fundamental data structures in various cryptographic applications. 

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
