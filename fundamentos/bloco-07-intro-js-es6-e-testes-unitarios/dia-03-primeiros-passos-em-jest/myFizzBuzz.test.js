const myFizzBuzz = require('./myFizzBuzz');

describe('the function myFizzBuzz(num) receives a number and returns "fizzbuzz" if the number is divisible by 3 and 5, returns "fizz" if the number is divisible only by 3, returns "buzz" if the number is divisible only by 5, returns the number itself if it isn\'t divisible by 3 or 5 and returns false if the num isn\'t a number', () => {
  it('myFizzBuzz(15) returns "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('myFizzBuzz(6) returns "fizz"', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  })

  it('myFizzBuzz(10) returns "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })

  it('myFizzBuzz(7) returns 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })

  it('myFizzBuzz("a") returns false', () => {
    expect(myFizzBuzz('a')).toBe(false); //toBeFalsy()?
  })
})