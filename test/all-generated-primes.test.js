'use strict'
const {isPrime} = require('../prime')
const allGeneratedPrimes = require('../all-generated-primes')
const expectNumberArray = x => x.forEach(x => expect(typeof x).toBe('number'))
const expectPrimeArray = x => x.forEach(x => expect(isPrime(x)).toBe(true))

const typeCheckArray = array => {
  const {length} = array

  const random = Array(20)
    .fill(null)
    .map(() => Math.floor(Math.random() * length))
    .map(x => array[x])

  return [
    ...array.slice(0, 20),
    ...array.slice(-20),
    ...random
  ]
}

const testArray = fn => {
  it('should be an array of numbers', () => expectNumberArray(typeCheckArray(fn())))
  it('should be an array of primes', () => expectPrimeArray(fn().slice(0, 60)))
}

testArray(() => allGeneratedPrimes.once)
testArray(() => allGeneratedPrimes.get())
