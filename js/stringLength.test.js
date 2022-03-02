const { expect } = require('@jest/globals')
const { test } = require('picomatch')
const stringLength = require('./stringLength')

it('count string characters', () => {
  expect(stringLength('string')).toBe(6)
})

it('restrict number of string characters', () => {
  expect(stringLength('i hate you...')).toBe("error")
})

it('restrict number of string characters2', () => {
  expect(stringLength('')).toBe("error")
})