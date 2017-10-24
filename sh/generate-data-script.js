'use strict'
const path = require('path')
const fs = require('fs')
const directory = path.dirname(__dirname)
const datafile = path.resolve(directory, '.static-prime')
const targetfile = path.join(directory, 'prime.static.min.js')
const text = fs.readFileSync(datafile, 'utf8')
const array = text.split(/[\r\n]/)
const output = `module.exports = [${array.join(',')}]`
fs.writeFileSync(targetfile, output)
