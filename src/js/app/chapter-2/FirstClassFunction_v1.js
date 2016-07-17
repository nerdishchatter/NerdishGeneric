var hi = function(name) {
  return 'Hi ' + name;
};

var greeting = function(name) {
  return hi(name);
};

var result2 = hi('jonas');
var result1 = greeting('jonas');

console.log(result2 === result1)

//This concludes that whereever we can use greeting, we can just use hi funcion
