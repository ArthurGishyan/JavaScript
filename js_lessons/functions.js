//we have 4 types of function decloration
//expression
let myFunct = function(a, b) {
    console.log(a + b);
}
myFunct(1,3) //4

//decloration
//we can call decloration function before its structure creation
function newFunct() {
    console.log('this is decloration function');
}

//arrow
const sum = (num1, num2) => num1 + num2;
console.log(sum(5,5));


function exponentiation(a, b) {
    return (5 * (a ** b));
}
console.log(exponentiation(2,2))