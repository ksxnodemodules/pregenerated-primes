'use strict'

const get = () => require('./prime.static.min.js')

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
