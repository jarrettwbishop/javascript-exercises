/*
    Create a function that returns a specific member of the Fibonacci sequence:

    > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

    ```javascript
    fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
    fibonacci(6) // returns 8
    ```
*/

const fibonacci = function(num) {

    if(num < 0) {
        return "OOPS";
    }

    if(num == 0) {
        return 0;
    }
    let preOne = 1;
    let preTwo = 1;

    for (let i = 1; i <= num; i++) {
        if(i > 2) {
            let temp = preOne + preTwo;
            preOne = preTwo;
            preTwo = temp;
        }
    }

    return preTwo;
};

// Do not edit below this line
module.exports = fibonacci;
