const add = function(...num) {
  let a = num[0];
  let b = num[1];
	return a + b;
};

const subtract = function(...num) {
  let a = num[0];
  let b = num[1];
	return a - b;
};

const sum = function(num) {
  return num.reduce((s, current) => s += current, 0);
};

const multiply = function(...num) {
  return num.reduce((a, b) => a *= b);
};

const power = function(...num) {
	let a = num[0];
  let b = num[1];
  return Math.pow(a,b);
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i > 1; i--){
    num *= i;
  }
  return num
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
