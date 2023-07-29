const { _, log } = require('basd')
const Pipe = require('basd/pipe')
const Evented = require('basd/evented')

const Crypto = require('../lib/crpdo-node')

async function test() {
  
  // const hex = '02a1633e2e78be181541c2a1e6f3a8aabc6f32a2eb6a7d29351ad230a2aa5e99f2'
  // const bs = _.encode(Buffer.from(hex, 'hex'))
  // log({ bs })

  
  const events = new Evented()
  events.on('data', data => log({ data }))
  events.emit('data', 'foo')
  // const stream = Pipe.line(Pipe(data => log({ data })))
  // stream.push('foo')
  // stream.push('bar')
}

async function testV2() {
  log(Crypto.hash('foo'))
  log(Crypto.hash.md5('foo'))
  log(Crypto.hash.sha1('foo'))
  log(Crypto.hash.sha256('foo'))
  log(Crypto.hash.sha3('foo'))
  log(Crypto.hash.keccak('foo'))
}

async function testV1() {
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
  // log(_.getMethods(Crypto, ['bind', 'toString', 'apply', 'call']))
  // const goat = Crypto.hash({ foo: 'bar' })
  // log(Mnemonic.createMnemonic('foo'))
}

_.executor(test)

