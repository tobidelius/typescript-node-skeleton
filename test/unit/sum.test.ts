import { sum } from '../../src'

describe('sum', () => {
  it('adds two numbers', () => {
    const result = sum(5, 5)
    expect(result).toEqual(10)
  })
})
