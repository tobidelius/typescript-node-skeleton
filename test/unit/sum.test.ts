import sum from '../../src/index.js'

describe('sum', () => {
  it('adds two numbers', () => {
    const result = sum(5, 5)
    expect(result).toEqual(10)
  })
})
