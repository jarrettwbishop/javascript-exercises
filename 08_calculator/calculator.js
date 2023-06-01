const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
	
};

const multiply = function(arr) {
  total = arr[0];
  for (i = 1; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(a, b) {
	total = a;
  for (i = 1; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  total = a;
	for (i = a - 1; i > 0; i--) {
   total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
