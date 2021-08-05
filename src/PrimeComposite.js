"use strict";

const isEven = num => num % 2 === 0

const hasFactor = max => {
  for (let i = 2; i < max; i++) { // this can be optimized ;)
    if (max % i === 0) {
      // tapout
      return true
    }
  }
}

const COMPOSITE = 'composite'
const PRIME = 'prime'

const PrimeComposite =
    function (limit) {
      if (limit === 1) return "1";
      let result = "1 prime";

      for (let i = 3; i <= limit; i++) {
        result += " ";

        if (hasFactor(i) && isEven(i)) {
          result += i
        } else if (hasFactor(i)) { // not optimal
          result += COMPOSITE
        } else {
          result += PRIME
        }
      }

      return result;
    };


// hi
// 👋
