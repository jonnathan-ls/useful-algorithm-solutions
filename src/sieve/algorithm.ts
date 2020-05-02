import { Eratosthenes } from './eratosthenes';

export abstract class Sieve{
    public static of = {
        Eratostenes: (num: number) => new Eratosthenes(num).primes
    }
}