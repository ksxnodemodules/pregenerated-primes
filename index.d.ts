import * as DP from './prime'
import * as SP from './prime.static.fs'

declare namespace index {
  export function isPrime(x: number): boolean;
  export const all: number[];

  namespace sub {
    export const allGeneratedPrimes: number[];
    export const dynamicPrimes = DP;
    export const staticPrimes = SP;
  }
}

export = index;
