'use strict'
const once = require('./prime.static.min.json')

module.exports = {
  get: () => once,
  once
}
