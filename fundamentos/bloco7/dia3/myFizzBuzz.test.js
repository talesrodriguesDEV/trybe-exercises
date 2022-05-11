const { myFizzBuzz } = require('./myFizzBuzz');

it('Espera-se que myFizzBuzz(15) retorne "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
})

it('Espera-se que myFizzBuzz(9) retorne "fizz"', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
})

it('Espera-se que myFizzBuzz(10) retorne "buzz"', () => {
  expect(myFizzBuzz(10)).toBe('buzz');
})

it('Espera-se que myFizzBuzz(7) retorne "7"', () => {
  expect(myFizzBuzz(7)).toBe(7);
})

it('Espera-se que myFizzBuzz("15") retorne "false"', () => {
  expect(myFizzBuzz("15")).toBe(false);
})