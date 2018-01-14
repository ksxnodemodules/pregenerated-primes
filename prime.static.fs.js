'use strict'
const path = require('path')
const {writeFileSync} = require('fs')
const prime = require('./prime.js')
const allGeneratedPrimes = require('./all-generated-primes')
const filename = path.resolve(__dirname, '.static-prime')

let staticPrimeNumbers
updateArray()

function updateArray () {
  staticPrimeNumbers = allGeneratedPrimes.get()
}

function updateFile (count) {
  staticPrimeNumbers = Array.from(prime.traverseQuantity(count))

  const filecontent = staticPrimeNumbers
    .map(x => '0x' + x.toString(16).toUpperCase())
    .join('\n')

  writeFileSync(filename, filecontent)
}

function primeAt (index) {
  if (index >= staticPrimeNumbers.length) updateFile(index + 1)
  return staticPrimeNumbers[index]
}

module.exports = {
  updateFile,
  primeAt
}
