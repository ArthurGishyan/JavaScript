//in JS we have 8 primitive data types
//variable can be string and changed into number
let varChange = 'text';
console.log(typeof(varChange)); //string

varChange = 1;
console.log(typeof(varChange)); //number

//we have infinity data type, it is number wich is bigger than other numbers
console.log(1/0); //infinity

//NaN is division error
console.log('string' / 2); //NaN

//any math operation with NaN returns NaN
console.log(NaN * 3); //NaN

//bigInt is created fo contain numbers bigger than (2^53-1) and lower than -(2^53-1)
let bigInt = 1n;

//string decloration 3 types
let stringVar1 = "double quotes"
console.log(stringVar1);

let stringVar2 = 'single quotes'
console.log(stringVar2);

let stringVar3 = `backticks allows us to use variables or expressions in string for example: ${stringVar1}`
console.log(stringVar3);

//boolean type return true or false (1 or 0)
isAdult = true
console.log(typeof(isAdult)); //boolean

isAdult = false
console.log(typeof(isAdult)); //boolean

//Symbol question
