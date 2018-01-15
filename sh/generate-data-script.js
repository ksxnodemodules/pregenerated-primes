'use strict'
const path = require('path')
const fs = require('fs')
const directory = path.dirname(__dirname)
const datafile = path.resolve(directory, '.static-prime')
const targetfilejs = path.join(directory, 'prime.static.min.js')
const targetfilejson = path.join(directory, 'prime.static.min.json')
const text = fs.readFileSync(datafile, 'utf8')
const array = text.split(/[\r\n]/).map(x => Number(x))
const outputjs = `module.exports = [${array.join(',')}]`
const outputjson = JSON.stringify(array)
fs.writeFileSync(targetfilejs, outputjs)
fs.writeFileSync(targetfilejson, outputjson)
