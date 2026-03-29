// || disuction false if both false
let a = false;
let b = false;

console.log(a || b);

// && true if both true
a = true;
b = true;

console.log(a && b);

// ! not
console.log(!a); //false

//?? it will take b if a is undefined or null
let name = null;
console.log(name ?? 'guest'); //guest
