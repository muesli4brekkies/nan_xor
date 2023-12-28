let f = (x, y) => 1 / (1 % x / y);
let xor = (x, y) => !f(!f(!f(x, y), x), !f(!f(x, y), y));

console.log(f(Infinity, Infinity));
console.log(f(NaN, NaN));
console.log(f(Infinity, NaN));
console.log(f(NaN, Infinity));

console.log(xor(Infinity, Infinity));
console.log(xor(NaN, NaN));
console.log(xor(Infinity, NaN));
console.log(xor(NaN, Infinity));