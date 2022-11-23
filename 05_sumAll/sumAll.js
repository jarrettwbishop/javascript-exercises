const sumAll = function(a, b) {

    if (a < 0 || b < 0) {
        return "ERROR"
    }

    if (typeof a != 'number' || typeof b != 'number') {
        return "ERROR"
    }

    let arr = Array.from(arguments).sort((a,b) => a - b);
    let min = arr[0];
    let max = arr[1];

    let result = 0
    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
