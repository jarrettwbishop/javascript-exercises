const removeFromArray = function(arr) {
    // Turn arguments[0] into an array
    let givenArr = arr;

    // For each arguments[1+]; Check if item in array then remove from array
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < givenArr.length; j++) {
            let indexOfArr = givenArr.indexOf(arguments[i]);
            if (indexOfArr >= 0) {
                arr.splice(indexOfArr, 1)
            }
        }
    }

    return givenArr;
};

// Do not edit below this line
module.exports = removeFromArray;
