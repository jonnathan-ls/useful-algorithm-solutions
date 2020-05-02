import { Eratosthenes } from './eratosthenes';

export abstract class Sieve{
    public static of = {
        Eratosthenes: (num: number) => new Eratosthenes(num)
    }
}