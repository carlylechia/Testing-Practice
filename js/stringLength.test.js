const { expect } = require('@jest/globals')
const { test } = require('picomatch')
const stringLength = require('./stringLength')

it('count string characters', () => {
  expect(stringLength('string')).toBe(6)
})