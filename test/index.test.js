'use strict'
const index = require('../index')
const {all} = index

describe('index.isPrime', () => {
  it('should throw an error when out of range', () => {
    expect(() => index.isPrime(all.length + 0)).toThrow(RangeError)
    expect(() => index.isPrime(all.length + 1)).toThrow(RangeError)
    expect(() => index.isPrime(all.length + 2)).toThrow(RangeError)
    expect(() => index.isPrime(all.length + 3)).toThrow(RangeError)
    expect(() => index.isPrime(all.length + 4)).toThrow(RangeError)
  })

  it('should return true on primes', () => {
    expect(index.isPrime(2)).toBe(true)
    expect(index.isPrime(3)).toBe(true)
    expect(index.isPrime(5)).toBe(true)
    expect(index.isPrime(7)).toBe(true)
  })

  it('should return false on composites', () => {
    expect(index.isPrime(0)).toBe(false)
    expect(index.isPrime(1)).toBe(false)
    expect(index.isPrime(4)).toBe(false)
    expect(index.isPrime(6)).toBe(false)
  })
})
