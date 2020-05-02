export class Eratosthenes{
    
    private higher: number = 0; // highest number to be checked
    private current: number = 2; // controls the number to be verified
    private list: number[] = []; // list of primes
    private index = 0;  // controls the index for assigning the next number to be checked

    constructor(num: number){
        if ( num > 0 ) {
            this.higher = +Math.sqrt(num).toFixed();
            for (let i = 2; i <= num; i++) this.list.push(i);
            while(this.current <= this.higher){
                this.list = this.list.filter(num => this.isMultiple(this.current, num));
                this.current = this.primes[this.index++];
            }
        }
    }
    get primes(){ return this.list }
    private isMultiple = (a: number, b: number) => a === b || !(b % a === 0);
}