const myRemove = require('./myRemove');

describe('the function myRemove(arr, item) receives an array arr and returns a copy of this array without the element item (if it exists)', () => {
  it('myRemove([1, 2, 3, 4], 3) returns [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  it("myRemove([1, 2, 3, 4], 3) doesn't returns [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('myRemove([1, 2, 3, 4], 5) returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})