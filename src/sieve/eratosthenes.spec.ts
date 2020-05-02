import { Eratosthenes } from './eratosthenes'

test('should return an empty array if the number is negative', () => {
    expect(new Eratosthenes(-1).primes).toHaveLength(0);
})

test('should return false if it is not a prime number', () => {
    expect(new Eratosthenes(30).primes.includes(30)).toBeFalsy();
})

test('should not consider 1 as a prime number', () => {
    const primes = new Eratosthenes(-1).primes;
    expect(primes).toHaveLength(0);
    expect(primes.includes(1)).toBeFalsy();
})
  
test('should contain a list of valid prime numbers', () => {
    const expectValues: number[] = new Eratosthenes(100).primes;
    const toBeValues: number[] = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ];
    expect(expectValues).toEqual(toBeValues);
})

test('should not contain a prime number greater than the limit number informed', () => {
    expect(new Eratosthenes(30).primes.includes(31)).toBeFalsy();
})