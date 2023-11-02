<a name="module_Crpdo"></a>

## Crpdo
Crpdo is a comprehensive cryptographic library that simplifies 
complex cryptographic tasks. This library is a bundling of four 
submodules: Crypto, Key, Merkle, and Time, which are exported under a 
common namespace.


* [Crpdo](#module_Crpdo)
    * [~Crpdo](#module_Crpdo..Crpdo) ⇐ <code>Crypto</code>
        * [.Super](#module_Crpdo..Crpdo.Super) : <code>Crypto</code>
        * [.Nacl](#module_Crpdo..Crpdo.Nacl) : <code>Nacl</code>
        * [.Crypto](#module_Crpdo..Crpdo.Crypto) : <code>Crypto</code>
        * [.Key](#module_Crpdo..Crpdo.Key) : <code>Key</code>
        * [.Merkle](#module_Crpdo..Crpdo.Merkle) : <code>Merkle</code>
        * [.Time](#module_Crpdo..Crpdo.Time) : <code>Time</code>
        * [.Hash](#module_Crpdo..Crpdo.Hash) : <code>hash</code>

<a name="module_Crpdo..Crpdo"></a>

### Crpdo~Crpdo ⇐ <code>Crypto</code>
The Crpdo class extends the functionalities provided by the 
Crypto module. It re-exports the Crypto, Key, and Merkle 
submodules under a common namespace.

**Kind**: inner class of [<code>Crpdo</code>](#module_Crpdo)  
**Extends**: <code>Crypto</code>  

* [~Crpdo](#module_Crpdo..Crpdo) ⇐ <code>Crypto</code>
    * [.Super](#module_Crpdo..Crpdo.Super) : <code>Crypto</code>
    * [.Nacl](#module_Crpdo..Crpdo.Nacl) : <code>Nacl</code>
    * [.Crypto](#module_Crpdo..Crpdo.Crypto) : <code>Crypto</code>
    * [.Key](#module_Crpdo..Crpdo.Key) : <code>Key</code>
    * [.Merkle](#module_Crpdo..Crpdo.Merkle) : <code>Merkle</code>
    * [.Time](#module_Crpdo..Crpdo.Time) : <code>Time</code>
    * [.Hash](#module_Crpdo..Crpdo.Hash) : <code>hash</code>

<a name="module_Crpdo..Crpdo.Super"></a>

#### Crpdo.Super : <code>Crypto</code>
The "instance" from @crpdo/crypto

**Kind**: static property of [<code>Crpdo</code>](#module_Crpdo..Crpdo)  
<a name="module_Crpdo..Crpdo.Nacl"></a>

#### Crpdo.Nacl : <code>Nacl</code>
TweetNaCl suite of tools

**Kind**: static property of [<code>Crpdo</code>](#module_Crpdo..Crpdo)  
<a name="module_Crpdo..Crpdo.Crypto"></a>

#### Crpdo.Crypto : <code>Crypto</code>
The Crypto module provides a variety of cryptographic utilities,
including functions for encryption, decryption, and key manipulation.

**Kind**: static property of [<code>Crpdo</code>](#module_Crpdo..Crpdo)  
<a name="module_Crpdo..Crpdo.Key"></a>

#### Crpdo.Key : <code>Key</code>
The Key module provides functionalities for creating and manipulating
cryptographic keys, including creating signing keys, boxing keys,
and multi-keys.

**Kind**: static property of [<code>Crpdo</code>](#module_Crpdo..Crpdo)  
<a name="module_Crpdo..Crpdo.Merkle"></a>

#### Crpdo.Merkle : <code>Merkle</code>
The Merkle module is responsible for creating Merkle trees, which 
are fundamental data structures in various cryptographic applications.

**Kind**: static property of [<code>Crpdo</code>](#module_Crpdo..Crpdo)  
<a name="module_Crpdo..Crpdo.Time"></a>

#### Crpdo.Time : <code>Time</code>
The Time module, `@crpdo/time`, provides utilities revolving around
time-based one-time password (TOTP) generation, verification, and 
Network Time Protocol (NTP) computations.

**Kind**: static property of [<code>Crpdo</code>](#module_Crpdo..Crpdo)  
<a name="module_Crpdo..Crpdo.Hash"></a>

#### Crpdo.Hash : <code>hash</code>
The Hash module, provides multiple hashing algorithms

**Kind**: static property of [<code>Crpdo</code>](#module_Crpdo..Crpdo)  
