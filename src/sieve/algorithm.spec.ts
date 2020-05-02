import { Sieve } from './algorithm'
import { Eratosthenes } from './eratosthenes'

test('should contain a property named eratosthenes and its value is a function', () => {
    expect(Sieve.of).toHaveProperty("Eratosthenes");
})

test('should be an instance of the class Eratosthenes ', () => {
    expect(Sieve.of.Eratosthenes(0)).toBeInstanceOf(Eratosthenes);
})
