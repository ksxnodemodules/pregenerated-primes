'use strict'
const path = require('path')
const fs = require('fs-extra')

describe('Generate Data Script', () => {
  const root = path.dirname(__dirname)
  const getpath = filename => path.resolve(root, filename)

  describe('should create prime.static.min.js', () => {
    const filename = getpath('prime.static.min.js')

    it('that is a file', async () => {
      expect((await fs.stat(filename)).isFile()).toBe(true)
    })

    it('that is a valid Node.js module', () => {
      expect(require(filename)).toBeInstanceOf(Array)
    })
  })

  describe('should create prime.static.min.json', () => {
    const filename = getpath('prime.static.min.json')

    it('that is a file', async () => {
      expect((await fs.stat(filename)).isFile()).toBe(true)
    })

    it('that is a valid JSON file', async () => {
      const array = JSON.parse(await fs.readFile(filename, 'utf8'))
      expect(array).toBeInstanceOf(Array)
    })
  })

  it('should create two equal module', async () => {
    expect(
      require(getpath('prime.static.min.js'))
    ).toEqual(
      JSON.parse(
        await fs.readFile(getpath('prime.static.min.json'), 'utf8')
      )
    )
  })
})
