'use strict'
const path = require('path')
const {readFileSync} = require('fs')
const filename = path.resolve(__dirname, '.static-prime')

const get = () => readFileSync(filename, 'utf8')
  .split(/\r?\n/)
  .filter(Boolean)
  .map(x => Number(x))

let once = () => {
  const value = get()
  once = () => value
  return value
}

module.exports = {
  get,
  get once () {
    return once()
  }
}
