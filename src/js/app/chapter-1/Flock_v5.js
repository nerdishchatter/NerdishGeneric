var add = function(x, y) { return x + y; };
var multiply = function(x, y) { return x * y; };

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var result1 = multiply(flock_b, add(flock_a, flock_a));
var result2 = multiply(flock_a, add(flock_b, flock_b));

console.log(result1)
console.log(result2)

console.log(result2===32)
console.log(result1 === result2)
