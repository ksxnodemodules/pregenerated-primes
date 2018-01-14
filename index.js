'use strict'
const allGeneratedPrimes = require('./all-generated-primes')

const isPrime = x => {
  const {once} = allGeneratedPrimes
  if (x >= once.length) throw new RangeError(`Out of range: ${x} ≥ ${once.length}`)
  return once.includes(x)
}

module.exports = {
  isPrime,
  get all () {
    return allGeneratedPrimes.once
  },
  sub: {
    allGeneratedPrimes,
    dynamicPrimes: require('./prime'),
    staticPrimes: require('./prime.static.fs')
  }
}
