'use strict'
const path = require('path')
const {writeFileSync, readFileSync} = require('fs')
const prime = require('./prime.js')
const filename = path.resolve(__dirname, '.static-prime')

let staticPrimeNumbers
updateArray()

function updateArray () {
  staticPrimeNumbers = readFileSync(filename, 'utf8')
    .split(/\r\n/)
    .filter(Boolean)
    .map(x => Number(x))
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
