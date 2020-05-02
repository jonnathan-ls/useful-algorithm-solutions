export class Eratosthenes{
    
    private higher: number;
    private current: number = 2;
    private list: number[] = [];
    private index = 0;

    constructor(num: number){
        if (num < 0) throw new RangeError("it is not possible to calculate negative values");
        this.higher = +Math.sqrt(num).toFixed();
        for (let i = 2; i <= num; i++) this.list.push(i);
        while(this.current <= this.higher){
            this.list = this.list.filter(num => this.isMultiple(this.current, num));
            this.current = this.primes[this.index++]
        }
    }
    get primes(){ return this.list }
    private isMultiple = (a: number, b: number) => a === b || !(b % a === 0);
}