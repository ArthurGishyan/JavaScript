// there is 3 types of variable declaration

let variableLet = 'you declorated var by let' //you can change its value

const variableConst = 'you declorated var by const' //constant variable, you cant change its value

var varVariable = 'you declorated var by var' //we will see difference between var and let in another file

//we can declorate many variables in one line
let age = +prompt('enter your age'), heigth = 175
console.log(age, heigth);
console.log(typeof(age)); //number

//we cant use special symbols during variable creating except to $ and _
let $ = 'dollar'
console.log($); //dollar

let _ = 'underscore'
console.log(_); //underscore
