'use strict'
const list = [3]
const sqr = x => x * x
const cloneArray = array => array.map(x => x)

function * generate () {
  let lowerLimit = 3 // where i start from
  let upperLimitSqrt = 3 // whose squared value where i come to

  for (; ;) {
    const upperLimit = sqr(upperLimitSqrt)

    for (let i = lowerLimit; i <= upperLimit; i += 2) {
      if (list.every(j => i % j)) {
        list.push(i)
        yield i
      }
    }

    lowerLimit = upperLimit
    upperLimitSqrt += 2
  }
}

function * concatIterable (...iterables) {
  for (const x of iterables) yield * x
}

const createIterable = () => concatIterable([2], cloneArray(list), generate())

function * traverse (condition) {
  for (const x of createIterable()) {
    if (!condition(x)) return
    yield x
  }
}

const traverseRange = upperLimit => traverse(x => x <= upperLimit)

const traverseQuantity = count => traverse(() => {
  if (!count) return false
  count -= 1
  return true
})

function isPrime (x) {
  if (x < 2 || x % 1 !== 0) return false

  for (const y of traverseRange(x)) {
    if (x === y) return true
  }

  return false
}

const primeAt = index =>
  Array.from(traverseQuantity(index + 1))[index]

module.exports = Object.freeze({
  traverse,
  traverseRange,
  traverseQuantity,
  isPrime,
  primeAt,
  get __stat () {
    return Object.freeze({
      generatedQuantity: list.length,
      generatedMaximum: list.slice(-1)[0],
      get generatedNumbers () {
        return cloneArray(list)
      }
    })
  }
})
