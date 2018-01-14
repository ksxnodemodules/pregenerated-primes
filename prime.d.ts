declare namespace dynamicPrimes {
  export type Result = Iterator<number>;
  export function traverse(condition: (x: number) => boolean): Result;
  export function traverseRange(upperLimit: number): Result;
  export function traverseQuantity(count: number): Result;
  export function isPrime(x: number): boolean;
  export function primeAt(index: number): number;

  namespace __stat {
    export const generatedQuantity: number;
    export const generatedMaximum: number;
    export const generatedNumbers: number[];
  }
}

export = dynamicPrimes;
