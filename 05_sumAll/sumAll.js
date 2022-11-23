const sumAll = function(a, b) {
    function compareNumbers(a, b) {
        return a - b;
    }
    let arr = Array.from(arguments).sort(compareNumbers);
    let min = arr[0];
    let max = arr[1];

    if (min < 0 || max < 0) {
        return "ERROR"
    }

    if (isNaN(min) || isNaN(max)) {
        return "ERROR"
    }

    let result = 0
    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
