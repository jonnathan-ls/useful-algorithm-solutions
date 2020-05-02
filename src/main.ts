import { Sieve } from './sieve/algorithm';

let numCurrent: number = 0;
let primes: number[] = [];
let primesFn = (num: number): number[] => {
    if (num > numCurrent) {
        primes = Sieve.of.Eratostenes(num);
        numCurrent = num;
    }
    return primes;
}

export const isPrime = (num: number) => primesFn(num).includes(num);

