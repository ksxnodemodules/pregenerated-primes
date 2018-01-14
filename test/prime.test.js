'use strict'
const isPrimeNumber = require('is-prime-number')
const prime = require('../prime')

const expectPrimeArray = iter =>
  Array.from(iter).forEach(x => expect(isPrimeNumber(x)).toBe(true))

const expectNumberArray = iter =>
  Array.from(iter).forEach(x => expect(typeof x).toBe('number'))

const expectIter = iter => expect(typeof iter.next).toBe('function')

const expectPrimeIter = fn => {
  const iter = fn()
  expectIter(iter)
  expectPrimeArray(iter)
}

const expectNumberIter = fn => {
  const iter = fn()
  expectIter(iter)
  expectNumberArray(iter)
}

describe('prime.traverse', () => {
  const fn = () => prime.traverse(x => x < 10)

  it('should returns an iterator of numbers', () => expectNumberIter(fn))
  it('should returns an iterator of primes', () => expectPrimeIter(fn))
})

describe('prime.traverseRange', () => {
  const upper = 20
  const fn = () => prime.traverseRange(upper)

  it('should returns an iterator of numbers', () => expectNumberIter(fn))
  it('should returns an iterator of primes', () => expectPrimeIter(fn))

  it('should be under upper-limit', () => {
    Array
      .from(fn())
      .forEach(x => expect(x).toBeLessThan(upper))
  })
})

describe('prime.traverseQuantity', () => {
  const quantity = 12
  const fn = () => prime.traverseQuantity(quantity)

  it('should returns an iterator of numbers', () => expectNumberIter(fn))
  it('should returns an iterator of primes', () => expectPrimeIter(fn))

  it('should contains exact number of elements', () => {
    expect(Array.from(fn()).length).toBe(quantity)
  })
})

describe('prime.primeAt', () => {
  const primes = [2, 3, 5, 7, 11, 13]
  const fn = () => primes.map((_, i) => prime.primeAt(i))

  it('should returns an iterator of numbers', () => expectNumberArray(fn()))
  it('should returns an iterator of primes', () => expectPrimeArray(fn()))
  it('should matches', () => expect(fn()).toEqual(primes))
})

describe('prime.isPrime', () => {
  const mkobj = (array, fn) => array
    .map(val => [val, fn(val)])
    .reduce((obj, [key, val]) => Object.assign({[key]: val}), {})

  const testArray = (array, val) =>
    expect(mkobj(array, prime.isPrime)).toEqual(mkobj(array, () => val))

  it(
    'should returns true for primes',
    () => testArray([2, 3, 5, 7, 11, 13], true)
  )

  it(
    'should returns false for non-primes',
    () => testArray([0, 1, 4, 6, 8, -1, -2, 0.5, -1.5, Infinity, {}], false)
  )
})
