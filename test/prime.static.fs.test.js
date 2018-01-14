'use strict'
const isPrimeNumber = require('is-prime-number')
const staticPrime = require('../prime.static.fs')

const expectPrimeArray = iter =>
  Array.from(iter).forEach(x => expect(isPrimeNumber(x)).toBe(true))

const expectNumberArray = iter =>
  Array.from(iter).forEach(x => expect(typeof x).toBe('number'))

describe('staticPrime.primeAt', () => {
  const primes = [2, 3, 5, 7, 11, 13]
  const fn = () => primes.map((_, i) => staticPrime.primeAt(i))

  it('should returns an iterator of numbers', () => expectNumberArray(fn()))
  it('should returns an iterator of primes', () => expectPrimeArray(fn()))
  it('should matches', () => expect(fn()).toEqual(primes))
})
