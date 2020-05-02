import { isPrime } from './main'

test('should return false if it is not a prime number', () => {
  expect(isPrime(30)).toBeFalsy();
})

test('should return true if it is a prime number', () => {
  expect(isPrime(29)).toBeTruthy();
})